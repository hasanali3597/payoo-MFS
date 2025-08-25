document.getElementById('login-button')
    .addEventListener('click', function (e) {
        e.preventDefault()

        let mobileNumbre = 1773837296
        let yourPin = 1234
      
        const number = document.getElementById('mobile-number').value
        const convatnumbe = parseInt(number)
        // console.log(convatnumbe)

        const pin = document.getElementById('pin').value
        const convatpin = parseInt(pin);
        console.log(convatpin, convatnumbe)

          if (mobileNumbre === convatnumbe && yourPin === convatpin) {
            window.location.href ='./homepage.html'
           
         }
          else {
            alert ('You Are Wrong')
            }

    })