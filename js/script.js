//ARRAY MAIN

const imgList = [
    '<img src="img/paesaggio-1.webp" alt="">',
    '<img src="img/paesaggio-2.webp" alt="">',
    '<img src="img/paesaggio-3.webp" alt="">',
    '<img src="img/paesaggio-4.webp" alt="">',
    '<img src="img/paesaggio-5.webp" alt="">'
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

    let current = document.querySelector('.active');
    let nextItem = current.nextElementSibling;
    if (!nextItem) {
        nextItem = document.querySelector(" .img")
    }

    current.classList.remove("active");
    nextItem.classList.add("active");
})

back.addEventListener('click', function(){

    let current = document.querySelector('.active');
    let previousItem = current.previousElementSibling;
    if (!previousItem) {
        previousItem = imgItems[4];
    }

    current.classList.remove("active");
    previousItem.classList.add("active");
})


//SOLUTIONS WITH  CYCLE



/*
next.addEventListener('click', function() {
    let current = document.querySelector('.active');
    for (let index = 0; index <= 3; index++) {
        if (current.classList.contains('active')) {
            imgItems[index].classList.remove('active');
            imgItems[index + 1].classList.add('active');
        }
    }
});

back.addEventListener('click', function() {
    let current = document.querySelector('.active');
    for (let index = 0; index <= 3; index++) {
        if (current.classList.contains('active')) {
            imgItems[index - 1].classList.remove('active');
            imgItems[index - 1].classList.add('active');
        }
    }
});
*/
//////////////////////////////////////////////
//ARRAY MINI IMAGES
//////////////////////////////////////////////

const miniImagesList = [
    '<img src="img/paesaggio-1.webp" alt="">',
    '<img src="img/paesaggio-2.webp" alt="">',
    '<img src="img/paesaggio-3.webp" alt="">',
    '<img src="img/paesaggio-4.webp" alt="">',
    '<img src="img/paesaggio-5.webp" alt="">'
]

for (let index = 0; index < miniImagesList.length; index++) {
    const element = miniImagesList[index];
    const item = document.createElement('div');
    item.innerHTML = [element];
    document.querySelector('.mini-images').append(item);
    item.classList.add('mini-img');   
}

let allMini = document.querySelectorAll('.mini-img')

for (let i = 0; i < allMini.length; i++) {
    const element = allMini[i];
    element.classList.add('bright')  
}


let miniItems = document.querySelectorAll('.mini-img');
let firstMini = miniItems[0];
firstMini.classList.add('not-bright')

next.addEventListener('click', function(){
    
    let current = document.querySelector('.not-bright');
    let nextItem = current.nextElementSibling;
    if (!nextItem) {
        nextItem = document.querySelector(" .bright")
    }

    current.classList.remove("not-bright");
    nextItem.classList.add("not-bright");
})

back.addEventListener('click', function(){

    let current = document.querySelector('.not-bright');
    let previousItem = current.previousElementSibling;
    if (!previousItem) {
        previousItem = miniItems[4];
    }

    current.classList.remove("not-bright");
    previousItem.classList.add("not-bright");
})