function readInput(){
 var textComponent = document.getElementById('papanHitam');
 var selectedText;
 var arrayOfLines = document.getElementById('papanHitam').value.split('\n');

 var equationLength = arrayOfLines[0].length;
 var rawEquation =  arrayOfLines[0];
 var equation =  rawEquation.split('=');
 
 var value = arrayOfLines[1].split('=');
 var arrX;
 
 
 console.log(rawEquation);
 console.log(arrayOfLines[1]);
 
 if(value[1].length > 1)
 {
 arrX = value[1].split(',');
 for(var i = 0; i < arrX.length ; i++){
 generateStep(equation[1],arrX[i]);
 }
 }
 
 else
 {
 arrX = value[1];
 generateStep(equation[1],arrX)
 }
 
 }
 
 function generateStep(eq,valX)
 {
 
 var stepOne = ""; 
 var stepTwo;
 var parenthesis;
 var stepFinal;
 
 var stepFx = 'f('+valX+')=';
 
 for(i=0;i<eq.length;i++){
 
 if(eq.charAt(i) == 'x'){
 stepOne = stepOne + '('+valX+')'; 
 }
 else{
 stepOne = stepOne + eq.charAt(i);
 }
 
 } 
 console.log(stepFx+stepOne);
 console.log(math.eval(stepOne));
 
 }
 
 