const textArray = [
    "A passionate web developer.",
    "A curious student.",
    "A lifelong learner.",
  ];
  
  const typingElement = document.querySelector(".typing");
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeLoop() {
    const currentText = textArray[index];
    if (!isDeleting && charIndex <= currentText.length) {
      typingElement.textContent = currentText.substring(0, charIndex);
      charIndex++;
      setTimeout(typeLoop, 100);
    } else if (isDeleting && charIndex >= 0) {
      typingElement.textContent = currentText.substring(0, charIndex);
      charIndex--;
      setTimeout(typeLoop, 50);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeLoop, 1500); // pause before deleting
      } else {
        isDeleting = false;
        index = (index + 1) % textArray.length;
        setTimeout(typeLoop, 500); // pause before typing next
      }
    }
  }
  
  window.onload = typeLoop;

  function toggleCertificates() {
    const certGrid = document.getElementById('certGrid');
    certGrid.classList.toggle('hidden');
  }
  