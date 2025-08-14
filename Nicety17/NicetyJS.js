const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalImages = document.getElementById('modal-images');
const closeBtn = document.getElementById('close');


const projectData = {
  "Chaing mai Robotic Games": {
    desc: "Microbit programing",
    images: ["img/IMG_4768.jpg", "img/IMG_4770.jpg", "img/IMG_4767.jpg"]
  },
  "Only Food": {
    desc: "Delivery Application",
    images: ["img/IMG_4775.jpg", "img/IMG_4776.jpg", "img/IMG_4777.jpg"]
  },
  "Sang Som": {
    desc: "Sneaker Website",
    images: ["img/home1.png", "img/home2.png", "img/search1.png"]
  }
};

let slideIndex = 0;
let slideInterval;

cards.forEach(card => {
  const btn = card.querySelector('.btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = card.querySelector('strong').innerText;
    const data = projectData[title];
    modalTitle.innerText = title;
    modalDesc.innerText = data.desc;

    modalImages.innerHTML = '';
    data.images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      modalImages.appendChild(img);
    });

    slideIndex = 0;
    updateSlide();
    slideInterval = setInterval(nextSlide, 2000);

    modal.style.display = 'block';
  });
});

function updateSlide() {
  const imgs = modalImages.querySelectorAll('img');
  imgs.forEach((img, i) => {
    img.classList.toggle('active', i === slideIndex);
  });
}

function nextSlide() {
  const imgs = modalImages.querySelectorAll('img');
  slideIndex = (slideIndex + 1) % imgs.length;
  updateSlide();
}

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  clearInterval(slideInterval);
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
    clearInterval(slideInterval);
  }
});