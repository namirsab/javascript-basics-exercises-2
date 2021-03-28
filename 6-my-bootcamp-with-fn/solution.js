function logClass(classArray) {
  for (let i = 0; i < classArray.length; i++) {
    const index = i + 1;
    const name = classArray[i];
    console.log(`#${index}. ${name}`);
  }
}

logClass(["Marwin", "Martin", "Namir"]);
logClass([]);
logClass(["Tom", "Lucas", "Simon", "Natalie", "Sonia"]);
logClass(["Dalia", "Jerry"]);
