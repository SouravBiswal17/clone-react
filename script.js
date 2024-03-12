let hrs = document.getElementById("hrs");
    let min = document.getElementById("min");
   

    setInterval(()=>{
        let currentTime =new Date();

hrs.innerHTML = (currentTime.getHours()<10?"0":"")+currentTime.getHours();
min.innerHTML =  (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();

    },1000)
 
let modebtn=document.querySelector("#mode");
let currentmode = "light";
modebtn.addEventListener("click",() =>{
    if(currentmode === "light"){
        currentmode= "dark";
        document.querySelector("body").style.backgroundColor="black"
        
    }else{
        currentmode="light"
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currentmode);
});