console.log('Ready!');
$(function(){

  // BUTTONS
  const $startButton = $('.start');
  const $instr = $('.instr');
  const $submit = $('.submit');
  const $next = $('.next');
  // DIVS
  // const $cctvDiv = $('.cctv');
  // const $mugDiv = $('.mugshot');
  const $selectors = $('.selectors');
  const $instructions = $('.instructions');
  const $timer = $('.time');
  const $watch = $('.watch');
  const $score = $('.level');
  const $finish = $('.finish');
  // IMGS
  const $cctvEyes = $('.cctv #eyes');
  const $cctvNose = $('.cctv #nose');
  const $cctvMouth = $('.cctv #mouth');
  const $mugEyes = $('#mugshoteyes');
  const $mugNose = $('#mugshotnose');
  const $mugMouth = $('#mugshotmouth');
  const $cellBars = $('#cellbars');
  const $villain = $('#villain');
  // SELECTORS
  const $selectEyes = $('.selectors #eyes-select');
  const $selectNose = $('.selectors #nose-select');
  const $selectMouth = $('.selectors #mouth-select');
  //VARIABLES
  let randomNumberEye = null;
  let randomNumberNose = null;
  let randomNumberMouth = null;
  let compSetEyes = null;
  let compSetNose = null;
  let compSetMouth = null;
  const picsCount = 10;
  let timeRemaining = 90;
  let timerId = null;
  let score = 0;

  // FUNCTIONS

  // code to hide instr - need to rewrite jquery selectors
  // const instrHidden = $instrPara.css('visibility', 'hidden');
  // const instrAppear = $instrPara.css('visibility', 'visible');
  // $instrPara.mouseover(instrAppear);
  // $instrPara.mouseout(instrHidden);
  // would need to hide the p tag but not p as a whole as p is also used for timer and level!!!

  const resetMugDiv = function () {
    $mugEyes.attr('src','./images/other/mugshot1.png');
    $mugNose.attr('src','./images/other/mugshot2.png');
    $mugMouth.attr('src','./images/other/mugshot3.png');
  };

  const resetCctv = function () {
    $cctvEyes.attr('src', './images/other/static-eyes.png');
    $cctvNose.attr('src', './images/other/static-nose.png');
    $cctvMouth.attr('src', './images/other/static-mouth.png');
  };

  const start = function() {
    cctvSetUp();
    selectorHide();
    logVillain();
    startTimer();
  };

  const refresh = function () {
    nextSuspect();
    timeRemaining = 90;
    score = 0;
  };

  const nextSuspect = function () {
    resetCctv();
    resetMugDiv();
    $cellBars.css('visibility', 'hidden');
    $villain.css('visibility', 'hidden');
  };

  const selectorHide = function() {
    $selectors.css('visibility', 'hidden');
    setTimeout(() => {
      resetCctv();
      $selectors.css('visibility', 'visible');
    }, 4000);
  };

  const cctvSetUp = function() {
    setSuspectEyes();
    setSuspectNose();
    setSuspectMouth();
  };

  const logVillain = function() {
    console.log('Villain is ' + compSetEyes);
    console.log('Villain is ' + compSetNose);
    console.log('Villain is ' + compSetMouth);
  };

  const setSuspectEyes = function() {
    randomNumberEye = Math.ceil(Math.random()*picsCount);
    compSetEyes = ('eyes-' + randomNumberEye);
    $cctvEyes.attr('src',`./images/faces/eyes/eyes-${randomNumberEye}.png`);
  };

  const setSuspectNose = function() {
    randomNumberNose = Math.ceil(Math.random()*picsCount);
    compSetNose = ('nose-' + randomNumberNose);
    $cctvNose.attr('src', `./images/faces/nose/nose-${randomNumberNose}.png`);
  };

  const setSuspectMouth = function() {
    randomNumberMouth = Math.ceil(Math.random()*picsCount);
    compSetMouth = ('mouth-' + randomNumberMouth);
    $cctvMouth.attr('src',`./images/faces/mouth/mouth-${randomNumberMouth}.png`);
  };

  const laugh = new Audio('./sounds/laugh.mp3');

  const cellAudio = new Audio('./sounds/cell.mp3');

  const progress = function() {
    $score.text(score);
  };

  const escapeSequence = function () {
    $villain.css('visibility', 'visible');
  };

  const captureSequence = function () {
    $cellBars.css('visibility', 'visible');
  };

  const loseSequence = function() {
    // alert('You lose!');
    laugh.play();
    // resetMugDiv();
    escapeSequence();

    setTimeout(() => {
      resetCctv();
      resetMugDiv();
    }, 3000);
  };

  const winSequence = function() {
    // alert('You win!');
    cellAudio.play();
    captureSequence();
    setTimeout(() => {
      resetCctv();
    }, 3000);
    score++;
    progress();
  };

  const startTimer = function() {
    clearInterval(timerId);
    timerId = setInterval(() => {
      timeRemaining--;
      $timer.text(timeRemaining);

      if(timeRemaining === 0) {
        clearInterval(timerId);
        // $watch.addClass('ringing');
        finish();
        alert(`Time is up! You put ${score} villains in prison!`);
        refresh();
      }
    }, 1000);
  };

  const finish = function() {
    $selectors.css('visibility', 'hidden');
    // $finish.css('visibility', 'visible');
  };

  // BUTTON EVENT LISTENERS
  $instr.on('click',() => {
    var offset = 20;
    $('html, body').animate({
      scrollTop: $instructions.offset().top + offset
    }, 2000);
  });

  $next.on('click', () => {
    nextSuspect();
    start();
  });

  $startButton.on('click', () => {
    refresh();
    start();
  });

  $selectEyes.on('change', () => {
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
      winSequence();
    } else {
      loseSequence();
    }
  });


});
