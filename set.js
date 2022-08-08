const input = document.getElementById("input");
const output = document.getElementById("output");
const convert =  document.getElementById("convert");
const swap =  document.getElementById("swap");
const from =  document.getElementById("from");
const to =  document.getElementById("to");
const inputNumber = input.value;


convert.addEventListener("click",()=>{
     
      if(from.value=="Decimal" && to.value=="Decimal" ){
        var regex = /^[0-9\.\-]*$/;
        if(input.value.match(regex)){ 
          let ans = document.getElementById("input").value;
        document.getElementById("output").value = ans;
      }else{
        document.getElementById("output").value = "This is not decimal number!";
      }
       
      }
      else if(from.value=="Binary" && to.value=="Binary" ){
        var regex = /^[0-1\.\-]*$/;
        if(input.value.match(regex)){ 
          let ans = document.getElementById("input").value;
        document.getElementById("output").value = ans;
      }else{
        document.getElementById("output").value = "This is not binary number!";
      }
      }
      else if(from.value== "Octal" && to.value=="Octal" ){
        var regex = /^[0-7\.\-]*$/;
        if(input.value.match(regex)){ 
          let ans = document.getElementById("input").value;
        document.getElementById("output").value = ans;
      }else{
        document.getElementById("output").value = "This is not octal number!";
      }
      }
       else if(from.value== "Hexadecimal" && to.value== "Hexadecimal" ){
        var regex = /^[0-9a-fA-F\.\-]*$/;
        if(input.value.match(regex)){ 
          let ans = document.getElementById("input").value;
        document.getElementById("output").value = ans;
      }else{
        document.getElementById("output").value = "This is not hexadecimal number!";
      }
      }
     
     else if(from.value=="Decimal" && to.value=="Binary"){
       let ans1 = convertDecimalToBinary(input.value,"decimal");
       document.getElementById("output").value = ans1;
     }else if(from.value=="Binary" && to.value=="Decimal"){
        let ans2 = convertBinaryToDecimal(input.value);
        document.getElementById("output").value = ans2;
      }else if(from.value=="Decimal" && to.value=="Hexadecimal"){
        let ans3 = convertDecimalToHexadecimal(input.value,"decimal");
        document.getElementById("output").value = ans3;
      }else if(from.value=="Hexadecimal" && to.value=="Decimal"){
        let ans4 = convertHexadecimalToDecimal(input.value);
        document.getElementById("output").value = ans4;
      }else if(from.value=="Binary" && to.value=="Hexadecimal"){
        let ans5 = convertBinaryToHexadecimal(input.value);
        document.getElementById("output").value = ans5;    
      }else if(from.value=="Hexadecimal" && to.value=="Binary"){
        let ans6 = convertHexadecimalToBinary(input.value);
        document.getElementById("output").value = ans6;         
      }else if(from.value=="Decimal" && to.value=="Octal"){
        let ans7 = convertDecimalToOctal(input.value,"decimal");
        document.getElementById("output").value = ans7;         
      }else if(from.value=="Octal" && to.value=="Decimal"){
        let ans8 = convertOctalToDecimal(input.value);
        document.getElementById("output").value = ans8;         
      }else if(from.value=="Binary" && to.value=="Octal"){
        let ans9 = convertBinaryToOctal(input.value);
        document.getElementById("output").value = ans9;         
      }else if(from.value=="Hexadecimal" && to.value=="Octal"){
        let ans10 = convertHexadecimalToOctal(input.value);
        document.getElementById("output").value = ans10;         
      }else if(from.value=="Octal" && to.value=="Binary"){
        let ans11 = convertOctalToBinary(input.value);
        document.getElementById("output").value = ans11;         
      }else if(from.value=="Octal" && to.value=="Hexadecimal"){
        let ans12 = convertOctalToHexadecimal(input.value);
        document.getElementById("output").value = ans12;         
      }
})
swap.addEventListener("click",()=>{
    const temp = from.value;
    from.value = to.value;
    to.value = temp;
})


