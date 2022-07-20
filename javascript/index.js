function Scroll(){
    if(scrollY > 0){
        menu.classList.add('scroll');
    }else{
        menu.classList.remove('scroll');
    }
}

function Mostrar(){
    let cont = 0;
    var projectoculta = document.querySelector(".project-oculta");
    projectoculta.style.display = 'flex';
  

     
    var buttonView = document.querySelector("#button-view");
    buttonView.style.display = 'none';

    var buttonHide = document.querySelector("#button-hide");
    buttonHide.style.display= 'flex';


}

function Hide(){
    var buttonView = document.querySelector("#button-view");
    var buttonHide = document.querySelector("#button-hide");
    var projectoculta = document.querySelector(".project-oculta");
    
    buttonHide.style.display = 'none';
    buttonView.style.display = 'flex';
    projectoculta.style.display = 'none';
}   

// Header
let home = document.querySelector('.home');
let about = document.querySelector('.about');
let project = document.querySelector('.project');
let contact = document.querySelector('.contact');
let skills = document.querySelector('.skills');

// Estilização por meio do scroll

function ClassScroll() {
    
    window.addEventListener('scroll', function(e){
        if(window.pageYOffset > 650){
            skills.style.color='#2952ce';
            home.style.color = '#e0ddd9';
        }if(window.pageYOffset < 100){
            skills.style.color='#e0ddd9';
            home.style.color='#2952ce';
        }if(window.pageYOffset > 1400){
            project.style.color='#2952ce';
            skills.style.color="#e0ddd9";
        }if(window.pageYOffset <1400){
            project.style.color = '#e0ddd9';
        }if(window.pageYOffset > 2000){
            about.style.color='#2952ce';
            project.style.color = "#e0ddd9";
        }if(window.pageYOffset < 2100){
            about.style.color='#e0ddd9';
        }if(window.pageYOffset > 2700){
            contact.style.color = "#2952ce";
            about.style.color ='#e0ddd9'
        }if(window.pageYOffset < 2700){
            contact.style.color = '#e0ddd9';
        }
    })
    }


ClassScroll();

