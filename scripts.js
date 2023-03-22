let isOpen = false;

function toggleText() {
  const flowerBouquet = document.getElementById("flower-bouquet");
  const flowers = document.getElementsByClassName("flower");
  const hiddenText = document.getElementById("hidden-text");

  for (let i = 0; i < flowers.length; i++) {
    const angle = i * 72 + (isOpen ? 0 : 180);
    flowers[i].style.transform = `rotate(${angle}deg) translateY(-150%)`;
  }

  if (isOpen) {
    hiddenText.classList.add("hidden");
  } else {
    setTimeout(() => {
      hiddenText.classList.remove("hidden");
    }, 1000);
  }

  isOpen = !isOpen;
}
