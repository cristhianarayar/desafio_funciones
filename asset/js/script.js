

//ele.setAttribute('style','"background-color:green;"')
function pintar(color){
    ele.style.backgroundColor = color
    }

const ele = document.getElementById("ele1")

ele.addEventListener('click', function(){
    pintar('yellow')
})

