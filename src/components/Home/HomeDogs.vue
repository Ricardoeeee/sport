<template>
  <div id="bg">
    <div class="dog">
      <div class="photo">
        <img :src="flowers.img0" alt="狗">
      </div>
      <div class="title">
        <p>户外运动</p>
      </div>
      <div class="lanauge">
        <p>户外运动，是一组在自然环境举行的带有探险或体验探险的运动项目群。其中包括登山、露营、攀岩、悬崖速降、皮划艇、潜水、帆船、定向运动、等项目，户外运动中多数带有探险性，属于极限和亚极限运动，有很大的挑战性和刺激性，拥抱自然，挑战自我。下面请挑选一个伙伴跟你一起冒险吧</p>
      </div>
    </div>
    <div id="ccc">
      <div class="title2">
        <h2>精选运动</h2>
        <p><span>————————————</span> &nbsp;&nbsp;携手同行，与您一起塑造未来&nbsp;&nbsp; <span>————————————</span></p>
      </div>
      <div class="hd">
        <ul>
          <li class="on" @mouseover="addClass($event);this.show1 = true"><a href="javascript:void(0);">登山</a>
          </li>
          <li class="" @mouseover="addClass($event);this.show2 = true"><a href="javascript:void(0);">攀岩</a>
          </li>
          <li class="" @mouseover="addClass($event);this.show3 = true"><a href="javascript:void(0);">露营</a>
          </li>
          <li class="" @mouseover="addClass($event);this.show4 = true"><a href="javascript:void(0);">潜水</a>
          </li>
          <li class="" @mouseover="addClass($event);this.show5 = true"><a href="javascript:void(0);">帆船</a>
          </li>
        </ul>
      </div>
      <br>
      <div id="bd">
        <div v-show="show1"><img :src="flowers.img1" class="show_img" alt="1">
          <div class="show_data">
            <h2><em>01</em>登山</h2>
            <p>登山（mountaineering）：是指在特定要求下，运动员徒手或使用专门装备，从低海拔地形向高海拔山峰进行攀登的一项体育活动。登山运动可分为登山探险（也称高山探险）、竞技攀登（包括攀岩、攀冰等）和健身性登山。登山设备要适应登山运动的环境条件，在设计、选材、用料、制作上要尽量使其轻便、坚固、高效，并能一物多用</p>
            <div><router-link class="bottom01" to="/HomeMain/MySpace/ImageUp" rel="nofollow" target="_blank">立即报名</router-link>
            </div>
          </div>
        </div>
        <div v-show="show2"><img :src="flowers.img2" class="show_img" alt="2">
          <div class="show_data">
            <h2><em>02</em>攀岩</h2>
            <p>
              攀岩（Rock Climbing）是一项在天然岩壁或人工岩壁上进行的向上攀爬的运动项目，通常被归类为极限运动。攀岩运动要求人们在各种高度及不同角度的岩壁上，连续完成转身、引体向上、腾挪甚至跳跃等惊险动作，集健身、娱乐、竞技于一身，被称为“峭壁上的芭蕾”。</p>
            <div><router-link class="bottom01" to="/HomeMain/MySpace/ImageUp" rel="nofollow" target="_blank">立即报名</router-link>
            </div>
          </div>
        </div>
        <div v-show="show3"><img :src="flowers.img3" class="show_img" alt="3">
          <div class="show_data">
            <h2><em>03</em>露营</h2>
            <p>露营是一种短时的户外生活方式，是为了工程、军事、测绘、旅游等而特设临时的户外驻扎区，包括营帐、草棚、车房等简易形式的短时户外居住营所。军事露营往往有复杂的构造，细分为生活区、食宿区、通讯区、指挥区等等，</p>
            <div><router-link class="bottom01" to="/HomeMain/MySpace/ImageUp" rel="nofollow" target="_blank">立即报名</router-link>
            </div>
          </div>
        </div>
        <div v-show="show4"><img :src="flowers.img4" class="show_img" alt="4">
          <div class="show_data">
            <h2><em>04</em>潜水</h2>
            <p>潜水的原意是为进行水下查勘、打捞、修理和水下工程等作业而在携带或不携带专业工具的情况下进入水面以下的活动。后潜水逐渐发展成为一项以在水下活动为主要内容，从而达到锻炼身体、休闲娱乐的目的的休闲运动，广为大众所喜爱</p>
            <div><router-link class="bottom01" to="/HomeMain/MySpace/ImageUp" rel="nofollow" target="_blank">立即报名</router-link>
            </div>
          </div>
        </div>
        <div v-show="show5"><img :src="flowers.img5" class="show_img" alt="5">
          <div class="show_data">
            <h2><em>05</em>帆船</h2>
            <p>帆船是依靠自然风力作用于帆上而推动船只前进的，帆船比赛是运动员驾驶帆船在规定的距离内比赛航速的一项运动，帆船运动是水上运动项目之一。</p>
            <div><router-link class="bottom01" to="/HomeMain/MySpace/ImageUp" rel="nofollow" target="_blank">立即报名</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

