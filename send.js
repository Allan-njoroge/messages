const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: '', 
  username: ''
});



module.exports = async function sendSMS(phone, message) {
    
    // TODO: Send message
    try {
        const result=await africastalking.SMS.send({
        to: phone, 
        message: message
        });
        console.log(result);
    } catch(ex) {
        console.error(ex);

    }
}