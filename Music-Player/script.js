let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause(){
    if(ctrlIcon.classList.contains('ri-pause-circle-line')){
        song.pause();
        ctrlIcon.classList.remove('ri-play-circle-fill');
        ctrlIcon.classList.add('ri-pause-circle-line');
    } else {
        song.play();
        ctrlIcon.classList.add('ri-pause-circle-line');
        ctrlIcon.classList.remove('ri-play-circle-fill');
        

    }
}
if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    },500);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add('ri-pause-circle-line');
    ctrlIcon.classList.remove('ri-play-circle-fill');
}