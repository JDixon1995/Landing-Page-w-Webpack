export function initializeWebsite() {
    function makeButtons() {

        const btnDiv = document.createElement('div');
        btnDiv.id = 'btnDiv';
        const button1 = document.createElement('button');
        button1.innerText = 'Home';
        const button2 = document.createElement('button');
        button2.innerText = 'Menu';
        const button3 = document.createElement('button');
        button3.innerText = 'About';

        btnDiv.appendChild(button1);
        btnDiv.appendChild(button2);
        btnDiv.appendChild(button3);

        const pageContent = document.getElementById('content');
        pageContent.appendChild(btnDiv);
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