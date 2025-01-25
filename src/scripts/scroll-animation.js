export const scrollAnimation = () => {
  const elements = document.querySelectorAll(".element-animation");

  if (elements.length === 0) {
    console.warn("The .element-animation element was not found");
    return;
  }

  const onEntry = (entry) => {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  };

  const options = {
    threshold: [0.5],
  };
  const observer = new IntersectionObserver(onEntry, options);

  for (let elem of elements) {
    observer.observe(elem);
  }
};
