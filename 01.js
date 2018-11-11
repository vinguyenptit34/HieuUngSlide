document.addEventListener("DOMContentLoaded",function () {
	var nut = document.querySelectorAll('.chuyenslide ul li');
	var slides = document.querySelectorAll('.cacslide ul li');
	// bat su kien click cho tung nut
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click', function () {
			//bo tat ca mau den di
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('kichhoat');
			}
			this.classList.add('kichhoat');
			// xu ly phan tinh vi tri
			//console.log(this.previousElementSibling);
			var nutkichhoat = this;
			var vitrinut = 0;
			for (vitrinut = 0;nutkichhoat =  nutkichhoat.previousElementSibling; vitrinut++) {}
			//het vong lap thi vitrinut = stt
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				slides[vitrinut].classList.add('active');
			}
		})
	}

	autoSlide();

	function autoSlide() {
		var thoigian = setInterval(function () {
			var vitrislide = 0; 
			var slideHienTai = document.querySelector('.cacslide ul li.active');
			for (vitrislide = 0; slideHienTai = slideHienTai.previousElementSibling; vitrislide++) {}
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				nut[i].classList.remove('kichhoat');
			}
			if (vitrislide==slides.length-1) {
				slides[0].classList.add('active');
				nut[0].classList.add('kichhoat');
			}
			else {
				slides[vitrislide].nextElementSibling.classList.add('active');
				nut[vitrislide].nextElementSibling.classList.add('kichhoat');
			}	
		},4000);
	}

	//Ngoài ra còn hàm clearInterval để hủy hàm thời gian

},false)