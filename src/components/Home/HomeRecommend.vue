<template>
  <div id="tj" style="background: linear-gradient(to right, #7c83d0, #9fbbd7);">
    <div class="form" v-if="show">
      <Space direction="vertical" type="flex" size="large" style="text-align: right;">
        <div class="clo">
          <span>请输入身高(cm):&nbsp;</span>
          <Input v-model="height" size="large" placeholder="请输入身高" style="width: 300px;"/>
        </div>
        <div class="clo">
          <span>请输入体重(kg):&nbsp;</span>
          <Input v-model="weight" size="large" placeholder="请输入体重" style="width: 300px;"/>
        </div>
        <div class="clo">
          <span>请输入年龄:&nbsp;</span>
          <Input v-model="age" size="large" placeholder="请输入年龄" style="width: 300px;"/>
        </div>
        <div class="clo">
          <span>请选择性别:&nbsp;</span>
          <RadioGroup v-model="sex" type="button" button-style="solid" size="large" style="width: 300px;padding-right: 125px">
            <Radio label="男"></Radio>
            <Radio label="女"></Radio>
            <Radio label="外星人" disabled></Radio>
          </RadioGroup>
        </div>
        <div class="clo" style="margin-right: 200px">
          <Button type="primary" size="large" @click="recommend">开始推荐</Button>
        </div>


      </Space>
    </div>
    <div class="form" v-else>
      <p>为你推荐如下：</p>
      <p>{{ sport }}</p>
    </div>

  </div>
</template>

<script>
import {Space, Button, RadioGroup, Radio} from "view-ui-plus";

export default {
  name: "HomeRecommend",
  components: {Radio, RadioGroup, Space, Button},
  data() {
    return {
      height: null,
      weight: null,
      age: null,
      sex: null,
      show: true,
      sport: '户外运动'
    }
  },
  methods: {
    recommend() {
      this.show = false
      const BMI = this.weight / (this.height ** 2);
      const TZL = 1.2 * BMI + 0.23 * this.age - 5.4 - 10.8 * this.sex;
      if (TZL <= 0.1) {
        this.sport = '球类运动'
      } else if (TZL > 0.1 && TZL <= 0.21) {
        this.sport = '有氧运动'
      } else if (TZL > 0.21 && TZL <= 0.26) {
        this.sport = '户外运动'
      } else {
        this.sport = '无氧运动'
      }
    }

  }
}
</script>

<style scoped>
#tj {
  width: 100%;
  height: 90vh;
}

.form {
  width: 62%;
  padding-top: 100px;
  font-size: 30px;
}
.clo{
  line-height: 66px;
}
</style>
