import Popover from './Popover';

const button = document.querySelector('#button');
const popover = new Popover(button, 'Popover title', 'some description of this popover');
popover.bindToDOM();

button.addEventListener('click', () => {
  if (document.querySelector('.popover').classList.contains('hidden')) {
    popover.show(button);
  } else {
    popover.hide(button);
  }
});
