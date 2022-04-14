import { createApp } from "vue/dist/vue.esm-bundler"
import { sum } from "./js/math";
const { priceFormat} = require('./js/format')

import "./js/element"

import App from "./vue/App.vue"

console.log(sum(20, 30));
console.log(priceFormat());

// Vue代码

const app =  createApp(App);
app.mount("#app")