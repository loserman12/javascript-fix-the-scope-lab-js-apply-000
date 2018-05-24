var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  
  var animal = "cat"
  return animal
}

function add2(n) {
<<<<<<< HEAD
   const two = 2
=======
  const two = 2
>>>>>>> d3c486ea298b1cb29954f5912c91a2f53eacf72b
  return (n + two)

  // Feel free to move things around!
}
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
