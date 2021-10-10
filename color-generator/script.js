
// Set background color
const setColor = () => {
    // Generate random color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // Set background color and display hexcode
    document.body.style.backgroundColor = '#' + randomColor;
    document.getElementById('color').innerHTML = '#' + randomColor;
}

// Copy hexcode
const copyCode = () => {
    const text = document.getElementById('color').innerHTML;
    // Don't copy if color is not generated
    if (text === '#hexcode') {
        alert('Please generate a color first!')
    } else {
        navigator.clipboard.writeText(text);
        alert('Hexcode is copied to clipboard!')
        console.log(text)
    }
}