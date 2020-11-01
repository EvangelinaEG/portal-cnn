
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

    name.addEventListener('keypress', e =>
    {
        setTimeout(() => sus.textContent = e.target.value, 0);
    });

    name.addEventListener("blur", function( event ) {

        const name = event.target.value.trim();
        const pattern = new RegExp('^[a-zA-Z\\s]+$');
    
        if(name.length < 6 || !pattern.test(name) || (name.indexOf(" ") == -1)){
            
            document.getElementById('name').nextElementSibling.classList.remove('hidden');
            document.getElementById('name').nextElementSibling.classList.add('danger');
            return false;
        }    
    }, true);

    name.addEventListener("focus", function( event ) {
        
            document.getElementById('name').nextElementSibling.classList.remove('danger');
            document.getElementById('name').nextElementSibling.classList.add('hidden');
            return false;
            
    }, true);

    email.addEventListener("blur", function( event ) {

        const email = event.target.value;
        const patternEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    
        if(!patternEmail.test(email)){
            
            document.getElementById('email').nextElementSibling.classList.remove('hidden');
            document.getElementById('email').nextElementSibling.classList.add('danger');
            return false;
        }    
    }, true);

    email.addEventListener("focus", function( event ) {
        
            document.getElementById('email').nextElementSibling.classList.remove('danger');
            document.getElementById('email').nextElementSibling.classList.add('hidden');
            return false;
            
    }, true);

    password.addEventListener("blur", function( event ) {

        const password = event.target.value;
        const patternPass = new RegExp('^[A-Za-z]+[0-9]+$');
    
        if(password.length < 8 || !patternPass.test(password)){
            
            document.getElementById('password').nextElementSibling.classList.remove('hidden');
            document.getElementById('password').nextElementSibling.classList.add('danger');
            return false;
        }    
    }, true);

    password.addEventListener("focus", function( event ) {
        
            document.getElementById('password').nextElementSibling.classList.remove('danger');
            document.getElementById('password').nextElementSibling.classList.add('hidden');
            return false;
            
    }, true);

    repassword.addEventListener("blur", function( event ) {

        const repassword = event.target.value;
        
        if(!(repassword === password.value)){
            
            document.getElementById('repassword').nextElementSibling.classList.remove('hidden');
            document.getElementById('repassword').nextElementSibling.classList.add('danger');
            return false;
        }    
    }, true);

    repassword.addEventListener("focus", function( event ) {
        
            document.getElementById('repassword').nextElementSibling.classList.remove('danger');
            document.getElementById('repassword').nextElementSibling.classList.add('hidden');
            return false;
            
    }, true);
    
    age.addEventListener("blur", function( event ) {

        const age = event.target.value;
        const patternAge = new RegExp('^[0-9]+$');
        if(age < 18 || !patternAge.test(age))
        {
            
            document.getElementById('age').nextElementSibling.classList.remove('hidden');
            document.getElementById('age').nextElementSibling.classList.add('danger');
            return false;
        }    
    }, true);

    age.addEventListener("focus", function( event ) {
        
            document.getElementById('age').nextElementSibling.classList.remove('danger');
            document.getElementById('age').nextElementSibling.classList.add('hidden');
            return false;
            
    }, true);

    phone.addEventListener("blur", function( event ) {

        const phone = event.target.value;
        const patternPhone = new RegExp('^[+0-9]+[^-_()\\s]$');
        if(phone.length < 7 || !patternPhone.test(phone))
        {
            
            document.getElementById('phone').nextElementSibling.classList.remove('hidden');
            document.getElementById('phone').nextElementSibling.classList.add('danger');
            return false;
        }    
    }, true);

    phone.addEventListener("focus", function( event ) {
        
            document.getElementById('phone').nextElementSibling.classList.remove('danger');
            document.getElementById('phone').nextElementSibling.classList.add('hidden');
            return false;
            
    }, true);

    address.addEventListener("blur", function( event ) {

        const address = event.target.value.trim();
        const pattern = new RegExp('^[a-zA-Z0-9\\s]+$');
    
        if(address.length < 5 || !pattern.test(address) || (address.indexOf(" ") == -1)){
            
            document.getElementById('address').nextElementSibling.classList.remove('hidden');
            document.getElementById('address').nextElementSibling.classList.add('danger');
            return false;
        }    
    }, true);

    address.addEventListener("focus", function( event ) {
        
            document.getElementById('address').nextElementSibling.classList.remove('danger');
            document.getElementById('address').nextElementSibling.classList.add('hidden');
            return false;
            
    }, true);

    city.addEventListener("blur", function( event ) {

        const city = event.target.value.trim();
    
        if(city.length < 3){
            
            document.getElementById('city').nextElementSibling.classList.remove('hidden');
            document.getElementById('city').nextElementSibling.classList.add('danger');
            return false;
        }    
    }, true);

    city.addEventListener("focus", function( event ) {
        
            document.getElementById('city').nextElementSibling.classList.remove('danger');
            document.getElementById('city').nextElementSibling.classList.add('hidden');
            return false;
            
    }, true);

    zip.addEventListener("blur", function( event ) {

        const zip = event.target.value.trim();
    
        if(zip.length < 3){
            
            document.getElementById('zip').nextElementSibling.classList.remove('hidden');
            document.getElementById('zip').nextElementSibling.classList.add('danger');
            return false;
        }    
    }, true);

    zip.addEventListener("focus", function( event ) {
        
            document.getElementById('zip').nextElementSibling.classList.remove('danger');
            document.getElementById('zip').nextElementSibling.classList.add('hidden');
            return false;
            
    }, true);
});