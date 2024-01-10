export default function configurableMessage(message, background) {
    const headerMessage = document.createElement('h3');
    headerMessage.style.background = background;
    document.getElementById('messageContainer').appendChild(headerMessage);
    setTimeout(() => {
        headerMessage.innerHTML = message;
    }, 50);
}
