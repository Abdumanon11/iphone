const whiteBtn = document.getElementById('div1');
const spaceGreyBtn = document.getElementById('div2');
const productImage = document.querySelector('.box3 img');
const whiteBtn2 = document.getElementById('div3');
const spaceGreyBtn2 = document.getElementById('div4');
const open_modal = document.querySelector('[data-open]')
const close_modal = document.querySelector('[data-close]')
const dialog = document.querySelector('dialog')
const closeButton = document.querySelector('.close-button');
const option = document.getElementById('option1')
const option2 = document.getElementById('option2')

whiteBtn.addEventListener('click', () => {
    productImage.src = 'img/iphon4.jpg'; 
  });
  
  spaceGreyBtn.addEventListener('click', () => {
    productImage.src = 'img/iphon3.jpg';
  });
  whiteBtn2.addEventListener('click', () => {
    productImage.src = 'img/iphon2.jpg'; 
  });
  
  spaceGreyBtn2.addEventListener('click', () => {
    productImage.src = 'img/iphone 1.jpg';
  });
  
option.addEventListener('click', () => {
    productImage.src = 'img/iphon4.jpg'; 
  });
  
  option2.addEventListener('click', () => {
    productImage.src = 'img/iphon4pro.jpg';
  });


open_modal.onclick = () => {
dialog.showModal()
}
close_modal.onclick = () => {
dialog.close()
}

closeButton.addEventListener('click', () => {
  document.querySelector('.container').style.display = 'none';
});