<!--    <h2 class="w3ls_head"><span>Picture </span>Recognition</h2>-->
<!--    <div id="upload">-->

<!--      <div id="left">-->
<!--        <div class="img">-->
<!--          <img :src="imageSrc" alt="图片">-->
<!--        </div>-->
<!--        <div class="load">-->
<!--          <Upload-->
<!--              :before-upload="handleUpload"-->
<!--              action=""-->
<!--              ref="upload"-->
<!--              max-size="2048"-->
<!--              style="display: inline-block;"-->
<!--          >-->
<!--            <Button icon="ios-cloud-upload-outline">上传图片</Button>-->
<!--          </Upload>-->
<!--          <div v-if="file !== null">Upload file: {{ file.name }}-->
<!--            <Button type="text" @click="upload" :loading="loadingStatus">{{-->
<!--                loadingStatus ? 'Uploading' : '点击上传'-->
<!--              }}-->
<!--            </Button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div id="right">-->
<!--        <div style="text-align: center;font-size: 16px;margin-top: 35px">-->
<!--          <p>-->
<!--            <span>Show Result</span>-->
<!--            <br>-->
<!--            结果展示-->
<!--          </p>-->
<!--        </div>-->
<!--        <div id="data" :style="show">-->
<!--          <h5>{{this.data1}}</h5>-->
<!--          <h4>{{this.data2}}</h4>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <h2 class="w3ls_head"><span>Related </span>Pictures</h2>-->
<!--    <div v-show="data1" v-for="item in dogs" :key="item.id">-->
<!--      <div class="imgs"><img :src="require('D:/图片/train/'+item.path.split('\\')[3])" alt="tp"><h3>{{this.data1}}</h3></div>-->
<!--    </div>-->
  </div>

</template>

<script>
import style from "view-ui-plus/src/directives/style";


export default {
  name: "HomeDogs",
  data() {
    return {
      file: null,
      // modelFileName:null,
      loadingStatus: false,
      imageSrc: '',
      data1:"",
      data2:"",
      dogs:[],
      page:1,
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      flowers: {
        img0: require("@/assets/outdoor/户外运动.jpg"),
        img1: require("@/assets/outdoor/登山.jpg"),
        img2: require("@/assets/outdoor/攀岩.jpg"),
        img3: require("@/assets/outdoor/露营.jpg"),
        img4: require("@/assets/outdoor/潜水.jpg"),
        img5: require("@/assets/outdoor/帆船.jpg"),
      },
      show:false,
    }
  },
  methods: {
    style() {
      return style
    },
    handleUpload(file) {
      this.file = file;
      const file0 = this.file
      const fileReader = new FileReader()
      fileReader.onload = (temp) => {
        this.imageSrc = temp.target.result
      }
      fileReader.readAsDataURL(file0)
      return false;
    },
    upload() {
      this.loadingStatus = true
      // this.$refs.upload.post(this.file)
      const param = new FormData();
      param.append('file', this.file);
      // param.append('modelName',this.modelFileName);

      setTimeout(() => {
        this.file = null;
        this.loadingStatus = false;
        this.$Message.success('Success')
      }, 1500);
      this.axios.post("/img/dogs", param, {'Content-Type': 'multipart'}
      ).then((res) => {
        this.data1=res.data
        this.show="display:block"
        this.axios.get("/img/fanyi",{params:{data:this.data1}}).then((res)=>{
          console.log(res.data)
          this.data2=res.data;
          this.aaa()
        })
      })
    },
    Over($event) {
      $event.currentTarget.parentElement.getElementsByTagName("h2")[0].style.fontSize = "32px";
      $event.currentTarget.parentElement.getElementsByTagName("p")[0].style.fontSize = "22px";
      $event.currentTarget.parentElement.getElementsByTagName("p")[0].style.marginTop = "-20px"
    },
    Out($event) {
      $event.currentTarget.parentElement.getElementsByTagName("h2")[0].style.fontSize = "26px";
      $event.currentTarget.parentElement.getElementsByTagName("p")[0].style.fontSize = "17.5px";
      $event.currentTarget.parentElement.getElementsByTagName("p")[0].style.marginTop = "0px"
    },
    aaa(){
      this.axios.get("/dog/SelectByType",{
        params: {type: this.data1}}).then((res)=>{
          console.log(res.data)
          this.dogs=res.data
      })
    },
    change(i){
      this.page=i
    },
    addClass($event) {
      const un = new Date().getTime();
      while (new Date().getTime() < un + 165) {
        $event.currentTarget.parentElement.getElementsByClassName("on")[0].className = ''
        this.show1 = false;
        this.show2 = false;
        this.show3 = false;
        this.show4 = false;
        this.show5 = false;
        $event.currentTarget.className = 'on';
      }
    }
  }
}
</script>

