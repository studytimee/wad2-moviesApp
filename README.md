# Enterprise Web Dev - Assignment 1.

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

[Briefly explain the method used for supporting authentication and include any relevant screenshots (e.g. Dev tools Network tab for session keys). State which parts of the app's functionality require authentication, e.g. the Favourites feature.]

__Authentication - Private Route.__
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


[require-authentication]:   https://i.imgur.com/xtd9IQg.png
[signup-page]:              https://i.imgur.com/Hqq6NRr.png
[hashed-before-saved]:      ./images/encrypted-password.png
[login]:                     https://i.imgur.com/dADqOEd.png
[authentication]:            https://i.imgur.com/eNW7xmi.png
