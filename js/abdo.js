// // search-box open close js code
// let navbar = document.querySelector(".navbar");
// let searchBox = document.querySelector(".search-box .bx-search");
// // let searchBoxCancel = document.querySelector(".search-box .bx-x");

// searchBox.addEventListener("click", ()=>{
//   navbar.classList.toggle("showInput");
//   if(navbar.classList.contains("showInput")){
//     searchBox.classList.replace("bx-search" ,"bx-x");
//   }else {
//     searchBox.classList.replace("bx-x" ,"bx-search");
//   }
// });

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
navLinks.classList.toggle("show1");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
navLinks.classList.toggle("show3");
}
let inoxArrow = document.querySelector(".inox-arrow");
inoxArrow.onclick = function() {
navLinks.classList.toggle("show2");
}
let almyarrow = document.querySelector(".almy-arrow");
almyarrow.onclick = function() {
navLinks.classList.toggle("show4");
}
// popup Index ****************************************
let ourindex = document.querySelectorAll(".data-holder img ");
ourindex.forEach(img => {
img.addEventListener('click', (e) => {
let ouverly = document.createElement("div");
ouverly.className = 'popupg-ouverly';
document.body.appendChild(ouverly);
let popupBox = document.createElement("div");
popupBox.className = 'popupg-box';

if(img.alt !== null){
    let imgHeading = document.createElement("h3");

    let imgText = document.createTextNode(img.alt);

    imgHeading.appendChild(imgText);

    popupBox.appendChild(imgHeading)
}

    let popupImage = document.createElement("img");

    popupImage.src = img.src;

    popupBox.appendChild(popupImage);

    document.body.appendChild(popupBox);

    let closeButton = document.createElement("span");

    let closeButtonText = document.createTextNode("X");

    closeButton.appendChild(closeButtonText);

    closeButton.className = ('close-button');

    popupBox.appendChild(closeButton);

});
});

// Articles ***********************************************************************

let ourArticle = document.querySelectorAll(".articles img ");
ourArticle.forEach(img => {
img.addEventListener('click', (e) => {
let ouverly = document.createElement("div");
ouverly.className = 'popup-ouverly';
document.body.appendChild(ouverly);
let popupBox = document.createElement("div");
popupBox.className = 'popup-box';

if(img.alt !== null){
    let imgHeading = document.createElement("h3");

    let imgText = document.createTextNode(img.alt);

    imgHeading.appendChild(imgText);

    popupBox.appendChild(imgHeading)
}

    let popupImage = document.createElement("img");

    popupImage.src = img.src;

    popupBox.appendChild(popupImage);

    document.body.appendChild(popupBox);

    let closeButton = document.createElement("span");

    let closeButtonText = document.createTextNode("X");

    closeButton.appendChild(closeButtonText);

    closeButton.className = ('close-button');

    popupBox.appendChild(closeButton);

});
});
// Gallery**********************************************************************************************************************
// create popup galery

// create popup image
let ourGallery = document.querySelectorAll(".gallery img ");
ourGallery.forEach(img => {
img.addEventListener('click', (e) => {
let ouverly = document.createElement("div");
ouverly.className = 'popupg-ouverly';
document.body.appendChild(ouverly);
let popupBox = document.createElement("div");
popupBox.className = 'popupg-box';

if(img.alt !== null){
    let imgHeading = document.createElement("h3");

    let imgText = document.createTextNode(img.alt);

    imgHeading.appendChild(imgText);

    popupBox.appendChild(imgHeading)
}

    let popupImage = document.createElement("img");

    popupImage.src = img.src;

    popupBox.appendChild(popupImage);

    document.body.appendChild(popupBox);

    let closeButton = document.createElement("span");

    let closeButtonText = document.createTextNode("X");

    closeButton.appendChild(closeButtonText);

    closeButton.className = ('close-button');

    popupBox.appendChild(closeButton);

});
});
// Meeting*************************************************************************
let ourmeeting = document.querySelectorAll(".meeting img ");
ourmeeting.forEach(img => {
img.addEventListener('click', (e) => {
let ouverly = document.createElement("div");
ouverly.className = 'popupg-ouverly';
document.body.appendChild(ouverly);
let popupBox = document.createElement("div");
popupBox.className = 'popupg-box';

if(img.alt !== null){
    let imgHeading = document.createElement("h3");

    let imgText = document.createTextNode(img.alt);

    imgHeading.appendChild(imgText);

    popupBox.appendChild(imgHeading)
}

    let popupImage = document.createElement("img");

    popupImage.src = img.src;

    popupBox.appendChild(popupImage);

    document.body.appendChild(popupBox);

    let closeButton = document.createElement("span");

    let closeButtonText = document.createTextNode("X");

    closeButton.appendChild(closeButtonText);

    closeButton.className = ('close-button');

    popupBox.appendChild(closeButton);

});
});

// close Popup articles************************************************************
document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {
        // remove Pupop
        e.target.parentNode.remove();
        // remove Overly
        document.querySelector(".popup-ouverly").remove();
    }

});

// close Popup gallery*************************************************************
document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {
        // remove Pupop
        e.target.parentNode.remove();
        // remove Overly
        document.querySelector(".popupg-ouverly").remove();
    }
    
});
// close Popup meting**********************************************************
document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {
        // remove Pupop
        e.target.parentNode.remove();
        // remove Overly
        document.querySelector(".popupg-ouverly").remove();
    }
    
});
// ------------------------------------------------------------------------------
  // عند النقر على الزر - العودة للأعلى
let span = document.querySelector(".scroll-to-top");
window.onscroll = function() {
    console.log(this.scrollY);
    if (this.scrollY >= 300) {
        span.classList.add("show");
    } else {
        span.classList.remove("show");
    }
    // this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth",
    });
};
// *****************
const showDropdown = (dropwneId) => {
    const dropdowns = document.getElementById(dropwneId);
    dropdowns.addEventListener('click', () => {
    dropdowns.classList.toggle('sub-menu');
    })
}
showDropdown('sub-menu');
// wathssap 
setTimeout(() => {
    document.querySelector('.whatsapp-float').style.display = 'flex';
}, 5000);
// ------------------------------