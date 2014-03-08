/*
See jasmine specs
 */
var BasicEmail = BasicEmail || {};


BasicEmail.basic = (function () {


    /* one time message configuration */
    var messageConfigMap = {
        ENTEREMAIL : "Please enter your email address so that I can get back to you",
        EMPTYEMAIL : "Email-address is empty. Please tell me how I can reach you.",
        NOTVALID   : "This does not look valid",
        SHORTEMAIL : "This is a quite short address. I hope it is correct",
        VALIDEMAIL : "Looks like a valid email address ... Thank you",
        EDITTEXT   : "Seems you want to change something..."
    };


    /* basic validation check for an Email address */
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        getMessage: function(identifier) {
            return messageConfigMap[identifier];
        },

        emailOK : function (theEmail) {
            var message="";
            var rvalue=false;

            if (theEmail=="") {
                message = messageConfigMap['EMPTYEMAIL'];
                rvalue = false;
            }
            else {
                if (!validateEmail(theEmail)) {
                    message = messageConfigMap['NOTVALID'];
                    rvalue = false;
                }
                else {
                    if (theEmail.length < 8) {
                        message = messageConfigMap['SHORTEMAIL'];
                        rvalue = true;
                    }
                    else {
                        message = messageConfigMap['VALIDEMAIL'];
                        rvalue = true;
                    }
                }
            }
            return {
                message: message,
                isOK: rvalue
            }
        }
    }
})();

