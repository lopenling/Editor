import {
  ActionFunction,
  LoaderFunction,
  redirect,
} from "@remix-run/server-runtime";
import {
  commitSession,
  destroyUserSession,
  getSession,
  getUserSession,
  login,
} from "~/services/session.server";
import { createUserInDB, findUserByUsername } from "~/model/user";
import { logout } from "~/services/discourseApi";

export let loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  const url = new URL(request.url);
  const sso = url.searchParams.get("sso");
  const sig = url.searchParams.get("sig");
  if (sso && sig) {
    let payload = atob(sso);
    let decoded = unescape(payload);
    let params = new URLSearchParams(decoded);
    if (!params.get("nonce")) {
      throw new Error("lopenling server login problem");
    }
    try {
      let email = params.get("email");
      let admin = params.get("admin");
      let name = params.get("name");
      let username = params.get("username");
      let avatarUrl = params.get("avatar_url");
      let external_id = params.get("external_id");
      if (avatarUrl === null) {
        let url = DISCOURSE_SITE + `/u/${username}.json`;
        let result = await fetch(url);
        let res = await result.json();
        avatarUrl =
          "http://lopenling.org" +
          res?.user?.avatar_template.replace("{size}", "30");
      }

      if (!email || !name || !username) {
        throw new Error("discourse SSO returned error URL");
      }
      let userData = null;
      let id = 0;
      let isUserInDatabase = await findUserByUsername(username);
      console.log(isUserInDatabase);
      if (isUserInDatabase === null) {
        let isAdmin = admin === "true" ? true : false;
        userData = await createUserInDB(
          username,
          name,
          email,
          isAdmin,
          avatarUrl
        );
        id = userData.id;
      } else {
        if (email) {
          try {
            let findUserInDatabase = await findUserByUsername(username);
            id = findUserInDatabase.id;
          } catch (e) {
            throw new Error("User not available in Database");
          }
        }
      }
      session.set("user", {
        id,
        email,
        admin,
        name,
        username,
        avatarUrl,
        external_id,
      });
    } catch (e) {
      session.flash("error", {
        error: e,
      });
    }
  }
  let redirectUrl = session.data["success-redirect"]
    ? session.data["success-redirect"].redirectTo
    : "/";
  return redirect(redirectUrl, {
    headers: {
      "set-cookie": await commitSession(session, { sameSite: "lax" }),
    },
  });
};

export let action: ActionFunction = async ({ request }) => {
  const user = await getUserSession(request);
  const body = await request.formData();
  let { redirectTo, _action, ...values } = Object.fromEntries(body);
  if (!redirectTo) {
    throw new Error("no redirect in form");
  }
  redirectTo = redirectTo as string;
  if (_action === "logout") {
    return redirect(redirectTo, {
      headers: {
        "set-cookie": await destroyUserSession(request),
      },
    });
  }
  if (_action === "login") {
    if (!user) {
      let requireSession = await login(
        request,
        (session: any) => {
          return session;
        },
        redirectTo
      );
      return requireSession;
    }
    return redirect(redirectTo);
  }
  return null;
};

export default function Login() {
  return <div>signing in</div>;
}
