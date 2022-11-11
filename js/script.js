
//code from Mindy McAdams at https://jsfiddle.net/macloo/p24vrczo/
let songInfo = document.querySelectorAll('.songInfo');
let albumCover = document.querySelectorAll('.albumCover');
let players = document.querySelectorAll('audio');

function hideAll() {
  songInfo.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

albumCover.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });
    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'herLoss':
        document.querySelector('#firstAlbum')
        	.style.display = 'block';
        break;
      case 'honestlyNevermind':
        document.querySelector('#secondAlbum')
        	.style.display = 'block';
        break;
      case 'certifiedLoverBoy':
        document.querySelector('#thirdAlbum')
        .style.display = 'block';
        break;
      case 'moreLife':
        document.querySelector('#fourthAlbum')
        .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this

  } // end of function for clicking

}); // end of forEach()
