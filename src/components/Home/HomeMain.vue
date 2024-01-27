<template>
    <div >
      <div id="logo">重财运动馆</div>
      <div id="navigation">
        <Menu mode="horizontal" theme="light" active-name="1" @on-select="select">
          <MenuItem name="1" to="/HomeMain/HomePage">
            <Icon type="ios-home"/>
            &nbsp;首页&nbsp;
          </MenuItem>
          <MenuItem name="5" to="/HomeMain/MySpace">
              <Icon type="md-person"/>
              个人中心
          </MenuItem>
          <MenuItem name="8" to="/HomeDates">
            <Icon type="md-person"/>
            数据大屏
          </MenuItem>
          <MenuItem name="2" to="/HomeMain/HomeGarbage">
            <Icon type="ios-basketball"/>
            球类运动
          </MenuItem>
          <MenuItem name="3" to="/HomeMain/HomeFruits">
            <Icon type="md-flame"/>
            无氧运动
          </MenuItem>
          <MenuItem name="4" to="/HomeMain/HomeFlowers">
            <Icon type="ios-leaf"/>
            有氧运动
          </MenuItem>
          <MenuItem name="6" to="/HomeMain/HomeDogs">
            <Icon type="md-paw"/>
            户外运动
          </MenuItem>
          <MenuItem name="7" to="/HomeMain/HomeRecommend">
            <Icon type="md-outlet" />
            智能推荐
          </MenuItem>
        </Menu>
      </div>
      <router-view></router-view>
    </div>


</template>

<script>
import {Icon, Menu, MenuItem} from "view-ui-plus";

export default {
  name: "HomeMain",
    components: {Icon, MenuItem, Menu},
  data() {
    return {}
  },
  methods: {
    select(name) {
      console.log(name)
    },
    toDates(){
      window.open('.')
    }
  }
}
</script>
<style scoped>
#logo {
  float: left;
  height: 61px;
  margin: 8px 0 0 210px;
  font-size: 38px;
  color: #223bd9;
  font-family: STXingkai, SimSun, serif;
  font-weight: bold;
}

#navigation {
  margin-bottom: 2px;
  width: 100%;
  padding-left: 40%;
}
</style>
