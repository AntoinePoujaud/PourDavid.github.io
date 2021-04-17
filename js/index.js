const myButton = document.getElementById("click-here");

// if (window.jQuery) {  
//     // jQuery is loaded  
//     alert("Yeah!");
// } else {
//     // jQuery is not loaded
//     alert("Doesn't Work");
// }
let counter = 0;
const handleClick = (e) => {
    switch(counter) {
        case 0:
            $("#test").fadeIn("slow");
            $("#h1cache").fadeIn("slow");
            counter++;
            break;
        case 1:
            $("#test1").fadeIn("slow");
            counter++;
            break;
        case 2:
            $("#test2").fadeIn("slow");
            counter++;
            break;
        case 3:
            $("#test3").fadeIn("slow");
            $("#test3").css("display:flex");
            $("#test3iframe").css("display:block");
            counter++;
            break;
        case 4:
            $("#test4").fadeIn("slow");
            counter++;
            break;
        case 5:
            $("#test5").fadeIn("slow");
            counter++;
            break;
        default:
            break;
    }
    
}