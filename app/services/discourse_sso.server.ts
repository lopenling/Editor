import { getSession } from "~/services/session.server";
var CryptoJS = require("crypto-js");
var randomString = function (length: number) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
async function getNonce() {
  let nonce;
  let session = await getSession();
  if (session.has("sso_nonce")) {
    nonce = session.get("sso_nonce");
  } else {
    nonce = randomString(32);
    session.set("sso_nonce", nonce);
  }
  return nonce;
}

export let redirectDiscourse = async function () {
  let url = DISCOURSE_SSO_LOGIN_URL;
  let nonce = await getNonce();
  let return_url = DISCOURSE_SSO_REDIRECT;
  let payload = `nonce=${nonce}&return_sso_url=${return_url}`;
  let payloadBase64 = btoa(payload);
  var encoder = new TextEncoder();
  var encodedText = encoder.encode(payloadBase64);
  var decodedText = new TextDecoder().decode(encodedText);

  var hmac = CryptoJS.HmacSHA256(decodedText, DISCOURSE_API_KEY);
  var hexDigest = CryptoJS.enc.Hex.stringify(hmac);
  var signature = hexDigest;

  let qs = new URLSearchParams({
    sso: payloadBase64,
    sig: signature,
  }).toString();
  url = url + "?" + qs;
  console.log(url);
  return url;
};
