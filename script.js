const eyeball = document.querySelector('.eyeball');
const pupil = document.createElement('div');
pupil.classList.add('pupil');
eyeball.appendChild(pupil);

document.addEventListener('mousemove', function (event) {
  const x = event.clientX;
  const y = event.clientY;

  const eyeballRect = eyeball.getBoundingClientRect();
  const eyeballCenterX = eyeballRect.left + eyeballRect.width / 2;
  const eyeballCenterY = eyeballRect.top + eyeballRect.height / 2;

  const deltaX = x - eyeballCenterX;
  const deltaY = y - eyeballCenterY;

  const angle = Math.atan2(deltaY, deltaX);
  const radius = eyeballRect.width / 2 - pupil.getBoundingClientRect().width / 2;

  const pupilX = eyeballCenterX + Math.cos(angle) * radius;
  const pupilY = eyeballCenterY + Math.sin(angle) * radius;

  pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});
