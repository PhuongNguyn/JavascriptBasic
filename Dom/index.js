// Lấy ra thẻ input
const input = document.getElementById("input")
// lấy ra thẻ button
const button = document.getElementById("button")
// Lấy ra box
const images = ['link1', 'link2', 'link3']
const box = document.getElementById("box")

for(let i = 0; i < images.length; i++){
    const img = document.createElement('img')
    img.src = images[i]
    box.appendChild(img)
}

let isShow = false

function toggleInput(){
    if(isShow == true){
        isShow = false
        input.style.display = 'none'
        button.innerText = 'show input'
    }else{
        isShow = true
        input.style.display = 'block'
        button.innerText = 'close input'
    }
}


