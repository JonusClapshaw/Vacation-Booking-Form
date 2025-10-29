document.getElementById("vacation-form").onsubmit = () => {

    clearErrors();

    //validate first name
    let desname = document.getElementById('destination').value;
    let travelers = document.getElementById('travelers').value;
    
    let isValid = true;
    if(desname === 'select') {
        document.getElementById("err-des").style.display = "block";
        isValid = false;
    }

    if(travelers == 0) {
        document.getElementById("err-trav").style.display = "block";
        isValid = false;
    }

    if(travelers < 0) {
        document.getElementById("err-trav2").style.display = "block";
        isValid = false;
    }

    return isValid;
}

function clearErrors(){
    let errors = document.getElementsByClassName("error");
    for(let i = 0; i < errors.length; i++)
    {
        errors[i].style.display = "none";
    }
}