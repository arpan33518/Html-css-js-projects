console.log('Lets Write Javascript');
let currentSong = new Audio();

async function getSongs() {
    let a = await fetch("/songs/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;

    let as = div.getElementsByTagName("a");
    let songs = [];

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1]);
        }
    }

    console.log("Songs:", songs);
    return songs;
}

const playMusic = (track) => {
    // let audio = new Audio("/songs/" + track)
    currentSong.src = "/songs/" + track
    currentSong.play()
}

async function main() {

    //Get the lsit of all the songs
    let songs = await getSongs()
    console.log(songs)

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
        
        <img class="invert" src="music.svg" alt="" />
                <div class="info">
                  <div>${decodeURIComponent(song.split("/").pop())}</div>
                  <div>Arpan</div>
                </div>
                <div class="playnow">
                  <span>Play Now</span>
                  <img class= "playbuttons invert " src="play.svg" alt="">
                </div>
        </li>`;
    }

    // Attach an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })


    })

    //Attach an event listener to play next prev
    play.addEventListener("click",()=>{
        if(currentSong.paused){
            currentSong.play()
            play.src = "pause.svg"
        }
        else{
            currentSong.pause()
            pause.src = "play.svg"
        }
    })    
}

main();