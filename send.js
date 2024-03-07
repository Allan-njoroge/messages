const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: '9f2f688d12e1494c02b81b6c3a226e5741a9b93d1ab75d4d856617eefe33245f', 
  username: 'macvistah'
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