const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const alts = {
    "pic1.jpg": "Closeup of a an eye",
    "pic2.jpg": "Rock? Sand?",
    "pic3.jpg": "White and purple flowers",
    "pic4.jpg": "Egyptian Hyroglyphs",
    "pic5.jpg": "Moth on a leaf"
}

/* Looping through images */

for (const image of images) {

    const newImage = document.createElement("img");
    newImage.setAttribute("src", `images/$(image)`);
    newImage.setAttribute("alt", alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