function convertDecimalToBinary(inputNumber,number){
  var answer="";
  var answer1="";
  var answer2="";
  var k=6;
  var regex1 = /^[\-]{1}[0-9\.]{1,}$/;
  var regex = /^[0-9\.]*$/;
  if(inputNumber.toString().match(regex)){
      inputNumber = Number(inputNumber);
      let decimal = parseInt(inputNumber);
      let fraction = inputNumber - decimal;
      while(k!=0){
        fraction =(fraction*2);
        answer2 += parseInt(fraction);
        fraction = fraction - parseInt(fraction);
        k--;
      }
      let remainder = 0;
      while(decimal != 0){
          remainder = decimal % 2;
          decimal = ((decimal - remainder) / 2);
          answer1 =(remainder + answer1);
      }
      answer = answer1+"."+ answer2;
  }
  else if(inputNumber.toString().match(regex1)){
  inputNumber = Number(inputNumber);
  inputNumber = Math.abs(inputNumber);
  let decimal = parseInt(inputNumber);
  let fraction = inputNumber - decimal;
  while(k!=0){
    fraction =(fraction*2);
    answer2 += parseInt(fraction);
    fraction = fraction - parseInt(fraction);
    k--;
  }
  let remainder = 0;
  while(decimal != 0){
      remainder = decimal % 2;
      decimal = ((decimal - remainder) / 2);
      answer1 =(remainder + answer1);
  }
  answer = "-" + answer1+"."+ answer2;
}else{
  answer = "This is not "+ number +" number!";
  
 
}
  return answer;
}  
function convertBinaryToDecimal(inputNumber){
     var regex =/^[0-1\.]*$/;
     var regex1 =/^[-]{1}[0-1\.]*$/;
     if(inputNumber.toString().match(regex) ){
      inputNumber = inputNumber.toString();
       var inputNumber1 = inputNumber.split(".");
       var decimal = parseInt(inputNumber1[0],2);
     if(inputNumber1.length > 1){
         var fraction = inputNumber1[1].split('');
         var fractionLen = fraction.length;
         for(var i=0,position=0;i<fractionLen;i++){
            position--;
           // var fract;
            fract = (Number(fraction[i]))*Math.pow(2,position);
             decimal = decimal + fract;
           }
         }
            
         }
        else if(inputNumber.toString().match(regex1) ){
          inputNumber = Number(inputNumber);
          inputNumber = Math.abs(inputNumber);
          inputNumber = inputNumber.toString();
          var inputNumber1 = inputNumber.split(".");
          var decimal = parseInt(inputNumber1[0],2);
          if(inputNumber1.length>1){
          var fraction = inputNumber1[1].split('');
          var fractionLen = fraction.length;
          for(var i=0,position=0;i<fractionLen;i++){
             position--;
            // var fract;
              fract = (Number(fraction[i]))*Math.pow(2,position);
             decimal =  decimal + fract;
            }
          }
             decimal ="-"+decimal;
          }else{
             decimal = "This is not binary number!";
         }
      return decimal;
 }   
 function convertDecimalToHexadecimal(inputNumber,number){
    var answer="";
    var answer1="";
    var answer2="";
    var k=10;
    var regex = /^[0-9\.]*$/;
    var regex1 = /^[-]{1}[0-9\.]*$/;
    if(inputNumber.toString().match(regex)){
        inputNumber = Number(inputNumber);
        let decimal = parseInt(inputNumber);
        let fraction = inputNumber - decimal;
        while(k!=0){
          fraction =fraction*16;
         var integer = parseInt(fraction);
         if(integer==10){
            answer2 +='A' ;
          }
         else if(integer==11){ 
            answer2 +='B' ;
          }
         else if(integer==12){
            answer2 +='C' ;
          }
          else if(integer==13){
            answer2 +='D' ;
          }
          else if(integer==14){
            answer2 +='E';
          }
          else if(integer==15){
            answer2 +='F' ;
          }
          else{
            answer2 += integer;
          }

          fraction -= parseInt(fraction);
          k--;
        }
        let remainder = 0;
        while(decimal != 0){
            remainder = decimal % 16;
            decimal = ((decimal - remainder) / 16);
            if(remainder == 10){
                answer1 = 'A' + answer1;
            }else if(remainder == 11){
                answer1 = 'B' + answer1;
            }else if(remainder == 12){
                answer1 = 'C' + answer1;
            }else if(remainder == 13){
                answer1 = 'D' + answer1;
            }else if(remainder == 14){
                answer1 = 'E' + answer1;
            }else if(remainder == 15){
                answer1 = 'F' + answer1;
            }else{
                answer1 =  remainder + answer1;
            }
            
        }
        answer = answer1+"."+ answer2;
        
    }
     else if(inputNumber.toString().match(regex1)){
      inputNumber = Number(inputNumber);
      inputNumber = Math.abs(inputNumber)
      let decimal = parseInt(inputNumber);
      let fraction = inputNumber - decimal;
      while(k!=0){
        fraction =fraction*16;
       var integer = parseInt(fraction);
       if(integer==10){
          answer2 +='A' ;
        }
       else if(integer==11){ 
          answer2 +='B' ;
        }
       else if(integer==12){
          answer2 +='C' ;
        }
        else if(integer==13){
          answer2 +='D' ;
        }
        else if(integer==14){
          answer2 +='E';
        }
        else if(integer==15){
          answer2 +='F' ;
        }
        else{
          answer2 += integer;
        }

        fraction -= parseInt(fraction);
        k--;
      }
      let remainder = 0;
      while(decimal != 0){
          remainder = decimal % 16;
          decimal = ((decimal - remainder) / 16);
          if(remainder == 10){
              answer1 = 'A' + answer1;
          }else if(remainder == 11){
              answer1 = 'B' + answer1;
          }else if(remainder == 12){
              answer1 = 'C' + answer1;
          }else if(remainder == 13){
              answer1 = 'D' + answer1;
          }else if(remainder == 14){
              answer1 = 'E' + answer1;
          }else if(remainder == 15){
              answer1 = 'F' + answer1;
          }else{
              answer1 =  remainder + answer1;
          }
          
      }
      answer = "-"+ answer1+"."+ answer2;
      
  }
    else{
        answer = "This is not " + number +" number!";
        
       
 }
    return answer;
}  
function convertDecimalToOctal(inputNumber,number){
  inputNumber = Number(inputNumber);
  let decimal = parseInt(inputNumber);
    var answer="";
    var answer1="";
    var answer2="";
    var k=6;
    var regex =/^[0-9\.]*$/;
    var regex1 = /^[-]{1}[0-9\.]{1,}$/;
    if(inputNumber.toString().match(regex)){
       
        let fraction = inputNumber - decimal;
        while(k!=0){
          fraction =(fraction*8);
          answer2 += parseInt(fraction);
          fraction = fraction - parseInt(fraction);
          k--;
        }
        let remainder = 0;
        while(decimal != 0){
            remainder = decimal % 8;
            decimal = ((decimal - remainder) / 8);
            answer1 =(remainder + answer1);
        }
        answer = answer1+"."+ answer2;
    
    }
     else if(inputNumber.toString().match(regex1)){
      inputNumber = Number(inputNumber);
      inputNumber = Math.abs(inputNumber);
      let decimal = parseInt(inputNumber);
      let fraction = inputNumber - decimal;
      while(k!=0){
        fraction =(fraction*8);
        answer2 += parseInt(fraction);
        fraction = fraction - parseInt(fraction);
        k--;
      }
      let remainder = 0;
      while(decimal != 0){
          remainder = decimal % 8;
          decimal = ((decimal - remainder) / 8);
          answer1 =(remainder + answer1);
      }
      answer = "-" + answer1+"."+ answer2;
  
  }
    else{
        answer = "This is not "+number+ " number!";
        
       
 }
    return answer;
}  

