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
              }else if(mainvalue == "bg"){
                let bg = value.split("-")[2];
                text.style.background = bg
              }else if(mainvalue == "p"){
                let padding = value.split("-")[2];
                text.style.padding = padding
              }else if(mainvalue == "pl"){
                let paddingleft = value.split("-")[2];
                text.style.paddingLeft = paddingleft
              }else if(mainvalue == "pr"){
                let paddingright = value.split("-")[2];
                text.style.paddingRight = paddingright
              }else if(mainvalue == "pt"){
                let paddingtop = value.split("-")[2];
                text.style.paddingTop = paddingtop
              }else if(mainvalue == "pb"){
                let paddingbottom = value.split("-")[2];
                text.style.paddingBottom = paddingbottom
              }else if(mainvalue == "px"){
                let paddingx = value.split("-")[2];
                text.style.paddingLeft = paddingx
                text.style.paddingRight = paddingx
              }else if(mainvalue == "py"){
                let paddingy = value.split("-")[2];
                text.style.paddingTop = paddingy
                text.style.paddingBottom = paddingy
              }else if(mainvalue == "m"){
                let margin = value.split("-")[2];
                text.style.margin = margin
              }else if(mainvalue == "ml"){
                let marginleft = value.split("-")[2];
                text.style.marginLeft = marginleft
              }else if(mainvalue == "mr"){
                let marginright = value.split("-")[2];
                text.style.marginRight = marginright
              }else if(mainvalue == "mt"){
                let margintop = value.split("-")[2];
                text.style.marginTop = margintop
              }else if(mainvalue == "mb"){
                let marginbottom = value.split("-")[2];
                text.style.marginBottom = marginbottom
              }else if(mainvalue == "mx"){
                let marginx = value.split("-")[2];
                text.style.marginLeft = marginx
                text.style.marginRight = marginx
              }else if(mainvalue == "my"){
                let marginy = value.split("-")[2];
                text.style.marginTop = marginy
                text.style.marginBottom = marginy
              }else if(mainvalue == "align"){
                let align = value.split("-")[2];
                text.style.textAlign = align
              }else if(mainvalue == "w"){
                let width = value.split("-")[2];
                text.style.width = width
              }else if(mainvalue == "h"){
                let height = value.split("-")[2];
                text.style.height = height
              }else if(mainvalue == "btn"){
                text.style.padding = "10px"
                text.style.display = "inline-block"
              }else if(mainvalue == "b"){
                let width = value.split("-")[2];
                let bstyle = value.split("-")[3];
                let color = value.split("-")[4];
                text.style.border = `${width} ${bstyle} ${color}`
              }else if(mainvalue == "bt"){
                let width = value.split("-")[2];
                let bstyle = value.split("-")[3];
                let color = value.split("-")[4];
                text.style.borderTop = `${width} ${bstyle} ${color}`
              }else if(mainvalue == "bb"){
                let width = value.split("-")[2];
                let bstyle = value.split("-")[3];
                let color = value.split("-")[4];
                text.style.borderBottom = `${width} ${bstyle} ${color}`
              }else if(mainvalue == "bl"){
                let width = value.split("-")[2];
                let bstyle = value.split("-")[3];
                let color = value.split("-")[4];
                text.style.borderLeft = `${width} ${bstyle} ${color}`
              }else if(mainvalue == "br"){
                let width = value.split("-")[2];
                let bstyle = value.split("-")[3];
                let color = value.split("-")[4];
                text.style.borderRight = `${width} ${bstyle} ${color}`
              }
          })
      }
      
  })
})