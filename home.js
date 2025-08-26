// add moneytotalAvailableBalance

const validpin = 1234;


document.getElementById('addMoneyBtn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        // console.log('jadhc')
        const bank = document.getElementById('bank').value;
        const bankNumber = document.getElementById('bank-number').value;
        const addAmount = parseInt(document.getElementById('add-amount').value);
        const accountpin = parseInt(document.getElementById('account-pin').value);



        const availableBalance = parseInt(document.getElementById('available-balance').innerText);
        if (bankNumber.length < 11) {
            alert("please provide valid number").repeat;
        }
        if (validpin != accountpin) {
            alert('please provide valid pin number')
        }


        const totalAvailableBalance = availableBalance + addAmount;

        document.getElementById('available-balance').innerText = totalAvailableBalance

    })


