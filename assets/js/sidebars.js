/* global bootstrap: false */
// (function () {
//   'use strict'
//   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//   tooltipTriggerList.forEach(function (tooltipTriggerEl) {
//     new bootstrap.Tooltip(tooltipTriggerEl)
//   })
// })()

// *******************************************************

// ***************************menu highlight******************
   
    const mSection = document.getElementById('MainPortal');
    const mScroll = document.getElementById('MainScroll');
    const sections = document.querySelectorAll("section");
    const childSection = document.getElementsByClassName("sectionScroll")

  const navLi = document.querySelectorAll(".nav li a"); 
  const navLi2 = document.querySelectorAll(".nav li");
    var childSectionOffsets = [];
    var childSectionHeights = [];

  for(let x = 0; x<childSection.length; x++)
  {
    // get section heights and offsets, assign
    childSectionOffsets.push(childSection[x].offsetTop);
    childSectionHeights.push(childSection[x].clientHeight);
    
  }

  var pageScrolled = 0;
  let current1 = "";
  var pageVal = 0;
  

  function checkScrolled ()
  {

       for(let z = 0; z<childSection.length; z++)
       {        

                pageVal = ((childSectionOffsets[z] + childSectionHeights[z] ) - childSectionHeights[z]/1.01);
                
                pageScrolled = mSection.scrollTop;
             if (pageScrolled >= pageVal) {
              current1 = childSection[z].getAttribute("id");
              
                navLi[z].classList.add(current1);

               }

              
       }

  }


  
  
  
  mSection.addEventListener('scroll', () => {

        checkScrolled();

        navLi.forEach((a) => {
        a.classList.remove("active");
       
        
        if (a.classList.contains(current1)) {
         
         a.classList.add("active");
         

        }



     });

   
  

         


// ---------------------------------trial code--------------------
    
    

//---------------------------------------------------------------- 
      
        
     
    });


// **********************************************************



// ----------------product buttons/links------------------


    const productBTN = document.getElementsByClassName("btn-warning");
    const primeWebBTN = document.getElementById("primeJS");

    primeWebBTN.addEventListener('click',() =>{

        window.location = "https://rotaractmbarara.org/";

         });
    

    for(let m = 0; m < productBTN.length; m++)
    {     

     
      productBTN[m].addEventListener('click',() =>{

        window.location = "software.html";

         });

       }

// ---------------------------------------------------