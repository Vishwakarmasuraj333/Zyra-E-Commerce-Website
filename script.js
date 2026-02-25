
        const paymentModal = document.getElementById("paymentModal");

        function openModal() {
            paymentModal.classList.add("active");
        }

        function closeModal() {
            paymentModal.classList.remove("active");
        }
        function processPayment() {

            const name = document.getElementById("name").value.trim();
            const card = document.getElementById("card").value.trim();
            const btn = document.getElementById("payBtn");

            if (name === "" || card === "") {
                alert("⚠ Please fill all details!");
                return;
            }

            btn.innerText = "Processing...";
            btn.disabled = true;

            setTimeout(() => {
                alert("✅ Payment Successful! Order Confirmed 🎉");
                btn.innerText = "Pay Now";
                btn.disabled = false;
                closeModal();
            }, 1500);
        }
        const slides = document.querySelectorAll(".slide");
        let currentSlide = 0;

        function showSlide() {

            slides.forEach(slide => slide.classList.remove("active"));

            slides[currentSlide].classList.add("active");

            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
        }

        if (slides.length > 0) {
            setInterval(showSlide, 4000);
        }
        let cartCount = 0;
        const cartElement = document.getElementById("cart-count");

        function buyProduct(productName) {

            cartCount++;

            if (cartElement) {
                cartElement.innerText = cartCount;
            }

            alert("🛒 " + productName + " added to cart successfully!");
        }

        function changeLang(language) {
            alert("🌐 Language changed to " + language);
        }
        const langDropdown = document.querySelector(".lang-dropdown");

        if (langDropdown) {
            langDropdown.addEventListener("click", function () {
                if (window.innerWidth <= 768) {
                    this.classList.toggle("active");
                }
            });
        }

        const backToTopBtn = document.getElementById("backToTop");


        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });


        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
        document.addEventListener("DOMContentLoaded", function () {

            const hum = document.getElementById("hum");
            const navlinks = document.getElementById("navlinks");
            const dropdown = document.querySelector(".dropdown");


            hum.addEventListener("click", function () {
                hum.classList.toggle("active");
                navlinks.classList.toggle("active");
            });


            dropdown.addEventListener("click", function () {
                if (window.innerWidth <= 768) {
                    dropdown.classList.toggle("active");
                }
            });

        });

        const reveals = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });

        reveals.forEach(reveal => {
            observer.observe(reveal);
        });
   