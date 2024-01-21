<template>
    <div class="hello">
        <div id="myChart" :style="{width: '700px', height: '400px',float:'left'}"></div>
        <div style="margin-top: 50px;float: left;text-align: center;">
            <h1 style="color: #ee2a2a;text-shadow: 5px 5px 5px rgba(110,119,111,0.82);">数据总结</h1>
            <div style="height:200px;width:300px;margin-top: 50px;font-size: 23px;background-color:rgba(234,202,81,0.58);box-shadow: 5px 5px 5px #ffffff;">
                由柱状图可以很直观的看出，最热门的运动是球类运动，其次是有氧运动和户外运动，最后才是无氧运动
            </div>
        </div>
    </div>
</template>

<script>
// 引入echarts
import * as echarts from 'echarts'
export default {
    name: 'HelloWorld',
    data() {
        return {
            myChart: null,
            option: {
                title: {
                    text: '柱状图'
                },
                tooltip: {},
                xAxis: {
                    data: ["无氧运动", "有氧运动", "球类运动", "户外运动"]
                },
                yAxis: {},
                series: [{
                    name: '运动人数',
                    type: 'bar',
                    data: [12, 18, 54, 16]
                }]
            }
        }
    },
    watch:{
        // 监听 option 更新
        option: {
            // 更新处理，也可以 handler(newVal，oldVal)
            handler(newVal){
                if(newVal){
                    this.myChart.setOption(newVal)
                }
            },
            //关键,对象内部属性的监听(内部有数据更新，也进行对应的watch触发)
            deep: true
        },
    },

    mounted() {
        this.drawBar();
    },
    methods: {
        drawBar() {
            // 基于准备好的dom，初始化echarts实例
            // 全局使用 echarts
            // this.myChart = this.$echarts.init(document.getElementById('myChart'))
            // 调用局部的 echarts
            this.myChart = echarts.init(document.getElementById('myChart'))
            // 绘制图表
            this.myChart.setOption(this.option);

            // 设置该 chart 的 resize 方法
            window.addEventListener("resize", this.myChart.resize)
        },

        //添加refreshData方法进行自动更新设置数据
        // refreshData() {
        //     // 更新定时更新函数
        //     setInterval(() => {
        //         let sDataLength = this.option.series[0].data.length
        //         console.log('refreshData')
        //         let data = []
        //         // 数据随机值更新
        //         for (let i = 0; i < sDataLength; i++) {
        //             data[i] = Math.floor(Math.random() * 100) + 1
        //         }
        //         // 更新数据
        //         this.option.series[0].data = data
        //     }, 1000)
        //
        // }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>