export function addBorder(picture: string[]): string[] {
  let borderLentgh = picture.length + 3;
  let border = "";

  for (let i = 0; i < borderLentgh; i++) {
    border += "*";
}
for (let i = 0; i < picture.length; i++) {
  picture[i] = "*" + picture[i] + "*";
}

  picture.unshift(border);
  picture.push(border);
  return picture
}

console.log(addBorder(["abc", "ded"]));
