const body = document.body
const photos = [
  "./assets/img/1.jpg",
  "./assets/img/2.jpg",
  "./assets/img/3.jpg",
  "./assets/img/4.jpg",
  "./assets/img/5.jpg",
  "./assets/img/6.jpg",
  "./assets/img/7.jpg",
  "./assets/img/8.jpg",
  "./assets/img/9.jpg",
  "./assets/img/10.jpg",

]

const changeBackground = () =>{
  const randomNumber = Math.floor(Math.random() * photos.length);
  newBackground = photos[randomNumber]
  body.style.backgroundImage = `url(${newBackground})`;
}


setInterval(() => {
  changeBackground()
}, 15000)

changeBackground()

