var initialPrice=document.querySelector(".initial-price");
var stocksPrice=document.querySelector(".stocks-Quantiy");
var currentPrice=document.querySelector(".current-price");
var checkResult=document.querySelector(".check-result")
var result=document.querySelector(".result");

checkResult.addEventListener("click",answer);

function answer(){

    var initial=Number(initialPrice.value);
    var stocks=Number(stocksPrice.value);
    var current=Number(currentPrice.value);

    console.log(initial)

    if(initial&&stocks&&current){

        if(initial<0||stocks<0||current<0){
            result.innerText="Enter Positive Values"
        }
        else{

            var total=initial*stocks;
            var difference=(current*stocks)-total;
            const per=(difference/total)*100

            console.log(per)
            if(difference>0){
                result.innerText=" Your Profit is "+ difference+" and Percentage is "+per+"%"

            }
            else{
                result.innerText=" Your Loss is "+(difference)*(-1)+" and Percentage is "+per*(-1)+"%"
            }
        

            
            



        }
    }
    else{
        result.innerText="Please Enter All Three Values"
    }
}

    


    








