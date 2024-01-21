<template>
    <div>
        <div  style="width:14%;height: 130px;border-radius: 100px;display:inline-block;">
            <img
                    style="width:100%;height: 100%;border-radius: 100px"
                    :src="require('@/assets/头像.jpg')"
                    class="image"
                    alt="">
        </div>

        <br>
        <br>
        <el-descriptions :column="1" border>

            <el-descriptions-item label="昵称" v-model="username" ><p class="message">{{username}}</p></el-descriptions-item>
            <el-descriptions-item label="邮箱" v-model="email" class="message"><p class="message">{{email}}</p></el-descriptions-item>
            <el-descriptions-item label="电话" v-model="level" class="message"><p class="message">{{level}}</p></el-descriptions-item>
            <el-descriptions-item label="签名" v-model="motto" class="message" ><p class="message">{{motto}}</p></el-descriptions-item>
            <el-descriptions-item label="城市" v-model="city" class="message"><p class="message">{{city}}</p></el-descriptions-item>

        </el-descriptions>
    </div>
</template>

<script>
export default {
    name: "ShowInfo",
    data(){
        return{
            username: "小王",
            email: 2072145411,
            motto: "着眼当下，放眼未来",
            city: "重庆",
            level: 18173539018


        }
    }
}
</script>

<style scoped>
.message{
    width: 20em;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
</style>


<style scoped>

</style>