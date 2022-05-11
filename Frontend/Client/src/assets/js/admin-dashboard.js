
async function sendEmail(email,content,destiny){

   


    var miHtml = "<div style = 'height: 100vh;background-color: #272829; text-align: center;'>"+
   "<img width='200px' height='200px'  style='margin-top: 20px; display: inline;' src='https://portfolio-jdev.netlify.app/assets/images/icon-512x512.png' >"+
   "<h1 style= 'color: #00b6c0;'>" + email + " Has sent a message </h1> "+
   "<h2 style= 'color: #fff;'>The message was:</h2> "+
   " <p style= 'color: #fff; margin-bottom: 20px;'>"+content+"</p>"+
   " </div> ";
    
    
     return Email.send({
        SecureToken : "9f2086a6-09f0-4453-981c-9c74b45d5664",
        To : destiny,
        From : "portfoliojdev@gmail.com",
        Subject : "Portfolio",
        Body : miHtml
    }).then(
        message => {
          document.getElementById('sendBtn').disabled = false;
            
            return message
        }
      );
    }









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