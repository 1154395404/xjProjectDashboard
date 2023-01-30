window.onload=function () {

    console.log('动态脚本嵌入已开启')
    const div=document.createElement('div')

    div.style.position='absolute'
    div.style.bottom='0'
    div.style.left='0'
    div.style.width='50px'
    div.style.height='50px'
    div.style.background='#fc4'

    document.body.append(div)

}