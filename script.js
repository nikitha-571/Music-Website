const music = new Audio('songs/1.mp3');
// music.play();

const song =[
    {
        id: 1,
        songName: 'Tu Mileya',
        poster: "images/1.jpg"
    },
    {
        id: 2,
        songName: 'Heeriye',
        poster: "images/2.jpg"
    },
    {
        id: 3,
        songName: 'Husn',
        poster: "images/3.jpg"
    },
    {
        id: 4,
        songName: ' Sadqay',
        poster: "images/4.jpg"
    },
    {
        id: 5,
        songName: 'Apna Banale',
        poster: "images/5.jpg"
    },
    {
        id: 6,
        songName: 'Akhiyan Gulab',
        poster: "images/6.jpg"
    },
    {
        id: 7,
        songName: 'Ve Kamleya',
        poster: "images/7.jpg"
    },
    {
        id: 8,
        songName: 'Hasi',
        poster: "images/8.jpg"
    },
    {
        id: 9,
        songName: 'Zihaal e Miskin',
        poster: "images/9.jpg"
    },
    {
        id: 10,
        songName: 'Tujh mein rab ',
        poster: "images/10.jpg"
    },
    {
        id: 11,
        songName: 'Soulemate ',
        poster: "images/11.jpg"
    },
    {
        id: 12,
        songName: 'Tu jya jaane',
        poster: "images/12.jpg"
    },
    {
        id: 13,
        songName: 'Chaleya ',
        poster: "images/13.jpg"
    },
    {
        id: 14,
        songName: 'Ek tarfa ',
        poster: "images/14.jpg"
    },
    {
        id: 15,
        songName: 'O Maahi ',
        poster: "images/15.jpg"
    },
    {
        id: 16,
        songName: 'Tu hai toh ',
        poster: "images/16.jpg"
    },
    {
        id: 17,
        songName: 'Main Agar kahoon',
        poster: "images/17.jpg"
    },
    {
        id: 18,
        songName: 'Asal Mein',
        poster: "images/18.jpg"
    },
    {
        id: 19,
        songName: 'Pal',
        poster: "images/19.jpg"
    },
    {
        id: 20,
        songName: 'Saibo',
        poster: "images/20.jpg"
    },
    {
        id: 21,
        songName: 'Laal ishq',
        poster: "images/21.jpg"
    },
    {
        id: 22,
        songName: 'kun faya kun',
        poster: "images/22.jpg"
    },
    {
        id: 23,
        songName: 'Samjhawan',
        poster: "images/23.jpg"
    },
    {
        id: 24,
        songName: 'Abhi Mujh mein',
        poster: "images/24.jpg"
    },
    {
        id: 25,
        songName: 'Kaun Tujhe',
        poster: "images/25.jpg"
    },
    {
        id: 26,
        songName: 'Titli',
        poster: "images/26.jpg"
    },
    {
        id: 27,
        songName: 'Sapna Jahan',
        poster: "images/27.jpg"
    },
    {
        id: 28,
        songName: 'Tum se hi ',
        poster: "images/28.jpg"
    },
    {
        id: 29,
        songName: 'Kal ho na Ho',
        poster: "images/29.jpg"//change image numbers and song names
    },
    {
        id: 30,
        songName: 'Hawa Banke',
        poster: "images/30.jpg"
    }
]

//search data start
Array.from(document.getElementsByClassName('songitem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src = song[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = song[i].songName;

});


let search_results = document.getElementsByClassName('search_results')[0];

song.forEach(element => {
    const{id, songName, poster} = element;
    //console.log(songName);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = 
    ` <img src="${poster}" alt=""> <div class="content"> ${songName} </div> `;
    
    search_results.appendChild(card);
    
});


let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as= items[index].getElementsByClassName('content')[0];
        let text_value = as.textcontent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
            
        }
        if (input_value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
            
        }
    }

});

//search data end

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=> {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active1');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active1');

    }
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songitem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    });
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let downmusic = document.getElementById('downmusic');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((element) => {
    element.addEventListener('click', (el) => {
        index = el.target.id;
        //console.log(index);
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        music.src = `songs/${index}.mp3`;
        downmusic.href= `songs/${index}.mp3`;
        poster_master_play.src = `images/${index}.jpg`;
        music.play();
        
        let songtitles = song.filter((els) => {
            return els.id == index;
        });
        
        songtitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            downmusic.setAttribute('download', songName);
        });

        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active1');
        
        makeAllBackground();
        Array.from(document.getElementsByClassName('songitem'))[`${index - 1}`].style.background = "rgb(105, 105, 105. .1)";
       

    });
})

let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate' , () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    //console.log(music_curr);

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentend.innerText = `${min1}:${sec1}`;
    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentstart.innerText = `${min2}:${sec2}`;

    let progressbar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressbar;
    //console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    //console.log(bar2.style.width);
    dot.style.left = `${seekbar}%`;

});

