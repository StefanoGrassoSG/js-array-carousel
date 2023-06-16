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


for (let index = 0; index < imgList.length; index++) {
    const element = imgList[index];
    const item = document.createElement('div');
    item.innerHTML = [element];
    document.querySelector('.items').append(item);
    item.classList.add('img');   
}

let imgItems = document.getElementsByClassName('img');
let firstItem = imgItems[0];
firstItem.className += ' active';






