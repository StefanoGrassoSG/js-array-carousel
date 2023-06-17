//ARRAY

const imgList = [
    '<img src="img/01.webp" alt="">',
    '<img src="img/02.webp" alt="">',
    '<img src="img/03.webp" alt="">',
    '<img src="img/04.webp" alt="">',
    '<img src="img/05.webp" alt="">'
]

console.log(imgList)
let next = document.getElementById("go")
let back = document.getElementById("down")


for (let index = 0; index < imgList.length; index++) {
    const element = imgList[index];
    const item = document.createElement('div');
    item.innerHTML = [element];
    document.querySelector('.items').append(item);
    item.classList.add('img');   
}

let imgItems = document.querySelectorAll('.img');
let firstItem = imgItems[0];
firstItem.classList.add('active')

next.addEventListener('click', function(){

    let current = document.querySelector('.active')

    if(current.classList.contains('active')){
        imgItems[1].classList.add('active')
        imgItems[0].classList.remove('active')
    }

    if (current.classList.contains('active')) {
        imgItems[1].classList.remove('active')
        imgItems[2].classList.add('active')
    }
    if (current.classList.contains('active')) {
        imgItems[2].classList.remove('active')
        imgItems[3].classList.add('active')
    }
    if (current.classList.contains('active')) {
        imgItems[3].classList.remove('active')
        imgItems[4].classList.add('active')
    }
    

})

back.addEventListener('click', function(){

    let current = document.querySelector('.active')

    if(current.classList.contains('active')){
        imgItems[3].classList.add('active')
        imgItems[4].classList.remove('active')
    }

    if (current.classList.contains('active')) {
        imgItems[2].classList.add('active')
        imgItems[3].classList.remove('active')
    }
    if (current.classList.contains('active')) {
        imgItems[1].classList.add('active')
        imgItems[2].classList.remove('active')
    }
    if (current.classList.contains('active')) {
        imgItems[0].classList.add('active')
        imgItems[1].classList.remove('active')
    }

})




