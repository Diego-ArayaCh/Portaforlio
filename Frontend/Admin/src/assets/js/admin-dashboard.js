// var i =0;
// function changeTheme(){
//   let root = document.documentElement;
  
//     if(i == 0){
//       root.style.setProperty('--orange-color', ' #007A7A' )
//   root.style.setProperty('--blue-color', ' #FC8019' )
//   root.style.setProperty('--space-color', ' #000' )
//   root.style.setProperty('--gray-color', ' #93959F' )
//   root.style.setProperty('--white-color', ' #000' )
//       i = 1
//     }
//     else{
     


//       root.style.setProperty('--orange-color', ' #FC8019' )
//   root.style.setProperty('--blue-color', ' #007A7A' )
//   root.style.setProperty('--space-color', ' #000' )
//   root.style.setProperty('--gray-color', ' #93959F' )
//   root.style.setProperty('--white-color', ' #ffffff' )
//       i = 0
//     }
  
  
  
// }


function setActive(HtmlElement){
let elements = document.getElementsByClassName("active")

    if(elements.length>0){
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.classList.remove( "active" );
    }
           
        
       
    }
    HtmlElement.classList.add("active");

  
}