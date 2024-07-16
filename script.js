

const men = document.getElementById("men");

men.addEventListener("click", function(e) {
  e.preventDefault();
  window.location.href = "/men/index.html"; 
});

const women = document.getElementById('women')

women.addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = "/women/index.html"; 
  });

const kids = document.getElementById('kids')

kids.addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = "/kids/index.html"; 
  });