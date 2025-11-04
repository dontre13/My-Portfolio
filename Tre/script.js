// array of images
const images = [
  {
    src: "https://placehold.co/100x100?text=1",
    caption: "image 1",
  },
  {
    src: "https://placehold.co/100x100?text=2",
    caption: "image 2",
  },
  {
    src: "https://placehold.co/100x100?text=3",
    caption: "image 3",
  },
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeBtn = document.getElementById("close-btn");

// render gallery using map()

gallery.innerHTML = images
  .map(
    (item) =>
      `<div class="gallery-item" onclick="openLightbox('${item.src}', '${item.caption}')">
    <img src="${item.src}" />
    <p>${item.caption}</p>
  </div>`
  )
  .join("");

// open lightbox
function openLightbox(src, caption) {
  lightboxImage.src = src;
  lightboxCaption.textContent = caption;
  lightbox.style.display = "flex";
}

// close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// click anywhere outside
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
