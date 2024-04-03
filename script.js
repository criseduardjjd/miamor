// script.js

document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const images = document.querySelectorAll(".image-gallery img");
    let currentIndex = 0;
  
    function showImage(index) {
      images.forEach((image) => {
        image.style.display = "none";
      });
      images[index].style.display = "block";
    }
  
    showImage(currentIndex);
  
    prevBtn.addEventListener("click", function() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  
    nextBtn.addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById("prevBtn2");
    const nextBtn = document.getElementById("nextBtn2");
    const images = document.querySelectorAll(".image-gallery2 img");
    let currentIndex = 0;
  
    function showImage(index) {
      images.forEach((image) => {
        image.style.display = "none";
      });
      images[index].style.display = "block";
    }
  
    showImage(currentIndex);
  
    prevBtn.addEventListener("click", function() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  
    nextBtn.addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById("prevBtn3");
    const nextBtn = document.getElementById("nextBtn3");
    const images = document.querySelectorAll(".image-gallery3 img");
    let currentIndex = 0;
  
    function showImage(index) {
      images.forEach((image) => {
        image.style.display = "none";
      });
      images[index].style.display = "block";
    }
  
    showImage(currentIndex);
  
    prevBtn.addEventListener("click", function() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  
    nextBtn.addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById("prevBtn4");
    const nextBtn = document.getElementById("nextBtn4");
    const images = document.querySelectorAll(".image-gallery4 img");
    let currentIndex = 0;
  
    function showImage(index) {
      images.forEach((image) => {
        image.style.display = "none";
      });
      images[index].style.display = "block";
    }
  
    showImage(currentIndex);
  
    prevBtn.addEventListener("click", function() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  
    nextBtn.addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  });

  