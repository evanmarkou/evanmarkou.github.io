document.addEventListener("DOMContentLoaded", function() {
  var collapsibles = document.querySelectorAll(".publication-entry .collapsible");
  
  collapsibles.forEach(function(collapsible) {
    collapsible.addEventListener("click", function() {
      var targetId = this.getAttribute('data-target');
      var content = document.getElementById(targetId);
      
      if (!content) {
        return;
      }

      var isVisible = content.style.display === "block";

      var allContent = document.querySelectorAll('.collapsible-content');
      allContent.forEach(function(item) {
        item.style.display = 'none';
      });

      var allButtons = document.querySelectorAll('.publication-entry .collapsible');
      allButtons.forEach(function(button) {
        button.classList.remove('active');
      });

      if (!isVisible) {
        content.style.display = 'block';
        this.classList.add('active');
      }
    });
  });
});
