const hr = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = " ";

    if(h >= 12){
        h= h-12;
        ampm = "PM";
    }
    else{
        ampm = "AM";
}

    h = h < 10 ? "0"+h : h;
    m = m < 10 ? "0"+m : m;
    s = s < 10 ? "0"+s : s;

    hr.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();

 
