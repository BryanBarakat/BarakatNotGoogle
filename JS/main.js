const img = document.getElementById('imaged');

function choosing(){
    let chooseImg = Math.floor(Math.random() * 2);
    return chooseImg;
}

window.addEventListener('load', (event) => {
    let chose = choosing();
    if(chose === 0){
        img.src = 'man.png';
    }
    else if(chose === 1){
        img.src = 'woman.png';
    }
});

const cc = document.getElementById('colorchange');
const mc = document.getElementById('main-cust');
const h = document.getElementById('header');
const main_cont = document.getElementById('main-container');

const back = document.getElementById('bg');

const but1 = document.getElementById('button1');
const but2 = document.getElementById('button2');

const prof = document.getElementById('profile');

const inputC = document.getElementById('inputColor');

let ccClicked = false;

let pClicked = false;

cc.onclick = function(){
    mc.style.display = 'block';
    main_cont.style.opacity = '0.5'; 
    h.style.opacity ='0.5';
    back.style.backgroundColor = '#151515';
    ccClicked = true;
    h.style.pointerEvents = 'none';
    main_cont.style.pointerEvents = 'none';
    prof.style.display = 'none';
    pClicked = false;
}

but1.onclick = function(){
    mc.style.display = 'none';
    main_cont.style.opacity = '1'; 
    h.style.opacity ='1';
    back.style.backgroundColor = '#353535';
    ccClicked = false;
    h.style.pointerEvents = 'auto';
    main_cont.style.pointerEvents = 'auto';
}

but2.onclick = function(){
    mc.style.display = 'none';
    main_cont.style.opacity = '1'; 
    h.style.opacity ='1';
    back.style.backgroundColor = '#353535';
    back.style.backgroundColor = inputC.value;
    ccClicked = false;
    h.style.pointerEvents = 'auto';
    main_cont.style.pointerEvents = 'auto';
}

img.onclick = function(){
    if(ccClicked == false){
        prof.style.display = 'block';
        pClicked = true;
    }
}

function popOff(){
    prof.style.display = 'none';
    pClicked = false;
}