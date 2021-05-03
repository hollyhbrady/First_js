// Lexical Scope - available anywhere after it has been defined

// var name = 'Jill';
// var secretsFunction = function () {
//     var pinCode = [0, 0, 0, 0];
//     console.log('name inside secretsFunction', name);
// }

// secretsFunction();

// // console.log('pinCode outside secretsFunction', pinCode)
// // can't call pinCode outside of the function because thats where it is defined and lives

// console.log('name outside secretsFunction:', name);


// Block scoped - only scoped within the block it is defined (see let)

var filterNamesByFirstLetter = function (names, letter) {
    var filteredNames = [];
    for (let name of names) {
      if (name[0] === letter) {
        filteredNames.push(name);
      }
    }
    // console.log('name after loop:', name);
    return filteredNames;
  }
  var students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs'];
  var filteredStudents = filterNamesByFirstLetter(students, 'A');
//   console.log('filteredStudents:', filteredStudents);

let isItFive = function (number) {
    let result;
    if (number === 5) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

// console.log(isItFive(5));


// let temperature = 30;
// if (temperature > 15) {
//   let jacket = false;
//   var happy = true;
// } else {
//   let jacket = true;
//   var happy = false;
// }
// // console.log('jacket after if-else blocks:', jacket);
// console.log('happy after if-else blocks:', happy);

// let calculateEnergy = function (mass) {
//     const speedOfLight = 299792458;
//     return mass * speedOfLight ** 2;
// }

// let energyOfMe = calculateEnergy(75);
// console.log('energyOfMe (if I had a mass of 75kg)', energyOfMe);
// -> energyOfMe (if I had a mass of 75kg) 6740663840526132000

// const song = {
//     title: 'Raspberry Beret',
//     artist: 'Prince'
//   };
//   console.log('song before mutation', song);
//   song.title = 'When Doves Cry';
//   console.log('song after mutation', song);
//   const songs = [
//     song,
//     'Happy Birthday',
//     'Hey Jude'
//   ];
//   console.log('songs array before mutation', songs);
//   songs[1] = 'Call Me Maybe';
//   songs.pop();
//   console.log('songs array after mutation', songs);

