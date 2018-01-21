var nodemailer = require('nodemailer');

var email;
var subject;
var message;
var site;

function Email(email, subject, message, site) {
    this.email = email;
    this.subject = subject;
    this.message = message;
    this.site = site;
}

function messageFormat(email, message, subject, site){
    var htmlMessage = '';
    htmlMessage = '<h1>' + subject + '</h1>';
    htmlMessage = htmlMessage + '<p>' + message + '</p>';
    htmlMessage = htmlMessage + '<h3>' + email + ' from ' + site +'</h3>';

    return htmlMessage;
}

Email.prototype.send = function () {
    var transporte = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'contatojanh@gmail.com',
            pass: 'contato2018'
        }
    });

    var email = {
        from: 'contatojanh@gmail.com',
        to: this.email,
        subject: 'Contato do site ' + this.site + ' de: ' + this.email,
        html: messageFormat(this.email, this.message, this.subject, this.site)
    };

    transporte.sendMail(email, function (err, info) {
        if (err)
            throw err; // Oops, algo de errado aconteceu.

        console.log('Email enviado! Leia as informações adicionais: ', info);
    });
}

module.exports = { Email };