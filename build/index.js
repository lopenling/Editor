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
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// empty-module:./component/SearchString.client
var require_SearchString = __commonJS({
  "empty-module:./component/SearchString.client"(exports, module2) {
    module2.exports = {};
  }
});

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

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
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
var import_jsx_runtime2 = require("react/jsx-runtime");
function ErrorPage({ message }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "mb-4 text-gray-700", children: message }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "a",
          {
            href: "/",
            style: { textDecoration: "none", marginLeft: 10 },
            className: " rounded bg-red-500 px-4 py-2 font-bold text-white no-underline hover:bg-red-600",
            children: "[Home page]"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "img",
          {
            src: "https://st.depositphotos.com/1006899/2650/i/600/depositphotos_26505551-stock-photo-error-metaphor.jpg",
            alt: "errorMessage"
          }
        )
      ]
    }
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
var ForumLink = "https://forum.lopenling.org", LANGUAGE_OPTION_TRANSLATION = ["FR", "BO", "EN"];

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
    let filterCategory = (await (await fetch(`${this.DiscourseUrl}/categories.json?include_subcategories=true`)).json())?.category_list.categories.find((category) => category?.id === parseInt(id));
    return filterCategory.subcategory_ids.length ? filterCategory.subcategory_list : null;
  }
  async fetchposts(topicId) {
    if (topicId) {
      console.log(...oo_oo("2338356409_45_6_45_26_4", topicId));
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
    }, queryParams = new URLSearchParams(new_Topic_data).toString(), data2 = await (await fetch(`${this.DiscourseUrl}/posts.json?${queryParams}`, {
      method: "POST",
      headers: auth_headers
    })).json();
    if (data2?.errors)
      throw new Error("Post cannot be created due to dublication!" + data2.errors);
    return data2;
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
      console.log(...oo_oo("2338356409_146_6_146_20_4", e));
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
      console.log(...oo_oo("2338356409_172_6_172_20_4", e));
    }
  }
  async deletePost(postId) {
    let auth_headers = this.authHeader();
    try {
      let response = await fetch(`${this.DiscourseUrl}/posts/${postId}.json`, {
        method: "DELETE",
        headers: auth_headers
      });
      return console.log(...oo_oo("2338356409_184_6_184_27_4", response)), response.status;
    } catch (e) {
      console.log(...oo_oo("2338356409_187_6_187_20_4", e));
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
      console.log(...oo_oo("2338356409_214_6_214_20_4", e));
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
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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
  // a Cookie from `createCookie` or the CookieOptions to create one
  cookie: {
    // Expires can also be set (although maxAge overrides it when used in combination).
    // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
    //
    // expires: new Date(Date.now() + 60_000),
    secrets: ["r3m1xr0ck5"],
    sameSite: "lax",
    maxAge: 43200,
    // this is half day in sec
    secure: !0
  }
});
async function getUserSession(request) {
  return (await getSession(request.headers.get("Cookie"))).get("user");
}
async function destroyUserSession(request) {
  let session = await getSession(request.headers.get("Cookie")), external_id = session.get("user").external_id;
  return (await logout(external_id))?.status === 200 ? await destroySession(session, { sameSite: "lax" }) : null;
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
var globalStyle_default = "/build/_assets/globalStyle-MZZHSTMT.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-5DHTPD3F.css";

// app/root.tsx
var import_react_littera = require("@assembless/react-littera"), import_recoil = require("recoil"), import_framer_motion = require("framer-motion");

// app/services/db.server.ts
var import_client = require("@prisma/client"), db;
db = new import_client.PrismaClient();

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
var theme_default = "/build/_assets/theme-HEKQUSZG.css";

// node_modules/nprogress/nprogress.css
var nprogress_default = "/build/_assets/nprogress-C3MKFLXR.css";

// app/root.tsx
var import_react3 = require("react"), import_nprogress2 = __toESM(require("nprogress")), import_jsx_runtime3 = require("react/jsx-runtime");
function meta({ matches }) {
  return [
    { title: matches[0].meta.find((m) => m.title) || "Lopenling App" },
    {
      name: "description",
      content: "annotation of text and discussion on budhist text"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    },
    { property: "og:title", content: "Lopenling App" },
    {
      name: "keywords",
      content: "Lopenling, Lopen, editor,tibetan,critical text,pecha ,text, lopenling-editor"
    }
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
    { rel: "stylesheet", href: nprogress_default }
  ];
}
function ErrorBoundary() {
  let error = (0, import_react2.useRouteError)();
  return (0, import_react2.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { children: error.status }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ErrorPage, { message: error.data })
  ] }) : error instanceof Error ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ErrorPage, { message: error.message }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "The stack trace is:" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: error.stack })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { children: "Unknown Error" });
}
function App() {
  let data2 = (0, import_react2.useLoaderData)(), navigation = (0, import_react2.useNavigation)(), fetchers = (0, import_react2.useFetchers)(), state = (0, import_react3.useMemo)(
    function() {
      return [navigation.state, ...fetchers.map((fetcher) => fetcher.state)].every((state2) => state2 === "idle") ? "idle" : "loading";
    },
    [navigation.state, fetchers]
  );
  return (0, import_react3.useEffect)(() => {
    state === "loading" && import_nprogress2.default.start(), state === "idle" && import_nprogress2.default.done();
  }, [navigation.state]), /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("html", { className: data2.user?.preference?.theme || "light", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("meta", { charSet: "UTF-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css", rel: "stylesheet" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("body", { className: "relative max-h-[100vh] max-w-[100vw] overflow-x-hidden  scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900 dark:bg-gray-600 dark:text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_littera.LitteraProvider, { locales: ["en_US", "bo_TI"], children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_framer_motion.AnimatePresence, { mode: "wait", initial: !1, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_recoil.RecoilRoot, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.Outlet, { context: { user: data2.user } }) }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.ScrollRestoration, { getKey: (location) => location.pathname }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.LiveReload, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.Scripts, {})
    ] })
  ] });
}

// app/routes/text_.$textId.page.$pageId.translation.$translationId.tsx
var text_textId_page_pageId_translation_translationId_exports = {};
__export(text_textId_page_pageId_translation_translationId_exports, {
  action: () => action,
  default: () => text_textId_page_pageId_translation_translationId_default,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react13 = require("@remix-run/react"), import_react14 = require("@tiptap/react");

// app/component/Layout/Header.tsx
var import_react9 = require("@remix-run/react");

// app/assets/logo.png
var logo_default = "/build/_assets/logo-M44S4BEM.png";

// app/component/Layout/Header.tsx
var import_react_littera3 = require("@assembless/react-littera"), import_react10 = require("react");

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

// app/component/UI/Button.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), Button = ({ label = "", ...props }) => {
  let color = props.type === "submit" ? "bg-green-400" : "bg-transparent", disabled = props.disabled === null ? !1 : props.disabled, textColor = props.type === "submit" ? "text-white" : "text-black";
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "button",
    {
      className: `${color} ${textColor} cursor-pointer rounded-lg px-3 py-2 text-center text-xs  font-medium  focus:outline-none focus:ring-4 `,
      disabled,
      ...props,
      children: label
    }
  );
};

// app/component/UI/MustLoggedIn.tsx
var import_react4 = require("@remix-run/react");
var import_jsx_runtime5 = require("react/jsx-runtime");
function LogInMessage() {
  let loginFetcher = (0, import_react4.useFetcher)(), redirectTo = (0, import_react4.useLocation)().pathname, translation = uselitteraTranlation();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "div",
    {
      id: "toast-success",
      className: "mb-4 flex w-full  items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
      role: "alert",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "svg",
            {
              "aria-hidden": "true",
              className: "h-5 w-5",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                  clipRule: "evenodd"
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "sr-only", children: "Warning icon" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          loginFetcher.Form,
          {
            method: "POST",
            id: "login",
            action: "/auth/login",
            className: "ml-3 flex items-center text-sm font-normal",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { type: "hidden", name: "redirectTo", defaultValue: redirectTo }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "button",
                {
                  type: "submit",
                  name: "_action",
                  value: "login",
                  className: "text-sm font-medium capitalize leading-tight text-gray-900 dark:text-white",
                  children: translation.login
                }
              )
            ]
          }
        )
      ]
    }
  );
}

// app/component/UI/Skeleton.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Skeleton({ height, number }) {
  let items = Array.from({ length: number }, (_, index) => index + 1);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { role: "status", className: "flex h-full w-full animate-pulse flex-col space-y-3.5", children: [
    items.map((l, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "div",
      {
        className: " mb-2.5 block w-full  rounded-sm border border-gray-200 bg-gray-200 p-6 shadow  hover:bg-gray-100 dark:border-gray-700  dark:bg-gray-700 dark:hover:bg-gray-700",
        style: { height }
      },
      "skeleton" + index
    )),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "sr-only", children: "Loading..." })
  ] });
}

// app/component/UI/Spinner.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function Spinner({ color = "blue", size = "md" }) {
  let width = 4, height = 4;
  return size === "md" && (width = 6, height = 6), /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { role: "status", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "svg",
      {
        "aria-hidden": "true",
        className: `inline w-${width} h-${height} mr-2 animate-spin text-gray-200 dark:text-gray-600 fill-${color}-600`,
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "path",
            {
              d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
              fill: "currentColor"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "path",
            {
              d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
              fill: "currentFill"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "sr-only", children: "Loading..." })
  ] });
}

// app/component/UI/TextArea.tsx
var import_react5 = require("react"), import_jsx_runtime8 = require("react/jsx-runtime"), TextArea = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  "textarea",
  {
    ref,
    ...props,
    className: "whitespace-pre-wrap block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
  }
), TextArea_default = (0, import_react5.forwardRef)(TextArea);

// app/component/UI/Avatar.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "img",
    {
      className: `${rounded && "rounded-full"}`,
      src: img,
      alt,
      title,
      style: { width: px, height: px }
    }
  );
}

// app/lib/copyToClipboard.ts
function copyToClipboard(text) {
  let textarea = document.createElement("textarea");
  textarea.value = text, textarea.style.position = "fixed", textarea.style.opacity = "0", document.body.appendChild(textarea), textarea.select();
  try {
    document.execCommand("copy"), console.log(...oo_oo2("1394269713_15_4_15_43_4", "Text copied to clipboard"));
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
  document.body.removeChild(textarea);
}
function oo_cm2() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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
  let date = typeof dateParam == "object" ? dateParam : new Date(dateParam), DAY_IN_MS = 864e5, today = /* @__PURE__ */ new Date(), yesterday = new Date(today - DAY_IN_MS), seconds = Math.round((today - date) / 1e3), minutes = Math.round(seconds / 60), isToday = today.toDateString() === date.toDateString(), isYesterday = yesterday.toDateString() === date.toDateString(), isThisYear = today.getFullYear() === date.getFullYear();
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

// app/lib/containsTIbetanWord.ts
function containTibetanletter(str) {
  return /[\u0F00-\u0FFF]/.test(str);
}
var containsTIbetanWord_default = containTibetanletter;

// app/lib/index.ts
var isSmallScreen = import_react_device_detect.isMobile || import_react_device_detect.isTablet;

// app/component/Layout/Header.tsx
var import_fa2 = require("react-icons/fa"), import_ai = require("react-icons/ai");

// app/features/Editor/component/EditorSetting.tsx
var import_fa = require("react-icons/fa"), import_fc = require("react-icons/fc");

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
    element2.scrollIntoView({ behavior: "smooth", block: "start" }),
    element1.scrollIntoView({ block: "start", inline: "start" })
  ]), setTimeout(() => {
    window.getSelection()?.selectAllChildren(element1);
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

// app/features/Editor/component/EditorSetting.tsx
var import_react7 = require("react");
var import_react8 = require("@remix-run/react"), import_recoil3 = require("recoil");

// app/states.ts
var import_recoil2 = require("recoil"), audioPermission = (0, import_recoil2.atom)({
  key: "audioPermission",
  default: !1
}), ImageState = (0, import_recoil2.atom)({
  default: { show: !0, url: "", isPortrait: !1 },
  key: "showImage"
}), textInfo = (0, import_recoil2.atom)({
  key: "textName",
  default: {
    name: "",
    id: ""
  }
}), shareState = (0, import_recoil2.atom)({
  key: "sharePost",
  default: !1
}), openFilterState = (0, import_recoil2.atom)({
  key: "openFilter",
  // unique ID (with respect to other atoms/selectors)
  default: !1
  // default value (aka initial value)
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

// app/features/Media/Image.tsx
var import_react6 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime"), ImageWithPlaceholder = ({ src, alt, title = "", onClick = () => {
} }) => {
  let [loading, setLoading] = (0, import_react6.useState)(!0);
  return (0, import_react6.useEffect)(() => {
    let image = new Image();
    return image.src = src, image.onload = () => {
      setLoading(!1);
    }, () => {
      image.onload = null;
    };
  }, [src]), /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: { position: "relative", height: 80, width: 80 }, children: [
    loading && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#f2f2f2",
          // Placeholder background color
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Spinner, {})
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "img",
      {
        src,
        alt,
        title,
        onClick,
        style: { display: loading ? "none" : "block" },
        loading: "lazy",
        className: "w-full cursor-pointer object-contain"
      }
    )
  ] });
}, Image_default = ImageWithPlaceholder;

// app/features/Editor/component/EditorSetting.tsx
var import_flowbite_react = require("flowbite-react"), import_jsx_runtime11 = require("react/jsx-runtime");
function sEditorSetting({ editor }) {
  let [image, setShowImage] = (0, import_recoil3.useRecoilState)(ImageState), data2 = (0, import_react8.useLoaderData)(), [searchParam] = (0, import_react8.useSearchParams)(), version = searchParam.get("version"), handleFontSizeChange = (e) => {
    let value = e.target.value;
    setFontSize(parseInt(value)), changeFont(value);
  }, toggleImage = (e) => {
    setShowImage({ ...image, show: e.target.checked });
  }, [fontSize, setFontSize] = (0, import_react7.useState)(isSmallScreen ? 16 : 20), themes = [
    { background: "white", text: "black" },
    { background: "#C4E0A6", text: "black" },
    { background: "#B9F3DD", text: "black" },
    { background: "#5A5A5C", text: "white" }
  ], changeTheme = (theme) => {
    document.documentElement.style.setProperty("--background-text-editor", theme.background), document.documentElement.style.setProperty("--text-text-editor", theme.text);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    import_flowbite_react.Dropdown,
    {
      label: "editor_setting",
      renderTrigger: () => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("button", { className: "mr-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_fc.FcSettings, { color: "inherit", className: "fill-gray-400 hover:text-gray-600 md:hidden ", size: 24 }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_fa.FaBars, { color: "inherit", className: "hidden fill-gray-400 hover:text-gray-600 md:block ", size: 24 })
      ] }),
      className: "py-1 text-sm text-gray-700 dark:bg-gray-600 dark:text-gray-200",
      "aria-labelledby": "dropdownMenuIconHorizontalButton",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_flowbite_react.Dropdown.Item, { className: "flex cursor-pointer flex-col gap-2 bg-gray-100 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-white", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          Image_default,
          {
            src: `https://opf.fi/image/${data2.text.id}/${data2.order}/${version}`,
            alt: "qr",
            title: "copy url",
            onClick: () => navigator.clipboard.writeText(window.location.href)
          }
        ) }) }),
        image.url && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_flowbite_react.Dropdown.Item, { className: "flex items-center px-4 py-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "input",
            {
              checked: image.show,
              id: "imageToggle",
              type: "checkbox",
              className: "mb-2 mr-2 cursor-pointer",
              onChange: toggleImage
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { htmlFor: "imageToggle", className: "mb-2 cursor-pointer", children: "Image" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          import_flowbite_react.Dropdown.Item,
          {
            onClick: () => exportDoc(editor?.getText(), data2.text.name),
            className: " flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M3 17C3 16.7348 3.10536 16.4804 3.29289 16.2929C3.48043 16.1054 3.73478 16 4 16H16C16.2652 16 16.5196 16.1054 16.7071 16.2929C16.8946 16.4804 17 16.7348 17 17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17ZM6.293 9.293C6.48053 9.10553 6.73484 9.00021 7 9.00021C7.26516 9.00021 7.51947 9.10553 7.707 9.293L9 10.586V3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2C10.2652 2 10.5196 2.10536 10.7071 2.29289C10.8946 2.48043 11 2.73478 11 3V10.586L12.293 9.293C12.3852 9.19749 12.4956 9.12131 12.6176 9.0689C12.7396 9.01649 12.8708 8.9889 13.0036 8.98775C13.1364 8.9866 13.2681 9.0119 13.391 9.06218C13.5139 9.11246 13.6255 9.18671 13.7194 9.28061C13.8133 9.3745 13.8875 9.48615 13.9378 9.60905C13.9881 9.73194 14.0134 9.86362 14.0123 9.9964C14.0111 10.1292 13.9835 10.2604 13.9311 10.3824C13.8787 10.5044 13.8025 10.6148 13.707 10.707L10.707 13.707C10.5195 13.8945 10.2652 13.9998 10 13.9998C9.73484 13.9998 9.48053 13.8945 9.293 13.707L6.293 10.707C6.10553 10.5195 6.00021 10.2652 6.00021 10C6.00021 9.73484 6.10553 9.48053 6.293 9.293Z",
                  className: "fill-gray-600"
                }
              ) }),
              "Export"
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_flowbite_react.Dropdown.Item, { className: "flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white", children: [
          "Font Size",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "input",
            {
              type: "number",
              min: 10,
              value: fontSize,
              size: 2,
              max: 40,
              style: { border: 0, padding: 0, width: 40, color: "black" },
              onChange: handleFontSizeChange
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_flowbite_react.Dropdown.Item, { className: "flex  items-center gap-2 px-4 py-2", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex gap-2", children: themes.map((theme) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "div",
          {
            className: "h-5 w-5 cursor-pointer rounded-full border-2 hover:border-gray-400",
            title: theme.background,
            style: { backgroundColor: theme.background },
            onClick: () => changeTheme(theme)
          },
          theme.background
        )) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_flowbite_react.Dropdown.Item, { className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white", children: "Report" })
      ]
    }
  );
}

