function openTab(evt, tabId) {
  const contents = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tabsb-btn");

  contents.forEach(content => content.classList.remove("active"));
  buttons.forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  evt.currentTarget.classList.add("active");
}
document.addEventListener("DOMContentLoaded", function () {
  // Модальное окно — Открытие
  const subscribeBtn = document.getElementById("subscribeBtn");
  const modal = document.getElementById("modal");
  if (subscribeBtn && modal) {
    subscribeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "block";
    });
  }

  // Модальное окно — Закрытие
  const closeModal = document.getElementById("closeModal");
  if (closeModal && modal) {
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Успешная регистрация — Закрытие второго модального окна
  const closeModalSuccess = document.getElementById("closeModalSuccess");
  const modalSuccess = document.getElementById("modalSuccess");
  if (closeModalSuccess && modalSuccess) {
    closeModalSuccess.addEventListener("click", function () {
      modalSuccess.style.display = "none";
    });
  }

  // Слайдер
  if (typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  function openTab(evt, tabId) {
    const contents = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tabsb-btn");
  
    contents.forEach(content => content.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active"));
  
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
  }

  window.checkResult = function () {
    const form = document.getElementById("quizForm");
    const resultDiv = document.getElementById("result");

    if (!form || !resultDiv) return;

    const totalQuestions = 50;
    const correctAnswers = Array(totalQuestions).fill("1"); // все правильные — "1"

    let correct = 0;
    let incorrect = 0;

    try {
      for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = form[`q${i}`]?.value;

        if (!userAnswer) throw new Error("Not all questions answered");

        if (userAnswer === correctAnswers[i - 1]) {
          correct++;
        } else {
          incorrect++;
        }
      }

      const score = correct * 2; // 2 балла за каждый правильный ответ

      resultDiv.innerHTML = `
        ✅ Ҷавобҳо дуруст: <strong>${correct}</strong><br>
        ❌ Ҷавобҳо нодуруст: <strong>${incorrect}</strong><br>
        🏆 Хол: <strong>${score} / ${totalQuestions * 2}</strong>
      `;

      resultDiv.classList.add("show");
      resultDiv.scrollIntoView({ behavior: "smooth" });

    } catch (error) {
      resultDiv.innerHTML = `<strong>Илтимос, ба ҳамаи 50 саволҳо ҷавоб диҳед.</strong>`;
    }
  };
});
   function startTest() {
      document.getElementById('test-content').style.display = 'block';
    }