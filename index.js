const express = require('express');
const Mailgun = require('mailgun.js');
const formData = require('form-data');
const app = express();

const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: '016b23508b285fa580ece3e5b9ad2097-826eddfb-b64dd9cc'});

app.get("/mail/send", async() => {
    try {
        // console.log(mg)
        mg.messages.create('sandbox3df09be7ad0a469c8557a74cff18b23a.mailgun.org', {
            from: "Excited User <mailgun@sandbox3df09be7ad0a469c8557a74cff18b23a.mailgun.org>",
            to: ["jayzine92@gmail.com"],
            subject: "Hello",
            text: "Testing some Mailgun awesomness!",
            html: "<h1>Testing some Mailgun awesomness!</h1>"
          }).then(msg => console.log(msg)).catch(error => console.log(error))
    } catch (error) {
        console.log(error)
        throw error;
    }
})
app.listen(3006, () => { console.log("121212") })