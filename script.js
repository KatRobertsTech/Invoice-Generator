const washBtn = document.querySelector('#wash-btn');
const mowBtn = document.querySelector('#mow-btn');
const weedsBtn = document.querySelector('#weeds-btn');
const sendBtn = document.querySelector('#send-btn');

const taskEl = document.querySelector('#task-el');
const amountEl = document.querySelector('#amount-el');
const notesEl = document.querySelector('#notes-el');
const totalEl = document.querySelector('#total-el');

const deleteEl = document.querySelector('.deleteEl');

let servicesToBuy = [];
let taskElInnerHtml = taskEl.innerHTML;
let amountElInnerHtml = amountEl.innerHTML;
let notesElInnerHtml = notesEl.innerHTML;
let totalElInnerHtml = totalEl.innerHTML;
let total = 0;
const service1 = ["Wash Car", 10];
const service2 = ["Mow Lawn", 20];
const service3 = ["Pull Weeds", 30];

function reset () {
    servicesToBuy = [];
    total = 0;
    washBtn.disabled = false;
    mowBtn.disabled = false;
    weedsBtn.disabled = false;
    // taskElInnerHTML = ``
}


washBtn.addEventListener('click', function() {
    console.log('Wash Car clicked');
    servicesToBuy.push(service1[0]);
    taskEl.innerHTML += `<div class="deleteEl"><p>${service1[0]} added</p></div>`;
    amountEl.innerHTML += `<div class="align-right deleteEl"><p>$${service1[1]}</p></div>`;
    notesEl.innerHTML = `<div class="deleteEl"><p>We accept cash, credit card, or paypal</p></div>`
    total += service1[1];
    totalEl.innerHTML = `$${total}`;
    console.log(`total is ${total}`);
    console.log(servicesToBuy);
    washBtn.disabled = true;
});

mowBtn.addEventListener('click', function() {
    console.log('Mow Lawn clicked');
    servicesToBuy.push(service2[0])
    taskEl.innerHTML += `<div><p>${service2[0]} added</p></div>`;
    amountEl.innerHTML += `<div class="align-right"><p>$${service2[1]}</p></div>`;
    notesEl.innerHTML = `<div class="deleteEl"><p>We accept cash, credit card, or paypal</p></div>`
    total += service2[1];
    totalEl.innerHTML = `$${total}`;
    console.log(`total is ${total}`);
    console.log(servicesToBuy);
    mowBtn.disabled = true;
});

weedsBtn.addEventListener('click', function() {
    console.log('Pull Weeds clicked');
    servicesToBuy.push(service3[0]);
    taskEl.innerHTML += `<div><p>${service3[0]} added</p></div>`;
    amountEl.innerHTML += `<div class="align-right"><p>$${service3[1]}</p></div>`;
    notesEl.innerHTML = `<div class="deleteEl"><p>We accept cash, credit card, or paypal</p></div>`
    total += service3[1];
    totalEl.innerHTML = `$${total}`;
    console.log(`total is ${total}`);
    console.log(servicesToBuy);
    weedsBtn.disabled = true;
});

sendBtn.addEventListener('click', function(){
    console.log('Send Invoice clicked');
    reset();
})