// app/component/Layout/Header.tsx
var import_fa3 = require("react-icons/fa"), import_flowbite_react2 = require("flowbite-react"), import_jsx_runtime12 = require("react/jsx-runtime"), LogoWithTextName = ({ textName }) => (textName.length > 20 && isSmallScreen && (textName = textName.slice(0, 25) + "..."), /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center gap-1", children: [
  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react9.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("img", { src: logo_default, alt: "logo", className: "block object-contain", style: { maxHeight: "37px" } }) }),
  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "h1",
    {
      onClick: () => {
        document.documentElement?.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
      style: { top: containsTIbetanWord_default(textName) ? -7 : 0, fontSize: 24 },
      className: "relative ml-2 text-3xl  font-bold ",
      children: textName
    }
  )
] }));
function Header({ editor }) {
  let loginFetcher = (0, import_react9.useFetcher)(), themeFetcher = (0, import_react9.useFetcher)(), translation = uselitteraTranlation(), { pathname, search } = (0, import_react9.useLocation)(), redirectTo = pathname + search, [TextNameOnHeader, setTextNameOnHeader] = (0, import_react10.useState)(!1), { user } = (0, import_react9.useOutletContext)(), { text } = (0, import_react9.useLoaderData)(), changeTheme = () => {
    themeFetcher.submit(
      {
        theme: user?.preference?.theme !== "dark" ? "dark" : "light"
      },
      {
        action: "/api/user/preference/theme",
        method: "POST"
      }
    );
  };
  (0, import_react10.useEffect)(() => {
    let timeout, handleScroll = () => {
      timeout && clearTimeout(timeout), timeout = setTimeout(() => {
        var scrollTopValue = window.pageYOffset || document.documentElement?.scrollTop || document.body?.scrollTop;
        let shouldShowTextName = scrollTopValue > 10 && redirectTo.includes("text");
        setTextNameOnHeader(shouldShowTextName);
      }, 10);
    };
    return window.addEventListener("scroll", handleScroll), () => window?.addEventListener("scroll", handleScroll);
  }, [redirectTo]);
  let darkMode = user?.preference?.theme === "dark";
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "nav",
    {
      className: "z-50 w-full border-gray-200 bg-white dark:bg-gray-900 ",
      style: {
        height: 56,
        fontFamily: "serif"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: " mx-auto flex flex-wrap items-center justify-between p-2", children: [
        TextNameOnHeader ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(LogoWithTextName, { textName: text.name }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react9.NavLink, { to: "/", prefetch: "intent", className: "flex w-auto items-center", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "img",
          {
            src: ForumLink + "/uploads/default/original/1X/0ac3db8e589f085c53c5ff8f36c17722888658ad.png",
            alt: "logo",
            className: "block h-8 object-contain p-1 md:p-0"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex gap-2", children: [
          !user && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex gap-2", id: "user-menu-button", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", { href: ForumLink + "/signup", id: "signup", className: "loginButton", children: translation.signup }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(loginFetcher.Form, { method: "POST", id: "login", action: "/auth/login", className: "mr-2 flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "hidden", name: "redirectTo", defaultValue: redirectTo }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("button", { type: "submit", name: "_action", value: "login", className: "loginButton flex items-center gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_fa3.FaUserAlt, {}),
                translation.login
              ] })
            ] })
          ] }),
          editor && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(sEditorSetting, { editor }),
          user && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
            import_flowbite_react2.Dropdown,
            {
              label: "Dropdown button",
              dismissOnClick: !1,
              renderTrigger: () => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                "button",
                {
                  type: "button",
                  className: "  rounded-full  text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0",
                  id: "user-menu-button",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "sr-only", children: "Open user menu" }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Avatar, { alt: user.name, img: user.avatarUrl, rounded: !0, title: user?.name, size: "sm" })
                  ]
                }
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_flowbite_react2.Dropdown.Item, { children: [
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "px-4 py-3", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "block text-sm text-gray-900 dark:text-white", children: user.name }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "block truncate  text-sm text-gray-500 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                      "a",
                      {
                        target: "_self",
                        href: ForumLink + `/u/${user?.username}/summary`,
                        className: "block truncate text-sm font-medium",
                        children: user?.email
                      }
                    ) })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_flowbite_react2.Dropdown.Item, { children: [
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                    "div",
                    {
                      onClick: changeTheme,
                      className: " cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white",
                      children: darkMode ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex gap-2 ", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            className: `${themeFetcher.formData?.get("theme") && "animate-spin"} h-5 w-5`,
                            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                              "path",
                              {
                                fillRule: "evenodd",
                                d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                                clipRule: "evenodd"
                              }
                            )
                          }
                        ),
                        "Light mode"
                      ] }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex gap-2", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            className: `${themeFetcher.formData?.get("theme") && "animate-spin"} h-5 w-5`,
                            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" })
                          }
                        ),
                        "Dark mode"
                      ] })
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_flowbite_react2.Dropdown.Item, { children: [
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: " flex flex-col justify-center", "aria-labelledby": "user-menu-button ", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Translation, {}),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                      "a",
                      {
                        target: "_blank",
                        href: ForumLink + `/u/${user?.username}/preferences/account`,
                        className: " flex gap-2 truncate px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                            "path",
                            {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M11.49 3.17C11.11 1.61 8.88999 1.61 8.50999 3.17C8.45326 3.40442 8.34198 3.62212 8.18522 3.80541C8.02845 3.9887 7.83062 4.13238 7.60784 4.22477C7.38505 4.31716 7.1436 4.35564 6.90313 4.33709C6.66266 4.31854 6.42997 4.24347 6.22399 4.118C4.85199 3.282 3.28199 4.852 4.11799 6.224C4.65799 7.11 4.17899 8.266 3.17099 8.511C1.60999 8.89 1.60999 11.111 3.17099 11.489C3.40547 11.5458 3.62322 11.6572 3.80651 11.8141C3.98979 11.971 4.13343 12.1689 4.22573 12.3918C4.31803 12.6147 4.35639 12.8563 4.33766 13.0968C4.31894 13.3373 4.24368 13.5701 4.11799 13.776C3.28199 15.148 4.85199 16.718 6.22399 15.882C6.42993 15.7563 6.66265 15.6811 6.90318 15.6623C7.14371 15.6436 7.38527 15.682 7.60817 15.7743C7.83108 15.8666 8.02904 16.0102 8.18592 16.1935C8.34281 16.3768 8.45419 16.5945 8.51099 16.829C8.88999 18.39 11.111 18.39 11.489 16.829C11.546 16.5946 11.6575 16.377 11.8144 16.1939C11.9713 16.0107 12.1692 15.8672 12.3921 15.7749C12.6149 15.6826 12.8564 15.6442 13.0969 15.6628C13.3373 15.6815 13.57 15.7565 13.776 15.882C15.148 16.718 16.718 15.148 15.882 13.776C15.7565 13.57 15.6815 13.3373 15.6628 13.0969C15.6442 12.8564 15.6826 12.6149 15.7749 12.3921C15.8672 12.1692 16.0107 11.9713 16.1939 11.8144C16.377 11.6575 16.5946 11.546 16.829 11.489C18.39 11.11 18.39 8.889 16.829 8.511C16.5945 8.45419 16.3768 8.34281 16.1935 8.18593C16.0102 8.02904 15.8666 7.83109 15.7743 7.60818C15.682 7.38527 15.6436 7.14372 15.6623 6.90318C15.681 6.66265 15.7563 6.42994 15.882 6.224C16.718 4.852 15.148 3.282 13.776 4.118C13.5701 4.24368 13.3373 4.31895 13.0968 4.33767C12.8563 4.35639 12.6147 4.31804 12.3918 4.22574C12.1689 4.13344 11.971 3.9898 11.8141 3.80651C11.6572 3.62323 11.5458 3.40548 11.489 3.171L11.49 3.17ZM9.99999 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 9.99999 7C9.20434 7 8.44128 7.31607 7.87867 7.87868C7.31606 8.44129 6.99999 9.20435 6.99999 10C6.99999 10.7956 7.31606 11.5587 7.87867 12.1213C8.44128 12.6839 9.20434 13 9.99999 13V13Z",
                              fill: darkMode ? "white" : "#111928"
                            }
                          ) }),
                          "Preferences"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                      import_react9.Form,
                      {
                        method: "POST",
                        action: "/auth/login",
                        className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                            "input",
                            {
                              type: "hidden",
                              name: "redirectTo",
                              className: "block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
                              defaultValue: redirectTo
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                            "button",
                            {
                              className: "flex items-center gap-2 px-1 text-sm font-medium leading-tight",
                              type: "submit",
                              name: "_action",
                              value: "logout",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_fa2.FaSignOutAlt, {}),
                                translation.logout
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ] })
                ] })
              ]
            }
          ) })
        ] })
      ] })
    }
  );
}
function Translation() {
  let methods = (0, import_react_littera3.useLitteraMethods)();
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex  items-center justify-start space-x-0.5 px-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_ai.AiOutlineTranslation, {}),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "select",
      {
        onChange: (e) => {
          methods.setLocale(e.target.value);
        },
        className: "border-transparent bg-transparent text-gray-500 focus:border-transparent focus:outline-none  focus:ring-0 focus:ring-gray-100 dark:border-gray-600  dark:bg-transparent dark:text-white dark:focus:ring-gray-700",
        children: translationCodes.map((code) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("option", { value: code.code, className: "bg-white dark:bg-slate-600 ", children: code.name }, code.code))
      }
    )
  ] });
}
var Header_default = (0, import_react10.memo)(Header);

// app/features/Editor/tiptap/component/ToolButton.tsx
var import_jsx_runtime13 = require("react/jsx-runtime"), ToolButton = ({ children, isActive, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  "button",
  {
    ...props,
    className: `text-gray-600 shadow px-2 py-1 rounded-sm ${isActive ? "bg-gray-400" : "bg-white"} disabled:opacity-70`,
    children
  }
), ToolButton_default = ToolButton;

// app/features/Editor/tiptap/component/Tools.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function Tools({ editor }) {
  return editor ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex flex-wrap justify-between bg-gray-200 z-10 rounded-md border-2 sticky top-0", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      ToolButton_default,
      {
        onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: editor.isActive("heading", { level: 1 }),
        children: "H1"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      ToolButton_default,
      {
        onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
        isActive: editor.isActive("heading", { level: 3 }),
        children: "H3"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      ToolButton_default,
      {
        onClick: () => editor.chain().focus().toggleBold().run(),
        className: "ml-2 ",
        isActive: editor.isActive("bold"),
        children: "bold"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      ToolButton_default,
      {
        onClick: () => editor.chain().focus().toggleHighlight({ color: "#8ce99a" }).run(),
        isActive: editor.isActive("highlight", { color: "#8ce99a" }),
        children: "highlight"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ToolButton_default, { onClick: () => editor.chain().focus().undo().run(), disabled: !editor.can().undo(), children: "undo" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ToolButton_default, { onClick: () => editor.chain().focus().redo().run(), disabled: !editor.can().redo(), children: "redo" })
  ] }) }) : null;
}
var Tools_default = Tools;

// app/features/Editor/tiptap/index.ts
var import_extension_paragraph = __toESM(require("@tiptap/extension-paragraph")), import_extension_document = __toESM(require("@tiptap/extension-document")), import_extension_text = __toESM(require("@tiptap/extension-text")), import_extension_bold = __toESM(require("@tiptap/extension-bold")), import_extension_hard_break = __toESM(require("@tiptap/extension-hard-break")), import_extension_highlight = __toESM(require("@tiptap/extension-highlight")), import_extension_text_style = __toESM(require("@tiptap/extension-text-style")), import_extension_font_family = __toESM(require("@tiptap/extension-font-family")), import_extension_underline = __toESM(require("@tiptap/extension-underline")), import_extension_placeholder = __toESM(require("@tiptap/extension-placeholder")), import_extension_italic = __toESM(require("@tiptap/extension-italic")), import_extension_heading = __toESM(require("@tiptap/extension-heading"));

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
            setter(clickedNode?.id);
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
            setter(clickedNode?.id);
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
  doc?.descendants((node, pos) => {
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
    event.preventDefault(), console.log(...oo_oo3("3014904362_20_4_20_18_4", v));
  }
}, noneditable = {
  handleDOMEvents,
  attributes: {
    inputmode: "none",
    "data-encoding": "UTF-8"
  }
}, editable = {
  handleDOMEvents: {},
  attributes: {
    inputmode: "none",
    "data-encoding": "UTF-8"
  }
}, events_default = { editable, noneditable };
function oo_cm3() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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

// app/features/Editor/tiptap/index.ts
var import_extension_history = __toESM(require("@tiptap/extension-history"));

// app/features/Editor/tiptap/useEditorInstance.tsx
var import_react11 = require("@tiptap/react"), import_recoil4 = require("recoil");
var import_react12 = require("@remix-run/react"), useEditorInstance = (content, isEditable, paramUpdate = !0) => {
  let setSelectionRange = (0, import_recoil4.useSetRecoilState)(selectedTextOnEditor), [param, setSearchParams] = (0, import_react12.useSearchParams)();
  function suggestionSetter(id) {
    setSearchParams({ with: "Suggestion", thread: id });
  }
  function postSetter(id) {
    setSearchParams({ with: "Post", thread: id });
  }
  return (0, import_react11.useEditor)(
    {
      extensions: [
        import_extension_document.default,
        import_extension_heading.default.configure({
          levels: [1, 2, 3]
        }),
        import_extension_paragraph.default.configure({}),
        import_extension_text.default,
        import_extension_bold.default,
        import_extension_font_family.default,
        import_extension_history.default.configure({
          newGroupDelay: 500,
          depth: 100
        }),
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
          },
          multicolor: !0
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
      content: content || void 0,
      editable: !0,
      editorProps: isEditable ? events_default.editable : events_default.noneditable,
      onSelectionUpdate: ({ editor: editor2 }) => {
        if (!paramUpdate)
          return null;
        let from = editor2.state.selection.from, to = editor2.state.selection.to;
        setSelectionRange({
          type: "",
          start: from,
          end: to,
          content: editor2?.state.doc.textBetween(from, to, "")
        }), !editor2.isActive("suggestion") && !editor2.isActive("post") && param.get("with") !== "all" && setSearchParams({ with: "all" });
      }
    },
    [content]
  );
}, useEditorInstance_default = useEditorInstance;

// app/model/page.ts
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
      page.version && (versionCountMap.hasOwnProperty(page.version) ? versionCountMap[page.version]++ : versionCountMap[page.version] = 1);
    }), Object.entries(versionCountMap).map(([version, count]) => ({ version, count }));
  } catch (e) {
    return console.log(...oo_oo4("3207104902_47_4_47_18_4", e)), [];
  }
}
async function getPageContent(textId, order) {
  let page = await getPage(textId, order, null), data2 = await db.page.findFirst({
    where: {
      id: page?.id
    },
    select: {
      id: !0,
      content: !0
    }
  });
  return { id: data2?.id, content: data2?.content };
}
async function getPage(textId, order, version) {
  try {
    let Id = parseInt(textId), where = typeof version == "string" ? { textId: Id, order, version } : { textId: Id, order }, pageWhere = version ? { version } : {};
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
    console.log(...oo_oo4("3207104902_93_4_93_18_4", e));
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
function oo_cm4() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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

// app/model/userText.ts
var getUserPage = async (id) => db.userText.findUnique({
  where: { id },
  include: {
    translations: !0
  }
});
var updateSource = async (id, content) => db.userText.update({
  where: { id: parseInt(id) },
  data: {
    content
  }
}), createUserText = async (textId, pageId, userId, content, name) => await db.userText.create({
  data: {
    textId,
    pageId,
    userId,
    content,
    name
  }
});

// app/model/translation.ts
var listTranslations = async (textId, pageId) => await db.translation.findMany({
  where: {
    textId: parseInt(textId),
    pageId
  },
  include: {
    userText: {
      select: {
        name: !0,
        user: {
          select: {
            username: !0
          }
        }
      }
    }
  }
}), getTranslation = async (id) => await db.translation.findUnique({
  where: {
    id
  },
  include: {
    userText: {
      select: {
        user: {
          select: {
            username: !0
          }
        }
      }
    }
  }
}), createTranslation = async (textId, order, language, content, userId, name) => {
  let page = await getPageContent(textId, parseInt(order)), new_userPage = await createUserText(textId, page?.id, userId, page?.content, name);
  return await db.translation.create({
    data: {
      language,
      content,
      userTextId: new_userPage.id,
      textId,
      pageId: page?.id
    }
  });
}, deleteTranslation = async (id) => {
  let deleted = await db.translation.delete({
    where: { id }
  });
  return await db.userText.delete({
    where: { id: deleted.userTextId }
  });
};

// app/routes/text_.$textId.page.$pageId.translation.$translationId.tsx
var import_bs = require("react-icons/bs"), import_ai2 = require("react-icons/ai"), import_flowbite_react3 = require("flowbite-react"), import_io = require("react-icons/io");
var import_jsx_runtime15 = require("react/jsx-runtime"), loader2 = async ({ request, params }) => {
  let textId = params.textId, order = params.pageId, translationId = params.translationId, translation = await getTranslation(parseInt(translationId)), userText = await getUserPage(translation?.userTextId);
  return (0, import_node3.json)({
    textId,
    order,
    translation,
    userText
  });
}, action = async ({ request }) => {
  let formdata = await request.formData(), sourceContent = formdata.get("sourceContent"), translationContent = formdata.get("translationContent"), sourceId = formdata.get("sourceId"), translationId = formdata.get("translationId");
  try {
    let [userText, translation] = await db.$transaction([
      db.userText.update({
        where: { id: parseInt(sourceId) },
        data: {
          content: sourceContent
        }
      }),
      db.translation.update({
        where: { id: parseInt(translationId) },
        data: {
          content: translationContent
        }
      })
    ]);
    return {
      userText,
      translation
    };
  } catch (e) {
    throw new Error("error " + e);
  }
};
function TranslationsRoute() {
  let { translation, userText, textId, order } = (0, import_react13.useLoaderData)(), source_editor = useEditorInstance_default(userText.content, !0, !1), translation_editor = useEditorInstance_default(translation.content, !0, !1), fetcher = (0, import_react13.useFetcher)();
  function save() {
    fetcher.submit(
      {
        sourceContent: source_editor.getHTML(),
        translationContent: translation_editor.getHTML(),
        translationId: translation.id,
        sourceId: userText.id
      },
      {
        method: "POST"
      }
    );
  }
  function share() {
    navigator.clipboard.writeText(window.location.href), alert("text url copied");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Header_default, { editor: null }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex justify-between max-w-6xl m-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_flowbite_react3.Button, { as: import_react13.Link, to: `/text/${textId}/page/${order}`, className: "text-white bg-slate-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_io.IoMdArrowRoundBack, {}),
        "Go to Main Text"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_flowbite_react3.Button, { size: "sm", className: "text-white bg-slate-500", onClick: share, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_bs.BsShare, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          import_flowbite_react3.Button,
          {
            size: "sm",
            className: "text-white bg-slate-500",
            onClick: save,
            isProcessing: fetcher.state !== "idle",
            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_ai2.AiFillSave, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex max-w-6xl gap-3 w-full mx-auto mt-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex-1 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-h-[80vh] overflow-y-scroll", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-gray-400", children: "Source Text" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Tools_default, { editor: source_editor }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react14.EditorContent, { editor: source_editor })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex-1 block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-h-[80vh] overflow-y-scroll", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-gray-400", children: "Translation Text" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Tools_default, { editor: translation_editor }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react14.EditorContent, { editor: translation_editor })
      ] })
    ] })
  ] });
}
var text_textId_page_pageId_translation_translationId_default = TranslationsRoute;

// app/routes/api.user.preference.theme.tsx
var api_user_preference_theme_exports = {};
__export(api_user_preference_theme_exports, {
  action: () => action2
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
    console.log(...oo_oo5("3524168144_41_4_41_18_4", e));
  }
};
function oo_cm5() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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

// app/routes/api.user.preference.theme.tsx
var action2 = async ({ request }) => {
  let user = await getUserSession(request), theme = (await request.formData()).get("theme");
  return await updateTheme(user.id, theme);
};

