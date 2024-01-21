<template>
  <div>
    <Space wrap>
      <Button @click="modal2 = true" style="background:none;border: none;font-weight: bold">忘记密码</Button>
      <Modal
          title="身份验证"
          v-model="modal2"
          class-name="vertical-center-modal"
          footer-hide>
        <div class="demo-login">
          <Login @on-submit="handleSubmit">
            <UserName name="username"/>
            <Mobile name="mobile"/>
            <Captcha name="captcha" :field="['mobile']" @on-get-captcha="handleGetCaptcha"/>
            <Submit>确认</Submit>
          </Login>
        </div>
      </Modal>
    </Space>
      <LoginRestPassword :message="message" :username="username" :phone="phone"></LoginRestPassword>
  </div>
</template>

<script>
import LoginRestPassword from "@/components/Login/LoginRestPassword";

export default {
  name: "LoginAuthentication",
  components: {LoginRestPassword},
  data() {
    return {
      modal2: false,
      username: "",
      mobile: "",
      message:false,
      phone:""
    }
  },
  methods: {
    handleSubmit(valid, {captcha, mobile, username}) {
      if (valid) {
        this.username = username
        this.phone = mobile
        this.axios.get("/user/login2", {
          params: {code: captcha, phone: mobile}
        }).then((res) => {
          console.log(res)
          if (res.data) {
            this.modal2 = false
            this.message = true
          } else {
            this.modal2 = false
            this.$Message['error']({
              background: true,
              content: '验证码错误！'
            });
          }
        })
      }
    },
    handleGetCaptcha(valid, {mobile}) {
      this.$Message.info('获取验证码')
      this.axios.get("/user/getCode", {
        params: {phone: mobile}
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>