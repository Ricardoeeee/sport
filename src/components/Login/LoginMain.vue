<template>
  <div style="position: relative">
    <LoginBackground></LoginBackground>
    <div id="login">
      <Tabs>
        <LoginAccount></LoginAccount>
        <LoginMobile></LoginMobile>
        <LoginTourist></LoginTourist>
      </Tabs>

    </div>
  </div>

</template>

<script>

import LoginMobile from "@/components/Login/LoginMobile";
import LoginTourist from "@/components/Login/LoginTourist";
import LoginBackground from "@/components/Login/LoginBackground";
import LoginAccount from "@/components/Login/LoginAccount";
export default {
  name: "LoginMain",
  components: {LoginAccount, LoginBackground, LoginTourist, LoginMobile},

  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>



#login {
  position: absolute;
  height: 100%;
  width: 26%;
  right: 100px;
  margin-top: 15%;
}
</style>