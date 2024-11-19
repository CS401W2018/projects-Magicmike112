document.getElementById('myform').addEventListener('submit',function(event){
    event.preventDefault();
    const firstname = document.getElementById ('fname')
    const lastname = document.getElementById ('Lname')
    const formdata = {
        fname: firstname,
        lname: lastname,
        password: document.getElementById('remeber').value,
        password: document.getElementById('state').value
        
    }
    if(!firstname ||!lastname) {
        alert ("you sum=bmitted the form!")
        return;
    };
    const xhr = new XMLHttpRequest ();
    xhr.open ("POST", "sumbmit.js",true);
    xhr.setRequestHeader("content-type", "application/json;charset=UTf-8")
    xhr.onreadystatechange = function () {
        if (xhr.readystate === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText)
            document.
            alert ('form submitted successfully.');
        } else if (xhr.readystate === 4){
            alert ('error submitting form.');
        }

    };
    xhr.send(json.stringify(formdata))
    console.log (formdata);
    alert ('')

});
