
(()=>{

	const toggleButton = e=>{
		const navbar = document.querySelector(".navbar-nav");
		if (e.target.classList.contains("active")){
			e.target.classList.remove("active");
			navbar.classList.remove("active");
		}else{
			e.target.classList.add("active");
			navbar.classList.add("active");
		}
	}

	const navButton = document.querySelector(".navbar-toggler");
	navButton.addEventListener("click",toggleButton);

})();