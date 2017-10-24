$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: '749f5935c4a633ac25d3dc7816937dd2a136c35f'
});
$('#login').on('click', function() {
  _500px.login();
});
_500px.on('authorization_obtained', function () {
  $('.sign-in-view').hide();
  $('.image-results-view').show();

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      console.log('lat: ' + lat);
      console.log('long: ' + long);

      let radius = '25mi';
      let searchOptions = {
        geo: lat + ',' + long + ',' + radius,
        only: 'Landscapes'
      };

      _500px.api('/photos/search',  searchOptions, function (response) {
        if (response.data.photos.length === 0) {
          console.log('No Photos Found');
        } else {
          console.log('Request Succeeded!');
        }
      });
    })
  } else {
    $('.images').append('Sorry, this browser does not support geolocation');
  }
});
  function handleResponseSuccess(response) {
    let allData = response.data.photos;

    $.each(allData, function() {
      let element = $('img').attr('src', this.image_url).addClass('image');
      $('.images').append(element);
    });
  }
  /*$('#login').click(function() {
    _500px.login();
  });
  _500px.getAuthorizationStatus();
});
*/
_500px.login(function(status){
  if (status == 'authorized') {
    alert('You have logged in');
    _500px.api('/users', function (response){

    });
  } else {
    alert('You denied my application');
  }
});
_500px.getAuthorizationStatus(function (status){
  if (status =='not_logged_in'|| status == 'not authorized'){
      _500px.login();
  }
});})