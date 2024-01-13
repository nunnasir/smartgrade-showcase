export function getStudents() {
  return [
    { id: 1, class: 3, name: "Jessie Dibbert-Feil", marks: 43 },
    { id: 2, class: 1, name: "Casey Donnelly", marks: 48 },
    { id: 3, class: 1, name: "Willis Krajcik", marks: 62 },
    { id: 7, class: 2, name: "Clint Reichert", marks: 74 },
    { id: 9, class: 3, name: "Clinton MacGyver", marks: 94 },
    { id: 10, class: 3, name: "Claude Wilderman", marks: 78 },
    { id: 11, class: 4, name: "Opal Bernier", marks: 90 },
    { id: 12, class: 1, name: "Mr. Jerome Hauck", marks: 92 },
    { id: 13, class: 2, name: "Miss Maryann Padberg", marks: 59 },
    { id: 17, class: 3, name: "Lois Metz", marks: 71 },
    { id: 18, class: 3, name: "Dr. Ron Bosco Sr.", marks: 64 },
    { id: 19, class: 3, name: "Gilbert Grady", marks: 76 },
    { id: 21, class: 1, name: "Lori Graham", marks: 38 },
    { id: 23, class: 3, name: "Larry Toy", marks: 66 },
    { id: 24, class: 1, name: "Dr. Thomas Leffler Jr.", marks: 88 },
    { id: 27, class: 1, name: "Jeffery Boyer", marks: 65 },
    { id: 28, class: 2, name: "Kim Bergnaum", marks: 50 },
    { id: 31, class: 1, name: "Faith Leffler", marks: 68 },
    { id: 36, class: 3, name: "Marian Stark", marks: 54 },
    { id: 37, class: 3, name: "Marian Sipes", marks: 88 },
    { id: 38, class: 3, name: "Shari Nicolas", marks: 36 },
    { id: 39, class: 3, name: "Jimmie Witting", marks: 97 },
    { id: 40, class: 2, name: "Toni Hegmann IV", marks: 97 },
    { id: 42, class: 3, name: "Gladys Ruecker Jr.", marks: 69 },
    { id: 47, class: 2, name: "Bruce Hackett", marks: 40 },
    { id: 49, class: 3, name: "June Sawayn", marks: 31 },
    { id: 50, class: 1, name: "Dr. Rolando Runolfsson", marks: 69 },
    { id: 53, class: 3, name: "Lynn Goyette", marks: 93 },
    { id: 54, class: 2, name: "Alexandra Koepp", marks: 64 },
    { id: 57, class: 3, name: "Jimmie Kassulke PhD", marks: 64 },
    { id: 58, class: 2, name: "Luz Stoltenberg", marks: 100 },
    { id: 59, class: 2, name: "Lynda Romaguera", marks: 37 },
    { id: 60, class: 2, name: "Dr. Tyler Gulgowski", marks: 89 },
    { id: 62, class: 1, name: "Louise Lindgren", marks: 70 },
    { id: 63, class: 1, name: "Derek Lind", marks: 81 },
    { id: 64, class: 3, name: "Helen McGlynn", marks: 59 },
    { id: 65, class: 3, name: "Herbert Carroll", marks: 58 },
    { id: 66, class: 1, name: "Alfredo Stanton", marks: 72 },
    { id: 69, class: 1, name: "Dr. Dwayne Connelly-Russel", marks: 66 },
    { id: 70, class: 1, name: "Fannie Zboncak", marks: 60 },
    { id: 71, class: 2, name: "Vicki Parisian", marks: 53 },
    { id: 74, class: 2, name: "Orlando Bashirian", marks: 99 },
    { id: 76, class: 1, name: "Edith Wilkinson", marks: 65 },
    { id: 77, class: 3, name: "Mr. Richard Greenholt", marks: 94 },
    { id: 78, class: 2, name: "Wilfred Watsica", marks: 82 },
    { id: 79, class: 3, name: "Archie Hamill", marks: 48 },
    { id: 80, class: 1, name: "Justin Bergnaum", marks: 80 },
    { id: 81, class: 2, name: "Beatrice Lemke MD", marks: 90 },
    { id: 83, class: 2, name: "Stacy Sporer", marks: 60 },
    { id: 84, class: 3, name: "Verna Schowalter", marks: 69 },
    { id: 85, class: 2, name: "Delia Little", marks: 93 },
    { id: 86, class: 2, name: "Tim Kuhic", marks: 70 },
    { id: 87, class: 1, name: "Tabitha Roob", marks: 35 },
    { id: 92, class: 3, name: "Rosemarie O'Hara-Kassulke", marks: 71 },
    { id: 93, class: 1, name: "Adam Reichel", marks: 90 },
    { id: 94, class: 2, name: "Charlene Lebsack", marks: 95 },
    { id: 95, class: 3, name: "Shannon Dooley", marks: 96 },
    { id: 97, class: 1, name: "Sheldon Schroeder", marks: 68 },
    { id: 98, class: 1, name: "Kayla Rosenbaum", marks: 73 },
    { id: 100, class: 2, name: "Mr. Laurence Okuneva", marks: 65 },
  ];
}

export function getImageUrl(studentId) {
  return (
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/" +
    studentId +
    ".jpg"
  );
}

export function getScores(marks) {
  if (marks >= 90) {
    return "A+";
  } else if (marks >= 85) {
    return "A";
  } else if (marks >= 80) {
    return "A-";
  } else if (marks >= 75) {
    return "B+";
  } else if (marks >= 70) {
    return "B";
  } else if (marks >= 65) {
    return "B-";
  } else if (marks >= 60) {
    return "C+";
  } else if (marks >= 55) {
    return "C";
  } else if (marks >= 50) {
    return "C-";
  } else if (marks >= 45) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "F";
  }
}
