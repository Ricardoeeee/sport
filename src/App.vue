<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>


import LoginMain from "@/components/Login/LoginMain";
import HomeMain from "@/components/Home/HomeMain";
export default {
  name: 'App',
  components:[LoginMain,HomeMain]

}
</script>

<style scoped>
#app{
  font-size: 26px;
  color: blue;
}
</style>
