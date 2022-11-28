const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg"
];

function backgroundImage() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    
    document.body.style.backgroundImage = `linear-gradient(rgba(20, 20, 20, 0.2), rgba(20, 20, 20, 0.2)),url('./img/${chosenImage}')`;
}

backgroundImage();