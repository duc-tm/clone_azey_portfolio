const textTyping = document.querySelector('.text-typing');
const textTypingContent = ['Developer.', 'Designer.'];

let currentTextTypingIndex = 0;
let currentTextTyping = textTypingContent[currentTextTypingIndex];
let loopCount = 0;
let currentAction = '+';
let driftPoint = textTypingContent[0].length - 1;
let interval;

const handleTextTyping = () => {
  const innerText = textTyping.innerText;

  if (currentAction === '+') {
    textTyping.innerText = innerText + currentTextTyping[loopCount];

    if (loopCount === currentTextTyping.length - 1) {
      clearInterval(interval);

      currentAction = '-';
      interval = setInterval(handleTextTyping, 75);
    }
    else {
      loopCount++;
    }
  }
  else {
    textTyping.innerText = innerText.slice(0, -1);

    if (loopCount === 0) {
      clearInterval(interval);

      currentAction = '+';
      interval = setInterval(handleTextTyping, 175);
      currentTextTypingIndex++;

      if (currentTextTypingIndex > textTypingContent.length - 1) {
        currentTextTypingIndex = 0;
      }
      currentTextTyping = textTypingContent[currentTextTypingIndex];
    }
    else {
      loopCount--;
    }
  }
}

interval = setInterval(handleTextTyping, 175);