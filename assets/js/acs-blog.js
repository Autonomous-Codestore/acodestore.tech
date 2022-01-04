
// ----------------hambuger-------------

const navTog = document.getElementById('navbar-toggler');
const navUL = document.getElementById('navbarSupportedContent');



 	navTog.addEventListener('click',() => {
 		navUL.classList.toggle('show');
 	});
// -------------------------------------