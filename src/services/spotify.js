const spotifyLogin = async () => {
  const clientId = "f26dbd3c36bb4fad814092f47282ddc7";
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  let verified = localStorage.getItem("verifier");
  let expired = false;

  // Check if token in localStorage is more than a month old

  if (verified) {
    let verifiedObject = JSON.parse(verified);
    expired = Date.now() - verifiedObject.timestamp > 2629746000;
  }

  if (expired || (!verified && !code)) {
    redirectToAuthCodeFlow(clientId);
  }

  // else {
  //   // const accessToken = await getAccessToken(clientId, code);
  //   // const profile = await fetchProfile(accessToken);
  //   // populateUI(profile); Use for displaying Spotify data
  // }
};

export async function redirectToAuthCodeFlow(clientId) {
  const verifier = generateCodeVerifier(128);
  let timestamp = Date.now();
  const challenge = await generateCodeChallenge(verifier);

  let object = {
    verifier: verifier,
    timestamp: timestamp,
  };

  localStorage.setItem("verifier", JSON.stringify(object));

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("response_type", "code");
  params.append("redirect_uri", "https://taoty.co.uk/");
  params.append("scope", "user-read-private user-read-email");
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

async function generateCodeChallenge(codeVerifier) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function getAccessToken(clientId, code) {
  const verifier = JSON.parse(localStorage.getItem("verifier"));

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", "http://localhost:3000/");
  params.append("code_verifier", verifier.verifier);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const { access_token } = await result.json();
  return access_token;
}

// async function fetchProfile(token) {
//   const result = await fetch("https://api.spotify.com/v1/me", {
//     method: "GET",
//     headers: { Authorization: `Bearer ${token}` },
//   });

//   return await result.json();
// }

// function populateUI(profile) {
//   document.getElementById("spotify-name").innerText = profile.display_name;
// }

export default spotifyLogin;
