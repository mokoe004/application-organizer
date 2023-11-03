const radioButtons = document.querySelectorAll(".radioButtons");
const labels = document.querySelectorAll(".labels");
const form = document.querySelector("#formC");
let valid = true;

radioButtons.forEach((elem) => {
    elem.addEventListener("mouseover", () => {
        elem.classlist.replace("bg-gray-500", "bg-green-500");
    });

    elem.addEventListener("mouseout", () => {
        elem.classlist.replace("bg-green-500", "bg-gray-500");
    });

    elem.addEventListener("change", () => {
        if (elem.checked) {
            // Radio button is checked
            console.log("Radio button is checked");
        } else {
            // Radio button is not checked
            console.log("Radio button is not checked");
        }
    });
});

labels.forEach((label) => {
        label.addEventListener("blur", () => {
                if (label.id === "email-input") {
                        validate(label, /^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$/);
                } else {
                        validate(label, /^[a-zA-Z\s]+$/);
                }
        });
});

let validate = (label, pattern) => {
    if (!pattern.test(label.value)) {
        valid = false;
        label.classList.add("border-red-500");
    } else {
        valid = true;
        label.classList.remove("border-red-500");
    }
};

function handleSubmitBtn(){
    if (!valid) {
        console.log("Form submitted");
        
    } else {
        form.submit();
        console.error("ERROR SUBMiTTED");
    }
}