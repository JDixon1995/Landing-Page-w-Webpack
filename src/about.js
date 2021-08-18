
    function clearContentDiv() {
        contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';
    }

    function writeAboutInfo() {
        contentDiv = document.getElementById('content');

        homeInfo = document.createElement('div');

        resName = document.createElement('h1');
        resName.innerText = 'Our Restaurant';
        resAddress = document.createElement('h3');
        resAddress.innerText = 'We can be located at : 333 West Street';
        resContact = document.createElement('h3');
        resContact.innerText = 'We can be reached by calling : 555-555-5555';

        homeInfo.appendChild(resName);
        homeInfo.appendChild(resAddress);
        homeInfo.appendChild(resContact);
        contentDiv.appendChild(homeInfo);

    }
module.exports = { clearContentDiv, writeAboutInfo };