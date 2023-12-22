const plansSwitch = document.querySelector(".plans-switch");
const basicPrice = document.querySelector(".basic-price");
const professionalPrice = document.querySelector(".professional-price");
const businessPrice = document.querySelector(".business-price");
const planDuration = document.querySelectorAll(".plan-duration");

plansSwitch.addEventListener("change", () => {
    if (plansSwitch.checked) {
        basicPrice.innerText = "₹437";
        professionalPrice.innerText = "₹843";
        businessPrice.innerText = "₹1,280";
        planDuration.forEach(p => {
            p.innerText = "/ month";
        })
    } else {
        basicPrice.innerText = "₹ 374";
        professionalPrice.innerText = "₹ 749";
        businessPrice.innerText = "₹ 1,124";
        planDuration.forEach(p => {
            p.innerText = "/ month";
        })
    }
})