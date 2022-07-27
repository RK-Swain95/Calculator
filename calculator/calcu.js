var buttons=document.querySelectorAll('button');
var display=document.getElementById('screen')
console.log(typeof display.value);
var operand1=0;
var operand2=null;
var operator=null;
var displayinput='';
var result='';
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(event){
        var value=event.target.innerText;//this.getAttribute('data-value');
        console.log(value);
        
        if(value=='+'){

            displayinput+=value;
            display.value=displayinput;
        }else if(value=='Ac'){
            displayinput="";
            display.value=displayinput;
        }else if(value=='-'){
            displayinput+=value;
            display.value=displayinput;
        }else if(value=='*'){
            displayinput+=value;
            display.value=displayinput;
        } else if(value=='/'){
            displayinput+=value;
            display.value=displayinput;
        }else if(value=='%'){
            displayinput+=value;
            display.value=displayinput;
        }else if(value=='='){
            try{
                result=display.value;
            display.value=eval(result);
            displayinput=display.value;

            }catch{
                display.value='Error!';
            }
            
        }else if(value=='<<'){
            var remove=display.value;
            displayinput=remove.slice(0,-1);
            display.value=displayinput;

        }
        else {
            displayinput+=value;
            display.value=displayinput;
        }
    });
}
