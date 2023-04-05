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

  
    let infor = document.getElementById("songs");
    infor.innerHTML = " ";
  
    for(let i = 0; i < window.songs.length; i++){

        if(window.songs[i].artistId == btnNum.id){
            
            let row = document.createElement("TR");
            
            let col_title = document.createElement("TD");
            let col_year = document.createElement("TD");
            let col_duration = document.createElement("TD");

            let minute = Math.floor(window.songs[i].duration / 60);
            let second = window.songs[i].duration % 60;

            if(window.songs[i].billboardTop10 == true){
    
                col_title.innerHTML = window.songs[i].title + "   *** BILLBOARD TOP 10 ***";
            }
            else{
                col_title.innerHTML = window.songs[i].title
            }
            col_year.innerHTML = window.songs[i].year;
            col_duration.innerHTML = `${minute}:${second.toString().padStart(2, '0')}`;

            row.appendChild(col_title);
            row.appendChild(col_year);
            row.appendChild(col_duration);

            infor.appendChild(row);
        }
    }
   
}


// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");