// app/routes/text.$textId.page.$pageId.tsx
var text_textId_page_pageId_exports = {};
__export(text_textId_page_pageId_exports, {
  default: () => Page,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react50 = require("@remix-run/react");

// app/features/Editor/component/EditorContainer.tsx
var import_react17 = require("@remix-run/react"), import_react18 = require("@tiptap/react"), import_react19 = require("react"), import_recoil5 = require("recoil");

// app/component/UI/Pagination.tsx
var import_react15 = require("@remix-run/react"), import_fa4 = require("react-icons/fa"), import_jsx_runtime16 = require("react/jsx-runtime");
function Pagination({ pageCount }) {
  let data2 = (0, import_react15.useLoaderData)(), textId = data2.text.id, order = parseInt(data2.order), [searchParams] = (0, import_react15.useSearchParams)(), version = searchParams.get("version"), PreviousLink = `/text/${textId}/page/${order - 1}${version ? "/?version=" + version : ""}`, nextLink = `/text/${textId}/page/${order + 1}${version ? "/?version=" + version : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex justify-end gap-3", children: [
    order - 1 > 0 && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react15.Link, { to: PreviousLink, className: "mr-1 flex items-center gap-2 rounded  p-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_fa4.FaArrowLeft, {}),
      "previous"
    ] }),
    order + 1 <= pageCount && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react15.Link, { to: nextLink, className: "mr-1 flex items-center gap-2 rounded  p-1", children: [
      "next",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_fa4.FaArrowRight, {})
    ] })
  ] });
}

// app/features/Editor/component/EditorContainer.tsx
var import_react_zoom_pan_pinch = require("react-zoom-pan-pinch");

// app/features/Editor/component/Controls.tsx
var import_react16 = require("react"), import_jsx_runtime17 = require("react/jsx-runtime"), Controls = ({ zoomIn, zoomOut, resetTransform, url }) => ((0, import_react16.useEffect)(() => {
  resetTransform();
}, [url]), /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "absolute right-3 top-0 z-20 flex gap-3  ", style: { float: "right" }, children: [
  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", { className: "tool-image", onClick: () => zoomIn(), children: "Zoom In +" }),
  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", { className: "tool-image", onClick: () => zoomOut(), children: "Zoom Out -" }),
  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", { className: "tool-image", onClick: () => resetTransform(), children: "reset" })
] })), Controls_default = Controls;

// app/features/Editor/lib/utils.ts
var saveData = async (textContent, annotations, pageId, saveTextFetcher) => {
  let formData = new FormData();
  formData.append("pageId", pageId), formData.append("content", textContent), formData.append("annotations", JSON.stringify(annotations)), saveTextFetcher.submit(formData, {
    method: "POST",
    action: "/api/text"
  });
};

// app/features/Editor/lib/htmlParser.ts
function extractTextAndAnnotations(html) {
  let doc = new DOMParser().parseFromString(html, "text/html"), text = "", annotations = [], walk = (node) => {
    if (node.nodeType === 3) {
      let content = node.textContent || "";
      if (node.parentNode.classList.contains("post") || node.parentNode.classList.contains("suggestion")) {
        let start = text.length, end = start + content.length, type = node.parentNode.classList.contains("post") ? "P" : node.parentNode.classList.contains("suggestion") ? "S" : "", id = node.parentNode.getAttribute("id");
        annotations.push({
          start,
          end,
          type,
          id,
          content
        });
      }
      text += content;
    } else
      for (let child of node.childNodes)
        walk(child);
  };
  return walk(doc.body), { text, annotations };
}
function generateHtmlFromTextAndAnnotations(text, annotations) {
  let html = text;
  return annotations.sort((a, b) => b.start - a.start), annotations.forEach((annotation) => {
    let tagType;
    switch (annotation.type) {
      case "P":
        tagType = "post";
        break;
      case "S":
        tagType = "suggestion";
        break;
    }
    let tagStart = `<${tagType} class="${tagType}" id="${annotation.id}">`, tagEnd = `</${tagType}>`;
    html = html.slice(0, annotation.start) + tagStart + annotation.content + tagEnd + html.slice(annotation.end);
  }), html = "<p>" + html + "</p>", html;
}

// app/features/Editor/component/EditorContainer.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function EditorContainer({ editor, isSaving, page, saveTextFetcher }) {
  let imageUrl = page.imageUrl, pageCount = page?.text.Page.length, pageId = page.id, { annotations, user, text } = (0, import_react17.useLoaderData)(), [Image2, setImage] = (0, import_recoil5.useRecoilState)(ImageState), isPostAllowed = text.allow_post, [selection, setSelectionRange] = (0, import_recoil5.useRecoilState)(selectedTextOnEditor), [searchParams, setSearchParams] = (0, import_react17.useSearchParams)(), searchString = searchParams.get("s") || "", thread = searchParams.get("thread") || "", saving = saveTextFetcher.state !== "idle";
  (0, import_react19.useEffect)(() => {
    let timer = scrollThreadIntoView(thread, `p_${thread}`);
    return editor.on("update", async ({ editor: editor2 }) => {
      let newContent = editor2.getHTML(), { text: text2, annotations: annotations2 } = extractTextAndAnnotations(newContent);
      text2?.length > 100 && user && saveData(text2, annotations2, pageId, saveTextFetcher);
    }), () => {
      timer && clearTimeout(timer);
    };
  }, [editor, thread]), (0, import_react19.useEffect)(() => {
    let timer = setTimeout(() => {
      let newContent = checkunknown_default(page.content.replace(/[\r\n]+/g, "<p/><p>")), content = generateHtmlFromTextAndAnnotations(newContent, annotations);
      editor?.commands.setContent(content);
    }, 100);
    return setImage({ ...Image2, url: imageUrl }), () => {
      clearTimeout(timer);
    };
  }, [page?.content, editor]), (0, import_react19.useEffect)(() => {
    (!searchString || searchString.length === 0) && editor.commands.setSearchTerm("");
  }, [searchString]);
  let handleBubbleClick = (type) => {
    selection.start && setSelectionRange({
      ...selection,
      type
    }), setSearchParams({ with: "Post" });
  };
  function handleSuggestionClick() {
    setSelectionRange({
      ...selection,
      type: ""
    }), setSearchParams({ with: "Suggestion" });
  }
  function handleDeleteMark() {
    editor.isActive("post") && editor.commands.unsetPost(), editor.isActive("suggestion") && editor.commands.unsetSuggestion(), editor.commands.setTextSelection(0);
  }
  let handleImageLoaded = (e) => {
    let height = e.target.height, width = e.target.width;
    setImage({ ...Image2, isPortrait: height > width });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: " mb-4  flex  shadow-sm", style: { flexDirection: Image2.isPortrait ? "row-reverse" : "column" }, children: [
    Image2.show && Image2.url && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "div",
      {
        className: " relative flex w-full max-w-full justify-center bg-gray-100",
        onMouseDown: (e) => e.target.style.cursor = "grabbing",
        onMouseUp: (e) => e.target.style.cursor = "grab",
        children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_zoom_pan_pinch.TransformWrapper, { children: (utils) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Controls_default, { ...utils, url: Image2.url }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            import_react_zoom_pan_pinch.TransformComponent,
            {
              wrapperStyle: { zIndex: 10, width: "100%", maxHeight: "40vh", cursor: "grab" },
              contentStyle: {
                width: "100%",
                maxHeight: "100%"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                "img",
                {
                  alt: "Text Image",
                  src: Image2.url,
                  className: "text-image  border-2 border-gray-200",
                  style: { maxHeight: "100%", objectFit: "contain" },
                  onLoad: handleImageLoaded
                }
              )
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { style: { zIndex: 0 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: " text-light z-10 flex  items-center  justify-between   px-2 py-4  ", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: " flex w-full items-center justify-between gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "div",
          {
            className: "textname flex items-center gap-2",
            style: { fontSize: "clamp(18px, 24px, 2.2vw)", fontWeight: "bold" },
            children: isSaving && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "animate-pulse text-sm font-light", children: "saving..." })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Pagination, { pageCount })
      ] }) }),
      !user && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: "changes won't get saved if you are not logged in" }),
      editor ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        import_react18.EditorContent,
        {
          editor,
          className: "editor transition-all ",
          style: {
            fontSize: isSmallScreen ? 16 : 20,
            pointerEvents: isSaving ? "none" : "all",
            color: saving ? "gray" : "inherit"
          }
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "flex h-[400px] w-full animate-pulse justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "mr-2 h-full flex-1 bg-gray-300 dark:bg-gray-700" }) }),
      editor && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        import_react18.BubbleMenu,
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
          children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "inline-flex rounded-md shadow-sm", role: "group", children: !editor.isActive("suggestion") && !editor.isActive("post") ? selection.content.length > 0 && selection.content.length < 239 && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              Button,
              {
                title: "suggestion",
                type: "button",
                color: "gray",
                className: `bg-white rounded-l-lg ${!isPostAllowed && "rounded-r-lg"} border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10    hover:bg-gray-100  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white  dark:hover:bg-gray-600 dark:hover:text-white `,
                onClick: () => handleSuggestionClick(),
                label: "Suggestion"
              }
            ),
            isPostAllowed && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                Button,
                {
                  title: "comment",
                  color: "gray",
                  className: " border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900  focus:z-10   hover:bg-gray-100  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:hover:bg-gray-600 dark:hover:text-white ",
                  onClick: () => handleBubbleClick("comment"),
                  label: "Comment",
                  type: "button"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                Button,
                {
                  type: "button",
                  title: "question",
                  color: "gray",
                  className: "rounded-r-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10  focus:ring-2 hover:bg-gray-100   dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white  dark:hover:bg-gray-600 dark:hover:text-white ",
                  onClick: () => handleBubbleClick("question"),
                  label: "Question"
                }
              )
            ] })
          ] }) : user?.admin === "true" || text.userId == user?.id ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            Button,
            {
              title: "delete",
              type: "button",
              color: "gray",
              className: " rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:focus:ring-blue-500 dark:hover:bg-gray-600 dark:hover:text-white",
              onClick: () => handleDeleteMark(),
              label: "Delete"
            }
          ) : null })
        }
      )
    ] })
  ] });
}
var EditorContainer_default = EditorContainer;

// app/features/Editor/index.jsx
var import_SearchString = __toESM(require_SearchString());

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
    return console.log(...oo_oo6("4279190504_119_4_119_19_4", id)), await db.suggestion.update({
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
function oo_cm6() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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

// app/routes/text.$textId.page.$pageId.tsx
var import_react_spinner_overlay = require("react-spinner-overlay");

// app/model/annotation.ts
var updateAnnotations = async (pageId, annotations) => {
  let parsedAnnotations;
  try {
    parsedAnnotations = JSON.parse(annotations);
  } catch {
    throw new Error("Invalid JSON format");
  }
  let existingAnnotations = await db.annotations.findMany({
    where: { pageId }
  }), upsertTransactions = parsedAnnotations.map((a) => {
    let { id, ...otherData } = a;
    return db.annotations.upsert({
      where: { id },
      update: { ...otherData, pageId },
      create: { id, ...otherData, pageId }
    });
  }), deleteTransactions = existingAnnotations.filter((ea) => !parsedAnnotations.some((pa) => pa.id === ea.id)).map((a) => db.annotations.delete({ where: { id: a.id } })), transactions = [...upsertTransactions, ...deleteTransactions];
  try {
    return await db.$transaction(transactions);
  } catch (e) {
    throw new Error(`Error processing annotations: ${e.message}`);
  }
}, getAnnotations = async (pageId) => {
  try {
    return await db.annotations.findMany({
      where: {
        pageId
      }
    });
  } catch (e) {
    throw new Error(e);
  }
};

// app/component/Layout/TextHeader.tsx
var import_react20 = require("@remix-run/react"), import_ai3 = require("react-icons/ai"), import_io2 = require("react-icons/io"), import_jsx_runtime19 = require("react/jsx-runtime");
function TextHeader() {
  let { text } = (0, import_react20.useLoaderData)(), loc = (0, import_react20.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "bg-gray-50  flex justify-between items-center border-t py-3", style: { height: 60 }, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex justify-between items-center lg:px-9 md:px-3 max-w-3xl w-full mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react20.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_ai3.AiOutlineClose, { size: 30, color: "gray" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "relative -top-1 font-bold", style: { fontSize: "clamp(18px, 24px, 2.2vw)" }, children: text.name }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react20.Link, { to: loc.pathname + "?with=all", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_io2.IoIosOptions, { size: 30, color: "gray" }) })
  ] }) });
}
var TextHeader_default = TextHeader;

// app/component/menu/Menu.tsx
var import_react49 = require("@remix-run/react");

// app/component/menu/MenuHeader.tsx
var import_react21 = require("@remix-run/react"), import_ai4 = require("react-icons/ai"), import_io3 = require("react-icons/io"), import_jsx_runtime20 = require("react/jsx-runtime");
function MenuHeader() {
  let [searchParams, setSearchParams] = (0, import_react21.useSearchParams)(), header = searchParams.get("with");
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "w-full uppercase text-gray-500 h-[60px]  bg-gray-100 flex items-center justify-between px-6 py-4", children: [
    header === "all" ? "Resources" : /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { type: "button", onClick: () => setSearchParams({ with: "all" }), children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_io3.IoIosArrowRoundBack, { size: 30 }) }),
      header
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { type: "button", onClick: () => setSearchParams({}), children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_ai4.AiOutlineCloseCircle, {}) })
  ] });
}
var MenuHeader_default = MenuHeader;

// app/component/menu/MenuHome.tsx
var import_react22 = require("@remix-run/react"), import_jsx_runtime21 = require("react/jsx-runtime");
function MenuHome() {
  let li_className = "hover:text-gray-500 cursor-pointer", [searchParams, setSearchParams] = (0, import_react22.useSearchParams)();
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "border-l p-3 flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("ul", { className: "p-2 text-gray-400 capitalize text-lg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("li", { className: li_className, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { type: "button", onClick: () => setSearchParams({ with: "TableOfContent" }), children: "Table of Contents" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("li", { className: li_className, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { type: "button", onClick: () => setSearchParams({ with: "Search" }), children: "Search in Text" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("li", { className: li_className, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { type: "button", onClick: () => setSearchParams({ with: "Translations" }), children: "Translations" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("li", { className: li_className, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { type: "button", onClick: () => setSearchParams({ with: "Post" }), children: "Post" }) })
  ] }) });
}
var MenuHome_default = MenuHome;

// app/component/menu/TableOfContent.tsx
var import_react23 = require("@remix-run/react"), import_react24 = require("react");
var import_jsx_runtime22 = require("react/jsx-runtime"), TableOfContents = ({ editor }) => {
  let [isOpen, setIsOpen] = (0, import_react24.useState)(!1), [isVersionOpen, setIsVersionOpen] = (0, import_react24.useState)(!0), data2 = (0, import_react23.useLoaderData)(), translation = uselitteraTranlation(), handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  }, handleVersionToggle = () => {
    setIsVersionOpen(!isVersionOpen);
  }, handleJump = (start) => {
    editor?.chain().setTextSelection(start).focus().scrollIntoView().run();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "z-50 w-full bg-gray-100 p-4 dark:bg-gray-600 flex-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
        "button",
        {
          className: "mb-1 flex w-full items-center justify-between rounded-lg bg-gray-100 p-4 px-4 py-2 shadow dark:bg-gray-700",
          onClick: handleDropdownToggle,
          children: [
            "Chapter 1",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              "svg",
              {
                className: `ml-2 h-4 w-4 transform ${isOpen ? "rotate-0" : "rotate-90"}`,
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
              }
            )
          ]
        }
      ),
      isOpen && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("ul", { className: "ml-4 cursor-pointer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("li", { onClick: () => handleJump(45), children: "Section 1.1" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("li", { onClick: () => handleJump(1845), children: "Section 1.2" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("li", { onClick: () => handleJump(4445), children: "Section 1.3" })
      ] })
    ] }),
    data2.versions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
        "button",
        {
          className: "mb-1 flex w-full items-center justify-between rounded-lg bg-white px-4 py-2 shadow dark:bg-gray-700",
          onClick: handleVersionToggle,
          children: [
            "versions",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              "svg",
              {
                className: `ml-2 h-4 w-4 transform ${isVersionOpen ? "rotate-0" : "rotate-90"}`,
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
              }
            )
          ]
        }
      ),
      isVersionOpen && data2.versions.map(({ version, count }, index) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "mr-3", children: [
        translation[version],
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "flex gap-2", children: new Array(count).fill(0).map((_, index2) => {
          let textId = (0, import_react23.useLocation)().pathname.split("/")[2], page = index2 + 1;
          return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "rounded-sm bg-slate-100 p-1 shadow hover:bg-yellow-200", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react23.Link, { to: `/text/${textId}/page/${page}/?version=${version}`, children: page }) }, index2 + "pages");
        }) })
      ] }, version + index))
    ] })
  ] });
}, TableOfContent_default = TableOfContents;

// app/component/menu/Search.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
function Search({ editor }) {
  return editor ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_SearchString.default, { editor }) }) : null;
}
var Search_default = Search;

// app/component/menu/Translations.tsx
var import_react25 = require("@remix-run/react"), import_flowbite_react4 = require("flowbite-react"), import_react26 = require("react"), import_ai5 = require("react-icons/ai");
var import_jsx_runtime24 = require("react/jsx-runtime");
function Translations() {
  let { text, page, translations, user } = (0, import_react25.useLoaderData)(), [fileContent, setFileContent] = (0, import_react26.useState)(""), [upload, setUpload] = (0, import_react26.useState)(!1), [title, setTitle] = (0, import_react26.useState)(""), [language, setLanguage] = (0, import_react26.useState)("english"), fetcher = (0, import_react25.useFetcher)(), handleFileUpload = (e) => {
    let file = e.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = (event) => {
        let text2 = event.target.result;
        setFileContent(text2);
      }, reader.readAsText(file);
    }
  }, handleSubmit = () => {
    fetcher.submit(
      {
        content: fileContent,
        textId: text.id,
        pageId: page.order,
        name: title,
        language
      },
      {
        method: "POST",
        action: "/api/translation"
      }
    ), setFileContent(""), setTitle(""), setUpload(!1);
  };
  function handleToggleUpdate() {
    if (!user)
      return alert("please login first");
    setUpload(!upload);
  }
  let handleDelete = (id) => {
    fetcher.submit(
      { id },
      {
        method: "DELETE",
        action: "/api/translation"
      }
    );
  };
  return console.log(...oo_oo7("2253005103_61_2_61_27_4", translations)), /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fixed bottom-5 right-10", children: upload ? /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("input", { type: "file", accept: ".txt", onChange: handleFileUpload }),
      fileContent !== "" && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("input", { type: "text", placeholder: "title", value: title, onChange: (e) => setTitle(e.target.value) }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex flex-col  gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            "label",
            {
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              htmlFor: "selectionLanguage",
              children: "choose translation language"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            "select",
            {
              className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              id: "selectionLanguage",
              placeholder: "language",
              value: language,
              onChange: (e) => setLanguage(e.target.value),
              children: LANGUAGE_OPTION_TRANSLATION.map((option) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("option", { value: option, children: option }, option))
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          "button",
          {
            type: "button",
            onClick: handleSubmit,
            className: "bg-green-400 rounded shadow-sm p-2 text-white hover:bg-green-500",
            children: "upload translation"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      import_flowbite_react4.Button,
      {
        onClick: handleToggleUpdate,
        size: "sm",
        className: "bg-green-400 rounded shadow-sm text-white hover:bg-green-500",
        children: "+ upload"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "mt-3", children: [
      translations.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "text-red-500 mx-3", children: "No translation yet" }),
      translations?.map((translation, index) => {
        let url = `/text/${text.id}/page/${page.order}/translation/${translation.id}`;
        return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react25.Link, { to: url, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col w-full p-1", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "w-full flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { children: [
            translation?.language,
            " - ",
            translation.userText.name,
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "text-sm font-light ", children: translation.userText.user.username })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_flowbite_react4.Button, { onClick: () => handleDelete(translation.id), className: "bg-red-400", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_ai5.AiFillDelete, {}) })
        ] }) }) }, "translation-" + index);
      })
    ] })
  ] });
}
var Translations_default = Translations;
function oo_cm7() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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

// app/component/hooks/useFetcherPromise.tsx
var import_react27 = require("react"), import_react28 = require("@remix-run/react");
function useFetcherWithPromise() {
  let resolveRef = (0, import_react27.useRef)(), promiseRef = (0, import_react27.useRef)(), fetcher = (0, import_react28.useFetcher)();
  promiseRef.current || (promiseRef.current = new Promise((resolve) => {
    resolveRef.current = resolve;
  }));
  let resetResolver = (0, import_react27.useCallback)(() => {
    promiseRef.current = new Promise((resolve) => {
      resolveRef.current = resolve;
    });
  }, [promiseRef, resolveRef]), submit = (0, import_react27.useCallback)(
    async (...args) => (fetcher.submit(...args), promiseRef.current),
    [fetcher, promiseRef]
  );
  return (0, import_react27.useEffect)(() => {
    fetcher.data && fetcher.state === "idle" && (resolveRef.current(fetcher.data), resetResolver());
  }, [fetcher, resetResolver]), { ...fetcher, submit };
}

// app/features/Post/Post.tsx
var import_react36 = require("react"), import_react37 = require("@remix-run/react");

// app/features/Post/Replies.tsx
var import_react29 = require("@remix-run/react"), import_react30 = require("react"), import_Reply = __toESM(require_Reply()), import_jsx_runtime25 = require("react/jsx-runtime");
function Replies({ postId, topicId, isCreator, type, replyCount, setReplyCount }) {
  let [replies, setReplies] = (0, import_react30.useState)([]), postListFetcher = (0, import_react29.useFetcher)();
  (0, import_react30.useEffect)(() => {
    postListFetcher.load(`/api/reply/${topicId}`);
  }, []);
  let data2 = postListFetcher.data;
  return (0, import_react30.useEffect)(() => {
    if (data2) {
      data2.posts.shift();
      let replies2 = data2.posts;
      setReplies(replies2), setReplyCount(replies2.length);
    }
  }, [data2]), data2 ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
    replies.length < 1 && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "text-gray-500 text-sm mb-2 ", children: "no reply yet" }),
    replies.map((reply, index) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      import_Reply.default,
      {
        reply,
        isCreator,
        postId,
        type,
        showDivider: replies.length <= index + 1
      },
      reply.id
    ))
  ] }) : null;
}
var Replies_default = Replies;

// app/features/Post/ReplyForm.tsx
var import_react32 = require("@remix-run/react"), import_react33 = require("react");

// app/features/Media/index.tsx
var import_AudioPlayer = __toESM(require_AudioPlayer()), import_AudioRecorder = __toESM(require_AudioRecorder());

// app/features/Post/ReplyForm.tsx
var import_uuid = require("uuid");

// app/component/UI/TiptapInstance.tsx
var import_react31 = require("@tiptap/react");
var import_jsx_runtime26 = require("react/jsx-runtime"), ContentEditableDiv = (props) => {
  let editor;
  return typeof document < "u" && (editor = (0, import_react31.useEditor)({
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
  })), /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_jsx_runtime26.Fragment, { children: editor ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react31.EditorContent, { editor }) : null });
}, TiptapInstance_default = ContentEditableDiv;

// app/features/Post/ReplyForm.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
function ReplyForm({ closeReply, topicId, updateReplyCount }) {
  let postFetcher = (0, import_react32.useFetcher)(), textareaRef = (0, import_react33.useRef)(null), loaderData = (0, import_react32.useLoaderData)(), [audio, setAudio] = (0, import_react33.useState)({ tempUrl: "", blob: null }), [textArea, setTextArea] = (0, import_react33.useState)("");
  (0, import_react33.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "mt-1 flex justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      "div",
      {
        style: {
          borderLeft: "4px solid #e5e7eb"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
            TiptapInstance_default,
            {
              placeholder: "Write your reply here ...",
              onChange: setTextArea
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { id: "textArea", name: "postString", value: textArea, hidden: !0, required: !0 }),
          audio.tempUrl !== "" ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_jsx_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "mt-2 flex w-full items-center gap-3 ", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_AudioPlayer.default, { src: audio.tempUrl }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { onClick: () => setAudio({ tempUrl: "", blob: null }), children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z",
                className: "fill-gray-200"
              }
            ) }) })
          ] }) }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "mt-2 flex justify-between gap-2", children: [
            audio.tempUrl === "" ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_AudioRecorder.default, { setAudio }) : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", {}),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex justify-end gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Button, { onClick: closeReply, type: "reset", label: "close" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                Button,
                {
                  type: "submit",
                  onClick: handleSubmit,
                  style: {
                    opacity: emptyTextField ? 0.3 : 1
                  },
                  disabled: emptyTextField,
                  label: postFetcher.state === "submitting" ? "submiting" : postFetcher.state === "loading" ? "post created" : "respond"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}

// app/features/Editor/tiptap/markAction.ts
function removeMark(editor, id) {
  if (!editor)
    return null;
  let markID = id, { doc, selection } = editor?.state;
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
  let { doc, selection } = editor?.state;
  doc.descendants((node, pos) => {
    node.marks && node.marks.length > 0 && node.marks.forEach((mark) => {
      if (mark.attrs.id === markID) {
        let from = pos, to = pos + node.nodeSize, trx = editor.view.state.tr.setSelection(editor.view.state.selection.constructor?.near(editor.view.state.doc.resolve(from))).setSelection(editor.view.state.selection.constructor?.near(editor.view.state.doc.resolve(to))), markType = editor.view.state.schema.marks.suggestion;
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

// app/features/Post/component/FormWithAudio.tsx
var import_react34 = require("@remix-run/react"), import_react35 = require("react"), import_recoil6 = require("recoil");
var import_uuid2 = require("uuid");
var import_jsx_runtime28 = require("react/jsx-runtime");
function FormWithAudio({ fetcher, type, post, onClose = () => {
}, editor }) {
  let content = post?.content ?? "", audioUrl = post?.audioUrl ?? "", [audio, setAudio] = (0, import_react35.useState)({ tempUrl: audioUrl, blob: null }), [body, setBody] = (0, import_react35.useState)(content), [error, setError] = (0, import_react35.useState)(""), [selection, setSelection] = (0, import_recoil6.useRecoilState)(selectedTextOnEditor), data2 = (0, import_react34.useLoaderData)(), textName = data2.text.name, order = data2.order, isFormEmpty = body.length < 5 || body === "<p></p>";
  (0, import_react35.useEffect)(() => {
    setBody(content || ""), setAudio({ tempUrl: audioUrl || "", blob: null }), setError("");
  }, [selection.start]);
  function validator() {
    let lengthOfSelection = selection.end - selection?.start, errormessage = "";
    return audio.tempUrl !== "" && isFormEmpty ? errormessage = "ERROR : describe the audio" : isFormEmpty ? errormessage = "ERROR : write more than 5 character" : lengthOfSelection > 254 ? errormessage = "ERROR : selecting more than 255 letter not allowed" : body.length > 250 ? errormessage = "ERROR : content more than 255 letter not allowed" : errormessage = "", errormessage;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let errormessage = validator();
    if (errormessage && errormessage !== "")
      return setError(errormessage), null;
    let id = null;
    editor.isActive("post") ? id = editor.getAttributes("post")?.id : id = (0, import_uuid2.v4)();
    let item = {
      threadId: id,
      selectionSegment: selection.content,
      textId: data2?.text?.id,
      pageId: data2?.pageId,
      order,
      topic: textName,
      body,
      type: selection.type
    }, blob = audio?.blob;
    var form_data = new FormData();
    if (blob ? form_data.append("file", blob, `text-${data2?.text?.id}-${(0, import_uuid2.v4)()}.wav`) : form_data.append("audioUrl", audio.tempUrl), type === "update") {
      form_data.append("body", body), form_data.append("action", "update"), form_data.append("postId", post?.id);
      let responseData = await fetcher.submit(form_data, {
        method: "PATCH",
        action: "/api/post",
        encType: "multipart/form-data"
      });
      return responseData && onClose(), responseData;
    } else {
      for (var key in item)
        form_data.append(key, item[key]);
      selection && ((await fetcher.submit(form_data, {
        method: "POST",
        action: "/api/post",
        encType: "multipart/form-data"
      }))?.message || (setSelection({ ...selection, type: "" }), editor.commands.setPost({
        id
      })));
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(fetcher.Form, { className: "flex flex-col gap-3 ", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(TiptapInstance_default, { placeholder: "what are your thoughts?", value: body, onChange: (value) => setBody(value) }),
    audio.tempUrl !== "" ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex w-full items-center gap-3 ", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_AudioPlayer.default, { src: audio.tempUrl }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { onClick: () => setAudio({ tempUrl: "", blob: null }), children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z",
          className: "fill-gray-200"
        }
      ) }) })
    ] }) }) : null,
    error && error !== "" && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "font-sm text-red-500", children: error }),
    fetcher.data?.message && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "font-sm text-red-500", children: fetcher.data?.message }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex items-center justify-between", children: [
      audio.tempUrl === "" ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_AudioRecorder.default, { setAudio }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", {}),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
          Button,
          {
            type: "reset",
            onClick: () => {
              setAudio({ tempUrl: "", blob: null }), setSelection({ ...selection, type: "" }), onClose();
            },
            style: { borderRadius: 24 },
            label: "cancel"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
          Button,
          {
            style: { borderRadius: 24, opacity: isFormEmpty ? 0.3 : 1 },
            disabled: isFormEmpty,
            onClick: handleSubmit,
            type: "submit",
            label: "Respond"
          }
        )
      ] })
    ] })
  ] });
}

// app/features/Post/Post.tsx
var import_react_detect_click_outside = require("react-detect-click-outside");
var import_jsx_runtime29 = require("react/jsx-runtime");
function Post({ isOptimistic, post, showDivider, editor }) {
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
  } = post, [openReply, setOpenReply] = (0, import_react36.useState)(!1), [showReplies, setShowReplies] = (0, import_react36.useState)(!1), [effect, setEffect] = (0, import_react36.useState)(!1), [ReplyCount, setReplyCount] = (0, import_react36.useState)(replyCount), [edit, setEdit] = (0, import_react36.useState)(!1), [openEditMenu, setOpenEditMenu] = (0, import_react36.useState)(!1), { user } = (0, import_react37.useOutletContext)(), [searchParams, setSearchParams] = (0, import_react37.useSearchParams)(), fetcher = useFetcherWithPromise(), translation = uselitteraTranlation(), isSelected = threadId === searchParams.get("thread"), likedByMe = user ? likedBy.some((l) => l && l.username === user.username) : !1, handleSelectPost = (0, import_react36.useCallback)(
    (id2) => {
      setSearchParams({ with: "Post", thread: id2 });
    },
    [threadId]
  ), likeCount = fetcher.data ? fetcher.data?.length : likedBy.length, likeInFetcher = fetcher?.formData?.get("like");
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
      console.log(...oo_oo8("498577046_98_6_98_30_4", "cancelled"));
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
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
    "div",
    {
      className: `${fetcher.formMethod === "DELETE" && "hidden"}  `,
      style: { paddingInline: 24, backgroundColor: isSelected ? "#F3F4F6" : "white" },
      id: `p_${threadId}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
          "div",
          {
            className: "rounded-md font-sans",
            onClick: () => handleSelectPost(threadId),
            style: { paddingTop: 25, paddingBottom: 16 },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "inline-flex w-full items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center justify-start space-x-3", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", { className: "h-8 w-8 rounded-full", src: creatorUser?.avatarUrl, alt: "Extra small avatar" }),
                  /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex flex-col items-start", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "font-serif text-sm font-medium leading-tight text-gray-900 dark:text-gray-200", children: creatorUser?.name }),
                    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "flex-1 text-right text-sm leading-tight text-gray-500 dark:text-gray-200", children: timeAgo(created_at) })
                  ] }),
                  isSolved && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("svg", { width: "14", height: "10", viewBox: "0 0 14 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M13.707 0.293031C13.8945 0.480558 13.9998 0.734866 13.9998 1.00003C13.9998 1.26519 13.8945 1.5195 13.707 1.70703L5.70704 9.70703C5.51951 9.8945 5.26521 9.99982 5.00004 9.99982C4.73488 9.99982 4.48057 9.8945 4.29304 9.70703L0.293041 5.70703C0.110883 5.51843 0.0100885 5.26583 0.0123669 5.00363C0.0146453 4.74143 0.119814 4.49062 0.305222 4.30521C0.490631 4.1198 0.741443 4.01464 1.00364 4.01236C1.26584 4.01008 1.51844 4.11087 1.70704 4.29303L5.00004 7.58603L12.293 0.293031C12.4806 0.10556 12.7349 0.000244141 13 0.000244141C13.2652 0.000244141 13.5195 0.10556 13.707 0.293031Z",
                      fill: "#046C4E"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "relative ml-3", ref, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                    "button",
                    {
                      className: " inline-flex items-center rounded-lg text-center text-sm font-medium  text-gray-400  focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-700 dark:focus:ring-gray-600 dark:hover:bg-gray-600",
                      type: "button",
                      onClick: () => setOpenEditMenu((p) => !p),
                      children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                        "svg",
                        {
                          className: "h-5 w-5",
                          "aria-hidden": "true",
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("path", { d: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" })
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                    "div",
                    {
                      className: `${openEditMenu ? "absolute" : "hidden"} right-0 top-1.5 z-10 w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700`,
                      children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
                        "ul",
                        {
                          className: "py-1 text-sm text-gray-700 dark:text-gray-200",
                          "aria-labelledby": "dropdownMenuIconHorizontalButton",
                          children: [
                            user && user.username === creatorUser?.username && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_jsx_runtime29.Fragment, { children: [
                              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                                "div",
                                {
                                  onClick: handleEdit,
                                  className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                  children: "Edit"
                                }
                              ) }),
                              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                                "div",
                                {
                                  onClick: deletePost3,
                                  className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                  children: "Remove"
                                }
                              ) })
                            ] }),
                            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white", children: "Report" }) }),
                            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                              "a",
                              {
                                href: ForumLink + `/t/${topicId}`,
                                target: "_blank",
                                className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                children: "Forum"
                              }
                            ) })
                          ]
                        }
                      )
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex flex-col items-start justify-start", children: [
                /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: " w-full text-base leading-normal  dark:text-gray-100", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex w-full items-center justify-end text-xs font-light uppercase italic", children: type }),
                  selection && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                    "div",
                    {
                      className: `bg-white shadow ${isSelected ? "font-bold dark:bg-gray-500 " : " dark:bg-gray-700"}`,
                      style: {
                        borderRadius: "3px",
                        fontSize: 20,
                        padding: 10
                      },
                      children: selection
                    }
                  ),
                  edit ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                    FormWithAudio,
                    {
                      post,
                      type: "update",
                      fetcher,
                      onClose: () => setEdit(!1),
                      editor
                    }
                  ) : /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                    "p",
                    {
                      dangerouslySetInnerHTML: {
                        __html: content
                      },
                      className: "mt-1 "
                    }
                  )
                ] }),
                audioUrl && audioUrl?.length > 0 && !edit && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_AudioPlayer.default, { src: audioUrl }),
                isOptimistic ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "font-sans text-sm text-gray-300", children: "posting ..." }) : /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
                  "div",
                  {
                    className: "flex w-full flex-1 items-center justify-between",
                    style: {
                      marginBlock: 14
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex h-full items-center justify-start gap-4", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
                          "button",
                          {
                            type: "button",
                            disabled: !user || fetcher.formMethod === "PATCH",
                            className: `${effect && "animate-wiggle"} flex cursor-pointer items-center justify-start gap-1 `,
                            onClick: handleLikeClick,
                            onAnimationEnd: () => setEffect(!1),
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                                "path",
                                {
                                  d: "M0.800049 7.95005C0.800049 7.77276 0.834968 7.59722 0.902812 7.43343C0.970655 7.26964 1.0701 7.12081 1.19545 6.99545C1.32081 6.8701 1.46964 6.77066 1.63343 6.70281C1.79722 6.63497 1.97276 6.60005 2.15005 6.60005C2.32733 6.60005 2.50288 6.63497 2.66667 6.70281C2.83046 6.77066 2.97928 6.8701 3.10464 6.99545C3.23 7.12081 3.32944 7.26964 3.39729 7.43343C3.46513 7.59722 3.50005 7.77276 3.50005 7.95005V13.35C3.50005 13.7081 3.35782 14.0515 3.10464 14.3046C2.85147 14.5578 2.50809 14.7 2.15005 14.7C1.79201 14.7 1.44863 14.5578 1.19545 14.3046C0.942281 14.0515 0.800049 13.7081 0.800049 13.35V7.95005ZM4.40005 7.79975V12.6867C4.39989 13.0212 4.49295 13.3492 4.66877 13.6337C4.84459 13.9183 5.09623 14.1482 5.39545 14.2977L5.44045 14.3202C5.93985 14.5698 6.49045 14.6999 7.04875 14.7H11.9231C12.3394 14.7002 12.7429 14.5561 13.0648 14.2922C13.3868 14.0284 13.6074 13.6611 13.6889 13.2528L14.7689 7.85285C14.8211 7.59173 14.8147 7.32229 14.7502 7.06395C14.6857 6.8056 14.5647 6.56478 14.3959 6.35886C14.227 6.15293 14.0146 5.98703 13.774 5.87311C13.5333 5.75918 13.2703 5.70008 13.004 5.70005H9.80005V2.10005C9.80005 1.62266 9.61041 1.16482 9.27284 0.827257C8.93528 0.489691 8.47744 0.300049 8.00005 0.300049C7.76135 0.300049 7.53244 0.39487 7.36365 0.563653C7.19487 0.732435 7.10005 0.961354 7.10005 1.20005V1.80035C7.10005 2.57928 6.84741 3.3372 6.38005 3.96035L5.12005 5.63975C4.65269 6.2629 4.40005 7.02082 4.40005 7.79975V7.79975Z",
                                  style: {
                                    fill: likedByMe ? "rgb(49,196,141)" : "gray"
                                  }
                                }
                              ) }),
                              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "  text-sm font-medium leading-tight text-gray-500 dark:text-gray-100", children: likeCount > 0 && likeCount })
                            ]
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center justify-start", onClick: () => setShowReplies((prev) => !prev), children: [
                          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                            "svg",
                            {
                              width: "16",
                              height: "14",
                              viewBox: "0 0 16 14",
                              className: "fill-gray-500",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                                "path",
                                {
                                  fillRule: "evenodd",
                                  clipRule: "evenodd",
                                  d: "M15.2008 9.19995V1.99995C15.2008 1.52256 15.0111 1.06472 14.6736 0.727159C14.336 0.389593 13.8782 0.199951 13.4008 0.199951H2.60078C2.12339 0.199951 1.66555 0.389593 1.32799 0.727159C0.990424 1.06472 0.800781 1.52256 0.800781 1.99995V9.19995C0.800781 9.67734 0.990424 10.1352 1.32799 10.4727C1.66555 10.8103 2.12339 11 2.60078 11H5.30078L8.00078 13.7L10.7008 11H13.4008C13.8782 11 14.336 10.8103 14.6736 10.4727C15.0111 10.1352 15.2008 9.67734 15.2008 9.19995ZM3.50078 3.79995C3.50078 3.56126 3.5956 3.33234 3.76439 3.16356C3.93317 2.99477 4.16209 2.89995 4.40078 2.89995H11.6008C11.8395 2.89995 12.0684 2.99477 12.2372 3.16356C12.406 3.33234 12.5008 3.56126 12.5008 3.79995C12.5008 4.03865 12.406 4.26756 12.2372 4.43635C12.0684 4.60513 11.8395 4.69995 11.6008 4.69995H4.40078C4.16209 4.69995 3.93317 4.60513 3.76439 4.43635C3.5956 4.26756 3.50078 4.03865 3.50078 3.79995ZM4.40078 6.49995C4.16209 6.49995 3.93317 6.59477 3.76439 6.76356C3.5956 6.93234 3.50078 7.16126 3.50078 7.39995C3.50078 7.63865 3.5956 7.86756 3.76439 8.03635C3.93317 8.20513 4.16209 8.29995 4.40078 8.29995H7.10078C7.33948 8.29995 7.56839 8.20513 7.73718 8.03635C7.90596 7.86756 8.00078 7.63865 8.00078 7.39995C8.00078 7.16126 7.90596 6.93234 7.73718 6.76356C7.56839 6.59477 7.33948 6.49995 7.10078 6.49995H4.40078Z"
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                            "button",
                            {
                              type: "button",
                              className: "text-sm font-medium lowercase leading-tight text-gray-500 dark:text-gray-100",
                              children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "ml-2", children: showReplies ? "hide" : "show" })
                            }
                          )
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                          "div",
                          {
                            onClick: handleShare,
                            title: "share",
                            className: "flex items-center justify-start gap-2 fill-gray-400 text-gray-400 transition-all hover:fill-blue-400 hover:text-blue-400 dark:text-gray-200 hover:dark:text-blue-400",
                            children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                              "path",
                              {
                                d: "M13.0001 6C13.6092 6.00002 14.2039 5.8146 14.7051 5.4684C15.2064 5.1222 15.5903 4.63162 15.8059 4.06191C16.0215 3.49219 16.0586 2.87034 15.9122 2.27903C15.7658 1.68773 15.4429 1.15501 14.9864 0.7517C14.5299 0.348392 13.9614 0.0936137 13.3565 0.0212462C12.7517 -0.0511213 12.1392 0.062351 11.6004 0.346574C11.0616 0.630796 10.6221 1.0723 10.3404 1.61237C10.0586 2.15245 9.94792 2.7655 10.0231 3.37L5.08305 5.84C4.65928 5.43135 4.12465 5.15642 3.54574 5.04944C2.96684 4.94247 2.36926 5.00819 1.82744 5.2384C1.28561 5.46862 0.823499 5.85316 0.498659 6.34413C0.173819 6.8351 0.000610352 7.4108 0.000610352 7.9995C0.000610352 8.5882 0.173819 9.1639 0.498659 9.65487C0.823499 10.1458 1.28561 10.5304 1.82744 10.7606C2.36926 10.9908 2.96684 11.0565 3.54574 10.9496C4.12465 10.8426 4.65928 10.5676 5.08305 10.159L10.0231 12.629C9.93555 13.3312 10.0991 14.0418 10.4848 14.6351C10.8706 15.2284 11.4536 15.6663 12.1309 15.8713C12.8082 16.0763 13.5362 16.0353 14.1862 15.7555C14.8362 15.4757 15.3664 14.9751 15.683 14.3422C15.9996 13.7093 16.0823 12.9849 15.9165 12.2969C15.7506 11.6089 15.3469 11.0017 14.7767 10.5826C14.2065 10.1635 13.5065 9.9595 12.8004 10.0066C12.0943 10.0537 11.4276 10.3489 10.9181 10.84L5.97805 8.37C6.00832 8.12426 6.00832 7.87574 5.97805 7.63L10.9181 5.16C11.4561 5.68 12.1901 6 13.0001 6Z",
                                className: "fill-inherit"
                              }
                            ) })
                          }
                        )
                      ] }),
                      user && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
                        "div",
                        {
                          onClick: () => setOpenReply((prev) => !prev),
                          className: "flex items-start justify-start space-x-1.5",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                              "svg",
                              {
                                width: "16",
                                height: "13",
                                viewBox: "0 0 16 13",
                                className: "fill-gray-500 dark:fill-gray-100",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("path", { d: "M6.13858 7.95584L5.67917 8.15319C5.65821 8.10438 5.62774 8.06025 5.58953 8.02335L5.58328 8.01731L5.58334 8.01726L3.51964 5.95356L2.66608 5.1H3.87319H8.90059C10.2267 5.1 11.4984 5.62679 12.4361 6.56447C13.3738 7.50215 13.9006 8.77392 13.9006 10.1V11.9C13.9006 12.0061 13.9427 12.1078 14.0177 12.1828C14.0928 12.2579 14.1945 12.3 14.3006 12.3C14.4067 12.3 14.5084 12.2579 14.5834 12.1828C14.6584 12.1078 14.7006 12.0061 14.7006 11.9V10.1C14.7006 8.56175 14.0895 7.08649 13.0018 5.99878C11.9141 4.91107 10.4388 4.3 8.90059 4.3H3.87319H2.66608L3.51964 3.44645L5.58328 1.3828C5.5833 1.38279 5.58332 1.38277 5.58334 1.38275C5.65829 1.30774 5.7004 1.20604 5.7004 1.1C5.7004 0.993988 5.65831 0.892311 5.58339 0.817309C5.58335 0.817274 5.58332 0.817239 5.58328 0.817203M6.13858 7.95584L4.66429 0.463703C4.83306 0.294979 5.06194 0.200195 5.30059 0.200195C5.53924 0.200195 5.76811 0.294979 5.93689 0.463703L5.58328 0.817203M6.13858 7.95584L5.67917 8.15319C5.70014 8.20199 5.71117 8.25448 5.71163 8.30759C5.7121 8.3607 5.70197 8.41337 5.68186 8.46253C5.66175 8.51169 5.63205 8.55635 5.59449 8.59391C5.55693 8.63146 5.51227 8.66116 5.46312 8.68128C5.41396 8.70139 5.36128 8.71151 5.30817 8.71105C5.25506 8.71059 5.20257 8.69955 5.15377 8.67859C5.10497 8.65763 5.06083 8.62715 5.02393 8.58895L5.02399 8.58889L5.01784 8.58275L1.4179 4.9828C1.34291 4.90779 1.30078 4.80607 1.30078 4.7C1.30078 4.59396 1.34289 4.49226 1.41784 4.41726C1.41786 4.41724 1.41788 4.41722 1.4179 4.4172L5.01779 0.81731L6.13858 7.95584ZM5.58328 0.817203C5.50828 0.742282 5.40661 0.700195 5.30059 0.700195C5.19455 0.700195 5.09285 0.742302 5.01784 0.817256L5.58328 0.817203Z" })
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("button", { type: "button", className: "text-sm font-medium leading-tight text-gray-500 dark:text-gray-100", children: openReply ? "Close" : translation?.reply })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        openReply && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          ReplyForm,
          {
            topicId,
            closeReply: () => {
              setOpenReply(!1);
            },
            updateReplyCount: () => setReplyCount((p) => p + 1)
          }
        ),
        showReplies && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          Replies_default,
          {
            postId: id,
            topicId,
            isCreator: user?.username === creatorUser?.username,
            type,
            setReplyCount,
            replyCount: ReplyCount
          }
        ),
        !showDivider && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("hr", {})
      ]
    }
  );
}
var Post_default = Post;
function oo_cm8() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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

