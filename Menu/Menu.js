/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-button');

function newMenu (menuItems){
  const menu = document.createElement('div');
  const menuList = document.createElement('ul');
  menu.appendChild(menuList);

  menuItems.forEach(items => {
    const menuListItems = document.createElement('li');
    menuListItems.textContent = items;
    menuList.appendChild(menuListItems);
  });

  menu.classList.add('menu');

  menuButton.addEventListener('click', e => {
    menu.classList.toggle('menu--open');
    console.log('I am a button');
  });

  return menu;
};

header.appendChild(newMenu(menuItems));

