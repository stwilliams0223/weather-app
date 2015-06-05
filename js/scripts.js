
$(document).ready(function() {
  var spokane = $.simpleWeather({
    zipcode: '99205',
    unit: 'f',
    success: function(weather) {
      $('#weather1 h2').html(weather.temp+'&deg;'+weather.units.temp);
      
      $('#weather1 .location').html(weather.city+', '+weather.region);
      
      $('#weather1 .currently').html(weather.currently);
      
      $('#weather1 .alt-temp').html(weather.tempAlt+'&deg;C');

      $('#weather1 .wind-speed').html(weather.wind.speed+' mph');

      $('#weather1 .description').html(weather.forecast[3]);

    },
    error: function(error) {
      $("#weather1").html('<p>'+error+'</p>');
    }
  });
  
  
  var spokanev = $.simpleWeather({
    zipcode: '99216',
    unit: 'f',
    success: function(weather) {
      $('#weather2 h2').html(weather.temp+'&deg;'+weather.units.temp);
      
      $('#weather2 .location').html(weather.city+', '+weather.region);
      
      $('#weather2 .currently').html(weather.currently);
      
      $('#weather2 .alt-temp').html(weather.tempAlt+'&deg;C');
    },
    error: function(error) {
      $("#weather1").html('<p>'+error+'</p>');
    }
  });
  
  
  var cheney = $.simpleWeather({
    zipcode: '99004',
    unit: 'f',
    success: function(weather) {
      $('#weather3 h2').html(weather.temp+'&deg;'+weather.units.temp);
      
      $('#weather3 .location').html(weather.city+', '+weather.region);
      
      $('#weather3 .currently').html(weather.currently);
      
      $('#weather3 .alt-temp').html(weather.tempAlt+'&deg;C');
    },
    error: function(error) {
      $("#weather1").html('<p>'+error+'</p>');
    }
  });
});



/* 
 * simpleWeather - http://simpleweatherjs.com
 * Version 2.2.0 - Last updated: April 30 2013
 */
(function(e){"use strict";e.extend({simpleWeather:function(t){t=e.extend({zipcode:"",woeid:"2357536",location:"",unit:"f",success:function(e){},error:function(e){}},t);var n=new Date;var r="http://query.yahooapis.com/v1/public/yql?format=json&rnd="+n.getFullYear()+n.getMonth()+n.getDay()+n.getHours()+"&diagnostics=true&callback=?&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=";if(t.location!==""){r+='select * from weather.forecast where location in (select id from weather.search where query="'+t.location+'") and u="'+t.unit+'"'}else if(t.zipcode!==""){r+='select * from weather.forecast where location in ("'+t.zipcode+'") and u="'+t.unit+'"'}else if(t.woeid!==""){r+="select * from weather.forecast where woeid="+t.woeid+' and u="'+t.unit+'"'}else{t.error("Could not retrieve weather due to an invalid WOEID or location.");return false}e.getJSON(r,function(n){if(n!==null&&n.query.results!==null){e.each(n.query.results,function(e,n){if(n.constructor.toString().indexOf("Array")!==-1){n=n[0]}var r=new Date;var i=new Date(r.toDateString()+" "+n.astronomy.sunrise);var s=new Date(r.toDateString()+" "+n.astronomy.sunset);if(r>i&&r<s){var o="d"}else{var o="n"}var u=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"];var a=u[Math.round(n.wind.direction/22.5)];if(n.item.condition.temp<80&&n.atmosphere.humidity<40){var f=-42.379+2.04901523*n.item.condition.temp+10.14333127*n.atmosphere.humidity-.22475541*n.item.condition.temp*n.atmosphere.humidity-6.83783*Math.pow(10,-3)*Math.pow(n.item.condition.temp,2)-5.481717*Math.pow(10,-2)*Math.pow(n.atmosphere.humidity,2)+1.22874*Math.pow(10,-3)*Math.pow(n.item.condition.temp,2)*n.atmosphere.humidity+8.5282*Math.pow(10,-4)*n.item.condition.temp*Math.pow(n.atmosphere.humidity,2)-1.99*Math.pow(10,-6)*Math.pow(n.item.condition.temp,2)*Math.pow(n.atmosphere.humidity,2)}else{var f=n.item.condition.temp}if(t.unit==="f"){var l="c";var c=Math.round(5/9*(n.item.condition.temp-32));var h=Math.round(5/9*(n.item.forecast[0].high-32));var p=Math.round(5/9*(n.item.forecast[0].low-32));var d=Math.round(5/9*(n.item.forecast[1].high-32));var v=Math.round(5/9*(n.item.forecast[1].low-32))}else{var l="f";var c=Math.round(9/5*n.item.condition.temp+32);var h=Math.round(9/5*n.item.forecast[0].high+32);var p=Math.round(9/5*n.item.forecast[0].low+32);var d=Math.round(5/9*(n.item.forecast[1].high+32));var v=Math.round(5/9*(n.item.forecast[1].low+32))}var m={title:n.item.title,temp:n.item.condition.temp,tempAlt:c,code:n.item.condition.code,todayCode:n.item.forecast[0].code,units:{temp:n.units.temperature,distance:n.units.distance,pressure:n.units.pressure,speed:n.units.speed,tempAlt:l},currently:n.item.condition.text,high:n.item.forecast[0].high,highAlt:h,low:n.item.forecast[0].low,lowAlt:p,forecast:n.item.forecast[0].text,wind:{chill:n.wind.chill,direction:a,speed:n.wind.speed},humidity:n.atmosphere.humidity,heatindex:f,pressure:n.atmosphere.pressure,rising:n.atmosphere.rising,visibility:n.atmosphere.visibility,sunrise:n.astronomy.sunrise,sunset:n.astronomy.sunset,description:n.item.description,thumbnail:"http://l.yimg.com/a/i/us/nws/weather/gr/"+n.item.condition.code+o+"s.png",image:"http://l.yimg.com/a/i/us/nws/weather/gr/"+n.item.condition.code+o+".png",tomorrow:{high:n.item.forecast[1].high,highAlt:d,low:n.item.forecast[1].low,lowAlt:v,forecast:n.item.forecast[1].text,code:n.item.forecast[1].code,date:n.item.forecast[1].date,day:n.item.forecast[1].day,image:"http://l.yimg.com/a/i/us/nws/weather/gr/"+n.item.forecast[1].code+"d.png"},city:n.location.city,country:n.location.country,region:n.location.region,updated:n.item.pubDate,link:n.item.link};t.success(m)})}else{if(n.query.results===null){t.error("An invalid WOEID or location was provided.")}else{t.error("There was an error retrieving the latest weather information. Please try again.")}}});return this}})})(jQuery)