// Define generatePassword function
function generatePassword() {
  // Define the options that the users might need (data)
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const uppercaseLetters = lowercaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/' 
  // Create dummy data to test our function (test)
  const options = {
    length: '10',
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    excludeCharacters: 'abcdABCD0123'
  }
  // Create a collection that contains the actual need from the users
  let collection = []
  // 'abcde' => [a, b, c, d,...]
  if (options.lowercase === 'on') {
    collection = collection.concat(lowercaseLetters.split(''))
  }
  if (options.uppercase === 'on') {
    collection = collection.concat(uppercaseLetters.split(''))
  }
  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }
  // Remove the characters the users want to exclude 
  if (options.excludeCharacters) {
    collection = collection.filter(character => !options.excludeCharacters.includes(character))
    // console.log(collection)
  }
  // Generate password  collection [a,b,c,A,B,C,1,2,3] => a1Abb...

  // Return password we generated. 
  console.log('This is a password we generated!')
}

generatePassword()