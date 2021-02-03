function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
  {
    alert('iOS');
  }
  else if( userAgent.match( /Android/i ) )
  {
    alert('Android');
  }
  else
  {
    alert('unknown');
  }
}