seek.addEventListener('change', () =>{
    music.currentTime = seek.value * music.duration / 100;
});

const next_music = () => {

//music.addEventListener('ended', () =>{
    masterPlay.classList.add('bi-pause-fill');
    //masterPlay.classList.add('bi-play-fill');
    wave.classList.add('active1');
    if (index == song.length){
        index = 0;
    }
    index ++;
    music.src = `songs/${index}.mp3`;
    downmusic.href= `songs/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    let songtitles = song.filter((els) => {
        return els.id == index;
    });

    songtitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        downmusic.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[`${index - 1}`].style.background = 'rgb(105, 105, 170, .1)';
    makeAllplays();
    document.getElementsByClassName('playlistPlay')[index - 1].classList.add('bi-pause-circle-fill');
    document.getElementsByClassName('playlistPlay')[index - 1].classList.remove('bi-play-circle-fill');

}

const repeat_music = () => {

    //music.addEventListener('ended', () =>{
    masterPlay.classList.add('bi-pause-fill');
    //masterPlay.classList.add('bi-play-fill');
    wave.classList.add('active1');
    index;
    music.src = `songs/${index}.mp3`;
    downmusic.href= `songs/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    let songtitles = song.filter((els) => {
        return els.id == index;
    });

    songtitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        downmusic.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[`${index - 1}`].style.background = 'rgb(105, 105, 170, .1)';
    makeAllplays();
    document.getElementsByClassName('playlistPlay')[index - 1].classList.add('bi-pause-circle-fill');
    document.getElementsByClassName('playlistPlay')[index - 1].classList.remove('bi-play-circle-fill');
    
}
    
const random_music = () => {

    //music.addEventListener('ended', () =>{
    masterPlay.classList.add('bi-pause-fill');
    //masterPlay.classList.add('bi-play-fill');
    wave.classList.add('active1');
    if (index == song.length){
        index == 0;
    }
    index = Math.floor((Math.random() * song.length)+1);
    music.src = `songs/${index}.mp3`;
    downmusic.href= `songs/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    let songtitles = song.filter((els) => {
        return els.id == index;
    });

    songtitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        downmusic.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[`${index - 1}`].style.background = 'rgb(105, 105, 170, .1)';
    makeAllplays();
    document.getElementsByClassName('playlistPlay')[index - 1].classList.add('bi-pause-circle-fill');
    document.getElementsByClassName('playlistPlay')[index - 1].classList.remove('bi-play-circle-fill');

}
    

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=> {
    let mu = shuffle.innerHTML;

    switch (mu) {
        case "next":
            shuffle.classList.add('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "repeat";
            break;
        case "repeat":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = "random";
            break;
        case "random":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "next";
            break;

    }
});

//alert(shuffle.innerHTML);

music.addEventListener('ended', ()=> {
    let b = shuffle.innerHTML;
    switch (b){
        case "repeat":
            repeat_music();
            break;
        case "next":
            next_music();
            break;
        case "random":
            random_music();
            break;
    }
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () => {
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if(index < 1 ){
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src = `songs/${index}.mp3`;
    downmusic.href= `songs/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    //masterPlay.classList.remove('bi-play-fill');
    //masterPlay.classList.add('bi-pause-fill');
    let songtitles = song.filter((els) => {
        return els.id == index;
    }); 

    songtitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        downmusic.setAttribute('download',songName);
    });

    makeAllplays();
    //el.target.classList.remove('bi-play-circle-fill');
    //el.target.classList.add('bi-pause-circle-fill');
    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[`${index - 1}`].style.background = "rgb(105, 105, 105. .1)";
    //wave.classList.add('active1');
});

next.addEventListener('click',()=> {
    index -= 0;
    index += 1;
    if(index > Array.from(document.getElementsByClassName('songitem')).length){
       index = 1; 
    }
    music.src = `songs/${index}.mp3`;
    downmusic.href= `songs/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    //masterPlay.classList.remove('bi-play-fill');
    //masterPlay.classList.add('bi-pause-fill');
    let songtitles = song.filter((els) => {
        return els.id == index;
    });

    songtitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        downmusic.setAttribute('download',songName);
    });
    
    makeAllplays();
    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    //el.target.classList.remove('bi-play-circle-fill');
    //el.target.classList.add('bi-pause-circle-fill');
    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[`${index - 1}`].style.background = "rgb(105, 105, 105. .1)";
    //wave.classList.add('active1');
});




let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_left.addEventListener('click', ()=> {
    pop_song.scrollLeft -=330;
});

pop_song_right.addEventListener('click', ()=> {
    pop_song.scrollLeft +=330;
});



let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_left.addEventListener('click', ()=> {
    item.scrollLeft -=330;
});


pop_art_right.addEventListener('click', ()=> {
    item.scrollLeft +=330;
});


