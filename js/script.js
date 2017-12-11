console.log('Ready!');
$(function(){
  const $startButton = $('.start');
  const partsCount = 2;
  $startButton.on('click', (event) => {
    const randomNumber = Math.ceil(Math.random()*partsCount);
    $('.cctv #eyes').attr('src', `./images/Faces/Eyes/eyes-${randomNumber}.png`);
    console.log(randomNumber)
  })
})

// event listener - click start game button - then run randomise cctv div button




// CCTV Randomise means:
//
// computer needs to show a random picture from file images/faces/eyes and show it in img id slot eyes
//
// computer needs to show a random picture from file images/faces/nose and show it in img id slot Nose
//
// computer needs to show a random picture from file images/faces/mouth and show it in img id slot Mouth
//
// computer should show these images for 10 seconds and then show static image from file
