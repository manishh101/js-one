const name = 'manish'
const repoCount = 10

//console.log(name+ repoCount +'value');

console.log(`hello my name is ${name.repeat(3)} and my repo count is ${repoCount}`);

const gameName =  new String('manish')

/*console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));*/

const newString =gameName.substring(0,3);
console.log(newString);

const anotherString = gameName.slice(-4,-2);
console.log(anotherString);

const newStringOne = '  manish  '
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https:/manish.com/manishraj%10rajbanshi'
console.log(url.replace('%10','-'));

console.log(url.includes('manish'));

const name_string ="manishhh";
console.log(name_string.replaceAll('h','r'));