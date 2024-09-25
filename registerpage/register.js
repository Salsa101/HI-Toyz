const form = document.getElementById('#');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput =
        document.getElementById('name');
    const emailInput =
        document.getElementById('email');
    const ageInput =
        document.getElementById('age');
    const dateInput =
        document.getElementById('birth-date');
    const passwordInput =
        document.getElementById('password');
    const confirmInput =
        document.getElementById('confim-password');
    const agreeInput =
        document.getElementById('agree-term');
    const selectedGenderInput =
        document.querySelector("input[name='gender-detail']:checked");
    
    if(nameInput.value == ""){
        document.getElementById('error').innerHTML += "<p>Name must be filled</p>";
    }
    
    if(nameInput.value.length < 5){
        document.getElementById('error').innerHTML += "<p>Name must be min.5</p>";
    }

    console.log('Name: ' + nameInput.value);
    console.log('Email: ' + emailInput.value);
    console.log('Age: ' + ageInput.value);
    console.log('Birth: ' + dateInput.value);
    console.log('Password: ' + passwordInput.value);
    console.log('Confirm: ' + confirmInput.value);
    console.log('Gender: ' + selectedGenderInput.value);
    console.log('Agreed: ' + agreeInput.checked);
    
});