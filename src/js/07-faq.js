import accordion from 'accordion-js'

const myAc = new accordion('.faq-accordion', {
  duration: 1000,
  showMultiple: false,
  elementClass: 'faq-ac-item',
  triggerClass: 'faq-ac-trigger',
  panelClass: 'faq-ac-item-text',
  activeClass: 'is-open',
  openOnInit: [0],
});
