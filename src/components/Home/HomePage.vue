<template>
  <div>
    <div style="background: linear-gradient(to right, #b4ecec, #ecebe0);">
    <div id="bg">
    </div>
    <div class="myTab_menu">
      <ul>
        <a href="#/HomeMain/HomeGarbage">
          <li @mouseover="MyOver($event)" @mouseout="MyOut($event)">
            <Icon type="ios-basketball" size="126" color="#605d5d"/>
            <p style="color: #605d5d;font-size: 23px">球类运动</p>
          </li>
        </a>
        <a href="#/HomeMain/HomeFruits">
          <li @mouseover="MyOver($event)" @mouseout="MyOut($event)">
            <Icon type="md-flame" size="126" color="#605d5d"/>
            <p style="color: #605d5d;font-size: 23px">无氧运动</p>
          </li>
        </a>
        <a href="#/HomeMain/HomeFlowers">
          <li @mouseover="MyOver($event)" @mouseout="MyOut($event)">
            <Icon type="ios-leaf" size="126" color="#605d5d"/>
            <p style="color: #605d5d;font-size: 23px">有氧运动</p>
          </li>
        </a>
        <a href="#/HomeMain/HomeDogs">
          <li @mouseover="MyOver($event)" @mouseout="MyOut($event)">
            <Icon type="md-paw" size="126" color="#605d5d"/>
            <p style="color: #605d5d;font-size: 23px">户外运动</p>
          </li>
        </a>
      </ul>
    </div>
    <div class="adv">
      <div class="adv-title">
        <p>advantage</p>
      </div>
      <div class="adv-there">
        <span>三大优势</span>
      </div>
    </div>
    <div class="adv-content">
      <div class="adv-first">
        <img :src="adv.img0" alt="1">
        <div class="adv-first-tit">
          <h3>方案优势</h3>
          <p>定制整体化服务解决方案，提供运动馆闭环解决方案，其中精细化专业宣导和运营方案在整个行业中处于领先地位。</p>
        </div>
      </div>
      <div class="adv-second">
        <img :src="adv.img1" alt="2">
        <div class="adv-second-tit">
          <h3>智能优势</h3>
          <p>构建了运动管理系统产业完整闭环，实现了基于闭环的大数据支撑、开放型技术架构，方便各类行业生态接入。</p>
        </div>
      </div>
      <div class="adv-third">
        <img :src="adv.img2" alt="2">
        <div class="adv-third-tit">
          <h3>服务优势</h3>
          <p>
            运动管理系统无论在结构功能方面，还是广告营收方面都进行了精心规划设计，与市场化运作需求紧密贴合，全面满足客户对产品和盈利的需求。</p>
        </div>
      </div>
    </div>
    <div class="new">
      <div class="new-title">
        <p>NEWS</p>
      </div>
      <div class="new-there">
        <span>新闻动态</span>
      </div>
    </div>
    <div class="new-content">
      <ul>
        <li @mouseover="MyOver" @mouseout="MyOut">
          <a href="javascript:void(0);">
            <div class="date">
              <p>10</p>
              <p>20222/9</p>
            </div>
            <div class="news">
              <h3>球类运动</h3>
              <p>
                  球类运动，指的是以球作为比赛基础的运动项目总称。细分到类别嘛，林林总总的球类运动大概可以分为如下四类：使用球棒类、双球门类、空中击球类、击中指定目标类。</p>
            </div>
          </a>
        </li>
        <li @mouseover="MyOver" @mouseout="MyOut">
          <a href="javascript:void(0);">
            <div class="date">
              <p>15</p>
              <p>20222/10</p>
            </div>
            <div class="news">
              <h3>无氧运动</h3>
              <p>
                  无氧运动的分类是从人体运动时骨骼肌的代谢过程分类衍生而来的，无氧运动的概念也都是根据无氧代谢供能系统为主演变而来，例如无氧运动是指人体肌肉在无氧供能代谢状态下进行的运动。</p>
            </div>
          </a>
        </li>
        <li @mouseover="MyOver" @mouseout="MyOut">
          <a href="javascript:void(0);">
            <div class="date">
              <p>11</p>
              <p>2022/11</p>
            </div>
            <div class="news">
              <h3>有氧运动</h3>
              <p>
                  步行、慢跑、滑冰、游泳、骑自行车、打太极拳、跳健身舞、做韵律操等等。有氧运动特点是强度低、有节奏、不中断和持续，时间长。有氧运动是一种恒常运动
                  </p>
            </div>
          </a>
        </li>
        <li @mouseover="MyOver" @mouseout="MyOut">
          <a href="javascript:void(0);">
            <div class="date">
              <p>12</p>
              <p>20222/12</p>
            </div>
            <div class="news">
              <h3>户外运动</h3>
              <p>
                  户外运动，是一组在自然环境举行的带有探险或体验探险的运动项目群。其中包括登山、攀岩、悬崖速降、皮划艇、潜水、帆船、定向运动、等项目，户外运动中多数带有探险性，属于极限和亚极限运动，有很大的挑战性和刺激性，拥抱自然，挑战自我。</p>
            </div>
          </a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>

