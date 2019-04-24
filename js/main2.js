window.onload=  function(){
    const basket = JSON.parse(localStorage.getItem("basket"));
  
    const proBox=document.querySelector(".proBox");
    basket.forEach(pro=>{        
        const proDiv=document.createElement("div");
        proDiv.className="proDiv"
        const proImg=document.createElement("img");
       

        proImg.src=pro.src;
        const proCount=document.createElement("p");
        proCount.innerText=pro.count;
        const proName=document.createElement("p");
        proName.innerText=pro.name;
        proDiv.appendChild(proImg);
        proDiv.appendChild(proName);
        proDiv.appendChild(proCount);
        proBox.appendChild(proDiv);
        
    })
    
}
