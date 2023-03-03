import { redirect } from "@remix-run/server-runtime";
import { redirectDiscourse } from "~/services/discourse_sso.server";
import {
  createCookie,
  createCloudflareKVSessionStorage,
} from "@remix-run/cloudflare";
// let secret = process.env.COOKIE_SECRET;
// if (!secret) {
//   throw new Error("set a COOKIE_SECRET in env");
// }

const sessionCookie = createCookie("__session", {
  secrets: ["r3m1xr0ck5"],
  sameSite: true,
});

const { getSession, commitSession, destroySession } =
  createCloudflareKVSessionStorage({
    // The KV Namespace where you want to store sessions
    kv: SESSIONS,
    cookie: sessionCookie,
  });

export async function getUserSession(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  let user = session.get("user");

  return user;
}
export async function destroyUserSession(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  session.set("user", null);
  return await destroySession(session, { sameSite: "lax" });
}

export async function login(request: Request, next: any, redirectTo: string) {
  let session = await getSession(request.headers.get("Cookie"));
  const user = session.get("user");
  if (!user) {
    let url = await redirectDiscourse();
    session.set("success-redirect", redirectTo);
    const headers = { "set-cookie": await commitSession(session) };
    return redirect(url, { headers });
  }
  return next(session);
}

export { getSession, commitSession, destroySession };
