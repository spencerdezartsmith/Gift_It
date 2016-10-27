# Gift-It
Gift-It is a one-step location based donation platform. Gift-It’s donation notification is triggered when someone walks into an event space that is within a beacon’s range. The beacon triggers that phone to show the donation message that is specific to the event.

One example would be donating to Breast Cancer Research at football game during the month of October. For sporting events specifically, donors can specify which team they are donating for and gamify the experience. Beacon technology has already been implemented in stadiums around the US and is yielding high ROI. The average attendance at a football game is around 70,000 people. If every fan donated just $1 we would raise over $70,000 for Breast Cancer Research in 3 hours using Ingenico ePayments.

By 2020, there are expected to be around 400 million beacons installed across different industries. Beacons will be in airports, stores, museums, stadiums and more spaces, capturing audiences and customers and influencing their behavior.

Gift it was built with a React Native frontend, Ruby on Rails backend with a Postgresql database and a Node.js backend to integrate the Ingenico ePayments API. Gift-it is a platform that can revitalize the connection between nonprofits and donors, tailor itself to it’s users through gamification, and give you a simple one-step way to give back to a charity you care about.

#### Gift-Its's React Native frontend repo: [Gift-It React Native](https://github.com/spencerdezartsmith/Gift_It)
#### Gift-Its's Rails backend repo: [Gift-It Rails](https://github.com/KaitlynMcPartland/Gift-It-API)
#### Gift-Its's Node.js backend repo: [Gift-It Node.js](https://github.com/eyingling02/Gift-It-Node-Backend)

## Team
[@Spencerdezartsmith](https://github.com/spencerdezartsmith) | [@KaitlynMcPartland](https://github.com/KaitlynMcPartland) | [@Grust101](https://github.com/grust101) | [@Eyingling02](https://github.com/eyingling02)

## Functionality
![images](/src/Resources/loading_page.png)

Enter how much you'd like to donate and which team you support.

![images](/src/Resources/donation_page.png) ![images](/src/Resources/confirmation_page.png)

View how much has been donated at the event so far.

![images](/src/Resources/graph_page.png) ![images](/src/Resources/toggled_graph.png)

See your donation history for this.

![images](/src/Resources/history_page.png)

## Setup
* Clone down Gift-It's frontend repo. [Gift-It React Native](https://github.com/spencerdezartsmith/Gift_It)
* Run ```npm install```.
* Run the simulator by either running ```react-native run-ios``` or opening the project in Xcode and running directly from Xcode.
