//sher function 

function elementvalueparseInt(id) {
    const elementnumber = parseInt(document.getElementById(id).value);
    return elementnumber;
}


//add money
const PIN = 1234;
document.getElementById('addMoneyBtn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        // console.log("sjdksiaji")
        const texaccountNumber = document.getElementById('accountnumber');
        const accountNumber = document.getElementById('accountnumber').value;
        const texamountAdd = document.getElementById('amountadd');
        const amountAdd = parseInt(document.getElementById('amountadd').value);
        const texyourPin = document.getElementById('yourpin');
        const yourPin = parseInt(document.getElementById('yourpin').value);

        const availableBalance = parseInt(document.getElementById('available-balance').innerText);
        if (accountNumber.length < 11) {
            alert("invalid account number".repeat)
        }
        if (yourPin !== PIN) {
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
    .addEventListener('click', function () {
        const froms = document.getElementsByClassName('hasan')
        for (const from of froms) {
            from.style.display = 'none'
        }
        document.getElementById('addmoneyfom').style.display = "block"
    })

document.getElementById('cashoutbtn')
    .addEventListener('click', function () {
        const froms = document.getElementsByClassName('hasan')
        for (const from of froms) {
            from.style.display = 'none'
        }
        document.getElementById('cashoutfrom').style.display = "block"
    })

document.getElementById('transfer')
    .addEventListener('click', function () {
        const froms = document.getElementsByClassName('hasan')
        for (const from of froms) {
            from.style.display = 'none'
        }
        document.getElementById('transferfrom').style.display = "block"
    })

    document.getElementById('getbonus')
    .addEventListener('click', function(){
         const froms = document.getElementsByClassName('hasan')
        for (const from of froms) {
            from.style.display = 'none'
        }
        document.getElementById('getbonuss').style.display = "block"
    })  
   


//Cashout
document.getElementById('cashoutBtn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const textcashOutAcconutNumber = document.getElementById('cashoutacconutnumber')
        const cashOutAcconutNumber = document.getElementById('cashoutacconutnumber').value;
        const taxtcashAmount = document.getElementById('cashamount')
        const cashAmount = parseInt(document.getElementById('cashamount').value);
        const textcashoutpin = document.getElementById('cashOutPin')
        const cashoutpin = parseInt(document.getElementById('cashOutPin').value)
        // console.log(cashoutpin)


        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

        if (cashOutAcconutNumber.length < 11) {
            alert("invalid number")
        }
        if (cashoutpin !== PIN) {
            alert("invalid pin")
        }
        const cashouttotalamount = availableBalance - cashAmount;
        document.getElementById('available-balance').innerText = cashouttotalamount;
        textcashOutAcconutNumber.value = ''
        taxtcashAmount.value = ''
        textcashoutpin.value = ''
        // console.log(cashouttotalamount)
    })
//Transfer Money 
document.getElementById('TransferBtn')
    .addEventListener('click', function (e) {
        e.preventDefault();

        const texttransferaccountnumber = document.getElementById("transferAccountNumber")
        const transferaccountnumber = document.getElementById('transferAccountNumber').value;

        const texttransferAmount = document.getElementById('Transferamount')
        const transferAmount = elementvalueparseInt('Transferamount');

        const texttransferpin = document.getElementById('Transferpin')
        const transferpin = elementvalueparseInt('Transferpin');

        const transferavelblance = parseInt(document.getElementById('available-balance').innerText)
        if (transferaccountnumber.length < 11) {
            alert("invalid account number")
        }
        if (transferpin !== PIN) {
            alert("invalid Pin")
        }
        const totaletransferblance = transferavelblance - transferAmount;
        document.getElementById('available-balance').innerText = (totaletransferblance)

        texttransferaccountnumber.value = ''
        texttransferAmount.value = ''
        texttransferpin.value = ''
    })

// Get Bonus
const code = 'hasan20'
document.getElementById('getbonusbtn')
.addEventListener('click', function (e) {
    const balancetx = document.getElementById('available-balance')
    const mainBalance =parseInt(balancetx.innerText)

    const Cod = document.getElementById('getbonusCopn').value;

    if(code === Cod){

        const newb = mainBalance + 50;
        balancetx.innerText = newb
    }
    else{
        alert ("invalid cod")
    }
})