//add money
const PIN = 1234;
document.getElementById('addMoneyBtn')
.addEventListener('click', function (event){
event.preventDefault()
// console.log("sjdksiaji")
const texaccountNumber = document.getElementById('accountnumber');
const accountNumber = document.getElementById('accountnumber').value;
const texamountAdd = document.getElementById('amountadd');
const amountAdd = parseInt(document.getElementById('amountadd').value);
const texyourPin = document.getElementById('yourpin');
const yourPin =parseInt(document.getElementById('yourpin').value);

const availableBalance = parseInt(document.getElementById('available-balance').innerText);
if(accountNumber.length <11){
    alert("invalid account number".repeat )
}
if(yourPin !==PIN){
    alert('invalid pin')
}

const totalAvailableBalance = amountAdd + availableBalance;
document.getElementById('available-balance').innerText = totalAvailableBalance;
console.log(texaccountNumber) 

texaccountNumber.value = ""
texamountAdd.value = ""
texyourPin.value = ""

})


//toggling
document.getElementById('addmoneybtn')
.addEventListener('click', function() {
    document.getElementById('cashoutfrom').style.display = "none"
    document.getElementById('addmoneyfom').style.display = "block";
})

document.getElementById('cashoutbtn')
.addEventListener('click', function (){
    document.getElementById('addmoneyfom').style.display = "none";
    document.getElementById('cashoutfrom').style.display = "block"
})