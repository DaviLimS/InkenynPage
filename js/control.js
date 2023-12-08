function token(limit) {
  let token = "";
  let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let index = 0; index < limit; index++) {
    token += char.charAt(Math.floor(Math.random() * char.length));
  }
}
token(20);

const s = "Oi, Tudo bem?";
const words = s.substring(s.indexOf(" ") + 1, s.length);

console.log(`String: ${s} \n\nSubstring: ${words}`);
