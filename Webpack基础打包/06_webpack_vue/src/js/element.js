import '../css/style.css'
import '../css/title.less'
import '../css/image.css'
import '../font/iconfont.css'

import zznhImage from '../img/zznh.png'

const divEl = document.createElement("div");

divEl.className = 'title';
divEl.innerHTML = '你好啊';

// 设置背景图片

debugger;
const bgDivEl = document.createElement('div')
bgDivEl.className = 'bg-image';

// 设置src

const imgEl = document.createElement('img')
imgEl.src = zznhImage

// i元素
const iEl = document.createElement('i');
iEl.className = "iconfont icon-ashbin"


document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl)
document.body.appendChild(iEl)