<style scoped>
#bg {
  background-color: #72abc2;
  /*height: 2000px;*/
}

.dog {
  position: relative;
  height: 520px;

}

.photo {
  width: 700px;
  height: 491px;
}

.photo img {
  //margin-left: 200px;
  width: 700px;
  height: 491px;
}

.title {
  position: absolute;
  display: inline-block;
  color: #333333;
  font-size: 24px;
  font-weight: 700;
  border-top: 3px solid #8fc320;
  border-bottom: 3px solid #8fc320;
  padding: 10px 0;
  right: 450px;
  top: 25px;
}

.lanauge {
  position: absolute;
  height: 300px;
  width: 500px;
  color: #666666;
  line-height: 38px;
  right: 250px;
  top: 90px;
}

.lanauge p {
  margin: 0 0 10px;
  font-size: 26px;
}

/*----------------*/
#dd {
  width: 1390px;
  height: 825px;
  margin: 20px auto;
}

.grid-item {
  float: left;
  margin: 10px;
}

.grid-item figure figcaption, .grid-item figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.grid-item figure figcaption {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid-item figure {
  position: relative;
  overflow: hidden;
  text-align: center;
}

figure.effect-bubba {
  background-color: #9e5406;
}

.cd-hero-slider .selected .cd-full-width figure.effect-bubba h2 {
  padding-top: 20%;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  transform: translate3d(0, -20px, 0);
}


figure.effect-bubba img {
  width: 320px;
  height: 320px;
  opacity: 0.7;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
}


figure.effect-bubba:hover img {
  opacity: 0.4;
}

figure.effect-bubba figcaption::before,
figure.effect-bubba figcaption::after {
  position: absolute;
  top: 30px;
  right: 30px;
  bottom: 30px;
  left: 30px;
  content: '';
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.effect-bubba figcaption::before {
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transform: scale(0, 1);
}

figure.effect-bubba figcaption::after {
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  transform: scale(1, 0);
}

figure.effect-bubba h2 {
  padding-top: 30%;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  transform: translate3d(0, -20px, 0);
}


figure.effect-bubba:hover figcaption::before,
figure.effect-bubba:hover figcaption::after {
  opacity: 1;
  transform: scale(1);
}
/*  ------------------------------标签--------------------------------------*/
.w3ls_head span {
  color: #000;
}
.w3ls_head {
  font-size: 40px;
  color: #ffb262;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 30px;
  letter-spacing: 4px;
  text-transform: capitalize;
  text-align: center;
  padding-bottom: .8em;
  position: relative;

}
.w3ls_head:before, .w3ls_head:after {
  position: absolute;
  background: #ffb262;
  height: 2px;
  content: '';
}
.w3ls_head:before {
  width: 11%;
  bottom: 8%;
  left: 44.5%;
}
.w3ls_head:after {
  width: 18%;
  right: 41%;
  bottom: 0%;
}
/*-------------------------------------------最后------------------------------------------------*/
#upload {
  width: 1200px;
  height: 600px;
  padding: 30px;
  margin: 30px auto;
  background: #d9f1fa;
  border-radius: 5px;
}

#left {
  float: left;
}

.img {
  width: 500px;
  height: 350px;
  border: 1px #58944a dashed;

}

.img img {
  width: 498px;
  height: 348px;
}

.load {
  margin-top: 30px;
  display: block;
}

#right {
  width: 500px;
  height: 450px;
  float: right;
  margin-right: 35px;
  background: snow;
  text-align: center;
}
#right span {
  font-size: 36px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  position: relative;
  padding: 0 70px;
}
#right span:before {
  content: "";
  width: 60px;
  height: 1px;
  background: #333;
  position: absolute;
  left: 0;
  bottom: 14px;
}
#right span:after {
  content: "";
  width: 60px;
  height: 1px;
  background: #333;
  position: absolute;
  right: 0;
  bottom: 14px;
}
#right #data{
  margin-top: 50px;
}
#right #data h5 {
  font-size: 40px;
  color: #ffb262;
}
#right #data h4 {
  font-size: 26px;
  margin: 20px 0;
  color: #000000;
  font-weight: 600;
  text-transform: capitalize;
}
/*-----------------------------------------------------相似--------------------------------------------------------*/
.imgs{
  width: 287px;
  height: 239px;
  float: left;
}
.flower {
  position: relative;
  height: 520px;
}

