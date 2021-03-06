
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

    let errors = "";
    let datos = "";

    //functions

    function validaName(name){
       
        const lname = name.value.trim();
        const pattern = new RegExp('^[a-zA-Z\\s]+$');
    
        if(lname.length < 6 || !pattern.test(lname) || (lname.indexOf(" ") === -1)){
            
            document.getElementById('name').nextElementSibling.classList.remove('hidden');
            document.getElementById('name').nextElementSibling.classList.add('danger');
            document.getElementById('name').classList.add('danger-border');
            document.getElementById('name').nextElementSibling.textContent = "Must have 6 letters with at least space in the middle";

            return false;
        } 
        else{

            document.getElementById('name').classList.add('success-border');
            return true;

        }  
    } 

    function validaEmail(email){

        const lemail = email.value;
        const patternEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    
        if(!patternEmail.test(lemail)){
            
            document.getElementById('email').nextElementSibling.classList.remove('hidden');
            document.getElementById('email').nextElementSibling.classList.add('danger');
            document.getElementById('email').classList.add('danger-border');
            document.getElementById('email').nextElementSibling.textContent = "Invalid email";
            
            return false;

        }else{

            document.getElementById('email').classList.add('success-border');
            return true;

        }    
    }

    function validaPassword(password){

        const lpassword = password.value;
        const patternPass = new RegExp('^[A-Za-z]+[0-9]+$');
    
        if(lpassword.length < 8 || !patternPass.test(lpassword)){
            
            document.getElementById('password').nextElementSibling.classList.remove('hidden');
            document.getElementById('password').nextElementSibling.classList.add('danger');
            document.getElementById('password').classList.add('danger-border');
            document.getElementById('password').nextElementSibling.textContent = "Must have at least 8 characters with letters and numbers";
            
            return false;

        }else{

            document.getElementById('password').classList.add('success-border');
            return true;

        }    
    }

    function validaRepassword(repassword){

        const lrepassword = repassword.value;

        if(!(lrepassword === password.value)){
            
            document.getElementById('repassword').nextElementSibling.classList.remove('hidden');
            document.getElementById('repassword').nextElementSibling.classList.add('danger');
            document.getElementById('repassword').classList.add('danger-border');
            document.getElementById('repassword').nextElementSibling.textContent = "The passwords don't match";
            
            return false;

        }else{

            document.getElementById('repassword').classList.add('success-border');
            return true;

        }    
    } 

    function validaAge(age){

        const lage = age.value;
        const patternAge = new RegExp('^[0-9]+$');

        if(lage < 18 || !patternAge.test(lage))
        {
            
            document.getElementById('age').nextElementSibling.classList.remove('hidden');
            document.getElementById('age').nextElementSibling.classList.add('danger');
            document.getElementById('age').classList.add('danger-border');
            document.getElementById('age').nextElementSibling.textContent = "You must be 18 years of age or older";
            
            return false;

        }else{

            document.getElementById('age').classList.add('success-border');
            return true;

        }    
    }

    function validaPhone(phone){

        const lphone = phone.value;
        const patternPhone = new RegExp('^[+0-9]+[^-_()\\s]$');

        if(lphone.length < 7 || !patternPhone.test(lphone))
        {
            
            document.getElementById('phone').nextElementSibling.classList.remove('hidden');
            document.getElementById('phone').nextElementSibling.classList.add('danger');
            document.getElementById('phone').classList.add('danger-border');
            document.getElementById('phone').nextElementSibling.textContent = "Must have 7 digits or more, no dots or dashes";
           
            return false;
            
        }else{

            document.getElementById('phone').classList.add('success-border');
            return true;

        }    
    }

    function validaAddress(address){

        const laddress = address.value.trim();
        const patternAddress = new RegExp('^[a-zA-Z0-9\\s]+$');
    
        if(laddress.length < 5 || !patternAddress.test(laddress) || (laddress.indexOf(" ") === -1)){
            
            document.getElementById('address').nextElementSibling.classList.remove('hidden');
            document.getElementById('address').nextElementSibling.classList.add('danger');
            document.getElementById('address').classList.add('danger-border');
            document.getElementById('address').nextElementSibling.textContent = "Must have at least 5 characters with letters and numbers and space in the middle";
            
            return false;

        }else{

            document.getElementById('address').classList.add('success-border');
            return true;

        }    
    }

    function validaCity(city){

        const lcity = city.value.trim();

        if(lcity.length < 3){
            
            document.getElementById('city').nextElementSibling.classList.remove('hidden');
            document.getElementById('city').nextElementSibling.classList.add('danger');
            document.getElementById('city').classList.add('danger-border');
            document.getElementById('city').nextElementSibling.textContent = "Must have at least 3 characters";
            
            return false;

        }else{

            document.getElementById('city').classList.add('success-border');
            return true;

        }    
    }

    function validaZip(zip){

        const lzip = zip.value.trim();

        if(lzip.length < 3){
            
            document.getElementById('zip').nextElementSibling.classList.remove('hidden');
            document.getElementById('zip').nextElementSibling.classList.add('danger');
            document.getElementById('zip').classList.add('danger-border');
            document.getElementById('zip').nextElementSibling.textContent = "Must have at least 3 characters";
            
            return false;

        }else{

            document.getElementById('zip').classList.add('success-border');
            return true;

        }    
    }

    function validaDni(dni){

        const ldni = dni.value.trim();
        const patternDni = new RegExp('^[0-9]+$');

        if(ldni.length < 7 || ldni.length > 8 || !patternDni.test(ldni)){
            
            document.getElementById('dni').nextElementSibling.classList.remove('hidden');
            document.getElementById('dni').nextElementSibling.classList.add('danger');
            document.getElementById('dni').classList.add('danger-border');
            document.getElementById('dni').nextElementSibling.textContent = "Must have 7 or 8 digits";
            
            return false;

        }else{

            document.getElementById('dni').classList.add('success-border');
            return true;
        }   
    }

    //listener

    name.addEventListener('keypress', e =>
    {
        setTimeout(() => sus.textContent = e.target.value, 0);
    });

    name.addEventListener("blur", function( event ) {

        validaName(event.target);

    }, true);

    
        
    name.addEventListener("focus", function( event ) {

        document.getElementById('name').nextElementSibling.classList.remove('danger');
        document.getElementById('name').nextElementSibling.classList.add('hidden');
        document.getElementById('name').classList.remove('danger-border');
        document.getElementById('name').classList.remove('success-border');
    
    }, true);

    
    email.addEventListener("blur", function( event ) {
        
        validaEmail(event.target);

    }, true);

    
    
    email.addEventListener("focus", function( event ) {
        
        document.getElementById('email').nextElementSibling.classList.remove('danger');
        document.getElementById('email').nextElementSibling.classList.add('hidden');
        document.getElementById('email').classList.remove('danger-border');
        document.getElementById('email').classList.remove('success-border');
    
    }, true);

        
    password.addEventListener("blur", function( event ) {

        validaPassword(event.target);

    }, true);

    
    
    password.addEventListener("focus", function( event ) {
        
        document.getElementById('password').nextElementSibling.classList.remove('danger');
        document.getElementById('password').nextElementSibling.classList.add('hidden');
        document.getElementById('password').classList.remove('danger-border');
        document.getElementById('password').classList.remove('success-border');
      
    }, true);

    repassword.addEventListener("blur", function( event ) {

        validaRepassword(event.target);
        
    }, true);

      

    repassword.addEventListener("focus", function( event ) {
        
        document.getElementById('repassword').nextElementSibling.classList.remove('danger');
        document.getElementById('repassword').nextElementSibling.classList.add('hidden');
        document.getElementById('repassword').classList.remove('danger-border');
        document.getElementById('repassword').classList.remove('success-border');
            
    }, true);
    
    
    
    age.addEventListener("blur", function( event ) {

        validaAge(event.target);

    }, true);

    

    age.addEventListener("focus", function( event ) {
        
        document.getElementById('age').nextElementSibling.classList.remove('danger');
        document.getElementById('age').nextElementSibling.classList.add('hidden');
        document.getElementById('age').classList.remove('danger-border');
        document.getElementById('age').classList.remove('success-border');
    
    }, true);
    
    

    phone.addEventListener("blur", function( event ) {

        validaPhone(event.target);

    }, true);

    

    phone.addEventListener("focus", function( event ) {
        
        document.getElementById('phone').nextElementSibling.classList.remove('danger');
        document.getElementById('phone').nextElementSibling.classList.add('hidden');
        document.getElementById('phone').classList.remove('danger-border');
        document.getElementById('phone').classList.remove('success-border');
           
    }, true);
    
   

    address.addEventListener("blur", function( event ) {

        validaAddress(event.target);

    }, true);

    
    address.addEventListener("focus", function( event ) {
        
        document.getElementById('address').nextElementSibling.classList.remove('danger');
        document.getElementById('address').nextElementSibling.classList.add('hidden');
        document.getElementById('address').classList.remove('danger-border');
        document.getElementById('address').classList.remove('success-border');
            
    }, true);
    
    city.addEventListener("blur", function( event ) {

        validaCity(event.target);
        
    }, true);

    

    city.addEventListener("focus", function( event ) {
        
        document.getElementById('city').nextElementSibling.classList.remove('danger');
        document.getElementById('city').nextElementSibling.classList.add('hidden');
        document.getElementById('city').classList.remove('danger-border');
        document.getElementById('city').classList.remove('success-border');
            
    }, true);
    

    zip.addEventListener("blur", function( event ) {

        validaZip(event.target);
        
    }, true);

    
    zip.addEventListener("focus", function( event ) {
        
        document.getElementById('zip').nextElementSibling.classList.remove('danger');
        document.getElementById('zip').nextElementSibling.classList.add('hidden');
        document.getElementById('zip').classList.remove('danger-border');
        document.getElementById('zip').classList.remove('success-border');
           
    }, true);
    
   

    dni.addEventListener("blur", function( event ) {

        validaDni(event.target);

    }, true);

    

    dni.addEventListener("focus", function( event ) {
        
        document.getElementById('dni').nextElementSibling.classList.remove('danger');
        document.getElementById('dni').nextElementSibling.classList.add('hidden');
        document.getElementById('dni').classList.remove('danger-border');
        document.getElementById('dni').classList.remove('successs-border');
            
    }, true);
    
    document.getElementById("myform").addEventListener('submit', function(){
        
        const valName = validaName(name);
        const valEmail = validaEmail(email);
        const valPassword = validaPassword(password);
        const valRepassword = validaRepassword(repassword);
        const valAge = validaAge(age);
        const valPhone = validaPhone(phone);
        const valAddress = validaAddress(address);
        const valCity = validaCity(city);
        const valZip = validaZip(zip);
        const valDni = validaDni(dni);


        if(!valName){
            errors += "The name must have 6 letters with at least space in the middle.\n";
        }else{
            datos += "Your name is: "+name.value+"\n";
        }
     

        if(!valEmail){
            errors += "Invalid email.\n";
        }else{
            datos += "Your email is: "+email.value+"\n";
        }

    
        if(!valPassword){
            errors += "the password must have at least 8 characters with letters and numbers.\n";
        }else{
            datos += "Your password is: "+password.value+"\n";
        }


        if(!valRepassword){
            errors += "he passwords don't match.\n";
        }
        

        if(!valAge){
            errors += "You must be 18 years of age or older.\n";
        }else{
            datos += "Your age is: "+age.value+"\n";
        }


        if(!valPhone){
            errors += "The phone must have 7 digits or more, no dots or dashes.\n";
        }else{
            datos += phone.value;
        }


        if(!valAddress){
            errors += "The address must have at least 5 characters with letters and numbers and space in the middle\n";
        }else{
            datos += "Your address: "+address.value+"\n";
        }

        
        if(!valCity){
            errors += "The city must have at least 3 characters.\n";
        }else{
            datos += "Your city is: "+city.value+"\n";
        }


        if(!valZip){
            errors += "The zip must have at least 3 characters.\n";
        }else{
            datos += "Your zip code is: "+zip.value+"\n";
        }


        if(!valDni){
            errors += "The dni must have 7 or 8 digits.\n";
        }else{
            datos += "Your dni is: "+dni.value+"\n";
        }
        
        if(datos !== "" && errors !== ""){
            alert("Your data is:\n"+datos+"\nYou have the next errors:\n"+errors);
        }else if(errors!==""){
            alert("You have the next errors:\n"+errors);
        }else if(datos !== ""){
            alert("Your data is:\n"+datos);
        }
        
    });

   
});