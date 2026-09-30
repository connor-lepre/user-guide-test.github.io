/* Tooltips for short explanatory detail, e.g. the Access value in the metadata strip.
   Markup: <span class="tip"><button type="button" class="tip-btn" aria-describedby="ID">…</button>
           <span class="tip-body" id="ID" role="tooltip" hidden>…</span></span>
   Leave off role="tooltip" when the body holds a link; focus can then move into it.
   Opens on hover, keyboard focus or tap; Escape or a tap elsewhere closes it.
   The body is fixed-positioned so a clipping parent (the trust strip) can't cut it off. */
document.querySelectorAll('.tip').forEach(function(tip){
  var btn = tip.querySelector('.tip-btn'), body = tip.querySelector('.tip-body'), timer, quiet = false;
  function place(){
    var r = btn.getBoundingClientRect();
    body.style.top = (r.bottom + 8) + 'px';
    body.style.left = Math.max(16, Math.min(r.left, innerWidth - body.offsetWidth - 16)) + 'px';
  }
  function show(){ clearTimeout(timer); if (!quiet && body.hidden) { body.hidden = false; place(); } }
  function close(){ clearTimeout(timer); body.hidden = true; }
  // Short delay lets the pointer cross the gap between the trigger and the tooltip.
  function hideSoon(){ clearTimeout(timer); timer = setTimeout(close, 120); }

  tip.addEventListener('mouseenter', show);
  tip.addEventListener('mouseleave', hideSoon);
  tip.addEventListener('focusin', show);
  tip.addEventListener('focusout', function(e){ if (!tip.contains(e.relatedTarget)) hideSoon(); });
  btn.addEventListener('click', show); // touch screens: tap to open
  document.addEventListener('keydown', function(e){
    if (e.key !== 'Escape' || body.hidden) return;
    var inside = body.contains(document.activeElement);
    close();
    // Focus was on a link in the body: hand it back to the trigger without reopening.
    if (inside) { quiet = true; btn.focus(); quiet = false; }
  });
  document.addEventListener('click', function(e){ if (!tip.contains(e.target)) close(); });
  addEventListener('scroll', function(){ if (!body.hidden) place(); }, {passive: true});
  addEventListener('resize', function(){ if (!body.hidden) place(); });
});
