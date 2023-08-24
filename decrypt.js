const CryptoJS = require("crypto-js");

const encryptedMessage = "mxvw zdqwhg wr vd| l oryh |rx";
const shift = 3; 

const decryptedMessage = encryptedMessage
  .split("")
  .map((char) => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      const shiftedCode = code - shift;
      return String.fromCharCode(shiftedCode);
    }
    return char;
  })
  .join("");

console.log("Decrypted Message:", decryptedMessage);
