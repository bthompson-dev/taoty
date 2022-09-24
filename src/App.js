import './App.css';

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thompson Album of the Year</title>
        <link rel="stylesheet" href="css/test.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <div class="container">
          <div class="header">
            <h1>TAOTY</h1>
          </div>

          <div class="sidebar">
            <form class="sidebar__form">
              <label for="year">Year</label> <br></br>
              <select name="year" id="year" class="sidebar__form--select">
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

          <div class="results">
            <h2 class="results__title">Albums of 2021</h2>

            <div class="results__grid">
              <div class="results__album">
                <div class="results__album--primary-container">
                  <div class="results__album--img-container">
                    <img
                      class="results__album--img"
                      src="./img/arlo_parks.jpg"
                      alt="Arlo Parks"
                      onclick="select(event)"
                    />
                  </div>

                  <div class="results__album--text">
                    <p class="title">Collapsed in Sunbeams</p>
                    <p class="artist">Arlo Parks</p>
                  </div>
                </div>

                <div class="results__album--extra-info">
                  <span class="info--close" onclick="deselect(event)">
                    &times;
                  </span>
                  <table>
                    <tr>
                      <td>Genre:</td>
                      <td>Bedroom Pop / Neo-Soul</td>
                    </tr>
                    <tr>
                      <td>Nationality:</td>
                      <td>UK</td>
                    </tr>
                    <tr>
                      <td>Description:</td>
                    </tr>
                  </table>

                  <p class="description">
                    Arlo Parks has had quite a start to her music career. Just
                    21 years old, from Hammersmith, London, she has achieved
                    commercial and critical success with her debut album
                    Collapsed in Sunbeams, winning the Mercury Prize and now
                    securing a nomination for the prestigious Thompson award.
                    With gentle, laid-back pop melodies, soulful vocals and
                    jazzy rhythms, this is an album that soothes the listener,
                    even while it addresses darker themes of depression,
                    prejudice, anxiety and trauma. Parks’ lyrics are intimate
                    and conversational, painting complex emotional scenes with
                    delicately chosen words that still sound as though they're
                    directed to a close friend. Collapsed in Sunbeams opens the
                    curtains and lets the light in, offering empathy and support
                    for those who may be struggling.
                  </p>
                </div>
              </div>

              <div class="results__album">
                <div class="results__album--primary-container">
                  <div class="results__album--img-container">
                    <img
                      class="results__album--img"
                      src="./img/black_country.jpg"
                      alt="Black Country, New Road"
                      onclick="select(event)"
                    />
                  </div>

                  <div class="results__album--text">
                    <p class="title">For the First Time</p>
                    <p class="artist">Black Country, New Road</p>
                  </div>
                </div>

                <div class="results__album--extra-info">
                  <span class="info--close" onclick="deselect(event)">
                    &times;
                  </span>
                  <table>
                    <tr>
                      <td>Genre:</td>
                      <td>Post-rock / Experimental Rock</td>
                    </tr>
                    <tr>
                      <td>Nationality:</td>
                      <td>UK</td>
                    </tr>
                    <tr>
                      <td>Description:</td>
                    </tr>
                  </table>

                  <p class="description">
                    For the First Time is the debut album of Black Country, New
                    Road – a seven-piece band who are part of a new wave of
                    fearlessly experimental groups from South London. Combining
                    the sounds of post-punk, art rock, free jazz and Jewish
                    Klezmer music, they build atmospheric, carnivalesque
                    soundscapes that grow to glorious cacophony. Above it all,
                    frontman Isaac Wood’s sardonic, snarling vocals move from
                    manic arrogance to wounded introspection, pulling together
                    strange narratives that match the bristling tension of the
                    music.
                  </p>
                </div>
              </div>

              <div class="results__album">
                <div class="results__album--primary-container">
                  <div class="results__album--img-container">
                    <img
                      class="results__album--img"
                      src="./img/floating_points.jpg"
                      alt="Floating Points, Pharoah Sanders & The London Symphony Orchestra"
                      onclick="select(event)"
                    />
                  </div>

                  <div class="results__album--text">
                    <p class="title">Promises</p>
                    <p class="artist">
                      Floating Points, Pharoah Sanders & The London Symphony
                      Orchestra
                    </p>
                  </div>
                </div>

                <div class="results__album--extra-info">
                  <span class="info--close" onclick="deselect(event)">
                    &times;
                  </span>
                  <table>
                    <tr>
                      <td>Genre:</td>
                      <td>Post-minimalism / Third Stream</td>
                    </tr>
                    <tr>
                      <td>Nationality:</td>
                      <td>UK / USA</td>
                    </tr>
                    <tr>
                      <td>Description:</td>
                    </tr>
                  </table>

                  <p class="description">
                    Promises is a collaboration between Sam Shepherd (aka
                    Floating Points), a Manchester-based electronic musician,
                    and Pharoah Sanders, the legendary American free jazz
                    saxophonist who is now over 80 years old. Built around a
                    simple, looping 7-note motif that persists through the nine
                    movements of the piece, the music seems to breathe and
                    evolve, erupting into orchestral surges only to soften and
                    retreat into hushed electronic tones and textures. Sanders’
                    saxophone is fluid, powerful and graceful, feeling its way
                    through the ambient universe around him. A subtle,
                    transcendent exploration of sound.
                  </p>
                </div>
              </div>

              <div class="results__album">
                <div class="results__album--primary-container">
                  <div class="results__album--img-container">
                    <img
                      class="results__album--img"
                      src="./img/japanese_breakfast.jpg"
                      alt="Japanese Breakfast"
                      onclick="select(event)"
                    />
                  </div>

                  <div class="results__album--text">
                    <p class="title">Jubilee</p>
                    <p class="artist">Japanese Breakfast</p>
                  </div>
                </div>

                <div class="results__album--extra-info">
                  <span class="info--close" onclick="deselect(event)">
                    &times;
                  </span>
                  <table>
                    <tr>
                      <td>Genre:</td>
                      <td>Indie Pop / Chamber Pop</td>
                    </tr>
                    <tr>
                      <td>Nationality:</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>Description:</td>
                    </tr>
                  </table>

                  <p class="description">
                    Jubilee is the third album by Japanese Breakfast, a band led
                    by Korean-American musician, author and director Michelle
                    Zauner. After two albums and a best-selling memoir focused
                    on her grief after her mother’s death, she wanted to write
                    about joy. The result is a new-found exuberance, her dreamy
                    pop sounds expanded with eclectic arrangements of horns,
                    strings and synthesizers. However, the catchy, blissful
                    instrumentation is not always matched by the lyrics, which
                    delve into darker, more sophisticated metaphors and
                    emotions.
                  </p>
                </div>
              </div>

              <div class="results__album">
                <div class="results__album--primary-container">
                  <div class="results__album--img-container">
                    <img
                      class="results__album--img"
                      src="./img/little_simz.jpg"
                      alt="Little Simz"
                      onclick="select(event)"
                    />
                  </div>

                  <div class="results__album--text">
                    <p class="title">Sometimes I Might Be Introvert</p>
                    <p class="artist">Little Simz</p>
                  </div>
                </div>

                <div class="results__album--extra-info">
                  <span class="info--close" onclick="deselect(event)">
                    &times;
                  </span>
                  <table>
                    <tr>
                      <td>Genre:</td>
                      <td>Conscious Hip Hop</td>
                    </tr>
                    <tr>
                      <td>Nationality:</td>
                      <td>UK</td>
                    </tr>
                    <tr>
                      <td>Description:</td>
                    </tr>
                  </table>

                  <p class="description">
                    Fresh from making history as the first black woman to
                    headline three super-spreader nights at Brixton Academy,
                    it’s Little Simz, with her 4th studio album, Sometimes I
                    Might Be Introvert. A cinematically crafted narrative of
                    growth and self-definition, it marks a triumphant evolution.
                    She’s built out her sound, incorporating an eclectic mix of
                    R&B, soul, Afrobeat and grime, topped with huge orchestral
                    flourishes, a gospel choir, and even a narrator (voiced by
                    The Crown’s Emma Corrin). Over the course of the album, she
                    explores the contradiction between seeking the validation of
                    commercial success while remaining a private person who
                    struggles inwardly with self-doubt. An introvert with one of
                    the most self-affirming, colourful and ambitious albums of
                    the year.
                  </p>
                </div>
              </div>

              <div class="results__album">
                <div class="results__album--primary-container">
                  <div class="results__album--img-container">
                    <img
                      class="results__album--img"
                      src="./img/turnstile.jpg"
                      alt="Turnstile"
                      onclick="select(event)"
                    />
                  </div>

                  <div class="results__album--text">
                    <p class="title">Glow On</p>
                    <p class="artist">Turnstile</p>
                  </div>
                </div>

                <div class="results__album--extra-info">
                  <span class="info--close" onclick="deselect(event)">
                    &times;
                  </span>
                  <table>
                    <tr>
                      <td>Genre:</td>
                      <td>Post-Hardcore / Alternative Rock</td>
                    </tr>
                    <tr>
                      <td>Nationality:</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>Description:</td>
                    </tr>
                  </table>

                  <p class="description">
                    Turnstile, a band from Baltimore, Maryland, take the
                    aggressive, thrashing sounds of hardcore punk and blend them
                    with a dreamy mix of genres. With Glow On, their third
                    studio album, they seem to have perfected the formula,
                    preserving the passionate, head-banging energy of punk while
                    expanding into indie, pop, psychedelia and R&B. The short,
                    punchy tracks offer killer guitar riffs, anthemic choruses
                    and non-stop entertainment.
                  </p>
                </div>
              </div>

              <div class="results__album">
                <div class="results__album--primary-container">
                  <div class="results__album--img-container">
                    <img
                      class="results__album--img"
                      src="./img/tyler.jpg"
                      alt="Tyler, the Creator"
                      onclick="select(event)"
                    />
                  </div>

                  <div class="results__album--text">
                    <p class="title">Call Me If You Get Lost</p>
                    <p class="artist">Tyler, the Creator</p>
                  </div>
                </div>

                <div class="results__album--extra-info">
                  <span class="info--close" onclick="deselect(event)">
                    &times;
                  </span>
                  <table>
                    <tr>
                      <td>Genre:</td>
                      <td>West Coast Hip Hop</td>
                    </tr>
                    <tr>
                      <td>Nationality:</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>Description:</td>
                    </tr>
                  </table>

                  <p class="description">
                    On Call Me If You Get Lost, his 3rd consecutive nomination
                    for the TAOTYs, Tyler, the Creator takes on a new persona –
                    that of Tyler Baudelaire, a lavish spender touring the world
                    in private jets, boats and Rolls-Royces. The decadence of
                    this character sets the tone for the album, which sprawls
                    luxuriously, pushing at the boundaries of his music. Rich,
                    sun-soaked production, built on samples of synthpop, soul,
                    reggae and jazz, is juxtaposed with a return to the heavier,
                    harsher rap of his early material. This variety gives him
                    the freedom to interrogate the messy extremes of his
                    experience, from wild excesses to raw, tender feeling.
                    Tyler’s talent for reinvention makes this a record worth
                    losing yourself in.  
                  </p>
                </div>
              </div>

              <div class="results__album">
                <div class="results__album--primary-container">
                  <div class="results__album--img-container">
                    <img
                      class="results__album--img"
                      src="./img/weather_station.jpg"
                      alt="The Weather Station"
                      onclick="select(event)"
                    />
                  </div>

                  <div class="results__album--text">
                    <p class="title">Ignorance</p>
                    <p class="artist">The Weather Station</p>
                  </div>
                </div>

                <div class="results__album--extra-info">
                  <span class="info--close" onclick="deselect(event)">
                    &times;
                  </span>
                  <table>
                    <tr>
                      <td>Genre:</td>
                      <td>Art Pop</td>
                    </tr>
                    <tr>
                      <td>Nationality:</td>
                      <td>Canada</td>
                    </tr>
                    <tr>
                      <td>Description:</td>
                    </tr>
                  </table>

                  <p class="description">
                    Canadian artist Tamara Lindeman has been making music with
                    her band The Weather Station since 2006. While she grew up
                    with a love of nature, it was only in recent years that the
                    ever-worsening headlines and reports on the climate crisis
                    prompted her to confront the reality of what is happening
                    around us. Her resultant fear and sorrow is poured into the
                    album Ignorance, which finds a way to process her feelings
                    of helplessness as a kind of grief or heartbreak. Backed by
                    lush, delicate folk-pop arrangements, she sings of small
                    moments of epiphany and realisation, acknowledging the
                    emotional weight of humanity’s ongoing breakup with nature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
