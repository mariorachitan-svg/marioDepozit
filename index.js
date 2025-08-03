const form = document.getElementById('form');

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const input = document.getElementById('input');
    const email = input.value;
    alert(email + ' a fost abonat')
    input.value = '';
})