<template>
  <v-card max-width="600" class="mx-auto my-12 pa-10">
    <v-card-title>Verify your OTP (One Time Password)</v-card-title>
    <v-divider></v-divider>
    <v-card-content>
      <v-card-subtitle>
        A OTP has been sent to your <br />
        Please Enter the OTP below to verify your Email Address</v-card-subtitle
      >
      <v-text-field outlined v-model="otp" label=""></v-text-field>
    </v-card-content>
    <v-card-actions>
      <v-btn color="primary white-text" @click="verifyOtp">Validate OTP</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { axiosWithoutToken } from "./../utills/axios";
export default {
  data() {
    return {
      otp: "",
      id: this.$route.params.id,
    };
  },
  methods: {
    verifyOtp() {
      console.log(this.id);

      axiosWithoutToken
        .post(`/user/verify`, {
          verify_id: parseInt(this.id),
          code: this.otp,
        })
        .then((response) => {
          console.log(response);
          if (response.data.status == false) {
            return alert(response.data.error.toString());
          }
          this.$router.push("/login");
        })
        .catch((e) => {
          alert(e.message);
        });
    },
  },
};
</script>
