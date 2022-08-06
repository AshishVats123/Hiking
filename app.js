/*-------mobile menu------*/
const mainmenu=document.querySelector('ul');
const closemenu=document.querySelector('.closemenu');
const openmenu=document.querySelector(' .openmenu');

openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);

function show(){
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0';
}
function close(){
    mainmenu.style.top = '-100%';
}

/*------wrap-3 toggle-------*/
const btn = document.querySelector('#btn');
const div = document.querySelector('#toggle');

btn.addEventListener('click',()=>{
    if(div.style.display =='none'){
        div.style.display ='flex';
    }
    else{
        div.style.display ='none';
    }
}
)