(()=>{"use strict";function e(e,t){t.forEach((t=>{e.appendChild(t)}))}function t(e,t=[""],n="#"){let i=document.createElement("li"),a=document.createElement("a");return a.setAttribute("href",n),t.forEach((e=>{a.classList.add(e)})),a.textContent=e,a.setAttribute("data-page",e.toLowerCase()),i.appendChild(a),i}function n(){let n=document.createElement("nav");n.setAttribute("id","navbar");let i=document.createElement("ul");i.setAttribute("id","navbar-ul");let a=t("Info",["nav-links"]),l=t("Menu",["nav-links"]),o=t("Home",["nav-links"]),c=t("Sweet Tooth",["nav-links"]);return c.setAttribute("id","nav-title"),e(i,[a,l,o,c]),n.appendChild(i),n}function i(e,t=[""]){let n=document.createElement("span");return t.forEach((e=>{n.classList.add(e)})),n.textContent=e,n}function a(e,t,n=[""]){let i=document.createElement("img");return n.forEach((e=>{i.classList.add(e)})),i.setAttribute("src",e),i.setAttribute("alt",t),i}function l(){console.log("Main Page:");const t=document.querySelector("#content"),l=n();t.appendChild(l);let o=document.createElement("div");o.setAttribute("id","main");let c=document.createElement("h1");c.setAttribute("id","main-title"),["Sweetest ","Breakfast ","In","Town!"].forEach((e=>{let t=i(e,["main-title-span"]);c.appendChild(t),c.append(" ")})),o.appendChild(c);let s=document.createElement("div");s.setAttribute("id","div-img-icons"),e(s,[a("./images/muffin.jpeg","muffin",["main-img-icons"]),a("./images/pastry-mix.jpeg","pastry mix",["main-img-icons"]),a("./images/waffles.jpeg","waffles",["main-img-icons"])]),o.appendChild(s);let d=document.createElement("h2");d.setAttribute("id","main-sub-title"),d.textContent="@SweetTooth",o.appendChild(d),t.appendChild(o)}const o={Waffles:{"Strawberry & Honey":{title:"Strawberry & Honey",src:"./images/waffle-honey.png",info:"Waffles with pure honey and strawberry topping",price:"4.50$"},"Simply Buttered":{title:"Simply Buttered",src:"./images/waffle-butter.png",info:"Simple waffles with butter topping",price:"1.50$"}},Pancakes:{"Butter & Maple":{title:"Butter & Maple",src:"./images/pancake-butter-maple.png",info:"Classic butter pancakes with maple syrup",price:"2.00$"},Banana:{title:"Banana",src:"./images/pancake-banana.png",info:"Pancakes served with banana topping",price:"3.00$"}},Muffins:{"Chocolate Chip":{title:"Chocolate Chip",src:"./images/muffin-chocolate-chip.png",info:"Classic chocolate chip muffin",price:"3.50$"},Chocolate:{title:"Chocolate",src:"./images/muffin-chocolate.png",info:"Oozy chocolate muffin with goldberries on the inside",price:"4.50$"},Blueberry:{title:"Blueberry",src:"./images/muffin-blueberry.png",info:"Delicios blueberry muffin",price:"4.00$"}}};console.log("Restaurant Page");const c=document.querySelector("#stylesheet");let s=document.querySelector("#content");const d=document.querySelectorAll(".nav-links");console.log(d),l(),c.setAttribute("href","./style/style.css"),d.forEach((t=>{t.addEventListener("click",(()=>{let t=event.target.getAttribute("data-page");s.textContent="","home"==t?(console.log("Switch to Home"),c.setAttribute("href","./style/style.css"),l()):"menu"==t?(console.log("Switch to Menu"),c.setAttribute("href","./style/menu.css"),function(){console.log("Menu Page:");const t=document.querySelector("#content"),i=n();t.appendChild(i);let a=document.createElement("div");a.setAttribute("id","main");let l=document.createElement("div"),c=document.createElement("h1");c.setAttribute("id","title"),c.textContent="Our Sweet Menu",l.appendChild(c),a.appendChild(l);let s=document.createElement("div");s.setAttribute("id","menu-div-options");for(let[t,n]of Object.entries(o)){let i=document.createElement("div");i.classList.add("class","menu-div-block");let a=document.createElement("div"),l=document.createElement("h2");l.classList.add("class","menu-block-title"),l.textContent=t,a.appendChild(l),i.appendChild(a);for(let[t,a]of Object.entries(n)){let t=document.createElement("div");t.classList.add("class","menu-option");let n=document.createElement("div"),l=document.createElement("img");l.classList.add("menu-option-img"),l.setAttribute("src",a.src),l.setAttribute("alt",a.title),n.appendChild(l),t.appendChild(n);let o=document.createElement("div");o.classList.add("menu-option-info");let c=document.createElement("h3");c.classList.add("menu-info-title"),c.textContent=a.title;let s=document.createElement("p");s.classList.add("menu-info-text"),s.textContent=a.info;let d=document.createElement("h3");d.classList.add("menu-info-price"),d.textContent=a.price,e(o,[c,s,d]),t.appendChild(o),i.appendChild(t)}s.appendChild(i)}a.appendChild(s),t.appendChild(a)}()):"info"==t&&(console.log("Switch to Contact"),c.setAttribute("href","./style/contact.css"),function(){console.log("Contact Page:");const e=document.querySelector("#content"),t=n();e.appendChild(t);let a=document.createElement("div");a.setAttribute("id","main-form");let l=document.createElement("h1");function o(e,t){let n=document.createElement("h2");return n.classList.add("form-info"),n.textContent=e,n.appendChild(i(t,["form-span"])),n}l.setAttribute("id","form-title"),l.textContent="Sweet Tooth",a.appendChild(l),a.appendChild(o("Location","Dalia st. 15, Los Angeles")),a.appendChild(o("Open","Mon-Sat: 6 a.m - 15 p.m")),a.appendChild(o("Phone","647356482")),a.appendChild(o("Email","sweettooth@gmail.com")),e.appendChild(a)}())}))}))})();