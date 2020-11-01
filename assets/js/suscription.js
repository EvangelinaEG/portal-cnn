
window.addEventListener('load', function(){
    
    document.getElementById('myform').reset();

    const name = document.getElementById('name');
    const  email = document.getElementById('email');
    const password = document.getElementById('password');
    const repassword = document.getElementById('repassword');
    const age = document.getElementById('age');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const zip = document.getElementById('zip');
    const dni = document.getElementById('dni');
    const sus = document.getElementById('subscriber');

    const errors = ["<ul>"];

    name.addEventListener('keypress', e =>
    {
        setTimeout(() => sus.textContent = e.target.value, 0);
    });

    name.addEventListener("blur", function( event ) {

        const name = event.target.value.trim();
        validaName(name);

    }, true);

    function validaName(name){

        const pattern = new RegExp('^[a-zA-Z\\s]+$');
    
        if(name.length < 6 || !pattern.test(name) || (name.indexOf(" ") == -1)){
            
            document.getElementById('name').nextElementSibling.classList.remove('hidden');
            document.getElementById('name').nextElementSibling.classList.add('danger');
            document.getElementById('name').nextElementSibling.textContent = "Must have 6 letters with at least space in the middle";

            return true;
        }   
    } 
        
    name.addEventListener("focus", function( event ) {
        
        document.getElementById('name').nextElementSibling.classList.remove('danger');
        document.getElementById('name').nextElementSibling.classList.add('hidden');
    
    }, true);

    
    email.addEventListener("blur", function( event ) {

        const email = event.target.value;
        validaEmail(email);

    }, true);

    function validaEmail(email){

        const patternEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    
        if(!patternEmail.test(email)){
            
            document.getElementById('email').nextElementSibling.classList.remove('hidden');
            document.getElementById('email').nextElementSibling.classList.add('danger');
            document.getElementById('email').nextElementSibling.textContent = "Invalid email";
            
            return true;
        }    
    }
    
    email.addEventListener("focus", function( event ) {
        
        document.getElementById('email').nextElementSibling.classList.remove('danger');
        document.getElementById('email').nextElementSibling.classList.add('hidden');
    
    }, true);

        
    password.addEventListener("blur", function( event ) {

        const password = event.target.value;
        validaPassword(password);

    }, true);

    function validaPassword(password){

        const patternPass = new RegExp('^[A-Za-z]+[0-9]+$');
    
        if(password.length < 8 || !patternPass.test(password)){
            
            document.getElementById('password').nextElementSibling.classList.remove('hidden');
            document.getElementById('password').nextElementSibling.classList.add('danger');
            document.getElementById('password').nextElementSibling.textContent = "Must have at least 8 characters with letters and numbers";
            
            return true;
        }    
    }
    
    password.addEventListener("focus", function( event ) {
        
        document.getElementById('password').nextElementSibling.classList.remove('danger');
        document.getElementById('password').nextElementSibling.classList.add('hidden');
      
    }, true);

    repassword.addEventListener("blur", function( event ) {

        const repassword = event.target.value;
        validaRepassword(repassword);
        
    }, true);

    function validaRepassword(repassword){

        if(!(repassword === password.value)){
            
            document.getElementById('repassword').nextElementSibling.classList.remove('hidden');
            document.getElementById('repassword').nextElementSibling.classList.add('danger');
            document.getElementById('repassword').nextElementSibling.textContent = "The passwords don't match";
            
            return true;
        }    
    }   

    repassword.addEventListener("focus", function( event ) {
        
        document.getElementById('repassword').nextElementSibling.classList.remove('danger');
        document.getElementById('repassword').nextElementSibling.classList.add('hidden');
            
    }, true);
    
    
    
    age.addEventListener("blur", function( event ) {

        const age = event.target.value;
        validaAge(age);

    }, true);

    function validaAge(age){

        const patternAge = new RegExp('^[0-9]+$');

        if(age < 18 || !patternAge.test(age))
        {
            
            document.getElementById('age').nextElementSibling.classList.remove('hidden');
            document.getElementById('age').nextElementSibling.classList.add('danger');
            document.getElementById('age').nextElementSibling.textContent = "You must be 18 years of age or older";
            
            return true;
        }    
    }

    age.addEventListener("focus", function( event ) {
        
        document.getElementById('age').nextElementSibling.classList.remove('danger');
        document.getElementById('age').nextElementSibling.classList.add('hidden');
    
    }, true);
    
    

    phone.addEventListener("blur", function( event ) {

        const phone = event.target.value;
        validaPhone(phone);

    }, true);

    function validaPhone(phone){

        const patternPhone = new RegExp('^[+0-9]+[^-_()\\s]$');

        if(phone.length < 7 || !patternPhone.test(phone))
        {
            
            document.getElementById('phone').nextElementSibling.classList.remove('hidden');
            document.getElementById('phone').nextElementSibling.classList.add('danger');
            document.getElementById('phone').nextElementSibling.textContent = "Must have 7 digits or more, no dots or dashes";
           
            return true;
            
        }    
    }

    phone.addEventListener("focus", function( event ) {
        
        document.getElementById('phone').nextElementSibling.classList.remove('danger');
        document.getElementById('phone').nextElementSibling.classList.add('hidden');
           
    }, true);
    
   

    address.addEventListener("blur", function( event ) {

        const address = event.target.value.trim();
        validaAddress(address);

    }, true);

    function validaAddress(address){

        const patternAddress = new RegExp('^[a-zA-Z0-9\\s]+$');
    
        if(address.length < 5 || !patternAddress.test(address) || (address.indexOf(" ") == -1)){
            
            document.getElementById('address').nextElementSibling.classList.remove('hidden');
            document.getElementById('address').nextElementSibling.classList.add('danger');
            document.getElementById('address').nextElementSibling.textContent = "Must have at least 5 characters with letters and numbers and space in the middle";
            
            return true;
        }    
    }

    address.addEventListener("focus", function( event ) {
        
        document.getElementById('address').nextElementSibling.classList.remove('danger');
        document.getElementById('address').nextElementSibling.classList.add('hidden');
            
    }, true);
    
    city.addEventListener("blur", function( event ) {

        const city = event.target.value.trim();
        validaCity(city);
        
    }, true);

    function validaCity(city){

        if(city.length < 3){
            
            document.getElementById('city').nextElementSibling.classList.remove('hidden');
            document.getElementById('city').nextElementSibling.classList.add('danger');
            document.getElementById('city').nextElementSibling.textContent = "Must have at least 3 characters";
            
            return true;
        }    
    }

    city.addEventListener("focus", function( event ) {
        
        document.getElementById('city').nextElementSibling.classList.remove('danger');
        document.getElementById('city').nextElementSibling.classList.add('hidden');
            
    }, true);
    

    zip.addEventListener("blur", function( event ) {

        const zip = event.target.value.trim();
        validaZip(zip);
        
    }, true);

    function validaZip(zip){

        if(zip.length < 3){
            
            document.getElementById('zip').nextElementSibling.classList.remove('hidden');
            document.getElementById('zip').nextElementSibling.classList.add('danger');
            document.getElementById('zip').nextElementSibling.textContent = "Must have at least 3 characters";
            
            return true;
        }    
    }

    zip.addEventListener("focus", function( event ) {
        
        document.getElementById('zip').nextElementSibling.classList.remove('danger');
        document.getElementById('zip').nextElementSibling.classList.add('hidden');
           
    }, true);
    
   

    dni.addEventListener("blur", function( event ) {

        const dni = event.target.value.trim();
         validaDni(dni);

    }, true);

    function validaDni(dni){

        const patternDni = new RegExp('^[0-9]+$');

        if(dni.length < 7 || dni.length > 8 || !patternDni.test(dni)){
            
            document.getElementById('dni').nextElementSibling.classList.remove('hidden');
            document.getElementById('dni').nextElementSibling.classList.add('danger');
            document.getElementById('dni').nextElementSibling.textContent = "Must have 7 or 8 digits";
            
            return true;
        }   
    }

    dni.addEventListener("focus", function( event ) {
        
        document.getElementById('dni').nextElementSibling.classList.remove('danger');
        document.getElementById('dni').nextElementSibling.classList.add('hidden');
            
    }, true);
    
    document.getElementById("myform").addEventListener('submit', function(){
        const valName = validaName(name);
        if(valName){
            errors.push("<li>The name must have 6 letters with at least space in the middle</li>");
        }
        const valEmail = validaName(email);
        if(valEmail){
            errors.push("<li>Invalid email</li>");
        }
        const valPassword = validaName(password);
        if(valPassword){
            errors.push("<li>the password must have at least 8 characters with letters and numbers</li>");
        }
        const valRepassword = validaName(repassword);
        if(valRepassword){
            errors.push("<li>The passwords don't match</li>");
        }
        const valAge = validaName(age);
        if(valAge){
            errors.push("<li>You must be 18 years of age or older</li>");
        }
        const valPhone = validaName(phone);
        if(valPhone){
            errors.push("<li>The phone must have 7 digits or more, no dots or dashes</li>");
        }
        const valAddress = validaName(address);
        if(valAddress){
            errors.push("<li>The address must have at least 5 characters with letters and numbers and space in the middle</li>");
        }
        const valCity = validaName(city);
        if(valCity){
            errors.push("<li>The city must have at least 3 characters</li>");
        }
        const valZip = validaName(zip);
        if(valZip){
            errors.push("<li>The zip must have at least 3 characters</li>");
        }
        const valDni = validaName(dni);
        if(valDni){
            errors.push("<li>The dni must have 7 or 8 digits</li>");
        }
        errors.push("</ul>");

        alert("You have the next errors:<br>"+errors);
    }, false);

   
});