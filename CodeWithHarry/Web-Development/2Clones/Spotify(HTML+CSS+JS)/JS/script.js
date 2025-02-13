console.log("start JS");
var cursong = new Audio();
let curFolder; //Store current folder Name
let songList = []; //HTML songs link collection
let snglist = []; //only songs Nmae
let cs; //Current song name

// include a songs folder in your dir.
// and put the structure as me
let fetchLink = "http://127.0.0.1:3000/Clones/Spotify(HTML+CSS+JS)/songs";
function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

// To fetch the songs
async function fetchSongs(folder) {
  curFolder = folder;
  songList = [];
  let songstable = await fetch(`${fetchLink}/${folder}/`);
  // turned promise data to text
  songstable = await songstable.text();
  // crated div to store the html we got in tabel form
  let div = document.createElement("div");
  div.innerHTML = songstable;
  // selected elements with a tag
  let songsAcollection = div.getElementsByTagName("a");
  for (const a of songsAcollection) {
    // push the attribute of a href
    if (a.getAttribute("href").endsWith(".mp3")) {
      songList.push(a.getAttribute("href"));
    }
  }
  pushSongs(songList);
}

function pushSongs(songList) {
  let updateTo = document.querySelector(".lib-boxes");
  updateTo.innerHTML = " ";
  snglist = [];
  for (let name of songList) {
    // in this case split the song by / and pop item
    name = name.split("/").pop();
    // split the array by . to remoce the extension and push only name
    name = name.split(".")[0];
    snglist.push(name);
  }
  // Get the section to update songs to
  for (let name of snglist) {
    // create div for the card
    let sngCard = document.createElement("div");
    // apply class to div
    sngCard.classList.add("sngs", "flex");

    // write html in card
    sngCard.innerHTML = `
      <div class="re-img flex-full">
        <img src="img/music.svg" alt="" />
      </div>
      <div class="flex sng-name-artist">
        <span class="SONGNAME">${name}</span>
        <span>Rax</span>
      </div>
      <div>
        <button class="flex-full"><img src="img/play.svg"/></button>
      </div>
                    `;
    // append the Child
    updateTo.appendChild(sngCard);
  }

  // event listner to get song name when click on that button
  document
    .querySelector(".lib-boxes")
    .querySelectorAll("button")
    .forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        let song =
          btn.parentElement.parentElement.querySelector("span").textContent;
        playSong(song);
      });
    });
}
function playSong(name) {
  // Update src of audio
  cursong.src = `songs/${curFolder}/${name}.mp3`;
  // Update current Song
  cs = cursong.src.split("/").pop().split(".")[0];
  // The play&pause button element
  let pause = document.querySelector(".Pause");

  // play the song
  cursong.play();
  pause.src = "img/pause.svg";

  // To update name in PLayBar
  let sngInfo = document.querySelector(".sng-data");
  sngInfo.querySelector(".sng-name").innerHTML = name;
}
function monitor() {
  // To update the total time and the current time
  cursong.addEventListener("timeupdate", () => {
    let ctime = document.body.querySelector(".total");
    ctime.innerHTML = secondsToMinutesSeconds(cursong.duration);
    let ttime = document.body.querySelector(".current");
    ttime.innerHTML = secondsToMinutesSeconds(cursong.currentTime);

    // To update the seek bar
    const percent = (cursong.currentTime / cursong.duration) * 100;
    document.querySelector(
      ".bar"
    ).style.background = `linear-gradient(to right, #4caf50 ${percent}%, #ccc ${percent}%)`;
  });

  // when clicked chnage the play and pause
  let pause = document.querySelector(".Pause");
  pause.addEventListener("click", () => {
    if (cursong.paused) {
      cursong.play();
      pause.src = "img/pause.svg";
    } else {
      cursong.pause();
      pause.src = "img/play.svg";
    }
  });
  // The seek bar changes
  document.querySelector(".bar").addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    console.log(e.offsetX, e.target.getBoundingClientRect().width);
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(
      ".bar"
    ).style.background = `linear-gradient(to right, #4caf50 ${percent}%, #ccc ${percent}%)`;
    cursong.currentTime = (cursong.duration * percent) / 100;
  });

  // To muste and unmute the song
  let voldown = document.querySelector(".vol-down");
  voldown.addEventListener("click", () => {
    if (voldown.src.includes("mute.svg")) {
      cursong.volume = 0.1;
      voldown.src = "img/volume.svg";
      document
        .querySelector(".side-controls")
        .getElementsByTagName("input")[0].value = 10;
    } else {
      cursong.volume = 0;
      voldown.src = "img/mute.svg";
      document
        .querySelector(".side-controls")
        .getElementsByTagName("input")[0].value = 0;
    }
  });
  // To change volume using volumedrag
  document
    .querySelector(".side-controls")
    .getElementsByTagName("input")[0]
    .addEventListener("change", (e) => {
      cursong.volume = e.target.value / 100;
      if (cursong.volume > 0) {
        voldown.src = "img/volume.svg";
      }
    });

  // To play previous song
  Previous.addEventListener("click", () => {
    if (snglist.includes(cs)) {
      const index = snglist.indexOf(cs);
      if (index - 1 >= 0) {
        playSong(snglist[index - 1]);
      } else {
        console.log("top most song");
      }
    }
  });
  // To play next song
  Next.addEventListener("click", () => {
    if (snglist.includes(cs)) {
      const index = snglist.indexOf(cs);
      if (index + 1 < snglist.length) {
        playSong(snglist[index + 1]);
      } else {
        console.log("last most song");
      }
    }
  });

  // Highlight current song
  let CurrentlyHighlighted = null;
  cursong.addEventListener("loadeddata", () => {
    document.querySelectorAll(".SONGNAME").forEach((x) => {
      // Rmove the border and playing png on new song load
      if (CurrentlyHighlighted) {
        x.parentElement.parentElement.style.borderColor = "white";
        x.parentNode.parentNode.getElementsByTagName("img")[1].src =
          "img/play.svg";
      }
      // Is the box text and current song same, highlight it
      if (x.innerHTML == cs) {
        x.parentElement.parentElement.style.borderColor = "#1ed760";
        x.parentElement.parentElement.style.borderWidth = "2px";
        x.parentNode.parentNode.getElementsByTagName("img")[1].src =
          "img/pause.svg";

        // update the hightlighted box
        CurrentlyHighlighted = x.parentElement.parentElement;

        // Add an event listener for when the song ends
        cursong.addEventListener("ended", () => {
          x.parentElement.parentElement.style.borderColor = "white";
          x.parentNode.parentNode.getElementsByTagName("img")[1].src =
            "img/play.svg";
        });
      }
    });
  });
}

