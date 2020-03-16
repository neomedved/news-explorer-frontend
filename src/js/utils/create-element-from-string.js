export default function createElementFromString(str) {
  const element = document.createElement('div');
  element.insertAdjacentHTML('afterbegin', str.trim());
  return element.firstChild;
}
