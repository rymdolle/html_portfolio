let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    let scale = 0;
    if (entry.isIntersecting)
      scale = 1;
    entry.target.style.transform = `scale(${scale})`;
  });
});

for (const img of document.getElementsByTagName('img')) {
  img.style.transform = 'scale(0)';
  img.style.transition = 'transform 0.5s ease-out';
  observer.observe(img);
}
