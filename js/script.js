console.log('Ready!');
$(function(){

  const $startButton = $('.start');
  const picsCount = 2;
  const $cctvEyes = $('.cctv #eyes');
  const $cctvNose = $('.cctv #nose');
  const $cctvMouth = $('.cctv #mouth');

  $startButton.on('click', () => {
    const randomNumberEye = Math.ceil(Math.random()*picsCount);
    $cctvEyes.attr('src', `./images/faces/eyes/eyes-${randomNumberEye}.png`);
    console.log(randomNumberEye);

    const randomNumberNose = Math.ceil(Math.random()*picsCount);
    $cctvNose.attr('src', `./images/faces/nose/nose-${randomNumberNose}.png`);
    console.log(randomNumberNose);

    const randomNumberMouth = Math.ceil(Math.random()*picsCount);
    $cctvMouth.attr('src', `./images/faces/mouth/mouth-${randomNumberMouth}.png`);
    console.log(randomNumberMouth);

    setTimeout(() => {
      $cctvEyes.attr('src', './images/other/static.png');
      $cctvNose.attr('src', './images/other/static.png');
      $cctvMouth.attr('src', './images/other/static.png');
    }, 3000);
    // go back to original images after ten seconds
  });
});

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
