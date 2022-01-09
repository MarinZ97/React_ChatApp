export const randomName = () => {

    const names = ["John", "Lorinda", "Blair", "Katheryne", "Adrianna", "Gretchen", "Pamela", "Clyde", "Devin", "Jayme", "Karl", "Magnolia", "Katy", "Hester", "Lorne", "Jessie",
     "Tyrell", "Brock", "Raynard", "Phillis", "Robina", "Darius", "Kane", "Nolan", "Bart", "Juliane", "Odetta", "Valerie", "Lindsay", "Roseann"];

    const surnames = ["Wilbur", "Courtenay", "Silver", "Barnet", "Sudworth", "Harman", "Gully", "Speight", "Underwood", "Armistead", "Laney", "Randell", "Foster", "Marshall",
     "Jefferson", "Brandon", "Wynne", "Hollands", "Woodham", "Hobbes", "Hodges", "Jones", "Samuels,", "Wallace", "Walmsley", "Hume", "Robinson", "Harrison", "Michaels"];

    const name = names[Math.floor(Math.random() * names.length)];
    const surname = surnames[Math.floor(Math.random() * surnames.length)];
    return name + " " + surname;
  };
  
  export const randomColor = () => {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  };