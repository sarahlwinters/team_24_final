<b>PG County Housing Inspection Violations</b>

Sarah Winters, Harish Ram, Anant Venugopal, Rachit Chadha, Angela Phuong, Kelin West

https://quizzical-almeida-3b37aa.netlify.com <br>
Website runs fine, however the markers on the map do not show up.

https://dry-beyond-36339.herokuapp.com <br>
Map runs fine on heroku, however sometimes there are issues with the photos appearing.  Markers do not show on map if the page is refreshed multiple times as well.

Our information problem is based on how prospective home buyers and renters in PG County lack the resources to view housing inspection violation data in their area in a clear and easy to understand way.

<b>Stakeholders:</b> Prospective home buyers and renters in PG County

<b>Data source:</b> https://data.princegeorgescountymd.gov/Urban-Planning/Housing-Inspection-Violations/9hyf-46qb

<b>Strategies and Solutions</b> <br><br>
Our initial strategy was to show specific properties on the interactive map, so potential home buyers and renters could use this information when choosing where to purchase a property. This strategy did not work after several iterations of implementing the map on our website; thus, we decided to show general regions of PG County that have more violations and what those violations are. Although our original plan was to use Leaflet to create a map that displayed markers to indicate specific areas, we kept running into errors that forced us to utilize solely Tableau for visualization. Our strategy to download PG County Housing Violations data API through Tableau also failed, so as a work-around, we downloaded the dataset manually for analysis.


<b>Technical System Decision Rationale</b> <br><br>
We originally only planned to have three pages (map, about, documentation) for our website. We decided to include a homepage with the graphs to provide more information to our users that the map alone wouldn't have. We thought it is important to provide more information showing how the different types of violations as well as the amounts of violations have changed over the recent years. The map was included so users can use it to search for the area they're interested in and see how many housing violations have occured there. The about page just provides a quick summary of what our project is about, why we created it, and an introduction to the team. Finally, the documentation page shows users how to navigate our website and provides more detail about the graphs on the homepage. It also includes the link to the api we used in case users are curious about where our data came from.

<b>Addressing the Problem</b> <br><br>
Our final system helps address the information problem of there being a lack of resources to view housing inspection violation data by giving prospective home buyers and renters in PG County a tool to use that provides them with information on the housing violations found in specific areas via zip codes. In doing this, our application should aid prospective home buyers and renters in PG County in gauging which areas to buy/rent.

<b>Challenges Faced and Impact</b> <br><br>
The challenges we faced were a combination of technical difficulties and group communication which we ultimately ended up finding a solution that worked for us. In terms of technical difficulties, we had trouble using Leaflet, Tableau API and displaying our website in the manner we initially visualized. Group communication could have been better as starting this project was delayed by the learning curve of using Githhub. Ultimately, the impact the obstacles we faced allowed us to learn different methods of reaching the same goal. Not only did we learn more about servers, API, data visualization software and teamwork, but also were able to improvise our project from our original prototype. 

<b>Possible Future Work</b> <br><br>
We would like to take this project even further by allowing the application to identify the housing violations found in individual houses rather than just the area in general. This would prove to be more beneficial to our stakeholders since it would give them more information to go off of when making their decision to buy/rent or not.
