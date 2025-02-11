const games = [
  { title: "Tekken 8", developer: "Bandai Namco", releaseYear: 2024, genre: "Fighting" },
  { title: "God of War: Ragnarok", developer: "Santa Monica Studio", releaseYear: 2022, genre: "Action-Adventure" },
  { title: "Spider-Man 2", developer: "Insomniac Games", releaseYear: 2023, genre: "Action" },
  { title: "Elden Ring", developer: "FromSoftware", releaseYear: 2022, genre: "RPG" },
  { title: "Final Fantasy XVI", developer: "Square Enix", releaseYear: 2023, genre: "RPG" }
];

export function getAll() {
  return games;
}

export function getItem(title) {
  return games.find(game => game.title === title);
}