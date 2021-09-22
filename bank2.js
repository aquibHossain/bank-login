



document.getElementById("deposit-button").addEventListener('click',function () {
    const deposit=document.getElementById('deposit');
    const depositAmount=document.getElementById("deposit-amount")
       const deposits=deposit.value;
       const prevDeposit=depositAmount.innerText;
       const currentDeposit=parseInt(prevDeposit)+parseInt(deposits) ;
       depositAmount.innerText=currentDeposit;
       deposit.value=""

    //    total balance
    const balance=document.getElementById("balance");
    const prevBalance=balance.innerText;
    const totalBalance=parseInt(prevBalance) +parseInt( deposits)
    balance.innerText=totalBalance
})
document.getElementById("withdraw-button").addEventListener("click",function () {
const withdraw=document.getElementById("withdraw");
const withdraws=withdraw.value;
const withdrawAmount=document.getElementById("withdraw-amount");
const prevwithdraw=withdrawAmount.innerText;
const totalwithdraw=parseInt(prevwithdraw)+parseInt(withdraws);
withdrawAmount.innerText=totalwithdraw;
withdraw.value=""
 
// balance after withdraw 
const balanceBeforeWithdraw=balance.innerText
const currentBalance=parseInt(balanceBeforeWithdraw)-parseInt(withdraws) 
balance.innerText=currentBalance

    
})