const sendBtn = document.querySelector('#send-btn');
const taskEl = document.querySelector('#task-el');
const totalEl = document.querySelector('#total-el');

let total = 0;

const wash = {
    button: document.querySelector('#wash-btn'), 
    name: "Wash Car",
    price: 10,
};

const mow = {
    button: document.querySelector('#mow-btn'),
    name: "Mow Lawn",
    price: 20,
};


const weeds = {
    button: document.querySelector('#weeds-btn'),
    name: "Pull Weeds",
    price: 30,
}

const notes = {
    note1: "We accept cash, credit card, or PayPal"
}

updateTotal();



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

wash.button.addEventListener('mouseover', mouseover);
wash.button.addEventListener('mouseleave', mouseleave)
wash.button.addEventListener('mouseup', mouseup);

mow.button.addEventListener('mouseover', mouseover);
mow.button.addEventListener('mouseleave', mouseleave)
mow.button.addEventListener('mouseup', mouseup);

weeds.button.addEventListener('mouseover', mouseover);
weeds.button.addEventListener('mouseleave', mouseleave)
weeds.button.addEventListener('mouseup', mouseup);


function taskInnerHtml (serviceName, servicePrice) {
    const taskInnerHtml = `<div class="half">
                            <p>${serviceName}<span class="light-grey remove">remove</span></p>  
                       </div><div class="align-right half">
                            <p><span class="light-grey">$</span>${servicePrice}</p>
                       </div>`
    return taskInnerHtml;
};

function totalInnerHtml () {
    const totalInnerHtml = `<div class="half" id="hide-el">
                                <p class="margin0"><span class="light-grey notes">${notes.note1}</span></p>  
                            </div>
                            <div class="align-right half">
                                <p class="margin0"><span class="light-grey">$</span>${total}</p>
                            </div>`;
    return totalInnerHtml;
}

function remove() {
    this.remove();
}

function updateTotal(){
    const newTotal = totalEl.innerHTML;
    totalEl.innerHTML = `${totalInnerHtml()}`;
    return newTotal;
}


wash.button.addEventListener('click', function(e) {
    const newDiv1 = document.createElement('div');
    newDiv1.classList.add('display-flex');
    newDiv1.innerHTML = `${taskInnerHtml(wash.name, wash.price)}`;
    console.log(newDiv1);
    taskEl.appendChild(newDiv1);
    total += wash.price;
    updateTotal();
    wash.button.disabled = true;
    newDiv1.addEventListener('click', remove);
    newDiv1.addEventListener('click', function(){
        this.remove();
        total -= wash.price;
        console.log(total);
        updateTotal();
    })
});

taskEl.addEventListener('click', function(e){
    console.log(e);
    // e.target.nodeName === 'newDiv1' && e.target.remove();
    e.target.remove();

});

mow.button.addEventListener('click', function() {
    const newDiv2 = document.createElement('div');
    newDiv2.classList.add('display-flex');
    newDiv2.innerHTML = `${taskInnerHtml(mow.name, mow.price)}`;
    console.log(newDiv2);
    taskEl.appendChild(newDiv2);
    total += mow.price;
    updateTotal();
    mow.button.disabled = true;
    newDiv2.addEventListener('click', function(){
        this.remove();
        total -= mow.price;
        console.log(total);
        updateTotal();
    })
});

weeds.button.addEventListener('click', function() {
    const newDiv3 = document.createElement('div');
    newDiv3.classList.add('display-flex');
    newDiv3.innerHTML = `${taskInnerHtml(weeds.name, weeds.price)}`;
    console.log(newDiv3);
    taskEl.appendChild(newDiv3);
    total += weeds.price;
    updateTotal();
    weeds.button.disabled = true;
    newDiv3.addEventListener('click', function(){
        this.remove();
        total -= weeds.price;
        console.log(total);
        updateTotal();
    })
});



sendBtn.addEventListener('click', function(){
    const hideEl = document.querySelector('#hide-el');
    // hideEl.classList.add('hide');
    hideEl.style.visibility = "hidden";
    console.log(hideEl);
    total = 0;
    wash.button.disabled = false;
    mow.button.disabled = false;
    weeds.button.disabled = false;
    taskEl.innerHTML='';
    updateTotal()
})