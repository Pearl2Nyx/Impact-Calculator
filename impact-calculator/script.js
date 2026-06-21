const calculateBtn =
document.getElementById("calculateBtn");

const result =
document.getElementById("result");

calculateBtn.addEventListener("click",()=>{

result.style.display="block";

result.scrollIntoView({
behavior:"smooth"
});

});

const secretBtn =
document.getElementById("secretBtn");

const achievementBox =
document.getElementById("achievementBox");

secretBtn.addEventListener("click",()=>{

achievementBox.style.display="block";

achievementBox.scrollIntoView({
behavior:"smooth"
});

});