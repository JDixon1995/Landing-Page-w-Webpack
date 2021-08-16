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

    function makeMainDiv() {
        const mainDiv = document.createElement('div');
        mainDiv.id = 'mainDiv';

        const resName = document.createElement('h1');
        resName.innerText = 'Our Restaurant';

        const pageContent = document.getElementById('content');
        pageContent.appendChild(mainDiv);
        pageContent.appendChild(resName);
    }

    function blurbForMainDiv() {
        const blurb = document.createElement('p');
        blurb.innerText = 'Thank you for your interest in Our Restaurant.'

        const pageContent = document.getElementById('content');
        pageContent.appendChild(blurb);
    }

    makeButtons();
    makeMainDiv();
    blurbForMainDiv();
}