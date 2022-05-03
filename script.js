const washBtn = document.querySelector('#wash-btn');
const mowBtn = document.querySelector('#mow-btn');
const weedsBtn = document.querySelector('#weeds-btn');
const sendBtn = document.querySelector('#send-btn');

const taskEl = document.querySelector('#task-el');
const amountEl = document.querySelector('#amount-el');
const notesEl = document.querySelector('#notes-el');
const totalEl = document.querySelector('#total-el');

let servicesToBuy = [];
let total = 0;
const service1 = "Wash Car";
const service2 = "Mow Lawn";
const service3 = "Pull Weeds";

function reset () {
    servicesToBuy = [];
    total = 0;
    washBtn.disabled = false;
    mowBtn.disabled = false;
    weedsBtn.disabled = false;
}


washBtn.addEventListener('click', function() {
    console.log('Wash Car clicked');
    servicesToBuy.push(service1);
    console.log(servicesToBuy);
    washBtn.disabled = true;
});

mowBtn.addEventListener('click', function() {
    console.log('Mow Lawn clicked');
    servicesToBuy.push(service2)
    console.log(servicesToBuy);
    mowBtn.disabled = true;
});

weedsBtn.addEventListener('click', function() {
    console.log('Pull Weeds clicked');
    servicesToBuy.push(service3);
    console.log(servicesToBuy);
    weedsBtn.disabled = true;
});

sendBtn.addEventListener('click', function(){
    console.log('Send Invoice clicked');
    reset();
})