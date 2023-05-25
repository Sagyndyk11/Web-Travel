function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}

const thumbnails = document.querySelectorAll('.thumbnails img');
const preview = document.querySelector('.preview img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    const index = this.dataset.index;
    preview.src = `image${index}.jpg`;
  });
});