// app/features/Post/Posts.tsx
var import_recoil8 = require("recoil");

// app/features/Post/Filter.tsx
var import_react38 = require("react"), import_react_router_dom = require("react-router-dom"), import_recoil7 = require("recoil");
var import_react_tailwindcss_datepicker = __toESM(require("react-tailwindcss-datepicker")), import_flowbite_react5 = require("flowbite-react");
var import_jsx_runtime30 = require("react/jsx-runtime");
function Filter({}) {
  let [filterData, setFilterData] = (0, import_recoil7.useRecoilState)(filterDataState), [openFilter, setOpenFilter] = (0, import_recoil7.useRecoilState)(openFilterState), [userInput, setUserInput] = (0, import_react38.useState)(""), searchUser = (0, import_react_router_dom.useFetcher)(), typeId = (0, import_react38.useId)(), solvedId = (0, import_react38.useId)();
  (0, import_react38.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
    import_flowbite_react5.Modal,
    {
      show: openFilter,
      onClose: () => setOpenFilter(!1),
      dismissible: !0,
      size: "md",
      style: { height: "100dvh" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_flowbite_react5.Modal.Header, { children: translation.filter }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "p-5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex flex-col items-start justify-start space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex flex-col items-start justify-start space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-sm font-semibold leading-tight", children: "Type" }),
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "flex flex-col items-start justify-start space-y-0.5", children: [
                { value: "all", label: "All" },
                { value: "comment", label: "Comments only" },
                { value: "question", label: "Questions only" }
              ].map(({ value, label }) => {
                let isChecked = filterData.type == value;
                return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex py-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                    "input",
                    {
                      id: `${typeId}-${value}`,
                      type: "radio",
                      onChange: handleTypeCheck,
                      defaultChecked: isChecked,
                      value,
                      name: "filter-type",
                      className: "h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                    "label",
                    {
                      htmlFor: `${typeId}-${value}`,
                      className: "ml-2 text-sm font-medium text-gray-500 dark:text-gray-300",
                      children: label
                    }
                  )
                ] }, value);
              }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex w-full flex-col items-start justify-start space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-sm font-semibold leading-tight ", children: "Date" }),
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react_tailwindcss_datepicker.default, { value: filterData.date, inputName: "date", onChange: handleDateChange })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex w-full flex-col items-start justify-start space-y-2.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-sm font-semibold leading-tight ", children: "Users" }),
              filterData.user?.map((user) => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
                "div",
                {
                  className: "flex items-center justify-center space-x-1 rounded bg-gray-100 px-1.5 py-0.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-center text-xs font-medium leading-none text-gray-600", children: user }),
                    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                      "svg",
                      {
                        onClick: () => handleRemoveUser(user),
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                          "path",
                          {
                            d: "M8.18966 6.2102L8.18971 6.21014L8.18346 6.2041C7.91942 5.94908 7.56578 5.80797 7.1987 5.81116C6.83162 5.81435 6.48049 5.96159 6.22091 6.22116C5.96134 6.48073 5.81411 6.83187 5.81092 7.19894C5.80773 7.56602 5.94884 7.91966 6.20386 8.1837L6.20381 8.18376L6.20995 8.1899L7.0201 9.00005L6.2127 9.80745C6.0806 9.93591 5.97515 10.0892 5.90241 10.2585C5.82903 10.4293 5.79041 10.6131 5.7888 10.7989C5.78718 10.9848 5.82261 11.1692 5.893 11.3412C5.96339 11.5133 6.06735 11.6696 6.1988 11.8011C6.33025 11.9325 6.48656 12.0365 6.65861 12.1069C6.83067 12.1772 7.01502 12.2127 7.20091 12.2111C7.3868 12.2094 7.57051 12.1708 7.74132 12.0974C7.91064 12.0247 8.06392 11.9193 8.19237 11.7872L8.9998 10.9798L9.80995 11.7899L9.8099 11.79L9.81615 11.796C10.0802 12.051 10.4338 12.1921 10.8009 12.1889C11.168 12.1857 11.5191 12.0385 11.7787 11.7789C12.0383 11.5194 12.1855 11.1682 12.1887 10.8012C12.1919 10.4341 12.0508 10.0804 11.7957 9.81639L11.7958 9.81634L11.7897 9.8102L10.9795 9.00005L11.7897 8.1899L11.7897 8.18996L11.7957 8.1837C12.0508 7.91966 12.1919 7.56602 12.1887 7.19894C12.1855 6.83187 12.0383 6.48073 11.7787 6.22116C11.5191 5.96159 11.168 5.81435 10.8009 5.81116C10.4338 5.80797 10.0802 5.94908 9.81615 6.2041L9.8161 6.20405L9.80995 6.2102L8.9998 7.02034L8.18966 6.2102ZM13.7374 13.7377C12.4809 14.9942 10.7768 15.7 8.9998 15.7C7.22285 15.7 5.51868 14.9942 4.26219 13.7377C3.0057 12.4812 2.2998 10.777 2.2998 9.00005C2.2998 7.2231 3.0057 5.51893 4.26219 4.26243C5.51868 3.00594 7.22285 2.30005 8.9998 2.30005C10.7768 2.30005 12.4809 3.00594 13.7374 4.26243C14.9939 5.51893 15.6998 7.2231 15.6998 9.00005C15.6998 10.777 14.9939 12.4812 13.7374 13.7377Z",
                            fill: "#9CA3AF",
                            stroke: "#9CA3AF"
                          }
                        )
                      }
                    )
                  ]
                },
                user
              )),
              /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex w-full flex-col items-start justify-start space-y-2 rounded-lg px-0.5 pb-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "inline-flex w-full items-center justify-start rounded-lg border border-blue-600 bg-gray-50 px-4 py-1", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex h-full flex-1 items-center justify-start space-x-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                    "path",
                    {
                      d: "M15.75 15.75L11.25 11.25M12.75 7.5C12.75 8.18944 12.6142 8.87213 12.3504 9.50909C12.0865 10.146 11.6998 10.7248 11.2123 11.2123C10.7248 11.6998 10.146 12.0865 9.50909 12.3504C8.87213 12.6142 8.18944 12.75 7.5 12.75C6.81056 12.75 6.12787 12.6142 5.49091 12.3504C4.85395 12.0865 4.2752 11.6998 3.78769 11.2123C3.30018 10.7248 2.91347 10.146 2.64963 9.50909C2.3858 8.87213 2.25 8.18944 2.25 7.5C2.25 6.10761 2.80312 4.77226 3.78769 3.78769C4.77226 2.80312 6.10761 2.25 7.5 2.25C8.89239 2.25 10.2277 2.80312 11.2123 3.78769C12.1969 4.77226 12.75 6.10761 12.75 7.5Z",
                      stroke: "#1C64F2",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(searchUser.Form, { method: "GET", action: "/api/user/search", className: "flex w-full", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
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
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("button", { type: "button", onClick: () => setUserInput(""), children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                      "path",
                      {
                        d: "M8.18966 6.2102L8.18971 6.21014L8.18346 6.2041C7.91942 5.94908 7.56578 5.80797 7.1987 5.81116C6.83162 5.81435 6.48049 5.96159 6.22091 6.22116C5.96134 6.48073 5.81411 6.83187 5.81092 7.19894C5.80773 7.56602 5.94884 7.91966 6.20386 8.1837L6.20381 8.18376L6.20995 8.1899L7.0201 9.00005L6.2127 9.80745C6.0806 9.93591 5.97515 10.0892 5.90241 10.2585C5.82903 10.4293 5.79041 10.6131 5.7888 10.7989C5.78718 10.9848 5.82261 11.1692 5.893 11.3412C5.96339 11.5133 6.06735 11.6696 6.1988 11.8011C6.33025 11.9325 6.48656 12.0365 6.65861 12.1069C6.83067 12.1772 7.01502 12.2127 7.20091 12.2111C7.3868 12.2094 7.57051 12.1708 7.74132 12.0974C7.91064 12.0247 8.06392 11.9193 8.19237 11.7872L8.9998 10.9798L9.80995 11.7899L9.8099 11.79L9.81615 11.796C10.0802 12.051 10.4338 12.1921 10.8009 12.1889C11.168 12.1857 11.5191 12.0385 11.7787 11.7789C12.0383 11.5194 12.1855 11.1682 12.1887 10.8012C12.1919 10.4341 12.0508 10.0804 11.7957 9.81639L11.7958 9.81634L11.7897 9.8102L10.9795 9.00005L11.7897 8.1899L11.7897 8.18996L11.7957 8.1837C12.0508 7.91966 12.1919 7.56602 12.1887 7.19894C12.1855 6.83187 12.0383 6.48073 11.7787 6.22116C11.5191 5.96159 11.168 5.81435 10.8009 5.81116C10.4338 5.80797 10.0802 5.94908 9.81615 6.2041L9.8161 6.20405L9.80995 6.2102L8.9998 7.02034L8.18966 6.2102ZM13.7374 13.7377C12.4809 14.9942 10.7768 15.7 8.9998 15.7C7.22285 15.7 5.51868 14.9942 4.26219 13.7377C3.0057 12.4812 2.2998 10.777 2.2998 9.00005C2.2998 7.2231 3.0057 5.51893 4.26219 4.26243C5.51868 3.00594 7.22285 2.30005 8.9998 2.30005C10.7768 2.30005 12.4809 3.00594 13.7374 4.26243C14.9939 5.51893 15.6998 7.2231 15.6998 9.00005C15.6998 10.777 14.9939 12.4812 13.7374 13.7377Z",
                        fill: "#9CA3AF",
                        stroke: "#9CA3AF"
                      }
                    ) }) })
                  ] })
                ] }) }),
                isFetchingUser && "loading",
                searchUser.data?.length > 0 && userInput !== "" && !isFetchingUser && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "flex w-full flex-col items-center justify-start space-y-3 rounded-lg border border-gray-200  p-4 shadow", children: searchUser.data?.map((user) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "w-full cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "inline-flex w-full items-center justify-start space-x-2 rounded-lg", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("img", { className: "h-6 w-6 rounded-full", src: user?.avatarUrl, alt: "Extra small avatar" }),
                  /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "flex-1 text-sm leading-tight", onClick: () => handleNameClick(user?.username), children: user?.username })
                ] }) }, user?.username)) }),
                searchUser.data?.length === 0 && userInput !== "" && !isFetchingUser && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "text-red-400", children: "User not Found" })
              ] })
            ] }),
            filterData.type !== "comment" && /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex flex-col items-start justify-start space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-sm font-semibold leading-tight", children: "Solved" }),
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "flex flex-col items-start justify-start space-y-0.5", children: [
                { value: "both", label: "both" },
                { value: "solved", label: "solved only" },
                { value: "unsolved", label: "unsolved only" }
              ].map(({ value, label }) => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex py-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                  "input",
                  {
                    id: `${solvedId}-${value}`,
                    type: "radio",
                    value,
                    onChange: handleSolvedChange,
                    defaultChecked: filterData.solved === value,
                    name: "filter-solved",
                    className: "h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                  "label",
                  {
                    htmlFor: `${solvedId}-${value}`,
                    className: "ml-2 text-sm font-medium text-gray-500 dark:text-gray-300",
                    children: label
                  }
                )
              ] }, value)) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "mt-2 flex w-full items-start justify-end gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Button, { onClick: apply, label: "Apply filters", type: "submit" }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Button, { onClick: reset, color: "light", type: "reset", label: "reset" })
          ] })
        ] })
      ]
    }
  );
}
var Filter_default = (0, import_react38.memo)(Filter);

