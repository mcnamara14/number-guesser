// An input field for guessing the number
// A button for submitting a guess
// A button for clearing the input field
// A button that resets the game

// Display the user’s most recent guess
// Display results and feedback:
// If their guess is too high, it should display: “That is too high”
// If their guess is too low, it should display: “That is too low”
// If the guess is correct, it should display: “BOOM!”

var $guessedNum  = $('#guessed-number');
var $displayGuessedNum = $('#display-number');
var $submitBtn = $('#submit-button');
var $hiLow = $('#display-hi-low');
var $resetBtn = $('#reset-button');
var $clearBtn = $('#clear-button');
var $randonNum = Math.floor(Math.random() * 100) + 1;

$submitBtn.on('click', validateGuess);
$guessedNum.on('input', toggleClear);
$clearBtn.on('click', clearField);

console.log($randonNum);

function validateGuess(e) {
  e.preventDefault();
  var $guessedNumValue = parseInt($guessedNum.val()); 
  if (isNaN($guessedNumValue) || $guessedNumValue > 100 || $guessedNumValue < 0) {
    alert('Enter a number within the range');
    } else {
    displayGuess($guessedNumValue);
  }
}

function displayGuess(number) {
  $displayGuessedNum.text(number);
  displayHiLow(number);
  toggleResetBtn();
}

function displayHiLow(number) {
  console.log('Working?')
  if (number > $randonNum) {
    $hiLow.text('Your number is too high');
  } else if (number < $randonNum) {
    $hiLow.text('Your number is too low');
  } else {
    $hiLow.text('You guessed right!');
  }
}

function toggleClear() {
  if ($guessedNum.val()) {
    $clearBtn.attr('disabled', false);
  } else {
    $clearBtn.attr('disabled', true);
  }
}

function clearField() {
  $guessedNum.val('');
  $clearBtn.attr('disabled', true);
}

function toggleResetBtn() {
  $resetBtn.attr('disabled', false);
}



