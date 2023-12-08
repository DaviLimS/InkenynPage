function token(limit) {
  let token = "";
  let char =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let index = 0; index < limit; index++) {
    token += char.charAt(Math.floor(Math.random() * char.length));
    console.log(token);
  }
}
token(20);