//ESERCIZIO 1

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
}

const compareAge = function (userX, UserY) {
    if (userX.age > UserY.age) {
        return `${userX.firstName} è più vecchio di ${userY.firstName}`;
    } else if (userX.age < UserY.age) {
        return `${userY.firstName} è più vecchio di ${userX.firstName}`;
    } else {
        return `${userX.firstName} ha la stessa età di ${userY.firstName}`;
    }
}
const userX = new User('Mario', 'Rossi', 40, 'Roma');
const userY = new User('Aldo', 'Verdi', 30, 'Milano');

const result = compareAge(userX, userY)
console.log(result)

//ESERCIZIO 2
class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    sameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

function createPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);
    addPet(newPet);
    document.getElementById('petForm').reset();
}

function addPet(pet) {
    const petList = document.getElementById('petList');
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    petList.appendChild(listItem);
}

const petForm = document.getElementById('petForm');
petForm.addEventListener('submit', function (event) {
    event.preventDefault();
    createPet();
});





