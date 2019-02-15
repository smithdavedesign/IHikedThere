
<script>
  var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 38.544907,
        lng: -121.740517
      },
      zoom: 5
    });
  }

</script>
<!-- Importing google librarys ...MARKERCLUSTER.....Note: add coma to add more librarys at the end of sctript -->
<script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
<!-- API KEY GOOGLE MAPS: AIzaSyAbmwSaBUQ-qEG_JbVQ8XcSO-D9wfnCmak  -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAbmwSaBUQ-qEG_JbVQ8XcSO-D9wfnCmak
&callback=initMap" async defer></script>
