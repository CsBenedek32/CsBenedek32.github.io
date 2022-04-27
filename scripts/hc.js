let highContrast = localStorage.getItem('highContrast');
const highContrastToggle = document.querySelector('#hc');


const enableHighContrastMode = () => {
    
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/highContrast.css';
    head.appendChild(link);
    localStorage.setItem('highContrast', 'enabled');
};

const disableHighContrastMode = () => {
    var linkNode = document.querySelector('link[href*="css/highContrast.css"]');
    linkNode.parentNode.removeChild(linkNode);
   
    localStorage.setItem('highContrast', 'disabled');
};


if(highContrast === 'enabled'){
    enableHighContrastMode();
}

highContrastToggle.addEventListener('click',() =>{
    highContrast = localStorage.getItem('highContrast');
    if(highContrast !== 'enabled'){
       enableHighContrastMode();
   }
   else{
       disableHighContrastMode();
   }
});