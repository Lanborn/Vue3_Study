import { createApp } from "vue/dist/vue.esm-bundler"
import { sum } from "js/math";
const { priceFormat} = require('js/format')

import "js/element"

if(module.hot){
    module.hot.accept("./js/element.js", ()=>{
        console.log("element 模块更新了");
    })
    module.hot.accept("./index.js",()=>{
        console.log("index 模块更新了");
    })
}

import App from "@/vue/App.vue"



console.log(sum(20, 30));
console.log(priceFormat());

// Vue代码

const app =  createApp(App);
app.mount("#app")

console.log('123');
console.log('Hello1123123123');