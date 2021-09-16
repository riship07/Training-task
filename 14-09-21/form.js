
function rishi(){

    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("id", "form");
    form.setAttribute("action","new.html")
    form.setAttribute("onsubmit", "return set()")

    var div = document.createElement('div');
    div.setAttribute("class", "form-group has-feedback");
    var label = document.createElement('label');
    label.setAttribute("for", "name");
    label.innerHTML = "Name";
    div.appendChild(label);
    elementname = document.createElement("input");
    elementname.setAttribute("type", "text");
    elementname.setAttribute("name", "name");
    elementname.setAttribute("id", "name");
    elementname.setAttribute("class", "form-control");
    elementname.setAttribute("placeholder", "Name");
    elementname.setAttribute("required", "true");
   
    div.appendChild(elementname);
    form.appendChild(div);
    var br = document.createElement("br");
    form.appendChild(br);
    
    var label = document.createElement('label');
    label.setAttribute("for", "password");
    label.innerHTML = "Password";
    form.appendChild(label);
    var elementpass = document.createElement("input");
    elementpass.setAttribute("type", "password");
    elementpass.setAttribute("name", "password");
    elementpass.setAttribute("id", "password");
    elementpass.setAttribute("class", "form-control");
    elementpass.setAttribute("placeholder", "password");
    elementpass.setAttribute("onblur", "valid1()");
    elementpass.setAttribute("required", "true");
   

    form.appendChild(elementpass);
    var br = document.createElement("br");
    form.appendChild(br);


    var label = document.createElement('label');
    label.setAttribute("for", "email");
    label.innerHTML = "Email";
    form.appendChild(label);
    var elementemail = document.createElement("input");
    elementemail.setAttribute("type", "email");
    elementemail.setAttribute("name", "email");
    elementemail.setAttribute("id", "email");
    elementemail.setAttribute("class", "form-control");
    elementemail.setAttribute("placeholder", "Email");
    elementemail.setAttribute("required", "true");
    form.appendChild(elementemail);
    var br = document.createElement("br");
    form.appendChild(br);
   
   
    var div = document.createElement('div');
    div.setAttribute("class", "form-group has-feedback");
    var label = document.createElement('label');
    label.setAttribute("for", "tel");
    label.innerHTML = "Phone Number";
    div.appendChild(label);
    var elementtel = document.createElement("input");
    elementtel.setAttribute("type", "number");
    elementtel.setAttribute("name", "tel");
    elementtel.setAttribute("id", "tel");
    elementtel.setAttribute("class", "form-control");
    elementtel.setAttribute("placeholder", "Phone Number");
    elementtel.setAttribute("onblur", "valid()");
    elementtel.setAttribute("required", "true");
    div.appendChild(elementtel);
    form.appendChild(div);
    var br = document.createElement("br");
    form.appendChild(br);

   

    var label = document.createElement('label');
    label.setAttribute("for", "select");
    label.innerHTML = "State";
    form.appendChild(label);
    var select = document.createElement("select");
    select.setAttribute("onchange", "city()");
    select.setAttribute("id", "state");
    select.setAttribute("class", "form-control");
    select.setAttribute("required", "true");
    var optionx = document.createElement("option");
    optionx.setAttribute("name","xoption");
    var option1 = document.createElement("option");
    option1.setAttribute("name", "firstOption");
    var option2 = document.createElement("option");
    option2.setAttribute("name", "secondOption");
    optionx.innerHTML = "select";
    option1.innerHTML = "Gujarat";
    option2.innerHTML = "Maharastra";
    select.appendChild(optionx);
    select.appendChild(option1)
    select.appendChild(option2);
    form.appendChild(select);
    var br = document.createElement("br");
    form.appendChild(br);

    var label = document.createElement('label');
    label.setAttribute("for", "city");
    label.innerHTML = "City";
    form.appendChild(label);
    var select1 = document.createElement("select");
    select1.setAttribute("id", "citie");
    select1.setAttribute("class", "form-control");
    select1.setAttribute("required", "true");
    var optionx = document.createElement("option");
    optionx.setAttribute("id", "optionx");
    var optiony = document.createElement("option");
    optiony.setAttribute("id", "optiony");

    select1.appendChild(optionx)
    select1.appendChild(optiony);
    form.appendChild(select1);
    var br = document.createElement("br");
    form.appendChild(br);

    var btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.innerHTML = "Submit";
    btn.setAttribute("name", "button");
    form.appendChild(btn);

    document.getElementsByTagName("body")[0].appendChild(form);

};




function city(){

        var x = document.getElementsByTagName("select")[0].value;
        var optionx = document.getElementById("optionx");
        var optiony = document.getElementById("optiony");
    
    if (x == 'Gujarat'){
        optionx.innerHTML = "Ahmedabad";
        optiony.innerHTML = "Gandhinagar";
    } else if (x == 'Maharastra') {
        optionx.innerHTML = "Mumbai";
        optiony.innerHTML = "Pune";
    }
    }

    function set(){

        var name = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        var tel = document.getElementById("tel").value;
        var email = document.getElementById("email").value;
        var state = document.getElementsByTagName("select")[0].value;
        var citie = document.getElementById("citie")[0].value;

        localStorage.setItem("txtname", name);
        localStorage.setItem("txtpassword", password);
        localStorage.setItem("txttel", tel);
        localStorage.setItem("txtemail", email);
        localStorage.setItem("txtstate", state);
        localStorage.setItem("txtcity", citie);
        if(!valid()){
            return false;
        }
        if(!valid1()){
            return false;
        }
    }
    function valid(){
        var v = document.getElementById("tel").value;
        console.log(v);
        if(v.length<10){
            alert("mobile no. should be big");
            return false;
        }
        else if(v.length>10){
            alert("mobile no. should be small");
            return false;
        }
        else{
            return true;
        }
    }
    function valid1(){
        var b = document.getElementById("password").value;
        var pass= /^[A-Za-z]\w{7,14}$/;
        if(!pass.test(b)){
           alert("password should be average!");
             return false;
        }
        else{
            return true;
        }
    }