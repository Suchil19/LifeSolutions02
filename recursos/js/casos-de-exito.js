//Carousel TimeLine
$(document).ready(function() {

    $.js = function (el) {
        return $('[data-js=' + el + ']')
    };
    
    function carousel() {
      $.js('timeline-carousel').slick({
        infinite: false,
        arrows: false,
        //aqui ponemos los puntos en la galeria
        dots: false,
        autoplay: true,
        speed: 1200,
        loop: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
      });
    }
    
    carousel()});



    /**** CONTADORES */
    // Just added bootstrap v4.5 css
// You don't need any other library to run this counter
const animationDuration = 5000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round( animationDuration / frameDuration );

const easeOutQuad = t => t * ( 2 - t );

const animateCountUp = el => {
	let frame = 0;
	const countTo = parseInt( el.innerHTML, 10 );
	
	const counter = setInterval( () => {
		frame++;

		const progress = easeOutQuad( frame / totalFrames );

		const currentCount = Math.round( countTo * progress );


		if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
			el.innerHTML = currentCount;
		}

		if ( frame === totalFrames ) {
			clearInterval( counter );
		}
	}, frameDuration );
};

	const countupEls = document.querySelectorAll( '.timer' );
	countupEls.forEach( animateCountUp );