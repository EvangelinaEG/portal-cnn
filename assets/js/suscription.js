
window.addEventListener('load', function(){
    
    const inputElement = document.getElementById('name');
    const sus = document.getElementById('subscriber');
    

    inputElement.addEventListener('keypress', e =>
    {
        setTimeout(() => sus.textContent = e.target.value, 0);
    });

    

});