var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// empty-module:./Reply.client
var require_Reply = __commonJS({
  "empty-module:./Reply.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:./AudioPlayer.client
var require_AudioPlayer = __commonJS({
  "empty-module:./AudioPlayer.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:./AudioRecorder.client
var require_AudioRecorder = __commonJS({
  "empty-module:./AudioRecorder.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:./tribute.client
var require_tribute = __commonJS({
  "empty-module:./tribute.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:./component/SearchString.client
var require_SearchString = __commonJS({
  "empty-module:./component/SearchString.client"(exports, module2) {
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error, "how do i get here?");
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/component/Layout/ErrorPage.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function ErrorPage({ message }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mb-4 text-gray-700", children: message }, void 0, !1, {
          fileName: "app/component/Layout/ErrorPage.tsx",
          lineNumber: 13,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "a",
          {
            href: "/",
            style: { textDecoration: "none", marginLeft: 10 },
            className: " rounded bg-red-500 px-4 py-2 font-bold text-white no-underline hover:bg-red-600",
            children: "[Home page]"
          },
          void 0,
          !1,
          {
            fileName: "app/component/Layout/ErrorPage.tsx",
            lineNumber: 14,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "img",
          {
            src: "https://st.depositphotos.com/1006899/2650/i/600/depositphotos_26505551-stock-photo-error-metaphor.jpg",
            alt: "errorMessage"
          },
          void 0,
          !1,
          {
            fileName: "app/component/Layout/ErrorPage.tsx",
            lineNumber: 21,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/component/Layout/ErrorPage.tsx",
      lineNumber: 6,
      columnNumber: 5
    },
    this
  );
}

// app/services/session.server.ts
var import_server_runtime = require("@remix-run/server-runtime");

// app/services/discourse_sso.server.ts
var CryptoJS = require("crypto-js");
function randomString(length) {
  let result = "", characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", charactersLength = characters.length, counter = 0;
  for (; counter < length; )
    result += characters.charAt(Math.floor(Math.random() * charactersLength)), counter += 1;
  return result;
}
async function getNonce() {
  let nonce, session = await getSession();
  return session.has("sso_nonce") ? nonce = session.get("sso_nonce") : (nonce = randomString(32), session.set("sso_nonce", nonce)), nonce;
}
var redirectDiscourse = async function(sso_redirect) {
  let url = process.env.DISCOURSE_SSO_LOGIN_URL, payload = `nonce=${await getNonce()}&return_sso_url=${sso_redirect}`, payloadBase64 = btoa(payload);
  var encoder = new TextEncoder(), encodedText = encoder.encode(payloadBase64), decodedText = new TextDecoder().decode(encodedText), hmac = CryptoJS.HmacSHA256(decodedText, process.env.DISCOURSE_API_KEY), hexDigest = CryptoJS.enc.Hex.stringify(hmac), signature = hexDigest;
  let qs = new URLSearchParams({
    sso: payloadBase64,
    sig: signature
  }).toString();
  return url = url + "?" + qs, url;
};

// app/services/session.server.ts
var import_node2 = require("@remix-run/node");

// app/constants.ts
var ForumLink = "https://forum.lopenling.org";

// app/services/discourseApi.ts
var DiscourseApi = class {
  constructor(username = "") {
    if (!process.env.DISCOURSE_API_KEY || !process.env.DISCOURSE_SITE)
      throw new Error("asign api and url  in env");
    this.DiscourseUrl = process.env.DISCOURSE_SITE, this.apiKey = process.env.DISCOURSE_API_KEY, this.username = username, this.category = process.env.DISCOURSE_QA_CATEGORY_ID, this.categoryName = process.env.DISCOURSE_QA_CATEGORY_NAME, this.origin = process.env.ORIGIN_LOCATION;
  }
  authHeader(admin = !1) {
    return {
      "Api-Key": this.apiKey,
      "Api-Username": admin ? "tenkus47" : this.username
    };
  }
  async fetchCategoryData() {
    let url = `${this.DiscourseUrl}/c/${this.categoryName}/${this.category}.json`;
    try {
      return await (await fetch(url)).json();
    } catch {
      throw new Error("discource category Api not working, check if the disource forum works properly");
    }
  }
  async fetchCategoryList(id) {
    let categories = await (await fetch(`${this.DiscourseUrl}/categories.json?include_subcategories=true`)).json(), filterCategory = categories == null ? void 0 : categories.category_list.categories.find((category) => (category == null ? void 0 : category.id) === parseInt(id));
    return filterCategory.subcategory_ids.length ? filterCategory.subcategory_list : null;
  }
  async fetchposts(topicId) {
    if (topicId) {
      console.log(...oo_oo("9244a73c_0", topicId));
      let res = await fetch(`${this.DiscourseUrl}/t/${topicId}/posts.json`);
      return res.status !== 200 ? {} : await res.json();
    }
  }
  async fetchPostReplies(postId) {
    if (postId)
      return await (await fetch(`${this.DiscourseUrl}/posts/${postId}/replies.json`)).json();
  }
  async addCategory(categoryName, parent_category_id) {
    let authHeaders = this.authHeader(!0);
    var randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
    let newCategoryData = {
      name: categoryName.trim(),
      color: randomColor(),
      text_color: randomColor(),
      parent_category_id
    }, queryParams = new URLSearchParams(newCategoryData).toString();
    try {
      return await (await fetch(`${this.DiscourseUrl}/categories.json?` + queryParams, {
        method: "POST",
        headers: authHeaders
      })).json();
    } catch (e) {
      throw console.error("Failed to create category:", e), e;
    }
  }
  async addTopic(threadId, category_id, topic_name, bodyContent, textId, order, audioUrl) {
    let auth_headers = this.authHeader(), url = `${this.origin}/text/${textId}/page/${order}/posts?thread=${threadId}`, post_text = `
<p>
<blockquote>${addLinktoQuestion(topic_name, url)}</blockquote>
${bodyContent}</p>
`;
    audioUrl && audioUrl !== "" && (post_text += `<audio controls><source src="${audioUrl}" type="audio/webm"></audio>`);
    let new_Topic_data = {
      title: topic_name + "-" + textId,
      category: category_id,
      raw: post_text
    }, queryParams = new URLSearchParams(new_Topic_data).toString(), data = await (await fetch(`${this.DiscourseUrl}/posts.json?${queryParams}`, {
      method: "POST",
      headers: auth_headers
    })).json();
    if (data != null && data.errors)
      throw new Error("Post cannot be created due to dublication!" + data.errors);
    return data;
  }
  async createPost(TopicId, postString, audioUrl) {
    let auth_headers = this.authHeader(), audioSegment = audioUrl ? `<audio controls id='audio_lopenling'>
  <source src="${audioUrl}" type="audio/wav">
</audio>` : "", raw = `<p>
    ${postString + audioSegment}
    </p>
    `;
    try {
      let newPostData = {
        topic_id: TopicId,
        raw,
        reply_to_post_number: 1
      }, params = new URLSearchParams(newPostData).toString();
      return await fetch(`${this.DiscourseUrl}/posts.json?` + params, {
        method: "POST",
        headers: auth_headers
      });
    } catch (e) {
      console.log(...oo_oo("9244a73c_1", e));
    }
  }
  async updatePost(postId, content, audioUrl) {
    let auth_headers = this.authHeader(), audioSegment = audioUrl ? `<br/><audio controls id='audio_lopenling'>
  <source src="${audioUrl}" type="audio/wav">
</audio>` : "", raw = `<p>
    ${content + audioSegment}
    </p>
    `;
    try {
      let formData = new FormData();
      formData.append("post[raw]", raw), formData.append("post[edit_reason]", "nothing special");
      let response = await fetch(`${this.DiscourseUrl}/posts/${postId}.json?`, {
        method: "PUT",
        headers: auth_headers,
        body: formData
      });
    } catch (e) {
      console.log(...oo_oo("9244a73c_2", e));
    }
  }
  async deletePost(postId) {
    let auth_headers = this.authHeader();
    try {
      let response = await fetch(`${this.DiscourseUrl}/posts/${postId}.json`, {
        method: "DELETE",
        headers: auth_headers
      });
      return console.log(...oo_oo("9244a73c_3", response)), response.status;
    } catch (e) {
      console.log(...oo_oo("9244a73c_4", e));
    }
  }
  async deleteTopic(id) {
    let auth_headers = this.authHeader();
    try {
      return (await fetch(`${this.DiscourseUrl}/t/${id}.json`, {
        method: "DELETE",
        headers: auth_headers
      })).status;
    } catch (e) {
      throw new Error("cannot delete topic on discourse" + e);
    }
  }
  async logout(id) {
    let auth_headers = this.authHeader(!0);
    try {
      let url = `${this.DiscourseUrl}/admin/users/${id}/log_out`;
      return await fetch(url, {
        method: "POST",
        headers: auth_headers
      });
    } catch (e) {
      console.log(...oo_oo("9244a73c_5", e));
    }
  }
};
async function createThread(userName, textTitle, blockquoteArea, postContent, parentCategoryId, textId, order, audioUrl, threadId) {
  if (!textTitle || !blockquoteArea || !postContent)
    throw new Error("failed to access Topic Id");
  let api = new DiscourseApi(userName), categories = await api.fetchCategoryList(parentCategoryId);
  textTitle.length > 40 && (textTitle = textTitle.substring(0, 40) + `_text_${textId}`);
  let categoryId = 0, category = categories.find((c) => c.name === textTitle.trim());
  return category ? categoryId = category.id : categoryId = (await api.addCategory(textTitle, parseInt(parentCategoryId))).category.id, await api.addTopic(threadId, categoryId, blockquoteArea, postContent, textId, order, audioUrl);
}
function addLinktoQuestion(question, url) {
  return `<a href="${url}" target='_blank'>${question}</a>`;
}
async function deleteDiscourseTopic(userName, topicId) {
  return new DiscourseApi(userName).deleteTopic(topicId);
}
async function getposts(topicId) {
  return await new DiscourseApi().fetchposts(topicId);
}
async function createPost(topicId, audioUrl, postString, username) {
  return new DiscourseApi(username).createPost(topicId, postString, audioUrl);
}
async function updateDiscoursePost(postId, newContent, audioUrl, username) {
  return new DiscourseApi(username).updatePost(postId, newContent, audioUrl);
}
async function deletePost(postId, username) {
  return new DiscourseApi(username).deletePost(postId);
}
async function logout(id) {
  return await new DiscourseApi().logout(id);
}
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/services/session.server.ts
var { getSession, commitSession, destroySession } = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    secrets: ["r3m1xr0ck5"],
    sameSite: "lax",
    maxAge: 43200,
    secure: !0
  }
});
async function getUserSession(request) {
  return (await getSession(request.headers.get("Cookie"))).get("user");
}
async function destroyUserSession(request) {
  let session = await getSession(request.headers.get("Cookie")), external_id = session.get("user").external_id, discourse = await logout(external_id);
  return (discourse == null ? void 0 : discourse.status) === 200 ? await destroySession(session, { sameSite: "lax" }) : null;
}
async function login(request, next, redirectTo) {
  let session = await getSession(request.headers.get("Cookie"));
  if (!session.get("user")) {
    let url = await redirectDiscourse(request.url);
    session.set("success-redirect", { redirectTo });
    let headers2 = {
      "set-cookie": await commitSession(session, { sameSite: "lax" })
    };
    return (0, import_server_runtime.redirect)(url, { headers: headers2 });
  }
  return next(session);
}

// app/styles/globalStyle.css
var globalStyle_default = "/build/_assets/globalStyle-CMGT3VKI.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-5DVHJ7VP.css";

// app/styles/tribute.css
var tribute_default = "/build/_assets/tribute-RIGBY65I.css";

// app/root.tsx
var import_react_littera = require("@assembless/react-littera"), import_recoil = require("recoil"), import_framer_motion = require("framer-motion");

// app/services/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), db = global.__db__, db.$connect();

// app/model/user.ts
async function getAllUser() {
  try {
    return await db.user.findMany();
  } catch (e) {
    return e;
  }
}
async function isUserPresent(username) {
  return await db.user.findUnique({
    where: {
      username
    },
    include: {
      likedPost: !0,
      preference: !0
    }
  });
}
async function getUser(username) {
  if (!username)
    return null;
  try {
    return await db.user.findUnique({
      where: {
        username
      },
      include: {
        likedPost: !0,
        preference: !0
      }
    });
  } catch (e) {
    return e;
  }
}
async function createUserInDB(username, name, email, isAdmin, avatarUrl) {
  try {
    return await db.user.create({
      data: {
        username,
        name,
        email,
        isAdmin,
        avatarUrl,
        preference: {
          create: {
            theme: "light",
            language: "en"
          }
        }
      }
    });
  } catch (e) {
    return "user Cannot be created" + e;
  }
}

// node_modules/react-notifications-component/dist/theme.css
var theme_default = "/build/_assets/theme-IHEDUCN4.css";

// node_modules/nprogress/nprogress.css
var nprogress_default = "/build/_assets/nprogress-VU4VAFN5.css";

// app/root.tsx
var import_react3 = require("react"), import_nprogress2 = __toESM(require("nprogress")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function meta() {
  return [
    { title: "Lopenling App" },
    {
      name: "description",
      content: "annotation of text and discussion on budhist text"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    },
    { property: "og:title", content: "Lopenling App" }
  ];
}
var loader = async ({ request }) => {
  let userSession = await getUserSession(request);
  return userSession ? { user: await getUser(userSession.username) } : { user: null };
};
function links() {
  return [
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/png"
    },
    { rel: "stylesheet", href: tailwind_default, as: "style" },
    { rel: "stylesheet", href: globalStyle_default, as: "style" },
    { rel: "stylesheet", href: theme_default, as: "style" },
    { rel: "stylesheet", href: tribute_default, as: "style" },
    { rel: "stylesheet", href: nprogress_default }
  ];
}
function ErrorBoundary() {
  let error = (0, import_react2.useRouteError)();
  return (0, import_react2.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: error.status }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ErrorPage, { message: error.data }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) : error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ErrorPage, { message: error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "The stack trace is:" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.stack }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 76,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 83,
    columnNumber: 12
  }, this);
}
function App() {
  var _a, _b;
  let data = (0, import_react2.useLoaderData)(), navigation = (0, import_react2.useNavigation)(), fetchers = (0, import_react2.useFetchers)(), state = (0, import_react3.useMemo)(
    function() {
      return [navigation.state, ...fetchers.map((fetcher) => fetcher.state)].every((state2) => state2 === "idle") ? "idle" : "loading";
    },
    [navigation.state, fetchers]
  );
  return (0, import_react3.useEffect)(() => {
    state === "loading" && import_nprogress2.default.start(), state === "idle" && import_nprogress2.default.done();
  }, [navigation.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { className: ((_b = (_a = data.user) == null ? void 0 : _a.preference) == null ? void 0 : _b.theme) || "light", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "UTF-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css", rel: "stylesheet" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "relative max-h-[100vh] overflow-x-hidden  scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900 dark:bg-gray-600 dark:text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_littera.LitteraProvider, { locales: ["en_US", "bo_TI"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_framer_motion.AnimatePresence, { mode: "wait", initial: !1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_recoil.RecoilRoot, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Outlet, { context: { user: data.user } }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 117,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 116,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.ScrollRestoration, { getKey: (location) => location.pathname }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

// app/routes/text.$textId.page.$pageId.posts.tsx
var text_textId_page_pageId_posts_exports = {};
__export(text_textId_page_pageId_posts_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => PostContainer,
  loader: () => loader2
});
var import_react20 = require("react");

// app/features/Post/PostForm.tsx
var import_react18 = require("@remix-run/react");

// app/features/Post/Post.tsx
var import_react16 = require("react"), import_react17 = require("@remix-run/react");

// app/locales/useLitteraTranslations.ts
var import_react_littera2 = require("@assembless/react-littera");

// app/assets/locale/en.json
var en_default = {
  language: "Language",
  search: "Search",
  searchText: "Search Text",
  comment: "Comment",
  question: "Question",
  filter: "Filter",
  fontSize: "Font size",
  reply: "Reply",
  replies: "Replies",
  login: "log in",
  signup: "sign up",
  logout: "log out",
  narthang: "narthang",
  peking: "peking",
  chone: "chone",
  derge: "derge"
};

// app/assets/locale/bo.json
var bo_default = {
  language: "\u0F66\u0F90\u0F51\u0F0B\u0F61\u0F72\u0F42\u0F0B",
  search: "\u0F60\u0F5A\u0F7C\u0F63\u0F0D",
  searchText: "\u0F54\u0F51\u0F0B\u0F46\u0F0B\u0F60\u0F5A\u0F7C\u0F63\u0F0D",
  comment: "\u0F60\u0F42\u0FB2\u0F7A\u0F63\u0F0B\u0F54\u0F0D",
  question: "\u0F51\u0FB2\u0F72\u0F0B\u0F56\u0F0D",
  filter: "\u0F5A\u0F42\u0F66\u0F0D",
  fontSize: "\u0F61\u0F72\u0F42\u0F0B\u0F42\u0F5F\u0F74\u0F42\u0F66\u0F0B\u0F46\u0F7A\u0F0B\u0F46\u0F74\u0F44\u0FB2\u0F0D",
  reply: "\u0F63\u0F53\u0F0D",
  replies: "\u0F63\u0F53\u0F0D",
  login: "\u0F53\u0F44\u0F0B\u0F60\u0F5B\u0F74\u0F63\u0F0D",
  signup: "\u0F50\u0F7C\u0F0B\u0F60\u0F42\u0F7C\u0F51\u0F0D",
  logout: "\u0F55\u0FB1\u0F72\u0F62\u0F0B\u0F50\u0F7C\u0F53\u0F0D",
  narthang: "\u0F66\u0FA3\u0F62\u0F0B\u0F50\u0F44\u0F0C\u0F0D",
  peking: "\u0F54\u0F7A\u0F0B\u0F45\u0F72\u0F53\u0F0D",
  chone: "\u0F46\u0F7C\u0F0B\u0F42\u0F53\u0F66\u0F0D",
  derge: "\u0F66\u0FA1\u0F7A\u0F0B\u0F51\u0F42\u0F7A"
};

// app/locales/useLitteraTranslations.ts
var translationCodes = [
  { code: "en_US", name: "English" },
  { code: "bo_TI", name: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42" }
];
function translationList() {
  let translations = en_default;
  for (let key in en_default)
    translations = {
      ...translations,
      [key]: {
        en_US: en_default[key],
        bo_TI: bo_default.hasOwnProperty(key) ? bo_default[key] : en_default[key]
      }
    };
  return translations;
}
function uselitteraTranlation() {
  let translations = translationList();
  return (0, import_react_littera2.useLittera)(translations);
}

// app/features/Post/Replies.tsx
var import_react4 = require("@remix-run/react"), import_react5 = require("react"), import_Reply = __toESM(require_Reply()), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Replies({ postId, topicId, isCreator, type, replyCount, setReplyCount }) {
  let [replies, setReplies] = (0, import_react5.useState)([]), postListFetcher = (0, import_react4.useFetcher)();
  (0, import_react5.useEffect)(() => {
    postListFetcher.load(`/api/reply/${topicId}`);
  }, []);
  let data = postListFetcher.data;
  return (0, import_react5.useEffect)(() => {
    data && (setReplies(data.posts), setReplyCount(data.posts.length));
  }, [data]), data ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    replies.length < 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-gray-500 text-sm mb-2 ", children: "no reply yet" }, void 0, !1, {
      fileName: "app/features/Post/Replies.tsx",
      lineNumber: 34,
      columnNumber: 30
    }, this),
    replies.map((reply, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_Reply.default,
      {
        reply,
        isCreator,
        postId,
        type,
        showDivider: replies.length <= index + 1
      },
      reply.id,
      !1,
      {
        fileName: "app/features/Post/Replies.tsx",
        lineNumber: 37,
        columnNumber: 11
      },
      this
    ))
  ] }, void 0, !0, {
    fileName: "app/features/Post/Replies.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this) : null;
}
var Replies_default = Replies;

// app/features/Post/ReplyForm.tsx
var import_react10 = require("@remix-run/react"), import_react11 = require("react");

// app/component/UI/Button.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), Button = ({ label = "", ...props }) => {
  let color = props.type === "submit" ? "bg-green-400" : "bg-transparent", disabled = props.disabled === null ? !1 : props.disabled, textColor = props.type === "submit" ? "text-white" : "text-black";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "button",
    {
      className: `${color} ${textColor} cursor-pointer rounded-lg px-3 py-2 text-center text-xs  font-medium  focus:outline-none focus:ring-4 `,
      disabled,
      ...props,
      children: label
    },
    void 0,
    !1,
    {
      fileName: "app/component/UI/Button.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  );
};

// app/component/UI/MustLoggedIn.tsx
var import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function LogInMessage() {
  let loginFetcher = (0, import_react6.useFetcher)(), redirectTo = (0, import_react6.useLocation)().pathname, translation = uselitteraTranlation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "div",
    {
      id: "toast-success",
      className: "mb-4 flex w-full  items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
      role: "alert",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "svg",
            {
              "aria-hidden": "true",
              className: "h-5 w-5",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                  clipRule: "evenodd"
                },
                void 0,
                !1,
                {
                  fileName: "app/component/UI/MustLoggedIn.tsx",
                  lineNumber: 23,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/component/UI/MustLoggedIn.tsx",
              lineNumber: 16,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "sr-only", children: "Warning icon" }, void 0, !1, {
            fileName: "app/component/UI/MustLoggedIn.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/component/UI/MustLoggedIn.tsx",
          lineNumber: 15,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          loginFetcher.Form,
          {
            method: "POST",
            id: "login",
            action: "/auth/login",
            className: "ml-3 flex items-center text-sm font-normal",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", name: "redirectTo", defaultValue: redirectTo }, void 0, !1, {
                fileName: "app/component/UI/MustLoggedIn.tsx",
                lineNumber: 37,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "button",
                {
                  type: "submit",
                  name: "_action",
                  value: "login",
                  className: "text-sm font-medium capitalize leading-tight text-gray-900 dark:text-white",
                  children: translation.login
                },
                void 0,
                !1,
                {
                  fileName: "app/component/UI/MustLoggedIn.tsx",
                  lineNumber: 39,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/component/UI/MustLoggedIn.tsx",
            lineNumber: 31,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/component/UI/MustLoggedIn.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}

// app/component/UI/Skeleton.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Skeleton({ height, number }) {
  let items = Array.from({ length: number }, (_, index) => index + 1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { role: "status", className: "flex h-full w-full animate-pulse flex-col space-y-3.5", children: [
    items.map((l, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "div",
      {
        className: " mb-2.5 block w-full  rounded-sm border border-gray-200 bg-gray-200 p-6 shadow  hover:bg-gray-100 dark:border-gray-700  dark:bg-gray-700 dark:hover:bg-gray-700",
        style: { height }
      },
      "skeleton" + index,
      !1,
      {
        fileName: "app/component/UI/Skeleton.tsx",
        lineNumber: 11,
        columnNumber: 11
      },
      this
    )),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "sr-only", children: "Loading..." }, void 0, !1, {
      fileName: "app/component/UI/Skeleton.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/UI/Skeleton.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/component/UI/Spinner.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Spinner({ color = "blue", size = "md" }) {
  let width = 4, height = 4;
  return size === "md" && (width = 6, height = 6), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { role: "status", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "svg",
      {
        "aria-hidden": "true",
        className: `inline w-${width} h-${height} mr-2 animate-spin text-gray-200 dark:text-gray-600 fill-${color}-600`,
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "path",
            {
              d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
              fill: "currentColor"
            },
            void 0,
            !1,
            {
              fileName: "app/component/UI/Spinner.tsx",
              lineNumber: 17,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "path",
            {
              d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
              fill: "currentFill"
            },
            void 0,
            !1,
            {
              fileName: "app/component/UI/Spinner.tsx",
              lineNumber: 21,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/component/UI/Spinner.tsx",
        lineNumber: 10,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "sr-only", children: "Loading..." }, void 0, !1, {
      fileName: "app/component/UI/Spinner.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/UI/Spinner.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/component/UI/TextArea.tsx
var import_react7 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), TextArea = (props, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
  "textarea",
  {
    ref,
    ...props,
    className: "whitespace-pre-wrap block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
  },
  void 0,
  !1,
  {
    fileName: "app/component/UI/TextArea.tsx",
    lineNumber: 7,
    columnNumber: 5
  },
  this
), TextArea_default = (0, import_react7.forwardRef)(TextArea);

// app/component/UI/OnlineUserList/index.tsx
var import_react8 = require("react"), import_react_notifications_component = require("react-notifications-component"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), OnlineUsers = ({ onlineMembers, count }) => count < 2 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react_notifications_component.ReactNotifications, {}, void 0, !1, {
    fileName: "app/component/UI/OnlineUserList/index.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "fixed bottom-2 left-2 z-50 rounded p-2", children: onlineMembers && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex -space-x-4", children: onlineMembers.map(([id, info]) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "img",
    {
      title: info.username,
      className: "h-6 w-6 rounded-full border-2 border-white dark:border-gray-800",
      src: info.avatarUrl,
      alt: ""
    },
    id,
    !1,
    {
      fileName: "app/component/UI/OnlineUserList/index.tsx",
      lineNumber: 19,
      columnNumber: 19
    },
    this
  )) }, void 0, !1, {
    fileName: "app/component/UI/OnlineUserList/index.tsx",
    lineNumber: 16,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/component/UI/OnlineUserList/index.tsx",
    lineNumber: 15,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/component/UI/OnlineUserList/index.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/component/UI/OnlineUserList/index.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this), OnlineUserList_default = (0, import_react8.memo)(OnlineUsers);

// app/component/UI/Avatar.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Avatar({ title, alt, img, rounded, size }) {
  let px = 29;
  switch (size) {
    case "sm":
      px = 29;
      break;
    case "md":
      px = 40;
      break;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "img",
    {
      className: `${rounded && "rounded-full"}`,
      src: img,
      alt,
      title,
      style: { width: px, height: px }
    },
    void 0,
    !1,
    {
      fileName: "app/component/UI/Avatar.tsx",
      lineNumber: 20,
      columnNumber: 10
    },
    this
  );
}

// app/features/Media/index.tsx
var import_AudioPlayer = __toESM(require_AudioPlayer()), import_AudioRecorder = __toESM(require_AudioRecorder());

// app/features/Post/ReplyForm.tsx
var import_uuid = require("uuid");

// app/component/UI/TiptapInstance.tsx
var import_react9 = require("@tiptap/react");

// app/features/Editor/tiptap/index.ts
var import_extension_paragraph = __toESM(require("@tiptap/extension-paragraph")), import_extension_document = __toESM(require("@tiptap/extension-document")), import_extension_text = __toESM(require("@tiptap/extension-text")), import_extension_bold = __toESM(require("@tiptap/extension-bold")), import_extension_hard_break = __toESM(require("@tiptap/extension-hard-break")), import_extension_highlight = __toESM(require("@tiptap/extension-highlight")), import_extension_text_style = __toESM(require("@tiptap/extension-text-style")), import_extension_font_family = __toESM(require("@tiptap/extension-font-family")), import_extension_underline = __toESM(require("@tiptap/extension-underline")), import_extension_placeholder = __toESM(require("@tiptap/extension-placeholder")), import_extension_italic = __toESM(require("@tiptap/extension-italic"));

// app/features/Editor/tiptap/tiptap-extension/suggestion.ts
var import_core = require("@tiptap/core"), import_prosemirror_state = require("prosemirror-state"), replace = (replace2, editor, dispatch) => {
  dispatch(editor.state.tr.insertText(replace2, 1, 3));
}, Suggestion = (setter) => import_core.Mark.create({
  name: "suggestion",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return {
      color: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-color") || element.style.backgroundColor,
        renderHTML: (attributes) => attributes.color ? {
          "data-color": attributes.color,
          style: `background-color: ${attributes.color}; color: inherit`
        } : {}
      },
      id: {
        default: null,
        parseHTML: (element) => element.getAttribute("id"),
        renderHTML: (attributes) => ({
          id: attributes.id
        })
      },
      original: {
        default: null,
        parseHTML: (element) => element.getAttribute("original"),
        renderHTML: (attributes) => ({
          original: attributes.original
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "suggestion"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["suggestion", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setSuggestion: (attributes) => ({ commands }) => commands.setMark(this.name, attributes),
      toggleSuggestion: (attributes) => ({ commands }) => commands.toggleMark(this.name, attributes),
      unsetSuggestion: () => ({ commands }) => commands.unsetMark(this.name),
      replaceSuggestion: (term) => ({ editor, dispatch }) => (replace(term, editor, dispatch), !1)
    };
  },
  addProseMirrorPlugins() {
    return [
      new import_prosemirror_state.Plugin({
        props: {
          handleClick(view, pos, event) {
            let { schema, doc, tr } = view.state, range = (0, import_core.getMarkRange)(doc.resolve(pos), schema.marks.suggestion);
            if (!range)
              return !1;
            let clickedNode = event.target;
            setter(clickedNode == null ? void 0 : clickedNode.id);
            let [$start, $end] = [doc.resolve(range.from), doc.resolve(range.to)];
            return view.dispatch(tr.setSelection(new import_prosemirror_state.TextSelection($start, $end))), !0;
          }
        }
      })
    ];
  }
});

// app/features/Editor/tiptap/tiptap-extension/postMark.ts
var import_core2 = require("@tiptap/core"), import_prosemirror_state2 = require("prosemirror-state"), PostMark = (setter) => import_core2.Mark.create({
  name: "post",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return {
      color: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-color") || element.style.backgroundColor,
        renderHTML: (attributes) => attributes.color ? {
          "data-color": attributes.color,
          style: `background-color: ${attributes.color}; color: inherit`
        } : {}
      },
      id: {
        default: null,
        parseHTML: (element) => element.getAttribute("id"),
        renderHTML: (attributes) => ({
          id: attributes.id
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "post"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["post", (0, import_core2.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setPost: (attributes) => ({ commands }) => commands.setMark(this.name, attributes),
      togglePost: (attributes) => ({ commands }) => commands.toggleMark(this.name, attributes),
      unsetPost: () => ({ commands }) => commands.unsetMark(this.name)
    };
  },
  addProseMirrorPlugins() {
    return [
      new import_prosemirror_state2.Plugin({
        props: {
          handleClick(view, pos, event) {
            let { schema, doc, tr } = view.state, range = (0, import_core2.getMarkRange)(doc.resolve(pos), schema.marks.post);
            if (!range)
              return !1;
            let clickedNode = event.target;
            setter(clickedNode == null ? void 0 : clickedNode.id);
            let [$start, $end] = [doc.resolve(range.from), doc.resolve(range.to)];
            return view.dispatch(tr.setSelection(new import_prosemirror_state2.TextSelection($start, $end))), !0;
          }
        }
      })
    ];
  }
}), postMark_default = PostMark;

// app/features/Editor/tiptap/tiptap-extension/searchAndReplace.ts
var import_core3 = require("@tiptap/core"), import_prosemirror_view = require("prosemirror-view"), import_prosemirror_state3 = require("prosemirror-state"), getRegex = (s, disableRegex, caseSensitive) => RegExp(disableRegex ? s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") : s, caseSensitive ? "gu" : "gui");
function processSearches(doc, searchTerm, searchResultClass) {
  let decorations = [], textNodesWithPosition = [], results = [], index = 0;
  if (!searchTerm)
    return { decorationsToReturn: import_prosemirror_view.DecorationSet.empty, results: [] };
  doc == null || doc.descendants((node, pos) => {
    node.isText ? textNodesWithPosition[index] ? textNodesWithPosition[index] = {
      text: textNodesWithPosition[index].text + node.text,
      pos: textNodesWithPosition[index].pos
    } : textNodesWithPosition[index] = {
      text: `${node.text}`,
      pos
    } : index += 1;
  }), textNodesWithPosition = textNodesWithPosition.filter(Boolean);
  for (let i = 0; i < textNodesWithPosition.length; i += 1) {
    let { text, pos } = textNodesWithPosition[i], matches = Array.from(text.matchAll(searchTerm)).filter(([matchText]) => matchText.trim());
    for (let j = 0; j < matches.length; j += 1) {
      let m = matches[j];
      if (m[0] === "")
        break;
      m.index !== void 0 && results.push({
        from: pos + m.index,
        to: pos + m.index + m[0].length
      });
    }
  }
  for (let i = 0; i < results.length; i += 1) {
    let r = results[i];
    decorations.push(import_prosemirror_view.Decoration.inline(r.from, r.to, { class: searchResultClass }));
  }
  return {
    decorationsToReturn: import_prosemirror_view.DecorationSet.create(doc, decorations),
    results
  };
}
var searchAndReplacePluginKey = new import_prosemirror_state3.PluginKey("searchAndReplacePlugin"), SearchAndReplace = import_core3.Extension.create({
  name: "searchAndReplace",
  addOptions() {
    return {
      searchResultClass: "search-result",
      caseSensitive: !1,
      disableRegex: !1
    };
  },
  addStorage() {
    return {
      searchTerm: "",
      replaceTerm: "",
      results: [],
      lastSearchTerm: ""
    };
  },
  addCommands() {
    return {
      setSearchTerm: (searchTerm) => ({ editor }) => (editor.storage.searchAndReplace.searchTerm = searchTerm, !1),
      setReplaceTerm: (replaceTerm) => ({ editor }) => (editor.storage.searchAndReplace.replaceTerm = replaceTerm, !1)
    };
  },
  addProseMirrorPlugins() {
    let editor = this.editor, { searchResultClass, disableRegex, caseSensitive } = this.options, setLastSearchTerm = (t) => editor.storage.searchAndReplace.lastSearchTerm = t;
    return [
      new import_prosemirror_state3.Plugin({
        key: searchAndReplacePluginKey,
        state: {
          init: () => import_prosemirror_view.DecorationSet.empty,
          apply({ doc, docChanged }, oldState) {
            let { searchTerm, lastSearchTerm } = editor.storage.searchAndReplace;
            if (!docChanged && lastSearchTerm === searchTerm)
              return oldState;
            if (setLastSearchTerm(searchTerm), !searchTerm)
              return import_prosemirror_view.DecorationSet.empty;
            let { decorationsToReturn, results } = processSearches(
              doc,
              getRegex(searchTerm, disableRegex, caseSensitive),
              searchResultClass
            );
            return editor.storage.searchAndReplace.results = results, decorationsToReturn;
          }
        },
        props: {
          decorations(state) {
            return this.getState(state);
          }
        }
      })
    ];
  }
});

// app/features/Editor/tiptap/events.ts
var handleDOMEvents = {
  keydown: (v, event) => {
    let charCode = String.fromCharCode(event.which).toLowerCase(), copyPressed = (event.ctrlKey || event.metaKey) && charCode === "c";
    ![37, 38, 39, 40].includes(event.keyCode) && !copyPressed && event.preventDefault();
  },
  textInput: (v, evt) => {
    evt.preventDefault();
  },
  drop: (v, e) => {
    e.preventDefault();
  },
  dragstart: (v, e) => {
    e.preventDefault();
  },
  paste: (v, event) => {
    event.preventDefault(), console.log(...oo_oo2("24ce3447_0", v));
  }
}, editorProps = {
  handleDOMEvents,
  attributes: {
    inputmode: "none",
    "data-encoding": "UTF-8"
  }
}, events_default = editorProps;
function oo_cm2() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo2(i, ...v) {
  try {
    oo_cm2().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/component/UI/TiptapInstance.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), ContentEditableDiv = (props) => {
  let editor;
  return typeof document < "u" && (editor = (0, import_react9.useEditor)({
    extensions: [
      import_extension_document.default,
      import_extension_paragraph.default,
      import_extension_text.default,
      import_extension_bold.default,
      import_extension_font_family.default,
      import_extension_text_style.default,
      import_extension_italic.default,
      import_extension_underline.default,
      import_extension_placeholder.default.configure({
        placeholder: ({ node }) => props.placeholder
      }),
      import_extension_hard_break.default.configure({
        HTMLAttributes: {
          class: "pageBreak"
        }
      }),
      import_extension_highlight.default.configure({
        HTMLAttributes: {
          class: "highlight"
        }
      })
    ],
    editable: !0,
    onUpdate: async ({ editor: editor2 }) => {
      let newContent = editor2.getHTML();
      props.onChange(newContent);
    }
  })), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: editor ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react9.EditorContent, { editor }, void 0, !1, {
    fileName: "app/component/UI/TiptapInstance.tsx",
    lineNumber: 45,
    columnNumber: 19
  }, this) : null }, void 0, !1, {
    fileName: "app/component/UI/TiptapInstance.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this);
}, TiptapInstance_default = ContentEditableDiv;

// app/features/Post/ReplyForm.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function ReplyForm({ closeReply, topicId, updateReplyCount }) {
  let postFetcher = (0, import_react10.useFetcher)(), textareaRef = (0, import_react11.useRef)(null), loaderData = (0, import_react10.useLoaderData)(), [audio, setAudio] = (0, import_react11.useState)({ tempUrl: "", blob: null }), [textArea, setTextArea] = (0, import_react11.useState)("");
  (0, import_react11.useEffect)(() => {
    postFetcher.data && (updateReplyCount(), closeReply());
  }, [postFetcher.formData, loaderData.posts, topicId]), postFetcher.formData && textareaRef.current && (textareaRef.current.value = "");
  let handleSubmit = (e) => {
    e.preventDefault();
    var form_data = new FormData();
    audio.blob && form_data.append("file", audio.blob, `reply-${topicId}-${(0, import_uuid.v4)()}.wav`);
    let item = {
      postString: textArea,
      topicId
    };
    for (var key in item)
      form_data.append(key, item[key]);
    postFetcher.submit(form_data, {
      action: "/api/reply",
      method: "POST",
      encType: "multipart/form-data"
    });
  }, emptyTextField = textArea === "" || postFetcher.state !== "idle" || textArea === "<p></p>";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-1 flex justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "div",
      {
        style: {
          borderLeft: "4px solid #e5e7eb"
        }
      },
      void 0,
      !1,
      {
        fileName: "app/features/Post/ReplyForm.tsx",
        lineNumber: 52,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "form",
      {
        onSubmit: handleSubmit,
        className: "flex w-11/12 flex-col justify-center shadow-md ",
        style: {
          opacity: postFetcher.state !== "idle" ? 0.5 : 1,
          cursor: postFetcher.state !== "idle" ? "not-allowed" : "auto",
          minHeight: 100,
          padding: 14
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            TiptapInstance_default,
            {
              placeholder: "Write your reply here ...",
              onChange: setTextArea
            },
            void 0,
            !1,
            {
              fileName: "app/features/Post/ReplyForm.tsx",
              lineNumber: 67,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { id: "textArea", name: "postString", value: textArea, hidden: !0, required: !0 }, void 0, !1, {
            fileName: "app/features/Post/ReplyForm.tsx",
            lineNumber: 71,
            columnNumber: 9
          }, this),
          audio.tempUrl !== "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-2 flex w-full items-center gap-3 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_AudioPlayer.default, { src: audio.tempUrl }, void 0, !1, {
              fileName: "app/features/Post/ReplyForm.tsx",
              lineNumber: 75,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { onClick: () => setAudio({ tempUrl: "", blob: null }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z",
                className: "fill-gray-200"
              },
              void 0,
              !1,
              {
                fileName: "app/features/Post/ReplyForm.tsx",
                lineNumber: 78,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/features/Post/ReplyForm.tsx",
              lineNumber: 77,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/features/Post/ReplyForm.tsx",
              lineNumber: 76,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/features/Post/ReplyForm.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/features/Post/ReplyForm.tsx",
            lineNumber: 73,
            columnNumber: 11
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-2 flex justify-between gap-2", children: [
            audio.tempUrl === "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_AudioRecorder.default, { setAudio }, void 0, !1, {
              fileName: "app/features/Post/ReplyForm.tsx",
              lineNumber: 90,
              columnNumber: 35
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {}, void 0, !1, {
              fileName: "app/features/Post/ReplyForm.tsx",
              lineNumber: 90,
              columnNumber: 75
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex justify-end gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Button, { onClick: closeReply, type: "reset", label: "close" }, void 0, !1, {
                fileName: "app/features/Post/ReplyForm.tsx",
                lineNumber: 92,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                Button,
                {
                  type: "submit",
                  onClick: handleSubmit,
                  style: {
                    opacity: emptyTextField ? 0.3 : 1
                  },
                  disabled: emptyTextField,
                  label: postFetcher.state === "submitting" ? "submiting" : postFetcher.state === "loading" ? "post created" : "respond"
                },
                void 0,
                !1,
                {
                  fileName: "app/features/Post/ReplyForm.tsx",
                  lineNumber: 93,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/features/Post/ReplyForm.tsx",
              lineNumber: 91,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/features/Post/ReplyForm.tsx",
            lineNumber: 89,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/features/Post/ReplyForm.tsx",
        lineNumber: 57,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/features/Post/ReplyForm.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// app/features/Post/Post.tsx
var import_recoil4 = require("recoil");

// app/states.ts
var import_recoil2 = require("recoil"), audioPermission = (0, import_recoil2.atom)({
  key: "audioPermission",
  default: !1
}), ImageState = (0, import_recoil2.atom)({
  default: { show: !0, url: "", isPortrait: !1 },
  key: "showImage"
}), showTableContent = (0, import_recoil2.atom)({
  default: !1,
  key: "tableOfContent"
}), showSidebar = (0, import_recoil2.atom)({
  default: !1,
  key: "sidebar"
}), textInfo = (0, import_recoil2.atom)({
  key: "textName",
  default: {
    name: "",
    id: ""
  }
}), openSuggestionState = (0, import_recoil2.atom)({
  key: "openSuggestion",
  default: !1
}), selectedSuggestionThread = (0, import_recoil2.atom)({
  key: "selectedSuggestionThread",
  default: {
    id: ""
  }
}), selectedPostThread = (0, import_recoil2.atom)({
  key: "selectedPostThread",
  default: {
    id: ""
  }
}), shareState = (0, import_recoil2.atom)({
  key: "sharePost",
  default: !1
}), openFilterState = (0, import_recoil2.atom)({
  key: "openFilter",
  default: !1
}), showLatest = (0, import_recoil2.atom)({
  key: "latestFilter",
  default: !0
}), filterDataState = (0, import_recoil2.atom)({
  key: "filterData",
  default: {
    type: "all",
    date: { startDate: null, endDate: null },
    user: [],
    solved: "both"
  }
}), selectedTextOnEditor = (0, import_recoil2.atom)({
  key: "selectionSection",
  default: {
    type: "",
    start: 0,
    end: 0,
    content: ""
  }
});

// app/features/Editor/tiptap/markAction.ts
function removeMark(editor, id) {
  if (!editor)
    return null;
  let markID = id, { doc, selection } = editor == null ? void 0 : editor.state;
  doc.descendants((node, pos) => {
    node.marks && node.marks.forEach((mark) => {
      if (mark.attrs.id === markID) {
        let from = pos, to = pos + node.nodeSize;
        editor.view.dispatch(
          editor.view.state.tr.setSelection(editor.view.state.selection.constructor.near(editor.view.state.doc.resolve(from))).setSelection(editor.view.state.selection.constructor.near(editor.view.state.doc.resolve(to))).removeMark(from, to, mark.type)
        );
      }
    });
  });
}
function replaceMarkContent(editor, markID, content) {
  if (!editor)
    return null;
  let { doc, selection } = editor == null ? void 0 : editor.state;
  doc.descendants((node, pos) => {
    node.marks && node.marks.forEach((mark) => {
      if (mark.attrs.id === markID) {
        let from = pos, to = pos + node.nodeSize, trx = editor.view.state.tr.setSelection(editor.view.state.selection.constructor.near(editor.view.state.doc.resolve(from))).setSelection(editor.view.state.selection.constructor.near(editor.view.state.doc.resolve(to))), markType = editor.view.state.schema.marks.suggestion;
        editor.state.doc.textBetween(from, to, " ") !== content && editor.view.dispatch(
          trx.replaceWith(
            from,
            to,
            editor.view.state.schema.text(content, [
              markType.create({
                id: markID
              })
            ])
          )
        );
      }
    });
  });
}

// app/lib/copyToClipboard.ts
function copyToClipboard(text) {
  let textarea = document.createElement("textarea");
  textarea.value = text, textarea.style.position = "fixed", textarea.style.opacity = "0", document.body.appendChild(textarea), textarea.select();
  try {
    document.execCommand("copy"), console.log(...oo_oo3("caf15330_0", "Text copied to clipboard"));
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
  document.body.removeChild(textarea);
}
function oo_cm3() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo3(i, ...v) {
  try {
    oo_cm3().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/features/Post/component/FormWithAudio.tsx
var import_react12 = require("@remix-run/react"), import_react13 = require("react"), import_recoil3 = require("recoil");
var import_uuid2 = require("uuid");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function FormWithAudio({ fetcher, type, post, onClose = () => {
} }) {
  var _a, _b;
  let content = (post == null ? void 0 : post.content) ?? "", audioUrl = (post == null ? void 0 : post.audioUrl) ?? "", [audio, setAudio] = (0, import_react13.useState)({ tempUrl: audioUrl, blob: null }), [body, setBody] = (0, import_react13.useState)(content), [error, setError] = (0, import_react13.useState)(""), [selection, setSelection] = (0, import_recoil3.useRecoilState)(selectedTextOnEditor), data = (0, import_react12.useLoaderData)(), textName = data.text.name, order = data.order, isFormEmpty = body.length < 5 || body === "<p></p>", { editor } = (0, import_react12.useOutletContext)();
  (0, import_react13.useEffect)(() => {
    setBody(content || ""), setAudio({ tempUrl: audioUrl || "", blob: null }), setError("");
  }, [selection.start]);
  function validator() {
    let lengthOfSelection = selection.end - (selection == null ? void 0 : selection.start), errormessage = "";
    return audio.tempUrl !== "" && isFormEmpty ? errormessage = "ERROR : describe the audio" : isFormEmpty ? errormessage = "ERROR : write more than 5 character" : lengthOfSelection > 254 ? errormessage = "ERROR : selecting more than 255 letter not allowed" : body.length > 250 ? errormessage = "ERROR : content more than 255 letter not allowed" : errormessage = "", errormessage;
  }
  async function handleSubmit(e) {
    var _a2, _b2, _c;
    e.preventDefault();
    let errormessage = validator();
    if (errormessage && errormessage !== "")
      return setError(errormessage), null;
    let id = null;
    editor.isActive("post") ? id = (_a2 = editor.getAttributes("post")) == null ? void 0 : _a2.id : id = (0, import_uuid2.v4)();
    let item = {
      threadId: id,
      selectionSegment: selection.content,
      textId: (_b2 = data == null ? void 0 : data.text) == null ? void 0 : _b2.id,
      pageId: data == null ? void 0 : data.pageId,
      order,
      topic: textName,
      body,
      type: selection.type
    }, blob = audio == null ? void 0 : audio.blob;
    var form_data = new FormData();
    if (blob ? form_data.append("file", blob, `text-${(_c = data == null ? void 0 : data.text) == null ? void 0 : _c.id}-${(0, import_uuid2.v4)()}.wav`) : form_data.append("audioUrl", audio.tempUrl), type === "update") {
      form_data.append("body", body), form_data.append("action", "update"), form_data.append("postId", post == null ? void 0 : post.id);
      let responseData = await fetcher.submit(form_data, {
        method: "PATCH",
        action: "/api/post",
        encType: "multipart/form-data"
      });
      return responseData && onClose(), responseData;
    } else {
      for (var key in item)
        form_data.append(key, item[key]);
      if (selection) {
        let awaitdata = await fetcher.submit(form_data, {
          method: "POST",
          action: "/api/post",
          encType: "multipart/form-data"
        });
        awaitdata != null && awaitdata.message || (setSelection({ ...selection, type: "" }), editor.commands.setPost({
          id
        }));
      }
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(fetcher.Form, { className: "flex flex-col gap-3 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(TiptapInstance_default, { placeholder: "what are your thoughts?", value: body, onChange: (value) => setBody(value) }, void 0, !1, {
      fileName: "app/features/Post/component/FormWithAudio.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    audio.tempUrl !== "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex w-full items-center gap-3 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_AudioPlayer.default, { src: audio.tempUrl }, void 0, !1, {
        fileName: "app/features/Post/component/FormWithAudio.tsx",
        lineNumber: 119,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { onClick: () => setAudio({ tempUrl: "", blob: null }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z",
          className: "fill-gray-200"
        },
        void 0,
        !1,
        {
          fileName: "app/features/Post/component/FormWithAudio.tsx",
          lineNumber: 122,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/features/Post/component/FormWithAudio.tsx",
        lineNumber: 121,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/features/Post/component/FormWithAudio.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Post/component/FormWithAudio.tsx",
      lineNumber: 118,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/features/Post/component/FormWithAudio.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this) : null,
    error && error !== "" && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "font-sm text-red-500", children: error }, void 0, !1, {
      fileName: "app/features/Post/component/FormWithAudio.tsx",
      lineNumber: 133,
      columnNumber: 33
    }, this),
    ((_a = fetcher.data) == null ? void 0 : _a.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "font-sm text-red-500", children: (_b = fetcher.data) == null ? void 0 : _b.message }, void 0, !1, {
      fileName: "app/features/Post/component/FormWithAudio.tsx",
      lineNumber: 134,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      audio.tempUrl === "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_AudioRecorder.default, { setAudio }, void 0, !1, {
        fileName: "app/features/Post/component/FormWithAudio.tsx",
        lineNumber: 136,
        columnNumber: 33
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", {}, void 0, !1, {
        fileName: "app/features/Post/component/FormWithAudio.tsx",
        lineNumber: 136,
        columnNumber: 73
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          Button,
          {
            type: "reset",
            onClick: () => {
              setAudio({ tempUrl: "", blob: null }), setSelection({ ...selection, type: "" }), onClose();
            },
            style: { borderRadius: 24 },
            label: "cancel"
          },
          void 0,
          !1,
          {
            fileName: "app/features/Post/component/FormWithAudio.tsx",
            lineNumber: 139,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          Button,
          {
            style: { borderRadius: 24, opacity: isFormEmpty ? 0.3 : 1 },
            disabled: isFormEmpty,
            onClick: handleSubmit,
            type: "submit",
            label: "Respond"
          },
          void 0,
          !1,
          {
            fileName: "app/features/Post/component/FormWithAudio.tsx",
            lineNumber: 149,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/features/Post/component/FormWithAudio.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Post/component/FormWithAudio.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/Post/component/FormWithAudio.tsx",
    lineNumber: 114,
    columnNumber: 5
  }, this);
}

// app/lib/fullSearch.server.ts
var fullSearch = (textList, search_term) => {
  let results = [], left = parseInt((60 - search_term.length) / 2), delimiters = "\u0F0D\u0F0B ", delimiter_regex = new RegExp(`[${delimiters}]`, "g"), max_results = 0;
  for (let text of textList) {
    let content_length = text.content.length, content = text.content.replace(/<br\s*\/?\s*(class\s*=\s*['"]\S*['"])?\s*>/gi, `
`).replace(/(<([^>]+)>)/gi, ""), contentMatch = Array.from(content.matchAll(new RegExp(search_term, "g")));
    if (Array.from(text.text.name.matchAll(new RegExp(search_term, "g"))).length > 0 || contentMatch.length > 0) {
      let result = {
        textId: text.textId,
        order: text.order,
        name: text.text.name,
        results: [],
        total: 0,
        extra: !1
      };
      for (let m of contentMatch) {
        if (max_results === 0 || max_results > 0 && result.total < max_results) {
          let start = m.index - left;
          start < 0 && (start = 0);
          let end = start + 60;
          end > content_length && (end = content_length);
          let extract = content.substring(start, end), delimiterMatches = Array.from(extract.matchAll(delimiter_regex), (m2) => m2.index);
          if (delimiterMatches.length > 0) {
            let firstMatch = delimiterMatches[0];
            start += firstMatch;
          }
          if (delimiterMatches.length > 1) {
            let lastMatch = delimiterMatches[delimiterMatches.length - 1];
            end = start + lastMatch - delimiterMatches[0];
          } else
            end = extract.length;
          extract = extract.substring(0, end), result.results.push([m.index, extract]), result.total += 1, result.id = text.id;
        }
        if (result.total === max_results) {
          result.extra = !0;
          break;
        }
      }
      results.push(result);
    }
  }
  return results.sort((a, b) => b.total - a.total), results;
};

// app/lib/getFormatedDate.ts
var MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function getFormattedDate(date, prefomattedDate = !1, hideYear = !1) {
  let day = date.getDate(), month = MONTH_NAMES[date.getMonth()], year = date.getFullYear(), hours = date.getHours(), minutes = date.getMinutes();
  return minutes < 10 && (minutes = `0${minutes}`), prefomattedDate ? `${prefomattedDate}` : hideYear ? `${day} ${month}` : `${day} ${month} ${year}`;
}
function timeAgo(dateParam) {
  if (!dateParam)
    return null;
  let date = typeof dateParam == "object" ? dateParam : new Date(dateParam), DAY_IN_MS = 864e5, today = new Date(), yesterday = new Date(today - DAY_IN_MS), seconds = Math.round((today - date) / 1e3), minutes = Math.round(seconds / 60), isToday = today.toDateString() === date.toDateString(), isYesterday = yesterday.toDateString() === date.toDateString(), isThisYear = today.getFullYear() === date.getFullYear();
  switch (!0) {
    case seconds < 5:
      return "now";
    case seconds < 60:
      return `${seconds} seconds ago`;
    case seconds < 90:
      return "about a minute ago";
    case minutes < 60:
      return `${minutes} minutes ago`;
    case isToday:
      return getFormattedDate(date, "Today");
    case isYesterday:
      return getFormattedDate(date, "Yesterday");
    case isThisYear:
      return getFormattedDate(date, !1, !0);
    default:
      return getFormattedDate(date);
  }
}

// app/lib/index.ts
var import_diff_match_patch = __toESM(require("diff-match-patch")), import_react_device_detect = require("react-device-detect");

// app/services/pusher.server.ts
var import_pusher = __toESM(require("pusher")), pusher = new import_pusher.default({
  appId: process.env.app_id,
  key: process.env.key,
  secret: process.env.secret,
  cluster: process.env.cluster,
  useTLS: !0
}), pusher_server_default = pusher;

// app/lib/trigetPusherUpdate.server.ts
async function trigerUpdate(user, pageId) {
  if (pageId) {
    let channelId = `presence-text_${pageId}`;
    return await pusher_server_default.trigger(channelId, "update-app", {
      userId: user == null ? void 0 : user.id,
      userName: user == null ? void 0 : user.username
    });
  }
}
var trigetPusherUpdate_server_default = trigerUpdate;

// app/lib/index.ts
var import_tribute2 = __toESM(require_tribute());

// app/lib/containsTIbetanWord.ts
function containTibetanletter(str) {
  return /[\u0F00-\u0FFF]/.test(str);
}
var containsTIbetanWord_default = containTibetanletter;

// app/lib/index.ts
var isSmallScreen = import_react_device_detect.isMobile || import_react_device_detect.isTablet;

// app/features/Post/Post.tsx
var import_react_detect_click_outside = require("react-detect-click-outside");

// app/component/hooks/useFetcherPromise.tsx
var import_react14 = require("react"), import_react15 = require("@remix-run/react");
function useFetcherWithPromise() {
  let resolveRef = (0, import_react14.useRef)(), promiseRef = (0, import_react14.useRef)(), fetcher = (0, import_react15.useFetcher)();
  promiseRef.current || (promiseRef.current = new Promise((resolve) => {
    resolveRef.current = resolve;
  }));
  let resetResolver = (0, import_react14.useCallback)(() => {
    promiseRef.current = new Promise((resolve) => {
      resolveRef.current = resolve;
    });
  }, [promiseRef, resolveRef]), submit = (0, import_react14.useCallback)(
    async (...args) => (fetcher.submit(...args), promiseRef.current),
    [fetcher, promiseRef]
  );
  return (0, import_react14.useEffect)(() => {
    fetcher.data && fetcher.state === "idle" && (resolveRef.current(fetcher.data), resetResolver());
  }, [fetcher, resetResolver]), { ...fetcher, submit };
}

// app/features/Post/Post.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Post({ isOptimistic, post, showDivider }) {
  var _a, _b;
  let {
    id,
    creatorUser,
    created_at,
    content,
    likedBy,
    topic_id: topicId,
    type,
    replyCount,
    isSolved,
    threadId,
    audioUrl,
    selection
  } = post, [openReply, setOpenReply] = (0, import_react16.useState)(!1), [showReplies, setShowReplies] = (0, import_react16.useState)(!1), [effect, setEffect] = (0, import_react16.useState)(!1), [ReplyCount, setReplyCount] = (0, import_react16.useState)(replyCount), [edit, setEdit] = (0, import_react16.useState)(!1), [openEditMenu, setOpenEditMenu] = (0, import_react16.useState)(!1), { editor } = (0, import_react17.useOutletContext)(), { user } = (0, import_react17.useOutletContext)(), [selectedThreadId, setSelectedThreadId] = (0, import_recoil4.useRecoilState)(selectedPostThread), fetcher = useFetcherWithPromise(), translation = uselitteraTranlation(), isSelected = selectedThreadId.id === threadId, likedByMe = user ? likedBy.some((l) => l && l.username === user.username) : !1, handleSelectPost = (0, import_react16.useCallback)(
    (id2) => {
      setSelectedThreadId({
        id: id2
      });
    },
    [threadId]
  ), likeCount = fetcher.data ? (_a = fetcher.data) == null ? void 0 : _a.length : likedBy.length, likeInFetcher = (_b = fetcher == null ? void 0 : fetcher.formData) == null ? void 0 : _b.get("like");
  likedByMe = likeInFetcher === "true" ? !0 : likeInFetcher === "false" ? !1 : likedByMe, fetcher.state === "submitting" && (likedByMe ? likeCount++ : likeCount--);
  function handleLikeClick() {
    setEffect(!0), user && fetcher.submit(
      {
        action: "like",
        id,
        userId: user.id,
        like: likedByMe ? "false" : "true"
      },
      { method: "PATCH", action: "api/post", encType: "multipart/form-data" }
    );
  }
  async function deletePost3() {
    let decision = confirm("do you want to delete the post");
    if (setTimeout(() => {
      removeMark(editor, threadId);
    }, 0), decision) {
      let res = await fetcher.submit(
        {
          id
        },
        {
          action: "api/post",
          method: "DELETE"
        }
      );
    } else
      console.log(...oo_oo4("1c582a7e_0", "cancelled"));
  }
  function handleShare() {
    let url = window.location.href + "?thread=" + threadId;
    copyToClipboard(url), alert("url coppied on clipboard");
  }
  function handleEdit() {
    setEdit(!0);
  }
  let ref = (0, import_react_detect_click_outside.useDetectClickOutside)({
    onTriggered: () => setOpenEditMenu(!1)
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "div",
    {
      className: `${fetcher.formMethod === "DELETE" && "hidden"}  `,
      style: { paddingInline: 24, backgroundColor: (selectedThreadId == null ? void 0 : selectedThreadId.id) === threadId ? "#F3F4F6" : "white" },
      id: `p_${threadId}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          "div",
          {
            className: "rounded-md font-sans",
            onClick: () => handleSelectPost(threadId),
            style: { paddingTop: 25, paddingBottom: 16 },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "inline-flex w-full items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex items-center justify-start space-x-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("img", { className: "h-8 w-8 rounded-full", src: creatorUser == null ? void 0 : creatorUser.avatarUrl, alt: "Extra small avatar" }, void 0, !1, {
                    fileName: "app/features/Post/Post.tsx",
                    lineNumber: 132,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col items-start", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "font-serif text-sm font-medium leading-tight text-gray-900 dark:text-gray-200", children: creatorUser == null ? void 0 : creatorUser.name }, void 0, !1, {
                      fileName: "app/features/Post/Post.tsx",
                      lineNumber: 134,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "flex-1 text-right text-sm leading-tight text-gray-500 dark:text-gray-200", children: timeAgo(created_at) }, void 0, !1, {
                      fileName: "app/features/Post/Post.tsx",
                      lineNumber: 137,
                      columnNumber: 15
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/features/Post/Post.tsx",
                    lineNumber: 133,
                    columnNumber: 13
                  }, this),
                  isSolved && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("svg", { width: "14", height: "10", viewBox: "0 0 14 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M13.707 0.293031C13.8945 0.480558 13.9998 0.734866 13.9998 1.00003C13.9998 1.26519 13.8945 1.5195 13.707 1.70703L5.70704 9.70703C5.51951 9.8945 5.26521 9.99982 5.00004 9.99982C4.73488 9.99982 4.48057 9.8945 4.29304 9.70703L0.293041 5.70703C0.110883 5.51843 0.0100885 5.26583 0.0123669 5.00363C0.0146453 4.74143 0.119814 4.49062 0.305222 4.30521C0.490631 4.1198 0.741443 4.01464 1.00364 4.01236C1.26584 4.01008 1.51844 4.11087 1.70704 4.29303L5.00004 7.58603L12.293 0.293031C12.4806 0.10556 12.7349 0.000244141 13 0.000244141C13.2652 0.000244141 13.5195 0.10556 13.707 0.293031Z",
                      fill: "#046C4E"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/features/Post/Post.tsx",
                      lineNumber: 143,
                      columnNumber: 17
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/features/Post/Post.tsx",
                    lineNumber: 142,
                    columnNumber: 15
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/features/Post/Post.tsx",
                  lineNumber: 131,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "relative ml-3", ref, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                    "button",
                    {
                      className: " inline-flex items-center rounded-lg text-center text-sm font-medium  text-gray-400  focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-700 dark:focus:ring-gray-600 dark:hover:bg-gray-600",
                      type: "button",
                      onClick: () => setOpenEditMenu((p) => !p),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                        "svg",
                        {
                          className: "h-5 w-5",
                          "aria-hidden": "true",
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" }, void 0, !1, {
                            fileName: "app/features/Post/Post.tsx",
                            lineNumber: 166,
                            columnNumber: 17
                          }, this)
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/features/Post/Post.tsx",
                          lineNumber: 159,
                          columnNumber: 15
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/features/Post/Post.tsx",
                      lineNumber: 154,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                    "div",
                    {
                      className: `${openEditMenu ? "absolute" : "hidden"} right-0 top-1.5 z-10 w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700`,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                        "ul",
                        {
                          className: "py-1 text-sm text-gray-700 dark:text-gray-200",
                          "aria-labelledby": "dropdownMenuIconHorizontalButton",
                          children: [
                            user && user.username === (creatorUser == null ? void 0 : creatorUser.username) && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                                "div",
                                {
                                  onClick: handleEdit,
                                  className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                  children: "Edit"
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "app/features/Post/Post.tsx",
                                  lineNumber: 182,
                                  columnNumber: 23
                                },
                                this
                              ) }, void 0, !1, {
                                fileName: "app/features/Post/Post.tsx",
                                lineNumber: 181,
                                columnNumber: 21
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                                "div",
                                {
                                  onClick: deletePost3,
                                  className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                  children: "Remove"
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "app/features/Post/Post.tsx",
                                  lineNumber: 190,
                                  columnNumber: 23
                                },
                                this
                              ) }, void 0, !1, {
                                fileName: "app/features/Post/Post.tsx",
                                lineNumber: 189,
                                columnNumber: 21
                              }, this)
                            ] }, void 0, !0, {
                              fileName: "app/features/Post/Post.tsx",
                              lineNumber: 180,
                              columnNumber: 19
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white", children: "Report" }, void 0, !1, {
                              fileName: "app/features/Post/Post.tsx",
                              lineNumber: 200,
                              columnNumber: 19
                            }, this) }, void 0, !1, {
                              fileName: "app/features/Post/Post.tsx",
                              lineNumber: 199,
                              columnNumber: 17
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                              "a",
                              {
                                href: ForumLink + `/t/${topicId}`,
                                target: "_blank",
                                className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                children: "Forum"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/features/Post/Post.tsx",
                                lineNumber: 205,
                                columnNumber: 19
                              },
                              this
                            ) }, void 0, !1, {
                              fileName: "app/features/Post/Post.tsx",
                              lineNumber: 204,
                              columnNumber: 17
                            }, this)
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "app/features/Post/Post.tsx",
                          lineNumber: 175,
                          columnNumber: 15
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/features/Post/Post.tsx",
                      lineNumber: 170,
                      columnNumber: 13
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/features/Post/Post.tsx",
                  lineNumber: 153,
                  columnNumber: 11
                }, this)
              ] }, void 0, !0, {
                fileName: "app/features/Post/Post.tsx",
                lineNumber: 130,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col items-start justify-start", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: " w-full text-base leading-normal  dark:text-gray-100", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex w-full items-center justify-end text-xs font-light uppercase italic", children: type }, void 0, !1, {
                    fileName: "app/features/Post/Post.tsx",
                    lineNumber: 219,
                    columnNumber: 13
                  }, this),
                  selection && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                    "div",
                    {
                      className: `bg-white shadow ${isSelected ? "font-bold dark:bg-gray-500 " : " dark:bg-gray-700"}`,
                      style: {
                        borderRadius: "3px",
                        fontSize: 20,
                        padding: 10
                      },
                      children: selection
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/features/Post/Post.tsx",
                      lineNumber: 221,
                      columnNumber: 15
                    },
                    this
                  ),
                  edit ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(FormWithAudio, { post, type: "update", fetcher, onClose: () => setEdit(!1) }, void 0, !1, {
                    fileName: "app/features/Post/Post.tsx",
                    lineNumber: 233,
                    columnNumber: 15
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                    "p",
                    {
                      dangerouslySetInnerHTML: {
                        __html: content
                      },
                      className: "mt-1 "
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/features/Post/Post.tsx",
                      lineNumber: 235,
                      columnNumber: 15
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/features/Post/Post.tsx",
                  lineNumber: 218,
                  columnNumber: 11
                }, this),
                audioUrl && (audioUrl == null ? void 0 : audioUrl.length) > 0 && !edit && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_AudioPlayer.default, { src: audioUrl }, void 0, !1, {
                  fileName: "app/features/Post/Post.tsx",
                  lineNumber: 243,
                  columnNumber: 57
                }, this),
                isOptimistic ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "font-sans text-sm text-gray-300", children: "posting ..." }, void 0, !1, {
                  fileName: "app/features/Post/Post.tsx",
                  lineNumber: 245,
                  columnNumber: 13
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                  "div",
                  {
                    className: "flex w-full flex-1 items-center justify-between",
                    style: {
                      marginBlock: 14
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex h-full items-center justify-start gap-4", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                          "button",
                          {
                            disabled: !user || fetcher.formMethod === "PATCH",
                            className: `${effect && "animate-wiggle"} flex cursor-pointer items-center justify-start gap-1 `,
                            onClick: handleLikeClick,
                            onAnimationEnd: () => setEffect(!1),
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                                "path",
                                {
                                  d: "M0.800049 7.95005C0.800049 7.77276 0.834968 7.59722 0.902812 7.43343C0.970655 7.26964 1.0701 7.12081 1.19545 6.99545C1.32081 6.8701 1.46964 6.77066 1.63343 6.70281C1.79722 6.63497 1.97276 6.60005 2.15005 6.60005C2.32733 6.60005 2.50288 6.63497 2.66667 6.70281C2.83046 6.77066 2.97928 6.8701 3.10464 6.99545C3.23 7.12081 3.32944 7.26964 3.39729 7.43343C3.46513 7.59722 3.50005 7.77276 3.50005 7.95005V13.35C3.50005 13.7081 3.35782 14.0515 3.10464 14.3046C2.85147 14.5578 2.50809 14.7 2.15005 14.7C1.79201 14.7 1.44863 14.5578 1.19545 14.3046C0.942281 14.0515 0.800049 13.7081 0.800049 13.35V7.95005ZM4.40005 7.79975V12.6867C4.39989 13.0212 4.49295 13.3492 4.66877 13.6337C4.84459 13.9183 5.09623 14.1482 5.39545 14.2977L5.44045 14.3202C5.93985 14.5698 6.49045 14.6999 7.04875 14.7H11.9231C12.3394 14.7002 12.7429 14.5561 13.0648 14.2922C13.3868 14.0284 13.6074 13.6611 13.6889 13.2528L14.7689 7.85285C14.8211 7.59173 14.8147 7.32229 14.7502 7.06395C14.6857 6.8056 14.5647 6.56478 14.3959 6.35886C14.227 6.15293 14.0146 5.98703 13.774 5.87311C13.5333 5.75918 13.2703 5.70008 13.004 5.70005H9.80005V2.10005C9.80005 1.62266 9.61041 1.16482 9.27284 0.827257C8.93528 0.489691 8.47744 0.300049 8.00005 0.300049C7.76135 0.300049 7.53244 0.39487 7.36365 0.563653C7.19487 0.732435 7.10005 0.961354 7.10005 1.20005V1.80035C7.10005 2.57928 6.84741 3.3372 6.38005 3.96035L5.12005 5.63975C4.65269 6.2629 4.40005 7.02082 4.40005 7.79975V7.79975Z",
                                  style: {
                                    fill: likedByMe ? "rgb(49,196,141)" : "gray"
                                  }
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "app/features/Post/Post.tsx",
                                  lineNumber: 261,
                                  columnNumber: 21
                                },
                                this
                              ) }, void 0, !1, {
                                fileName: "app/features/Post/Post.tsx",
                                lineNumber: 260,
                                columnNumber: 19
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "  text-sm font-medium leading-tight text-gray-500 dark:text-gray-100", children: likeCount > 0 && likeCount }, void 0, !1, {
                                fileName: "app/features/Post/Post.tsx",
                                lineNumber: 269,
                                columnNumber: 19
                              }, this)
                            ]
                          },
                          void 0,
                          !0,
                          {
                            fileName: "app/features/Post/Post.tsx",
                            lineNumber: 254,
                            columnNumber: 17
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex items-center justify-start", onClick: () => setShowReplies((prev) => !prev), children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                            "svg",
                            {
                              width: "16",
                              height: "14",
                              viewBox: "0 0 16 14",
                              className: "fill-gray-500",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                                "path",
                                {
                                  fillRule: "evenodd",
                                  clipRule: "evenodd",
                                  d: "M15.2008 9.19995V1.99995C15.2008 1.52256 15.0111 1.06472 14.6736 0.727159C14.336 0.389593 13.8782 0.199951 13.4008 0.199951H2.60078C2.12339 0.199951 1.66555 0.389593 1.32799 0.727159C0.990424 1.06472 0.800781 1.52256 0.800781 1.99995V9.19995C0.800781 9.67734 0.990424 10.1352 1.32799 10.4727C1.66555 10.8103 2.12339 11 2.60078 11H5.30078L8.00078 13.7L10.7008 11H13.4008C13.8782 11 14.336 10.8103 14.6736 10.4727C15.0111 10.1352 15.2008 9.67734 15.2008 9.19995ZM3.50078 3.79995C3.50078 3.56126 3.5956 3.33234 3.76439 3.16356C3.93317 2.99477 4.16209 2.89995 4.40078 2.89995H11.6008C11.8395 2.89995 12.0684 2.99477 12.2372 3.16356C12.406 3.33234 12.5008 3.56126 12.5008 3.79995C12.5008 4.03865 12.406 4.26756 12.2372 4.43635C12.0684 4.60513 11.8395 4.69995 11.6008 4.69995H4.40078C4.16209 4.69995 3.93317 4.60513 3.76439 4.43635C3.5956 4.26756 3.50078 4.03865 3.50078 3.79995ZM4.40078 6.49995C4.16209 6.49995 3.93317 6.59477 3.76439 6.76356C3.5956 6.93234 3.50078 7.16126 3.50078 7.39995C3.50078 7.63865 3.5956 7.86756 3.76439 8.03635C3.93317 8.20513 4.16209 8.29995 4.40078 8.29995H7.10078C7.33948 8.29995 7.56839 8.20513 7.73718 8.03635C7.90596 7.86756 8.00078 7.63865 8.00078 7.39995C8.00078 7.16126 7.90596 6.93234 7.73718 6.76356C7.56839 6.59477 7.33948 6.49995 7.10078 6.49995H4.40078Z"
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "app/features/Post/Post.tsx",
                                  lineNumber: 282,
                                  columnNumber: 21
                                },
                                this
                              )
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/features/Post/Post.tsx",
                              lineNumber: 275,
                              columnNumber: 19
                            },
                            this
                          ),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { className: "text-sm font-medium lowercase leading-tight text-gray-500 dark:text-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "ml-2", children: showReplies ? "hide" : "show" }, void 0, !1, {
                            fileName: "app/features/Post/Post.tsx",
                            lineNumber: 290,
                            columnNumber: 21
                          }, this) }, void 0, !1, {
                            fileName: "app/features/Post/Post.tsx",
                            lineNumber: 289,
                            columnNumber: 19
                          }, this)
                        ] }, void 0, !0, {
                          fileName: "app/features/Post/Post.tsx",
                          lineNumber: 274,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                          "div",
                          {
                            onClick: handleShare,
                            title: "share",
                            className: "flex items-center justify-start gap-2 fill-gray-400 text-gray-400 transition-all hover:fill-blue-400 hover:text-blue-400 dark:text-gray-200 hover:dark:text-blue-400",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                              "path",
                              {
                                d: "M13.0001 6C13.6092 6.00002 14.2039 5.8146 14.7051 5.4684C15.2064 5.1222 15.5903 4.63162 15.8059 4.06191C16.0215 3.49219 16.0586 2.87034 15.9122 2.27903C15.7658 1.68773 15.4429 1.15501 14.9864 0.7517C14.5299 0.348392 13.9614 0.0936137 13.3565 0.0212462C12.7517 -0.0511213 12.1392 0.062351 11.6004 0.346574C11.0616 0.630796 10.6221 1.0723 10.3404 1.61237C10.0586 2.15245 9.94792 2.7655 10.0231 3.37L5.08305 5.84C4.65928 5.43135 4.12465 5.15642 3.54574 5.04944C2.96684 4.94247 2.36926 5.00819 1.82744 5.2384C1.28561 5.46862 0.823499 5.85316 0.498659 6.34413C0.173819 6.8351 0.000610352 7.4108 0.000610352 7.9995C0.000610352 8.5882 0.173819 9.1639 0.498659 9.65487C0.823499 10.1458 1.28561 10.5304 1.82744 10.7606C2.36926 10.9908 2.96684 11.0565 3.54574 10.9496C4.12465 10.8426 4.65928 10.5676 5.08305 10.159L10.0231 12.629C9.93555 13.3312 10.0991 14.0418 10.4848 14.6351C10.8706 15.2284 11.4536 15.6663 12.1309 15.8713C12.8082 16.0763 13.5362 16.0353 14.1862 15.7555C14.8362 15.4757 15.3664 14.9751 15.683 14.3422C15.9996 13.7093 16.0823 12.9849 15.9165 12.2969C15.7506 11.6089 15.3469 11.0017 14.7767 10.5826C14.2065 10.1635 13.5065 9.9595 12.8004 10.0066C12.0943 10.0537 11.4276 10.3489 10.9181 10.84L5.97805 8.37C6.00832 8.12426 6.00832 7.87574 5.97805 7.63L10.9181 5.16C11.4561 5.68 12.1901 6 13.0001 6Z",
                                className: "fill-inherit"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/features/Post/Post.tsx",
                                lineNumber: 300,
                                columnNumber: 21
                              },
                              this
                            ) }, void 0, !1, {
                              fileName: "app/features/Post/Post.tsx",
                              lineNumber: 299,
                              columnNumber: 19
                            }, this)
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/features/Post/Post.tsx",
                            lineNumber: 294,
                            columnNumber: 17
                          },
                          this
                        )
                      ] }, void 0, !0, {
                        fileName: "app/features/Post/Post.tsx",
                        lineNumber: 253,
                        columnNumber: 15
                      }, this),
                      user && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                        "div",
                        {
                          onClick: () => setOpenReply((prev) => !prev),
                          className: "flex items-start justify-start space-x-1.5",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                              "svg",
                              {
                                width: "16",
                                height: "13",
                                viewBox: "0 0 16 13",
                                className: "fill-gray-500 dark:fill-gray-100",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M6.13858 7.95584L5.67917 8.15319C5.65821 8.10438 5.62774 8.06025 5.58953 8.02335L5.58328 8.01731L5.58334 8.01726L3.51964 5.95356L2.66608 5.1H3.87319H8.90059C10.2267 5.1 11.4984 5.62679 12.4361 6.56447C13.3738 7.50215 13.9006 8.77392 13.9006 10.1V11.9C13.9006 12.0061 13.9427 12.1078 14.0177 12.1828C14.0928 12.2579 14.1945 12.3 14.3006 12.3C14.4067 12.3 14.5084 12.2579 14.5834 12.1828C14.6584 12.1078 14.7006 12.0061 14.7006 11.9V10.1C14.7006 8.56175 14.0895 7.08649 13.0018 5.99878C11.9141 4.91107 10.4388 4.3 8.90059 4.3H3.87319H2.66608L3.51964 3.44645L5.58328 1.3828C5.5833 1.38279 5.58332 1.38277 5.58334 1.38275C5.65829 1.30774 5.7004 1.20604 5.7004 1.1C5.7004 0.993988 5.65831 0.892311 5.58339 0.817309C5.58335 0.817274 5.58332 0.817239 5.58328 0.817203M6.13858 7.95584L4.66429 0.463703C4.83306 0.294979 5.06194 0.200195 5.30059 0.200195C5.53924 0.200195 5.76811 0.294979 5.93689 0.463703L5.58328 0.817203M6.13858 7.95584L5.67917 8.15319C5.70014 8.20199 5.71117 8.25448 5.71163 8.30759C5.7121 8.3607 5.70197 8.41337 5.68186 8.46253C5.66175 8.51169 5.63205 8.55635 5.59449 8.59391C5.55693 8.63146 5.51227 8.66116 5.46312 8.68128C5.41396 8.70139 5.36128 8.71151 5.30817 8.71105C5.25506 8.71059 5.20257 8.69955 5.15377 8.67859C5.10497 8.65763 5.06083 8.62715 5.02393 8.58895L5.02399 8.58889L5.01784 8.58275L1.4179 4.9828C1.34291 4.90779 1.30078 4.80607 1.30078 4.7C1.30078 4.59396 1.34289 4.49226 1.41784 4.41726C1.41786 4.41724 1.41788 4.41722 1.4179 4.4172L5.01779 0.81731L6.13858 7.95584ZM5.58328 0.817203C5.50828 0.742282 5.40661 0.700195 5.30059 0.700195C5.19455 0.700195 5.09285 0.742302 5.01784 0.817256L5.58328 0.817203Z" }, void 0, !1, {
                                  fileName: "app/features/Post/Post.tsx",
                                  lineNumber: 319,
                                  columnNumber: 21
                                }, this)
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/features/Post/Post.tsx",
                                lineNumber: 312,
                                columnNumber: 19
                              },
                              this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { className: "text-sm font-medium leading-tight text-gray-500 dark:text-gray-100", children: openReply ? "Close" : translation.reply }, void 0, !1, {
                              fileName: "app/features/Post/Post.tsx",
                              lineNumber: 321,
                              columnNumber: 19
                            }, this)
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "app/features/Post/Post.tsx",
                          lineNumber: 308,
                          columnNumber: 17
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/features/Post/Post.tsx",
                    lineNumber: 247,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/features/Post/Post.tsx",
                lineNumber: 217,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/features/Post/Post.tsx",
            lineNumber: 125,
            columnNumber: 7
          },
          this
        ),
        openReply && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          ReplyForm,
          {
            topicId,
            closeReply: () => {
              setOpenReply(!1);
            },
            updateReplyCount: () => setReplyCount((p) => p + 1)
          },
          void 0,
          !1,
          {
            fileName: "app/features/Post/Post.tsx",
            lineNumber: 331,
            columnNumber: 9
          },
          this
        ),
        showReplies && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          Replies_default,
          {
            postId: id,
            topicId,
            isCreator: (user == null ? void 0 : user.username) === (creatorUser == null ? void 0 : creatorUser.username),
            type,
            setReplyCount,
            replyCount: ReplyCount
          },
          void 0,
          !1,
          {
            fileName: "app/features/Post/Post.tsx",
            lineNumber: 340,
            columnNumber: 9
          },
          this
        ),
        !showDivider && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("hr", {}, void 0, !1, {
          fileName: "app/features/Post/Post.tsx",
          lineNumber: 349,
          columnNumber: 24
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/features/Post/Post.tsx",
      lineNumber: 120,
      columnNumber: 5
    },
    this
  );
}
var Post_default = Post;
function oo_cm4() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo4(i, ...v) {
  try {
    oo_cm4().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/features/Post/PostForm.tsx
var import_recoil5 = require("recoil");
var import_gr = require("react-icons/gr"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), PostForm = () => {
  var _a, _b;
  let { user, createPost: createPost3 } = (0, import_react18.useOutletContext)(), selection = (0, import_recoil5.useRecoilValue)(selectedTextOnEditor), isPosting = createPost3.formData && createPost3.formData.get("body") !== "", [, setShowPostSide] = (0, import_recoil5.useRecoilState)(showSidebar);
  return selection.type === "" ? null : isPosting ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    Post_default,
    {
      post: {
        audioUrl: "",
        creatorUser: user,
        created_at: new Date(Date.now()),
        likedBy: [],
        replyCount: 0,
        id: "random",
        isSolved: !1,
        content: (_a = createPost3 == null ? void 0 : createPost3.formData) == null ? void 0 : _a.get("body"),
        topic_id: 0,
        type: (_b = createPost3 == null ? void 0 : createPost3.formData) == null ? void 0 : _b.get("type"),
        threadId: ""
      },
      isOptimistic: !0
    },
    void 0,
    !1,
    {
      fileName: "app/features/Post/PostForm.tsx",
      lineNumber: 18,
      columnNumber: 7
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex justify-between p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "div",
        {
          style: { lineHeight: "24px", color: "rbg(41,41,41)", fontSize: 20, fontWeight: "500" },
          className: "mb-3 font-serif capitalize leading-tight text-gray-900 dark:text-gray-300",
          children: selection.type === "question" ? "ask question" : "new comment"
        },
        void 0,
        !1,
        {
          fileName: "app/features/Post/PostForm.tsx",
          lineNumber: 39,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { onClick: () => setShowPostSide(!1), className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_gr.GrClose, { size: 14, className: "cursor-pointer text-gray-500" }, void 0, !1, {
        fileName: "app/features/Post/PostForm.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/features/Post/PostForm.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Post/PostForm.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: " m-3 rounded py-3", style: { boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 8px 0px" }, children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mb-1 flex items-center gap-2 px-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "h-8 w-8 rounded-full", src: user == null ? void 0 : user.avatarUrl, alt: "avatar" }, void 0, !1, {
          fileName: "app/features/Post/PostForm.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "font-serif text-sm font-medium leading-tight text-gray-900 dark:text-gray-200", children: user == null ? void 0 : user.name }, void 0, !1, {
          fileName: "app/features/Post/PostForm.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/Post/PostForm.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/features/Post/PostForm.tsx",
        lineNumber: 54,
        columnNumber: 14
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { "aria-label": "Default tabs", className: "px-4 pt-4", style: { lineHeight: "14px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(FormWithAudio, { fetcher: createPost3, type: "post", post: null }, void 0, !1, {
        fileName: "app/features/Post/PostForm.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/features/Post/PostForm.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Post/PostForm.tsx",
      lineNumber: 54,
      columnNumber: 12
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(LogInMessage, {}, void 0, !1, {
      fileName: "app/features/Post/PostForm.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/features/Post/PostForm.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/Post/PostForm.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}, PostForm_default = PostForm;

// app/routes/text.$textId.page.$pageId.posts.tsx
var import_react21 = require("@remix-run/react");

// app/features/Post/Posts.tsx
var import_recoil7 = require("recoil");

// app/features/Post/Filter.tsx
var import_react19 = require("react"), import_react_router_dom = require("react-router-dom"), import_recoil6 = require("recoil");
var import_react_tailwindcss_datepicker = __toESM(require("react-tailwindcss-datepicker")), import_flowbite_react = require("flowbite-react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function Filter({}) {
  var _a, _b, _c, _d;
  let [filterData, setFilterData] = (0, import_recoil6.useRecoilState)(filterDataState), [openFilter, setOpenFilter] = (0, import_recoil6.useRecoilState)(openFilterState), [userInput, setUserInput] = (0, import_react19.useState)(""), searchUser = (0, import_react_router_dom.useFetcher)(), typeId = (0, import_react19.useId)(), solvedId = (0, import_react19.useId)();
  (0, import_react19.useEffect)(() => {
    setUserInput("");
  }, [filterData]);
  let handleTypeCheck = (e) => {
    let solved = e.target.value === "comment" ? "both" : filterData.solved;
    setFilterData((prevData) => ({
      ...prevData,
      type: e.target.value,
      solved
    }));
  }, handleDateChange = (e) => {
    setFilterData((prevData) => ({ ...prevData, date: e }));
  }, handleSolvedChange = (e) => {
    setFilterData((prevData) => ({ ...prevData, solved: e.target.value }));
  };
  function handleNameClick(userToAdd) {
    filterData.user.includes(userToAdd) || !userToAdd.length || setFilterData((prev) => ({
      ...prev,
      user: [...prev.user, userToAdd]
    }));
  }
  function handleRemoveUser(userToRemove) {
    setFilterData((prev) => ({
      ...prev,
      user: prev.user.filter((names) => names !== userToRemove)
    }));
  }
  function apply() {
    setOpenFilter(!1);
  }
  function reset() {
    setFilterData({
      type: "all",
      date: { startDate: null, endDate: null },
      user: [],
      solved: "both"
    }), setOpenFilter(!1);
  }
  let translation = uselitteraTranlation(), isFetchingUser = searchUser.state === "loading";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    import_flowbite_react.Modal,
    {
      show: openFilter,
      onClose: () => setOpenFilter(!1),
      dismissible: !0,
      size: "md",
      style: { height: "100dvh" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_flowbite_react.Modal.Header, { children: translation.filter }, void 0, !1, {
          fileName: "app/features/Post/Filter.tsx",
          lineNumber: 75,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "p-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col items-start justify-start space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col items-start justify-start space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-sm font-semibold leading-tight", children: "Type" }, void 0, !1, {
                fileName: "app/features/Post/Filter.tsx",
                lineNumber: 80,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col items-start justify-start space-y-0.5", children: [
                { value: "all", label: "All" },
                { value: "comment", label: "Comments only" },
                { value: "question", label: "Questions only" }
              ].map(({ value, label }) => {
                let isChecked = filterData.type == value;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex py-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                    "input",
                    {
                      id: `${typeId}-${value}`,
                      type: "radio",
                      onChange: handleTypeCheck,
                      defaultChecked: isChecked,
                      value,
                      name: "filter-type",
                      className: "h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/features/Post/Filter.tsx",
                      lineNumber: 90,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                    "label",
                    {
                      htmlFor: `${typeId}-${value}`,
                      className: "ml-2 text-sm font-medium text-gray-500 dark:text-gray-300",
                      children: label
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/features/Post/Filter.tsx",
                      lineNumber: 99,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, value, !0, {
                  fileName: "app/features/Post/Filter.tsx",
                  lineNumber: 89,
                  columnNumber: 19
                }, this);
              }) }, void 0, !1, {
                fileName: "app/features/Post/Filter.tsx",
                lineNumber: 81,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/features/Post/Filter.tsx",
              lineNumber: 79,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex w-full flex-col items-start justify-start space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-sm font-semibold leading-tight ", children: "Date" }, void 0, !1, {
                fileName: "app/features/Post/Filter.tsx",
                lineNumber: 112,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_tailwindcss_datepicker.default, { value: filterData.date, inputName: "date", onChange: handleDateChange }, void 0, !1, {
                fileName: "app/features/Post/Filter.tsx",
                lineNumber: 113,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/features/Post/Filter.tsx",
              lineNumber: 111,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex w-full flex-col items-start justify-start space-y-2.5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-sm font-semibold leading-tight ", children: "Users" }, void 0, !1, {
                fileName: "app/features/Post/Filter.tsx",
                lineNumber: 117,
                columnNumber: 13
              }, this),
              (_a = filterData.user) == null ? void 0 : _a.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "div",
                {
                  className: "flex items-center justify-center space-x-1 rounded bg-gray-100 px-1.5 py-0.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-center text-xs font-medium leading-none text-gray-600", children: user }, void 0, !1, {
                      fileName: "app/features/Post/Filter.tsx",
                      lineNumber: 125,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                      "svg",
                      {
                        onClick: () => handleRemoveUser(user),
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                          "path",
                          {
                            d: "M8.18966 6.2102L8.18971 6.21014L8.18346 6.2041C7.91942 5.94908 7.56578 5.80797 7.1987 5.81116C6.83162 5.81435 6.48049 5.96159 6.22091 6.22116C5.96134 6.48073 5.81411 6.83187 5.81092 7.19894C5.80773 7.56602 5.94884 7.91966 6.20386 8.1837L6.20381 8.18376L6.20995 8.1899L7.0201 9.00005L6.2127 9.80745C6.0806 9.93591 5.97515 10.0892 5.90241 10.2585C5.82903 10.4293 5.79041 10.6131 5.7888 10.7989C5.78718 10.9848 5.82261 11.1692 5.893 11.3412C5.96339 11.5133 6.06735 11.6696 6.1988 11.8011C6.33025 11.9325 6.48656 12.0365 6.65861 12.1069C6.83067 12.1772 7.01502 12.2127 7.20091 12.2111C7.3868 12.2094 7.57051 12.1708 7.74132 12.0974C7.91064 12.0247 8.06392 11.9193 8.19237 11.7872L8.9998 10.9798L9.80995 11.7899L9.8099 11.79L9.81615 11.796C10.0802 12.051 10.4338 12.1921 10.8009 12.1889C11.168 12.1857 11.5191 12.0385 11.7787 11.7789C12.0383 11.5194 12.1855 11.1682 12.1887 10.8012C12.1919 10.4341 12.0508 10.0804 11.7957 9.81639L11.7958 9.81634L11.7897 9.8102L10.9795 9.00005L11.7897 8.1899L11.7897 8.18996L11.7957 8.1837C12.0508 7.91966 12.1919 7.56602 12.1887 7.19894C12.1855 6.83187 12.0383 6.48073 11.7787 6.22116C11.5191 5.96159 11.168 5.81435 10.8009 5.81116C10.4338 5.80797 10.0802 5.94908 9.81615 6.2041L9.8161 6.20405L9.80995 6.2102L8.9998 7.02034L8.18966 6.2102ZM13.7374 13.7377C12.4809 14.9942 10.7768 15.7 8.9998 15.7C7.22285 15.7 5.51868 14.9942 4.26219 13.7377C3.0057 12.4812 2.2998 10.777 2.2998 9.00005C2.2998 7.2231 3.0057 5.51893 4.26219 4.26243C5.51868 3.00594 7.22285 2.30005 8.9998 2.30005C10.7768 2.30005 12.4809 3.00594 13.7374 4.26243C14.9939 5.51893 15.6998 7.2231 15.6998 9.00005C15.6998 10.777 14.9939 12.4812 13.7374 13.7377Z",
                            fill: "#9CA3AF",
                            stroke: "#9CA3AF"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/features/Post/Filter.tsx",
                            lineNumber: 134,
                            columnNumber: 21
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/features/Post/Filter.tsx",
                        lineNumber: 126,
                        columnNumber: 19
                      },
                      this
                    )
                  ]
                },
                user,
                !0,
                {
                  fileName: "app/features/Post/Filter.tsx",
                  lineNumber: 121,
                  columnNumber: 17
                },
                this
              )),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex w-full flex-col items-start justify-start space-y-2 rounded-lg px-0.5 pb-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "inline-flex w-full items-center justify-start rounded-lg border border-blue-600 bg-gray-50 px-4 py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex h-full flex-1 items-center justify-start space-x-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                    "path",
                    {
                      d: "M15.75 15.75L11.25 11.25M12.75 7.5C12.75 8.18944 12.6142 8.87213 12.3504 9.50909C12.0865 10.146 11.6998 10.7248 11.2123 11.2123C10.7248 11.6998 10.146 12.0865 9.50909 12.3504C8.87213 12.6142 8.18944 12.75 7.5 12.75C6.81056 12.75 6.12787 12.6142 5.49091 12.3504C4.85395 12.0865 4.2752 11.6998 3.78769 11.2123C3.30018 10.7248 2.91347 10.146 2.64963 9.50909C2.3858 8.87213 2.25 8.18944 2.25 7.5C2.25 6.10761 2.80312 4.77226 3.78769 3.78769C4.77226 2.80312 6.10761 2.25 7.5 2.25C8.89239 2.25 10.2277 2.80312 11.2123 3.78769C12.1969 4.77226 12.75 6.10761 12.75 7.5Z",
                      stroke: "#1C64F2",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/features/Post/Filter.tsx",
                      lineNumber: 147,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/features/Post/Filter.tsx",
                    lineNumber: 146,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(searchUser.Form, { method: "GET", action: "/api/user/search", className: "flex w-full", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                      "input",
                      {
                        type: "text",
                        name: "filterUser",
                        value: userInput,
                        onChange: (e) => {
                          setUserInput(e.target.value), searchUser.submit(
                            {
                              filterUser: e.target.value
                            },
                            { method: "GET", action: "/api/user/search" }
                          );
                        },
                        className: "h-full flex-1 border-none border-transparent bg-transparent text-sm leading-none text-gray-900 outline-none focus:border-none focus:border-transparent focus:outline-none focus:ring-0"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/features/Post/Filter.tsx",
                        lineNumber: 156,
                        columnNumber: 21
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { type: "button", onClick: () => setUserInput(""), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                      "path",
                      {
                        d: "M8.18966 6.2102L8.18971 6.21014L8.18346 6.2041C7.91942 5.94908 7.56578 5.80797 7.1987 5.81116C6.83162 5.81435 6.48049 5.96159 6.22091 6.22116C5.96134 6.48073 5.81411 6.83187 5.81092 7.19894C5.80773 7.56602 5.94884 7.91966 6.20386 8.1837L6.20381 8.18376L6.20995 8.1899L7.0201 9.00005L6.2127 9.80745C6.0806 9.93591 5.97515 10.0892 5.90241 10.2585C5.82903 10.4293 5.79041 10.6131 5.7888 10.7989C5.78718 10.9848 5.82261 11.1692 5.893 11.3412C5.96339 11.5133 6.06735 11.6696 6.1988 11.8011C6.33025 11.9325 6.48656 12.0365 6.65861 12.1069C6.83067 12.1772 7.01502 12.2127 7.20091 12.2111C7.3868 12.2094 7.57051 12.1708 7.74132 12.0974C7.91064 12.0247 8.06392 11.9193 8.19237 11.7872L8.9998 10.9798L9.80995 11.7899L9.8099 11.79L9.81615 11.796C10.0802 12.051 10.4338 12.1921 10.8009 12.1889C11.168 12.1857 11.5191 12.0385 11.7787 11.7789C12.0383 11.5194 12.1855 11.1682 12.1887 10.8012C12.1919 10.4341 12.0508 10.0804 11.7957 9.81639L11.7958 9.81634L11.7897 9.8102L10.9795 9.00005L11.7897 8.1899L11.7897 8.18996L11.7957 8.1837C12.0508 7.91966 12.1919 7.56602 12.1887 7.19894C12.1855 6.83187 12.0383 6.48073 11.7787 6.22116C11.5191 5.96159 11.168 5.81435 10.8009 5.81116C10.4338 5.80797 10.0802 5.94908 9.81615 6.2041L9.8161 6.20405L9.80995 6.2102L8.9998 7.02034L8.18966 6.2102ZM13.7374 13.7377C12.4809 14.9942 10.7768 15.7 8.9998 15.7C7.22285 15.7 5.51868 14.9942 4.26219 13.7377C3.0057 12.4812 2.2998 10.777 2.2998 9.00005C2.2998 7.2231 3.0057 5.51893 4.26219 4.26243C5.51868 3.00594 7.22285 2.30005 8.9998 2.30005C10.7768 2.30005 12.4809 3.00594 13.7374 4.26243C14.9939 5.51893 15.6998 7.2231 15.6998 9.00005C15.6998 10.777 14.9939 12.4812 13.7374 13.7377Z",
                        fill: "#9CA3AF",
                        stroke: "#9CA3AF"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/features/Post/Filter.tsx",
                        lineNumber: 173,
                        columnNumber: 25
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/features/Post/Filter.tsx",
                      lineNumber: 172,
                      columnNumber: 23
                    }, this) }, void 0, !1, {
                      fileName: "app/features/Post/Filter.tsx",
                      lineNumber: 171,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/features/Post/Filter.tsx",
                    lineNumber: 155,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/features/Post/Filter.tsx",
                  lineNumber: 145,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/features/Post/Filter.tsx",
                  lineNumber: 144,
                  columnNumber: 15
                }, this),
                isFetchingUser && "loading",
                ((_b = searchUser.data) == null ? void 0 : _b.length) > 0 && userInput !== "" && !isFetchingUser && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex w-full flex-col items-center justify-start space-y-3 rounded-lg border border-gray-200  p-4 shadow", children: (_c = searchUser.data) == null ? void 0 : _c.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "w-full cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "inline-flex w-full items-center justify-start space-x-2 rounded-lg", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", { className: "h-6 w-6 rounded-full", src: user == null ? void 0 : user.avatarUrl, alt: "Extra small avatar" }, void 0, !1, {
                    fileName: "app/features/Post/Filter.tsx",
                    lineNumber: 190,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex-1 text-sm leading-tight", onClick: () => handleNameClick(user == null ? void 0 : user.username), children: user == null ? void 0 : user.username }, void 0, !1, {
                    fileName: "app/features/Post/Filter.tsx",
                    lineNumber: 191,
                    columnNumber: 27
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/features/Post/Filter.tsx",
                  lineNumber: 189,
                  columnNumber: 25
                }, this) }, user == null ? void 0 : user.username, !1, {
                  fileName: "app/features/Post/Filter.tsx",
                  lineNumber: 188,
                  columnNumber: 23
                }, this)) }, void 0, !1, {
                  fileName: "app/features/Post/Filter.tsx",
                  lineNumber: 185,
                  columnNumber: 17
                }, this),
                ((_d = searchUser.data) == null ? void 0 : _d.length) === 0 && userInput !== "" && !isFetchingUser && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "text-red-400", children: "User not Found" }, void 0, !1, {
                  fileName: "app/features/Post/Filter.tsx",
                  lineNumber: 201,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/features/Post/Filter.tsx",
                lineNumber: 143,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/features/Post/Filter.tsx",
              lineNumber: 116,
              columnNumber: 11
            }, this),
            filterData.type !== "comment" && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col items-start justify-start space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-sm font-semibold leading-tight", children: "Solved" }, void 0, !1, {
                fileName: "app/features/Post/Filter.tsx",
                lineNumber: 209,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col items-start justify-start space-y-0.5", children: [
                { value: "both", label: "both" },
                { value: "solved", label: "solved only" },
                { value: "unsolved", label: "unsolved only" }
              ].map(({ value, label }) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "input",
                  {
                    id: `${solvedId}-${value}`,
                    type: "radio",
                    value,
                    onChange: handleSolvedChange,
                    defaultChecked: filterData.solved === value,
                    name: "filter-solved",
                    className: "h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/features/Post/Filter.tsx",
                    lineNumber: 217,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "label",
                  {
                    htmlFor: `${solvedId}-${value}`,
                    className: "ml-2 text-sm font-medium text-gray-500 dark:text-gray-300",
                    children: label
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/features/Post/Filter.tsx",
                    lineNumber: 226,
                    columnNumber: 21
                  },
                  this
                )
              ] }, value, !0, {
                fileName: "app/features/Post/Filter.tsx",
                lineNumber: 216,
                columnNumber: 19
              }, this)) }, void 0, !1, {
                fileName: "app/features/Post/Filter.tsx",
                lineNumber: 210,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/features/Post/Filter.tsx",
              lineNumber: 208,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/features/Post/Filter.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-2 flex w-full items-start justify-end gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Button, { onClick: apply, label: "Apply filters", type: "submit" }, void 0, !1, {
              fileName: "app/features/Post/Filter.tsx",
              lineNumber: 240,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Button, { onClick: reset, color: "light", type: "reset", label: "reset" }, void 0, !1, {
              fileName: "app/features/Post/Filter.tsx",
              lineNumber: 241,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/features/Post/Filter.tsx",
            lineNumber: 239,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/features/Post/Filter.tsx",
          lineNumber: 76,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/features/Post/Filter.tsx",
      lineNumber: 68,
      columnNumber: 5
    },
    this
  );
}
var Filter_default = (0, import_react19.memo)(Filter);

// app/features/Post/Posts.tsx
var import_remix_utils = require("remix-utils"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function Posts({ posts }) {
  let filters = (0, import_recoil7.useRecoilValue)(filterDataState), isLatest = (0, import_recoil7.useRecoilValue)(showLatest);
  if (!posts)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Skeleton, { number: 4, height: 80 }, void 0, !1, {
      fileName: "app/features/Post/Posts.tsx",
      lineNumber: 19,
      columnNumber: 12
    }, this);
  let lists = applyFilter(posts, filters, isLatest);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_remix_utils.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, {}, void 0, !1, {
      fileName: "app/features/Post/Posts.tsx",
      lineNumber: 24,
      columnNumber: 29
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Filter_default, {}, void 0, !1, {
      fileName: "app/features/Post/Posts.tsx",
      lineNumber: 24,
      columnNumber: 43
    }, this) }, void 0, !1, {
      fileName: "app/features/Post/Posts.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      "div",
      {
        style: {
          fontFamily: "sans-serif"
        },
        className: " relative flex flex-col h-full overflow-y-scroll flex-1 ",
        children: (lists == null ? void 0 : lists.length) > 0 ? lists == null ? void 0 : lists.map((post, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Post_default, { post, isOptimistic: !1, showDivider: lists.length <= index + 1 }, post.id, !1, {
          fileName: "app/features/Post/Posts.tsx",
          lineNumber: 35,
          columnNumber: 17
        }, this) }, post.id, !1, {
          fileName: "app/features/Post/Posts.tsx",
          lineNumber: 34,
          columnNumber: 15
        }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: "No post available" }, void 0, !1, {
            fileName: "app/features/Post/Posts.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this),
          "Feel free to be the first one to ask Question !"
        ] }, void 0, !0, {
          fileName: "app/features/Post/Posts.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/features/Post/Posts.tsx",
        lineNumber: 25,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/features/Post/Posts.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
var applyFilter = (list, filter, isLatest) => {
  var _a;
  return filter.type && filter.type !== "all" && (list = list.filter((l) => l.type === filter.type)), (_a = filter.user) != null && _a.length && (list = list.filter((l) => {
    var _a2, _b;
    return (_b = filter.user) == null ? void 0 : _b.includes((_a2 = l == null ? void 0 : l.creatorUser) == null ? void 0 : _a2.username);
  })), filter.date.startDate && (list = list.filter((l) => {
    let startDate = filter.date.startDate ? new Date(filter.date.startDate) : null, endDate = filter.date.endDate ? new Date(filter.date.endDate) : null;
    if (startDate && endDate) {
      let createdAt = new Date(l.created_at);
      return createdAt > startDate && createdAt < endDate;
    }
    return !1;
  })), filter.solved && filter.solved !== "both" && (list = list.filter((l) => l.isSolved === (filter.solved === "solved"))), list.length > 0 && list.sort(function(a, b) {
    let c = new Date(a.created_at), d = new Date(b.created_at);
    return isLatest ? d.getTime() - c.getTime() : c.getTime() - d.getTime();
  }), list;
}, Posts_default = Posts;

// app/routes/text.$textId.page.$pageId.posts.tsx
var import_recoil8 = require("recoil");

// app/model/page.ts
async function getPageWithId(id) {
  try {
    return db.page.findFirst({
      where: {
        id
      },
      include: {
        text: {
          include: {
            Page: !0
          }
        }
      }
    });
  } catch (e) {
    console.log(...oo_oo5("de03d608_0", e));
  }
}
async function getVersions(textId, order) {
  try {
    let pages = await db.page.findMany({
      where: {
        textId
      },
      select: {
        version: !0
      }
    }), versionCountMap = {};
    return pages.forEach((page) => {
      !page.version || (versionCountMap.hasOwnProperty(page.version) ? versionCountMap[page.version]++ : versionCountMap[page.version] = 1);
    }), Object.entries(versionCountMap).map(([version, count]) => ({ version, count }));
  } catch (e) {
    return console.log(...oo_oo5("de03d608_1", e)), [];
  }
}
async function getPage(textId, order, version) {
  try {
    let where = typeof version == "string" ? { textId, order, version } : { textId, order }, pageWhere = version ? { version } : {};
    return db.page.findFirst({
      where,
      include: {
        text: {
          include: {
            Page: {
              where: pageWhere,
              select: {
                id: !0,
                order: !0,
                version: !0
              }
            }
          }
        },
        Post: {
          select: {
            id: !0
          }
        }
      }
    });
  } catch (e) {
    console.log(...oo_oo5("de03d608_2", e));
  }
}
async function getPageId(textId, order) {
  try {
    let page = await db.page.findFirst({
      where: {
        textId,
        order
      }
    });
    return page == null ? void 0 : page.id;
  } catch (e) {
    console.log(...oo_oo5("de03d608_3", e));
  }
}
async function searchPages(search_term = "") {
  try {
    let textList = await db.page.findMany({
      include: {
        text: !0
      }
    }), results = fullSearch(textList, search_term), groupedData = [];
    for (let item of results) {
      let { textId } = item, existingGroup = groupedData.find((group) => group.textId === textId);
      existingGroup ? existingGroup.results.push(item) : groupedData.push({
        textId,
        results: [item],
        textName: item.name
      });
    }
    return Object.values(groupedData).map((value) => ({
      results: value.results,
      textId: value.textId
    }));
  } catch (e) {
    throw new Error("error finding text with name" + e.message);
  }
}
async function updatePage(pageId, content) {
  try {
    return db.page.update({
      data: {
        content
      },
      where: {
        id: pageId
      }
    });
  } catch (e) {
    throw new Error("update text error" + e.message);
  }
}
function oo_cm5() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo5(i, ...v) {
  try {
    oo_cm5().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/model/post.ts
async function createPost2(type, avatar, topic_id, post_id, threadId, textId, pageId, content, creatorUser_id, audioUrl, selectionContent) {
  try {
    let data = {
      type,
      avatar,
      topic_id,
      post_id,
      content,
      threadId,
      creatorUser_id,
      textId,
      pageId,
      audioUrl,
      selection: selectionContent
    };
    return await db.post.create({
      data
    });
  } catch (e) {
    throw console.log(...oo_oo6("cae6c1a4_0", e)), new Error("post couldnot be created " + e);
  }
}
async function findPostByTopicId(TopicId) {
  try {
    return await db.post.findFirst({
      where: {
        topic_id: TopicId
      },
      include: {
        reply: !0
      }
    });
  } catch (e) {
    return "couldnot find the by TopicId" + e.message;
  }
}
async function findPostByTextIdAndPage(textId, order, version) {
  try {
    let page = await getPage(textId, order, version);
    if (!page)
      throw new Error("page not found");
    let posts = await db.post.findMany({
      include: {
        creatorUser: !0,
        likedBy: !0,
        reply: !0
      },
      where: {
        textId,
        pageId: page.id
      }
    });
    return (await Promise.all(
      posts.map(async (post) => {
        let isSolved = post.reply.filter((l) => l.is_approved === !0).length > 0;
        return {
          ...post,
          replyCount: 2,
          isSolved
        };
      })
    )).filter(Boolean);
  } catch (e) {
    return { error: e };
  }
}
async function findPostByUserLiked(id, userId) {
  try {
    return await db.post.findFirst({
      where: {
        id,
        likedBy: {
          some: {
            id: userId
          }
        }
      }
    });
  } catch (e) {
    throw new Error("could not find post by userliked" + e.message);
  }
}
async function updatePostLike(id, userId, payload) {
  try {
    return await db.post.update({
      data: {
        likedBy: payload ? {
          connect: {
            id: userId
          }
        } : {
          disconnect: {
            id: userId
          }
        }
      },
      where: {
        id
      },
      select: {
        likedBy: !0,
        textId: !0
      }
    });
  } catch (e) {
    throw new Error("update post like error: " + e.message);
  }
}
async function updatePostContentandAudio(id, content, audioUrl) {
  try {
    return await db.post.update({
      data: {
        content,
        audioUrl
      },
      where: {
        id
      }
    });
  } catch (e) {
    throw new Error("update post content error: " + e.message);
  }
}
async function deletePost2(id) {
  try {
    return await db.post.delete({
      where: {
        id
      }
    });
  } catch (e) {
    throw new Error("cannot delete post ", e);
  }
}
function oo_cm6() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo6(i, ...v) {
  try {
    oo_cm6().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/routes/text.$textId.page.$pageId.posts.tsx
var import_node3 = require("@remix-run/node"), import_gr2 = require("react-icons/gr"), import_fa = require("react-icons/fa");

// app/model/text.ts
async function getText(id) {
  try {
    return await db.text.findUnique({
      where: {
        id: parseInt(id)
      },
      select: {
        id: !0,
        name: !0,
        allow_post: !0,
        userId: !0
      }
    });
  } catch (e) {
    throw new Error("fetching text error" + e.message);
  }
}
async function findLatestText() {
  try {
    let text = await db.text.findMany({
      select: {
        id: !0,
        name: !0,
        Page: !0,
        allow_post: !0
      },
      orderBy: {
        createdAt: "desc"
      }
    });
    return {
      count: text.length,
      latestTexts: text.slice(0, 4)
    };
  } catch (e) {
    throw new Error("fetching text error" + e.message);
  }
}
async function findAllTextWithDetail() {
  try {
    return await db.text.findMany({
      include: {
        author: !0,
        Page: !0
      }
    });
  } catch (e) {
    throw new Error("fetching text error" + e.message);
  }
}
async function deleteText(id) {
  try {
    return await db.text.delete({
      where: {
        id: parseInt(id)
      }
    });
  } catch (e) {
    throw new Error("delete text error" + e.message);
  }
}

// app/routes/text.$textId.page.$pageId.posts.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
  let textId = params.textId, order = params.pageId, threadId = new URL(request.url).searchParams.get("thread") ?? "", version = new URL(request.url).searchParams.get("version") ?? null, posts = await findPostByTextIdAndPage(parseInt(textId), parseInt(order), version), text = await getText(textId), pageId = await getPageId(parseInt(textId), parseInt(order));
  return (0, import_node3.defer)({ text, posts, threadId, pageId, order });
}, ErrorBoundary2 = ({ error }) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: error == null ? void 0 : error.message }, void 0, !1, {
  fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
  lineNumber: 28,
  columnNumber: 10
}, this);
function PostContainer() {
  var _a;
  let data = (0, import_react21.useLoaderData)(), [, setParams] = (0, import_react21.useSearchParams)(), [selectedPostThread2, setSelectedThread] = (0, import_recoil8.useRecoilState)(selectedPostThread);
  (0, import_react20.useEffect)(() => {
    let selectedThread = data.threadId;
    if (selectedThread && selectedThread !== "") {
      setTimeout(() => {
        var _a2, _b;
        (_a2 = document.getElementById("p_" + selectedThread)) == null || _a2.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        }), (_b = document.getElementById(selectedThread)) == null || _b.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });
      }, 2e3), setParams("", { preventScrollReset: !0 });
      let timer = setTimeout(() => {
        setSelectedThread({ id: selectedThread });
      }, 1e3);
      return () => {
        timer && selectedPostThread2.id && clearTimeout(timer);
      };
    }
  }, []);
  let setOpenFilter = (0, import_recoil8.useSetRecoilState)(openFilterState), setOpenContent = (0, import_recoil8.useSetRecoilState)(showSidebar), translation = uselitteraTranlation(), handleClose = () => {
    setOpenContent(!1);
  };
  return (_a = data.posts) != null && _a.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-2 p-3 text-red-700", children: [
    "Error:",
    data.posts.error
  ] }, void 0, !0, {
    fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
    lineNumber: 69,
    columnNumber: 33
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(PostForm_default, {}, void 0, !1, {
      fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "sticky top-0 z-50  flex  w-full items-center justify-between gap-2 bg-white dark:bg-gray-700 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "z-30 flex flex-1 items-center  justify-between  py-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(LatestFilter, {}, void 0, !1, {
          fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "button",
          {
            id: "filterButton",
            onClick: () => setOpenFilter((prev) => !prev),
            className: "flex items-center justify-center space-x-2 rounded-lg border border-gray-200 px-3 py-2 filter",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_fa.FaFilter, { className: "text-gray-500" }, void 0, !1, {
                fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
                lineNumber: 83,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: "text-sm font-medium leading-tight text-gray-500 dark:text-gray-50", children: translation.filter }, void 0, !1, {
                fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
                lineNumber: 84,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
            lineNumber: 78,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { onClick: handleClose, className: "mr-2 bg-white", style: { padding: 10, borderRadius: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_gr2.GrClose, { size: 14, className: "cursor-pointer" }, void 0, !1, {
        fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Posts_default, { posts: data.posts }, void 0, !1, {
      fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
var LatestFilter = () => {
  let [isLatest, setIsLatestPost] = (0, import_recoil8.useRecoilState)(showLatest), options = ["Latest", "Earliest"];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    "div",
    {
      className: "cursor-pointer p-3 text-sm font-medium leading-tight text-gray-500 dark:text-gray-50",
      onClick: () => {
        setIsLatestPost((prev) => !prev);
      },
      children: isLatest ? options[0] : options[1]
    },
    void 0,
    !1,
    {
      fileName: "app/routes/text.$textId.page.$pageId.posts.tsx",
      lineNumber: 108,
      columnNumber: 5
    },
    this
  );
};

// app/routes/api.user.preference.theme.tsx
var api_user_preference_theme_exports = {};
__export(api_user_preference_theme_exports, {
  action: () => action
});

// app/model/preference.ts
var updateTheme = async (userId, theme) => {
  try {
    let existingPreference = await db.user.findUnique({
      where: {
        id: userId
      },
      include: {
        preference: !0
      }
    });
    return existingPreference && existingPreference.preference ? await db.userPreference.update({
      where: {
        id: existingPreference.preference.id
      },
      data: {
        theme
      }
    }) : await db.userPreference.create({
      data: {
        theme,
        User: {
          connect: {
            id: userId
          }
        }
      }
    }), theme;
  } catch (e) {
    console.log(...oo_oo7("91fef011_0", e));
  }
};
function oo_cm7() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo7(i, ...v) {
  try {
    oo_cm7().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/routes/api.user.preference.theme.tsx
var action = async ({ request }) => {
  let user = await getUserSession(request), theme = (await request.formData()).get("theme");
  return await updateTheme(user.id, theme);
};

// app/routes/text.$textId.page.$pageId.tsx
var text_textId_page_pageId_exports = {};
__export(text_textId_page_pageId_exports, {
  default: () => Page,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react42 = require("@remix-run/react"), import_react43 = require("@tiptap/react");
var import_recoil14 = require("recoil"), import_react44 = require("react");

// app/component/Layout/Header.tsx
var import_react32 = require("@remix-run/react");

// app/assets/logo.png
var logo_default = "/build/_assets/logo-M44S4BEM.png";

// app/component/Layout/Header.tsx
var import_react_littera3 = require("@assembless/react-littera"), import_react33 = require("react");

// app/features/Editor/component/EditorContainer.tsx
var import_react26 = require("@remix-run/react"), import_react27 = require("@tiptap/react"), import_react28 = require("react"), import_recoil9 = require("recoil");

// app/features/Editor/lib/changeFont.ts
function changeFont(size) {
  let editorref = document.querySelector(".editor");
  return editorref && editorref.setAttribute("style", `font-size:${size}px;`), editorref;
}

// app/features/Editor/lib/exportDoc.ts
function exportDoc(text, name) {
  let element = document.createElement("a"), file = new Blob([text], {
    type: "text/plain"
  });
  element.href = URL.createObjectURL(file), element.download = `${name}.txt`, document.body.appendChild(element), element.click();
}

// app/features/Editor/lib/scrollThreadIntoView.ts
function scrollThreadIntoView(thread, thread2) {
  if (!thread || !thread2)
    return null;
  let doc = document.getElementById(thread), doc2 = document.getElementById(thread2), timer;
  return doc && doc2 && (timer = setTimeout(() => {
    scrollElementsIntoView(doc, doc2);
  }, 400)), timer;
}
function scrollElementsIntoView(element1, element2) {
  Promise.all([
    element2.scrollIntoView({ behavior: "smooth", block: "center" }),
    element1.scrollIntoView({ block: "center", inline: "center" })
  ]), setTimeout(() => {
    window.getSelection().selectAllChildren(element1);
  }, 100);
}

// app/features/Editor/lib/checkunknown.ts
function checkUnknown(text) {
  let replacementChar = "\uFFFD";
  if (text.includes(replacementChar)) {
    let regex = new RegExp(replacementChar, "g");
    return text.replace(regex, "");
  } else
    return text;
}
var checkunknown_default = checkUnknown;

// app/component/UI/Pagination.tsx
var import_react22 = require("@remix-run/react"), import_fa2 = require("react-icons/fa"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Pagination({ pageCount }) {
  let data = (0, import_react22.useLoaderData)(), textId = data.text.id, order = parseInt(data.order), [searchParams] = (0, import_react22.useSearchParams)(), version = searchParams.get("version"), PreviousLink = `/text/${textId}/page/${order - 1}${version ? "/?version=" + version : ""}`, nextLink = `/text/${textId}/page/${order + 1}${version ? "/?version=" + version : ""}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex justify-end gap-3", children: [
    order - 1 > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react22.Link, { to: PreviousLink, className: "mr-1 flex items-center gap-2 rounded  p-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_fa2.FaArrowLeft, {}, void 0, !1, {
        fileName: "app/component/UI/Pagination.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      "previous"
    ] }, void 0, !0, {
      fileName: "app/component/UI/Pagination.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    order + 1 <= pageCount && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react22.Link, { to: nextLink, className: "mr-1 flex items-center gap-2 rounded  p-1", children: [
      "next",
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_fa2.FaArrowRight, {}, void 0, !1, {
        fileName: "app/component/UI/Pagination.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/component/UI/Pagination.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/UI/Pagination.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/features/Editor/component/EditorContainer.tsx
var import_react_zoom_pan_pinch = require("react-zoom-pan-pinch");

// app/features/Editor/component/Controls.tsx
var import_react23 = require("react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), Controls = ({ zoomIn, zoomOut, resetTransform, url }) => ((0, import_react23.useEffect)(() => {
  resetTransform();
}, [url]), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "absolute right-3 top-0 z-20 flex gap-3  ", style: { float: "right" }, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { className: "tool-image", onClick: () => zoomIn(), children: "Zoom In +" }, void 0, !1, {
    fileName: "app/features/Editor/component/Controls.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { className: "tool-image", onClick: () => zoomOut(), children: "Zoom Out -" }, void 0, !1, {
    fileName: "app/features/Editor/component/Controls.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { className: "tool-image", onClick: () => resetTransform(), children: "reset" }, void 0, !1, {
    fileName: "app/features/Editor/component/Controls.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/features/Editor/component/Controls.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this)), Controls_default = Controls;

// app/component/hooks/usePusherPresence.ts
var import_react24 = require("react"), import_pusher_js = __toESM(require("pusher-js")), import_react25 = require("@remix-run/react"), usePusherPresence = (channelName, id, cluster, user) => {
  let [onlineMembers, setOnlineMembers] = (0, import_react24.useState)([]), { revalidate } = (0, import_react25.useRevalidator)();
  return (0, import_react24.useEffect)(() => {
    let pusher2 = new import_pusher_js.default(id, {
      cluster,
      authEndpoint: "/auth/pusher"
    }), channel = pusher2.subscribe(channelName), handleSubscriptionSucceeded = () => {
      setOnlineMembers(Object.entries(channel.members.members));
    }, handleMemberAdded = (member) => {
      setOnlineMembers(Object.entries(channel.members.members));
    }, handleMemberRemoved = (member) => {
      setOnlineMembers(Object.entries(channel.members.members));
    }, handleUpdate = (e) => {
      e.userId && revalidate();
    };
    return channel.bind("pusher:subscription_succeeded", handleSubscriptionSucceeded), channel.bind("pusher:member_added", handleMemberAdded), channel.bind("pusher:member_removed", handleMemberRemoved), channel.bind("update-app", handleUpdate), () => {
      channel.unbind(), pusher2.unsubscribe(channelName);
    };
  }, [channelName, user == null ? void 0 : user.id, revalidate]), { onlineMembers };
}, usePusherPresence_default = usePusherPresence;

// app/features/Editor/lib/utils.ts
var getQuery = (newContent, oldContent) => {
  let dmp = new import_diff_match_patch.default();
  if (oldContent !== newContent) {
    let changes = dmp.diff_main(oldContent, newContent), patch = dmp.patch_make(changes);
    return dmp.patch_toText(patch);
  }
  return null;
}, saveData = async (patch, pageId, saveTextFetcher) => {
  let formData = new FormData();
  formData.append("pageId", pageId), formData.append("patch", patch), saveTextFetcher.submit(formData, {
    method: "POST",
    action: "/api/text"
  });
};

// app/features/Editor/component/EditorContainer.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function EditorContainer({
  pageId,
  editor,
  isSaving,
  order,
  content,
  imageUrl,
  pageCount,
  versions,
  saveTextFetcher
}) {
  let data = (0, import_react26.useLoaderData)(), user = data.user, [Image2, setImage] = (0, import_recoil9.useRecoilState)(ImageState), isPostAllowed = data.text.allow_post, [openSuggestion, setOpenSuggestion] = (0, import_recoil9.useRecoilState)(openSuggestionState), [selection, setSelectionRange] = (0, import_recoil9.useRecoilState)(selectedTextOnEditor), thread = (0, import_recoil9.useRecoilValue)(selectedPostThread), { onlineMembers } = usePusherPresence_default(
    `presence-text_${pageId}`,
    data.pusher_env.key,
    data.pusher_env.cluster,
    data.user
  ), saving = saveTextFetcher.state !== "idle", oldContent = (0, import_react28.useMemo)(() => content, [editor, pageId, content]);
  (0, import_react28.useEffect)(() => {
    let timer = scrollThreadIntoView(thread.id, `p_${thread.id}`);
    return editor.on("update", async ({ editor: editor2, transaction }) => {
      let newContent = editor2.getHTML(), query = getQuery(newContent, oldContent);
      query && newContent.length > 100 && user && saveData(query, pageId, saveTextFetcher);
    }), () => {
      timer && clearTimeout(timer);
    };
  }, [editor, thread.id]), (0, import_react28.useEffect)(() => {
    let timer = setTimeout(() => {
      let newContent = content.replace(/[\r\n]+/g, "<br/>");
      checkunknown_default(newContent), editor == null || editor.commands.setContent(newContent);
    }, 100);
    return setImage({ ...Image2, url: imageUrl }), () => {
      clearTimeout(timer);
    };
  }, [content, editor]);
  let handleBubbleClick = (type) => {
    selection.start && setSelectionRange({
      ...selection,
      type
    }), setOpenSuggestion(!1);
  };
  function handleSuggestionClick() {
    setOpenSuggestion(!openSuggestion), setSelectionRange({
      ...selection,
      type: ""
    });
  }
  function handleDeleteMark() {
    editor.isActive("post") && editor.commands.unsetPost(), editor.isActive("suggestion") && editor.commands.unsetSuggestion(), editor.commands.setTextSelection(0);
  }
  let handleImageLoaded = (e) => {
    let height = e.target.height, width = e.target.width;
    setImage({ ...Image2, isPortrait: height > width });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: " mb-4  flex  shadow-sm", style: { flexDirection: Image2.isPortrait ? "row-reverse" : "column" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(OnlineUserList_default, { onlineMembers, count: onlineMembers.length }, void 0, !1, {
      fileName: "app/features/Editor/component/EditorContainer.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    Image2.show && Image2.url && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      "div",
      {
        className: " relative flex w-full max-w-full justify-center bg-gray-100",
        onMouseDown: (e) => e.target.style.cursor = "grabbing",
        onMouseUp: (e) => e.target.style.cursor = "grab",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react_zoom_pan_pinch.TransformWrapper, { children: (utils) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Controls_default, { ...utils, url: Image2.url }, void 0, !1, {
            fileName: "app/features/Editor/component/EditorContainer.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_react_zoom_pan_pinch.TransformComponent,
            {
              wrapperStyle: { zIndex: 10, width: "100%", maxHeight: "40vh", cursor: "grab" },
              contentStyle: {
                width: "100%",
                maxHeight: "100%"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                "img",
                {
                  alt: "Text Image",
                  src: Image2.url,
                  className: "text-image  border-2 border-gray-200",
                  style: { maxHeight: "100%", objectFit: "contain" },
                  onLoad: handleImageLoaded
                },
                void 0,
                !1,
                {
                  fileName: "app/features/Editor/component/EditorContainer.tsx",
                  lineNumber: 133,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/features/Editor/component/EditorContainer.tsx",
              lineNumber: 126,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/features/Editor/component/EditorContainer.tsx",
          lineNumber: 124,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/features/Editor/component/EditorContainer.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/features/Editor/component/EditorContainer.tsx",
        lineNumber: 117,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { style: { zIndex: 0 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: " text-light z-10 flex  items-center  justify-between   px-2 py-4  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: " flex w-full items-center justify-between gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          "div",
          {
            className: "textname flex items-center gap-2",
            style: { fontSize: "clamp(18px, 24px, 2.2vw)", fontWeight: "bold" },
            children: [
              data.text.name,
              " ",
              order > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "text-sm font-light text-gray-100", children: [
                " page ",
                order
              ] }, void 0, !0, {
                fileName: "app/features/Editor/component/EditorContainer.tsx",
                lineNumber: 153,
                columnNumber: 46
              }, this),
              isSaving && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "animate-pulse text-sm font-light", children: "saving..." }, void 0, !1, {
                fileName: "app/features/Editor/component/EditorContainer.tsx",
                lineNumber: 154,
                columnNumber: 28
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/features/Editor/component/EditorContainer.tsx",
            lineNumber: 149,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Pagination, { pageCount }, void 0, !1, {
          fileName: "app/features/Editor/component/EditorContainer.tsx",
          lineNumber: 156,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/Editor/component/EditorContainer.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/features/Editor/component/EditorContainer.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      editor ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        import_react27.EditorContent,
        {
          editor,
          className: "editor transition-all ",
          style: {
            fontSize: isSmallScreen ? 16 : 20,
            pointerEvents: isSaving ? "none" : "all",
            color: saving ? "gray" : "inherit"
          }
        },
        void 0,
        !1,
        {
          fileName: "app/features/Editor/component/EditorContainer.tsx",
          lineNumber: 164,
          columnNumber: 11
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex h-[400px] w-full animate-pulse justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mr-2 h-full flex-1 bg-gray-300 dark:bg-gray-700" }, void 0, !1, {
        fileName: "app/features/Editor/component/EditorContainer.tsx",
        lineNumber: 161,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/features/Editor/component/EditorContainer.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this),
      editor && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        import_react27.BubbleMenu,
        {
          shouldShow: ({ editor: editor2 }) => {
            let postmarkType = editor2.schema.marks.post, suggestmarkType = editor2.schema.marks.suggestion, selection2 = editor2.state.selection;
            return editor2.isActive("suggestion") || editor2.isActive("post") ? !0 : !(editor2.state.doc.rangeHasMark(selection2.$from.pos, selection2.$to.pos, postmarkType) || editor2.state.doc.rangeHasMark(selection2.$from.pos, selection2.$to.pos, suggestmarkType));
          },
          editor,
          tippyOptions: {
            appendTo: "parent",
            placement: isSmallScreen ? "bottom" : "top"
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "inline-flex rounded-md shadow-sm", role: "group", children: !editor.isActive("suggestion") && !editor.isActive("post") ? selection.content.length > 0 && selection.content.length < 239 && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
              Button,
              {
                title: "suggestion",
                type: "button",
                color: "gray",
                className: `${openSuggestion ? "bg-green-400 text-white" : "bg-white "} rounded-l-lg ${!isPostAllowed && "rounded-r-lg"} border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10    hover:bg-gray-100  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white  dark:hover:bg-gray-600 dark:hover:text-white `,
                onClick: () => handleSuggestionClick(),
                label: "Suggestion"
              },
              void 0,
              !1,
              {
                fileName: "app/features/Editor/component/EditorContainer.tsx",
                lineNumber: 205,
                columnNumber: 21
              },
              this
            ),
            isPostAllowed && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                Button,
                {
                  title: "comment",
                  color: "gray",
                  className: " border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900  focus:z-10   hover:bg-gray-100  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:hover:bg-gray-600 dark:hover:text-white ",
                  onClick: () => handleBubbleClick("comment"),
                  label: "Comment",
                  type: "button"
                },
                void 0,
                !1,
                {
                  fileName: "app/features/Editor/component/EditorContainer.tsx",
                  lineNumber: 217,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
                Button,
                {
                  type: "button",
                  title: "question",
                  color: "gray",
                  className: "rounded-r-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10  focus:ring-2 hover:bg-gray-100   dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white  dark:hover:bg-gray-600 dark:hover:text-white ",
                  onClick: () => handleBubbleClick("question"),
                  label: "Question"
                },
                void 0,
                !1,
                {
                  fileName: "app/features/Editor/component/EditorContainer.tsx",
                  lineNumber: 225,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/features/Editor/component/EditorContainer.tsx",
              lineNumber: 216,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/features/Editor/component/EditorContainer.tsx",
            lineNumber: 204,
            columnNumber: 19
          }, this) : (user == null ? void 0 : user.admin) === "true" || data.text.userId == (user == null ? void 0 : user.id) ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            Button,
            {
              title: "delete",
              type: "button",
              color: "gray",
              className: " rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:focus:ring-blue-500 dark:hover:bg-gray-600 dark:hover:text-white",
              onClick: () => handleDeleteMark(),
              label: "Delete"
            },
            void 0,
            !1,
            {
              fileName: "app/features/Editor/component/EditorContainer.tsx",
              lineNumber: 238,
              columnNumber: 17
            },
            this
          ) : null }, void 0, !1, {
            fileName: "app/features/Editor/component/EditorContainer.tsx",
            lineNumber: 200,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/features/Editor/component/EditorContainer.tsx",
          lineNumber: 176,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/features/Editor/component/EditorContainer.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/Editor/component/EditorContainer.tsx",
    lineNumber: 114,
    columnNumber: 5
  }, this);
}
var EditorContainer_default = EditorContainer;

// app/features/Editor/index.jsx
var import_SearchString = __toESM(require_SearchString());

// app/component/Layout/Header.tsx
var import_react_detect_click_outside3 = require("react-detect-click-outside");
var import_fa4 = require("react-icons/fa"), import_ai = require("react-icons/ai");

// app/features/Editor/component/EditorSetting.tsx
var import_react_detect_click_outside2 = require("react-detect-click-outside"), import_fa3 = require("react-icons/fa"), import_fc = require("react-icons/fc");
var import_react30 = require("react");
var import_react31 = require("@remix-run/react"), import_recoil10 = require("recoil");

// app/features/Media/Image.tsx
var import_react29 = require("react");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), ImageWithPlaceholder = ({ src, alt, title = "", onClick = () => {
} }) => {
  let [loading, setLoading] = (0, import_react29.useState)(!0);
  return (0, import_react29.useEffect)(() => {
    let image = new Image();
    return image.src = src, image.onload = () => {
      setLoading(!1);
    }, () => {
      image.onload = null;
    };
  }, [src]), /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { style: { position: "relative", height: 80, width: 80 }, children: [
    loading && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "div",
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#f2f2f2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Spinner, {}, void 0, !1, {
          fileName: "app/features/Media/Image.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/features/Media/Image.tsx",
        lineNumber: 23,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "img",
      {
        src,
        alt,
        title,
        onClick,
        style: { display: loading ? "none" : "block" },
        loading: "lazy",
        className: "w-full cursor-pointer object-contain"
      },
      void 0,
      !1,
      {
        fileName: "app/features/Media/Image.tsx",
        lineNumber: 39,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/features/Media/Image.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}, Image_default = ImageWithPlaceholder;

// app/features/Editor/component/EditorSetting.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function EditorSetting({ editor }) {
  let [image, setShowImage] = (0, import_recoil10.useRecoilState)(ImageState), data = (0, import_react31.useLoaderData)(), [searchParam] = (0, import_react31.useSearchParams)(), version = searchParam.get("version"), ref = (0, import_react_detect_click_outside2.useDetectClickOutside)({
    onTriggered: () => setOpenEditMenu(!1)
  }), handleFontSizeChange = (e) => {
    let value = e.target.value;
    setFontSize(parseInt(value)), changeFont(value);
  }, toggleImage = (e) => {
    setShowImage({ ...image, show: e.target.checked });
  }, [openEditMenu, setOpenEditMenu] = (0, import_react30.useState)(!1), [fontSize, setFontSize] = (0, import_react30.useState)(isSmallScreen ? 16 : 20), themes = [
    { background: "white", text: "black" },
    { background: "#C4E0A6", text: "black" },
    { background: "#B9F3DD", text: "black" },
    { background: "#5A5A5C", text: "white" }
  ], changeTheme = (theme) => {
    document.documentElement.style.setProperty("--background-text-editor", theme.background), document.documentElement.style.setProperty("--text-text-editor", theme.text);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mr-2 mt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "button", onClick: () => setOpenEditMenu((p) => !p), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_fa3.FaBars, { color: "inherit", className: "hidden fill-gray-400 hover:text-gray-600 md:block ", size: 24 }, void 0, !1, {
        fileName: "app/features/Editor/component/EditorSetting.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_fc.FcSettings, { color: "inherit", className: "fill-gray-400 hover:text-gray-600 md:hidden ", size: 24 }, void 0, !1, {
        fileName: "app/features/Editor/component/EditorSetting.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Editor/component/EditorSetting.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    openEditMenu && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "div",
      {
        ref,
        style: { top: "100%", right: "5%" },
        className: "absolute  z-50 w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          "ul",
          {
            className: "py-1 text-sm text-gray-700 dark:bg-gray-600 dark:text-gray-200",
            "aria-labelledby": "dropdownMenuIconHorizontalButton",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { className: "flex cursor-pointer flex-col gap-2 bg-gray-100 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                Image_default,
                {
                  src: `https://opf.fi/image/${data.text.id}/${data.order}/${version}`,
                  alt: "qr",
                  title: "copy url",
                  onClick: () => navigator.clipboard.writeText(window.location.href)
                },
                void 0,
                !1,
                {
                  fileName: "app/features/Editor/component/EditorSetting.tsx",
                  lineNumber: 64,
                  columnNumber: 17
                },
                this
              ) }, void 0, !1, {
                fileName: "app/features/Editor/component/EditorSetting.tsx",
                lineNumber: 63,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/features/Editor/component/EditorSetting.tsx",
                lineNumber: 62,
                columnNumber: 13
              }, this),
              image.url && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { className: "flex items-center px-4 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                  "input",
                  {
                    checked: image.show,
                    id: "imageToggle",
                    type: "checkbox",
                    className: "mb-2 mr-2 cursor-pointer",
                    onChange: toggleImage
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/features/Editor/component/EditorSetting.tsx",
                    lineNumber: 74,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { htmlFor: "imageToggle", className: "mb-2 cursor-pointer", children: "Image" }, void 0, !1, {
                  fileName: "app/features/Editor/component/EditorSetting.tsx",
                  lineNumber: 81,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/features/Editor/component/EditorSetting.tsx",
                lineNumber: 73,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                "li",
                {
                  onClick: () => exportDoc(editor == null ? void 0 : editor.getText(), data.text.name),
                  className: " flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                      "svg",
                      {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "mr-2",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                          "path",
                          {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3 17C3 16.7348 3.10536 16.4804 3.29289 16.2929C3.48043 16.1054 3.73478 16 4 16H16C16.2652 16 16.5196 16.1054 16.7071 16.2929C16.8946 16.4804 17 16.7348 17 17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17ZM6.293 9.293C6.48053 9.10553 6.73484 9.00021 7 9.00021C7.26516 9.00021 7.51947 9.10553 7.707 9.293L9 10.586V3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2C10.2652 2 10.5196 2.10536 10.7071 2.29289C10.8946 2.48043 11 2.73478 11 3V10.586L12.293 9.293C12.3852 9.19749 12.4956 9.12131 12.6176 9.0689C12.7396 9.01649 12.8708 8.9889 13.0036 8.98775C13.1364 8.9866 13.2681 9.0119 13.391 9.06218C13.5139 9.11246 13.6255 9.18671 13.7194 9.28061C13.8133 9.3745 13.8875 9.48615 13.9378 9.60905C13.9881 9.73194 14.0134 9.86362 14.0123 9.9964C14.0111 10.1292 13.9835 10.2604 13.9311 10.3824C13.8787 10.5044 13.8025 10.6148 13.707 10.707L10.707 13.707C10.5195 13.8945 10.2652 13.9998 10 13.9998C9.73484 13.9998 9.48053 13.8945 9.293 13.707L6.293 10.707C6.10553 10.5195 6.00021 10.2652 6.00021 10C6.00021 9.73484 6.10553 9.48053 6.293 9.293Z",
                            className: "fill-gray-600"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/features/Editor/component/EditorSetting.tsx",
                            lineNumber: 98,
                            columnNumber: 17
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/features/Editor/component/EditorSetting.tsx",
                        lineNumber: 90,
                        columnNumber: 15
                      },
                      this
                    ),
                    "Export"
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/features/Editor/component/EditorSetting.tsx",
                  lineNumber: 86,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { className: "flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white", children: [
                "Font Size",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                  "input",
                  {
                    type: "number",
                    min: 10,
                    value: fontSize,
                    size: 2,
                    max: 40,
                    style: { border: 0, padding: 0, width: 40, color: "black" },
                    onChange: handleFontSizeChange
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/features/Editor/component/EditorSetting.tsx",
                    lineNumber: 110,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/features/Editor/component/EditorSetting.tsx",
                lineNumber: 108,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { className: "flex  items-center gap-2 px-4 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex gap-2", children: themes.map((theme) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                "div",
                {
                  className: "h-5 w-5 cursor-pointer rounded-full border-2 hover:border-gray-400",
                  title: theme.background,
                  style: { backgroundColor: theme.background },
                  onClick: () => changeTheme(theme)
                },
                theme.background,
                !1,
                {
                  fileName: "app/features/Editor/component/EditorSetting.tsx",
                  lineNumber: 124,
                  columnNumber: 21
                },
                this
              )) }, void 0, !1, {
                fileName: "app/features/Editor/component/EditorSetting.tsx",
                lineNumber: 121,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/features/Editor/component/EditorSetting.tsx",
                lineNumber: 120,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white", children: "Report" }, void 0, !1, {
                fileName: "app/features/Editor/component/EditorSetting.tsx",
                lineNumber: 135,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/features/Editor/component/EditorSetting.tsx",
            lineNumber: 58,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/features/Editor/component/EditorSetting.tsx",
        lineNumber: 53,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/features/Editor/component/EditorSetting.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// app/component/Layout/Header.tsx
var import_fa5 = require("react-icons/fa"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), Logo = () => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
  "img",
  {
    src: ForumLink + "/uploads/default/original/1X/0ac3db8e589f085c53c5ff8f36c17722888658ad.png",
    alt: "logo",
    className: "block max-h-[37px] object-contain "
  },
  void 0,
  !1,
  {
    fileName: "app/component/Layout/Header.tsx",
    lineNumber: 20,
    columnNumber: 3
  },
  this
), LogoWithTextName = ({ textName }) => (textName.length > 20 && isSmallScreen && (textName = textName.slice(0, 25) + "..."), /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex items-center gap-1", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react32.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("img", { src: logo_default, alt: "logo", className: "block object-contain", style: { maxHeight: "37px" } }, void 0, !1, {
    fileName: "app/component/Layout/Header.tsx",
    lineNumber: 33,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/component/Layout/Header.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    "h1",
    {
      onClick: () => {
        let editorElement = document.documentElement;
        editorElement == null || editorElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
      style: { top: containsTIbetanWord_default(textName) ? -7 : 0, fontSize: 24 },
      className: "relative ml-2 text-3xl  font-bold ",
      children: textName
    },
    void 0,
    !1,
    {
      fileName: "app/component/Layout/Header.tsx",
      lineNumber: 35,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/component/Layout/Header.tsx",
  lineNumber: 31,
  columnNumber: 5
}, this));
function Header({ editor }) {
  var _a, _b, _c;
  let loginFetcher = (0, import_react32.useFetcher)(), themeFetcher = (0, import_react32.useFetcher)(), translation = uselitteraTranlation(), { pathname, search } = (0, import_react32.useLocation)(), redirectTo = pathname + search, [TextNameOnHeader, setTextNameOnHeader] = (0, import_react33.useState)(!1), { user } = (0, import_react32.useOutletContext)(), { text } = (0, import_react32.useLoaderData)(), changeTheme = () => {
    var _a2;
    themeFetcher.submit(
      {
        theme: ((_a2 = user == null ? void 0 : user.preference) == null ? void 0 : _a2.theme) !== "dark" ? "dark" : "light"
      },
      {
        action: "/api/user/preference/theme",
        method: "POST"
      }
    );
  };
  (0, import_react33.useEffect)(() => {
    let timeout, handleScroll = () => {
      timeout && clearTimeout(timeout), timeout = setTimeout(() => {
        var _a2, _b2;
        var scrollTopValue = window.pageYOffset || ((_a2 = document.documentElement) == null ? void 0 : _a2.scrollTop) || ((_b2 = document.body) == null ? void 0 : _b2.scrollTop);
        let shouldShowTextName = scrollTopValue > 10 && redirectTo.includes("text");
        setTextNameOnHeader(shouldShowTextName);
      }, 10);
    };
    return window.addEventListener("scroll", handleScroll), () => window == null ? void 0 : window.addEventListener("scroll", handleScroll);
  }, [redirectTo]);
  let darkMode = ((_a = user == null ? void 0 : user.preference) == null ? void 0 : _a.theme) === "dark", [showUserMenu, setShowUserMenu] = (0, import_react33.useState)(!1), [showHeaderMenu, setShowHeaderMenu] = (0, import_react33.useState)(!1), [showSearch, setShowSearch] = (0, import_react33.useState)(!1), ref = (0, import_react_detect_click_outside3.useDetectClickOutside)({
    onTriggered: () => setShowUserMenu(!1)
  }), searchRef = (0, import_react_detect_click_outside3.useDetectClickOutside)({
    onTriggered: () => setShowSearch(!1)
  }), headermenuref = (0, import_react_detect_click_outside3.useDetectClickOutside)({
    onTriggered: () => setShowHeaderMenu(!1)
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    "nav",
    {
      className: "header shadow-header fixed top-0 z-50 w-full border-gray-200 bg-white dark:bg-gray-900 ",
      style: {
        height: showHeaderMenu ? "min-content" : 56,
        fontFamily: "serif"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: " mx-auto flex flex-wrap items-center justify-between p-2", children: [
        TextNameOnHeader ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(LogoWithTextName, { textName: text.name }, void 0, !1, {
          fileName: "app/component/Layout/Header.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react32.NavLink, { to: "/", prefetch: "intent", className: "flex w-auto items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Logo, {}, void 0, !1, {
          fileName: "app/component/Layout/Header.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/component/Layout/Header.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "button",
          {
            onClick: () => setShowHeaderMenu((p) => !p),
            type: "button",
            className: "ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 dark:text-gray-400 dark:focus:ring-gray-600 dark:hover:bg-gray-700 md:hidden",
            "aria-expanded": "false",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
                fileName: "app/component/Layout/Header.tsx",
                lineNumber: 123,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_fa5.FaBars, { color: "inherit", className: "fill-gray-400 hover:text-gray-600 ", size: 24 }, void 0, !1, {
                fileName: "app/component/Layout/Header.tsx",
                lineNumber: 124,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/component/Layout/Header.tsx",
            lineNumber: 117,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "div",
          {
            ref: headermenuref,
            className: `${!showHeaderMenu && "hidden md:flex"}  w-full flex-col items-center justify-center  md:order-2 md:w-auto md:justify-end lg:flex-row`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex w-full items-center justify-between gap-2 pt-3 md:p-0", children: [
              !user && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex gap-2", id: "user-menu-button", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("a", { href: ForumLink + "/signup", id: "signup", className: "loginButton", children: translation.signup }, void 0, !1, {
                  fileName: "app/component/Layout/Header.tsx",
                  lineNumber: 135,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(loginFetcher.Form, { method: "POST", id: "login", action: "/auth/login", className: "mr-2 flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("input", { type: "hidden", name: "redirectTo", defaultValue: redirectTo }, void 0, !1, {
                    fileName: "app/component/Layout/Header.tsx",
                    lineNumber: 139,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("button", { type: "submit", name: "_action", value: "login", className: "loginButton flex items-center gap-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_fa5.FaUserAlt, {}, void 0, !1, {
                      fileName: "app/component/Layout/Header.tsx",
                      lineNumber: 141,
                      columnNumber: 21
                    }, this),
                    translation.login
                  ] }, void 0, !0, {
                    fileName: "app/component/Layout/Header.tsx",
                    lineNumber: 140,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/component/Layout/Header.tsx",
                  lineNumber: 138,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/component/Layout/Header.tsx",
                lineNumber: 134,
                columnNumber: 15
              }, this),
              editor && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "mr-2 mt-2 ", ref: searchRef, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("button", { onClick: () => setShowSearch((p) => !p), children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_fa4.FaSearch, { className: "text-gray-400 hover:text-gray-600 ", size: 24 }, void 0, !1, {
                    fileName: "app/component/Layout/Header.tsx",
                    lineNumber: 151,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "app/component/Layout/Header.tsx",
                    lineNumber: 150,
                    columnNumber: 19
                  }, this),
                  showSearch && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "absolute right-0 top-[100%] mt-2 bg-white", style: { width: 515, maxWidth: "50vw" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_SearchString.default, { editor }, void 0, !1, {
                    fileName: "app/component/Layout/Header.tsx",
                    lineNumber: 155,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/component/Layout/Header.tsx",
                    lineNumber: 154,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/component/Layout/Header.tsx",
                  lineNumber: 149,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(EditorSetting, { editor }, void 0, !1, {
                  fileName: "app/component/Layout/Header.tsx",
                  lineNumber: 159,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/component/Layout/Header.tsx",
                lineNumber: 148,
                columnNumber: 15
              }, this),
              user && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "  rounded-full  text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0",
                    id: "user-menu-button",
                    onClick: () => setShowUserMenu((prev) => !prev),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
                        fileName: "app/component/Layout/Header.tsx",
                        lineNumber: 171,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Avatar, { alt: user.name, img: user.avatarUrl, rounded: !0, title: user == null ? void 0 : user.name, size: "sm" }, void 0, !1, {
                        fileName: "app/component/Layout/Header.tsx",
                        lineNumber: 172,
                        columnNumber: 19
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/component/Layout/Header.tsx",
                    lineNumber: 165,
                    columnNumber: 17
                  },
                  this
                ),
                showUserMenu && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  "div",
                  {
                    ref,
                    style: { top: "100%" },
                    className: "absolute right-0 z-50 list-none divide-y divide-gray-100 rounded-lg bg-white px-3 text-base shadow dark:divide-gray-600 dark:bg-gray-700",
                    id: "user-dropdown-bittun",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "px-4 py-3", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "block text-sm text-gray-900 dark:text-white", children: user.name }, void 0, !1, {
                          fileName: "app/component/Layout/Header.tsx",
                          lineNumber: 182,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "block truncate  text-sm text-gray-500 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                          "a",
                          {
                            target: "_self",
                            href: ForumLink + `/u/${user == null ? void 0 : user.username}/summary`,
                            className: "block truncate text-sm font-medium",
                            children: user == null ? void 0 : user.email
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/component/Layout/Header.tsx",
                            lineNumber: 184,
                            columnNumber: 25
                          },
                          this
                        ) }, void 0, !1, {
                          fileName: "app/component/Layout/Header.tsx",
                          lineNumber: 183,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/component/Layout/Header.tsx",
                        lineNumber: 181,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: " flex flex-col justify-center", "aria-labelledby": "user-menu-button ", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Translation, {}, void 0, !1, {
                          fileName: "app/component/Layout/Header.tsx",
                          lineNumber: 194,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                          "div",
                          {
                            onClick: changeTheme,
                            className: " cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white",
                            children: darkMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex gap-2 ", children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                                "svg",
                                {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  "aria-hidden": "true",
                                  className: `${((_b = themeFetcher.formData) == null ? void 0 : _b.get("theme")) && "animate-spin"} h-5 w-5`,
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                                    "path",
                                    {
                                      fillRule: "evenodd",
                                      d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                                      clipRule: "evenodd"
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: "app/component/Layout/Header.tsx",
                                      lineNumber: 209,
                                      columnNumber: 31
                                    },
                                    this
                                  )
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "app/component/Layout/Header.tsx",
                                  lineNumber: 202,
                                  columnNumber: 29
                                },
                                this
                              ),
                              "Light mode"
                            ] }, void 0, !0, {
                              fileName: "app/component/Layout/Header.tsx",
                              lineNumber: 201,
                              columnNumber: 27
                            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex gap-2", children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                                "svg",
                                {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  "aria-hidden": "true",
                                  className: `${((_c = themeFetcher.formData) == null ? void 0 : _c.get("theme")) && "animate-spin"} h-5 w-5`,
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("path", { d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" }, void 0, !1, {
                                    fileName: "app/component/Layout/Header.tsx",
                                    lineNumber: 226,
                                    columnNumber: 31
                                  }, this)
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "app/component/Layout/Header.tsx",
                                  lineNumber: 219,
                                  columnNumber: 29
                                },
                                this
                              ),
                              "Dark mode"
                            ] }, void 0, !0, {
                              fileName: "app/component/Layout/Header.tsx",
                              lineNumber: 218,
                              columnNumber: 27
                            }, this)
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/component/Layout/Header.tsx",
                            lineNumber: 196,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                          "a",
                          {
                            target: "_blank",
                            href: ForumLink + `/u/${user == null ? void 0 : user.username}/preferences/account`,
                            className: " flex gap-2 truncate px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                                "svg",
                                {
                                  width: "20",
                                  height: "20",
                                  viewBox: "0 0 20 20",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                                    "path",
                                    {
                                      fillRule: "evenodd",
                                      clipRule: "evenodd",
                                      d: "M11.49 3.17C11.11 1.61 8.88999 1.61 8.50999 3.17C8.45326 3.40442 8.34198 3.62212 8.18522 3.80541C8.02845 3.9887 7.83062 4.13238 7.60784 4.22477C7.38505 4.31716 7.1436 4.35564 6.90313 4.33709C6.66266 4.31854 6.42997 4.24347 6.22399 4.118C4.85199 3.282 3.28199 4.852 4.11799 6.224C4.65799 7.11 4.17899 8.266 3.17099 8.511C1.60999 8.89 1.60999 11.111 3.17099 11.489C3.40547 11.5458 3.62322 11.6572 3.80651 11.8141C3.98979 11.971 4.13343 12.1689 4.22573 12.3918C4.31803 12.6147 4.35639 12.8563 4.33766 13.0968C4.31894 13.3373 4.24368 13.5701 4.11799 13.776C3.28199 15.148 4.85199 16.718 6.22399 15.882C6.42993 15.7563 6.66265 15.6811 6.90318 15.6623C7.14371 15.6436 7.38527 15.682 7.60817 15.7743C7.83108 15.8666 8.02904 16.0102 8.18592 16.1935C8.34281 16.3768 8.45419 16.5945 8.51099 16.829C8.88999 18.39 11.111 18.39 11.489 16.829C11.546 16.5946 11.6575 16.377 11.8144 16.1939C11.9713 16.0107 12.1692 15.8672 12.3921 15.7749C12.6149 15.6826 12.8564 15.6442 13.0969 15.6628C13.3373 15.6815 13.57 15.7565 13.776 15.882C15.148 16.718 16.718 15.148 15.882 13.776C15.7565 13.57 15.6815 13.3373 15.6628 13.0969C15.6442 12.8564 15.6826 12.6149 15.7749 12.3921C15.8672 12.1692 16.0107 11.9713 16.1939 11.8144C16.377 11.6575 16.5946 11.546 16.829 11.489C18.39 11.11 18.39 8.889 16.829 8.511C16.5945 8.45419 16.3768 8.34281 16.1935 8.18593C16.0102 8.02904 15.8666 7.83109 15.7743 7.60818C15.682 7.38527 15.6436 7.14372 15.6623 6.90318C15.681 6.66265 15.7563 6.42994 15.882 6.224C16.718 4.852 15.148 3.282 13.776 4.118C13.5701 4.24368 13.3373 4.31895 13.0968 4.33767C12.8563 4.35639 12.6147 4.31804 12.3918 4.22574C12.1689 4.13344 11.971 3.9898 11.8141 3.80651C11.6572 3.62323 11.5458 3.40548 11.489 3.171L11.49 3.17ZM9.99999 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 9.99999 7C9.20434 7 8.44128 7.31607 7.87867 7.87868C7.31606 8.44129 6.99999 9.20435 6.99999 10C6.99999 10.7956 7.31606 11.5587 7.87867 12.1213C8.44128 12.6839 9.20434 13 9.99999 13V13Z",
                                      fill: darkMode ? "white" : "#111928"
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: "app/component/Layout/Header.tsx",
                                      lineNumber: 245,
                                      columnNumber: 29
                                    },
                                    this
                                  )
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "app/component/Layout/Header.tsx",
                                  lineNumber: 238,
                                  columnNumber: 27
                                },
                                this
                              ),
                              "Preferences"
                            ]
                          },
                          void 0,
                          !0,
                          {
                            fileName: "app/component/Layout/Header.tsx",
                            lineNumber: 233,
                            columnNumber: 25
                          },
                          this
                        ) }, void 0, !1, {
                          fileName: "app/component/Layout/Header.tsx",
                          lineNumber: 232,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                          import_react32.Form,
                          {
                            method: "POST",
                            action: "/auth/login",
                            className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                                "input",
                                {
                                  type: "hidden",
                                  name: "redirectTo",
                                  className: "block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
                                  defaultValue: redirectTo
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "app/component/Layout/Header.tsx",
                                  lineNumber: 261,
                                  columnNumber: 25
                                },
                                this
                              ),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                                "button",
                                {
                                  className: "flex items-center gap-2 px-1 text-sm font-medium leading-tight",
                                  type: "submit",
                                  name: "_action",
                                  value: "logout",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_fa4.FaSignOutAlt, {}, void 0, !1, {
                                      fileName: "app/component/Layout/Header.tsx",
                                      lineNumber: 273,
                                      columnNumber: 27
                                    }, this),
                                    translation.logout
                                  ]
                                },
                                void 0,
                                !0,
                                {
                                  fileName: "app/component/Layout/Header.tsx",
                                  lineNumber: 267,
                                  columnNumber: 25
                                },
                                this
                              )
                            ]
                          },
                          void 0,
                          !0,
                          {
                            fileName: "app/component/Layout/Header.tsx",
                            lineNumber: 256,
                            columnNumber: 23
                          },
                          this
                        )
                      ] }, void 0, !0, {
                        fileName: "app/component/Layout/Header.tsx",
                        lineNumber: 193,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/component/Layout/Header.tsx",
                    lineNumber: 175,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/component/Layout/Header.tsx",
                lineNumber: 164,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/component/Layout/Header.tsx",
              lineNumber: 132,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/component/Layout/Header.tsx",
            lineNumber: 126,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/component/Layout/Header.tsx",
        lineNumber: 109,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/component/Layout/Header.tsx",
      lineNumber: 102,
      columnNumber: 5
    },
    this
  );
}
function Translation() {
  let methods = (0, import_react_littera3.useLitteraMethods)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex  items-center justify-start space-x-0.5 px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_ai.AiOutlineTranslation, {}, void 0, !1, {
      fileName: "app/component/Layout/Header.tsx",
      lineNumber: 295,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      "select",
      {
        onChange: (e) => {
          methods.setLocale(e.target.value);
        },
        className: "border-transparent bg-transparent text-gray-500 focus:border-transparent focus:outline-none  focus:ring-0 focus:ring-gray-100 dark:border-gray-600  dark:bg-transparent dark:text-white dark:focus:ring-gray-700",
        children: translationCodes.map((code) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("option", { value: code.code, className: "bg-white dark:bg-slate-600 ", children: code.name }, code.code, !1, {
          fileName: "app/component/Layout/Header.tsx",
          lineNumber: 301,
          columnNumber: 11
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/component/Layout/Header.tsx",
        lineNumber: 296,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/component/Layout/Header.tsx",
    lineNumber: 294,
    columnNumber: 5
  }, this);
}
var Header_default = (0, import_react33.memo)(Header);

// app/features/TableOfContent/TableOfContent.tsx
var import_react34 = require("@remix-run/react"), import_react35 = require("react"), import_gr3 = require("react-icons/gr");
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), TableOfContents = ({ onClose, editor }) => {
  let [isOpen, setIsOpen] = (0, import_react35.useState)(!1), [isVersionOpen, setIsVersionOpen] = (0, import_react35.useState)(!0), data = (0, import_react34.useLoaderData)(), translation = uselitteraTranlation(), handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  }, handleVersionToggle = () => {
    setIsVersionOpen(!isVersionOpen);
  }, handleClose = () => {
    onClose();
  }, handleJump = (start) => {
    editor == null || editor.chain().setTextSelection(start).focus().scrollIntoView().run();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "z-50 w-full bg-gray-100 p-4 dark:bg-gray-600", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "mb-4 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h2", { className: "text-lg font-bold", children: "Table of Contents" }, void 0, !1, {
        fileName: "app/features/TableOfContent/TableOfContent.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("button", { onClick: handleClose, className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_gr3.GrClose, { size: 14, className: "cursor-pointer text-gray-500" }, void 0, !1, {
        fileName: "app/features/TableOfContent/TableOfContent.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/features/TableOfContent/TableOfContent.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/TableOfContent/TableOfContent.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        "button",
        {
          className: "mb-1 flex w-full items-center justify-between rounded-lg bg-gray-100 p-4 px-4 py-2 shadow dark:bg-gray-700",
          onClick: handleDropdownToggle,
          children: [
            "Chapter 1",
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
              "svg",
              {
                className: `ml-2 h-4 w-4 transform ${isOpen ? "rotate-0" : "rotate-90"}`,
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }, void 0, !1, {
                  fileName: "app/features/TableOfContent/TableOfContent.tsx",
                  lineNumber: 52,
                  columnNumber: 13
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/features/TableOfContent/TableOfContent.tsx",
                lineNumber: 45,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/features/TableOfContent/TableOfContent.tsx",
          lineNumber: 40,
          columnNumber: 9
        },
        this
      ),
      isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("ul", { className: "ml-4 cursor-pointer", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("li", { onClick: () => handleJump(45), children: "Section 1.1" }, void 0, !1, {
          fileName: "app/features/TableOfContent/TableOfContent.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("li", { onClick: () => handleJump(1845), children: "Section 1.2" }, void 0, !1, {
          fileName: "app/features/TableOfContent/TableOfContent.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("li", { onClick: () => handleJump(4445), children: "Section 1.3" }, void 0, !1, {
          fileName: "app/features/TableOfContent/TableOfContent.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/TableOfContent/TableOfContent.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/TableOfContent/TableOfContent.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    data.versions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        "button",
        {
          className: "mb-1 flex w-full items-center justify-between rounded-lg bg-white px-4 py-2 shadow dark:bg-gray-700",
          onClick: handleVersionToggle,
          children: [
            "versions",
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
              "svg",
              {
                className: `ml-2 h-4 w-4 transform ${isVersionOpen ? "rotate-0" : "rotate-90"}`,
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }, void 0, !1, {
                  fileName: "app/features/TableOfContent/TableOfContent.tsx",
                  lineNumber: 77,
                  columnNumber: 15
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/features/TableOfContent/TableOfContent.tsx",
                lineNumber: 70,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/features/TableOfContent/TableOfContent.tsx",
          lineNumber: 65,
          columnNumber: 11
        },
        this
      ),
      isVersionOpen && data.versions.map(({ version, count }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "mr-3", children: [
        translation[version],
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex gap-2", children: new Array(count).fill(0).map((_, index2) => {
          let textId = (0, import_react34.useLocation)().pathname.split("/")[2], page = index2 + 1;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "rounded-sm bg-slate-100 p-1 shadow hover:bg-yellow-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react34.Link, { to: `/text/${textId}/page/${page}/?version=${version}`, children: page }, void 0, !1, {
            fileName: "app/features/TableOfContent/TableOfContent.tsx",
            lineNumber: 92,
            columnNumber: 27
          }, this) }, index2 + "pages", !1, {
            fileName: "app/features/TableOfContent/TableOfContent.tsx",
            lineNumber: 91,
            columnNumber: 25
          }, this);
        }) }, void 0, !1, {
          fileName: "app/features/TableOfContent/TableOfContent.tsx",
          lineNumber: 85,
          columnNumber: 19
        }, this)
      ] }, version + index, !0, {
        fileName: "app/features/TableOfContent/TableOfContent.tsx",
        lineNumber: 83,
        columnNumber: 17
      }, this))
    ] }, void 0, !0, {
      fileName: "app/features/TableOfContent/TableOfContent.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/TableOfContent/TableOfContent.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}, TableOfContent_default = TableOfContents;

// app/features/TableOfContent/index.tsx
var import_recoil11 = require("recoil");
var import_fa6 = require("react-icons/fa"), import_framer_motion2 = require("framer-motion");
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function TableContent({ editor }) {
  let [showTable, setShowTable] = (0, import_recoil11.useRecoilState)(showTableContent);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
    "div",
    {
      style: {
        top: 56,
        width: showTable ? 272 : 50
      },
      id: "tableContent",
      className: "sticky hidden md:flex",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          "button",
          {
            className: "absolute rounded-full bg-gray-200 dark:bg-gray-700 dark:text-gray-300",
            style: { top: 10, left: 10, padding: 10, height: 40, width: 40 },
            onClick: () => setShowTable((p) => !p),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_fa6.FaListUl, { size: 22, className: "cursor-pointer text-gray-500  " }, void 0, !1, {
              fileName: "app/features/TableOfContent/index.tsx",
              lineNumber: 31,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/features/TableOfContent/index.tsx",
            lineNumber: 26,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          import_framer_motion2.motion.div,
          {
            initial: { x: "-100%" },
            animate: { x: showTable ? 0 : "-100%" },
            transition: { duration: 0.5 },
            className: "z-10 w-full overflow-hidden rounded-2xl",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(TableOfContent_default, { editor, onClose: () => setShowTable(!1) }, void 0, !1, {
              fileName: "app/features/TableOfContent/index.tsx",
              lineNumber: 39,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/features/TableOfContent/index.tsx",
            lineNumber: 33,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/features/TableOfContent/index.tsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}
var TableOfContent_default2 = TableContent;

// app/features/Suggestion/SuggestionContainer.tsx
var import_recoil12 = require("recoil");
var import_gr4 = require("react-icons/gr");

// app/features/Suggestion/Suggestion.tsx
var import_react38 = require("@remix-run/react"), import_react39 = require("react");
var import_react_detect_click_outside5 = require("react-detect-click-outside");
var import_uuid3 = require("uuid");

// app/features/Suggestion/Comment.tsx
var import_react36 = require("react"), import_react_detect_click_outside4 = require("react-detect-click-outside"), import_react37 = require("@remix-run/react");
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function Comments({ comments }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: comments.length > 0 && comments.map((comment, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Comment, { comment }, comment.id, !1, {
    fileName: "app/features/Suggestion/Comment.tsx",
    lineNumber: 18,
    columnNumber: 65
  }, this)) }, void 0, !1, {
    fileName: "app/features/Suggestion/Comment.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var Comment = ({ comment }) => {
  var _a, _b;
  let [openEditMenu, setOpenEditMenu] = (0, import_react36.useState)(!1), [edit, setEdit] = (0, import_react36.useState)(!1), [newContent, setNewContent] = (0, import_react36.useState)(comment.text), [checked, setChecked] = (0, import_react36.useState)(comment.type === "support"), { user } = (0, import_react37.useOutletContext)(), ref = (0, import_react_detect_click_outside4.useDetectClickOutside)({
    onTriggered: () => setOpenEditMenu(!1)
  }), color = comment.type === "support" ? "bg-green-100" : comment.type === "reject" ? "bg-red-100" : null, time = timeAgo(comment.createdAt), fetcher = (0, import_react37.useFetcher)(), handleEdit = () => {
    setEdit(!0);
  }, handleDelete = () => {
    confirm("do you want to delete the post") ? fetcher.submit(
      {
        id: comment.id
      },
      {
        action: "api/suggestion/comment",
        method: "DELETE",
        encType: "multipart/form-data"
      }
    ) : console.log(...oo_oo8("a575772d_0", "cancelled"));
  }, handleSubmit = () => {
    fetcher.submit(
      {
        id: comment.id,
        newContent,
        type: checked ? "support" : "reject"
      },
      {
        action: "api/suggestion/comment",
        method: "PATCH",
        encType: "multipart/form-data"
      }
    ), setEdit(!1);
  }, audioPresent = comment.audioUrl && comment.audioUrl !== "";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: `rounded-lg p-2  text-base dark:bg-gray-700 ${color}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mb-2 flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("img", { className: "mr-2 h-6 w-6 rounded-full", src: (_a = comment.author) == null ? void 0 : _a.avatarUrl, alt: "author image" }, void 0, !1, {
            fileName: "app/features/Suggestion/Comment.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this),
          (_b = comment.author) == null ? void 0 : _b.name
        ] }, void 0, !0, {
          fileName: "app/features/Suggestion/Comment.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: time }, void 0, !1, {
          fileName: "app/features/Suggestion/Comment.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/Suggestion/Comment.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "relative ml-3", ref, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          "button",
          {
            className: " inline-flex items-center rounded-lg text-center text-sm font-medium  text-gray-400    dark:bg-gray-700 dark:focus:ring-gray-600 dark:hover:bg-gray-600",
            type: "button",
            onClick: () => setOpenEditMenu((p) => !p),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
              "svg",
              {
                className: "h-5 w-5",
                "aria-hidden": "true",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" }, void 0, !1, {
                  fileName: "app/features/Suggestion/Comment.tsx",
                  lineNumber: 95,
                  columnNumber: 15
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/features/Suggestion/Comment.tsx",
                lineNumber: 88,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/features/Suggestion/Comment.tsx",
            lineNumber: 83,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          "div",
          {
            className: `${openEditMenu ? "absolute" : "hidden"} right-0 top-1.5 z-10 w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
              "ul",
              {
                className: "py-1 text-sm text-gray-700 dark:text-gray-200",
                "aria-labelledby": "dropdownMenuIconHorizontalButton",
                children: [
                  user && user.username === (comment == null ? void 0 : comment.author.username) && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
                      "div",
                      {
                        onClick: handleEdit,
                        className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                        children: "Edit"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/features/Suggestion/Comment.tsx",
                        lineNumber: 111,
                        columnNumber: 21
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/features/Suggestion/Comment.tsx",
                      lineNumber: 110,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
                      "div",
                      {
                        onClick: handleDelete,
                        className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                        children: "Remove"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/features/Suggestion/Comment.tsx",
                        lineNumber: 119,
                        columnNumber: 21
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/features/Suggestion/Comment.tsx",
                      lineNumber: 118,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/features/Suggestion/Comment.tsx",
                    lineNumber: 109,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white", children: "Report" }, void 0, !1, {
                    fileName: "app/features/Suggestion/Comment.tsx",
                    lineNumber: 129,
                    columnNumber: 17
                  }, this) }, void 0, !1, {
                    fileName: "app/features/Suggestion/Comment.tsx",
                    lineNumber: 128,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/features/Suggestion/Comment.tsx",
                lineNumber: 104,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/features/Suggestion/Comment.tsx",
            lineNumber: 99,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/features/Suggestion/Comment.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Suggestion/Comment.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    edit ? /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(TextArea_default, { value: newContent, onChange: (e) => setNewContent(e.target.value) }, void 0, !1, {
        fileName: "app/features/Suggestion/Comment.tsx",
        lineNumber: 139,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mt-2 flex justify-between gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex-1 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("label", { htmlFor: "checkbox" + comment.id, className: "mr-2", children: "support" }, void 0, !1, {
            fileName: "app/features/Suggestion/Comment.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            "input",
            {
              type: "checkbox",
              id: "checkbox" + comment.id,
              className: "h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600",
              defaultChecked: checked,
              onChange: (e) => setChecked(e.target.checked)
            },
            void 0,
            !1,
            {
              fileName: "app/features/Suggestion/Comment.tsx",
              lineNumber: 145,
              columnNumber: 15
            },
            this
          ),
          audioPresent && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_AudioPlayer.default, { src: comment.audioUrl }, void 0, !1, {
            fileName: "app/features/Suggestion/Comment.tsx",
            lineNumber: 152,
            columnNumber: 32
          }, this)
        ] }, void 0, !0, {
          fileName: "app/features/Suggestion/Comment.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Button, { onClick: handleSubmit, label: "submit", type: "submit" }, void 0, !1, {
          fileName: "app/features/Suggestion/Comment.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Button, { onClick: () => setEdit(!1), label: "cancel", type: "reset" }, void 0, !1, {
          fileName: "app/features/Suggestion/Comment.tsx",
          lineNumber: 155,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/Suggestion/Comment.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Suggestion/Comment.tsx",
      lineNumber: 138,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: [
      audioPresent && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_AudioPlayer.default, { src: comment.audioUrl }, void 0, !1, {
        fileName: "app/features/Suggestion/Comment.tsx",
        lineNumber: 160,
        columnNumber: 28
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "text-gray-500 dark:text-gray-400", children: comment.text }, void 0, !1, {
        fileName: "app/features/Suggestion/Comment.tsx",
        lineNumber: 162,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Suggestion/Comment.tsx",
      lineNumber: 159,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/Suggestion/Comment.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
};
function oo_cm8() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo8(i, ...v) {
  try {
    oo_cm8().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/features/Suggestion/Suggestion.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function Suggestion2({ editor, suggest, optimistic = !1, count }) {
  var _a, _b, _c, _d, _e;
  let likeFetcher = useFetcherWithPromise(), deleteFetcher = (0, import_react38.useFetcher)(), editFetcher = (0, import_react38.useFetcher)(), [effect, setEffect] = (0, import_react39.useState)(!1), [openEdit, setOpenEdit] = (0, import_react39.useState)(!1), [openComment, setOpenComment] = (0, import_react39.useState)(!1), [openEditMenu, setOpenEditMenu] = (0, import_react39.useState)(!1), { text, user } = (0, import_react38.useLoaderData)(), ref = (0, import_react_detect_click_outside5.useDetectClickOutside)({
    onTriggered: () => setOpenEditMenu(!1)
  }), likedByMe = user ? suggest.likedBy.some((l) => (l == null ? void 0 : l.username) === user.username) : !1, likeInFetcher = (_a = likeFetcher == null ? void 0 : likeFetcher.formData) == null ? void 0 : _a.get("like"), likeCount = likeFetcher.data ? (_b = likeFetcher.data) == null ? void 0 : _b.likedBy.likedBy.length : suggest.likedBy.length;
  likeInFetcher === "true" && (likedByMe = !0, likeFetcher.state === "submitting" && likeCount++), likeInFetcher === "false" && (likedByMe = !1, likeFetcher.state === "submitting" && likeCount--);
  let handleLike = async (id) => {
    if (!user)
      return;
    setEffect(!0);
    let res = await likeFetcher.submit(
      {
        id,
        like: likedByMe ? "false" : "true",
        threadId: suggest.threadId
      },
      { method: "POST", action: "api/suggestion/like" }
    );
    replaceMarkContent(editor, suggest.threadId, res == null ? void 0 : res.highestLiked);
  }, time = timeAgo(suggest.created_at);
  function deleteSuggestion2(id) {
    confirm("do you want to delete the post") ? (count === 1 && (editor == null || editor.commands.unsetSuggestion()), deleteFetcher.submit(
      {
        id
      },
      {
        action: "api/suggestion",
        method: "DELETE"
      }
    )) : console.log(...oo_oo9("52b28277_0", "cancelled"));
  }
  function checkPendetaName(val) {
    switch (val.toLowerCase()) {
      case "derge":
        return "\u0F66\u0FA1\u0F7A\u0F0B\u0F51\u0F42\u0F7A";
      case "narthang":
        return "\u0F66\u0FA3\u0F62\u0F0B\u0F50\u0F44\u0F0C\u0F0D";
      case "peking":
        return "\u0F54\u0F7A\u0F0B\u0F45\u0F72\u0F53\u0F0D";
      case "chone":
        return "\u0F46\u0F7C\u0F0B\u0F42\u0F53\u0F66\u0F0D";
      default:
        return val;
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: `${deleteFetcher.formData && "hidden"} p-3 `, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "relative mb-2 flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "  flex items-center gap-3", children: [
        suggest.user.length && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex -space-x-4", children: (_c = suggest.user) == null ? void 0 : _c.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "img",
            {
              title: item.username,
              className: "h-6 w-6 rounded-full border-2 border-white dark:border-gray-800",
              src: item.avatarUrl,
              alt: "a"
            },
            item.id,
            !1,
            {
              fileName: "app/features/Suggestion/Suggestion.tsx",
              lineNumber: 103,
              columnNumber: 19
            },
            this
          )) }, void 0, !1, {
            fileName: "app/features/Suggestion/Suggestion.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex gap-1 text-base font-medium leading-tight text-gray-900 dark:text-gray-200 ", children: (_d = suggest.user) == null ? void 0 : _d.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "text-md capitalize", children: [
            checkPendetaName(item.username),
            index !== suggest.user.length - 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { children: " | " }, void 0, !1, {
              fileName: "app/features/Suggestion/Suggestion.tsx",
              lineNumber: 116,
              columnNumber: 59
            }, this)
          ] }, item.id + index, !0, {
            fileName: "app/features/Suggestion/Suggestion.tsx",
            lineNumber: 114,
            columnNumber: 19
          }, this)) }, void 0, !1, {
            fileName: "app/features/Suggestion/Suggestion.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/features/Suggestion/Suggestion.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        suggest.oldValue && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: time }, void 0, !1, {
          fileName: "app/features/Suggestion/Suggestion.tsx",
          lineNumber: 122,
          columnNumber: 32
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/Suggestion/Suggestion.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        "button",
        {
          className: "inline-flex items-center rounded-lg text-center text-sm font-medium  text-gray-400 dark:bg-gray-700 dark:focus:ring-gray-600 dark:hover:bg-gray-600",
          type: "button",
          onClick: () => setOpenEditMenu((p) => !p),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "svg",
            {
              className: "h-5 w-5",
              "aria-hidden": "true",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("path", { d: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" }, void 0, !1, {
                fileName: "app/features/Suggestion/Suggestion.tsx",
                lineNumber: 136,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/features/Suggestion/Suggestion.tsx",
              lineNumber: 129,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/features/Suggestion/Suggestion.tsx",
          lineNumber: 124,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        "div",
        {
          ref,
          className: `${openEditMenu ? "absolute" : "hidden"} right-0 top-1.5 z-10 w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "ul",
            {
              className: "py-1 text-sm text-gray-700 dark:text-gray-200",
              "aria-labelledby": "dropdownMenuIconHorizontalButton",
              children: [
                user && suggest.user.length && ((_e = suggest.user) == null ? void 0 : _e.some((e) => e.username === user.username)) && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                    "div",
                    {
                      onClick: () => setOpenEdit(!0),
                      className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                      children: "Edit"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/features/Suggestion/Suggestion.tsx",
                      lineNumber: 153,
                      columnNumber: 19
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/features/Suggestion/Suggestion.tsx",
                    lineNumber: 152,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                    "div",
                    {
                      onClick: () => deleteSuggestion2(suggest.id),
                      className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                      children: "Remove"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/features/Suggestion/Suggestion.tsx",
                      lineNumber: 161,
                      columnNumber: 19
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/features/Suggestion/Suggestion.tsx",
                    lineNumber: 160,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/features/Suggestion/Suggestion.tsx",
                  lineNumber: 151,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white", children: "Report" }, void 0, !1, {
                  fileName: "app/features/Suggestion/Suggestion.tsx",
                  lineNumber: 171,
                  columnNumber: 15
                }, this) }, void 0, !1, {
                  fileName: "app/features/Suggestion/Suggestion.tsx",
                  lineNumber: 170,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/features/Suggestion/Suggestion.tsx",
              lineNumber: 146,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/features/Suggestion/Suggestion.tsx",
          lineNumber: 140,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/features/Suggestion/Suggestion.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    suggest.oldValue ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: " mb-3 w-full text-base leading-normal text-black", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "text-sm font-bold", children: "Replace :" }, void 0, !1, {
        fileName: "app/features/Suggestion/Suggestion.tsx",
        lineNumber: 180,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        "span",
        {
          onClick: () => {
            text.author.username === user.username && replaceMarkContent(editor, suggest.threadId, suggest.oldValue);
          },
          className: "text-gray-500 dark:text-gray-100",
          children: [
            '"',
            suggest.oldValue,
            '"'
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/features/Suggestion/Suggestion.tsx",
          lineNumber: 181,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "text-sm font-bold", children: " with :" }, void 0, !1, {
        fileName: "app/features/Suggestion/Suggestion.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, this),
      openEdit ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        editFetcher.Form,
        {
          className: "flex gap-2",
          action: "/api/suggestion",
          method: "PATCH",
          onSubmit: () => setOpenEdit(!1),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              "input",
              {
                name: "newValue",
                type: "text",
                className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-xs",
                defaultValue: suggest.newValue
              },
              void 0,
              !1,
              {
                fileName: "app/features/Suggestion/Suggestion.tsx",
                lineNumber: 198,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("input", { name: "id", type: "text", value: suggest.id, hidden: !0 }, void 0, !1, {
              fileName: "app/features/Suggestion/Suggestion.tsx",
              lineNumber: 204,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Button, { label: editFetcher.state === "submitting" ? "saving" : "confirm", type: "submit" }, void 0, !1, {
              fileName: "app/features/Suggestion/Suggestion.tsx",
              lineNumber: 205,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Button, { label: "cancel", type: "reset", onClick: () => setOpenEdit(!1) }, void 0, !1, {
              fileName: "app/features/Suggestion/Suggestion.tsx",
              lineNumber: 206,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/features/Suggestion/Suggestion.tsx",
          lineNumber: 192,
          columnNumber: 13
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        "span",
        {
          onClick: () => {
            text.author.username === user.username && replaceMarkContent(editor, suggest.threadId, suggest.newValue);
          },
          className: "text-gray-500 dark:text-gray-100 ",
          children: [
            '"',
            suggest.newValue,
            '"'
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/features/Suggestion/Suggestion.tsx",
          lineNumber: 209,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/features/Suggestion/Suggestion.tsx",
      lineNumber: 179,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      "span",
      {
        onClick: () => {
          text.author.username === user.username && replaceMarkContent(editor, suggest.threadId, suggest.newValue);
        },
        className: "text-gray-500 dark:text-gray-100 ",
        children: [
          '"',
          suggest.newValue,
          '"'
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/features/Suggestion/Suggestion.tsx",
        lineNumber: 222,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/features/Suggestion/Suggestion.tsx",
      lineNumber: 221,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mb-2", children: (suggest == null ? void 0 : suggest.audioUrl) && suggest.audioUrl !== "" && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_AudioPlayer.default, { src: suggest == null ? void 0 : suggest.audioUrl }, void 0, !1, {
      fileName: "app/features/Suggestion/Suggestion.tsx",
      lineNumber: 235,
      columnNumber: 58
    }, this) }, void 0, !1, {
      fileName: "app/features/Suggestion/Suggestion.tsx",
      lineNumber: 234,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex justify-between", children: optimistic ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "text-light text-sm ", children: "saving" }, void 0, !1, {
      fileName: "app/features/Suggestion/Suggestion.tsx",
      lineNumber: 239,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        "button",
        {
          disabled: likeFetcher.state === "submitting",
          onClick: () => handleLike(suggest.id),
          className: `${effect && "animate-wiggle"} flex cursor-pointer items-center justify-start space-x-1.5`,
          onAnimationEnd: () => setEffect(!1),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              "path",
              {
                style: likedByMe ? { fill: "lightgreen" } : { fill: "gray" },
                d: "M0.800049 7.95005C0.800049 7.77276 0.834968 7.59722 0.902812 7.43343C0.970655 7.26964 1.0701 7.12081 1.19545 6.99545C1.32081 6.8701 1.46964 6.77066 1.63343 6.70281C1.79722 6.63497 1.97276 6.60005 2.15005 6.60005C2.32733 6.60005 2.50288 6.63497 2.66667 6.70281C2.83046 6.77066 2.97928 6.8701 3.10464 6.99545C3.23 7.12081 3.32944 7.26964 3.39729 7.43343C3.46513 7.59722 3.50005 7.77276 3.50005 7.95005V13.35C3.50005 13.7081 3.35782 14.0515 3.10464 14.3046C2.85147 14.5578 2.50809 14.7 2.15005 14.7C1.79201 14.7 1.44863 14.5578 1.19545 14.3046C0.942281 14.0515 0.800049 13.7081 0.800049 13.35V7.95005ZM4.40005 7.79975V12.6867C4.39989 13.0212 4.49295 13.3492 4.66877 13.6337C4.84459 13.9183 5.09623 14.1482 5.39545 14.2977L5.44045 14.3202C5.93985 14.5698 6.49045 14.6999 7.04875 14.7H11.9231C12.3394 14.7002 12.7429 14.5561 13.0648 14.2922C13.3868 14.0284 13.6074 13.6611 13.6889 13.2528L14.7689 7.85285C14.8211 7.59173 14.8147 7.32229 14.7502 7.06395C14.6857 6.8056 14.5647 6.56478 14.3959 6.35886C14.227 6.15293 14.0146 5.98703 13.774 5.87311C13.5333 5.75918 13.2703 5.70008 13.004 5.70005H9.80005V2.10005C9.80005 1.62266 9.61041 1.16482 9.27284 0.827257C8.93528 0.489691 8.47744 0.300049 8.00005 0.300049C7.76135 0.300049 7.53244 0.39487 7.36365 0.563653C7.19487 0.732435 7.10005 0.961354 7.10005 1.20005V1.80035C7.10005 2.57928 6.84741 3.3372 6.38005 3.96035L5.12005 5.63975C4.65269 6.2629 4.40005 7.02082 4.40005 7.79975V7.79975Z"
              },
              void 0,
              !1,
              {
                fileName: "app/features/Suggestion/Suggestion.tsx",
                lineNumber: 250,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/features/Suggestion/Suggestion.tsx",
              lineNumber: 249,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "  text-sm font-medium leading-tight text-gray-500 dark:text-gray-100", children: likeCount > 0 && likeCount }, void 0, !1, {
              fileName: "app/features/Suggestion/Suggestion.tsx",
              lineNumber: 255,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/features/Suggestion/Suggestion.tsx",
          lineNumber: 243,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/features/Suggestion/Suggestion.tsx",
        lineNumber: 242,
        columnNumber: 13
      }, this),
      user && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        "div",
        {
          onClick: () => setOpenComment((prev) => !prev),
          className: "flex items-start justify-start space-x-1.5  rounded-t-lg ",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              "svg",
              {
                width: "16",
                height: "13",
                viewBox: "0 0 16 13",
                className: "fill-gray-500 dark:fill-gray-100",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("path", { d: "M6.13858 7.95584L5.67917 8.15319C5.65821 8.10438 5.62774 8.06025 5.58953 8.02335L5.58328 8.01731L5.58334 8.01726L3.51964 5.95356L2.66608 5.1H3.87319H8.90059C10.2267 5.1 11.4984 5.62679 12.4361 6.56447C13.3738 7.50215 13.9006 8.77392 13.9006 10.1V11.9C13.9006 12.0061 13.9427 12.1078 14.0177 12.1828C14.0928 12.2579 14.1945 12.3 14.3006 12.3C14.4067 12.3 14.5084 12.2579 14.5834 12.1828C14.6584 12.1078 14.7006 12.0061 14.7006 11.9V10.1C14.7006 8.56175 14.0895 7.08649 13.0018 5.99878C11.9141 4.91107 10.4388 4.3 8.90059 4.3H3.87319H2.66608L3.51964 3.44645L5.58328 1.3828C5.5833 1.38279 5.58332 1.38277 5.58334 1.38275C5.65829 1.30774 5.7004 1.20604 5.7004 1.1C5.7004 0.993988 5.65831 0.892311 5.58339 0.817309C5.58335 0.817274 5.58332 0.817239 5.58328 0.817203M6.13858 7.95584L4.66429 0.463703C4.83306 0.294979 5.06194 0.200195 5.30059 0.200195C5.53924 0.200195 5.76811 0.294979 5.93689 0.463703L5.58328 0.817203M6.13858 7.95584L5.67917 8.15319C5.70014 8.20199 5.71117 8.25448 5.71163 8.30759C5.7121 8.3607 5.70197 8.41337 5.68186 8.46253C5.66175 8.51169 5.63205 8.55635 5.59449 8.59391C5.55693 8.63146 5.51227 8.66116 5.46312 8.68128C5.41396 8.70139 5.36128 8.71151 5.30817 8.71105C5.25506 8.71059 5.20257 8.69955 5.15377 8.67859C5.10497 8.65763 5.06083 8.62715 5.02393 8.58895L5.02399 8.58889L5.01784 8.58275L1.4179 4.9828C1.34291 4.90779 1.30078 4.80607 1.30078 4.7C1.30078 4.59396 1.34289 4.49226 1.41784 4.41726C1.41786 4.41724 1.41788 4.41722 1.4179 4.4172L5.01779 0.81731L6.13858 7.95584ZM5.58328 0.817203C5.50828 0.742282 5.40661 0.700195 5.30059 0.700195C5.19455 0.700195 5.09285 0.742302 5.01784 0.817256L5.58328 0.817203Z" }, void 0, !1, {
                  fileName: "app/features/Suggestion/Suggestion.tsx",
                  lineNumber: 272,
                  columnNumber: 19
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/features/Suggestion/Suggestion.tsx",
                lineNumber: 265,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("button", { className: "text-sm font-medium leading-tight text-gray-500 dark:text-gray-100", children: openComment ? "close" : "Comment" }, void 0, !1, {
              fileName: "app/features/Suggestion/Suggestion.tsx",
              lineNumber: 274,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/features/Suggestion/Suggestion.tsx",
          lineNumber: 261,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/features/Suggestion/Suggestion.tsx",
      lineNumber: 241,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/features/Suggestion/Suggestion.tsx",
      lineNumber: 237,
      columnNumber: 7
    }, this),
    openComment && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      CommentSection,
      {
        id: suggest.id,
        setOpenComment,
        comments: suggest.SuggestionComment,
        type: likedByMe ? "support" : "reject"
      },
      void 0,
      !1,
      {
        fileName: "app/features/Suggestion/Suggestion.tsx",
        lineNumber: 283,
        columnNumber: 9
      },
      this
    )
  ] }, suggest.id, !0, {
    fileName: "app/features/Suggestion/Suggestion.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}
function CommentSection({ id, setOpenComment, comments, type }) {
  let [commentText, setCommentText] = (0, import_react39.useState)(""), [audio, setAudio] = (0, import_react39.useState)({ tempUrl: "", blob: null }), data = (0, import_react38.useLoaderData)(), postCommentFetcher = (0, import_react38.useFetcher)();
  function postComment() {
    var _a;
    let item = {
      id,
      commentContent: commentText,
      type
    }, blob = audio.blob;
    var form_data = new FormData();
    blob && form_data.append("file", blob, `text-${(_a = data == null ? void 0 : data.text) == null ? void 0 : _a.id}-${(0, import_uuid3.v4)()}.wav`);
    for (var key in item)
      form_data.append(key, item[key]);
    postCommentFetcher.submit(form_data, {
      method: "POST",
      action: "/api/suggestion/comment",
      encType: "multipart/form-data"
    }), setCommentText(""), setAudio({ blob: null, tempUrl: "" });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mt-2 flex justify-between gap-2 rounded  bg-gray-100 pt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex flex-1 flex-col gap-2 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      TextArea_default,
      {
        onChange: (e) => setCommentText(e.target.value),
        placeholder: "comment on suggestion",
        value: commentText,
        rows: 1
      },
      void 0,
      !1,
      {
        fileName: "app/features/Suggestion/Suggestion.tsx",
        lineNumber: 330,
        columnNumber: 9
      },
      this
    ),
    audio.tempUrl !== "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "my-2 flex w-full items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_AudioPlayer.default, { src: audio.tempUrl }, void 0, !1, {
        fileName: "app/features/Suggestion/Suggestion.tsx",
        lineNumber: 339,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { onClick: () => setAudio({ tempUrl: "", blob: null }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z",
          className: "fill-gray-200"
        },
        void 0,
        !1,
        {
          fileName: "app/features/Suggestion/Suggestion.tsx",
          lineNumber: 342,
          columnNumber: 19
        },
        this
      ) }, void 0, !1, {
        fileName: "app/features/Suggestion/Suggestion.tsx",
        lineNumber: 341,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/features/Suggestion/Suggestion.tsx",
        lineNumber: 340,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Suggestion/Suggestion.tsx",
      lineNumber: 338,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/features/Suggestion/Suggestion.tsx",
      lineNumber: 337,
      columnNumber: 11
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex justify-between", children: [
      audio.tempUrl === "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_AudioRecorder.default, { setAudio }, void 0, !1, {
        fileName: "app/features/Suggestion/Suggestion.tsx",
        lineNumber: 354,
        columnNumber: 35
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", {}, void 0, !1, {
        fileName: "app/features/Suggestion/Suggestion.tsx",
        lineNumber: 354,
        columnNumber: 75
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          Button,
          {
            label: postCommentFetcher.state === "submitting" ? "commenting" : "comment",
            type: "submit",
            onClick: postComment,
            disabled: !!postCommentFetcher.formData
          },
          void 0,
          !1,
          {
            fileName: "app/features/Suggestion/Suggestion.tsx",
            lineNumber: 356,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Button, { label: "cancel", type: "reset", onClick: () => setOpenComment(!1) }, void 0, !1, {
          fileName: "app/features/Suggestion/Suggestion.tsx",
          lineNumber: 362,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/Suggestion/Suggestion.tsx",
        lineNumber: 355,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Suggestion/Suggestion.tsx",
      lineNumber: 353,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Comments, { comments }, void 0, !1, {
      fileName: "app/features/Suggestion/Suggestion.tsx",
      lineNumber: 365,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/Suggestion/Suggestion.tsx",
    lineNumber: 329,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/features/Suggestion/Suggestion.tsx",
    lineNumber: 328,
    columnNumber: 5
  }, this);
}
function oo_cm9() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo9(i, ...v) {
  try {
    oo_cm9().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/features/Suggestion/SuggestionContainer.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function Suggestions({ editor, suggestions }) {
  let suggestionThread = (0, import_recoil12.useRecoilValue)(selectedSuggestionThread), setOpenContent = (0, import_recoil12.useSetRecoilState)(showSidebar), handleClose = () => {
    setOpenContent(!1);
  }, list = suggestions.filter((sug) => sug.threadId === suggestionThread.id), groupedSuggestion = transformObjectsByNewValue(list);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
    "div",
    {
      className: "z-1 ml-2 mt-4 h-[80vh] max-h-[80vh] overflow-visible overflow-y-auto bg-slate-50 p-2 shadow-md dark:bg-gray-700",
      style: { minWidth: 350, fontFamily: "sans-serif" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex flex-col  gap-2 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h2", { className: "text-lg font-bold text-gray-900 dark:text-white lg:text-2xl", children: "Suggestion" }, void 0, !1, {
            fileName: "app/features/Suggestion/SuggestionContainer.tsx",
            lineNumber: 25,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("button", { onClick: handleClose, className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_gr4.GrClose, { size: 14, className: "cursor-pointer text-gray-500" }, void 0, !1, {
            fileName: "app/features/Suggestion/SuggestionContainer.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/features/Suggestion/SuggestionContainer.tsx",
            lineNumber: 26,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/features/Suggestion/SuggestionContainer.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this),
        groupedSuggestion.map((suggest) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          Suggestion2,
          {
            optimistic: !1,
            editor,
            suggest,
            count: groupedSuggestion.length
          },
          suggest.id,
          !1,
          {
            fileName: "app/features/Suggestion/SuggestionContainer.tsx",
            lineNumber: 32,
            columnNumber: 13
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/features/Suggestion/SuggestionContainer.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/features/Suggestion/SuggestionContainer.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}
var SuggestionContainer_default = Suggestions;
function combineObjectsByNewValue(objects) {
  let combinedObjects = {};
  return objects.forEach((obj) => {
    let { newValue } = obj;
    newValue in combinedObjects ? combinedObjects[newValue].push(obj) : combinedObjects[newValue] = [obj];
  }), combinedObjects;
}
function transformObjectsByNewValue(objects) {
  let transformedObjects = [], combinedObjects = combineObjectsByNewValue(objects);
  for (let newValue in combinedObjects) {
    let objectsWithSameNewValue = combinedObjects[newValue], usersArray = objectsWithSameNewValue.map((obj) => obj.user), likedByArray = objectsWithSameNewValue.reduce((likedByArr, obj) => (likedByArr.push(...obj.likedBy), likedByArr), []);
    objectsWithSameNewValue.forEach((obj) => {
      let newObj = { ...obj };
      newObj.user = usersArray, newObj.likedBy = likedByArray, transformedObjects.push(newObj);
    });
  }
  return [...new Set(transformedObjects.map((obj) => obj.newValue))].map((newValue) => transformedObjects.filter((obj) => obj.newValue === newValue)[0]);
}

// app/features/Suggestion/SuggestionForm.tsx
var import_react40 = require("@remix-run/react"), import_react41 = require("react"), import_recoil13 = require("recoil");
var import_uuid4 = require("uuid");
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function SuggestionForm({ editor, page }) {
  var _a, _b, _c, _d, _e, _f;
  let data = (0, import_react40.useLoaderData)(), { user } = data, [suggestionInput, setSuggestionInput] = (0, import_react41.useState)(""), [error, setError] = (0, import_react41.useState)(null), addSuggestion = useFetcherWithPromise(), setSelectedSuggestion = (0, import_recoil13.useSetRecoilState)(selectedSuggestionThread), setOpenSuggestion = (0, import_recoil13.useSetRecoilState)(openSuggestionState), [audio, setAudio] = (0, import_react41.useState)({ tempUrl: "", blob: null }), handleSuggestionSubmit = async () => {
    var _a2;
    if (suggestionInput === "")
      return setError("suggestion cannot be empty"), null;
    let { state } = editor, { from, to } = state.selection, originalText = state.doc.textBetween(from, to, " "), id = null;
    editor.isActive("suggestion") ? id = editor.getAttributes("suggestion").id : id = (0, import_uuid4.v4)(), setSelectedSuggestion({
      id
    });
    let item = {
      oldValue: originalText,
      textId: data.text.id,
      pageId: page == null ? void 0 : page.id,
      newValue: suggestionInput,
      userId: user == null ? void 0 : user.id,
      threadId: id
    }, blob = audio.blob;
    var form_data = new FormData();
    blob && form_data.append("file", blob, `text-${(_a2 = data == null ? void 0 : data.text) == null ? void 0 : _a2.id}-${(0, import_uuid4.v4)()}.wav`);
    for (var key in item)
      form_data.append(key, item[key]);
    let awaitdata = await addSuggestion.submit(form_data, {
      action: "/api/suggestion",
      method: "POST",
      encType: "multipart/form-data"
    });
    awaitdata != null && awaitdata.message || (editor.commands.setSuggestion({
      id,
      original: originalText
    }), setError(null), setSuggestionInput(""), setAudio({
      blob: null,
      tempUrl: ""
    }));
  }, handleSuggestionCancel = () => {
    setSelectedSuggestion({
      id: ""
    }), setOpenSuggestion(!1);
  }, isPosting = addSuggestion.formData;
  return user ? isPosting ? /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "bg-slate-50 p-2 shadow-md dark:bg-gray-700 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex flex-col gap-2 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
    Suggestion2,
    {
      editor: null,
      optimistic: !0,
      suggest: {
        created_at: new Date(),
        id: "",
        likedBy: [],
        newValue: (_a = addSuggestion.formData) == null ? void 0 : _a.get("newValue"),
        oldValue: (_b = addSuggestion.formData) == null ? void 0 : _b.get("oldValue"),
        textId: parseInt((_c = addSuggestion.formData) == null ? void 0 : _c.get("textId")),
        threadId: (_d = addSuggestion.formData) == null ? void 0 : _d.get("threadId"),
        updatedAt: new Date(),
        user,
        suggestionComments: [],
        userId: "",
        text: data.text.id,
        audioUrl: ""
      }
    },
    void 0,
    !1,
    {
      fileName: "app/features/Suggestion/SuggestionForm.tsx",
      lineNumber: 90,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/features/Suggestion/SuggestionForm.tsx",
    lineNumber: 89,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/features/Suggestion/SuggestionForm.tsx",
    lineNumber: 88,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "mb-2 ml-2 bg-slate-50 p-2 shadow-md dark:bg-gray-700", children: [
    ((_e = addSuggestion.data) == null ? void 0 : _e.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "font-sm text-red-500", children: (_f = addSuggestion.data) == null ? void 0 : _f.message }, void 0, !1, {
      fileName: "app/features/Suggestion/SuggestionForm.tsx",
      lineNumber: 114,
      columnNumber: 39
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
      TextArea_default,
      {
        placeholder: "any suggestion?",
        value: suggestionInput,
        rows: 1,
        onChange: (e) => setSuggestionInput(e.target.value)
      },
      void 0,
      !1,
      {
        fileName: "app/features/Suggestion/SuggestionForm.tsx",
        lineNumber: 115,
        columnNumber: 7
      },
      this
    ),
    audio.tempUrl !== "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "mt-2 flex w-full items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_AudioPlayer.default, { src: audio.tempUrl }, void 0, !1, {
        fileName: "app/features/Suggestion/SuggestionForm.tsx",
        lineNumber: 124,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { onClick: () => setAudio({ tempUrl: "", blob: null }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z",
          className: "fill-gray-200"
        },
        void 0,
        !1,
        {
          fileName: "app/features/Suggestion/SuggestionForm.tsx",
          lineNumber: 127,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/features/Suggestion/SuggestionForm.tsx",
        lineNumber: 126,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/features/Suggestion/SuggestionForm.tsx",
        lineNumber: 125,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Suggestion/SuggestionForm.tsx",
      lineNumber: 123,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/features/Suggestion/SuggestionForm.tsx",
      lineNumber: 122,
      columnNumber: 9
    }, this) : null,
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "text-red-400", children: error }, void 0, !1, {
      fileName: "app/features/Suggestion/SuggestionForm.tsx",
      lineNumber: 138,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex justify-between", children: [
      audio.tempUrl === "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_AudioRecorder.default, { setAudio }, void 0, !1, {
        fileName: "app/features/Suggestion/SuggestionForm.tsx",
        lineNumber: 140,
        columnNumber: 33
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", {}, void 0, !1, {
        fileName: "app/features/Suggestion/SuggestionForm.tsx",
        lineNumber: 140,
        columnNumber: 73
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "mt-3 flex justify-end gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
          Button,
          {
            disabled: addSuggestion.state !== "idle",
            onClick: handleSuggestionSubmit,
            type: "submit",
            label: "submit"
          },
          void 0,
          !1,
          {
            fileName: "app/features/Suggestion/SuggestionForm.tsx",
            lineNumber: 142,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Button, { onClick: handleSuggestionCancel, type: "reset", label: "cancel" }, void 0, !1, {
          fileName: "app/features/Suggestion/SuggestionForm.tsx",
          lineNumber: 148,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/Suggestion/SuggestionForm.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Suggestion/SuggestionForm.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/Suggestion/SuggestionForm.tsx",
    lineNumber: 113,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(LogInMessage, {}, void 0, !1, {
    fileName: "app/features/Suggestion/SuggestionForm.tsx",
    lineNumber: 85,
    columnNumber: 21
  }, this);
}

// app/model/suggestion.ts
async function findAllSuggestionByPageId(pageId) {
  try {
    return await db.suggestion.findMany({
      where: {
        pageId
      },
      include: {
        user: !0,
        likedBy: !0,
        SuggestionComment: {
          include: {
            author: !0
          }
        }
      },
      orderBy: [{ likedBy: { _count: "desc" } }, { created_at: "desc" }]
    });
  } catch (e) {
    throw new Error("error fetching suggestion" + e);
  }
}
async function getSuggestionWithThreadId(threadId) {
  try {
    return await db.suggestion.findMany({
      where: {
        threadId
      },
      include: {
        user: !0,
        likedBy: !0,
        SuggestionComment: {
          include: {
            author: !0
          }
        }
      },
      orderBy: [{ created_at: "asc" }, { likedBy: { _count: "desc" } }]
    });
  } catch (e) {
    throw new Error("error fetching suggestion" + e);
  }
}
async function createSuggestion({ oldValue, newValue, textId, pageId, userId, threadId, audioUrl }) {
  try {
    return await db.suggestion.create({
      data: {
        oldValue,
        newValue,
        textId: parseInt(textId),
        pageId,
        userId,
        threadId,
        audioUrl
      }
    });
  } catch (e) {
    throw new Error("suggestion cannot be created on DB" + e);
  }
}
async function updateSuggestionLike(id, userId, payload) {
  try {
    return await db.suggestion.update({
      data: {
        likedBy: payload ? {
          connect: {
            id: userId
          }
        } : {
          disconnect: {
            id: userId
          }
        }
      },
      where: {
        id
      },
      select: {
        likedBy: !0
      }
    });
  } catch (e) {
    throw new Error("update suggestion like error: " + e.message);
  }
}
async function findSuggestionByUserLiked(id, userId) {
  try {
    return await db.suggestion.findFirst({
      where: {
        id,
        likedBy: {
          some: {
            id: userId
          }
        }
      }
    });
  } catch (e) {
    throw new Error("could not find suggestion by userliked" + e.message);
  }
}
async function updateSuggestionContent(id, newValue) {
  try {
    return console.log(...oo_oo10("1c3867b2_0", id)), await db.suggestion.update({
      where: {
        id
      },
      data: {
        newValue
      }
    });
  } catch (e) {
    throw new Error("update suggestion like error: " + e.message);
  }
}
async function findSuggestionWithMostLikes(id) {
  try {
    return await db.suggestion.findFirst({
      where: {
        threadId: id
      },
      orderBy: [
        {
          likedBy: {
            _count: "desc"
          }
        },
        {
          created_at: "desc"
        }
      ],
      take: 1
    });
  } catch (e) {
    console.warn(e);
  }
}
async function deleteSuggestion(id) {
  try {
    return await db.suggestion.delete({
      where: {
        id
      }
    });
  } catch (e) {
    throw new Error("cannot delete post ", e);
  }
}
function oo_cm10() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo10(i, ...v) {
  try {
    oo_cm10().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/routes/text.$textId.page.$pageId.tsx
var import_fa7 = require("react-icons/fa"), import_react_modal = __toESM(require("react-modal"));
var import_react_spinner_overlay = require("react-spinner-overlay"), import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), loader3 = async ({ request, params }) => {
  let textId = params.textId, order = params.pageId, version = new URL(request.url).searchParams.get("version"), versions = await getVersions(parseInt(textId), parseInt(order));
  if (!version && versions.length > 0 && !version)
    return (0, import_node4.redirect)(`${request.url}?version=${versions[0].version}`);
  let text = await getText(textId), page = await getPage(parseInt(textId), parseInt(order), version), user = await getUserSession(request), suggestions = await findAllSuggestionByPageId(page == null ? void 0 : page.id);
  return (0, import_node4.defer)({
    page,
    user,
    suggestions,
    pusher_env: { key: process.env.key, cluster: process.env.cluster },
    text,
    order,
    versions
  });
};
function PostSidebar(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
    import_react42.Outlet,
    {
      context: {
        user: props.user,
        editor: props.editor,
        text: props.page,
        createPost: props.createPost
      }
    },
    void 0,
    !1,
    {
      fileName: "app/routes/text.$textId.page.$pageId.tsx",
      lineNumber: 66,
      columnNumber: 5
    },
    this
  );
}
function SuggestionSidebar(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "z-20 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(SuggestionForm, { editor: props.editor, page: props.page }, void 0, !1, {
      fileName: "app/routes/text.$textId.page.$pageId.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react44.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: "loading" }, void 0, !1, {
      fileName: "app/routes/text.$textId.page.$pageId.tsx",
      lineNumber: 86,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react42.Await, { resolve: props.suggestions, children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(SuggestionContainer_default, { editor: props.editor, suggestions: data }, void 0, !1, {
      fileName: "app/routes/text.$textId.page.$pageId.tsx",
      lineNumber: 88,
      columnNumber: 22
    }, this) }, void 0, !1, {
      fileName: "app/routes/text.$textId.page.$pageId.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/text.$textId.page.$pageId.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/text.$textId.page.$pageId.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}
function Page() {
  let data = (0, import_react42.useLoaderData)(), { user, order, text } = data, [suggestionSelected, suggestionSelector] = (0, import_recoil14.useRecoilState)(selectedSuggestionThread), [selectedPost, postSelector] = (0, import_recoil14.useRecoilState)(selectedPostThread), [selection, setSelectionRange] = (0, import_recoil14.useRecoilState)(selectedTextOnEditor), [showPostSide, setShowPostSide] = (0, import_recoil14.useRecoilState)(showSidebar), [openSuggestion, setOpenSuggestion] = (0, import_recoil14.useRecoilState)(openSuggestionState), createPost3 = useFetcherWithPromise(), saveTextFetcher = (0, import_react42.useFetcher)();
  function suggestionSetter(id) {
    suggestionSelector({
      id
    });
  }
  function postSetter(id) {
    postSelector({
      id
    });
  }
  let editor = (0, import_react43.useEditor)(
    {
      extensions: [
        import_extension_document.default,
        import_extension_paragraph.default,
        import_extension_text.default,
        import_extension_bold.default,
        import_extension_font_family.default,
        import_extension_text_style.default,
        SearchAndReplace.configure({
          searchResultClass: "search",
          caseSensitive: !1,
          disableRegex: !1
        }),
        import_extension_hard_break.default.configure({
          HTMLAttributes: {
            class: "pageBreak"
          }
        }),
        import_extension_highlight.default.configure({
          HTMLAttributes: {
            class: "highlight"
          }
        }),
        Suggestion(suggestionSetter).configure({
          HTMLAttributes: {
            class: "suggestion"
          }
        }),
        postMark_default(postSetter).configure({
          HTMLAttributes: {
            class: "post"
          }
        })
      ],
      editable: !0,
      editorProps: events_default,
      onSelectionUpdate: ({ editor: editor2 }) => {
        let from = editor2.state.selection.from, to = editor2.state.selection.to;
        setSelectionRange({
          type: "",
          start: from,
          end: to,
          content: editor2 == null ? void 0 : editor2.state.doc.textBetween(from, to, "")
        }), setOpenSuggestion(!1), editor2.isActive("suggestion") || suggestionSelector({ id: "" }), editor2.isActive("post") || postSelector({ id: "" });
      }
    },
    [order, text == null ? void 0 : text.id]
  );
  (0, import_react44.useEffect)(() => {
    !!selectedPost.id || selection.type !== "" || !!(suggestionSelected != null && suggestionSelected.id) || openSuggestion ? setShowPostSide(!0) : setShowPostSide(!1);
  }, [selectedPost.id, selection.type, suggestionSelected == null ? void 0 : suggestionSelected.id, openSuggestion]), (0, import_react44.useEffect)(() => {
    showPostSide || (postSelector({ id: "" }), editor == null || editor.commands.setTextSelection(0));
  }, [showPostSide]);
  let withImage = !data.text.allow_post;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_jsx_dev_runtime32.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Header_default, { editor }, void 0, !1, {
      fileName: "app/routes/text.$textId.page.$pageId.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "relative flex justify-between gap-4 transition-all", style: { paddingTop: 56 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(TableOfContent_default2, { editor }, void 0, !1, {
        fileName: "app/routes/text.$textId.page.$pageId.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
        import_react_spinner_overlay.CircleSpinnerOverlay,
        {
          message: "updating text",
          loading: createPost3.state !== "idle" || saveTextFetcher.state !== "idle"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/text.$textId.page.$pageId.tsx",
          lineNumber: 190,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
        "div",
        {
          className: `${withImage ? "w-full" : "max-w-4xl"} justify-self-center p-2 dark:bg-gray-800`,
          id: "textEditorContainer",
          children: editor && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react44.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: "loading" }, void 0, !1, {
            fileName: "app/routes/text.$textId.page.$pageId.tsx",
            lineNumber: 199,
            columnNumber: 33
          }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            import_react42.Await,
            {
              resolve: data.page,
              errorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: [
                "page not Available",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react42.Link, { prefetch: "intent", to: "/", children: [
                  " ",
                  "click here"
                ] }, void 0, !0, {
                  fileName: "app/routes/text.$textId.page.$pageId.tsx",
                  lineNumber: 205,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/text.$textId.page.$pageId.tsx",
                lineNumber: 203,
                columnNumber: 19
              }, this),
              children: (page) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                EditorContainer_default,
                {
                  editor,
                  isSaving: !1,
                  order: page.order,
                  content: page.content,
                  pageCount: page == null ? void 0 : page.text.Page.length,
                  imageUrl: page.imageUrl,
                  pageId: page.id,
                  versions: data.versions,
                  saveTextFetcher
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/text.$textId.page.$pageId.tsx",
                  lineNumber: 213,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/text.$textId.page.$pageId.tsx",
              lineNumber: 200,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/text.$textId.page.$pageId.tsx",
            lineNumber: 199,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/text.$textId.page.$pageId.tsx",
          lineNumber: 194,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
        "div",
        {
          style: {
            width: showPostSide ? 400 : 0,
            top: 56
          },
          className: "sticky hidden w-full md:flex transition-all duration-75 z-[1] ",
          id: "postContent",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react44.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: "loading" }, void 0, !1, {
            fileName: "app/routes/text.$textId.page.$pageId.tsx",
            lineNumber: 237,
            columnNumber: 31
          }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react42.Await, { resolve: data.page, errorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { children: "Error loading package location!" }, void 0, !1, {
            fileName: "app/routes/text.$textId.page.$pageId.tsx",
            lineNumber: 238,
            columnNumber: 54
          }, this), children: (page) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_jsx_dev_runtime32.Fragment, { children: [
            data.text.allow_post && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              "button",
              {
                className: "absolute rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-300",
                style: { top: 10, opacity: 1, right: 20, padding: 10 },
                onClick: () => setShowPostSide((p) => !p),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_fa7.FaRegComments, { size: 22, className: "cursor-pointer text-gray-500 " }, void 0, !1, {
                  fileName: "app/routes/text.$textId.page.$pageId.tsx",
                  lineNumber: 248,
                  columnNumber: 25
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/text.$textId.page.$pageId.tsx",
                lineNumber: 243,
                columnNumber: 23
              },
              this
            ),
            (suggestionSelected == null ? void 0 : suggestionSelected.id) || openSuggestion ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              SuggestionSidebar,
              {
                suggestions: data.suggestions,
                suggestionSelected,
                page,
                editor
              },
              void 0,
              !1,
              {
                fileName: "app/routes/text.$textId.page.$pageId.tsx",
                lineNumber: 252,
                columnNumber: 23
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              "div",
              {
                className: "hidden w-full min-w-[450px] flex-col  bg-white  shadow-md dark:bg-gray-700  md:flex   md:h-full md:max-h-full  lg:sticky lg:top-0 lg:h-screen",
                style: {
                  opacity: showPostSide ? 1 : 0,
                  transition: "opacity ease 0.4s"
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                  PostSidebar,
                  {
                    page,
                    user,
                    id: selectedPost.id,
                    type: selection.type,
                    showPostSide,
                    editor,
                    createPost: createPost3
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/text.$textId.page.$pageId.tsx",
                    lineNumber: 266,
                    columnNumber: 25
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/text.$textId.page.$pageId.tsx",
                lineNumber: 259,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/text.$textId.page.$pageId.tsx",
            lineNumber: 241,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/text.$textId.page.$pageId.tsx",
            lineNumber: 238,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/text.$textId.page.$pageId.tsx",
            lineNumber: 237,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/text.$textId.page.$pageId.tsx",
          lineNumber: 229,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/text.$textId.page.$pageId.tsx",
      lineNumber: 188,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react44.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: "loading" }, void 0, !1, {
      fileName: "app/routes/text.$textId.page.$pageId.tsx",
      lineNumber: 285,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react42.Await, { resolve: data.page, errorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { children: "Error loading package location!" }, void 0, !1, {
      fileName: "app/routes/text.$textId.page.$pageId.tsx",
      lineNumber: 286,
      columnNumber: 50
    }, this), children: (page) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
      import_react_modal.default,
      {
        isOpen: showPostSide || !!(suggestionSelected != null && suggestionSelected.id) || openSuggestion,
        onRequestClose: () => {
          setShowPostSide(!1), setOpenSuggestion(!1), suggestionSelector({ id: "" });
        },
        shouldCloseOnOverlayClick: !1,
        ariaHideApp: !1,
        className: "modal-content pointer-events: auto; z-50 w-full overflow-y-scroll md:hidden",
        overlayClassName: "modal-overlay",
        children: (suggestionSelected == null ? void 0 : suggestionSelected.id) || openSuggestion ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          "div",
          {
            className: "absolute bottom-0 w-full bg-white max-h-[50dvh] overflow-y-scroll ",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              SuggestionSidebar,
              {
                suggestions: data.suggestions,
                suggestionSelected,
                editor,
                page
              },
              void 0,
              !1,
              {
                fileName: "app/routes/text.$textId.page.$pageId.tsx",
                lineNumber: 305,
                columnNumber: 21
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/text.$textId.page.$pageId.tsx",
            lineNumber: 302,
            columnNumber: 19
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          "div",
          {
            className: "max-h-[50dvh] overflow-y-scroll]",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              PostSidebar,
              {
                page,
                user,
                id: selectedPost.id,
                type: selection.type,
                showPostSide,
                editor,
                createPost: createPost3
              },
              void 0,
              !1,
              {
                fileName: "app/routes/text.$textId.page.$pageId.tsx",
                lineNumber: 316,
                columnNumber: 21
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/text.$textId.page.$pageId.tsx",
            lineNumber: 313,
            columnNumber: 21
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/text.$textId.page.$pageId.tsx",
        lineNumber: 289,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/text.$textId.page.$pageId.tsx",
      lineNumber: 286,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/text.$textId.page.$pageId.tsx",
      lineNumber: 285,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/text.$textId.page.$pageId.tsx",
    lineNumber: 186,
    columnNumber: 5
  }, this);
}

// app/routes/api.suggestion.comment.tsx
var api_suggestion_comment_exports = {};
__export(api_suggestion_comment_exports, {
  action: () => action2
});

// app/model/suggestionComment.ts
async function createCommentOnSuggestion(text, suggestionId, userId, audioUrl, type) {
  return await db.suggestionComment.create({
    data: {
      text,
      suggestionId,
      userId,
      audioUrl,
      type
    }
  });
}
async function deleteCommentOnSuggestion(id) {
  return await db.suggestionComment.delete({
    where: {
      id
    }
  });
}
async function updateCommentOnSuggestion(id, newContent, type) {
  return await db.suggestionComment.update({
    where: {
      id
    },
    data: {
      text: newContent,
      type
    }
  });
}

// app/services/uploadAudio.server.ts
var import_node5 = require("@remix-run/node"), AWS = __toESM(require("aws-sdk")), import_stream = require("stream"), AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID_PRODUCTION, AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY_PRODUCTION, BUCKET_NAME = process.env.BUCKET_NAME_PRODUCTION ?? "", uploadStream = ({ Key }) => {
  let s3 = new AWS.S3({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
  }), pass = new import_stream.PassThrough(), KEY_NAME = `comments/audio/${Key}`;
  return {
    writeStream: pass,
    promise: s3.upload({ Bucket: BUCKET_NAME, Key: KEY_NAME, Body: pass }).on("httpUploadProgress", function(progress) {
      console.log(...oo_oo11("716ed8dc_0", "Uploaded :: " + progress.loaded * 100 / progress.total)) + "";
    }).promise()
  };
};
async function uploadStreamToS3(data, filename) {
  let stream = uploadStream({
    Key: filename
  });
  return await (0, import_node5.writeAsyncIterableToWritable)(data, stream.writeStream), (await stream.promise).Location;
}
var uploadAudio = async ({ name, filename, data }) => name !== "file" ? void 0 : await uploadStreamToS3(data, filename);
function oo_cm11() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo11(i, ...v) {
  try {
    oo_cm11().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/routes/api.suggestion.comment.tsx
var import_node6 = require("@remix-run/node"), action2 = async ({ request }) => {
  let user = await getUserSession(request), uploadHandler = (0, import_node6.unstable_composeUploadHandlers)(uploadAudio, (0, import_node6.unstable_createMemoryUploadHandler)()), formData = await (0, import_node6.unstable_parseMultipartFormData)(request, uploadHandler), Obj = Object.fromEntries(formData);
  if (request.method === "POST") {
    let comment = Obj.commentContent, id = Obj.id, audioUrl = Obj.file, type = Obj.type;
    return await createCommentOnSuggestion(comment, id, user.id, audioUrl, type);
  }
  if (request.method === "DELETE") {
    let id = Obj.id;
    return await deleteCommentOnSuggestion(parseInt(id));
  }
  if (request.method === "PATCH") {
    let id = Obj.id, newContent = Obj.newContent, type = Obj.type;
    return await updateCommentOnSuggestion(parseInt(id), newContent, type);
  }
  return null;
};

// app/routes/api.suggestion.like.tsx
var api_suggestion_like_exports = {};
__export(api_suggestion_like_exports, {
  action: () => action3
});
var import_server_runtime2 = require("@remix-run/server-runtime");
var action3 = async ({ request }) => {
  let user = await getUserSession(request), formData = await request.formData(), Obj = Object.fromEntries(formData), id = Obj.id, threadId = Obj.threadId, likedUsers = await findSuggestionByUserLiked(id, user.id);
  try {
    let update = await updateSuggestionLike(id, user.id, likedUsers === null);
    if (update) {
      let highestLiked = await findSuggestionWithMostLikes(threadId);
      if (highestLiked)
        return await trigetPusherUpdate_server_default(user, highestLiked == null ? void 0 : highestLiked.pageId), (0, import_server_runtime2.json)(
          {
            highestLiked: highestLiked.newValue,
            likedBy: update
          },
          {
            headers: {
              "Cache-Control": "max-age=0, s-maxage=0"
            }
          }
        );
    }
    return !0;
  } catch (e) {
    console.log(...oo_oo12("4eb7b601_0", e));
  }
  return { success: !0 };
};
function oo_cm12() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo12(i, ...v) {
  try {
    oo_cm12().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/routes/api.user.search.tsx
var api_user_search_exports = {};
__export(api_user_search_exports, {
  loader: () => loader4
});
var import_react_router = require("react-router");
var loader4 = async ({ request }) => {
  let userName = new URL(request.url).searchParams.get("filterUser") ?? "";
  if (userName === "")
    return (0, import_react_router.json)([]);
  let fetchData = (await getAllUser()).filter((user) => user == null ? void 0 : user.username.toLowerCase().includes(userName.toLowerCase()));
  return (0, import_react_router.json)(fetchData);
};

// app/routes/api.suggestion.tsx
var api_suggestion_exports = {};
__export(api_suggestion_exports, {
  action: () => action4,
  loader: () => loader5
});
var import_react_router2 = require("react-router");
var import_node7 = require("@remix-run/node"), loader5 = async ({ request }) => {
  let suggestionId = new URL(request.url).searchParams.get("suggestionId") ?? "", suggestion = await getSuggestionWithThreadId(suggestionId);
  return (0, import_react_router2.json)(suggestion);
}, action4 = async ({ request }) => {
  if (request.method === "POST") {
    let uploadHandler = (0, import_node7.unstable_composeUploadHandlers)(uploadAudio, (0, import_node7.unstable_createMemoryUploadHandler)()), formData = await (0, import_node7.unstable_parseMultipartFormData)(request, uploadHandler), Obj = Object.fromEntries(formData), oldValue = Obj.oldValue, textId = Obj.textId, newValue = Obj.newValue, userId = Obj.userId, threadId = Obj.threadId, filepath = Obj.file, pageId = Obj.pageId;
    try {
      let responce = await createSuggestion({
        oldValue,
        newValue,
        textId,
        pageId,
        userId,
        threadId,
        audioUrl: filepath
      });
      return console.log(...oo_oo13("78287bb0_0", responce)), { responce };
    } catch (e) {
      return console.log(...oo_oo13("78287bb0_1", e)), { message: e };
    }
  } else {
    let formData = await request.formData(), Obj = Object.fromEntries(formData);
    if (request.method === "DELETE") {
      let id = Obj.id, res = await deleteSuggestion(id), remainingdata = await getSuggestionWithThreadId(res.threadId);
      return {
        deleted: res,
        remain: remainingdata == null ? void 0 : remainingdata.length
      };
    }
    if (request.method === "PATCH") {
      let id = Obj.id, newValue = Obj.newValue;
      return await updateSuggestionContent(id, newValue);
    }
  }
  return null;
};
function oo_cm13() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo13(i, ...v) {
  try {
    oo_cm13().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/routes/api.reply.$id.tsx
var api_reply_id_exports = {};
__export(api_reply_id_exports, {
  loader: () => loader6
});
var import_react_router3 = require("react-router");

// app/model/reply.ts
async function createReply(id, postId, likedById) {
  try {
    return await db.reply.create({
      data: {
        id,
        parentPost: {
          connect: {
            id: postId
          }
        },
        likedBy: {
          connect: {
            id: likedById
          }
        }
      },
      include: {
        likedBy: !0
      }
    });
  } catch (e) {
    throw new Error("creating reply Error " + e.message);
  }
}
async function findReply(id, likedBy) {
  try {
    return await db.reply.findFirst({
      where: {
        id,
        likedBy: {
          some: {
            id: likedBy
          }
        }
      }
    });
  } catch (e) {
    throw new Error("couldnot find reply error" + e.message);
  }
}
async function findReplyByPostId(post_id) {
  try {
    return await db.reply.findMany({
      where: {
        post_id
      },
      include: {
        likedBy: !0
      },
      orderBy: {
        is_approved: "asc"
      }
    });
  } catch (e) {
    throw new Error("finding reply by postId error" + e.message);
  }
}
async function isReplyPresent(replyId) {
  try {
    return !!await db.reply.findUnique({
      where: {
        id: replyId
      }
    });
  } catch (error) {
    throw new Error(`Error checking reply presence: ${error.message}`);
  }
}
async function updateLikeReply(id, likedBy, put) {
  try {
    await db.reply.update({
      where: {
        id
      },
      data: {
        likedBy: put ? {
          connect: {
            id: likedBy
          }
        } : {
          disconnect: {
            id: likedBy
          }
        }
      }
    });
  } catch (e) {
    throw new Error("couldnot update reply error" + e.message);
  }
}
async function updateIsAproved(id, is_approved) {
  try {
    return await db.reply.update({
      where: {
        id
      },
      data: {
        is_approved
      }
    });
  } catch (e) {
    throw new Error("updating approved error" + e.message);
  }
}

// app/routes/api.reply.$id.tsx
var loader6 = async ({ params }) => {
  var _a;
  let id = parseInt(params == null ? void 0 : params.id), post = await findPostByTopicId(id), posts = [], postsData = await getposts(id), replyList = await findReplyByPostId(post == null ? void 0 : post.id), postsList = (_a = postsData == null ? void 0 : postsData.post_stream) == null ? void 0 : _a.posts;
  return posts = combineArrays(replyList, postsList), (0, import_react_router3.json)({
    posts
  });
};
function combineArrays(array1, array2) {
  if (array1.length < 1 || array2.length < 1)
    return array2 || [];
  let idMap = new Map(array1 == null ? void 0 : array1.map((obj) => [String(obj.id), obj]));
  return array2.map((obj) => {
    let matchingObject = idMap.get(String(obj.id));
    return matchingObject ? { ...obj, ...matchingObject } : obj;
  }).slice(1).sort((a, b) => a.is_approved === b.is_approved ? 0 : a.is_approved ? -1 : 1);
}

// app/routes/auth_.pusher.tsx
var auth_pusher_exports = {};
__export(auth_pusher_exports, {
  action: () => action5
});
var action5 = async ({ request }) => {
  let user = await getUserSession(request), formData = await request.formData(), socket_id = formData.get("socket_id"), channel_name = formData.get("channel_name");
  if (user) {
    let presenceData = {
      user_id: user.id,
      user_info: {
        username: user.username,
        avatarUrl: user.avatarUrl
      }
    };
    try {
      return pusher_server_default.authenticate(socket_id, channel_name, presenceData);
    } catch (e) {
      console.log(...oo_oo14("a6d9a880_0", e));
    }
  }
  return null;
};
function oo_cm14() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo14(i, ...v) {
  try {
    oo_cm14().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/routes/auth_.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  action: () => action6,
  loader: () => loader7
});
var import_server_runtime3 = require("@remix-run/server-runtime");
var loader7 = async ({ request }) => {
  var _a;
  let session = await getSession(request.headers.get("Cookie")), url = new URL(request.url), sso = url.searchParams.get("sso"), sig = url.searchParams.get("sig");
  if (sso && sig) {
    let payload = atob(sso), decoded = unescape(payload), params = new URLSearchParams(decoded);
    if (!params.get("nonce"))
      throw new Error("lopenling server login problem");
    try {
      let email = params.get("email"), admin = params.get("admin"), name = params.get("name"), username = params.get("username"), avatarUrl = params.get("avatar_url"), external_id = params.get("external_id");
      if (avatarUrl === null) {
        let url2 = process.env.DISCOURSE_SITE + `/u/${username}.json`, res = await (await fetch(url2)).json();
        avatarUrl = ForumLink + ((_a = res == null ? void 0 : res.user) == null ? void 0 : _a.avatar_template.replace("{size}", "30"));
      }
      if (!email || !name || !username)
        throw new Error("discourse SSO returned error URL");
      let userData = null, id, user = await isUserPresent(username);
      user ? id = user.id : (userData = await createUserInDB(username, name, email, admin === "true", avatarUrl), id = userData == null ? void 0 : userData.id), session.set("user", {
        id,
        email,
        admin,
        name,
        username,
        avatarUrl,
        external_id
      });
    } catch (e) {
      session.flash("error", {
        error: e
      });
    }
  }
  let redirectUrl = session.data["success-redirect"] ? session.data["success-redirect"].redirectTo : "/";
  return (0, import_server_runtime3.redirect)(redirectUrl, {
    headers: {
      "set-cookie": await commitSession(session, { sameSite: "lax" })
    }
  });
}, action6 = async ({ request, context }) => {
  let user = await getUserSession(request), body = await request.formData(), { redirectTo, _action, ...values } = Object.fromEntries(body);
  if (!redirectTo)
    throw new Error("no redirect in form");
  if (_action === "logout")
    return (0, import_server_runtime3.redirect)(redirectTo, {
      headers: {
        "set-cookie": await destroyUserSession(request)
      }
    });
  if (_action === "login") {
    if (!user)
      return await login(
        request,
        (session2) => session2,
        redirectTo
      );
    let session = await getSession(request.headers.get("Cookie"));
    return session.set("user", { ...user }), (0, import_server_runtime3.redirect)(redirectTo, {
      headers: {
        "set-cookie": await commitSession(session, { sameSite: "lax" })
      }
    });
  }
  return null;
};

// app/routes/api.reply.tsx
var api_reply_exports = {};
__export(api_reply_exports, {
  action: () => action7
});
var import_node8 = require("@remix-run/node");
var action7 = async ({ request }) => {
  let user = await getUserSession(request);
  try {
    if (request.method === "DELETE") {
      let postId = (await request.formData()).get("postId");
      return await deletePost(postId, user.username), {
        delete: "success"
      };
    }
    if (request.method === "POST") {
      let uploadHandler = (0, import_node8.unstable_composeUploadHandlers)(uploadAudio, (0, import_node8.unstable_createMemoryUploadHandler)()), formData = await (0, import_node8.unstable_parseMultipartFormData)(request, uploadHandler), Obj = Object.fromEntries(formData), postString = Obj.postString, topicId = Obj.topicId, audioUrl = Obj.file;
      return audioUrl === void 0 && (audioUrl = null), {
        posts: await (await createPost(topicId, audioUrl, postString, user.username)).json()
      };
    }
    if (request.method === "PATCH") {
      let formData = await request.formData(), user2 = await getUserSession(request), Obj = Object.fromEntries(formData), action10 = Obj.action;
      if (action10 === "like") {
        let post_id = Obj.post_id, id = Obj.id;
        if (!await isReplyPresent(id))
          await createReply(id, post_id, user2.id);
        else {
          let alreadyLiked = await findReply(id, user2.id);
          await updateLikeReply(id, user2.id, !alreadyLiked);
        }
        return { success: !0 };
      }
      if (action10 === "approve") {
        let replyId = Obj.id, isSolved = Obj.isSolved === "false";
        try {
          await updateIsAproved(replyId, isSolved);
        } catch {
          throw new Error("error on approving reply");
        }
        return null;
      }
    }
  } catch (e) {
    return {
      post: e.message
    };
  }
};

// app/routes/api.post.tsx
var api_post_exports = {};
__export(api_post_exports, {
  action: () => action8
});
var import_node9 = require("@remix-run/node");
var action8 = async ({ request }) => {
  let uploadHandler = (0, import_node9.unstable_composeUploadHandlers)(uploadAudio, (0, import_node9.unstable_createMemoryUploadHandler)()), user = await getUserSession(request);
  if (request.method === "POST") {
    let formData = await (0, import_node9.unstable_parseMultipartFormData)(request, uploadHandler), Obj = Object.fromEntries(formData), DiscourseUrl = process.env.DISCOURSE_SITE, api = process.env.DISCOURSE_API_KEY, parent_category_id = process.env.DISCOURSE_QA_CATEGORY_ID;
    if (!user)
      throw new Error("user not logged in");
    if (!DiscourseUrl || !api || !parent_category_id)
      throw new Error("set a DISCOURSE_SITE/DISCOURSE_API_KEY in env");
    let audioUrl = Obj.file, textId = parseInt(Obj.textId), pageId = Obj.pageId, order = Obj.order;
    try {
      let data = await createThread(
        user.username,
        Obj.topic,
        Obj.selectionSegment,
        Obj.body,
        parent_category_id,
        textId,
        parseInt(order),
        audioUrl,
        Obj.threadId
      );
      if (data.topic_id && user)
        return await createPost2(
          Obj.type,
          data.avatar_template,
          data.topic_id,
          data.id,
          Obj.threadId,
          textId,
          pageId,
          Obj.body,
          user.id,
          audioUrl,
          Obj.selectionSegment
        );
    } catch (error) {
      return console.error("Failed to create question:", error), { message: error };
    }
  }
  if (request.method === "DELETE") {
    let formData = await request.formData(), id = Object.fromEntries(formData).id, res = await deletePost2(id), deleteDiscourse = await deleteDiscourseTopic(user.username, res.topic_id);
    return res;
  }
  if (request.method === "PATCH") {
    let formData = await (0, import_node9.unstable_parseMultipartFormData)(request, uploadHandler), action10 = formData.get("action");
    if (action10 === "like") {
      let postId = formData.get("id"), userId = formData.get("userId"), likedUsers = await findPostByUserLiked(postId, userId);
      try {
        let res = await updatePostLike(postId, userId, likedUsers === null);
        return res.textId && await trigetPusherUpdate_server_default(user, res.textId), res.likedBy;
      } catch (e) {
        console.log(...oo_oo15("116e359c_0", e));
      }
      return { success: !0 };
    }
    if (action10 === "update") {
      let newContent = formData.get("body"), postId = formData.get("postId"), audioUrl = formData.get("file");
      audioUrl || (audioUrl = formData.get("audioUrl"));
      let res = await updatePostContentandAudio(postId, newContent, audioUrl);
      return res != null && res.post_id && await updateDiscoursePost(res.post_id, newContent, audioUrl, user.username), res;
    }
  }
  return null;
};
function oo_cm15() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo15(i, ...v) {
  try {
    oo_cm15().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/routes/api.text.tsx
var api_text_exports = {};
__export(api_text_exports, {
  action: () => action9,
  loader: () => loader8
});
var loader8 = async ({ request }) => {
  var _a;
  let searchText = (_a = new URL(request.url).searchParams.get("search")) == null ? void 0 : _a.trim(), headers2 = {
    "Cache-Control": "max-age=15,stale-while-revalidate=60"
  };
  if (searchText) {
    let obj = await searchPages(searchText);
    return Object.keys(obj).map((key) => ({
      name: obj[key].textName,
      results: obj[key].results,
      order: obj[key].order,
      total: obj[key].total,
      extra: obj[key].extra,
      textId: obj[key].textId
    }));
  }
  return [];
}, action9 = async ({ request }) => {
  let data = await request.formData();
  if (request.method === "DELETE") {
    let textId = data.get("textId");
    return await deleteText(textId);
  }
  if (request.method === "POST") {
    let dmp = new import_diff_match_patch.default(), user = await getUserSession(request), patchText = data.get("patch"), pageId = data.get("pageId"), page = await getPageWithId(pageId), content = page == null ? void 0 : page.content, patch = dmp.patch_fromText(patchText);
    try {
      let [text2, result] = dmp.patch_apply(patch, content), res = await updatePage(pageId, text2);
      return await trigetPusherUpdate_server_default(user, pageId), res;
    } catch {
      return !1;
    }
  }
};

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  headers: () => headers,
  loader: () => loader9,
  meta: () => meta2
});
var import_react45 = require("@remix-run/react"), import_flowbite_react2 = require("flowbite-react");

// app/component/Layout/Footer.tsx
var import_ai2 = require("react-icons/ai");

// app/assets/indrajalaLogo.png
var indrajalaLogo_default = "/build/_assets/indrajalaLogo-JUD46QZL.png";

// app/component/Layout/Partner.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), PartnerSection = () => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "mb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "container mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center justify-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("a", { href: "https://indrajala.org.tw/", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
  "img",
  {
    src: indrajalaLogo_default,
    alt: "Partner 1",
    className: "h-16 rounded-full border-2 border-gray-200 bg-gray-700 p-2 shadow-md"
  },
  void 0,
  !1,
  {
    fileName: "app/component/Layout/Partner.tsx",
    lineNumber: 10,
    columnNumber: 11
  },
  this
) }, void 0, !1, {
  fileName: "app/component/Layout/Partner.tsx",
  lineNumber: 9,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/component/Layout/Partner.tsx",
  lineNumber: 8,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/component/Layout/Partner.tsx",
  lineNumber: 6,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/component/Layout/Partner.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), Partner_default = PartnerSection;

// app/component/Layout/Footer.tsx
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function FooterContainer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("footer", { className: "absolute bottom-0 w-full  ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Partner_default, {}, void 0, !1, {
      fileName: "app/component/Layout/Footer.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mx-auto w-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: " px-4 py-6 dark:bg-gray-700 md:flex md:items-center md:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { className: "text-sm text-gray-500 dark:text-gray-300 sm:text-center" }, void 0, !1, {
        fileName: "app/component/Layout/Footer.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mt-4 flex space-x-6 sm:justify-center md:mt-0", children: [
        {
          logo: "https://openpecha.org/logo.png",
          link: "https://openpecha.org/"
        },
        {
          logo: import_ai2.AiFillTwitterCircle,
          link: "https://twitter.com/OpenPecha"
        },
        {
          logo: import_ai2.AiFillGithub,
          link: "https://github.com/OpenPecha"
        }
      ].map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
        "a",
        {
          href: item.link,
          className: "text-gray-400 hover:text-blue-300 dark:hover:text-white",
          target: "_blank",
          children: [
            typeof item.logo == "string" ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("img", { src: item.logo, className: "h-4 w-4", alt: "openpecha" }, void 0, !1, {
              fileName: "app/component/Layout/Footer.tsx",
              lineNumber: 36,
              columnNumber: 21
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(item.logo, {}, void 0, !1, {
              fileName: "app/component/Layout/Footer.tsx",
              lineNumber: 38,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { className: "sr-only", children: "page links" }, void 0, !1, {
              fileName: "app/component/Layout/Footer.tsx",
              lineNumber: 40,
              columnNumber: 19
            }, this)
          ]
        },
        index,
        !0,
        {
          fileName: "app/component/Layout/Footer.tsx",
          lineNumber: 29,
          columnNumber: 17
        },
        this
      )) }, void 0, !1, {
        fileName: "app/component/Layout/Footer.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/component/Layout/Footer.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/component/Layout/Footer.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/Layout/Footer.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_node10 = require("@remix-run/node");
var import_react46 = require("@remix-run/react");
var import_framer_motion3 = require("framer-motion");
var import_react47 = require("react");

// app/lib/filterVersionFromText.ts
function groupData(data) {
  let groupedData = {}, isVersionAvailable = !1;
  return data.forEach((item) => {
    item.version ? (groupedData[item.version] || (groupedData[item.version] = []), groupedData[item.version].push(item), isVersionAvailable = !0) : (groupedData = item, isVersionAvailable = !1);
  }), {
    groupedData,
    isVersionAvailable
  };
}
var filterVersionFromText_default = groupData;

// app/routes/_index.tsx
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), loader9 = async ({ request }) => {
  var _a;
  let searchText = (_a = new URL(request.url).searchParams.get("search")) == null ? void 0 : _a.trim(), { latestTexts, count } = await findLatestText(), headers2 = {
    "Cache-Control": "max-age=15,stale-while-revalidate=60"
  };
  return searchText ? (0, import_node10.defer)(
    { textList: await searchPages(searchText), search: searchText, latestTexts: null },
    {
      headers: headers2
    }
  ) : { textList: null, search: null, latestTexts: { list: latestTexts, count } };
};
function headers({ loaderHeaders }) {
  return {
    "Cache-Control": loaderHeaders.get("Cache-Control")
  };
}
function meta2({ data }) {
  return [
    {
      title: data != null && data.search ? `${data == null ? void 0 : data.search} - Lopenling Search` : "Lopenling App"
    },
    {
      name: "description",
      content: "annotation of text and discussion on budhist text"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    }
  ];
}
function Index() {
  var _a, _b;
  let data = (0, import_react46.useLoaderData)(), navigation = (0, import_react46.useNavigation)(), [params] = (0, import_react45.useSearchParams)(), [searchInput, setSearchInput] = (0, import_react47.useState)(""), translation = uselitteraTranlation();
  (0, import_react47.useEffect)(() => {
    (0, import_tribute2.initializeTribute)("inputText");
  }, []);
  let handleInputChange = (event) => {
    let inputValue = event.target.value;
    setSearchInput(inputValue);
  };
  (0, import_react47.useEffect)(() => {
    let p = params.get("search");
    setSearchInput(p || "");
  }, [params]);
  let lists = data.textList, isLoading = ((_a = navigation.formData) == null ? void 0 : _a.get("search")) && navigation.state === "loading";
  return lists != null && lists.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "text-red-400", children: lists == null ? void 0 : lists.message }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 82,
    columnNumber: 30
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
    import_framer_motion3.motion.div,
    {
      initial: { x: "5%", opacity: 0 },
      animate: { x: "0%", opacity: 1 },
      exit: { x: "5%", opacity: 0 },
      style: { position: "relative", minHeight: "100vh" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Header_default, { editor: null }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 91,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: " mx-auto max-w-2xl ", style: { paddingTop: 56 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex w-full flex-col items-center justify-center  px-3 pt-24 md:px-1.5  ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react45.Form, { method: "GET", className: "mb-3 w-full max-w-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "relative flex w-full space-x-3 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
                import_flowbite_react2.TextInput,
                {
                  autoComplete: "off",
                  name: "search",
                  placeholder: translation.searchText,
                  value: searchInput,
                  id: "inputText",
                  onChange: handleInputChange,
                  type: "search",
                  style: { height: "100%" },
                  className: "flex-1 text-gray-500",
                  icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
                    "path",
                    {
                      d: "M14.75 14.75L10.25 10.25M11.75 6.5C11.75 7.18944 11.6142 7.87213 11.3504 8.50909C11.0865 9.14605 10.6998 9.7248 10.2123 10.2123C9.7248 10.6998 9.14605 11.0865 8.50909 11.3504C7.87213 11.6142 7.18944 11.75 6.5 11.75C5.81056 11.75 5.12787 11.6142 4.49091 11.3504C3.85395 11.0865 3.2752 10.6998 2.78769 10.2123C2.30018 9.7248 1.91347 9.14605 1.64963 8.50909C1.3858 7.87213 1.25 7.18944 1.25 6.5C1.25 5.10761 1.80312 3.77226 2.78769 2.78769C3.77226 1.80312 5.10761 1.25 6.5 1.25C7.89239 1.25 9.22774 1.80312 10.2123 2.78769C11.1969 3.77226 11.75 5.10761 11.75 6.5Z",
                      stroke: "#6B7280",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 108,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 107,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 96,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_flowbite_react2.Button, { type: "submit", className: "h-full bg-green-400 text-white", color: "#1C64F2", size: "lg", children: translation.searchText }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 118,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 95,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 94,
              columnNumber: 11
            }, this),
            (data == null ? void 0 : data.latestTexts) && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: [
              data.latestTexts.list.map((text) => {
                let pageWithPost = text.allow_post, { groupedData, isVersionAvailable } = filterVersionFromText_default(text.Page), url = `/text/${text.id}/page/1/${pageWithPost ? "posts" : ""}`;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex w-full justify-between border-b dark:border-gray-700", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex items-center gap-1 px-4 py-4", style: { fontFamily: "monlam" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react45.Link, { to: url, children: text.name }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 133,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 132,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex gap-2 px-4 py-4 font-light text-gray-300", children: isVersionAvailable ? /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: Object.keys(groupedData).map((key) => {
                    let urlversion = url + "?version=" + key;
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
                      import_react45.Link,
                      {
                        to: urlversion,
                        className: "cursor-pointer rounded-md bg-yellow-300 px-2 capitalize text-black",
                        children: translation[key]
                      },
                      key,
                      !1,
                      {
                        fileName: "app/routes/_index.tsx",
                        lineNumber: 144,
                        columnNumber: 33
                      },
                      this
                    );
                  }) }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 140,
                    columnNumber: 27
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, {}, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 138,
                    columnNumber: 27
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 136,
                    columnNumber: 23
                  }, this)
                ] }, text.id, !0, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 131,
                  columnNumber: 19
                }, this);
              }),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
                import_react45.Link,
                {
                  to: "/list",
                  className: "mb-3 pt-5 text-sm font-light text-gray-800 underline transition-colors dark:text-white",
                  children: [
                    "List all (",
                    (_b = data == null ? void 0 : data.latestTexts) == null ? void 0 : _b.count,
                    ") Pechas"
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 160,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 125,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 93,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "inline-flex  w-full flex-col items-center justify-start space-y-3.5 py-10", children: [
            isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Skeleton, { height: 125, number: 3 }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 170,
              columnNumber: 25
            }, this),
            lists && !isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: [
              lists.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
                "div",
                {
                  className: "text-xl font-extrabold capitalize text-gray-300 font-Inter leading-[150%]",
                  children: "No result found"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 175,
                  columnNumber: 17
                },
                this
              ),
              lists == null ? void 0 : lists.map(
                (list, index) => {
                  let result = list.results[0];
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
                    import_react45.Link,
                    {
                      to: `/text/${list.textId}/page/1/posts`,
                      className: "container w-full",
                      prefetch: "intent",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
                        import_flowbite_react2.Card,
                        {
                          className: "dark:bg-gray-500 font-monlam",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "text-xl", children: result.name }, void 0, !1, {
                              fileName: "app/routes/_index.tsx",
                              lineNumber: 200,
                              columnNumber: 25
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex flex-wrap justify-between text-sm", children: [
                              result && result[1],
                              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "text-sm text-gray-400", children: [
                                result.total,
                                " matches"
                              ] }, void 0, !0, {
                                fileName: "app/routes/_index.tsx",
                                lineNumber: 203,
                                columnNumber: 27
                              }, this)
                            ] }, void 0, !0, {
                              fileName: "app/routes/_index.tsx",
                              lineNumber: 201,
                              columnNumber: 25
                            }, this)
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "app/routes/_index.tsx",
                          lineNumber: 197,
                          columnNumber: 23
                        },
                        this
                      )
                    },
                    "id" + index,
                    !1,
                    {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 191,
                      columnNumber: 21
                    },
                    this
                  );
                }
              )
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 173,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 169,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 92,
          columnNumber: 7
        }, this),
        !lists && !isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(FooterContainer, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 216,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 215,
          columnNumber: 9
        }, this)
      ]
    },
    (0, import_react46.useLocation)().pathname,
    !0,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 84,
      columnNumber: 5
    },
    this
  );
}

// app/routes/list.tsx
var list_exports = {};
__export(list_exports, {
  default: () => List,
  loader: () => loader10
});
var import_react48 = require("@remix-run/react");
var import_react49 = require("react");
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), loader10 = async ({ request }) => {
  let textList = await findAllTextWithDetail(), user = await getUserSession(request);
  return {
    textList,
    isAdmin: (user == null ? void 0 : user.admin) === "true"
  };
};
function List() {
  let fetcher = (0, import_react48.useFetcher)(), { textList, isAdmin } = (0, import_react48.useLoaderData)(), [currentPage, setCurrentPage] = (0, import_react49.useState)(1), textsPerPage = 20, indexOfLastText = currentPage * textsPerPage, indexOfFirstText = indexOfLastText - textsPerPage, currentTexts = textList.slice(indexOfFirstText, indexOfLastText), totalPages = Math.ceil(textList.length / textsPerPage), goToPage = (page) => {
    setCurrentPage(page);
  }, deleteText2 = (textId) => {
    confirm("Are you sure you want to delete this text?") ? fetcher.submit(
      { textId: textId.toString() },
      {
        method: "DELETE",
        action: "/api/text"
      }
    ) : console.log(...oo_oo16("43e3fce7_0", "cancelled"));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Header_default, { editor: null }, void 0, !1, {
      fileName: "app/routes/list.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "h-20" }, void 0, !1, {
      fileName: "app/routes/list.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("table", { className: "mx-auto w-full max-w-4xl text-left text-sm text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("thead", { className: "border-b-2 border-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("th", { scope: "col", className: "px-4 py-4", children: "Title" }, void 0, !1, {
          fileName: "app/routes/list.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("th", { scope: "col", className: "px-4 py-4", children: "Total page" }, void 0, !1, {
          fileName: "app/routes/list.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/list.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/list.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("tbody", { children: currentTexts.map((text) => {
        let { groupedData, isVersionAvailable } = filterVersionFromText_default(text.Page), url = `/text/${text.id}/page/1/${text.allow_post ? "posts" : ""}`;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
          "tr",
          {
            className: "w-full border-b hover:text-gray-600 dark:border-gray-700 dark:hover:text-white",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("th", { scope: "col", className: "flex items-center gap-1 px-4 py-4", style: { fontFamily: "monlam" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
                  Avatar,
                  {
                    title: text == null ? void 0 : text.author.name,
                    alt: text == null ? void 0 : text.author.name,
                    img: text == null ? void 0 : text.author.avatarUrl,
                    rounded: !0,
                    size: "sm"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/list.tsx",
                    lineNumber: 75,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react48.Link, { to: url, children: text.name }, void 0, !1, {
                  fileName: "app/routes/list.tsx",
                  lineNumber: 82,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/list.tsx",
                lineNumber: 74,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("td", { scope: "col", className: " px-4 py-4", children: isVersionAvailable ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex gap-2", children: Object.keys(groupedData).map((key) => {
                let urlversion = url + "?version=" + key;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
                  import_react48.Link,
                  {
                    to: urlversion,
                    className: "cursor-pointer rounded-md bg-yellow-300 px-2 capitalize text-black",
                    children: key
                  },
                  key,
                  !1,
                  {
                    fileName: "app/routes/list.tsx",
                    lineNumber: 99,
                    columnNumber: 27
                  },
                  this
                );
              }) }, void 0, !1, {
                fileName: "app/routes/list.tsx",
                lineNumber: 95,
                columnNumber: 21
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: text.Page.length }, void 0, !1, {
                  fileName: "app/routes/list.tsx",
                  lineNumber: 87,
                  columnNumber: 23
                }, this),
                isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { onClick: () => deleteText2(text.id), className: "cursor-pointer", children: "delete" }, void 0, !1, {
                  fileName: "app/routes/list.tsx",
                  lineNumber: 89,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/list.tsx",
                lineNumber: 86,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/list.tsx",
                lineNumber: 84,
                columnNumber: 17
              }, this)
            ]
          },
          text.id,
          !0,
          {
            fileName: "app/routes/list.tsx",
            lineNumber: 70,
            columnNumber: 15
          },
          this
        );
      }) }, void 0, !1, {
        fileName: "app/routes/list.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/list.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mt-8 flex items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
        "button",
        {
          onClick: () => goToPage(currentPage - 1),
          className: `${currentPage === 1 && "hidden"} mr-4 rounded-lg bg-gray-200 px-4 py-2 text-gray-700`,
          children: "Previous"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/list.tsx",
          lineNumber: 117,
          columnNumber: 9
        },
        this
      ),
      Array.from({ length: totalPages }, (_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
        "button",
        {
          onClick: () => goToPage(index + 1),
          className: `px-4 py-2 ${currentPage === 1 && "hidden"} ${index + 1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} mx-2 rounded-lg`,
          children: index + 1
        },
        index + 1,
        !1,
        {
          fileName: "app/routes/list.tsx",
          lineNumber: 124,
          columnNumber: 11
        },
        this
      )),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
        "button",
        {
          onClick: () => goToPage(currentPage + 1),
          className: ` ${currentPage === totalPages && "hidden"} ml-4 rounded-lg bg-gray-200 px-4 py-2 text-gray-700 `,
          children: "Next"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/list.tsx",
          lineNumber: 134,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/list.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/list.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
function oo_cm16() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','57127','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694280497052','name','elements','concat','split','depth',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.11"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','remix','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));`);
  } catch {
  }
}
function oo_oo16(i, ...v) {
  try {
    oo_cm16().consoleLog(i, v);
  } catch {
  }
  return v;
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "c89f360b", entry: { module: "/build/entry.client-Q26TWDTR.js", imports: ["/build/_shared/chunk-SK3HEI5M.js", "/build/_shared/chunk-CUPSZOF3.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TUM6ZGEN.js", imports: ["/build/_shared/chunk-OAYD255M.js", "/build/_shared/chunk-2MY6XXGZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-UYSLGQTT.js", imports: ["/build/_shared/chunk-2BKQOPGT.js", "/build/_shared/chunk-SO7QEOP3.js", "/build/_shared/chunk-D6R4KQ4Y.js", "/build/_shared/chunk-RPZPHA5M.js", "/build/_shared/chunk-54LTEAND.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.post": { id: "routes/api.post", parentId: "root", path: "api/post", index: void 0, caseSensitive: void 0, module: "/build/routes/api.post-DEV6CUJQ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.reply": { id: "routes/api.reply", parentId: "root", path: "api/reply", index: void 0, caseSensitive: void 0, module: "/build/routes/api.reply-VEVE2QAO.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.reply.$id": { id: "routes/api.reply.$id", parentId: "routes/api.reply", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/api.reply.$id-4ZGGJPKD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.suggestion": { id: "routes/api.suggestion", parentId: "root", path: "api/suggestion", index: void 0, caseSensitive: void 0, module: "/build/routes/api.suggestion-FS7N6R42.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.suggestion.comment": { id: "routes/api.suggestion.comment", parentId: "routes/api.suggestion", path: "comment", index: void 0, caseSensitive: void 0, module: "/build/routes/api.suggestion.comment-PE2IARVY.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.suggestion.like": { id: "routes/api.suggestion.like", parentId: "routes/api.suggestion", path: "like", index: void 0, caseSensitive: void 0, module: "/build/routes/api.suggestion.like-6KWQTJA4.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.text": { id: "routes/api.text", parentId: "root", path: "api/text", index: void 0, caseSensitive: void 0, module: "/build/routes/api.text-VZAWW3I5.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user.preference.theme": { id: "routes/api.user.preference.theme", parentId: "root", path: "api/user/preference/theme", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user.preference.theme-DGEWOKOY.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.user.search": { id: "routes/api.user.search", parentId: "root", path: "api/user/search", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user.search-HNCIYD5V.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth_.login": { id: "routes/auth_.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth_.login-B5UZITUB.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth_.pusher": { id: "routes/auth_.pusher", parentId: "root", path: "auth/pusher", index: void 0, caseSensitive: void 0, module: "/build/routes/auth_.pusher-FG3CVP2Y.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/list": { id: "routes/list", parentId: "root", path: "list", index: void 0, caseSensitive: void 0, module: "/build/routes/list-4UNGQLQU.js", imports: ["/build/_shared/chunk-2BKQOPGT.js", "/build/_shared/chunk-RBZQOWEE.js", "/build/_shared/chunk-D6R4KQ4Y.js", "/build/_shared/chunk-54LTEAND.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/text.$textId.page.$pageId": { id: "routes/text.$textId.page.$pageId", parentId: "root", path: "text/:textId/page/:pageId", index: void 0, caseSensitive: void 0, module: "/build/routes/text.$textId.page.$pageId-C5RT7Y6E.js", imports: ["/build/_shared/chunk-RBZQOWEE.js", "/build/_shared/chunk-D6R4KQ4Y.js", "/build/_shared/chunk-K4Y5KWB6.js", "/build/_shared/chunk-RPZPHA5M.js", "/build/_shared/chunk-54LTEAND.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/text.$textId.page.$pageId.posts": { id: "routes/text.$textId.page.$pageId.posts", parentId: "routes/text.$textId.page.$pageId", path: "posts", index: void 0, caseSensitive: void 0, module: "/build/routes/text.$textId.page.$pageId.posts-46WSAIOX.js", imports: ["/build/_shared/chunk-SO7QEOP3.js", "/build/_shared/chunk-2MY6XXGZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-C89F360B.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/text.$textId.page.$pageId.posts": {
    id: "routes/text.$textId.page.$pageId.posts",
    parentId: "routes/text.$textId.page.$pageId",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: text_textId_page_pageId_posts_exports
  },
  "routes/api.user.preference.theme": {
    id: "routes/api.user.preference.theme",
    parentId: "root",
    path: "api/user/preference/theme",
    index: void 0,
    caseSensitive: void 0,
    module: api_user_preference_theme_exports
  },
  "routes/text.$textId.page.$pageId": {
    id: "routes/text.$textId.page.$pageId",
    parentId: "root",
    path: "text/:textId/page/:pageId",
    index: void 0,
    caseSensitive: void 0,
    module: text_textId_page_pageId_exports
  },
  "routes/api.suggestion.comment": {
    id: "routes/api.suggestion.comment",
    parentId: "routes/api.suggestion",
    path: "comment",
    index: void 0,
    caseSensitive: void 0,
    module: api_suggestion_comment_exports
  },
  "routes/api.suggestion.like": {
    id: "routes/api.suggestion.like",
    parentId: "routes/api.suggestion",
    path: "like",
    index: void 0,
    caseSensitive: void 0,
    module: api_suggestion_like_exports
  },
  "routes/api.user.search": {
    id: "routes/api.user.search",
    parentId: "root",
    path: "api/user/search",
    index: void 0,
    caseSensitive: void 0,
    module: api_user_search_exports
  },
  "routes/api.suggestion": {
    id: "routes/api.suggestion",
    parentId: "root",
    path: "api/suggestion",
    index: void 0,
    caseSensitive: void 0,
    module: api_suggestion_exports
  },
  "routes/api.reply.$id": {
    id: "routes/api.reply.$id",
    parentId: "routes/api.reply",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: api_reply_id_exports
  },
  "routes/auth_.pusher": {
    id: "routes/auth_.pusher",
    parentId: "root",
    path: "auth/pusher",
    index: void 0,
    caseSensitive: void 0,
    module: auth_pusher_exports
  },
  "routes/auth_.login": {
    id: "routes/auth_.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_exports
  },
  "routes/api.reply": {
    id: "routes/api.reply",
    parentId: "root",
    path: "api/reply",
    index: void 0,
    caseSensitive: void 0,
    module: api_reply_exports
  },
  "routes/api.post": {
    id: "routes/api.post",
    parentId: "root",
    path: "api/post",
    index: void 0,
    caseSensitive: void 0,
    module: api_post_exports
  },
  "routes/api.text": {
    id: "routes/api.text",
    parentId: "root",
    path: "api/text",
    index: void 0,
    caseSensitive: void 0,
    module: api_text_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/list": {
    id: "routes/list",
    parentId: "root",
    path: "list",
    index: void 0,
    caseSensitive: void 0,
    module: list_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
