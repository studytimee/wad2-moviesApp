# Enterprise Web Dev - Assignment 1.
__Name:__ Abid Ali

### [Live Demo Assignment 1](https://chimerical-sherbet-cd7fc9.netlify.app/)

### Overrview.

+ Add Card to WatchList 
+ Remove Card from watchList
+ When the watch list is selected, the avatar of the watch list appears on the card.
+ Support Storybook for each component.
+ Upcoming, Top-rated, similar movies, Celebrity, Celebrity Details.
+ Similar Movies Button in the movies detail page. Click and view full details.
+ User Authentication (External Auth via Security Web Token)
+ Private Routes: 2 Private routing
+ Routes : 4 static routes and 3 parameterised routes
+ Web Form (SignUp)
+ Server State Cache (useQuery)
+ Dynamic and interactive UI, Material UI, Styled 3rd Party components.
+ Celebrity search by name
+ Sorting popular celebrity

## Feature Design.

__The Upcoming Movies feature.__

![][up-coming]

> Lists movies from the Upcoming movies endpoint of TMDB
__URL:__ /movies/upcoming


__The Now Playing Movies feature.__
![][now-playing]
> Lists movies from the Now-playing movies endpoint of TMDB
__URL:__ /movies/now-playing


__The Top-rated Movies feature.__
![][top-rated]
> Lists movies from the Top-rated movies endpoint of TMDB
__URL:__ /movies/top-rated


__The Celebrities feature.__
![][celebrities]
> Lists of Celebrities endpoint of TMDB
__URL:__ /movies/actors/home


__The Celebrity Detail feature.__
![][celebrity-details]
> Show the detail of selected celebrity endpoint of TMDB
__URL:__ /movies/actors/{actor-id}


__Showing the similar button feature.__
![][show-similar-button]
> Similar button shows in the movies details page


__Show the list of similar movies feature.__
![][list-of-similar-movies]
> List of similar movies match with the selected movie_id
__URL:__ /movies/{selected-movie_id}


__Show the full detail of similar movies feature.__
![][full-detail-of-similar-movies]
> Show the full details of movie id form the matched list.
__URL:__ /movies/{new-matched-movie_id}


## Storybook.

__The Celebrity Page - Celebrity Card - Default Storybook.__
![][CelebrityPage-celebrityCard-default]


__The Celebrity Page - Celebrity Card - Exception Storybook.__
![][CelebrityPage-celebrityCard-default-exception]


__The Celebrity Detail Page - Celebrity Detail Storybook.__
![][CelebrityDetailPage-celebrityDetails]


__The Celebrity Detail Page - Celebrity List Storybook.__
![][CelebrityDetailPage-celebrityList]


__The Celebrity Detail Page - Celebrity Header Storybook.__
![][CelebrityDetailPage-celebrityDetailsHeader]


__The Movie Details Page - Similar Movies Button Storybook.__
![][movie-detail-similar-button]




### Server state caching.

