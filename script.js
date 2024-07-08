const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {

    //! use display or visibility depending on what we are gonna do 
    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
    }
    else{
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show";
    };
});