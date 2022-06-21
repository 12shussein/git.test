var Pictures;


function Setvalue() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  Pictures = ['https://flipdish.imgix.net/RsOTh5AS3M2UgNRBlsc5RMJa8MtEk.jpg?w=1080&h=720', 'https://flipdish.imgix.net/lg0VX3TRcFuOkFgyyyRl1upxDGk.jpg?w=1080&h=720', 'https://flipdish.imgix.net/sJLVKZ8THjrMg4RZUiEMF56Kqg.jpg?w=1080&h=720', 'https://flipdish.imgix.net/mfratMYj6hYLqcP9EwG21RkD8E.jpg?w=1080&h=720', 'https://flipdish.imgix.net/qjeYXXaWdTmpQa0op5IVlQxzk7o.jpg?w=1080&h=720', 'https://flipdish.imgix.net/VCmvoxgl7hjwnYMTRovTWTWdjU.jpg?w=1080&h=720', 'https://i.etsystatic.com/24305988/r/il/274a22/2462601398/il_794xN.2462601398_lsge.jpg'];
}


Pictures = ['https://flipdish.imgix.net/RsOTh5AS3M2UgNRBc5RMJa8MtEk.jpg?w=1080&h=720', 'https://flipdish.imgix.net/lg0VX3TRcFuOkFgyyyRl1upxDGk.jpg?w=1080&h=720', 'https://flipdish.imgix.net/sJLVKZ8THjrMg4RZUiEMF56Kqg.jpg?w=1080&h=720', 'https://flipdish.imgix.net/mfratMYj6hYLqcP9EwG21RkD8E.jpg?w=1080&h=720', 'https://flipdish.imgix.net/qjeYXXaWdTmpQa0op5IVlQxzk7o.jpg?w=1080&h=720', 'https://flipdish.imgix.net/VCmvoxgl7hjwnYMTRovTWTWdjU.jpg?w=1080&h=720', 'https://i.etsystatic.com/24305988/r/il/274a22/2462601398/il_794xN.2462601398_lsge.jpg'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", Pictures[0]);
element_image.style.backgroundColor = '#000099';


document.getElementById('next').addEventListener('click', (event) => {
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", Pictures.shift());
  if (!Pictures.length) {
    Setvalue();
  }

});

document.getElementById('prev').addEventListener('click', (event) => {
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", Pictures.pop());
  if (!Pictures.length) {
    Setvalue();
  }

});