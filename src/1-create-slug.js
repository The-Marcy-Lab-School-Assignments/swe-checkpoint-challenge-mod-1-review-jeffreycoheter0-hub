// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  const bannedChar = /[#?!]/g;
  const lowercase = title.toLowerCase();
  const space = ' ';

  if (title.match(bannedChar)) {
    return null;
  }
  return lowercase.replaceAll(space, '-');
};

console.log(createSlug('Epic Game'));
console.log(createSlug('Epic Game!'));

module.exports = {
  createSlug,
};
