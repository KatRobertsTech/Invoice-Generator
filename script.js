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
const service1 = ["Wash Car", 10];
const service2 = ["Mow Lawn", 20];
const service3 = ["Pull Weeds", 30];

function reset () {
    servicesToBuy = [];
    total = 0;
    washBtn.disabled = false;
    mowBtn.disabled = false;
    weedsBtn.disabled = false;
    taskEl.innerHTML='';
    amountEl.innerHTML='';
    notesEl.innerHTML='';
    totalEl.innerHTML = `$${total}`
};

function mouseover (e) {
    e.target.style.background = '#3A69D2';
    e.target.style.color = 'white';
    e.target.style.border = '#3A69D2';

}
function mouseleave (e) {
    e.target.style.background = '';
    e.target.style.color = '';
    e.target.style.border = '';
}

function mouseup (e) {
    e.target.style.background = '';
    e.target.style.color = '';
    e.target.style.border = '';
}

washBtn.addEventListener('mouseover', mouseover);
washBtn.addEventListener('mouseleave', mouseleave)
washBtn.addEventListener('mouseup', mouseup);

mowBtn.addEventListener('mouseover', mouseover);
mowBtn.addEventListener('mouseleave', mouseleave)
mowBtn.addEventListener('mouseup', mouseup);

weedsBtn.addEventListener('mouseover', mouseover);
weedsBtn.addEventListener('mouseleave', mouseleave)
weedsBtn.addEventListener('mouseup', mouseup);


washBtn.addEventListener('click', function() {
    servicesToBuy.push(service1[0]);
    taskEl.innerHTML += `<div><p>${service1[0]} added</p></div>`;
    amountEl.innerHTML += `<div class="align-right"><p>$${service1[1]}</p></div>`;
    notesEl.innerHTML = `<div><p>We accept cash, credit card, or paypal</p></div>`
    total += service1[1];
    totalEl.innerHTML = `$${total}`;
    washBtn.disabled = true;
});

mowBtn.addEventListener('click', function() {
    servicesToBuy.push(service2[0])
    taskEl.innerHTML += `<div><p>${service2[0]} added</p></div>`;
    amountEl.innerHTML += `<div class="align-right"><p>$${service2[1]}</p></div>`;
    notesEl.innerHTML = `<div><p>We accept cash, credit card, or paypal</p></div>`
    total += service2[1];
    totalEl.innerHTML = `$${total}`;
    mowBtn.disabled = true;
});

weedsBtn.addEventListener('click', function() {
    servicesToBuy.push(service3[0]);
    taskEl.innerHTML += `<div><p>${service3[0]} added</p></div>`;
    amountEl.innerHTML += `<div class="align-right"><p>$${service3[1]}</p></div>`;
    notesEl.innerHTML = `<div><p>We accept cash, credit card, or paypal</p></div>`
    total += service3[1];
    totalEl.innerHTML = `$${total}`;
    weedsBtn.disabled = true;
});

sendBtn.addEventListener('click', function(){
    reset();
})