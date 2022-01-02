


// ----------------hambuger-------------

const navTog = document.getElementById('navbar-toggler');
const navUL = document.getElementById('navbarSupportedContent');



 	navTog.addEventListener('click',() => {
 		navUL.classList.toggle('show');
 	});
// -------------------------------------

// ----------------bio buttons------------------


const bioBTN = document.getElementsByClassName("bio-page");


for(let m = 0; m < bioBTN.length; m++)
 {     

 
      bioBTN[m].addEventListener('click',() =>{

        window.location = "bio.html";

      });

    }

// ---------------------------------------------------
// --------------------------return home button---------------

    (document.getElementById("back")).addEventListener('click', () => {window.location = "main.html";});

    

// ---------------------------------------------------------