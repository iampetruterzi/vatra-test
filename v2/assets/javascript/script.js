window.onscroll = function() {stickyHeader()};

// Get the header
var header = document.getElementById("pageHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


function dropdownLang() {
    document.getElementById("links").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-lang");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function extend() {
    var element = document.getElementById("about");
    element.classList.add("extended");
  }


const caroussel = document.querySelector(".caroussel")

let isDragging = false

const dragStart = () => {
  isDragging = true;
}

const dragging = (e) => {
  if(isDragging) return;
  caroussel.scrollLeft = e.pageX;
}

caroussel.addEventListener("mousedown", dragStart)
caroussel.addEventListener("mousedown", dragging)