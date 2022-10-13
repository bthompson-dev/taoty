import "./App.css";
import AlbumList from "./AlbumList";

const albums = [
  {
    id: 1,
    title: "Collapsed in Sunbeams",
    artist: "Arlo Parks",
    genre: "Bedroom Pop / Neo-Soul",
    nationality: "UK",
    description:
      "Arlo Parks has had quite a start to her music career. Just 21 years old, from Hammersmith, London, she has achieved commercial and critical success with her debut album Collapsed in Sunbeams, winning the Mercury Prize and now securing a nomination for the prestigious Thompson award. With gentle, laid-back pop melodies, soulful vocals and jazzy rhythms, this is an album that soothes the listener, even while it addresses darker themes of depression, prejudice, anxiety and trauma. Parks’ lyrics are intimate and conversational, painting complex emotional scenes with delicately chosen words that still sound as though they're directed to a close friend. Collapsed in Sunbeams opens the curtains and lets the light in, offering empathy and support for those who may be struggling.",
    image: "./img/arlo_parks.jpg",
    year: 2021,
    winner: false,
  },
  {
    id: 2,
    title: "For the First Time",
    artist: "Black Country, New Road",
    genre: "Post-rock / Experimental Rock",
    nationality: "UK",
    description:
      "For the First Time is the debut album of Black Country, New Road – a seven-piece band who are part of a new wave of fearlessly experimental groups from South London. Combining the sounds of post-punk, art rock, free jazz and Jewish Klezmer music, they build atmospheric, carnivalesque soundscapes that grow to glorious cacophony. Above it all, frontman Isaac Wood’s sardonic, snarling vocals move from manic arrogance to wounded introspection, pulling together strange narratives that match the bristling tension of the music.",
    image: "./img/black_country.jpg",
    year: 2021,
    winner: false,
  },
  {
    id: 3,
    title: "Promises",
    artist: "Floating Points, Pharoah Sanders & The London Symphony Orchestra",
    genre: "Post-minimalism / Third Stream",
    nationality: "UK / USA",
    description:
      "Promises is a collaboration between Sam Shepherd (aka Floating Points), a Manchester-based electronic musician, and Pharoah Sanders, the legendary American free jazz saxophonist who is now over 80 years old. Built around a simple, looping 7-note motif that persists through the nine movements of the piece, the music seems to breathe and evolve, erupting into orchestral surges only to soften and retreat into hushed electronic tones and textures. Sanders’ saxophone is fluid, powerful and graceful, feeling its way through the ambient universe around him. A subtle, transcendent exploration of sound.",
    image: "./img/floating_points.jpg",
    year: 2021,
    winner: true,
  },
  {
    id: 4,
    title: "Jubilee",
    artist: "Japanese Breakfast",
    genre: "Indie Pop / Chamber Pop",
    nationality: "USA",
    description:
      "Jubilee is the third album by Japanese Breakfast, a band led by Korean-American musician, author and director Michelle Zauner. After two albums and a best-selling memoir focused on her grief after her mother’s death, she wanted to write about joy. The result is a new-found exuberance, her dreamy pop sounds expanded with eclectic arrangements of horns, strings and synthesizers. However, the catchy, blissful instrumentation is not always matched by the lyrics, which delve into darker, more sophisticated metaphors and emotions.",
    image: "./img/japanese_breakfast.jpg",
    year: 2021,
    winner: false,
  },
  {
    id: 5,
    title: "Sometimes I Might Be Introvert",
    artist: "Little Simz",
    genre: "Conscious Hip Hop",
    nationality: "UK",
    description:
      "Fresh from making history as the first black woman to headline three super-spreader nights at Brixton Academy, it’s Little Simz, with her 4th studio album, Sometimes I Might Be Introvert. A cinematically crafted narrative of growth and self-definition, it marks a triumphant evolution. She’s built out her sound, incorporating an eclectic mix of R&B, soul, Afrobeat and grime, topped with huge orchestral flourishes, a gospel choir, and even a narrator (voiced by The Crown’s Emma Corrin). Over the course of the album, she explores the contradiction between seeking the validation of commercial success while remaining a private person who struggles inwardly with self-doubt. An introvert with one of the most self-affirming, colourful and ambitious albums of the year.",
    image: "./img/little_simz.jpg",
    year: 2021,
    winner: false,
  },
  {
    id: 6,
    title: "Glow On",
    artist: "Turnstile",
    genre: "Post-Hardcore / Alternative Rock",
    nationality: "USA",
    description:
      "Turnstile, a band from Baltimore, Maryland, take the aggressive, thrashing sounds of hardcore punk and blend them with a dreamy mix of genres. With Glow On, their third studio album, they seem to have perfected the formula, preserving the passionate, head-banging energy of punk while expanding into indie, pop, psychedelia and R&B. The short, punchy tracks offer killer guitar riffs, anthemic choruses and non-stop entertainment.",
    image: "./img/turnstile.jpg",
    year: 2021,
    winner: false,
  },
  {
    id: 7,
    title: "Call Me If You Get Lost",
    artist: "Tyler, the Creator",
    genre: "West Coast Hip Hop",
    nationality: "USA",
    description:
      "On Call Me If You Get Lost, his 3rd consecutive nomination for the TAOTYs, Tyler, the Creator takes on a new persona – that of Tyler Baudelaire, a lavish spender touring the world in private jets, boats and Rolls-Royces. The decadence of this character sets the tone for the album, which sprawls luxuriously, pushing at the boundaries of his music. Rich, sun-soaked production, built on samples of synthpop, soul, reggae and jazz, is juxtaposed with a return to the heavier, harsher rap of his early material. This variety gives him the freedom to interrogate the messy extremes of his experience, from wild excesses to raw, tender feeling. Tyler’s talent for reinvention makes this a record worth losing yourself in.",
    image: "./img/tyler.jpg",
    year: 2021,
    winner: false,
  },
  {
    id: 8,
    title: "Ignorance",
    artist: "The Weather Station",
    genre: "Art Pop",
    nationality: "Canada",
    description:
      "Canadian artist Tamara Lindeman has been making music with her band The Weather Station since 2006. While she grew up with a love of nature, it was only in recent years that the ever-worsening headlines and reports on the climate crisis prompted her to confront the reality of what is happening around us. Her resultant fear and sorrow is poured into the album Ignorance, which finds a way to process her feelings of helplessness as a kind of grief or heartbreak. Backed by lush, delicate folk-pop arrangements, she sings of small moments of epiphany and realisation, acknowledging the emotional weight of humanity’s ongoing breakup with nature.",
    image: "./img/weather_station.jpg",
    year: 2021,
    winner: false,
  },
];

const select = event => {
  const album = event.target.parentElement.parentElement.parentElement;
  album.classList.add("selected");
};

const deselect = event => {
  const album = event.target.parentElement.parentElement;
  album.classList.remove("selected");
};

function App() {
  return (
    <>
      
        <div className="container">
          <div className="header">
            <h1>TAOTY</h1>
          </div>

          <div className="sidebar">
            <form className="sidebar__form">
              <label htmlFor="year">Year</label> <br></br>
              <select name="year" id="year" className="sidebar__form--select">
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="all"> All Years</option>
              </select>
            </form>
          </div>

          <div className="results">
            <h2 className="results__title">Albums of 2021</h2>

            <div className="results__grid">
              <AlbumList albums={albums} select={select} deselect={deselect}/>
            </div>
          </div>
        </div>
      </>
  );
}

export default App;
