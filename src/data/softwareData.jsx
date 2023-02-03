import React from 'react';

const softwareData = {
  "experience": [
    {
      "title": "Opener",
      "links": {"website": "https://opener.aero/"},
      "tools": ["PostgreSQL", "Django", "React"],
      "logo": {
        "location": "/1530921029535.jpg"
      },
      "body":
        <div>
          <p> 
            The dream of futurists has always been a flying vehicle capable of efficiently moving passengers from A to B. Opener is realizing this dream in an affordable, safe, easy-to-operate, vertical take-off and landing (VTOL) vehicle: BlackFly. Opener designed, developed, and manufactures BlackFly, the world’s first ultralight electric VTOL aircraft for personal transportation.
          </p>
          <p>
            At Opener, I was a Software Engineer developing internal tools that consolidated Opener's data and information on to a single platform to optimize workflows across the company. By integrating data between teams involved in flight testing, manufacturing and procurement, it was possible to rapidly iterate and develop the BlackFly to meet the needs of Opener's first customers.
          </p>
        </div>
    }
  ],
  "projects": [
    {
      "title": "Gameflix",
      "links": {"site": "https://gameflix-app.netlify.app/", "repository": "https://github.com/calvin-xu0/Gameflix"},
      "tools": ["PostgreSQL", "Express", "React", "Node.js", "Socket.io"],
      "image": {
        "location": "https://github.com/sjngplus/Gameflix/raw/main/frontend-client/docs/gameflix%20preview.gif",
        "caption": "App preview of price-rating data visualization as well as various features including filtering and favoriting"
      },
      "body": 
        <div>
          <p>
            This is an app I co-created with <a href="https://github.com/sjngplus"><u>SJ Jega</u></a> where users can sort, filter, and collaborate in choosing a PC game to play. The app was insprired by the lack of filter/sort functionality in PC games deals sites such as CheapShark and IsThereAnyDeal.
          </p>
          <p>
            The app pulls info from the Steam and Cheapshark APIs to display the games. Games can be searched by title. If a game does not exist in the app, the user can click the search button with the game title. This will prompt the app to fetch and display the game(s) matching the title in the chart, and also inserts the game(s) into the app's database.
          </p>
        </div>
    }
  ]
}

export default softwareData;