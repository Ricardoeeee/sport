<template>
  <div>
    <div style="background: linear-gradient(to right, #b1cc89, #ecebe0);">
    <div class="fruits">
      <div class="photo">
         <img :src="fruits.img0" alt="水果">
      </div>
      <div class="title">
        <p>无氧运动</p>
      </div>
      <div class="lanauge">
        <p>
            无氧运动的分类是从人体运动时骨骼肌的代谢过程分类衍生而来的，无氧运动的概念也都是根据无氧代谢供能系统为主演变而来，例如无氧运动是指人体肌肉在无氧供能代谢状态下进行的运动。但日常中我们所认为的无氧运动是指肌肉在“缺氧”的状态下高速剧烈的运动。无氧运动大部分是负荷强度高、瞬间性强的运动，所以很难持续长时间，而且疲劳消除的时间也慢</p>
      </div>

    </div>
    <div id="ccc">
      <div class="title2">
        <h2>精选运动</h2>
        <p><span>————————————</span> &nbsp;&nbsp;携手同行，与您一起塑造未来&nbsp;&nbsp; <span>————————————</span></p>
      </div>
      <div class="hd">
        <ul>
          <li class="on" @mouseover="addClass($event); this.show1 = true"><a href="javascript:void(0);">赛跑</a>
          </li>
          <li class="" @mouseover="addClass($event); this.show2 =  true"><a href="javascript:void(0);">举重</a>
          </li>
          <li class="" @mouseover="addClass($event); this.show3 = true"><a href="javascript:void(0);">跳高</a>
          </li>
          <li class="" @mouseover="addClass($event); this.show4 = true"><a href="javascript:void(0);">跳远</a>
          </li>
          <li class="" @mouseover="addClass($event); this.show5 = true"><a href="javascript:void(0);">拔河</a>
          </li>
        </ul>
      </div>
      <br>
      <div id="bd">
        <div v-show="show1"><img :src="fruits.img1" class="show_img" alt="1">
          <div class="show_data">
            <h2><em>01</em>赛跑</h2>
            <p>赛跑是人类与生俱来的基本能力，自古以来就是一种比赛形式，几乎每个国家的文献中都有描述。据史料记载，短跑是公元前776年古希腊奥运会惟一的竞技项目，距离为192.27米。现代短跑起源于欧洲，最早被列入正式比赛是在1850年的牛津大学运动会上，当时设有100码、330码、440码跑项目。19世纪末，为规范项目设置，将赛跑距离由码制改为米制。初为职业选手的表演项目，后逐渐扩展到业余运动员。运动员比赛时必须使用起跑器，听信号统一起跑，必须自始至终在自己的跑道内跑动。奥运会比赛项目男、女均为100米跑、200米跑和400米跑，其中男子项目1896年列入，女子100米跑和200米跑1928年列入，400米跑1964年列入。
            </p>
            <div><a class="bottom01" href="javascript:void(0);" rel="nofollow" target="_blank">在线咨询</a><span>咨询热线：<strong>18637890085</strong></span>
            </div>
          </div>
        </div>
        <div v-show="show2"><img :src="fruits.img2" class="show_img" alt="2">
          <div class="show_data">
            <h2><em>02</em>举重</h2>
            <p>举重（Weightlifting），是以举起的杠铃重量为胜负依据的体育运动，由抓举和挺举两个项目构成。1891年，首届世界举重锦标赛于英国伦敦举行。1896年，举重被列为奥运会正式比赛项目。1910年，卡斯珀·博格在法兰克福体育游戏展览会上首次展示片杠铃，成为世界举重发展史上的一个里程碑。1972年，第20届夏季奥运会举重比赛后取消推举项目。举重的最高组织机构为国际举重联合会，1920年成立，总部设在匈牙利首都布达佩斯。中国的举重最高组织机构为中国举重协会，成立于1956年。</p>
            <div><a class="bottom01" href="javascript:void(0);" rel="nofollow" target="_blank">在线咨询</a><span>咨询热线：<strong>18637890085</strong></span>
            </div>
          </div>
        </div>
        <div v-show="show3"><img :src="fruits.img3" class="show_img" alt="3">
          <div class="show_data">
            <h2><em>03</em>跳高</h2>
            <p>跳高，是田径运动的田赛比赛项目之一，是人体通过助跑、起跳、腾空、落地系列动作形式跳越高度障碍的运动。现代跳高运动始于欧洲。1827年，威尔逊在英国举行的首届职业田径比赛中跳出1.575米，这是第一个有记载的世界跳高成绩。19世纪60年代后，跳高开始在欧洲和美洲普及。跳高运动的技术动作出现过5次重大演变，即跨越式、剪式、滚式、俯卧式和背越式，现代绝大多数运动员都采用背越式。男、女跳高分别于1896年、1928年被列为奥运会比赛项目。</p>
            <div><a class="bottom01" href="javascript:void(0);" rel="nofollow" target="_blank">在线咨询</a><span>咨询热线：<strong>18637890085</strong></span>
            </div>
          </div>
        </div>
        <div v-show="show4"><img :src="fruits.img4" class="show_img" alt="4">
          <div class="show_data">
            <h2><em>04</em>跳远</h2>
            <p>跳远（long jump），又称“急行跳远”，是在助跑道上沿直线助跑，在跑进中用单脚起跳腾空，最后双脚落入沙坑的田径运动项目。比赛时，以跳的远度决定名次。跳远原是人类猎取食物和逃避狂兽侵害的一种生活技能，后又成为挑选与训练士兵的条件和手段。在古希腊奥林匹克运动会中跳远即已作为比赛项目之一。近代跳远运动列入比赛始于英国。1896年，雅典奥运会已经确定男子跳远为正式比赛项目。1935年，美国运动员杰西·欧文斯以8.13米的成绩突破了8米的界限。1948年，女子跳远被伦敦奥运会纳入为比赛项目。</p>
            <div><a class="bottom01" href="javascript:void(0);" rel="nofollow" target="_blank">在线咨询</a><span>咨询热线：<strong>18637890085</strong></span>
            </div>
          </div>
        </div>
        <div v-show="show5"><img :src="fruits.img5" class="show_img" alt="5">
          <div class="show_data">
            <h2><em>05</em>拔河</h2>
            <p>拔河，为双方各执绳一端进行角力的体育活动，属于中国的传统运动项目。
                拔河在中国有悠久的历史。早在春秋战国时期，就有拔河这项活动，不过在那时不叫拔河，而称为“钩强”或“牵钩”，后演变为荆楚一带民间流行的“施钩之戏”。拔河是中国古代的一项体育活动。《墨子·鲁问》中记载，相传春秋时期，楚、越两国水军交战时，鲁国的工匠公输子(鲁班)设计了一种称之为“钩强”的兵器，用于阻挡和钩住敌船。而在阻和钩时，需要战士具有强大的力量。因此，当时把钩强对拉作为军事训练的重要内容。</p>
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

      fruits: {
        img0: require("@/assets/fruits/无氧运动.jpg"),
        img1: require("@/assets/fruits/赛跑.jpg"),
        img2: require("@/assets/fruits/举重.jpg"),
        img3: require("@/assets/fruits/跳高.jpg"),
        img4: require("@/assets/fruits/跳远.jpg"),
        img5: require("@/assets/fruits/拔河.jpg"),
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
      this.axios.post("/img/fruits", param, {'Content-Type': 'multipart'}
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
.fruits {
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