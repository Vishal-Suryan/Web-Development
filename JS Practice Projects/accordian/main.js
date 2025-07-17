const data = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook.",
  },
  {
    id: 2,
    question: "What is a component?",
    answer:
      "A component is a reusable piece of UI that can be a function or a class in React.",
  },
  {
    id: 3,
    question: "What is state in React?",
    answer:
      "State is a built-in object that stores property values that belong to a component.",
  },
  {
    id: 4,
    question: "What is the useEffect hook used for?",
    answer:
      "useEffect lets you perform side effects in function components, like data fetching or subscriptions.",
  },
  {
    id: 5,
    question: "What are props in React?",
    answer:
      "Props are arguments passed into React components to customize behavior and appearance.",
  },
];

const accordianWrapper = document.querySelector(".accordian");
function createAccordianData() {
  accordianWrapper.innerHTML = data
    .map(
      (dataItem) => `
        <div class="accordian-item">
            <div class="accordian-title">
                <h3> ${dataItem.question} </h3>
                <i class="fa-solid fa-arrow-down"></i>
            </div>
            <div class="accordian-content">
                <p> ${dataItem.answer} </p>
            </div>
        </div>
        `
    )
    .join(" ");
}
createAccordianData();

const getAccordianTitles = document.querySelectorAll(".accordian-title");
getAccordianTitles.forEach((currentItem) => {
  currentItem.addEventListener("click", (e) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");
      getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
      });
      currentItem.classList.add("active");
    }
  });
});
