let counter = document.querySelector('span');
/* Time limit */
let count = 59;
setInterval(()=>{
    counter.innerText = count;
    count--
    /* Link to Review Page (Software) */
    if(count == 0) location.replace('review2.html')
},1000)