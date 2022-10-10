const userInput = document.getElementById("userInput");
const send = document.getElementById("send");
const content = document.getElementById("content");

send.onclick = () => {
    const userValue = userInput.value;
    content.innerHTML += `<p>${userValue}</p>`;
}           