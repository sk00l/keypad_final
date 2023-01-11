const keypad = document.querySelector('.keypad');
const backspace = document.querySelector('.icon');
const display = document.querySelector('.display');

keypad.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('key') && display.value.length < 10) {
    display.value += target.textContent;
  }else if (target.classList.contains('key') && display.value.length >= 10) {
    alert("Maximum 10 digits allowed");
  }
});


backspace.addEventListener('click', () => {
    if (display.value.length > 0) {
      const text = display.value;
      display.value = text.substring(0, text.length - 1);
    } else {
      alert("No digits left");
    }
  });




