
var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{

document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
  
  
   var value = this.innerHTML;
   MakeSound(value);
buttonPressed(value);
   
   
});

}
 document.addEventListener("keypress",function(event)
 {
        MakeSound(event.key);
        buttonPressed(event.value);
 });

function MakeSound(key)
{
   switch (key) {
      case 'w':
       
         var audio=new Audio("sounds/tom-1.mp3");
         audio.play();
         break;
        case 'a':
         var audio=new Audio("sounds/tom-2.mp3");
         audio.play();
         break;
         case 's':
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
            case 'd':
               var audio=new Audio("sounds/tom-4.mp3");
               audio.play();
               break;
          case 'j':
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            
         break;
         case 'k':
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
            
        case 'l':
         var audio=new Audio("sounds/snare.mp3");
         audio.play();
         break;
         default:
            break;
   }
}
//     document.querySelectorAll(".drum")[i].addEventListener("click",handelListner);
// or
// document.querySelectorAll("button")[].addEventListener("click",handelListner);
// function handelListner()
// {
//     alert("I got clicked");
// }
function buttonPressed(Key)
{
   var activeButton = document.querySelector("." + Key);

   activeButton.classList.add("pressed");
    setTimeout(function(){
         activeButton.classList.remove("pressed");
    },100);
}