function convertOctalToDecimal(inputNumber){
  var regex =/^[0-7\.]*$/;
  var regex1 =/^[-]{1}[0-7\.]*$/;

  if(inputNumber.toString().match(regex) ){
   inputNumber = inputNumber.toString();
  var inputNumber1 = inputNumber.split(".");
  var decimal = parseInt(inputNumber1[0],8);
  if(inputNumber1.length > 1){
      var fraction = inputNumber1[1].split('');
      var fractionLen = fraction.length;
      for(var i=0,position=0;i<fractionLen;i++){
         position--;
         var fract = (Number(fraction[i]))*Math.pow(8,position);
          decimal = decimal + fract;
        }
      }
         
      }
     else if(inputNumber.toString().match(regex1) ){
       inputNumber = Number(inputNumber);
       inputNumber = Math.abs(inputNumber);
       inputNumber = inputNumber.toString();
       var inputNumber1 = inputNumber.split(".");
       var decimal = parseInt(inputNumber1[0],8);
       if(inputNumber1.length>1){
       var fraction = inputNumber1[1].split('');
       var fractionLen = fraction.length;
       for(var i=0,position=0;i<fractionLen;i++){
          position--;
          var fract = (Number(fraction[i]))*Math.pow(8,position);
           decimal = decimal + fract;
         }
       }
          decimal ="-"+decimal;
       }else{
          decimal = "This is not octal number!";
      }
   return decimal;
}
 function convertHexadecimalToDecimal(inputNumber){
   
     var regex =/^[0-9a-fA-F\.]{1,}$/;
     var regex1 = /^[-]{1}[0-9a-fA-F\.]{1,}$/;
     if(inputNumber.match(regex) ){
      inputNumber = inputNumber.toString();
      var inputNumber1 = inputNumber.split(".");
         var decimal = parseInt(inputNumber1[0],16);
         if(decimal == 'A' || decimal== 'a'){
            decimal = 10;
         }
         else if(decimal == 'B' || decimal== 'b'){
            decimal = 11;
         }
         else if(decimal == 'C' || decimal== 'c'){
            decimal = 12;
         }
         else if(decimal == 'D' || decimal== 'd'){
            decimal = 13;
         }
         else if(decimal == 'E' || decimal== 'e'){
            decimal = 14;
         }
         else if(decimal == 'F' || decimal== 'f'){
            decimal = 15;
         }
         else if(decimal >='0' && decimal <= '9'){
            decimal = Number(decimal);
         }
         else{
            decimal = decimal;
         }
        if(inputNumber1.length>1){
         var fraction = inputNumber1[1].split('');
         var fractionLen = fraction.length;
         for(var i=0,position=0;i<fractionLen;i++){
            position--;
            
            var fract = (Number(fraction[i]))*Math.pow(16,position);
            decimal = decimal + fract;
             }
           
           }
        
         }
          else if(inputNumber.match(regex1) ){
            inputNumber = Number(inputNumber);
            inputNumber = Math.abs(inputNumber);
          inputNumber = inputNumber.toString();
          var inputNumber1 = inputNumber.split(".");
             var decimal = parseInt(inputNumber1[0],16);
             if(decimal == 'A' || decimal== 'a'){
                decimal = 10;
             }
             else if(decimal == 'B' || decimal== 'b'){
                decimal = 11;
             }
             else if(decimal == 'C' || decimal== 'c'){
                decimal = 12;
             }
             else if(decimal == 'D' || decimal== 'd'){
                decimal = 13;
             }
             else if(decimal == 'E' || decimal== 'e'){
                decimal = 14;
             }
             else if(decimal == 'F' || decimal== 'f'){
                decimal = 15;
             }
             else if(decimal >='0' && decimal <= '9'){
                decimal = Number(decimal);
             }
             else{
                decimal = decimal;
             }
         if(inputNumber1.length>1){
             var fraction = inputNumber1[1].split('');
             var fractionLen = fraction.length;
             for(var i=0,position=0;i<fractionLen;i++){
                position--;
                
                var fract = (Number(fraction[i]))*Math.pow(16,position);
                decimal = decimal + fract;
                 }
               
               }
               decimal ="-"+decimal;
            
             }
         else{
             decimal = "This is not hexadecimal number!";
         }
      return decimal;
 }   
