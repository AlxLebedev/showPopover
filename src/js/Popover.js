export default class Popover {
  constructor(button, title = 'title', description = 'description') {
    this.button = button;
    this.title = title;
    this.description = description;
    this.popover = document.createElement('div');
  }

  get markup() {
    return `
    <p class="popover-title">${this.title}</p>
    <p class="popover-description">${this.description}</p>
    `;
  }

  bindToDOM() {
    this.popover.id = 'popover';
    this.popover.className = 'popover hidden';
    this.popover.innerHTML = this.markup;
    this.button.insertAdjacentElement('afterend', this.popover);
  }

  /* eslint-disable class-methods-use-this */
  show(button) {
    const selectedPopover = button.nextElementSibling;
    selectedPopover.classList.remove('hidden');
    selectedPopover.style.bottom = `${button.offsetTop - 50}px`;
    selectedPopover.style.left = `${button.offsetLeft - ((selectedPopover.offsetWidth - button.offsetWidth) / 2)}px`;
  }

  /* eslint-disable class-methods-use-this */
  hide(button) {
    const selectedPopover = button.nextElementSibling;
    selectedPopover.classList.add('hidden');
  }
}
