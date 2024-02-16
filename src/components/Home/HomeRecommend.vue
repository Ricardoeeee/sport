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
          <RadioGroup v-model="sex" type="button" button-style="solid" size="large"
                      style="width: 300px;padding-right: 125px">
            <Radio label="1">男</Radio>
            <Radio label="0">女</Radio>
            <Radio label="外星人" disabled></Radio>
          </RadioGroup>
        </div>
        <div class="clo" style="margin-right: 200px">
          <Button type="primary" size="large" @click="recommend">开始推荐</Button>
        </div>


      </Space>
    </div>
    <div class="div2" v-else>
      <p>您的体脂率为{{ this.TZL }}
        <br>为你推荐如下：</p>
      <div>
        <List :header="sport" border>
          <ListItem v-for="(sport,index) in sports" :key="index">
            {{index+1}}&nbsp;
            <img :src="require('@/assets'+sport.path.split('assets')[1])" alt="" style="width: 255px;height: 200px">
            <p style="font-weight: bolder">{{ sport.type }}</p>
            <Ellipsis :text="sport.introduce" :length="100" tooltip />
          </ListItem>
        </List>
      </div>
    </div>

  </div>
</template>

<script>
import {Space, Button, RadioGroup, Radio, ListItem, List, Ellipsis} from "view-ui-plus";

export default {
  name: "HomeRecommend",
  components: {Ellipsis, ListItem, List, Radio, RadioGroup, Space, Button},
  data() {
    return {
      height: null,
      weight: null,
      age: null,
      sex: null,
      show: true,
      sport: '户外运动',
      TZL: null,
      sports: [{path:'src/assets/ball/乒乓球.jpg'}]
    }
  },
  methods: {
    recommend() {
      //转换单位
      this.height = this.height / 100
      this.show = false
      const BMI = this.weight / (this.height ** 2);
      this.TZL = 1.2 * BMI + 0.23 * this.age - 5.4 - 10.8 * this.sex;
      if (this.TZL <= 10) {
        this.sport = '球类运动'
      } else if (this.TZL > 10 && this.TZL <= 21) {
        this.sport = '有氧运动'
      } else if (this.TZL > 21 && this.TZL <= 26) {
        this.sport = '户外运动'
      } else {
        this.sport = '无氧运动'
      }
      this.$Message.success('您的体脂率为:' + this.TZL);
      this.axios.get('/stu/recommend', {params: {father: this.sport}}).then((res) => {
        this.sports = res.data
      })
    }

  }
}
</script>

<style scoped>
#tj {
  width: 100%;
  height: 100%;
}

.form {


  width: 62%;
  padding-top: 100px;
  padding-bottom: 320px;
  font-size: 30px;
}

.clo {
  line-height: 66px;
}

.div2 {
  width: 66%;
  display: block;
  margin: 0 auto;
  padding-top: 100px;
  text-align: center;
  /*background-color: #333;*/
  font-size: 23px;
}
</style>
