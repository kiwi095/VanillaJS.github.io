const images = [ "0.jpg",  "1.jpeg",   "2.JPG",  "3.jpeg", "4.jpeg", "5.jpg", "6.jpg", "7.png", "8.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)]


const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;


bgImage.classList.add('bgim');

document.body.appendChild(bgImage);

