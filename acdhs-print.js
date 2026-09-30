/* Print support for guide pages.
   - .print-btn opens the browser's print dialog.
   - .print-meta (shown only in print) records when and where the copy came from, so a paper
     copy can be traced back to the online guide and checked for updates. */
document.querySelectorAll('.print-btn').forEach(function(btn){
  btn.addEventListener('click', function(){ window.print(); });
});
window.addEventListener('beforeprint', function(){
  var date = new Date().toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});
  var url = location.href.split('#')[0];
  document.querySelectorAll('.print-meta').forEach(function(el){
    el.textContent = 'Printed ' + date + ' from ' + url + '. Check the online guide for updates.';
  });
});
