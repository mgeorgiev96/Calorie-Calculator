let gender = document.querySelector(".gender")
let weight = document.querySelector(".weight")
let activity = document.querySelector(".activity")
let reset_Button = document.querySelector(".reset_Button")
let calc_Button = document.querySelector(".calc_Button")
let age = document.querySelector(".age")
let feet = document.querySelector(".feet")
let inch = document.querySelector(".inch")
let quantity = document.querySelector(".quantity") 
let display = document.querySelector(".display")
let result = document.querySelector(".result")

let g = "male"
let k_lb = "lb"
let active = 1.2


const calculate = ()=>{
    let calc
    let height = (+feet.value)*12 + (+inch.value)
    let kg = +quantity.value * 2.2 
    
    if(isNaN(+age.value)||isNaN(+quantity.value)||isNaN(+feet.value)||isNaN(+inch.value)){
        alert("Enter valid numbers in the fields")
    }else{
          
    if(g==="male"){
      if(k_lb==="lb"){
         calc = ((66 + (6.3*(+quantity.value)) + (12.9*(height)))  - (+age.value * 6.8)) * active
      }else{
         calc = ((66 + (6.3*(kg)) + (12.9*(height)))  - (+age.value * 6.8)) * active
      }  
    }else if(g==="female"){
       if(k_lb==="lb"){
          calc = ((655 + (4.3*(+quantity.value)) + (4.7*(height)))  - (+age.value * 4.7)) * active
      }else{
          calc = ((655 + (4.3*(kg)) + (4.7*(height)))  - (+age.value * 4.7)) * active
          
      }   
    }
    
    result.innerHTML = `Daily Calories: ${calc.toFixed(2)}`
    result.classList.add("active")
    setTimeout(()=>{
        result.classList.remove("active")
    },500)  
    }
}

const reset = ()=>{
    result.innerHTML = ""
    feet.value = ""
    inch.value = ""
    age.value = ""
    quantity.value = ""
}

const changeGender = (e)=>{
    let target = e.target
    if(target.value==="female"){
        g = "female"
    }else if(target.value==="male"){
        g = "male"
    }
}
const changeWeight = (e)=>{
     let target = e.target
     if(target.value==="kg"){
        k_lb = "kg" 
     }else if(target.value==="lb"){
        k_lb = "lb" 
     }
}
const changeActivity = (e)=>{
     let target = e.target
     active = +target.value
}



activity.addEventListener("click",changeActivity)
weight.addEventListener("click",changeWeight)
gender.addEventListener("click",changeGender)
calc_Button.addEventListener("click",calculate)
reset_Button.addEventListener("click",reset)