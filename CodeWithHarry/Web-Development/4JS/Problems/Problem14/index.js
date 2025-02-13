// The Window Scroller: You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.

let btn = document.getElementsByClassName("top");

btn[0].addEventListener("click", (e) => {
  let target = document.getElementById("sec-1");
  target.scrollIntoView({
    behavior: "smooth",
  });
});

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (elem) => {
    elem.preventDefault();
    let target = document.querySelector(a.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});
