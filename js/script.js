console.log('Ready!');
$(function(){

  const $instructions = $('.instructions');
  const $instr = $('.instr');


  const $startButton = $('.start');
  const picsCount = 8;
  const $cctvEyes = $('.cctv #eyes');
  const $cctvNose = $('.cctv #nose');
  const $cctvMouth = $('.cctv #mouth');
  const $cctvDiv = $('.cctv');
  const $mugDiv = $('.mugshot');

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

  const $cellBars = $('#cellbars');

  // $instr.(click,() => {
  //     $instructions.animate({
  //         scrollTop: $instructions.offset().top},
  //         'slow');
  // });

  $instr.on('click',() => {
    var offset = 20; //Offset of 20px
    $('html, body').animate({
      scrollTop: $instructions.offset().top + offset
    }, 2000);
  });

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
    }, 6000);

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
      alert('You win!');
      const cell = new Audio('./sounds/cell.mp3');
      cell.play();
      $mugDiv.prepend('<img src="./images/other/cell-bars.png" alt="cell bars" id="cellbars">');
      $cellBars.slideDown();
      setTimeout(() => {
        $cctvEyes.attr('src', './images/other/static-eyes.png');
        $cctvNose.attr('src', './images/other/static-nose.png');
        $cctvMouth.attr('src', './images/other/static-mouth.png');
      },
      3000);

    } else {
      alert('You lose!');
      const laugh = new Audio('./sounds/laugh.mp3');
      laugh.play();
      $mugEyes.attr('src','./images/other/mugshot1.png');
      $mugNose.attr('src','./images/other/mugshot2.png');
      $mugMouth.attr('src','./images/other/mugshot3.png');

      // add sound effects

    }
  });

// Refresh button - things that need to happen
// Mugshot stripes come back - check true, cctv camera goes static


});
