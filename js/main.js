


document.querySelector("#x").addEventListener('click', () => {
    document.querySelector("#down").style.display = "none"
})


document.querySelector("#adult").addEventListener('click', () => {
    document.querySelector("#down").style.display = "flex"
})



let adult = 1;

const increase = () => {
    adult++;
    if (adult >= 9) {
        alert("Please contact us on carloscu93@gmail.com if there are more members than 9")
        adult = 9;
    }
    document.querySelector("#adultCount").innerHTML = adult;
    document.querySelector("#adult").innerHTML = adult + " Adult";

}

const decrease = () => {
    adult--;
    if (adult <= 1) {
        adult = 1;
    }
    document.querySelector("#adultCount").innerHTML = adult;
    document.querySelector("#adult").innerHTML = adult + " Adult";

}


const from = document.getElementById("from");
const to = document.getElementById("to");
const getQuote = document.getElementById("getQuote");
console.log(adult)
getQuote.addEventListener("click", () => {
    const data = {
        from: from.value,
        to: to.value,
        adult: adult
    };
    localStorage.setItem("quoteData", JSON.stringify(data));

    // // Redirect to x.html
    // window.location.href = "booking.html";
    const selectElements = document.querySelectorAll('select');
    let isValid = true;

    selectElements.forEach(function (selectElement) {
        if (selectElement.selectedIndex === 0) {
            isValid = false;
            selectElement.classList.add('is-invalid');
        } else {
            selectElement.classList.remove('is-invalid');
        }
    });


    if (isValid) {
        window.location.href = 'booking.html';
    } else {
        event.preventDefault();
        alert('Please fill in all fields');
    }


});

const buttonElement = document.querySelector('#getQuote');

