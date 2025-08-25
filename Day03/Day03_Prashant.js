let student = {
  name: "Martin",
  marks: {
    math: 92,
    science: 88,
    english: 81,
    computer: 97
  }
};

// Convert marks object into an array
let marksArray = Object.values(student.marks);

// Calculate total
let total = marksArray.reduce((sum, mark) => sum + mark, 0);

// Calculate average
let average = total / marksArray.length;

console.log("Student:", student.name);
console.log("Total Marks:", total);
console.log("Average Marks:", average);
