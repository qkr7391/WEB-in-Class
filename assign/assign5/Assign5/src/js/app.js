/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <SAE-MI PARK>
 *      Student ID: <SPARK280>
 *      Date:       <MAR ,2023>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

window.onload = function () {
    showingBtn();
   };
   
   function showingBtn(){
    let buttons = document.getElementById("menu");
    for (let i = 0; i < window.artists.length; i++) {
      let artistbtn = document.createElement("button");
      artistbtn.setAttribute("id", window.artists[i].id);
      artistbtn.setAttribute("class", "btn");
      artistbtn.type = "button";
      artistbtn.innerHTML = window.artists[i].name;
      buttons.appendChild(artistbtn);
    }
  
  const btnAtrr = document.querySelectorAll(".btn");
  btnAtrr.forEach((node, i) => {
    node.addEventListener("click", function () {
      display(window.artists[i]);
    });
  });
  
}

function display(btnNum){
    let theader = document.getElementById("selected-artist");
    let site1_add = btnNum.links[0].add;
    let site2_add = btnNum.links[1].add;
    let site1_url = site1_add.link(btnNum.links[0].url);
    let site2_url = site2_add.link(btnNum.links[1].url);
  
    theader.setAttribute("class", "heading");
    theader.innerHTML = btnNum.name + " (" + site1_url + ", " + site2_url + ")";

//////////////////////////////////////////////////////
   
    var cardDisplay = document.getElementById("songs");
    cardDisplay.replaceChildren(" ");

    const filteredSongs = window.songs.filter(song => song.artistId == btnNum.id);
    filteredSongs.forEach(song => cardDisplay.appendChild(createCard(song)));
   
}


function createCard(btnNum) {
  
  var songsImage = document.createElement("img");
  songsImage.setAttribute("src", btnNum.img);
  songsImage.setAttribute("alt", `${btnNum.title} img`);

  var Card = document.createElement("div");
  var songsTitleData = document.createElement("h4");
  var songsYearData = document.createElement("p");
  var songsDuraData = document.createElement("footer");

  var minute = Math.floor(btnNum.duration / 60);
  var second = btnNum.duration % 60;
  
 var duration = `${minute}:${second.toString().padStart(2, '0')}`;

  Card.setAttribute("class", "card");

  var songsTitle = document.createTextNode(btnNum.title);
  var songsYear = document.createTextNode(btnNum.year);
  var songsDura = document.createTextNode(duration);

  songsTitleData.appendChild(songsTitle);
  songsYearData.appendChild(songsYear);
  songsDuraData.appendChild(songsDura);


  Card.append(songsImage, songsTitleData, songsYearData, songsDuraData);
  return Card;
}


// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");