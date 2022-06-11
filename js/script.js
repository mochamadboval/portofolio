document.addEventListener('DOMContentLoaded', () => {
  const enter = document.getElementById('Enter');
  const certificates = Array.from(document.querySelectorAll('details'));

  enter.addEventListener('click', () => {
    const body = document.querySelector('body');
    const header = document.getElementById('Header');

    body.style.overflow = 'visible';
    header.style.animationPlayState = 'running';
  })

  certificates.forEach((certificate) => {
    certificate.addEventListener('click', (event) => {
      const active = certificates.find((cert) => cert.open);

      if(!event.currentTarget.open && active) {
        active.open = false;
      }
    })
  })
})
