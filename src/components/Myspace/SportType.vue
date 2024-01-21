<template>
    <div class="hello">
        <div id="myChart" :style="{width: '700px', height: '400px',float:'left'}"></div>
        <div style="margin-top: 50px;float: left;text-align: center;">
            <h1 style="color: #ee2a2a;text-shadow: 5px 5px 5px rgba(110,119,111,0.82);">数据总结</h1>
            <div style="height:200px;width:300px;margin-top: 50px;font-size: 23px;background-color:rgba(234,202,81,0.58);box-shadow: 10px 10px 5px #ffffff;">
                喜欢球类运动的用户居多，紧随其后的是户外运动和有氧运动，少部分用户喜欢无氧运动
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
                    text: '各类运动占比',
                    subtext: '真实数据',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['有氧运动', '无氧运动', '户外运动', '球类运动']
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {
                            value: 335,
                            name: '有氧运动'
                        },
                        {
                            value: 310,
                            name: '无氧运动'
                        },
                        {
                            value: 369,
                            name: '户外运动'
                        },
                        {
                            value: 1548,
                            name: '球类运动'
                        }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }],
            },
        }
    },
    watch: {
        // 监听 option 更新
        option: {
            // 更新处理，也可以 handler(newVal，oldVal)
            handler(newVal) {
                if (newVal) {
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

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>