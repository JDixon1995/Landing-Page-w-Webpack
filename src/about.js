
    function clearContentDiv() {
        contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';
    }

    function writeAboutInfo() {
        contentDiv = document.getElementById('content');

        homeInfo = document.createElement('div');
        homeBlurb = document.createElement('article');
        homeBlurb.innerText = 'Are you looking for the perfect venue '+
        ' for your next date, meeting, or social get-together? Look no ' +
        'further, as you have found the perfect destination.';
        resName = document.createElement('h1');
        resName.innerText = 'Our Restaurant';
        resAddress = document.createElement('h3');
        resAddress.innerText = 'Our Address : 333 West Street';
        resContact = document.createElement('h3');
        resContact.innerText = 'For Reservations call : 555-555-5555';

        homeInfo.appendChild(resName);
        homeInfo.appendChild(homeBlurb);
        homeInfo.appendChild(resAddress);
        homeInfo.appendChild(resContact);
        contentDiv.appendChild(homeInfo);

    }
module.exports = { clearContentDiv, writeAboutInfo };