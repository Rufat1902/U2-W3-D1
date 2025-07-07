class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} is older than ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} is younger than ${otherUser.firstName}`;
    } else {
      return `${this.firstName} and ${otherUser.firstName} are of the same age`;
    }
  }
}

const user1 = new User("Clara", "Alba", 25, "Roma");
const user2 = new User("Mary", "Kelly", 30, "Liverpool");

console.log(user1.compareAge(user2));
console.log(user2.compareAge(user1));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const pets = [];

const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");

petForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  pets.push(newPet);

  const li = document.createElement("li");
  li.textContent = `${newPet.petName} (${newPet.species}, ${newPet.breed}) - Owner: ${newPet.ownerName}`;
  petList.appendChild(li);

  petForm.reset();

  pets.forEach((pet) => {
    if (pet !== newPet && pet.hasSameOwner(newPet)) {
      console.log(`${newPet.petName} and ${pet.petName} have the same owner.`);
    }
  });
});