// app/features/Post/Posts.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
function Posts({ posts }) {
  let filters = (0, import_recoil8.useRecoilValue)(filterDataState), isLatest = (0, import_recoil8.useRecoilValue)(showLatest);
  if (!posts)
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Skeleton, { number: 4, height: 80 });
  let lists = applyFilter(posts, filters, isLatest);
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_jsx_runtime31.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Filter_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      "div",
      {
        style: {
          fontFamily: "sans-serif"
        },
        className: " relative flex flex-col h-full overflow-y-scroll flex-1 ",
        children: lists?.length > 0 ? lists?.map((post, index) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Post_default, { post, isOptimistic: !1, showDivider: lists.length <= index + 1 }, post.id) }, post.id)) : /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { children: "No post available" }),
          "Feel free to be the first one to ask Question !"
        ] })
      }
    )
  ] });
}
var applyFilter = (list, filter, isLatest) => (filter.type && filter.type !== "all" && (list = list.filter((l) => l.type === filter.type)), filter.user?.length && (list = list.filter((l) => filter.user?.includes(l?.creatorUser?.username))), filter.date.startDate && (list = list.filter((l) => {
  let startDate = filter.date.startDate ? new Date(filter.date.startDate) : null, endDate = filter.date.endDate ? new Date(filter.date.endDate) : null;
  if (startDate && endDate) {
    let createdAt = new Date(l.created_at);
    return createdAt > startDate && createdAt < endDate;
  }
  return !1;
})), filter.solved && filter.solved !== "both" && (list = list.filter((l) => l.isSolved === (filter.solved === "solved"))), list.length > 0 && list.sort(function(a, b) {
  let c = new Date(a.created_at), d = new Date(b.created_at);
  return isLatest ? d.getTime() - c.getTime() : c.getTime() - d.getTime();
}), list), Posts_default = Posts;

