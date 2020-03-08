export default function createElementFromString(str) {
  const element = document.createElement('div');
  element.innerHTML = str.trim();
  return element.firstChild;
}
