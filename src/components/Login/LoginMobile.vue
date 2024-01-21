<template>

  <TabPane label="手机号登陆" icon="md-phone-portrait">
    <div class="demo-login">
      <Login @on-submit="handleSubmit">
        <Mobile name="mobile"/>
        <Captcha name="captcha" :field="['mobile']" @on-get-captcha="handleGetCaptcha"/>
        <Submit/>
      </Login>
    </div>
  </TabPane>

</template>

<script>
export default {
  name: "LoginMobile",
  methods:{
    handleSubmit(valid, {mobile, captcha}) {
      if (valid) {
        this.axios.get("/user/login2", {
          params: {code: captcha, phone: mobile}
        }).then((res) => {
          console.log(res)
          if (res.data) {
            this.$Message['success']({
              background: true,
              content: '登陆成功！'
            });
            localStorage.setItem('user', res.data);
            this.$router.push('/HomeMain')
          } else {
            this.$Message['error']({
              background: true,
              content: '登陆失败 请确认验证码是否正确！'
            });
          }
        })
      }
    },
    handleGetCaptcha(valid,{mobile}) {
      this.$Message.info('获取验证码')
      console.log(mobile)
      this.axios.get("/user/getCode", {
        params: {phone: mobile}
      }).then((res) => {
        console.log(res)
      })
    },
  }
}
</script>

<style scoped>
.demo-login{
  width: 400px !important;
  margin: 0 auto;
}
</style>