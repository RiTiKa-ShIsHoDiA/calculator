
document.querySelector("table").addEventListener("click",(eventObj)=>{
    let res = document.querySelector(".result");
    let targ = eventObj.target;
    console.log(targ);
     if(targ.innerText ==="AC"){
        res.innerText = 0;
     }
     else if(targ.value === "backspace"){
        let data =  res.innerText;
        console.log(data);
        console.log(typeof data);
        res.innerText = data.slice(0,data.length-1);
        if(res.innerText.length === 0){
            res.innerText = "0";
        }
     }
     else if(targ.value === "="){
       try{
        res.innerText = eval(res.innerText);
       }catch(error){
        Swal.fire({
            icon: "error",
            title: "Something went wrong",
            text: "please enter correct input !",
          });
       }
    }
     else{
         if(eventObj.target.value !== undefined){
            if(res.innerText === "0"){
                if(eventObj.target.value === ".")
                    res.innerText  += (eventObj.target.value);
                else    
                    res.innerText  = (eventObj.target.value);
            }
            else
              res.innerText  += (eventObj.target.value);    
         }
    }
});