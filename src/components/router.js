import {createRouter, createWebHashHistory} from "vue-router";


import LoginMain from "@/components/Login/LoginMain";
import HomeMain from "@/components/Home/HomeMain";
import HomeGarbage from "@/components/Home/HomeGarbage";
import HomePage from "@/components/Home/HomePage";
import HomeDates from "@/components/Home/HomeDates";
import HomeIntroduce from "@/components/Home/HomeIntroduce";
import HomeFruits from "@/components/Home/HomeFruits";
import HomeFlowers from "@/components/Home/HomeFlowers.vue";
import HomeDogs from "@/components/Home/HomeDogs.vue";
import MySpace from "@/components/Home/MySpace.vue"
import CountControl from "@/components/Myspace/CountControl.vue";
import ImageUp from "@/components/Myspace/ImageUp.vue";
import InfoEditor from "@/components/Myspace/InfoEditor.vue";
import ShowInfo from "@/components/Myspace/ShowInfo.vue";
import SportSex from "@/components/Myspace/SportSex.vue";
import SportType from "@/components/Myspace/SportType.vue";
import SportTend from "@/components/Myspace/SportTend.vue";
import SportLike from "@/components/Myspace/SportLike.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', redirect: '/LoginMain'},
        {path:'/HomeDates',component:HomeDates},
        {path: '/LoginMain', component: LoginMain},
        {
            path: '/HomeMain', component: HomeMain,redirect:'/HomeMain/HomePage', children: [
                {path: 'HomePage', component: HomePage},
                {path: 'HomeGarbage', component: HomeGarbage},
                {path: 'HomeFruits', component: HomeFruits},
                {path: 'HomeIntroduce', component: HomeIntroduce},
                {path: 'HomeFlowers', component: HomeFlowers},
                {path: 'HomeDogs', component: HomeDogs},
                {path: 'MySpace', component: MySpace,children:[
                        {path: 'CountControl', component: CountControl},
                        {path: 'ImageUp', component: ImageUp},
                        {path: 'InfoEditor', component: InfoEditor},
                        {path: 'ShowInfo', component: ShowInfo},
                        {path: 'SportSex', component: SportSex},
                        {path: 'SportType', component: SportType},
                        {path: 'SportTend', component: SportTend},
                        {path: 'SportLike', component: SportLike},
                    ]},
            ]
        },

    ]
})
//导航守卫
// router.beforeEach((to, from, next) => {
//     const user = localStorage.getItem("user")
//     if (to.path === '/HomeMain' && !user) {
//         next('/LoginMain')
//     } else {
//         next()
//     }
// })

export default router