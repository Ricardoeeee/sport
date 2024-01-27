<template>
  <div id="tj" style="background: linear-gradient(to right, #7c83d0, #9fbbd7);">
    <div class="form" v-if="show">
      <Space direction="vertical" type="flex" size="large">
        <span>请输入身高:</span>
        <Input v-model="height" placeholder="请输入身高" style="width: 300px;" />
        <span>请输入体重:</span>
        <Input v-model="weight" placeholder="请输入体重" style="width: 300px" />
        <Button type="primary" size="large" @click="recommend">开始推荐</Button>
      </Space>
    </div>
    <div class="form" v-else>
      <p>为你推荐如下：</p>
      <p>户外运动</p>
    </div>

  </div>
</template>

<script>
import {Space,Button} from "view-ui-plus";

export default {
  name: "HomeRecommend",
  components: {Space,Button},
  data(){
    return{
      height:null,
      weight:null,
      show:true,
    }
  },
  methods:{
    recommend(){
      this.show = false
    }
  }
}
</script>

<style scoped>
#tj{
  width: 100%;
  height: 90vh;
}
.form{
  width: 50%;
  margin:auto;
  padding-top: 200px;
  text-align: center;
  font-size: 30px;
}
</style>
