console.log("lets start javascript");

let string ="";
let buttons = document.querySelectorAll("button")
let numbers = document.querySelectorAll(".number")

Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener("click", (e) => { 

        if (e.target.innerHTML== "=") {
            string = eval(string)
            document.querySelector(".display").innerHTML = string;
        }
        else 
        {
        string  = string + e.target.innerHTML 
        document.querySelector(".display").innerHTML = string;
    }
    })
    buttons.addEventListener("keydown",(e)=>{
        e.defaultPrevented
        e.key
        console.log(e.key);
        if (isNaN(e.key)) {
            document.querySelector(".display").innerHTML = "ERROR"
            
        }
        else{
            string = string + e.key
            document.querySelector(".display").innerHTML = string
        }

    })
})


document.querySelector(".ac").addEventListener("click",(e)=>{
    
    string = ""
    document.querySelector(".display").innerHTML = " "
})

document.querySelector(".del").addEventListener("click",(e)=>{
   

    let last = string.charAt(string.length-4)
    console.log(string.charAt(string.length-4));
    console.log(last);
    document.querySelector(".display").innerHTML = string.replace(last," ").replace("DEL"," ")
    string = string.replace(last," ").replace("DEL"," ").trim()

})