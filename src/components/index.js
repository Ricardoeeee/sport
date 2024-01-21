// 全局组件注册

import HomeMain from "@/components/Home/HomeMain";
import LoginMain from "@/components/Login/LoginMain";



export default {
    install(Vue) {
        Vue.component(HomeMain.name,HomeMain)
        Vue.component(LoginMain.name,LoginMain)

    }
}