+ [Server State Caching Demo Video](https://youtu.be/M7ARV0u_f_k).


## Authentication.

__Authentication - API Integration.__
![][API-integration]
>The client App provides a mechanism for working with an server API's.

>The Client app makes an API request to localhost:3000, the Webpack development server. The development server then proxies that request to the API server.

#### Proxy Server
>To have the React development server proxy our API requests to our Express API server, we need to add the following to the package.json file for the React Application

>This proxy server forward any request that not present in the client resource to the Express API listening on port 8080.

__Authentication - Private Route.__

![][private-route]

![][require-authentication]
> In the moivesApp both pages (favourite & WatchList) are protected.


__Authentication - Sign Up .__
![][signup-page]


__Authentication - Password encrypted .__
![][hashed-before-saved]
> In the background the passwords are being hashed before being saved in to the database.


__Authentication - Login .__
![][login]


__Authentication - Verification .__
![][authentication]
> Enter a known email and password and the app should authenticate using the API and get a JWT token. Now have access to both protected routes.



# Learning Material.


### JavaScript Fundamentals - Objects
[View Lab Code](https://github.com/studytimee/wad2-lab2-js-objects)

| **JS Objects**                          | **Console Output**                        |
| --------------------------------------- | ----------------------------------------- |
| Start up                                |  [Click](https://i.imgur.com/ciZubKf.png) |
| Nested Objects                          |  [Click](https://i.imgur.com/oNfL7et.png) |
| Nested Objects Example 2                |  [Click](https://i.imgur.com/dJMJPfx.png) |
| Dynamic Properties                      |  [Click](https://i.imgur.com/1YIJGhq.png) |
| Arrays                                  |  [Click](https://i.imgur.com/ZLFBoKi.png) |
| Arrays (better format)                  |  [Click](https://i.imgur.com/sCC7WlR.png) |
| Looping/Iteration                       |  [Click](https://i.imgur.com/pgbnmGF.png) |
| Looping/Iteration  - Key & Value pair   |  [Click](https://i.imgur.com/KwsyczI.png) |
| Browser Tool - Console                  |  [Click](https://i.imgur.com/WDvZRFV.png) |
| Browser Tool - Update Objects property  |  [Click](https://i.imgur.com/sqNrnNq.png) |



### JavaScript Fundamentals - Functions 
[view lab code](https://github.com/studytimee/wad2-lab2-js-functions)


| **JS Objects**                                            | **Console Output**                       | **Code**                                                                                        |
| --------------------------------------------------------- | -----------------------------------------| ----------------------------------------------------------------------------------------------- |
| Start up - Web API Call  - Random User                    |  [View](https://i.imgur.com/1dVSdzM.png) |                                                                                                 |
| Start up Lab - Web API Call - Todo                        |  [View](https://i.imgur.com/JQy7aXO.png) |                                                                                                 |
| Exercise 1 - Used array.filter Higher Order Function      |  [View](https://i.imgur.com/sibd3EC.png) |                                                                                                 |
| Exercise 2 - Used array.map Higher Order Function         |  [View](https://i.imgur.com/pelQwLA.png) |                                                                                                 |
| Exercise 3 - Combine Filter and Map Higher Order Function |  [View](https://i.imgur.com/LhRfDaG.png) |                                                                                                 |
| Exercise 4 - used arry.reduce Higher Order Function       |  [View](https://i.imgur.com/boqJSOz.png) |                                                                                                 |
| Exercise 5 - similar to ex 3 with Reduce Higher Order Fun |  [View](https://i.imgur.com/bKAXD8t.png) | [View](https://github.com/studytimee/wad2-lab2-js-functions/blob/main/functionslab/exercise5.js)|
| Exercise 6 - Find number of completed todo/user Reduce HOF|  [View](https://i.imgur.com/Jlwrs4I.png) | [View](https://github.com/studytimee/wad2-lab2-js-functions/blob/main/functionslab/exercise6.js)|
| DOM API Exercise                                          


### React JS - Basics
[view lab code](https://github.com/studytimee/wad2-lab4-react-basic)

| **JS Objects**                                            | **Console Output**                       | **Code**                                   |**Storybook Code**                               |
| --------------------------------------------------------- | -----------------------------------------| ------------------------------------------ | ------------------------------------------ | 
| Start up -                                                |  [View](https://i.imgur.com/pHWEVWc.png) | [View](https://i.imgur.com/Bnc4iHQ.png)    |                                            | 
| Exercise 1 - Static Component                             |  [View](https://i.imgur.com/Jd6bkFT.png) | [View](https://i.imgur.com/NDDnNHG.png)    |                                            |    
| Exercise 2 - Embedded Variables                           |  [View](https://i.imgur.com/DqEVZT7.png) | [View](https://i.imgur.com/Q2P8vFQ.png)     | [View](https://i.imgur.com/8EdOSHc.png)    |
| Exercise 3 - Props                                        |  [View](https://i.imgur.com/vwzbaaC.png) | [View](https://i.imgur.com/UVpQJj7.png)    | [View](https://i.imgur.com/yGAw9By.png)    |
| Exercise 4 - Iterations                                   |  [View](https://i.imgur.com/NELo6F8.png) | [View](https://i.imgur.com/RlC23Df.png)    | [View](https://i.imgur.com/MA0VZvD.png)    |




### ReactJS -  React Create React App Tool
[view lab code](https://github.com/studytimee/wad2-lab4-react-cra-tool)
This lab introduces the create-react-app (CRA) tool. While Storybook is a tool for developing individual components, CRA is for developing a complete application (app).

**npx create-react-app course-app**
**cd course-app**

| **Create a React Application**  |  **UI/Console Output**                   | **Stateless Component**                                    | **Stateful Component**                                     |     **Component Hierarchy**                              | 
| --------------------------------| -----------------------------------------| --------------------------------------------------------   | --------------------------------------------------------   | -------------------------------------------------------- |
| 1-Start up                      |  [View](https://i.imgur.com/0BsKVhk.png) |                                                            |                                                            |                                                          |
| 2-Components                    |                                          |  [View Course Component](https://i.imgur.com/pGN3EHM.png)  |                                                            |                                                          |
|                                 |                                          |  [View Module Component](https://i.imgur.com/IjjxYvi.png)  |                                                            |                                                          |
| 3-Assemble the App component    |  [View](https://i.imgur.com/NvDUD3P.png) |                                                            | [View Stateful Component](https://i.imgur.com/MZsFZBc.png)  | [View](https://i.imgur.com/p3SD58l.png)                 |
| 4-The Bootstrap CSS Library     |  [View](https://i.imgur.com/ErBtvgo.png) |                                                            |                                                            |                                                          |
| 5-Live reloading                |                                          |                                                            |                                                            |                                                          |
| 6-Building a production App     |  [View](https://i.imgur.com/lPJ9mj3.png) |                                                            |                                                            |                                                          |
| 7-Material UI                   |  [View](https://i.imgur.com/FBJfjO2.png) |                                                            |                                                            |                                                          |


### Lab 5 -  MoviesApp Part - 1 
[view lab code](https://github.com/studytimee/wad2-lab5-moviesApp-part-1)

### Lab 6 -  MoviesApp Part - 2 
[view lab code](https://github.com/studytimee/wad2-lab6-moviesApp-part-2)

### Lab 8 -  MoviesApp Part - 3 
[view lab code](https://github.com/studytimee/wad2-lab6-moviesApp-part-3)

### Lab 9 -  MoviesApp Part - 4 
[view lab code](https://github.com/studytimee/wad2-lab9-moviesApp-part-4)





[up-coming]:   ./images/up-coming.png
[now-playing]: ./images/now-playing.png
[top-rated]:   ./images/top-rated.png
[celebrities]:   ./images/celebrities.png
[celebrity-details]:   ./images/celebrity-details.png
[show-similar-button]:   ./images/show-similar-button.png
[list-of-similar-movies]:   ./images/list-of-similar-movies.png
[full-detail-of-similar-movies]:   ./images/full-detail-of-similar-movies.png


[CelebrityPage-celebrityCard-default]:             https://i.imgur.com/H2R9Pvv.png
[CelebrityPage-celebrityCard-default-exception]:   https://i.imgur.com/qeSPwDW.png
[CelebrityDetailPage-celebrityDetails]:            https://i.imgur.com/xCjCTRH.png
[CelebrityDetailPage-celebrityList]:               https://i.imgur.com/rb0Kz9i.png
[CelebrityDetailPage-celebrityDetailsHeader]:      https://i.imgur.com/RDVj1My.png
[movie-detail-similar-button]:                     https://i.imgur.com/N8uMeRt.png


[API-integration]:          ./images/API_Integration-5.png
[private-route]:            ./images/private-route.png
[require-authentication]:   https://i.imgur.com/xtd9IQg.png
[signup-page]:              https://i.imgur.com/Hqq6NRr.png
[hashed-before-saved]:      ./images/encrypted-password.png
[login]:                     https://i.imgur.com/dADqOEd.png
[authentication]:            https://i.imgur.com/eNW7xmi.png
