
           let buttn=document.querySelectorAll("button");
            buttn.forEach(function(btn) {
       btn.addEventListener("click", function(event) {
        if(event.target.innerText!=="=")
      document.getElementById("Value").value+=event.target.innerText;
       else
       {
        let num1="";
        let i=0;
        let num=document.getElementById("Value").value;
        while(i<num.length)
       {
        if(num[i]>='0' && num[i]<='9')
        num1=num1+num[i];
    else
    break;
i++;
       }
       let num2="";
        let sign=num[i];
        let j=i+1;
        while(j<num.length)
       {
          num2=num2+num[j];
          j++;
       }
       if(sign==="+")
       document.getElementById("Value").value=(Number(num1))+(Number(num2));
    else if(sign==='-')
         document.getElementById("Value").value=(Number(num1))-(Number(num2));
        else if(sign=='*')
         document.getElementById("Value").value=(Number(num1))*(Number(num2));
        else if(sign=='/')
         document.getElementById("Value").value=(Number(num1))/(Number(num2));
        else if(sign=='%')
         document.getElementById("Value").value=(Number(num1))%(Number(num2));
       }

    })
        }) 
