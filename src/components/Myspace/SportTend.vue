<template>
    <div class="hello">
        <div id="myChart" :style="{width: '700px', height: '400px',float:'left'}"></div>
        <div style="margin-top: 50px;float: left;text-align: center;">
            <h1 style="color: #ee2a2a;text-shadow: 5px 5px 5px rgba(110,119,111,0.82);">数据总结</h1>
            <div style="height:200px;width:300px;margin-top: 75px;font-size: 23px;background-color:rgba(234,202,81,0.58);box-shadow: 5px 5px 5px #ffffff;">
                由曲线图可以得出，无论男女，在25岁的运动人数达到了巅峰，并由两侧逐渐递减
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
                    text: '曲线图',
                },
                tooltip: {
                    trigger: 'axis',

                },
                legend: {
                    data: ['女', '男']
                },
                grid: {
                    left: '1%',
                    right: '1%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    show: false,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {
                            readOnly: false
                        },
                        magicType: {
                            type: ['line', 'bar']
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                color: ["red", "#CD3333"],
                xAxis: {
                    type: 'category',
                    name:'年龄',
                    boundaryGap: false,
                    data: ['10', '15', '20', '25', '30', '35', '40'
                    ]
                },
                yAxis: {
                    type: 'value',
                    name: '运动人数',
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                series: [{
                    name: '女',
                    type: 'line',
                    data: [3, 8, 12, 18, 13, 7, 5
                    ],

                },
                    {
                        type: 'line',
                        name: '男',
                        data: [4, 7, 10, 19, 15, 8, 4
                        ],
                    }
                ]
            }
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