const useRem = () => {
  let w = document.documentElement.clientWidth;
  let size = w / 100;
  document.documentElement.style.fontSize = size + "px";
};

document.addEventListener("DOMContentLoaded", useRem);
window.addEventListener("resize", useRem);
