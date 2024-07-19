document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encryptText(inputText);
    document.getElementById('outputText').value = encryptedText;
    showOutputText();
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decryptText(inputText);
    document.getElementById('outputText').value = decryptedText;
    showOutputText();
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
    document.getElementById('outputText').style.display = 'none';
    document.getElementById('detetiveImage').style.display = 'block';
    hideOutputButtons();
    hideAlertBox();
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});

document.getElementById('inputText').addEventListener('input', function() {
    this.value = this.value.replace(/[^a-z\s]/g, '');
    if (this.value.match(/[^a-z\s]/g)) {
        showAlertBox();
    } else {
        hideAlertBox();
    }
});

document.getElementById('closeAlertBox').addEventListener('click', function() {
    hideAlertBox();
});

function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function showOutputText() {
    document.getElementById('outputText').style.display = 'block';
    document.getElementById('detetiveImage').style.display = 'none';
    showOutputButtons();
}

function showOutputButtons() {
    document.querySelector('.output-buttons').style.display = 'flex';
}

function hideOutputButtons() {
    document.querySelector('.output-buttons').style.display = 'none';
}

function showAlertBox() {
    document.getElementById('alertBox').style.display = 'flex';
}

function hideAlertBox() {
    document.getElementById('alertBox').style.display = 'none';
}

document.getElementById('outputText').style.display = 'none';
hideOutputButtons();
hideAlertBox();
