# pixelstreet
##Backend code for pixelstreet App

### Request URLs
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