function convertBinaryToHexadecimal(inputNumber){
         let decimalVal1 = convertBinaryToDecimal(inputNumber);
        answer = convertDecimalToHexadecimal(decimalVal1, "binary");
        return answer;
}    
function convertBinaryToOctal(inputNumber){
     let decimalVal3 = convertBinaryToDecimal(inputNumber);
        answer = convertDecimalToOctal(decimalVal3, "binary");
      return answer;
}    
function convertOctalToBinary(inputNumber){
    let decimalVal5 = convertOctalToDecimal(inputNumber);
        answer = convertDecimalToBinary(decimalVal5,"octal");
     return answer;
}    
function convertHexadecimalToOctal(inputNumber){
    let decimalVal4 = convertHexadecimalToDecimal(inputNumber);
    answer = convertDecimalToOctal(decimalVal4,"hexadecimal");
     return answer;
}    
function convertHexadecimalToBinary(inputNumber){
    let decimalVal2 = convertHexadecimalToDecimal(inputNumber);
        answer = convertDecimalToBinary(decimalVal2,"hexadecimal");
     return answer;
}    
function convertOctalToHexadecimal(inputNumber){
    let decimalVal6 = convertOctalToDecimal(inputNumber);
    answer= convertDecimalToHexadecimal(decimalVal6,"octal");
     return answer;
}    
    
