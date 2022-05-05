const washBtn = document.querySelector('#wash-btn');
const mowBtn = document.querySelector('#mow-btn');
const weedsBtn = document.querySelector('#weeds-btn');
const sendBtn = document.querySelector('#send-btn');

const taskEl = document.querySelector('#task-el');
const amountEl = document.querySelector('#amount-el');
const notesEl = document.querySelector('#notes-el');
const totalEl = document.querySelector('#total-el');

// const removeEl = document.querySelectorAll('.remove');
// removeEl.addEventListener('click', function(){
//     console.log(removeEl);
// });


let servicesToBuy = [];
let total = 0;
// const service4 = ["Service Name", price, id]
const service1 = ["Wash Car", 10, 1];
const service2 = ["Mow Lawn", 20, 2];
const service3 = ["Pull Weeds", 30, 3];

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

// function removeWashBtn() {
//     console.log('remove this');
//     let taskToRemove = document.querySelectorAll(`.remove${service1[2]}`);
//     console.log(taskToRemove);
//     task.firstElementChild.innerHTML='';
// }

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
    taskEl.innerHTML += `<div><p>${service1[0]}<span class="light-grey remove" onclick="removeWashBtn()">remove</span></p></div>`;
    amountEl.innerHTML += `<div class="align-right"><p><span class="light-grey">$</span>${service1[1]}</p></div>`;
    notesEl.innerHTML = `<div><p>We accept cash, credit card, or paypal</p></div>`
    total += service1[1];
    totalEl.innerHTML = `<span class="light-grey">$</span>${total}`;
    washBtn.disabled = true;
});


// const removeEl = document.querySelectorAll('.remove');
// console.log(removeEl);

mowBtn.addEventListener('click', function() {
    servicesToBuy.push(service2[0])
    taskEl.innerHTML += `<div><p>${service2[0]}<span class="light-grey remove">remove</span></p></div>`;
    amountEl.innerHTML += `<div class="align-right"><p><span class="light-grey">$</span>${service2[1]}</p></div>`;
    notesEl.innerHTML = `<div><p>We accept cash, credit card, or paypal</p></div>`
    total += service2[1];
    totalEl.innerHTML = `<span class="light-grey">$</span>${total}`;
    mowBtn.disabled = true;
});

weedsBtn.addEventListener('click', function() {
    servicesToBuy.push(service3[0]);
    taskEl.innerHTML += `<div><p>${service3[0]}<span class="light-grey remove">remove</span></p></div>`;
    amountEl.innerHTML += `<div class="align-right"><p><span class="light-grey">$</span>${service3[1]}</p></div>`;
    notesEl.innerHTML = `<div><p>We accept cash, credit card, or paypal</p></div>`
    total += service3[1];
    totalEl.innerHTML = `<span class="light-grey">$</span>${total}`;
    weedsBtn.disabled = true;
});

sendBtn.addEventListener('click', function(){
    reset();
})