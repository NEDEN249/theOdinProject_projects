const ceaserCipher = (str) => {
    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, shift);

    function shift(letter){
        const ascii = letter.charCodeAt();
        return String.fromCharCode(((ascii - 65 + 13) % 26) + 65);
    }
}

module.exports = ceaserCipher;