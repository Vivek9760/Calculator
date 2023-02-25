let sum = '';
let sum2 ='';
function mainScreen(num){
    document.getElementById('main').innerText = num;
}

function secondary(num){
    document.getElementById('secondary').innerText = num;
}

var number = document.getElementsByClassName('number');
number = Array.from(number)   // convert it into array

number.forEach(element => { 
   element.addEventListener('click',()=>{
        sum+=element.innerText
        mainScreen(sum)
   })
    
});


var operator = document.getElementsByClassName('operator');
operator = Array.from(operator)   // convert it into array

operator.forEach(element => { 

        element.addEventListener('click',()=>{
            if(sum!='' || element.innerText == '-'){
                sum2 += sum;
                sum2+= element.innerText;
                secondary(sum2);
                sum=''
            mainScreen('')}     
        }) 
    
    })
    
document.getElementById('e').addEventListener('click',()=>{
        if(sum!=''){
        sum2+=sum;
        let a =sum2[(sum2.length)-1];
        if(a!='×' && a!='÷' && a!='+' && a!='+' ){
            secondary(sum2+" = ");
            sum2 = sum2.replaceAll("×","*").replaceAll("÷","/");
            console.log(sum2[(sum2.length)-1]);
            sum2 = eval(sum2);
            sum =String(sum2);
            mainScreen(sum);
            sum2 = ''
        }}
    })

document.getElementById('C').addEventListener('click',()=>{
    mainScreen('');
    secondary('');
    sum='';
    sum2='';
})

document.getElementById('CE').addEventListener('click',()=>{
    console.log(sum);
    sum = sum.slice(0,-1);
    console.log(sum)
    mainScreen(sum);
})

