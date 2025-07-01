let inputtemp = document.getElementById("inputtemp");
let outputtemp=document.getElementById("outputtemp");
let tofahrenheit = document.getElementById("tofahrenheit");
let tocelsius = document.getElementById("tocelsius");
let resetbtn = document.getElementById("resetbtn");
let temp;

function tempconversion(){
if(tofahrenheit.checked){
    temp=Number(inputtemp.value);
    temp=(temp*9/5)+32; 
    outputtemp.textContent=temp.toFixed(1)+"F";   
}
else if(tocelsius.checked){
    temp=Number(inputtemp.value);
    temp=(temp-32)*5/9;
    outputtemp.textContent=temp.toFixed(1)+"C";
}
}

function resetall(){
    inputtemp.value=0;
    outputtemp.textContent=0;
}

resetbtn.onclick=resetall;
