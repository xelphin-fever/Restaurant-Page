import { pageLoad } from "./pageLoad"
import { menuLoad } from "./menu"
import { contactLoad } from "./contact"
import {makeNavBar} from "./utilities"


function createNav (){
    const content= document.querySelector('#content');
    //---NAVBAR---
    let navbar = makeNavBar();
    content.appendChild(navbar);
    let myTabs = document.querySelectorAll(".nav-links");
    myTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            let myPage = event.target.getAttribute("data-page");
            content.textContent="";
            //
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
}

export {createNav}