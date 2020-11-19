
    function validateName() {
            var name = document.getElementById('name').value;
            if(name.length == 0) {
              alert("Name can't be blank") ;
              return false;
            }
            if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
              alert("Please enter your correct name") ;
              return false;
            }           
            return true;
          }
          function validatePhone() {
            var phone = document.getElementById('phone').value;
            if(phone.length == 0) {
              alert("Phone number can't be blank") ;
              return false;
            }
            if(!phone.match(/^[0]?[6789]\d{9}$/)) {
             alert("Please enter a correct phone number") ;
             return false;
           }
           return true;
         }
         function validatemessage () {
          var message = document.getElementById('message').value;
          if(message.length == 0) {
            alert("message can't be blank") ;
            return false;
          }          
          return true;
        }
        function validateForm() {
          if (!validateName() || !validatePhone() || !validatemessage()) {
            alert("Form not submitted");
            return false;
          }
          else {
            submitted=true;
            alert("Form is submitted successfully!!!");
            alert("THANK YOU we will Contact you soon");
            return true;
          }
        }
