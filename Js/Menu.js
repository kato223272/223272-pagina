function cambiarColorDesplazar() {
    var menuLinks = document.querySelectorAll('.menu');
    window.addEventListener('scroll', function() {
        var scrollPos = window.scrollY;
        var activeLink = null;
    
        menuLinks.forEach(function(link) {
            var seccionId = link.getAttribute('href').substring(1); 
            var seccion = document.getElementById(seccionId);
    
            if (seccion && scrollPos >= seccion.offsetTop - 20 && scrollPos < (seccion.offsetTop + seccion.offsetHeight - 50)) {
                activeLink = link;
            }
        });
    
        menuLinks.forEach(function(link) {
            if (link === activeLink) {
                link.style.backgroundColor = 'white';
                // link.style.borderRadius = '12px'; 
                link.style.fontWeight = 'bold'; 
                link.style.padding = '4px';
                link.style.colorLine = 'red';
                link.style.borderBottom = '4px solid black'; 
            } else {
                link.style.backgroundColor = '';
                link.style.color = '';
                link.style.borderBottom = ''; 
                link.style.textDecoration = 'none';
            }
        });
    });
    
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
    
            var seccionId = link.getAttribute('href').substring(1);
            var seccion = document.getElementById(seccionId);
    
            if (seccion) {
                seccion.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}
