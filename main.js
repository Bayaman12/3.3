const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const checkpoint = document.getElementById('checkpoint');
const checkpoints = document.getElementById('checkpoints');

let interval;
let i = 0;

start.onclick = () => {
    interval = setInterval(() => {
        i++;
        time.textContent = (i / 100).toFixed(2);
    }, 10);
    start.disabled = true;
};

stop.onclick = () => {
    clearInterval(interval);
    start.disabled = false;
};

reset.onclick = () => {
    clearInterval(interval);
    i = 0;
    time.textContent = (i / 100).toFixed(2);
    checkpoints.innerHTML = ''; 
    start.disabled = false;
};

checkpoint.onclick = () => {
    const li = document.createElement('li');
    li.textContent = "Checkpoint at " + time.textContent + " seconds";
    checkpoints.appendChild(li);
};