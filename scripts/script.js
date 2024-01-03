const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/hippie.jpg") {
    myImage.setAttribute("src", "images/hippie-van.jpg");
  } else {
    myImage.setAttribute("src", "images/hippie.jpg");
  }
};


