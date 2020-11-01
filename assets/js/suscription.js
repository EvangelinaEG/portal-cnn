
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

        const name = event.target.value;
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

  
    
});