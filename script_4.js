const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


console.log("---> Nés dans les années 70 :");
entrepreneurs.forEach((born) => {
    if (born.year >= 1970 && born.year <= 1979){
      console.log(born.first + " " + born.last);
    }
});

console.log("---> Noms et prénoms :");
let name = []
entrepreneurs.forEach((pseudo) => {
  let firstAndLast = (pseudo.first + " " + pseudo.last);
  name.push(firstAndLast);
});
console.log(name);

console.log("---> Leurs age ?");
entrepreneurs.forEach((name) => {
  let ageToday = 2020 - name.year;
  console.log(`${name.first + " " + name.last} aurait ${ageToday} ans !`);
});

console.log("---> Entrepreneurs triés :");
console.log(entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)));
