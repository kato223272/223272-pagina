
    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.carousel-indicator');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.style.display = 'block'; // Mostrar imagen actual
                } else {
                    slide.style.display = 'none';  // Ocultar imágenes
                }
            });

            indicators.forEach((indicator, i) => {
                indicator.classList.remove('active');
                if (i === index) {
                    indicator.classList.add('active');
                }
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            showSlide(currentIndex);
        }

        indicators.forEach((indicator, i) => {
            indicator.addEventListener('click', () => {
                goToSlide(i); // Cambiar instantáneamente al hacer clic en el indicador
            });
        });

        showSlide(currentIndex);

        // Configura un temporizador para cambiar automáticamente
        setInterval(function() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 3000);
    });

  
