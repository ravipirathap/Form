


function fun(){
    var user=document.getElementById("user").value;
    var email=document.getElementById("email").value;
    var zip=document.getElementById("zip").value;
    var phone=document.getElementById("phone").value;
    var re1=/^[A-Za-z.]{2,23}$/;
    var re2= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var re3=/^[0-9]{5}(?:-[0-9]{4})?$/;
    var re4=/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    if (re1.test(user)){
        document.getElementById("t1").innerHTML=""; 
    }else{
        document.getElementById("t1").innerHTML="Name must be between 2 and 23 characters";
    }
    if(re2.test(email)){
        document.getElementById("t2").innerHTML=""; 
    }else{
        document.getElementById("t2").innerHTML="Email is invalid";
    }
    if (re3.test(zip)){
        document.getElementById("t3").innerHTML=""; 
    }else{
        document.getElementById("t3").innerHTML= "Zip Code is invalid";}
    if(re4.test(phone)){
        document.getElementById("t4").innerHTML=""; 
    }else{
        document.getElementById("t4").innerHTML="Phone Number is invalid";
        return false
    }
        
 }
 
 