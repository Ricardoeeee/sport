<template>
  <div style="background: linear-gradient(to right, #d98bb0, #6196d2);">
    <div class="garbage">
      <div class="photo">
        <img :src="garbage.img0" alt="垃圾">
      </div>
      <div class="title">
        <p>球类运动</p>
      </div>
      <div class="lanauge">
        <p>
            球类运动是以球作为基础的运动或游戏。以目标进行分类使用球棒(杆)，如棒球、高尔夫球、槌球及板球等。双个球门，如篮球、所有形式的足球、曲棍球，或长曲棍球。空中击球，如排球及网球。击中指定目标，如保龄球。</p>
      </div>

    </div>

    <div id="ccc">
      <div class="title2">
        <h2>精选球类</h2>
        <p><span>————————————</span> &nbsp;&nbsp;携手同行，与您一起塑造未来&nbsp;&nbsp; <span>————————————</span></p>
      </div>
      <div class="hd">
        <ul>
          <li class="on" @mouseover="addClass($event);show1='display:block'"><a
              href="javascript:void(0);">篮球</a></li>
          <li class="" @mouseover="addClass($event);show2='display:block'"><a
              href="javascript:void(0);">足球</a></li>
          <li class="" @mouseover="addClass($event);show3='display:block'"><a
              href="javascript:void(0);">羽毛球</a></li>
          <li class="" @mouseover="addClass($event);show4='display:block'"><a
              href="javascript:void(0);">乒乓球</a></li>
          <li class="" @mouseover="addClass($event);show5='display:block'"><a
              href="javascript:void(0);">排球</a></li>
        </ul>
      </div>
      <br>
      <div id="bd">
        <div :style="show1">
          <img :src="garbage.img1" class="show_img" alt="1">
          <div class="show_data">
            <h2><em>01</em>篮球</h2>
            <p>篮球（basketball），是以手为中心的身体对抗性体育运动，是奥运会核心比赛项目 。
                1891年12月21日，由美国马萨诸塞州斯普林菲尔德基督教青年会训练学校体育教师詹姆士·奈史密斯发明。1896年，篮球运动传入中国天津。1904年，圣路易斯奥运会上第1次进行了篮球表演赛。1936年，篮球在柏林奥运会中被列为正式比赛项目  ，中国也首次派出篮球队参加奥运会篮球项目。1992年，巴塞罗那奥运会开始，职业选手可以参加奥运会篮球比赛。
            </p>
            <div><a class="bottom01" href="javascript:void(0);" rel="nofollow" target="_blank">在线咨询</a><span>咨询热线：<strong>18637890085</strong></span>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div :style="show2"><img :src="garbage.img2" class="show_img" alt="2">
          <div class="show_data">
            <h2><em>02</em>足球</h2>
            <p>足球（Football[英]、 Soccer[美]）是一项以脚为主，控制和支配球，两支球队按照一定规则在同一块长方形球场上互相进行进攻、防守对抗的体育运动项目。足球的最高组织机构为国际足球联合会，成立于1904年，总部设于瑞士苏黎世。中国最高组织机构是中国足球协会，1955年1月3日成立于北京，因足球运动对抗性强、战术多变、参与人数多等特点，故被称为“世界第一运动”。</p>
            <div><a class="bottom01" href="javascript:void(0);" rel="nofollow" target="_blank">在线咨询</a><span>咨询热线：<strong>18637890085</strong></span>
            </div>
          </div>
        </div>
        <div :style="show3"><img :src="garbage.img3" class="show_img" alt="3">
          <div class="show_data">
            <h2><em>03</em>羽毛球</h2>
            <p>羽毛球（Badminton）是一项隔着球网，使用长柄网状球拍击打用羽毛和软木制作而成的一种小型球类的室内运动项目。羽毛球比赛在长方形的场地上进行，场地中间有网相隔，双方运用各种发球、击球和移动等技战术，将球在网上往返对击，以不使球落在本方有效区域内，或使对方击球失误为胜。羽毛球运动的最高组织机构是世界羽联，1934年在伦敦成立。中国最高组织机构是中国羽毛球协会，1958年9月11日在武汉成立</p>
            <div><a class="bottom01" href="javascript:void(0);" rel="nofollow" target="_blank">在线咨询</a><span>咨询热线：<strong>18637890085</strong></span>
            </div>
          </div>
        </div>
        <div :style="show4"><img :src="garbage.img4" class="show_img" alt="4">
          <div class="show_data">
            <h2><em>04</em>乒乓球</h2>
            <p>乒乓球（table tennis），被称为中国的“国球”，是一种世界流行的球类体育项目，包括进攻、对抗和防守。乒乓球起源于英国，“乒乓球”一名起源自1900年，因其打击时发出“Ping Pong”的声音而得名。在中国大陆以“乒乓球”作为它的官方名称，中国香港及澳门等地区亦同。1926年1月，在德国柏林举行了一次国际乒乓球赛，共有9个国家的64名男运动员参加了比赛。同年12月，国际乒乓球联合会正式成立，并把在伦敦举行的欧洲锦标赛命名为第一届世界乒乓球锦标赛。</p>
            <div><a class="bottom01" href="javascript:void(0);" rel="nofollow" target="_blank">在线咨询</a><span>咨询热线：<strong>18637890085</strong></span>
            </div>
          </div>
        </div>
        <div :style="show5"><img :src="garbage.img5" class="show_img" alt="5">
          <div class="show_data">
            <h2><em>05</em>排球</h2>
            <p>排球（volleyball），是球类运动项目之一，球场长方形，中间隔有高网，比赛双方（每方六人）各占球场的一方，球员用手把球从网上空打来打去。排球运动使用的球，用羊皮或人造革做壳，橡胶做胆，大小和足球相似。
                排球运动源于美国，1895年，美国马萨诸塞州霍利约克市，由韦廉姆·G·摩根发明；1900年左右，排球自美国传入加拿大。1905年，排球传入古巴、巴西、中国等国家，成为当时风靡美洲的一项时尚运动。1949年，首届世界男子排球锦标赛在捷克斯洛伐克的布拉格举办。</p>
            <div><a class="bottom01" href="javascript:void(0);" rel="nofollow" target="_blank">在线咨询</a><span>咨询热线：<strong>18637890085</strong></span>
            </div>
          </div>
        </div>

      </div>

    </div>
