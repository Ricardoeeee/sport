<template>
    <div>
        <el-container style="height: 600px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: white">
                <el-menu :default-openeds="['1']">
                    <el-sub-menu index="1">
                        <template v-slot:title>
                            <i class="el-icon-postcard"></i>信息修改</template>
                        <el-menu-item-group>

                            <router-link class="alink" to="/HomeMain/MySpace/ImageUp">
                                <el-menu-item index="1-3">

                                    运动报名

                                </el-menu-item>
                            </router-link>

                            <router-link class="alink" to="/HomeMain/MySpace/ShowInfo">
                                <el-menu-item index="1-1">
                                    基本信息
                                </el-menu-item>

                            </router-link>

                            <router-link class="alink" to="/HomeMain/MySpace/InfoEditor">
                                <el-menu-item index="1-2">
                                    信息修改
                                </el-menu-item>
                            </router-link>



                            <router-link class="alink" to="/HomeMain/MySpace/CountControl">
                                <el-menu-item index="1-4">

                                    账号管理

                                </el-menu-item>
                            </router-link>


                        </el-menu-item-group>

                    </el-sub-menu>


                    <el-sub-menu index="2">
                        <template v-slot:title>
                            <i class="el-icon-postcard"></i>数据分析</template>
                        <el-menu-item-group>
                            <router-link class="alink" to="/HomeMain/MySpace/SportSex">
                                <el-menu-item index="2-1">
                                    男女比例
                                </el-menu-item>
                            </router-link>

                            <router-link class="alink" to="/HomeMain/MySpace/SportType">
                                <el-menu-item index="2-2">
                                    运动类型
                                </el-menu-item>
                            </router-link>

                            <router-link class="alink" to="/HomeMain/MySpace/SportTend">
                                <el-menu-item index="2-3">
                                    运动趋势
                                </el-menu-item>
                            </router-link>

                            <router-link class="alink" to="/HomeMain/MySpace/SportLike">
                                <el-menu-item index="2-4">
                                    热门运动
                                </el-menu-item>
                            </router-link>
                        </el-menu-item-group>

                    </el-sub-menu>
                </el-menu>
            </el-aside>


            <el-container
                    style="background-image: url(src/assets/阳光.jpg);
        background-repeat: no-repeat;
        background-size:100% 100%;
        ">
                <el-main>
                    <div style="width: 80%;margin: 0 auto">
                        <router-view></router-view>
                    </div>
                </el-main>
            </el-container>

        </el-container>

    </div>
</template>

<script>

export default {
    name: "MySpace",
    data() {

        return {

        }
    },
}
</script>

<style scoped>
.el-header {
    background-color: #c6ecba;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
.router-link-active {
    text-decoration: none;
}

.alink{

    text-decoration: none;
}


</style>


<style scoped>

</style>