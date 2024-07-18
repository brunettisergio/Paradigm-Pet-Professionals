const nameWidget = document.querySelector("#name"),
    phoneNumberWidget = document.querySelector("#phoneNumber"),
    emailWidget = document.querySelector("#email"),
    petNameWidget = document.querySelector("#petName"),
    petAgeWidget = document.querySelector("#petAge");

nameWidget.addEventListener("focusout", event => {
    let input = nameWidget.value.trim();
    console.log("Name:", input);
    if (!(input.length > 0 && input.length < 16) || /\d/.test(input)) {
        nameWidget.style.border = "1px solid";
        nameWidget.style.borderColor = "red";
        nameWidget.style.borderRadius = "2px";
    } else {
        nameWidget.style.border = "";
        nameWidget.style.borderColor = "";
    }
});

phoneNumberWidget.addEventListener("focusout", event => {
    let input = phoneNumberWidget.value.trim();
    const phoneNumberRegExp = new RegExp(
        "^(\\+\\d{1,2}\\s?)?(\\(\\d{3}\\))?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$"
    );

    if (!phoneNumberRegExp.test(input)) {
        phoneNumberWidget.style.border = "1px solid";
        phoneNumberWidget.style.borderColor = "red";
        phoneNumberWidget.style.borderRadius = "2px";
    } else {
        phoneNumberWidget.style.border = "";
        phoneNumberWidget.style.borderColor = "";
    }
});

emailWidget.addEventListener("focusout", event => {
    let input = emailWidget.value.trim();
    const emailRegExp = new RegExp("^[^@]+@[^@]+\\.[^@]+$");
    if (!emailRegExp.test(input)) {
        emailWidget.style.border = "1px solid";
        emailWidget.style.borderColor = "red";
        emailWidget.style.borderRadius = "2px";
    } else {
        emailWidget.style.border = "";
        emailWidget.style.borderColor = "";
    }
});

petNameWidget.addEventListener("focusout", event => {
    let input = petNameWidget.value.trim();

    if (!(input.length > 0 && input.length < 16 && isNaN(input))) {
        petNameWidget.style.border = "1px solid";
        petNameWidget.style.borderColor = "red";
        petNameWidget.style.borderRadius = "2px";
    } else {
        petNameWidget.style.border = "";
        petNameWidget.style.borderColor = "";
    }
});

petAgeWidget.addEventListener("focusout", event => {
    let input = petAgeWidget.value.trim();

    if (!(input.length > 0 && input.length < 16) || /\d/.test(input)) {
        petAgeWidget.style.border = "1px solid";
        petAgeWidget.style.borderColor = "red";
        petAgeWidget.style.borderRadius = "2px";
    } else {
        petAgeWidget.style.border = "";
        petAgeWidget.style.borderColor = "";
    }
});
