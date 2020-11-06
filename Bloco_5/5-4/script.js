function backgroundColor(color) {
  return (document.querySelector(
    '.content-article'
  ).style.backgroundColor = color);
}
function fontColor(color) {
  return (document.querySelector('.content-article').style.color = color);
}
function fontSize(size) {
  return (document.querySelector(
    '.content-article'
  ).style.fontSize = `${size}px`);
}
function lineHeight(size) {
  return (document.querySelector(
    '.content-article'
  ).style.lineHeight = `${size}px`);
}
function fontFamily(font) {
  return (document.querySelector('.content-article').style.fontFamily = font);
}

/* Retorna o evento  do elemento */
function eventElementHTML(target, events, name, callback) {
  const buttons = document.querySelectorAll(target);
  buttons.forEach((element) => {
    element.addEventListener(events, (CurrentEvent) => {
      const localStorageSave = CurrentEvent.path[0].id;
      localStorage.setItem(name, localStorageSave);
      callback(localStorageSave);
    });
  });
}

eventElementHTML(
  '#background-color > button',
  'click',
  'backgroundColor',
  backgroundColor
);
eventElementHTML('#font-color > button', 'click', 'fontColor', fontColor);
eventElementHTML('#font-family > button', 'click', 'fontFamily', fontFamily);
eventElementHTML('#font-size > button', 'click', 'fontSize', fontSize);
eventElementHTML('#line-height > button', 'click', 'lineHeight', lineHeight);

// retorna style css do localstorage
function loadCSS() {
  const getBackgroundColor = localStorage.getItem('backgroundColor');
  const getFontColor = localStorage.getItem('fontColor');
  const getFontFamily = localStorage.getItem('fontFamily');
  const getFontSize = localStorage.getItem('fontSize');
  const getLineHeight = localStorage.getItem('lineHeight');
  if (getBackgroundColor) backgroundColor(getBackgroundColor);
  if (getFontColor) fontColor(getFontColor);
  if (getFontFamily) fontFamily(getFontFamily);
  if (getFontSize) fontSize(getFontSize);
  if (getLineHeight) lineHeight(getLineHeight);
}

loadCSS();
