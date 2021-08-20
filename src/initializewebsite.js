import { clearContentDiv, writeAboutInfo } from "./about";
import { writeMenuData } from "./menu";

export function initializeWebsite() {
    function makeButtons() {

        const btnDiv = document.createElement('div');
        btnDiv.id = 'btnDiv';

        const button1 = document.createElement('button');
        button1.innerText = 'Home';
        button1.id = 'homeBtn';
        button1.addEventListener('click', function() {
            clearContentDiv();
            makeButtons();
            makeMainDiv();
            blurbForMainDiv();
        });

        const button2 = document.createElement('button');
        button2.innerText = 'Menu';
        button2.id = 'menuBtn';
        button2.addEventListener('click', function() {
            clearContentDiv();
            makeButtons();
            writeMenuData();
        });
        
        const button3 = document.createElement('button');
        button3.innerText = 'About';
        button3.id = 'aboutBtn';
        button3.addEventListener('click', function() {
            clearContentDiv();
            makeButtons();
            writeAboutInfo();
        });

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