<!--    <div class="title2">-->
<!--      <h2>图片识别</h2>-->
<!--      <p><span>————————————</span> &nbsp;&nbsp;携手同行，与您一起塑造未来&nbsp;&nbsp; <span>————————————</span></p>-->
<!--    </div>-->
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
<!--        <div id="data" v-show="show">-->
<!--          <h5>{{this.data1}}</h5>-->
<!--          <h4>{{this.data2}}</h4>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>

</template>

<script>

export default {
  name: "HomeGarbage",
  data() {
    return {
      file: null,
      imageSrc: '',
      loadingStatus: false,
      show1: "display:block",
      show2: "display:none",
      show3: "display:none",
      show4: "display:none",
      show5: "display:none",
      garbage: {
        img0: require("@/assets/ball/球类运动.jpg"),
        img1: require("@/assets/ball/篮球.jpg"),
        img2: require("@/assets/ball/足球.jpg"),
        img3: require("@/assets/ball/羽毛球.jpg"),
        img4: require("@/assets/ball/乒乓球.jpg"),
        img5: require("@/assets/ball/排球.jpg"),
      },
      data1:"",
      data2:"",
      show:false,
    }
  },
  methods: {
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
      this.axios.post("/img/garbage", param, {'Content-Type': 'multipart'}
      ).then((res) => {
        this.data1=res.data
        this.show=true
        this.axios.get("/img/fanyi",{params:{data:this.data1}}).then((res)=>{
          console.log(res.data)
          this.data2=res.data
        })
      })
    },
    addClass($event) {
      var un = new Date().getTime();
      while (new Date().getTime() < un + 165) {
        $event.currentTarget.parentElement.getElementsByClassName("on")[0].className = ''
        this.show1 = "display:none";
        this.show2 = "display:none";
        this.show3 = "display:none";
        this.show4 = "display:none";
        this.show5 = "display:none";
        $event.currentTarget.className = 'on';
      }

    },

  }
}
</script>

<style scoped>
.garbage {
  position: relative;
  height: 520px;
}

.photo {
  padding-left: 200px;
  width: 860px;
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
