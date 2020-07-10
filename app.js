const formularioEnviar = document.getElementById('my-form')
let form = document.getElementById("my-form");
let button = document.getElementById("my-form-button");
let statusSuccess = document.getElementById("my-form-status-sucess");
var statusError = document.getElementById("my-form-status-error");


formularioEnviar.addEventListener('submit', enviarEmail)

//Spiner carga inicial
document.onreadystatechange = function () {
    const spinner = document.querySelector('#loaders')
    if (document.readyState !== "complete") {
        spinner.style.display = 'flex';
    } else {
        spinner.style.display = 'none';
    }
};

$(document).ready(function () {

    if (window.matchMedia('screen and (max-width: 768px)').matches) {
        showitXs()
    } else {
        showit()
    }
});

function showOtherImage() {
    $('#image-about').css("display", "inline");
    $('#image-main').css("display", "none");
    image()
}

function downloadCv() {
    let a = document.createElement('a')
    a.href = 'resources/cv/cv-joanelly-gonzalez.pdf'
    a.target = '_blank'

    a.download = 'resources/cv/cv-joanelly-gonzalez.pdf'.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

function enviarEmail(ev) {
    ev.preventDefault();
    //spinner al presionar enviar
    const spinner = document.querySelector('#loaders')
    spinner.style.display = 'flex';

    var data = new FormData(formularioEnviar);

    ajax(formularioEnviar.method, formularioEnviar.action, data, success, error);
};

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

// Success and Error functions for after the form is submitted
function success() {
    const spinner = document.querySelector('#loaders')
    spinner.style.display = 'none';
    button.style = "display: none ";
    statusSuccess.innerHTML = "Thanks!";
    document.getElementById("sucess-msg").style.display = 'block'

    setTimeout(function () {
        formularioEnviar.reset()
        button.style = "display = block"
        document.getElementById("error-msg").style.display = 'none'
        document.getElementById("sucess-msg").style.display = 'none'
    }, 5000);
}


function error() {
    statusError.innerHTML = "Oops! There was a problem.";
    document.getElementById("error-msg").style.display = 'block'
    setTimeout(function () {
        document.getElementById("error-msg").style.display = 'none'
        document.getElementById("sucess-msg").style.display = 'blocnonek'
    }, 5000);
}
/************************SEND EMAIL************ */