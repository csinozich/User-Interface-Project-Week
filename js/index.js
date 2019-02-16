// JS goes here

class TabLink {

  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tab-content[data-tab='${this.data}']`);
    this.tabContent = new TabContent(this.itemElement);
    this.element.addEventListener('click', this.select.bind(this));
  }

  select() {
    const links = document.querySelectorAll('.tab-link');
    links.forEach(link => {
      link.classList.remove('tab-link-selected');
    });

    this.element.classList.add('tab-link-selected');
    this.tabContent.select();
    console.log('string1')
  }
}

class TabContent {
  constructor(element) {
    this.element = element;
  }

  select() {
    const content = document.querySelectorAll('.tab-content');
    content.forEach(item => {
      item.classList.remove('tab-content-selected');
    });
    this.element.classList.add('tab-content-selected');
    console.log('string2')
  }
}

const links = document.querySelectorAll('.tab-link')
                      .forEach(link => new TabLink(link));
