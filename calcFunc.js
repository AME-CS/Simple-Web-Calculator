function appendToText(num){document.getElementById("current-expression").value+=num;}
function evaluateExpression(){
    try{       
        currentExpression=document.getElementById("current-expression").value
        if(currentExpression.length==0){alert("The Expression is Currently Empty"); 
        }else if(eval(currentExpression)=="Infinity"){
            alert("Zero is not a Valid Denominator.");
        }else{
            document.getElementById("current-expression").value=eval(currentExpression);
        }
        
    }catch(error){
        alert("Invalid Expression");
        clearText();
    }
}
function clearText(){document.getElementById('current-expression').value='';}
function removeLast(){ 
        try{
            let initStr=document.getElementById("current-expression").value;
            let strWithoutLastIndex='';
            for(let i=0;i<initStr.length;i++){if (i!=initStr.length-1){strWithoutLastIndex+=initStr[i]}}
            document.getElementById("current-expression").value=strWithoutLastIndex;
        }catch(error){
            alert(error);
            clearText();
        }
}
