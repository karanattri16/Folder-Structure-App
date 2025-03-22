// const artists = [
//   { id: 1, name: "The Beatles", country: "UK", genre: "Rock", albumReleased: "Abbey Road" },
//   { id: 2, name: "Michael Jackson", country: "USA", genre: "Pop", albumReleased: "Thriller" },
//   { id: 3, name: "Eminem", country: "USA", genre: "Hip-Hop", albumReleased: "The Marshall Mathers LP" },
//   { id: 4, name: "Miles Davis", country: "USA", genre: "Jazz", albumReleased: "Kind of Blue" },
//   { id: 5, name: "Ludwig van Beethoven", country: "Germany", genre: "Classical", albumReleased: "Symphony No. 9" },
//   { id: 6, name: "Daft Punk", country: "France", genre: "Electronic", albumReleased: "Random Access Memories" },
//   { id: 7, name: "Bob Marley", country: "Jamaica", genre: "Reggae", albumReleased: "Legend" },
//   { id: 8, name: "B.B. King", country: "USA", genre: "Blues", albumReleased: "Live at the Regal" },
//   { id: 9, name: "Johnny Cash", country: "USA", genre: "Country", albumReleased: "At Folsom Prison" },
//   { id: 10, name: "Metallica", country: "USA", genre: "Metal", albumReleased: "Master of Puppets" },
//   { id: 11, name: "Queen", country: "UK", genre: "Rock", albumReleased: "A Night at the Opera" },
//   { id: 12, name: "Elvis Presley", country: "USA", genre: "Rock & Roll", albumReleased: "Elvis Presley" },
//   { id: 13, name: "Beyoncé", country: "USA", genre: "R&B", albumReleased: "Lemonade" },
//   { id: 14, name: "Drake", country: "Canada", genre: "Hip-Hop", albumReleased: "Scorpion" },
//   { id: 15, name: "Kanye West", country: "USA", genre: "Hip-Hop", albumReleased: "My Beautiful Dark Twisted Fantasy" },
//   { id: 16, name: "Coldplay", country: "UK", genre: "Alternative", albumReleased: "A Rush of Blood to the Head" },
//   { id: 17, name: "Adele", country: "UK", genre: "Pop", albumReleased: "21" },
//   { id: 18, name: "Taylor Swift", country: "USA", genre: "Pop", albumReleased: "1989" },
//   { id: 19, name: "Frank Sinatra", country: "USA", genre: "Jazz", albumReleased: "In the Wee Small Hours" },
//   { id: 20, name: "The Rolling Stones", country: "UK", genre: "Rock", albumReleased: "Sticky Fingers" },
//   { id: 21, name: "Nirvana", country: "USA", genre: "Grunge", albumReleased: "Nevermind" },
//   { id: 22, name: "U2", country: "Ireland", genre: "Rock", albumReleased: "The Joshua Tree" },
//   { id: 23, name: "Led Zeppelin", country: "UK", genre: "Rock", albumReleased: "Led Zeppelin IV" },
//   { id: 24, name: "Pink Floyd", country: "UK", genre: "Progressive Rock", albumReleased: "The Dark Side of the Moon" },
//   { id: 25, name: "Justin Bieber", country: "Canada", genre: "Pop", albumReleased: "Purpose" },
//   { id: 26, name: "Bruno Mars", country: "USA", genre: "Pop", albumReleased: "24K Magic" },
//   { id: 27, name: "The Weeknd", country: "Canada", genre: "R&B", albumReleased: "After Hours" },
//   { id: 28, name: "Rihanna", country: "Barbados", genre: "Pop", albumReleased: "ANTI" },
//   { id: 29, name: "Ed Sheeran", country: "UK", genre: "Pop", albumReleased: "÷ (Divide)" },
//   { id: 30, name: "Post Malone", country: "USA", genre: "Hip-Hop", albumReleased: "Hollywood’s Bleeding" },
//   { id: 31, name: "The Doors", country: "USA", genre: "Rock", albumReleased: "The Doors" },
//   { id: 32, name: "David Bowie", country: "UK", genre: "Rock", albumReleased: "The Rise and Fall of Ziggy Stardust" },
//   { id: 33, name: "The Clash", country: "UK", genre: "Punk", albumReleased: "London Calling" },
//   { id: 34, name: "Green Day", country: "USA", genre: "Punk Rock", albumReleased: "American Idiot" },
//   { id: 35, name: "The Police", country: "UK", genre: "Rock", albumReleased: "Synchronicity" },
//   { id: 36, name: "Foo Fighters", country: "USA", genre: "Rock", albumReleased: "The Colour and the Shape" },
//   { id: 37, name: "Red Hot Chili Peppers", country: "USA", genre: "Funk Rock", albumReleased: "Californication" },
//   { id: 38, name: "Imagine Dragons", country: "USA", genre: "Alternative", albumReleased: "Night Visions" },
//   { id: 39, name: "OneRepublic", country: "USA", genre: "Pop Rock", albumReleased: "Dreaming Out Loud" },
//   { id: 40, name: "Linkin Park", country: "USA", genre: "Nu Metal", albumReleased: "Hybrid Theory" },
//   { id: 41, name: "Pearl Jam", country: "USA", genre: "Grunge", albumReleased: "Ten" },
//   { id: 42, name: "The Chainsmokers", country: "USA", genre: "EDM", albumReleased: "Memories...Do Not Open" },
//   { id: 43, name: "Calvin Harris", country: "UK", genre: "EDM", albumReleased: "Funk Wav Bounces Vol. 1" },
//   { id: 44, name: "Zedd", country: "Germany", genre: "EDM", albumReleased: "True Colors" },
//   { id: 45, name: "Kygo", country: "Norway", genre: "Tropical House", albumReleased: "Cloud Nine" },
//   { id: 46, name: "Avicii", country: "Sweden", genre: "EDM", albumReleased: "True" },
//   { id: 47, name: "Marshmello", country: "USA", genre: "EDM", albumReleased: "Joytime" },
//   { id: 48, name: "Skrillex", country: "USA", genre: "Dubstep", albumReleased: "Recess" },
//   { id: 49, name: "Tiesto", country: "Netherlands", genre: "Trance", albumReleased: "Just Be" },
//   { id: 50, name: "Deadmau5", country: "Canada", genre: "House", albumReleased: "Random Album Title" }
//   // Add 50 more if you need a full 100
// ];


