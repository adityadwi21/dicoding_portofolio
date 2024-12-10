// Select all skill images
const skillImages = document.querySelectorAll(".skill-image");

// Function to show each image one by one
function showImages() {
  skillImages.forEach((image, index) => {
    setTimeout(() => {
      image.classList.add("show");
    }, index * 2000); // Delay each image by 1 second
  });
}

// Call the function to start showing images
window.onload = showImages;
