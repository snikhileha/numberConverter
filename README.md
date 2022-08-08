# numberConverter
This project is based on HTML,CSS & JavaScript.It converts number from one base to another base .This page is responsive one,
also consider fractional number as well as negative number.

## Features

- With on click of the convert button, the application performs the required operations
and ultimately shows the result.
- With one click of the swap button, you need to swap from and to values. Suppose
User entered from hexadecimal to binary and clicks swap button then
now the application will compute for binary to hexadecimal.
- use 'use strict'.
- use regular expression for validation of number
- responsive webpage.

## Tech Stack

**Client:** HTML , CSS , JavaSript.

## How It Works
- ### convert one base to another with convert button.
     Number is converted from one base to another For Example.  if from value is'decimal' & to value is 'binary' then number convert from decimal to binary.
     if number is not valid ,error message is printed in result box. Fractional number as well as negative number is also converted into given base value.
     
   -  Decimal  <=>  Decimal              
   -  Decimal  <=>  Binary              
   -  Decimal  <=>  Octal               
   -  Decimal  <=>  Hexadecimal 
   
   -  Binary   <=>  Binary 
   -  Binary   <=>  Octal   
   -  Binary   <=>  Hexadecimal
   -  Octal    <=>  Octal 
   -  Octal    <=>  Hexadecimal 
   -  Hexadecimal < =>  Hexadecimal
   
   Example of Conversion of decimal number into binary & vice-varse.
  
  #      Example of Conversion of decimal number into binary & vice-varse.
  ## Decimal to Binary conversion
  
         function convertDecimalToBinary(inputNumber,number){
            var answer="";
            var answer1="";
            var answer2="";
            var k=6;
            var regex1 = /^[\-]{1}[0-9\.]{1,}$/;
            var regex = /^[0-9\.]*$/;
            if(inputNumber.toString().trim().match(regex)){
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
          else if(inputNumber.toString().trim().match(regex1)){
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
          
          
          
  ##       Binary to decimal conversion
          
          
          
          function convertBinaryToDecimal(inputNumber){
          var regex =/^[0-1\.]*$/;
          var regex1 =/^[-]{1}[0-1\.]*$/;
          if(inputNumber.toString().trim().match(regex) ){
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
          else if(inputNumber.toString().trim().match(regex1) ){
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
       
 ##      Swap button 
         It convert to value into from value & vice-varsa.
          swap.addEventListener("click",()=>{
          const temp = from.value;
          from.value = to.value;
          to.value = temp;
           })
     
     
 ## Feedback

      If you have any feedback, please reach out to us at snehajoshi1895@gmail.com

