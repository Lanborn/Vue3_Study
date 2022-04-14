import '../css/style.css'
import '../css/title.less'
// !做分割作用。表示用哪个css-loader时去对应的目录去找

function component () {
    const element = document.createElement('div')

    element.innerHTML = ['Hello','Webpack'].join(" ");
    element.className = "content"

    return element
}

document.body.appendChild(component())