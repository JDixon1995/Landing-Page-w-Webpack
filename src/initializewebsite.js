export function initializeWebsite() {
    function makeButtons() {

        const button1 = document.createElement('button');
        button1.innerText = 'Home';
        const button2 = document.createElement('button');
        button2.innerText = 'Menu';
        const button3 = document.createElement('button');
        button3.innerText = 'About';

        const pageContent = document.getElementById('content');
        pageContent.appendChild(button1);
        pageContent.appendChild(button2);
        pageContent.appendChild(button3);
    }

    makeButtons();
}