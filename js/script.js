//ARRAY MAIN

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
//ARRAY MINI IMAGES



