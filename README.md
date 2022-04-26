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



### Server state caching.

+ [Server State Caching Demo Video](https://youtu.be/M7ARV0u_f_k).




[up-coming]:   ./images/up-coming.png
[now-playing]: ./images/now-playing.png
[top-rated]:   ./images/top-rated.png
[celebrities]:   ./images/celebrities.png
[celebrity-details]:   ./images/celebrity-details.png
[show-similar-button]:   ./images/show-similar-button.png
[list-of-similar-movies]:   ./images/list-of-similar-movies.png
[full-detail-of-similar-movies]:   ./images/full-detail-of-similar-movies.png
