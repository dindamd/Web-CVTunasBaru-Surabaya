document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
    
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    fetchTestimonials().forEach(renderTestimonial);
  });


  function goToCart() {
    window.location.href = "cart.html"; // Ubah "cart.html" dengan URL halaman cart yang sesuai
  }


  AOS.init();

  function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
  }

  function fetchTestimonials() {
    // Replace this with actual fetching logic (e.g., AJAX request to the server)
    // Jika menggunakan AJAX, Anda perlu mengubah fungsi ini untuk mengambil data dari server
    const testimonials = [
        { name: "Alice", rating: 5, comment: "Great service!" },
        { name: "Bob", rating: 4, comment: "Very satisfied with the products." }
    ];
    return testimonials;
}

function renderTestimonial(testimonial) {
    // Temukan elemen testimonial-list untuk menampilkan testimoni
    const testimonialList = document.querySelector(".testimonial-list");

    // Buat elemen testimonial-item
    const testimonialItem = document.createElement("div");
    testimonialItem.classList.add("testimonial-item");

    // Buat elemen untuk nama, rating, dan komentar
    const nameElement = document.createElement("p");
    nameElement.classList.add("name");
    nameElement.textContent = testimonial.name;

    const ratingElement = document.createElement("p");
    ratingElement.classList.add("rating");
    ratingElement.textContent = "★".repeat(testimonial.rating) + "☆".repeat(5 - testimonial.rating);

    const commentElement = document.createElement("p");
    commentElement.classList.add("comment");
    commentElement.textContent = testimonial.comment;

    // Masukkan elemen nama, rating, dan komentar ke dalam elemen testimonial-item
    testimonialItem.appendChild(nameElement);
    testimonialItem.appendChild(ratingElement);
    testimonialItem.appendChild(commentElement);

    // Masukkan elemen testimonial-item ke dalam testimonial-list
    testimonialList.appendChild(testimonialItem);
}
  