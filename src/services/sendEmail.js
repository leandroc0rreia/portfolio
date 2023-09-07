import emailjs from '@emailjs/browser';
import $ from 'jquery';

const smtp_service = process.env.REACT_APP_SMTP_SERVICE
const smtp_template = process.env.REACT_APP_SMTP_TEMPLATE
const smtp_publicId = process.env.REACT_APP_SMTP_PUBLIC_ID

const emailPattern = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"

const sendEmail = async (form) => {
    
    const notificationEmail = $("#emailStatus")
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value

    if (email.match(emailPattern) && message!=="") {
        sendingEmail(notificationEmail)
        await emailjs.sendForm(smtp_service, smtp_template, form.current, smtp_publicId)
        .then(() => { 
            successSending(notificationEmail)
        }, () => { 
            errorSending(notificationEmail) 
        })
    }else{
        if (!email.match(emailPattern)) addErrorEmail()
        if (message==="") addErrorMessage()
    }

    $("#email").on("focus", addSuccessEmail)
    $("#message").on("focus", addSuccessMessage)
    setTimeout(()=>{
        eraseSending(notificationEmail)
    }, 5000)
}


function sendingEmail (e) {
    e.html(`<div class='rounded-md bg-blue-400 transition duration-300 text-white p-3 m-2'">Enviando...</div>`)
}

function successSending (e) {
    e.html(`<div class='rounded-md bg-green-400 transition duration-300 text-white p-3 m-2'">Email enviado com sucesso!</div>`)
}

function errorSending (e) {
    e.html(`<div class='rounded-md bg-red-500 transition duration-300 text-white p-3 m-2'">Erro ao enviar o Email!</div>`)
}

function eraseSending (e) {
    e.html("")
}

function addErrorEmail() {
    $("#email").removeClass("bg-gray-50 border border-gray-300 dark:bg-warm-gray-800 dark:border-warm-gray-600")
    $("#email").addClass("bg-red-50 border border-red-300 dark:bg-red-900 dark:border-red-700")
  }

function addErrorMessage() {
    $("#message").removeClass("bg-gray-50 border border-gray-300 dark:bg-warm-gray-800 dark:border-warm-gray-600")
    $("#message").addClass("bg-red-50 border border-red-300 dark:bg-red-900 dark:border-red-700")
}

function addSuccessEmail() {
    $("#email").removeClass("bg-red-50 border border-red-300 dark:bg-red-900 dark:border-red-700")
    $("#email").addClass("bg-gray-50 border border-gray-300 dark:bg-warm-gray-800 dark:border-warm-gray-600")
}

function addSuccessMessage() {
    $("#message").removeClass("bg-red-50 border border-red-300 dark:bg-red-900 dark:border-red-700")
    $("#message").addClass("bg-gray-50 border border-gray-300 dark:bg-warm-gray-800 dark:border-warm-gray-600")
}

export default sendEmail