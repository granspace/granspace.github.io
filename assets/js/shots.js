// Graceful degradation for screenshots that haven't been added yet: if a
// `.shot` image fails to load, hide it so only the "pending" caption shows
// (instead of a broken-image icon). Remove this once all images exist.
document.querySelectorAll('.shot img').forEach(function (img) {
  img.addEventListener('error', function () {
    var fig = img.closest('.shot')
    if (fig) fig.classList.add('missing')
  })
})
