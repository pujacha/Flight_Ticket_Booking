
const firstClass = document.getElementById('inputCity');
const ecoNomy = document.getElementById('ecoInputCity');

// First Class plus
let firstCount = 0;
document.getElementById('firstClassPlus').addEventListener('click', function(){
    firstCount++;
    firstClass.value = firstCount;
    calculation();
});

// First Class Minus 

document.getElementById('firstClassMinus').addEventListener('click', function(){
    if(firstCount<=0){
        return;
    }
    firstCount--;
    firstClass.value = firstCount;
    calculation();
});
// economy plus 
let ecoCount = 0;
document.getElementById('economyPlus').addEventListener('click', function(){
    
    ecoCount++;
    ecoNomy.value = ecoCount;
    calculation();
});
// economy minus
document.getElementById('economysMinus').addEventListener('click', function(){
    if(ecoCount<=0){
        return;
    }
    ecoCount--;
    ecoNomy.value = ecoCount;
    calculation();    
});

// subtotal 
    function calculation(){
        console.log('ok');
        const firstClassOne = parseFloat(firstClass.value);
        const ecoNomyTwo = parseFloat(ecoNomy.value);
        const firstValue = firstClassOne*150;
        const ecoValue = ecoNomyTwo*100;
        const totalValue = firstValue + ecoValue;
        const subTotal = document.getElementById('subtotal');
        subTotal.innerText = totalValue;
        const vat = (totalValue * 10) / 100;
        document.getElementById('vat').innerText = vat;
        const Total = totalValue+vat;
        document.getElementById('total').innerText = Total;
        
    }
        
       
 
   
  
    



