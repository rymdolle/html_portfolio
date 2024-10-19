function bounce() {
    const image = document.getElementById('monkey');
    let scale = 1.0;
    let direction = 1;
    const speed = 0.01;

    function zoom() {
      scale += direction * speed;
      image.style.transform = `scale(${scale})`;

      if (scale > 1 || scale < 0.2)
        direction *= -1;

      requestAnimationFrame(zoom);
    }

    zoom();
}

bounce();
