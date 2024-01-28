const btn = document.getElementById("btn");
const thanksContainer = document.getElementById("tnx");
const ratingContainer = document.getElementById("rate");
const rating = document.querySelectorAll(".ratings");
const rateVal = document.getElementById("rate-val");

btn.addEventListener("click", () => {
  thanksContainer.style.display = "block";
  console.log("button clicked");
  ratingContainer.style.display = "none";
});

rating.forEach((rate) => {
  rate.addEventListener("click", () => {
    const result = rate.innerHTML;
    rateVal.innerHTML = result;
    console.log(result);
  });
});
