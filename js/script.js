const close_btn = document.querySelector('#close-btn');
const menu = document.querySelector('#menu');
const menu_icon = document.querySelector('#menu-btn');

const a_tags = document.querySelectorAll('nav ul a'); /*For display nav mneu a tags that hided*/

const body = document.querySelector("body");

// Menu Button 
menu_icon.addEventListener('click', function(){
    menu.classList.toggle('active'); // Toggle can add and remove class name same time. first click add and second click remove

    /*For display nav mneu a tags that hided*/
    a_tags.forEach(element => {
        element.classList.toggle('a-active'); // Toggle can add and remove class
    });

});

    // Close Button 
    close_btn.addEventListener('click', function(){
        menu.classList.remove('active');

        a_tags.forEach(element => {
            element.classList.remove('a-active'); 
        });
    });

        //   This part for close open slide menu when user click on body

        body.addEventListener("click" , e =>{
            let clickedElm = e.target;


                if(!clickedElm.classList.contains("menu-btn") &&!clickedElm.classList.contains("close-btn") && !clickedElm.classList.contains("menu")){
                    menu.classList.remove("active");

                    a_tags.forEach(element => {
                        element.classList.remove('a-active'); 
                    });
                }
        
        });

        
        
        //All for sticky header 
        const navbar = document.querySelector(".nav-bar");

        window.onscroll = ()=>{
            this.document.documentElement.scrollTop > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
        }


        //Dark Mode 
        const darkMode_icon = document.querySelector('.mode');

        //Mode save on web local storage part 2
        let getMode = localStorage.getItem("rmst-mode");
        if(getMode && getMode === "dark"){
            document.body.classList.toggle("dark-theme");
            darkMode_icon.src = "images/dark-mode.png";
            console.log(getMode);
        }

        darkMode_icon.addEventListener('click', function(){
        document.body.classList.toggle("dark-theme");

        if(document.body.classList.contains("dark-theme")){
            darkMode_icon.src = "images/dark-mode.png";
        }else{
            darkMode_icon.src = "images/light-mode.png";
        }

        //Mode save on web local storage part 1
        if(!body.classList.contains("dark-theme")){
            return localStorage.setItem("rmst-mode", "light");

        }else{
            localStorage.setItem("rmst-mode", "dark");
        }
        //Mode save on web local storage part 1
        });
