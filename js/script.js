
let toggleBtn = document.querySelector('#toggle');
let navList = document.querySelector('.nav-list');
let hamburger = document.querySelector('.hamburger');
let body = document.body;
let currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
    body.classList.add('dark-theme');
}



window.onload = function(){
    let file = location.pathname.split("/").slice(-1)
    // if(file[0] === 'index.html'){
      this.openTab('home')
    // }
    if(navList.classList.contains("active")){
       
    }
    
  }
  

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
})

toggleBtn.addEventListener('click', () =>{
    console.log('click')
    body.classList.toggle('dark-theme');

    if(body.classList.contains('dark-theme')){
        localStorage.setItem('currentTheme', 'active');
    }else{
        localStorage.removeItem('currentTheme');
    }
})

function openTab(pageName){
    const tab = document.getElementsByClassName('tab');
  
      for (i = 0; i < tab.length; i++) {
          tab[i].style.display = "none";
        }
      document.getElementById(pageName).style.display = "flex";
      navList.classList.remove('active')
      window.scrollTo(0,0)
  }