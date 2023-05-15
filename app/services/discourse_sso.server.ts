import { getSession } from "~/services/session.server";
var CryptoJS = require("crypto-js");

function randomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

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

export let redirectDiscourse = async function (sso_redirect: string) {
  let url = process.env.DISCOURSE_SSO_LOGIN_URL;
  let nonce = await getNonce();
  let return_url = sso_redirect;
  let payload = `nonce=${nonce}&return_sso_url=${return_url}`;
  let payloadBase64 = btoa(payload);
  var encoder = new TextEncoder();
  var encodedText = encoder.encode(payloadBase64);
  var decodedText = new TextDecoder().decode(encodedText);

  var hmac = CryptoJS.HmacSHA256(decodedText, process.env.DISCOURSE_API_KEY);
  var hexDigest = CryptoJS.enc.Hex.stringify(hmac);
  var signature = hexDigest;

  let qs = new URLSearchParams({
    sso: payloadBase64,
    sig: signature,
  }).toString();
  url = url + "?" + qs;
  return url;
};
