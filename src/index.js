
console.log("Restaurant Page");

import { pageLoad } from "./pageLoad"
import { menuLoad } from "./menu"
import { contactLoad } from "./contact"
import { createNav } from "./navbar";

//---STYLESHEET---
const stylesheet = document.querySelector("#stylesheet");

//
let content = document.querySelector("#content");





//---LANDING PAGE---
//createNav();
pageLoad();
stylesheet.setAttribute("href","./style/style.css");

//Tabs
const tabs = document.querySelectorAll(".nav-links");
console.log(tabs);


//---SWITCH TABS---
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        let myPage = event.target.getAttribute("data-page");
        content.textContent="";
        console.log("am here");
        if (myPage=="home"){
            console.log("Switch to Home");
            stylesheet.setAttribute("href","./style/style.css");
            pageLoad();
        }
        else if (myPage=="menu"){
            console.log("Switch to Menu");
            stylesheet.setAttribute("href","./style/menu.css");
            menuLoad();
        }
        else if (myPage=="info"){
            console.log("Switch to Contact");
            stylesheet.setAttribute("href","./style/contact.css");
            contactLoad();
        }
    });
});

















