function reverseString(str) {
    // Base condition
    if (str === "") {
        return "";
    }

    // Recursive step
    return reverseString(str.substring(1)) + str[0];
}

console.log(reverseString("Automation"));