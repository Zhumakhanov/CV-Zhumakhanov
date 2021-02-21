$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");

		}
		        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

	});
	  $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

$('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



});
function load(){
	$(".text-1").animate({opacity: '1'}, "slow");
	$(".text-2").animate({opacity: '1'}, "slow");
	$(".text-3").animate({opacity: '1'}, "slow");


}



    var typed = new Typed(".typing", {
        strings: ["Photographer", "Videographer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Photographer", "Videographer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


function initMap() {
	var opt = {
		center:{lat:43.22077322925671, lng:76.68078375257855},
		zoom: 12
	}

	var map =new google.maps.Map(document.getElementById("map"), opt);

	var icon = {
		url:"https://cdn.picpng.com/camera/camera-photo-image-67327.png",
		scaledSize: new google.maps.Size(30, 30),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(0, 0)
	};
	var icon2 = {
		url:"https://icon-library.com/images/video-icon-vector/video-icon-vector-6.jpg",
		scaledSize: new google.maps.Size(30, 30),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(0, 0)
	};
	var icon3 = {
		url:"https://cdn2.iconfinder.com/data/icons/mix-color-5/100/Mix_color_5__laptop-512.png",
		scaledSize: new google.maps.Size(30, 30),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(0, 0)
	};
	var marker = new google.maps.Marker({
		position: {lat:43.23325370203987, lng:76.87894801230743},
		map: map,
		icon: icon
	});
	var marker2 = new google.maps.Marker({
		position: {lat:43.21476107487357, lng:76.84670472354581},
		map: map,
		icon: icon2
	});
	var marker3 = new google.maps.Marker({
		position: {lat:43.22275291258531, lng:76.67590132436311},
		map: map,
		icon: icon3
	});
	
}

  AOS.init();















// 	$(".portfolio-content").magnificPopup({
// 	delegate: 'a',
// 	type: 'image',
// 	portfolio-content:{
// 		enabled: true
// 	}
// });








// let mouseCursor = document.querySelector(".cursor");
// let navBar = document.querySelectorAll('.navbar li','.logo');


// window.addEventListener("mousemove", cursor);

// function cursor(e) {
// 	mouseCursor.style.top = e.pageY + "px";
// 	mouseCursor.style.left = e.pageX + "px";
//  }

// navBar.forEach(link =>{
// 	link.addEventListener('mouseleave', () =>{
// 		mouseCursor.classList.remove("link-grow");

// 	});
// 		link.addEventListener('mouseover', () =>{
// 		mouseCursor.classList.add("link-grow");

// 	});
	

// });