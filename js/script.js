console.log('Ready!');
$(function(){

  const $startButton = $('.start');
  const picsCount = 8;
  const $cctvEyes = $('.cctv #eyes');
  const $cctvNose = $('.cctv #nose');
  const $cctvMouth = $('.cctv #mouth');
  const $cctvDiv = $('.cctv');

  let randomNumberEye = null;
  let randomNumberNose = null;
  let randomNumberMouth = null;

  const $selectEyes = $('.selectors #eyes-select');
  const $selectNose = $('.selectors #nose-select');
  const $selectMouth = $('.selectors #mouth-select');
  const $mugEyes = $('#mugshoteyes');
  const $mugNose = $('#mugshotnose');
  const $mugMouth = $('#mugshotmouth');

  const $submit = $('.submit');

  let compSetEyes = null;
  let compSetNose = null;
  let compSetMouth = null;


  $startButton.on('click', () => {
    randomNumberEye = Math.ceil(Math.random()*picsCount);
    compSetEyes = ('eyes-' + randomNumberEye);
    $cctvEyes.attr('src',`./images/faces/eyes/eyes-${randomNumberEye}.png`);

    randomNumberNose = Math.ceil(Math.random()*picsCount);
    compSetNose = ('nose-' + randomNumberNose);
    $cctvNose.attr('src', `./images/faces/nose/nose-${randomNumberNose}.png`);

    randomNumberMouth = Math.ceil(Math.random()*picsCount);
    compSetMouth = ('mouth-' + randomNumberMouth);
    $cctvMouth.attr('src',`./images/faces/mouth/mouth-${randomNumberMouth}.png`);

    setTimeout(() => {
      $cctvEyes.attr('src', './images/other/static-eyes.png');
      $cctvNose.attr('src', './images/other/static-nose.png');
      $cctvMouth.attr('src', './images/other/static-mouth.png');
    }, 1000);

    console.log('Villain is ' + compSetEyes);
    console.log('Villain is ' + compSetNose);
    console.log('Villain is ' + compSetMouth);

  });

  $selectEyes.on('change', (event) => {
    const eyeNumber = (event.target.value);
    console.log('Player chose ' + eyeNumber);
    $mugEyes.attr('src', `./images/faces/eyes/${eyeNumber}.png`);
  });

  $selectNose.on('change', (event) => {
    const noseNumber = (event.target.value);
    console.log('Player chose ' + noseNumber);
    $mugNose.attr('src', `./images/faces/nose/${noseNumber}.png`);
  });

  $selectMouth.on('change', (event) => {
    const mouthNumber = (event.target.value);
    console.log('Player chose ' + mouthNumber);
    $mugMouth.attr('src', `./images/faces/mouth/${mouthNumber}.png`);
  });

  $submit.on('click', (event) => {
    event.preventDefault();
    const selectedEyes = $('#eyes-select').val();
    const selectedNose = $('#nose-select').val();
    const selectedMouth = $('#mouth-select').val();
    $cctvEyes.attr('src',`./images/faces/eyes/eyes-${randomNumberEye}.png`);
    $cctvNose.attr('src', `./images/faces/nose/nose-${randomNumberNose}.png`);
    $cctvMouth.attr('src',`./images/faces/mouth/mouth-${randomNumberMouth}.png`);


    if ((selectedEyes === compSetEyes) && (selectedNose === compSetNose) && (selectedMouth === compSetMouth)) {
      console.log('You win!');
      // winSequence() => {
      //   ./images/other/cell-bars.png

    } else {
      console.log('You lose!');
      $cctvDiv.effect('shake', {direction: 'up', times: 4, distance: 10}, 1000 );
      // div shakes & face disappers back to mugshot background, possibly add sound effect
    }
  });

});
