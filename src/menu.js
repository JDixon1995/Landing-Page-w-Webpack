function writeMenuData() {
    contentDiv = document.getElementById('content');

    const menuItem1 = document.createElement('h3');
    menuItem1.innerText = 'Steak and Fries';
    const menuItem1Blurb = document.createElement('article');
    menuItem1Blurb.innerText = 'This classic entree is served' + 
    ' with a side of fries, and the main course weighs in at 16oz.';
    menuItem1.appendChild(menuItem1Blurb);

    const menuItem2 = document.createElement('h3');
    menuItem2.innerText = 'Caesar Salad';
    const menuItem2Blurb = document.createElement('article');
    menuItem2Blurb.innerText = 'Served with your choice of 1000 Island,' +
    ' Ranch, or Honey Mustard dressing, this one for your health-conscious friends.';
    menuItem2.appendChild(menuItem2Blurb);

    const menuItem3 = document.createElement('h3');
    menuItem3.innerText = 'Italian Pasta';
    const menuItem3Blurb = document.createElement('article');
    menuItem3Blurb.innerText = 'Craving Marinara? Our Pasta entree comes' +
    ' with double.';
    menuItem3.appendChild(menuItem3Blurb);

    const menuItem4 = document.createElement('h3');
    menuItem4.innerText = 'American Cheeseburger';
    const menuItem4Blurb = document.createElement('article');
    menuItem4Blurb.innerText = 'An American classic, served in 1/4lb, or'
    + ' 1/2lb patties.';
    menuItem4.appendChild(menuItem4Blurb);

    contentDiv.appendChild(menuItem1);
    contentDiv.appendChild(menuItem2);
    contentDiv.appendChild(menuItem3);
    contentDiv.appendChild(menuItem4);
}

module.exports = { writeMenuData };