function functionalites() {
  // To show and hide hamburger using nav bar
  let catlogBtn = document.querySelector(".browse-img");
  catlogBtn.addEventListener("click", () => {
    let lib = document.querySelector(".left");
    if (lib.style.display === "block") {
      lib.style.display = "none";
      document.querySelector(".right").style.width = "99vw";
    } else {
      lib.style.display = "block";
    }
  });
  // to hide hamburger using croxx button
  closeimg.addEventListener("click", () => {
    let lib = document.querySelector(".left");
    lib.style.display = "none";
    document.querySelector(".right").style.width = "99vw";
  });
}

async function loadAlbums() {
  // To load and show albums
  let AlbumTable = await fetch(`${fetchLink}/`);
  // turned promise data to text
  AlbumTable = await AlbumTable.text();
  // crated div to store the html we got in tabel form
  let div = document.createElement("div");
  div.innerHTML = AlbumTable;
  // All elements storing link
  let albumPath = div.getElementsByTagName("a");
  let Albums = [];
  for (const a of albumPath) {
    Albums.push(a.getAttribute("href").split("songs/")[1]);
  }

  let section = document.querySelector(".local-albums");
  let defaultImg = "img/cover.jpg";

  for (const alb of Albums) {
    if (!alb || alb.trim() === "" || alb.startsWith(".")) {
      continue; // Skip invalid album names
    }

    let card = document.createElement("div");
    // To get album images
    let src = `${fetchLink}/${alb}/cover.jpg`;

    //To get album info
    let url = await fetch(`${fetchLink}/${alb}/info.json`);
    let obj = await url.json();

    card.innerHTML = `<div data-folder="${alb}" class="card">
                <div class="play-btn flex-full">
                  <img src="img/card-play.svg" alt="" />
                </div>
                <img
                  class="fit-img"
                  src= ${src} 
                  alt=""
                  onerror = "this.src='${defaultImg}'"
                />
                <div>${obj["title"]}</div>
                <p>${obj["description"]}</p>
              </div>`;
    section.appendChild(card);
  }

  //To load folder on card click
  document.querySelectorAll(".card").forEach((e) => {
    e.addEventListener("click", async (i) => {
      await fetchSongs(i.currentTarget.dataset.folder);
      playSong(snglist[0]);
    });
  });
}

async function main() {
  // Feth list and wait untill all songs recived
  songList = await fetchSongs("audio");

  loadAlbums();
}

functionalites();
monitor();
main();
