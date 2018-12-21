# pixelstreet
##Backend code for pixelstreet App

### Current available request URLs

*All are POST requests*

``` javascript
/location
body : {
  location: location_value
}
```
Returns all the photograhphers near the given location.

``` javascript
/profession
body: {
  location: location_value,
  section: photographer_type
}
```
Returns all the photographers that satisfy the given type, such as photographer or videographer near the given location 

``` javascript
/id
body: {
  id: photographer_id
}
```
Returns the photographer that has the specified *id*.

## Setup
Clone this repo to your desktop and run npm install to install all the dependencies.

Once the dependencies are installed, you can run `node server.js` to start the application. You will then be able to access it at http://localhost:8090/

## Deployment
The app has been deployed at [PixelStreet](https://pixel-street.herokuapp.com/)
