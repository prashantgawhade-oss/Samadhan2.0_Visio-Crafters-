//This is for finding highest marks from an array(loop)
let Marks=[54,60,79,38,60]
let highest= Marks[0];
for(let i=1;i<Marks.length;i++){
  if(Marks[i]>highest){
    highest=Marks[i];
  }
}
console.log("HighestMarks",highest);
