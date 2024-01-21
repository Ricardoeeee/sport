import {createApp} from 'vue'
import App from './App.vue'
import axios from "axios";
import VueAxios from "vue-axios";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// app.use(ElementPlus)
//view-ui-plus组件引用
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'

import DataVVue3 from '@kjgl77/datav-vue3'
//全局组件
import components from "@/components/index.js";
//router
import router from "@/components/router";

import baseUrl from "@/components/baseUrlConfig"

// 引入echarts
import * as echarts from 'echarts'

createApp(App).use(components).use(router).use(ViewUIPlus).use(ElementPlus).use(DataVVue3).use(VueAxios, axios).mount('#app')

//配置接口地址
axios.defaults.baseURL = baseUrl.base1

//允许跨域
axios.defaults.withCredentials = true