let buttons = document.querySelectorAll(".about-btn button");
let contents = document.querySelectorAll(".content");




buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        contents.forEach(contents => contents.style.display = "none");

        contents[index].style.display = "block";
        buttons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active")


    })


})

// progress bar************
let calScrollValue = () => {
    let scrollProgress = document.getElementsByClassName("progress")[0];
    let pos = document.documentElement.scrollTop;
    let calHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = (pos / calHeight) * 100;  // Calculate percentage based on the scroll position

    if (pos > 150) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(from 0deg, #fff ${scrollValue}%, #e6006d ${scrollValue}%)`;
};

window.onscroll = calScrollValue;
window.onload = calScrollValue;

// responsive menu

let menuBtn = document.querySelector(".fa-bars")
let nacBar  = document.querySelector(".navlist")

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times")
    nacBar.classList.toggle("active2")
} 




//Form Validation


function validetion() {
        let username = document.getElementById("uname").value;
        let lastname = document.getElementById("lname").value;
        let mail = document.getElementById("mail").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;
        let flag = 1;

        // Reset error messages
        document.getElementById("userror").innerHTML = "";
        document.getElementById("lserror").innerHTML = "";
        document.getElementById("mailrror").innerHTML = "";
        document.getElementById("passworderror").innerHTML = "";
        document.getElementById("meserroe").innerHTML = "";

        if (username == "") {
            document.getElementById("userror").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"></i>  **Please Enter your name**';
            flag = 0;
        } else if (username.length > 20) {
            document.getElementById("userror").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"></i>   **min 3 characters max 20 characters required**';
            flag = 0;
        } else if (!/^[a-zA-Z]+$/.test(username)) {
            document.getElementById("userror").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"></i>   **Only Alphabets are Allowed**';
            flag = 0;
        } else {
            document.getElementById("userror").innerHTML = '<i class="fa-solid fa-circle-check mx-2" style="font-size: 20px; color: green"></i>';
        }


        if (lastname == "") {
            document.getElementById("lserror").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"></i>  **Please Enter your name**';
            flag = 0;
        } else if (lastname.length <= 3 || lastname.length > 20) {
            document.getElementById("lserror").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"></i>   **min 3 characters max 20 characters required**';
            flag = 0;
        } else if (!/^[a-zA-Z]+$/.test(lastname)) {
            document.getElementById("lserror").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"></i>   **Only Alphabets are Allowed**';
            flag = 0;
        } else {
            document.getElementById("lserror").innerHTML = '<i class="fa-solid fa-circle-check mx-2" style="font-size: 20px; color: green"></i>';
        }




        if (mail == "") {
            document.getElementById("mailrror").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"></i>  **Please Enter your E-mail**';
            flag = 0;
        }
        else {
            document.getElementById("mailrror").innerHTML = '<i class="fa-solid fa-circle-check mx-2" style="font-size: 20px; color: green"></i>';
        }



        if (subject == "") {
            document.getElementById("passworderror").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"></i>  **Please Enter your Subject**';
            flag = 0;
        }

        else {
            document.getElementById("passworderror").innerHTML = '<i class="fa-solid fa-circle-check mx-2" style="font-size: 20px; color: green"></i>';
        }


        if (message == "") {
            document.getElementById("meserroe").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"> </i>   **Please Enter your Message**';
            flag = 0;
        } else if (message.length <= 20 || message.length > 1000) {
            document.getElementById("meserroe").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"> </i>   **min 20 characters max 1000 characters required**';
            flag = 0;
        } else {
            document.getElementById("meserroe").innerHTML = '<i class="fa-solid fa-circle-check mx-2" style="font-size: 20px; color: green"></i>';
        }

        return flag !== 0;

    }


// ************Custom cursor***********

let pointer = document.querySelector(".home .hero-info .cursor")
let home = document.querySelector(".home")

home.addEventListener("mousemove", function(dets){
    pointer.style.left = dets.x + "px"
    pointer.style.top = dets.y +   "px"
    pointer.style.opacity = "1"
    pointer.style.scale = "2"
})


home.addEventListener("mouseleave", function(dets){

    pointer.style.opacity = "0"
    pointer.style.scale = "0"
  

})

