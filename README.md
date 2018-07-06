# Lunar-Storm

A simple website in VueJs for a band.
Work in progress, I'm trying to add some dynamic with transitions, vue-router, and some API calls.

A homepage with the video behind.
A listening part with the bandcamp embed and a presentation.
A component with the list of the lives. We can click on it to show the location on google map.
A contact part with the social media.
A component to manage the concerts list. (at the url #/addconcert) : need to add an admin access only.

If you want to use this example, you just need to create a file APIKeys.js in /src and export the following const with your key/token :
* APIKEY_FIREBASE : Firebase is used as database for the concerts list
* APIKEY_GMAP : Google Map allows us to have an auto-completion and to show the map for the concerts.
* APIKEY_FB : A module with Facebook, not used, but allows you to collect the photos on a fb page you administrate
* APIKEY_IG : In order to collect the recent photos in Instagram
You also have to change the endpoints to the API in the components.

You can add a video in /public/video in order to have it as background. (You would change the name in the index.html)