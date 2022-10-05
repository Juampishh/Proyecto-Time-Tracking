import data from "./data.json" assert{type:"json"};

let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);

let bgColor = [
        "hsl(15, 100%, 70%)",
        "hsl(195, 74%, 62%)",
        "hsl(348, 100%, 68%)",
        "hsl(145, 58%, 55%)",
        "hsl(264, 64%, 52%)",
        "hsl(43, 84%, 65%)",
]

let dailyBtn = document.querySelector("#daily");
let weeklyBtn = document.querySelector("#weekly");
let monthlyBtn = document.querySelector("#monthly");

let secondSection = document.querySelector(".second-section")

dailyBtn.addEventListener("click",()=>{
   drawElement(dailyArray)
});

weeklyBtn.addEventListener("click",()=>{
    drawElement(weeklyArray)
 });

 monthlyBtn.addEventListener("click",()=>{
    drawElement(monthlyArray)
 });

 
function drawElement(array){
    secondSection.innerHTML = "";
    array.forEach( (element,index)=>{

        let title = data[index].title;
        let titleLowerCase = title.toLowerCase();

        if(titleLowerCase == "self care"){
            titleLowerCase = "self-care"
        }
        secondSection.innerHTML +=  `
        <div class="card">
             <div class="card__background" style="background-color: ${bgColor[index]} ;">
                <img class="card__img" src="./images/icon-${titleLowerCase}.svg" alt="Maletin">
             </div>
            <div class="card__details">
                <div class="card__activity">
                 <p class="card__tittle">${title}</p>
                    <img class="card__img" src="./images/icon-ellipsis.svg" alt="Tres puntos">
                </div>
                <div class="card__time">
                    <p class="card__hour">${element.current}hrs</p>
                    <p class="card__previous">Antes - ${element.previous}hrs</p>
             </div>
        </div>
        `
    })
}



