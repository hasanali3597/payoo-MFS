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
        document.getElementById('cashoutfrom').style.display = "none"
        document.getElementById('addmoneyfom').style.display = "block";
    })

document.getElementById('cashoutbtn')
    .addEventListener('click', function () {
        document.getElementById('addmoneyfom').style.display = "none";
        document.getElementById('cashoutfrom').style.display = "block"
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
