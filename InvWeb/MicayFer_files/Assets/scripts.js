<<<<<<< HEAD
var h = $(window).height(),
    w = $(window).width();
$(window).resize(function() {

    var nh = $(window).height(),
        nw = $(window).width();
    h = nh;
    w = nw;
    let imgURLBG = ''
    if (w < 800) {
        imgURLBG = '/InvWeb/MicayFer_files/Assets/IMGPARAANDROID.jpg'
    } else if (w >= 800 && w < 1280) {
        imgURLBG = '/InvWeb/MicayFer_files/Assets/IMGPARAIPHONE.jpg'
    } else {
        imgURLBG = '/InvWeb/MicayFer_files/Assets/IMGPARAPC.jpg'
    }
    // Instagram parallax
    $('.parallax-instagram').parallax({
        imageSrc: '/InvWeb/MicayFer_files/Assets/portada3.jpg'

    });

    // Portada parallax
    $('.parallax-portada').parallax({
        imageSrc: imgURLBG
    });
});

// let imgURLBG = ''
// if (w < 650) {
//     imgURLBG = '/InvWeb/MicayFer_files/Assets/IMGPARAANDROID.jpg'
// } else if (w >= 1000 && w < 1280) {
//     imgURLBG = '/InvWeb/MicayFer_files/Assets/IMGPARAIPHONE.jpg'
// } else {
//     imgURLBG = '/InvWeb/MicayFer_files/Assets/IMGPARAPC.jpg'
// }
// // Instagram parallax
// $('.parallax-instagram').parallax({
//     imageSrc: '/InvWeb/MicayFer_files/Assets/portada3.jpg'

// });

// // Portada parallax
// $('.parallax-portada').parallax({
//     imageSrc: imgURLBG
// });
=======
// Instagram parallax
$('.parallax-instagram').parallax({
    imageSrc: './MicayFer_files/Assets/portada3.jpg'

});

// Portada parallax
$('.parallax-portada').parallax({
    imageSrc: './MicayFer_files/Assets/portada2.jpg'
});

// ----------------------



// Cuenta Regresiva:

// // Set the date we're counting down to
// var countDownDate = new Date(fechaCuentaRegresiva).getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Display the result in the element with id="demo"
//     document.getElementById("reloj").innerHTML = days + " días, " + hours + "hs, " +
//         minutes + "m, " + seconds + "s ";

//     // If the count down is finished, write some text
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("reloj").innerHTML = "¡Llegó el gran día!";
//         $('#reloj').prev('p').html('Listo...');
//     }
// }, 1000);



// ----------------------
>>>>>>> d7ee74c91783aeb537969cc4b28ecacd694caa1d
