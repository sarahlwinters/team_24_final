# PG County Housing Inspection Violations

Our information problem is based on how prospective home buyers and renters in PG County lack the resources to view housing inspection violation data in their area in a clear and easy to understand way.

https://dry-beyond-36339.herokuapp.com 

Our target browsers are Android, specifically Google Chrome and Firefox browsers.

<a href='docs/user.md'>User Manual</a>

<a href='https://github.com/sarahlwinters/team_24_final/blob/master/README.md#developer-manual'>Developer Manual</a>

# Developer Manual
Node.JS is required in order to run this application. Installing the application requires first cloning the repostitory from GitHub onto your local system, then running the commandd "npm install" within the repository directory will install all node packages and dependencies. The main libraries that are being used from the packages are the Express framework, Leaflet, and the Leaflet-GeoSearch packagee. Running the application on a server only requires changing the port variable in the server.js file and then hosting it on whatever server the deeveloper wishes. The server uses the Fetch API to GET information for pgcounty opendata, the server gets the dataset on housing inspection violations and then manipulates the data by concatanating the columns describing the address into a single street adress column. The server then sends out this data to the front end where it is then used to map the addresses on a Leaflet map using the GeoSearch library by querying each address and getting the longitude and latitude of the address for plotting. One issue with the current system is that the GeoSearch library limits how many queries a user can make per hour, this limitation is reached rather quickly if the user refreshes the page multiple times and will return a 429 error preventing markers from appearing on the map for the next hour. An other bug that randomly seems to occur is that the pictures on About page decide to randomly stop working, it is unknown why this bug happens but it appears to be linked to the heroku hosting service. Future development ideas could be finding a better library to map the addresses to, one alternative worth exploring would be the google maps API for address queries. Other future development ideas could include borders on the map for PG county and additional metadata included on the markers that popup on the map for each violation. 
