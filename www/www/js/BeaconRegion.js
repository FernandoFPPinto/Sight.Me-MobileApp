/**
 * Function that creates a BeaconRegion data transfer object.
 * 
 * @throws Error if the BeaconRegion parameters are not valid.
 */
function createBeacon() {

    var uuid = 'DA5336AE-2042-453A-A57F-F80DD34DFCD9'; // mandatory
    var identifier = 'beaconOnTheMacBooksShelf'; // mandatory
    var minor = 1000; // optional, defaults to wildcard if left empty
    var major = 5; // optional, defaults to wildcard if left empty

    // throws an error if the parameters are not valid
    var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

    return beaconRegion;

}


