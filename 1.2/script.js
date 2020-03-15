const click = document.querySelector('#click');
const d = document.querySelector('#D');
const dChild = document.querySelector('#D > div');
const e = document.querySelector('#E');
const f = document.querySelector('#F');
history.scrollRestoration = "manual";

click.addEventListener('click', (event) => {
  f.style.width = '100%';
  setTimeout(() => {
    e.style.display = 'none';
    setTimeout(() => {
      f.style.position = 'relative';
      e.style.position = 'fixed';
      e.style.width = '1px';
      e.style.right = '0px';
    }, 100)
  }, 400)
})