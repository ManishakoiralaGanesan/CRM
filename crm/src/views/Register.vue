<template>
  <v-card max-width="600" class="mx-auto my-12 pa-10">
    <v-card-title class="justify-center display-1">Register</v-card-title>

    <v-card-content>
      <v-row>
        <v-col>
          <v-text-field
            label="First Name"
            v-model="items.firstName"
            outlined
            type="name"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Last Name"
            v-model="items.lastName"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field label="Email" v-model="items.email" outlined></v-text-field>
      <v-text-field
        v-model="items.password"
        label="Password"
        :type="show ? 'text' : 'password'"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show = !show"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="items.confirmPassword"
        label="Confirm Password"
        :type="isshow ? 'text' : 'password'"
        :append-icon="isshow ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="isshow = !isshow"
        outlined
      ></v-text-field>
    </v-card-content>
    <v-card-actions>
      <v-btn @click="register">Register</v-btn>
      <v-btn @click="reset">Reset</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { axiosWithoutToken } from "./../utills/axios.js";
export default {
  data() {
    return {
      items: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      id: 0,
      show: false,
      isshow: false,
    };
  },
  methods: {
    register() {
      if (this.items.password != this.items.confirmPassword) {
        alert("Password and confirm password are not same");
      }

      const body = {
        first_name: this.items.firstName,
        last_name: this.items.lastName,
        email: this.items.email,
        password: this.items.password,
      };
      axiosWithoutToken
        .post(`/user/register`, body)
        .then((response) => {
          console.log(response.data);
          if (response.data.status == false) {
            return alert(response.data.error.toString());
          }
          this.id = response.data.data.verify_id;
          console.log(this.id);
          this.$router.push(`/verification-page/${this.id}`);
        })
        .catch((e) => {
          alert(e.message);
        });
    },
    reset() {
      this.items = {};
    },
  },
};
</script>