.photo {
  padding-left: 200px;
  width: 700px;
  height: 401px;
}
.photo img{
  width: 860px;
  height: 401px;
}

.title {
  position: absolute;
  display: inline-block;
  color: #333333;
  font-size: 24px;
  font-weight: 700;
  border-top: 3px solid #8fc320;
  border-bottom: 3px solid #8fc320;
  padding: 10px 0;
  right: 450px;
  top: 25px;
}

.lanauge {
  position: absolute;
  height: 300px;
  width: 500px;
  color: #666666;
  line-height: 38px;
  font-size: 12px;
  right: 250px;
  top: 90px;


}

.lanauge p {
  margin: 0 0 10px;
  font-size: 26px;
}

/*------------------------------------------------------中间--------------------------------------------------------------*/
.title2 {
  text-align: center;
}

.title2 h2 {
  text-align: center;
  margin-top: 60px;
  font-size: 40px;
  color: #e03131;
}

.title2 p {
  color: #585858;
}

.title2 span {
  color: #f5cb41;
}

.hd {
  margin: 20px auto 10px;
  width: 1200px;
  height: 50px;
  line-height: 50px;
  background: #fff;
  border: 1px solid #009b4c;
  border-radius: 5px;
  text-align: center;
}

.hd ul {
  display: inline-block;
  list-style: none;
}

.hd ul li {
  float: left;
  cursor: pointer;
  width: 156px;
}

.hd ul li a {
  display: block;
  padding: 0 38px;
  border-radius: 5px;
  font-size: 16px;
  color: #666;
}

.hd ul li.on a {
  background: #009b4c;
  color: #fff;
  font-weight: bold;
}

#bd {
  width: 1200px;
  height: 500px;
  background: #edfaf4;
  margin: auto;
  border-radius: 5px;
}

.show_img {
  float: left;
  padding: 30px;
  width: 570px;
  height: 390px;
}

.show_data {
  float: left;
  padding: 30px;
  height: 390px;
  width: 500px;

}

.show_data em {
  font-style: normal;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  font-family: Arial, "微软雅黑", serif;
  background: #009b4c;
  padding: 0 5px;
  line-height: 50px;
  height: 50px;
  margin-right: 20px;
  position: relative;
  top: 3px;
}

.show_data h2 {
  border-bottom: 1px solid #009b4c;
  display: inline-block;
  font-size: 25px;
  color: #000;
}

.show_data p {
  font-size: 18px;
  line-height: 25px;
  color: #444;
  margin: 15px 0;
}

.show_data div a.bottom01 {
  /*background: #333;*/
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  background: #009b4c;
}

.show_data div span {
  color: #888;
  margin-left: 10px;
  position: relative;
  top: 5px;
}

.show_data div strong {
  color: #009b4c;
  font-weight: bold;
  font-family: cursive;
  font-size: 30px;
}


/*-------------------------------------------------------结尾-----------------------------------------------------------*/
#upload {
  width: 1200px;
  height: 600px;
  padding: 30px;
  margin: 30px auto;
  background: #d9f1fa;
  border-radius: 5px;
}

#left {
  float: left;
}

.img {
  width: 500px;
  height: 350px;
  border: 1px #58944a dashed;

}

.img img {
  width: 498px;
  height: 348px;
}

.load {
  margin-top: 30px;
  display: block;
}

#right {
  width: 500px;
  height: 450px;
  float: right;
  margin-right: 35px;
  background: snow;
  text-align: center;
}
#right span {
  font-size: 36px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  position: relative;
  padding: 0 70px;
}
#right span:before {
  content: "";
  width: 60px;
  height: 1px;
  background: #333;
  position: absolute;
  left: 0;
  bottom: 14px;
}
#right span:after {
  content: "";
  width: 60px;
  height: 1px;
  background: #333;
  position: absolute;
  right: 0;
  bottom: 14px;
}
#right #data{
  margin-top: 50px;
}
#right #data h5 {
  font-size: 40px;
  color: #ffb262;
}
#right #data h4 {
  font-size: 26px;
  margin: 20px 0;
  color: #000000;
  font-weight: 600;
  text-transform: capitalize;
}
</style>
