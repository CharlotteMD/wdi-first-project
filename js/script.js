console.log('Ready!');


// event listener - click start game button - then run randomise cctv div button


const $startButton = $('.start');

$startButton.on('click', (event) => {
  let cctvRandomise =
  return(Math.round(Math.random()) - 0.5);});
})

// var grd = $('#grid');
// var imgs = grd.children();
// imgs.sort(function(){return (Math.round(Math.random()) - 0.5);});
// grd.remove('li');
// for(var i=0;i < imgs.length;i++) grd.append(imgs[i]);


// CCTV Randomise means:
//
// computer needs to show a random picture from file images/faces/eyes and show it in img id slot eyes
//
// computer needs to show a random picture from file images/faces/nose and show it in img id slot Nose
//
// computer needs to show a random picture from file images/faces/mouth and show it in img id slot Mouth
//
// computer should show these images for 10 seconds and then show static image from file
