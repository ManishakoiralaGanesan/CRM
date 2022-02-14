<template>
  <div id="container">
    <form action="">
      <h1>Login</h1>
      <div class="input-container">
        <i class="fa fa-user icon"></i>
        <input type="text" placeholder="User Name" /> <br />
      </div>
      <div class="input-container">
        <i class="fa fa-key icon"></i>
        <input :type="password" placeholder="Password" />
        <i
          class="fa fa-fw fa-eye field-icon toggle-password"
          @click="toggleEye()"
        ></i
        ><br />
      </div>
      <a href="">Forget Password?</a><br />
      <div class="buttons">
        <input id="btn" type="button" value="Login" />
        <input id="btn" type="button" value="Reset" />
      </div>
    </form>
  </div>
</template>
<style scoped>
#container {
  border: 1px solid white;
  margin-left: 600px;
  width: 30%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  padding: 6px 16px;
}
input {
  border: 2px solid lightgray;
  width: 400px;
  height: 50px;
  margin: 15px;
  padding: 10px;
}
a {
  float: right;
}
#btn {
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
  width: 95px;
  height: 39px;
  padding: 0;
  margin-left: 80px;
  background-color: rgb(250, 248, 248);
  border-radius: 5px;
  font-style: bold;
}
#btn:hover {
  background-color: rgb(224, 221, 221);
}
h1 {
  text-align: center;
}
.icon {
  padding: 30px;
  color: black;
  min-width: 50px;
  text-align: center;
  width: 10%;
  margin-bottom: 15px;
}
.input-container {
  display: flex;
}
.field-icon {
  float: right;
  margin-left: -50px;
  margin-top: 30px;
  position: relative;
  z-index: 2;
}
</style>
<script>
export default {
  data() {
    return {
      password: "password",
    };
  },
  methods: {
    toggleEye() {
      this.password = this.password === "password" ? "text" : "password";
    },
  },
};
</script>