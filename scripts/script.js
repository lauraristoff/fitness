/*
Student Name: Laura Ristoff
File Name: script.js
Date: 05/11/2021
*/

//Global Variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");


//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        menu.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

//Function to display the burpees example video
function burpees() {
    videoSource.src = "./media/burpees.mp4";
    descriptionSource.src = "media/burpees-description.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display the plank example video
function plank() {
    videoSource.src = "./media/plank.mp4";
    descriptionSource.src = "media/plank-description.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display the mountain climbers example video
function mountain() {
    videoSource.src = "./media/mc.mp4";
    descriptionSource.src = "media/mountain-description.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display a promo code
function discount() {
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Promo Code: D25START"
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em"
}
