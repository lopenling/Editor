import { redirect } from "@remix-run/server-runtime";
import { redirectDiscourse } from "~/services/discourse_sso.server";
// import {
//   createCookie,
//   createCloudflareKVSessionStorage,
// } from "@remix-run/cloudflare";
import { createCookieSessionStorage } from "@remix-run/node";
import { logout } from "./discourseApi";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      // Expires can also be set (although maxAge overrides it when used in combination).
      // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
      //
      // expires: new Date(Date.now() + 60_000),
      secrets: ["r3m1xr0ck5"],
      sameSite: "lax",
      maxAge: 43200, // this is half day in sec
      secure: true,
    },
  });

export async function getUserSession(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  let user = session.get("user");

  return user;
}

export async function destroyUserSession(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  let external_id = session.get("user").external_id;
  await logout(external_id);
  session.set("user", null);
  return await destroySession(session, { sameSite: "lax" });
}

export async function login(request: Request, next: any, redirectTo: string) {
  let session = await getSession(request.headers.get("Cookie"));
  const user = session.get("user");
  if (!user) {
    let url = await redirectDiscourse();
    session.set("success-redirect", { redirectTo });
    const headers = {
      "set-cookie": await commitSession(session, { sameSite: "lax" }),
    };
    return redirect(url, { headers });
  }
  return next(session);
}

export { getSession, commitSession, destroySession };
