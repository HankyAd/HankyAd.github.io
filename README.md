#up777621 webscript3 dashboard
This website is a dashboard for personal use. Here is my rationale for certain design decisions.

1. A different html page was used for the settings and configuration so that the main page could still look clean and sleek.
2. Local Storage was used rather than serverside storage. Javascript's localStorage is reliable, and works beautifully. This way, the settings will stay indefinitely.


There are 6 different functions to the webpage when loaded up by the browser. See below for configuration of the page

1. Using simpleweatherjs, I have created my own weather widget, which only uses html tags inserted from javascript. What this will show, is the current temperature in Celsius, The location listed, the weather index - eg. Cloudy, Sunny, Light Showers - I also included wind direction and speed. Finally below everything else in this block, it gives you information based on when this information was last updated. If no information can be retrieved, an error saying "THERE WAS A PROBLEM RETRIEVING THE LATEST WEATHER INFORMATION"

2. Using javascript, I created a clock. It is a 24hr clock that also shows today's date in the format dd/mm/yyyy

3. Using javascript, The website will also inject a youtube embed based on local storage, or defaulting to the sky news live stream. Using local storage, the website stores the watch id of the chosen youtube video/stream. For instance, taking the url: "https://www.youtube.com/watch?v=y60wDzZt8yg" you will only need "y60wDzZt8yg" at the end of the link. This would redirect to a video from the channel Vsauce.

4. This is an embedded link to my google calendar. With the website being personal use, having something to track my schedule and keep me organised is much appreciated.

5. Using javascript, much like the instance of youtube, a twitch stream is inserted into the webpage upon load. Depending on the twitch username stored in local storage, it would load a different stream. The default is set to "www.twitch.tv/bobross". Much like the youtube example, instead of copying the code at the end of the video, you need only type in the username of a streamer

6.  This is an embedded link to the BBC News twitter timeline

#CONFIG PAGE

There are 3 input boxes on this page. The first is weather location.

1. Simply input the name of the city you would like to see on the main page. For american cities, please specify the state at the end. For instance, "Wales, Alaska" will display information for Wales, Alaska.

2. Input the username of a streamer on twitch. This value is stored using local storage, and will load the new streamer when going back to the main page

3. Input a watch ID of the desired youtube link. This is also stored using local storage, and will load the correct video when returning to the main page.


#Reflection

Functionality

The website works as intended. It's responsive, the page loads correctly. All the dashboard items all load the correct way.

Maintainability

Code is simple, and concise in most cases. Instances like storing links to localStorage take up very few lines of code, and are incredibly easy to understand. The CSS is less comprehensive, with more repeated code than i would like. However, The website maintains responsive on all devices.

Usability

The website isn't fully configurable. The calendar and the Twitter timeline proved difficult to change. The calendar required an incredibly unique key, that required you to create a new embed link. Twitter, due to the nature of how the embed is called, will not change from the default value given in the "a href" tag put in the body

Other than this, i believe that the site is still incredibly usable. With little event driven inputs on the main page, and no menus, the main page is well laid out and easy to navigate. The settings page is very straightforward, with just 3 event driven inputs, and all confirm to the user when the value is taken.

Accessibility
The main page is very accessible. Clear white background, with clear black text makes it easier to read. It could be said that on a portrait mobile screen, the Calendar can be less clear and more difficult to read, however.

The settings page includes very clear instructions on how to configure the home page, providing images for the youtube and twitch links.
