let bulbImg = document.querySelector("#bulbImage");
let catImg = document.querySelector("#catImage");
let switchStatusHead = document.querySelector("#switchStatus");
let switchOffBtn = document.querySelector("#offSwitch");
let switchOnBtn = document.querySelector("#onSwitch");

switchOffBtn.addEventListener("click", () => {
    catImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    bulbImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    switchStatusHead.innerHTML = "Switched Off";
    switchOffBtn.style.backgroundColor = "#cbd2d9";
    switchOnBtn.style.backgroundColor = "#22c55e";
    switchOffBtn.style.border = "none";
});

switchOnBtn.addEventListener("click", () => {
    catImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    bulbImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    switchStatusHead.textContent = "Switched On";
    switchOffBtn.style.backgroundColor = "#e12d39";
    switchOnBtn.style.backgroundColor = "#cbd2d9";
    switchOnBtn.style.border = "none";
});
