const keys = ['C','Db','D','Eb','E','F','Gb','G','A','Ab','Bb','B'];
const comm = ['l','i','k','u','j','y','h','t','g','r','f','e'];

keys.forEach(function(num,idx){
    let a = document.getElementById(num);
    let press = document.getElementById(`${num}key`);
    a.addEventListener('click', function() {
         press.play();
         addStyleToKey(a);
            });
   
   
});

function playNotes(e) {
    let music = document.querySelector(`audio[data-key="${e.key}"]`);
    let ilum = document.querySelector(`div[data-key="${e.key}"]`);
    if (!ilum) return;
    music.play();
    addStyleToKey(ilum);
}

function addStyleToKey(ilum) {
    if (ilum.className === 'white') {
        ilum.classList.add('currentwKey');
        setTimeout(function () {
            ilum.classList.remove('currentwKey');
        }, 500);
    }
    else {
        ilum.classList.add('currentbKey');
        setTimeout(function () {
            ilum.classList.remove('currentbKey');
        }, 500);
    }
}



window.addEventListener('keydown',playNotes);


