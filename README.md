# **README for the Eilat Project**

## 1.) Installing
To install the application locally, download or clone the "eilat-project" directory
from GitHub.

## 2.) Running
To run the application, double-click on the index.html file within the "eilat-project"
folder. If you want to run it on a different browser, right click the file and
select the browser of your choice.

## 3.) Dependencies
All files included within are required to run the application correctly; _do not
remove or edit any of them_.

**css/styles.css:** Defines styling for document elements in index.html.
**js/app.js:** Defines application logic.
**js/knockout-3.2.0.js**: Provides the organizational framework for the source code.

Because two external APIs and the jQuery library are used, it is recommended in the
strongest possible terms that the computer being used has active Internet access.
Firewalls blocking Google and/or Flickr will prevent some (or all) features of
the application from working properly.

## 4.) Using the Application
Upon running the application, a Google Maps map of Eilat, Israel will be visible.
A series of 27 location markers will be displayed. To select a marker, click on it
or its corresponding name on the leftmost menu. Upon doing so, the name of the location
and an image of it (or an image closely related to its function) will display. The
photo is sourced from Flickr using the location name as the search criterion; if no
image can be found, a message to this effect will display in the InfoWindow.

The locations can be filtered by their respective categories by using the dropdown on
the leftmost menu.

## 5.) Acknowledgments
The Google Maps code was primarily derived from the Google Maps API course on Udacity.
It was changed as needed based on the documentation at maps.googleapis.com.

Some Knockout code - particularly that relating to the dropdown menu and its corresponding
<select> element tag - was inspired by the Shopping Cart Screen application in the
Live Examples section of the knockoutjs.com site.

Map content courtesy of Google.
Photos shown in the InfoWindows courtesy of the Flickr community.
