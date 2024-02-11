window.onload = () => {
  const accordionButton: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".accordion-button");

  const accordionText: NodeListOf<HTMLParagraphElement> =
    document.querySelectorAll(".accordion-text");

  const accordionSvg: NodeListOf<HTMLElement> =
    document.querySelectorAll(".accordion-svg");

  // IIFE
  (() => {
    accordionSvg.forEach((el) => {
      if (el.classList.contains("open")) {
        el.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
        `;
      } else {
        el.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
        `;
      }
    });
  })();

  const setupSVG = () => {
    accordionSvg.forEach((el) => {
      if (el.classList.contains("open")) {
        el.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
        `;
      } else {
        el.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
        `;
      }
    });
  };

  const toggleClass = (id: number | string) => {
    accordionText.forEach((text) => {
      if (text.id == id) {
        text.classList.toggle("hidden");

        if (text.ariaHidden == "false") {
          text.setAttribute("aria-hidden", "true");
        } else {
          text.setAttribute("aria-hidden", "false");
        }
      }
    });
  };

  accordionButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      // targeting HTML elements
      const targetButton = event.currentTarget as HTMLButtonElement;

      if (targetButton.ariaExpanded == "true") {
        targetButton.setAttribute("aria-expanded", "false");
      } else {
        targetButton.setAttribute("aria-expanded", "true");
      }

      toggleClass(button.children[0].id);
      button.children[1].classList.toggle("open");
      setupSVG();
    });
  });
};
