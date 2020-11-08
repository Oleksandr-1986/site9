//webP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});
//burger
$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		$(".header__menu").on("click","a",function(){
			$('.header__burger,.header__menu').removeClass('active');
			$('body').removeClass('lock');
		});
	});
});
//teamActive
$('.team__right_column').click(function(e) {
	$('.team__right_column').removeClass('active');
	$(this).addClass('active');
});
//tabs
$(function() {
	let tab = $('#tabs > div'); 
	tab.hide().filter(':first').show(); 	
// кліки по вкладкам
	$('#tabs .team__right_column-name a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .team__right_column-name a').removeClass('active');
		$(this).addClass('active');
			
	});
// кліки по якорним ссилкам
	$('.tabs-target').click(function(){
		$('#tabs .team__right_column-name a[href=' + $(this).data('id')+ ']').click();
	});
});
//scrollTo
$(document).ready(function(){
    $(".team__right_column-name").on("click","a", function (event) {
        // виключаємо тандартну ракцію браузера
        event.preventDefault();
        // отримуємо ідентифікатор блока з атрибута href
        var id  = $(this).attr('href'),
        // знаходимо висоту на якій розташований блок віднімаємо висоту меню, щоб не перекрива
            top = $(id).offset().top 
        // анімація переходу блоку в мс
        $('body,html').animate({scrollTop: top},1000);
    });
});