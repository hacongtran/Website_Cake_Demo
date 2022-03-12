// Header sticky
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var headerSticky = $(".header__nav");
var topBar = $(".header__topbar");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        headerSticky.classList.add("scroll");
        topBar.classList.add("hide");
    } else {
        headerSticky.classList.remove("scroll");
        topBar.classList.remove("hide");
    }
}

// Search JS onlick on Icon search
const iconSearch = document.querySelector('.header__nav-search-icon');
const activeSearch  = document.querySelector('.header__input-hidden');
iconSearch.onclick = function(){
    activeSearch.classList.toggle('active')   
}

// // Slider Image
var counterSlides = 1;
setInterval(function(){
	document.getElementById('radio' + counterSlides).checked = true;
	counterSlides++;
	if (counterSlides > 4){
		counterSlides = 1;
	}
},7000);



// reaction liked js
const btn__Liked = document.getElementById('btnlike');

btn__Liked.onclick = function (){
    if (btn__Liked.style.color == "red"){
        btn__Liked.style.color = "white";
    }
    else{
        btn__Liked.style.color = "red";
    }
}



// Sort by name product
const cakeBtns = document.querySelectorAll('.home__cake-menu-list button')
const cakeList = document.querySelectorAll('.home__cake-item')

cakeBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const type = e.target.getAttribute('type-cake')

		// remove and set active fpr button
		document
			.querySelector('.home__cake-menu-list button.activeCake')
			.classList.remove('activeCake')
		e.target.classList.add('activeCake')

		// filter elements
		cakeList.forEach((item) => {
			if (type == 'all' || item.getAttribute('type-cake') == type)
				item.classList.remove('hide')
			else item.classList.add('hide')
		})
	})
})


// Buy-product- Coming Soon Show off

	const buyBtns = document.querySelectorAll('.js-buy-product')
	const modal = document.querySelector('.js-modal__commingsoon')
	const modalContainer = document.querySelector('.js-modal__container')
	const modalClose = document.querySelector('.js-modal__close')
	function showBuyProducts(){
		modal.classList.add('js-modal__open')		
	} 

	function hideBuyProducts(){
		modal.classList.remove('js-modal__open')
	}

	for (const buyBtn of buyBtns) {
		buyBtn.addEventListener('click', showBuyProducts)
	}
	modalClose.addEventListener('click', hideBuyProducts)
	modal.addEventListener('click',hideBuyProducts)
	modalContainer.addEventListener('click',function(event){
		event.stopPropagation()
	})

	


