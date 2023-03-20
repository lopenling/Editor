import { getSession } from "~/services/session.server";
var CryptoJS = require("crypto-js");
import randomString from "randomstring";
async function getNonce() {
  let nonce;
  let session = await getSession();
  if (session.has("sso_nonce")) {
    nonce = session.get("sso_nonce");
  } else {
    nonce = randomString.generate({
      length: 32,
    });
    console.log(nonce);
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
  return url;
};
