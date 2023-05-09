const eye = document.getElementById('eye');
const eyeball = document.getElementById('eyeball');

eye.addEventListener('mousemove', function(event) {
  const x = event.clientX;
  const y = event.clientY;
  const eyeBox = eye.getBoundingClientRect();
  const eyeCenterX = eyeBox.left + eyeBox.width / 2;
  const eyeCenterY = eyeBox.top + eyeBox.height / 2;
  const angle = Math.atan2(y - eyeCenterY, x - eyeCenterX);
  const radius = eyeBox.width / 2 - eyeball.clientWidth / 2;
  const newX = radius * Math.cos(angle);
  const newY = radius * Math.sin(angle);

  eyeball.style.transform = `translate(${newX}px, ${newY}px)`;
});