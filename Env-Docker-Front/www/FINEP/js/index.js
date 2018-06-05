function oTotal() {
  let T = 0;
  document.getElementById('Total').value = T;
  var subTs = document.querySelectorAll('section h3 label output');
  Array.prototype.forEach.call(subTs, function(el, i){
    if (el.value) {T += parseInt(el.value);}
  });
  document.getElementById('Total').value = T;
}
function subTotal(id) {
  //console.log(id);
  let subT = 0;
  var elements = document.querySelectorAll('#'+id+' .offer');
  var output = document.querySelector('#'+id+' .subtotal');
  Array.prototype.forEach.call(elements, function(el, i){
    let item = el.querySelector('.item-select');
    if (item.checked) {
      subT += parseInt( el.querySelector('.price').innerHTML );
    }
  });
  var options = document.querySelectorAll('#'+id+' .addon-price');
  Array.prototype.forEach.call(options, function(el, i){
    let opt = parseInt( el.innerHTML );
    subT += opt ;
  });
  output.innerHTML = subT;
  oTotal();
}
function jumpTo(id) {
  //console.log(id);
  document.querySelector('#'+id).scrollIntoView({ 
    behavior: 'smooth' 
  });
}
function setBundle(id) {
  //console.log(id);
  resetOffers();
  switch(id) {
    case 'bundle1': var offers = ['CSR0', 'CSR1', 'IWP0'];
      break;
    case 'bundle2': var offers = ['CSR0', 'CSR1', 'CSR2', 'CSR4', 'IWP0', 'IWP2'];
      break;
    case 'bundle3': var offers = ['CSR0', 'CSR1', 'CSR2', 'CSR4', 'IWP0', 'IWP2','IWP20'];
      break;
  }
  setOffers(offers);
  subTotal('CSR');
  subTotal('IWP');
  jumpTo('offers');
}
function setOffers(offers) {
  offers.forEach(function(offer) {
    console.log(offer);
    document.querySelector('#'+offer).checked = true;
  });
}
function resetOffers() {
  selectors = document.querySelectorAll('.item-select');
  for (i = 0; i < selectors.length; i++) {
    selector = selectors[i];
    selector.checked = false;
  }
  counters = document.querySelectorAll('.counter');
  for (i = 0; i < counters.length; i++) {
    counter = counters[i];
    counter.value = counter.min;
  }
}
window.onload = function () {
  buttons = document.querySelectorAll(".set-bundle");
  for (i = 0; i < buttons.length; i++) {
    element = buttons[i];
    element.addEventListener("click", function(event) {
      event.preventDefault();
      setBundle(this.id);
    });
  }
}