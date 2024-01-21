<template>
  <TabPane label="账号登陆" icon="logo-windows">
    <div class="demo-login">
      <Login @on-submit="handleSubmit">
        <UserName name="username"/>
        <Password name="password"/>
        <div class="demo-auto-login">
          <Checkbox v-model="autoLogin" size="large">自动登录</Checkbox>
          <a>
            <LoginAuthentication></LoginAuthentication>
          </a>
        </div>
        <Submit/>
      </Login>
    </div>
  </TabPane>

</template>

<script>
import LoginAuthentication from "@/components/Login/LoginAuthentication";

export default {
  name: "LoginAccount",
  components: {LoginAuthentication},


  data() {
    return {
      autoLogin: true,
    }
  },
  methods: {
    handleSubmit(valid, {username, password}) {
      console.log(valid)
      if (valid) {
        const msg = this.$Message.loading({
          content: 'Loading...',
          duration: 0
        });
        setTimeout(msg, 2800)
        setTimeout(() => {
          this.axios.get("/user/login1", {
            params: {username: username, password: password}
          }).then((res) => {
            console.log(res)
            if (res.data !== null && res.data !== '') {
              this.$Message['success']({
                background: true,
                content: '登陆成功！'
              });
              localStorage.setItem('user', username)
              this.$router.push('/HomeMain')
            } else {
              this.$Message['error']({
                background: true,
                content: '登陆失败 账号或密码错误！'
              });
            }
          })
        }, 3100)

      }
    },
  }

}
</script>

<style scoped>
.demo-login {
  width: 400px;
  margin: 0 auto !important;
}

.demo-auto-login {
  margin-bottom: 24px;
  text-align: left;
}

.demo-auto-login a {
  float: right;
}
</style>