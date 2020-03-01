//Phone item increase Button 

const addBtn=document.getElementById("phoneAddition");
      
addBtn.addEventListener("click",function(){

   const currentNumber=document.getElementById("input").value++;
  

   const phonePrice=document.getElementById("phonePrice").innerText;
   const newPhonePrice= parseFloat(phonePrice);
   const updatePrice=newPhonePrice + 1219;
   document.getElementById("phonePrice").innerText=updatePrice;


   const subTotal=document.getElementById("subTotal").innerText;
   const total=parseFloat(subTotal);
   const totalPrice= total+1219;


   document.getElementById("subTotal").innerText=totalPrice;
   document.getElementById("total").innerText=totalPrice;



});
//Phone item decrease Button 


   const minusBtn=document.getElementById("phoneSubtraction");

minusBtn.addEventListener("click",function(){

   const currentNumber=document.getElementById("input").value--;
   

   const phonePrice=document.getElementById("phonePrice").innerText;
   const newPhonePrice= parseFloat(phonePrice);
   const updatePrice=newPhonePrice - 1219;
   document.getElementById("phonePrice").innerText=updatePrice;

   const subTotal=document.getElementById("subTotal").innerText;
   const total=parseFloat(subTotal);
   const totalPrice= total-1219;

   document.getElementById("subTotal").innerText=totalPrice;
   document.getElementById("total").innerText=totalPrice;
   


});


//PhoneCase item increase Button 


const addBtnCase=document.getElementById("caseAdd");

addBtnCase.addEventListener("click",function(){

   const currentCase=document.getElementById("inputCase").value++;
  

   const casePrice=document.getElementById("casePrice").innerText;
   const newCasePrice= parseFloat(casePrice);
   const updateCasePrice=newCasePrice + 59;
   document.getElementById("casePrice").innerText=updateCasePrice;

   const subTotal=document.getElementById("subTotal").innerText;
   const total=parseFloat(subTotal);
   const totalPrice= total+59;

   document.getElementById("subTotal").innerText=totalPrice;
   document.getElementById("total").innerText=totalPrice;

   
})
// PhoneCase Decrease Button
const reduceBtnCase=document.getElementById("caseSubtraction");

reduceBtnCase.addEventListener("click",function(){

   const currentCase=document.getElementById("inputCase").value--;
  

   const casePrice=document.getElementById("casePrice").innerText;
   const newCasePrice= parseFloat(casePrice);
   const updateCasePrice=newCasePrice - 59;
   document.getElementById("casePrice").innerText=updateCasePrice;

   const subTotal=document.getElementById("subTotal").innerText;
   const total=parseFloat(subTotal);
   const totalPrice= total-59;

   document.getElementById("subTotal").innerText=totalPrice;
   document.getElementById("total").innerText=totalPrice;

   
})



