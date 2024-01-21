<template>
  <TabPane label="游客登陆" icon="logo-snapchat">
    <div class="demo-login">
      <Login @on-submit="handleSubmit">
        <UserName name="username" placeholder="请输入昵称"/>
        <Submit/>
      </Login>
    </div>
  </TabPane>
</template>

<script>
export default {
  name: "LoginTourist",
  methods:{
    handleSubmit (valid, { username }) {
      if (valid) {
        this.$Message['success']({
          background: true,
          content: '登陆成功！'
        });
        localStorage.setItem('user', username);
        this.$router.push('/HomeMain')
      }
    }
  }
}
</script>

<style scoped>
.demo-login{
  width: 400px;
  margin: 0 auto !important;
}
</style>