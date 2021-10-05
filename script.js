var client_id = "9d166366c740411797aa360cd0756e59";
var client_secret = "d43d1e1b087f4219932cd991122821f8";
var redirect_uri = "https://www.google.com.br";

function Logar(){
    var scopes = 'user-read-private user-read-email';
window.location.href = "https://accounts.spotify.com/authorize" +
  '?response_type=code' +
  '&client_id=' + client_id +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent(redirect_uri);
};