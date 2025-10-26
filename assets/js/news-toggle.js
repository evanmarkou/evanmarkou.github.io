(function() {
  function initializeNewsToggles() {
    var containers = document.querySelectorAll('.news-list');
    if (containers.length === 0) return;

    containers.forEach(function(container) {
      var visibleCount = parseInt(container.getAttribute('data-visible-count') || '5', 10);
      var items = container.querySelectorAll('.news-item');
      var itemArray = Array.prototype.slice.call(items);
      var newDays = parseInt(container.getAttribute('data-new-days') || '60', 10);
      var btn = container.querySelector('.news-toggle');

      // Mark recent items as new
      var now = new Date();
      itemArray.forEach(function(li) {
        var ds = li.getAttribute('data-date');
        if (!ds) return;
        var d = new Date(ds);
        if (isNaN(d)) return;
        var diffDays = Math.floor((now - d) / (1000 * 60 * 60 * 24));
        if (diffDays <= newDays) {
          li.classList.add('is-new');
        }
      });

      if (!btn) return;

      function setExpanded(expanded) {
        btn.setAttribute('aria-expanded', String(expanded));
        btn.setAttribute('aria-label', expanded ? 'Show fewer news items' : 'Show more news items');
        btn.textContent = expanded ? '[less]' : '[more]';
        itemArray.forEach(function(li, idx) {
          if (idx >= visibleCount) {
            li.hidden = !expanded;
          }
        });
      }

      // Ensure initial state is correct
      setExpanded(btn.getAttribute('aria-expanded') === 'true');

      btn.addEventListener('click', function() {
        var expanded = this.getAttribute('aria-expanded') === 'true';
        setExpanded(!expanded);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNewsToggles);
  } else {
    initializeNewsToggles();
  }
})();