import style from "view-ui-plus/src/directives/style";

export default {
  name: "HomePage",
  data() {
    return {
      adv: {
        img0: require("@/assets/adv/ys1.png"),
        img1: require("@/assets/adv/ys2.png"),
        img2: require("@/assets/adv/ys3.png"),
      }
    }
  },
  methods: {
    style() {
      return style
    },
    MyOver($event) {
      $event.currentTarget.style.background = "#78b749"
    },
    MyOut($event) {
      $event.currentTarget.style.background = "#f0f3f0"
    }
  }
}
</script>

<style scoped>
#bg {
  background: url("@/assets/摄图网_500991171_重庆市渝中区两江交汇（非企业商用）.jpg") no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  max-height: 500px;
  background-position-y: -100px;
}


.myTab_menu ul {
  width: 1200px;
  margin: 0 auto;
  border: none;
  list-style: none;
}

.myTab_menu ul li {
  padding: 30px;
  float: left;
  width: 300px;
  height: 240px;
  background: #e5f1e5;
  text-align: center;
  border: 1px solid #d1d5d1;
}

.adv {
  margin-top: 350px;

}

.adv .adv-title {
  margin-bottom: 12px;
  font: normal 45px "AvantGarde Bk BT";
  color: #666;
  text-align: center;
}

.adv .adv-there {
  margin-top: 20px;
  font: normal 40px "AvantGarde Bk BT";
  color: green;
  text-align: center;
}

.adv-content {
  margin-top: 30px;
  width: 1920px;
  height: 328px;
}

.adv-content .adv-first {
  width: 278px;
  float: left;
  margin-left: 320px;
}

.adv-first img {
  margin-left: 40px;
}

.adv-first-tit h3 {
  font-size: 24px;
  color: #118c3c;
  margin-top: 20px;
  margin-left: 60px;
}

.adv-first-tit p {
  margin-top: 20px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #666;
}

.adv-content .adv-second {
  width: 278px;
  float: left;
  margin-left: 260px;
}

.adv-second img {
  margin-left: 40px;
}

.adv-second-tit h3 {
  font-size: 24px;
  color: #118c3c;
  margin-top: 20px;
  margin-left: 60px;
}

.adv-second-tit p {
  margin-top: 20px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #666;
}

.adv-content .adv-third {
  width: 278px;
  float: left;
  margin-left: 260px;
}

.adv-third img {
  margin-left: 40px;
}

.adv-third-tit h3 {
  font-size: 24px;
  color: #118c3c;
  margin-top: 20px;
  margin-left: 60px;
}

.adv-third-tit p {
  margin-top: 20px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #666;
}

.new {
  margin-top: 40px;

}

.new-title {
  margin-bottom: 12px;
  font: normal 45px "AvantGarde Bk BT";
  color: #666;
  text-align: center;
}

.new .new-there {
  margin-top: 20px;
  font: normal 40px "AvantGarde Bk BT";
  color: green;
  text-align: center;
}

.new-content ul {
  width: 1400px;
  height: 380px;
  margin-top: 40px;
  margin-left: 320px;
  list-style: none;
}

.new-content ul li {
  display: block;
  float: left;
  width: 650px;
  height: 148px;
  border: 1px solid #ddd;
  background: #f6f6f6;
  margin-top: 30px;
  margin-right: 30px;
}

.new-content h3 {
  font-size: 20px;
}

.new-content p {
  display: block;
}

.new-content a {
  text-decoration: none;
  color: black;
}
.date {
  float: left;
  width: 120px;
  height: 148px;
  padding: 20px;
}

.date p:nth-child(1) {
  font-size: 60px;
  color: #999;
}

.date p:nth-child(2) {
  margin-top: -15px;
  font-size: 16px;
  color: #666;
}

.news {
  float: left;
  width: 500px;
  height: 148px;
}

.news h3 {
  margin: 10px auto;
}
</style>