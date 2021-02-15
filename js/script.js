let abm = document.querySelectorAll(".abm")
let abmArr = Array.from(abm)

abmArr.map(text=>{
    
    let valueArr = Array.from(text.classList)
  valueArr.map(value=>{

      if(value.split("-").length > 1){
          value.split("-").map(mainvalue=>{
              if(mainvalue == "color"){
                  let color = value.split("-")[2];
                  text.style.color = color
              }else if(mainvalue == "size"){
                let size = value.split("-")[2];
                text.style.fontSize = size
              }
          })
      }
      
  })
})