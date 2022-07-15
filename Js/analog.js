
//! elements ===> 

const body = document.body
const clock = document.querySelector('.clock');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const nums = document.querySelectorAll('.nums');
const lines = document.querySelectorAll('.line');
const lineContainer = document.querySelector('.lines');
const button = document.querySelector('.button');
const date = document.querySelector('.date');
const digital = document.querySelector('.digital');


//! main clock ===>

setInterval(() => {
    let time = new Date();
    
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let h_rotate = h * 30 + m / 2;
    let m_rotate = m * 6;
    let s_rotate = s * 6; 

    hour.style.transform = "rotateZ(" + h_rotate + "deg)";
    minute.style.transform = "rotateZ(" + m_rotate + "deg)";
    second.style.transform = "rotateZ(" + s_rotate + "deg)";

}, 1);

setInterval(() => {
    let time = new Date();
    //! date ===> 
    date.innerHTML = time.getDay() + " / " + time.getMonth() + " / " + time.getFullYear();
    
    //! digital ===> 
    digital.innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds();
}, 1);

//! theme changer ===>

const theme = () => {

    clock.classList.toggle('c_theme');
    clock.classList.toggle('c_theme_off');

    body.classList.toggle('b_theme');
    body.classList.toggle('b_theme_off');

    lines.forEach((item) => {
        item.classList.toggle('l_theme');
        item.classList.toggle('l_theme_off');
    })

    nums.forEach((item) => {
        item.classList.toggle('num_theme');
        item.classList.toggle('num_theme_off');
    })

    lineContainer.classList.toggle('l_container_theme')
    lineContainer.classList.toggle('l_container_theme_off')
}

button.addEventListener('click' , theme);
