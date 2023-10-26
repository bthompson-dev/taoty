# Thompson Album of the Year

This is a website created to display the results of my annual album of the year contest, which has been going since 2007!
Users can filter albums by year, genre, and if the album won. Users can also select individual albums to view more details.

Live website: https://taoty.co.uk/

## Technologies Used

The frontend of the app was built with React using create-react-app. 
It uses axios to handle requests to the backend server which is hosted on fly.io.

The code for the backend can be viewed here: https://github.com/bthompson-dev/taoty-app-public

It uses NodeJS and Express to query a MongoDB database hosted on AtlasDB, which contains the details of all the albums.

## Planned improvements

The website has a lot of potential for expansion.
Some of the ideas I'd like to implement in the future are:

- Sorting the results by date or artist
- A search function
- Integration with Spotify so that albums can be listened to on the page
- User accounts and log-in, allowing users to create lists of albums they like, and to leave comments on specific albums
