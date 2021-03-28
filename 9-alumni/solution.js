const alumni1 = {
  name: "Lucas",
  surname: "Podolski",
  age: 40,
  previousExperience: ["Football Player", "Actor"],
  education: "Abitur",
  isLearningJavaScript: false,
};

const alumni2 = {
  name: "Pedro",
  surname: "Rodriguez",
  age: 30,
  previousExperience: [],
  education: "MsC. Chemistry",
  isLearningJavaScript: true,
};

const alumni3 = {
  name: "Maria",
  surname: "Remers",
  age: 29,
  previousExperience: ["Construction Engineer", "Barkeeper"],
  education: "Abitur",
  isLearningJavaScript: true,
};

displayAlumni(alumni1);
displayAlumni(alumni2);
displayAlumni(alumni3);

function displayAlumni(alumni) {
  console.log(`Name: ${alumni.name}`);
  console.log(`Surname: ${alumni.surname}`);
  console.log(`Age: ${alumni.age}`);

  console.log(`Previous Experience: ${alumni.previousExperience}`);
  console.log(`Education: ${alumni.education}`);
  if (alumni.isLearningJavaScript) {
    console.log(`isLearningJavaScript: yes`);
  } else {
    console.log(`isLearningJavaScript: no`);
  }
}
