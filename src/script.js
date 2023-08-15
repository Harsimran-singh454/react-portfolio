window.onload = () =>{
    let menu = document.getElementById("menu");
    let ham = document.getElementById("ham")

    ham.addEventListener('click',()=>{
        console.log('clicking');
        if(menu.style.display=="flex"){
            menu.style.display="none";
        } else if(menu.style.display=="none"){
            menu.style.display="flex";
        }
    });

}