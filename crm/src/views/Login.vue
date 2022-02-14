<template>
  <div id="container">
    <v-card max-width="600" class="mx-auto my-12">
      <v-card-title class="justify-center">
        <h2>Login</h2>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="userName"
          label="User Name"
          prepend-icon="mdi-account"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          prepend-icon="mdi-lock"
          :type="show ? 'text' : 'password'"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show = !show"
          outlined
        ></v-text-field>
        <v-btn to="/register" text color="primary">Register</v-btn>
        <v-btn text color="red" class="right">Forget Password?</v-btn>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn @click="login" color="primary" width="100" height="40"
          >Login</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
//import { axiosWithoutToken } from "./../utills/axios";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      userName: "",
      password: "",
      show: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
  },
  methods: {
    ...mapActions("auth", {
      storeLogin: "login",
    }),

    login() {
      console.log(this.password, this.userName);

      this.storeLogin({
        password: this.password,
        email: this.userName,
      })
        .then((response) => {
          let status = response.data.status;
          if (status == false) {
            return alert(response.data.error.toString());
          }
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
          this.loginErr = err.message;
          alert(err.message);
        });
    },
  },
};
</script>
<style scoped>
.v-card {
  padding: 20px;
}

.right {
  float: right;
}
</style>