// app/features/Post/PostForm.tsx
var import_react39 = require("@remix-run/react");
var import_recoil9 = require("recoil");
var import_jsx_runtime32 = require("react/jsx-runtime"), PostForm = ({ createPost: createPost3, editor }) => {
  let { user } = (0, import_react39.useLoaderData)(), selection = (0, import_recoil9.useRecoilValue)(selectedTextOnEditor), isPosting = createPost3.formData && createPost3.formData.get("body") !== "";
  return selection.type === "" ? null : isPosting ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
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
        content: createPost3?.formData?.get("body"),
        topic_id: 0,
        type: createPost3?.formData?.get("type"),
        threadId: ""
      },
      isOptimistic: !0
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(import_jsx_runtime32.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "flex justify-between p-6", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      "div",
      {
        style: { lineHeight: "24px", color: "rbg(41,41,41)", fontSize: 20, fontWeight: "500" },
        className: "mb-3 font-serif capitalize leading-tight text-gray-900 dark:text-gray-300",
        children: selection.type === "question" ? "ask question" : "new comment"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("section", { className: " m-3 rounded py-3", style: { boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 8px 0px" }, children: user ? /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(import_jsx_runtime32.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "mb-1 flex items-center gap-2 px-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("img", { className: "h-8 w-8 rounded-full", src: user?.avatarUrl, alt: "avatar" }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "font-serif text-sm font-medium leading-tight text-gray-900 dark:text-gray-200", children: user?.name })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { "aria-label": "Default tabs", className: "px-4 pt-4", style: { lineHeight: "14px" }, children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(FormWithAudio, { fetcher: createPost3, type: "post", post: null, editor }) })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(LogInMessage, {}) })
  ] });
}, PostForm_default = PostForm;

// app/features/Post/PostSidebar.tsx
var import_react40 = require("react");
var import_react41 = require("@remix-run/react");
var import_recoil10 = require("recoil");
var import_fa5 = require("react-icons/fa"), import_jsx_runtime33 = require("react/jsx-runtime");
function PostSidebar({ createPost: createPost3, editor }) {
  let data2 = (0, import_react41.useLoaderData)(), [params, setParams] = (0, import_react41.useSearchParams)(), selectedId = params.get("thread");
  (0, import_react40.useEffect)(() => {
    selectedId && selectedId !== "" && setTimeout(() => {
      document.getElementById("p_" + selectedId)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      }), document.getElementById(selectedId)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
    }, 2e3);
  }, []);
  let setOpenFilter = (0, import_recoil10.useSetRecoilState)(openFilterState), translation = uselitteraTranlation();
  return data2.posts?.error ? /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "mt-2 p-3 text-red-700", children: [
    "Error:",
    data2.posts.error
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex flex-col w-full flex-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(PostForm_default, { createPost: createPost3, editor }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "sticky top-0 z-50  flex  w-full items-center justify-between gap-2 bg-white dark:bg-gray-700 ", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "z-30 flex flex-1 items-center  justify-between  py-2", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(LatestFilter, {}),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
        "button",
        {
          id: "filterButton",
          onClick: () => setOpenFilter((prev) => !prev),
          className: "flex items-center justify-center space-x-2 rounded-lg border border-gray-200 px-3 py-2 filter",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_fa5.FaFilter, { className: "text-gray-500" }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-sm font-medium leading-tight text-gray-500 dark:text-gray-50", children: translation.filter })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("hr", {}),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Posts_default, { posts: data2.posts })
  ] });
}
var LatestFilter = () => {
  let [isLatest, setIsLatestPost] = (0, import_recoil10.useRecoilState)(showLatest), options = ["Latest", "Earliest"];
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    "div",
    {
      className: "cursor-pointer p-3 text-sm font-medium leading-tight text-gray-500 dark:text-gray-50",
      onClick: () => {
        setIsLatestPost((prev) => !prev);
      },
      children: isLatest ? options[0] : options[1]
    }
  );
};

// app/component/menu/Post.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
function Post2({ editor }) {
  let createPost3 = useFetcherWithPromise();
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
    "div",
    {
      className: " hidden w-full md:flex transition-all duration-75 z-[1] ",
      style: { maxHeight: "calc(100% - 60px)" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(PostSidebar, { createPost: createPost3, editor }),
        ";"
      ]
    }
  );
}
var Post_default2 = Post2;

// app/features/Suggestion/Suggestion.tsx
var import_react44 = require("@remix-run/react"), import_react45 = require("react");
var import_react_detect_click_outside3 = require("react-detect-click-outside");
var import_uuid3 = require("uuid");

