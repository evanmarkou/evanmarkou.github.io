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

  var copyButtons = document.querySelectorAll('.btn-copy-bibtex');
  copyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var container = this.parentElement;
      var codeBlock = container.querySelector('pre code');
      var textToCopy = codeBlock.innerText;

      navigator.clipboard.writeText(textToCopy).then(function() {
        var originalIcon = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(function() {
          button.innerHTML = originalIcon;
        }, 2000); // Revert icon after 2 seconds
      }).catch(function(err) {
        console.error('Failed to copy text: ', err);
      });
    });
  });
});
