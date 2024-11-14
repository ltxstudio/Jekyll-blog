document.addEventListener('scroll', () => {
  const progress = document.getElementById('progress-bar');
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progressHeight = (window.scrollY / totalHeight) * 100;
  progress.style.width = progressHeight + "%";
});