// app/features/Suggestion/Comment.tsx
var import_react42 = require("react"), import_react_detect_click_outside2 = require("react-detect-click-outside"), import_react43 = require("@remix-run/react");
var import_jsx_runtime35 = require("react/jsx-runtime");
function Comments({ comments }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_jsx_runtime35.Fragment, { children: comments.length > 0 && comments.map((comment, index) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Comment, { comment }, comment.id)) });
}
var Comment = ({ comment }) => {
  let [openEditMenu, setOpenEditMenu] = (0, import_react42.useState)(!1), [edit, setEdit] = (0, import_react42.useState)(!1), [newContent, setNewContent] = (0, import_react42.useState)(comment.text), [checked, setChecked] = (0, import_react42.useState)(comment.type === "support"), { user } = (0, import_react43.useOutletContext)(), ref = (0, import_react_detect_click_outside2.useDetectClickOutside)({
    onTriggered: () => setOpenEditMenu(!1)
  }), color = comment.type === "support" ? "bg-green-100" : comment.type === "reject" ? "bg-red-100" : null, time = timeAgo(comment.createdAt), fetcher = (0, import_react43.useFetcher)(), handleEdit = () => {
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
    ) : console.log(...oo_oo9("2772616482_53_6_53_30_4", "cancelled"));
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: `rounded-lg p-2  text-base dark:bg-gray-700 ${color}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "mb-2 flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("p", { className: "mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("img", { className: "mr-2 h-6 w-6 rounded-full", src: comment.author?.avatarUrl, alt: "author image" }),
          comment.author?.name
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: time })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "relative ml-3", ref, children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          "button",
          {
            className: " inline-flex items-center rounded-lg text-center text-sm font-medium  text-gray-400    dark:bg-gray-700 dark:focus:ring-gray-600 dark:hover:bg-gray-600",
            type: "button",
            onClick: () => setOpenEditMenu((p) => !p),
            children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
              "svg",
              {
                className: "h-5 w-5",
                "aria-hidden": "true",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", { d: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" })
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          "div",
          {
            className: `${openEditMenu ? "absolute" : "hidden"} right-0 top-1.5 z-10 w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700`,
            children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
              "ul",
              {
                className: "py-1 text-sm text-gray-700 dark:text-gray-200",
                "aria-labelledby": "dropdownMenuIconHorizontalButton",
                children: [
                  user && user.username === comment?.author.username && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_jsx_runtime35.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
                      "div",
                      {
                        onClick: handleEdit,
                        className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                        children: "Edit"
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
                      "div",
                      {
                        onClick: handleDelete,
                        className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                        children: "Remove"
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white", children: "Report" }) })
                ]
              }
            )
          }
        )
      ] })
    ] }),
    edit ? /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(TextArea_default, { value: newContent, onChange: (e) => setNewContent(e.target.value) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "mt-2 flex justify-between gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex-1 ", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("label", { htmlFor: "checkbox" + comment.id, className: "mr-2", children: "support" }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
            "input",
            {
              type: "checkbox",
              id: "checkbox" + comment.id,
              className: "h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600",
              defaultChecked: checked,
              onChange: (e) => setChecked(e.target.checked)
            }
          ),
          audioPresent && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_AudioPlayer.default, { src: comment.audioUrl })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Button, { onClick: handleSubmit, label: "submit", type: "submit" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Button, { onClick: () => setEdit(!1), label: "cancel", type: "reset" })
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_jsx_runtime35.Fragment, { children: [
      audioPresent && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_AudioPlayer.default, { src: comment.audioUrl }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "text-gray-500 dark:text-gray-400", children: comment.text })
    ] })
  ] });
};
function oo_cm9() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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

// app/features/Suggestion/Suggestion.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
function Suggestion2({ editor, suggest, optimistic = !1, count }) {
  let likeFetcher = useFetcherWithPromise(), deleteFetcher = (0, import_react44.useFetcher)(), editFetcher = (0, import_react44.useFetcher)(), [effect, setEffect] = (0, import_react45.useState)(!1), [openEdit, setOpenEdit] = (0, import_react45.useState)(!1), [openComment, setOpenComment] = (0, import_react45.useState)(!1), [openEditMenu, setOpenEditMenu] = (0, import_react45.useState)(!1), { text, user } = (0, import_react44.useLoaderData)(), ref = (0, import_react_detect_click_outside3.useDetectClickOutside)({
    onTriggered: () => setOpenEditMenu(!1)
  }), likedByMe = user ? suggest.likedBy.some((l) => l?.username === user.username) : !1, likeInFetcher = likeFetcher?.formData?.get("like"), likeCount = likeFetcher.data ? likeFetcher.data?.likedBy.likedBy.length : suggest.likedBy.length;
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
    replaceMarkContent(editor, suggest.threadId, res?.highestLiked);
  }, time = timeAgo(suggest.created_at);
  function deleteSuggestion2(id) {
    confirm("do you want to delete the post") ? (count === 1 && editor?.commands.unsetSuggestion(), deleteFetcher.submit(
      {
        id
      },
      {
        action: "api/suggestion",
        method: "DELETE"
      }
    )) : console.log(...oo_oo10("4167762222_77_6_77_30_4", "cancelled"));
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
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: `${deleteFetcher.formData && "hidden"} p-3 `, children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "relative mb-2 flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "  flex items-center gap-3", children: [
        suggest.user.length && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "flex -space-x-4", children: suggest.user?.map((item) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            "img",
            {
              title: item.username,
              className: "h-6 w-6 rounded-full border-2 border-white dark:border-gray-800",
              src: item.avatarUrl,
              alt: "a"
            },
            item.id
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "flex gap-1 text-base font-medium leading-tight text-gray-900 dark:text-gray-200 ", children: suggest.user?.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "text-md capitalize", children: [
            checkPendetaName(item.username),
            index !== suggest.user.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { children: " | " })
          ] }, item.id + index)) })
        ] }),
        suggest.oldValue && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: time })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        "button",
        {
          className: "inline-flex items-center rounded-lg text-center text-sm font-medium  text-gray-400 dark:bg-gray-700 dark:focus:ring-gray-600 dark:hover:bg-gray-600",
          type: "button",
          onClick: () => setOpenEditMenu((p) => !p),
          children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            "svg",
            {
              className: "h-5 w-5",
              "aria-hidden": "true",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("path", { d: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" })
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        "div",
        {
          ref,
          className: `${openEditMenu ? "absolute" : "hidden"} right-0 top-1.5 z-10 w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700`,
          children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
            "ul",
            {
              className: "py-1 text-sm text-gray-700 dark:text-gray-200",
              "aria-labelledby": "dropdownMenuIconHorizontalButton",
              children: [
                user && suggest.user.length && suggest.user?.some((e) => e.username === user.username) && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                    "div",
                    {
                      onClick: () => setOpenEdit(!0),
                      className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                      children: "Edit"
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                    "div",
                    {
                      onClick: () => deleteSuggestion2(suggest.id),
                      className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                      children: "Remove"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white", children: "Report" }) })
              ]
            }
          )
        }
      )
    ] }),
    suggest.oldValue ? /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: " mb-3 w-full text-base leading-normal text-black", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "text-sm font-bold", children: "Replace :" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
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
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "text-sm font-bold", children: " with :" }),
      openEdit ? /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
        editFetcher.Form,
        {
          className: "flex gap-2",
          action: "/api/suggestion",
          method: "PATCH",
          onSubmit: () => setOpenEdit(!1),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
              "input",
              {
                name: "newValue",
                type: "text",
                className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-xs",
                defaultValue: suggest.newValue
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { name: "id", type: "text", value: suggest.id, hidden: !0 }),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Button, { label: editFetcher.state === "submitting" ? "saving" : "confirm", type: "submit" }),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Button, { label: "cancel", type: "reset", onClick: () => setOpenEdit(!1) })
          ]
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
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
        }
      )
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
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
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "mb-2", children: suggest?.audioUrl && suggest.audioUrl !== "" && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_AudioPlayer.default, { src: suggest?.audioUrl }) }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "flex justify-between", children: optimistic ? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "text-light text-sm ", children: "saving" }) : /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
        "button",
        {
          disabled: likeFetcher.state === "submitting",
          onClick: () => handleLike(suggest.id),
          className: `${effect && "animate-wiggle"} flex cursor-pointer items-center justify-start space-x-1.5`,
          onAnimationEnd: () => setEffect(!1),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
              "path",
              {
                style: likedByMe ? { fill: "lightgreen" } : { fill: "gray" },
                d: "M0.800049 7.95005C0.800049 7.77276 0.834968 7.59722 0.902812 7.43343C0.970655 7.26964 1.0701 7.12081 1.19545 6.99545C1.32081 6.8701 1.46964 6.77066 1.63343 6.70281C1.79722 6.63497 1.97276 6.60005 2.15005 6.60005C2.32733 6.60005 2.50288 6.63497 2.66667 6.70281C2.83046 6.77066 2.97928 6.8701 3.10464 6.99545C3.23 7.12081 3.32944 7.26964 3.39729 7.43343C3.46513 7.59722 3.50005 7.77276 3.50005 7.95005V13.35C3.50005 13.7081 3.35782 14.0515 3.10464 14.3046C2.85147 14.5578 2.50809 14.7 2.15005 14.7C1.79201 14.7 1.44863 14.5578 1.19545 14.3046C0.942281 14.0515 0.800049 13.7081 0.800049 13.35V7.95005ZM4.40005 7.79975V12.6867C4.39989 13.0212 4.49295 13.3492 4.66877 13.6337C4.84459 13.9183 5.09623 14.1482 5.39545 14.2977L5.44045 14.3202C5.93985 14.5698 6.49045 14.6999 7.04875 14.7H11.9231C12.3394 14.7002 12.7429 14.5561 13.0648 14.2922C13.3868 14.0284 13.6074 13.6611 13.6889 13.2528L14.7689 7.85285C14.8211 7.59173 14.8147 7.32229 14.7502 7.06395C14.6857 6.8056 14.5647 6.56478 14.3959 6.35886C14.227 6.15293 14.0146 5.98703 13.774 5.87311C13.5333 5.75918 13.2703 5.70008 13.004 5.70005H9.80005V2.10005C9.80005 1.62266 9.61041 1.16482 9.27284 0.827257C8.93528 0.489691 8.47744 0.300049 8.00005 0.300049C7.76135 0.300049 7.53244 0.39487 7.36365 0.563653C7.19487 0.732435 7.10005 0.961354 7.10005 1.20005V1.80035C7.10005 2.57928 6.84741 3.3372 6.38005 3.96035L5.12005 5.63975C4.65269 6.2629 4.40005 7.02082 4.40005 7.79975V7.79975Z"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "  text-sm font-medium leading-tight text-gray-500 dark:text-gray-100", children: likeCount > 0 && likeCount })
          ]
        }
      ) }),
      user && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
        "div",
        {
          onClick: () => setOpenComment((prev) => !prev),
          className: "flex items-start justify-start space-x-1.5  rounded-t-lg ",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
              "svg",
              {
                width: "16",
                height: "13",
                viewBox: "0 0 16 13",
                className: "fill-gray-500 dark:fill-gray-100",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("path", { d: "M6.13858 7.95584L5.67917 8.15319C5.65821 8.10438 5.62774 8.06025 5.58953 8.02335L5.58328 8.01731L5.58334 8.01726L3.51964 5.95356L2.66608 5.1H3.87319H8.90059C10.2267 5.1 11.4984 5.62679 12.4361 6.56447C13.3738 7.50215 13.9006 8.77392 13.9006 10.1V11.9C13.9006 12.0061 13.9427 12.1078 14.0177 12.1828C14.0928 12.2579 14.1945 12.3 14.3006 12.3C14.4067 12.3 14.5084 12.2579 14.5834 12.1828C14.6584 12.1078 14.7006 12.0061 14.7006 11.9V10.1C14.7006 8.56175 14.0895 7.08649 13.0018 5.99878C11.9141 4.91107 10.4388 4.3 8.90059 4.3H3.87319H2.66608L3.51964 3.44645L5.58328 1.3828C5.5833 1.38279 5.58332 1.38277 5.58334 1.38275C5.65829 1.30774 5.7004 1.20604 5.7004 1.1C5.7004 0.993988 5.65831 0.892311 5.58339 0.817309C5.58335 0.817274 5.58332 0.817239 5.58328 0.817203M6.13858 7.95584L4.66429 0.463703C4.83306 0.294979 5.06194 0.200195 5.30059 0.200195C5.53924 0.200195 5.76811 0.294979 5.93689 0.463703L5.58328 0.817203M6.13858 7.95584L5.67917 8.15319C5.70014 8.20199 5.71117 8.25448 5.71163 8.30759C5.7121 8.3607 5.70197 8.41337 5.68186 8.46253C5.66175 8.51169 5.63205 8.55635 5.59449 8.59391C5.55693 8.63146 5.51227 8.66116 5.46312 8.68128C5.41396 8.70139 5.36128 8.71151 5.30817 8.71105C5.25506 8.71059 5.20257 8.69955 5.15377 8.67859C5.10497 8.65763 5.06083 8.62715 5.02393 8.58895L5.02399 8.58889L5.01784 8.58275L1.4179 4.9828C1.34291 4.90779 1.30078 4.80607 1.30078 4.7C1.30078 4.59396 1.34289 4.49226 1.41784 4.41726C1.41786 4.41724 1.41788 4.41722 1.4179 4.4172L5.01779 0.81731L6.13858 7.95584ZM5.58328 0.817203C5.50828 0.742282 5.40661 0.700195 5.30059 0.700195C5.19455 0.700195 5.09285 0.742302 5.01784 0.817256L5.58328 0.817203Z" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("button", { className: "text-sm font-medium leading-tight text-gray-500 dark:text-gray-100", children: openComment ? "close" : "Comment" })
          ]
        }
      )
    ] }) }),
    openComment && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      CommentSection,
      {
        id: suggest.id,
        setOpenComment,
        comments: suggest.SuggestionComment,
        type: likedByMe ? "support" : "reject"
      }
    )
  ] }, suggest.id);
}
function CommentSection({ id, setOpenComment, comments, type }) {
  let [commentText, setCommentText] = (0, import_react45.useState)(""), [audio, setAudio] = (0, import_react45.useState)({ tempUrl: "", blob: null }), data2 = (0, import_react44.useLoaderData)(), postCommentFetcher = (0, import_react44.useFetcher)();
  function postComment() {
    let item = {
      id,
      commentContent: commentText,
      type
    }, blob = audio.blob;
    var form_data = new FormData();
    blob && form_data.append("file", blob, `text-${data2?.text?.id}-${(0, import_uuid3.v4)()}.wav`);
    for (var key in item)
      form_data.append(key, item[key]);
    postCommentFetcher.submit(form_data, {
      method: "POST",
      action: "/api/suggestion/comment",
      encType: "multipart/form-data"
    }), setCommentText(""), setAudio({ blob: null, tempUrl: "" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "mt-2 flex justify-between gap-2 rounded  bg-gray-100 pt-1", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "flex flex-1 flex-col gap-2 ", children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      TextArea_default,
      {
        onChange: (e) => setCommentText(e.target.value),
        placeholder: "comment on suggestion",
        value: commentText,
        rows: 1
      }
    ),
    audio.tempUrl !== "" ? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_jsx_runtime36.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "my-2 flex w-full items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_AudioPlayer.default, { src: audio.tempUrl }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { onClick: () => setAudio({ tempUrl: "", blob: null }), children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z",
          className: "fill-gray-200"
        }
      ) }) })
    ] }) }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "flex justify-between", children: [
      audio.tempUrl === "" ? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_AudioRecorder.default, { setAudio }) : /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", {}),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          Button,
          {
            label: postCommentFetcher.state === "submitting" ? "commenting" : "comment",
            type: "submit",
            onClick: postComment,
            disabled: !!postCommentFetcher.formData
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Button, { label: "cancel", type: "reset", onClick: () => setOpenComment(!1) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Comments, { comments })
  ] }) });
}
function oo_cm10() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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

// app/features/Suggestion/SuggestionContainer.tsx
var import_react46 = require("@remix-run/react"), import_jsx_runtime37 = require("react/jsx-runtime");
function Suggestions({ editor }) {
  let [searchParams] = (0, import_react46.useSearchParams)(), { suggestions } = (0, import_react46.useLoaderData)(), threadId = searchParams.get("thread"), list = suggestions.filter((sug) => sug.threadId === threadId), groupedSuggestion = transformObjectsByNewValue(list);
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    "div",
    {
      className: "z-1 flex-1 overflow-visible overflow-y-auto bg-slate-50 p-2 shadow-md dark:bg-gray-700",
      style: { minWidth: 350, fontFamily: "sans-serif" },
      children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "flex flex-col  gap-2 ", children: groupedSuggestion.map((suggest) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
        Suggestion2,
        {
          optimistic: !1,
          editor,
          suggest,
          count: groupedSuggestion.length
        },
        suggest.id
      )) })
    }
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
var import_react47 = require("@remix-run/react"), import_react48 = require("react"), import_uuid4 = require("uuid");
var import_jsx_runtime38 = require("react/jsx-runtime");
function SuggestionForm({ editor }) {
  let { user, page, text } = (0, import_react47.useLoaderData)(), [searchParams, setSearchParams] = (0, import_react47.useSearchParams)(), [suggestionInput, setSuggestionInput] = (0, import_react48.useState)(""), [error, setError] = (0, import_react48.useState)(null), addSuggestion = useFetcherWithPromise(), [audio, setAudio] = (0, import_react48.useState)({ tempUrl: "", blob: null }), handleSuggestionSubmit = async () => {
    if (suggestionInput === "")
      return setError("suggestion cannot be empty"), null;
    let { state } = editor, { from, to } = state.selection, originalText = state.doc.textBetween(from, to, " "), id = null;
    editor.isActive("suggestion") ? id = editor.getAttributes("suggestion").id : id = (0, import_uuid4.v4)();
    let item = {
      oldValue: originalText,
      textId: text.id,
      pageId: page?.id,
      newValue: suggestionInput,
      userId: user?.id,
      threadId: id
    }, blob = audio.blob;
    var form_data = new FormData();
    blob && form_data.append("file", blob, `text-${text?.id}-${(0, import_uuid4.v4)()}.wav`);
    for (var key in item)
      form_data.append(key, item[key]);
    (await addSuggestion.submit(form_data, {
      action: "/api/suggestion",
      method: "POST",
      encType: "multipart/form-data"
    }))?.message || (editor.commands.setSuggestion({
      id,
      original: originalText
    }), setError(null), setSuggestionInput(""), setAudio({
      blob: null,
      tempUrl: ""
    }));
  }, handleSuggestionCancel = () => {
    setSearchParams({ with: "all" });
  }, isPosting = addSuggestion.formData;
  return user ? isPosting ? /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "bg-slate-50 p-2 shadow-md dark:bg-gray-700 ", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex flex-col gap-2 ", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    Suggestion2,
    {
      editor: null,
      optimistic: !0,
      suggest: {
        created_at: /* @__PURE__ */ new Date(),
        id: "",
        likedBy: [],
        newValue: addSuggestion.formData?.get("newValue"),
        oldValue: addSuggestion.formData?.get("oldValue"),
        textId: parseInt(addSuggestion.formData?.get("textId")),
        threadId: addSuggestion.formData?.get("threadId"),
        updatedAt: /* @__PURE__ */ new Date(),
        user,
        suggestionComments: [],
        userId: "",
        text: data.text.id,
        audioUrl: ""
      }
    }
  ) }) }) : /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: " bg-slate-50 p-2 shadow-md dark:bg-gray-700", children: [
    addSuggestion.data?.message && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "font-sm text-red-500", children: addSuggestion.data?.message }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      TextArea_default,
      {
        placeholder: "any suggestion?",
        value: suggestionInput,
        rows: 1,
        onChange: (e) => setSuggestionInput(e.target.value)
      }
    ),
    audio.tempUrl !== "" ? /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_jsx_runtime38.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "mt-2 flex w-full items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_AudioPlayer.default, { src: audio.tempUrl }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { onClick: () => setAudio({ tempUrl: "", blob: null }), children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z",
          className: "fill-gray-200"
        }
      ) }) })
    ] }) }) : null,
    error && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "text-red-400", children: error }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex justify-between", children: [
      audio.tempUrl === "" ? /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_AudioRecorder.default, { setAudio }) : /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", {}),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "mt-3 flex justify-end gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          Button,
          {
            disabled: addSuggestion.state !== "idle",
            onClick: handleSuggestionSubmit,
            type: "submit",
            label: "submit"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Button, { onClick: handleSuggestionCancel, type: "reset", label: "cancel" })
      ] })
    ] })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(LogInMessage, {});
}

// app/features/Suggestion/index.tsx
var import_jsx_runtime39 = require("react/jsx-runtime");
function SuggestionSidebar({ editor }) {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "z-20 w-full border-l", children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(SuggestionForm, { editor }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(SuggestionContainer_default, { editor })
  ] });
}

// app/component/menu/Suggestion.tsx
var import_jsx_runtime40 = require("react/jsx-runtime");
function Suggestion3({ editor }) {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(SuggestionSidebar, { editor });
}
var Suggestion_default = Suggestion3;

// app/component/menu/Menu.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
function Menu({ editor }) {
  let [searchParams] = (0, import_react49.useSearchParams)(), menu = searchParams.get("with");
  return menu ? /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "w-full flex flex-col max-w-[30%]", style: { maxHeight: "calc(100vh - 60px)" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(MenuHeader_default, {}),
    menu === "all" && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(MenuHome_default, {}),
    menu === "TableOfContent" && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(TableOfContent_default, { editor: null }),
    menu === "Search" && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Search_default, { editor }),
    menu === "Translations" && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Translations_default, {}),
    menu === "Post" && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Post_default2, { editor }),
    menu === "Suggestion" && editor && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Suggestion_default, { editor })
  ] }) : null;
}
var Menu_default = Menu;

// app/model/post.ts
async function createPost2(type, avatar, topic_id, post_id, threadId, textId, pageId, content, creatorUser_id, audioUrl, selectionContent) {
  try {
    let data2 = {
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
      data: data2
    });
  } catch (e) {
    throw console.log(...oo_oo11("207195175_38_4_38_18_4", e)), new Error("post couldnot be created " + e);
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
          //-1 because the parent post is included here
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
function oo_cm11() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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

// app/routes/text.$textId.page.$pageId.tsx
var import_jsx_runtime42 = require("react/jsx-runtime"), loader3 = async ({ request, params }) => {
  let textId = params.textId, order = params.pageId, url = new URL(request.url), version = url.searchParams.get("version"), searchParamsWith = url.searchParams.get("with"), versions = await getVersions(parseInt(textId), parseInt(order));
  if (!version && versions.length > 0 && !version)
    return (0, import_node4.redirect)(`${request.url}?version=${versions[0].version}`);
  let text = await getText(textId), page = await getPage(textId, parseInt(order), version), pageId = page?.id, annotations = await getAnnotations(page?.id), user = await getUserSession(request), translations = searchParamsWith === "Translations" ? await listTranslations(textId, pageId) : [], suggestions = searchParamsWith === "Suggestion" ? await findAllSuggestionByPageId(page?.id) : [], posts = searchParamsWith === "Post" ? await findPostByTextIdAndPage(parseInt(textId), parseInt(order), version) : [];
  return (0, import_node4.json)({
    page,
    user,
    suggestions,
    text,
    order,
    versions,
    translations,
    annotations,
    posts,
    pageId
  });
};
function Page() {
  let data2 = (0, import_react50.useLoaderData)(), { page } = data2, saveTextFetcher = (0, import_react50.useFetcher)(), editor = useEditorInstance_default("", !1), withImage = !data2.text.allow_post;
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex flex-col ", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Header_default, { editor }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex w-full flex-col  flex-1 ", style: { maxHeight: "calc(100vh - 60px)" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(TextHeader_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: " flex justify-between gap-4 transition-all flex-1 overflow-y-auto ", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react_spinner_overlay.CircleSpinnerOverlay, { message: "updating text", loading: saveTextFetcher.state !== "idle" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "w-full flex gap-2 ", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            "div",
            {
              className: `${withImage ? "w-full" : "max-w-3xl"} justify-self-center p-2 dark:bg-gray-800 mx-auto `,
              id: "textEditorContainer",
              children: editor && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(EditorContainer_default, { editor, isSaving: !1, page, saveTextFetcher })
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Menu_default, { editor })
    ] })
  ] });
}

// app/routes/translate.$textId.$pageId.tsx
var translate_textId_pageId_exports = {};
__export(translate_textId_pageId_exports, {
  action: () => action3,
  default: () => translate_textId_pageId_default,
  loader: () => loader4
});

// app/features/Translation/SourceEditor.tsx
var import_react51 = require("react");
var import_react52 = require("@tiptap/react");
var import_react53 = require("@remix-run/react"), import_jsx_runtime43 = require("react/jsx-runtime");
function SourceEditor() {
  let { source } = (0, import_react53.useLoaderData)(), content = source.content, editor = useEditorInstance_default(content, !0), saveFetcher = (0, import_react53.useFetcher)();
  return (0, import_react51.useEffect)(() => {
    editor?.on("update", ({ editor: editor2 }) => {
      let text = editor2.getHTML();
      text.length > 200 && saveFetcher.submit(
        {
          action_: "updateSource",
          id: source.id,
          content: text.trim()
        },
        {
          method: "POST"
        }
      );
    });
  }, [editor]), (0, import_react51.useEffect)(() => {
    let timer = setTimeout(() => {
      let newContent = content.replace(/[\r\n]+/g, "<p/><p>");
      editor?.commands.setContent(newContent);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [content, editor]), /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_jsx_runtime43.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Tools_default, { editor }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react52.EditorContent, { editor })
  ] });
}
var SourceEditor_default = SourceEditor;

// app/features/Translation/TranslationEditor.tsx
var import_react54 = require("react");
var import_react55 = require("@tiptap/react");
var import_react56 = require("@remix-run/react"), import_jsx_runtime44 = require("react/jsx-runtime");
function TranslationEditor() {
  let { translation } = (0, import_react56.useLoaderData)(), content = translation?.content, editor = useEditorInstance_default(content, !0), saveFetcher = (0, import_react56.useFetcher)();
  return (0, import_react54.useEffect)(() => {
    editor?.on("update", ({ editor: editor2 }) => {
      let text = editor2.getHTML();
      text.length > 200 && saveFetcher.submit(
        {
          action_: "updateSource",
          id: translation.id,
          content: text.trim()
        },
        {
          method: "POST"
        }
      );
    });
  }, [editor]), (0, import_react54.useEffect)(() => {
    let timer = setTimeout(() => {
      let newContent = content.replace(/[\r\n]+/g, "<p/><p>");
      editor?.commands.setContent(newContent);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [content, editor]), /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Tools_default, { editor }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react55.EditorContent, { editor })
  ] });
}
var TranslationEditor_default = TranslationEditor;

// app/routes/translate.$textId.$pageId.tsx
var import_jsx_runtime45 = require("react/jsx-runtime"), loader4 = async ({ request, params }) => {
  let url = new URL(request.url), versionId = params.versionId, user = await getUserSession(request), source = await getUserPage(user?.id, versionId), translations = source?.translations;
  return { source, translation: translations[0] };
}, action3 = async ({ request }) => {
  let formdata = await request.formData(), id = formdata.get("id"), content = formdata.get("content");
  switch (formdata.get("action_")) {
    case "updateSource":
      return updateSource(id, content);
    case "updateTranslation":
  }
  return null;
};
function Translation2() {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Header_default, { editor: null }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      "div",
      {
        style: {
          padding: 56
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex p-2 border-2 xl:mx-10 h-[80vh] gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-[50%]", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(SourceEditor_default, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "w-[50%]", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(TranslationEditor_default, {}) })
        ] })
      }
    )
  ] });
}
var translate_textId_pageId_default = Translation2;

// app/routes/api.suggestion.comment.tsx
var api_suggestion_comment_exports = {};
__export(api_suggestion_comment_exports, {
  action: () => action4
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
      console.log(...oo_oo12("1568799778_23_8_23_78_4", "Uploaded :: " + progress.loaded * 100 / progress.total)) + "";
    }).promise()
  };
};
async function uploadStreamToS3(data2, filename) {
  let stream = uploadStream({
    Key: filename
  });
  return await (0, import_node5.writeAsyncIterableToWritable)(data2, stream.writeStream), (await stream.promise).Location;
}
var uploadAudio = async ({ name, filename, data: data2 }) => name !== "file" ? void 0 : await uploadStreamToS3(data2, filename);
function oo_cm12() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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

// app/routes/api.suggestion.comment.tsx
var import_node6 = require("@remix-run/node"), action4 = async ({ request }) => {
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
  action: () => action5
});
var import_server_runtime2 = require("@remix-run/server-runtime");
var action5 = async ({ request }) => {
  let user = await getUserSession(request), formData = await request.formData(), Obj = Object.fromEntries(formData), id = Obj.id, threadId = Obj.threadId, likedUsers = await findSuggestionByUserLiked(id, user.id);
  try {
    let update = await updateSuggestionLike(id, user.id, likedUsers === null);
    if (update) {
      let highestLiked = await findSuggestionWithMostLikes(threadId);
      if (highestLiked)
        return (0, import_server_runtime2.json)(
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
    console.log(...oo_oo13("3152283974_34_4_34_18_4", e));
  }
  return { success: !0 };
};
function oo_cm13() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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

// app/routes/api.translation.tsx
var api_translation_exports = {};
__export(api_translation_exports, {
  action: () => action6
});
var action6 = async ({ request }) => {
  let formdata = await request.formData(), user_session = await getUserSession(request), user = await getUser(user_session.username), content = formdata.get("content"), textId = formdata.get("textId"), order = formdata.get("pageId"), name = formdata.get("name"), language = formdata.get("language");
  switch (request.method) {
    case "POST":
      return await createTranslation(parseInt(textId), parseInt(order), language, content, user?.id, name);
    case "DELETE":
      let id = formdata.get("id");
      return await deleteTranslation(parseInt(id));
  }
  return null;
};

// app/routes/api.user.search.tsx
var api_user_search_exports = {};
__export(api_user_search_exports, {
  loader: () => loader5
});
var import_react_router = require("react-router");
var loader5 = async ({ request }) => {
  let userName = new URL(request.url).searchParams.get("filterUser") ?? "";
  if (userName === "")
    return (0, import_react_router.json)([]);
  let fetchData = (await getAllUser()).filter((user) => user?.username.toLowerCase().includes(userName.toLowerCase()));
  return (0, import_react_router.json)(fetchData);
};

// app/routes/api.suggestion.tsx
var api_suggestion_exports = {};
__export(api_suggestion_exports, {
  action: () => action7,
  loader: () => loader6
});
var import_react_router2 = require("react-router");
var import_node7 = require("@remix-run/node"), loader6 = async ({ request }) => {
  let suggestionId = new URL(request.url).searchParams.get("suggestionId") ?? "", suggestion = await getSuggestionWithThreadId(suggestionId);
  return (0, import_react_router2.json)(suggestion);
}, action7 = async ({ request }) => {
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
      return console.log(...oo_oo14("4266165166_44_6_44_27_4", responce)), { responce };
    } catch (e) {
      return console.log(...oo_oo14("4266165166_47_6_47_20_4", e)), { message: e };
    }
  } else {
    let formData = await request.formData(), Obj = Object.fromEntries(formData);
    if (request.method === "DELETE") {
      let id = Obj.id, res = await deleteSuggestion(id), remainingdata = await getSuggestionWithThreadId(res.threadId);
      return {
        deleted: res,
        remain: remainingdata?.length
      };
    }
    if (request.method === "PATCH") {
      let id = Obj.id, newValue = Obj.newValue;
      return await updateSuggestionContent(id, newValue);
    }
  }
  return null;
};
function oo_cm14() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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

// app/routes/api.reply.$id.tsx
var api_reply_id_exports = {};
__export(api_reply_id_exports, {
  loader: () => loader7
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
    throw new Error("updating approved error" + e);
  }
}

// app/routes/api.reply.$id.tsx
var loader7 = async ({ params }) => {
  let id = parseInt(params?.id), post = await findPostByTopicId(id), posts = [], postsData = await getposts(id), replyList = await findReplyByPostId(post?.id), postsList = postsData?.post_stream?.posts;
  return posts = combineArrays(replyList, postsList), (0, import_react_router3.json)({
    posts
  });
};
function combineArrays(array1, array2) {
  if (array1.length < 1 || array2.length < 1)
    return array2 || [];
  let idMap = new Map(array1?.map((obj) => [String(obj.id), obj]));
  return array2.map((obj) => {
    let matchingObject = idMap.get(String(obj.id));
    return matchingObject ? { ...obj, ...matchingObject } : obj;
  }).slice(1).sort((a, b) => a.is_approved === b.is_approved ? 0 : a.is_approved ? -1 : 1);
}

// app/routes/auth_.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  action: () => action8,
  loader: () => loader8
});
var import_server_runtime3 = require("@remix-run/server-runtime");
var loader8 = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie")), url = new URL(request.url), sso = url.searchParams.get("sso"), sig = url.searchParams.get("sig");
  if (sso && sig) {
    let payload = atob(sso), decoded = unescape(payload), params = new URLSearchParams(decoded);
    if (!params.get("nonce"))
      throw new Error("lopenling server login problem");
    try {
      let email = params.get("email"), admin = params.get("admin"), name = params.get("name"), username = params.get("username"), avatarUrl = params.get("avatar_url"), external_id = params.get("external_id");
      if (avatarUrl === null) {
        let url2 = process.env.DISCOURSE_SITE + `/u/${username}.json`, res = await (await fetch(url2)).json();
        avatarUrl = ForumLink + res?.user?.avatar_template.replace("{size}", "30");
      }
      if (!email || !name || !username)
        throw new Error("discourse SSO returned error URL");
      let userData = null, id, user = await isUserPresent(username);
      user ? id = user.id : (userData = await createUserInDB(username, name, email, admin === "true", avatarUrl), id = userData?.id), session.set("user", {
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
}, action8 = async ({ request, context }) => {
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
  action: () => action9
});
var import_node8 = require("@remix-run/node");
var action9 = async ({ request }) => {
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
      let formData = await request.formData(), user2 = await getUserSession(request), Obj = Object.fromEntries(formData), action12 = Obj.action;
      if (action12 === "like") {
        let post_id = Obj.post_id, id = Obj.id;
        if (!await isReplyPresent(id))
          await createReply(id, post_id, user2.id);
        else {
          let alreadyLiked = await findReply(id, user2.id);
          await updateLikeReply(id, user2.id, !alreadyLiked);
        }
        return { success: !0 };
      }
      if (action12 === "approve") {
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
  action: () => action10
});
var import_node9 = require("@remix-run/node"), action10 = async ({ request }) => {
  let uploadHandler = (0, import_node9.unstable_composeUploadHandlers)(uploadAudio, (0, import_node9.unstable_createMemoryUploadHandler)()), user = await getUserSession(request);
  if (request.method === "POST") {
    let formData = await (0, import_node9.unstable_parseMultipartFormData)(request, uploadHandler), Obj = Object.fromEntries(formData), DiscourseUrl = process.env.DISCOURSE_SITE, api = process.env.DISCOURSE_API_KEY, parent_category_id = process.env.DISCOURSE_QA_CATEGORY_ID;
    if (!user)
      throw new Error("user not logged in");
    if (!DiscourseUrl || !api || !parent_category_id)
      throw new Error("set a DISCOURSE_SITE/DISCOURSE_API_KEY in env");
    let audioUrl = Obj.file, textId = parseInt(Obj.textId), pageId = Obj.pageId, order = Obj.order;
    try {
      let data2 = await createThread(
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
      if (data2.topic_id && user)
        return await createPost2(
          Obj.type,
          data2.avatar_template,
          data2.topic_id,
          data2.id,
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
    let formData = await (0, import_node9.unstable_parseMultipartFormData)(request, uploadHandler), action12 = formData.get("action");
    if (action12 === "like") {
      let postId = formData.get("id"), userId = formData.get("userId"), likedUsers = await findPostByUserLiked(postId, userId);
      try {
        let res = await updatePostLike(postId, userId, likedUsers === null);
        return res.textId, res.likedBy;
      } catch (e) {
        console.log(...oo_oo15("1371661221_94_8_94_22_4", e));
      }
      return { success: !0 };
    }
    if (action12 === "update") {
      let newContent = formData.get("body"), postId = formData.get("postId"), audioUrl = formData.get("file");
      audioUrl || (audioUrl = formData.get("audioUrl"));
      let res = await updatePostContentandAudio(postId, newContent, audioUrl);
      return res?.post_id && await updateDiscoursePost(res.post_id, newContent, audioUrl, user.username), res;
    }
  }
  return null;
};
function oo_cm15() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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
  action: () => action11,
  loader: () => loader9
});
var loader9 = async ({ request }) => {
  let searchText = new URL(request.url).searchParams.get("search")?.trim();
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
}, action11 = async ({ request }) => {
  let data2 = await request.formData();
  if (request.method === "DELETE") {
    let textId = data2.get("textId");
    return await deleteText(textId);
  }
  if (request.method === "POST") {
    let newContent = data2.get("content"), annotations = data2.get("annotations"), pageId = data2.get("pageId");
    try {
      let page_return = await updatePage(pageId, newContent), annotation_return = await updateAnnotations(pageId, annotations);
      return { page_return, annotation_return };
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
  loader: () => loader10,
  meta: () => meta2
});
var import_react57 = require("@remix-run/react"), import_flowbite_react6 = require("flowbite-react");

// app/component/Layout/Footer.tsx
var import_ai6 = require("react-icons/ai");

// app/assets/indrajalaLogo.png
var indrajalaLogo_default = "/build/_assets/indrajalaLogo-JUD46QZL.png";

// app/component/Layout/Partner.tsx
var import_jsx_runtime46 = require("react/jsx-runtime"), PartnerSection = () => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "mb-10", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "container mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "flex items-center justify-center ", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("a", { href: "https://indrajala.org.tw/", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
  "img",
  {
    src: indrajalaLogo_default,
    alt: "Partner 1",
    className: "h-16 rounded-full border-2 border-gray-200 bg-gray-700 p-2 shadow-md"
  }
) }) }) }) }), Partner_default = PartnerSection;

// app/component/Layout/Footer.tsx
var import_jsx_runtime47 = require("react/jsx-runtime");
function FooterContainer() {
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("footer", { className: "absolute bottom-0 w-full  ", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Partner_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "mx-auto w-full ", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: " px-4 py-6 dark:bg-gray-700 md:flex md:items-center md:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { className: "text-sm text-gray-500 dark:text-gray-300 sm:text-center" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "mt-4 flex space-x-6 sm:justify-center md:mt-0", children: [
        {
          logo: "https://openpecha.org/logo.png",
          link: "https://openpecha.org/"
        },
        {
          logo: import_ai6.AiFillTwitterCircle,
          link: "https://twitter.com/OpenPecha"
        },
        {
          logo: import_ai6.AiFillGithub,
          link: "https://github.com/OpenPecha"
        }
      ].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
        "a",
        {
          href: item.link,
          className: "text-gray-400 hover:text-blue-300 dark:hover:text-white",
          target: "_blank",
          children: [
            typeof item.logo == "string" ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("img", { src: item.logo, className: "h-4 w-4", alt: "openpecha" }) : /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(item.logo, {}),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { className: "sr-only", children: "page links" })
          ]
        },
        index
      )) })
    ] }) })
  ] });
}

// app/routes/_index.tsx
var import_node10 = require("@remix-run/node");
var import_react58 = require("@remix-run/react");
var import_framer_motion2 = require("framer-motion");
var import_react59 = require("react");

// app/lib/filterVersionFromText.ts
function groupData(data2) {
  let groupedData = {}, isVersionAvailable = !1;
  return data2.forEach((item) => {
    item.version ? (groupedData[item.version] || (groupedData[item.version] = []), groupedData[item.version].push(item), isVersionAvailable = !0) : (groupedData = item, isVersionAvailable = !1);
  }), {
    groupedData,
    isVersionAvailable
  };
}
var filterVersionFromText_default = groupData;

// app/routes/_index.tsx
var import_jsx_runtime48 = require("react/jsx-runtime"), loader10 = async ({ request }) => {
  let searchText = new URL(request.url).searchParams.get("search")?.trim(), { latestTexts, count } = await findLatestText(), headers2 = {
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
function meta2({ data: data2 }) {
  return [
    {
      title: data2?.search ? `${data2?.search} - Lopenling Search` : "Lopenling App"
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
  let data2 = (0, import_react58.useLoaderData)(), navigation = (0, import_react58.useNavigation)(), [params] = (0, import_react57.useSearchParams)(), [searchInput, setSearchInput] = (0, import_react59.useState)(""), translation = uselitteraTranlation(), handleInputChange = (event) => {
    let inputValue = event.target.value;
    setSearchInput(inputValue);
  };
  (0, import_react59.useEffect)(() => {
    let p = params.get("search");
    setSearchInput(p || "");
  }, [params]);
  let lists = data2.textList, isLoading = navigation.formData?.get("search") && navigation.state === "loading";
  return lists?.message ? /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "text-red-400", children: lists?.message }) : /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
    import_framer_motion2.motion.div,
    {
      initial: { x: "5%", opacity: 0 },
      animate: { x: "0%", opacity: 1 },
      exit: { x: "5%", opacity: 0 },
      style: { position: "relative", minHeight: "100vh" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Header_default, { editor: null }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: " mx-auto max-w-2xl ", style: { paddingTop: 56 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex w-full flex-col items-center justify-center  px-3 pt-24 md:px-1.5  ", children: [
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react57.Form, { method: "GET", className: "mb-3 w-full max-w-2xl", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "relative flex w-full space-x-3 ", children: [
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
                import_flowbite_react6.TextInput,
                {
                  autoComplete: "off",
                  name: "search",
                  placeholder: translation.searchText,
                  value: searchInput,
                  id: "inputText",
                  onChange: handleInputChange,
                  type: "search",
                  style: { height: "100%" },
                  className: "flex-1 text-gray-500 pr-3"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_flowbite_react6.Button, { type: "submit", className: "h-full bg-green-400 text-white", color: "#1C64F2", size: "lg", children: translation.searchText })
            ] }) }),
            data2?.latestTexts && /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_jsx_runtime48.Fragment, { children: [
              data2.latestTexts.list.map((text) => {
                let { groupedData, isVersionAvailable } = filterVersionFromText_default(text.Page), url = `/text/${text.id}/page/1/`;
                return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex w-full justify-between border-b dark:border-gray-700", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "flex items-center gap-1 px-4 py-4", style: { fontFamily: "monlam" }, children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react57.Link, { to: url, children: text.name }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "flex gap-2 px-4 py-4 font-light text-gray-300", children: isVersionAvailable ? /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_jsx_runtime48.Fragment, { children: Object.keys(groupedData).map((key) => {
                    let urlversion = url + "?version=" + key;
                    return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
                      import_react57.Link,
                      {
                        to: urlversion,
                        className: "cursor-pointer rounded-md bg-yellow-300 px-2 capitalize text-black",
                        children: translation[key]
                      },
                      key
                    );
                  }) }) : /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_jsx_runtime48.Fragment, {}) })
                ] }, text.id);
              }),
              /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
                import_react57.Link,
                {
                  to: "/list",
                  className: "mb-3 pt-5 text-sm font-light text-gray-800 underline transition-colors dark:text-white",
                  children: [
                    "List all (",
                    data2?.latestTexts?.count,
                    ") Pechas"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "inline-flex  w-full flex-col items-center justify-start space-y-3.5 py-10", children: [
            isLoading && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Skeleton, { height: 125, number: 3 }),
            lists && !isLoading && /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_jsx_runtime48.Fragment, { children: [
              lists.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "text-xl font-extrabold capitalize text-gray-300 font-Inter leading-[150%]", children: "No result found" }),
              lists?.map(
                (list, index) => {
                  let result = list.results[0];
                  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
                    import_react57.Link,
                    {
                      to: `/text/${list.textId}/page/1`,
                      className: "container w-full",
                      prefetch: "intent",
                      children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_flowbite_react6.Card, { className: "dark:bg-gray-500 font-monlam", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "text-xl", children: result.name }),
                        /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex flex-wrap justify-between text-sm", children: [
                          result && result[1],
                          /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "text-sm text-gray-400", children: [
                            result.total,
                            " matches"
                          ] })
                        ] })
                      ] })
                    },
                    "id" + index
                  );
                }
              )
            ] })
          ] })
        ] }),
        !lists && !isLoading && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_jsx_runtime48.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(FooterContainer, {}) })
      ]
    },
    (0, import_react58.useLocation)().pathname
  );
}

// app/routes/list.tsx
var list_exports = {};
__export(list_exports, {
  default: () => List,
  loader: () => loader11
});
var import_react60 = require("@remix-run/react");
var import_react61 = require("react");
var import_jsx_runtime49 = require("react/jsx-runtime"), loader11 = async ({ request }) => {
  let textList = await findAllTextWithDetail(), user = await getUserSession(request);
  return {
    textList,
    isAdmin: user?.admin === "true"
  };
};
function List() {
  let fetcher = (0, import_react60.useFetcher)(), { textList, isAdmin } = (0, import_react60.useLoaderData)(), [currentPage, setCurrentPage] = (0, import_react61.useState)(1), textsPerPage = 20, indexOfLastText = currentPage * textsPerPage, indexOfFirstText = indexOfLastText - textsPerPage, currentTexts = textList.slice(indexOfFirstText, indexOfLastText), totalPages = Math.ceil(textList.length / textsPerPage), goToPage = (page) => {
    setCurrentPage(page);
  }, deleteText2 = (textId) => {
    confirm("Are you sure you want to delete this text?") ? fetcher.submit(
      { textId: textId.toString() },
      {
        method: "DELETE",
        action: "/api/text"
      }
    ) : console.log(...oo_oo16("2240524047_44_6_44_30_4", "cancelled"));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Header_default, { editor: null }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "h-20" }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("table", { className: "mx-auto w-full max-w-4xl text-left text-sm text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("thead", { className: "border-b-2 border-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("th", { scope: "col", className: "px-4 py-4", children: "Title" }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("th", { scope: "col", className: "px-4 py-4", children: "Total page" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("tbody", { children: currentTexts.map((text) => {
        let { groupedData, isVersionAvailable } = filterVersionFromText_default(text.Page), url = `/text/${text.id}/page/1`;
        return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
          "tr",
          {
            className: "w-full border-b hover:text-gray-600 dark:border-gray-700 dark:hover:text-white",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("th", { scope: "col", className: "flex items-center gap-1 px-4 py-4", style: { fontFamily: "monlam" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                  Avatar,
                  {
                    title: text?.author.name,
                    alt: text?.author.name,
                    img: text?.author.avatarUrl,
                    rounded: !0,
                    size: "sm"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react60.Link, { to: url, children: text.name })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("td", { scope: "col", className: " px-4 py-4", children: isVersionAvailable ? /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "flex gap-2", children: Object.keys(groupedData).map((key) => {
                let urlversion = url + "?version=" + key;
                return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                  import_react60.Link,
                  {
                    to: urlversion,
                    className: "cursor-pointer rounded-md bg-yellow-300 px-2 capitalize text-black",
                    children: key
                  },
                  key
                );
              }) }) : /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { children: text.Page.length }),
                isAdmin && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { onClick: () => deleteText2(text.id), className: "cursor-pointer", children: "delete" })
              ] }) })
            ]
          },
          text.id
        );
      }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "mt-8 flex items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        "button",
        {
          onClick: () => goToPage(currentPage - 1),
          className: `${currentPage === 1 && "hidden"} mr-4 rounded-lg bg-gray-200 px-4 py-2 text-gray-700`,
          children: "Previous"
        }
      ),
      Array.from({ length: totalPages }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        "button",
        {
          onClick: () => goToPage(index + 1),
          className: `px-4 py-2 ${currentPage === 1 && "hidden"} ${index + 1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} mx-2 rounded-lg`,
          children: index + 1
        },
        index + 1
      )),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        "button",
        {
          onClick: () => goToPage(currentPage + 1),
          className: ` ${currentPage === totalPages && "hidden"} ml-4 rounded-lg bg-gray-200 px-4 py-2 text-gray-700 `,
          children: "Next"
        }
      )
    ] })
  ] });
}
function oo_cm16() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','57127','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.192.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699445069034','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
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

// app/routes/test.tsx
var test_exports = {};
__export(test_exports, {
  default: () => test_default,
  loader: () => loader12
});
var import_jsx_runtime50 = require("react/jsx-runtime"), loader12 = async () => {
  let translation = await createTranslation(
    1,
    1,
    "fr",
    "test_content",
    "235088fa-3294-499a-af0b-1e04c14c7521",
    "testing"
  );
  return null;
};
function test() {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { children: "test" });
}
var test_default = test;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-CR4MKCD2.js", imports: ["/build/_shared/chunk-U533IEKL.js", "/build/_shared/chunk-KO3OK2JV.js", "/build/_shared/chunk-ADMCF34Z.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-UT2J7E7M.js", imports: ["/build/_shared/chunk-HPIE7J2L.js", "/build/_shared/chunk-DYP5L2PF.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-N2JW522X.js", imports: ["/build/_shared/chunk-QJWIGBME.js", "/build/_shared/chunk-VZQVWFLO.js", "/build/_shared/chunk-VYH2TXHK.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/api.post": { id: "routes/api.post", parentId: "root", path: "api/post", index: void 0, caseSensitive: void 0, module: "/build/routes/api.post-Z6UIAG2H.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/api.reply": { id: "routes/api.reply", parentId: "root", path: "api/reply", index: void 0, caseSensitive: void 0, module: "/build/routes/api.reply-CVZV7AVO.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/api.reply.$id": { id: "routes/api.reply.$id", parentId: "routes/api.reply", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/api.reply.$id-VOWKX2ON.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/api.suggestion": { id: "routes/api.suggestion", parentId: "root", path: "api/suggestion", index: void 0, caseSensitive: void 0, module: "/build/routes/api.suggestion-Z33UXDSB.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/api.suggestion.comment": { id: "routes/api.suggestion.comment", parentId: "routes/api.suggestion", path: "comment", index: void 0, caseSensitive: void 0, module: "/build/routes/api.suggestion.comment-TEMZYHCO.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/api.suggestion.like": { id: "routes/api.suggestion.like", parentId: "routes/api.suggestion", path: "like", index: void 0, caseSensitive: void 0, module: "/build/routes/api.suggestion.like-DCRDCHTV.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/api.text": { id: "routes/api.text", parentId: "root", path: "api/text", index: void 0, caseSensitive: void 0, module: "/build/routes/api.text-U3BU4EWK.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/api.translation": { id: "routes/api.translation", parentId: "root", path: "api/translation", index: void 0, caseSensitive: void 0, module: "/build/routes/api.translation-M57GJYI7.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/api.user.preference.theme": { id: "routes/api.user.preference.theme", parentId: "root", path: "api/user/preference/theme", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user.preference.theme-M5WZE2HH.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/api.user.search": { id: "routes/api.user.search", parentId: "root", path: "api/user/search", index: void 0, caseSensitive: void 0, module: "/build/routes/api.user.search-KW47PXJB.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/auth_.login": { id: "routes/auth_.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth_.login-EQZR7YNI.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/list": { id: "routes/list", parentId: "root", path: "list", index: void 0, caseSensitive: void 0, module: "/build/routes/list-JGA7D7NQ.js", imports: ["/build/_shared/chunk-QJWIGBME.js", "/build/_shared/chunk-ES2EUGPA.js", "/build/_shared/chunk-VYH2TXHK.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/test": { id: "routes/test", parentId: "root", path: "test", index: void 0, caseSensitive: void 0, module: "/build/routes/test-I7UTCH2Q.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/text.$textId.page.$pageId": { id: "routes/text.$textId.page.$pageId", parentId: "root", path: "text/:textId/page/:pageId", index: void 0, caseSensitive: void 0, module: "/build/routes/text.$textId.page.$pageId-AT5MF2NV.js", imports: ["/build/_shared/chunk-JCIZNHV3.js", "/build/_shared/chunk-VZQVWFLO.js", "/build/_shared/chunk-ES2EUGPA.js", "/build/_shared/chunk-NNCFER6R.js", "/build/_shared/chunk-VYH2TXHK.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/text_.$textId.page.$pageId.translation.$translationId": { id: "routes/text_.$textId.page.$pageId.translation.$translationId", parentId: "root", path: "text/:textId/page/:pageId/translation/:translationId", index: void 0, caseSensitive: void 0, module: "/build/routes/text_.$textId.page.$pageId.translation.$translationId-A34SEIXI.js", imports: ["/build/_shared/chunk-JCIZNHV3.js", "/build/_shared/chunk-VZQVWFLO.js", "/build/_shared/chunk-6OLRZUYE.js", "/build/_shared/chunk-NNCFER6R.js", "/build/_shared/chunk-VYH2TXHK.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/translate.$textId.$pageId": { id: "routes/translate.$textId.$pageId", parentId: "root", path: "translate/:textId/:pageId", index: void 0, caseSensitive: void 0, module: "/build/routes/translate.$textId.$pageId-NJCRNFPZ.js", imports: ["/build/_shared/chunk-6OLRZUYE.js", "/build/_shared/chunk-ES2EUGPA.js", "/build/_shared/chunk-NNCFER6R.js", "/build/_shared/chunk-VYH2TXHK.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 } }, version: "dec2e1b3", hmr: void 0, url: "/build/manifest-DEC2E1B3.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public\\build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/text_.$textId.page.$pageId.translation.$translationId": {
    id: "routes/text_.$textId.page.$pageId.translation.$translationId",
    parentId: "root",
    path: "text/:textId/page/:pageId/translation/:translationId",
    index: void 0,
    caseSensitive: void 0,
    module: text_textId_page_pageId_translation_translationId_exports
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
  "routes/translate.$textId.$pageId": {
    id: "routes/translate.$textId.$pageId",
    parentId: "root",
    path: "translate/:textId/:pageId",
    index: void 0,
    caseSensitive: void 0,
    module: translate_textId_pageId_exports
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
  "routes/api.translation": {
    id: "routes/api.translation",
    parentId: "root",
    path: "api/translation",
    index: void 0,
    caseSensitive: void 0,
    module: api_translation_exports
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
  },
  "routes/test": {
    id: "routes/test",
    parentId: "root",
    path: "test",
    index: void 0,
    caseSensitive: void 0,
    module: test_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