const genresList = ["Pop", "Rock", "Hip-Hop", "Jazz", "R&B", "K-Pop", "Classical", "Country"];
const countries = ["USA", "UK", "Canada", "France", "India", "Germany", "Australia", "South Korea"];

const artists = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Artist ${i + 1}`,
  country: countries[i % countries.length],
  genre: genresList[i % genresList.length],
  album_released: `Album ${i + 1}`,
  image: `https://i.pravatar.cc/200?img=${i}`
}));



const genres = [
  {genre:'All', id:0},
  { genre: "Rock", id: 1 },
  { genre: "Pop", id: 2 },
  { genre: "Hip-Hop", id: 3 },
  { genre: "Jazz", id: 4 },
  { genre: "Classical", id: 5 },
  { genre: "Electronic", id: 6 },
  { genre: "Reggae", id: 7 },
  { genre: "Blues", id: 8 },
  { genre: "Country", id: 9 },
  { genre: "Metal", id: 10 }
];


export function getArtist() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(artists), 2000);
  });
}

export function getMenuLabels() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(genres), 2000);
  });
}


export const node = [
  {
    "name": "k1",
    "id": "sd1310a250t4w1j702mf",
    "type": "folder",
    "children": [
      {
        "name": "k1.txt",
        "id": "w8rmj46q7k4e9bh3avzy",
        "type": "file"
      },
      {
        "name": "k2.txt",
        "id": "q57e9wae2nniy6umx7lt",
        "type": "file"
      },
      {
        "name": "k3",
        "id": "wb9hpqx8zc04aloyn573",
        "type": "folder",
        "children": [
          {
            "name": "k3.txt",
            "id": "1hvryaq4id8dhya6a17w",
            "type": "file"
          },
          {
            "name": "games",
            "id": "3a52pwegf0rpipu8fyxe",
            "type": "folder",
            "children": [
              {
                "name": "Sports",
                "id": "gla8exckqurr3802lnba",
                "type": "folder",
                "children": [
                  {
                    "name": "Fifa23",
                    "id": "b0frmn8j3nkvf9t4pmjs",
                    "type": "file"
                  }
                ],
                "isOpen": false
              },
              {
                "name": "adv",
                "id": "q3mc80uvyqn70nuajue3",
                "type": "folder",
                "children": [
                  {
                    "name": "soiderman",
                    "id": "iwj70p7hm9boznagqjzo",
                    "type": "file"
                  }
                ],
                "isOpen": true
              }
            ],
            "isOpen": true
          }
        ],
        "isOpen": true
      }
    ],
    "isOpen": true
  }  
]
