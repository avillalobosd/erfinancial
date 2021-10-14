const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mocha4005.mochahost.com",
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "info@abecode.com", // generated ethereal user
      pass: "Warewolf15*", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'a.villalobos@abecode.com', // sender address
    to: "lalovide@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html:`<!doctype html>
    <html ⚡>
    <head>
      <meta charset="utf-8">
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
      <link rel="canonical" href="https://ampbyexample.com/components/amp-anim/">
      <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    </head>
    <body>
    
      <h2>amp-anim supports gif animation</h2>
      <amp-anim width="245" height="300" src="/img/gopher.gif" alt="an animation"
                attribution="The Go gopher was designed by Reneee French and is licensed under CC 3.0 attributions.">
      </amp-anim>
    
      <h2>amp-img also supports gif animation</h2>
      <amp-img width="245" height="300" src="/img/gopher.gif" alt="an animation"
                attribution="The Go gopher was designed by Reneee French and is licensed under CC 3.0 attributions.">
      </amp-img>
    </body>
    </html>`
    
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);