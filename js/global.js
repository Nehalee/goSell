function checkout() {
    goSell.config({
      containerID:"root",
      gateway:{
        publicKey:"pk_test_Vlk842B1EA7tDN5QbrfGjYzh",
        merchantId: null,
        language:"en",
        contactInfo:true,
        supportedCurrencies:"all",
        supportedPaymentMethods: "all",
        saveCardOption:false,
        customerCards: true,
        notifications:'standard',
        callback:(response) => {
            console.log('response', response);
        },
        onClose: () => {
            console.log("onClose Event");
        },
        backgroundImg: {
          url: 'imgURL',
          opacity: '0.5'
        },
        labels:{
            cardNumber:"Card Number",
            expirationDate:"MM/YY",
            cvv:"CVV",
            cardHolder:"Name on Card",
            actionButton:"Pay"
        },
        style: {
            base: {
              color: '#535353',
              lineHeight: '18px',
              fontFamily: 'sans-serif',
              fontSmoothing: 'antialiased',
              fontSize: '16px',
              '::placeholder': {
                color: 'rgba(0, 0, 0, 0.26)',
                fontSize:'15px'
              }
            },
            invalid: {
              color: 'red',
              iconColor: '#fa755a '
            }
        }
      },
      customer:{
        id:null,
        first_name: document.getElementById('firstName').value,
        last_name: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: {
            country_code: "973",
            number: document.getElementById('mobile').value
        }
      },
      order:{
        amount: document.getElementById('amount').value,
        currency:"BHD",
        
      },
     transaction:{
       mode: 'charge',
       charge:{
          saveCard: false,
          threeDSecure: true,
          description: "Test Description",
          statement_descriptor: "Sample",
          reference:{
            transaction: "txn_0001",
            order: "ord_0001"
          },
          metadata:{},
          receipt:{
            email: false,
            sms: true
          },
          redirect: "http://noonera.com/gosell/redirect.html",
          post: null,
        }
     }
    });

    goSell.openLightBox()
}
    
$(document).ready(function() {
    var filled = 0;
      $(document).on("click", "#checkoutBtn", function(){
        $( ':input[required]', paymentForm ).each( function () {
            if ( this.value.trim() !== '' ) {
                filled = 1;
            }
            else {
                filled = 0;
            }
        });
        
        if(filled === 1){
            checkout();
        }
        else {
            alert("Please Fill The Form First");
        }
     });
 });