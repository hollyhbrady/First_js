// var sports = ['football', 'tennis', 'rugby'];

// var numberOfElements = sports.length;
// // console.log('number of elements:', numberOfElements);

// var firstSport = sports[0];
// // console.log('first sport:', firstSport)

// var secondSport = sports[1];
// // console.log('second sport:', secondSport)

// sports.push('curling');
// sports.push('snooker');
// sports.push('darts');

// // var removedSport = sports.pop();

// // console.log('removed sport:', removedSport);

// sports.unshift('basketball');
// var removedFirstSport = sports.shift();
// // console.log('removed sport:', removedFirstSport);

// var removedSport = sports.splice(3, 1)
// // console.log('removed sport:', removedSport)

// // console.log('sports:', sports);

// //  for (var currentSport of sports) {
// //      var upperCasedSport = currentSport.toUpperCase();
// //      console.log(upperCasedSport);
// //  };

// for (var i = 0; i < sports.length; i++) {
//     var currentSport = sports[i];
//     var upperCasedSport = currentSport.toUpperCase();
//     console.log(upperCasedSport);
// };

var movie = {
    title:'It\'s a Wonderful Life', 
    year: 1946,
    language: 'Spanish'
};

var title = movie.title;
// console.log('title:', title)

movie.cast = ['James Stewart', 'Donna Reed'];
movie.language = 'English';
movie['language'] = 'French';
movie['subtitle-language'] = 'German';

var propertyToAccess = 'subtitle-language';
movie[propertyToAccess] = 'German';
// console.log('subtitle language:', movie[propertyToAccess]);
// console.log('subtitle language:', movie.propertyToAccess); // This one won't work here

delete movie.year;

movie.ratings = {
    critic: 94,
    audience: 95
}

var audienceRating = movie.ratings.audience;
// console.log('audience rating:', audienceRating)

for (var key in movie) {
    var value = movie[key];
    console.log(`The ${ key} is ${value}`);
}

var keys = Object.keys(movie);
console.log('keys:', keys)

console.log('movie:', movie)