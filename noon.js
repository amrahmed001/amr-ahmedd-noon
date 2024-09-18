const products = [
  {
    id: 1,
    name: "هاتف ذكي سامسونج جالاكسي S21",
    price: 12999,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    name: "لابتوب ديل XPS 13",
    price: 24999,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: 3,
    name: "ساعة ذكية آبل واتش سيريس 7",
    price: 7999,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 4,
    name: "سماعات سوني WH-1000XM4",
    price: 5999,
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: 5,
    name: "كاميرا كانون EOS R5",
    price: 34999,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 6,
    name: "جهاز تابلت آيباد برو",
    price: 16999,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 7,
    name: "مكبر صوت JBL Flip 5",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 8,
    name: "طابعة إبسون EcoTank",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 9,
    name: "شاشة عرض LG UltraFine 5K",
    price: 19999,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 10,
    name: "لوحة مفاتيح ميكانيكية Corsair K95",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 11,
    name: "ماوس لاسلكي Logitech MX Master 3",
    price: 1799,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
  },
  {
    id: 12,
    name: "سماعات رأس للألعاب HyperX Cloud II",
    price: 2299,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: 13,
    name: "كاميرا ويب Logitech StreamCam",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1591815302525-756a9bcc3425?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: 14,
    name: "محرك أقراص صلبة خارجي Samsung T7",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 15,
    name: "جهاز عرض Epson Home Cinema",
    price: 9999,
    image:
      "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 16,
    name: "راوتر Mesh TP-Link Deco X60",
    price: 3999,
    image:
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 17,
    name: "مكيف هواء متنقل Honeywell",
    price: 5499,
    image:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 18,
    name: "مكنسة كهربائية روبوتية iRobot Roomba",
    price: 6999,
    image:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
];

function displayProducts(productsToShow) {
  const productsContainer = document.getElementById("featured-products");
  productsContainer.innerHTML = "";
  productsToShow.forEach((product, index) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.style.animationDelay = `${index * 0.1}s`;
    productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="price">${product.price} جنيه</p>
                        <button class="add-to-cart" data-id="${product.id}">أضف إلى السلة</button>
                    </div>
                `;
    productsContainer.appendChild(productElement);
  });
}

displayProducts(products);

document.getElementById("search-button").addEventListener("click", function () {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
});

let cartCount = 0;
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
    e.target.textContent = "تمت الإضافة";
    e.target.disabled = true;
    setTimeout(() => {
      e.target.textContent = "أضف إلى السلة";
      e.target.disabled = false;
    }, 2000);
  }
});

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("تم تسجيل الدخول بنجاح!");
});

document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("شكرًا لاشتراكك في نشرتنا البريدية!");
    this.reset();
  });

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimation() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// إضافة وظيفة تسجيل الدخول
const loginButton = document.querySelector("nav ul li:last-child a");
const loginPage = document.querySelector(".login-page");
const closeLogin = document.querySelector(".close-login");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  loginPage.style.display = "flex";
});

closeLogin.addEventListener("click", () => {
  loginPage.style.display = "none";
});

document.querySelector(".login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("تم تسجيل الدخول بنجاح!");
  loginPage.style.display = "none";
});
