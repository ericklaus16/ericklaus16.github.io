var client_id = "";
var client_secret = "";
var redirect_uri = "https://www.ericklaus16.github.io/spotify/main";

function Logar(){
    var scopes = 'user-read-private user-read-email';
window.location.href = "https://accounts.spotify.com/authorize" +
  '?response_type=code' +
  '&client_id=' + client_id +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent(redirect_uri);
};