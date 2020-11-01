
window.addEventListener('load', function(){
    
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

    
    
});