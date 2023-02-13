let database = [
    {
      "title": "Collapsed in Sunbeams",
      "artist": "Arlo Parks",
      "genre": "Bedroom Pop / Neo-Soul",
      "primary_genres": ["Pop", "Soul"],
      "nationality": "UK",
      "description": "Arlo Parks has had quite a start to her music career. Just 21 years old, from Hammersmith, London, she has achieved commercial and critical success with her debut album Collapsed in Sunbeams, winning the Mercury Prize and now securing a nomination for the prestigious Thompson award. With gentle, laid-back pop melodies, soulful vocals and jazzy rhythms, this is an album that soothes the listener, even while it addresses darker themes of depression, prejudice, anxiety and trauma. Parks’ lyrics are intimate and conversational, painting complex emotional scenes with delicately chosen words that still sound as though they're directed to a close friend. Collapsed in Sunbeams opens the curtains and lets the light in, offering empathy and support for those who may be struggling.",
      "image": "./img/arlo_parks.jpg",
      "year": 2021,
      "release_date": { "$date": "2021-01-29" },
      "winner": false
    },
    {
      "title": "For the First Time",
      "artist": "Black Country, New Road",
      "genre": "Post-rock / Experimental Rock",
      "primary_genres": ["Rock"],
      "nationality": "UK",
      "description": "For the First Time is the debut album of Black Country, New Road – a seven-piece band who are part of a new wave of fearlessly experimental groups from South London. Combining the sounds of post-punk, art rock, free jazz and Jewish Klezmer music, they build atmospheric, carnivalesque soundscapes that grow to glorious cacophony. Above it all, frontman Isaac Wood’s sardonic, snarling vocals move from manic arrogance to wounded introspection, pulling together strange narratives that match the bristling tension of the music.",
      "image": "./img/black_country.jpg",
      "year": 2021,
      "release_date": { "$date": "2021-02-05" },
      "winner": false
    },
    {
      "title": "Promises",
      "artist": "Floating Points, Pharoah Sanders & The London Symphony Orchestra",
      "genre": "Post-minimalism / Third Stream",
      "primary_genres": ["Classical", "Jazz"],
      "nationality": "UK / USA",
      "description": "Promises is a collaboration between Sam Shepherd (aka Floating Points), a Manchester-based electronic musician, and Pharoah Sanders, the legendary American free jazz saxophonist who is now over 80 years old. Built around a simple, looping 7-note motif that persists through the nine movements of the piece, the music seems to breathe and evolve, erupting into orchestral surges only to soften and retreat into hushed electronic tones and textures. Sanders’ saxophone is fluid, powerful and graceful, feeling its way through the ambient universe around him. A subtle, transcendent exploration of sound.",
      "image": "./img/floating_points.jpg",
      "year": 2021,
      "release_date": { "$date": "2021-03-26" },
      "winner": true
    },
    {
      "title": "Jubilee",
      "artist": "Japanese Breakfast",
      "genre": "Indie Pop / Chamber Pop",
      "primary_genres": ["Pop"],
      "nationality": "USA",
      "description": "Jubilee is the third album by Japanese Breakfast, a band led by Korean-American musician, author and director Michelle Zauner. After two albums and a best-selling memoir focused on her grief after her mother’s death, she wanted to write about joy. The result is a new-found exuberance, her dreamy pop sounds expanded with eclectic arrangements of horns, strings and synthesizers. However, the catchy, blissful instrumentation is not always matched by the lyrics, which delve into darker, more sophisticated metaphors and emotions.",
      "image": "./img/japanese_breakfast.jpg",
      "year": 2021,
      "release_date": { "$date": "2021-06-04" },
      "winner": false
    },
    {
      "title": "Sometimes I Might Be Introvert",
      "artist": "Little Simz",
      "genre": "Conscious Hip Hop",
      "primary_genres": ["Hip Hop"],
      "nationality": "UK",
      "description": "Fresh from making history as the first black woman to headline three super-spreader nights at Brixton Academy, it’s Little Simz, with her 4th studio album, Sometimes I Might Be Introvert. A cinematically crafted narrative of growth and self-definition, it marks a triumphant evolution. She’s built out her sound, incorporating an eclectic mix of R&B, soul, Afrobeat and grime, topped with huge orchestral flourishes, a gospel choir, and even a narrator (voiced by The Crown’s Emma Corrin). Over the course of the album, she explores the contradiction between seeking the validation of commercial success while remaining a private person who struggles inwardly with self-doubt. An introvert with one of the most self-affirming, colourful and ambitious albums of the year.",
      "image": "./img/little_simz.jpg",
      "year": 2021,
      "release_date": { "$date": "2021-09-03" },
      "winner": false
    },
    {
      "title": "Glow On",
      "artist": "Turnstile",
      "genre": "Post-Hardcore / Alternative Rock",
      "primary_genres": ["Punk", "Rock"],
      "nationality": "USA",
      "description": "Turnstile, a band from Baltimore, Maryland, take the aggressive, thrashing sounds of hardcore punk and blend them with a dreamy mix of genres. With Glow On, their third studio album, they seem to have perfected the formula, preserving the passionate, head-banging energy of punk while expanding into indie, pop, psychedelia and R&B. The short, punchy tracks offer killer guitar riffs, anthemic choruses and non-stop entertainment.",
      "image": "./img/turnstile.jpg",
      "year": 2021,
      "release_date": { "$date": "2021-08-27" },
      "winner": false
    },
    {
      "title": "Call Me If You Get Lost",
      "artist": "Tyler, the Creator",
      "genre": "West Coast Hip Hop",
      "primary_genres": ["Hip Hop"],
      "nationality": "USA",
      "description": "On Call Me If You Get Lost, his 3rd consecutive nomination for the TAOTYs, Tyler, the Creator takes on a new persona – that of Tyler Baudelaire, a lavish spender touring the world in private jets, boats and Rolls-Royces. The decadence of this character sets the tone for the album, which sprawls luxuriously, pushing at the boundaries of his music. Rich, sun-soaked production, built on samples of synthpop, soul, reggae and jazz, is juxtaposed with a return to the heavier, harsher rap of his early material. This variety gives him the freedom to interrogate the messy extremes of his experience, from wild excesses to raw, tender feeling. Tyler’s talent for reinvention makes this a record worth losing yourself in.",
      "image": "./img/tyler.jpg",
      "year": 2021,
      "release_date": { "$date": "2021-06-25" },
      "winner": false
    },
    {
      "title": "Ignorance",
      "artist": "The Weather Station",
      "genre": "Art Pop",
      "primary_genres": ["Pop"],
      "nationality": "Canada",
      "description": "Canadian artist Tamara Lindeman has been making music with her band The Weather Station since 2006. While she grew up with a love of nature, it was only in recent years that the ever-worsening headlines and reports on the climate crisis prompted her to confront the reality of what is happening around us. Her resultant fear and sorrow is poured into the album Ignorance, which finds a way to process her feelings of helplessness as a kind of grief or heartbreak. Backed by lush, delicate folk-pop arrangements, she sings of small moments of epiphany and realisation, acknowledging the emotional weight of humanity’s ongoing breakup with nature.",
      "image": "./img/weather_station.jpg",
      "year": 2021,
      "release_date": { "$date": "2021-02-05" },
      "winner": false
    },
    {
      "title": "Rough and Rowdy Ways",
      "artist": "Bob Dylan",
      "genre": "Americana",
      "primary_genres": ["Rock", "Folk"],
      "nationality": "USA",
      "description": "At the age of 79, Bob Dylan is not afraid to confront his own mortality; death hovers behind most of the songs on Rough and Rowdy Ways, his 39th studio album. It’s a reflective, understated record, with sensitive blues and folk arrangements backing his expressive, growling vocals. As ever, the lyrics are fundamental to Dylan’s work. Here, they are expansive in their scope, surveying the history he has lived through and the mythology that surrounds him with a wry eloquence. The references that he weaves throughout, to music, literature, and art, strengthen his connection with the past; the music becomes an elegy for the culture Dylan has helped to shape.",
      "image": "./img/bob_dylan.jpg",
      "year": 2020,
      "release_date": { "$date": "2020-06-19" },
      "winner": false
    },
    {
      "title": "Future Nostalgia",
      "artist": "Dua Lipa",
      "genre": "Dance Pop / Nu-Disco",
      "primary_genres": ["Pop", "Dance"],
      "nationality": "UK",
      "description": "For her 2nd album, London-based singer-songwriter Dua Lipa wanted to create a “nostalgic” sound that fused the best of retro pop & disco with glossy modern-day production. The result is Future Nostalgia, a record that offers a life-giving injection of energy in a year when dancefloors have been empty and silent. It’s a commanding statement of pop dominance which has been a well-deserved commercial and critical hit.",
      "image": "./img/dua_lipa.jpg",
      "year": 2020,
      "release_date": { "$date": "2020-03-27" },
      "winner": false
    },
    {
      "title": "Fetch the Bolt Cutters",
      "artist": "Fiona Apple",
      "genre": "Art Pop / Progressive Pop",
      "primary_genres": ["Pop"],
      "nationality": "USA",
      "description": "Born in New York, Fiona Apple has been making music for over 25 years. Fetch the Bolt Cutters is her 5th album, and one which encompasses a life’s experience. Over time, her music has grown wilder, discarding conventional song structures for an uncompromising, disruptive form that is completely her own. This experimental freedom also signals her central theme: finding freedom from male oppression. Moments of shattering fury are balanced by warmth and tenderness, as the honesty, wit and compassion of Apple’s lyrics shine through. Eccentric, raw, and irrepressible, Fetch the Bolt Cutters refuses to conform or be caged.",
      "image": "./img/fiona_apple.jpg",
      "year": 2020,
      "release_date": { "$date": "2020-04-17" },
      "winner": true
    },
    {
      "title": "Shore",
      "artist": "Fleet Foxes",
      "genre": "Indie Folk / Chamber Pop",
      "primary_genres": ["Folk", "Pop"],
      "nationality": "USA",
      "description": "No need for introductions here – Fleet Foxes are veterans of the Album of the Year competition, with two previous nominations in 2008 and 2011. They’re back with Shore, their fourth album, released at the precise time and date of the autumnal equinox, underscoring the deep connection to nature in their music. It’s a warm, joyful record, a soothing escape from months of indoor confinement and social distancing, under which conditions the lyrics were composed. Shore subtly expands the band’s sound, with the trademark soaring vocal harmonies blending with samples and unusual instrumental details. In a more than usually stress-inducing year, Shore taps into the timeless beauty of nature to remind us that this too will pass.",
      "image": "./img/fleet_foxes_shore.jpg",
      "year": 2020,
      "release_date": { "$date": "2020-09-22" },
      "winner": false
    },
    {
      "title": "Set My Heart on Fire Immediately",
      "artist": "Perfume Genius",
      "genre": "Art Pop",
      "primary_genres": ["Pop"],
      "nationality": "USA",
      "description": "On his 5th record, Mike Hadreas, a.k.a. Perfume Genius, continues his interrogation of identity and physical vulnerability. Growing up in Seattle, he was bullied and physically attacked for being gay; he has also suffered from substance addiction and chronic illness. As with a number of the artists on our list, he harnesses dissonant sounds and genres to form a unique sound, shifting from shimmering pop melodies to ghostly ambient backdrops. Set My Heart on Fire Immediately embraces fragility to find a new confidence in the face of life’s uncertainty.",
      "image": "./img/perfume_genius.jpg",
      "year": 2020,
      "release_date": { "$date": "2020-05-15" },
      "winner": false
    },
    {
      "title": "Punisher",
      "artist": "Phoebe Bridgers",
      "genre": "Indie Folk",
      "primary_genres": ["Folk"],
      "nationality": "USA",
      "description": "Punisher is the second record from Californian singer-songwriter Phoebe Bridgers.  The mood of the album is accurately evoked by the artwork, depicting Bridgers (wearing a Halloween skeleton outfit) alone in a dark, desolate landscape, looking up at the stars. Darkness looms throughout the songs on Punisher, which deal with themes including depression, decaying relationships and the apocalypse. Each song conjures a unique world, with humming indie rock soundscapes and arresting, self-aware lyrics that capture fleeting moments and moods. Through its emotional candour, Punisher offers a bittersweet sense of hope against the weight of modern anxiety.",
      "image": "./img/phoebe_bridgers.jpg",
      "year": 2020,
      "release_date": { "$date": "2020-06-19" },
      "winner": false
    },
    {
      "title": "RTJ4",
      "artist": "Run the Jewels",
      "genre": "Hardcore Hip Hop / Political Hip Hop",
      "primary_genres": ["Hip Hop"],
      "nationality": "USA",
      "description": "Run the Jewels are an American hip hop supergroup duo, made up of Brooklyn-based rapper/producer El-P, and Atlanta-based rapper Killer Mike. They’ve been producing albums together since 2013, honing their distinctive brand of brash, high-octane political hip hop. Although recorded beforehand, RTJ4 was released in the direct aftermath of the Black Lives Matter protests after the killing of George Floyd. It shares the same anger towards police racism and brutality in America, but also analyses the cultural and societal forces that perpetuate it. Abrasive, funny, and anthemic, RTJ4 pulls no punches in its call for revolution.",
      "image": "./img/run_the_jewels.jpg",
      "year": 2020,
      "release_date": { "$date": "2020-06-03" },
      "winner": false
    },
    {
      "title": "Untitled (Rise)",
      "artist": "Sault",
      "genre": "Neo-Soul",
      "primary_genres": ["Soul"],
      "nationality": "UK",
      "description": "Very little is known about Sault, a UK-based collective whose members have remained anonymous since they started to release music in 2019. They do seem to have some links in the industry, however, having collaborated with the producer Inflo (who worked on Little Simz’ Grey Area), and Michael Kiwanuka. Their work is heavily focused on black issues, and they were clearly galvanised by the Black Lives Matter protests this year, releasing two albums in the space of 12 weeks. Both felt like direct responses to the global outpouring of feeling and frustration, but with markedly different approaches. While the first album was characterised by anger and sorrow, the sequel, Untitled (Rise), emphasises hope, renewal and empowerment. Blending the sounds of R&B, soul, disco and Afrobeat, Sault soundtrack the defiant call for liberation and equality from black voices around the world.",
      "image": "./img/sault.jpg",
      "year": 2020,
      "release_date": { "$date": "2020-09-18" },
      "winner": false
    },
    {
      "title": "All Mirrors",
      "artist": "Angel Olsen",
      "genre": "Art Pop / Chamber Pop",
      "primary_genres": ["Pop"],
      "nationality": "USA",
      "image": "./img/angel_olsen.jpg",
      "year": 2019,
      "release_date": { "$date": "2019-10-04" },
      "winner": false
    },
    {
      "title": "Magdalene",
      "artist": "FKA twigs",
      "genre": "Art Pop / Glitch Pop",
      "primary_genres": ["Pop", "Electronic"],
      "nationality": "UK",
      "image": "./img/fka_twigs_magdalene.jpg",
      "year": 2019,
      "release_date": { "$date": "2019-11-08" },
      "winner": true
    },
    {
      "title": "Norman Fucking Rockwell!",
      "artist": "Lana Del Rey",
      "genre": "Art Pop",
      "primary_genres": ["Pop"],
      "nationality": "USA",
      "image": "./img/lana_del_rey.jpg",
      "year": 2019,
      "release_date": { "$date": "2019-08-30" },
      "winner": false
    },
    {
      "title": "Grey Area",
      "artist": "Little Simz",
      "genre": "Conscious Hip Hop",
      "primary_genres": ["Hip Hop"],
      "nationality": "UK",
      "image": "./img/little_simz_grey_area.jpg",
      "year": 2019,
      "release_date": { "$date": "2019-03-01" },
      "winner": false
    },
    {
      "title": "Kiwanuka",
      "artist": "Michael Kiwanuka",
      "genre": "Psychedelic Soul",
      "primary_genres": ["Soul", "Psychedelia"],
      "nationality": "UK",
      "image": "./img/michael_kiwanuka.jpg",
      "year": 2019,
      "release_date": { "$date": "2019-11-01" },
      "winner": false
    },
    {
      "title": "Ghosteen",
      "artist": "Nick Cave & The Bad Seeds",
      "genre": "Ambient Pop",
      "primary_genres": ["Pop"],
      "nationality": "UK",
      "image": "./img/nick_cave_ghosteen.jpg",
      "year": 2019,
      "release_date": { "$date": "2019-10-04" },
      "winner": false
    },
    {
      "title": "Igor",
      "artist": "Tyler, the Creator",
      "genre": "Neo-Soul",
      "primary_genres": ["Soul"],
      "nationality": "USA",
      "image": "./img/tyler_igor.jpg",
      "year": 2019,
      "release_date": { "$date": "2019-05-17" },
      "winner": false
    },
    {
      "title": "Titanic Rising",
      "artist": "Weyes Blood",
      "genre": "Baroque Pop / Art Pop",
      "primary_genres": ["Pop"],
      "nationality": "USA",
      "image": "./img/weyes_blood.jpg",
      "year": 2019,
      "release_date": { "$date": "2019-04-05" },
      "winner": false
    },
    {
      "title": "Chris",
      "artist": "Christine & The Queens",
      "genre": "Synthpop",
      "primary_genres": ["Electronic", "Pop"],
      "nationality": "France",
      "image": "./img/christine_&_the_queens.jpg",
      "description": "The 2nd album from French singer-songwriter Héloïse Letissier. Originally known as Christine and the Queens, the ‘queens’ being the drag performers that made up her backing band, she has now shortened the name to the more androgynous Chris. The name-change characterises the album, suggesting her more flexible, defiant sexual identity. Chris seduces the listener with catchy, sparkling electro pop and intricate production, but beneath the surface there is also a surprising thematic depth as she interrogates gender roles and relationships.",
      "year": 2018,
      "release_date": { "$date": "2018-09-21" },
      "winner": false
    },
    {
      "title": "Joy as an Act of Resistance.",
      "artist": "Idles",
      "genre": "Post-Punk / Post-Hardcore",
      "primary_genres": ["Rock", "Punk"],
      "nationality": "UK",
      "image": "./img/idles.jpg",
      "description": "Bristol-based punk rock band IDLES return with their 2nd album Joy as an Act of Resistance. With his biting lyrics on immigration, masculinity and self-love, frontman Joe Talbot attacks the toxicity of Brexit Britain head-on. It’s a cathartic explosion of pounding, aggressive drums and guitars that uses both rage and humour to fight back against the negative forces of British politics. IDLES offer up a rallying cry for the power of emotional honesty and human comradeship. Listen loud.",
      "year": 2018,
      "release_date": { "$date": "2018-08-31" },
      "winner": false
    },
    {
      "title": "Isolation",
      "artist": "Kali Uchis",
      "genre": "Neo-Soul / Contemporary R&B",
      "primary_genres": ["Soul", "R&B"],
      "nationality": "USA",
      "image": "./img/kali_uchis.png",
      "description": "The debut album from Colombian-American singer-songwriter Kali Uchis. Having previously collaborated with a range of artists including Snoop Dogg, Gorillaz and Tyler, the Creator, Isolation sees her begin to establish her own sound which draws from contemporary pop and R&B as well as her Latin American roots.",
      "year": 2018,
      "release_date": { "$date": "2018-04-06" },
      "winner": false
    },
    {
      "title": "KIDS SEE GHOSTS",
      "artist": "Kids See Ghosts",
      "genre": "Pop Rap / Experimental Hip Hop",
      "primary_genres": ["Hip Hop"],
      "nationality": "USA",
      "image": "./img/kids_see_ghosts.jpg",
      "description": "In 2018, when Kanye West wasn’t tweeting his support for Donald Trump, or claiming that slavery was a choice, he was making music. He’s been behind a number of albums this year, but none quite as thrilling as his collaboration with Kid Cudi, on this project, ‘Kids See Ghosts’. Kid Cudi is an American rapper and producer from Ohio, who first gained major recognition in 2008 with his mixtape A Kid Named Cudi. He and Kanye have been collaborators since the start of Kid Cudi’s musical career – working on a number of Kanye’s biggest albums, including his magnum opus from 2010, My Beautiful Dark Twisted Fantasy, which you will all remember from the nominations that year! Concerns over Kanye’s political views and unstable mental health hover over all the music he has put out lately, but do not seem to have hampered his creative energy…",
      "year": 2018,
      "release_date": { "$date": "2018-06-08" },
      "winner": false
    },
    {
      "title": "Double Negative",
      "artist": "Low",
      "genre": "Ambient Pop / Glitch Pop",
      "primary_genres": ["Pop", "Electronic"],
      "nationality": "USA",
      "image": "./img/low.jpg",
      "description": "The veterans of this year’s selection, Low, from Duluth, Minnesota, have been making music together since 1993. Although never quite a household name, they rose to prominence in the 90s, known for their ‘slowcore’, minimalist rock and gigs where they played so quietly audiences would sit on the ground to listen. On Double Negative, their 12th album, this sound is invaded and distorted. Eerie static cuts up their harmonies, electronic reverb and reversal overpowering the guitars to leave an alien wall of noise. Apocalyptic, otherworldly, but beautiful.",
      "year": 2018,
      "release_date": { "$date": "2018-09-14" },
      "winner": false
    },
    {
      "title": "Be the Cowboy",
      "artist": "Mitski",
      "genre": "Art Pop / Indie Rock",
      "primary_genres": ["Pop", "Rock"],
      "nationality": "USA / Japan",
      "image": "./img/mitski.jpg",
      "description": "On her 5th studio album Be The Cowboy, Japanese-American artist Mitski widens her musical palette to explore the tangle of relationships and identity. With a unique and dissonant style that flicks between genres, from disco pop to indie ballads, Mitski is developing into one of the decade’s most interesting voices on anxiety, loneliness and love.",
      "year": 2018,
      "release_date": { "$date": "2018-08-17" },
      "winner": true
    },
    {
      "title": "Room 25",
      "artist": "Noname",
      "genre": "Jazz Rap / Conscious Hip Hop",
      "primary_genres": ["Hip Hop"],
      "nationality": "USA",
      "image": "./img/noname.jpg",
      "description": "The debut album from Chicago rapper Fatimah Warner, or Noname. Influenced by her background in poetry and spoken word, Noname’s rap is gentle and freeform, the opposite of a mainstream hip-hop dominated by male braggadocio. Backed with neo-soul and jazz arrangements that flow organically around her verse, Room 25 is introspective, joyful and healing.",
      "year": 2018,
      "release_date": { "$date": "2018-09-14" },
      "winner": false
    },
    {
      "title": "Your Queen Is a Reptile",
      "artist": "Sons of Kemet",
      "genre": "Afro-Jazz",
      "primary_genres": ["Jazz"],
      "nationality": "UK",
      "image": "./img/sons_of_kemet.jpg",
      "description": "Hailing from London, it’s the Afro-jazz group Sons of Kemet with their album Your Queen is a Reptile. Lead saxophonist Shabaka Hutchings has become a key figure in the UK Jazz scene, fronting a number of bands that are shaking up the tired, fusty image of jazz with an exciting new fusion of musical influences, from Caribbean folk to dub and Afrobeat. Each track on Sons of Kemet’s third album is dedicated to an influential black woman from history, from Hutchings’ own great grandmother to political activists and leaders such as Harriet Tubman and Nanny of the Maroons. By crowning this new lineage of alternative ‘Queens’, Sons of Kemet celebrate female black identity at the same time as challenging the legacy of the British monarchy, and exposing the lizard-like qualities of dear old Elizabeth.",
      "year": 2018,
      "release_date": { "$date": "2018-03-30" },
      "winner": false
    },
    {
      "title": "Semper Femina",
      "artist": "Laura Marling",
      "genre": "Chamber Folk",
      "primary_genres": ["Folk"],
      "nationality": "UK",
      "image": "./img/laura_marling_semper_femina.jpg",
      "year": 2017,
      "release_date": { "$date": "2017-03-10" },
      "winner": false
    },
    {
      "title": "Sleep Well Beast",
      "artist": "The National",
      "genre": "Indie Rock / Art Rock",
      "primary_genres": ["Rock"],
      "nationality": "USA",
      "image": "./img/national_sleep_well_beast.jpg",
      "year": 2017,
      "release_date": { "$date": "2017-09-08" },
      "winner": false
    },
    {
      "title": "Process",
      "artist": "Sampha",
      "genre": "Alternative R&B",
      "primary_genres": ["R&B"],
      "nationality": "UK",
      "image": "./img/sampha.jpg",
      "year": 2017,
      "release_date": { "$date": "2017-02-03" },
      "winner": false
    },
    {
      "title": "Slowdive",
      "artist": "Slowdive",
      "genre": "Dream Pop / Shoegaze",
      "primary_genres": ["Rock"],
      "nationality": "UK",
      "image": "./img/slowdive.jpg",
      "year": 2017,
      "release_date": { "$date": "2017-05-05" },
      "winner": false
    },
    {
      "title": "Masseduction",
      "artist": "St. Vincent",
      "genre": "Art Pop",
      "primary_genres": ["Pop"],
      "nationality": "USA",
      "image": "./img/st_vincent_masseduction.jpg",
      "year": 2017,
      "release_date": { "$date": "2017-10-13" },
      "winner": true
    },
    {
      "title": "Drunk",
      "artist": "Thundercat",
      "genre": "Neo-Soul / Psychedelic Soul",
      "primary_genres": ["Soul", "Psychedelia"],
      "nationality": "USA",
      "image": "./img/thundercat.jpg",
      "year": 2017,
      "release_date": { "$date": "2017-02-24" },
      "winner": false
    },
    {
      "title": "Flower Boy",
      "artist": "Tyler, the Creator",
      "genre": "West Coast Hip Hop",
      "primary_genres": ["Hip Hop"],
      "nationality": "USA",
      "image": "./img/tyler_flower_boy.jpg",
      "year": 2017,
      "release_date": { "$date": "2017-07-21" },
      "winner": false
    },
    {
      "title": "American Dream",
      "artist": "LCD Soundsystem",
      "genre": "Dance Punk / New Wave",
      "primary_genres": ["Rock", "Punk"],
      "nationality": "USA",
      "image": "./img/lcd_soundsystem.jpg",
      "year": 2017,
      "release_date": { "$date": "2017-09-01" },
      "winner": false
    },
    {
      "title": "Malibu",
      "artist": "Anderson .Paak",
      "genre": "Neo-Soul",
      "primary_genres": ["Soul"],
      "nationality": "USA",
      "image": "./img/anderson_paak.jpg",
      "year": 2016,
      "release_date": { "$date": "2016-01-15" },
      "winner": false
    },
    {
      "title": "Teens of Denial",
      "artist": "Car Seat Headrest",
      "genre": "Indie Rock",
      "primary_genres": ["Rock"],
      "nationality": "USA",
      "image": "./img/car_seat_headrest.jpg",
      "year": 2016,
      "release_date": { "$date": "2016-05-20" },
      "winner": false
    },
    {
      "title": "Blackstar",
      "artist": "David Bowie",
      "genre": "Art Rock",
      "primary_genres": ["Rock"],
      "nationality": "UK",
      "image": "./img/david_bowie_blackstar.jpg",
      "year": 2016,
      "release_date": { "$date": "2016-01-08" },
      "winner": true
    },
    {
      "title": "Blonde",
      "artist": "Frank Ocean",
      "genre": "Alternative R&B / Art Pop",
      "primary_genres": ["R&B", "Pop"],
      "nationality": "USA",
      "image": "./img/frank_ocean_blonde.jpg",
      "year": 2016,
      "release_date": { "$date": "2016-08-20" },
      "winner": false
    },
    {
      "title": "Post Pop Depression",
      "artist": "Iggy Pop",
      "genre": "Alternative Rock",
      "primary_genres": ["Rock"],
      "nationality": "USA",
      "image": "./img/iggy_pop.jpg",
      "year": 2016,
      "release_date": { "$date": "2016-03-18" },
      "winner": false
    },
    {
      "title": "Skeleton Tree",
      "artist": "Nick Cave & The Bad Seeds",
      "genre": "Art Rock",
      "primary_genres": ["Rock"],
      "nationality": "UK",
      "image": "./img/nick_cave_skeleton_tree.jpg",
      "year": 2016,
      "release_date": { "$date": "2016-09-09" },
      "winner": false
    },
    {
      "title": "A Seat at the Table",
      "artist": "Solange",
      "genre": "Neo-Soul",
      "primary_genres": ["Soul"],
      "nationality": "USA",
      "image": "./img/solange.jpg",
      "year": 2016,
      "release_date": { "$date": "2016-09-30" },
      "winner": false
    },
    {
      "title": "A Moon Shaped Pool",
      "artist": "Radiohead",
      "genre": "Art Pop / Art Rock",
      "primary_genres": ["Pop", "Rock"],
      "nationality": "UK",
      "image": "./img/radiohead_moon_shaped_pool.jpg",
      "year": 2016,
      "release_date": { "$date": "2016-05-08" },
      "winner": false
    },
    {
      "title": "Vulnicura",
      "artist": "Björk",
      "genre": "Art Pop",
      "primary_genres": ["Pop"],
      "nationality": "Iceland",
      "image": "./img/bjork.jpg",
      "year": 2015,
      "release_date": { "$date": "2015-01-20" },
      "winner": false
    },
    {
      "title": "Sometimes I Sit and Think, and Sometimes I Just Sit",
      "artist": "Courtney Barnett",
      "genre": "Indie Rock / Slacker Rock",
      "primary_genres": ["Rock"],
      "nationality": "Australia",
      "image": "./img/courtney_barnett.jpg",
      "year": 2015,
      "release_date": { "$date": "2015-03-24" },
      "winner": false
    },
    {
      "title": "I Love You, Honeybear",
      "artist": "Father John Misty",
      "genre": "Indie Folk",
      "primary_genres": ["Folk"],
      "nationality": "USA",
      "image": "./img/father_john_misty.jpg",
      "year": 2015,
      "release_date": { "$date": "2015-02-10" },
      "winner": false
    },
    {
      "title": "In Colour",
      "artist": "Jamie xx",
      "genre": "UK Bass",
      "primary_genres": ["Electronic", "Dance"],
      "nationality": "UK",
      "image": "./img/jamie_xx.jpg",
      "year": 2015,
      "release_date": { "$date": "2015-06-01" },
      "winner": false
    },
    {
      "title": "Have You in My Wilderness",
      "artist": "Julia Holter",
      "genre": "Art Pop / Chamber Pop",
      "primary_genres": ["Pop"],
      "nationality": "USA",
      "image": "./img/julia_holter.jpg",
      "year": 2015,
      "release_date": { "$date": "2015-09-25" },
      "winner": false
    },
    {
      "title": "To Pimp a Butterfly",
      "artist": "Kendrick Lamar",
      "genre": "Conscious Hip Hop / West Coast Hip Hop",
      "primary_genres": ["Hip Hop"],
      "nationality": "USA",
      "image": "./img/kendrick_lamar_to_pimp_a_butterfly.jpg",
      "year": 2015,
      "release_date": { "$date": "2015-03-15" },
      "winner": false
    },
    {
      "title": "Carrie & Lowell",
      "artist": "Sufjan Stevens",
      "genre": "Indie Folk",
      "primary_genres": ["Folk"],
      "nationality": "USA",
      "image": "./img/sufjan_stevens.webp",
      "year": 2015,
      "release_date": { "$date": "2015-03-31" },
      "winner": true
    },
    {
      "title": "Currents",
      "artist": "Tame Impala",
      "genre": "Psychedelic Pop / Synthpop",
      "primary_genres": ["Pop", "Psychedelia"],
      "nationality": "Australia",
      "image": "./img/tame_impala_currents.jpg",
      "year": 2015,
      "release_date": { "$date": "2015-07-17" },
      "winner": false
    }
  ];

  database.forEach(album => {
    let image = album.image.slice(0, -4);

    let image1 = image + '-small.jpg';
    let image2 = image + '-medium.jpg';
    let image3 = image + '-large.jpg';

    album.images = [image1, image2, image3];

    delete album.image;
    
  })


let db = JSON.stringify(database);

  const fs = require('fs');
    fs.writeFile("./database.json", db, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 