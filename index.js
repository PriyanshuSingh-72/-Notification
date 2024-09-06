let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let container = document.querySelector(".container");
let msgbox = document.querySelector("#msgbox");
let btn = document.querySelectorAll(".btn");



btn1.addEventListener('click',()=>{
    showmsg("success");
    console.log("btn1 clicked")

})
btn2.addEventListener('click',()=>{
    showmsg("error");
    console.log("btn2 clicked")
})
btn3.addEventListener('click',()=>{
    showmsg("invalid");
    console.log("btn3 clicked");
    
})

function showmsg(msg){
    let div = document.createElement("div");
    div.classList.add("color");
    div.innerText = msg;
    msgbox.appendChild(div);
    if(msg.includes('error')){
        div.classList.add("red");
    }
    if(msg.includes('invalid')){
        div.classList.add("orange");
    }
    setTimeout(()=>{
        div.remove("color");
    },5000);
}


