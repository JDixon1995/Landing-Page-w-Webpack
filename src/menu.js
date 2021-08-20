function writeMenuData() {
    contentDiv = document.getElementById('content');

    const menuItem1 = document.createElement('h3');
    menuItem1.innerText = 'Steak and Fries';
    const menuItem1Pic = document.createElement('img');
    menuItem1Pic.setAttribute('src', '../src/steak.jpg');
    const menuItem1Blurb = document.createElement('article');
    menuItem1Blurb.innerText = 'This classic entree is served' + 
    ' with a side of fries, and the main course weighs in at 16oz.';
    menuItem1.appendChild(menuItem1Blurb);
    menuItem1.appendChild(menuItem1Pic);

    const menuItem2 = document.createElement('h3');
    menuItem2.innerText = 'American Cheeseburger';
    const menuItem2Pic = document.createElement('img');
    menuItem2Pic.setAttribute('src', '../src/burger.jpg');
    const menuItem2Blurb = document.createElement('article');
    menuItem2Blurb.innerText = 'An American classic, served in 1/4lb, or'
    + ' 1/2lb patties.';
    menuItem2.appendChild(menuItem2Blurb);
    menuItem2.appendChild(menuItem2Pic);

    const menuItem3 = document.createElement('h3');
    menuItem3.innerText = 'Italian Pasta';
    const menuItem3Pic = document.createElement('img');
    menuItem3Pic.setAttribute('src', '../src/pasta.jpg');
    const menuItem3Blurb = document.createElement('article');
    menuItem3Blurb.innerText = 'Craving Marinara? Our Pasta entree comes' +
    ' with double.';
    menuItem3.appendChild(menuItem3Blurb);
    menuItem3.appendChild(menuItem3Pic);

    contentDiv.appendChild(menuItem1);
    contentDiv.appendChild(menuItem2);
    contentDiv.appendChild(menuItem3);
}

module.exports = { writeMenuData };