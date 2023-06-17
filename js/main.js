const currentYear = new Date().getFullYear();
const copyright = `© ${currentYear} YassTechNo. All rights reserved.`;

// Select the span element by its ID
const spanElement = document.getElementById("copyright");

// Update the content of the span element with the copyright string
spanElement.textContent = copyright;
//========================================

function redirect(){
 var search = $("#search").val()

 if(search == "2"){
location.href="https://yasstechdev.blogspot.com/2023/06/best-of-adobe.html"
}
}