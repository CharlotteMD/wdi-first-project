console.log('Ready!');
$(function(){

  const $startButton = $('.start');
  const picsCount = 8;
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
    }, 1000);
    // go back to original images after ten seconds
  });

  // When you select eyes, the matching eyes appears in mugshot div in the eyes section

  const $selectEyes = $('.selectors #eyes');
  const $selectNose = $('.selectors #nose');
  const $selectMouth = $('.selectors #mouth');
  const $mugEyes = $('#mugshoteyes');
  const $mugNose = $('#mugshotnose');
  const $mugMouth = $('#mugshotmouth');

  $selectEyes.on('change', (event) => {
    const eyeNumber = (event.target.value);
    console.log(eyeNumber);
    $mugEyes.attr('src', `./images/faces/eyes/${eyeNumber}.png`);
  });

  $selectNose.on('change', (event) => {
    const noseNumber = (event.target.value);
    console.log(noseNumber);
    $mugNose.attr('src', `./images/faces/nose/${noseNumber}.png`);
  });

  $selectMouth.on('change', (event) => {
    const mouthNumber = (event.target.value);
    console.log(mouthNumber);
    $mugMouth.attr('src', `./images/faces/mouth/${mouthNumber}.png`);
  });


});
