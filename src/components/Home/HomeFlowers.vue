<template>
  <div>
    <div style="background: linear-gradient(to right, #e75163, #cea5de);">
    <div class="flower">
      <div class="photo">
        <img :src="flowers.img0" alt="花朵">
      </div>
      <div class="title">
        <p>有氧运动</p>
      </div>
      <div class="lanauge">
        <p>
            有氧运动的目的在于增强心肺耐力。在运动时,由于肌肉收缩而需要大量养分和氧气, 同时,氧气的需求量亦增加,呼吸次数比正常为多,肺部的收张程度也较大。所以当运动持续,肌肉长时间收缩,心肺就必须努力地供应氧气分给肌肉，以及运走肌肉中的废物。而这持续性的需求,可提高心肺的耐力。
            </p>
      </div>
    </div>
    <div id="ccc">
      <div class="title2">
        <h2>精选运动</h2>
        <p><span>————————————</span> &nbsp;&nbsp;携手同行，与您一起塑造未来&nbsp;&nbsp; <span>————————————</span></p>
      </div>
      <div class="hd">
        <ul>
          <li class="on" @mouseover="addClass($event);this.show1 = true"><a href="javascript:void(0);">滑冰</a>
          </li>
          <li class="" @mouseover="addClass($event);this.show2 = true"><a href="javascript:void(0);">游泳</a>
          </li>
          <li class="" @mouseover="addClass($event);this.show3 = true"><a href="javascript:void(0);">骑行</a>
          </li>
          <li class="" @mouseover="addClass($event);this.show4 = true"><a href="javascript:void(0);">跳绳</a>
          </li>
          <li class="" @mouseover="addClass($event);this.show5 = true"><a href="javascript:void(0);">慢跑</a>
          </li>
        </ul>
      </div>
      <br>
      <div id="bd">
        <div v-show="show1"><img :src="flowers.img1" class="show_img" alt="1">
          <div class="show_data">
            <h2><em>01</em>滑冰</h2>
            <p>滑冰（skating），亦称“冰嬉”，很多人认为，滑冰是从外国传来的“洋玩意”，事实上，早在宋代，我国就已经有了滑冰运动，不过，那时不叫滑冰，而称之为“冰嬉”。“冰嬉”包括速度滑冰、花样滑冰以及冰上杂技等多种项目。滑冰运动不仅能够锻炼增强人体的平衡能力、协调能力以及身体的柔韧性，同时还可增强人的心肺功能，提高有氧运动能力。它还能够有效地锻炼下肢力量，十分适合开车族。还有很好的减肥效果。</p>
            <div><a class="bottom01" href="javascript:void(0);" rel="nofollow" target="_blank">在线咨询</a><span>咨询热线：<strong>18637890085</strong></span>
            </div>
          </div>
        </div>
        <div v-show="show2"><img :src="flowers.img2" class="show_img" alt="2">
          <div class="show_data">
            <h2><em>02</em>游泳</h2>
            <p>
                游泳（Swimming），是人在水的浮力作用下产生向上漂浮，凭借浮力通过肢体有规律的运动，使身体在水中有规律运动的技能。
                17世纪60年代，英国不少地区的游泳活动就开展得相当活跃。1828年，英国在利物浦乔治码头修造了第一个室内游泳池，这种泳池到19世纪30年代，在英国各大城市相继出现。1837年，在英国伦敦成立了第一个游泳组织，同时举办了英国最早的游泳比赛。1896年，游泳被列为奥运会竞赛项目。</p>
            <div><a class="bottom01" href="javascript:void(0);" rel="nofollow" target="_blank">在线咨询</a><span>咨询热线：<strong>18637890085</strong></span>
            </div>
          </div>
        </div>
        <div v-show="show3"><img :src="flowers.img3" class="show_img" alt="3">
          <div class="show_data">
            <h2><em>03</em>骑行</h2>
            <p>骑行是一种健康自然的运动旅游方式 ，能充分享受旅行过程之美 。一辆单车，一个背包即可出行 ，简单又环保。在不断而来的困难当中体验挑战，在旅途的终点体验成功骑行可以改善记忆力。不论是对于记忆力较强还是较弱的人来说，骑自行车都具有提高记忆力的作用，缓解帕金森，骑车可以改善与运动有关的大脑区域的活动情况。骑行也可以防癌。日常缺乏运动，就是容易致癌的不良行为之一。长期坚持骑自行车可增强心血管功能，尤其是有氧运动，提高人体新陈代谢和免疫力，起到健身防癌的作用。</p>
            <div><a class="bottom01" href="javascript:void(0);" rel="nofollow" target="_blank">在线咨询</a><span>咨询热线：<strong>18637890085</strong></span>
            </div>
          </div>
        </div>
        <div v-show="show4"><img :src="flowers.img4" class="show_img" alt="4">
          <div class="show_data">
            <h2><em>04</em>跳绳</h2>
            <p>跳绳，是一人或众人在一根环摆的绳中做各种跳跃动作的运动游戏。这种游戏唐朝称“透索”，宋称“跳索”，明称“跳百索”、“跳白索”、“跳马索”，清称“绳飞”，清末以后称作“跳绳”。作为一种古老的汉族民俗娱乐活动，南宋以来，每逢佳节都跳绳，家家户户都要比赛。2022年6月6日，2022年亚洲跳绳锦标赛选拔赛(线上)开赛，比赛设项与亚锦赛接轨，设置30秒单摇跳、3分钟单摇跳、个人花样、4*30秒单摇接力、2*30秒双摇接力、两人同步花样、60秒交互绳速度、三人交互绳花样、连续三摇跳等9个项目</p>
            <div><a class="bottom01" href="javascript:void(0);" rel="nofollow" target="_blank">在线咨询</a><span>咨询热线：<strong>18637890085</strong></span>
            </div>
          </div>
        </div>
        <div v-show="show5"><img :src="flowers.img5" class="show_img" alt="5">
          <div class="show_data">
            <h2><em>05</em>慢跑</h2>
            <p>慢跑（英语：Jogging或称Footing），亦称为缓步、缓跑或缓步跑，是一种中等强度的有氧运动，目的在以较慢或中等的节奏来跑完一段相对较长的距离，以达到热身或锻炼的目的。慢跑会引起足弓下陷，外胫夹、汗疹、跟腱劳损、脚肿挫伤以及膝部后背病痛。所以慢跑前要做好准备动作，慢跑时要穿合适的鞋和松宽的衣服，跑法要正确，而且需要一般良好健康情况和明确目的。慢跑对于保持中老年人良好的心脏功能，防止肺组织弹性衰退，预防肌肉萎缩，防治冠心病、高血压、动脉硬化等，具有积极的作用。同时也必须关注慢跑鞋等一些细节。可加速脂肪消耗达到快速的减肥目的。也可以增强自身体质，提高抵抗力。</p>
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
  </div>

</template>
<script>
export default {
  name: 'HomeFruits',
  data() {
    return {
      file: null,
      imageSrc: '',
      loadingStatus: false,
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      flowers: {
        img0: require("@/assets/flowers/有氧运动.jpg"),
        img1: require("@/assets/flowers/滑冰.jpg"),
        img2: require("@/assets/flowers/游泳.jpg"),
        img3: require("@/assets/flowers/骑行.jpg"),
        img4: require("@/assets/flowers/跳绳.jpg"),
        img5: require("@/assets/flowers/慢跑.jpg"),
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
      this.axios.post("/img/flowers", param, {'Content-Type': 'multipart'}
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
.flower {
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