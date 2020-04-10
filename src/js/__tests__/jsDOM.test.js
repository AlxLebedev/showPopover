import Popovers from '../Popover';

test('should render self', () => {
  document.body.innerHTML = '<div class="button" id="button">Click to toggle popover</div>';
  const button = document.getElementById('button');
  const popover = new Popovers(button);
  popover.bindToDOM();
  const container = document.querySelector('#popover');

  expect(container.innerHTML).toEqual(popover.markup);
});

test('should show popover - remove hidden', () => {
  document.body.innerHTML = '<div class="button" id="button">Click to toggle popover</div>';
  const button = document.getElementById('button');
  const popover = new Popovers(button);
  popover.bindToDOM();
  const container = document.querySelector('#popover');

  button.addEventListener('click', () => {
    popover.show(button);
  });
  button.click();

  expect(container.classList.contains('hidden')).toBeFalsy();
});
