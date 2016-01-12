var map;
var labels = 'ABCDE';
var labelIndex = 0;

navigator.geolocation.getCurrentPosition(GPS);
        
    function GPS(position){
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        
        initialize(lat, lon);
    }

    function initialize(lat, lon) {
        var location = {};
        
        location.lat = lat;
        location.lng = lon;
        
        var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: location
  });
        
         addMarker(location, map);
}
    
    function addMarker(location, map) {
        
        var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
            map: map
  });
}
        

this.weatherResponse = function(we){
    temp=JSON.parse(we)

    for(i=0;i<we.length;i++){// all in *F
    var obj={}
    obj.daily=temp[i].daily.data
    obj.today=temp[i].currently


    var sevenDay={
        this.date=time+i //time remain to be set
    }
    
    sevenDay.temperatureMin=tempSwitch(obj[i].daily.temperatureMin)
    sevenDay.temperatureMax=tempSwitch(obj[i].daily.temperatureMax)
    }
    }
    var day=[]
    day.push=sevenDay
    
    var today={}
    today.temperature=tempSwitch(obj.today.temperature)
    today.summary=obj.today.summary
    today.humidity=obj.today.humidity
    today.windSpeed=obj.today.windSpeed
    today.AvTemperature=tempSwitch(function(){
        return (obj.today.temperatureMin+obj.today.temperatureMax)/2
    })
    var op=document.getElementById('day')

    var bop=document.getElementById('today')
    
    function tempSwitch(temperature){
        var newT=(temperature-32)/1.8
        return newT
    }
// Make the API request:
var url =
"https://api.forecast.io/forecast/520c17b0f86370a130eb056fd86d415d/location.lat,location.lng&callback=this.weatherResponse";
var script = document.createElement('script');
script.src = url;
document.body.appendChild(script);
  



