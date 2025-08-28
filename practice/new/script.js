const time = document.getElementById('demo');

const dat = ()=>{
    time.innerHTML=Date();
}

time.addEventListener(" click", dat);