document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('inputBox');
    const changeColorButton = document.getElementById('getStarted');
    const message = document.getElementById('submission');

    changeColorButton.addEventListener('click', function() {
        if (inputBox.value.trim() !== '') {
            inputBox.classList.add('red-border');
            message.classList.remove('hidden');
        } else {
            inputBox.classList.remove('red-border');
            message.classList.add('hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('inputBoxx');
    const changeColorButton = document.getElementById('getStartedd');
    const message = document.getElementById('submissionn');

    changeColorButton.addEventListener('click', function() {
        if (inputBox.value.trim() !== '') {
            inputBox.classList.add('red-border');
            message.classList.remove('hiddenn');
        } else {
            inputBox.classList.remove('red-border');
            message.classList.add('hiddenn');
        }
    });
});