let student = {
  name: "Gulzar",
  marks: {
    math: 75,
    science: 92,
    english: 80,
    computer: 89
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
