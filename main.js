const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["/images/pic1.jpg", "/images/pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const alts = {
    "/images/pic1.jpg": "Closeup of a an eye",
    "/images/pic2.jpg": "Rock? Sand?",
    "/images/pic3.jpg": "White and purple flowers",
    "/images/pic4.jpg": "Egyptian Hyroglyphs",
    "/images/pic5.jpg": "Moth on a leaf"
}

/* Looping through images */

for (const image of images) {

    const newImage = document.createElement("img");
    newImage.setAttribute("src", `images/${image}`);
    newImage.setAttribute("alt", alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
