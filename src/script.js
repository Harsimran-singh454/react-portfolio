window.onload = () =>{
    let menu = document.getElementById("menu");
    let ham = document.getElementById("ham")


    if(window.screen.availWidth < 786){
        menu.classList.remove('menu-desktop');
        menu.classList.add('menu-mobile-close');
    } else if(window.screen.availWidth > 786){
        menu.classList.remove('menu-mobile-close');
        menu.classList.remove('menu-mobile-open');
        menu.classList.add('menu-desktop');
    }

    window.addEventListener('resize', function(event){
        if(this.screen.availWidth < 786){
            menu.classList.remove('menu-desktop');
            menu.classList.add('menu-mobile-close');
        } else if(this.screen.availWidth > 786){
            menu.classList.remove('menu-mobile-close');
            menu.classList.remove('menu-mobile-open');
            menu.classList.add('menu-desktop');
        }
      });

    ham.addEventListener('click',()=>{
        if(menu.classList.contains('menu-mobile-close')){
            menu.classList.remove('menu-mobile-close')
            menu.classList.add('menu-mobile-open')
        } else if(menu.classList.contains('menu-mobile-open')){
            menu.classList.remove('menu-mobile-open')
            menu.classList.add('menu-mobile-close')
        }});
console.log(menu.style.display)

}