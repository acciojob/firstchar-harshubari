function firstChar(text) {
  // your code here
	const trimmedText = text.trim();
  
  // Check if the trimmed text is empty
  if (trimmedText === '') {
    return '';
  }
  
  // Return the first character
  return trimmedText[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
