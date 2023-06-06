var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function () {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
var __export = (target, all) => {
    for (var name in all) __defProp(target, name, { get: all[name], enumerable: !0 });
  },
  __copyProps = (to, from, except, desc) => {
    if ((from && typeof from == 'object') || typeof from == 'function')
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) &&
          key !== except &&
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          });
    return to;
  };
var __toESM = (mod, isNodeMode, target) => (
    (target = mod != null ? __create(__getProtoOf(mod)) : {}),
    __copyProps(
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, 'default', { value: mod, enumerable: !0 }) : target,
      mod
    )
  ),
  __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: !0 }), mod);

// empty-module:./Post.client
var require_Post = __commonJS({
  'empty-module:./Post.client'(exports, module2) {
    module2.exports = {};
  },
});

// empty-module:./AudioPlayer.client
var require_AudioPlayer = __commonJS({
  'empty-module:./AudioPlayer.client'(exports, module2) {
    module2.exports = {};
  },
});

// empty-module:./AudioRecorder.client
var require_AudioRecorder = __commonJS({
  'empty-module:./AudioRecorder.client'(exports, module2) {
    module2.exports = {};
  },
});

// empty-module:./component/EditorContainer.client
var require_EditorContainer = __commonJS({
  'empty-module:./component/EditorContainer.client'(exports, module2) {
    module2.exports = {};
  },
});

// empty-module:./component/SearchString.client
var require_SearchString = __commonJS({
  'empty-module:./component/SearchString.client'(exports, module2) {
    module2.exports = {};
  },
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes,
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
});
var import_node_stream = require('stream'),
  import_node = require('@remix-run/node'),
  import_react = require('@remix-run/react'),
  import_isbot = __toESM(require('isbot')),
  import_server = require('react-dom/server'),
  import_jsx_runtime = require('react/jsx-runtime'),
  ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get('user-agent'))
    ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext)
    : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
        context: remixContext,
        url: request.url,
        abortDelay: ABORT_DELAY,
      }),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set('Content-Type', 'text/html'),
            resolve(
              new import_node.Response(body, {
                headers: responseHeaders,
                status: responseStatusCode,
              })
            ),
            pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          (responseStatusCode = 500), console.error(error);
        },
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
        context: remixContext,
        url: request.url,
        abortDelay: ABORT_DELAY,
      }),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set('Content-Type', 'text/html'),
            resolve(
              new import_node.Response(body, {
                headers: responseHeaders,
                status: responseStatusCode,
              })
            ),
            pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), (responseStatusCode = 500);
        },
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => AppContainer,
  links: () => links,
  loader: () => loader,
  meta: () => meta,
});
var import_react8 = require('@remix-run/react');

// app/component/Layout/ErrorPage.tsx
var import_jsx_runtime2 = require('react/jsx-runtime');
function ErrorPage({ message }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)('div', {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)('p', { className: 'text-gray-700 mb-4', children: message }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)('a', {
        href: '/',
        style: { textDecoration: 'none', marginLeft: 10 },
        className: ' bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 no-underline',
        children: '[Home page]',
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)('img', {
        src: 'https://st.depositphotos.com/1006899/2650/i/600/depositphotos_26505551-stock-photo-error-metaphor.jpg',
        alt: 'errorMessage',
      }),
    ],
  });
}

// app/services/session.server.ts
var import_server_runtime = require('@remix-run/server-runtime');

// app/services/discourse_sso.server.ts
var CryptoJS = require('crypto-js');
function randomString(length) {
  let result = '',
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    charactersLength = characters.length,
    counter = 0;
  for (; counter < length; )
    (result += characters.charAt(Math.floor(Math.random() * charactersLength))), (counter += 1);
  return result;
}
async function getNonce() {
  let nonce,
    session = await getSession();
  return (
    session.has('sso_nonce')
      ? (nonce = session.get('sso_nonce'))
      : ((nonce = randomString(32)), session.set('sso_nonce', nonce)),
    nonce
  );
}
var redirectDiscourse = async function (sso_redirect) {
  let url = process.env.DISCOURSE_SSO_LOGIN_URL,
    payload = `nonce=${await getNonce()}&return_sso_url=${sso_redirect}`,
    payloadBase64 = btoa(payload);
  var encoder = new TextEncoder(),
    encodedText = encoder.encode(payloadBase64),
    decodedText = new TextDecoder().decode(encodedText),
    hmac = CryptoJS.HmacSHA256(decodedText, process.env.DISCOURSE_API_KEY),
    hexDigest = CryptoJS.enc.Hex.stringify(hmac),
    signature = hexDigest;
  let qs = new URLSearchParams({
    sso: payloadBase64,
    sig: signature,
  }).toString();
  return (url = url + '?' + qs), url;
};

// app/services/session.server.ts
var import_node2 = require('@remix-run/node');

// app/services/discourseApi.ts
var DiscourseApi = class {
  constructor(username = '') {
    if (!process.env.DISCOURSE_API_KEY || !process.env.DISCOURSE_SITE) throw new Error('asign api and url  in env');
    (this.DiscourseUrl = process.env.DISCOURSE_SITE),
      (this.apiKey = process.env.DISCOURSE_API_KEY),
      (this.username = username),
      (this.category = process.env.DISCOURSE_QA_CATEGORY_ID),
      (this.categoryName = 'test'),
      (this.origin = process.env.ORIGIN_LOCATION);
  }
  authHeader(admin = !1) {
    return {
      'Api-Key': this.apiKey,
      'Api-Username': admin ? 'tenkus47' : this.username,
    };
  }
  async fetchCategoryData() {
    let url = `${this.DiscourseUrl}/c/${this.categoryName}/${this.category}.json`;
    return await (await fetch(url)).json();
  }
  async fetchCategoryList(id) {
    let categories = await (await fetch(`${this.DiscourseUrl}/categories.json?include_subcategories=true`)).json(),
      filterCategory =
        categories == null
          ? void 0
          : categories.category_list.categories.find(
              (category) => (category == null ? void 0 : category.id) === parseInt(id)
            );
    return filterCategory.subcategory_ids.length ? filterCategory.subcategory_list : null;
  }
  async fetchposts(topicId) {
    if (topicId) {
      let res = await fetch(`${this.DiscourseUrl}/t/${topicId}/posts.json`);
      return res.status !== 200 ? {} : await res.json();
    }
  }
  async fetchPostReplies(postId) {
    if (postId) return await (await fetch(`${this.DiscourseUrl}/posts/${postId}/replies.json`)).json();
  }
  async addCategory(categoryName, parent_category_id) {
    let authHeaders = this.authHeader(!0);
    var randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
    let newCategoryData = {
        name: categoryName,
        color: randomColor(),
        text_color: randomColor(),
        parent_category_id,
      },
      queryParams = new URLSearchParams(newCategoryData).toString();
    try {
      let category = await (
        await fetch(`${this.DiscourseUrl}/categories.json?` + queryParams, {
          method: 'POST',
          headers: authHeaders,
        })
      ).json();
      return console.log(...oo_oo('959323cc_0', 'Created category:', category)), category;
    } catch (e) {
      throw (console.error('Failed to create category:', e), e);
    }
  }
  async addTopic(threadId, username, category_id, topic_name, bodyContent, textId, audioUrl) {
    let auth_headers = this.authHeader(),
      url = `${this.origin}/text/${textId}/posts?thread=${threadId}`,
      bodyContentWithLink = addLinktoQuestion(bodyContent, url),
      post_text = `
<p>${bodyContentWithLink}</p>
`;
    audioUrl &&
      audioUrl !== '' &&
      (post_text = `<p>${bodyContentWithLink}</p><audio controls><source src="${audioUrl}" type="audio/webm"></audio>`);
    let new_Topic_data = {
        title: topic_name + '-' + textId,
        category: category_id,
        raw: post_text,
      },
      queryParams = new URLSearchParams(new_Topic_data).toString(),
      data = await (
        await fetch(`${this.DiscourseUrl}/posts.json?${queryParams}`, {
          method: 'POST',
          headers: auth_headers,
        })
      ).json();
    if (data != null && data.errors) throw new Error('Post cannot be created due to dublication!' + data.errors);
    return data;
  }
  async createPost(TopicId, postString, audioUrl) {
    let auth_headers = this.authHeader(),
      audioSegment = audioUrl
        ? `<audio controls id='audio_lopenling'>
  <source src="${audioUrl}" type="audio/wav">
</audio>`
        : '',
      raw = `<p>
    ${postString + audioSegment}
    </p>
    `;
    try {
      let newPostData = {
          topic_id: TopicId,
          raw,
          reply_to_post_number: 1,
        },
        params = new URLSearchParams(newPostData).toString();
      return await fetch(`${this.DiscourseUrl}/posts.json?` + params, {
        method: 'POST',
        headers: auth_headers,
      });
    } catch (e) {
      console.log(...oo_oo('959323cc_1', e));
    }
  }
  async updatePost(postId, content, audioUrl) {
    let auth_headers = this.authHeader(),
      audioSegment = audioUrl
        ? `<br/><audio controls id='audio_lopenling'>
  <source src="${audioUrl}" type="audio/wav">
</audio>`
        : '',
      raw = `<p>
    ${content + audioSegment}
    </p>
    `;
    try {
      let formData = new FormData();
      formData.append('post[raw]', raw), formData.append('post[edit_reason]', 'nothing special');
      let response = await fetch(`${this.DiscourseUrl}/posts/${postId}.json?`, {
        method: 'PUT',
        headers: auth_headers,
        body: formData,
      });
    } catch (e) {
      console.log(...oo_oo('959323cc_2', e));
    }
  }
  async deletePost(postId) {
    let auth_headers = this.authHeader();
    try {
      let response = await fetch(`${this.DiscourseUrl}/posts/${postId}.json`, {
        method: 'DELETE',
        headers: auth_headers,
      });
      return console.log(...oo_oo('959323cc_3', response)), response.status;
    } catch (e) {
      console.log(...oo_oo('959323cc_4', e));
    }
  }
  async deleteTopic(id) {
    let auth_headers = this.authHeader();
    try {
      return (
        await fetch(`${this.DiscourseUrl}/t/${id}.json`, {
          method: 'DELETE',
          headers: auth_headers,
        })
      ).status;
    } catch (e) {
      throw new Error('cannot delete topic on discourse' + e);
    }
  }
  async logout(id) {
    let auth_headers = this.authHeader(!0);
    try {
      let url = `${this.DiscourseUrl}/admin/users/${id}/log_out`;
      return await fetch(url, {
        method: 'POST',
        headers: auth_headers,
      });
    } catch (e) {
      console.log(...oo_oo('959323cc_5', e));
    }
  }
};
async function createThread(
  userName,
  textTitle,
  blockquoteArea,
  postContent,
  parentCategoryId,
  textId,
  audioUrl,
  threadId
) {
  if (!textTitle || !blockquoteArea || !postContent) throw new Error('failed to access Topic Id');
  let api = new DiscourseApi(userName),
    categories = await api.fetchCategoryList(parentCategoryId);
  textTitle.length > 40 && (textTitle = textTitle.substring(0, 40) + `_text_${textId}`);
  let category = categories.find((c) => c.name === textTitle.trim()),
    categoryId;
  return (
    category
      ? (categoryId = category.id)
      : (categoryId = (await api.addCategory(textTitle, parseInt(parentCategoryId))).category.id),
    await api.addTopic(threadId, userName, categoryId, blockquoteArea, postContent, textId, audioUrl)
  );
}
function addLinktoQuestion(question, url) {
  return `<a href="${url}" target='_blank'>${question}</a>`;
}
async function deleteDiscourseTopic(userName, topicId) {
  return new DiscourseApi(userName).deleteTopic(topicId);
}
async function getposts(topicId) {
  return new DiscourseApi().fetchposts(topicId);
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
async function fetchCategoryData() {
  return await new DiscourseApi().fetchCategoryData();
}
function oo_cm() {
  try {
    return (
      (0, eval)('globalThis._console_ninja') ||
      (0, eval)(
        `/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2cf5cd=_0x40be;(function(_0x582a6d,_0x326ed6){var _0x274fa5=_0x40be,_0x4e6359=_0x582a6d();while(!![]){try{var _0x36ca3c=parseInt(_0x274fa5(0x240))/0x1+parseInt(_0x274fa5(0x2bf))/0x2*(parseInt(_0x274fa5(0x27c))/0x3)+parseInt(_0x274fa5(0x1f0))/0x4*(parseInt(_0x274fa5(0x288))/0x5)+parseInt(_0x274fa5(0x1ee))/0x6+parseInt(_0x274fa5(0x2b9))/0x7*(parseInt(_0x274fa5(0x20b))/0x8)+parseInt(_0x274fa5(0x269))/0x9*(parseInt(_0x274fa5(0x289))/0xa)+-parseInt(_0x274fa5(0x20a))/0xb;if(_0x36ca3c===_0x326ed6)break;else _0x4e6359['push'](_0x4e6359['shift']());}catch(_0x19d0c6){_0x4e6359['push'](_0x4e6359['shift']());}}}(_0x2a98,0xda71d));var ue=Object[_0x2cf5cd(0x21d)],te=Object[_0x2cf5cd(0x2ae)],he=Object[_0x2cf5cd(0x21f)],le=Object['getOwnPropertyNames'],fe=Object['getPrototypeOf'],_e=Object['prototype'][_0x2cf5cd(0x1e8)],pe=(_0x25f11f,_0x357847,_0x2ae353,_0x3d8e2d)=>{var _0x44b478=_0x2cf5cd;if(_0x357847&&typeof _0x357847=='object'||typeof _0x357847==_0x44b478(0x293)){for(let _0x4a4651 of le(_0x357847))!_e['call'](_0x25f11f,_0x4a4651)&&_0x4a4651!==_0x2ae353&&te(_0x25f11f,_0x4a4651,{'get':()=>_0x357847[_0x4a4651],'enumerable':!(_0x3d8e2d=he(_0x357847,_0x4a4651))||_0x3d8e2d['enumerable']});}return _0x25f11f;},ne=(_0x806e83,_0x70843c,_0x15e02d)=>(_0x15e02d=_0x806e83!=null?ue(fe(_0x806e83)):{},pe(_0x70843c||!_0x806e83||!_0x806e83[_0x2cf5cd(0x25e)]?te(_0x15e02d,_0x2cf5cd(0x266),{'value':_0x806e83,'enumerable':!0x0}):_0x15e02d,_0x806e83)),Q=class{constructor(_0x59b92d,_0x2a3a9d,_0x559130,_0x18aff8){var _0x19135f=_0x2cf5cd;this[_0x19135f(0x273)]=_0x59b92d,this[_0x19135f(0x244)]=_0x2a3a9d,this[_0x19135f(0x26d)]=_0x559130,this[_0x19135f(0x2a1)]=_0x18aff8,this[_0x19135f(0x1f6)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x19135f(0x207)]=!0x1,this['_connecting']=!0x1,this[_0x19135f(0x246)]=!!this['global'][_0x19135f(0x26c)],this[_0x19135f(0x28e)]=null,this[_0x19135f(0x296)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_sendErrorMessage']=this[_0x19135f(0x246)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help':_0x19135f(0x210);}async[_0x2cf5cd(0x25d)](){var _0x423475=_0x2cf5cd;if(this['_WebSocketClass'])return this[_0x423475(0x28e)];let _0x28fd87;if(this['_inBrowser'])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x26c)];else{if(this[_0x423475(0x273)][_0x423475(0x2a2)]?.[_0x423475(0x22e)])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x2a2)]?.['_WebSocket'];else try{let _0x4e350b=await import(_0x423475(0x26e));_0x28fd87=(await import((await import(_0x423475(0x280)))[_0x423475(0x242)](_0x4e350b[_0x423475(0x252)](this[_0x423475(0x2a1)],_0x423475(0x245)))[_0x423475(0x225)]()))['default'];}catch{try{_0x28fd87=require(require(_0x423475(0x26e))[_0x423475(0x252)](this[_0x423475(0x2a1)],'ws'));}catch{throw new Error(_0x423475(0x247));}}}return this[_0x423475(0x28e)]=_0x28fd87,_0x28fd87;}[_0x2cf5cd(0x2a0)](){var _0x299e02=_0x2cf5cd;this[_0x299e02(0x232)]||this['_connected']||this['_connectAttemptCount']>=this[_0x299e02(0x2a8)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x299e02(0x232)]=!0x0,this['_connectAttemptCount']++,this[_0x299e02(0x209)]=new Promise((_0x323901,_0xe82100)=>{var _0x1f03e5=_0x299e02;this[_0x1f03e5(0x25d)]()[_0x1f03e5(0x284)](_0x289f22=>{var _0x312bc1=_0x1f03e5;let _0x1a955b=new _0x289f22(_0x312bc1(0x202)+this['host']+':'+this[_0x312bc1(0x26d)]);_0x1a955b[_0x312bc1(0x1f1)]=()=>{var _0x491c98=_0x312bc1;this['_allowedToSend']=!0x1,this[_0x491c98(0x281)](_0x1a955b),this[_0x491c98(0x2c5)](),_0xe82100(new Error(_0x491c98(0x206)));},_0x1a955b[_0x312bc1(0x2b2)]=()=>{var _0x496f4e=_0x312bc1;this[_0x496f4e(0x246)]||_0x1a955b['_socket']&&_0x1a955b[_0x496f4e(0x2b0)]['unref']&&_0x1a955b[_0x496f4e(0x2b0)]['unref'](),_0x323901(_0x1a955b);},_0x1a955b['onclose']=()=>{var _0x4a9cbf=_0x312bc1;this[_0x4a9cbf(0x248)]=!0x0,this['_disposeWebsocket'](_0x1a955b),this[_0x4a9cbf(0x2c5)]();},_0x1a955b[_0x312bc1(0x2b5)]=_0x5eb630=>{var _0x2133bb=_0x312bc1;try{_0x5eb630&&_0x5eb630['data']&&this['_inBrowser']&&JSON[_0x2133bb(0x231)](_0x5eb630[_0x2133bb(0x27a)])[_0x2133bb(0x2af)]==='reload'&&this[_0x2133bb(0x273)][_0x2133bb(0x27e)]['reload']();}catch{}};})['then'](_0x5c8281=>(this[_0x1f03e5(0x207)]=!0x0,this[_0x1f03e5(0x232)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x1f03e5(0x296)]=0x0,_0x5c8281))[_0x1f03e5(0x204)](_0x2e9680=>(this[_0x1f03e5(0x207)]=!0x1,this['_connecting']=!0x1,_0xe82100(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x2e9680&&_0x2e9680[_0x1f03e5(0x1ef)])))));}));}[_0x2cf5cd(0x281)](_0x196a35){var _0x2f6e0d=_0x2cf5cd;this[_0x2f6e0d(0x207)]=!0x1,this[_0x2f6e0d(0x232)]=!0x1;try{_0x196a35[_0x2f6e0d(0x2bb)]=null,_0x196a35[_0x2f6e0d(0x1f1)]=null,_0x196a35['onopen']=null;}catch{}try{_0x196a35[_0x2f6e0d(0x221)]<0x2&&_0x196a35[_0x2f6e0d(0x212)]();}catch{}}[_0x2cf5cd(0x2c5)](){var _0x610869=_0x2cf5cd;clearTimeout(this[_0x610869(0x22a)]),!(this[_0x610869(0x296)]>=this[_0x610869(0x2a8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x5d1aff=_0x610869;this[_0x5d1aff(0x207)]||this[_0x5d1aff(0x232)]||(this[_0x5d1aff(0x2a0)](),this[_0x5d1aff(0x209)]?.[_0x5d1aff(0x204)](()=>this[_0x5d1aff(0x2c5)]()));},0x1f4),this[_0x610869(0x22a)][_0x610869(0x2c4)]&&this['_reconnectTimeout'][_0x610869(0x2c4)]());}async['send'](_0x4da41b){var _0x25d38b=_0x2cf5cd;try{if(!this['_allowedToSend'])return;this[_0x25d38b(0x248)]&&this[_0x25d38b(0x2a0)](),(await this[_0x25d38b(0x209)])[_0x25d38b(0x1f2)](JSON[_0x25d38b(0x29d)](_0x4da41b));}catch(_0x284c46){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x284c46&&_0x284c46[_0x25d38b(0x1ef)])),this['_allowedToSend']=!0x1,this[_0x25d38b(0x2c5)]();}}};function V(_0xb97f7e,_0x19f69c,_0x301db6,_0x28b17b,_0x3028fb){var _0x4feedb=_0x2cf5cd;let _0xab03f1=_0x301db6[_0x4feedb(0x229)](',')[_0x4feedb(0x23f)](_0x2633fc=>{var _0x529807=_0x4feedb;try{_0xb97f7e[_0x529807(0x230)]||((_0x3028fb===_0x529807(0x283)||_0x3028fb===_0x529807(0x249)||_0x3028fb===_0x529807(0x2ac))&&(_0x3028fb+=_0xb97f7e['process']?.[_0x529807(0x2c1)]?.['node']?_0x529807(0x20d):_0x529807(0x237)),_0xb97f7e[_0x529807(0x230)]={'id':+new Date(),'tool':_0x3028fb});let _0xeb9db=new Q(_0xb97f7e,_0x19f69c,_0x2633fc,_0x28b17b);return _0xeb9db[_0x529807(0x1f2)][_0x529807(0x227)](_0xeb9db);}catch(_0x2230bd){return console[_0x529807(0x267)](_0x529807(0x22b),_0x2230bd&&_0x2230bd[_0x529807(0x1ef)]),()=>{};}});return _0x422510=>_0xab03f1[_0x4feedb(0x262)](_0x389f10=>_0x389f10(_0x422510));}function _0x2a98(){var _0x47734e=['disabledLog','_numberRegExp','autoExpandMaxDepth','undefined','unknown','Number','time','ws://','String','catch','RegExp','logger\\x20websocket\\x20error','_connected','isArray','_ws','54739014hZPxbX','1079648rjCDOH','getOwnPropertySymbols','\\x20server','_capIfString','_setNodeLabel','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','_blacklistedProperty','close','_isPrimitiveType','_p_','substr','_keyStrRegExp','error','hostname','concat','_regExpToString','61159','setter','create','_addFunctionsNode','getOwnPropertyDescriptor','_setNodeId','readyState','_Symbol','sort','depth','toString','_quotedRegExp','bind','string','split','_reconnectTimeout','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','nuxt','null','_WebSocket','_hasSymbolPropertyOnItsPath','_console_ninja_session','parse','_connecting','_additionalMetadata','...','_hasMapOnItsPath','allStrLength','\\x20browser','level','_treeNodePropertiesAfterFullValue','_p_name','timeStamp','_p_length','autoExpand','NEGATIVE_INFINITY','map','1525537RhiYyd','sortProps','pathToFileURL','_console_ninja','host','ws/index.js','_inBrowser','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_allowedToConnectOnSend','remix','current','length','1685344258094','test','totalStrLength','_property','Map','console','join','resolveGetters','serialize','HTMLAllCollection',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.129\\\\node_modules",'timeEnd','[object\\x20Set]','now','log','call','capped','getWebSocketClass','__es'+'Module','hits','stack','Boolean','forEach','expId','hrtime','1.0.0','default','warn','number','27PVbVzP','_isArray','_isSet','WebSocket','port','path','Set','valueOf','parent','count','global','constructor','_propertyName','_isMap','toLowerCase','strLength','getter','data','_dateToString','25989iNKKmv','_getOwnPropertyDescriptor','location','isExpressionToEvaluate','url','_disposeWebsocket','_cleanNode','next.js','then','index','_propertyAccessor','node','2365xiNUeo','2338510BlrUQW','unshift','cappedProps','[object\\x20Map]','remix','_WebSocketClass','_setNodeExpressionPath','performance','array','_isNegativeZero','function','[object\\x20Array]','_setNodeExpandableState','_connectAttemptCount','elapsed','_consoleNinjaAllowedToStart','props','positiveInfinity','noFunctions','push','stringify','[object\\x20Date]','root_exp_id','_connectToHostNow','nodeModules','process','_setNodePermissions','_sortProps','reduceLimits','_type','cappedElements','_maxConnectAttemptCount','argumentResolutionError','trace','elements','astro','autoExpandPreviousObjects','defineProperty','method','_socket','type','onopen','_processTreeNodeResult','_objectToString','onmessage','negativeZero','bigint','Symbol','7HexpBI','Buffer','onclose','boolean','symbol','_addLoadNode','358RbwaIx','getOwnPropertyNames','versions','autoExpandLimit','includes','unref','_attemptToReconnectShortly','_isPrimitiveWrapperType','_HTMLAllCollection','match','date','autoExpandPropertyCount','127.0.0.1','value','hasOwnProperty','_addProperty','set','prototype','negativeInfinity','object','5054958GGLzRP','message','9436aEdZNf','onerror','send','_addObjectProperty','name','stackTraceLimit','_allowedToSend','_setNodeQueryPath','expressionsToEvaluate','_getOwnPropertySymbols','_treeNodePropertiesBeforeFullValue'];_0x2a98=function(){return _0x47734e;};return _0x2a98();}function H(_0x45561e){var _0x534322=_0x2cf5cd;let _0x3f152c=function(_0x148806,_0x5ef6f9){return _0x5ef6f9-_0x148806;},_0x50eaf0;if(_0x45561e[_0x534322(0x290)])_0x50eaf0=function(){var _0x376037=_0x534322;return _0x45561e[_0x376037(0x290)][_0x376037(0x259)]();};else{if(_0x45561e[_0x534322(0x2a2)]&&_0x45561e['process'][_0x534322(0x264)])_0x50eaf0=function(){var _0x3938fb=_0x534322;return _0x45561e[_0x3938fb(0x2a2)][_0x3938fb(0x264)]();},_0x3f152c=function(_0x4d6428,_0x24c728){return 0x3e8*(_0x24c728[0x0]-_0x4d6428[0x0])+(_0x24c728[0x1]-_0x4d6428[0x1])/0xf4240;};else try{let {performance:_0x2c50fd}=require('perf_hooks');_0x50eaf0=function(){var _0x39ffd2=_0x534322;return _0x2c50fd[_0x39ffd2(0x259)]();};}catch{_0x50eaf0=function(){return+new Date();};}}return{'elapsed':_0x3f152c,'timeStamp':_0x50eaf0,'now':()=>Date[_0x534322(0x259)]()};}function X(_0x1f6729,_0x5c6190,_0x217af5){var _0x126b42=_0x2cf5cd;if(_0x1f6729['_consoleNinjaAllowedToStart']!==void 0x0)return _0x1f6729[_0x126b42(0x298)];let _0xe76fa6=_0x1f6729[_0x126b42(0x2a2)]?.[_0x126b42(0x2c1)]?.['node'];return _0xe76fa6&&_0x217af5===_0x126b42(0x22c)?_0x1f6729['_consoleNinjaAllowedToStart']=!0x1:_0x1f6729[_0x126b42(0x298)]=_0xe76fa6||!_0x5c6190||_0x1f6729['location']?.[_0x126b42(0x218)]&&_0x5c6190[_0x126b42(0x2c3)](_0x1f6729[_0x126b42(0x27e)][_0x126b42(0x218)]),_0x1f6729[_0x126b42(0x298)];}function _0x40be(_0x15e1bb,_0x1a4e5d){var _0x2a98f1=_0x2a98();return _0x40be=function(_0x40be20,_0x4701b9){_0x40be20=_0x40be20-0x1e3;var _0x3331c5=_0x2a98f1[_0x40be20];return _0x3331c5;},_0x40be(_0x15e1bb,_0x1a4e5d);}((_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548,_0x2b2eb2,_0x1b70b3,_0x41ce87,_0x40492c)=>{var _0xaf924a=_0x2cf5cd;if(_0x49b204[_0xaf924a(0x243)])return _0x49b204[_0xaf924a(0x243)];if(!X(_0x49b204,_0x41ce87,_0x489548))return _0x49b204['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x49b204[_0xaf924a(0x243)];let _0xf0b388={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5b35fa={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x505e5e=H(_0x49b204),_0x254ab2=_0x505e5e[_0xaf924a(0x297)],_0x4a93d3=_0x505e5e[_0xaf924a(0x23b)],_0xe1d997=_0x505e5e[_0xaf924a(0x259)],_0x47a49a={'hits':{},'ts':{}},_0x2cbc42=_0x1a66cf=>{_0x47a49a['ts'][_0x1a66cf]=_0x4a93d3();},_0x40058f=(_0x55f653,_0x438427)=>{let _0x25052b=_0x47a49a['ts'][_0x438427];if(delete _0x47a49a['ts'][_0x438427],_0x25052b){let _0x4bcb71=_0x254ab2(_0x25052b,_0x4a93d3());_0x1a6309(_0x195f4e('time',_0x55f653,_0xe1d997(),_0xe5069f,[_0x4bcb71],_0x438427));}},_0x1cf403=_0x391d70=>_0x34ff71=>{var _0x545190=_0xaf924a;try{_0x2cbc42(_0x34ff71),_0x391d70(_0x34ff71);}finally{_0x49b204[_0x545190(0x251)][_0x545190(0x201)]=_0x391d70;}},_0x162ea0=_0x434010=>_0x2d8916=>{var _0x386e10=_0xaf924a;try{let [_0x4df1d3,_0x22fa1a]=_0x2d8916[_0x386e10(0x229)](':logPointId:');_0x40058f(_0x22fa1a,_0x4df1d3),_0x434010(_0x4df1d3);}finally{_0x49b204['console'][_0x386e10(0x257)]=_0x434010;}};_0x49b204[_0xaf924a(0x243)]={'consoleLog':(_0x467987,_0x342fa0)=>{var _0x37d8e1=_0xaf924a;_0x49b204[_0x37d8e1(0x251)]['log']['name']!==_0x37d8e1(0x1fb)&&_0x1a6309(_0x195f4e(_0x37d8e1(0x25a),_0x467987,_0xe1d997(),_0xe5069f,_0x342fa0));},'consoleTrace':(_0x4f9b55,_0x2c5df8)=>{var _0x409a8a=_0xaf924a;_0x49b204[_0x409a8a(0x251)]['log'][_0x409a8a(0x1f4)]!=='disabledTrace'&&_0x1a6309(_0x195f4e('trace',_0x4f9b55,_0xe1d997(),_0xe5069f,_0x2c5df8));},'consoleTime':()=>{var _0x372b3c=_0xaf924a;_0x49b204[_0x372b3c(0x251)][_0x372b3c(0x201)]=_0x1cf403(_0x49b204[_0x372b3c(0x251)]['time']);},'consoleTimeEnd':()=>{var _0x49bb97=_0xaf924a;_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]=_0x162ea0(_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]);},'autoLog':(_0x108d5f,_0x4cf9ca)=>{var _0x16ba00=_0xaf924a;_0x1a6309(_0x195f4e(_0x16ba00(0x25a),_0x4cf9ca,_0xe1d997(),_0xe5069f,[_0x108d5f]));},'autoTrace':(_0x1e46d6,_0x2c00ce)=>{var _0x54ceaa=_0xaf924a;_0x1a6309(_0x195f4e(_0x54ceaa(0x2aa),_0x2c00ce,_0xe1d997(),_0xe5069f,[_0x1e46d6]));},'autoTime':(_0x296ec5,_0x4d05a6,_0xae7de0)=>{_0x2cbc42(_0xae7de0);},'autoTimeEnd':(_0x4787e8,_0x45534c,_0x282ccd)=>{_0x40058f(_0x45534c,_0x282ccd);}};let _0x1a6309=V(_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548),_0xe5069f=_0x49b204[_0xaf924a(0x230)];class _0x3ea185{constructor(){var _0x8f3991=_0xaf924a;this[_0x8f3991(0x216)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x49b204['undefined'],this[_0x8f3991(0x2c7)]=_0x49b204[_0x8f3991(0x255)],this['_getOwnPropertyDescriptor']=Object[_0x8f3991(0x21f)],this['_getOwnPropertyNames']=Object[_0x8f3991(0x2c0)],this['_Symbol']=_0x49b204[_0x8f3991(0x2b8)],this[_0x8f3991(0x21a)]=RegExp[_0x8f3991(0x1eb)][_0x8f3991(0x225)],this[_0x8f3991(0x27b)]=Date[_0x8f3991(0x1eb)][_0x8f3991(0x225)];}[_0xaf924a(0x254)](_0x1ffbdf,_0x261664,_0x1119b9,_0x220a1b){var _0x35a28c=_0xaf924a,_0x2b5b13=this,_0xb5b34f=_0x1119b9[_0x35a28c(0x23d)];function _0x3e7ce9(_0x18896a,_0x17698b,_0x102b14){var _0x587cf5=_0x35a28c;_0x17698b['type']=_0x587cf5(0x1ff),_0x17698b[_0x587cf5(0x217)]=_0x18896a['message'],_0x1c9374=_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)],_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)]=_0x17698b,_0x2b5b13['_treeNodePropertiesBeforeFullValue'](_0x17698b,_0x102b14);}if(_0x261664&&_0x261664[_0x35a28c(0x2a9)])_0x3e7ce9(_0x261664,_0x1ffbdf,_0x1119b9);else try{_0x1119b9[_0x35a28c(0x238)]++,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x2ad)][_0x35a28c(0x29c)](_0x261664);var _0x4abe4f,_0x4d7716,_0x16f780,_0x4f50fc,_0x4c3fd8=[],_0x2e94bd=[],_0x107b8f,_0x1a262d=this[_0x35a28c(0x2a6)](_0x261664),_0xec7933=_0x1a262d==='array',_0x48c47a=!0x1,_0x55a62b=_0x1a262d===_0x35a28c(0x293),_0x5dd4e0=this[_0x35a28c(0x213)](_0x1a262d),_0x482298=this[_0x35a28c(0x2c6)](_0x1a262d),_0x164aa8=_0x5dd4e0||_0x482298,_0x1739c6={},_0x2d507c=0x0,_0x18b048=!0x1,_0x1c9374,_0xeccd3f=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1119b9[_0x35a28c(0x224)]){if(_0xec7933){if(_0x4d7716=_0x261664[_0x35a28c(0x24b)],_0x4d7716>_0x1119b9[_0x35a28c(0x2ab)]){for(_0x16f780=0x0,_0x4f50fc=_0x1119b9[_0x35a28c(0x2ab)],_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));_0x1ffbdf[_0x35a28c(0x2a7)]=!0x0;}else{for(_0x16f780=0x0,_0x4f50fc=_0x4d7716,_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));}_0x1119b9['autoExpandPropertyCount']+=_0x2e94bd['length'];}if(!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&!_0x5dd4e0&&_0x1a262d!==_0x35a28c(0x203)&&_0x1a262d!==_0x35a28c(0x2ba)&&_0x1a262d!==_0x35a28c(0x2b7)){var _0x2ae62d=_0x220a1b[_0x35a28c(0x299)]||_0x1119b9[_0x35a28c(0x299)];if(this[_0x35a28c(0x26b)](_0x261664)?(_0x4abe4f=0x0,_0x261664['forEach'](function(_0x46649f){var _0x15a7b7=_0x35a28c;if(_0x2d507c++,_0x1119b9[_0x15a7b7(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x15a7b7(0x27f)]&&_0x1119b9['autoExpand']&&_0x1119b9[_0x15a7b7(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;return;}_0x2e94bd[_0x15a7b7(0x29c)](_0x2b5b13[_0x15a7b7(0x1e9)](_0x4c3fd8,_0x261664,'Set',_0x4abe4f++,_0x1119b9,function(_0x5c98b8){return function(){return _0x5c98b8;};}(_0x46649f)));})):this[_0x35a28c(0x276)](_0x261664)&&_0x261664['forEach'](function(_0x8ca25,_0x4c3572){var _0x1bfdfd=_0x35a28c;if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x1bfdfd(0x27f)]&&_0x1119b9[_0x1bfdfd(0x23d)]&&_0x1119b9['autoExpandPropertyCount']>_0x1119b9[_0x1bfdfd(0x2c2)]){_0x18b048=!0x0;return;}var _0x4873de=_0x4c3572['toString']();_0x4873de[_0x1bfdfd(0x24b)]>0x64&&(_0x4873de=_0x4873de['slice'](0x0,0x64)+_0x1bfdfd(0x234)),_0x2e94bd[_0x1bfdfd(0x29c)](_0x2b5b13[_0x1bfdfd(0x1e9)](_0x4c3fd8,_0x261664,_0x1bfdfd(0x250),_0x4873de,_0x1119b9,function(_0x1cdb70){return function(){return _0x1cdb70;};}(_0x8ca25)));}),!_0x48c47a){try{for(_0x107b8f in _0x261664)if(!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)){if(_0x2d507c++,_0x1119b9[_0x35a28c(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9[_0x35a28c(0x2c2)]){_0x18b048=!0x0;break;}_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}catch{}if(_0x1739c6[_0x35a28c(0x23c)]=!0x0,_0x55a62b&&(_0x1739c6[_0x35a28c(0x23a)]=!0x0),!_0x18b048){var _0x155fac=[][_0x35a28c(0x219)](this['_getOwnPropertyNames'](_0x261664))['concat'](this[_0x35a28c(0x1f9)](_0x261664));for(_0x4abe4f=0x0,_0x4d7716=_0x155fac[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)if(_0x107b8f=_0x155fac[_0x4abe4f],!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f['toString']()))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)&&!_0x1739c6[_0x35a28c(0x214)+_0x107b8f[_0x35a28c(0x225)]()]){if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;break;}_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}}}}if(_0x1ffbdf[_0x35a28c(0x2b1)]=_0x1a262d,_0x164aa8?(_0x1ffbdf[_0x35a28c(0x1e7)]=_0x261664[_0x35a28c(0x270)](),this[_0x35a28c(0x20e)](_0x1a262d,_0x1ffbdf,_0x1119b9,_0x220a1b)):_0x1a262d===_0x35a28c(0x1e4)?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x27b)][_0x35a28c(0x25b)](_0x261664):_0x1a262d===_0x35a28c(0x205)?_0x1ffbdf[_0x35a28c(0x1e7)]=this['_regExpToString']['call'](_0x261664):_0x1a262d===_0x35a28c(0x2bd)&&this['_Symbol']?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x222)][_0x35a28c(0x1eb)][_0x35a28c(0x225)][_0x35a28c(0x25b)](_0x261664):!_0x1119b9[_0x35a28c(0x224)]&&!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&(delete _0x1ffbdf[_0x35a28c(0x1e7)],_0x1ffbdf[_0x35a28c(0x25c)]=!0x0),_0x18b048&&(_0x1ffbdf[_0x35a28c(0x28b)]=!0x0),_0x1c9374=_0x1119b9[_0x35a28c(0x287)]['current'],_0x1119b9[_0x35a28c(0x287)][_0x35a28c(0x24a)]=_0x1ffbdf,this[_0x35a28c(0x1fa)](_0x1ffbdf,_0x1119b9),_0x2e94bd[_0x35a28c(0x24b)]){for(_0x4abe4f=0x0,_0x4d7716=_0x2e94bd[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)_0x2e94bd[_0x4abe4f](_0x4abe4f);}_0x4c3fd8[_0x35a28c(0x24b)]&&(_0x1ffbdf['props']=_0x4c3fd8);}catch(_0x5acfee){_0x3e7ce9(_0x5acfee,_0x1ffbdf,_0x1119b9);}return this[_0x35a28c(0x233)](_0x261664,_0x1ffbdf),this[_0x35a28c(0x239)](_0x1ffbdf,_0x1119b9),_0x1119b9['node'][_0x35a28c(0x24a)]=_0x1c9374,_0x1119b9[_0x35a28c(0x238)]--,_0x1119b9['autoExpand']=_0xb5b34f,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9['autoExpandPreviousObjects']['pop'](),_0x1ffbdf;}[_0xaf924a(0x1f9)](_0x26b81e){var _0x33466c=_0xaf924a;return Object[_0x33466c(0x20c)]?Object[_0x33466c(0x20c)](_0x26b81e):[];}[_0xaf924a(0x26b)](_0x3fbc47){var _0x1986bd=_0xaf924a;return!!(_0x3fbc47&&_0x49b204[_0x1986bd(0x26f)]&&this[_0x1986bd(0x2b4)](_0x3fbc47)===_0x1986bd(0x258)&&_0x3fbc47[_0x1986bd(0x262)]);}[_0xaf924a(0x211)](_0x1ab315,_0x21ebf2,_0x470340){var _0x48210a=_0xaf924a;return _0x470340[_0x48210a(0x29b)]?typeof _0x1ab315[_0x21ebf2]==_0x48210a(0x293):!0x1;}['_type'](_0x5dcb54){var _0x3d62dd=_0xaf924a,_0x2fc396='';return _0x2fc396=typeof _0x5dcb54,_0x2fc396==='object'?this['_objectToString'](_0x5dcb54)===_0x3d62dd(0x294)?_0x2fc396=_0x3d62dd(0x291):this[_0x3d62dd(0x2b4)](_0x5dcb54)===_0x3d62dd(0x29e)?_0x2fc396=_0x3d62dd(0x1e4):_0x5dcb54===null?_0x2fc396='null':_0x5dcb54[_0x3d62dd(0x274)]&&(_0x2fc396=_0x5dcb54['constructor'][_0x3d62dd(0x1f4)]||_0x2fc396):_0x2fc396===_0x3d62dd(0x1fe)&&this['_HTMLAllCollection']&&_0x5dcb54 instanceof this[_0x3d62dd(0x2c7)]&&(_0x2fc396=_0x3d62dd(0x255)),_0x2fc396;}['_objectToString'](_0x141c18){var _0x3ac2dc=_0xaf924a;return Object['prototype'][_0x3ac2dc(0x225)][_0x3ac2dc(0x25b)](_0x141c18);}[_0xaf924a(0x213)](_0x5a457d){var _0x597d85=_0xaf924a;return _0x5a457d===_0x597d85(0x2bc)||_0x5a457d===_0x597d85(0x228)||_0x5a457d===_0x597d85(0x268);}[_0xaf924a(0x2c6)](_0x5898cf){var _0x3157c0=_0xaf924a;return _0x5898cf===_0x3157c0(0x261)||_0x5898cf===_0x3157c0(0x203)||_0x5898cf==='Number';}['_addProperty'](_0x5245f8,_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048){var _0x4f3373=this;return function(_0x6f86d0){var _0x55b709=_0x40be,_0x497a8c=_0x34b2c2[_0x55b709(0x287)]['current'],_0x401bcb=_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)],_0x4e8dba=_0x34b2c2['node'][_0x55b709(0x271)];_0x34b2c2[_0x55b709(0x287)]['parent']=_0x497a8c,_0x34b2c2[_0x55b709(0x287)]['index']=typeof _0x2ef032==_0x55b709(0x268)?_0x2ef032:_0x6f86d0,_0x5245f8['push'](_0x4f3373[_0x55b709(0x24f)](_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048)),_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x271)]=_0x4e8dba,_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)]=_0x401bcb;};}[_0xaf924a(0x1f3)](_0x1d7c25,_0x5b8b24,_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3){var _0xd780f0=_0xaf924a,_0x8addf0=this;return _0x5b8b24[_0xd780f0(0x214)+_0x1e6ee4[_0xd780f0(0x225)]()]=!0x0,function(_0x239d6b){var _0x1443cd=_0xd780f0,_0x4df5e1=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x24a)],_0x540e10=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)],_0x2915bc=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)];_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)]=_0x4df5e1,_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)]=_0x239d6b,_0x1d7c25[_0x1443cd(0x29c)](_0x8addf0[_0x1443cd(0x24f)](_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3)),_0x3b78cf['node'][_0x1443cd(0x271)]=_0x2915bc,_0x3b78cf[_0x1443cd(0x287)]['index']=_0x540e10;};}[_0xaf924a(0x24f)](_0x2dc156,_0x84e3c9,_0x3d7e0f,_0x50afce,_0x126c84){var _0x8fb306=_0xaf924a,_0x57d1bb=this;_0x126c84||(_0x126c84=function(_0x277ab9,_0x4edfaa){return _0x277ab9[_0x4edfaa];});var _0x4d7cfe=_0x3d7e0f[_0x8fb306(0x225)](),_0x338741=_0x50afce[_0x8fb306(0x1f8)]||{},_0x135349=_0x50afce[_0x8fb306(0x224)],_0x3fc65a=_0x50afce[_0x8fb306(0x27f)];try{var _0x141963=this['_isMap'](_0x2dc156),_0x31060d=_0x4d7cfe;_0x141963&&_0x31060d[0x0]==='\\x27'&&(_0x31060d=_0x31060d['substr'](0x1,_0x31060d['length']-0x2));var _0x2b079a=_0x50afce[_0x8fb306(0x1f8)]=_0x338741['_p_'+_0x31060d];_0x2b079a&&(_0x50afce[_0x8fb306(0x224)]=_0x50afce['depth']+0x1),_0x50afce[_0x8fb306(0x27f)]=!!_0x2b079a;var _0x15c8b0=typeof _0x3d7e0f=='symbol',_0x24ddbc={'name':_0x15c8b0||_0x141963?_0x4d7cfe:this[_0x8fb306(0x275)](_0x4d7cfe)};if(_0x15c8b0&&(_0x24ddbc[_0x8fb306(0x2bd)]=!0x0),!(_0x84e3c9===_0x8fb306(0x291)||_0x84e3c9==='Error')){var _0x431848=this[_0x8fb306(0x27d)](_0x2dc156,_0x3d7e0f);if(_0x431848&&(_0x431848[_0x8fb306(0x1ea)]&&(_0x24ddbc[_0x8fb306(0x21c)]=!0x0),_0x431848['get']&&!_0x2b079a&&!_0x50afce[_0x8fb306(0x253)]))return _0x24ddbc[_0x8fb306(0x279)]=!0x0,this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x2b3202;try{_0x2b3202=_0x126c84(_0x2dc156,_0x3d7e0f);}catch(_0x14b48e){return _0x24ddbc={'name':_0x4d7cfe,'type':'unknown','error':_0x14b48e[_0x8fb306(0x1ef)]},this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x41dc6b=this['_type'](_0x2b3202),_0x40b8f0=this[_0x8fb306(0x213)](_0x41dc6b);if(_0x24ddbc[_0x8fb306(0x2b1)]=_0x41dc6b,_0x40b8f0)this['_processTreeNodeResult'](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x559389=_0x8fb306;_0x24ddbc['value']=_0x2b3202[_0x559389(0x270)](),!_0x2b079a&&_0x57d1bb['_capIfString'](_0x41dc6b,_0x24ddbc,_0x50afce,{});});else{var _0x57f4f8=_0x50afce[_0x8fb306(0x23d)]&&_0x50afce[_0x8fb306(0x238)]<_0x50afce['autoExpandMaxDepth']&&_0x50afce[_0x8fb306(0x2ad)]['indexOf'](_0x2b3202)<0x0&&_0x41dc6b!==_0x8fb306(0x293)&&_0x50afce[_0x8fb306(0x1e5)]<_0x50afce[_0x8fb306(0x2c2)];_0x57f4f8||_0x50afce[_0x8fb306(0x238)]<_0x135349||_0x2b079a?(this[_0x8fb306(0x254)](_0x24ddbc,_0x2b3202,_0x50afce,_0x2b079a||{}),this[_0x8fb306(0x233)](_0x2b3202,_0x24ddbc)):this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x267210=_0x8fb306;_0x41dc6b===_0x267210(0x22d)||_0x41dc6b===_0x267210(0x1fe)||(delete _0x24ddbc[_0x267210(0x1e7)],_0x24ddbc[_0x267210(0x25c)]=!0x0);});}return _0x24ddbc;}finally{_0x50afce['expressionsToEvaluate']=_0x338741,_0x50afce[_0x8fb306(0x224)]=_0x135349,_0x50afce[_0x8fb306(0x27f)]=_0x3fc65a;}}[_0xaf924a(0x20e)](_0x4b62bd,_0xc40a6,_0x76d4db,_0x1bb854){var _0x2b20d2=_0xaf924a,_0x48134b=_0x1bb854['strLength']||_0x76d4db[_0x2b20d2(0x278)];if((_0x4b62bd===_0x2b20d2(0x228)||_0x4b62bd==='String')&&_0xc40a6[_0x2b20d2(0x1e7)]){let _0x489af6=_0xc40a6['value'][_0x2b20d2(0x24b)];_0x76d4db['allStrLength']+=_0x489af6,_0x76d4db[_0x2b20d2(0x236)]>_0x76d4db[_0x2b20d2(0x24e)]?(_0xc40a6[_0x2b20d2(0x25c)]='',delete _0xc40a6['value']):_0x489af6>_0x48134b&&(_0xc40a6['capped']=_0xc40a6[_0x2b20d2(0x1e7)][_0x2b20d2(0x215)](0x0,_0x48134b),delete _0xc40a6[_0x2b20d2(0x1e7)]);}}['_isMap'](_0x137793){var _0x274dce=_0xaf924a;return!!(_0x137793&&_0x49b204['Map']&&this[_0x274dce(0x2b4)](_0x137793)===_0x274dce(0x28c)&&_0x137793[_0x274dce(0x262)]);}[_0xaf924a(0x275)](_0x3b398f){var _0x3414c6=_0xaf924a;if(_0x3b398f[_0x3414c6(0x1e3)](/^\\d+$/))return _0x3b398f;var _0x3a961e;try{_0x3a961e=JSON['stringify'](''+_0x3b398f);}catch{_0x3a961e='\\x22'+this[_0x3414c6(0x2b4)](_0x3b398f)+'\\x22';}return _0x3a961e['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x3a961e=_0x3a961e[_0x3414c6(0x215)](0x1,_0x3a961e['length']-0x2):_0x3a961e=_0x3a961e['replace'](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x3a961e;}['_processTreeNodeResult'](_0x494cf3,_0x3a7130,_0x2965bb,_0x4ed090){var _0x1fc133=_0xaf924a;this[_0x1fc133(0x1fa)](_0x494cf3,_0x3a7130),_0x4ed090&&_0x4ed090(),this[_0x1fc133(0x233)](_0x2965bb,_0x494cf3),this[_0x1fc133(0x239)](_0x494cf3,_0x3a7130);}[_0xaf924a(0x1fa)](_0x8a70e8,_0x172dc9){var _0x5bfd95=_0xaf924a;this['_setNodeId'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x1f7)](_0x8a70e8,_0x172dc9),this['_setNodeExpressionPath'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x2a3)](_0x8a70e8,_0x172dc9);}[_0xaf924a(0x220)](_0x1021a5,_0x494447){}['_setNodeQueryPath'](_0x20ad16,_0x5f3886){}[_0xaf924a(0x20f)](_0x13a7a7,_0x54f993){}['_isUndefined'](_0x310d6f){return _0x310d6f===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x43c671,_0x48f11a){var _0x321c60=_0xaf924a;this[_0x321c60(0x20f)](_0x43c671,_0x48f11a),this['_setNodeExpandableState'](_0x43c671),_0x48f11a[_0x321c60(0x241)]&&this[_0x321c60(0x2a4)](_0x43c671),this[_0x321c60(0x21e)](_0x43c671,_0x48f11a),this['_addLoadNode'](_0x43c671,_0x48f11a),this[_0x321c60(0x282)](_0x43c671);}[_0xaf924a(0x233)](_0x226191,_0x58f6f1){var _0x43a02f=_0xaf924a;try{_0x226191&&typeof _0x226191[_0x43a02f(0x24b)]==_0x43a02f(0x268)&&(_0x58f6f1['length']=_0x226191[_0x43a02f(0x24b)]);}catch{}if(_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x268)||_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x200)){if(isNaN(_0x58f6f1[_0x43a02f(0x1e7)]))_0x58f6f1['nan']=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];else switch(_0x58f6f1[_0x43a02f(0x1e7)]){case Number['POSITIVE_INFINITY']:_0x58f6f1[_0x43a02f(0x29a)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case Number[_0x43a02f(0x23e)]:_0x58f6f1[_0x43a02f(0x1ec)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case 0x0:this[_0x43a02f(0x292)](_0x58f6f1[_0x43a02f(0x1e7)])&&(_0x58f6f1[_0x43a02f(0x2b6)]=!0x0);break;}}else _0x58f6f1['type']==='function'&&typeof _0x226191[_0x43a02f(0x1f4)]==_0x43a02f(0x228)&&_0x226191[_0x43a02f(0x1f4)]&&_0x58f6f1[_0x43a02f(0x1f4)]&&_0x226191['name']!==_0x58f6f1[_0x43a02f(0x1f4)]&&(_0x58f6f1['funcName']=_0x226191[_0x43a02f(0x1f4)]);}[_0xaf924a(0x292)](_0x99e5d7){var _0x5af86c=_0xaf924a;return 0x1/_0x99e5d7===Number[_0x5af86c(0x23e)];}[_0xaf924a(0x2a4)](_0x4da140){var _0x59d583=_0xaf924a;!_0x4da140[_0x59d583(0x299)]||!_0x4da140['props'][_0x59d583(0x24b)]||_0x4da140['type']===_0x59d583(0x291)||_0x4da140[_0x59d583(0x2b1)]===_0x59d583(0x250)||_0x4da140['type']===_0x59d583(0x26f)||_0x4da140[_0x59d583(0x299)][_0x59d583(0x223)](function(_0x2bca0f,_0x6aada0){var _0x433cc9=_0x59d583,_0x220ffd=_0x2bca0f[_0x433cc9(0x1f4)][_0x433cc9(0x277)](),_0x52a25d=_0x6aada0[_0x433cc9(0x1f4)][_0x433cc9(0x277)]();return _0x220ffd<_0x52a25d?-0x1:_0x220ffd>_0x52a25d?0x1:0x0;});}[_0xaf924a(0x21e)](_0x48dce4,_0x48f4c6){var _0x2678d7=_0xaf924a;if(!(_0x48f4c6['noFunctions']||!_0x48dce4[_0x2678d7(0x299)]||!_0x48dce4[_0x2678d7(0x299)]['length'])){for(var _0x279f85=[],_0x27fbf8=[],_0x58bb24=0x0,_0x1abc8f=_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x24b)];_0x58bb24<_0x1abc8f;_0x58bb24++){var _0x3caeb2=_0x48dce4['props'][_0x58bb24];_0x3caeb2[_0x2678d7(0x2b1)]===_0x2678d7(0x293)?_0x279f85[_0x2678d7(0x29c)](_0x3caeb2):_0x27fbf8[_0x2678d7(0x29c)](_0x3caeb2);}if(!(!_0x27fbf8[_0x2678d7(0x24b)]||_0x279f85[_0x2678d7(0x24b)]<=0x1)){_0x48dce4[_0x2678d7(0x299)]=_0x27fbf8;var _0xe3d941={'functionsNode':!0x0,'props':_0x279f85};this[_0x2678d7(0x220)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x20f)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x295)](_0xe3d941),this['_setNodePermissions'](_0xe3d941,_0x48f4c6),_0xe3d941['id']+='\\x20f',_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x28a)](_0xe3d941);}}}[_0xaf924a(0x2be)](_0x48eb38,_0x20f75c){}[_0xaf924a(0x295)](_0x129122){}[_0xaf924a(0x26a)](_0x1f6bb8){var _0x2820a2=_0xaf924a;return Array[_0x2820a2(0x208)](_0x1f6bb8)||typeof _0x1f6bb8==_0x2820a2(0x1ed)&&this[_0x2820a2(0x2b4)](_0x1f6bb8)===_0x2820a2(0x294);}[_0xaf924a(0x2a3)](_0x1ea391,_0x8f50b2){}['_cleanNode'](_0x52cd26){var _0x498c91=_0xaf924a;delete _0x52cd26[_0x498c91(0x22f)],delete _0x52cd26['_hasSetOnItsPath'],delete _0x52cd26[_0x498c91(0x235)];}[_0xaf924a(0x28f)](_0x5c8a9c,_0x31124f){}[_0xaf924a(0x286)](_0x2f7a58){var _0x397561=_0xaf924a;return _0x2f7a58?_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x1fc)])?'['+_0x2f7a58+']':_0x2f7a58[_0x397561(0x1e3)](this['_keyStrRegExp'])?'.'+_0x2f7a58:_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x226)])?'['+_0x2f7a58+']':'[\\x27'+_0x2f7a58+'\\x27]':'';}}let _0x3fbb82=new _0x3ea185();function _0x195f4e(_0x20dbd1,_0x567217,_0x7b3f99,_0x256338,_0x381038,_0xb947b4){var _0x5299ea=_0xaf924a;let _0xc570be,_0x171851;try{_0x171851=_0x4a93d3(),_0xc570be=_0x47a49a[_0x567217],!_0xc570be||_0x171851-_0xc570be['ts']>0x1f4&&_0xc570be[_0x5299ea(0x272)]&&_0xc570be['time']/_0xc570be[_0x5299ea(0x272)]<0x64?(_0x47a49a[_0x567217]=_0xc570be={'count':0x0,'time':0x0,'ts':_0x171851},_0x47a49a[_0x5299ea(0x25f)]={}):_0x171851-_0x47a49a[_0x5299ea(0x25f)]['ts']>0x32&&_0x47a49a['hits']['count']&&_0x47a49a[_0x5299ea(0x25f)]['time']/_0x47a49a['hits'][_0x5299ea(0x272)]<0x64&&(_0x47a49a[_0x5299ea(0x25f)]={});let _0x4ea285=[],_0x56b786=_0xc570be['reduceLimits']||_0x47a49a['hits'][_0x5299ea(0x2a5)]?_0x5b35fa:_0xf0b388,_0x3563e3=_0x51e7d1=>{var _0x2491a0=_0x5299ea;let _0x26ab25={};return _0x26ab25[_0x2491a0(0x299)]=_0x51e7d1[_0x2491a0(0x299)],_0x26ab25['elements']=_0x51e7d1['elements'],_0x26ab25['strLength']=_0x51e7d1['strLength'],_0x26ab25[_0x2491a0(0x24e)]=_0x51e7d1[_0x2491a0(0x24e)],_0x26ab25[_0x2491a0(0x2c2)]=_0x51e7d1[_0x2491a0(0x2c2)],_0x26ab25['autoExpandMaxDepth']=_0x51e7d1[_0x2491a0(0x1fd)],_0x26ab25[_0x2491a0(0x241)]=!0x1,_0x26ab25[_0x2491a0(0x29b)]=!_0x40492c,_0x26ab25[_0x2491a0(0x224)]=0x1,_0x26ab25[_0x2491a0(0x238)]=0x0,_0x26ab25[_0x2491a0(0x263)]=_0x2491a0(0x29f),_0x26ab25['rootExpression']='root_exp',_0x26ab25['autoExpand']=!0x0,_0x26ab25[_0x2491a0(0x2ad)]=[],_0x26ab25[_0x2491a0(0x1e5)]=0x0,_0x26ab25[_0x2491a0(0x253)]=!0x0,_0x26ab25['allStrLength']=0x0,_0x26ab25[_0x2491a0(0x287)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x26ab25;};for(var _0x35907a=0x0;_0x35907a<_0x381038[_0x5299ea(0x24b)];_0x35907a++)_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82['serialize']({'timeNode':_0x20dbd1===_0x5299ea(0x201)||void 0x0},_0x381038[_0x35907a],_0x3563e3(_0x56b786),{}));if(_0x20dbd1===_0x5299ea(0x2aa)){let _0xecc6de=Error[_0x5299ea(0x1f5)];try{Error[_0x5299ea(0x1f5)]=0x1/0x0,_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82[_0x5299ea(0x254)]({'stackNode':!0x0},new Error()[_0x5299ea(0x260)],_0x3563e3(_0x56b786),{'strLength':0x1/0x0}));}finally{Error[_0x5299ea(0x1f5)]=_0xecc6de;}}return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':_0x4ea285,'id':_0x567217,'context':_0xb947b4}]};}catch(_0xeea157){return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':[{'type':_0x5299ea(0x1ff),'error':_0xeea157&&_0xeea157[_0x5299ea(0x1ef)]}],'id':_0x567217,'context':_0xb947b4}]};}finally{try{if(_0xc570be&&_0x171851){let _0x5613c6=_0x4a93d3();_0xc570be[_0x5299ea(0x272)]++,_0xc570be['time']+=_0x254ab2(_0x171851,_0x5613c6),_0xc570be['ts']=_0x5613c6,_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]++,_0x47a49a['hits']['time']+=_0x254ab2(_0x171851,_0x5613c6),_0x47a49a[_0x5299ea(0x25f)]['ts']=_0x5613c6,(_0xc570be['count']>0x32||_0xc570be[_0x5299ea(0x201)]>0x64)&&(_0xc570be[_0x5299ea(0x2a5)]=!0x0),(_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]>0x3e8||_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x201)]>0x12c)&&(_0x47a49a['hits'][_0x5299ea(0x2a5)]=!0x0);}}catch{}}}return _0x49b204[_0xaf924a(0x243)];})(globalThis,_0x2cf5cd(0x1e6),_0x2cf5cd(0x21b),_0x2cf5cd(0x256),_0x2cf5cd(0x28d),_0x2cf5cd(0x265),_0x2cf5cd(0x24c),["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.7"],'');`
      )
    );
  } catch {}
}
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch {}
  return v;
}

// app/services/session.server.ts
var { getSession, commitSession, destroySession } = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    secrets: ['r3m1xr0ck5'],
    sameSite: 'lax',
    maxAge: 43200,
    secure: !0,
  },
});
async function getUserSession(request) {
  return (await getSession(request.headers.get('Cookie'))).get('user');
}
async function destroyUserSession(request) {
  let session = await getSession(request.headers.get('Cookie')),
    external_id = session.get('user').external_id,
    discourse = await logout(external_id);
  return (discourse == null ? void 0 : discourse.status) === 200
    ? await destroySession(session, { sameSite: 'lax' })
    : null;
}
async function login(request, next, redirectTo) {
  let session = await getSession(request.headers.get('Cookie'));
  if (!session.get('user')) {
    let url = await redirectDiscourse(request.url);
    session.set('success-redirect', { redirectTo });
    let headers2 = {
      'set-cookie': await commitSession(session, { sameSite: 'lax' }),
    };
    return (0, import_server_runtime.redirect)(url, { headers: headers2 });
  }
  return next(session);
}

// app/styles/globalStyle.css
var globalStyle_default = '/build/_assets/globalStyle-YFR3FNZH.css';

// app/styles/tailwind.css
var tailwind_default = '/build/_assets/tailwind-LCEPVLRX.css';

// app/root.tsx
var import_react_littera2 = require('@assembless/react-littera'),
  import_recoil = require('recoil'),
  import_framer_motion = require('framer-motion');

// app/services/db.server.ts
var import_client = require('@prisma/client'),
  db;
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
      username,
    },
    include: {
      likedPost: !0,
      preference: !0,
    },
  });
}
async function getUser(id) {
  if (!id) return null;
  try {
    return await db.user.findUnique({
      where: {
        id,
      },
      include: {
        likedPost: !0,
        preference: !0,
      },
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
            theme: 'light',
            language: 'en',
          },
        },
      },
    });
  } catch (e) {
    return 'user Cannot be created' + e;
  }
}

// app/component/UI/Button.tsx
var import_remix_utils = require('remix-utils'),
  import_jsx_runtime3 = require('react/jsx-runtime'),
  Button = ({ label = '', ...props }) => {
    let color = props.type === 'submit' ? 'bg-green-400' : 'bg-gray-300',
      disabled = props.disabled === null ? !1 : props.disabled,
      textColor = props.type === 'submit' ? 'text-white' : 'text-black';
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_remix_utils.ClientOnly, {
      fallback: '<button/>',
      children: () =>
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)('button', {
          className: `${color} ${textColor} cursor-pointer px-3 py-2 text-xs font-medium text-center  rounded-lg  focus:ring-4 focus:outline-none`,
          disabled,
          ...props,
          children: label,
        }),
    });
  };

// app/component/UI/globalLoader.tsx
var import_react2 = require('@remix-run/react'),
  import_jsx_runtime4 = require('react/jsx-runtime');
function GlobalLoading() {
  let active = (0, import_react2.useNavigation)().state !== 'idle';
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)('div', {
    role: 'progressbar',
    'aria-valuetext': active ? 'Loading' : void 0,
    'aria-hidden': !active,
    className: `
         pointer-events-none fixed left-0 bottom-0 z-50 p-4 transition-all duration-500 ease-out ${
           active ? 'translate-y-0' : 'translate-y-full'
         }`,
    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)('svg', {
      className: 'h-7 w-7 animate-spin',
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      width: '1em',
      height: '1em',
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)('circle', {
          className: 'stroke-blue-600/25',
          cx: 12,
          cy: 12,
          r: 10,
          strokeWidth: 4,
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)('path', {
          className: 'fill-blue-600',
          d: 'M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
        }),
      ],
    }),
  });
}

// app/component/UI/Loader.tsx
var import_react3 = require('react'),
  import_jsx_runtime5 = require('react/jsx-runtime');
function Loader() {
  let [progress, setProgress] = (0, import_react3.useState)(0);
  (0, import_react3.useEffect)(() => {
    let interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 98) {
          let newProgress = prevProgress + 1;
          return newProgress === 100 && clearInterval(interval), newProgress;
        }
        return prevProgress;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);
  let width = (progress / 100) * 100;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)('div', {
    className: 'bg-gray-200 rounded-full w-64',
    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)('div', {
      className: 'bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full',
      style: { width: `${width}%` },
      children: `${Math.floor(progress)}%`,
    }),
  });
}
var Loader_default = Loader;

// app/component/UI/MustLoggedIn.tsx
var import_react4 = require('@remix-run/react');

// app/locales/useLitteraTranslations.ts
var import_react_littera = require('@assembless/react-littera');

// app/assets/locale/en.json
var en_default = {
  language: 'Language',
  search: 'Search',
  searchText: 'Search Text',
  comment: 'Comment',
  question: 'Question',
  filter: 'Filter',
  fontSize: 'Font size',
  reply: 'Reply',
  replies: 'Replies',
  login: 'log in',
  signup: 'sign up',
  logout: 'log out',
};

// app/assets/locale/bo.json
var bo_default = {
  language: '\u0F66\u0F90\u0F51\u0F0B\u0F61\u0F72\u0F42\u0F0B',
  search: '\u0F60\u0F5A\u0F7C\u0F63\u0F0D',
  searchText: '\u0F54\u0F51\u0F0B\u0F46\u0F0B\u0F60\u0F5A\u0F7C\u0F63\u0F0D',
  comment: '\u0F60\u0F42\u0FB2\u0F7A\u0F63\u0F0B\u0F54\u0F0D',
  question: '\u0F51\u0FB2\u0F72\u0F0B\u0F56\u0F0D',
  filter: '\u0F5A\u0F42\u0F66\u0F0D',
  fontSize:
    '\u0F61\u0F72\u0F42\u0F0B\u0F42\u0F5F\u0F74\u0F42\u0F66\u0F0B\u0F46\u0F7A\u0F0B\u0F46\u0F74\u0F44\u0FB2\u0F0D',
  reply: '\u0F63\u0F53\u0F0D',
  replies: '\u0F63\u0F53\u0F0D',
  login: '\u0F53\u0F44\u0F0B\u0F60\u0F5B\u0F74\u0F63\u0F0D',
  signup: '\u0F50\u0F7C\u0F0B\u0F60\u0F42\u0F7C\u0F51\u0F0D',
  logout: '\u0F55\u0FB1\u0F72\u0F62\u0F0B\u0F50\u0F7C\u0F53\u0F0D',
};

// app/locales/useLitteraTranslations.ts
var translationCodes = [
  { code: 'en_US', name: 'English' },
  { code: 'bo_TI', name: '\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42' },
];
function translationList() {
  let translations = en_default;
  for (let key in en_default)
    translations = {
      ...translations,
      [key]: {
        en_US: en_default[key],
        bo_TI: bo_default.hasOwnProperty(key) ? bo_default[key] : en_default[key],
      },
    };
  return translations;
}
function uselitteraTranlation() {
  let translations = translationList();
  return (0, import_react_littera.useLittera)(translations);
}

// app/component/UI/MustLoggedIn.tsx
var import_jsx_runtime6 = require('react/jsx-runtime');
function LogInMessage() {
  let loginFetcher = (0, import_react4.useFetcher)(),
    redirectTo = (0, import_react4.useLocation)().pathname,
    translation = uselitteraTranlation();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)('div', {
    id: 'toast-success',
    className:
      'flex items-center w-full  p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800',
    role: 'alert',
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)('div', {
        className:
          'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200',
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)('svg', {
            'aria-hidden': 'true',
            className: 'w-5 h-5',
            fill: 'currentColor',
            viewBox: '0 0 20 20',
            xmlns: 'http://www.w3.org/2000/svg',
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)('path', {
              fillRule: 'evenodd',
              d: 'M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z',
              clipRule: 'evenodd',
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)('span', { className: 'sr-only', children: 'Warning icon' }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(loginFetcher.Form, {
        method: 'POST',
        id: 'login',
        action: '/auth/login',
        className: 'flex items-center ml-3 text-sm font-normal',
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)('input', {
            type: 'hidden',
            name: 'redirectTo',
            defaultValue: redirectTo,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)('button', {
            type: 'submit',
            name: '_action',
            value: 'login',
            className: 'text-sm font-medium leading-tight text-gray-900 capitalize dark:text-white',
            children: ['click to ', translation.login],
          }),
        ],
      }),
    ],
  });
}

// app/component/UI/Progress.tsx
var import_react5 = require('react');
var import_jsx_runtime7 = require('react/jsx-runtime');
function ProgressBar() {
  let [scrollPercentage, setScrollPercentage] = (0, import_react5.useState)(0),
    handleScroll = () => {
      let container = document == null ? void 0 : document.getElementById('textEditorContainer');
      if (container) {
        let fullHeight = container.scrollHeight - window.innerHeight,
          progress = ((container.scrollTop + container.clientHeight - window.innerHeight + 60) / fullHeight) * 100;
        setScrollPercentage(() => Math.floor(progress));
      }
    };
  return (
    (0, import_react5.useEffect)(() => {
      let container = document == null ? void 0 : document.getElementById('textEditorContainer');
      return (
        container && container.addEventListener('scroll', handleScroll),
        () => {
          container && container.removeEventListener('scroll', handleScroll);
        }
      );
    }, []),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)('div', {
      className: 'w-full rounded-full h-1.5  ',
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)('div', {
        style: { width: `${scrollPercentage}%`, height: 2 },
        className: 'bg-blue-600 rounded-full dark:bg-blue-500',
      }),
    })
  );
}

// app/component/UI/Skeleton.tsx
var import_flowbite_react = require('flowbite-react'),
  import_jsx_runtime8 = require('react/jsx-runtime');
function Skeleton({ height, number }) {
  let items = Array.from({ length: number }, (_, index) => index + 1);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)('div', {
    role: 'status',
    className: 'flex flex-col space-y-3.5 w-full h-full animate-pulse',
    children: [
      items.map((l, index) =>
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_flowbite_react.Card,
          {
            className: ' bg-gray-200 rounded-sm dark:bg-gray-700 w-full mb-2.5',
            style: { height },
          },
          'skeleton' + index
        )
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)('span', { className: 'sr-only', children: 'Loading...' }),
    ],
  });
}

// app/component/UI/TextArea.tsx
var import_react6 = require('react'),
  import_jsx_runtime9 = require('react/jsx-runtime'),
  TextArea = (props, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)('textarea', {
      ref,
      ...props,
      className:
        'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
    }),
  TextArea_default = (0, import_react6.forwardRef)(TextArea);

// app/component/UI/OnlineUserList/index.tsx
var import_react7 = require('react'),
  import_react_notifications_component = require('react-notifications-component'),
  import_jsx_runtime10 = require('react/jsx-runtime'),
  OnlineUsers = ({ onlineMembers, count }) =>
    count < 1
      ? null
      : /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_notifications_component.ReactNotifications, {}),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)('div', {
              className: 'fixed bottom-2 right-2 p-2 z-50 bg-green-200 rounded',
              children:
                onlineMembers &&
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)('div', {
                  className: 'flex gap-2',
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)('div', { children: [' online: ', count] }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)('div', {
                      className: 'flex -space-x-4',
                      children: onlineMembers.map(([id, info]) =>
                        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                          'img',
                          {
                            title: info.username,
                            className: 'w-6 h-6 border-2 border-white rounded-full dark:border-gray-800',
                            src: info.avatarUrl,
                            alt: '',
                          },
                          id
                        )
                      ),
                    }),
                  ],
                }),
            }),
          ],
        }),
  OnlineUserList_default = (0, import_react7.memo)(OnlineUsers);

// node_modules/react-notifications-component/dist/theme.css
var theme_default = '/build/_assets/theme-HEKQUSZG.css';

// app/root.tsx
var import_jsx_runtime11 = require('react/jsx-runtime');
function meta() {
  return [
    { title: 'Lopenling App' },
    {
      name: 'description',
      content: 'annotation of text and discussion on budhist text',
    },
    { property: 'og:title', content: 'Lopenling App' },
  ];
}
var loader = async ({ request }) => {
  let userSession = await getUserSession(request);
  return userSession ? { user: await getUser(userSession.id) } : { user: null };
};
function links() {
  return [
    {
      rel: 'icon',
      href: '/favicon.ico',
      type: 'image/png',
    },
    { rel: 'stylesheet', href: tailwind_default, as: 'style' },
    { rel: 'stylesheet', href: globalStyle_default, as: 'style' },
    { rel: 'stylesheet', href: theme_default, as: 'style' },
  ];
}
function ErrorBoundary() {
  let error = (0, import_react8.useRouteError)();
  return (0, import_react8.isRouteErrorResponse)(error)
    ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)('div', {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)('h1', { children: error.status }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ErrorPage, { message: error.data }),
        ],
      })
    : error instanceof Error
    ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)('div', {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ErrorPage, { message: error.message }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)('p', { children: 'The stack trace is:' }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)('p', { children: error.stack }),
        ],
      })
    : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)('h1', { children: 'Unknown Error' });
}
function App() {
  var _a, _b, _c;
  let data = (0, import_react8.useLoaderData)(),
    navigation = (0, import_react8.useNavigation)(),
    routeChanged =
      navigation.state === 'loading' && ((_a = navigation.location) == null ? void 0 : _a.pathname.includes('/text'));
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)('html', {
    className: ((_c = (_b = data.user) == null ? void 0 : _b.preference) == null ? void 0 : _c.theme) || 'light',
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)('head', {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react8.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)('link', {
            href: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css',
            rel: 'stylesheet',
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react8.Links, {}),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)('body', {
        className:
          'relative dark:bg-gray-600 dark:text-white  scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100',
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_littera2.LitteraProvider, {
            locales: ['en_US', 'bo_TI'],
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_framer_motion.AnimatePresence, {
              mode: 'wait',
              initial: !1,
              children: routeChanged
                ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)('div', {
                    style: { height: '100vh' },
                    className: 'w-full flex justify-center items-center',
                    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Loader_default, {}),
                  })
                : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react8.Outlet, { context: { user: data.user } }),
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(GlobalLoading, {}),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react8.ScrollRestoration, {
            getKey: (location) => location.pathname,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react8.LiveReload, {}),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)('script', {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js',
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react8.Scripts, {}),
        ],
      }),
    ],
  });
}
function AppContainer() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_recoil.RecoilRoot, {
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(App, {}),
  });
}

// app/routes/api.user.preference.theme.tsx
var api_user_preference_theme_exports = {};
__export(api_user_preference_theme_exports, {
  action: () => action,
});

// app/model/preference.ts
var updateTheme = async (userId, theme2) => {
  try {
    return (
      await db.user.update({
        where: {
          id: userId,
        },
        data: {
          preference: {
            update: {
              theme: theme2,
            },
          },
        },
      }),
      theme2
    );
  } catch (e) {
    console.log(...oo_oo2('68e0e95f_0', e));
  }
};
function oo_cm2() {
  try {
    return (
      (0, eval)('globalThis._console_ninja') ||
      (0, eval)(
        `/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2cf5cd=_0x40be;(function(_0x582a6d,_0x326ed6){var _0x274fa5=_0x40be,_0x4e6359=_0x582a6d();while(!![]){try{var _0x36ca3c=parseInt(_0x274fa5(0x240))/0x1+parseInt(_0x274fa5(0x2bf))/0x2*(parseInt(_0x274fa5(0x27c))/0x3)+parseInt(_0x274fa5(0x1f0))/0x4*(parseInt(_0x274fa5(0x288))/0x5)+parseInt(_0x274fa5(0x1ee))/0x6+parseInt(_0x274fa5(0x2b9))/0x7*(parseInt(_0x274fa5(0x20b))/0x8)+parseInt(_0x274fa5(0x269))/0x9*(parseInt(_0x274fa5(0x289))/0xa)+-parseInt(_0x274fa5(0x20a))/0xb;if(_0x36ca3c===_0x326ed6)break;else _0x4e6359['push'](_0x4e6359['shift']());}catch(_0x19d0c6){_0x4e6359['push'](_0x4e6359['shift']());}}}(_0x2a98,0xda71d));var ue=Object[_0x2cf5cd(0x21d)],te=Object[_0x2cf5cd(0x2ae)],he=Object[_0x2cf5cd(0x21f)],le=Object['getOwnPropertyNames'],fe=Object['getPrototypeOf'],_e=Object['prototype'][_0x2cf5cd(0x1e8)],pe=(_0x25f11f,_0x357847,_0x2ae353,_0x3d8e2d)=>{var _0x44b478=_0x2cf5cd;if(_0x357847&&typeof _0x357847=='object'||typeof _0x357847==_0x44b478(0x293)){for(let _0x4a4651 of le(_0x357847))!_e['call'](_0x25f11f,_0x4a4651)&&_0x4a4651!==_0x2ae353&&te(_0x25f11f,_0x4a4651,{'get':()=>_0x357847[_0x4a4651],'enumerable':!(_0x3d8e2d=he(_0x357847,_0x4a4651))||_0x3d8e2d['enumerable']});}return _0x25f11f;},ne=(_0x806e83,_0x70843c,_0x15e02d)=>(_0x15e02d=_0x806e83!=null?ue(fe(_0x806e83)):{},pe(_0x70843c||!_0x806e83||!_0x806e83[_0x2cf5cd(0x25e)]?te(_0x15e02d,_0x2cf5cd(0x266),{'value':_0x806e83,'enumerable':!0x0}):_0x15e02d,_0x806e83)),Q=class{constructor(_0x59b92d,_0x2a3a9d,_0x559130,_0x18aff8){var _0x19135f=_0x2cf5cd;this[_0x19135f(0x273)]=_0x59b92d,this[_0x19135f(0x244)]=_0x2a3a9d,this[_0x19135f(0x26d)]=_0x559130,this[_0x19135f(0x2a1)]=_0x18aff8,this[_0x19135f(0x1f6)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x19135f(0x207)]=!0x1,this['_connecting']=!0x1,this[_0x19135f(0x246)]=!!this['global'][_0x19135f(0x26c)],this[_0x19135f(0x28e)]=null,this[_0x19135f(0x296)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_sendErrorMessage']=this[_0x19135f(0x246)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help':_0x19135f(0x210);}async[_0x2cf5cd(0x25d)](){var _0x423475=_0x2cf5cd;if(this['_WebSocketClass'])return this[_0x423475(0x28e)];let _0x28fd87;if(this['_inBrowser'])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x26c)];else{if(this[_0x423475(0x273)][_0x423475(0x2a2)]?.[_0x423475(0x22e)])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x2a2)]?.['_WebSocket'];else try{let _0x4e350b=await import(_0x423475(0x26e));_0x28fd87=(await import((await import(_0x423475(0x280)))[_0x423475(0x242)](_0x4e350b[_0x423475(0x252)](this[_0x423475(0x2a1)],_0x423475(0x245)))[_0x423475(0x225)]()))['default'];}catch{try{_0x28fd87=require(require(_0x423475(0x26e))[_0x423475(0x252)](this[_0x423475(0x2a1)],'ws'));}catch{throw new Error(_0x423475(0x247));}}}return this[_0x423475(0x28e)]=_0x28fd87,_0x28fd87;}[_0x2cf5cd(0x2a0)](){var _0x299e02=_0x2cf5cd;this[_0x299e02(0x232)]||this['_connected']||this['_connectAttemptCount']>=this[_0x299e02(0x2a8)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x299e02(0x232)]=!0x0,this['_connectAttemptCount']++,this[_0x299e02(0x209)]=new Promise((_0x323901,_0xe82100)=>{var _0x1f03e5=_0x299e02;this[_0x1f03e5(0x25d)]()[_0x1f03e5(0x284)](_0x289f22=>{var _0x312bc1=_0x1f03e5;let _0x1a955b=new _0x289f22(_0x312bc1(0x202)+this['host']+':'+this[_0x312bc1(0x26d)]);_0x1a955b[_0x312bc1(0x1f1)]=()=>{var _0x491c98=_0x312bc1;this['_allowedToSend']=!0x1,this[_0x491c98(0x281)](_0x1a955b),this[_0x491c98(0x2c5)](),_0xe82100(new Error(_0x491c98(0x206)));},_0x1a955b[_0x312bc1(0x2b2)]=()=>{var _0x496f4e=_0x312bc1;this[_0x496f4e(0x246)]||_0x1a955b['_socket']&&_0x1a955b[_0x496f4e(0x2b0)]['unref']&&_0x1a955b[_0x496f4e(0x2b0)]['unref'](),_0x323901(_0x1a955b);},_0x1a955b['onclose']=()=>{var _0x4a9cbf=_0x312bc1;this[_0x4a9cbf(0x248)]=!0x0,this['_disposeWebsocket'](_0x1a955b),this[_0x4a9cbf(0x2c5)]();},_0x1a955b[_0x312bc1(0x2b5)]=_0x5eb630=>{var _0x2133bb=_0x312bc1;try{_0x5eb630&&_0x5eb630['data']&&this['_inBrowser']&&JSON[_0x2133bb(0x231)](_0x5eb630[_0x2133bb(0x27a)])[_0x2133bb(0x2af)]==='reload'&&this[_0x2133bb(0x273)][_0x2133bb(0x27e)]['reload']();}catch{}};})['then'](_0x5c8281=>(this[_0x1f03e5(0x207)]=!0x0,this[_0x1f03e5(0x232)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x1f03e5(0x296)]=0x0,_0x5c8281))[_0x1f03e5(0x204)](_0x2e9680=>(this[_0x1f03e5(0x207)]=!0x1,this['_connecting']=!0x1,_0xe82100(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x2e9680&&_0x2e9680[_0x1f03e5(0x1ef)])))));}));}[_0x2cf5cd(0x281)](_0x196a35){var _0x2f6e0d=_0x2cf5cd;this[_0x2f6e0d(0x207)]=!0x1,this[_0x2f6e0d(0x232)]=!0x1;try{_0x196a35[_0x2f6e0d(0x2bb)]=null,_0x196a35[_0x2f6e0d(0x1f1)]=null,_0x196a35['onopen']=null;}catch{}try{_0x196a35[_0x2f6e0d(0x221)]<0x2&&_0x196a35[_0x2f6e0d(0x212)]();}catch{}}[_0x2cf5cd(0x2c5)](){var _0x610869=_0x2cf5cd;clearTimeout(this[_0x610869(0x22a)]),!(this[_0x610869(0x296)]>=this[_0x610869(0x2a8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x5d1aff=_0x610869;this[_0x5d1aff(0x207)]||this[_0x5d1aff(0x232)]||(this[_0x5d1aff(0x2a0)](),this[_0x5d1aff(0x209)]?.[_0x5d1aff(0x204)](()=>this[_0x5d1aff(0x2c5)]()));},0x1f4),this[_0x610869(0x22a)][_0x610869(0x2c4)]&&this['_reconnectTimeout'][_0x610869(0x2c4)]());}async['send'](_0x4da41b){var _0x25d38b=_0x2cf5cd;try{if(!this['_allowedToSend'])return;this[_0x25d38b(0x248)]&&this[_0x25d38b(0x2a0)](),(await this[_0x25d38b(0x209)])[_0x25d38b(0x1f2)](JSON[_0x25d38b(0x29d)](_0x4da41b));}catch(_0x284c46){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x284c46&&_0x284c46[_0x25d38b(0x1ef)])),this['_allowedToSend']=!0x1,this[_0x25d38b(0x2c5)]();}}};function V(_0xb97f7e,_0x19f69c,_0x301db6,_0x28b17b,_0x3028fb){var _0x4feedb=_0x2cf5cd;let _0xab03f1=_0x301db6[_0x4feedb(0x229)](',')[_0x4feedb(0x23f)](_0x2633fc=>{var _0x529807=_0x4feedb;try{_0xb97f7e[_0x529807(0x230)]||((_0x3028fb===_0x529807(0x283)||_0x3028fb===_0x529807(0x249)||_0x3028fb===_0x529807(0x2ac))&&(_0x3028fb+=_0xb97f7e['process']?.[_0x529807(0x2c1)]?.['node']?_0x529807(0x20d):_0x529807(0x237)),_0xb97f7e[_0x529807(0x230)]={'id':+new Date(),'tool':_0x3028fb});let _0xeb9db=new Q(_0xb97f7e,_0x19f69c,_0x2633fc,_0x28b17b);return _0xeb9db[_0x529807(0x1f2)][_0x529807(0x227)](_0xeb9db);}catch(_0x2230bd){return console[_0x529807(0x267)](_0x529807(0x22b),_0x2230bd&&_0x2230bd[_0x529807(0x1ef)]),()=>{};}});return _0x422510=>_0xab03f1[_0x4feedb(0x262)](_0x389f10=>_0x389f10(_0x422510));}function _0x2a98(){var _0x47734e=['disabledLog','_numberRegExp','autoExpandMaxDepth','undefined','unknown','Number','time','ws://','String','catch','RegExp','logger\\x20websocket\\x20error','_connected','isArray','_ws','54739014hZPxbX','1079648rjCDOH','getOwnPropertySymbols','\\x20server','_capIfString','_setNodeLabel','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','_blacklistedProperty','close','_isPrimitiveType','_p_','substr','_keyStrRegExp','error','hostname','concat','_regExpToString','61159','setter','create','_addFunctionsNode','getOwnPropertyDescriptor','_setNodeId','readyState','_Symbol','sort','depth','toString','_quotedRegExp','bind','string','split','_reconnectTimeout','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','nuxt','null','_WebSocket','_hasSymbolPropertyOnItsPath','_console_ninja_session','parse','_connecting','_additionalMetadata','...','_hasMapOnItsPath','allStrLength','\\x20browser','level','_treeNodePropertiesAfterFullValue','_p_name','timeStamp','_p_length','autoExpand','NEGATIVE_INFINITY','map','1525537RhiYyd','sortProps','pathToFileURL','_console_ninja','host','ws/index.js','_inBrowser','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_allowedToConnectOnSend','remix','current','length','1685344258094','test','totalStrLength','_property','Map','console','join','resolveGetters','serialize','HTMLAllCollection',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.129\\\\node_modules",'timeEnd','[object\\x20Set]','now','log','call','capped','getWebSocketClass','__es'+'Module','hits','stack','Boolean','forEach','expId','hrtime','1.0.0','default','warn','number','27PVbVzP','_isArray','_isSet','WebSocket','port','path','Set','valueOf','parent','count','global','constructor','_propertyName','_isMap','toLowerCase','strLength','getter','data','_dateToString','25989iNKKmv','_getOwnPropertyDescriptor','location','isExpressionToEvaluate','url','_disposeWebsocket','_cleanNode','next.js','then','index','_propertyAccessor','node','2365xiNUeo','2338510BlrUQW','unshift','cappedProps','[object\\x20Map]','remix','_WebSocketClass','_setNodeExpressionPath','performance','array','_isNegativeZero','function','[object\\x20Array]','_setNodeExpandableState','_connectAttemptCount','elapsed','_consoleNinjaAllowedToStart','props','positiveInfinity','noFunctions','push','stringify','[object\\x20Date]','root_exp_id','_connectToHostNow','nodeModules','process','_setNodePermissions','_sortProps','reduceLimits','_type','cappedElements','_maxConnectAttemptCount','argumentResolutionError','trace','elements','astro','autoExpandPreviousObjects','defineProperty','method','_socket','type','onopen','_processTreeNodeResult','_objectToString','onmessage','negativeZero','bigint','Symbol','7HexpBI','Buffer','onclose','boolean','symbol','_addLoadNode','358RbwaIx','getOwnPropertyNames','versions','autoExpandLimit','includes','unref','_attemptToReconnectShortly','_isPrimitiveWrapperType','_HTMLAllCollection','match','date','autoExpandPropertyCount','127.0.0.1','value','hasOwnProperty','_addProperty','set','prototype','negativeInfinity','object','5054958GGLzRP','message','9436aEdZNf','onerror','send','_addObjectProperty','name','stackTraceLimit','_allowedToSend','_setNodeQueryPath','expressionsToEvaluate','_getOwnPropertySymbols','_treeNodePropertiesBeforeFullValue'];_0x2a98=function(){return _0x47734e;};return _0x2a98();}function H(_0x45561e){var _0x534322=_0x2cf5cd;let _0x3f152c=function(_0x148806,_0x5ef6f9){return _0x5ef6f9-_0x148806;},_0x50eaf0;if(_0x45561e[_0x534322(0x290)])_0x50eaf0=function(){var _0x376037=_0x534322;return _0x45561e[_0x376037(0x290)][_0x376037(0x259)]();};else{if(_0x45561e[_0x534322(0x2a2)]&&_0x45561e['process'][_0x534322(0x264)])_0x50eaf0=function(){var _0x3938fb=_0x534322;return _0x45561e[_0x3938fb(0x2a2)][_0x3938fb(0x264)]();},_0x3f152c=function(_0x4d6428,_0x24c728){return 0x3e8*(_0x24c728[0x0]-_0x4d6428[0x0])+(_0x24c728[0x1]-_0x4d6428[0x1])/0xf4240;};else try{let {performance:_0x2c50fd}=require('perf_hooks');_0x50eaf0=function(){var _0x39ffd2=_0x534322;return _0x2c50fd[_0x39ffd2(0x259)]();};}catch{_0x50eaf0=function(){return+new Date();};}}return{'elapsed':_0x3f152c,'timeStamp':_0x50eaf0,'now':()=>Date[_0x534322(0x259)]()};}function X(_0x1f6729,_0x5c6190,_0x217af5){var _0x126b42=_0x2cf5cd;if(_0x1f6729['_consoleNinjaAllowedToStart']!==void 0x0)return _0x1f6729[_0x126b42(0x298)];let _0xe76fa6=_0x1f6729[_0x126b42(0x2a2)]?.[_0x126b42(0x2c1)]?.['node'];return _0xe76fa6&&_0x217af5===_0x126b42(0x22c)?_0x1f6729['_consoleNinjaAllowedToStart']=!0x1:_0x1f6729[_0x126b42(0x298)]=_0xe76fa6||!_0x5c6190||_0x1f6729['location']?.[_0x126b42(0x218)]&&_0x5c6190[_0x126b42(0x2c3)](_0x1f6729[_0x126b42(0x27e)][_0x126b42(0x218)]),_0x1f6729[_0x126b42(0x298)];}function _0x40be(_0x15e1bb,_0x1a4e5d){var _0x2a98f1=_0x2a98();return _0x40be=function(_0x40be20,_0x4701b9){_0x40be20=_0x40be20-0x1e3;var _0x3331c5=_0x2a98f1[_0x40be20];return _0x3331c5;},_0x40be(_0x15e1bb,_0x1a4e5d);}((_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548,_0x2b2eb2,_0x1b70b3,_0x41ce87,_0x40492c)=>{var _0xaf924a=_0x2cf5cd;if(_0x49b204[_0xaf924a(0x243)])return _0x49b204[_0xaf924a(0x243)];if(!X(_0x49b204,_0x41ce87,_0x489548))return _0x49b204['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x49b204[_0xaf924a(0x243)];let _0xf0b388={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5b35fa={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x505e5e=H(_0x49b204),_0x254ab2=_0x505e5e[_0xaf924a(0x297)],_0x4a93d3=_0x505e5e[_0xaf924a(0x23b)],_0xe1d997=_0x505e5e[_0xaf924a(0x259)],_0x47a49a={'hits':{},'ts':{}},_0x2cbc42=_0x1a66cf=>{_0x47a49a['ts'][_0x1a66cf]=_0x4a93d3();},_0x40058f=(_0x55f653,_0x438427)=>{let _0x25052b=_0x47a49a['ts'][_0x438427];if(delete _0x47a49a['ts'][_0x438427],_0x25052b){let _0x4bcb71=_0x254ab2(_0x25052b,_0x4a93d3());_0x1a6309(_0x195f4e('time',_0x55f653,_0xe1d997(),_0xe5069f,[_0x4bcb71],_0x438427));}},_0x1cf403=_0x391d70=>_0x34ff71=>{var _0x545190=_0xaf924a;try{_0x2cbc42(_0x34ff71),_0x391d70(_0x34ff71);}finally{_0x49b204[_0x545190(0x251)][_0x545190(0x201)]=_0x391d70;}},_0x162ea0=_0x434010=>_0x2d8916=>{var _0x386e10=_0xaf924a;try{let [_0x4df1d3,_0x22fa1a]=_0x2d8916[_0x386e10(0x229)](':logPointId:');_0x40058f(_0x22fa1a,_0x4df1d3),_0x434010(_0x4df1d3);}finally{_0x49b204['console'][_0x386e10(0x257)]=_0x434010;}};_0x49b204[_0xaf924a(0x243)]={'consoleLog':(_0x467987,_0x342fa0)=>{var _0x37d8e1=_0xaf924a;_0x49b204[_0x37d8e1(0x251)]['log']['name']!==_0x37d8e1(0x1fb)&&_0x1a6309(_0x195f4e(_0x37d8e1(0x25a),_0x467987,_0xe1d997(),_0xe5069f,_0x342fa0));},'consoleTrace':(_0x4f9b55,_0x2c5df8)=>{var _0x409a8a=_0xaf924a;_0x49b204[_0x409a8a(0x251)]['log'][_0x409a8a(0x1f4)]!=='disabledTrace'&&_0x1a6309(_0x195f4e('trace',_0x4f9b55,_0xe1d997(),_0xe5069f,_0x2c5df8));},'consoleTime':()=>{var _0x372b3c=_0xaf924a;_0x49b204[_0x372b3c(0x251)][_0x372b3c(0x201)]=_0x1cf403(_0x49b204[_0x372b3c(0x251)]['time']);},'consoleTimeEnd':()=>{var _0x49bb97=_0xaf924a;_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]=_0x162ea0(_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]);},'autoLog':(_0x108d5f,_0x4cf9ca)=>{var _0x16ba00=_0xaf924a;_0x1a6309(_0x195f4e(_0x16ba00(0x25a),_0x4cf9ca,_0xe1d997(),_0xe5069f,[_0x108d5f]));},'autoTrace':(_0x1e46d6,_0x2c00ce)=>{var _0x54ceaa=_0xaf924a;_0x1a6309(_0x195f4e(_0x54ceaa(0x2aa),_0x2c00ce,_0xe1d997(),_0xe5069f,[_0x1e46d6]));},'autoTime':(_0x296ec5,_0x4d05a6,_0xae7de0)=>{_0x2cbc42(_0xae7de0);},'autoTimeEnd':(_0x4787e8,_0x45534c,_0x282ccd)=>{_0x40058f(_0x45534c,_0x282ccd);}};let _0x1a6309=V(_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548),_0xe5069f=_0x49b204[_0xaf924a(0x230)];class _0x3ea185{constructor(){var _0x8f3991=_0xaf924a;this[_0x8f3991(0x216)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x49b204['undefined'],this[_0x8f3991(0x2c7)]=_0x49b204[_0x8f3991(0x255)],this['_getOwnPropertyDescriptor']=Object[_0x8f3991(0x21f)],this['_getOwnPropertyNames']=Object[_0x8f3991(0x2c0)],this['_Symbol']=_0x49b204[_0x8f3991(0x2b8)],this[_0x8f3991(0x21a)]=RegExp[_0x8f3991(0x1eb)][_0x8f3991(0x225)],this[_0x8f3991(0x27b)]=Date[_0x8f3991(0x1eb)][_0x8f3991(0x225)];}[_0xaf924a(0x254)](_0x1ffbdf,_0x261664,_0x1119b9,_0x220a1b){var _0x35a28c=_0xaf924a,_0x2b5b13=this,_0xb5b34f=_0x1119b9[_0x35a28c(0x23d)];function _0x3e7ce9(_0x18896a,_0x17698b,_0x102b14){var _0x587cf5=_0x35a28c;_0x17698b['type']=_0x587cf5(0x1ff),_0x17698b[_0x587cf5(0x217)]=_0x18896a['message'],_0x1c9374=_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)],_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)]=_0x17698b,_0x2b5b13['_treeNodePropertiesBeforeFullValue'](_0x17698b,_0x102b14);}if(_0x261664&&_0x261664[_0x35a28c(0x2a9)])_0x3e7ce9(_0x261664,_0x1ffbdf,_0x1119b9);else try{_0x1119b9[_0x35a28c(0x238)]++,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x2ad)][_0x35a28c(0x29c)](_0x261664);var _0x4abe4f,_0x4d7716,_0x16f780,_0x4f50fc,_0x4c3fd8=[],_0x2e94bd=[],_0x107b8f,_0x1a262d=this[_0x35a28c(0x2a6)](_0x261664),_0xec7933=_0x1a262d==='array',_0x48c47a=!0x1,_0x55a62b=_0x1a262d===_0x35a28c(0x293),_0x5dd4e0=this[_0x35a28c(0x213)](_0x1a262d),_0x482298=this[_0x35a28c(0x2c6)](_0x1a262d),_0x164aa8=_0x5dd4e0||_0x482298,_0x1739c6={},_0x2d507c=0x0,_0x18b048=!0x1,_0x1c9374,_0xeccd3f=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1119b9[_0x35a28c(0x224)]){if(_0xec7933){if(_0x4d7716=_0x261664[_0x35a28c(0x24b)],_0x4d7716>_0x1119b9[_0x35a28c(0x2ab)]){for(_0x16f780=0x0,_0x4f50fc=_0x1119b9[_0x35a28c(0x2ab)],_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));_0x1ffbdf[_0x35a28c(0x2a7)]=!0x0;}else{for(_0x16f780=0x0,_0x4f50fc=_0x4d7716,_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));}_0x1119b9['autoExpandPropertyCount']+=_0x2e94bd['length'];}if(!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&!_0x5dd4e0&&_0x1a262d!==_0x35a28c(0x203)&&_0x1a262d!==_0x35a28c(0x2ba)&&_0x1a262d!==_0x35a28c(0x2b7)){var _0x2ae62d=_0x220a1b[_0x35a28c(0x299)]||_0x1119b9[_0x35a28c(0x299)];if(this[_0x35a28c(0x26b)](_0x261664)?(_0x4abe4f=0x0,_0x261664['forEach'](function(_0x46649f){var _0x15a7b7=_0x35a28c;if(_0x2d507c++,_0x1119b9[_0x15a7b7(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x15a7b7(0x27f)]&&_0x1119b9['autoExpand']&&_0x1119b9[_0x15a7b7(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;return;}_0x2e94bd[_0x15a7b7(0x29c)](_0x2b5b13[_0x15a7b7(0x1e9)](_0x4c3fd8,_0x261664,'Set',_0x4abe4f++,_0x1119b9,function(_0x5c98b8){return function(){return _0x5c98b8;};}(_0x46649f)));})):this[_0x35a28c(0x276)](_0x261664)&&_0x261664['forEach'](function(_0x8ca25,_0x4c3572){var _0x1bfdfd=_0x35a28c;if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x1bfdfd(0x27f)]&&_0x1119b9[_0x1bfdfd(0x23d)]&&_0x1119b9['autoExpandPropertyCount']>_0x1119b9[_0x1bfdfd(0x2c2)]){_0x18b048=!0x0;return;}var _0x4873de=_0x4c3572['toString']();_0x4873de[_0x1bfdfd(0x24b)]>0x64&&(_0x4873de=_0x4873de['slice'](0x0,0x64)+_0x1bfdfd(0x234)),_0x2e94bd[_0x1bfdfd(0x29c)](_0x2b5b13[_0x1bfdfd(0x1e9)](_0x4c3fd8,_0x261664,_0x1bfdfd(0x250),_0x4873de,_0x1119b9,function(_0x1cdb70){return function(){return _0x1cdb70;};}(_0x8ca25)));}),!_0x48c47a){try{for(_0x107b8f in _0x261664)if(!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)){if(_0x2d507c++,_0x1119b9[_0x35a28c(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9[_0x35a28c(0x2c2)]){_0x18b048=!0x0;break;}_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}catch{}if(_0x1739c6[_0x35a28c(0x23c)]=!0x0,_0x55a62b&&(_0x1739c6[_0x35a28c(0x23a)]=!0x0),!_0x18b048){var _0x155fac=[][_0x35a28c(0x219)](this['_getOwnPropertyNames'](_0x261664))['concat'](this[_0x35a28c(0x1f9)](_0x261664));for(_0x4abe4f=0x0,_0x4d7716=_0x155fac[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)if(_0x107b8f=_0x155fac[_0x4abe4f],!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f['toString']()))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)&&!_0x1739c6[_0x35a28c(0x214)+_0x107b8f[_0x35a28c(0x225)]()]){if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;break;}_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}}}}if(_0x1ffbdf[_0x35a28c(0x2b1)]=_0x1a262d,_0x164aa8?(_0x1ffbdf[_0x35a28c(0x1e7)]=_0x261664[_0x35a28c(0x270)](),this[_0x35a28c(0x20e)](_0x1a262d,_0x1ffbdf,_0x1119b9,_0x220a1b)):_0x1a262d===_0x35a28c(0x1e4)?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x27b)][_0x35a28c(0x25b)](_0x261664):_0x1a262d===_0x35a28c(0x205)?_0x1ffbdf[_0x35a28c(0x1e7)]=this['_regExpToString']['call'](_0x261664):_0x1a262d===_0x35a28c(0x2bd)&&this['_Symbol']?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x222)][_0x35a28c(0x1eb)][_0x35a28c(0x225)][_0x35a28c(0x25b)](_0x261664):!_0x1119b9[_0x35a28c(0x224)]&&!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&(delete _0x1ffbdf[_0x35a28c(0x1e7)],_0x1ffbdf[_0x35a28c(0x25c)]=!0x0),_0x18b048&&(_0x1ffbdf[_0x35a28c(0x28b)]=!0x0),_0x1c9374=_0x1119b9[_0x35a28c(0x287)]['current'],_0x1119b9[_0x35a28c(0x287)][_0x35a28c(0x24a)]=_0x1ffbdf,this[_0x35a28c(0x1fa)](_0x1ffbdf,_0x1119b9),_0x2e94bd[_0x35a28c(0x24b)]){for(_0x4abe4f=0x0,_0x4d7716=_0x2e94bd[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)_0x2e94bd[_0x4abe4f](_0x4abe4f);}_0x4c3fd8[_0x35a28c(0x24b)]&&(_0x1ffbdf['props']=_0x4c3fd8);}catch(_0x5acfee){_0x3e7ce9(_0x5acfee,_0x1ffbdf,_0x1119b9);}return this[_0x35a28c(0x233)](_0x261664,_0x1ffbdf),this[_0x35a28c(0x239)](_0x1ffbdf,_0x1119b9),_0x1119b9['node'][_0x35a28c(0x24a)]=_0x1c9374,_0x1119b9[_0x35a28c(0x238)]--,_0x1119b9['autoExpand']=_0xb5b34f,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9['autoExpandPreviousObjects']['pop'](),_0x1ffbdf;}[_0xaf924a(0x1f9)](_0x26b81e){var _0x33466c=_0xaf924a;return Object[_0x33466c(0x20c)]?Object[_0x33466c(0x20c)](_0x26b81e):[];}[_0xaf924a(0x26b)](_0x3fbc47){var _0x1986bd=_0xaf924a;return!!(_0x3fbc47&&_0x49b204[_0x1986bd(0x26f)]&&this[_0x1986bd(0x2b4)](_0x3fbc47)===_0x1986bd(0x258)&&_0x3fbc47[_0x1986bd(0x262)]);}[_0xaf924a(0x211)](_0x1ab315,_0x21ebf2,_0x470340){var _0x48210a=_0xaf924a;return _0x470340[_0x48210a(0x29b)]?typeof _0x1ab315[_0x21ebf2]==_0x48210a(0x293):!0x1;}['_type'](_0x5dcb54){var _0x3d62dd=_0xaf924a,_0x2fc396='';return _0x2fc396=typeof _0x5dcb54,_0x2fc396==='object'?this['_objectToString'](_0x5dcb54)===_0x3d62dd(0x294)?_0x2fc396=_0x3d62dd(0x291):this[_0x3d62dd(0x2b4)](_0x5dcb54)===_0x3d62dd(0x29e)?_0x2fc396=_0x3d62dd(0x1e4):_0x5dcb54===null?_0x2fc396='null':_0x5dcb54[_0x3d62dd(0x274)]&&(_0x2fc396=_0x5dcb54['constructor'][_0x3d62dd(0x1f4)]||_0x2fc396):_0x2fc396===_0x3d62dd(0x1fe)&&this['_HTMLAllCollection']&&_0x5dcb54 instanceof this[_0x3d62dd(0x2c7)]&&(_0x2fc396=_0x3d62dd(0x255)),_0x2fc396;}['_objectToString'](_0x141c18){var _0x3ac2dc=_0xaf924a;return Object['prototype'][_0x3ac2dc(0x225)][_0x3ac2dc(0x25b)](_0x141c18);}[_0xaf924a(0x213)](_0x5a457d){var _0x597d85=_0xaf924a;return _0x5a457d===_0x597d85(0x2bc)||_0x5a457d===_0x597d85(0x228)||_0x5a457d===_0x597d85(0x268);}[_0xaf924a(0x2c6)](_0x5898cf){var _0x3157c0=_0xaf924a;return _0x5898cf===_0x3157c0(0x261)||_0x5898cf===_0x3157c0(0x203)||_0x5898cf==='Number';}['_addProperty'](_0x5245f8,_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048){var _0x4f3373=this;return function(_0x6f86d0){var _0x55b709=_0x40be,_0x497a8c=_0x34b2c2[_0x55b709(0x287)]['current'],_0x401bcb=_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)],_0x4e8dba=_0x34b2c2['node'][_0x55b709(0x271)];_0x34b2c2[_0x55b709(0x287)]['parent']=_0x497a8c,_0x34b2c2[_0x55b709(0x287)]['index']=typeof _0x2ef032==_0x55b709(0x268)?_0x2ef032:_0x6f86d0,_0x5245f8['push'](_0x4f3373[_0x55b709(0x24f)](_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048)),_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x271)]=_0x4e8dba,_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)]=_0x401bcb;};}[_0xaf924a(0x1f3)](_0x1d7c25,_0x5b8b24,_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3){var _0xd780f0=_0xaf924a,_0x8addf0=this;return _0x5b8b24[_0xd780f0(0x214)+_0x1e6ee4[_0xd780f0(0x225)]()]=!0x0,function(_0x239d6b){var _0x1443cd=_0xd780f0,_0x4df5e1=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x24a)],_0x540e10=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)],_0x2915bc=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)];_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)]=_0x4df5e1,_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)]=_0x239d6b,_0x1d7c25[_0x1443cd(0x29c)](_0x8addf0[_0x1443cd(0x24f)](_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3)),_0x3b78cf['node'][_0x1443cd(0x271)]=_0x2915bc,_0x3b78cf[_0x1443cd(0x287)]['index']=_0x540e10;};}[_0xaf924a(0x24f)](_0x2dc156,_0x84e3c9,_0x3d7e0f,_0x50afce,_0x126c84){var _0x8fb306=_0xaf924a,_0x57d1bb=this;_0x126c84||(_0x126c84=function(_0x277ab9,_0x4edfaa){return _0x277ab9[_0x4edfaa];});var _0x4d7cfe=_0x3d7e0f[_0x8fb306(0x225)](),_0x338741=_0x50afce[_0x8fb306(0x1f8)]||{},_0x135349=_0x50afce[_0x8fb306(0x224)],_0x3fc65a=_0x50afce[_0x8fb306(0x27f)];try{var _0x141963=this['_isMap'](_0x2dc156),_0x31060d=_0x4d7cfe;_0x141963&&_0x31060d[0x0]==='\\x27'&&(_0x31060d=_0x31060d['substr'](0x1,_0x31060d['length']-0x2));var _0x2b079a=_0x50afce[_0x8fb306(0x1f8)]=_0x338741['_p_'+_0x31060d];_0x2b079a&&(_0x50afce[_0x8fb306(0x224)]=_0x50afce['depth']+0x1),_0x50afce[_0x8fb306(0x27f)]=!!_0x2b079a;var _0x15c8b0=typeof _0x3d7e0f=='symbol',_0x24ddbc={'name':_0x15c8b0||_0x141963?_0x4d7cfe:this[_0x8fb306(0x275)](_0x4d7cfe)};if(_0x15c8b0&&(_0x24ddbc[_0x8fb306(0x2bd)]=!0x0),!(_0x84e3c9===_0x8fb306(0x291)||_0x84e3c9==='Error')){var _0x431848=this[_0x8fb306(0x27d)](_0x2dc156,_0x3d7e0f);if(_0x431848&&(_0x431848[_0x8fb306(0x1ea)]&&(_0x24ddbc[_0x8fb306(0x21c)]=!0x0),_0x431848['get']&&!_0x2b079a&&!_0x50afce[_0x8fb306(0x253)]))return _0x24ddbc[_0x8fb306(0x279)]=!0x0,this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x2b3202;try{_0x2b3202=_0x126c84(_0x2dc156,_0x3d7e0f);}catch(_0x14b48e){return _0x24ddbc={'name':_0x4d7cfe,'type':'unknown','error':_0x14b48e[_0x8fb306(0x1ef)]},this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x41dc6b=this['_type'](_0x2b3202),_0x40b8f0=this[_0x8fb306(0x213)](_0x41dc6b);if(_0x24ddbc[_0x8fb306(0x2b1)]=_0x41dc6b,_0x40b8f0)this['_processTreeNodeResult'](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x559389=_0x8fb306;_0x24ddbc['value']=_0x2b3202[_0x559389(0x270)](),!_0x2b079a&&_0x57d1bb['_capIfString'](_0x41dc6b,_0x24ddbc,_0x50afce,{});});else{var _0x57f4f8=_0x50afce[_0x8fb306(0x23d)]&&_0x50afce[_0x8fb306(0x238)]<_0x50afce['autoExpandMaxDepth']&&_0x50afce[_0x8fb306(0x2ad)]['indexOf'](_0x2b3202)<0x0&&_0x41dc6b!==_0x8fb306(0x293)&&_0x50afce[_0x8fb306(0x1e5)]<_0x50afce[_0x8fb306(0x2c2)];_0x57f4f8||_0x50afce[_0x8fb306(0x238)]<_0x135349||_0x2b079a?(this[_0x8fb306(0x254)](_0x24ddbc,_0x2b3202,_0x50afce,_0x2b079a||{}),this[_0x8fb306(0x233)](_0x2b3202,_0x24ddbc)):this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x267210=_0x8fb306;_0x41dc6b===_0x267210(0x22d)||_0x41dc6b===_0x267210(0x1fe)||(delete _0x24ddbc[_0x267210(0x1e7)],_0x24ddbc[_0x267210(0x25c)]=!0x0);});}return _0x24ddbc;}finally{_0x50afce['expressionsToEvaluate']=_0x338741,_0x50afce[_0x8fb306(0x224)]=_0x135349,_0x50afce[_0x8fb306(0x27f)]=_0x3fc65a;}}[_0xaf924a(0x20e)](_0x4b62bd,_0xc40a6,_0x76d4db,_0x1bb854){var _0x2b20d2=_0xaf924a,_0x48134b=_0x1bb854['strLength']||_0x76d4db[_0x2b20d2(0x278)];if((_0x4b62bd===_0x2b20d2(0x228)||_0x4b62bd==='String')&&_0xc40a6[_0x2b20d2(0x1e7)]){let _0x489af6=_0xc40a6['value'][_0x2b20d2(0x24b)];_0x76d4db['allStrLength']+=_0x489af6,_0x76d4db[_0x2b20d2(0x236)]>_0x76d4db[_0x2b20d2(0x24e)]?(_0xc40a6[_0x2b20d2(0x25c)]='',delete _0xc40a6['value']):_0x489af6>_0x48134b&&(_0xc40a6['capped']=_0xc40a6[_0x2b20d2(0x1e7)][_0x2b20d2(0x215)](0x0,_0x48134b),delete _0xc40a6[_0x2b20d2(0x1e7)]);}}['_isMap'](_0x137793){var _0x274dce=_0xaf924a;return!!(_0x137793&&_0x49b204['Map']&&this[_0x274dce(0x2b4)](_0x137793)===_0x274dce(0x28c)&&_0x137793[_0x274dce(0x262)]);}[_0xaf924a(0x275)](_0x3b398f){var _0x3414c6=_0xaf924a;if(_0x3b398f[_0x3414c6(0x1e3)](/^\\d+$/))return _0x3b398f;var _0x3a961e;try{_0x3a961e=JSON['stringify'](''+_0x3b398f);}catch{_0x3a961e='\\x22'+this[_0x3414c6(0x2b4)](_0x3b398f)+'\\x22';}return _0x3a961e['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x3a961e=_0x3a961e[_0x3414c6(0x215)](0x1,_0x3a961e['length']-0x2):_0x3a961e=_0x3a961e['replace'](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x3a961e;}['_processTreeNodeResult'](_0x494cf3,_0x3a7130,_0x2965bb,_0x4ed090){var _0x1fc133=_0xaf924a;this[_0x1fc133(0x1fa)](_0x494cf3,_0x3a7130),_0x4ed090&&_0x4ed090(),this[_0x1fc133(0x233)](_0x2965bb,_0x494cf3),this[_0x1fc133(0x239)](_0x494cf3,_0x3a7130);}[_0xaf924a(0x1fa)](_0x8a70e8,_0x172dc9){var _0x5bfd95=_0xaf924a;this['_setNodeId'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x1f7)](_0x8a70e8,_0x172dc9),this['_setNodeExpressionPath'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x2a3)](_0x8a70e8,_0x172dc9);}[_0xaf924a(0x220)](_0x1021a5,_0x494447){}['_setNodeQueryPath'](_0x20ad16,_0x5f3886){}[_0xaf924a(0x20f)](_0x13a7a7,_0x54f993){}['_isUndefined'](_0x310d6f){return _0x310d6f===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x43c671,_0x48f11a){var _0x321c60=_0xaf924a;this[_0x321c60(0x20f)](_0x43c671,_0x48f11a),this['_setNodeExpandableState'](_0x43c671),_0x48f11a[_0x321c60(0x241)]&&this[_0x321c60(0x2a4)](_0x43c671),this[_0x321c60(0x21e)](_0x43c671,_0x48f11a),this['_addLoadNode'](_0x43c671,_0x48f11a),this[_0x321c60(0x282)](_0x43c671);}[_0xaf924a(0x233)](_0x226191,_0x58f6f1){var _0x43a02f=_0xaf924a;try{_0x226191&&typeof _0x226191[_0x43a02f(0x24b)]==_0x43a02f(0x268)&&(_0x58f6f1['length']=_0x226191[_0x43a02f(0x24b)]);}catch{}if(_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x268)||_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x200)){if(isNaN(_0x58f6f1[_0x43a02f(0x1e7)]))_0x58f6f1['nan']=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];else switch(_0x58f6f1[_0x43a02f(0x1e7)]){case Number['POSITIVE_INFINITY']:_0x58f6f1[_0x43a02f(0x29a)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case Number[_0x43a02f(0x23e)]:_0x58f6f1[_0x43a02f(0x1ec)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case 0x0:this[_0x43a02f(0x292)](_0x58f6f1[_0x43a02f(0x1e7)])&&(_0x58f6f1[_0x43a02f(0x2b6)]=!0x0);break;}}else _0x58f6f1['type']==='function'&&typeof _0x226191[_0x43a02f(0x1f4)]==_0x43a02f(0x228)&&_0x226191[_0x43a02f(0x1f4)]&&_0x58f6f1[_0x43a02f(0x1f4)]&&_0x226191['name']!==_0x58f6f1[_0x43a02f(0x1f4)]&&(_0x58f6f1['funcName']=_0x226191[_0x43a02f(0x1f4)]);}[_0xaf924a(0x292)](_0x99e5d7){var _0x5af86c=_0xaf924a;return 0x1/_0x99e5d7===Number[_0x5af86c(0x23e)];}[_0xaf924a(0x2a4)](_0x4da140){var _0x59d583=_0xaf924a;!_0x4da140[_0x59d583(0x299)]||!_0x4da140['props'][_0x59d583(0x24b)]||_0x4da140['type']===_0x59d583(0x291)||_0x4da140[_0x59d583(0x2b1)]===_0x59d583(0x250)||_0x4da140['type']===_0x59d583(0x26f)||_0x4da140[_0x59d583(0x299)][_0x59d583(0x223)](function(_0x2bca0f,_0x6aada0){var _0x433cc9=_0x59d583,_0x220ffd=_0x2bca0f[_0x433cc9(0x1f4)][_0x433cc9(0x277)](),_0x52a25d=_0x6aada0[_0x433cc9(0x1f4)][_0x433cc9(0x277)]();return _0x220ffd<_0x52a25d?-0x1:_0x220ffd>_0x52a25d?0x1:0x0;});}[_0xaf924a(0x21e)](_0x48dce4,_0x48f4c6){var _0x2678d7=_0xaf924a;if(!(_0x48f4c6['noFunctions']||!_0x48dce4[_0x2678d7(0x299)]||!_0x48dce4[_0x2678d7(0x299)]['length'])){for(var _0x279f85=[],_0x27fbf8=[],_0x58bb24=0x0,_0x1abc8f=_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x24b)];_0x58bb24<_0x1abc8f;_0x58bb24++){var _0x3caeb2=_0x48dce4['props'][_0x58bb24];_0x3caeb2[_0x2678d7(0x2b1)]===_0x2678d7(0x293)?_0x279f85[_0x2678d7(0x29c)](_0x3caeb2):_0x27fbf8[_0x2678d7(0x29c)](_0x3caeb2);}if(!(!_0x27fbf8[_0x2678d7(0x24b)]||_0x279f85[_0x2678d7(0x24b)]<=0x1)){_0x48dce4[_0x2678d7(0x299)]=_0x27fbf8;var _0xe3d941={'functionsNode':!0x0,'props':_0x279f85};this[_0x2678d7(0x220)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x20f)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x295)](_0xe3d941),this['_setNodePermissions'](_0xe3d941,_0x48f4c6),_0xe3d941['id']+='\\x20f',_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x28a)](_0xe3d941);}}}[_0xaf924a(0x2be)](_0x48eb38,_0x20f75c){}[_0xaf924a(0x295)](_0x129122){}[_0xaf924a(0x26a)](_0x1f6bb8){var _0x2820a2=_0xaf924a;return Array[_0x2820a2(0x208)](_0x1f6bb8)||typeof _0x1f6bb8==_0x2820a2(0x1ed)&&this[_0x2820a2(0x2b4)](_0x1f6bb8)===_0x2820a2(0x294);}[_0xaf924a(0x2a3)](_0x1ea391,_0x8f50b2){}['_cleanNode'](_0x52cd26){var _0x498c91=_0xaf924a;delete _0x52cd26[_0x498c91(0x22f)],delete _0x52cd26['_hasSetOnItsPath'],delete _0x52cd26[_0x498c91(0x235)];}[_0xaf924a(0x28f)](_0x5c8a9c,_0x31124f){}[_0xaf924a(0x286)](_0x2f7a58){var _0x397561=_0xaf924a;return _0x2f7a58?_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x1fc)])?'['+_0x2f7a58+']':_0x2f7a58[_0x397561(0x1e3)](this['_keyStrRegExp'])?'.'+_0x2f7a58:_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x226)])?'['+_0x2f7a58+']':'[\\x27'+_0x2f7a58+'\\x27]':'';}}let _0x3fbb82=new _0x3ea185();function _0x195f4e(_0x20dbd1,_0x567217,_0x7b3f99,_0x256338,_0x381038,_0xb947b4){var _0x5299ea=_0xaf924a;let _0xc570be,_0x171851;try{_0x171851=_0x4a93d3(),_0xc570be=_0x47a49a[_0x567217],!_0xc570be||_0x171851-_0xc570be['ts']>0x1f4&&_0xc570be[_0x5299ea(0x272)]&&_0xc570be['time']/_0xc570be[_0x5299ea(0x272)]<0x64?(_0x47a49a[_0x567217]=_0xc570be={'count':0x0,'time':0x0,'ts':_0x171851},_0x47a49a[_0x5299ea(0x25f)]={}):_0x171851-_0x47a49a[_0x5299ea(0x25f)]['ts']>0x32&&_0x47a49a['hits']['count']&&_0x47a49a[_0x5299ea(0x25f)]['time']/_0x47a49a['hits'][_0x5299ea(0x272)]<0x64&&(_0x47a49a[_0x5299ea(0x25f)]={});let _0x4ea285=[],_0x56b786=_0xc570be['reduceLimits']||_0x47a49a['hits'][_0x5299ea(0x2a5)]?_0x5b35fa:_0xf0b388,_0x3563e3=_0x51e7d1=>{var _0x2491a0=_0x5299ea;let _0x26ab25={};return _0x26ab25[_0x2491a0(0x299)]=_0x51e7d1[_0x2491a0(0x299)],_0x26ab25['elements']=_0x51e7d1['elements'],_0x26ab25['strLength']=_0x51e7d1['strLength'],_0x26ab25[_0x2491a0(0x24e)]=_0x51e7d1[_0x2491a0(0x24e)],_0x26ab25[_0x2491a0(0x2c2)]=_0x51e7d1[_0x2491a0(0x2c2)],_0x26ab25['autoExpandMaxDepth']=_0x51e7d1[_0x2491a0(0x1fd)],_0x26ab25[_0x2491a0(0x241)]=!0x1,_0x26ab25[_0x2491a0(0x29b)]=!_0x40492c,_0x26ab25[_0x2491a0(0x224)]=0x1,_0x26ab25[_0x2491a0(0x238)]=0x0,_0x26ab25[_0x2491a0(0x263)]=_0x2491a0(0x29f),_0x26ab25['rootExpression']='root_exp',_0x26ab25['autoExpand']=!0x0,_0x26ab25[_0x2491a0(0x2ad)]=[],_0x26ab25[_0x2491a0(0x1e5)]=0x0,_0x26ab25[_0x2491a0(0x253)]=!0x0,_0x26ab25['allStrLength']=0x0,_0x26ab25[_0x2491a0(0x287)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x26ab25;};for(var _0x35907a=0x0;_0x35907a<_0x381038[_0x5299ea(0x24b)];_0x35907a++)_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82['serialize']({'timeNode':_0x20dbd1===_0x5299ea(0x201)||void 0x0},_0x381038[_0x35907a],_0x3563e3(_0x56b786),{}));if(_0x20dbd1===_0x5299ea(0x2aa)){let _0xecc6de=Error[_0x5299ea(0x1f5)];try{Error[_0x5299ea(0x1f5)]=0x1/0x0,_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82[_0x5299ea(0x254)]({'stackNode':!0x0},new Error()[_0x5299ea(0x260)],_0x3563e3(_0x56b786),{'strLength':0x1/0x0}));}finally{Error[_0x5299ea(0x1f5)]=_0xecc6de;}}return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':_0x4ea285,'id':_0x567217,'context':_0xb947b4}]};}catch(_0xeea157){return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':[{'type':_0x5299ea(0x1ff),'error':_0xeea157&&_0xeea157[_0x5299ea(0x1ef)]}],'id':_0x567217,'context':_0xb947b4}]};}finally{try{if(_0xc570be&&_0x171851){let _0x5613c6=_0x4a93d3();_0xc570be[_0x5299ea(0x272)]++,_0xc570be['time']+=_0x254ab2(_0x171851,_0x5613c6),_0xc570be['ts']=_0x5613c6,_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]++,_0x47a49a['hits']['time']+=_0x254ab2(_0x171851,_0x5613c6),_0x47a49a[_0x5299ea(0x25f)]['ts']=_0x5613c6,(_0xc570be['count']>0x32||_0xc570be[_0x5299ea(0x201)]>0x64)&&(_0xc570be[_0x5299ea(0x2a5)]=!0x0),(_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]>0x3e8||_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x201)]>0x12c)&&(_0x47a49a['hits'][_0x5299ea(0x2a5)]=!0x0);}}catch{}}}return _0x49b204[_0xaf924a(0x243)];})(globalThis,_0x2cf5cd(0x1e6),_0x2cf5cd(0x21b),_0x2cf5cd(0x256),_0x2cf5cd(0x28d),_0x2cf5cd(0x265),_0x2cf5cd(0x24c),["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.7"],'');`
      )
    );
  } catch {}
}
function oo_oo2(i, ...v) {
  try {
    oo_cm2().consoleLog(i, v);
  } catch {}
  return v;
}

// app/routes/api.user.preference.theme.tsx
var action = async ({ request }) => {
  let user = await getUserSession(request),
    theme2 = (await request.formData()).get('theme');
  return await updateTheme(user.id, theme2);
};

// app/routes/api.suggestion.comment.tsx
var api_suggestion_comment_exports = {};
__export(api_suggestion_comment_exports, {
  action: () => action2,
});

// app/model/suggestionComment.ts
async function createCommentOnSuggestion(text, suggestionId, userId, audioUrl, type) {
  return await db.suggestionComment.create({
    data: {
      text,
      suggestionId,
      userId,
      audioUrl,
      type,
    },
  });
}
async function deleteCommentOnSuggestion(id) {
  return await db.suggestionComment.delete({
    where: {
      id,
    },
  });
}
async function updateCommentOnSuggestion(id, newContent, type) {
  return await db.suggestionComment.update({
    where: {
      id,
    },
    data: {
      text: newContent,
      type,
    },
  });
}

// app/services/uploadAudio.server.ts
var import_node3 = require('@remix-run/node'),
  AWS = __toESM(require('aws-sdk')),
  import_stream = require('stream'),
  AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID_PRODUCTION,
  AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY_PRODUCTION,
  BUCKET_NAME = process.env.BUCKET_NAME_PRODUCTION ?? '',
  uploadStream = ({ Key }) => {
    let s3 = new AWS.S3({
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      }),
      pass = new import_stream.PassThrough(),
      KEY_NAME = `comments/audio/${Key}`;
    return {
      writeStream: pass,
      promise: s3
        .upload({ Bucket: BUCKET_NAME, Key: KEY_NAME, Body: pass })
        .on('httpUploadProgress', function (progress) {
          console.log(...oo_oo3('dcd4ca0b_0', 'Uploaded :: ' + (progress.loaded * 100) / progress.total)) + '';
        })
        .promise(),
    };
  };
async function uploadStreamToS3(data, filename) {
  let stream = uploadStream({
    Key: filename,
  });
  return (
    await (0, import_node3.writeAsyncIterableToWritable)(data, stream.writeStream), (await stream.promise).Location
  );
}
var uploadAudio = async ({ name, filename, data }) =>
  name !== 'file' ? void 0 : await uploadStreamToS3(data, filename);
function oo_cm3() {
  try {
    return (
      (0, eval)('globalThis._console_ninja') ||
      (0, eval)(
        `/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2cf5cd=_0x40be;(function(_0x582a6d,_0x326ed6){var _0x274fa5=_0x40be,_0x4e6359=_0x582a6d();while(!![]){try{var _0x36ca3c=parseInt(_0x274fa5(0x240))/0x1+parseInt(_0x274fa5(0x2bf))/0x2*(parseInt(_0x274fa5(0x27c))/0x3)+parseInt(_0x274fa5(0x1f0))/0x4*(parseInt(_0x274fa5(0x288))/0x5)+parseInt(_0x274fa5(0x1ee))/0x6+parseInt(_0x274fa5(0x2b9))/0x7*(parseInt(_0x274fa5(0x20b))/0x8)+parseInt(_0x274fa5(0x269))/0x9*(parseInt(_0x274fa5(0x289))/0xa)+-parseInt(_0x274fa5(0x20a))/0xb;if(_0x36ca3c===_0x326ed6)break;else _0x4e6359['push'](_0x4e6359['shift']());}catch(_0x19d0c6){_0x4e6359['push'](_0x4e6359['shift']());}}}(_0x2a98,0xda71d));var ue=Object[_0x2cf5cd(0x21d)],te=Object[_0x2cf5cd(0x2ae)],he=Object[_0x2cf5cd(0x21f)],le=Object['getOwnPropertyNames'],fe=Object['getPrototypeOf'],_e=Object['prototype'][_0x2cf5cd(0x1e8)],pe=(_0x25f11f,_0x357847,_0x2ae353,_0x3d8e2d)=>{var _0x44b478=_0x2cf5cd;if(_0x357847&&typeof _0x357847=='object'||typeof _0x357847==_0x44b478(0x293)){for(let _0x4a4651 of le(_0x357847))!_e['call'](_0x25f11f,_0x4a4651)&&_0x4a4651!==_0x2ae353&&te(_0x25f11f,_0x4a4651,{'get':()=>_0x357847[_0x4a4651],'enumerable':!(_0x3d8e2d=he(_0x357847,_0x4a4651))||_0x3d8e2d['enumerable']});}return _0x25f11f;},ne=(_0x806e83,_0x70843c,_0x15e02d)=>(_0x15e02d=_0x806e83!=null?ue(fe(_0x806e83)):{},pe(_0x70843c||!_0x806e83||!_0x806e83[_0x2cf5cd(0x25e)]?te(_0x15e02d,_0x2cf5cd(0x266),{'value':_0x806e83,'enumerable':!0x0}):_0x15e02d,_0x806e83)),Q=class{constructor(_0x59b92d,_0x2a3a9d,_0x559130,_0x18aff8){var _0x19135f=_0x2cf5cd;this[_0x19135f(0x273)]=_0x59b92d,this[_0x19135f(0x244)]=_0x2a3a9d,this[_0x19135f(0x26d)]=_0x559130,this[_0x19135f(0x2a1)]=_0x18aff8,this[_0x19135f(0x1f6)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x19135f(0x207)]=!0x1,this['_connecting']=!0x1,this[_0x19135f(0x246)]=!!this['global'][_0x19135f(0x26c)],this[_0x19135f(0x28e)]=null,this[_0x19135f(0x296)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_sendErrorMessage']=this[_0x19135f(0x246)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help':_0x19135f(0x210);}async[_0x2cf5cd(0x25d)](){var _0x423475=_0x2cf5cd;if(this['_WebSocketClass'])return this[_0x423475(0x28e)];let _0x28fd87;if(this['_inBrowser'])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x26c)];else{if(this[_0x423475(0x273)][_0x423475(0x2a2)]?.[_0x423475(0x22e)])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x2a2)]?.['_WebSocket'];else try{let _0x4e350b=await import(_0x423475(0x26e));_0x28fd87=(await import((await import(_0x423475(0x280)))[_0x423475(0x242)](_0x4e350b[_0x423475(0x252)](this[_0x423475(0x2a1)],_0x423475(0x245)))[_0x423475(0x225)]()))['default'];}catch{try{_0x28fd87=require(require(_0x423475(0x26e))[_0x423475(0x252)](this[_0x423475(0x2a1)],'ws'));}catch{throw new Error(_0x423475(0x247));}}}return this[_0x423475(0x28e)]=_0x28fd87,_0x28fd87;}[_0x2cf5cd(0x2a0)](){var _0x299e02=_0x2cf5cd;this[_0x299e02(0x232)]||this['_connected']||this['_connectAttemptCount']>=this[_0x299e02(0x2a8)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x299e02(0x232)]=!0x0,this['_connectAttemptCount']++,this[_0x299e02(0x209)]=new Promise((_0x323901,_0xe82100)=>{var _0x1f03e5=_0x299e02;this[_0x1f03e5(0x25d)]()[_0x1f03e5(0x284)](_0x289f22=>{var _0x312bc1=_0x1f03e5;let _0x1a955b=new _0x289f22(_0x312bc1(0x202)+this['host']+':'+this[_0x312bc1(0x26d)]);_0x1a955b[_0x312bc1(0x1f1)]=()=>{var _0x491c98=_0x312bc1;this['_allowedToSend']=!0x1,this[_0x491c98(0x281)](_0x1a955b),this[_0x491c98(0x2c5)](),_0xe82100(new Error(_0x491c98(0x206)));},_0x1a955b[_0x312bc1(0x2b2)]=()=>{var _0x496f4e=_0x312bc1;this[_0x496f4e(0x246)]||_0x1a955b['_socket']&&_0x1a955b[_0x496f4e(0x2b0)]['unref']&&_0x1a955b[_0x496f4e(0x2b0)]['unref'](),_0x323901(_0x1a955b);},_0x1a955b['onclose']=()=>{var _0x4a9cbf=_0x312bc1;this[_0x4a9cbf(0x248)]=!0x0,this['_disposeWebsocket'](_0x1a955b),this[_0x4a9cbf(0x2c5)]();},_0x1a955b[_0x312bc1(0x2b5)]=_0x5eb630=>{var _0x2133bb=_0x312bc1;try{_0x5eb630&&_0x5eb630['data']&&this['_inBrowser']&&JSON[_0x2133bb(0x231)](_0x5eb630[_0x2133bb(0x27a)])[_0x2133bb(0x2af)]==='reload'&&this[_0x2133bb(0x273)][_0x2133bb(0x27e)]['reload']();}catch{}};})['then'](_0x5c8281=>(this[_0x1f03e5(0x207)]=!0x0,this[_0x1f03e5(0x232)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x1f03e5(0x296)]=0x0,_0x5c8281))[_0x1f03e5(0x204)](_0x2e9680=>(this[_0x1f03e5(0x207)]=!0x1,this['_connecting']=!0x1,_0xe82100(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x2e9680&&_0x2e9680[_0x1f03e5(0x1ef)])))));}));}[_0x2cf5cd(0x281)](_0x196a35){var _0x2f6e0d=_0x2cf5cd;this[_0x2f6e0d(0x207)]=!0x1,this[_0x2f6e0d(0x232)]=!0x1;try{_0x196a35[_0x2f6e0d(0x2bb)]=null,_0x196a35[_0x2f6e0d(0x1f1)]=null,_0x196a35['onopen']=null;}catch{}try{_0x196a35[_0x2f6e0d(0x221)]<0x2&&_0x196a35[_0x2f6e0d(0x212)]();}catch{}}[_0x2cf5cd(0x2c5)](){var _0x610869=_0x2cf5cd;clearTimeout(this[_0x610869(0x22a)]),!(this[_0x610869(0x296)]>=this[_0x610869(0x2a8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x5d1aff=_0x610869;this[_0x5d1aff(0x207)]||this[_0x5d1aff(0x232)]||(this[_0x5d1aff(0x2a0)](),this[_0x5d1aff(0x209)]?.[_0x5d1aff(0x204)](()=>this[_0x5d1aff(0x2c5)]()));},0x1f4),this[_0x610869(0x22a)][_0x610869(0x2c4)]&&this['_reconnectTimeout'][_0x610869(0x2c4)]());}async['send'](_0x4da41b){var _0x25d38b=_0x2cf5cd;try{if(!this['_allowedToSend'])return;this[_0x25d38b(0x248)]&&this[_0x25d38b(0x2a0)](),(await this[_0x25d38b(0x209)])[_0x25d38b(0x1f2)](JSON[_0x25d38b(0x29d)](_0x4da41b));}catch(_0x284c46){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x284c46&&_0x284c46[_0x25d38b(0x1ef)])),this['_allowedToSend']=!0x1,this[_0x25d38b(0x2c5)]();}}};function V(_0xb97f7e,_0x19f69c,_0x301db6,_0x28b17b,_0x3028fb){var _0x4feedb=_0x2cf5cd;let _0xab03f1=_0x301db6[_0x4feedb(0x229)](',')[_0x4feedb(0x23f)](_0x2633fc=>{var _0x529807=_0x4feedb;try{_0xb97f7e[_0x529807(0x230)]||((_0x3028fb===_0x529807(0x283)||_0x3028fb===_0x529807(0x249)||_0x3028fb===_0x529807(0x2ac))&&(_0x3028fb+=_0xb97f7e['process']?.[_0x529807(0x2c1)]?.['node']?_0x529807(0x20d):_0x529807(0x237)),_0xb97f7e[_0x529807(0x230)]={'id':+new Date(),'tool':_0x3028fb});let _0xeb9db=new Q(_0xb97f7e,_0x19f69c,_0x2633fc,_0x28b17b);return _0xeb9db[_0x529807(0x1f2)][_0x529807(0x227)](_0xeb9db);}catch(_0x2230bd){return console[_0x529807(0x267)](_0x529807(0x22b),_0x2230bd&&_0x2230bd[_0x529807(0x1ef)]),()=>{};}});return _0x422510=>_0xab03f1[_0x4feedb(0x262)](_0x389f10=>_0x389f10(_0x422510));}function _0x2a98(){var _0x47734e=['disabledLog','_numberRegExp','autoExpandMaxDepth','undefined','unknown','Number','time','ws://','String','catch','RegExp','logger\\x20websocket\\x20error','_connected','isArray','_ws','54739014hZPxbX','1079648rjCDOH','getOwnPropertySymbols','\\x20server','_capIfString','_setNodeLabel','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','_blacklistedProperty','close','_isPrimitiveType','_p_','substr','_keyStrRegExp','error','hostname','concat','_regExpToString','61159','setter','create','_addFunctionsNode','getOwnPropertyDescriptor','_setNodeId','readyState','_Symbol','sort','depth','toString','_quotedRegExp','bind','string','split','_reconnectTimeout','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','nuxt','null','_WebSocket','_hasSymbolPropertyOnItsPath','_console_ninja_session','parse','_connecting','_additionalMetadata','...','_hasMapOnItsPath','allStrLength','\\x20browser','level','_treeNodePropertiesAfterFullValue','_p_name','timeStamp','_p_length','autoExpand','NEGATIVE_INFINITY','map','1525537RhiYyd','sortProps','pathToFileURL','_console_ninja','host','ws/index.js','_inBrowser','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_allowedToConnectOnSend','remix','current','length','1685344258094','test','totalStrLength','_property','Map','console','join','resolveGetters','serialize','HTMLAllCollection',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.129\\\\node_modules",'timeEnd','[object\\x20Set]','now','log','call','capped','getWebSocketClass','__es'+'Module','hits','stack','Boolean','forEach','expId','hrtime','1.0.0','default','warn','number','27PVbVzP','_isArray','_isSet','WebSocket','port','path','Set','valueOf','parent','count','global','constructor','_propertyName','_isMap','toLowerCase','strLength','getter','data','_dateToString','25989iNKKmv','_getOwnPropertyDescriptor','location','isExpressionToEvaluate','url','_disposeWebsocket','_cleanNode','next.js','then','index','_propertyAccessor','node','2365xiNUeo','2338510BlrUQW','unshift','cappedProps','[object\\x20Map]','remix','_WebSocketClass','_setNodeExpressionPath','performance','array','_isNegativeZero','function','[object\\x20Array]','_setNodeExpandableState','_connectAttemptCount','elapsed','_consoleNinjaAllowedToStart','props','positiveInfinity','noFunctions','push','stringify','[object\\x20Date]','root_exp_id','_connectToHostNow','nodeModules','process','_setNodePermissions','_sortProps','reduceLimits','_type','cappedElements','_maxConnectAttemptCount','argumentResolutionError','trace','elements','astro','autoExpandPreviousObjects','defineProperty','method','_socket','type','onopen','_processTreeNodeResult','_objectToString','onmessage','negativeZero','bigint','Symbol','7HexpBI','Buffer','onclose','boolean','symbol','_addLoadNode','358RbwaIx','getOwnPropertyNames','versions','autoExpandLimit','includes','unref','_attemptToReconnectShortly','_isPrimitiveWrapperType','_HTMLAllCollection','match','date','autoExpandPropertyCount','127.0.0.1','value','hasOwnProperty','_addProperty','set','prototype','negativeInfinity','object','5054958GGLzRP','message','9436aEdZNf','onerror','send','_addObjectProperty','name','stackTraceLimit','_allowedToSend','_setNodeQueryPath','expressionsToEvaluate','_getOwnPropertySymbols','_treeNodePropertiesBeforeFullValue'];_0x2a98=function(){return _0x47734e;};return _0x2a98();}function H(_0x45561e){var _0x534322=_0x2cf5cd;let _0x3f152c=function(_0x148806,_0x5ef6f9){return _0x5ef6f9-_0x148806;},_0x50eaf0;if(_0x45561e[_0x534322(0x290)])_0x50eaf0=function(){var _0x376037=_0x534322;return _0x45561e[_0x376037(0x290)][_0x376037(0x259)]();};else{if(_0x45561e[_0x534322(0x2a2)]&&_0x45561e['process'][_0x534322(0x264)])_0x50eaf0=function(){var _0x3938fb=_0x534322;return _0x45561e[_0x3938fb(0x2a2)][_0x3938fb(0x264)]();},_0x3f152c=function(_0x4d6428,_0x24c728){return 0x3e8*(_0x24c728[0x0]-_0x4d6428[0x0])+(_0x24c728[0x1]-_0x4d6428[0x1])/0xf4240;};else try{let {performance:_0x2c50fd}=require('perf_hooks');_0x50eaf0=function(){var _0x39ffd2=_0x534322;return _0x2c50fd[_0x39ffd2(0x259)]();};}catch{_0x50eaf0=function(){return+new Date();};}}return{'elapsed':_0x3f152c,'timeStamp':_0x50eaf0,'now':()=>Date[_0x534322(0x259)]()};}function X(_0x1f6729,_0x5c6190,_0x217af5){var _0x126b42=_0x2cf5cd;if(_0x1f6729['_consoleNinjaAllowedToStart']!==void 0x0)return _0x1f6729[_0x126b42(0x298)];let _0xe76fa6=_0x1f6729[_0x126b42(0x2a2)]?.[_0x126b42(0x2c1)]?.['node'];return _0xe76fa6&&_0x217af5===_0x126b42(0x22c)?_0x1f6729['_consoleNinjaAllowedToStart']=!0x1:_0x1f6729[_0x126b42(0x298)]=_0xe76fa6||!_0x5c6190||_0x1f6729['location']?.[_0x126b42(0x218)]&&_0x5c6190[_0x126b42(0x2c3)](_0x1f6729[_0x126b42(0x27e)][_0x126b42(0x218)]),_0x1f6729[_0x126b42(0x298)];}function _0x40be(_0x15e1bb,_0x1a4e5d){var _0x2a98f1=_0x2a98();return _0x40be=function(_0x40be20,_0x4701b9){_0x40be20=_0x40be20-0x1e3;var _0x3331c5=_0x2a98f1[_0x40be20];return _0x3331c5;},_0x40be(_0x15e1bb,_0x1a4e5d);}((_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548,_0x2b2eb2,_0x1b70b3,_0x41ce87,_0x40492c)=>{var _0xaf924a=_0x2cf5cd;if(_0x49b204[_0xaf924a(0x243)])return _0x49b204[_0xaf924a(0x243)];if(!X(_0x49b204,_0x41ce87,_0x489548))return _0x49b204['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x49b204[_0xaf924a(0x243)];let _0xf0b388={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5b35fa={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x505e5e=H(_0x49b204),_0x254ab2=_0x505e5e[_0xaf924a(0x297)],_0x4a93d3=_0x505e5e[_0xaf924a(0x23b)],_0xe1d997=_0x505e5e[_0xaf924a(0x259)],_0x47a49a={'hits':{},'ts':{}},_0x2cbc42=_0x1a66cf=>{_0x47a49a['ts'][_0x1a66cf]=_0x4a93d3();},_0x40058f=(_0x55f653,_0x438427)=>{let _0x25052b=_0x47a49a['ts'][_0x438427];if(delete _0x47a49a['ts'][_0x438427],_0x25052b){let _0x4bcb71=_0x254ab2(_0x25052b,_0x4a93d3());_0x1a6309(_0x195f4e('time',_0x55f653,_0xe1d997(),_0xe5069f,[_0x4bcb71],_0x438427));}},_0x1cf403=_0x391d70=>_0x34ff71=>{var _0x545190=_0xaf924a;try{_0x2cbc42(_0x34ff71),_0x391d70(_0x34ff71);}finally{_0x49b204[_0x545190(0x251)][_0x545190(0x201)]=_0x391d70;}},_0x162ea0=_0x434010=>_0x2d8916=>{var _0x386e10=_0xaf924a;try{let [_0x4df1d3,_0x22fa1a]=_0x2d8916[_0x386e10(0x229)](':logPointId:');_0x40058f(_0x22fa1a,_0x4df1d3),_0x434010(_0x4df1d3);}finally{_0x49b204['console'][_0x386e10(0x257)]=_0x434010;}};_0x49b204[_0xaf924a(0x243)]={'consoleLog':(_0x467987,_0x342fa0)=>{var _0x37d8e1=_0xaf924a;_0x49b204[_0x37d8e1(0x251)]['log']['name']!==_0x37d8e1(0x1fb)&&_0x1a6309(_0x195f4e(_0x37d8e1(0x25a),_0x467987,_0xe1d997(),_0xe5069f,_0x342fa0));},'consoleTrace':(_0x4f9b55,_0x2c5df8)=>{var _0x409a8a=_0xaf924a;_0x49b204[_0x409a8a(0x251)]['log'][_0x409a8a(0x1f4)]!=='disabledTrace'&&_0x1a6309(_0x195f4e('trace',_0x4f9b55,_0xe1d997(),_0xe5069f,_0x2c5df8));},'consoleTime':()=>{var _0x372b3c=_0xaf924a;_0x49b204[_0x372b3c(0x251)][_0x372b3c(0x201)]=_0x1cf403(_0x49b204[_0x372b3c(0x251)]['time']);},'consoleTimeEnd':()=>{var _0x49bb97=_0xaf924a;_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]=_0x162ea0(_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]);},'autoLog':(_0x108d5f,_0x4cf9ca)=>{var _0x16ba00=_0xaf924a;_0x1a6309(_0x195f4e(_0x16ba00(0x25a),_0x4cf9ca,_0xe1d997(),_0xe5069f,[_0x108d5f]));},'autoTrace':(_0x1e46d6,_0x2c00ce)=>{var _0x54ceaa=_0xaf924a;_0x1a6309(_0x195f4e(_0x54ceaa(0x2aa),_0x2c00ce,_0xe1d997(),_0xe5069f,[_0x1e46d6]));},'autoTime':(_0x296ec5,_0x4d05a6,_0xae7de0)=>{_0x2cbc42(_0xae7de0);},'autoTimeEnd':(_0x4787e8,_0x45534c,_0x282ccd)=>{_0x40058f(_0x45534c,_0x282ccd);}};let _0x1a6309=V(_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548),_0xe5069f=_0x49b204[_0xaf924a(0x230)];class _0x3ea185{constructor(){var _0x8f3991=_0xaf924a;this[_0x8f3991(0x216)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x49b204['undefined'],this[_0x8f3991(0x2c7)]=_0x49b204[_0x8f3991(0x255)],this['_getOwnPropertyDescriptor']=Object[_0x8f3991(0x21f)],this['_getOwnPropertyNames']=Object[_0x8f3991(0x2c0)],this['_Symbol']=_0x49b204[_0x8f3991(0x2b8)],this[_0x8f3991(0x21a)]=RegExp[_0x8f3991(0x1eb)][_0x8f3991(0x225)],this[_0x8f3991(0x27b)]=Date[_0x8f3991(0x1eb)][_0x8f3991(0x225)];}[_0xaf924a(0x254)](_0x1ffbdf,_0x261664,_0x1119b9,_0x220a1b){var _0x35a28c=_0xaf924a,_0x2b5b13=this,_0xb5b34f=_0x1119b9[_0x35a28c(0x23d)];function _0x3e7ce9(_0x18896a,_0x17698b,_0x102b14){var _0x587cf5=_0x35a28c;_0x17698b['type']=_0x587cf5(0x1ff),_0x17698b[_0x587cf5(0x217)]=_0x18896a['message'],_0x1c9374=_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)],_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)]=_0x17698b,_0x2b5b13['_treeNodePropertiesBeforeFullValue'](_0x17698b,_0x102b14);}if(_0x261664&&_0x261664[_0x35a28c(0x2a9)])_0x3e7ce9(_0x261664,_0x1ffbdf,_0x1119b9);else try{_0x1119b9[_0x35a28c(0x238)]++,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x2ad)][_0x35a28c(0x29c)](_0x261664);var _0x4abe4f,_0x4d7716,_0x16f780,_0x4f50fc,_0x4c3fd8=[],_0x2e94bd=[],_0x107b8f,_0x1a262d=this[_0x35a28c(0x2a6)](_0x261664),_0xec7933=_0x1a262d==='array',_0x48c47a=!0x1,_0x55a62b=_0x1a262d===_0x35a28c(0x293),_0x5dd4e0=this[_0x35a28c(0x213)](_0x1a262d),_0x482298=this[_0x35a28c(0x2c6)](_0x1a262d),_0x164aa8=_0x5dd4e0||_0x482298,_0x1739c6={},_0x2d507c=0x0,_0x18b048=!0x1,_0x1c9374,_0xeccd3f=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1119b9[_0x35a28c(0x224)]){if(_0xec7933){if(_0x4d7716=_0x261664[_0x35a28c(0x24b)],_0x4d7716>_0x1119b9[_0x35a28c(0x2ab)]){for(_0x16f780=0x0,_0x4f50fc=_0x1119b9[_0x35a28c(0x2ab)],_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));_0x1ffbdf[_0x35a28c(0x2a7)]=!0x0;}else{for(_0x16f780=0x0,_0x4f50fc=_0x4d7716,_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));}_0x1119b9['autoExpandPropertyCount']+=_0x2e94bd['length'];}if(!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&!_0x5dd4e0&&_0x1a262d!==_0x35a28c(0x203)&&_0x1a262d!==_0x35a28c(0x2ba)&&_0x1a262d!==_0x35a28c(0x2b7)){var _0x2ae62d=_0x220a1b[_0x35a28c(0x299)]||_0x1119b9[_0x35a28c(0x299)];if(this[_0x35a28c(0x26b)](_0x261664)?(_0x4abe4f=0x0,_0x261664['forEach'](function(_0x46649f){var _0x15a7b7=_0x35a28c;if(_0x2d507c++,_0x1119b9[_0x15a7b7(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x15a7b7(0x27f)]&&_0x1119b9['autoExpand']&&_0x1119b9[_0x15a7b7(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;return;}_0x2e94bd[_0x15a7b7(0x29c)](_0x2b5b13[_0x15a7b7(0x1e9)](_0x4c3fd8,_0x261664,'Set',_0x4abe4f++,_0x1119b9,function(_0x5c98b8){return function(){return _0x5c98b8;};}(_0x46649f)));})):this[_0x35a28c(0x276)](_0x261664)&&_0x261664['forEach'](function(_0x8ca25,_0x4c3572){var _0x1bfdfd=_0x35a28c;if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x1bfdfd(0x27f)]&&_0x1119b9[_0x1bfdfd(0x23d)]&&_0x1119b9['autoExpandPropertyCount']>_0x1119b9[_0x1bfdfd(0x2c2)]){_0x18b048=!0x0;return;}var _0x4873de=_0x4c3572['toString']();_0x4873de[_0x1bfdfd(0x24b)]>0x64&&(_0x4873de=_0x4873de['slice'](0x0,0x64)+_0x1bfdfd(0x234)),_0x2e94bd[_0x1bfdfd(0x29c)](_0x2b5b13[_0x1bfdfd(0x1e9)](_0x4c3fd8,_0x261664,_0x1bfdfd(0x250),_0x4873de,_0x1119b9,function(_0x1cdb70){return function(){return _0x1cdb70;};}(_0x8ca25)));}),!_0x48c47a){try{for(_0x107b8f in _0x261664)if(!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)){if(_0x2d507c++,_0x1119b9[_0x35a28c(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9[_0x35a28c(0x2c2)]){_0x18b048=!0x0;break;}_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}catch{}if(_0x1739c6[_0x35a28c(0x23c)]=!0x0,_0x55a62b&&(_0x1739c6[_0x35a28c(0x23a)]=!0x0),!_0x18b048){var _0x155fac=[][_0x35a28c(0x219)](this['_getOwnPropertyNames'](_0x261664))['concat'](this[_0x35a28c(0x1f9)](_0x261664));for(_0x4abe4f=0x0,_0x4d7716=_0x155fac[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)if(_0x107b8f=_0x155fac[_0x4abe4f],!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f['toString']()))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)&&!_0x1739c6[_0x35a28c(0x214)+_0x107b8f[_0x35a28c(0x225)]()]){if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;break;}_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}}}}if(_0x1ffbdf[_0x35a28c(0x2b1)]=_0x1a262d,_0x164aa8?(_0x1ffbdf[_0x35a28c(0x1e7)]=_0x261664[_0x35a28c(0x270)](),this[_0x35a28c(0x20e)](_0x1a262d,_0x1ffbdf,_0x1119b9,_0x220a1b)):_0x1a262d===_0x35a28c(0x1e4)?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x27b)][_0x35a28c(0x25b)](_0x261664):_0x1a262d===_0x35a28c(0x205)?_0x1ffbdf[_0x35a28c(0x1e7)]=this['_regExpToString']['call'](_0x261664):_0x1a262d===_0x35a28c(0x2bd)&&this['_Symbol']?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x222)][_0x35a28c(0x1eb)][_0x35a28c(0x225)][_0x35a28c(0x25b)](_0x261664):!_0x1119b9[_0x35a28c(0x224)]&&!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&(delete _0x1ffbdf[_0x35a28c(0x1e7)],_0x1ffbdf[_0x35a28c(0x25c)]=!0x0),_0x18b048&&(_0x1ffbdf[_0x35a28c(0x28b)]=!0x0),_0x1c9374=_0x1119b9[_0x35a28c(0x287)]['current'],_0x1119b9[_0x35a28c(0x287)][_0x35a28c(0x24a)]=_0x1ffbdf,this[_0x35a28c(0x1fa)](_0x1ffbdf,_0x1119b9),_0x2e94bd[_0x35a28c(0x24b)]){for(_0x4abe4f=0x0,_0x4d7716=_0x2e94bd[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)_0x2e94bd[_0x4abe4f](_0x4abe4f);}_0x4c3fd8[_0x35a28c(0x24b)]&&(_0x1ffbdf['props']=_0x4c3fd8);}catch(_0x5acfee){_0x3e7ce9(_0x5acfee,_0x1ffbdf,_0x1119b9);}return this[_0x35a28c(0x233)](_0x261664,_0x1ffbdf),this[_0x35a28c(0x239)](_0x1ffbdf,_0x1119b9),_0x1119b9['node'][_0x35a28c(0x24a)]=_0x1c9374,_0x1119b9[_0x35a28c(0x238)]--,_0x1119b9['autoExpand']=_0xb5b34f,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9['autoExpandPreviousObjects']['pop'](),_0x1ffbdf;}[_0xaf924a(0x1f9)](_0x26b81e){var _0x33466c=_0xaf924a;return Object[_0x33466c(0x20c)]?Object[_0x33466c(0x20c)](_0x26b81e):[];}[_0xaf924a(0x26b)](_0x3fbc47){var _0x1986bd=_0xaf924a;return!!(_0x3fbc47&&_0x49b204[_0x1986bd(0x26f)]&&this[_0x1986bd(0x2b4)](_0x3fbc47)===_0x1986bd(0x258)&&_0x3fbc47[_0x1986bd(0x262)]);}[_0xaf924a(0x211)](_0x1ab315,_0x21ebf2,_0x470340){var _0x48210a=_0xaf924a;return _0x470340[_0x48210a(0x29b)]?typeof _0x1ab315[_0x21ebf2]==_0x48210a(0x293):!0x1;}['_type'](_0x5dcb54){var _0x3d62dd=_0xaf924a,_0x2fc396='';return _0x2fc396=typeof _0x5dcb54,_0x2fc396==='object'?this['_objectToString'](_0x5dcb54)===_0x3d62dd(0x294)?_0x2fc396=_0x3d62dd(0x291):this[_0x3d62dd(0x2b4)](_0x5dcb54)===_0x3d62dd(0x29e)?_0x2fc396=_0x3d62dd(0x1e4):_0x5dcb54===null?_0x2fc396='null':_0x5dcb54[_0x3d62dd(0x274)]&&(_0x2fc396=_0x5dcb54['constructor'][_0x3d62dd(0x1f4)]||_0x2fc396):_0x2fc396===_0x3d62dd(0x1fe)&&this['_HTMLAllCollection']&&_0x5dcb54 instanceof this[_0x3d62dd(0x2c7)]&&(_0x2fc396=_0x3d62dd(0x255)),_0x2fc396;}['_objectToString'](_0x141c18){var _0x3ac2dc=_0xaf924a;return Object['prototype'][_0x3ac2dc(0x225)][_0x3ac2dc(0x25b)](_0x141c18);}[_0xaf924a(0x213)](_0x5a457d){var _0x597d85=_0xaf924a;return _0x5a457d===_0x597d85(0x2bc)||_0x5a457d===_0x597d85(0x228)||_0x5a457d===_0x597d85(0x268);}[_0xaf924a(0x2c6)](_0x5898cf){var _0x3157c0=_0xaf924a;return _0x5898cf===_0x3157c0(0x261)||_0x5898cf===_0x3157c0(0x203)||_0x5898cf==='Number';}['_addProperty'](_0x5245f8,_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048){var _0x4f3373=this;return function(_0x6f86d0){var _0x55b709=_0x40be,_0x497a8c=_0x34b2c2[_0x55b709(0x287)]['current'],_0x401bcb=_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)],_0x4e8dba=_0x34b2c2['node'][_0x55b709(0x271)];_0x34b2c2[_0x55b709(0x287)]['parent']=_0x497a8c,_0x34b2c2[_0x55b709(0x287)]['index']=typeof _0x2ef032==_0x55b709(0x268)?_0x2ef032:_0x6f86d0,_0x5245f8['push'](_0x4f3373[_0x55b709(0x24f)](_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048)),_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x271)]=_0x4e8dba,_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)]=_0x401bcb;};}[_0xaf924a(0x1f3)](_0x1d7c25,_0x5b8b24,_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3){var _0xd780f0=_0xaf924a,_0x8addf0=this;return _0x5b8b24[_0xd780f0(0x214)+_0x1e6ee4[_0xd780f0(0x225)]()]=!0x0,function(_0x239d6b){var _0x1443cd=_0xd780f0,_0x4df5e1=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x24a)],_0x540e10=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)],_0x2915bc=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)];_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)]=_0x4df5e1,_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)]=_0x239d6b,_0x1d7c25[_0x1443cd(0x29c)](_0x8addf0[_0x1443cd(0x24f)](_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3)),_0x3b78cf['node'][_0x1443cd(0x271)]=_0x2915bc,_0x3b78cf[_0x1443cd(0x287)]['index']=_0x540e10;};}[_0xaf924a(0x24f)](_0x2dc156,_0x84e3c9,_0x3d7e0f,_0x50afce,_0x126c84){var _0x8fb306=_0xaf924a,_0x57d1bb=this;_0x126c84||(_0x126c84=function(_0x277ab9,_0x4edfaa){return _0x277ab9[_0x4edfaa];});var _0x4d7cfe=_0x3d7e0f[_0x8fb306(0x225)](),_0x338741=_0x50afce[_0x8fb306(0x1f8)]||{},_0x135349=_0x50afce[_0x8fb306(0x224)],_0x3fc65a=_0x50afce[_0x8fb306(0x27f)];try{var _0x141963=this['_isMap'](_0x2dc156),_0x31060d=_0x4d7cfe;_0x141963&&_0x31060d[0x0]==='\\x27'&&(_0x31060d=_0x31060d['substr'](0x1,_0x31060d['length']-0x2));var _0x2b079a=_0x50afce[_0x8fb306(0x1f8)]=_0x338741['_p_'+_0x31060d];_0x2b079a&&(_0x50afce[_0x8fb306(0x224)]=_0x50afce['depth']+0x1),_0x50afce[_0x8fb306(0x27f)]=!!_0x2b079a;var _0x15c8b0=typeof _0x3d7e0f=='symbol',_0x24ddbc={'name':_0x15c8b0||_0x141963?_0x4d7cfe:this[_0x8fb306(0x275)](_0x4d7cfe)};if(_0x15c8b0&&(_0x24ddbc[_0x8fb306(0x2bd)]=!0x0),!(_0x84e3c9===_0x8fb306(0x291)||_0x84e3c9==='Error')){var _0x431848=this[_0x8fb306(0x27d)](_0x2dc156,_0x3d7e0f);if(_0x431848&&(_0x431848[_0x8fb306(0x1ea)]&&(_0x24ddbc[_0x8fb306(0x21c)]=!0x0),_0x431848['get']&&!_0x2b079a&&!_0x50afce[_0x8fb306(0x253)]))return _0x24ddbc[_0x8fb306(0x279)]=!0x0,this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x2b3202;try{_0x2b3202=_0x126c84(_0x2dc156,_0x3d7e0f);}catch(_0x14b48e){return _0x24ddbc={'name':_0x4d7cfe,'type':'unknown','error':_0x14b48e[_0x8fb306(0x1ef)]},this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x41dc6b=this['_type'](_0x2b3202),_0x40b8f0=this[_0x8fb306(0x213)](_0x41dc6b);if(_0x24ddbc[_0x8fb306(0x2b1)]=_0x41dc6b,_0x40b8f0)this['_processTreeNodeResult'](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x559389=_0x8fb306;_0x24ddbc['value']=_0x2b3202[_0x559389(0x270)](),!_0x2b079a&&_0x57d1bb['_capIfString'](_0x41dc6b,_0x24ddbc,_0x50afce,{});});else{var _0x57f4f8=_0x50afce[_0x8fb306(0x23d)]&&_0x50afce[_0x8fb306(0x238)]<_0x50afce['autoExpandMaxDepth']&&_0x50afce[_0x8fb306(0x2ad)]['indexOf'](_0x2b3202)<0x0&&_0x41dc6b!==_0x8fb306(0x293)&&_0x50afce[_0x8fb306(0x1e5)]<_0x50afce[_0x8fb306(0x2c2)];_0x57f4f8||_0x50afce[_0x8fb306(0x238)]<_0x135349||_0x2b079a?(this[_0x8fb306(0x254)](_0x24ddbc,_0x2b3202,_0x50afce,_0x2b079a||{}),this[_0x8fb306(0x233)](_0x2b3202,_0x24ddbc)):this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x267210=_0x8fb306;_0x41dc6b===_0x267210(0x22d)||_0x41dc6b===_0x267210(0x1fe)||(delete _0x24ddbc[_0x267210(0x1e7)],_0x24ddbc[_0x267210(0x25c)]=!0x0);});}return _0x24ddbc;}finally{_0x50afce['expressionsToEvaluate']=_0x338741,_0x50afce[_0x8fb306(0x224)]=_0x135349,_0x50afce[_0x8fb306(0x27f)]=_0x3fc65a;}}[_0xaf924a(0x20e)](_0x4b62bd,_0xc40a6,_0x76d4db,_0x1bb854){var _0x2b20d2=_0xaf924a,_0x48134b=_0x1bb854['strLength']||_0x76d4db[_0x2b20d2(0x278)];if((_0x4b62bd===_0x2b20d2(0x228)||_0x4b62bd==='String')&&_0xc40a6[_0x2b20d2(0x1e7)]){let _0x489af6=_0xc40a6['value'][_0x2b20d2(0x24b)];_0x76d4db['allStrLength']+=_0x489af6,_0x76d4db[_0x2b20d2(0x236)]>_0x76d4db[_0x2b20d2(0x24e)]?(_0xc40a6[_0x2b20d2(0x25c)]='',delete _0xc40a6['value']):_0x489af6>_0x48134b&&(_0xc40a6['capped']=_0xc40a6[_0x2b20d2(0x1e7)][_0x2b20d2(0x215)](0x0,_0x48134b),delete _0xc40a6[_0x2b20d2(0x1e7)]);}}['_isMap'](_0x137793){var _0x274dce=_0xaf924a;return!!(_0x137793&&_0x49b204['Map']&&this[_0x274dce(0x2b4)](_0x137793)===_0x274dce(0x28c)&&_0x137793[_0x274dce(0x262)]);}[_0xaf924a(0x275)](_0x3b398f){var _0x3414c6=_0xaf924a;if(_0x3b398f[_0x3414c6(0x1e3)](/^\\d+$/))return _0x3b398f;var _0x3a961e;try{_0x3a961e=JSON['stringify'](''+_0x3b398f);}catch{_0x3a961e='\\x22'+this[_0x3414c6(0x2b4)](_0x3b398f)+'\\x22';}return _0x3a961e['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x3a961e=_0x3a961e[_0x3414c6(0x215)](0x1,_0x3a961e['length']-0x2):_0x3a961e=_0x3a961e['replace'](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x3a961e;}['_processTreeNodeResult'](_0x494cf3,_0x3a7130,_0x2965bb,_0x4ed090){var _0x1fc133=_0xaf924a;this[_0x1fc133(0x1fa)](_0x494cf3,_0x3a7130),_0x4ed090&&_0x4ed090(),this[_0x1fc133(0x233)](_0x2965bb,_0x494cf3),this[_0x1fc133(0x239)](_0x494cf3,_0x3a7130);}[_0xaf924a(0x1fa)](_0x8a70e8,_0x172dc9){var _0x5bfd95=_0xaf924a;this['_setNodeId'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x1f7)](_0x8a70e8,_0x172dc9),this['_setNodeExpressionPath'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x2a3)](_0x8a70e8,_0x172dc9);}[_0xaf924a(0x220)](_0x1021a5,_0x494447){}['_setNodeQueryPath'](_0x20ad16,_0x5f3886){}[_0xaf924a(0x20f)](_0x13a7a7,_0x54f993){}['_isUndefined'](_0x310d6f){return _0x310d6f===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x43c671,_0x48f11a){var _0x321c60=_0xaf924a;this[_0x321c60(0x20f)](_0x43c671,_0x48f11a),this['_setNodeExpandableState'](_0x43c671),_0x48f11a[_0x321c60(0x241)]&&this[_0x321c60(0x2a4)](_0x43c671),this[_0x321c60(0x21e)](_0x43c671,_0x48f11a),this['_addLoadNode'](_0x43c671,_0x48f11a),this[_0x321c60(0x282)](_0x43c671);}[_0xaf924a(0x233)](_0x226191,_0x58f6f1){var _0x43a02f=_0xaf924a;try{_0x226191&&typeof _0x226191[_0x43a02f(0x24b)]==_0x43a02f(0x268)&&(_0x58f6f1['length']=_0x226191[_0x43a02f(0x24b)]);}catch{}if(_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x268)||_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x200)){if(isNaN(_0x58f6f1[_0x43a02f(0x1e7)]))_0x58f6f1['nan']=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];else switch(_0x58f6f1[_0x43a02f(0x1e7)]){case Number['POSITIVE_INFINITY']:_0x58f6f1[_0x43a02f(0x29a)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case Number[_0x43a02f(0x23e)]:_0x58f6f1[_0x43a02f(0x1ec)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case 0x0:this[_0x43a02f(0x292)](_0x58f6f1[_0x43a02f(0x1e7)])&&(_0x58f6f1[_0x43a02f(0x2b6)]=!0x0);break;}}else _0x58f6f1['type']==='function'&&typeof _0x226191[_0x43a02f(0x1f4)]==_0x43a02f(0x228)&&_0x226191[_0x43a02f(0x1f4)]&&_0x58f6f1[_0x43a02f(0x1f4)]&&_0x226191['name']!==_0x58f6f1[_0x43a02f(0x1f4)]&&(_0x58f6f1['funcName']=_0x226191[_0x43a02f(0x1f4)]);}[_0xaf924a(0x292)](_0x99e5d7){var _0x5af86c=_0xaf924a;return 0x1/_0x99e5d7===Number[_0x5af86c(0x23e)];}[_0xaf924a(0x2a4)](_0x4da140){var _0x59d583=_0xaf924a;!_0x4da140[_0x59d583(0x299)]||!_0x4da140['props'][_0x59d583(0x24b)]||_0x4da140['type']===_0x59d583(0x291)||_0x4da140[_0x59d583(0x2b1)]===_0x59d583(0x250)||_0x4da140['type']===_0x59d583(0x26f)||_0x4da140[_0x59d583(0x299)][_0x59d583(0x223)](function(_0x2bca0f,_0x6aada0){var _0x433cc9=_0x59d583,_0x220ffd=_0x2bca0f[_0x433cc9(0x1f4)][_0x433cc9(0x277)](),_0x52a25d=_0x6aada0[_0x433cc9(0x1f4)][_0x433cc9(0x277)]();return _0x220ffd<_0x52a25d?-0x1:_0x220ffd>_0x52a25d?0x1:0x0;});}[_0xaf924a(0x21e)](_0x48dce4,_0x48f4c6){var _0x2678d7=_0xaf924a;if(!(_0x48f4c6['noFunctions']||!_0x48dce4[_0x2678d7(0x299)]||!_0x48dce4[_0x2678d7(0x299)]['length'])){for(var _0x279f85=[],_0x27fbf8=[],_0x58bb24=0x0,_0x1abc8f=_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x24b)];_0x58bb24<_0x1abc8f;_0x58bb24++){var _0x3caeb2=_0x48dce4['props'][_0x58bb24];_0x3caeb2[_0x2678d7(0x2b1)]===_0x2678d7(0x293)?_0x279f85[_0x2678d7(0x29c)](_0x3caeb2):_0x27fbf8[_0x2678d7(0x29c)](_0x3caeb2);}if(!(!_0x27fbf8[_0x2678d7(0x24b)]||_0x279f85[_0x2678d7(0x24b)]<=0x1)){_0x48dce4[_0x2678d7(0x299)]=_0x27fbf8;var _0xe3d941={'functionsNode':!0x0,'props':_0x279f85};this[_0x2678d7(0x220)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x20f)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x295)](_0xe3d941),this['_setNodePermissions'](_0xe3d941,_0x48f4c6),_0xe3d941['id']+='\\x20f',_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x28a)](_0xe3d941);}}}[_0xaf924a(0x2be)](_0x48eb38,_0x20f75c){}[_0xaf924a(0x295)](_0x129122){}[_0xaf924a(0x26a)](_0x1f6bb8){var _0x2820a2=_0xaf924a;return Array[_0x2820a2(0x208)](_0x1f6bb8)||typeof _0x1f6bb8==_0x2820a2(0x1ed)&&this[_0x2820a2(0x2b4)](_0x1f6bb8)===_0x2820a2(0x294);}[_0xaf924a(0x2a3)](_0x1ea391,_0x8f50b2){}['_cleanNode'](_0x52cd26){var _0x498c91=_0xaf924a;delete _0x52cd26[_0x498c91(0x22f)],delete _0x52cd26['_hasSetOnItsPath'],delete _0x52cd26[_0x498c91(0x235)];}[_0xaf924a(0x28f)](_0x5c8a9c,_0x31124f){}[_0xaf924a(0x286)](_0x2f7a58){var _0x397561=_0xaf924a;return _0x2f7a58?_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x1fc)])?'['+_0x2f7a58+']':_0x2f7a58[_0x397561(0x1e3)](this['_keyStrRegExp'])?'.'+_0x2f7a58:_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x226)])?'['+_0x2f7a58+']':'[\\x27'+_0x2f7a58+'\\x27]':'';}}let _0x3fbb82=new _0x3ea185();function _0x195f4e(_0x20dbd1,_0x567217,_0x7b3f99,_0x256338,_0x381038,_0xb947b4){var _0x5299ea=_0xaf924a;let _0xc570be,_0x171851;try{_0x171851=_0x4a93d3(),_0xc570be=_0x47a49a[_0x567217],!_0xc570be||_0x171851-_0xc570be['ts']>0x1f4&&_0xc570be[_0x5299ea(0x272)]&&_0xc570be['time']/_0xc570be[_0x5299ea(0x272)]<0x64?(_0x47a49a[_0x567217]=_0xc570be={'count':0x0,'time':0x0,'ts':_0x171851},_0x47a49a[_0x5299ea(0x25f)]={}):_0x171851-_0x47a49a[_0x5299ea(0x25f)]['ts']>0x32&&_0x47a49a['hits']['count']&&_0x47a49a[_0x5299ea(0x25f)]['time']/_0x47a49a['hits'][_0x5299ea(0x272)]<0x64&&(_0x47a49a[_0x5299ea(0x25f)]={});let _0x4ea285=[],_0x56b786=_0xc570be['reduceLimits']||_0x47a49a['hits'][_0x5299ea(0x2a5)]?_0x5b35fa:_0xf0b388,_0x3563e3=_0x51e7d1=>{var _0x2491a0=_0x5299ea;let _0x26ab25={};return _0x26ab25[_0x2491a0(0x299)]=_0x51e7d1[_0x2491a0(0x299)],_0x26ab25['elements']=_0x51e7d1['elements'],_0x26ab25['strLength']=_0x51e7d1['strLength'],_0x26ab25[_0x2491a0(0x24e)]=_0x51e7d1[_0x2491a0(0x24e)],_0x26ab25[_0x2491a0(0x2c2)]=_0x51e7d1[_0x2491a0(0x2c2)],_0x26ab25['autoExpandMaxDepth']=_0x51e7d1[_0x2491a0(0x1fd)],_0x26ab25[_0x2491a0(0x241)]=!0x1,_0x26ab25[_0x2491a0(0x29b)]=!_0x40492c,_0x26ab25[_0x2491a0(0x224)]=0x1,_0x26ab25[_0x2491a0(0x238)]=0x0,_0x26ab25[_0x2491a0(0x263)]=_0x2491a0(0x29f),_0x26ab25['rootExpression']='root_exp',_0x26ab25['autoExpand']=!0x0,_0x26ab25[_0x2491a0(0x2ad)]=[],_0x26ab25[_0x2491a0(0x1e5)]=0x0,_0x26ab25[_0x2491a0(0x253)]=!0x0,_0x26ab25['allStrLength']=0x0,_0x26ab25[_0x2491a0(0x287)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x26ab25;};for(var _0x35907a=0x0;_0x35907a<_0x381038[_0x5299ea(0x24b)];_0x35907a++)_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82['serialize']({'timeNode':_0x20dbd1===_0x5299ea(0x201)||void 0x0},_0x381038[_0x35907a],_0x3563e3(_0x56b786),{}));if(_0x20dbd1===_0x5299ea(0x2aa)){let _0xecc6de=Error[_0x5299ea(0x1f5)];try{Error[_0x5299ea(0x1f5)]=0x1/0x0,_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82[_0x5299ea(0x254)]({'stackNode':!0x0},new Error()[_0x5299ea(0x260)],_0x3563e3(_0x56b786),{'strLength':0x1/0x0}));}finally{Error[_0x5299ea(0x1f5)]=_0xecc6de;}}return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':_0x4ea285,'id':_0x567217,'context':_0xb947b4}]};}catch(_0xeea157){return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':[{'type':_0x5299ea(0x1ff),'error':_0xeea157&&_0xeea157[_0x5299ea(0x1ef)]}],'id':_0x567217,'context':_0xb947b4}]};}finally{try{if(_0xc570be&&_0x171851){let _0x5613c6=_0x4a93d3();_0xc570be[_0x5299ea(0x272)]++,_0xc570be['time']+=_0x254ab2(_0x171851,_0x5613c6),_0xc570be['ts']=_0x5613c6,_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]++,_0x47a49a['hits']['time']+=_0x254ab2(_0x171851,_0x5613c6),_0x47a49a[_0x5299ea(0x25f)]['ts']=_0x5613c6,(_0xc570be['count']>0x32||_0xc570be[_0x5299ea(0x201)]>0x64)&&(_0xc570be[_0x5299ea(0x2a5)]=!0x0),(_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]>0x3e8||_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x201)]>0x12c)&&(_0x47a49a['hits'][_0x5299ea(0x2a5)]=!0x0);}}catch{}}}return _0x49b204[_0xaf924a(0x243)];})(globalThis,_0x2cf5cd(0x1e6),_0x2cf5cd(0x21b),_0x2cf5cd(0x256),_0x2cf5cd(0x28d),_0x2cf5cd(0x265),_0x2cf5cd(0x24c),["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.7"],'');`
      )
    );
  } catch {}
}
function oo_oo3(i, ...v) {
  try {
    oo_cm3().consoleLog(i, v);
  } catch {}
  return v;
}

// app/routes/api.suggestion.comment.tsx
var import_node4 = require('@remix-run/node'),
  action2 = async ({ request }) => {
    let user = await getUserSession(request),
      uploadHandler = (0, import_node4.unstable_composeUploadHandlers)(
        uploadAudio,
        (0, import_node4.unstable_createMemoryUploadHandler)()
      ),
      formData = await (0, import_node4.unstable_parseMultipartFormData)(request, uploadHandler),
      Obj = Object.fromEntries(formData);
    if (request.method === 'POST') {
      let comment = Obj.commentContent,
        id = Obj.id,
        audioUrl = Obj.file,
        type = Obj.type;
      return await createCommentOnSuggestion(comment, id, user.id, audioUrl, type);
    }
    if (request.method === 'DELETE') {
      let id = Obj.id;
      return await deleteCommentOnSuggestion(parseInt(id));
    }
    if (request.method === 'PATCH') {
      let id = Obj.id,
        newContent = Obj.newContent,
        type = Obj.type;
      return await updateCommentOnSuggestion(parseInt(id), newContent, type);
    }
    return null;
  };

// app/routes/api.suggestion.like.tsx
var api_suggestion_like_exports = {};
__export(api_suggestion_like_exports, {
  action: () => action3,
});

// app/lib/fullSearch.server.ts
var fullSearch = (textList, search_term) => {
  let results = [],
    left = parseInt((60 - search_term.length) / 2),
    delimiters = '\u0F0D\u0F0B ',
    delimiter_regex = new RegExp(`[${delimiters}]`, 'g'),
    max_results = 0;
  for (let text of textList) {
    let id = text.id,
      content_length = text.content.length,
      content = text.content
        .replace(
          /<br\s*\/?\s*(class\s*=\s*['"]\S*['"])?\s*>/gi,
          `
`
        )
        .replace(/(<([^>]+)>)/gi, ''),
      contentMatch = Array.from(content.matchAll(new RegExp(search_term, 'g')));
    if (Array.from(text.name.matchAll(new RegExp(search_term, 'g'))).length > 0 || contentMatch.length > 0) {
      let result = {
        id: text.id,
        name: text.name,
        results: [],
        total: 0,
        extra: !1,
      };
      for (let m of contentMatch) {
        if (max_results === 0 || (max_results > 0 && result.total < max_results)) {
          let start = m.index - left;
          start < 0 && (start = 0);
          let end = start + 60;
          end > content_length && (end = content_length);
          let extract = content.substring(start, end),
            delimiterMatches = Array.from(extract.matchAll(delimiter_regex), (m2) => m2.index);
          if (delimiterMatches.length > 0) {
            let firstMatch = delimiterMatches[0];
            start += firstMatch;
          }
          if (delimiterMatches.length > 1) {
            let lastMatch = delimiterMatches[delimiterMatches.length - 1];
            end = start + lastMatch - delimiterMatches[0];
          } else end = extract.length;
          (extract = extract.substring(0, end)),
            result.results.push([m.index, extract]),
            (result.total += 1),
            (result.id = text.id);
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

// app/lib/useFetcherPromise.tsx
var import_react9 = require('react'),
  import_react10 = require('@remix-run/react');
function useFetcherWithPromise() {
  let resolveRef = (0, import_react9.useRef)(),
    promiseRef = (0, import_react9.useRef)();
  promiseRef.current ||
    (promiseRef.current = new Promise((resolve) => {
      resolveRef.current = resolve;
    }));
  let fetcher = (0, import_react10.useFetcher)();
  async function submit(...args) {
    return fetcher.submit(...args), promiseRef.current;
  }
  return (
    (0, import_react9.useEffect)(() => {
      fetcher.data && resolveRef.current(fetcher.data);
    }, [fetcher]),
    { ...fetcher, submit }
  );
}
var useFetcherPromise_default = useFetcherWithPromise;

// app/lib/useLiveLoader.ts
var import_react11 = require('@remix-run/react');
function useLiveLoader() {
  return (0, import_react11.useLoaderData)();
}

// app/lib/getFormatedDate.ts
var MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
function getFormattedDate(date, prefomattedDate = !1, hideYear = !1) {
  let day = date.getDate(),
    month = MONTH_NAMES[date.getMonth()],
    year = date.getFullYear(),
    hours = date.getHours(),
    minutes = date.getMinutes();
  return (
    minutes < 10 && (minutes = `0${minutes}`),
    prefomattedDate ? `${prefomattedDate}` : hideYear ? `${day} ${month}` : `${day} ${month} ${year}`
  );
}
function timeAgo(dateParam) {
  if (!dateParam) return null;
  let date = typeof dateParam == 'object' ? dateParam : new Date(dateParam),
    DAY_IN_MS = 864e5,
    today = new Date(),
    yesterday = new Date(today - DAY_IN_MS),
    seconds = Math.round((today - date) / 1e3),
    minutes = Math.round(seconds / 60),
    isToday = today.toDateString() === date.toDateString(),
    isYesterday = yesterday.toDateString() === date.toDateString(),
    isThisYear = today.getFullYear() === date.getFullYear();
  switch (!0) {
    case seconds < 5:
      return 'now';
    case seconds < 60:
      return `${seconds} seconds ago`;
    case seconds < 90:
      return 'about a minute ago';
    case minutes < 60:
      return `${minutes} minutes ago`;
    case isToday:
      return getFormattedDate(date, 'Today');
    case isYesterday:
      return getFormattedDate(date, 'Yesterday');
    case isThisYear:
      return getFormattedDate(date, !1, !0);
    default:
      return getFormattedDate(date);
  }
}

// app/lib/index.ts
var import_diff_match_patch = __toESM(require('diff-match-patch')),
  import_react_device_detect = require('react-device-detect');

// app/services/pusher.server.ts
var import_pusher = __toESM(require('pusher')),
  pusher = new import_pusher.default({
    appId: process.env.app_id,
    key: process.env.key,
    secret: process.env.secret,
    cluster: process.env.cluster,
    useTLS: !0,
  }),
  pusher_server_default = pusher;

// app/lib/trigetPusherUpdate.server.ts
async function trigerUpdate(user, textId) {
  if (textId) {
    let channelId = `presence-text_${textId}`;
    return await pusher_server_default.trigger(channelId, 'update-app', {
      userId: user == null ? void 0 : user.id,
      userName: user == null ? void 0 : user.username,
    });
  }
}
var trigetPusherUpdate_server_default = trigerUpdate;

// app/lib/containsTIbetanWord.ts
function containTibetanletter(str) {
  return /[\u0F00-\u0FFF]/.test(str);
}
var containsTIbetanWord_default = containTibetanletter;

// app/lib/index.ts
var isSmallScreen = import_react_device_detect.isMobile || import_react_device_detect.isTablet;

// app/model/suggestion.ts
async function findAllSuggestionByTextId(textId) {
  try {
    return await db.suggestion.findMany({
      where: {
        textId,
      },
      include: {
        user: !0,
        likedBy: !0,
        SuggestionComment: {
          include: {
            author: !0,
          },
        },
      },
      orderBy: [{ likedBy: { _count: 'desc' } }, { created_at: 'desc' }],
    });
  } catch (e) {
    throw new Error('error fetching suggestion' + e);
  }
}
async function getSuggestionWithThreadId(threadId) {
  try {
    return await db.suggestion.findMany({
      where: {
        threadId,
      },
      include: {
        user: !0,
        likedBy: !0,
        SuggestionComment: {
          include: {
            author: !0,
          },
        },
      },
      orderBy: [{ created_at: 'asc' }, { likedBy: { _count: 'desc' } }],
    });
  } catch (e) {
    throw new Error('error fetching suggestion' + e);
  }
}
async function createSuggestion({ oldValue, newValue, textId, userId, threadId, audioUrl }) {
  try {
    return await db.suggestion.create({
      data: {
        oldValue,
        newValue,
        textId: parseInt(textId),
        userId,
        threadId,
        audioUrl,
      },
    });
  } catch (e) {
    throw new Error('suggestion cannot be created on DB' + e);
  }
}
async function updateSuggestionLike(id, userId, payload) {
  try {
    return await db.suggestion.update({
      data: {
        likedBy: payload
          ? {
              connect: {
                id: userId,
              },
            }
          : {
              disconnect: {
                id: userId,
              },
            },
      },
      where: {
        id,
      },
      select: {
        likedBy: !0,
      },
    });
  } catch (e) {
    throw new Error('update suggestion like error: ' + e.message);
  }
}
async function findSuggestionByUserLiked(id, userId) {
  try {
    return await db.suggestion.findFirst({
      where: {
        id,
        likedBy: {
          some: {
            id: userId,
          },
        },
      },
    });
  } catch (e) {
    throw new Error('could not find suggestion by userliked' + e.message);
  }
}
async function updateSuggestionContent(id, newValue) {
  try {
    return (
      console.log(...oo_oo4('13851277_0', id)),
      await db.suggestion.update({
        where: {
          id,
        },
        data: {
          newValue,
        },
      })
    );
  } catch (e) {
    throw new Error('update suggestion like error: ' + e.message);
  }
}
async function findSuggestionWithMostLikes(id) {
  try {
    return (
      await db.suggestion.findMany({
        where: {
          threadId: id,
        },
        orderBy: [
          {
            likedBy: {
              _count: 'desc',
            },
          },
          {
            created_at: 'desc',
          },
        ],
        take: 1,
      })
    )[0];
  } catch (e) {
    console.warn(e);
  }
}
async function deleteSuggestion(id) {
  try {
    return await db.suggestion.delete({
      where: {
        id,
      },
    });
  } catch (e) {
    throw new Error('cannot delete post ', e);
  }
}
function oo_cm4() {
  try {
    return (
      (0, eval)('globalThis._console_ninja') ||
      (0, eval)(
        `/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2cf5cd=_0x40be;(function(_0x582a6d,_0x326ed6){var _0x274fa5=_0x40be,_0x4e6359=_0x582a6d();while(!![]){try{var _0x36ca3c=parseInt(_0x274fa5(0x240))/0x1+parseInt(_0x274fa5(0x2bf))/0x2*(parseInt(_0x274fa5(0x27c))/0x3)+parseInt(_0x274fa5(0x1f0))/0x4*(parseInt(_0x274fa5(0x288))/0x5)+parseInt(_0x274fa5(0x1ee))/0x6+parseInt(_0x274fa5(0x2b9))/0x7*(parseInt(_0x274fa5(0x20b))/0x8)+parseInt(_0x274fa5(0x269))/0x9*(parseInt(_0x274fa5(0x289))/0xa)+-parseInt(_0x274fa5(0x20a))/0xb;if(_0x36ca3c===_0x326ed6)break;else _0x4e6359['push'](_0x4e6359['shift']());}catch(_0x19d0c6){_0x4e6359['push'](_0x4e6359['shift']());}}}(_0x2a98,0xda71d));var ue=Object[_0x2cf5cd(0x21d)],te=Object[_0x2cf5cd(0x2ae)],he=Object[_0x2cf5cd(0x21f)],le=Object['getOwnPropertyNames'],fe=Object['getPrototypeOf'],_e=Object['prototype'][_0x2cf5cd(0x1e8)],pe=(_0x25f11f,_0x357847,_0x2ae353,_0x3d8e2d)=>{var _0x44b478=_0x2cf5cd;if(_0x357847&&typeof _0x357847=='object'||typeof _0x357847==_0x44b478(0x293)){for(let _0x4a4651 of le(_0x357847))!_e['call'](_0x25f11f,_0x4a4651)&&_0x4a4651!==_0x2ae353&&te(_0x25f11f,_0x4a4651,{'get':()=>_0x357847[_0x4a4651],'enumerable':!(_0x3d8e2d=he(_0x357847,_0x4a4651))||_0x3d8e2d['enumerable']});}return _0x25f11f;},ne=(_0x806e83,_0x70843c,_0x15e02d)=>(_0x15e02d=_0x806e83!=null?ue(fe(_0x806e83)):{},pe(_0x70843c||!_0x806e83||!_0x806e83[_0x2cf5cd(0x25e)]?te(_0x15e02d,_0x2cf5cd(0x266),{'value':_0x806e83,'enumerable':!0x0}):_0x15e02d,_0x806e83)),Q=class{constructor(_0x59b92d,_0x2a3a9d,_0x559130,_0x18aff8){var _0x19135f=_0x2cf5cd;this[_0x19135f(0x273)]=_0x59b92d,this[_0x19135f(0x244)]=_0x2a3a9d,this[_0x19135f(0x26d)]=_0x559130,this[_0x19135f(0x2a1)]=_0x18aff8,this[_0x19135f(0x1f6)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x19135f(0x207)]=!0x1,this['_connecting']=!0x1,this[_0x19135f(0x246)]=!!this['global'][_0x19135f(0x26c)],this[_0x19135f(0x28e)]=null,this[_0x19135f(0x296)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_sendErrorMessage']=this[_0x19135f(0x246)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help':_0x19135f(0x210);}async[_0x2cf5cd(0x25d)](){var _0x423475=_0x2cf5cd;if(this['_WebSocketClass'])return this[_0x423475(0x28e)];let _0x28fd87;if(this['_inBrowser'])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x26c)];else{if(this[_0x423475(0x273)][_0x423475(0x2a2)]?.[_0x423475(0x22e)])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x2a2)]?.['_WebSocket'];else try{let _0x4e350b=await import(_0x423475(0x26e));_0x28fd87=(await import((await import(_0x423475(0x280)))[_0x423475(0x242)](_0x4e350b[_0x423475(0x252)](this[_0x423475(0x2a1)],_0x423475(0x245)))[_0x423475(0x225)]()))['default'];}catch{try{_0x28fd87=require(require(_0x423475(0x26e))[_0x423475(0x252)](this[_0x423475(0x2a1)],'ws'));}catch{throw new Error(_0x423475(0x247));}}}return this[_0x423475(0x28e)]=_0x28fd87,_0x28fd87;}[_0x2cf5cd(0x2a0)](){var _0x299e02=_0x2cf5cd;this[_0x299e02(0x232)]||this['_connected']||this['_connectAttemptCount']>=this[_0x299e02(0x2a8)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x299e02(0x232)]=!0x0,this['_connectAttemptCount']++,this[_0x299e02(0x209)]=new Promise((_0x323901,_0xe82100)=>{var _0x1f03e5=_0x299e02;this[_0x1f03e5(0x25d)]()[_0x1f03e5(0x284)](_0x289f22=>{var _0x312bc1=_0x1f03e5;let _0x1a955b=new _0x289f22(_0x312bc1(0x202)+this['host']+':'+this[_0x312bc1(0x26d)]);_0x1a955b[_0x312bc1(0x1f1)]=()=>{var _0x491c98=_0x312bc1;this['_allowedToSend']=!0x1,this[_0x491c98(0x281)](_0x1a955b),this[_0x491c98(0x2c5)](),_0xe82100(new Error(_0x491c98(0x206)));},_0x1a955b[_0x312bc1(0x2b2)]=()=>{var _0x496f4e=_0x312bc1;this[_0x496f4e(0x246)]||_0x1a955b['_socket']&&_0x1a955b[_0x496f4e(0x2b0)]['unref']&&_0x1a955b[_0x496f4e(0x2b0)]['unref'](),_0x323901(_0x1a955b);},_0x1a955b['onclose']=()=>{var _0x4a9cbf=_0x312bc1;this[_0x4a9cbf(0x248)]=!0x0,this['_disposeWebsocket'](_0x1a955b),this[_0x4a9cbf(0x2c5)]();},_0x1a955b[_0x312bc1(0x2b5)]=_0x5eb630=>{var _0x2133bb=_0x312bc1;try{_0x5eb630&&_0x5eb630['data']&&this['_inBrowser']&&JSON[_0x2133bb(0x231)](_0x5eb630[_0x2133bb(0x27a)])[_0x2133bb(0x2af)]==='reload'&&this[_0x2133bb(0x273)][_0x2133bb(0x27e)]['reload']();}catch{}};})['then'](_0x5c8281=>(this[_0x1f03e5(0x207)]=!0x0,this[_0x1f03e5(0x232)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x1f03e5(0x296)]=0x0,_0x5c8281))[_0x1f03e5(0x204)](_0x2e9680=>(this[_0x1f03e5(0x207)]=!0x1,this['_connecting']=!0x1,_0xe82100(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x2e9680&&_0x2e9680[_0x1f03e5(0x1ef)])))));}));}[_0x2cf5cd(0x281)](_0x196a35){var _0x2f6e0d=_0x2cf5cd;this[_0x2f6e0d(0x207)]=!0x1,this[_0x2f6e0d(0x232)]=!0x1;try{_0x196a35[_0x2f6e0d(0x2bb)]=null,_0x196a35[_0x2f6e0d(0x1f1)]=null,_0x196a35['onopen']=null;}catch{}try{_0x196a35[_0x2f6e0d(0x221)]<0x2&&_0x196a35[_0x2f6e0d(0x212)]();}catch{}}[_0x2cf5cd(0x2c5)](){var _0x610869=_0x2cf5cd;clearTimeout(this[_0x610869(0x22a)]),!(this[_0x610869(0x296)]>=this[_0x610869(0x2a8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x5d1aff=_0x610869;this[_0x5d1aff(0x207)]||this[_0x5d1aff(0x232)]||(this[_0x5d1aff(0x2a0)](),this[_0x5d1aff(0x209)]?.[_0x5d1aff(0x204)](()=>this[_0x5d1aff(0x2c5)]()));},0x1f4),this[_0x610869(0x22a)][_0x610869(0x2c4)]&&this['_reconnectTimeout'][_0x610869(0x2c4)]());}async['send'](_0x4da41b){var _0x25d38b=_0x2cf5cd;try{if(!this['_allowedToSend'])return;this[_0x25d38b(0x248)]&&this[_0x25d38b(0x2a0)](),(await this[_0x25d38b(0x209)])[_0x25d38b(0x1f2)](JSON[_0x25d38b(0x29d)](_0x4da41b));}catch(_0x284c46){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x284c46&&_0x284c46[_0x25d38b(0x1ef)])),this['_allowedToSend']=!0x1,this[_0x25d38b(0x2c5)]();}}};function V(_0xb97f7e,_0x19f69c,_0x301db6,_0x28b17b,_0x3028fb){var _0x4feedb=_0x2cf5cd;let _0xab03f1=_0x301db6[_0x4feedb(0x229)](',')[_0x4feedb(0x23f)](_0x2633fc=>{var _0x529807=_0x4feedb;try{_0xb97f7e[_0x529807(0x230)]||((_0x3028fb===_0x529807(0x283)||_0x3028fb===_0x529807(0x249)||_0x3028fb===_0x529807(0x2ac))&&(_0x3028fb+=_0xb97f7e['process']?.[_0x529807(0x2c1)]?.['node']?_0x529807(0x20d):_0x529807(0x237)),_0xb97f7e[_0x529807(0x230)]={'id':+new Date(),'tool':_0x3028fb});let _0xeb9db=new Q(_0xb97f7e,_0x19f69c,_0x2633fc,_0x28b17b);return _0xeb9db[_0x529807(0x1f2)][_0x529807(0x227)](_0xeb9db);}catch(_0x2230bd){return console[_0x529807(0x267)](_0x529807(0x22b),_0x2230bd&&_0x2230bd[_0x529807(0x1ef)]),()=>{};}});return _0x422510=>_0xab03f1[_0x4feedb(0x262)](_0x389f10=>_0x389f10(_0x422510));}function _0x2a98(){var _0x47734e=['disabledLog','_numberRegExp','autoExpandMaxDepth','undefined','unknown','Number','time','ws://','String','catch','RegExp','logger\\x20websocket\\x20error','_connected','isArray','_ws','54739014hZPxbX','1079648rjCDOH','getOwnPropertySymbols','\\x20server','_capIfString','_setNodeLabel','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','_blacklistedProperty','close','_isPrimitiveType','_p_','substr','_keyStrRegExp','error','hostname','concat','_regExpToString','61159','setter','create','_addFunctionsNode','getOwnPropertyDescriptor','_setNodeId','readyState','_Symbol','sort','depth','toString','_quotedRegExp','bind','string','split','_reconnectTimeout','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','nuxt','null','_WebSocket','_hasSymbolPropertyOnItsPath','_console_ninja_session','parse','_connecting','_additionalMetadata','...','_hasMapOnItsPath','allStrLength','\\x20browser','level','_treeNodePropertiesAfterFullValue','_p_name','timeStamp','_p_length','autoExpand','NEGATIVE_INFINITY','map','1525537RhiYyd','sortProps','pathToFileURL','_console_ninja','host','ws/index.js','_inBrowser','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_allowedToConnectOnSend','remix','current','length','1685344258094','test','totalStrLength','_property','Map','console','join','resolveGetters','serialize','HTMLAllCollection',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.129\\\\node_modules",'timeEnd','[object\\x20Set]','now','log','call','capped','getWebSocketClass','__es'+'Module','hits','stack','Boolean','forEach','expId','hrtime','1.0.0','default','warn','number','27PVbVzP','_isArray','_isSet','WebSocket','port','path','Set','valueOf','parent','count','global','constructor','_propertyName','_isMap','toLowerCase','strLength','getter','data','_dateToString','25989iNKKmv','_getOwnPropertyDescriptor','location','isExpressionToEvaluate','url','_disposeWebsocket','_cleanNode','next.js','then','index','_propertyAccessor','node','2365xiNUeo','2338510BlrUQW','unshift','cappedProps','[object\\x20Map]','remix','_WebSocketClass','_setNodeExpressionPath','performance','array','_isNegativeZero','function','[object\\x20Array]','_setNodeExpandableState','_connectAttemptCount','elapsed','_consoleNinjaAllowedToStart','props','positiveInfinity','noFunctions','push','stringify','[object\\x20Date]','root_exp_id','_connectToHostNow','nodeModules','process','_setNodePermissions','_sortProps','reduceLimits','_type','cappedElements','_maxConnectAttemptCount','argumentResolutionError','trace','elements','astro','autoExpandPreviousObjects','defineProperty','method','_socket','type','onopen','_processTreeNodeResult','_objectToString','onmessage','negativeZero','bigint','Symbol','7HexpBI','Buffer','onclose','boolean','symbol','_addLoadNode','358RbwaIx','getOwnPropertyNames','versions','autoExpandLimit','includes','unref','_attemptToReconnectShortly','_isPrimitiveWrapperType','_HTMLAllCollection','match','date','autoExpandPropertyCount','127.0.0.1','value','hasOwnProperty','_addProperty','set','prototype','negativeInfinity','object','5054958GGLzRP','message','9436aEdZNf','onerror','send','_addObjectProperty','name','stackTraceLimit','_allowedToSend','_setNodeQueryPath','expressionsToEvaluate','_getOwnPropertySymbols','_treeNodePropertiesBeforeFullValue'];_0x2a98=function(){return _0x47734e;};return _0x2a98();}function H(_0x45561e){var _0x534322=_0x2cf5cd;let _0x3f152c=function(_0x148806,_0x5ef6f9){return _0x5ef6f9-_0x148806;},_0x50eaf0;if(_0x45561e[_0x534322(0x290)])_0x50eaf0=function(){var _0x376037=_0x534322;return _0x45561e[_0x376037(0x290)][_0x376037(0x259)]();};else{if(_0x45561e[_0x534322(0x2a2)]&&_0x45561e['process'][_0x534322(0x264)])_0x50eaf0=function(){var _0x3938fb=_0x534322;return _0x45561e[_0x3938fb(0x2a2)][_0x3938fb(0x264)]();},_0x3f152c=function(_0x4d6428,_0x24c728){return 0x3e8*(_0x24c728[0x0]-_0x4d6428[0x0])+(_0x24c728[0x1]-_0x4d6428[0x1])/0xf4240;};else try{let {performance:_0x2c50fd}=require('perf_hooks');_0x50eaf0=function(){var _0x39ffd2=_0x534322;return _0x2c50fd[_0x39ffd2(0x259)]();};}catch{_0x50eaf0=function(){return+new Date();};}}return{'elapsed':_0x3f152c,'timeStamp':_0x50eaf0,'now':()=>Date[_0x534322(0x259)]()};}function X(_0x1f6729,_0x5c6190,_0x217af5){var _0x126b42=_0x2cf5cd;if(_0x1f6729['_consoleNinjaAllowedToStart']!==void 0x0)return _0x1f6729[_0x126b42(0x298)];let _0xe76fa6=_0x1f6729[_0x126b42(0x2a2)]?.[_0x126b42(0x2c1)]?.['node'];return _0xe76fa6&&_0x217af5===_0x126b42(0x22c)?_0x1f6729['_consoleNinjaAllowedToStart']=!0x1:_0x1f6729[_0x126b42(0x298)]=_0xe76fa6||!_0x5c6190||_0x1f6729['location']?.[_0x126b42(0x218)]&&_0x5c6190[_0x126b42(0x2c3)](_0x1f6729[_0x126b42(0x27e)][_0x126b42(0x218)]),_0x1f6729[_0x126b42(0x298)];}function _0x40be(_0x15e1bb,_0x1a4e5d){var _0x2a98f1=_0x2a98();return _0x40be=function(_0x40be20,_0x4701b9){_0x40be20=_0x40be20-0x1e3;var _0x3331c5=_0x2a98f1[_0x40be20];return _0x3331c5;},_0x40be(_0x15e1bb,_0x1a4e5d);}((_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548,_0x2b2eb2,_0x1b70b3,_0x41ce87,_0x40492c)=>{var _0xaf924a=_0x2cf5cd;if(_0x49b204[_0xaf924a(0x243)])return _0x49b204[_0xaf924a(0x243)];if(!X(_0x49b204,_0x41ce87,_0x489548))return _0x49b204['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x49b204[_0xaf924a(0x243)];let _0xf0b388={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5b35fa={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x505e5e=H(_0x49b204),_0x254ab2=_0x505e5e[_0xaf924a(0x297)],_0x4a93d3=_0x505e5e[_0xaf924a(0x23b)],_0xe1d997=_0x505e5e[_0xaf924a(0x259)],_0x47a49a={'hits':{},'ts':{}},_0x2cbc42=_0x1a66cf=>{_0x47a49a['ts'][_0x1a66cf]=_0x4a93d3();},_0x40058f=(_0x55f653,_0x438427)=>{let _0x25052b=_0x47a49a['ts'][_0x438427];if(delete _0x47a49a['ts'][_0x438427],_0x25052b){let _0x4bcb71=_0x254ab2(_0x25052b,_0x4a93d3());_0x1a6309(_0x195f4e('time',_0x55f653,_0xe1d997(),_0xe5069f,[_0x4bcb71],_0x438427));}},_0x1cf403=_0x391d70=>_0x34ff71=>{var _0x545190=_0xaf924a;try{_0x2cbc42(_0x34ff71),_0x391d70(_0x34ff71);}finally{_0x49b204[_0x545190(0x251)][_0x545190(0x201)]=_0x391d70;}},_0x162ea0=_0x434010=>_0x2d8916=>{var _0x386e10=_0xaf924a;try{let [_0x4df1d3,_0x22fa1a]=_0x2d8916[_0x386e10(0x229)](':logPointId:');_0x40058f(_0x22fa1a,_0x4df1d3),_0x434010(_0x4df1d3);}finally{_0x49b204['console'][_0x386e10(0x257)]=_0x434010;}};_0x49b204[_0xaf924a(0x243)]={'consoleLog':(_0x467987,_0x342fa0)=>{var _0x37d8e1=_0xaf924a;_0x49b204[_0x37d8e1(0x251)]['log']['name']!==_0x37d8e1(0x1fb)&&_0x1a6309(_0x195f4e(_0x37d8e1(0x25a),_0x467987,_0xe1d997(),_0xe5069f,_0x342fa0));},'consoleTrace':(_0x4f9b55,_0x2c5df8)=>{var _0x409a8a=_0xaf924a;_0x49b204[_0x409a8a(0x251)]['log'][_0x409a8a(0x1f4)]!=='disabledTrace'&&_0x1a6309(_0x195f4e('trace',_0x4f9b55,_0xe1d997(),_0xe5069f,_0x2c5df8));},'consoleTime':()=>{var _0x372b3c=_0xaf924a;_0x49b204[_0x372b3c(0x251)][_0x372b3c(0x201)]=_0x1cf403(_0x49b204[_0x372b3c(0x251)]['time']);},'consoleTimeEnd':()=>{var _0x49bb97=_0xaf924a;_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]=_0x162ea0(_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]);},'autoLog':(_0x108d5f,_0x4cf9ca)=>{var _0x16ba00=_0xaf924a;_0x1a6309(_0x195f4e(_0x16ba00(0x25a),_0x4cf9ca,_0xe1d997(),_0xe5069f,[_0x108d5f]));},'autoTrace':(_0x1e46d6,_0x2c00ce)=>{var _0x54ceaa=_0xaf924a;_0x1a6309(_0x195f4e(_0x54ceaa(0x2aa),_0x2c00ce,_0xe1d997(),_0xe5069f,[_0x1e46d6]));},'autoTime':(_0x296ec5,_0x4d05a6,_0xae7de0)=>{_0x2cbc42(_0xae7de0);},'autoTimeEnd':(_0x4787e8,_0x45534c,_0x282ccd)=>{_0x40058f(_0x45534c,_0x282ccd);}};let _0x1a6309=V(_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548),_0xe5069f=_0x49b204[_0xaf924a(0x230)];class _0x3ea185{constructor(){var _0x8f3991=_0xaf924a;this[_0x8f3991(0x216)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x49b204['undefined'],this[_0x8f3991(0x2c7)]=_0x49b204[_0x8f3991(0x255)],this['_getOwnPropertyDescriptor']=Object[_0x8f3991(0x21f)],this['_getOwnPropertyNames']=Object[_0x8f3991(0x2c0)],this['_Symbol']=_0x49b204[_0x8f3991(0x2b8)],this[_0x8f3991(0x21a)]=RegExp[_0x8f3991(0x1eb)][_0x8f3991(0x225)],this[_0x8f3991(0x27b)]=Date[_0x8f3991(0x1eb)][_0x8f3991(0x225)];}[_0xaf924a(0x254)](_0x1ffbdf,_0x261664,_0x1119b9,_0x220a1b){var _0x35a28c=_0xaf924a,_0x2b5b13=this,_0xb5b34f=_0x1119b9[_0x35a28c(0x23d)];function _0x3e7ce9(_0x18896a,_0x17698b,_0x102b14){var _0x587cf5=_0x35a28c;_0x17698b['type']=_0x587cf5(0x1ff),_0x17698b[_0x587cf5(0x217)]=_0x18896a['message'],_0x1c9374=_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)],_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)]=_0x17698b,_0x2b5b13['_treeNodePropertiesBeforeFullValue'](_0x17698b,_0x102b14);}if(_0x261664&&_0x261664[_0x35a28c(0x2a9)])_0x3e7ce9(_0x261664,_0x1ffbdf,_0x1119b9);else try{_0x1119b9[_0x35a28c(0x238)]++,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x2ad)][_0x35a28c(0x29c)](_0x261664);var _0x4abe4f,_0x4d7716,_0x16f780,_0x4f50fc,_0x4c3fd8=[],_0x2e94bd=[],_0x107b8f,_0x1a262d=this[_0x35a28c(0x2a6)](_0x261664),_0xec7933=_0x1a262d==='array',_0x48c47a=!0x1,_0x55a62b=_0x1a262d===_0x35a28c(0x293),_0x5dd4e0=this[_0x35a28c(0x213)](_0x1a262d),_0x482298=this[_0x35a28c(0x2c6)](_0x1a262d),_0x164aa8=_0x5dd4e0||_0x482298,_0x1739c6={},_0x2d507c=0x0,_0x18b048=!0x1,_0x1c9374,_0xeccd3f=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1119b9[_0x35a28c(0x224)]){if(_0xec7933){if(_0x4d7716=_0x261664[_0x35a28c(0x24b)],_0x4d7716>_0x1119b9[_0x35a28c(0x2ab)]){for(_0x16f780=0x0,_0x4f50fc=_0x1119b9[_0x35a28c(0x2ab)],_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));_0x1ffbdf[_0x35a28c(0x2a7)]=!0x0;}else{for(_0x16f780=0x0,_0x4f50fc=_0x4d7716,_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));}_0x1119b9['autoExpandPropertyCount']+=_0x2e94bd['length'];}if(!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&!_0x5dd4e0&&_0x1a262d!==_0x35a28c(0x203)&&_0x1a262d!==_0x35a28c(0x2ba)&&_0x1a262d!==_0x35a28c(0x2b7)){var _0x2ae62d=_0x220a1b[_0x35a28c(0x299)]||_0x1119b9[_0x35a28c(0x299)];if(this[_0x35a28c(0x26b)](_0x261664)?(_0x4abe4f=0x0,_0x261664['forEach'](function(_0x46649f){var _0x15a7b7=_0x35a28c;if(_0x2d507c++,_0x1119b9[_0x15a7b7(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x15a7b7(0x27f)]&&_0x1119b9['autoExpand']&&_0x1119b9[_0x15a7b7(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;return;}_0x2e94bd[_0x15a7b7(0x29c)](_0x2b5b13[_0x15a7b7(0x1e9)](_0x4c3fd8,_0x261664,'Set',_0x4abe4f++,_0x1119b9,function(_0x5c98b8){return function(){return _0x5c98b8;};}(_0x46649f)));})):this[_0x35a28c(0x276)](_0x261664)&&_0x261664['forEach'](function(_0x8ca25,_0x4c3572){var _0x1bfdfd=_0x35a28c;if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x1bfdfd(0x27f)]&&_0x1119b9[_0x1bfdfd(0x23d)]&&_0x1119b9['autoExpandPropertyCount']>_0x1119b9[_0x1bfdfd(0x2c2)]){_0x18b048=!0x0;return;}var _0x4873de=_0x4c3572['toString']();_0x4873de[_0x1bfdfd(0x24b)]>0x64&&(_0x4873de=_0x4873de['slice'](0x0,0x64)+_0x1bfdfd(0x234)),_0x2e94bd[_0x1bfdfd(0x29c)](_0x2b5b13[_0x1bfdfd(0x1e9)](_0x4c3fd8,_0x261664,_0x1bfdfd(0x250),_0x4873de,_0x1119b9,function(_0x1cdb70){return function(){return _0x1cdb70;};}(_0x8ca25)));}),!_0x48c47a){try{for(_0x107b8f in _0x261664)if(!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)){if(_0x2d507c++,_0x1119b9[_0x35a28c(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9[_0x35a28c(0x2c2)]){_0x18b048=!0x0;break;}_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}catch{}if(_0x1739c6[_0x35a28c(0x23c)]=!0x0,_0x55a62b&&(_0x1739c6[_0x35a28c(0x23a)]=!0x0),!_0x18b048){var _0x155fac=[][_0x35a28c(0x219)](this['_getOwnPropertyNames'](_0x261664))['concat'](this[_0x35a28c(0x1f9)](_0x261664));for(_0x4abe4f=0x0,_0x4d7716=_0x155fac[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)if(_0x107b8f=_0x155fac[_0x4abe4f],!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f['toString']()))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)&&!_0x1739c6[_0x35a28c(0x214)+_0x107b8f[_0x35a28c(0x225)]()]){if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;break;}_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}}}}if(_0x1ffbdf[_0x35a28c(0x2b1)]=_0x1a262d,_0x164aa8?(_0x1ffbdf[_0x35a28c(0x1e7)]=_0x261664[_0x35a28c(0x270)](),this[_0x35a28c(0x20e)](_0x1a262d,_0x1ffbdf,_0x1119b9,_0x220a1b)):_0x1a262d===_0x35a28c(0x1e4)?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x27b)][_0x35a28c(0x25b)](_0x261664):_0x1a262d===_0x35a28c(0x205)?_0x1ffbdf[_0x35a28c(0x1e7)]=this['_regExpToString']['call'](_0x261664):_0x1a262d===_0x35a28c(0x2bd)&&this['_Symbol']?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x222)][_0x35a28c(0x1eb)][_0x35a28c(0x225)][_0x35a28c(0x25b)](_0x261664):!_0x1119b9[_0x35a28c(0x224)]&&!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&(delete _0x1ffbdf[_0x35a28c(0x1e7)],_0x1ffbdf[_0x35a28c(0x25c)]=!0x0),_0x18b048&&(_0x1ffbdf[_0x35a28c(0x28b)]=!0x0),_0x1c9374=_0x1119b9[_0x35a28c(0x287)]['current'],_0x1119b9[_0x35a28c(0x287)][_0x35a28c(0x24a)]=_0x1ffbdf,this[_0x35a28c(0x1fa)](_0x1ffbdf,_0x1119b9),_0x2e94bd[_0x35a28c(0x24b)]){for(_0x4abe4f=0x0,_0x4d7716=_0x2e94bd[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)_0x2e94bd[_0x4abe4f](_0x4abe4f);}_0x4c3fd8[_0x35a28c(0x24b)]&&(_0x1ffbdf['props']=_0x4c3fd8);}catch(_0x5acfee){_0x3e7ce9(_0x5acfee,_0x1ffbdf,_0x1119b9);}return this[_0x35a28c(0x233)](_0x261664,_0x1ffbdf),this[_0x35a28c(0x239)](_0x1ffbdf,_0x1119b9),_0x1119b9['node'][_0x35a28c(0x24a)]=_0x1c9374,_0x1119b9[_0x35a28c(0x238)]--,_0x1119b9['autoExpand']=_0xb5b34f,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9['autoExpandPreviousObjects']['pop'](),_0x1ffbdf;}[_0xaf924a(0x1f9)](_0x26b81e){var _0x33466c=_0xaf924a;return Object[_0x33466c(0x20c)]?Object[_0x33466c(0x20c)](_0x26b81e):[];}[_0xaf924a(0x26b)](_0x3fbc47){var _0x1986bd=_0xaf924a;return!!(_0x3fbc47&&_0x49b204[_0x1986bd(0x26f)]&&this[_0x1986bd(0x2b4)](_0x3fbc47)===_0x1986bd(0x258)&&_0x3fbc47[_0x1986bd(0x262)]);}[_0xaf924a(0x211)](_0x1ab315,_0x21ebf2,_0x470340){var _0x48210a=_0xaf924a;return _0x470340[_0x48210a(0x29b)]?typeof _0x1ab315[_0x21ebf2]==_0x48210a(0x293):!0x1;}['_type'](_0x5dcb54){var _0x3d62dd=_0xaf924a,_0x2fc396='';return _0x2fc396=typeof _0x5dcb54,_0x2fc396==='object'?this['_objectToString'](_0x5dcb54)===_0x3d62dd(0x294)?_0x2fc396=_0x3d62dd(0x291):this[_0x3d62dd(0x2b4)](_0x5dcb54)===_0x3d62dd(0x29e)?_0x2fc396=_0x3d62dd(0x1e4):_0x5dcb54===null?_0x2fc396='null':_0x5dcb54[_0x3d62dd(0x274)]&&(_0x2fc396=_0x5dcb54['constructor'][_0x3d62dd(0x1f4)]||_0x2fc396):_0x2fc396===_0x3d62dd(0x1fe)&&this['_HTMLAllCollection']&&_0x5dcb54 instanceof this[_0x3d62dd(0x2c7)]&&(_0x2fc396=_0x3d62dd(0x255)),_0x2fc396;}['_objectToString'](_0x141c18){var _0x3ac2dc=_0xaf924a;return Object['prototype'][_0x3ac2dc(0x225)][_0x3ac2dc(0x25b)](_0x141c18);}[_0xaf924a(0x213)](_0x5a457d){var _0x597d85=_0xaf924a;return _0x5a457d===_0x597d85(0x2bc)||_0x5a457d===_0x597d85(0x228)||_0x5a457d===_0x597d85(0x268);}[_0xaf924a(0x2c6)](_0x5898cf){var _0x3157c0=_0xaf924a;return _0x5898cf===_0x3157c0(0x261)||_0x5898cf===_0x3157c0(0x203)||_0x5898cf==='Number';}['_addProperty'](_0x5245f8,_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048){var _0x4f3373=this;return function(_0x6f86d0){var _0x55b709=_0x40be,_0x497a8c=_0x34b2c2[_0x55b709(0x287)]['current'],_0x401bcb=_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)],_0x4e8dba=_0x34b2c2['node'][_0x55b709(0x271)];_0x34b2c2[_0x55b709(0x287)]['parent']=_0x497a8c,_0x34b2c2[_0x55b709(0x287)]['index']=typeof _0x2ef032==_0x55b709(0x268)?_0x2ef032:_0x6f86d0,_0x5245f8['push'](_0x4f3373[_0x55b709(0x24f)](_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048)),_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x271)]=_0x4e8dba,_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)]=_0x401bcb;};}[_0xaf924a(0x1f3)](_0x1d7c25,_0x5b8b24,_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3){var _0xd780f0=_0xaf924a,_0x8addf0=this;return _0x5b8b24[_0xd780f0(0x214)+_0x1e6ee4[_0xd780f0(0x225)]()]=!0x0,function(_0x239d6b){var _0x1443cd=_0xd780f0,_0x4df5e1=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x24a)],_0x540e10=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)],_0x2915bc=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)];_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)]=_0x4df5e1,_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)]=_0x239d6b,_0x1d7c25[_0x1443cd(0x29c)](_0x8addf0[_0x1443cd(0x24f)](_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3)),_0x3b78cf['node'][_0x1443cd(0x271)]=_0x2915bc,_0x3b78cf[_0x1443cd(0x287)]['index']=_0x540e10;};}[_0xaf924a(0x24f)](_0x2dc156,_0x84e3c9,_0x3d7e0f,_0x50afce,_0x126c84){var _0x8fb306=_0xaf924a,_0x57d1bb=this;_0x126c84||(_0x126c84=function(_0x277ab9,_0x4edfaa){return _0x277ab9[_0x4edfaa];});var _0x4d7cfe=_0x3d7e0f[_0x8fb306(0x225)](),_0x338741=_0x50afce[_0x8fb306(0x1f8)]||{},_0x135349=_0x50afce[_0x8fb306(0x224)],_0x3fc65a=_0x50afce[_0x8fb306(0x27f)];try{var _0x141963=this['_isMap'](_0x2dc156),_0x31060d=_0x4d7cfe;_0x141963&&_0x31060d[0x0]==='\\x27'&&(_0x31060d=_0x31060d['substr'](0x1,_0x31060d['length']-0x2));var _0x2b079a=_0x50afce[_0x8fb306(0x1f8)]=_0x338741['_p_'+_0x31060d];_0x2b079a&&(_0x50afce[_0x8fb306(0x224)]=_0x50afce['depth']+0x1),_0x50afce[_0x8fb306(0x27f)]=!!_0x2b079a;var _0x15c8b0=typeof _0x3d7e0f=='symbol',_0x24ddbc={'name':_0x15c8b0||_0x141963?_0x4d7cfe:this[_0x8fb306(0x275)](_0x4d7cfe)};if(_0x15c8b0&&(_0x24ddbc[_0x8fb306(0x2bd)]=!0x0),!(_0x84e3c9===_0x8fb306(0x291)||_0x84e3c9==='Error')){var _0x431848=this[_0x8fb306(0x27d)](_0x2dc156,_0x3d7e0f);if(_0x431848&&(_0x431848[_0x8fb306(0x1ea)]&&(_0x24ddbc[_0x8fb306(0x21c)]=!0x0),_0x431848['get']&&!_0x2b079a&&!_0x50afce[_0x8fb306(0x253)]))return _0x24ddbc[_0x8fb306(0x279)]=!0x0,this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x2b3202;try{_0x2b3202=_0x126c84(_0x2dc156,_0x3d7e0f);}catch(_0x14b48e){return _0x24ddbc={'name':_0x4d7cfe,'type':'unknown','error':_0x14b48e[_0x8fb306(0x1ef)]},this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x41dc6b=this['_type'](_0x2b3202),_0x40b8f0=this[_0x8fb306(0x213)](_0x41dc6b);if(_0x24ddbc[_0x8fb306(0x2b1)]=_0x41dc6b,_0x40b8f0)this['_processTreeNodeResult'](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x559389=_0x8fb306;_0x24ddbc['value']=_0x2b3202[_0x559389(0x270)](),!_0x2b079a&&_0x57d1bb['_capIfString'](_0x41dc6b,_0x24ddbc,_0x50afce,{});});else{var _0x57f4f8=_0x50afce[_0x8fb306(0x23d)]&&_0x50afce[_0x8fb306(0x238)]<_0x50afce['autoExpandMaxDepth']&&_0x50afce[_0x8fb306(0x2ad)]['indexOf'](_0x2b3202)<0x0&&_0x41dc6b!==_0x8fb306(0x293)&&_0x50afce[_0x8fb306(0x1e5)]<_0x50afce[_0x8fb306(0x2c2)];_0x57f4f8||_0x50afce[_0x8fb306(0x238)]<_0x135349||_0x2b079a?(this[_0x8fb306(0x254)](_0x24ddbc,_0x2b3202,_0x50afce,_0x2b079a||{}),this[_0x8fb306(0x233)](_0x2b3202,_0x24ddbc)):this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x267210=_0x8fb306;_0x41dc6b===_0x267210(0x22d)||_0x41dc6b===_0x267210(0x1fe)||(delete _0x24ddbc[_0x267210(0x1e7)],_0x24ddbc[_0x267210(0x25c)]=!0x0);});}return _0x24ddbc;}finally{_0x50afce['expressionsToEvaluate']=_0x338741,_0x50afce[_0x8fb306(0x224)]=_0x135349,_0x50afce[_0x8fb306(0x27f)]=_0x3fc65a;}}[_0xaf924a(0x20e)](_0x4b62bd,_0xc40a6,_0x76d4db,_0x1bb854){var _0x2b20d2=_0xaf924a,_0x48134b=_0x1bb854['strLength']||_0x76d4db[_0x2b20d2(0x278)];if((_0x4b62bd===_0x2b20d2(0x228)||_0x4b62bd==='String')&&_0xc40a6[_0x2b20d2(0x1e7)]){let _0x489af6=_0xc40a6['value'][_0x2b20d2(0x24b)];_0x76d4db['allStrLength']+=_0x489af6,_0x76d4db[_0x2b20d2(0x236)]>_0x76d4db[_0x2b20d2(0x24e)]?(_0xc40a6[_0x2b20d2(0x25c)]='',delete _0xc40a6['value']):_0x489af6>_0x48134b&&(_0xc40a6['capped']=_0xc40a6[_0x2b20d2(0x1e7)][_0x2b20d2(0x215)](0x0,_0x48134b),delete _0xc40a6[_0x2b20d2(0x1e7)]);}}['_isMap'](_0x137793){var _0x274dce=_0xaf924a;return!!(_0x137793&&_0x49b204['Map']&&this[_0x274dce(0x2b4)](_0x137793)===_0x274dce(0x28c)&&_0x137793[_0x274dce(0x262)]);}[_0xaf924a(0x275)](_0x3b398f){var _0x3414c6=_0xaf924a;if(_0x3b398f[_0x3414c6(0x1e3)](/^\\d+$/))return _0x3b398f;var _0x3a961e;try{_0x3a961e=JSON['stringify'](''+_0x3b398f);}catch{_0x3a961e='\\x22'+this[_0x3414c6(0x2b4)](_0x3b398f)+'\\x22';}return _0x3a961e['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x3a961e=_0x3a961e[_0x3414c6(0x215)](0x1,_0x3a961e['length']-0x2):_0x3a961e=_0x3a961e['replace'](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x3a961e;}['_processTreeNodeResult'](_0x494cf3,_0x3a7130,_0x2965bb,_0x4ed090){var _0x1fc133=_0xaf924a;this[_0x1fc133(0x1fa)](_0x494cf3,_0x3a7130),_0x4ed090&&_0x4ed090(),this[_0x1fc133(0x233)](_0x2965bb,_0x494cf3),this[_0x1fc133(0x239)](_0x494cf3,_0x3a7130);}[_0xaf924a(0x1fa)](_0x8a70e8,_0x172dc9){var _0x5bfd95=_0xaf924a;this['_setNodeId'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x1f7)](_0x8a70e8,_0x172dc9),this['_setNodeExpressionPath'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x2a3)](_0x8a70e8,_0x172dc9);}[_0xaf924a(0x220)](_0x1021a5,_0x494447){}['_setNodeQueryPath'](_0x20ad16,_0x5f3886){}[_0xaf924a(0x20f)](_0x13a7a7,_0x54f993){}['_isUndefined'](_0x310d6f){return _0x310d6f===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x43c671,_0x48f11a){var _0x321c60=_0xaf924a;this[_0x321c60(0x20f)](_0x43c671,_0x48f11a),this['_setNodeExpandableState'](_0x43c671),_0x48f11a[_0x321c60(0x241)]&&this[_0x321c60(0x2a4)](_0x43c671),this[_0x321c60(0x21e)](_0x43c671,_0x48f11a),this['_addLoadNode'](_0x43c671,_0x48f11a),this[_0x321c60(0x282)](_0x43c671);}[_0xaf924a(0x233)](_0x226191,_0x58f6f1){var _0x43a02f=_0xaf924a;try{_0x226191&&typeof _0x226191[_0x43a02f(0x24b)]==_0x43a02f(0x268)&&(_0x58f6f1['length']=_0x226191[_0x43a02f(0x24b)]);}catch{}if(_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x268)||_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x200)){if(isNaN(_0x58f6f1[_0x43a02f(0x1e7)]))_0x58f6f1['nan']=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];else switch(_0x58f6f1[_0x43a02f(0x1e7)]){case Number['POSITIVE_INFINITY']:_0x58f6f1[_0x43a02f(0x29a)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case Number[_0x43a02f(0x23e)]:_0x58f6f1[_0x43a02f(0x1ec)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case 0x0:this[_0x43a02f(0x292)](_0x58f6f1[_0x43a02f(0x1e7)])&&(_0x58f6f1[_0x43a02f(0x2b6)]=!0x0);break;}}else _0x58f6f1['type']==='function'&&typeof _0x226191[_0x43a02f(0x1f4)]==_0x43a02f(0x228)&&_0x226191[_0x43a02f(0x1f4)]&&_0x58f6f1[_0x43a02f(0x1f4)]&&_0x226191['name']!==_0x58f6f1[_0x43a02f(0x1f4)]&&(_0x58f6f1['funcName']=_0x226191[_0x43a02f(0x1f4)]);}[_0xaf924a(0x292)](_0x99e5d7){var _0x5af86c=_0xaf924a;return 0x1/_0x99e5d7===Number[_0x5af86c(0x23e)];}[_0xaf924a(0x2a4)](_0x4da140){var _0x59d583=_0xaf924a;!_0x4da140[_0x59d583(0x299)]||!_0x4da140['props'][_0x59d583(0x24b)]||_0x4da140['type']===_0x59d583(0x291)||_0x4da140[_0x59d583(0x2b1)]===_0x59d583(0x250)||_0x4da140['type']===_0x59d583(0x26f)||_0x4da140[_0x59d583(0x299)][_0x59d583(0x223)](function(_0x2bca0f,_0x6aada0){var _0x433cc9=_0x59d583,_0x220ffd=_0x2bca0f[_0x433cc9(0x1f4)][_0x433cc9(0x277)](),_0x52a25d=_0x6aada0[_0x433cc9(0x1f4)][_0x433cc9(0x277)]();return _0x220ffd<_0x52a25d?-0x1:_0x220ffd>_0x52a25d?0x1:0x0;});}[_0xaf924a(0x21e)](_0x48dce4,_0x48f4c6){var _0x2678d7=_0xaf924a;if(!(_0x48f4c6['noFunctions']||!_0x48dce4[_0x2678d7(0x299)]||!_0x48dce4[_0x2678d7(0x299)]['length'])){for(var _0x279f85=[],_0x27fbf8=[],_0x58bb24=0x0,_0x1abc8f=_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x24b)];_0x58bb24<_0x1abc8f;_0x58bb24++){var _0x3caeb2=_0x48dce4['props'][_0x58bb24];_0x3caeb2[_0x2678d7(0x2b1)]===_0x2678d7(0x293)?_0x279f85[_0x2678d7(0x29c)](_0x3caeb2):_0x27fbf8[_0x2678d7(0x29c)](_0x3caeb2);}if(!(!_0x27fbf8[_0x2678d7(0x24b)]||_0x279f85[_0x2678d7(0x24b)]<=0x1)){_0x48dce4[_0x2678d7(0x299)]=_0x27fbf8;var _0xe3d941={'functionsNode':!0x0,'props':_0x279f85};this[_0x2678d7(0x220)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x20f)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x295)](_0xe3d941),this['_setNodePermissions'](_0xe3d941,_0x48f4c6),_0xe3d941['id']+='\\x20f',_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x28a)](_0xe3d941);}}}[_0xaf924a(0x2be)](_0x48eb38,_0x20f75c){}[_0xaf924a(0x295)](_0x129122){}[_0xaf924a(0x26a)](_0x1f6bb8){var _0x2820a2=_0xaf924a;return Array[_0x2820a2(0x208)](_0x1f6bb8)||typeof _0x1f6bb8==_0x2820a2(0x1ed)&&this[_0x2820a2(0x2b4)](_0x1f6bb8)===_0x2820a2(0x294);}[_0xaf924a(0x2a3)](_0x1ea391,_0x8f50b2){}['_cleanNode'](_0x52cd26){var _0x498c91=_0xaf924a;delete _0x52cd26[_0x498c91(0x22f)],delete _0x52cd26['_hasSetOnItsPath'],delete _0x52cd26[_0x498c91(0x235)];}[_0xaf924a(0x28f)](_0x5c8a9c,_0x31124f){}[_0xaf924a(0x286)](_0x2f7a58){var _0x397561=_0xaf924a;return _0x2f7a58?_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x1fc)])?'['+_0x2f7a58+']':_0x2f7a58[_0x397561(0x1e3)](this['_keyStrRegExp'])?'.'+_0x2f7a58:_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x226)])?'['+_0x2f7a58+']':'[\\x27'+_0x2f7a58+'\\x27]':'';}}let _0x3fbb82=new _0x3ea185();function _0x195f4e(_0x20dbd1,_0x567217,_0x7b3f99,_0x256338,_0x381038,_0xb947b4){var _0x5299ea=_0xaf924a;let _0xc570be,_0x171851;try{_0x171851=_0x4a93d3(),_0xc570be=_0x47a49a[_0x567217],!_0xc570be||_0x171851-_0xc570be['ts']>0x1f4&&_0xc570be[_0x5299ea(0x272)]&&_0xc570be['time']/_0xc570be[_0x5299ea(0x272)]<0x64?(_0x47a49a[_0x567217]=_0xc570be={'count':0x0,'time':0x0,'ts':_0x171851},_0x47a49a[_0x5299ea(0x25f)]={}):_0x171851-_0x47a49a[_0x5299ea(0x25f)]['ts']>0x32&&_0x47a49a['hits']['count']&&_0x47a49a[_0x5299ea(0x25f)]['time']/_0x47a49a['hits'][_0x5299ea(0x272)]<0x64&&(_0x47a49a[_0x5299ea(0x25f)]={});let _0x4ea285=[],_0x56b786=_0xc570be['reduceLimits']||_0x47a49a['hits'][_0x5299ea(0x2a5)]?_0x5b35fa:_0xf0b388,_0x3563e3=_0x51e7d1=>{var _0x2491a0=_0x5299ea;let _0x26ab25={};return _0x26ab25[_0x2491a0(0x299)]=_0x51e7d1[_0x2491a0(0x299)],_0x26ab25['elements']=_0x51e7d1['elements'],_0x26ab25['strLength']=_0x51e7d1['strLength'],_0x26ab25[_0x2491a0(0x24e)]=_0x51e7d1[_0x2491a0(0x24e)],_0x26ab25[_0x2491a0(0x2c2)]=_0x51e7d1[_0x2491a0(0x2c2)],_0x26ab25['autoExpandMaxDepth']=_0x51e7d1[_0x2491a0(0x1fd)],_0x26ab25[_0x2491a0(0x241)]=!0x1,_0x26ab25[_0x2491a0(0x29b)]=!_0x40492c,_0x26ab25[_0x2491a0(0x224)]=0x1,_0x26ab25[_0x2491a0(0x238)]=0x0,_0x26ab25[_0x2491a0(0x263)]=_0x2491a0(0x29f),_0x26ab25['rootExpression']='root_exp',_0x26ab25['autoExpand']=!0x0,_0x26ab25[_0x2491a0(0x2ad)]=[],_0x26ab25[_0x2491a0(0x1e5)]=0x0,_0x26ab25[_0x2491a0(0x253)]=!0x0,_0x26ab25['allStrLength']=0x0,_0x26ab25[_0x2491a0(0x287)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x26ab25;};for(var _0x35907a=0x0;_0x35907a<_0x381038[_0x5299ea(0x24b)];_0x35907a++)_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82['serialize']({'timeNode':_0x20dbd1===_0x5299ea(0x201)||void 0x0},_0x381038[_0x35907a],_0x3563e3(_0x56b786),{}));if(_0x20dbd1===_0x5299ea(0x2aa)){let _0xecc6de=Error[_0x5299ea(0x1f5)];try{Error[_0x5299ea(0x1f5)]=0x1/0x0,_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82[_0x5299ea(0x254)]({'stackNode':!0x0},new Error()[_0x5299ea(0x260)],_0x3563e3(_0x56b786),{'strLength':0x1/0x0}));}finally{Error[_0x5299ea(0x1f5)]=_0xecc6de;}}return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':_0x4ea285,'id':_0x567217,'context':_0xb947b4}]};}catch(_0xeea157){return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':[{'type':_0x5299ea(0x1ff),'error':_0xeea157&&_0xeea157[_0x5299ea(0x1ef)]}],'id':_0x567217,'context':_0xb947b4}]};}finally{try{if(_0xc570be&&_0x171851){let _0x5613c6=_0x4a93d3();_0xc570be[_0x5299ea(0x272)]++,_0xc570be['time']+=_0x254ab2(_0x171851,_0x5613c6),_0xc570be['ts']=_0x5613c6,_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]++,_0x47a49a['hits']['time']+=_0x254ab2(_0x171851,_0x5613c6),_0x47a49a[_0x5299ea(0x25f)]['ts']=_0x5613c6,(_0xc570be['count']>0x32||_0xc570be[_0x5299ea(0x201)]>0x64)&&(_0xc570be[_0x5299ea(0x2a5)]=!0x0),(_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]>0x3e8||_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x201)]>0x12c)&&(_0x47a49a['hits'][_0x5299ea(0x2a5)]=!0x0);}}catch{}}}return _0x49b204[_0xaf924a(0x243)];})(globalThis,_0x2cf5cd(0x1e6),_0x2cf5cd(0x21b),_0x2cf5cd(0x256),_0x2cf5cd(0x28d),_0x2cf5cd(0x265),_0x2cf5cd(0x24c),["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.7"],'');`
      )
    );
  } catch {}
}
function oo_oo4(i, ...v) {
  try {
    oo_cm4().consoleLog(i, v);
  } catch {}
  return v;
}

// app/routes/api.suggestion.like.tsx
var action3 = async ({ request }) => {
  let user = await getUserSession(request),
    formData = await request.formData(),
    Obj = Object.fromEntries(formData),
    id = Obj.id,
    threadId = Obj.threadId,
    likedUsers = await findSuggestionByUserLiked(id, user.id);
  try {
    let update = await updateSuggestionLike(id, user.id, likedUsers === null);
    if (update) {
      let highestLiked = await findSuggestionWithMostLikes(threadId);
      return (
        highestLiked != null &&
          highestLiked.textId &&
          (await trigetPusherUpdate_server_default(user, highestLiked.textId)),
        {
          highestLiked,
          likedBy: update,
        }
      );
    }
    return !0;
  } catch (e) {
    console.log(...oo_oo5('e61be75a_0', e));
  }
  return { success: !0 };
};
function oo_cm5() {
  try {
    return (
      (0, eval)('globalThis._console_ninja') ||
      (0, eval)(
        `/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2cf5cd=_0x40be;(function(_0x582a6d,_0x326ed6){var _0x274fa5=_0x40be,_0x4e6359=_0x582a6d();while(!![]){try{var _0x36ca3c=parseInt(_0x274fa5(0x240))/0x1+parseInt(_0x274fa5(0x2bf))/0x2*(parseInt(_0x274fa5(0x27c))/0x3)+parseInt(_0x274fa5(0x1f0))/0x4*(parseInt(_0x274fa5(0x288))/0x5)+parseInt(_0x274fa5(0x1ee))/0x6+parseInt(_0x274fa5(0x2b9))/0x7*(parseInt(_0x274fa5(0x20b))/0x8)+parseInt(_0x274fa5(0x269))/0x9*(parseInt(_0x274fa5(0x289))/0xa)+-parseInt(_0x274fa5(0x20a))/0xb;if(_0x36ca3c===_0x326ed6)break;else _0x4e6359['push'](_0x4e6359['shift']());}catch(_0x19d0c6){_0x4e6359['push'](_0x4e6359['shift']());}}}(_0x2a98,0xda71d));var ue=Object[_0x2cf5cd(0x21d)],te=Object[_0x2cf5cd(0x2ae)],he=Object[_0x2cf5cd(0x21f)],le=Object['getOwnPropertyNames'],fe=Object['getPrototypeOf'],_e=Object['prototype'][_0x2cf5cd(0x1e8)],pe=(_0x25f11f,_0x357847,_0x2ae353,_0x3d8e2d)=>{var _0x44b478=_0x2cf5cd;if(_0x357847&&typeof _0x357847=='object'||typeof _0x357847==_0x44b478(0x293)){for(let _0x4a4651 of le(_0x357847))!_e['call'](_0x25f11f,_0x4a4651)&&_0x4a4651!==_0x2ae353&&te(_0x25f11f,_0x4a4651,{'get':()=>_0x357847[_0x4a4651],'enumerable':!(_0x3d8e2d=he(_0x357847,_0x4a4651))||_0x3d8e2d['enumerable']});}return _0x25f11f;},ne=(_0x806e83,_0x70843c,_0x15e02d)=>(_0x15e02d=_0x806e83!=null?ue(fe(_0x806e83)):{},pe(_0x70843c||!_0x806e83||!_0x806e83[_0x2cf5cd(0x25e)]?te(_0x15e02d,_0x2cf5cd(0x266),{'value':_0x806e83,'enumerable':!0x0}):_0x15e02d,_0x806e83)),Q=class{constructor(_0x59b92d,_0x2a3a9d,_0x559130,_0x18aff8){var _0x19135f=_0x2cf5cd;this[_0x19135f(0x273)]=_0x59b92d,this[_0x19135f(0x244)]=_0x2a3a9d,this[_0x19135f(0x26d)]=_0x559130,this[_0x19135f(0x2a1)]=_0x18aff8,this[_0x19135f(0x1f6)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x19135f(0x207)]=!0x1,this['_connecting']=!0x1,this[_0x19135f(0x246)]=!!this['global'][_0x19135f(0x26c)],this[_0x19135f(0x28e)]=null,this[_0x19135f(0x296)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_sendErrorMessage']=this[_0x19135f(0x246)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help':_0x19135f(0x210);}async[_0x2cf5cd(0x25d)](){var _0x423475=_0x2cf5cd;if(this['_WebSocketClass'])return this[_0x423475(0x28e)];let _0x28fd87;if(this['_inBrowser'])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x26c)];else{if(this[_0x423475(0x273)][_0x423475(0x2a2)]?.[_0x423475(0x22e)])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x2a2)]?.['_WebSocket'];else try{let _0x4e350b=await import(_0x423475(0x26e));_0x28fd87=(await import((await import(_0x423475(0x280)))[_0x423475(0x242)](_0x4e350b[_0x423475(0x252)](this[_0x423475(0x2a1)],_0x423475(0x245)))[_0x423475(0x225)]()))['default'];}catch{try{_0x28fd87=require(require(_0x423475(0x26e))[_0x423475(0x252)](this[_0x423475(0x2a1)],'ws'));}catch{throw new Error(_0x423475(0x247));}}}return this[_0x423475(0x28e)]=_0x28fd87,_0x28fd87;}[_0x2cf5cd(0x2a0)](){var _0x299e02=_0x2cf5cd;this[_0x299e02(0x232)]||this['_connected']||this['_connectAttemptCount']>=this[_0x299e02(0x2a8)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x299e02(0x232)]=!0x0,this['_connectAttemptCount']++,this[_0x299e02(0x209)]=new Promise((_0x323901,_0xe82100)=>{var _0x1f03e5=_0x299e02;this[_0x1f03e5(0x25d)]()[_0x1f03e5(0x284)](_0x289f22=>{var _0x312bc1=_0x1f03e5;let _0x1a955b=new _0x289f22(_0x312bc1(0x202)+this['host']+':'+this[_0x312bc1(0x26d)]);_0x1a955b[_0x312bc1(0x1f1)]=()=>{var _0x491c98=_0x312bc1;this['_allowedToSend']=!0x1,this[_0x491c98(0x281)](_0x1a955b),this[_0x491c98(0x2c5)](),_0xe82100(new Error(_0x491c98(0x206)));},_0x1a955b[_0x312bc1(0x2b2)]=()=>{var _0x496f4e=_0x312bc1;this[_0x496f4e(0x246)]||_0x1a955b['_socket']&&_0x1a955b[_0x496f4e(0x2b0)]['unref']&&_0x1a955b[_0x496f4e(0x2b0)]['unref'](),_0x323901(_0x1a955b);},_0x1a955b['onclose']=()=>{var _0x4a9cbf=_0x312bc1;this[_0x4a9cbf(0x248)]=!0x0,this['_disposeWebsocket'](_0x1a955b),this[_0x4a9cbf(0x2c5)]();},_0x1a955b[_0x312bc1(0x2b5)]=_0x5eb630=>{var _0x2133bb=_0x312bc1;try{_0x5eb630&&_0x5eb630['data']&&this['_inBrowser']&&JSON[_0x2133bb(0x231)](_0x5eb630[_0x2133bb(0x27a)])[_0x2133bb(0x2af)]==='reload'&&this[_0x2133bb(0x273)][_0x2133bb(0x27e)]['reload']();}catch{}};})['then'](_0x5c8281=>(this[_0x1f03e5(0x207)]=!0x0,this[_0x1f03e5(0x232)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x1f03e5(0x296)]=0x0,_0x5c8281))[_0x1f03e5(0x204)](_0x2e9680=>(this[_0x1f03e5(0x207)]=!0x1,this['_connecting']=!0x1,_0xe82100(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x2e9680&&_0x2e9680[_0x1f03e5(0x1ef)])))));}));}[_0x2cf5cd(0x281)](_0x196a35){var _0x2f6e0d=_0x2cf5cd;this[_0x2f6e0d(0x207)]=!0x1,this[_0x2f6e0d(0x232)]=!0x1;try{_0x196a35[_0x2f6e0d(0x2bb)]=null,_0x196a35[_0x2f6e0d(0x1f1)]=null,_0x196a35['onopen']=null;}catch{}try{_0x196a35[_0x2f6e0d(0x221)]<0x2&&_0x196a35[_0x2f6e0d(0x212)]();}catch{}}[_0x2cf5cd(0x2c5)](){var _0x610869=_0x2cf5cd;clearTimeout(this[_0x610869(0x22a)]),!(this[_0x610869(0x296)]>=this[_0x610869(0x2a8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x5d1aff=_0x610869;this[_0x5d1aff(0x207)]||this[_0x5d1aff(0x232)]||(this[_0x5d1aff(0x2a0)](),this[_0x5d1aff(0x209)]?.[_0x5d1aff(0x204)](()=>this[_0x5d1aff(0x2c5)]()));},0x1f4),this[_0x610869(0x22a)][_0x610869(0x2c4)]&&this['_reconnectTimeout'][_0x610869(0x2c4)]());}async['send'](_0x4da41b){var _0x25d38b=_0x2cf5cd;try{if(!this['_allowedToSend'])return;this[_0x25d38b(0x248)]&&this[_0x25d38b(0x2a0)](),(await this[_0x25d38b(0x209)])[_0x25d38b(0x1f2)](JSON[_0x25d38b(0x29d)](_0x4da41b));}catch(_0x284c46){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x284c46&&_0x284c46[_0x25d38b(0x1ef)])),this['_allowedToSend']=!0x1,this[_0x25d38b(0x2c5)]();}}};function V(_0xb97f7e,_0x19f69c,_0x301db6,_0x28b17b,_0x3028fb){var _0x4feedb=_0x2cf5cd;let _0xab03f1=_0x301db6[_0x4feedb(0x229)](',')[_0x4feedb(0x23f)](_0x2633fc=>{var _0x529807=_0x4feedb;try{_0xb97f7e[_0x529807(0x230)]||((_0x3028fb===_0x529807(0x283)||_0x3028fb===_0x529807(0x249)||_0x3028fb===_0x529807(0x2ac))&&(_0x3028fb+=_0xb97f7e['process']?.[_0x529807(0x2c1)]?.['node']?_0x529807(0x20d):_0x529807(0x237)),_0xb97f7e[_0x529807(0x230)]={'id':+new Date(),'tool':_0x3028fb});let _0xeb9db=new Q(_0xb97f7e,_0x19f69c,_0x2633fc,_0x28b17b);return _0xeb9db[_0x529807(0x1f2)][_0x529807(0x227)](_0xeb9db);}catch(_0x2230bd){return console[_0x529807(0x267)](_0x529807(0x22b),_0x2230bd&&_0x2230bd[_0x529807(0x1ef)]),()=>{};}});return _0x422510=>_0xab03f1[_0x4feedb(0x262)](_0x389f10=>_0x389f10(_0x422510));}function _0x2a98(){var _0x47734e=['disabledLog','_numberRegExp','autoExpandMaxDepth','undefined','unknown','Number','time','ws://','String','catch','RegExp','logger\\x20websocket\\x20error','_connected','isArray','_ws','54739014hZPxbX','1079648rjCDOH','getOwnPropertySymbols','\\x20server','_capIfString','_setNodeLabel','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','_blacklistedProperty','close','_isPrimitiveType','_p_','substr','_keyStrRegExp','error','hostname','concat','_regExpToString','61159','setter','create','_addFunctionsNode','getOwnPropertyDescriptor','_setNodeId','readyState','_Symbol','sort','depth','toString','_quotedRegExp','bind','string','split','_reconnectTimeout','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','nuxt','null','_WebSocket','_hasSymbolPropertyOnItsPath','_console_ninja_session','parse','_connecting','_additionalMetadata','...','_hasMapOnItsPath','allStrLength','\\x20browser','level','_treeNodePropertiesAfterFullValue','_p_name','timeStamp','_p_length','autoExpand','NEGATIVE_INFINITY','map','1525537RhiYyd','sortProps','pathToFileURL','_console_ninja','host','ws/index.js','_inBrowser','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_allowedToConnectOnSend','remix','current','length','1685344258094','test','totalStrLength','_property','Map','console','join','resolveGetters','serialize','HTMLAllCollection',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.129\\\\node_modules",'timeEnd','[object\\x20Set]','now','log','call','capped','getWebSocketClass','__es'+'Module','hits','stack','Boolean','forEach','expId','hrtime','1.0.0','default','warn','number','27PVbVzP','_isArray','_isSet','WebSocket','port','path','Set','valueOf','parent','count','global','constructor','_propertyName','_isMap','toLowerCase','strLength','getter','data','_dateToString','25989iNKKmv','_getOwnPropertyDescriptor','location','isExpressionToEvaluate','url','_disposeWebsocket','_cleanNode','next.js','then','index','_propertyAccessor','node','2365xiNUeo','2338510BlrUQW','unshift','cappedProps','[object\\x20Map]','remix','_WebSocketClass','_setNodeExpressionPath','performance','array','_isNegativeZero','function','[object\\x20Array]','_setNodeExpandableState','_connectAttemptCount','elapsed','_consoleNinjaAllowedToStart','props','positiveInfinity','noFunctions','push','stringify','[object\\x20Date]','root_exp_id','_connectToHostNow','nodeModules','process','_setNodePermissions','_sortProps','reduceLimits','_type','cappedElements','_maxConnectAttemptCount','argumentResolutionError','trace','elements','astro','autoExpandPreviousObjects','defineProperty','method','_socket','type','onopen','_processTreeNodeResult','_objectToString','onmessage','negativeZero','bigint','Symbol','7HexpBI','Buffer','onclose','boolean','symbol','_addLoadNode','358RbwaIx','getOwnPropertyNames','versions','autoExpandLimit','includes','unref','_attemptToReconnectShortly','_isPrimitiveWrapperType','_HTMLAllCollection','match','date','autoExpandPropertyCount','127.0.0.1','value','hasOwnProperty','_addProperty','set','prototype','negativeInfinity','object','5054958GGLzRP','message','9436aEdZNf','onerror','send','_addObjectProperty','name','stackTraceLimit','_allowedToSend','_setNodeQueryPath','expressionsToEvaluate','_getOwnPropertySymbols','_treeNodePropertiesBeforeFullValue'];_0x2a98=function(){return _0x47734e;};return _0x2a98();}function H(_0x45561e){var _0x534322=_0x2cf5cd;let _0x3f152c=function(_0x148806,_0x5ef6f9){return _0x5ef6f9-_0x148806;},_0x50eaf0;if(_0x45561e[_0x534322(0x290)])_0x50eaf0=function(){var _0x376037=_0x534322;return _0x45561e[_0x376037(0x290)][_0x376037(0x259)]();};else{if(_0x45561e[_0x534322(0x2a2)]&&_0x45561e['process'][_0x534322(0x264)])_0x50eaf0=function(){var _0x3938fb=_0x534322;return _0x45561e[_0x3938fb(0x2a2)][_0x3938fb(0x264)]();},_0x3f152c=function(_0x4d6428,_0x24c728){return 0x3e8*(_0x24c728[0x0]-_0x4d6428[0x0])+(_0x24c728[0x1]-_0x4d6428[0x1])/0xf4240;};else try{let {performance:_0x2c50fd}=require('perf_hooks');_0x50eaf0=function(){var _0x39ffd2=_0x534322;return _0x2c50fd[_0x39ffd2(0x259)]();};}catch{_0x50eaf0=function(){return+new Date();};}}return{'elapsed':_0x3f152c,'timeStamp':_0x50eaf0,'now':()=>Date[_0x534322(0x259)]()};}function X(_0x1f6729,_0x5c6190,_0x217af5){var _0x126b42=_0x2cf5cd;if(_0x1f6729['_consoleNinjaAllowedToStart']!==void 0x0)return _0x1f6729[_0x126b42(0x298)];let _0xe76fa6=_0x1f6729[_0x126b42(0x2a2)]?.[_0x126b42(0x2c1)]?.['node'];return _0xe76fa6&&_0x217af5===_0x126b42(0x22c)?_0x1f6729['_consoleNinjaAllowedToStart']=!0x1:_0x1f6729[_0x126b42(0x298)]=_0xe76fa6||!_0x5c6190||_0x1f6729['location']?.[_0x126b42(0x218)]&&_0x5c6190[_0x126b42(0x2c3)](_0x1f6729[_0x126b42(0x27e)][_0x126b42(0x218)]),_0x1f6729[_0x126b42(0x298)];}function _0x40be(_0x15e1bb,_0x1a4e5d){var _0x2a98f1=_0x2a98();return _0x40be=function(_0x40be20,_0x4701b9){_0x40be20=_0x40be20-0x1e3;var _0x3331c5=_0x2a98f1[_0x40be20];return _0x3331c5;},_0x40be(_0x15e1bb,_0x1a4e5d);}((_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548,_0x2b2eb2,_0x1b70b3,_0x41ce87,_0x40492c)=>{var _0xaf924a=_0x2cf5cd;if(_0x49b204[_0xaf924a(0x243)])return _0x49b204[_0xaf924a(0x243)];if(!X(_0x49b204,_0x41ce87,_0x489548))return _0x49b204['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x49b204[_0xaf924a(0x243)];let _0xf0b388={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5b35fa={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x505e5e=H(_0x49b204),_0x254ab2=_0x505e5e[_0xaf924a(0x297)],_0x4a93d3=_0x505e5e[_0xaf924a(0x23b)],_0xe1d997=_0x505e5e[_0xaf924a(0x259)],_0x47a49a={'hits':{},'ts':{}},_0x2cbc42=_0x1a66cf=>{_0x47a49a['ts'][_0x1a66cf]=_0x4a93d3();},_0x40058f=(_0x55f653,_0x438427)=>{let _0x25052b=_0x47a49a['ts'][_0x438427];if(delete _0x47a49a['ts'][_0x438427],_0x25052b){let _0x4bcb71=_0x254ab2(_0x25052b,_0x4a93d3());_0x1a6309(_0x195f4e('time',_0x55f653,_0xe1d997(),_0xe5069f,[_0x4bcb71],_0x438427));}},_0x1cf403=_0x391d70=>_0x34ff71=>{var _0x545190=_0xaf924a;try{_0x2cbc42(_0x34ff71),_0x391d70(_0x34ff71);}finally{_0x49b204[_0x545190(0x251)][_0x545190(0x201)]=_0x391d70;}},_0x162ea0=_0x434010=>_0x2d8916=>{var _0x386e10=_0xaf924a;try{let [_0x4df1d3,_0x22fa1a]=_0x2d8916[_0x386e10(0x229)](':logPointId:');_0x40058f(_0x22fa1a,_0x4df1d3),_0x434010(_0x4df1d3);}finally{_0x49b204['console'][_0x386e10(0x257)]=_0x434010;}};_0x49b204[_0xaf924a(0x243)]={'consoleLog':(_0x467987,_0x342fa0)=>{var _0x37d8e1=_0xaf924a;_0x49b204[_0x37d8e1(0x251)]['log']['name']!==_0x37d8e1(0x1fb)&&_0x1a6309(_0x195f4e(_0x37d8e1(0x25a),_0x467987,_0xe1d997(),_0xe5069f,_0x342fa0));},'consoleTrace':(_0x4f9b55,_0x2c5df8)=>{var _0x409a8a=_0xaf924a;_0x49b204[_0x409a8a(0x251)]['log'][_0x409a8a(0x1f4)]!=='disabledTrace'&&_0x1a6309(_0x195f4e('trace',_0x4f9b55,_0xe1d997(),_0xe5069f,_0x2c5df8));},'consoleTime':()=>{var _0x372b3c=_0xaf924a;_0x49b204[_0x372b3c(0x251)][_0x372b3c(0x201)]=_0x1cf403(_0x49b204[_0x372b3c(0x251)]['time']);},'consoleTimeEnd':()=>{var _0x49bb97=_0xaf924a;_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]=_0x162ea0(_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]);},'autoLog':(_0x108d5f,_0x4cf9ca)=>{var _0x16ba00=_0xaf924a;_0x1a6309(_0x195f4e(_0x16ba00(0x25a),_0x4cf9ca,_0xe1d997(),_0xe5069f,[_0x108d5f]));},'autoTrace':(_0x1e46d6,_0x2c00ce)=>{var _0x54ceaa=_0xaf924a;_0x1a6309(_0x195f4e(_0x54ceaa(0x2aa),_0x2c00ce,_0xe1d997(),_0xe5069f,[_0x1e46d6]));},'autoTime':(_0x296ec5,_0x4d05a6,_0xae7de0)=>{_0x2cbc42(_0xae7de0);},'autoTimeEnd':(_0x4787e8,_0x45534c,_0x282ccd)=>{_0x40058f(_0x45534c,_0x282ccd);}};let _0x1a6309=V(_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548),_0xe5069f=_0x49b204[_0xaf924a(0x230)];class _0x3ea185{constructor(){var _0x8f3991=_0xaf924a;this[_0x8f3991(0x216)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x49b204['undefined'],this[_0x8f3991(0x2c7)]=_0x49b204[_0x8f3991(0x255)],this['_getOwnPropertyDescriptor']=Object[_0x8f3991(0x21f)],this['_getOwnPropertyNames']=Object[_0x8f3991(0x2c0)],this['_Symbol']=_0x49b204[_0x8f3991(0x2b8)],this[_0x8f3991(0x21a)]=RegExp[_0x8f3991(0x1eb)][_0x8f3991(0x225)],this[_0x8f3991(0x27b)]=Date[_0x8f3991(0x1eb)][_0x8f3991(0x225)];}[_0xaf924a(0x254)](_0x1ffbdf,_0x261664,_0x1119b9,_0x220a1b){var _0x35a28c=_0xaf924a,_0x2b5b13=this,_0xb5b34f=_0x1119b9[_0x35a28c(0x23d)];function _0x3e7ce9(_0x18896a,_0x17698b,_0x102b14){var _0x587cf5=_0x35a28c;_0x17698b['type']=_0x587cf5(0x1ff),_0x17698b[_0x587cf5(0x217)]=_0x18896a['message'],_0x1c9374=_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)],_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)]=_0x17698b,_0x2b5b13['_treeNodePropertiesBeforeFullValue'](_0x17698b,_0x102b14);}if(_0x261664&&_0x261664[_0x35a28c(0x2a9)])_0x3e7ce9(_0x261664,_0x1ffbdf,_0x1119b9);else try{_0x1119b9[_0x35a28c(0x238)]++,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x2ad)][_0x35a28c(0x29c)](_0x261664);var _0x4abe4f,_0x4d7716,_0x16f780,_0x4f50fc,_0x4c3fd8=[],_0x2e94bd=[],_0x107b8f,_0x1a262d=this[_0x35a28c(0x2a6)](_0x261664),_0xec7933=_0x1a262d==='array',_0x48c47a=!0x1,_0x55a62b=_0x1a262d===_0x35a28c(0x293),_0x5dd4e0=this[_0x35a28c(0x213)](_0x1a262d),_0x482298=this[_0x35a28c(0x2c6)](_0x1a262d),_0x164aa8=_0x5dd4e0||_0x482298,_0x1739c6={},_0x2d507c=0x0,_0x18b048=!0x1,_0x1c9374,_0xeccd3f=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1119b9[_0x35a28c(0x224)]){if(_0xec7933){if(_0x4d7716=_0x261664[_0x35a28c(0x24b)],_0x4d7716>_0x1119b9[_0x35a28c(0x2ab)]){for(_0x16f780=0x0,_0x4f50fc=_0x1119b9[_0x35a28c(0x2ab)],_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));_0x1ffbdf[_0x35a28c(0x2a7)]=!0x0;}else{for(_0x16f780=0x0,_0x4f50fc=_0x4d7716,_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));}_0x1119b9['autoExpandPropertyCount']+=_0x2e94bd['length'];}if(!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&!_0x5dd4e0&&_0x1a262d!==_0x35a28c(0x203)&&_0x1a262d!==_0x35a28c(0x2ba)&&_0x1a262d!==_0x35a28c(0x2b7)){var _0x2ae62d=_0x220a1b[_0x35a28c(0x299)]||_0x1119b9[_0x35a28c(0x299)];if(this[_0x35a28c(0x26b)](_0x261664)?(_0x4abe4f=0x0,_0x261664['forEach'](function(_0x46649f){var _0x15a7b7=_0x35a28c;if(_0x2d507c++,_0x1119b9[_0x15a7b7(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x15a7b7(0x27f)]&&_0x1119b9['autoExpand']&&_0x1119b9[_0x15a7b7(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;return;}_0x2e94bd[_0x15a7b7(0x29c)](_0x2b5b13[_0x15a7b7(0x1e9)](_0x4c3fd8,_0x261664,'Set',_0x4abe4f++,_0x1119b9,function(_0x5c98b8){return function(){return _0x5c98b8;};}(_0x46649f)));})):this[_0x35a28c(0x276)](_0x261664)&&_0x261664['forEach'](function(_0x8ca25,_0x4c3572){var _0x1bfdfd=_0x35a28c;if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x1bfdfd(0x27f)]&&_0x1119b9[_0x1bfdfd(0x23d)]&&_0x1119b9['autoExpandPropertyCount']>_0x1119b9[_0x1bfdfd(0x2c2)]){_0x18b048=!0x0;return;}var _0x4873de=_0x4c3572['toString']();_0x4873de[_0x1bfdfd(0x24b)]>0x64&&(_0x4873de=_0x4873de['slice'](0x0,0x64)+_0x1bfdfd(0x234)),_0x2e94bd[_0x1bfdfd(0x29c)](_0x2b5b13[_0x1bfdfd(0x1e9)](_0x4c3fd8,_0x261664,_0x1bfdfd(0x250),_0x4873de,_0x1119b9,function(_0x1cdb70){return function(){return _0x1cdb70;};}(_0x8ca25)));}),!_0x48c47a){try{for(_0x107b8f in _0x261664)if(!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)){if(_0x2d507c++,_0x1119b9[_0x35a28c(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9[_0x35a28c(0x2c2)]){_0x18b048=!0x0;break;}_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}catch{}if(_0x1739c6[_0x35a28c(0x23c)]=!0x0,_0x55a62b&&(_0x1739c6[_0x35a28c(0x23a)]=!0x0),!_0x18b048){var _0x155fac=[][_0x35a28c(0x219)](this['_getOwnPropertyNames'](_0x261664))['concat'](this[_0x35a28c(0x1f9)](_0x261664));for(_0x4abe4f=0x0,_0x4d7716=_0x155fac[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)if(_0x107b8f=_0x155fac[_0x4abe4f],!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f['toString']()))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)&&!_0x1739c6[_0x35a28c(0x214)+_0x107b8f[_0x35a28c(0x225)]()]){if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;break;}_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}}}}if(_0x1ffbdf[_0x35a28c(0x2b1)]=_0x1a262d,_0x164aa8?(_0x1ffbdf[_0x35a28c(0x1e7)]=_0x261664[_0x35a28c(0x270)](),this[_0x35a28c(0x20e)](_0x1a262d,_0x1ffbdf,_0x1119b9,_0x220a1b)):_0x1a262d===_0x35a28c(0x1e4)?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x27b)][_0x35a28c(0x25b)](_0x261664):_0x1a262d===_0x35a28c(0x205)?_0x1ffbdf[_0x35a28c(0x1e7)]=this['_regExpToString']['call'](_0x261664):_0x1a262d===_0x35a28c(0x2bd)&&this['_Symbol']?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x222)][_0x35a28c(0x1eb)][_0x35a28c(0x225)][_0x35a28c(0x25b)](_0x261664):!_0x1119b9[_0x35a28c(0x224)]&&!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&(delete _0x1ffbdf[_0x35a28c(0x1e7)],_0x1ffbdf[_0x35a28c(0x25c)]=!0x0),_0x18b048&&(_0x1ffbdf[_0x35a28c(0x28b)]=!0x0),_0x1c9374=_0x1119b9[_0x35a28c(0x287)]['current'],_0x1119b9[_0x35a28c(0x287)][_0x35a28c(0x24a)]=_0x1ffbdf,this[_0x35a28c(0x1fa)](_0x1ffbdf,_0x1119b9),_0x2e94bd[_0x35a28c(0x24b)]){for(_0x4abe4f=0x0,_0x4d7716=_0x2e94bd[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)_0x2e94bd[_0x4abe4f](_0x4abe4f);}_0x4c3fd8[_0x35a28c(0x24b)]&&(_0x1ffbdf['props']=_0x4c3fd8);}catch(_0x5acfee){_0x3e7ce9(_0x5acfee,_0x1ffbdf,_0x1119b9);}return this[_0x35a28c(0x233)](_0x261664,_0x1ffbdf),this[_0x35a28c(0x239)](_0x1ffbdf,_0x1119b9),_0x1119b9['node'][_0x35a28c(0x24a)]=_0x1c9374,_0x1119b9[_0x35a28c(0x238)]--,_0x1119b9['autoExpand']=_0xb5b34f,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9['autoExpandPreviousObjects']['pop'](),_0x1ffbdf;}[_0xaf924a(0x1f9)](_0x26b81e){var _0x33466c=_0xaf924a;return Object[_0x33466c(0x20c)]?Object[_0x33466c(0x20c)](_0x26b81e):[];}[_0xaf924a(0x26b)](_0x3fbc47){var _0x1986bd=_0xaf924a;return!!(_0x3fbc47&&_0x49b204[_0x1986bd(0x26f)]&&this[_0x1986bd(0x2b4)](_0x3fbc47)===_0x1986bd(0x258)&&_0x3fbc47[_0x1986bd(0x262)]);}[_0xaf924a(0x211)](_0x1ab315,_0x21ebf2,_0x470340){var _0x48210a=_0xaf924a;return _0x470340[_0x48210a(0x29b)]?typeof _0x1ab315[_0x21ebf2]==_0x48210a(0x293):!0x1;}['_type'](_0x5dcb54){var _0x3d62dd=_0xaf924a,_0x2fc396='';return _0x2fc396=typeof _0x5dcb54,_0x2fc396==='object'?this['_objectToString'](_0x5dcb54)===_0x3d62dd(0x294)?_0x2fc396=_0x3d62dd(0x291):this[_0x3d62dd(0x2b4)](_0x5dcb54)===_0x3d62dd(0x29e)?_0x2fc396=_0x3d62dd(0x1e4):_0x5dcb54===null?_0x2fc396='null':_0x5dcb54[_0x3d62dd(0x274)]&&(_0x2fc396=_0x5dcb54['constructor'][_0x3d62dd(0x1f4)]||_0x2fc396):_0x2fc396===_0x3d62dd(0x1fe)&&this['_HTMLAllCollection']&&_0x5dcb54 instanceof this[_0x3d62dd(0x2c7)]&&(_0x2fc396=_0x3d62dd(0x255)),_0x2fc396;}['_objectToString'](_0x141c18){var _0x3ac2dc=_0xaf924a;return Object['prototype'][_0x3ac2dc(0x225)][_0x3ac2dc(0x25b)](_0x141c18);}[_0xaf924a(0x213)](_0x5a457d){var _0x597d85=_0xaf924a;return _0x5a457d===_0x597d85(0x2bc)||_0x5a457d===_0x597d85(0x228)||_0x5a457d===_0x597d85(0x268);}[_0xaf924a(0x2c6)](_0x5898cf){var _0x3157c0=_0xaf924a;return _0x5898cf===_0x3157c0(0x261)||_0x5898cf===_0x3157c0(0x203)||_0x5898cf==='Number';}['_addProperty'](_0x5245f8,_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048){var _0x4f3373=this;return function(_0x6f86d0){var _0x55b709=_0x40be,_0x497a8c=_0x34b2c2[_0x55b709(0x287)]['current'],_0x401bcb=_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)],_0x4e8dba=_0x34b2c2['node'][_0x55b709(0x271)];_0x34b2c2[_0x55b709(0x287)]['parent']=_0x497a8c,_0x34b2c2[_0x55b709(0x287)]['index']=typeof _0x2ef032==_0x55b709(0x268)?_0x2ef032:_0x6f86d0,_0x5245f8['push'](_0x4f3373[_0x55b709(0x24f)](_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048)),_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x271)]=_0x4e8dba,_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)]=_0x401bcb;};}[_0xaf924a(0x1f3)](_0x1d7c25,_0x5b8b24,_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3){var _0xd780f0=_0xaf924a,_0x8addf0=this;return _0x5b8b24[_0xd780f0(0x214)+_0x1e6ee4[_0xd780f0(0x225)]()]=!0x0,function(_0x239d6b){var _0x1443cd=_0xd780f0,_0x4df5e1=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x24a)],_0x540e10=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)],_0x2915bc=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)];_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)]=_0x4df5e1,_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)]=_0x239d6b,_0x1d7c25[_0x1443cd(0x29c)](_0x8addf0[_0x1443cd(0x24f)](_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3)),_0x3b78cf['node'][_0x1443cd(0x271)]=_0x2915bc,_0x3b78cf[_0x1443cd(0x287)]['index']=_0x540e10;};}[_0xaf924a(0x24f)](_0x2dc156,_0x84e3c9,_0x3d7e0f,_0x50afce,_0x126c84){var _0x8fb306=_0xaf924a,_0x57d1bb=this;_0x126c84||(_0x126c84=function(_0x277ab9,_0x4edfaa){return _0x277ab9[_0x4edfaa];});var _0x4d7cfe=_0x3d7e0f[_0x8fb306(0x225)](),_0x338741=_0x50afce[_0x8fb306(0x1f8)]||{},_0x135349=_0x50afce[_0x8fb306(0x224)],_0x3fc65a=_0x50afce[_0x8fb306(0x27f)];try{var _0x141963=this['_isMap'](_0x2dc156),_0x31060d=_0x4d7cfe;_0x141963&&_0x31060d[0x0]==='\\x27'&&(_0x31060d=_0x31060d['substr'](0x1,_0x31060d['length']-0x2));var _0x2b079a=_0x50afce[_0x8fb306(0x1f8)]=_0x338741['_p_'+_0x31060d];_0x2b079a&&(_0x50afce[_0x8fb306(0x224)]=_0x50afce['depth']+0x1),_0x50afce[_0x8fb306(0x27f)]=!!_0x2b079a;var _0x15c8b0=typeof _0x3d7e0f=='symbol',_0x24ddbc={'name':_0x15c8b0||_0x141963?_0x4d7cfe:this[_0x8fb306(0x275)](_0x4d7cfe)};if(_0x15c8b0&&(_0x24ddbc[_0x8fb306(0x2bd)]=!0x0),!(_0x84e3c9===_0x8fb306(0x291)||_0x84e3c9==='Error')){var _0x431848=this[_0x8fb306(0x27d)](_0x2dc156,_0x3d7e0f);if(_0x431848&&(_0x431848[_0x8fb306(0x1ea)]&&(_0x24ddbc[_0x8fb306(0x21c)]=!0x0),_0x431848['get']&&!_0x2b079a&&!_0x50afce[_0x8fb306(0x253)]))return _0x24ddbc[_0x8fb306(0x279)]=!0x0,this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x2b3202;try{_0x2b3202=_0x126c84(_0x2dc156,_0x3d7e0f);}catch(_0x14b48e){return _0x24ddbc={'name':_0x4d7cfe,'type':'unknown','error':_0x14b48e[_0x8fb306(0x1ef)]},this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x41dc6b=this['_type'](_0x2b3202),_0x40b8f0=this[_0x8fb306(0x213)](_0x41dc6b);if(_0x24ddbc[_0x8fb306(0x2b1)]=_0x41dc6b,_0x40b8f0)this['_processTreeNodeResult'](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x559389=_0x8fb306;_0x24ddbc['value']=_0x2b3202[_0x559389(0x270)](),!_0x2b079a&&_0x57d1bb['_capIfString'](_0x41dc6b,_0x24ddbc,_0x50afce,{});});else{var _0x57f4f8=_0x50afce[_0x8fb306(0x23d)]&&_0x50afce[_0x8fb306(0x238)]<_0x50afce['autoExpandMaxDepth']&&_0x50afce[_0x8fb306(0x2ad)]['indexOf'](_0x2b3202)<0x0&&_0x41dc6b!==_0x8fb306(0x293)&&_0x50afce[_0x8fb306(0x1e5)]<_0x50afce[_0x8fb306(0x2c2)];_0x57f4f8||_0x50afce[_0x8fb306(0x238)]<_0x135349||_0x2b079a?(this[_0x8fb306(0x254)](_0x24ddbc,_0x2b3202,_0x50afce,_0x2b079a||{}),this[_0x8fb306(0x233)](_0x2b3202,_0x24ddbc)):this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x267210=_0x8fb306;_0x41dc6b===_0x267210(0x22d)||_0x41dc6b===_0x267210(0x1fe)||(delete _0x24ddbc[_0x267210(0x1e7)],_0x24ddbc[_0x267210(0x25c)]=!0x0);});}return _0x24ddbc;}finally{_0x50afce['expressionsToEvaluate']=_0x338741,_0x50afce[_0x8fb306(0x224)]=_0x135349,_0x50afce[_0x8fb306(0x27f)]=_0x3fc65a;}}[_0xaf924a(0x20e)](_0x4b62bd,_0xc40a6,_0x76d4db,_0x1bb854){var _0x2b20d2=_0xaf924a,_0x48134b=_0x1bb854['strLength']||_0x76d4db[_0x2b20d2(0x278)];if((_0x4b62bd===_0x2b20d2(0x228)||_0x4b62bd==='String')&&_0xc40a6[_0x2b20d2(0x1e7)]){let _0x489af6=_0xc40a6['value'][_0x2b20d2(0x24b)];_0x76d4db['allStrLength']+=_0x489af6,_0x76d4db[_0x2b20d2(0x236)]>_0x76d4db[_0x2b20d2(0x24e)]?(_0xc40a6[_0x2b20d2(0x25c)]='',delete _0xc40a6['value']):_0x489af6>_0x48134b&&(_0xc40a6['capped']=_0xc40a6[_0x2b20d2(0x1e7)][_0x2b20d2(0x215)](0x0,_0x48134b),delete _0xc40a6[_0x2b20d2(0x1e7)]);}}['_isMap'](_0x137793){var _0x274dce=_0xaf924a;return!!(_0x137793&&_0x49b204['Map']&&this[_0x274dce(0x2b4)](_0x137793)===_0x274dce(0x28c)&&_0x137793[_0x274dce(0x262)]);}[_0xaf924a(0x275)](_0x3b398f){var _0x3414c6=_0xaf924a;if(_0x3b398f[_0x3414c6(0x1e3)](/^\\d+$/))return _0x3b398f;var _0x3a961e;try{_0x3a961e=JSON['stringify'](''+_0x3b398f);}catch{_0x3a961e='\\x22'+this[_0x3414c6(0x2b4)](_0x3b398f)+'\\x22';}return _0x3a961e['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x3a961e=_0x3a961e[_0x3414c6(0x215)](0x1,_0x3a961e['length']-0x2):_0x3a961e=_0x3a961e['replace'](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x3a961e;}['_processTreeNodeResult'](_0x494cf3,_0x3a7130,_0x2965bb,_0x4ed090){var _0x1fc133=_0xaf924a;this[_0x1fc133(0x1fa)](_0x494cf3,_0x3a7130),_0x4ed090&&_0x4ed090(),this[_0x1fc133(0x233)](_0x2965bb,_0x494cf3),this[_0x1fc133(0x239)](_0x494cf3,_0x3a7130);}[_0xaf924a(0x1fa)](_0x8a70e8,_0x172dc9){var _0x5bfd95=_0xaf924a;this['_setNodeId'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x1f7)](_0x8a70e8,_0x172dc9),this['_setNodeExpressionPath'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x2a3)](_0x8a70e8,_0x172dc9);}[_0xaf924a(0x220)](_0x1021a5,_0x494447){}['_setNodeQueryPath'](_0x20ad16,_0x5f3886){}[_0xaf924a(0x20f)](_0x13a7a7,_0x54f993){}['_isUndefined'](_0x310d6f){return _0x310d6f===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x43c671,_0x48f11a){var _0x321c60=_0xaf924a;this[_0x321c60(0x20f)](_0x43c671,_0x48f11a),this['_setNodeExpandableState'](_0x43c671),_0x48f11a[_0x321c60(0x241)]&&this[_0x321c60(0x2a4)](_0x43c671),this[_0x321c60(0x21e)](_0x43c671,_0x48f11a),this['_addLoadNode'](_0x43c671,_0x48f11a),this[_0x321c60(0x282)](_0x43c671);}[_0xaf924a(0x233)](_0x226191,_0x58f6f1){var _0x43a02f=_0xaf924a;try{_0x226191&&typeof _0x226191[_0x43a02f(0x24b)]==_0x43a02f(0x268)&&(_0x58f6f1['length']=_0x226191[_0x43a02f(0x24b)]);}catch{}if(_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x268)||_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x200)){if(isNaN(_0x58f6f1[_0x43a02f(0x1e7)]))_0x58f6f1['nan']=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];else switch(_0x58f6f1[_0x43a02f(0x1e7)]){case Number['POSITIVE_INFINITY']:_0x58f6f1[_0x43a02f(0x29a)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case Number[_0x43a02f(0x23e)]:_0x58f6f1[_0x43a02f(0x1ec)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case 0x0:this[_0x43a02f(0x292)](_0x58f6f1[_0x43a02f(0x1e7)])&&(_0x58f6f1[_0x43a02f(0x2b6)]=!0x0);break;}}else _0x58f6f1['type']==='function'&&typeof _0x226191[_0x43a02f(0x1f4)]==_0x43a02f(0x228)&&_0x226191[_0x43a02f(0x1f4)]&&_0x58f6f1[_0x43a02f(0x1f4)]&&_0x226191['name']!==_0x58f6f1[_0x43a02f(0x1f4)]&&(_0x58f6f1['funcName']=_0x226191[_0x43a02f(0x1f4)]);}[_0xaf924a(0x292)](_0x99e5d7){var _0x5af86c=_0xaf924a;return 0x1/_0x99e5d7===Number[_0x5af86c(0x23e)];}[_0xaf924a(0x2a4)](_0x4da140){var _0x59d583=_0xaf924a;!_0x4da140[_0x59d583(0x299)]||!_0x4da140['props'][_0x59d583(0x24b)]||_0x4da140['type']===_0x59d583(0x291)||_0x4da140[_0x59d583(0x2b1)]===_0x59d583(0x250)||_0x4da140['type']===_0x59d583(0x26f)||_0x4da140[_0x59d583(0x299)][_0x59d583(0x223)](function(_0x2bca0f,_0x6aada0){var _0x433cc9=_0x59d583,_0x220ffd=_0x2bca0f[_0x433cc9(0x1f4)][_0x433cc9(0x277)](),_0x52a25d=_0x6aada0[_0x433cc9(0x1f4)][_0x433cc9(0x277)]();return _0x220ffd<_0x52a25d?-0x1:_0x220ffd>_0x52a25d?0x1:0x0;});}[_0xaf924a(0x21e)](_0x48dce4,_0x48f4c6){var _0x2678d7=_0xaf924a;if(!(_0x48f4c6['noFunctions']||!_0x48dce4[_0x2678d7(0x299)]||!_0x48dce4[_0x2678d7(0x299)]['length'])){for(var _0x279f85=[],_0x27fbf8=[],_0x58bb24=0x0,_0x1abc8f=_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x24b)];_0x58bb24<_0x1abc8f;_0x58bb24++){var _0x3caeb2=_0x48dce4['props'][_0x58bb24];_0x3caeb2[_0x2678d7(0x2b1)]===_0x2678d7(0x293)?_0x279f85[_0x2678d7(0x29c)](_0x3caeb2):_0x27fbf8[_0x2678d7(0x29c)](_0x3caeb2);}if(!(!_0x27fbf8[_0x2678d7(0x24b)]||_0x279f85[_0x2678d7(0x24b)]<=0x1)){_0x48dce4[_0x2678d7(0x299)]=_0x27fbf8;var _0xe3d941={'functionsNode':!0x0,'props':_0x279f85};this[_0x2678d7(0x220)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x20f)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x295)](_0xe3d941),this['_setNodePermissions'](_0xe3d941,_0x48f4c6),_0xe3d941['id']+='\\x20f',_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x28a)](_0xe3d941);}}}[_0xaf924a(0x2be)](_0x48eb38,_0x20f75c){}[_0xaf924a(0x295)](_0x129122){}[_0xaf924a(0x26a)](_0x1f6bb8){var _0x2820a2=_0xaf924a;return Array[_0x2820a2(0x208)](_0x1f6bb8)||typeof _0x1f6bb8==_0x2820a2(0x1ed)&&this[_0x2820a2(0x2b4)](_0x1f6bb8)===_0x2820a2(0x294);}[_0xaf924a(0x2a3)](_0x1ea391,_0x8f50b2){}['_cleanNode'](_0x52cd26){var _0x498c91=_0xaf924a;delete _0x52cd26[_0x498c91(0x22f)],delete _0x52cd26['_hasSetOnItsPath'],delete _0x52cd26[_0x498c91(0x235)];}[_0xaf924a(0x28f)](_0x5c8a9c,_0x31124f){}[_0xaf924a(0x286)](_0x2f7a58){var _0x397561=_0xaf924a;return _0x2f7a58?_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x1fc)])?'['+_0x2f7a58+']':_0x2f7a58[_0x397561(0x1e3)](this['_keyStrRegExp'])?'.'+_0x2f7a58:_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x226)])?'['+_0x2f7a58+']':'[\\x27'+_0x2f7a58+'\\x27]':'';}}let _0x3fbb82=new _0x3ea185();function _0x195f4e(_0x20dbd1,_0x567217,_0x7b3f99,_0x256338,_0x381038,_0xb947b4){var _0x5299ea=_0xaf924a;let _0xc570be,_0x171851;try{_0x171851=_0x4a93d3(),_0xc570be=_0x47a49a[_0x567217],!_0xc570be||_0x171851-_0xc570be['ts']>0x1f4&&_0xc570be[_0x5299ea(0x272)]&&_0xc570be['time']/_0xc570be[_0x5299ea(0x272)]<0x64?(_0x47a49a[_0x567217]=_0xc570be={'count':0x0,'time':0x0,'ts':_0x171851},_0x47a49a[_0x5299ea(0x25f)]={}):_0x171851-_0x47a49a[_0x5299ea(0x25f)]['ts']>0x32&&_0x47a49a['hits']['count']&&_0x47a49a[_0x5299ea(0x25f)]['time']/_0x47a49a['hits'][_0x5299ea(0x272)]<0x64&&(_0x47a49a[_0x5299ea(0x25f)]={});let _0x4ea285=[],_0x56b786=_0xc570be['reduceLimits']||_0x47a49a['hits'][_0x5299ea(0x2a5)]?_0x5b35fa:_0xf0b388,_0x3563e3=_0x51e7d1=>{var _0x2491a0=_0x5299ea;let _0x26ab25={};return _0x26ab25[_0x2491a0(0x299)]=_0x51e7d1[_0x2491a0(0x299)],_0x26ab25['elements']=_0x51e7d1['elements'],_0x26ab25['strLength']=_0x51e7d1['strLength'],_0x26ab25[_0x2491a0(0x24e)]=_0x51e7d1[_0x2491a0(0x24e)],_0x26ab25[_0x2491a0(0x2c2)]=_0x51e7d1[_0x2491a0(0x2c2)],_0x26ab25['autoExpandMaxDepth']=_0x51e7d1[_0x2491a0(0x1fd)],_0x26ab25[_0x2491a0(0x241)]=!0x1,_0x26ab25[_0x2491a0(0x29b)]=!_0x40492c,_0x26ab25[_0x2491a0(0x224)]=0x1,_0x26ab25[_0x2491a0(0x238)]=0x0,_0x26ab25[_0x2491a0(0x263)]=_0x2491a0(0x29f),_0x26ab25['rootExpression']='root_exp',_0x26ab25['autoExpand']=!0x0,_0x26ab25[_0x2491a0(0x2ad)]=[],_0x26ab25[_0x2491a0(0x1e5)]=0x0,_0x26ab25[_0x2491a0(0x253)]=!0x0,_0x26ab25['allStrLength']=0x0,_0x26ab25[_0x2491a0(0x287)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x26ab25;};for(var _0x35907a=0x0;_0x35907a<_0x381038[_0x5299ea(0x24b)];_0x35907a++)_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82['serialize']({'timeNode':_0x20dbd1===_0x5299ea(0x201)||void 0x0},_0x381038[_0x35907a],_0x3563e3(_0x56b786),{}));if(_0x20dbd1===_0x5299ea(0x2aa)){let _0xecc6de=Error[_0x5299ea(0x1f5)];try{Error[_0x5299ea(0x1f5)]=0x1/0x0,_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82[_0x5299ea(0x254)]({'stackNode':!0x0},new Error()[_0x5299ea(0x260)],_0x3563e3(_0x56b786),{'strLength':0x1/0x0}));}finally{Error[_0x5299ea(0x1f5)]=_0xecc6de;}}return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':_0x4ea285,'id':_0x567217,'context':_0xb947b4}]};}catch(_0xeea157){return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':[{'type':_0x5299ea(0x1ff),'error':_0xeea157&&_0xeea157[_0x5299ea(0x1ef)]}],'id':_0x567217,'context':_0xb947b4}]};}finally{try{if(_0xc570be&&_0x171851){let _0x5613c6=_0x4a93d3();_0xc570be[_0x5299ea(0x272)]++,_0xc570be['time']+=_0x254ab2(_0x171851,_0x5613c6),_0xc570be['ts']=_0x5613c6,_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]++,_0x47a49a['hits']['time']+=_0x254ab2(_0x171851,_0x5613c6),_0x47a49a[_0x5299ea(0x25f)]['ts']=_0x5613c6,(_0xc570be['count']>0x32||_0xc570be[_0x5299ea(0x201)]>0x64)&&(_0xc570be[_0x5299ea(0x2a5)]=!0x0),(_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]>0x3e8||_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x201)]>0x12c)&&(_0x47a49a['hits'][_0x5299ea(0x2a5)]=!0x0);}}catch{}}}return _0x49b204[_0xaf924a(0x243)];})(globalThis,_0x2cf5cd(0x1e6),_0x2cf5cd(0x21b),_0x2cf5cd(0x256),_0x2cf5cd(0x28d),_0x2cf5cd(0x265),_0x2cf5cd(0x24c),["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.7"],'');`
      )
    );
  } catch {}
}
function oo_oo5(i, ...v) {
  try {
    oo_cm5().consoleLog(i, v);
  } catch {}
  return v;
}

// app/routes/api.user.search.tsx
var api_user_search_exports = {};
__export(api_user_search_exports, {
  loader: () => loader2,
});
var import_react_router = require('react-router');
var loader2 = async ({ request }) => {
  let userName = new URL(request.url).searchParams.get('filterUser') ?? '';
  if (userName === '') return (0, import_react_router.json)([]);
  let fetchData = (await getAllUser()).filter((user) =>
    user == null ? void 0 : user.username.toLowerCase().includes(userName.toLowerCase())
  );
  return (0, import_react_router.json)(fetchData);
};

// app/routes/api.suggestion.tsx
var api_suggestion_exports = {};
__export(api_suggestion_exports, {
  action: () => action4,
  loader: () => loader3,
});
var import_react_router2 = require('react-router');
var import_node5 = require('@remix-run/node'),
  loader3 = async ({ request }) => {
    let suggestionId = new URL(request.url).searchParams.get('suggestionId') ?? '',
      suggestion = await getSuggestionWithThreadId(suggestionId);
    return (0, import_react_router2.json)(suggestion);
  },
  action4 = async ({ request }) => {
    if (request.method === 'POST') {
      let uploadHandler = (0, import_node5.unstable_composeUploadHandlers)(
          uploadAudio,
          (0, import_node5.unstable_createMemoryUploadHandler)()
        ),
        formData = await (0, import_node5.unstable_parseMultipartFormData)(request, uploadHandler),
        Obj = Object.fromEntries(formData),
        oldValue = Obj.oldValue,
        textId = Obj.textId,
        newValue = Obj.newValue,
        userId = Obj.userId,
        threadId = Obj.threadId,
        filepath = Obj.file;
      try {
        return {
          responce: await createSuggestion({
            oldValue,
            newValue,
            textId,
            userId,
            threadId,
            audioUrl: filepath,
          }),
        };
      } catch (e) {
        return { message: e };
      }
    } else {
      let formData = await request.formData(),
        Obj = Object.fromEntries(formData);
      if (request.method === 'DELETE') {
        let id = Obj.id,
          res = await deleteSuggestion(id),
          remainingdata = await getSuggestionWithThreadId(res.threadId);
        return {
          deleted: res,
          remain: remainingdata == null ? void 0 : remainingdata.length,
        };
      }
      if (request.method === 'PATCH') {
        let id = Obj.id,
          newValue = Obj.newValue;
        return await updateSuggestionContent(id, newValue);
      }
    }
    return null;
  };

// app/routes/text.$id.posts.tsx
var text_id_posts_exports = {};
__export(text_id_posts_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => PostContainer,
  loader: () => loader4,
});
var import_react18 = require('react');

// app/features/Post/PostForm.tsx
var import_react14 = require('@remix-run/react'),
  import_Post = __toESM(require_Post());

// app/states.ts
var import_recoil2 = require('recoil'),
  theme = (0, import_recoil2.atom)({
    key: 'theme-tailwind',
    default: !1,
  }),
  audioPermission = (0, import_recoil2.atom)({
    key: 'audioPermission',
    default: !1,
  }),
  textInfo = (0, import_recoil2.atom)({
    key: 'textName',
    default: {
      name: '',
      id: '',
    },
  }),
  showSearchPanelState = (0, import_recoil2.atom)({
    key: 'showSearch',
    default: !1,
  }),
  showFontSizeState = (0, import_recoil2.atom)({
    key: 'showfontSize',
    default: !1,
  }),
  openSuggestionState = (0, import_recoil2.atom)({
    key: 'openSuggestion',
    default: !1,
  }),
  selectedSuggestionThread = (0, import_recoil2.atom)({
    key: 'selectedSuggestionThread',
    default: {
      id: '',
    },
  }),
  selectedPostThread = (0, import_recoil2.atom)({
    key: 'selectedPostThread',
    default: {
      id: '',
    },
  }),
  shareState = (0, import_recoil2.atom)({
    key: 'sharePost',
    default: !1,
  }),
  openFilterState = (0, import_recoil2.atom)({
    key: 'openFilter',
    default: !1,
  }),
  showLatest = (0, import_recoil2.atom)({
    key: 'latestFilter',
    default: !0,
  }),
  filterDataState = (0, import_recoil2.atom)({
    key: 'filterData',
    default: {
      type: 'all',
      date: { startDate: null, endDate: null },
      user: [],
      solved: 'both',
    },
  }),
  selectedTextOnEditor = (0, import_recoil2.atom)({
    key: 'selectionSection',
    default: {
      type: '',
      start: 0,
      end: 0,
      content: '',
    },
  });

// app/features/Post/PostForm.tsx
var import_recoil4 = require('recoil');

// app/features/Post/component/FormWithAudio.tsx
var import_react12 = require('@remix-run/react'),
  import_react13 = require('react'),
  import_recoil3 = require('recoil');
var import_uuid = require('uuid');

// app/features/Media/index.tsx
var import_AudioPlayer = __toESM(require_AudioPlayer()),
  import_AudioRecorder = __toESM(require_AudioRecorder());

// app/features/Post/component/FormWithAudio.tsx
var import_jsx_runtime12 = require('react/jsx-runtime');
function FormWithAudio({ fetcher, type, post, onClose = () => {} }) {
  var _a, _b;
  let content = (post == null ? void 0 : post.content) ?? '',
    audioUrl = (post == null ? void 0 : post.audioUrl) ?? '',
    [audio, setAudio] = (0, import_react13.useState)({ tempUrl: audioUrl, blob: null }),
    [body, setBody] = (0, import_react13.useState)(content),
    [error, setError] = (0, import_react13.useState)(''),
    [selection, setSelection] = (0, import_recoil3.useRecoilState)(selectedTextOnEditor),
    data = (0, import_react12.useOutletContext)(),
    isFormEmpty = body.length < 5,
    { editor } = (0, import_react12.useOutletContext)();
  (0, import_react13.useEffect)(() => {
    setBody(content || ''), setAudio({ tempUrl: audioUrl || '', blob: null }), setError('');
  }, [selection.start]);
  function validator() {
    let lengthOfSelection = selection.end - (selection == null ? void 0 : selection.start),
      errormessage = '';
    return (
      audio.tempUrl !== '' && isFormEmpty
        ? (errormessage = 'ERROR : describe the audio')
        : isFormEmpty
        ? (errormessage = 'ERROR : write more than 5 character')
        : lengthOfSelection > 254
        ? (errormessage = 'ERROR : selecting more than 255 letter not allowed')
        : body.length > 250
        ? (errormessage = 'ERROR : content more than 255 letter not allowed')
        : (errormessage = ''),
      errormessage
    );
  }
  async function handleSubmit(e) {
    var _a2, _b2, _c, _d;
    e.preventDefault();
    let errormessage = validator();
    if (errormessage && errormessage !== '') return setError(errormessage), null;
    let id = null;
    editor.isActive('post')
      ? (id = (_a2 = editor.getAttributes('post')) == null ? void 0 : _a2.id)
      : (id = (0, import_uuid.v4)());
    let item = {
        threadId: id,
        selectionSegment: selection.content,
        textId: (_b2 = data == null ? void 0 : data.text) == null ? void 0 : _b2.id,
        topic: (_c = data == null ? void 0 : data.text) == null ? void 0 : _c.name,
        body,
        type: selection.type,
      },
      blob = audio == null ? void 0 : audio.blob;
    var form_data = new FormData();
    if (
      (blob
        ? form_data.append(
            'file',
            blob,
            `text-${(_d = data == null ? void 0 : data.text) == null ? void 0 : _d.id}-${(0, import_uuid.v4)()}.wav`
          )
        : form_data.append('audioUrl', audio.tempUrl),
      type === 'update')
    ) {
      form_data.append('body', body),
        form_data.append('action', 'update'),
        form_data.append('postId', post == null ? void 0 : post.id);
      let responseData = await fetcher.submit(form_data, {
        method: 'PATCH',
        action: '/api/post',
        encType: 'multipart/form-data',
      });
      return responseData && onClose(), responseData;
    } else {
      for (var key in item) form_data.append(key, item[key]);
      if (selection) {
        let awaitdata = await fetcher.submit(form_data, {
          method: 'POST',
          action: '/api/post',
          encType: 'multipart/form-data',
        });
        (awaitdata != null && awaitdata.message) ||
          (setSelection({ ...selection, type: '' }),
          editor.commands.setPost({
            id,
          }));
      }
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(fetcher.Form, {
    className: 'flex flex-col gap-3',
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TextArea_default, {
        placeholder: 'what are your thoughts?',
        autoFocus: !0,
        value: body,
        onChange: (e) => setBody(e.target.value),
        style: { height: 108 },
      }),
      audio.tempUrl !== ''
        ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, {
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)('div', {
              className: 'w-full flex items-center gap-3 ',
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_AudioPlayer.default, { src: audio.tempUrl }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)('div', {
                  onClick: () => setAudio({ tempUrl: '', blob: null }),
                  children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)('svg', {
                    width: '20',
                    height: '20',
                    viewBox: '0 0 20 20',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)('path', {
                      fillRule: 'evenodd',
                      clipRule: 'evenodd',
                      d: 'M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z',
                      className: 'fill-gray-200',
                    }),
                  }),
                }),
              ],
            }),
          })
        : null,
      error &&
        error !== '' &&
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)('div', { className: 'font-sm text-red-500', children: error }),
      ((_a = fetcher.data) == null ? void 0 : _a.message) &&
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)('div', {
          className: 'font-sm text-red-500',
          children: (_b = fetcher.data) == null ? void 0 : _b.message,
        }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)('div', {
        className: 'flex justify-between items-center',
        children: [
          audio.tempUrl === ''
            ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_AudioRecorder.default, { setAudio })
            : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)('div', {}),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)('div', {
            className: 'flex justify-end gap-2',
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Button, {
                type: 'reset',
                onClick: () => {
                  setAudio({ tempUrl: '', blob: null }), setSelection({ ...selection, type: '' }), onClose();
                },
                label: 'cancel',
              }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Button, {
                onClick: handleSubmit,
                type: 'submit',
                label: 'post',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

// app/features/Post/PostForm.tsx
var import_jsx_runtime13 = require('react/jsx-runtime'),
  PostForm = () => {
    var _a, _b;
    let createPost3 = useFetcherPromise_default(),
      { user } = (0, import_react14.useOutletContext)(),
      [selection, setSelection] = (0, import_recoil4.useRecoilState)(selectedTextOnEditor);
    return createPost3.formData && createPost3.formData.get('body') !== ''
      ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_Post.default, {
          post: {
            audioUrl: '',
            creatorUser: user,
            created_at: new Date(Date.now()),
            likedBy: [],
            replyCount: 0,
            id: 'random',
            isSolved: !1,
            content: (_a = createPost3 == null ? void 0 : createPost3.formData) == null ? void 0 : _a.get('body'),
            topic_id: 0,
            type: (_b = createPost3 == null ? void 0 : createPost3.formData) == null ? void 0 : _b.get('type'),
            threadId: '',
          },
          isOptimistic: !0,
        })
      : selection.type === ''
      ? null
      : /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)('section', {
          className: ' shadow rounded p-3 mb-3',
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)('div', {
              className: 'flex items-start justify-between',
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)('div', {
                  className: 'text-base font-medium leading-tight text-gray-900 dark:text-gray-300 mb-3 capitalize',
                  children: selection.type === 'question' ? 'ask question' : 'new comment',
                }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)('div', {
                  className: 'font-bold text-gray-400 text-sm',
                  children: 0,
                }),
              ],
            }),
            user
              ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)('div', {
                  'aria-label': 'Default tabs ',
                  children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(FormWithAudio, {
                    fetcher: createPost3,
                    type: 'post',
                    post: null,
                  }),
                })
              : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(LogInMessage, {}),
          ],
        });
  },
  PostForm_default = PostForm;

// app/routes/text.$id.posts.tsx
var import_react19 = require('@remix-run/react');

// app/features/Post/Posts.tsx
var import_react16 = require('react'),
  import_Post2 = __toESM(require_Post()),
  import_recoil6 = require('recoil');

// app/features/Post/Filter.tsx
var import_react15 = require('react'),
  import_react_router_dom = require('react-router-dom'),
  import_recoil5 = require('recoil');
var import_react_tailwindcss_datepicker = __toESM(require('react-tailwindcss-datepicker')),
  import_flowbite_react2 = require('flowbite-react');
var import_jsx_runtime14 = require('react/jsx-runtime');
function Filter({}) {
  var _a, _b, _c, _d;
  let [filterData, setFilterData] = (0, import_recoil5.useRecoilState)(filterDataState),
    [openFilter, setOpenFilter] = (0, import_recoil5.useRecoilState)(openFilterState),
    [userInput, setUserInput] = (0, import_react15.useState)(''),
    searchUser = (0, import_react_router_dom.useFetcher)(),
    typeId = (0, import_react15.useId)(),
    solvedId = (0, import_react15.useId)();
  (0, import_react15.useEffect)(() => {
    setUserInput('');
  }, [filterData]);
  let handleTypeCheck = (e) => {
      let solved = e.target.value === 'comment' ? 'both' : filterData.solved;
      setFilterData((prevData) => ({
        ...prevData,
        type: e.target.value,
        solved,
      }));
    },
    handleDateChange = (e) => {
      setFilterData((prevData) => ({ ...prevData, date: e }));
    },
    handleSolvedChange = (e) => {
      setFilterData((prevData) => ({ ...prevData, solved: e.target.value }));
    };
  function handleNameClick(userToAdd) {
    filterData.user.includes(userToAdd) ||
      !userToAdd.length ||
      setFilterData((prev) => ({
        ...prev,
        user: [...prev.user, userToAdd],
      }));
  }
  function handleRemoveUser(userToRemove) {
    setFilterData((prev) => ({
      ...prev,
      user: prev.user.filter((names) => names !== userToRemove),
    }));
  }
  function apply() {
    setOpenFilter(!1);
  }
  function reset() {
    setFilterData({
      type: 'all',
      date: { startDate: null, endDate: null },
      user: [],
      solved: 'both',
    });
  }
  let translation = uselitteraTranlation(),
    isFetchingUser = searchUser.state === 'loading';
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_flowbite_react2.Modal, {
    show: openFilter,
    onClose: () => setOpenFilter(!1),
    dismissible: !0,
    size: 'md',
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_flowbite_react2.Modal.Header, {
        children: translation.filter,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)('div', {
        className: 'p-5',
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)('div', {
            className: 'flex flex-col items-start justify-start space-y-4',
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)('div', {
                className: 'flex flex-col items-start justify-start space-y-2',
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('p', {
                    className: 'text-sm font-semibold leading-tight',
                    children: 'Type',
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('div', {
                    className: 'flex flex-col items-start justify-start space-y-0.5',
                    children: [
                      { value: 'all', label: 'All' },
                      { value: 'comment', label: 'Comments only' },
                      { value: 'question', label: 'Questions only' },
                    ].map(({ value, label }) =>
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                        'div',
                        {
                          className: 'flex py-2',
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('input', {
                              id: `${typeId}-${value}`,
                              type: 'radio',
                              onChange: handleTypeCheck,
                              checked: filterData.type === value,
                              value,
                              name: 'filter-type',
                              className:
                                'h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600',
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('label', {
                              htmlFor: `${typeId}-${value}`,
                              className: 'ml-2 text-sm font-medium text-gray-500 dark:text-gray-300',
                              children: label,
                            }),
                          ],
                        },
                        value
                      )
                    ),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)('div', {
                className: 'flex w-full flex-col items-start justify-start space-y-2',
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('p', {
                    className: 'text-sm font-semibold leading-tight ',
                    children: 'Date',
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_tailwindcss_datepicker.default, {
                    value: filterData.date,
                    inputName: 'date',
                    onChange: handleDateChange,
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)('div', {
                className: 'flex w-full flex-col items-start justify-start space-y-2.5',
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('p', {
                    className: 'text-sm font-semibold leading-tight ',
                    children: 'Users',
                  }),
                  (_a = filterData.user) == null
                    ? void 0
                    : _a.map((user) =>
                        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                          'div',
                          {
                            className: 'flex items-center justify-center space-x-1 rounded bg-gray-100 px-1.5 py-0.5',
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('p', {
                                className: 'text-center text-xs font-medium leading-none text-gray-600',
                                children: user,
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('svg', {
                                onClick: () => handleRemoveUser(user),
                                width: '18',
                                height: '18',
                                viewBox: '0 0 18 18',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('path', {
                                  d: 'M8.18966 6.2102L8.18971 6.21014L8.18346 6.2041C7.91942 5.94908 7.56578 5.80797 7.1987 5.81116C6.83162 5.81435 6.48049 5.96159 6.22091 6.22116C5.96134 6.48073 5.81411 6.83187 5.81092 7.19894C5.80773 7.56602 5.94884 7.91966 6.20386 8.1837L6.20381 8.18376L6.20995 8.1899L7.0201 9.00005L6.2127 9.80745C6.0806 9.93591 5.97515 10.0892 5.90241 10.2585C5.82903 10.4293 5.79041 10.6131 5.7888 10.7989C5.78718 10.9848 5.82261 11.1692 5.893 11.3412C5.96339 11.5133 6.06735 11.6696 6.1988 11.8011C6.33025 11.9325 6.48656 12.0365 6.65861 12.1069C6.83067 12.1772 7.01502 12.2127 7.20091 12.2111C7.3868 12.2094 7.57051 12.1708 7.74132 12.0974C7.91064 12.0247 8.06392 11.9193 8.19237 11.7872L8.9998 10.9798L9.80995 11.7899L9.8099 11.79L9.81615 11.796C10.0802 12.051 10.4338 12.1921 10.8009 12.1889C11.168 12.1857 11.5191 12.0385 11.7787 11.7789C12.0383 11.5194 12.1855 11.1682 12.1887 10.8012C12.1919 10.4341 12.0508 10.0804 11.7957 9.81639L11.7958 9.81634L11.7897 9.8102L10.9795 9.00005L11.7897 8.1899L11.7897 8.18996L11.7957 8.1837C12.0508 7.91966 12.1919 7.56602 12.1887 7.19894C12.1855 6.83187 12.0383 6.48073 11.7787 6.22116C11.5191 5.96159 11.168 5.81435 10.8009 5.81116C10.4338 5.80797 10.0802 5.94908 9.81615 6.2041L9.8161 6.20405L9.80995 6.2102L8.9998 7.02034L8.18966 6.2102ZM13.7374 13.7377C12.4809 14.9942 10.7768 15.7 8.9998 15.7C7.22285 15.7 5.51868 14.9942 4.26219 13.7377C3.0057 12.4812 2.2998 10.777 2.2998 9.00005C2.2998 7.2231 3.0057 5.51893 4.26219 4.26243C5.51868 3.00594 7.22285 2.30005 8.9998 2.30005C10.7768 2.30005 12.4809 3.00594 13.7374 4.26243C14.9939 5.51893 15.6998 7.2231 15.6998 9.00005C15.6998 10.777 14.9939 12.4812 13.7374 13.7377Z',
                                  fill: '#9CA3AF',
                                  stroke: '#9CA3AF',
                                }),
                              }),
                            ],
                          },
                          user
                        )
                      ),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)('div', {
                    className: 'flex w-full flex-col items-start justify-start space-y-2 rounded-lg px-0.5 pb-1',
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('div', {
                        className:
                          'inline-flex w-full items-center justify-start rounded-lg border border-blue-600 bg-gray-50 px-4 py-1',
                        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)('div', {
                          className: 'flex h-full flex-1 items-center justify-start space-x-2',
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('svg', {
                              width: '18',
                              height: '18',
                              viewBox: '0 0 18 18',
                              fill: 'none',
                              xmlns: 'http://www.w3.org/2000/svg',
                              children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('path', {
                                d: 'M15.75 15.75L11.25 11.25M12.75 7.5C12.75 8.18944 12.6142 8.87213 12.3504 9.50909C12.0865 10.146 11.6998 10.7248 11.2123 11.2123C10.7248 11.6998 10.146 12.0865 9.50909 12.3504C8.87213 12.6142 8.18944 12.75 7.5 12.75C6.81056 12.75 6.12787 12.6142 5.49091 12.3504C4.85395 12.0865 4.2752 11.6998 3.78769 11.2123C3.30018 10.7248 2.91347 10.146 2.64963 9.50909C2.3858 8.87213 2.25 8.18944 2.25 7.5C2.25 6.10761 2.80312 4.77226 3.78769 3.78769C4.77226 2.80312 6.10761 2.25 7.5 2.25C8.89239 2.25 10.2277 2.80312 11.2123 3.78769C12.1969 4.77226 12.75 6.10761 12.75 7.5Z',
                                stroke: '#1C64F2',
                                strokeWidth: '2',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(searchUser.Form, {
                              method: 'GET',
                              action: '/api/user/search',
                              className: 'flex w-full',
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('input', {
                                  type: 'text',
                                  name: 'filterUser',
                                  value: userInput,
                                  onChange: (e) => {
                                    setUserInput(e.target.value),
                                      searchUser.submit(
                                        {
                                          filterUser: e.target.value,
                                        },
                                        { method: 'GET', action: '/api/user/search' }
                                      );
                                  },
                                  className:
                                    'h-full flex-1 border-none border-transparent bg-transparent text-sm leading-none text-gray-900 outline-none focus:border-none focus:border-transparent focus:outline-none focus:ring-0',
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('button', {
                                  type: 'button',
                                  onClick: () => setUserInput(''),
                                  children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('svg', {
                                    width: '18',
                                    height: '18',
                                    viewBox: '0 0 18 18',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('path', {
                                      d: 'M8.18966 6.2102L8.18971 6.21014L8.18346 6.2041C7.91942 5.94908 7.56578 5.80797 7.1987 5.81116C6.83162 5.81435 6.48049 5.96159 6.22091 6.22116C5.96134 6.48073 5.81411 6.83187 5.81092 7.19894C5.80773 7.56602 5.94884 7.91966 6.20386 8.1837L6.20381 8.18376L6.20995 8.1899L7.0201 9.00005L6.2127 9.80745C6.0806 9.93591 5.97515 10.0892 5.90241 10.2585C5.82903 10.4293 5.79041 10.6131 5.7888 10.7989C5.78718 10.9848 5.82261 11.1692 5.893 11.3412C5.96339 11.5133 6.06735 11.6696 6.1988 11.8011C6.33025 11.9325 6.48656 12.0365 6.65861 12.1069C6.83067 12.1772 7.01502 12.2127 7.20091 12.2111C7.3868 12.2094 7.57051 12.1708 7.74132 12.0974C7.91064 12.0247 8.06392 11.9193 8.19237 11.7872L8.9998 10.9798L9.80995 11.7899L9.8099 11.79L9.81615 11.796C10.0802 12.051 10.4338 12.1921 10.8009 12.1889C11.168 12.1857 11.5191 12.0385 11.7787 11.7789C12.0383 11.5194 12.1855 11.1682 12.1887 10.8012C12.1919 10.4341 12.0508 10.0804 11.7957 9.81639L11.7958 9.81634L11.7897 9.8102L10.9795 9.00005L11.7897 8.1899L11.7897 8.18996L11.7957 8.1837C12.0508 7.91966 12.1919 7.56602 12.1887 7.19894C12.1855 6.83187 12.0383 6.48073 11.7787 6.22116C11.5191 5.96159 11.168 5.81435 10.8009 5.81116C10.4338 5.80797 10.0802 5.94908 9.81615 6.2041L9.8161 6.20405L9.80995 6.2102L8.9998 7.02034L8.18966 6.2102ZM13.7374 13.7377C12.4809 14.9942 10.7768 15.7 8.9998 15.7C7.22285 15.7 5.51868 14.9942 4.26219 13.7377C3.0057 12.4812 2.2998 10.777 2.2998 9.00005C2.2998 7.2231 3.0057 5.51893 4.26219 4.26243C5.51868 3.00594 7.22285 2.30005 8.9998 2.30005C10.7768 2.30005 12.4809 3.00594 13.7374 4.26243C14.9939 5.51893 15.6998 7.2231 15.6998 9.00005C15.6998 10.777 14.9939 12.4812 13.7374 13.7377Z',
                                      fill: '#9CA3AF',
                                      stroke: '#9CA3AF',
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      isFetchingUser && 'loading',
                      ((_b = searchUser.data) == null ? void 0 : _b.length) > 0 &&
                        userInput !== '' &&
                        !isFetchingUser &&
                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('div', {
                          className:
                            'flex w-full flex-col items-center justify-start space-y-3 rounded-lg border border-gray-200  p-4 shadow',
                          children:
                            (_c = searchUser.data) == null
                              ? void 0
                              : _c.map((user) =>
                                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                                    'div',
                                    {
                                      className: 'w-full cursor-pointer',
                                      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)('div', {
                                        className: 'inline-flex w-full items-center justify-start space-x-2 rounded-lg',
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('img', {
                                            className: 'w-6 h-6 rounded-full',
                                            src: user == null ? void 0 : user.avatarUrl,
                                            alt: 'Extra small avatar',
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('div', {
                                            className: 'flex-1 text-sm leading-tight',
                                            onClick: () => handleNameClick(user == null ? void 0 : user.username),
                                            children: user == null ? void 0 : user.username,
                                          }),
                                        ],
                                      }),
                                    },
                                    user == null ? void 0 : user.username
                                  )
                                ),
                        }),
                      ((_d = searchUser.data) == null ? void 0 : _d.length) === 0 &&
                        userInput !== '' &&
                        !isFetchingUser &&
                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('span', {
                          className: 'text-red-400',
                          children: 'User not Found',
                        }),
                    ],
                  }),
                ],
              }),
              filterData.type !== 'comment' &&
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)('div', {
                  className: 'flex flex-col items-start justify-start space-y-2',
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('p', {
                      className: 'text-sm font-semibold leading-tight',
                      children: 'Solved',
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('div', {
                      className: 'flex flex-col items-start justify-start space-y-0.5',
                      children: [
                        { value: 'both', label: 'both' },
                        { value: 'solved', label: 'solved only' },
                        { value: 'unsolved', label: 'unsolved only' },
                      ].map(({ value, label }) =>
                        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                          'div',
                          {
                            className: 'flex py-2',
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('input', {
                                id: `${solvedId}-${value}`,
                                type: 'radio',
                                value,
                                onChange: handleSolvedChange,
                                checked: filterData.solved === value,
                                name: 'filter-solved',
                                className:
                                  'h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600',
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)('label', {
                                htmlFor: `${solvedId}-${value}`,
                                className: 'ml-2 text-sm font-medium text-gray-500 dark:text-gray-300',
                                children: label,
                              }),
                            ],
                          },
                          value
                        )
                      ),
                    }),
                  ],
                }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)('div', {
            className: 'flex w-full items-start justify-end gap-3 mt-2',
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, {
                onClick: apply,
                label: 'Apply filters',
                type: 'submit',
              }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, {
                onClick: reset,
                color: 'light',
                type: 'reset',
                label: 'reset',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Filter_default = (0, import_react15.memo)(Filter);

// app/features/Post/Posts.tsx
var import_remix_utils2 = require('remix-utils'),
  import_react17 = require('@remix-run/react'),
  import_jsx_runtime15 = require('react/jsx-runtime');
function Posts({ editor }) {
  let filters = (0, import_recoil6.useRecoilValue)(filterDataState),
    isLatest = (0, import_recoil6.useRecoilValue)(showLatest),
    posts = (0, import_react17.useAsyncValue)();
  if (!posts) return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Skeleton, { number: 4, height: 80 });
  let lists = applyFilter(posts, filters, isLatest);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_remix_utils2.ClientOnly, {
        fallback: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, {}),
        children: () => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Filter_default, {}),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)('div', {
        className: ' flex flex-col relative overflow-y-auto pr-3 ',
        style: {
          height: 'min-content',
          maxHeight: '80vh',
          fontFamily: 'sans-serif',
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react16.Suspense, {
          fallback: 'loading',
          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_remix_utils2.ClientOnly, {
            children: () =>
              (lists == null ? void 0 : lists.length) > 0 &&
              (lists == null
                ? void 0
                : lists.map((post) =>
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                      import_Post2.default,
                      { post, isOptimistic: !1 },
                      post.id
                    )
                  )),
          }),
        }),
      }),
    ],
  });
}
var applyFilter = (list, filter, isLatest) => {
    var _a;
    return (
      filter.type && filter.type !== 'all' && (list = list.filter((l) => l.type === filter.type)),
      (_a = filter.user) != null &&
        _a.length &&
        (list = list.filter((l) => {
          var _a2, _b;
          return (_b = filter.user) == null
            ? void 0
            : _b.includes((_a2 = l == null ? void 0 : l.creatorUser) == null ? void 0 : _a2.username);
        })),
      filter.date.startDate &&
        (list = list.filter((l) => {
          let startDate = filter.date.startDate ? new Date(filter.date.startDate) : null,
            endDate = filter.date.endDate ? new Date(filter.date.endDate) : null;
          if (startDate && endDate) {
            let createdAt = new Date(l.created_at);
            return createdAt > startDate && createdAt < endDate;
          }
          return !1;
        })),
      filter.solved &&
        filter.solved !== 'both' &&
        (list = list.filter((l) => l.isSolved === (filter.solved === 'solved'))),
      list.length > 0 &&
        list.sort(function (a, b) {
          let c = new Date(a.created_at),
            d = new Date(b.created_at);
          return isLatest ? d.getTime() - c.getTime() : c.getTime() - d.getTime();
        }),
      list
    );
  },
  Posts_default = (0, import_react16.memo)(Posts);

// app/routes/text.$id.posts.tsx
var import_flowbite_react3 = require('flowbite-react');
var import_recoil7 = require('recoil');

// app/model/post.ts
async function createPost2(type, avatar, topic_id, post_id, threadId, textId, content, creatorUser_id, audioUrl) {
  try {
    return await db.post.create({
      data: {
        type,
        avatar,
        topic_id,
        post_id,
        content,
        threadId,
        creatorUser_id,
        textId,
        audioUrl,
      },
    });
  } catch (e) {
    throw (console.log(...oo_oo6('e93429c0_0', e)), new Error('post couldnot be created ' + e));
  }
}
async function findPostByTopicId(TopicId) {
  try {
    return await db.post.findFirst({
      where: {
        topic_id: TopicId,
      },
      include: {
        Reply: !0,
      },
    });
  } catch (e) {
    return 'couldnot find the by TopicId' + e.message;
  }
}
async function findPostByTextId(textId) {
  let topicList = (await fetchCategoryData()).topic_list.topics;
  try {
    let posts = await db.post.findMany({
      include: {
        creatorUser: !0,
        likedBy: !0,
        Reply: !0,
      },
      where: {
        textId,
      },
    });
    return (
      await Promise.all(
        posts.map(async (post) => {
          let replies = topicList.find((l) => l.id === post.topic_id),
            isSolved = post.Reply.filter((l) => l.is_approved === !0).length > 0;
          return {
            ...post,
            replyCount: (replies == null ? void 0 : replies.posts_count) - 1,
            isSolved,
          };
        })
      )
    ).filter(Boolean);
  } catch (e) {
    console.log(...oo_oo6('e93429c0_1', e.message));
  }
}
async function findPostByUserLiked(id, userId) {
  try {
    return await db.post.findFirst({
      where: {
        id,
        likedBy: {
          some: {
            id: userId,
          },
        },
      },
    });
  } catch (e) {
    throw new Error('could not find post by userliked' + e.message);
  }
}
async function updatePostLike(id, userId, payload) {
  try {
    return await db.post.update({
      data: {
        likedBy: payload
          ? {
              connect: {
                id: userId,
              },
            }
          : {
              disconnect: {
                id: userId,
              },
            },
      },
      where: {
        id,
      },
      select: {
        likedBy: !0,
        textId: !0,
      },
    });
  } catch (e) {
    throw new Error('update post like error: ' + e.message);
  }
}
async function updatePostContentandAudio(id, content, audioUrl) {
  try {
    return await db.post.update({
      data: {
        content,
        audioUrl,
      },
      where: {
        id,
      },
    });
  } catch (e) {
    throw new Error('update post content error: ' + e.message);
  }
}
async function deletePost2(id) {
  try {
    return await db.post.delete({
      where: {
        id,
      },
    });
  } catch (e) {
    throw new Error('cannot delete post ', e);
  }
}
function oo_cm6() {
  try {
    return (
      (0, eval)('globalThis._console_ninja') ||
      (0, eval)(
        `/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2cf5cd=_0x40be;(function(_0x582a6d,_0x326ed6){var _0x274fa5=_0x40be,_0x4e6359=_0x582a6d();while(!![]){try{var _0x36ca3c=parseInt(_0x274fa5(0x240))/0x1+parseInt(_0x274fa5(0x2bf))/0x2*(parseInt(_0x274fa5(0x27c))/0x3)+parseInt(_0x274fa5(0x1f0))/0x4*(parseInt(_0x274fa5(0x288))/0x5)+parseInt(_0x274fa5(0x1ee))/0x6+parseInt(_0x274fa5(0x2b9))/0x7*(parseInt(_0x274fa5(0x20b))/0x8)+parseInt(_0x274fa5(0x269))/0x9*(parseInt(_0x274fa5(0x289))/0xa)+-parseInt(_0x274fa5(0x20a))/0xb;if(_0x36ca3c===_0x326ed6)break;else _0x4e6359['push'](_0x4e6359['shift']());}catch(_0x19d0c6){_0x4e6359['push'](_0x4e6359['shift']());}}}(_0x2a98,0xda71d));var ue=Object[_0x2cf5cd(0x21d)],te=Object[_0x2cf5cd(0x2ae)],he=Object[_0x2cf5cd(0x21f)],le=Object['getOwnPropertyNames'],fe=Object['getPrototypeOf'],_e=Object['prototype'][_0x2cf5cd(0x1e8)],pe=(_0x25f11f,_0x357847,_0x2ae353,_0x3d8e2d)=>{var _0x44b478=_0x2cf5cd;if(_0x357847&&typeof _0x357847=='object'||typeof _0x357847==_0x44b478(0x293)){for(let _0x4a4651 of le(_0x357847))!_e['call'](_0x25f11f,_0x4a4651)&&_0x4a4651!==_0x2ae353&&te(_0x25f11f,_0x4a4651,{'get':()=>_0x357847[_0x4a4651],'enumerable':!(_0x3d8e2d=he(_0x357847,_0x4a4651))||_0x3d8e2d['enumerable']});}return _0x25f11f;},ne=(_0x806e83,_0x70843c,_0x15e02d)=>(_0x15e02d=_0x806e83!=null?ue(fe(_0x806e83)):{},pe(_0x70843c||!_0x806e83||!_0x806e83[_0x2cf5cd(0x25e)]?te(_0x15e02d,_0x2cf5cd(0x266),{'value':_0x806e83,'enumerable':!0x0}):_0x15e02d,_0x806e83)),Q=class{constructor(_0x59b92d,_0x2a3a9d,_0x559130,_0x18aff8){var _0x19135f=_0x2cf5cd;this[_0x19135f(0x273)]=_0x59b92d,this[_0x19135f(0x244)]=_0x2a3a9d,this[_0x19135f(0x26d)]=_0x559130,this[_0x19135f(0x2a1)]=_0x18aff8,this[_0x19135f(0x1f6)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x19135f(0x207)]=!0x1,this['_connecting']=!0x1,this[_0x19135f(0x246)]=!!this['global'][_0x19135f(0x26c)],this[_0x19135f(0x28e)]=null,this[_0x19135f(0x296)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_sendErrorMessage']=this[_0x19135f(0x246)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help':_0x19135f(0x210);}async[_0x2cf5cd(0x25d)](){var _0x423475=_0x2cf5cd;if(this['_WebSocketClass'])return this[_0x423475(0x28e)];let _0x28fd87;if(this['_inBrowser'])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x26c)];else{if(this[_0x423475(0x273)][_0x423475(0x2a2)]?.[_0x423475(0x22e)])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x2a2)]?.['_WebSocket'];else try{let _0x4e350b=await import(_0x423475(0x26e));_0x28fd87=(await import((await import(_0x423475(0x280)))[_0x423475(0x242)](_0x4e350b[_0x423475(0x252)](this[_0x423475(0x2a1)],_0x423475(0x245)))[_0x423475(0x225)]()))['default'];}catch{try{_0x28fd87=require(require(_0x423475(0x26e))[_0x423475(0x252)](this[_0x423475(0x2a1)],'ws'));}catch{throw new Error(_0x423475(0x247));}}}return this[_0x423475(0x28e)]=_0x28fd87,_0x28fd87;}[_0x2cf5cd(0x2a0)](){var _0x299e02=_0x2cf5cd;this[_0x299e02(0x232)]||this['_connected']||this['_connectAttemptCount']>=this[_0x299e02(0x2a8)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x299e02(0x232)]=!0x0,this['_connectAttemptCount']++,this[_0x299e02(0x209)]=new Promise((_0x323901,_0xe82100)=>{var _0x1f03e5=_0x299e02;this[_0x1f03e5(0x25d)]()[_0x1f03e5(0x284)](_0x289f22=>{var _0x312bc1=_0x1f03e5;let _0x1a955b=new _0x289f22(_0x312bc1(0x202)+this['host']+':'+this[_0x312bc1(0x26d)]);_0x1a955b[_0x312bc1(0x1f1)]=()=>{var _0x491c98=_0x312bc1;this['_allowedToSend']=!0x1,this[_0x491c98(0x281)](_0x1a955b),this[_0x491c98(0x2c5)](),_0xe82100(new Error(_0x491c98(0x206)));},_0x1a955b[_0x312bc1(0x2b2)]=()=>{var _0x496f4e=_0x312bc1;this[_0x496f4e(0x246)]||_0x1a955b['_socket']&&_0x1a955b[_0x496f4e(0x2b0)]['unref']&&_0x1a955b[_0x496f4e(0x2b0)]['unref'](),_0x323901(_0x1a955b);},_0x1a955b['onclose']=()=>{var _0x4a9cbf=_0x312bc1;this[_0x4a9cbf(0x248)]=!0x0,this['_disposeWebsocket'](_0x1a955b),this[_0x4a9cbf(0x2c5)]();},_0x1a955b[_0x312bc1(0x2b5)]=_0x5eb630=>{var _0x2133bb=_0x312bc1;try{_0x5eb630&&_0x5eb630['data']&&this['_inBrowser']&&JSON[_0x2133bb(0x231)](_0x5eb630[_0x2133bb(0x27a)])[_0x2133bb(0x2af)]==='reload'&&this[_0x2133bb(0x273)][_0x2133bb(0x27e)]['reload']();}catch{}};})['then'](_0x5c8281=>(this[_0x1f03e5(0x207)]=!0x0,this[_0x1f03e5(0x232)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x1f03e5(0x296)]=0x0,_0x5c8281))[_0x1f03e5(0x204)](_0x2e9680=>(this[_0x1f03e5(0x207)]=!0x1,this['_connecting']=!0x1,_0xe82100(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x2e9680&&_0x2e9680[_0x1f03e5(0x1ef)])))));}));}[_0x2cf5cd(0x281)](_0x196a35){var _0x2f6e0d=_0x2cf5cd;this[_0x2f6e0d(0x207)]=!0x1,this[_0x2f6e0d(0x232)]=!0x1;try{_0x196a35[_0x2f6e0d(0x2bb)]=null,_0x196a35[_0x2f6e0d(0x1f1)]=null,_0x196a35['onopen']=null;}catch{}try{_0x196a35[_0x2f6e0d(0x221)]<0x2&&_0x196a35[_0x2f6e0d(0x212)]();}catch{}}[_0x2cf5cd(0x2c5)](){var _0x610869=_0x2cf5cd;clearTimeout(this[_0x610869(0x22a)]),!(this[_0x610869(0x296)]>=this[_0x610869(0x2a8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x5d1aff=_0x610869;this[_0x5d1aff(0x207)]||this[_0x5d1aff(0x232)]||(this[_0x5d1aff(0x2a0)](),this[_0x5d1aff(0x209)]?.[_0x5d1aff(0x204)](()=>this[_0x5d1aff(0x2c5)]()));},0x1f4),this[_0x610869(0x22a)][_0x610869(0x2c4)]&&this['_reconnectTimeout'][_0x610869(0x2c4)]());}async['send'](_0x4da41b){var _0x25d38b=_0x2cf5cd;try{if(!this['_allowedToSend'])return;this[_0x25d38b(0x248)]&&this[_0x25d38b(0x2a0)](),(await this[_0x25d38b(0x209)])[_0x25d38b(0x1f2)](JSON[_0x25d38b(0x29d)](_0x4da41b));}catch(_0x284c46){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x284c46&&_0x284c46[_0x25d38b(0x1ef)])),this['_allowedToSend']=!0x1,this[_0x25d38b(0x2c5)]();}}};function V(_0xb97f7e,_0x19f69c,_0x301db6,_0x28b17b,_0x3028fb){var _0x4feedb=_0x2cf5cd;let _0xab03f1=_0x301db6[_0x4feedb(0x229)](',')[_0x4feedb(0x23f)](_0x2633fc=>{var _0x529807=_0x4feedb;try{_0xb97f7e[_0x529807(0x230)]||((_0x3028fb===_0x529807(0x283)||_0x3028fb===_0x529807(0x249)||_0x3028fb===_0x529807(0x2ac))&&(_0x3028fb+=_0xb97f7e['process']?.[_0x529807(0x2c1)]?.['node']?_0x529807(0x20d):_0x529807(0x237)),_0xb97f7e[_0x529807(0x230)]={'id':+new Date(),'tool':_0x3028fb});let _0xeb9db=new Q(_0xb97f7e,_0x19f69c,_0x2633fc,_0x28b17b);return _0xeb9db[_0x529807(0x1f2)][_0x529807(0x227)](_0xeb9db);}catch(_0x2230bd){return console[_0x529807(0x267)](_0x529807(0x22b),_0x2230bd&&_0x2230bd[_0x529807(0x1ef)]),()=>{};}});return _0x422510=>_0xab03f1[_0x4feedb(0x262)](_0x389f10=>_0x389f10(_0x422510));}function _0x2a98(){var _0x47734e=['disabledLog','_numberRegExp','autoExpandMaxDepth','undefined','unknown','Number','time','ws://','String','catch','RegExp','logger\\x20websocket\\x20error','_connected','isArray','_ws','54739014hZPxbX','1079648rjCDOH','getOwnPropertySymbols','\\x20server','_capIfString','_setNodeLabel','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','_blacklistedProperty','close','_isPrimitiveType','_p_','substr','_keyStrRegExp','error','hostname','concat','_regExpToString','61159','setter','create','_addFunctionsNode','getOwnPropertyDescriptor','_setNodeId','readyState','_Symbol','sort','depth','toString','_quotedRegExp','bind','string','split','_reconnectTimeout','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','nuxt','null','_WebSocket','_hasSymbolPropertyOnItsPath','_console_ninja_session','parse','_connecting','_additionalMetadata','...','_hasMapOnItsPath','allStrLength','\\x20browser','level','_treeNodePropertiesAfterFullValue','_p_name','timeStamp','_p_length','autoExpand','NEGATIVE_INFINITY','map','1525537RhiYyd','sortProps','pathToFileURL','_console_ninja','host','ws/index.js','_inBrowser','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_allowedToConnectOnSend','remix','current','length','1685344258094','test','totalStrLength','_property','Map','console','join','resolveGetters','serialize','HTMLAllCollection',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.129\\\\node_modules",'timeEnd','[object\\x20Set]','now','log','call','capped','getWebSocketClass','__es'+'Module','hits','stack','Boolean','forEach','expId','hrtime','1.0.0','default','warn','number','27PVbVzP','_isArray','_isSet','WebSocket','port','path','Set','valueOf','parent','count','global','constructor','_propertyName','_isMap','toLowerCase','strLength','getter','data','_dateToString','25989iNKKmv','_getOwnPropertyDescriptor','location','isExpressionToEvaluate','url','_disposeWebsocket','_cleanNode','next.js','then','index','_propertyAccessor','node','2365xiNUeo','2338510BlrUQW','unshift','cappedProps','[object\\x20Map]','remix','_WebSocketClass','_setNodeExpressionPath','performance','array','_isNegativeZero','function','[object\\x20Array]','_setNodeExpandableState','_connectAttemptCount','elapsed','_consoleNinjaAllowedToStart','props','positiveInfinity','noFunctions','push','stringify','[object\\x20Date]','root_exp_id','_connectToHostNow','nodeModules','process','_setNodePermissions','_sortProps','reduceLimits','_type','cappedElements','_maxConnectAttemptCount','argumentResolutionError','trace','elements','astro','autoExpandPreviousObjects','defineProperty','method','_socket','type','onopen','_processTreeNodeResult','_objectToString','onmessage','negativeZero','bigint','Symbol','7HexpBI','Buffer','onclose','boolean','symbol','_addLoadNode','358RbwaIx','getOwnPropertyNames','versions','autoExpandLimit','includes','unref','_attemptToReconnectShortly','_isPrimitiveWrapperType','_HTMLAllCollection','match','date','autoExpandPropertyCount','127.0.0.1','value','hasOwnProperty','_addProperty','set','prototype','negativeInfinity','object','5054958GGLzRP','message','9436aEdZNf','onerror','send','_addObjectProperty','name','stackTraceLimit','_allowedToSend','_setNodeQueryPath','expressionsToEvaluate','_getOwnPropertySymbols','_treeNodePropertiesBeforeFullValue'];_0x2a98=function(){return _0x47734e;};return _0x2a98();}function H(_0x45561e){var _0x534322=_0x2cf5cd;let _0x3f152c=function(_0x148806,_0x5ef6f9){return _0x5ef6f9-_0x148806;},_0x50eaf0;if(_0x45561e[_0x534322(0x290)])_0x50eaf0=function(){var _0x376037=_0x534322;return _0x45561e[_0x376037(0x290)][_0x376037(0x259)]();};else{if(_0x45561e[_0x534322(0x2a2)]&&_0x45561e['process'][_0x534322(0x264)])_0x50eaf0=function(){var _0x3938fb=_0x534322;return _0x45561e[_0x3938fb(0x2a2)][_0x3938fb(0x264)]();},_0x3f152c=function(_0x4d6428,_0x24c728){return 0x3e8*(_0x24c728[0x0]-_0x4d6428[0x0])+(_0x24c728[0x1]-_0x4d6428[0x1])/0xf4240;};else try{let {performance:_0x2c50fd}=require('perf_hooks');_0x50eaf0=function(){var _0x39ffd2=_0x534322;return _0x2c50fd[_0x39ffd2(0x259)]();};}catch{_0x50eaf0=function(){return+new Date();};}}return{'elapsed':_0x3f152c,'timeStamp':_0x50eaf0,'now':()=>Date[_0x534322(0x259)]()};}function X(_0x1f6729,_0x5c6190,_0x217af5){var _0x126b42=_0x2cf5cd;if(_0x1f6729['_consoleNinjaAllowedToStart']!==void 0x0)return _0x1f6729[_0x126b42(0x298)];let _0xe76fa6=_0x1f6729[_0x126b42(0x2a2)]?.[_0x126b42(0x2c1)]?.['node'];return _0xe76fa6&&_0x217af5===_0x126b42(0x22c)?_0x1f6729['_consoleNinjaAllowedToStart']=!0x1:_0x1f6729[_0x126b42(0x298)]=_0xe76fa6||!_0x5c6190||_0x1f6729['location']?.[_0x126b42(0x218)]&&_0x5c6190[_0x126b42(0x2c3)](_0x1f6729[_0x126b42(0x27e)][_0x126b42(0x218)]),_0x1f6729[_0x126b42(0x298)];}function _0x40be(_0x15e1bb,_0x1a4e5d){var _0x2a98f1=_0x2a98();return _0x40be=function(_0x40be20,_0x4701b9){_0x40be20=_0x40be20-0x1e3;var _0x3331c5=_0x2a98f1[_0x40be20];return _0x3331c5;},_0x40be(_0x15e1bb,_0x1a4e5d);}((_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548,_0x2b2eb2,_0x1b70b3,_0x41ce87,_0x40492c)=>{var _0xaf924a=_0x2cf5cd;if(_0x49b204[_0xaf924a(0x243)])return _0x49b204[_0xaf924a(0x243)];if(!X(_0x49b204,_0x41ce87,_0x489548))return _0x49b204['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x49b204[_0xaf924a(0x243)];let _0xf0b388={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5b35fa={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x505e5e=H(_0x49b204),_0x254ab2=_0x505e5e[_0xaf924a(0x297)],_0x4a93d3=_0x505e5e[_0xaf924a(0x23b)],_0xe1d997=_0x505e5e[_0xaf924a(0x259)],_0x47a49a={'hits':{},'ts':{}},_0x2cbc42=_0x1a66cf=>{_0x47a49a['ts'][_0x1a66cf]=_0x4a93d3();},_0x40058f=(_0x55f653,_0x438427)=>{let _0x25052b=_0x47a49a['ts'][_0x438427];if(delete _0x47a49a['ts'][_0x438427],_0x25052b){let _0x4bcb71=_0x254ab2(_0x25052b,_0x4a93d3());_0x1a6309(_0x195f4e('time',_0x55f653,_0xe1d997(),_0xe5069f,[_0x4bcb71],_0x438427));}},_0x1cf403=_0x391d70=>_0x34ff71=>{var _0x545190=_0xaf924a;try{_0x2cbc42(_0x34ff71),_0x391d70(_0x34ff71);}finally{_0x49b204[_0x545190(0x251)][_0x545190(0x201)]=_0x391d70;}},_0x162ea0=_0x434010=>_0x2d8916=>{var _0x386e10=_0xaf924a;try{let [_0x4df1d3,_0x22fa1a]=_0x2d8916[_0x386e10(0x229)](':logPointId:');_0x40058f(_0x22fa1a,_0x4df1d3),_0x434010(_0x4df1d3);}finally{_0x49b204['console'][_0x386e10(0x257)]=_0x434010;}};_0x49b204[_0xaf924a(0x243)]={'consoleLog':(_0x467987,_0x342fa0)=>{var _0x37d8e1=_0xaf924a;_0x49b204[_0x37d8e1(0x251)]['log']['name']!==_0x37d8e1(0x1fb)&&_0x1a6309(_0x195f4e(_0x37d8e1(0x25a),_0x467987,_0xe1d997(),_0xe5069f,_0x342fa0));},'consoleTrace':(_0x4f9b55,_0x2c5df8)=>{var _0x409a8a=_0xaf924a;_0x49b204[_0x409a8a(0x251)]['log'][_0x409a8a(0x1f4)]!=='disabledTrace'&&_0x1a6309(_0x195f4e('trace',_0x4f9b55,_0xe1d997(),_0xe5069f,_0x2c5df8));},'consoleTime':()=>{var _0x372b3c=_0xaf924a;_0x49b204[_0x372b3c(0x251)][_0x372b3c(0x201)]=_0x1cf403(_0x49b204[_0x372b3c(0x251)]['time']);},'consoleTimeEnd':()=>{var _0x49bb97=_0xaf924a;_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]=_0x162ea0(_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]);},'autoLog':(_0x108d5f,_0x4cf9ca)=>{var _0x16ba00=_0xaf924a;_0x1a6309(_0x195f4e(_0x16ba00(0x25a),_0x4cf9ca,_0xe1d997(),_0xe5069f,[_0x108d5f]));},'autoTrace':(_0x1e46d6,_0x2c00ce)=>{var _0x54ceaa=_0xaf924a;_0x1a6309(_0x195f4e(_0x54ceaa(0x2aa),_0x2c00ce,_0xe1d997(),_0xe5069f,[_0x1e46d6]));},'autoTime':(_0x296ec5,_0x4d05a6,_0xae7de0)=>{_0x2cbc42(_0xae7de0);},'autoTimeEnd':(_0x4787e8,_0x45534c,_0x282ccd)=>{_0x40058f(_0x45534c,_0x282ccd);}};let _0x1a6309=V(_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548),_0xe5069f=_0x49b204[_0xaf924a(0x230)];class _0x3ea185{constructor(){var _0x8f3991=_0xaf924a;this[_0x8f3991(0x216)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x49b204['undefined'],this[_0x8f3991(0x2c7)]=_0x49b204[_0x8f3991(0x255)],this['_getOwnPropertyDescriptor']=Object[_0x8f3991(0x21f)],this['_getOwnPropertyNames']=Object[_0x8f3991(0x2c0)],this['_Symbol']=_0x49b204[_0x8f3991(0x2b8)],this[_0x8f3991(0x21a)]=RegExp[_0x8f3991(0x1eb)][_0x8f3991(0x225)],this[_0x8f3991(0x27b)]=Date[_0x8f3991(0x1eb)][_0x8f3991(0x225)];}[_0xaf924a(0x254)](_0x1ffbdf,_0x261664,_0x1119b9,_0x220a1b){var _0x35a28c=_0xaf924a,_0x2b5b13=this,_0xb5b34f=_0x1119b9[_0x35a28c(0x23d)];function _0x3e7ce9(_0x18896a,_0x17698b,_0x102b14){var _0x587cf5=_0x35a28c;_0x17698b['type']=_0x587cf5(0x1ff),_0x17698b[_0x587cf5(0x217)]=_0x18896a['message'],_0x1c9374=_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)],_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)]=_0x17698b,_0x2b5b13['_treeNodePropertiesBeforeFullValue'](_0x17698b,_0x102b14);}if(_0x261664&&_0x261664[_0x35a28c(0x2a9)])_0x3e7ce9(_0x261664,_0x1ffbdf,_0x1119b9);else try{_0x1119b9[_0x35a28c(0x238)]++,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x2ad)][_0x35a28c(0x29c)](_0x261664);var _0x4abe4f,_0x4d7716,_0x16f780,_0x4f50fc,_0x4c3fd8=[],_0x2e94bd=[],_0x107b8f,_0x1a262d=this[_0x35a28c(0x2a6)](_0x261664),_0xec7933=_0x1a262d==='array',_0x48c47a=!0x1,_0x55a62b=_0x1a262d===_0x35a28c(0x293),_0x5dd4e0=this[_0x35a28c(0x213)](_0x1a262d),_0x482298=this[_0x35a28c(0x2c6)](_0x1a262d),_0x164aa8=_0x5dd4e0||_0x482298,_0x1739c6={},_0x2d507c=0x0,_0x18b048=!0x1,_0x1c9374,_0xeccd3f=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1119b9[_0x35a28c(0x224)]){if(_0xec7933){if(_0x4d7716=_0x261664[_0x35a28c(0x24b)],_0x4d7716>_0x1119b9[_0x35a28c(0x2ab)]){for(_0x16f780=0x0,_0x4f50fc=_0x1119b9[_0x35a28c(0x2ab)],_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));_0x1ffbdf[_0x35a28c(0x2a7)]=!0x0;}else{for(_0x16f780=0x0,_0x4f50fc=_0x4d7716,_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));}_0x1119b9['autoExpandPropertyCount']+=_0x2e94bd['length'];}if(!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&!_0x5dd4e0&&_0x1a262d!==_0x35a28c(0x203)&&_0x1a262d!==_0x35a28c(0x2ba)&&_0x1a262d!==_0x35a28c(0x2b7)){var _0x2ae62d=_0x220a1b[_0x35a28c(0x299)]||_0x1119b9[_0x35a28c(0x299)];if(this[_0x35a28c(0x26b)](_0x261664)?(_0x4abe4f=0x0,_0x261664['forEach'](function(_0x46649f){var _0x15a7b7=_0x35a28c;if(_0x2d507c++,_0x1119b9[_0x15a7b7(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x15a7b7(0x27f)]&&_0x1119b9['autoExpand']&&_0x1119b9[_0x15a7b7(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;return;}_0x2e94bd[_0x15a7b7(0x29c)](_0x2b5b13[_0x15a7b7(0x1e9)](_0x4c3fd8,_0x261664,'Set',_0x4abe4f++,_0x1119b9,function(_0x5c98b8){return function(){return _0x5c98b8;};}(_0x46649f)));})):this[_0x35a28c(0x276)](_0x261664)&&_0x261664['forEach'](function(_0x8ca25,_0x4c3572){var _0x1bfdfd=_0x35a28c;if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x1bfdfd(0x27f)]&&_0x1119b9[_0x1bfdfd(0x23d)]&&_0x1119b9['autoExpandPropertyCount']>_0x1119b9[_0x1bfdfd(0x2c2)]){_0x18b048=!0x0;return;}var _0x4873de=_0x4c3572['toString']();_0x4873de[_0x1bfdfd(0x24b)]>0x64&&(_0x4873de=_0x4873de['slice'](0x0,0x64)+_0x1bfdfd(0x234)),_0x2e94bd[_0x1bfdfd(0x29c)](_0x2b5b13[_0x1bfdfd(0x1e9)](_0x4c3fd8,_0x261664,_0x1bfdfd(0x250),_0x4873de,_0x1119b9,function(_0x1cdb70){return function(){return _0x1cdb70;};}(_0x8ca25)));}),!_0x48c47a){try{for(_0x107b8f in _0x261664)if(!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)){if(_0x2d507c++,_0x1119b9[_0x35a28c(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9[_0x35a28c(0x2c2)]){_0x18b048=!0x0;break;}_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}catch{}if(_0x1739c6[_0x35a28c(0x23c)]=!0x0,_0x55a62b&&(_0x1739c6[_0x35a28c(0x23a)]=!0x0),!_0x18b048){var _0x155fac=[][_0x35a28c(0x219)](this['_getOwnPropertyNames'](_0x261664))['concat'](this[_0x35a28c(0x1f9)](_0x261664));for(_0x4abe4f=0x0,_0x4d7716=_0x155fac[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)if(_0x107b8f=_0x155fac[_0x4abe4f],!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f['toString']()))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)&&!_0x1739c6[_0x35a28c(0x214)+_0x107b8f[_0x35a28c(0x225)]()]){if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;break;}_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}}}}if(_0x1ffbdf[_0x35a28c(0x2b1)]=_0x1a262d,_0x164aa8?(_0x1ffbdf[_0x35a28c(0x1e7)]=_0x261664[_0x35a28c(0x270)](),this[_0x35a28c(0x20e)](_0x1a262d,_0x1ffbdf,_0x1119b9,_0x220a1b)):_0x1a262d===_0x35a28c(0x1e4)?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x27b)][_0x35a28c(0x25b)](_0x261664):_0x1a262d===_0x35a28c(0x205)?_0x1ffbdf[_0x35a28c(0x1e7)]=this['_regExpToString']['call'](_0x261664):_0x1a262d===_0x35a28c(0x2bd)&&this['_Symbol']?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x222)][_0x35a28c(0x1eb)][_0x35a28c(0x225)][_0x35a28c(0x25b)](_0x261664):!_0x1119b9[_0x35a28c(0x224)]&&!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&(delete _0x1ffbdf[_0x35a28c(0x1e7)],_0x1ffbdf[_0x35a28c(0x25c)]=!0x0),_0x18b048&&(_0x1ffbdf[_0x35a28c(0x28b)]=!0x0),_0x1c9374=_0x1119b9[_0x35a28c(0x287)]['current'],_0x1119b9[_0x35a28c(0x287)][_0x35a28c(0x24a)]=_0x1ffbdf,this[_0x35a28c(0x1fa)](_0x1ffbdf,_0x1119b9),_0x2e94bd[_0x35a28c(0x24b)]){for(_0x4abe4f=0x0,_0x4d7716=_0x2e94bd[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)_0x2e94bd[_0x4abe4f](_0x4abe4f);}_0x4c3fd8[_0x35a28c(0x24b)]&&(_0x1ffbdf['props']=_0x4c3fd8);}catch(_0x5acfee){_0x3e7ce9(_0x5acfee,_0x1ffbdf,_0x1119b9);}return this[_0x35a28c(0x233)](_0x261664,_0x1ffbdf),this[_0x35a28c(0x239)](_0x1ffbdf,_0x1119b9),_0x1119b9['node'][_0x35a28c(0x24a)]=_0x1c9374,_0x1119b9[_0x35a28c(0x238)]--,_0x1119b9['autoExpand']=_0xb5b34f,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9['autoExpandPreviousObjects']['pop'](),_0x1ffbdf;}[_0xaf924a(0x1f9)](_0x26b81e){var _0x33466c=_0xaf924a;return Object[_0x33466c(0x20c)]?Object[_0x33466c(0x20c)](_0x26b81e):[];}[_0xaf924a(0x26b)](_0x3fbc47){var _0x1986bd=_0xaf924a;return!!(_0x3fbc47&&_0x49b204[_0x1986bd(0x26f)]&&this[_0x1986bd(0x2b4)](_0x3fbc47)===_0x1986bd(0x258)&&_0x3fbc47[_0x1986bd(0x262)]);}[_0xaf924a(0x211)](_0x1ab315,_0x21ebf2,_0x470340){var _0x48210a=_0xaf924a;return _0x470340[_0x48210a(0x29b)]?typeof _0x1ab315[_0x21ebf2]==_0x48210a(0x293):!0x1;}['_type'](_0x5dcb54){var _0x3d62dd=_0xaf924a,_0x2fc396='';return _0x2fc396=typeof _0x5dcb54,_0x2fc396==='object'?this['_objectToString'](_0x5dcb54)===_0x3d62dd(0x294)?_0x2fc396=_0x3d62dd(0x291):this[_0x3d62dd(0x2b4)](_0x5dcb54)===_0x3d62dd(0x29e)?_0x2fc396=_0x3d62dd(0x1e4):_0x5dcb54===null?_0x2fc396='null':_0x5dcb54[_0x3d62dd(0x274)]&&(_0x2fc396=_0x5dcb54['constructor'][_0x3d62dd(0x1f4)]||_0x2fc396):_0x2fc396===_0x3d62dd(0x1fe)&&this['_HTMLAllCollection']&&_0x5dcb54 instanceof this[_0x3d62dd(0x2c7)]&&(_0x2fc396=_0x3d62dd(0x255)),_0x2fc396;}['_objectToString'](_0x141c18){var _0x3ac2dc=_0xaf924a;return Object['prototype'][_0x3ac2dc(0x225)][_0x3ac2dc(0x25b)](_0x141c18);}[_0xaf924a(0x213)](_0x5a457d){var _0x597d85=_0xaf924a;return _0x5a457d===_0x597d85(0x2bc)||_0x5a457d===_0x597d85(0x228)||_0x5a457d===_0x597d85(0x268);}[_0xaf924a(0x2c6)](_0x5898cf){var _0x3157c0=_0xaf924a;return _0x5898cf===_0x3157c0(0x261)||_0x5898cf===_0x3157c0(0x203)||_0x5898cf==='Number';}['_addProperty'](_0x5245f8,_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048){var _0x4f3373=this;return function(_0x6f86d0){var _0x55b709=_0x40be,_0x497a8c=_0x34b2c2[_0x55b709(0x287)]['current'],_0x401bcb=_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)],_0x4e8dba=_0x34b2c2['node'][_0x55b709(0x271)];_0x34b2c2[_0x55b709(0x287)]['parent']=_0x497a8c,_0x34b2c2[_0x55b709(0x287)]['index']=typeof _0x2ef032==_0x55b709(0x268)?_0x2ef032:_0x6f86d0,_0x5245f8['push'](_0x4f3373[_0x55b709(0x24f)](_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048)),_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x271)]=_0x4e8dba,_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)]=_0x401bcb;};}[_0xaf924a(0x1f3)](_0x1d7c25,_0x5b8b24,_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3){var _0xd780f0=_0xaf924a,_0x8addf0=this;return _0x5b8b24[_0xd780f0(0x214)+_0x1e6ee4[_0xd780f0(0x225)]()]=!0x0,function(_0x239d6b){var _0x1443cd=_0xd780f0,_0x4df5e1=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x24a)],_0x540e10=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)],_0x2915bc=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)];_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)]=_0x4df5e1,_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)]=_0x239d6b,_0x1d7c25[_0x1443cd(0x29c)](_0x8addf0[_0x1443cd(0x24f)](_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3)),_0x3b78cf['node'][_0x1443cd(0x271)]=_0x2915bc,_0x3b78cf[_0x1443cd(0x287)]['index']=_0x540e10;};}[_0xaf924a(0x24f)](_0x2dc156,_0x84e3c9,_0x3d7e0f,_0x50afce,_0x126c84){var _0x8fb306=_0xaf924a,_0x57d1bb=this;_0x126c84||(_0x126c84=function(_0x277ab9,_0x4edfaa){return _0x277ab9[_0x4edfaa];});var _0x4d7cfe=_0x3d7e0f[_0x8fb306(0x225)](),_0x338741=_0x50afce[_0x8fb306(0x1f8)]||{},_0x135349=_0x50afce[_0x8fb306(0x224)],_0x3fc65a=_0x50afce[_0x8fb306(0x27f)];try{var _0x141963=this['_isMap'](_0x2dc156),_0x31060d=_0x4d7cfe;_0x141963&&_0x31060d[0x0]==='\\x27'&&(_0x31060d=_0x31060d['substr'](0x1,_0x31060d['length']-0x2));var _0x2b079a=_0x50afce[_0x8fb306(0x1f8)]=_0x338741['_p_'+_0x31060d];_0x2b079a&&(_0x50afce[_0x8fb306(0x224)]=_0x50afce['depth']+0x1),_0x50afce[_0x8fb306(0x27f)]=!!_0x2b079a;var _0x15c8b0=typeof _0x3d7e0f=='symbol',_0x24ddbc={'name':_0x15c8b0||_0x141963?_0x4d7cfe:this[_0x8fb306(0x275)](_0x4d7cfe)};if(_0x15c8b0&&(_0x24ddbc[_0x8fb306(0x2bd)]=!0x0),!(_0x84e3c9===_0x8fb306(0x291)||_0x84e3c9==='Error')){var _0x431848=this[_0x8fb306(0x27d)](_0x2dc156,_0x3d7e0f);if(_0x431848&&(_0x431848[_0x8fb306(0x1ea)]&&(_0x24ddbc[_0x8fb306(0x21c)]=!0x0),_0x431848['get']&&!_0x2b079a&&!_0x50afce[_0x8fb306(0x253)]))return _0x24ddbc[_0x8fb306(0x279)]=!0x0,this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x2b3202;try{_0x2b3202=_0x126c84(_0x2dc156,_0x3d7e0f);}catch(_0x14b48e){return _0x24ddbc={'name':_0x4d7cfe,'type':'unknown','error':_0x14b48e[_0x8fb306(0x1ef)]},this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x41dc6b=this['_type'](_0x2b3202),_0x40b8f0=this[_0x8fb306(0x213)](_0x41dc6b);if(_0x24ddbc[_0x8fb306(0x2b1)]=_0x41dc6b,_0x40b8f0)this['_processTreeNodeResult'](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x559389=_0x8fb306;_0x24ddbc['value']=_0x2b3202[_0x559389(0x270)](),!_0x2b079a&&_0x57d1bb['_capIfString'](_0x41dc6b,_0x24ddbc,_0x50afce,{});});else{var _0x57f4f8=_0x50afce[_0x8fb306(0x23d)]&&_0x50afce[_0x8fb306(0x238)]<_0x50afce['autoExpandMaxDepth']&&_0x50afce[_0x8fb306(0x2ad)]['indexOf'](_0x2b3202)<0x0&&_0x41dc6b!==_0x8fb306(0x293)&&_0x50afce[_0x8fb306(0x1e5)]<_0x50afce[_0x8fb306(0x2c2)];_0x57f4f8||_0x50afce[_0x8fb306(0x238)]<_0x135349||_0x2b079a?(this[_0x8fb306(0x254)](_0x24ddbc,_0x2b3202,_0x50afce,_0x2b079a||{}),this[_0x8fb306(0x233)](_0x2b3202,_0x24ddbc)):this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x267210=_0x8fb306;_0x41dc6b===_0x267210(0x22d)||_0x41dc6b===_0x267210(0x1fe)||(delete _0x24ddbc[_0x267210(0x1e7)],_0x24ddbc[_0x267210(0x25c)]=!0x0);});}return _0x24ddbc;}finally{_0x50afce['expressionsToEvaluate']=_0x338741,_0x50afce[_0x8fb306(0x224)]=_0x135349,_0x50afce[_0x8fb306(0x27f)]=_0x3fc65a;}}[_0xaf924a(0x20e)](_0x4b62bd,_0xc40a6,_0x76d4db,_0x1bb854){var _0x2b20d2=_0xaf924a,_0x48134b=_0x1bb854['strLength']||_0x76d4db[_0x2b20d2(0x278)];if((_0x4b62bd===_0x2b20d2(0x228)||_0x4b62bd==='String')&&_0xc40a6[_0x2b20d2(0x1e7)]){let _0x489af6=_0xc40a6['value'][_0x2b20d2(0x24b)];_0x76d4db['allStrLength']+=_0x489af6,_0x76d4db[_0x2b20d2(0x236)]>_0x76d4db[_0x2b20d2(0x24e)]?(_0xc40a6[_0x2b20d2(0x25c)]='',delete _0xc40a6['value']):_0x489af6>_0x48134b&&(_0xc40a6['capped']=_0xc40a6[_0x2b20d2(0x1e7)][_0x2b20d2(0x215)](0x0,_0x48134b),delete _0xc40a6[_0x2b20d2(0x1e7)]);}}['_isMap'](_0x137793){var _0x274dce=_0xaf924a;return!!(_0x137793&&_0x49b204['Map']&&this[_0x274dce(0x2b4)](_0x137793)===_0x274dce(0x28c)&&_0x137793[_0x274dce(0x262)]);}[_0xaf924a(0x275)](_0x3b398f){var _0x3414c6=_0xaf924a;if(_0x3b398f[_0x3414c6(0x1e3)](/^\\d+$/))return _0x3b398f;var _0x3a961e;try{_0x3a961e=JSON['stringify'](''+_0x3b398f);}catch{_0x3a961e='\\x22'+this[_0x3414c6(0x2b4)](_0x3b398f)+'\\x22';}return _0x3a961e['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x3a961e=_0x3a961e[_0x3414c6(0x215)](0x1,_0x3a961e['length']-0x2):_0x3a961e=_0x3a961e['replace'](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x3a961e;}['_processTreeNodeResult'](_0x494cf3,_0x3a7130,_0x2965bb,_0x4ed090){var _0x1fc133=_0xaf924a;this[_0x1fc133(0x1fa)](_0x494cf3,_0x3a7130),_0x4ed090&&_0x4ed090(),this[_0x1fc133(0x233)](_0x2965bb,_0x494cf3),this[_0x1fc133(0x239)](_0x494cf3,_0x3a7130);}[_0xaf924a(0x1fa)](_0x8a70e8,_0x172dc9){var _0x5bfd95=_0xaf924a;this['_setNodeId'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x1f7)](_0x8a70e8,_0x172dc9),this['_setNodeExpressionPath'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x2a3)](_0x8a70e8,_0x172dc9);}[_0xaf924a(0x220)](_0x1021a5,_0x494447){}['_setNodeQueryPath'](_0x20ad16,_0x5f3886){}[_0xaf924a(0x20f)](_0x13a7a7,_0x54f993){}['_isUndefined'](_0x310d6f){return _0x310d6f===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x43c671,_0x48f11a){var _0x321c60=_0xaf924a;this[_0x321c60(0x20f)](_0x43c671,_0x48f11a),this['_setNodeExpandableState'](_0x43c671),_0x48f11a[_0x321c60(0x241)]&&this[_0x321c60(0x2a4)](_0x43c671),this[_0x321c60(0x21e)](_0x43c671,_0x48f11a),this['_addLoadNode'](_0x43c671,_0x48f11a),this[_0x321c60(0x282)](_0x43c671);}[_0xaf924a(0x233)](_0x226191,_0x58f6f1){var _0x43a02f=_0xaf924a;try{_0x226191&&typeof _0x226191[_0x43a02f(0x24b)]==_0x43a02f(0x268)&&(_0x58f6f1['length']=_0x226191[_0x43a02f(0x24b)]);}catch{}if(_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x268)||_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x200)){if(isNaN(_0x58f6f1[_0x43a02f(0x1e7)]))_0x58f6f1['nan']=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];else switch(_0x58f6f1[_0x43a02f(0x1e7)]){case Number['POSITIVE_INFINITY']:_0x58f6f1[_0x43a02f(0x29a)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case Number[_0x43a02f(0x23e)]:_0x58f6f1[_0x43a02f(0x1ec)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case 0x0:this[_0x43a02f(0x292)](_0x58f6f1[_0x43a02f(0x1e7)])&&(_0x58f6f1[_0x43a02f(0x2b6)]=!0x0);break;}}else _0x58f6f1['type']==='function'&&typeof _0x226191[_0x43a02f(0x1f4)]==_0x43a02f(0x228)&&_0x226191[_0x43a02f(0x1f4)]&&_0x58f6f1[_0x43a02f(0x1f4)]&&_0x226191['name']!==_0x58f6f1[_0x43a02f(0x1f4)]&&(_0x58f6f1['funcName']=_0x226191[_0x43a02f(0x1f4)]);}[_0xaf924a(0x292)](_0x99e5d7){var _0x5af86c=_0xaf924a;return 0x1/_0x99e5d7===Number[_0x5af86c(0x23e)];}[_0xaf924a(0x2a4)](_0x4da140){var _0x59d583=_0xaf924a;!_0x4da140[_0x59d583(0x299)]||!_0x4da140['props'][_0x59d583(0x24b)]||_0x4da140['type']===_0x59d583(0x291)||_0x4da140[_0x59d583(0x2b1)]===_0x59d583(0x250)||_0x4da140['type']===_0x59d583(0x26f)||_0x4da140[_0x59d583(0x299)][_0x59d583(0x223)](function(_0x2bca0f,_0x6aada0){var _0x433cc9=_0x59d583,_0x220ffd=_0x2bca0f[_0x433cc9(0x1f4)][_0x433cc9(0x277)](),_0x52a25d=_0x6aada0[_0x433cc9(0x1f4)][_0x433cc9(0x277)]();return _0x220ffd<_0x52a25d?-0x1:_0x220ffd>_0x52a25d?0x1:0x0;});}[_0xaf924a(0x21e)](_0x48dce4,_0x48f4c6){var _0x2678d7=_0xaf924a;if(!(_0x48f4c6['noFunctions']||!_0x48dce4[_0x2678d7(0x299)]||!_0x48dce4[_0x2678d7(0x299)]['length'])){for(var _0x279f85=[],_0x27fbf8=[],_0x58bb24=0x0,_0x1abc8f=_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x24b)];_0x58bb24<_0x1abc8f;_0x58bb24++){var _0x3caeb2=_0x48dce4['props'][_0x58bb24];_0x3caeb2[_0x2678d7(0x2b1)]===_0x2678d7(0x293)?_0x279f85[_0x2678d7(0x29c)](_0x3caeb2):_0x27fbf8[_0x2678d7(0x29c)](_0x3caeb2);}if(!(!_0x27fbf8[_0x2678d7(0x24b)]||_0x279f85[_0x2678d7(0x24b)]<=0x1)){_0x48dce4[_0x2678d7(0x299)]=_0x27fbf8;var _0xe3d941={'functionsNode':!0x0,'props':_0x279f85};this[_0x2678d7(0x220)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x20f)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x295)](_0xe3d941),this['_setNodePermissions'](_0xe3d941,_0x48f4c6),_0xe3d941['id']+='\\x20f',_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x28a)](_0xe3d941);}}}[_0xaf924a(0x2be)](_0x48eb38,_0x20f75c){}[_0xaf924a(0x295)](_0x129122){}[_0xaf924a(0x26a)](_0x1f6bb8){var _0x2820a2=_0xaf924a;return Array[_0x2820a2(0x208)](_0x1f6bb8)||typeof _0x1f6bb8==_0x2820a2(0x1ed)&&this[_0x2820a2(0x2b4)](_0x1f6bb8)===_0x2820a2(0x294);}[_0xaf924a(0x2a3)](_0x1ea391,_0x8f50b2){}['_cleanNode'](_0x52cd26){var _0x498c91=_0xaf924a;delete _0x52cd26[_0x498c91(0x22f)],delete _0x52cd26['_hasSetOnItsPath'],delete _0x52cd26[_0x498c91(0x235)];}[_0xaf924a(0x28f)](_0x5c8a9c,_0x31124f){}[_0xaf924a(0x286)](_0x2f7a58){var _0x397561=_0xaf924a;return _0x2f7a58?_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x1fc)])?'['+_0x2f7a58+']':_0x2f7a58[_0x397561(0x1e3)](this['_keyStrRegExp'])?'.'+_0x2f7a58:_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x226)])?'['+_0x2f7a58+']':'[\\x27'+_0x2f7a58+'\\x27]':'';}}let _0x3fbb82=new _0x3ea185();function _0x195f4e(_0x20dbd1,_0x567217,_0x7b3f99,_0x256338,_0x381038,_0xb947b4){var _0x5299ea=_0xaf924a;let _0xc570be,_0x171851;try{_0x171851=_0x4a93d3(),_0xc570be=_0x47a49a[_0x567217],!_0xc570be||_0x171851-_0xc570be['ts']>0x1f4&&_0xc570be[_0x5299ea(0x272)]&&_0xc570be['time']/_0xc570be[_0x5299ea(0x272)]<0x64?(_0x47a49a[_0x567217]=_0xc570be={'count':0x0,'time':0x0,'ts':_0x171851},_0x47a49a[_0x5299ea(0x25f)]={}):_0x171851-_0x47a49a[_0x5299ea(0x25f)]['ts']>0x32&&_0x47a49a['hits']['count']&&_0x47a49a[_0x5299ea(0x25f)]['time']/_0x47a49a['hits'][_0x5299ea(0x272)]<0x64&&(_0x47a49a[_0x5299ea(0x25f)]={});let _0x4ea285=[],_0x56b786=_0xc570be['reduceLimits']||_0x47a49a['hits'][_0x5299ea(0x2a5)]?_0x5b35fa:_0xf0b388,_0x3563e3=_0x51e7d1=>{var _0x2491a0=_0x5299ea;let _0x26ab25={};return _0x26ab25[_0x2491a0(0x299)]=_0x51e7d1[_0x2491a0(0x299)],_0x26ab25['elements']=_0x51e7d1['elements'],_0x26ab25['strLength']=_0x51e7d1['strLength'],_0x26ab25[_0x2491a0(0x24e)]=_0x51e7d1[_0x2491a0(0x24e)],_0x26ab25[_0x2491a0(0x2c2)]=_0x51e7d1[_0x2491a0(0x2c2)],_0x26ab25['autoExpandMaxDepth']=_0x51e7d1[_0x2491a0(0x1fd)],_0x26ab25[_0x2491a0(0x241)]=!0x1,_0x26ab25[_0x2491a0(0x29b)]=!_0x40492c,_0x26ab25[_0x2491a0(0x224)]=0x1,_0x26ab25[_0x2491a0(0x238)]=0x0,_0x26ab25[_0x2491a0(0x263)]=_0x2491a0(0x29f),_0x26ab25['rootExpression']='root_exp',_0x26ab25['autoExpand']=!0x0,_0x26ab25[_0x2491a0(0x2ad)]=[],_0x26ab25[_0x2491a0(0x1e5)]=0x0,_0x26ab25[_0x2491a0(0x253)]=!0x0,_0x26ab25['allStrLength']=0x0,_0x26ab25[_0x2491a0(0x287)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x26ab25;};for(var _0x35907a=0x0;_0x35907a<_0x381038[_0x5299ea(0x24b)];_0x35907a++)_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82['serialize']({'timeNode':_0x20dbd1===_0x5299ea(0x201)||void 0x0},_0x381038[_0x35907a],_0x3563e3(_0x56b786),{}));if(_0x20dbd1===_0x5299ea(0x2aa)){let _0xecc6de=Error[_0x5299ea(0x1f5)];try{Error[_0x5299ea(0x1f5)]=0x1/0x0,_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82[_0x5299ea(0x254)]({'stackNode':!0x0},new Error()[_0x5299ea(0x260)],_0x3563e3(_0x56b786),{'strLength':0x1/0x0}));}finally{Error[_0x5299ea(0x1f5)]=_0xecc6de;}}return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':_0x4ea285,'id':_0x567217,'context':_0xb947b4}]};}catch(_0xeea157){return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':[{'type':_0x5299ea(0x1ff),'error':_0xeea157&&_0xeea157[_0x5299ea(0x1ef)]}],'id':_0x567217,'context':_0xb947b4}]};}finally{try{if(_0xc570be&&_0x171851){let _0x5613c6=_0x4a93d3();_0xc570be[_0x5299ea(0x272)]++,_0xc570be['time']+=_0x254ab2(_0x171851,_0x5613c6),_0xc570be['ts']=_0x5613c6,_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]++,_0x47a49a['hits']['time']+=_0x254ab2(_0x171851,_0x5613c6),_0x47a49a[_0x5299ea(0x25f)]['ts']=_0x5613c6,(_0xc570be['count']>0x32||_0xc570be[_0x5299ea(0x201)]>0x64)&&(_0xc570be[_0x5299ea(0x2a5)]=!0x0),(_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]>0x3e8||_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x201)]>0x12c)&&(_0x47a49a['hits'][_0x5299ea(0x2a5)]=!0x0);}}catch{}}}return _0x49b204[_0xaf924a(0x243)];})(globalThis,_0x2cf5cd(0x1e6),_0x2cf5cd(0x21b),_0x2cf5cd(0x256),_0x2cf5cd(0x28d),_0x2cf5cd(0x265),_0x2cf5cd(0x24c),["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.7"],'');`
      )
    );
  } catch {}
}
function oo_oo6(i, ...v) {
  try {
    oo_cm6().consoleLog(i, v);
  } catch {}
  return v;
}

// app/routes/text.$id.posts.tsx
var import_node6 = require('@remix-run/node');
var import_jsx_runtime16 = require('react/jsx-runtime'),
  loader4 = async ({ request, params }) => {
    let textId = params.id && parseInt(params.id),
      threadId = new URL(request.url).searchParams.get('thread') ?? '';
    if (textId === '' || !textId) return (0, import_node6.redirect)('/');
    let posts = findPostByTextId(textId);
    return (0, import_node6.defer)({ text: { id: textId }, posts, threadId });
  },
  ErrorBoundary2 = ({ error }) =>
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)('div', { children: error == null ? void 0 : error.message });
function PostContainer() {
  let data = useLiveLoader(),
    [, setParams] = (0, import_react19.useSearchParams)(),
    [selectedPostThread2, setSelectedThread] = (0, import_recoil7.useRecoilState)(selectedPostThread);
  (0, import_react18.useEffect)(() => {
    let selectedThread = data.threadId;
    if (selectedThread && selectedThread !== '') {
      setTimeout(() => {
        var _a, _b;
        let threadId = 'p_' + selectedThread;
        (_a = document.getElementById('p_' + selectedThread)) == null ||
          _a.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          }),
          (_b = document.getElementById(selectedThread)) == null ||
            _b.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'center',
            });
      }, 2e3),
        setParams('', { preventScrollReset: !0 });
      let timer = setTimeout(() => {
        setSelectedThread({ id: selectedThread });
      }, 1e3);
      return () => {
        timer && selectedPostThread2.id && clearTimeout(timer);
      };
    }
  }, []);
  let [isLatestPost, setIsLatestPost] = (0, import_recoil7.useRecoilState)(showLatest),
    setOpenFilter = (0, import_recoil7.useSetRecoilState)(openFilterState),
    translation = uselitteraTranlation(),
    { editor } = (0, import_react19.useOutletContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)('div', {
        className: ' w-full items-center justify-end inline-flex gap-2 mb-4 ',
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_flowbite_react3.Dropdown, {
            label: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)('svg', {
                  width: '16',
                  height: '14',
                  viewBox: '0 0 16 14',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)('path', {
                    d: 'M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H12C12.2652 2 12.5196 1.89464 12.7071 1.70711C12.8946 1.51957 13 1.26522 13 1C13 0.734784 12.8946 0.48043 12.7071 0.292893C12.5196 0.105357 12.2652 0 12 0H1ZM1 4C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6H6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5C7 4.73478 6.89464 4.48043 6.70711 4.29289C6.51957 4.10536 6.26522 4 6 4H1ZM1 8C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9C0 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10H5C5.26522 10 5.51957 9.89464 5.70711 9.70711C5.89464 9.51957 6 9.26522 6 9C6 8.73478 5.89464 8.48043 5.70711 8.29289C5.51957 8.10536 5.26522 8 5 8H1ZM11 13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8946 11.7348 14 12 14C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V7.414L14.293 8.707C14.4816 8.88916 14.7342 8.98995 14.9964 8.98767C15.2586 8.9854 15.5094 8.88023 15.6948 8.69482C15.8802 8.50941 15.9854 8.2586 15.9877 7.9964C15.99 7.7342 15.8892 7.4816 15.707 7.293L12.707 4.293C12.5195 4.10553 12.2652 4.00021 12 4.00021C11.7348 4.00021 11.4805 4.10553 11.293 4.293L8.293 7.293C8.19749 7.38525 8.12131 7.49559 8.0689 7.6176C8.01649 7.7396 7.9889 7.87082 7.98775 8.0036C7.9866 8.13638 8.0119 8.26806 8.06218 8.39095C8.11246 8.51385 8.18671 8.6255 8.28061 8.71939C8.3745 8.81329 8.48615 8.88754 8.60905 8.93782C8.73194 8.9881 8.86362 9.0134 8.9964 9.01225C9.12918 9.0111 9.2604 8.98351 9.3824 8.9311C9.50441 8.87869 9.61475 8.80251 9.707 8.707L11 7.414V13Z',
                    fill: '#6B7280',
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)('span', {
                  className: 'sort ml-2 text-sm font-medium leading-tight text-gray-500 dark:text-gray-50',
                  children: 'sort By',
                }),
              ],
            }),
            size: 'sm',
            color: 'white',
            className: 'outline-1 outline-gray-300 outline',
            dismissOnClick: !1,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_flowbite_react3.Dropdown.Item, {
                className: isLatestPost ? 'bg-green-300 dark:bg-gray-300 text-white ' : '',
                onClick: () => setIsLatestPost(!0),
                children: 'Latest',
              }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_flowbite_react3.Dropdown.Item, {
                className: isLatestPost ? '' : 'bg-green-300 dark:bg-gray-300 text-white ',
                onClick: () => setIsLatestPost(!1),
                children: 'Earliest',
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)('button', {
            id: 'filterButton',
            onClick: () => setOpenFilter((prev) => !prev),
            className: 'filter flex items-center justify-center space-x-2 rounded-lg border border-gray-200 px-3 py-2',
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)('svg', {
                width: '16',
                height: '17',
                viewBox: '0 0 16 17',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M2.3999 2.89998C2.3999 2.6878 2.48419 2.48432 2.63422 2.33429C2.78425 2.18426 2.98773 2.09998 3.1999 2.09998H12.7999C13.0121 2.09998 13.2156 2.18426 13.3656 2.33429C13.5156 2.48432 13.5999 2.6878 13.5999 2.89998V5.29998C13.5999 5.51213 13.5155 5.71558 13.3655 5.86558L9.5999 9.63117V12.5C9.59986 12.7121 9.51554 12.9156 9.3655 13.0656L7.7655 14.6656C7.65362 14.7774 7.51109 14.8536 7.35593 14.8844C7.20077 14.9153 7.03994 14.8995 6.89378 14.8389C6.74762 14.7784 6.62269 14.6759 6.53478 14.5443C6.44687 14.4128 6.39994 14.2582 6.3999 14.1V9.63117L2.6343 5.86558C2.48426 5.71558 2.39995 5.51213 2.3999 5.29998V2.89998Z',
                  fill: '#6B7280',
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)('span', {
                className: 'text-sm font-medium leading-tight text-gray-500 dark:text-gray-50',
                children: translation.filter,
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(PostForm_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react18.Suspense, {
        fallback: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)('div', { children: 'loading' }),
        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react19.Await, {
          resolve: data.posts,
          children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Posts_default, { editor }),
        }),
      }),
    ],
  });
}

// app/routes/api.reply.$id.tsx
var api_reply_id_exports = {};
__export(api_reply_id_exports, {
  loader: () => loader5,
});
var import_react_router3 = require('react-router');

// app/model/reply.ts
async function createReply(id, postId, likedById) {
  try {
    return await db.reply.create({
      data: {
        id,
        parentPost: {
          connect: {
            id: postId,
          },
        },
        likedBy: {
          connect: {
            id: likedById,
          },
        },
      },
      include: {
        likedBy: !0,
      },
    });
  } catch (e) {
    throw new Error('creating reply Error ' + e.message);
  }
}
async function findReply(id, likedBy) {
  try {
    return await db.reply.findFirst({
      where: {
        id,
        likedBy: {
          some: {
            id: likedBy,
          },
        },
      },
    });
  } catch (e) {
    throw new Error('couldnot find reply error' + e.message);
  }
}
async function findReplyByPostId(post_id) {
  try {
    return await db.reply.findMany({
      where: {
        post_id,
      },
      include: {
        likedBy: !0,
      },
      orderBy: {
        is_approved: 'asc',
      },
    });
  } catch (e) {
    throw new Error('finding reply by postId error' + e.message);
  }
}
async function isReplyPresent(replyId) {
  try {
    return !!(await db.reply.findUnique({
      where: {
        id: replyId,
      },
    }));
  } catch (error) {
    throw new Error(`Error checking reply presence: ${error.message}`);
  }
}
async function updateLikeReply(id, likedBy, put) {
  try {
    await db.reply.update({
      where: {
        id,
      },
      data: {
        likedBy: put
          ? {
              connect: {
                id: likedBy,
              },
            }
          : {
              disconnect: {
                id: likedBy,
              },
            },
      },
    });
  } catch (e) {
    throw new Error('couldnot update reply error' + e.message);
  }
}
async function updateIsAproved(id, is_approved) {
  try {
    return await db.reply.update({
      where: {
        id,
      },
      data: {
        is_approved,
      },
    });
  } catch (e) {
    throw new Error('updating approved error' + e.message);
  }
}

// app/routes/api.reply.$id.tsx
var loader5 = async ({ params, request }) => {
  var _a;
  let id = parseInt(params == null ? void 0 : params.id),
    post = await findPostByTopicId(id),
    posts = [],
    data = getposts(id),
    replyListPromise = findReplyByPostId(post == null ? void 0 : post.id),
    [postsData, replyList] = await Promise.all([data, replyListPromise]),
    postsList = (_a = postsData.post_stream) == null ? void 0 : _a.posts;
  return (
    (posts = combineArrays(replyList, postsList)),
    (0, import_react_router3.json)({
      posts,
    })
  );
};
function combineArrays(array1, array2) {
  let idMap = new Map(array1.map((obj) => [String(obj.id), obj]));
  return array2
    .map((obj) => {
      let matchingObject = idMap.get(String(obj.id));
      return matchingObject ? { ...obj, ...matchingObject } : obj;
    })
    .slice(1)
    .sort((a, b) => (a.is_approved === b.is_approved ? 0 : a.is_approved ? -1 : 1));
}

// app/routes/auth_.pusher.tsx
var auth_pusher_exports = {};
__export(auth_pusher_exports, {
  action: () => action5,
});
var action5 = async ({ request }) => {
  let user = await getUserSession(request),
    formData = await request.formData(),
    socket_id = formData.get('socket_id'),
    channel_name = formData.get('channel_name'),
    presenceData = {
      user_id: user.id,
      user_info: {
        username: user.username,
        avatarUrl: user.avatarUrl,
      },
    };
  try {
    return pusher_server_default.authenticate(socket_id, channel_name, presenceData);
  } catch (e) {
    console.log(...oo_oo7('b3afe8a7_0', e));
  }
  return null;
};
function oo_cm7() {
  try {
    return (
      (0, eval)('globalThis._console_ninja') ||
      (0, eval)(
        `/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2cf5cd=_0x40be;(function(_0x582a6d,_0x326ed6){var _0x274fa5=_0x40be,_0x4e6359=_0x582a6d();while(!![]){try{var _0x36ca3c=parseInt(_0x274fa5(0x240))/0x1+parseInt(_0x274fa5(0x2bf))/0x2*(parseInt(_0x274fa5(0x27c))/0x3)+parseInt(_0x274fa5(0x1f0))/0x4*(parseInt(_0x274fa5(0x288))/0x5)+parseInt(_0x274fa5(0x1ee))/0x6+parseInt(_0x274fa5(0x2b9))/0x7*(parseInt(_0x274fa5(0x20b))/0x8)+parseInt(_0x274fa5(0x269))/0x9*(parseInt(_0x274fa5(0x289))/0xa)+-parseInt(_0x274fa5(0x20a))/0xb;if(_0x36ca3c===_0x326ed6)break;else _0x4e6359['push'](_0x4e6359['shift']());}catch(_0x19d0c6){_0x4e6359['push'](_0x4e6359['shift']());}}}(_0x2a98,0xda71d));var ue=Object[_0x2cf5cd(0x21d)],te=Object[_0x2cf5cd(0x2ae)],he=Object[_0x2cf5cd(0x21f)],le=Object['getOwnPropertyNames'],fe=Object['getPrototypeOf'],_e=Object['prototype'][_0x2cf5cd(0x1e8)],pe=(_0x25f11f,_0x357847,_0x2ae353,_0x3d8e2d)=>{var _0x44b478=_0x2cf5cd;if(_0x357847&&typeof _0x357847=='object'||typeof _0x357847==_0x44b478(0x293)){for(let _0x4a4651 of le(_0x357847))!_e['call'](_0x25f11f,_0x4a4651)&&_0x4a4651!==_0x2ae353&&te(_0x25f11f,_0x4a4651,{'get':()=>_0x357847[_0x4a4651],'enumerable':!(_0x3d8e2d=he(_0x357847,_0x4a4651))||_0x3d8e2d['enumerable']});}return _0x25f11f;},ne=(_0x806e83,_0x70843c,_0x15e02d)=>(_0x15e02d=_0x806e83!=null?ue(fe(_0x806e83)):{},pe(_0x70843c||!_0x806e83||!_0x806e83[_0x2cf5cd(0x25e)]?te(_0x15e02d,_0x2cf5cd(0x266),{'value':_0x806e83,'enumerable':!0x0}):_0x15e02d,_0x806e83)),Q=class{constructor(_0x59b92d,_0x2a3a9d,_0x559130,_0x18aff8){var _0x19135f=_0x2cf5cd;this[_0x19135f(0x273)]=_0x59b92d,this[_0x19135f(0x244)]=_0x2a3a9d,this[_0x19135f(0x26d)]=_0x559130,this[_0x19135f(0x2a1)]=_0x18aff8,this[_0x19135f(0x1f6)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x19135f(0x207)]=!0x1,this['_connecting']=!0x1,this[_0x19135f(0x246)]=!!this['global'][_0x19135f(0x26c)],this[_0x19135f(0x28e)]=null,this[_0x19135f(0x296)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_sendErrorMessage']=this[_0x19135f(0x246)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help':_0x19135f(0x210);}async[_0x2cf5cd(0x25d)](){var _0x423475=_0x2cf5cd;if(this['_WebSocketClass'])return this[_0x423475(0x28e)];let _0x28fd87;if(this['_inBrowser'])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x26c)];else{if(this[_0x423475(0x273)][_0x423475(0x2a2)]?.[_0x423475(0x22e)])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x2a2)]?.['_WebSocket'];else try{let _0x4e350b=await import(_0x423475(0x26e));_0x28fd87=(await import((await import(_0x423475(0x280)))[_0x423475(0x242)](_0x4e350b[_0x423475(0x252)](this[_0x423475(0x2a1)],_0x423475(0x245)))[_0x423475(0x225)]()))['default'];}catch{try{_0x28fd87=require(require(_0x423475(0x26e))[_0x423475(0x252)](this[_0x423475(0x2a1)],'ws'));}catch{throw new Error(_0x423475(0x247));}}}return this[_0x423475(0x28e)]=_0x28fd87,_0x28fd87;}[_0x2cf5cd(0x2a0)](){var _0x299e02=_0x2cf5cd;this[_0x299e02(0x232)]||this['_connected']||this['_connectAttemptCount']>=this[_0x299e02(0x2a8)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x299e02(0x232)]=!0x0,this['_connectAttemptCount']++,this[_0x299e02(0x209)]=new Promise((_0x323901,_0xe82100)=>{var _0x1f03e5=_0x299e02;this[_0x1f03e5(0x25d)]()[_0x1f03e5(0x284)](_0x289f22=>{var _0x312bc1=_0x1f03e5;let _0x1a955b=new _0x289f22(_0x312bc1(0x202)+this['host']+':'+this[_0x312bc1(0x26d)]);_0x1a955b[_0x312bc1(0x1f1)]=()=>{var _0x491c98=_0x312bc1;this['_allowedToSend']=!0x1,this[_0x491c98(0x281)](_0x1a955b),this[_0x491c98(0x2c5)](),_0xe82100(new Error(_0x491c98(0x206)));},_0x1a955b[_0x312bc1(0x2b2)]=()=>{var _0x496f4e=_0x312bc1;this[_0x496f4e(0x246)]||_0x1a955b['_socket']&&_0x1a955b[_0x496f4e(0x2b0)]['unref']&&_0x1a955b[_0x496f4e(0x2b0)]['unref'](),_0x323901(_0x1a955b);},_0x1a955b['onclose']=()=>{var _0x4a9cbf=_0x312bc1;this[_0x4a9cbf(0x248)]=!0x0,this['_disposeWebsocket'](_0x1a955b),this[_0x4a9cbf(0x2c5)]();},_0x1a955b[_0x312bc1(0x2b5)]=_0x5eb630=>{var _0x2133bb=_0x312bc1;try{_0x5eb630&&_0x5eb630['data']&&this['_inBrowser']&&JSON[_0x2133bb(0x231)](_0x5eb630[_0x2133bb(0x27a)])[_0x2133bb(0x2af)]==='reload'&&this[_0x2133bb(0x273)][_0x2133bb(0x27e)]['reload']();}catch{}};})['then'](_0x5c8281=>(this[_0x1f03e5(0x207)]=!0x0,this[_0x1f03e5(0x232)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x1f03e5(0x296)]=0x0,_0x5c8281))[_0x1f03e5(0x204)](_0x2e9680=>(this[_0x1f03e5(0x207)]=!0x1,this['_connecting']=!0x1,_0xe82100(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x2e9680&&_0x2e9680[_0x1f03e5(0x1ef)])))));}));}[_0x2cf5cd(0x281)](_0x196a35){var _0x2f6e0d=_0x2cf5cd;this[_0x2f6e0d(0x207)]=!0x1,this[_0x2f6e0d(0x232)]=!0x1;try{_0x196a35[_0x2f6e0d(0x2bb)]=null,_0x196a35[_0x2f6e0d(0x1f1)]=null,_0x196a35['onopen']=null;}catch{}try{_0x196a35[_0x2f6e0d(0x221)]<0x2&&_0x196a35[_0x2f6e0d(0x212)]();}catch{}}[_0x2cf5cd(0x2c5)](){var _0x610869=_0x2cf5cd;clearTimeout(this[_0x610869(0x22a)]),!(this[_0x610869(0x296)]>=this[_0x610869(0x2a8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x5d1aff=_0x610869;this[_0x5d1aff(0x207)]||this[_0x5d1aff(0x232)]||(this[_0x5d1aff(0x2a0)](),this[_0x5d1aff(0x209)]?.[_0x5d1aff(0x204)](()=>this[_0x5d1aff(0x2c5)]()));},0x1f4),this[_0x610869(0x22a)][_0x610869(0x2c4)]&&this['_reconnectTimeout'][_0x610869(0x2c4)]());}async['send'](_0x4da41b){var _0x25d38b=_0x2cf5cd;try{if(!this['_allowedToSend'])return;this[_0x25d38b(0x248)]&&this[_0x25d38b(0x2a0)](),(await this[_0x25d38b(0x209)])[_0x25d38b(0x1f2)](JSON[_0x25d38b(0x29d)](_0x4da41b));}catch(_0x284c46){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x284c46&&_0x284c46[_0x25d38b(0x1ef)])),this['_allowedToSend']=!0x1,this[_0x25d38b(0x2c5)]();}}};function V(_0xb97f7e,_0x19f69c,_0x301db6,_0x28b17b,_0x3028fb){var _0x4feedb=_0x2cf5cd;let _0xab03f1=_0x301db6[_0x4feedb(0x229)](',')[_0x4feedb(0x23f)](_0x2633fc=>{var _0x529807=_0x4feedb;try{_0xb97f7e[_0x529807(0x230)]||((_0x3028fb===_0x529807(0x283)||_0x3028fb===_0x529807(0x249)||_0x3028fb===_0x529807(0x2ac))&&(_0x3028fb+=_0xb97f7e['process']?.[_0x529807(0x2c1)]?.['node']?_0x529807(0x20d):_0x529807(0x237)),_0xb97f7e[_0x529807(0x230)]={'id':+new Date(),'tool':_0x3028fb});let _0xeb9db=new Q(_0xb97f7e,_0x19f69c,_0x2633fc,_0x28b17b);return _0xeb9db[_0x529807(0x1f2)][_0x529807(0x227)](_0xeb9db);}catch(_0x2230bd){return console[_0x529807(0x267)](_0x529807(0x22b),_0x2230bd&&_0x2230bd[_0x529807(0x1ef)]),()=>{};}});return _0x422510=>_0xab03f1[_0x4feedb(0x262)](_0x389f10=>_0x389f10(_0x422510));}function _0x2a98(){var _0x47734e=['disabledLog','_numberRegExp','autoExpandMaxDepth','undefined','unknown','Number','time','ws://','String','catch','RegExp','logger\\x20websocket\\x20error','_connected','isArray','_ws','54739014hZPxbX','1079648rjCDOH','getOwnPropertySymbols','\\x20server','_capIfString','_setNodeLabel','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','_blacklistedProperty','close','_isPrimitiveType','_p_','substr','_keyStrRegExp','error','hostname','concat','_regExpToString','61159','setter','create','_addFunctionsNode','getOwnPropertyDescriptor','_setNodeId','readyState','_Symbol','sort','depth','toString','_quotedRegExp','bind','string','split','_reconnectTimeout','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','nuxt','null','_WebSocket','_hasSymbolPropertyOnItsPath','_console_ninja_session','parse','_connecting','_additionalMetadata','...','_hasMapOnItsPath','allStrLength','\\x20browser','level','_treeNodePropertiesAfterFullValue','_p_name','timeStamp','_p_length','autoExpand','NEGATIVE_INFINITY','map','1525537RhiYyd','sortProps','pathToFileURL','_console_ninja','host','ws/index.js','_inBrowser','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_allowedToConnectOnSend','remix','current','length','1685344258094','test','totalStrLength','_property','Map','console','join','resolveGetters','serialize','HTMLAllCollection',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.129\\\\node_modules",'timeEnd','[object\\x20Set]','now','log','call','capped','getWebSocketClass','__es'+'Module','hits','stack','Boolean','forEach','expId','hrtime','1.0.0','default','warn','number','27PVbVzP','_isArray','_isSet','WebSocket','port','path','Set','valueOf','parent','count','global','constructor','_propertyName','_isMap','toLowerCase','strLength','getter','data','_dateToString','25989iNKKmv','_getOwnPropertyDescriptor','location','isExpressionToEvaluate','url','_disposeWebsocket','_cleanNode','next.js','then','index','_propertyAccessor','node','2365xiNUeo','2338510BlrUQW','unshift','cappedProps','[object\\x20Map]','remix','_WebSocketClass','_setNodeExpressionPath','performance','array','_isNegativeZero','function','[object\\x20Array]','_setNodeExpandableState','_connectAttemptCount','elapsed','_consoleNinjaAllowedToStart','props','positiveInfinity','noFunctions','push','stringify','[object\\x20Date]','root_exp_id','_connectToHostNow','nodeModules','process','_setNodePermissions','_sortProps','reduceLimits','_type','cappedElements','_maxConnectAttemptCount','argumentResolutionError','trace','elements','astro','autoExpandPreviousObjects','defineProperty','method','_socket','type','onopen','_processTreeNodeResult','_objectToString','onmessage','negativeZero','bigint','Symbol','7HexpBI','Buffer','onclose','boolean','symbol','_addLoadNode','358RbwaIx','getOwnPropertyNames','versions','autoExpandLimit','includes','unref','_attemptToReconnectShortly','_isPrimitiveWrapperType','_HTMLAllCollection','match','date','autoExpandPropertyCount','127.0.0.1','value','hasOwnProperty','_addProperty','set','prototype','negativeInfinity','object','5054958GGLzRP','message','9436aEdZNf','onerror','send','_addObjectProperty','name','stackTraceLimit','_allowedToSend','_setNodeQueryPath','expressionsToEvaluate','_getOwnPropertySymbols','_treeNodePropertiesBeforeFullValue'];_0x2a98=function(){return _0x47734e;};return _0x2a98();}function H(_0x45561e){var _0x534322=_0x2cf5cd;let _0x3f152c=function(_0x148806,_0x5ef6f9){return _0x5ef6f9-_0x148806;},_0x50eaf0;if(_0x45561e[_0x534322(0x290)])_0x50eaf0=function(){var _0x376037=_0x534322;return _0x45561e[_0x376037(0x290)][_0x376037(0x259)]();};else{if(_0x45561e[_0x534322(0x2a2)]&&_0x45561e['process'][_0x534322(0x264)])_0x50eaf0=function(){var _0x3938fb=_0x534322;return _0x45561e[_0x3938fb(0x2a2)][_0x3938fb(0x264)]();},_0x3f152c=function(_0x4d6428,_0x24c728){return 0x3e8*(_0x24c728[0x0]-_0x4d6428[0x0])+(_0x24c728[0x1]-_0x4d6428[0x1])/0xf4240;};else try{let {performance:_0x2c50fd}=require('perf_hooks');_0x50eaf0=function(){var _0x39ffd2=_0x534322;return _0x2c50fd[_0x39ffd2(0x259)]();};}catch{_0x50eaf0=function(){return+new Date();};}}return{'elapsed':_0x3f152c,'timeStamp':_0x50eaf0,'now':()=>Date[_0x534322(0x259)]()};}function X(_0x1f6729,_0x5c6190,_0x217af5){var _0x126b42=_0x2cf5cd;if(_0x1f6729['_consoleNinjaAllowedToStart']!==void 0x0)return _0x1f6729[_0x126b42(0x298)];let _0xe76fa6=_0x1f6729[_0x126b42(0x2a2)]?.[_0x126b42(0x2c1)]?.['node'];return _0xe76fa6&&_0x217af5===_0x126b42(0x22c)?_0x1f6729['_consoleNinjaAllowedToStart']=!0x1:_0x1f6729[_0x126b42(0x298)]=_0xe76fa6||!_0x5c6190||_0x1f6729['location']?.[_0x126b42(0x218)]&&_0x5c6190[_0x126b42(0x2c3)](_0x1f6729[_0x126b42(0x27e)][_0x126b42(0x218)]),_0x1f6729[_0x126b42(0x298)];}function _0x40be(_0x15e1bb,_0x1a4e5d){var _0x2a98f1=_0x2a98();return _0x40be=function(_0x40be20,_0x4701b9){_0x40be20=_0x40be20-0x1e3;var _0x3331c5=_0x2a98f1[_0x40be20];return _0x3331c5;},_0x40be(_0x15e1bb,_0x1a4e5d);}((_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548,_0x2b2eb2,_0x1b70b3,_0x41ce87,_0x40492c)=>{var _0xaf924a=_0x2cf5cd;if(_0x49b204[_0xaf924a(0x243)])return _0x49b204[_0xaf924a(0x243)];if(!X(_0x49b204,_0x41ce87,_0x489548))return _0x49b204['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x49b204[_0xaf924a(0x243)];let _0xf0b388={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5b35fa={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x505e5e=H(_0x49b204),_0x254ab2=_0x505e5e[_0xaf924a(0x297)],_0x4a93d3=_0x505e5e[_0xaf924a(0x23b)],_0xe1d997=_0x505e5e[_0xaf924a(0x259)],_0x47a49a={'hits':{},'ts':{}},_0x2cbc42=_0x1a66cf=>{_0x47a49a['ts'][_0x1a66cf]=_0x4a93d3();},_0x40058f=(_0x55f653,_0x438427)=>{let _0x25052b=_0x47a49a['ts'][_0x438427];if(delete _0x47a49a['ts'][_0x438427],_0x25052b){let _0x4bcb71=_0x254ab2(_0x25052b,_0x4a93d3());_0x1a6309(_0x195f4e('time',_0x55f653,_0xe1d997(),_0xe5069f,[_0x4bcb71],_0x438427));}},_0x1cf403=_0x391d70=>_0x34ff71=>{var _0x545190=_0xaf924a;try{_0x2cbc42(_0x34ff71),_0x391d70(_0x34ff71);}finally{_0x49b204[_0x545190(0x251)][_0x545190(0x201)]=_0x391d70;}},_0x162ea0=_0x434010=>_0x2d8916=>{var _0x386e10=_0xaf924a;try{let [_0x4df1d3,_0x22fa1a]=_0x2d8916[_0x386e10(0x229)](':logPointId:');_0x40058f(_0x22fa1a,_0x4df1d3),_0x434010(_0x4df1d3);}finally{_0x49b204['console'][_0x386e10(0x257)]=_0x434010;}};_0x49b204[_0xaf924a(0x243)]={'consoleLog':(_0x467987,_0x342fa0)=>{var _0x37d8e1=_0xaf924a;_0x49b204[_0x37d8e1(0x251)]['log']['name']!==_0x37d8e1(0x1fb)&&_0x1a6309(_0x195f4e(_0x37d8e1(0x25a),_0x467987,_0xe1d997(),_0xe5069f,_0x342fa0));},'consoleTrace':(_0x4f9b55,_0x2c5df8)=>{var _0x409a8a=_0xaf924a;_0x49b204[_0x409a8a(0x251)]['log'][_0x409a8a(0x1f4)]!=='disabledTrace'&&_0x1a6309(_0x195f4e('trace',_0x4f9b55,_0xe1d997(),_0xe5069f,_0x2c5df8));},'consoleTime':()=>{var _0x372b3c=_0xaf924a;_0x49b204[_0x372b3c(0x251)][_0x372b3c(0x201)]=_0x1cf403(_0x49b204[_0x372b3c(0x251)]['time']);},'consoleTimeEnd':()=>{var _0x49bb97=_0xaf924a;_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]=_0x162ea0(_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]);},'autoLog':(_0x108d5f,_0x4cf9ca)=>{var _0x16ba00=_0xaf924a;_0x1a6309(_0x195f4e(_0x16ba00(0x25a),_0x4cf9ca,_0xe1d997(),_0xe5069f,[_0x108d5f]));},'autoTrace':(_0x1e46d6,_0x2c00ce)=>{var _0x54ceaa=_0xaf924a;_0x1a6309(_0x195f4e(_0x54ceaa(0x2aa),_0x2c00ce,_0xe1d997(),_0xe5069f,[_0x1e46d6]));},'autoTime':(_0x296ec5,_0x4d05a6,_0xae7de0)=>{_0x2cbc42(_0xae7de0);},'autoTimeEnd':(_0x4787e8,_0x45534c,_0x282ccd)=>{_0x40058f(_0x45534c,_0x282ccd);}};let _0x1a6309=V(_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548),_0xe5069f=_0x49b204[_0xaf924a(0x230)];class _0x3ea185{constructor(){var _0x8f3991=_0xaf924a;this[_0x8f3991(0x216)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x49b204['undefined'],this[_0x8f3991(0x2c7)]=_0x49b204[_0x8f3991(0x255)],this['_getOwnPropertyDescriptor']=Object[_0x8f3991(0x21f)],this['_getOwnPropertyNames']=Object[_0x8f3991(0x2c0)],this['_Symbol']=_0x49b204[_0x8f3991(0x2b8)],this[_0x8f3991(0x21a)]=RegExp[_0x8f3991(0x1eb)][_0x8f3991(0x225)],this[_0x8f3991(0x27b)]=Date[_0x8f3991(0x1eb)][_0x8f3991(0x225)];}[_0xaf924a(0x254)](_0x1ffbdf,_0x261664,_0x1119b9,_0x220a1b){var _0x35a28c=_0xaf924a,_0x2b5b13=this,_0xb5b34f=_0x1119b9[_0x35a28c(0x23d)];function _0x3e7ce9(_0x18896a,_0x17698b,_0x102b14){var _0x587cf5=_0x35a28c;_0x17698b['type']=_0x587cf5(0x1ff),_0x17698b[_0x587cf5(0x217)]=_0x18896a['message'],_0x1c9374=_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)],_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)]=_0x17698b,_0x2b5b13['_treeNodePropertiesBeforeFullValue'](_0x17698b,_0x102b14);}if(_0x261664&&_0x261664[_0x35a28c(0x2a9)])_0x3e7ce9(_0x261664,_0x1ffbdf,_0x1119b9);else try{_0x1119b9[_0x35a28c(0x238)]++,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x2ad)][_0x35a28c(0x29c)](_0x261664);var _0x4abe4f,_0x4d7716,_0x16f780,_0x4f50fc,_0x4c3fd8=[],_0x2e94bd=[],_0x107b8f,_0x1a262d=this[_0x35a28c(0x2a6)](_0x261664),_0xec7933=_0x1a262d==='array',_0x48c47a=!0x1,_0x55a62b=_0x1a262d===_0x35a28c(0x293),_0x5dd4e0=this[_0x35a28c(0x213)](_0x1a262d),_0x482298=this[_0x35a28c(0x2c6)](_0x1a262d),_0x164aa8=_0x5dd4e0||_0x482298,_0x1739c6={},_0x2d507c=0x0,_0x18b048=!0x1,_0x1c9374,_0xeccd3f=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1119b9[_0x35a28c(0x224)]){if(_0xec7933){if(_0x4d7716=_0x261664[_0x35a28c(0x24b)],_0x4d7716>_0x1119b9[_0x35a28c(0x2ab)]){for(_0x16f780=0x0,_0x4f50fc=_0x1119b9[_0x35a28c(0x2ab)],_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));_0x1ffbdf[_0x35a28c(0x2a7)]=!0x0;}else{for(_0x16f780=0x0,_0x4f50fc=_0x4d7716,_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));}_0x1119b9['autoExpandPropertyCount']+=_0x2e94bd['length'];}if(!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&!_0x5dd4e0&&_0x1a262d!==_0x35a28c(0x203)&&_0x1a262d!==_0x35a28c(0x2ba)&&_0x1a262d!==_0x35a28c(0x2b7)){var _0x2ae62d=_0x220a1b[_0x35a28c(0x299)]||_0x1119b9[_0x35a28c(0x299)];if(this[_0x35a28c(0x26b)](_0x261664)?(_0x4abe4f=0x0,_0x261664['forEach'](function(_0x46649f){var _0x15a7b7=_0x35a28c;if(_0x2d507c++,_0x1119b9[_0x15a7b7(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x15a7b7(0x27f)]&&_0x1119b9['autoExpand']&&_0x1119b9[_0x15a7b7(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;return;}_0x2e94bd[_0x15a7b7(0x29c)](_0x2b5b13[_0x15a7b7(0x1e9)](_0x4c3fd8,_0x261664,'Set',_0x4abe4f++,_0x1119b9,function(_0x5c98b8){return function(){return _0x5c98b8;};}(_0x46649f)));})):this[_0x35a28c(0x276)](_0x261664)&&_0x261664['forEach'](function(_0x8ca25,_0x4c3572){var _0x1bfdfd=_0x35a28c;if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x1bfdfd(0x27f)]&&_0x1119b9[_0x1bfdfd(0x23d)]&&_0x1119b9['autoExpandPropertyCount']>_0x1119b9[_0x1bfdfd(0x2c2)]){_0x18b048=!0x0;return;}var _0x4873de=_0x4c3572['toString']();_0x4873de[_0x1bfdfd(0x24b)]>0x64&&(_0x4873de=_0x4873de['slice'](0x0,0x64)+_0x1bfdfd(0x234)),_0x2e94bd[_0x1bfdfd(0x29c)](_0x2b5b13[_0x1bfdfd(0x1e9)](_0x4c3fd8,_0x261664,_0x1bfdfd(0x250),_0x4873de,_0x1119b9,function(_0x1cdb70){return function(){return _0x1cdb70;};}(_0x8ca25)));}),!_0x48c47a){try{for(_0x107b8f in _0x261664)if(!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)){if(_0x2d507c++,_0x1119b9[_0x35a28c(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9[_0x35a28c(0x2c2)]){_0x18b048=!0x0;break;}_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}catch{}if(_0x1739c6[_0x35a28c(0x23c)]=!0x0,_0x55a62b&&(_0x1739c6[_0x35a28c(0x23a)]=!0x0),!_0x18b048){var _0x155fac=[][_0x35a28c(0x219)](this['_getOwnPropertyNames'](_0x261664))['concat'](this[_0x35a28c(0x1f9)](_0x261664));for(_0x4abe4f=0x0,_0x4d7716=_0x155fac[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)if(_0x107b8f=_0x155fac[_0x4abe4f],!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f['toString']()))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)&&!_0x1739c6[_0x35a28c(0x214)+_0x107b8f[_0x35a28c(0x225)]()]){if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;break;}_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}}}}if(_0x1ffbdf[_0x35a28c(0x2b1)]=_0x1a262d,_0x164aa8?(_0x1ffbdf[_0x35a28c(0x1e7)]=_0x261664[_0x35a28c(0x270)](),this[_0x35a28c(0x20e)](_0x1a262d,_0x1ffbdf,_0x1119b9,_0x220a1b)):_0x1a262d===_0x35a28c(0x1e4)?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x27b)][_0x35a28c(0x25b)](_0x261664):_0x1a262d===_0x35a28c(0x205)?_0x1ffbdf[_0x35a28c(0x1e7)]=this['_regExpToString']['call'](_0x261664):_0x1a262d===_0x35a28c(0x2bd)&&this['_Symbol']?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x222)][_0x35a28c(0x1eb)][_0x35a28c(0x225)][_0x35a28c(0x25b)](_0x261664):!_0x1119b9[_0x35a28c(0x224)]&&!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&(delete _0x1ffbdf[_0x35a28c(0x1e7)],_0x1ffbdf[_0x35a28c(0x25c)]=!0x0),_0x18b048&&(_0x1ffbdf[_0x35a28c(0x28b)]=!0x0),_0x1c9374=_0x1119b9[_0x35a28c(0x287)]['current'],_0x1119b9[_0x35a28c(0x287)][_0x35a28c(0x24a)]=_0x1ffbdf,this[_0x35a28c(0x1fa)](_0x1ffbdf,_0x1119b9),_0x2e94bd[_0x35a28c(0x24b)]){for(_0x4abe4f=0x0,_0x4d7716=_0x2e94bd[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)_0x2e94bd[_0x4abe4f](_0x4abe4f);}_0x4c3fd8[_0x35a28c(0x24b)]&&(_0x1ffbdf['props']=_0x4c3fd8);}catch(_0x5acfee){_0x3e7ce9(_0x5acfee,_0x1ffbdf,_0x1119b9);}return this[_0x35a28c(0x233)](_0x261664,_0x1ffbdf),this[_0x35a28c(0x239)](_0x1ffbdf,_0x1119b9),_0x1119b9['node'][_0x35a28c(0x24a)]=_0x1c9374,_0x1119b9[_0x35a28c(0x238)]--,_0x1119b9['autoExpand']=_0xb5b34f,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9['autoExpandPreviousObjects']['pop'](),_0x1ffbdf;}[_0xaf924a(0x1f9)](_0x26b81e){var _0x33466c=_0xaf924a;return Object[_0x33466c(0x20c)]?Object[_0x33466c(0x20c)](_0x26b81e):[];}[_0xaf924a(0x26b)](_0x3fbc47){var _0x1986bd=_0xaf924a;return!!(_0x3fbc47&&_0x49b204[_0x1986bd(0x26f)]&&this[_0x1986bd(0x2b4)](_0x3fbc47)===_0x1986bd(0x258)&&_0x3fbc47[_0x1986bd(0x262)]);}[_0xaf924a(0x211)](_0x1ab315,_0x21ebf2,_0x470340){var _0x48210a=_0xaf924a;return _0x470340[_0x48210a(0x29b)]?typeof _0x1ab315[_0x21ebf2]==_0x48210a(0x293):!0x1;}['_type'](_0x5dcb54){var _0x3d62dd=_0xaf924a,_0x2fc396='';return _0x2fc396=typeof _0x5dcb54,_0x2fc396==='object'?this['_objectToString'](_0x5dcb54)===_0x3d62dd(0x294)?_0x2fc396=_0x3d62dd(0x291):this[_0x3d62dd(0x2b4)](_0x5dcb54)===_0x3d62dd(0x29e)?_0x2fc396=_0x3d62dd(0x1e4):_0x5dcb54===null?_0x2fc396='null':_0x5dcb54[_0x3d62dd(0x274)]&&(_0x2fc396=_0x5dcb54['constructor'][_0x3d62dd(0x1f4)]||_0x2fc396):_0x2fc396===_0x3d62dd(0x1fe)&&this['_HTMLAllCollection']&&_0x5dcb54 instanceof this[_0x3d62dd(0x2c7)]&&(_0x2fc396=_0x3d62dd(0x255)),_0x2fc396;}['_objectToString'](_0x141c18){var _0x3ac2dc=_0xaf924a;return Object['prototype'][_0x3ac2dc(0x225)][_0x3ac2dc(0x25b)](_0x141c18);}[_0xaf924a(0x213)](_0x5a457d){var _0x597d85=_0xaf924a;return _0x5a457d===_0x597d85(0x2bc)||_0x5a457d===_0x597d85(0x228)||_0x5a457d===_0x597d85(0x268);}[_0xaf924a(0x2c6)](_0x5898cf){var _0x3157c0=_0xaf924a;return _0x5898cf===_0x3157c0(0x261)||_0x5898cf===_0x3157c0(0x203)||_0x5898cf==='Number';}['_addProperty'](_0x5245f8,_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048){var _0x4f3373=this;return function(_0x6f86d0){var _0x55b709=_0x40be,_0x497a8c=_0x34b2c2[_0x55b709(0x287)]['current'],_0x401bcb=_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)],_0x4e8dba=_0x34b2c2['node'][_0x55b709(0x271)];_0x34b2c2[_0x55b709(0x287)]['parent']=_0x497a8c,_0x34b2c2[_0x55b709(0x287)]['index']=typeof _0x2ef032==_0x55b709(0x268)?_0x2ef032:_0x6f86d0,_0x5245f8['push'](_0x4f3373[_0x55b709(0x24f)](_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048)),_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x271)]=_0x4e8dba,_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)]=_0x401bcb;};}[_0xaf924a(0x1f3)](_0x1d7c25,_0x5b8b24,_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3){var _0xd780f0=_0xaf924a,_0x8addf0=this;return _0x5b8b24[_0xd780f0(0x214)+_0x1e6ee4[_0xd780f0(0x225)]()]=!0x0,function(_0x239d6b){var _0x1443cd=_0xd780f0,_0x4df5e1=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x24a)],_0x540e10=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)],_0x2915bc=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)];_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)]=_0x4df5e1,_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)]=_0x239d6b,_0x1d7c25[_0x1443cd(0x29c)](_0x8addf0[_0x1443cd(0x24f)](_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3)),_0x3b78cf['node'][_0x1443cd(0x271)]=_0x2915bc,_0x3b78cf[_0x1443cd(0x287)]['index']=_0x540e10;};}[_0xaf924a(0x24f)](_0x2dc156,_0x84e3c9,_0x3d7e0f,_0x50afce,_0x126c84){var _0x8fb306=_0xaf924a,_0x57d1bb=this;_0x126c84||(_0x126c84=function(_0x277ab9,_0x4edfaa){return _0x277ab9[_0x4edfaa];});var _0x4d7cfe=_0x3d7e0f[_0x8fb306(0x225)](),_0x338741=_0x50afce[_0x8fb306(0x1f8)]||{},_0x135349=_0x50afce[_0x8fb306(0x224)],_0x3fc65a=_0x50afce[_0x8fb306(0x27f)];try{var _0x141963=this['_isMap'](_0x2dc156),_0x31060d=_0x4d7cfe;_0x141963&&_0x31060d[0x0]==='\\x27'&&(_0x31060d=_0x31060d['substr'](0x1,_0x31060d['length']-0x2));var _0x2b079a=_0x50afce[_0x8fb306(0x1f8)]=_0x338741['_p_'+_0x31060d];_0x2b079a&&(_0x50afce[_0x8fb306(0x224)]=_0x50afce['depth']+0x1),_0x50afce[_0x8fb306(0x27f)]=!!_0x2b079a;var _0x15c8b0=typeof _0x3d7e0f=='symbol',_0x24ddbc={'name':_0x15c8b0||_0x141963?_0x4d7cfe:this[_0x8fb306(0x275)](_0x4d7cfe)};if(_0x15c8b0&&(_0x24ddbc[_0x8fb306(0x2bd)]=!0x0),!(_0x84e3c9===_0x8fb306(0x291)||_0x84e3c9==='Error')){var _0x431848=this[_0x8fb306(0x27d)](_0x2dc156,_0x3d7e0f);if(_0x431848&&(_0x431848[_0x8fb306(0x1ea)]&&(_0x24ddbc[_0x8fb306(0x21c)]=!0x0),_0x431848['get']&&!_0x2b079a&&!_0x50afce[_0x8fb306(0x253)]))return _0x24ddbc[_0x8fb306(0x279)]=!0x0,this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x2b3202;try{_0x2b3202=_0x126c84(_0x2dc156,_0x3d7e0f);}catch(_0x14b48e){return _0x24ddbc={'name':_0x4d7cfe,'type':'unknown','error':_0x14b48e[_0x8fb306(0x1ef)]},this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x41dc6b=this['_type'](_0x2b3202),_0x40b8f0=this[_0x8fb306(0x213)](_0x41dc6b);if(_0x24ddbc[_0x8fb306(0x2b1)]=_0x41dc6b,_0x40b8f0)this['_processTreeNodeResult'](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x559389=_0x8fb306;_0x24ddbc['value']=_0x2b3202[_0x559389(0x270)](),!_0x2b079a&&_0x57d1bb['_capIfString'](_0x41dc6b,_0x24ddbc,_0x50afce,{});});else{var _0x57f4f8=_0x50afce[_0x8fb306(0x23d)]&&_0x50afce[_0x8fb306(0x238)]<_0x50afce['autoExpandMaxDepth']&&_0x50afce[_0x8fb306(0x2ad)]['indexOf'](_0x2b3202)<0x0&&_0x41dc6b!==_0x8fb306(0x293)&&_0x50afce[_0x8fb306(0x1e5)]<_0x50afce[_0x8fb306(0x2c2)];_0x57f4f8||_0x50afce[_0x8fb306(0x238)]<_0x135349||_0x2b079a?(this[_0x8fb306(0x254)](_0x24ddbc,_0x2b3202,_0x50afce,_0x2b079a||{}),this[_0x8fb306(0x233)](_0x2b3202,_0x24ddbc)):this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x267210=_0x8fb306;_0x41dc6b===_0x267210(0x22d)||_0x41dc6b===_0x267210(0x1fe)||(delete _0x24ddbc[_0x267210(0x1e7)],_0x24ddbc[_0x267210(0x25c)]=!0x0);});}return _0x24ddbc;}finally{_0x50afce['expressionsToEvaluate']=_0x338741,_0x50afce[_0x8fb306(0x224)]=_0x135349,_0x50afce[_0x8fb306(0x27f)]=_0x3fc65a;}}[_0xaf924a(0x20e)](_0x4b62bd,_0xc40a6,_0x76d4db,_0x1bb854){var _0x2b20d2=_0xaf924a,_0x48134b=_0x1bb854['strLength']||_0x76d4db[_0x2b20d2(0x278)];if((_0x4b62bd===_0x2b20d2(0x228)||_0x4b62bd==='String')&&_0xc40a6[_0x2b20d2(0x1e7)]){let _0x489af6=_0xc40a6['value'][_0x2b20d2(0x24b)];_0x76d4db['allStrLength']+=_0x489af6,_0x76d4db[_0x2b20d2(0x236)]>_0x76d4db[_0x2b20d2(0x24e)]?(_0xc40a6[_0x2b20d2(0x25c)]='',delete _0xc40a6['value']):_0x489af6>_0x48134b&&(_0xc40a6['capped']=_0xc40a6[_0x2b20d2(0x1e7)][_0x2b20d2(0x215)](0x0,_0x48134b),delete _0xc40a6[_0x2b20d2(0x1e7)]);}}['_isMap'](_0x137793){var _0x274dce=_0xaf924a;return!!(_0x137793&&_0x49b204['Map']&&this[_0x274dce(0x2b4)](_0x137793)===_0x274dce(0x28c)&&_0x137793[_0x274dce(0x262)]);}[_0xaf924a(0x275)](_0x3b398f){var _0x3414c6=_0xaf924a;if(_0x3b398f[_0x3414c6(0x1e3)](/^\\d+$/))return _0x3b398f;var _0x3a961e;try{_0x3a961e=JSON['stringify'](''+_0x3b398f);}catch{_0x3a961e='\\x22'+this[_0x3414c6(0x2b4)](_0x3b398f)+'\\x22';}return _0x3a961e['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x3a961e=_0x3a961e[_0x3414c6(0x215)](0x1,_0x3a961e['length']-0x2):_0x3a961e=_0x3a961e['replace'](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x3a961e;}['_processTreeNodeResult'](_0x494cf3,_0x3a7130,_0x2965bb,_0x4ed090){var _0x1fc133=_0xaf924a;this[_0x1fc133(0x1fa)](_0x494cf3,_0x3a7130),_0x4ed090&&_0x4ed090(),this[_0x1fc133(0x233)](_0x2965bb,_0x494cf3),this[_0x1fc133(0x239)](_0x494cf3,_0x3a7130);}[_0xaf924a(0x1fa)](_0x8a70e8,_0x172dc9){var _0x5bfd95=_0xaf924a;this['_setNodeId'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x1f7)](_0x8a70e8,_0x172dc9),this['_setNodeExpressionPath'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x2a3)](_0x8a70e8,_0x172dc9);}[_0xaf924a(0x220)](_0x1021a5,_0x494447){}['_setNodeQueryPath'](_0x20ad16,_0x5f3886){}[_0xaf924a(0x20f)](_0x13a7a7,_0x54f993){}['_isUndefined'](_0x310d6f){return _0x310d6f===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x43c671,_0x48f11a){var _0x321c60=_0xaf924a;this[_0x321c60(0x20f)](_0x43c671,_0x48f11a),this['_setNodeExpandableState'](_0x43c671),_0x48f11a[_0x321c60(0x241)]&&this[_0x321c60(0x2a4)](_0x43c671),this[_0x321c60(0x21e)](_0x43c671,_0x48f11a),this['_addLoadNode'](_0x43c671,_0x48f11a),this[_0x321c60(0x282)](_0x43c671);}[_0xaf924a(0x233)](_0x226191,_0x58f6f1){var _0x43a02f=_0xaf924a;try{_0x226191&&typeof _0x226191[_0x43a02f(0x24b)]==_0x43a02f(0x268)&&(_0x58f6f1['length']=_0x226191[_0x43a02f(0x24b)]);}catch{}if(_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x268)||_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x200)){if(isNaN(_0x58f6f1[_0x43a02f(0x1e7)]))_0x58f6f1['nan']=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];else switch(_0x58f6f1[_0x43a02f(0x1e7)]){case Number['POSITIVE_INFINITY']:_0x58f6f1[_0x43a02f(0x29a)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case Number[_0x43a02f(0x23e)]:_0x58f6f1[_0x43a02f(0x1ec)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case 0x0:this[_0x43a02f(0x292)](_0x58f6f1[_0x43a02f(0x1e7)])&&(_0x58f6f1[_0x43a02f(0x2b6)]=!0x0);break;}}else _0x58f6f1['type']==='function'&&typeof _0x226191[_0x43a02f(0x1f4)]==_0x43a02f(0x228)&&_0x226191[_0x43a02f(0x1f4)]&&_0x58f6f1[_0x43a02f(0x1f4)]&&_0x226191['name']!==_0x58f6f1[_0x43a02f(0x1f4)]&&(_0x58f6f1['funcName']=_0x226191[_0x43a02f(0x1f4)]);}[_0xaf924a(0x292)](_0x99e5d7){var _0x5af86c=_0xaf924a;return 0x1/_0x99e5d7===Number[_0x5af86c(0x23e)];}[_0xaf924a(0x2a4)](_0x4da140){var _0x59d583=_0xaf924a;!_0x4da140[_0x59d583(0x299)]||!_0x4da140['props'][_0x59d583(0x24b)]||_0x4da140['type']===_0x59d583(0x291)||_0x4da140[_0x59d583(0x2b1)]===_0x59d583(0x250)||_0x4da140['type']===_0x59d583(0x26f)||_0x4da140[_0x59d583(0x299)][_0x59d583(0x223)](function(_0x2bca0f,_0x6aada0){var _0x433cc9=_0x59d583,_0x220ffd=_0x2bca0f[_0x433cc9(0x1f4)][_0x433cc9(0x277)](),_0x52a25d=_0x6aada0[_0x433cc9(0x1f4)][_0x433cc9(0x277)]();return _0x220ffd<_0x52a25d?-0x1:_0x220ffd>_0x52a25d?0x1:0x0;});}[_0xaf924a(0x21e)](_0x48dce4,_0x48f4c6){var _0x2678d7=_0xaf924a;if(!(_0x48f4c6['noFunctions']||!_0x48dce4[_0x2678d7(0x299)]||!_0x48dce4[_0x2678d7(0x299)]['length'])){for(var _0x279f85=[],_0x27fbf8=[],_0x58bb24=0x0,_0x1abc8f=_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x24b)];_0x58bb24<_0x1abc8f;_0x58bb24++){var _0x3caeb2=_0x48dce4['props'][_0x58bb24];_0x3caeb2[_0x2678d7(0x2b1)]===_0x2678d7(0x293)?_0x279f85[_0x2678d7(0x29c)](_0x3caeb2):_0x27fbf8[_0x2678d7(0x29c)](_0x3caeb2);}if(!(!_0x27fbf8[_0x2678d7(0x24b)]||_0x279f85[_0x2678d7(0x24b)]<=0x1)){_0x48dce4[_0x2678d7(0x299)]=_0x27fbf8;var _0xe3d941={'functionsNode':!0x0,'props':_0x279f85};this[_0x2678d7(0x220)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x20f)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x295)](_0xe3d941),this['_setNodePermissions'](_0xe3d941,_0x48f4c6),_0xe3d941['id']+='\\x20f',_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x28a)](_0xe3d941);}}}[_0xaf924a(0x2be)](_0x48eb38,_0x20f75c){}[_0xaf924a(0x295)](_0x129122){}[_0xaf924a(0x26a)](_0x1f6bb8){var _0x2820a2=_0xaf924a;return Array[_0x2820a2(0x208)](_0x1f6bb8)||typeof _0x1f6bb8==_0x2820a2(0x1ed)&&this[_0x2820a2(0x2b4)](_0x1f6bb8)===_0x2820a2(0x294);}[_0xaf924a(0x2a3)](_0x1ea391,_0x8f50b2){}['_cleanNode'](_0x52cd26){var _0x498c91=_0xaf924a;delete _0x52cd26[_0x498c91(0x22f)],delete _0x52cd26['_hasSetOnItsPath'],delete _0x52cd26[_0x498c91(0x235)];}[_0xaf924a(0x28f)](_0x5c8a9c,_0x31124f){}[_0xaf924a(0x286)](_0x2f7a58){var _0x397561=_0xaf924a;return _0x2f7a58?_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x1fc)])?'['+_0x2f7a58+']':_0x2f7a58[_0x397561(0x1e3)](this['_keyStrRegExp'])?'.'+_0x2f7a58:_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x226)])?'['+_0x2f7a58+']':'[\\x27'+_0x2f7a58+'\\x27]':'';}}let _0x3fbb82=new _0x3ea185();function _0x195f4e(_0x20dbd1,_0x567217,_0x7b3f99,_0x256338,_0x381038,_0xb947b4){var _0x5299ea=_0xaf924a;let _0xc570be,_0x171851;try{_0x171851=_0x4a93d3(),_0xc570be=_0x47a49a[_0x567217],!_0xc570be||_0x171851-_0xc570be['ts']>0x1f4&&_0xc570be[_0x5299ea(0x272)]&&_0xc570be['time']/_0xc570be[_0x5299ea(0x272)]<0x64?(_0x47a49a[_0x567217]=_0xc570be={'count':0x0,'time':0x0,'ts':_0x171851},_0x47a49a[_0x5299ea(0x25f)]={}):_0x171851-_0x47a49a[_0x5299ea(0x25f)]['ts']>0x32&&_0x47a49a['hits']['count']&&_0x47a49a[_0x5299ea(0x25f)]['time']/_0x47a49a['hits'][_0x5299ea(0x272)]<0x64&&(_0x47a49a[_0x5299ea(0x25f)]={});let _0x4ea285=[],_0x56b786=_0xc570be['reduceLimits']||_0x47a49a['hits'][_0x5299ea(0x2a5)]?_0x5b35fa:_0xf0b388,_0x3563e3=_0x51e7d1=>{var _0x2491a0=_0x5299ea;let _0x26ab25={};return _0x26ab25[_0x2491a0(0x299)]=_0x51e7d1[_0x2491a0(0x299)],_0x26ab25['elements']=_0x51e7d1['elements'],_0x26ab25['strLength']=_0x51e7d1['strLength'],_0x26ab25[_0x2491a0(0x24e)]=_0x51e7d1[_0x2491a0(0x24e)],_0x26ab25[_0x2491a0(0x2c2)]=_0x51e7d1[_0x2491a0(0x2c2)],_0x26ab25['autoExpandMaxDepth']=_0x51e7d1[_0x2491a0(0x1fd)],_0x26ab25[_0x2491a0(0x241)]=!0x1,_0x26ab25[_0x2491a0(0x29b)]=!_0x40492c,_0x26ab25[_0x2491a0(0x224)]=0x1,_0x26ab25[_0x2491a0(0x238)]=0x0,_0x26ab25[_0x2491a0(0x263)]=_0x2491a0(0x29f),_0x26ab25['rootExpression']='root_exp',_0x26ab25['autoExpand']=!0x0,_0x26ab25[_0x2491a0(0x2ad)]=[],_0x26ab25[_0x2491a0(0x1e5)]=0x0,_0x26ab25[_0x2491a0(0x253)]=!0x0,_0x26ab25['allStrLength']=0x0,_0x26ab25[_0x2491a0(0x287)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x26ab25;};for(var _0x35907a=0x0;_0x35907a<_0x381038[_0x5299ea(0x24b)];_0x35907a++)_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82['serialize']({'timeNode':_0x20dbd1===_0x5299ea(0x201)||void 0x0},_0x381038[_0x35907a],_0x3563e3(_0x56b786),{}));if(_0x20dbd1===_0x5299ea(0x2aa)){let _0xecc6de=Error[_0x5299ea(0x1f5)];try{Error[_0x5299ea(0x1f5)]=0x1/0x0,_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82[_0x5299ea(0x254)]({'stackNode':!0x0},new Error()[_0x5299ea(0x260)],_0x3563e3(_0x56b786),{'strLength':0x1/0x0}));}finally{Error[_0x5299ea(0x1f5)]=_0xecc6de;}}return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':_0x4ea285,'id':_0x567217,'context':_0xb947b4}]};}catch(_0xeea157){return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':[{'type':_0x5299ea(0x1ff),'error':_0xeea157&&_0xeea157[_0x5299ea(0x1ef)]}],'id':_0x567217,'context':_0xb947b4}]};}finally{try{if(_0xc570be&&_0x171851){let _0x5613c6=_0x4a93d3();_0xc570be[_0x5299ea(0x272)]++,_0xc570be['time']+=_0x254ab2(_0x171851,_0x5613c6),_0xc570be['ts']=_0x5613c6,_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]++,_0x47a49a['hits']['time']+=_0x254ab2(_0x171851,_0x5613c6),_0x47a49a[_0x5299ea(0x25f)]['ts']=_0x5613c6,(_0xc570be['count']>0x32||_0xc570be[_0x5299ea(0x201)]>0x64)&&(_0xc570be[_0x5299ea(0x2a5)]=!0x0),(_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]>0x3e8||_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x201)]>0x12c)&&(_0x47a49a['hits'][_0x5299ea(0x2a5)]=!0x0);}}catch{}}}return _0x49b204[_0xaf924a(0x243)];})(globalThis,_0x2cf5cd(0x1e6),_0x2cf5cd(0x21b),_0x2cf5cd(0x256),_0x2cf5cd(0x28d),_0x2cf5cd(0x265),_0x2cf5cd(0x24c),["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.7"],'');`
      )
    );
  } catch {}
}
function oo_oo7(i, ...v) {
  try {
    oo_cm7().consoleLog(i, v);
  } catch {}
  return v;
}

// app/routes/auth_.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  action: () => action6,
  loader: () => loader6,
});
var import_server_runtime2 = require('@remix-run/server-runtime');
var loader6 = async ({ request }) => {
    var _a;
    let session = await getSession(request.headers.get('Cookie')),
      url = new URL(request.url),
      sso = url.searchParams.get('sso'),
      sig = url.searchParams.get('sig');
    if (sso && sig) {
      let payload = atob(sso),
        decoded = unescape(payload),
        params = new URLSearchParams(decoded);
      if (!params.get('nonce')) throw new Error('lopenling server login problem');
      try {
        let email = params.get('email'),
          admin = params.get('admin'),
          name = params.get('name'),
          username = params.get('username'),
          avatarUrl = params.get('avatar_url'),
          external_id = params.get('external_id');
        if (avatarUrl === null) {
          let url2 = process.env.DISCOURSE_SITE + `/u/${username}.json`,
            res = await (await fetch(url2)).json();
          avatarUrl =
            'https://lopenling.org' +
            ((_a = res == null ? void 0 : res.user) == null ? void 0 : _a.avatar_template.replace('{size}', '30'));
        }
        if (!email || !name || !username) throw new Error('discourse SSO returned error URL');
        let userData = null,
          id,
          user = await isUserPresent(username);
        user
          ? (id = user.id)
          : ((userData = await createUserInDB(username, name, email, admin === 'true', avatarUrl)),
            (id = userData == null ? void 0 : userData.id)),
          session.set('user', {
            id,
            email,
            admin,
            name,
            username,
            avatarUrl,
            external_id,
          });
      } catch (e) {
        session.flash('error', {
          error: e,
        });
      }
    }
    let redirectUrl = session.data['success-redirect'] ? session.data['success-redirect'].redirectTo : '/';
    return (0, import_server_runtime2.redirect)(redirectUrl, {
      headers: {
        'set-cookie': await commitSession(session, { sameSite: 'lax' }),
      },
    });
  },
  action6 = async ({ request, context }) => {
    let user = await getUserSession(request),
      body = await request.formData(),
      { redirectTo, _action, ...values } = Object.fromEntries(body);
    if (!redirectTo) throw new Error('no redirect in form');
    if (((redirectTo = redirectTo), _action === 'logout'))
      return (0, import_server_runtime2.redirect)(redirectTo, {
        headers: {
          'set-cookie': await destroyUserSession(request),
        },
      });
    if (_action === 'login') {
      if (!user) return await login(request, (session2) => session2, redirectTo);
      let session = await getSession(request.headers.get('Cookie'));
      return (
        session.set('user', { ...user }),
        (0, import_server_runtime2.redirect)(redirectTo, {
          headers: {
            'set-cookie': await commitSession(session, { sameSite: 'lax' }),
          },
        })
      );
    }
    return null;
  };

// app/routes/text.upload.tsx
var text_upload_exports = {};
__export(text_upload_exports, {
  action: () => action7,
  default: () => UploadText,
  loader: () => loader7,
});
var import_server_runtime3 = require('@remix-run/server-runtime'),
  import_react22 = require('@remix-run/react'),
  import_react23 = require('react');

// app/model/text.ts
async function findAllText(id = !0, name = !0, content = !1) {
  try {
    return await db.text.findMany({
      select: {
        id,
        name,
        content,
        userId: !0,
        author: !0,
      },
    });
  } catch (e) {
    throw new Error('fetching text error' + e.message);
  }
}
async function searchTextWithName(search_term = '') {
  try {
    let textList = await db.text.findMany();
    return fullSearch(textList, search_term);
  } catch (e) {
    throw new Error('error finding text with name' + e.message);
  }
}
async function findTextByTextId(id, content = !1) {
  try {
    let text = await db.text.findUnique({
      where: {
        id,
      },
      select: {
        content,
        id: !0,
        name: !0,
        userId: !0,
        author: !0,
      },
    });
    if (text === null) throw new Error('text not available');
    return text;
  } catch (e) {
    throw new Error('cannot find text with error ' + e.message);
  }
}
async function createText(name, content, id) {
  try {
    return await db.text.create({
      data: {
        name,
        content,
        userId: id,
      },
    });
  } catch (e) {
    throw new Error('create text error' + e.message);
  }
}
async function deleteText(id) {
  try {
    return db.text.delete({
      where: {
        id: parseInt(id),
      },
    });
  } catch (e) {
    throw new Error('delete text error' + e.message);
  }
}
async function updateText(id, content) {
  try {
    return db.text.update({
      data: {
        content,
      },
      where: {
        id,
      },
    });
  } catch (e) {
    throw new Error('update text error' + e.message);
  }
}

// app/routes/text.upload.tsx
var import_react24 = require('react'),
  import_react_drag_drop_files = require('react-drag-drop-files'),
  import_flowbite_react5 = require('flowbite-react');

// app/component/Layout/Header.tsx
var import_react20 = require('@remix-run/react'),
  import_flowbite_react4 = require('flowbite-react');

// app/assets/logo.png
var logo_default = '/build/_assets/logo-M44S4BEM.png';

// app/component/Layout/Header.tsx
var import_react_littera3 = require('@assembless/react-littera'),
  import_react21 = require('react');
var import_recoil8 = require('recoil');

// app/features/Editor/index.jsx
var import_EditorContainer = __toESM(require_EditorContainer()),
  import_SearchString = __toESM(require_SearchString());

// app/component/Layout/Header.tsx
var import_react_detect_click_outside = require('react-detect-click-outside');
var import_jsx_runtime17 = require('react/jsx-runtime'),
  Logo = () =>
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('img', {
      src: 'https://lopenling.org/uploads/default/original/1X/0ac3db8e589f085c53c5ff8f36c17722888658ad.png',
      alt: 'logo',
      className: 'block object-contain max-h-[37px] ',
    }),
  LogoWithTextName = ({ textName }) => (
    textName.length > 20 && isSmallScreen && (textName = textName.slice(0, 25) + '...'),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)('div', {
      className: 'flex items-center gap-1',
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_react20.Link, {
          to: '/',
          children: [
            ' ',
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('img', {
              src: logo_default,
              alt: 'logo',
              className: 'block object-contain',
              style: { maxHeight: '37px' },
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('h1', {
          onClick: () => {
            let editorElement = document.getElementById('textEditorContainer');
            editorElement == null ||
              editorElement.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
          },
          style: { top: containsTIbetanWord_default(textName) ? -10 : 0 },
          className: 'text-3xl ml-2 relative  font-bold ',
          children: textName,
        }),
      ],
    })
  );
function Header({ editor }) {
  var _a, _b, _c;
  let loginFetcher = (0, import_react20.useFetcher)(),
    themeFetcher = (0, import_react20.useFetcher)(),
    translation = uselitteraTranlation(),
    redirectTo = (0, import_react20.useLocation)().pathname,
    [TextNameOnHeader, setTextNameOnHeader] = (0, import_react21.useState)(!1),
    { name: textName } = (0, import_recoil8.useRecoilValue)(textInfo),
    { user } = (0, import_react20.useOutletContext)(),
    changeTheme = () => {
      var _a2;
      themeFetcher.submit(
        {
          theme:
            ((_a2 = user == null ? void 0 : user.preference) == null ? void 0 : _a2.theme) !== 'dark'
              ? 'dark'
              : 'light',
        },
        {
          action: '/api/user/preference/theme',
          method: 'POST',
        }
      );
    };
  (0, import_react21.useEffect)(() => {
    let timeout,
      editorElement = document.getElementById('textEditorContainer'),
      handleScroll = () => {
        timeout && clearTimeout(timeout),
          (timeout = setTimeout(() => {
            let shouldShowTextName =
              (editorElement == null ? void 0 : editorElement.scrollTop) > 10 && redirectTo.includes('text');
            setTextNameOnHeader(shouldShowTextName);
          }, 10));
      };
    return (
      editorElement == null || editorElement.addEventListener('scroll', handleScroll),
      () => (editorElement == null ? void 0 : editorElement.addEventListener('scroll', handleScroll))
    );
  }, [redirectTo, textName]);
  let darkMode = ((_a = user == null ? void 0 : user.preference) == null ? void 0 : _a.theme) === 'dark',
    [showUserMenu, setShowUserMenu] = (0, import_react21.useState)(!1),
    [showHeaderMenu, setShowHeaderMenu] = (0, import_react21.useState)(!1),
    ref = (0, import_react_detect_click_outside.useDetectClickOutside)({
      onTriggered: () => setShowUserMenu(!1),
    }),
    headermenuref = (0, import_react_detect_click_outside.useDetectClickOutside)({
      onTriggered: () => setShowHeaderMenu(!1),
    });
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)('nav', {
    className: 'header fixed top-0 z-50 w-full bg-white border-gray-200 dark:bg-gray-900 shadow-header ',
    style: {
      height: showHeaderMenu ? 'min-content' : 60,
      fontFamily: 'serif',
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)('div', {
        className: 'max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2',
        children: [
          TextNameOnHeader
            ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(LogoWithTextName, { textName })
            : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react20.NavLink, {
                to: '/',
                prefetch: 'intent',
                className: 'flex items-center w-auto',
                children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Logo, {}),
              }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)('button', {
            onClick: () => setShowHeaderMenu((p) => !p),
            type: 'button',
            className:
              'inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
            'aria-expanded': 'false',
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('span', {
                className: 'sr-only',
                children: 'Open main menu',
              }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('svg', {
                className: 'w-6 h-6',
                'aria-hidden': 'true',
                fill: 'currentColor',
                viewBox: '0 0 20 20',
                xmlns: 'http://www.w3.org/2000/svg',
                children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('path', {
                  fillRule: 'evenodd',
                  d: 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
                  clipRule: 'evenodd',
                }),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('div', {
            ref: headermenuref,
            className: `${
              !showHeaderMenu && 'hidden md:flex'
            }  items-center justify-center flex-col md:flex-row md:justify-end gap-2 md:order-2 w-full md:w-auto`,
            children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)('div', {
              className: 'w-full flex items-center justify-between pt-3 md:p-0',
              children: [
                editor && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_SearchString.default, { editor }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Translation, {}),
                user
                  ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)('button', {
                          type: 'button',
                          className:
                            'flex  text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600',
                          id: 'user-menu-button',
                          onClick: () => setShowUserMenu((prev) => !prev),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('span', {
                              className: 'sr-only',
                              children: 'Open user menu',
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_flowbite_react4.Avatar, {
                              alt: user.name,
                              img: user.avatarUrl,
                              rounded: !0,
                              size: 'sm',
                              title: user == null ? void 0 : user.name,
                            }),
                          ],
                        }),
                        showUserMenu &&
                          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)('div', {
                            ref,
                            style: { top: 50, right: 50 },
                            className:
                              'z-50 absolute my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600',
                            id: 'user-dropdown-bittun',
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)('div', {
                                className: 'px-4 py-3',
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('span', {
                                    className: 'block text-sm text-gray-900 dark:text-white',
                                    children: user.name,
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('span', {
                                    className: 'block text-sm  text-gray-500 truncate dark:text-gray-400',
                                    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('a', {
                                      target: '_self',
                                      href: `https://lopenling.org/u/${user == null ? void 0 : user.username}/summary`,
                                      className: 'block truncate text-sm font-medium',
                                      children: user == null ? void 0 : user.email,
                                    }),
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)('div', {
                                className: ' flex flex-col justify-center',
                                'aria-labelledby': 'user-menu-button ',
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_react20.NavLink, {
                                    preventScrollReset: !0,
                                    to: '/text/upload',
                                    prefetch: 'render',
                                    className:
                                      'flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white',
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('svg', {
                                        width: '20',
                                        height: '20',
                                        viewBox: '0 0 24 24',
                                        fill: 'none',
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('path', {
                                          fillRule: 'evenodd',
                                          clipRule: 'evenodd',
                                          d: 'M11.4697 2.46967C11.7626 2.17678 12.2374 2.17678 12.5303 2.46967L17.0303 6.96967C17.3232 7.26256 17.3232 7.73744 17.0303 8.03033C16.7374 8.32322 16.2626 8.32322 15.9697 8.03033L12.75 4.81066L12.75 16.5C12.75 16.9142 12.4142 17.25 12 17.25C11.5858 17.25 11.25 16.9142 11.25 16.5L11.25 4.81066L8.03033 8.03033C7.73744 8.32322 7.26256 8.32322 6.96967 8.03033C6.67678 7.73744 6.67678 7.26256 6.96967 6.96967L11.4697 2.46967ZM3 15.75C3.41421 15.75 3.75 16.0858 3.75 16.5V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H18.75C19.5784 20.25 20.25 19.5784 20.25 18.75V16.5C20.25 16.0858 20.5858 15.75 21 15.75C21.4142 15.75 21.75 16.0858 21.75 16.5V18.75C21.75 20.4069 20.4069 21.75 18.75 21.75H5.25C3.59315 21.75 2.25 20.4069 2.25 18.75V16.5C2.25 16.0858 2.58579 15.75 3 15.75Z',
                                          fill: darkMode ? 'white' : '#111928',
                                          stroke: '#111928',
                                          strokeWidth: '0.5',
                                          strokeLinecap: 'round',
                                          strokeLinejoin: 'round',
                                        }),
                                      }),
                                      'Upload text',
                                    ],
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('div', {
                                    onClick: changeTheme,
                                    className:
                                      ' cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white',
                                    children: darkMode
                                      ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)('div', {
                                          className: 'flex gap-2 ',
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('svg', {
                                              xmlns: 'http://www.w3.org/2000/svg',
                                              viewBox: '0 0 20 20',
                                              fill: 'currentColor',
                                              'aria-hidden': 'true',
                                              className: `${
                                                ((_b = themeFetcher.formData) == null ? void 0 : _b.get('theme')) &&
                                                'animate-spin'
                                              } w-5 h-5`,
                                              children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('path', {
                                                fillRule: 'evenodd',
                                                d: 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z',
                                                clipRule: 'evenodd',
                                              }),
                                            }),
                                            'Light mode',
                                          ],
                                        })
                                      : /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)('div', {
                                          className: 'flex gap-2',
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('svg', {
                                              xmlns: 'http://www.w3.org/2000/svg',
                                              viewBox: '0 0 20 20',
                                              fill: 'currentColor',
                                              'aria-hidden': 'true',
                                              className: `${
                                                ((_c = themeFetcher.formData) == null ? void 0 : _c.get('theme')) &&
                                                'animate-spin'
                                              } w-5 h-5`,
                                              children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('path', {
                                                d: 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z',
                                              }),
                                            }),
                                            'Dark mode',
                                          ],
                                        }),
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('div', {
                                    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)('a', {
                                      target: '_blank',
                                      href: `https://lopenling.org/u/${
                                        user == null ? void 0 : user.username
                                      }/preferences/account`,
                                      className:
                                        ' truncate flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white',
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('svg', {
                                          width: '20',
                                          height: '20',
                                          viewBox: '0 0 20 20',
                                          fill: 'none',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('path', {
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                            d: 'M11.49 3.17C11.11 1.61 8.88999 1.61 8.50999 3.17C8.45326 3.40442 8.34198 3.62212 8.18522 3.80541C8.02845 3.9887 7.83062 4.13238 7.60784 4.22477C7.38505 4.31716 7.1436 4.35564 6.90313 4.33709C6.66266 4.31854 6.42997 4.24347 6.22399 4.118C4.85199 3.282 3.28199 4.852 4.11799 6.224C4.65799 7.11 4.17899 8.266 3.17099 8.511C1.60999 8.89 1.60999 11.111 3.17099 11.489C3.40547 11.5458 3.62322 11.6572 3.80651 11.8141C3.98979 11.971 4.13343 12.1689 4.22573 12.3918C4.31803 12.6147 4.35639 12.8563 4.33766 13.0968C4.31894 13.3373 4.24368 13.5701 4.11799 13.776C3.28199 15.148 4.85199 16.718 6.22399 15.882C6.42993 15.7563 6.66265 15.6811 6.90318 15.6623C7.14371 15.6436 7.38527 15.682 7.60817 15.7743C7.83108 15.8666 8.02904 16.0102 8.18592 16.1935C8.34281 16.3768 8.45419 16.5945 8.51099 16.829C8.88999 18.39 11.111 18.39 11.489 16.829C11.546 16.5946 11.6575 16.377 11.8144 16.1939C11.9713 16.0107 12.1692 15.8672 12.3921 15.7749C12.6149 15.6826 12.8564 15.6442 13.0969 15.6628C13.3373 15.6815 13.57 15.7565 13.776 15.882C15.148 16.718 16.718 15.148 15.882 13.776C15.7565 13.57 15.6815 13.3373 15.6628 13.0969C15.6442 12.8564 15.6826 12.6149 15.7749 12.3921C15.8672 12.1692 16.0107 11.9713 16.1939 11.8144C16.377 11.6575 16.5946 11.546 16.829 11.489C18.39 11.11 18.39 8.889 16.829 8.511C16.5945 8.45419 16.3768 8.34281 16.1935 8.18593C16.0102 8.02904 15.8666 7.83109 15.7743 7.60818C15.682 7.38527 15.6436 7.14372 15.6623 6.90318C15.681 6.66265 15.7563 6.42994 15.882 6.224C16.718 4.852 15.148 3.282 13.776 4.118C13.5701 4.24368 13.3373 4.31895 13.0968 4.33767C12.8563 4.35639 12.6147 4.31804 12.3918 4.22574C12.1689 4.13344 11.971 3.9898 11.8141 3.80651C11.6572 3.62323 11.5458 3.40548 11.489 3.171L11.49 3.17ZM9.99999 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 9.99999 7C9.20434 7 8.44128 7.31607 7.87867 7.87868C7.31606 8.44129 6.99999 9.20435 6.99999 10C6.99999 10.7956 7.31606 11.5587 7.87867 12.1213C8.44128 12.6839 9.20434 13 9.99999 13V13Z',
                                            fill: darkMode ? 'white' : '#111928',
                                          }),
                                        }),
                                        'Preferences',
                                      ],
                                    }),
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_react20.Form, {
                                    method: 'POST',
                                    action: '/auth/login',
                                    className:
                                      'flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white',
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('input', {
                                        type: 'hidden',
                                        name: 'redirectTo',
                                        className:
                                          'block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white',
                                        defaultValue: redirectTo,
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('button', {
                                        className: 'text-sm font-medium leading-tight ',
                                        type: 'submit',
                                        name: '_action',
                                        value: 'logout',
                                        children: translation.logout,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    })
                  : /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)('div', {
                      className: 'flex gap-2 justify-between',
                      id: 'user-menu-button',
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(loginFetcher.Form, {
                          method: 'POST',
                          id: 'login',
                          action: '/auth/login',
                          className: 'flex items-center',
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('input', {
                              type: 'hidden',
                              name: 'redirectTo',
                              defaultValue: redirectTo,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('button', {
                              type: 'submit',
                              name: '_action',
                              value: 'login',
                              className: 'text-sm font-medium leading-tight text-gray-900 capitalize dark:text-white',
                              children: translation.login,
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_flowbite_react4.Button, {
                          className: ' text-green-400 border-2 border-green-300',
                          color: '',
                          id: 'signup',
                          children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('a', {
                            href: 'https://lopenling.org/signup',
                            children: translation.signup,
                          }),
                        }),
                      ],
                    }),
              ],
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ProgressBar, {}),
    ],
  });
}
function Translation() {
  let methods = (0, import_react_littera3.useLitteraMethods)();
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('div', {
    className: 'md:mr-10 flex items-center justify-start space-x-0.5',
    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)('select', {
      onChange: (e) => {
        methods.setLocale(e.target.value);
      },
      className:
        'border-transparent focus:border-transparent focus:ring-0 text-gray-500 bg-transparent  focus:outline-none focus:ring-gray-100 dark:bg-transparent  dark:focus:ring-gray-700 dark:text-white dark:border-gray-600',
      children: translationCodes.map((code) =>
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          'option',
          {
            value: code.code,
            className: 'bg-white dark:bg-slate-600 ',
            children: code.name,
          },
          code.code
        )
      ),
    }),
  });
}
var Header_default = (0, import_react21.memo)(Header);

// app/routes/text.upload.tsx
var import_jsx_runtime18 = require('react/jsx-runtime'),
  loader7 = async ({ request }) => {
    let user = await getUserSession(request);
    if (!user) return (0, import_server_runtime3.redirect)('/');
    let textList = await findAllText();
    return user.admin !== 'true' && (textList = textList.filter((text) => text.userId === user.id)), { textList, user };
  },
  action7 = async ({ request }) => {
    let formData = await request.formData(),
      textName = formData.get('text-name'),
      textContent = formData.get('text-content'),
      user = await getUserSession(request),
      res = null;
    if (request.method === 'DELETE') {
      let textId = formData.get('textId');
      res = await deleteText(textId);
    }
    if (request.method === 'POST') {
      if (!textName || !textContent) return null;
      res = await createText(textName, textContent, user == null ? void 0 : user.id);
    }
    return res;
  };
function UploadText() {
  var _a;
  let formRef = (0, import_react23.useRef)(),
    data = (0, import_react22.useLoaderData)(),
    user = data.user,
    navigation = (0, import_react22.useNavigation)(),
    [textContent, setTextContent] = (0, import_react23.useState)(''),
    uploadId = (0, import_react24.useId)();
  navigation.state !== 'idle' && ((_a = formRef == null ? void 0 : formRef.current) == null || _a.reset());
  let handleChange = async (file) => {
    let text = await readFileContent(file);
    setTextContent(text);
  };
  function readFileContent(file) {
    let reader = new FileReader();
    return new Promise((resolve, reject) => {
      (reader.onload = (event) => resolve(event.target.result)),
        (reader.onerror = (error) => reject(error)),
        reader.readAsText(file);
    });
  }
  let fileTypes = ['TXT'];
  return user
    ? /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, {
        children: [
          ' ',
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Header_default, { editor: null }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_react22.Form, {
            method: 'POST',
            ref: (ref) => formRef,
            className: 'max-w-2xl m-auto pt-20',
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)('div', {
                className: 'mb-6',
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)('label', {
                    htmlFor: uploadId + 'textName',
                    className: 'mb-2 block text-sm font-medium text-gray-900 dark:text-white',
                    children: 'Text name',
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)('input', {
                    type: 'text',
                    id: uploadId + 'textName',
                    name: 'text-name',
                    className:
                      'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
                    placeholder: 'title',
                    required: !0,
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_flowbite_react5.Tabs.Group, {
                'aria-label': 'Default tabs',
                style: 'default',
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_flowbite_react5.Tabs.Item, {
                    title: 'Type text',
                    children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)('div', {
                      className: 'mb-6',
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)('label', {
                          htmlFor: uploadId + 'textContent',
                          className: 'mb-2 block text-sm font-medium text-gray-900 dark:text-white',
                          children: 'Text Content',
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)('textarea', {
                          id: uploadId + 'textContent',
                          name: 'text-content',
                          rows: 4,
                          className:
                            'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
                          placeholder: 'Content',
                          value: textContent,
                          onChange: (e) => setTextContent(e.target.value),
                        }),
                      ],
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_flowbite_react5.Tabs.Item, {
                    title: 'Upload Txt',
                    children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_drag_drop_files.FileUploader, {
                      handleChange,
                      types: fileTypes,
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)('button', {
                type: 'submit',
                className:
                  'rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
                children:
                  navigation.state !== 'idle' && navigation.formMethod === 'POST' ? ' Text uploading' : 'Upload',
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)('div', {
            className: 'flex flex-col space-y-3 w-max mx-auto text-lg',
            children: data.textList.map((text) =>
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(EachText, { text }, text.id)
            ),
          }),
        ],
      })
    : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)('div', { children: 'login first' });
}
function EachText({ text }) {
  var _a;
  let deleteFetcher = (0, import_react22.useFetcher)();
  function handleDeleteText(textId) {
    confirm('do you wish to delete the text') &&
      deleteFetcher.submit(
        {
          textId,
        },
        {
          method: 'delete',
        }
      );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)('div', {
    className: 'flex  gap-3 items-center justify-between',
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)('div', {
        style: { fontFamily: 'sans-serif' },
        children: (_a = text.author) == null ? void 0 : _a.name,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)('div', {
        className: ` py-1 px-2 relative bg-white rounded-lg border-slate-600 border-2
      ${deleteFetcher.formData && ' hidden'} dark:text-slate-700`,
        children: [
          text.name,
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)('button', {
            type: 'submit',
            onClick: () => handleDeleteText(text.id),
            className:
              'absolute -top-2 -right-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white dark:border-gray-900',
            children: 'x',
          }),
        ],
      }),
    ],
  });
}

// app/routes/api.reply.tsx
var api_reply_exports = {};
__export(api_reply_exports, {
  action: () => action8,
});
var import_node7 = require('@remix-run/node');
var action8 = async ({ request }) => {
  let user = await getUserSession(request);
  try {
    if (request.method === 'DELETE') {
      let postId = (await request.formData()).get('postId');
      return (
        await deletePost(postId, user.username),
        {
          delete: 'success',
        }
      );
    }
    if (request.method === 'POST') {
      let uploadHandler = (0, import_node7.unstable_composeUploadHandlers)(
          uploadAudio,
          (0, import_node7.unstable_createMemoryUploadHandler)()
        ),
        formData = await (0, import_node7.unstable_parseMultipartFormData)(request, uploadHandler),
        Obj = Object.fromEntries(formData),
        postString = Obj.postString,
        topicId = Obj.topicId,
        audioUrl = Obj.file;
      return (
        audioUrl === void 0 && (audioUrl = null),
        {
          posts: await (await createPost(topicId, audioUrl, postString, user.username)).json(),
        }
      );
    }
    if (request.method === 'PATCH') {
      let formData = await request.formData(),
        user2 = await getUserSession(request),
        Obj = Object.fromEntries(formData),
        action11 = Obj.action;
      if (action11 === 'like') {
        let post_id = Obj.post_id,
          id = Obj.id;
        if (!(await isReplyPresent(id))) await createReply(id, post_id, user2.id);
        else {
          let alreadyLiked = await findReply(id, user2.id);
          await updateLikeReply(id, user2.id, !alreadyLiked);
        }
        return { success: !0 };
      }
      if (action11 === 'approve') {
        let replyId = Obj.id,
          isSolved = Obj.isSolved === 'false';
        try {
          await updateIsAproved(replyId, isSolved);
        } catch {
          throw new Error('error on approving reply');
        }
        return null;
      }
    }
  } catch (e) {
    return {
      post: e.message,
    };
  }
};

// app/routes/api.post.tsx
var api_post_exports = {};
__export(api_post_exports, {
  action: () => action9,
});
var import_node8 = require('@remix-run/node');
var action9 = async ({ request }) => {
  let uploadHandler = (0, import_node8.unstable_composeUploadHandlers)(
      uploadAudio,
      (0, import_node8.unstable_createMemoryUploadHandler)()
    ),
    user = await getUserSession(request);
  if (request.method === 'POST') {
    let formData = await (0, import_node8.unstable_parseMultipartFormData)(request, uploadHandler),
      Obj = Object.fromEntries(formData),
      DiscourseUrl = process.env.DISCOURSE_SITE,
      api = process.env.DISCOURSE_API_KEY,
      parent_category_id = process.env.DISCOURSE_QA_CATEGORY_ID;
    if (!user) throw new Error('user not logged in');
    if (!DiscourseUrl || !api || !parent_category_id) throw new Error('set a DISCOURSE_SITE/DISCOURSE_API_KEY in env');
    let audioUrl = Obj.file,
      textId = parseInt(Obj.textId);
    try {
      let data = await createThread(
        user.username,
        Obj.topic,
        Obj.selectionSegment,
        Obj.body,
        parent_category_id,
        textId,
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
          Obj.body,
          user.id,
          audioUrl
        );
    } catch (error) {
      return console.error('Failed to create question:', error), { message: error };
    }
  }
  if (request.method === 'DELETE') {
    let formData = await request.formData(),
      id = Object.fromEntries(formData).id,
      res = await deletePost2(id),
      deleteDiscourse = await deleteDiscourseTopic(user.username, res.topic_id);
    return {
      deleted: res,
    };
  }
  if (request.method === 'PATCH') {
    let formData = await (0, import_node8.unstable_parseMultipartFormData)(request, uploadHandler),
      action11 = formData.get('action');
    if (action11 === 'like') {
      let postId = formData.get('id'),
        userId = formData.get('userId'),
        likedUsers = await findPostByUserLiked(postId, userId);
      try {
        let res = await updatePostLike(postId, userId, likedUsers === null);
        return res.textId && (await trigetPusherUpdate_server_default(user, res.textId)), res.likedBy;
      } catch (e) {
        console.log(...oo_oo8('f2f956a6_0', e));
      }
      return { success: !0 };
    }
    if (action11 === 'update') {
      let newContent = formData.get('body'),
        postId = formData.get('postId'),
        audioUrl = formData.get('file');
      audioUrl || (audioUrl = formData.get('audioUrl'));
      let res = await updatePostContentandAudio(postId, newContent, audioUrl);
      return (
        res != null && res.post_id && (await updateDiscoursePost(res.post_id, newContent, audioUrl, user.username)), res
      );
    }
  }
  return null;
};
function oo_cm8() {
  try {
    return (
      (0, eval)('globalThis._console_ninja') ||
      (0, eval)(
        `/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2cf5cd=_0x40be;(function(_0x582a6d,_0x326ed6){var _0x274fa5=_0x40be,_0x4e6359=_0x582a6d();while(!![]){try{var _0x36ca3c=parseInt(_0x274fa5(0x240))/0x1+parseInt(_0x274fa5(0x2bf))/0x2*(parseInt(_0x274fa5(0x27c))/0x3)+parseInt(_0x274fa5(0x1f0))/0x4*(parseInt(_0x274fa5(0x288))/0x5)+parseInt(_0x274fa5(0x1ee))/0x6+parseInt(_0x274fa5(0x2b9))/0x7*(parseInt(_0x274fa5(0x20b))/0x8)+parseInt(_0x274fa5(0x269))/0x9*(parseInt(_0x274fa5(0x289))/0xa)+-parseInt(_0x274fa5(0x20a))/0xb;if(_0x36ca3c===_0x326ed6)break;else _0x4e6359['push'](_0x4e6359['shift']());}catch(_0x19d0c6){_0x4e6359['push'](_0x4e6359['shift']());}}}(_0x2a98,0xda71d));var ue=Object[_0x2cf5cd(0x21d)],te=Object[_0x2cf5cd(0x2ae)],he=Object[_0x2cf5cd(0x21f)],le=Object['getOwnPropertyNames'],fe=Object['getPrototypeOf'],_e=Object['prototype'][_0x2cf5cd(0x1e8)],pe=(_0x25f11f,_0x357847,_0x2ae353,_0x3d8e2d)=>{var _0x44b478=_0x2cf5cd;if(_0x357847&&typeof _0x357847=='object'||typeof _0x357847==_0x44b478(0x293)){for(let _0x4a4651 of le(_0x357847))!_e['call'](_0x25f11f,_0x4a4651)&&_0x4a4651!==_0x2ae353&&te(_0x25f11f,_0x4a4651,{'get':()=>_0x357847[_0x4a4651],'enumerable':!(_0x3d8e2d=he(_0x357847,_0x4a4651))||_0x3d8e2d['enumerable']});}return _0x25f11f;},ne=(_0x806e83,_0x70843c,_0x15e02d)=>(_0x15e02d=_0x806e83!=null?ue(fe(_0x806e83)):{},pe(_0x70843c||!_0x806e83||!_0x806e83[_0x2cf5cd(0x25e)]?te(_0x15e02d,_0x2cf5cd(0x266),{'value':_0x806e83,'enumerable':!0x0}):_0x15e02d,_0x806e83)),Q=class{constructor(_0x59b92d,_0x2a3a9d,_0x559130,_0x18aff8){var _0x19135f=_0x2cf5cd;this[_0x19135f(0x273)]=_0x59b92d,this[_0x19135f(0x244)]=_0x2a3a9d,this[_0x19135f(0x26d)]=_0x559130,this[_0x19135f(0x2a1)]=_0x18aff8,this[_0x19135f(0x1f6)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x19135f(0x207)]=!0x1,this['_connecting']=!0x1,this[_0x19135f(0x246)]=!!this['global'][_0x19135f(0x26c)],this[_0x19135f(0x28e)]=null,this[_0x19135f(0x296)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_sendErrorMessage']=this[_0x19135f(0x246)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help':_0x19135f(0x210);}async[_0x2cf5cd(0x25d)](){var _0x423475=_0x2cf5cd;if(this['_WebSocketClass'])return this[_0x423475(0x28e)];let _0x28fd87;if(this['_inBrowser'])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x26c)];else{if(this[_0x423475(0x273)][_0x423475(0x2a2)]?.[_0x423475(0x22e)])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x2a2)]?.['_WebSocket'];else try{let _0x4e350b=await import(_0x423475(0x26e));_0x28fd87=(await import((await import(_0x423475(0x280)))[_0x423475(0x242)](_0x4e350b[_0x423475(0x252)](this[_0x423475(0x2a1)],_0x423475(0x245)))[_0x423475(0x225)]()))['default'];}catch{try{_0x28fd87=require(require(_0x423475(0x26e))[_0x423475(0x252)](this[_0x423475(0x2a1)],'ws'));}catch{throw new Error(_0x423475(0x247));}}}return this[_0x423475(0x28e)]=_0x28fd87,_0x28fd87;}[_0x2cf5cd(0x2a0)](){var _0x299e02=_0x2cf5cd;this[_0x299e02(0x232)]||this['_connected']||this['_connectAttemptCount']>=this[_0x299e02(0x2a8)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x299e02(0x232)]=!0x0,this['_connectAttemptCount']++,this[_0x299e02(0x209)]=new Promise((_0x323901,_0xe82100)=>{var _0x1f03e5=_0x299e02;this[_0x1f03e5(0x25d)]()[_0x1f03e5(0x284)](_0x289f22=>{var _0x312bc1=_0x1f03e5;let _0x1a955b=new _0x289f22(_0x312bc1(0x202)+this['host']+':'+this[_0x312bc1(0x26d)]);_0x1a955b[_0x312bc1(0x1f1)]=()=>{var _0x491c98=_0x312bc1;this['_allowedToSend']=!0x1,this[_0x491c98(0x281)](_0x1a955b),this[_0x491c98(0x2c5)](),_0xe82100(new Error(_0x491c98(0x206)));},_0x1a955b[_0x312bc1(0x2b2)]=()=>{var _0x496f4e=_0x312bc1;this[_0x496f4e(0x246)]||_0x1a955b['_socket']&&_0x1a955b[_0x496f4e(0x2b0)]['unref']&&_0x1a955b[_0x496f4e(0x2b0)]['unref'](),_0x323901(_0x1a955b);},_0x1a955b['onclose']=()=>{var _0x4a9cbf=_0x312bc1;this[_0x4a9cbf(0x248)]=!0x0,this['_disposeWebsocket'](_0x1a955b),this[_0x4a9cbf(0x2c5)]();},_0x1a955b[_0x312bc1(0x2b5)]=_0x5eb630=>{var _0x2133bb=_0x312bc1;try{_0x5eb630&&_0x5eb630['data']&&this['_inBrowser']&&JSON[_0x2133bb(0x231)](_0x5eb630[_0x2133bb(0x27a)])[_0x2133bb(0x2af)]==='reload'&&this[_0x2133bb(0x273)][_0x2133bb(0x27e)]['reload']();}catch{}};})['then'](_0x5c8281=>(this[_0x1f03e5(0x207)]=!0x0,this[_0x1f03e5(0x232)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x1f03e5(0x296)]=0x0,_0x5c8281))[_0x1f03e5(0x204)](_0x2e9680=>(this[_0x1f03e5(0x207)]=!0x1,this['_connecting']=!0x1,_0xe82100(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x2e9680&&_0x2e9680[_0x1f03e5(0x1ef)])))));}));}[_0x2cf5cd(0x281)](_0x196a35){var _0x2f6e0d=_0x2cf5cd;this[_0x2f6e0d(0x207)]=!0x1,this[_0x2f6e0d(0x232)]=!0x1;try{_0x196a35[_0x2f6e0d(0x2bb)]=null,_0x196a35[_0x2f6e0d(0x1f1)]=null,_0x196a35['onopen']=null;}catch{}try{_0x196a35[_0x2f6e0d(0x221)]<0x2&&_0x196a35[_0x2f6e0d(0x212)]();}catch{}}[_0x2cf5cd(0x2c5)](){var _0x610869=_0x2cf5cd;clearTimeout(this[_0x610869(0x22a)]),!(this[_0x610869(0x296)]>=this[_0x610869(0x2a8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x5d1aff=_0x610869;this[_0x5d1aff(0x207)]||this[_0x5d1aff(0x232)]||(this[_0x5d1aff(0x2a0)](),this[_0x5d1aff(0x209)]?.[_0x5d1aff(0x204)](()=>this[_0x5d1aff(0x2c5)]()));},0x1f4),this[_0x610869(0x22a)][_0x610869(0x2c4)]&&this['_reconnectTimeout'][_0x610869(0x2c4)]());}async['send'](_0x4da41b){var _0x25d38b=_0x2cf5cd;try{if(!this['_allowedToSend'])return;this[_0x25d38b(0x248)]&&this[_0x25d38b(0x2a0)](),(await this[_0x25d38b(0x209)])[_0x25d38b(0x1f2)](JSON[_0x25d38b(0x29d)](_0x4da41b));}catch(_0x284c46){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x284c46&&_0x284c46[_0x25d38b(0x1ef)])),this['_allowedToSend']=!0x1,this[_0x25d38b(0x2c5)]();}}};function V(_0xb97f7e,_0x19f69c,_0x301db6,_0x28b17b,_0x3028fb){var _0x4feedb=_0x2cf5cd;let _0xab03f1=_0x301db6[_0x4feedb(0x229)](',')[_0x4feedb(0x23f)](_0x2633fc=>{var _0x529807=_0x4feedb;try{_0xb97f7e[_0x529807(0x230)]||((_0x3028fb===_0x529807(0x283)||_0x3028fb===_0x529807(0x249)||_0x3028fb===_0x529807(0x2ac))&&(_0x3028fb+=_0xb97f7e['process']?.[_0x529807(0x2c1)]?.['node']?_0x529807(0x20d):_0x529807(0x237)),_0xb97f7e[_0x529807(0x230)]={'id':+new Date(),'tool':_0x3028fb});let _0xeb9db=new Q(_0xb97f7e,_0x19f69c,_0x2633fc,_0x28b17b);return _0xeb9db[_0x529807(0x1f2)][_0x529807(0x227)](_0xeb9db);}catch(_0x2230bd){return console[_0x529807(0x267)](_0x529807(0x22b),_0x2230bd&&_0x2230bd[_0x529807(0x1ef)]),()=>{};}});return _0x422510=>_0xab03f1[_0x4feedb(0x262)](_0x389f10=>_0x389f10(_0x422510));}function _0x2a98(){var _0x47734e=['disabledLog','_numberRegExp','autoExpandMaxDepth','undefined','unknown','Number','time','ws://','String','catch','RegExp','logger\\x20websocket\\x20error','_connected','isArray','_ws','54739014hZPxbX','1079648rjCDOH','getOwnPropertySymbols','\\x20server','_capIfString','_setNodeLabel','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','_blacklistedProperty','close','_isPrimitiveType','_p_','substr','_keyStrRegExp','error','hostname','concat','_regExpToString','61159','setter','create','_addFunctionsNode','getOwnPropertyDescriptor','_setNodeId','readyState','_Symbol','sort','depth','toString','_quotedRegExp','bind','string','split','_reconnectTimeout','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','nuxt','null','_WebSocket','_hasSymbolPropertyOnItsPath','_console_ninja_session','parse','_connecting','_additionalMetadata','...','_hasMapOnItsPath','allStrLength','\\x20browser','level','_treeNodePropertiesAfterFullValue','_p_name','timeStamp','_p_length','autoExpand','NEGATIVE_INFINITY','map','1525537RhiYyd','sortProps','pathToFileURL','_console_ninja','host','ws/index.js','_inBrowser','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_allowedToConnectOnSend','remix','current','length','1685344258094','test','totalStrLength','_property','Map','console','join','resolveGetters','serialize','HTMLAllCollection',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.129\\\\node_modules",'timeEnd','[object\\x20Set]','now','log','call','capped','getWebSocketClass','__es'+'Module','hits','stack','Boolean','forEach','expId','hrtime','1.0.0','default','warn','number','27PVbVzP','_isArray','_isSet','WebSocket','port','path','Set','valueOf','parent','count','global','constructor','_propertyName','_isMap','toLowerCase','strLength','getter','data','_dateToString','25989iNKKmv','_getOwnPropertyDescriptor','location','isExpressionToEvaluate','url','_disposeWebsocket','_cleanNode','next.js','then','index','_propertyAccessor','node','2365xiNUeo','2338510BlrUQW','unshift','cappedProps','[object\\x20Map]','remix','_WebSocketClass','_setNodeExpressionPath','performance','array','_isNegativeZero','function','[object\\x20Array]','_setNodeExpandableState','_connectAttemptCount','elapsed','_consoleNinjaAllowedToStart','props','positiveInfinity','noFunctions','push','stringify','[object\\x20Date]','root_exp_id','_connectToHostNow','nodeModules','process','_setNodePermissions','_sortProps','reduceLimits','_type','cappedElements','_maxConnectAttemptCount','argumentResolutionError','trace','elements','astro','autoExpandPreviousObjects','defineProperty','method','_socket','type','onopen','_processTreeNodeResult','_objectToString','onmessage','negativeZero','bigint','Symbol','7HexpBI','Buffer','onclose','boolean','symbol','_addLoadNode','358RbwaIx','getOwnPropertyNames','versions','autoExpandLimit','includes','unref','_attemptToReconnectShortly','_isPrimitiveWrapperType','_HTMLAllCollection','match','date','autoExpandPropertyCount','127.0.0.1','value','hasOwnProperty','_addProperty','set','prototype','negativeInfinity','object','5054958GGLzRP','message','9436aEdZNf','onerror','send','_addObjectProperty','name','stackTraceLimit','_allowedToSend','_setNodeQueryPath','expressionsToEvaluate','_getOwnPropertySymbols','_treeNodePropertiesBeforeFullValue'];_0x2a98=function(){return _0x47734e;};return _0x2a98();}function H(_0x45561e){var _0x534322=_0x2cf5cd;let _0x3f152c=function(_0x148806,_0x5ef6f9){return _0x5ef6f9-_0x148806;},_0x50eaf0;if(_0x45561e[_0x534322(0x290)])_0x50eaf0=function(){var _0x376037=_0x534322;return _0x45561e[_0x376037(0x290)][_0x376037(0x259)]();};else{if(_0x45561e[_0x534322(0x2a2)]&&_0x45561e['process'][_0x534322(0x264)])_0x50eaf0=function(){var _0x3938fb=_0x534322;return _0x45561e[_0x3938fb(0x2a2)][_0x3938fb(0x264)]();},_0x3f152c=function(_0x4d6428,_0x24c728){return 0x3e8*(_0x24c728[0x0]-_0x4d6428[0x0])+(_0x24c728[0x1]-_0x4d6428[0x1])/0xf4240;};else try{let {performance:_0x2c50fd}=require('perf_hooks');_0x50eaf0=function(){var _0x39ffd2=_0x534322;return _0x2c50fd[_0x39ffd2(0x259)]();};}catch{_0x50eaf0=function(){return+new Date();};}}return{'elapsed':_0x3f152c,'timeStamp':_0x50eaf0,'now':()=>Date[_0x534322(0x259)]()};}function X(_0x1f6729,_0x5c6190,_0x217af5){var _0x126b42=_0x2cf5cd;if(_0x1f6729['_consoleNinjaAllowedToStart']!==void 0x0)return _0x1f6729[_0x126b42(0x298)];let _0xe76fa6=_0x1f6729[_0x126b42(0x2a2)]?.[_0x126b42(0x2c1)]?.['node'];return _0xe76fa6&&_0x217af5===_0x126b42(0x22c)?_0x1f6729['_consoleNinjaAllowedToStart']=!0x1:_0x1f6729[_0x126b42(0x298)]=_0xe76fa6||!_0x5c6190||_0x1f6729['location']?.[_0x126b42(0x218)]&&_0x5c6190[_0x126b42(0x2c3)](_0x1f6729[_0x126b42(0x27e)][_0x126b42(0x218)]),_0x1f6729[_0x126b42(0x298)];}function _0x40be(_0x15e1bb,_0x1a4e5d){var _0x2a98f1=_0x2a98();return _0x40be=function(_0x40be20,_0x4701b9){_0x40be20=_0x40be20-0x1e3;var _0x3331c5=_0x2a98f1[_0x40be20];return _0x3331c5;},_0x40be(_0x15e1bb,_0x1a4e5d);}((_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548,_0x2b2eb2,_0x1b70b3,_0x41ce87,_0x40492c)=>{var _0xaf924a=_0x2cf5cd;if(_0x49b204[_0xaf924a(0x243)])return _0x49b204[_0xaf924a(0x243)];if(!X(_0x49b204,_0x41ce87,_0x489548))return _0x49b204['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x49b204[_0xaf924a(0x243)];let _0xf0b388={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5b35fa={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x505e5e=H(_0x49b204),_0x254ab2=_0x505e5e[_0xaf924a(0x297)],_0x4a93d3=_0x505e5e[_0xaf924a(0x23b)],_0xe1d997=_0x505e5e[_0xaf924a(0x259)],_0x47a49a={'hits':{},'ts':{}},_0x2cbc42=_0x1a66cf=>{_0x47a49a['ts'][_0x1a66cf]=_0x4a93d3();},_0x40058f=(_0x55f653,_0x438427)=>{let _0x25052b=_0x47a49a['ts'][_0x438427];if(delete _0x47a49a['ts'][_0x438427],_0x25052b){let _0x4bcb71=_0x254ab2(_0x25052b,_0x4a93d3());_0x1a6309(_0x195f4e('time',_0x55f653,_0xe1d997(),_0xe5069f,[_0x4bcb71],_0x438427));}},_0x1cf403=_0x391d70=>_0x34ff71=>{var _0x545190=_0xaf924a;try{_0x2cbc42(_0x34ff71),_0x391d70(_0x34ff71);}finally{_0x49b204[_0x545190(0x251)][_0x545190(0x201)]=_0x391d70;}},_0x162ea0=_0x434010=>_0x2d8916=>{var _0x386e10=_0xaf924a;try{let [_0x4df1d3,_0x22fa1a]=_0x2d8916[_0x386e10(0x229)](':logPointId:');_0x40058f(_0x22fa1a,_0x4df1d3),_0x434010(_0x4df1d3);}finally{_0x49b204['console'][_0x386e10(0x257)]=_0x434010;}};_0x49b204[_0xaf924a(0x243)]={'consoleLog':(_0x467987,_0x342fa0)=>{var _0x37d8e1=_0xaf924a;_0x49b204[_0x37d8e1(0x251)]['log']['name']!==_0x37d8e1(0x1fb)&&_0x1a6309(_0x195f4e(_0x37d8e1(0x25a),_0x467987,_0xe1d997(),_0xe5069f,_0x342fa0));},'consoleTrace':(_0x4f9b55,_0x2c5df8)=>{var _0x409a8a=_0xaf924a;_0x49b204[_0x409a8a(0x251)]['log'][_0x409a8a(0x1f4)]!=='disabledTrace'&&_0x1a6309(_0x195f4e('trace',_0x4f9b55,_0xe1d997(),_0xe5069f,_0x2c5df8));},'consoleTime':()=>{var _0x372b3c=_0xaf924a;_0x49b204[_0x372b3c(0x251)][_0x372b3c(0x201)]=_0x1cf403(_0x49b204[_0x372b3c(0x251)]['time']);},'consoleTimeEnd':()=>{var _0x49bb97=_0xaf924a;_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]=_0x162ea0(_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]);},'autoLog':(_0x108d5f,_0x4cf9ca)=>{var _0x16ba00=_0xaf924a;_0x1a6309(_0x195f4e(_0x16ba00(0x25a),_0x4cf9ca,_0xe1d997(),_0xe5069f,[_0x108d5f]));},'autoTrace':(_0x1e46d6,_0x2c00ce)=>{var _0x54ceaa=_0xaf924a;_0x1a6309(_0x195f4e(_0x54ceaa(0x2aa),_0x2c00ce,_0xe1d997(),_0xe5069f,[_0x1e46d6]));},'autoTime':(_0x296ec5,_0x4d05a6,_0xae7de0)=>{_0x2cbc42(_0xae7de0);},'autoTimeEnd':(_0x4787e8,_0x45534c,_0x282ccd)=>{_0x40058f(_0x45534c,_0x282ccd);}};let _0x1a6309=V(_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548),_0xe5069f=_0x49b204[_0xaf924a(0x230)];class _0x3ea185{constructor(){var _0x8f3991=_0xaf924a;this[_0x8f3991(0x216)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x49b204['undefined'],this[_0x8f3991(0x2c7)]=_0x49b204[_0x8f3991(0x255)],this['_getOwnPropertyDescriptor']=Object[_0x8f3991(0x21f)],this['_getOwnPropertyNames']=Object[_0x8f3991(0x2c0)],this['_Symbol']=_0x49b204[_0x8f3991(0x2b8)],this[_0x8f3991(0x21a)]=RegExp[_0x8f3991(0x1eb)][_0x8f3991(0x225)],this[_0x8f3991(0x27b)]=Date[_0x8f3991(0x1eb)][_0x8f3991(0x225)];}[_0xaf924a(0x254)](_0x1ffbdf,_0x261664,_0x1119b9,_0x220a1b){var _0x35a28c=_0xaf924a,_0x2b5b13=this,_0xb5b34f=_0x1119b9[_0x35a28c(0x23d)];function _0x3e7ce9(_0x18896a,_0x17698b,_0x102b14){var _0x587cf5=_0x35a28c;_0x17698b['type']=_0x587cf5(0x1ff),_0x17698b[_0x587cf5(0x217)]=_0x18896a['message'],_0x1c9374=_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)],_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)]=_0x17698b,_0x2b5b13['_treeNodePropertiesBeforeFullValue'](_0x17698b,_0x102b14);}if(_0x261664&&_0x261664[_0x35a28c(0x2a9)])_0x3e7ce9(_0x261664,_0x1ffbdf,_0x1119b9);else try{_0x1119b9[_0x35a28c(0x238)]++,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x2ad)][_0x35a28c(0x29c)](_0x261664);var _0x4abe4f,_0x4d7716,_0x16f780,_0x4f50fc,_0x4c3fd8=[],_0x2e94bd=[],_0x107b8f,_0x1a262d=this[_0x35a28c(0x2a6)](_0x261664),_0xec7933=_0x1a262d==='array',_0x48c47a=!0x1,_0x55a62b=_0x1a262d===_0x35a28c(0x293),_0x5dd4e0=this[_0x35a28c(0x213)](_0x1a262d),_0x482298=this[_0x35a28c(0x2c6)](_0x1a262d),_0x164aa8=_0x5dd4e0||_0x482298,_0x1739c6={},_0x2d507c=0x0,_0x18b048=!0x1,_0x1c9374,_0xeccd3f=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1119b9[_0x35a28c(0x224)]){if(_0xec7933){if(_0x4d7716=_0x261664[_0x35a28c(0x24b)],_0x4d7716>_0x1119b9[_0x35a28c(0x2ab)]){for(_0x16f780=0x0,_0x4f50fc=_0x1119b9[_0x35a28c(0x2ab)],_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));_0x1ffbdf[_0x35a28c(0x2a7)]=!0x0;}else{for(_0x16f780=0x0,_0x4f50fc=_0x4d7716,_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));}_0x1119b9['autoExpandPropertyCount']+=_0x2e94bd['length'];}if(!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&!_0x5dd4e0&&_0x1a262d!==_0x35a28c(0x203)&&_0x1a262d!==_0x35a28c(0x2ba)&&_0x1a262d!==_0x35a28c(0x2b7)){var _0x2ae62d=_0x220a1b[_0x35a28c(0x299)]||_0x1119b9[_0x35a28c(0x299)];if(this[_0x35a28c(0x26b)](_0x261664)?(_0x4abe4f=0x0,_0x261664['forEach'](function(_0x46649f){var _0x15a7b7=_0x35a28c;if(_0x2d507c++,_0x1119b9[_0x15a7b7(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x15a7b7(0x27f)]&&_0x1119b9['autoExpand']&&_0x1119b9[_0x15a7b7(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;return;}_0x2e94bd[_0x15a7b7(0x29c)](_0x2b5b13[_0x15a7b7(0x1e9)](_0x4c3fd8,_0x261664,'Set',_0x4abe4f++,_0x1119b9,function(_0x5c98b8){return function(){return _0x5c98b8;};}(_0x46649f)));})):this[_0x35a28c(0x276)](_0x261664)&&_0x261664['forEach'](function(_0x8ca25,_0x4c3572){var _0x1bfdfd=_0x35a28c;if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x1bfdfd(0x27f)]&&_0x1119b9[_0x1bfdfd(0x23d)]&&_0x1119b9['autoExpandPropertyCount']>_0x1119b9[_0x1bfdfd(0x2c2)]){_0x18b048=!0x0;return;}var _0x4873de=_0x4c3572['toString']();_0x4873de[_0x1bfdfd(0x24b)]>0x64&&(_0x4873de=_0x4873de['slice'](0x0,0x64)+_0x1bfdfd(0x234)),_0x2e94bd[_0x1bfdfd(0x29c)](_0x2b5b13[_0x1bfdfd(0x1e9)](_0x4c3fd8,_0x261664,_0x1bfdfd(0x250),_0x4873de,_0x1119b9,function(_0x1cdb70){return function(){return _0x1cdb70;};}(_0x8ca25)));}),!_0x48c47a){try{for(_0x107b8f in _0x261664)if(!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)){if(_0x2d507c++,_0x1119b9[_0x35a28c(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9[_0x35a28c(0x2c2)]){_0x18b048=!0x0;break;}_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}catch{}if(_0x1739c6[_0x35a28c(0x23c)]=!0x0,_0x55a62b&&(_0x1739c6[_0x35a28c(0x23a)]=!0x0),!_0x18b048){var _0x155fac=[][_0x35a28c(0x219)](this['_getOwnPropertyNames'](_0x261664))['concat'](this[_0x35a28c(0x1f9)](_0x261664));for(_0x4abe4f=0x0,_0x4d7716=_0x155fac[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)if(_0x107b8f=_0x155fac[_0x4abe4f],!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f['toString']()))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)&&!_0x1739c6[_0x35a28c(0x214)+_0x107b8f[_0x35a28c(0x225)]()]){if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;break;}_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}}}}if(_0x1ffbdf[_0x35a28c(0x2b1)]=_0x1a262d,_0x164aa8?(_0x1ffbdf[_0x35a28c(0x1e7)]=_0x261664[_0x35a28c(0x270)](),this[_0x35a28c(0x20e)](_0x1a262d,_0x1ffbdf,_0x1119b9,_0x220a1b)):_0x1a262d===_0x35a28c(0x1e4)?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x27b)][_0x35a28c(0x25b)](_0x261664):_0x1a262d===_0x35a28c(0x205)?_0x1ffbdf[_0x35a28c(0x1e7)]=this['_regExpToString']['call'](_0x261664):_0x1a262d===_0x35a28c(0x2bd)&&this['_Symbol']?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x222)][_0x35a28c(0x1eb)][_0x35a28c(0x225)][_0x35a28c(0x25b)](_0x261664):!_0x1119b9[_0x35a28c(0x224)]&&!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&(delete _0x1ffbdf[_0x35a28c(0x1e7)],_0x1ffbdf[_0x35a28c(0x25c)]=!0x0),_0x18b048&&(_0x1ffbdf[_0x35a28c(0x28b)]=!0x0),_0x1c9374=_0x1119b9[_0x35a28c(0x287)]['current'],_0x1119b9[_0x35a28c(0x287)][_0x35a28c(0x24a)]=_0x1ffbdf,this[_0x35a28c(0x1fa)](_0x1ffbdf,_0x1119b9),_0x2e94bd[_0x35a28c(0x24b)]){for(_0x4abe4f=0x0,_0x4d7716=_0x2e94bd[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)_0x2e94bd[_0x4abe4f](_0x4abe4f);}_0x4c3fd8[_0x35a28c(0x24b)]&&(_0x1ffbdf['props']=_0x4c3fd8);}catch(_0x5acfee){_0x3e7ce9(_0x5acfee,_0x1ffbdf,_0x1119b9);}return this[_0x35a28c(0x233)](_0x261664,_0x1ffbdf),this[_0x35a28c(0x239)](_0x1ffbdf,_0x1119b9),_0x1119b9['node'][_0x35a28c(0x24a)]=_0x1c9374,_0x1119b9[_0x35a28c(0x238)]--,_0x1119b9['autoExpand']=_0xb5b34f,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9['autoExpandPreviousObjects']['pop'](),_0x1ffbdf;}[_0xaf924a(0x1f9)](_0x26b81e){var _0x33466c=_0xaf924a;return Object[_0x33466c(0x20c)]?Object[_0x33466c(0x20c)](_0x26b81e):[];}[_0xaf924a(0x26b)](_0x3fbc47){var _0x1986bd=_0xaf924a;return!!(_0x3fbc47&&_0x49b204[_0x1986bd(0x26f)]&&this[_0x1986bd(0x2b4)](_0x3fbc47)===_0x1986bd(0x258)&&_0x3fbc47[_0x1986bd(0x262)]);}[_0xaf924a(0x211)](_0x1ab315,_0x21ebf2,_0x470340){var _0x48210a=_0xaf924a;return _0x470340[_0x48210a(0x29b)]?typeof _0x1ab315[_0x21ebf2]==_0x48210a(0x293):!0x1;}['_type'](_0x5dcb54){var _0x3d62dd=_0xaf924a,_0x2fc396='';return _0x2fc396=typeof _0x5dcb54,_0x2fc396==='object'?this['_objectToString'](_0x5dcb54)===_0x3d62dd(0x294)?_0x2fc396=_0x3d62dd(0x291):this[_0x3d62dd(0x2b4)](_0x5dcb54)===_0x3d62dd(0x29e)?_0x2fc396=_0x3d62dd(0x1e4):_0x5dcb54===null?_0x2fc396='null':_0x5dcb54[_0x3d62dd(0x274)]&&(_0x2fc396=_0x5dcb54['constructor'][_0x3d62dd(0x1f4)]||_0x2fc396):_0x2fc396===_0x3d62dd(0x1fe)&&this['_HTMLAllCollection']&&_0x5dcb54 instanceof this[_0x3d62dd(0x2c7)]&&(_0x2fc396=_0x3d62dd(0x255)),_0x2fc396;}['_objectToString'](_0x141c18){var _0x3ac2dc=_0xaf924a;return Object['prototype'][_0x3ac2dc(0x225)][_0x3ac2dc(0x25b)](_0x141c18);}[_0xaf924a(0x213)](_0x5a457d){var _0x597d85=_0xaf924a;return _0x5a457d===_0x597d85(0x2bc)||_0x5a457d===_0x597d85(0x228)||_0x5a457d===_0x597d85(0x268);}[_0xaf924a(0x2c6)](_0x5898cf){var _0x3157c0=_0xaf924a;return _0x5898cf===_0x3157c0(0x261)||_0x5898cf===_0x3157c0(0x203)||_0x5898cf==='Number';}['_addProperty'](_0x5245f8,_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048){var _0x4f3373=this;return function(_0x6f86d0){var _0x55b709=_0x40be,_0x497a8c=_0x34b2c2[_0x55b709(0x287)]['current'],_0x401bcb=_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)],_0x4e8dba=_0x34b2c2['node'][_0x55b709(0x271)];_0x34b2c2[_0x55b709(0x287)]['parent']=_0x497a8c,_0x34b2c2[_0x55b709(0x287)]['index']=typeof _0x2ef032==_0x55b709(0x268)?_0x2ef032:_0x6f86d0,_0x5245f8['push'](_0x4f3373[_0x55b709(0x24f)](_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048)),_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x271)]=_0x4e8dba,_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)]=_0x401bcb;};}[_0xaf924a(0x1f3)](_0x1d7c25,_0x5b8b24,_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3){var _0xd780f0=_0xaf924a,_0x8addf0=this;return _0x5b8b24[_0xd780f0(0x214)+_0x1e6ee4[_0xd780f0(0x225)]()]=!0x0,function(_0x239d6b){var _0x1443cd=_0xd780f0,_0x4df5e1=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x24a)],_0x540e10=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)],_0x2915bc=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)];_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)]=_0x4df5e1,_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)]=_0x239d6b,_0x1d7c25[_0x1443cd(0x29c)](_0x8addf0[_0x1443cd(0x24f)](_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3)),_0x3b78cf['node'][_0x1443cd(0x271)]=_0x2915bc,_0x3b78cf[_0x1443cd(0x287)]['index']=_0x540e10;};}[_0xaf924a(0x24f)](_0x2dc156,_0x84e3c9,_0x3d7e0f,_0x50afce,_0x126c84){var _0x8fb306=_0xaf924a,_0x57d1bb=this;_0x126c84||(_0x126c84=function(_0x277ab9,_0x4edfaa){return _0x277ab9[_0x4edfaa];});var _0x4d7cfe=_0x3d7e0f[_0x8fb306(0x225)](),_0x338741=_0x50afce[_0x8fb306(0x1f8)]||{},_0x135349=_0x50afce[_0x8fb306(0x224)],_0x3fc65a=_0x50afce[_0x8fb306(0x27f)];try{var _0x141963=this['_isMap'](_0x2dc156),_0x31060d=_0x4d7cfe;_0x141963&&_0x31060d[0x0]==='\\x27'&&(_0x31060d=_0x31060d['substr'](0x1,_0x31060d['length']-0x2));var _0x2b079a=_0x50afce[_0x8fb306(0x1f8)]=_0x338741['_p_'+_0x31060d];_0x2b079a&&(_0x50afce[_0x8fb306(0x224)]=_0x50afce['depth']+0x1),_0x50afce[_0x8fb306(0x27f)]=!!_0x2b079a;var _0x15c8b0=typeof _0x3d7e0f=='symbol',_0x24ddbc={'name':_0x15c8b0||_0x141963?_0x4d7cfe:this[_0x8fb306(0x275)](_0x4d7cfe)};if(_0x15c8b0&&(_0x24ddbc[_0x8fb306(0x2bd)]=!0x0),!(_0x84e3c9===_0x8fb306(0x291)||_0x84e3c9==='Error')){var _0x431848=this[_0x8fb306(0x27d)](_0x2dc156,_0x3d7e0f);if(_0x431848&&(_0x431848[_0x8fb306(0x1ea)]&&(_0x24ddbc[_0x8fb306(0x21c)]=!0x0),_0x431848['get']&&!_0x2b079a&&!_0x50afce[_0x8fb306(0x253)]))return _0x24ddbc[_0x8fb306(0x279)]=!0x0,this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x2b3202;try{_0x2b3202=_0x126c84(_0x2dc156,_0x3d7e0f);}catch(_0x14b48e){return _0x24ddbc={'name':_0x4d7cfe,'type':'unknown','error':_0x14b48e[_0x8fb306(0x1ef)]},this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x41dc6b=this['_type'](_0x2b3202),_0x40b8f0=this[_0x8fb306(0x213)](_0x41dc6b);if(_0x24ddbc[_0x8fb306(0x2b1)]=_0x41dc6b,_0x40b8f0)this['_processTreeNodeResult'](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x559389=_0x8fb306;_0x24ddbc['value']=_0x2b3202[_0x559389(0x270)](),!_0x2b079a&&_0x57d1bb['_capIfString'](_0x41dc6b,_0x24ddbc,_0x50afce,{});});else{var _0x57f4f8=_0x50afce[_0x8fb306(0x23d)]&&_0x50afce[_0x8fb306(0x238)]<_0x50afce['autoExpandMaxDepth']&&_0x50afce[_0x8fb306(0x2ad)]['indexOf'](_0x2b3202)<0x0&&_0x41dc6b!==_0x8fb306(0x293)&&_0x50afce[_0x8fb306(0x1e5)]<_0x50afce[_0x8fb306(0x2c2)];_0x57f4f8||_0x50afce[_0x8fb306(0x238)]<_0x135349||_0x2b079a?(this[_0x8fb306(0x254)](_0x24ddbc,_0x2b3202,_0x50afce,_0x2b079a||{}),this[_0x8fb306(0x233)](_0x2b3202,_0x24ddbc)):this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x267210=_0x8fb306;_0x41dc6b===_0x267210(0x22d)||_0x41dc6b===_0x267210(0x1fe)||(delete _0x24ddbc[_0x267210(0x1e7)],_0x24ddbc[_0x267210(0x25c)]=!0x0);});}return _0x24ddbc;}finally{_0x50afce['expressionsToEvaluate']=_0x338741,_0x50afce[_0x8fb306(0x224)]=_0x135349,_0x50afce[_0x8fb306(0x27f)]=_0x3fc65a;}}[_0xaf924a(0x20e)](_0x4b62bd,_0xc40a6,_0x76d4db,_0x1bb854){var _0x2b20d2=_0xaf924a,_0x48134b=_0x1bb854['strLength']||_0x76d4db[_0x2b20d2(0x278)];if((_0x4b62bd===_0x2b20d2(0x228)||_0x4b62bd==='String')&&_0xc40a6[_0x2b20d2(0x1e7)]){let _0x489af6=_0xc40a6['value'][_0x2b20d2(0x24b)];_0x76d4db['allStrLength']+=_0x489af6,_0x76d4db[_0x2b20d2(0x236)]>_0x76d4db[_0x2b20d2(0x24e)]?(_0xc40a6[_0x2b20d2(0x25c)]='',delete _0xc40a6['value']):_0x489af6>_0x48134b&&(_0xc40a6['capped']=_0xc40a6[_0x2b20d2(0x1e7)][_0x2b20d2(0x215)](0x0,_0x48134b),delete _0xc40a6[_0x2b20d2(0x1e7)]);}}['_isMap'](_0x137793){var _0x274dce=_0xaf924a;return!!(_0x137793&&_0x49b204['Map']&&this[_0x274dce(0x2b4)](_0x137793)===_0x274dce(0x28c)&&_0x137793[_0x274dce(0x262)]);}[_0xaf924a(0x275)](_0x3b398f){var _0x3414c6=_0xaf924a;if(_0x3b398f[_0x3414c6(0x1e3)](/^\\d+$/))return _0x3b398f;var _0x3a961e;try{_0x3a961e=JSON['stringify'](''+_0x3b398f);}catch{_0x3a961e='\\x22'+this[_0x3414c6(0x2b4)](_0x3b398f)+'\\x22';}return _0x3a961e['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x3a961e=_0x3a961e[_0x3414c6(0x215)](0x1,_0x3a961e['length']-0x2):_0x3a961e=_0x3a961e['replace'](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x3a961e;}['_processTreeNodeResult'](_0x494cf3,_0x3a7130,_0x2965bb,_0x4ed090){var _0x1fc133=_0xaf924a;this[_0x1fc133(0x1fa)](_0x494cf3,_0x3a7130),_0x4ed090&&_0x4ed090(),this[_0x1fc133(0x233)](_0x2965bb,_0x494cf3),this[_0x1fc133(0x239)](_0x494cf3,_0x3a7130);}[_0xaf924a(0x1fa)](_0x8a70e8,_0x172dc9){var _0x5bfd95=_0xaf924a;this['_setNodeId'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x1f7)](_0x8a70e8,_0x172dc9),this['_setNodeExpressionPath'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x2a3)](_0x8a70e8,_0x172dc9);}[_0xaf924a(0x220)](_0x1021a5,_0x494447){}['_setNodeQueryPath'](_0x20ad16,_0x5f3886){}[_0xaf924a(0x20f)](_0x13a7a7,_0x54f993){}['_isUndefined'](_0x310d6f){return _0x310d6f===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x43c671,_0x48f11a){var _0x321c60=_0xaf924a;this[_0x321c60(0x20f)](_0x43c671,_0x48f11a),this['_setNodeExpandableState'](_0x43c671),_0x48f11a[_0x321c60(0x241)]&&this[_0x321c60(0x2a4)](_0x43c671),this[_0x321c60(0x21e)](_0x43c671,_0x48f11a),this['_addLoadNode'](_0x43c671,_0x48f11a),this[_0x321c60(0x282)](_0x43c671);}[_0xaf924a(0x233)](_0x226191,_0x58f6f1){var _0x43a02f=_0xaf924a;try{_0x226191&&typeof _0x226191[_0x43a02f(0x24b)]==_0x43a02f(0x268)&&(_0x58f6f1['length']=_0x226191[_0x43a02f(0x24b)]);}catch{}if(_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x268)||_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x200)){if(isNaN(_0x58f6f1[_0x43a02f(0x1e7)]))_0x58f6f1['nan']=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];else switch(_0x58f6f1[_0x43a02f(0x1e7)]){case Number['POSITIVE_INFINITY']:_0x58f6f1[_0x43a02f(0x29a)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case Number[_0x43a02f(0x23e)]:_0x58f6f1[_0x43a02f(0x1ec)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case 0x0:this[_0x43a02f(0x292)](_0x58f6f1[_0x43a02f(0x1e7)])&&(_0x58f6f1[_0x43a02f(0x2b6)]=!0x0);break;}}else _0x58f6f1['type']==='function'&&typeof _0x226191[_0x43a02f(0x1f4)]==_0x43a02f(0x228)&&_0x226191[_0x43a02f(0x1f4)]&&_0x58f6f1[_0x43a02f(0x1f4)]&&_0x226191['name']!==_0x58f6f1[_0x43a02f(0x1f4)]&&(_0x58f6f1['funcName']=_0x226191[_0x43a02f(0x1f4)]);}[_0xaf924a(0x292)](_0x99e5d7){var _0x5af86c=_0xaf924a;return 0x1/_0x99e5d7===Number[_0x5af86c(0x23e)];}[_0xaf924a(0x2a4)](_0x4da140){var _0x59d583=_0xaf924a;!_0x4da140[_0x59d583(0x299)]||!_0x4da140['props'][_0x59d583(0x24b)]||_0x4da140['type']===_0x59d583(0x291)||_0x4da140[_0x59d583(0x2b1)]===_0x59d583(0x250)||_0x4da140['type']===_0x59d583(0x26f)||_0x4da140[_0x59d583(0x299)][_0x59d583(0x223)](function(_0x2bca0f,_0x6aada0){var _0x433cc9=_0x59d583,_0x220ffd=_0x2bca0f[_0x433cc9(0x1f4)][_0x433cc9(0x277)](),_0x52a25d=_0x6aada0[_0x433cc9(0x1f4)][_0x433cc9(0x277)]();return _0x220ffd<_0x52a25d?-0x1:_0x220ffd>_0x52a25d?0x1:0x0;});}[_0xaf924a(0x21e)](_0x48dce4,_0x48f4c6){var _0x2678d7=_0xaf924a;if(!(_0x48f4c6['noFunctions']||!_0x48dce4[_0x2678d7(0x299)]||!_0x48dce4[_0x2678d7(0x299)]['length'])){for(var _0x279f85=[],_0x27fbf8=[],_0x58bb24=0x0,_0x1abc8f=_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x24b)];_0x58bb24<_0x1abc8f;_0x58bb24++){var _0x3caeb2=_0x48dce4['props'][_0x58bb24];_0x3caeb2[_0x2678d7(0x2b1)]===_0x2678d7(0x293)?_0x279f85[_0x2678d7(0x29c)](_0x3caeb2):_0x27fbf8[_0x2678d7(0x29c)](_0x3caeb2);}if(!(!_0x27fbf8[_0x2678d7(0x24b)]||_0x279f85[_0x2678d7(0x24b)]<=0x1)){_0x48dce4[_0x2678d7(0x299)]=_0x27fbf8;var _0xe3d941={'functionsNode':!0x0,'props':_0x279f85};this[_0x2678d7(0x220)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x20f)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x295)](_0xe3d941),this['_setNodePermissions'](_0xe3d941,_0x48f4c6),_0xe3d941['id']+='\\x20f',_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x28a)](_0xe3d941);}}}[_0xaf924a(0x2be)](_0x48eb38,_0x20f75c){}[_0xaf924a(0x295)](_0x129122){}[_0xaf924a(0x26a)](_0x1f6bb8){var _0x2820a2=_0xaf924a;return Array[_0x2820a2(0x208)](_0x1f6bb8)||typeof _0x1f6bb8==_0x2820a2(0x1ed)&&this[_0x2820a2(0x2b4)](_0x1f6bb8)===_0x2820a2(0x294);}[_0xaf924a(0x2a3)](_0x1ea391,_0x8f50b2){}['_cleanNode'](_0x52cd26){var _0x498c91=_0xaf924a;delete _0x52cd26[_0x498c91(0x22f)],delete _0x52cd26['_hasSetOnItsPath'],delete _0x52cd26[_0x498c91(0x235)];}[_0xaf924a(0x28f)](_0x5c8a9c,_0x31124f){}[_0xaf924a(0x286)](_0x2f7a58){var _0x397561=_0xaf924a;return _0x2f7a58?_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x1fc)])?'['+_0x2f7a58+']':_0x2f7a58[_0x397561(0x1e3)](this['_keyStrRegExp'])?'.'+_0x2f7a58:_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x226)])?'['+_0x2f7a58+']':'[\\x27'+_0x2f7a58+'\\x27]':'';}}let _0x3fbb82=new _0x3ea185();function _0x195f4e(_0x20dbd1,_0x567217,_0x7b3f99,_0x256338,_0x381038,_0xb947b4){var _0x5299ea=_0xaf924a;let _0xc570be,_0x171851;try{_0x171851=_0x4a93d3(),_0xc570be=_0x47a49a[_0x567217],!_0xc570be||_0x171851-_0xc570be['ts']>0x1f4&&_0xc570be[_0x5299ea(0x272)]&&_0xc570be['time']/_0xc570be[_0x5299ea(0x272)]<0x64?(_0x47a49a[_0x567217]=_0xc570be={'count':0x0,'time':0x0,'ts':_0x171851},_0x47a49a[_0x5299ea(0x25f)]={}):_0x171851-_0x47a49a[_0x5299ea(0x25f)]['ts']>0x32&&_0x47a49a['hits']['count']&&_0x47a49a[_0x5299ea(0x25f)]['time']/_0x47a49a['hits'][_0x5299ea(0x272)]<0x64&&(_0x47a49a[_0x5299ea(0x25f)]={});let _0x4ea285=[],_0x56b786=_0xc570be['reduceLimits']||_0x47a49a['hits'][_0x5299ea(0x2a5)]?_0x5b35fa:_0xf0b388,_0x3563e3=_0x51e7d1=>{var _0x2491a0=_0x5299ea;let _0x26ab25={};return _0x26ab25[_0x2491a0(0x299)]=_0x51e7d1[_0x2491a0(0x299)],_0x26ab25['elements']=_0x51e7d1['elements'],_0x26ab25['strLength']=_0x51e7d1['strLength'],_0x26ab25[_0x2491a0(0x24e)]=_0x51e7d1[_0x2491a0(0x24e)],_0x26ab25[_0x2491a0(0x2c2)]=_0x51e7d1[_0x2491a0(0x2c2)],_0x26ab25['autoExpandMaxDepth']=_0x51e7d1[_0x2491a0(0x1fd)],_0x26ab25[_0x2491a0(0x241)]=!0x1,_0x26ab25[_0x2491a0(0x29b)]=!_0x40492c,_0x26ab25[_0x2491a0(0x224)]=0x1,_0x26ab25[_0x2491a0(0x238)]=0x0,_0x26ab25[_0x2491a0(0x263)]=_0x2491a0(0x29f),_0x26ab25['rootExpression']='root_exp',_0x26ab25['autoExpand']=!0x0,_0x26ab25[_0x2491a0(0x2ad)]=[],_0x26ab25[_0x2491a0(0x1e5)]=0x0,_0x26ab25[_0x2491a0(0x253)]=!0x0,_0x26ab25['allStrLength']=0x0,_0x26ab25[_0x2491a0(0x287)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x26ab25;};for(var _0x35907a=0x0;_0x35907a<_0x381038[_0x5299ea(0x24b)];_0x35907a++)_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82['serialize']({'timeNode':_0x20dbd1===_0x5299ea(0x201)||void 0x0},_0x381038[_0x35907a],_0x3563e3(_0x56b786),{}));if(_0x20dbd1===_0x5299ea(0x2aa)){let _0xecc6de=Error[_0x5299ea(0x1f5)];try{Error[_0x5299ea(0x1f5)]=0x1/0x0,_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82[_0x5299ea(0x254)]({'stackNode':!0x0},new Error()[_0x5299ea(0x260)],_0x3563e3(_0x56b786),{'strLength':0x1/0x0}));}finally{Error[_0x5299ea(0x1f5)]=_0xecc6de;}}return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':_0x4ea285,'id':_0x567217,'context':_0xb947b4}]};}catch(_0xeea157){return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':[{'type':_0x5299ea(0x1ff),'error':_0xeea157&&_0xeea157[_0x5299ea(0x1ef)]}],'id':_0x567217,'context':_0xb947b4}]};}finally{try{if(_0xc570be&&_0x171851){let _0x5613c6=_0x4a93d3();_0xc570be[_0x5299ea(0x272)]++,_0xc570be['time']+=_0x254ab2(_0x171851,_0x5613c6),_0xc570be['ts']=_0x5613c6,_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]++,_0x47a49a['hits']['time']+=_0x254ab2(_0x171851,_0x5613c6),_0x47a49a[_0x5299ea(0x25f)]['ts']=_0x5613c6,(_0xc570be['count']>0x32||_0xc570be[_0x5299ea(0x201)]>0x64)&&(_0xc570be[_0x5299ea(0x2a5)]=!0x0),(_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]>0x3e8||_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x201)]>0x12c)&&(_0x47a49a['hits'][_0x5299ea(0x2a5)]=!0x0);}}catch{}}}return _0x49b204[_0xaf924a(0x243)];})(globalThis,_0x2cf5cd(0x1e6),_0x2cf5cd(0x21b),_0x2cf5cd(0x256),_0x2cf5cd(0x28d),_0x2cf5cd(0x265),_0x2cf5cd(0x24c),["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.7"],'');`
      )
    );
  } catch {}
}
function oo_oo8(i, ...v) {
  try {
    oo_cm8().consoleLog(i, v);
  } catch {}
  return v;
}

// app/routes/api.text.tsx
var api_text_exports = {};
__export(api_text_exports, {
  action: () => action10,
  loader: () => loader8,
});
var import_react_router4 = require('react-router');
var import_diff_match_patch2 = __toESM(require('diff-match-patch'));
var loader8 = async ({ request }) => {
    let textId = new URL(request.url).searchParams.get('textId') ?? '',
      text = await findTextByTextId(parseInt(textId), !0);
    return (0, import_react_router4.json)(text);
  },
  action10 = async ({ request }) => {
    let data = await request.formData(),
      user = await getUserSession(request),
      dmp = new import_diff_match_patch2.default(),
      patchString = data.get('patch'),
      patch = dmp.patch_fromText(JSON.parse(patchString)),
      id = data.get('id'),
      text = await findTextByTextId(parseInt(id), !0),
      [newText, result] = dmp.patch_apply(patch, text.content);
    try {
      if (result.every((element) => element === !0)) {
        let res = await updateText(parseInt(id), newText);
        return await trigetPusherUpdate_server_default(user, parseInt(id)), res;
      }
      return null;
    } catch {
      return !1;
    }
  };

// app/routes/text.$id.tsx
var text_id_exports = {};
__export(text_id_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  default: () => text_id_default,
  links: () => links2,
  loader: () => loader9,
  meta: () => meta2,
});
var import_node9 = require('@remix-run/node'),
  import_react33 = require('@remix-run/react'),
  import_react34 = require('react');
var import_recoil11 = require('recoil'),
  import_react35 = require('@tiptap/react');

// app/features/Editor/tiptap/index.ts
var import_extension_paragraph = __toESM(require('@tiptap/extension-paragraph')),
  import_extension_document = __toESM(require('@tiptap/extension-document')),
  import_extension_text = __toESM(require('@tiptap/extension-text')),
  import_extension_bold = __toESM(require('@tiptap/extension-bold')),
  import_extension_hard_break = __toESM(require('@tiptap/extension-hard-break')),
  import_extension_highlight = __toESM(require('@tiptap/extension-highlight')),
  import_extension_text_style = __toESM(require('@tiptap/extension-text-style')),
  import_extension_font_family = __toESM(require('@tiptap/extension-font-family'));

// app/features/Editor/tiptap/tiptap-extension/suggestion.ts
var import_core = require('@tiptap/core'),
  import_prosemirror_state = require('prosemirror-state'),
  replace = (replace2, editor, dispatch) => {
    dispatch(editor.state.tr.insertText(replace2, 1, 3));
  },
  Suggestion = (setter) =>
    import_core.Mark.create({
      name: 'suggestion',
      addOptions() {
        return {
          multicolor: !1,
          HTMLAttributes: {},
        };
      },
      addAttributes() {
        return {
          color: {
            default: null,
            parseHTML: (element) => element.getAttribute('data-color') || element.style.backgroundColor,
            renderHTML: (attributes) =>
              attributes.color
                ? {
                    'data-color': attributes.color,
                    style: `background-color: ${attributes.color}; color: inherit`,
                  }
                : {},
          },
          id: {
            default: null,
            parseHTML: (element) => element.getAttribute('id'),
            renderHTML: (attributes) => ({
              id: attributes.id,
            }),
          },
          original: {
            default: null,
            parseHTML: (element) => element.getAttribute('original'),
            renderHTML: (attributes) => ({
              original: attributes.original,
            }),
          },
        };
      },
      parseHTML() {
        return [
          {
            tag: 'suggestion',
          },
        ];
      },
      renderHTML({ HTMLAttributes }) {
        return ['suggestion', (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
      },
      addCommands() {
        return {
          setSuggestion:
            (attributes) =>
            ({ commands }) =>
              commands.setMark(this.name, attributes),
          toggleSuggestion:
            (attributes) =>
            ({ commands }) =>
              commands.toggleMark(this.name, attributes),
          unsetSuggestion:
            () =>
            ({ commands }) =>
              commands.unsetMark(this.name),
          replaceSuggestion:
            (term) =>
            ({ editor, dispatch }) => (replace(term, editor, dispatch), !1),
        };
      },
      addProseMirrorPlugins() {
        return [
          new import_prosemirror_state.Plugin({
            props: {
              handleClick(view, pos, event) {
                let { schema, doc, tr } = view.state,
                  range = (0, import_core.getMarkRange)(doc.resolve(pos), schema.marks.suggestion);
                if (!range) return !1;
                let clickedNode = event.target;
                setter(clickedNode == null ? void 0 : clickedNode.id);
                let [$start, $end] = [doc.resolve(range.from), doc.resolve(range.to)];
                return view.dispatch(tr.setSelection(new import_prosemirror_state.TextSelection($start, $end))), !0;
              },
            },
          }),
        ];
      },
    });

// app/features/Editor/tiptap/tiptap-extension/postMark.ts
var import_core2 = require('@tiptap/core'),
  import_prosemirror_state2 = require('prosemirror-state'),
  PostMark = (setter) =>
    import_core2.Mark.create({
      name: 'post',
      addOptions() {
        return {
          multicolor: !1,
          HTMLAttributes: {},
        };
      },
      addAttributes() {
        return {
          color: {
            default: null,
            parseHTML: (element) => element.getAttribute('data-color') || element.style.backgroundColor,
            renderHTML: (attributes) =>
              attributes.color
                ? {
                    'data-color': attributes.color,
                    style: `background-color: ${attributes.color}; color: inherit`,
                  }
                : {},
          },
          id: {
            default: null,
            parseHTML: (element) => element.getAttribute('id'),
            renderHTML: (attributes) => ({
              id: attributes.id,
            }),
          },
        };
      },
      parseHTML() {
        return [
          {
            tag: 'post',
          },
        ];
      },
      renderHTML({ HTMLAttributes }) {
        return ['post', (0, import_core2.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
      },
      addCommands() {
        return {
          setPost:
            (attributes) =>
            ({ commands }) =>
              commands.setMark(this.name, attributes),
          togglePost:
            (attributes) =>
            ({ commands }) =>
              commands.toggleMark(this.name, attributes),
          unsetPost:
            () =>
            ({ commands }) =>
              commands.unsetMark(this.name),
        };
      },
      addProseMirrorPlugins() {
        return [
          new import_prosemirror_state2.Plugin({
            props: {
              handleClick(view, pos, event) {
                let { schema, doc, tr } = view.state,
                  range = (0, import_core2.getMarkRange)(doc.resolve(pos), schema.marks.post);
                if (!range) return !1;
                let clickedNode = event.target;
                setter(clickedNode == null ? void 0 : clickedNode.id);
                let [$start, $end] = [doc.resolve(range.from), doc.resolve(range.to)];
                return view.dispatch(tr.setSelection(new import_prosemirror_state2.TextSelection($start, $end))), !0;
              },
            },
          }),
        ];
      },
    }),
  postMark_default = PostMark;

// app/features/Editor/tiptap/tiptap-extension/searchAndReplace.ts
var import_core3 = require('@tiptap/core'),
  import_prosemirror_view = require('prosemirror-view'),
  import_prosemirror_state3 = require('prosemirror-state'),
  getRegex = (s, disableRegex, caseSensitive) =>
    RegExp(disableRegex ? s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') : s, caseSensitive ? 'gu' : 'gui');
function processSearches(doc, searchTerm, searchResultClass) {
  let decorations = [],
    textNodesWithPosition = [],
    results = [],
    index = 0;
  if (!searchTerm) return { decorationsToReturn: import_prosemirror_view.DecorationSet.empty, results: [] };
  doc == null ||
    doc.descendants((node, pos) => {
      node.isText
        ? textNodesWithPosition[index]
          ? (textNodesWithPosition[index] = {
              text: textNodesWithPosition[index].text + node.text,
              pos: textNodesWithPosition[index].pos,
            })
          : (textNodesWithPosition[index] = {
              text: `${node.text}`,
              pos,
            })
        : (index += 1);
    }),
    (textNodesWithPosition = textNodesWithPosition.filter(Boolean));
  for (let i = 0; i < textNodesWithPosition.length; i += 1) {
    let { text, pos } = textNodesWithPosition[i],
      matches = Array.from(text.matchAll(searchTerm)).filter(([matchText]) => matchText.trim());
    for (let j = 0; j < matches.length; j += 1) {
      let m = matches[j];
      if (m[0] === '') break;
      m.index !== void 0 &&
        results.push({
          from: pos + m.index,
          to: pos + m.index + m[0].length,
        });
    }
  }
  for (let i = 0; i < results.length; i += 1) {
    let r = results[i];
    decorations.push(import_prosemirror_view.Decoration.inline(r.from, r.to, { class: searchResultClass }));
  }
  return {
    decorationsToReturn: import_prosemirror_view.DecorationSet.create(doc, decorations),
    results,
  };
}
var searchAndReplacePluginKey = new import_prosemirror_state3.PluginKey('searchAndReplacePlugin'),
  SearchAndReplace = import_core3.Extension.create({
    name: 'searchAndReplace',
    addOptions() {
      return {
        searchResultClass: 'search-result',
        caseSensitive: !1,
        disableRegex: !1,
      };
    },
    addStorage() {
      return {
        searchTerm: '',
        replaceTerm: '',
        results: [],
        lastSearchTerm: '',
      };
    },
    addCommands() {
      return {
        setSearchTerm:
          (searchTerm) =>
          ({ editor }) => ((editor.storage.searchAndReplace.searchTerm = searchTerm), !1),
        setReplaceTerm:
          (replaceTerm) =>
          ({ editor }) => ((editor.storage.searchAndReplace.replaceTerm = replaceTerm), !1),
      };
    },
    addProseMirrorPlugins() {
      let editor = this.editor,
        { searchResultClass, disableRegex, caseSensitive } = this.options,
        setLastSearchTerm = (t) => (editor.storage.searchAndReplace.lastSearchTerm = t);
      return [
        new import_prosemirror_state3.Plugin({
          key: searchAndReplacePluginKey,
          state: {
            init: () => import_prosemirror_view.DecorationSet.empty,
            apply({ doc, docChanged }, oldState) {
              let { searchTerm, lastSearchTerm } = editor.storage.searchAndReplace;
              if (!docChanged && lastSearchTerm === searchTerm) return oldState;
              if ((setLastSearchTerm(searchTerm), !searchTerm)) return import_prosemirror_view.DecorationSet.empty;
              let { decorationsToReturn, results } = processSearches(
                doc,
                getRegex(searchTerm, disableRegex, caseSensitive),
                searchResultClass
              );
              return (editor.storage.searchAndReplace.results = results), decorationsToReturn;
            },
          },
          props: {
            decorations(state) {
              return this.getState(state);
            },
          },
        }),
      ];
    },
  });

// app/features/Editor/tiptap/events.ts
var handleDOMEvents = {
    keydown: (v, event) => {
      let charCode = String.fromCharCode(event.which).toLowerCase(),
        copyPressed = (event.ctrlKey || event.metaKey) && charCode === 'c';
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
      event.preventDefault(), console.log(...oo_oo9('1568a20d_0', v));
    },
  },
  editorProps = {
    handleDOMEvents,
    attributes: {
      inputmode: 'none',
    },
  },
  events_default = editorProps;
function oo_cm9() {
  try {
    return (
      (0, eval)('globalThis._console_ninja') ||
      (0, eval)(
        `/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2cf5cd=_0x40be;(function(_0x582a6d,_0x326ed6){var _0x274fa5=_0x40be,_0x4e6359=_0x582a6d();while(!![]){try{var _0x36ca3c=parseInt(_0x274fa5(0x240))/0x1+parseInt(_0x274fa5(0x2bf))/0x2*(parseInt(_0x274fa5(0x27c))/0x3)+parseInt(_0x274fa5(0x1f0))/0x4*(parseInt(_0x274fa5(0x288))/0x5)+parseInt(_0x274fa5(0x1ee))/0x6+parseInt(_0x274fa5(0x2b9))/0x7*(parseInt(_0x274fa5(0x20b))/0x8)+parseInt(_0x274fa5(0x269))/0x9*(parseInt(_0x274fa5(0x289))/0xa)+-parseInt(_0x274fa5(0x20a))/0xb;if(_0x36ca3c===_0x326ed6)break;else _0x4e6359['push'](_0x4e6359['shift']());}catch(_0x19d0c6){_0x4e6359['push'](_0x4e6359['shift']());}}}(_0x2a98,0xda71d));var ue=Object[_0x2cf5cd(0x21d)],te=Object[_0x2cf5cd(0x2ae)],he=Object[_0x2cf5cd(0x21f)],le=Object['getOwnPropertyNames'],fe=Object['getPrototypeOf'],_e=Object['prototype'][_0x2cf5cd(0x1e8)],pe=(_0x25f11f,_0x357847,_0x2ae353,_0x3d8e2d)=>{var _0x44b478=_0x2cf5cd;if(_0x357847&&typeof _0x357847=='object'||typeof _0x357847==_0x44b478(0x293)){for(let _0x4a4651 of le(_0x357847))!_e['call'](_0x25f11f,_0x4a4651)&&_0x4a4651!==_0x2ae353&&te(_0x25f11f,_0x4a4651,{'get':()=>_0x357847[_0x4a4651],'enumerable':!(_0x3d8e2d=he(_0x357847,_0x4a4651))||_0x3d8e2d['enumerable']});}return _0x25f11f;},ne=(_0x806e83,_0x70843c,_0x15e02d)=>(_0x15e02d=_0x806e83!=null?ue(fe(_0x806e83)):{},pe(_0x70843c||!_0x806e83||!_0x806e83[_0x2cf5cd(0x25e)]?te(_0x15e02d,_0x2cf5cd(0x266),{'value':_0x806e83,'enumerable':!0x0}):_0x15e02d,_0x806e83)),Q=class{constructor(_0x59b92d,_0x2a3a9d,_0x559130,_0x18aff8){var _0x19135f=_0x2cf5cd;this[_0x19135f(0x273)]=_0x59b92d,this[_0x19135f(0x244)]=_0x2a3a9d,this[_0x19135f(0x26d)]=_0x559130,this[_0x19135f(0x2a1)]=_0x18aff8,this[_0x19135f(0x1f6)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x19135f(0x207)]=!0x1,this['_connecting']=!0x1,this[_0x19135f(0x246)]=!!this['global'][_0x19135f(0x26c)],this[_0x19135f(0x28e)]=null,this[_0x19135f(0x296)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_sendErrorMessage']=this[_0x19135f(0x246)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help':_0x19135f(0x210);}async[_0x2cf5cd(0x25d)](){var _0x423475=_0x2cf5cd;if(this['_WebSocketClass'])return this[_0x423475(0x28e)];let _0x28fd87;if(this['_inBrowser'])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x26c)];else{if(this[_0x423475(0x273)][_0x423475(0x2a2)]?.[_0x423475(0x22e)])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x2a2)]?.['_WebSocket'];else try{let _0x4e350b=await import(_0x423475(0x26e));_0x28fd87=(await import((await import(_0x423475(0x280)))[_0x423475(0x242)](_0x4e350b[_0x423475(0x252)](this[_0x423475(0x2a1)],_0x423475(0x245)))[_0x423475(0x225)]()))['default'];}catch{try{_0x28fd87=require(require(_0x423475(0x26e))[_0x423475(0x252)](this[_0x423475(0x2a1)],'ws'));}catch{throw new Error(_0x423475(0x247));}}}return this[_0x423475(0x28e)]=_0x28fd87,_0x28fd87;}[_0x2cf5cd(0x2a0)](){var _0x299e02=_0x2cf5cd;this[_0x299e02(0x232)]||this['_connected']||this['_connectAttemptCount']>=this[_0x299e02(0x2a8)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x299e02(0x232)]=!0x0,this['_connectAttemptCount']++,this[_0x299e02(0x209)]=new Promise((_0x323901,_0xe82100)=>{var _0x1f03e5=_0x299e02;this[_0x1f03e5(0x25d)]()[_0x1f03e5(0x284)](_0x289f22=>{var _0x312bc1=_0x1f03e5;let _0x1a955b=new _0x289f22(_0x312bc1(0x202)+this['host']+':'+this[_0x312bc1(0x26d)]);_0x1a955b[_0x312bc1(0x1f1)]=()=>{var _0x491c98=_0x312bc1;this['_allowedToSend']=!0x1,this[_0x491c98(0x281)](_0x1a955b),this[_0x491c98(0x2c5)](),_0xe82100(new Error(_0x491c98(0x206)));},_0x1a955b[_0x312bc1(0x2b2)]=()=>{var _0x496f4e=_0x312bc1;this[_0x496f4e(0x246)]||_0x1a955b['_socket']&&_0x1a955b[_0x496f4e(0x2b0)]['unref']&&_0x1a955b[_0x496f4e(0x2b0)]['unref'](),_0x323901(_0x1a955b);},_0x1a955b['onclose']=()=>{var _0x4a9cbf=_0x312bc1;this[_0x4a9cbf(0x248)]=!0x0,this['_disposeWebsocket'](_0x1a955b),this[_0x4a9cbf(0x2c5)]();},_0x1a955b[_0x312bc1(0x2b5)]=_0x5eb630=>{var _0x2133bb=_0x312bc1;try{_0x5eb630&&_0x5eb630['data']&&this['_inBrowser']&&JSON[_0x2133bb(0x231)](_0x5eb630[_0x2133bb(0x27a)])[_0x2133bb(0x2af)]==='reload'&&this[_0x2133bb(0x273)][_0x2133bb(0x27e)]['reload']();}catch{}};})['then'](_0x5c8281=>(this[_0x1f03e5(0x207)]=!0x0,this[_0x1f03e5(0x232)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x1f03e5(0x296)]=0x0,_0x5c8281))[_0x1f03e5(0x204)](_0x2e9680=>(this[_0x1f03e5(0x207)]=!0x1,this['_connecting']=!0x1,_0xe82100(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x2e9680&&_0x2e9680[_0x1f03e5(0x1ef)])))));}));}[_0x2cf5cd(0x281)](_0x196a35){var _0x2f6e0d=_0x2cf5cd;this[_0x2f6e0d(0x207)]=!0x1,this[_0x2f6e0d(0x232)]=!0x1;try{_0x196a35[_0x2f6e0d(0x2bb)]=null,_0x196a35[_0x2f6e0d(0x1f1)]=null,_0x196a35['onopen']=null;}catch{}try{_0x196a35[_0x2f6e0d(0x221)]<0x2&&_0x196a35[_0x2f6e0d(0x212)]();}catch{}}[_0x2cf5cd(0x2c5)](){var _0x610869=_0x2cf5cd;clearTimeout(this[_0x610869(0x22a)]),!(this[_0x610869(0x296)]>=this[_0x610869(0x2a8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x5d1aff=_0x610869;this[_0x5d1aff(0x207)]||this[_0x5d1aff(0x232)]||(this[_0x5d1aff(0x2a0)](),this[_0x5d1aff(0x209)]?.[_0x5d1aff(0x204)](()=>this[_0x5d1aff(0x2c5)]()));},0x1f4),this[_0x610869(0x22a)][_0x610869(0x2c4)]&&this['_reconnectTimeout'][_0x610869(0x2c4)]());}async['send'](_0x4da41b){var _0x25d38b=_0x2cf5cd;try{if(!this['_allowedToSend'])return;this[_0x25d38b(0x248)]&&this[_0x25d38b(0x2a0)](),(await this[_0x25d38b(0x209)])[_0x25d38b(0x1f2)](JSON[_0x25d38b(0x29d)](_0x4da41b));}catch(_0x284c46){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x284c46&&_0x284c46[_0x25d38b(0x1ef)])),this['_allowedToSend']=!0x1,this[_0x25d38b(0x2c5)]();}}};function V(_0xb97f7e,_0x19f69c,_0x301db6,_0x28b17b,_0x3028fb){var _0x4feedb=_0x2cf5cd;let _0xab03f1=_0x301db6[_0x4feedb(0x229)](',')[_0x4feedb(0x23f)](_0x2633fc=>{var _0x529807=_0x4feedb;try{_0xb97f7e[_0x529807(0x230)]||((_0x3028fb===_0x529807(0x283)||_0x3028fb===_0x529807(0x249)||_0x3028fb===_0x529807(0x2ac))&&(_0x3028fb+=_0xb97f7e['process']?.[_0x529807(0x2c1)]?.['node']?_0x529807(0x20d):_0x529807(0x237)),_0xb97f7e[_0x529807(0x230)]={'id':+new Date(),'tool':_0x3028fb});let _0xeb9db=new Q(_0xb97f7e,_0x19f69c,_0x2633fc,_0x28b17b);return _0xeb9db[_0x529807(0x1f2)][_0x529807(0x227)](_0xeb9db);}catch(_0x2230bd){return console[_0x529807(0x267)](_0x529807(0x22b),_0x2230bd&&_0x2230bd[_0x529807(0x1ef)]),()=>{};}});return _0x422510=>_0xab03f1[_0x4feedb(0x262)](_0x389f10=>_0x389f10(_0x422510));}function _0x2a98(){var _0x47734e=['disabledLog','_numberRegExp','autoExpandMaxDepth','undefined','unknown','Number','time','ws://','String','catch','RegExp','logger\\x20websocket\\x20error','_connected','isArray','_ws','54739014hZPxbX','1079648rjCDOH','getOwnPropertySymbols','\\x20server','_capIfString','_setNodeLabel','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','_blacklistedProperty','close','_isPrimitiveType','_p_','substr','_keyStrRegExp','error','hostname','concat','_regExpToString','61159','setter','create','_addFunctionsNode','getOwnPropertyDescriptor','_setNodeId','readyState','_Symbol','sort','depth','toString','_quotedRegExp','bind','string','split','_reconnectTimeout','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','nuxt','null','_WebSocket','_hasSymbolPropertyOnItsPath','_console_ninja_session','parse','_connecting','_additionalMetadata','...','_hasMapOnItsPath','allStrLength','\\x20browser','level','_treeNodePropertiesAfterFullValue','_p_name','timeStamp','_p_length','autoExpand','NEGATIVE_INFINITY','map','1525537RhiYyd','sortProps','pathToFileURL','_console_ninja','host','ws/index.js','_inBrowser','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_allowedToConnectOnSend','remix','current','length','1685344258094','test','totalStrLength','_property','Map','console','join','resolveGetters','serialize','HTMLAllCollection',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.129\\\\node_modules",'timeEnd','[object\\x20Set]','now','log','call','capped','getWebSocketClass','__es'+'Module','hits','stack','Boolean','forEach','expId','hrtime','1.0.0','default','warn','number','27PVbVzP','_isArray','_isSet','WebSocket','port','path','Set','valueOf','parent','count','global','constructor','_propertyName','_isMap','toLowerCase','strLength','getter','data','_dateToString','25989iNKKmv','_getOwnPropertyDescriptor','location','isExpressionToEvaluate','url','_disposeWebsocket','_cleanNode','next.js','then','index','_propertyAccessor','node','2365xiNUeo','2338510BlrUQW','unshift','cappedProps','[object\\x20Map]','remix','_WebSocketClass','_setNodeExpressionPath','performance','array','_isNegativeZero','function','[object\\x20Array]','_setNodeExpandableState','_connectAttemptCount','elapsed','_consoleNinjaAllowedToStart','props','positiveInfinity','noFunctions','push','stringify','[object\\x20Date]','root_exp_id','_connectToHostNow','nodeModules','process','_setNodePermissions','_sortProps','reduceLimits','_type','cappedElements','_maxConnectAttemptCount','argumentResolutionError','trace','elements','astro','autoExpandPreviousObjects','defineProperty','method','_socket','type','onopen','_processTreeNodeResult','_objectToString','onmessage','negativeZero','bigint','Symbol','7HexpBI','Buffer','onclose','boolean','symbol','_addLoadNode','358RbwaIx','getOwnPropertyNames','versions','autoExpandLimit','includes','unref','_attemptToReconnectShortly','_isPrimitiveWrapperType','_HTMLAllCollection','match','date','autoExpandPropertyCount','127.0.0.1','value','hasOwnProperty','_addProperty','set','prototype','negativeInfinity','object','5054958GGLzRP','message','9436aEdZNf','onerror','send','_addObjectProperty','name','stackTraceLimit','_allowedToSend','_setNodeQueryPath','expressionsToEvaluate','_getOwnPropertySymbols','_treeNodePropertiesBeforeFullValue'];_0x2a98=function(){return _0x47734e;};return _0x2a98();}function H(_0x45561e){var _0x534322=_0x2cf5cd;let _0x3f152c=function(_0x148806,_0x5ef6f9){return _0x5ef6f9-_0x148806;},_0x50eaf0;if(_0x45561e[_0x534322(0x290)])_0x50eaf0=function(){var _0x376037=_0x534322;return _0x45561e[_0x376037(0x290)][_0x376037(0x259)]();};else{if(_0x45561e[_0x534322(0x2a2)]&&_0x45561e['process'][_0x534322(0x264)])_0x50eaf0=function(){var _0x3938fb=_0x534322;return _0x45561e[_0x3938fb(0x2a2)][_0x3938fb(0x264)]();},_0x3f152c=function(_0x4d6428,_0x24c728){return 0x3e8*(_0x24c728[0x0]-_0x4d6428[0x0])+(_0x24c728[0x1]-_0x4d6428[0x1])/0xf4240;};else try{let {performance:_0x2c50fd}=require('perf_hooks');_0x50eaf0=function(){var _0x39ffd2=_0x534322;return _0x2c50fd[_0x39ffd2(0x259)]();};}catch{_0x50eaf0=function(){return+new Date();};}}return{'elapsed':_0x3f152c,'timeStamp':_0x50eaf0,'now':()=>Date[_0x534322(0x259)]()};}function X(_0x1f6729,_0x5c6190,_0x217af5){var _0x126b42=_0x2cf5cd;if(_0x1f6729['_consoleNinjaAllowedToStart']!==void 0x0)return _0x1f6729[_0x126b42(0x298)];let _0xe76fa6=_0x1f6729[_0x126b42(0x2a2)]?.[_0x126b42(0x2c1)]?.['node'];return _0xe76fa6&&_0x217af5===_0x126b42(0x22c)?_0x1f6729['_consoleNinjaAllowedToStart']=!0x1:_0x1f6729[_0x126b42(0x298)]=_0xe76fa6||!_0x5c6190||_0x1f6729['location']?.[_0x126b42(0x218)]&&_0x5c6190[_0x126b42(0x2c3)](_0x1f6729[_0x126b42(0x27e)][_0x126b42(0x218)]),_0x1f6729[_0x126b42(0x298)];}function _0x40be(_0x15e1bb,_0x1a4e5d){var _0x2a98f1=_0x2a98();return _0x40be=function(_0x40be20,_0x4701b9){_0x40be20=_0x40be20-0x1e3;var _0x3331c5=_0x2a98f1[_0x40be20];return _0x3331c5;},_0x40be(_0x15e1bb,_0x1a4e5d);}((_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548,_0x2b2eb2,_0x1b70b3,_0x41ce87,_0x40492c)=>{var _0xaf924a=_0x2cf5cd;if(_0x49b204[_0xaf924a(0x243)])return _0x49b204[_0xaf924a(0x243)];if(!X(_0x49b204,_0x41ce87,_0x489548))return _0x49b204['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x49b204[_0xaf924a(0x243)];let _0xf0b388={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5b35fa={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x505e5e=H(_0x49b204),_0x254ab2=_0x505e5e[_0xaf924a(0x297)],_0x4a93d3=_0x505e5e[_0xaf924a(0x23b)],_0xe1d997=_0x505e5e[_0xaf924a(0x259)],_0x47a49a={'hits':{},'ts':{}},_0x2cbc42=_0x1a66cf=>{_0x47a49a['ts'][_0x1a66cf]=_0x4a93d3();},_0x40058f=(_0x55f653,_0x438427)=>{let _0x25052b=_0x47a49a['ts'][_0x438427];if(delete _0x47a49a['ts'][_0x438427],_0x25052b){let _0x4bcb71=_0x254ab2(_0x25052b,_0x4a93d3());_0x1a6309(_0x195f4e('time',_0x55f653,_0xe1d997(),_0xe5069f,[_0x4bcb71],_0x438427));}},_0x1cf403=_0x391d70=>_0x34ff71=>{var _0x545190=_0xaf924a;try{_0x2cbc42(_0x34ff71),_0x391d70(_0x34ff71);}finally{_0x49b204[_0x545190(0x251)][_0x545190(0x201)]=_0x391d70;}},_0x162ea0=_0x434010=>_0x2d8916=>{var _0x386e10=_0xaf924a;try{let [_0x4df1d3,_0x22fa1a]=_0x2d8916[_0x386e10(0x229)](':logPointId:');_0x40058f(_0x22fa1a,_0x4df1d3),_0x434010(_0x4df1d3);}finally{_0x49b204['console'][_0x386e10(0x257)]=_0x434010;}};_0x49b204[_0xaf924a(0x243)]={'consoleLog':(_0x467987,_0x342fa0)=>{var _0x37d8e1=_0xaf924a;_0x49b204[_0x37d8e1(0x251)]['log']['name']!==_0x37d8e1(0x1fb)&&_0x1a6309(_0x195f4e(_0x37d8e1(0x25a),_0x467987,_0xe1d997(),_0xe5069f,_0x342fa0));},'consoleTrace':(_0x4f9b55,_0x2c5df8)=>{var _0x409a8a=_0xaf924a;_0x49b204[_0x409a8a(0x251)]['log'][_0x409a8a(0x1f4)]!=='disabledTrace'&&_0x1a6309(_0x195f4e('trace',_0x4f9b55,_0xe1d997(),_0xe5069f,_0x2c5df8));},'consoleTime':()=>{var _0x372b3c=_0xaf924a;_0x49b204[_0x372b3c(0x251)][_0x372b3c(0x201)]=_0x1cf403(_0x49b204[_0x372b3c(0x251)]['time']);},'consoleTimeEnd':()=>{var _0x49bb97=_0xaf924a;_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]=_0x162ea0(_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]);},'autoLog':(_0x108d5f,_0x4cf9ca)=>{var _0x16ba00=_0xaf924a;_0x1a6309(_0x195f4e(_0x16ba00(0x25a),_0x4cf9ca,_0xe1d997(),_0xe5069f,[_0x108d5f]));},'autoTrace':(_0x1e46d6,_0x2c00ce)=>{var _0x54ceaa=_0xaf924a;_0x1a6309(_0x195f4e(_0x54ceaa(0x2aa),_0x2c00ce,_0xe1d997(),_0xe5069f,[_0x1e46d6]));},'autoTime':(_0x296ec5,_0x4d05a6,_0xae7de0)=>{_0x2cbc42(_0xae7de0);},'autoTimeEnd':(_0x4787e8,_0x45534c,_0x282ccd)=>{_0x40058f(_0x45534c,_0x282ccd);}};let _0x1a6309=V(_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548),_0xe5069f=_0x49b204[_0xaf924a(0x230)];class _0x3ea185{constructor(){var _0x8f3991=_0xaf924a;this[_0x8f3991(0x216)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x49b204['undefined'],this[_0x8f3991(0x2c7)]=_0x49b204[_0x8f3991(0x255)],this['_getOwnPropertyDescriptor']=Object[_0x8f3991(0x21f)],this['_getOwnPropertyNames']=Object[_0x8f3991(0x2c0)],this['_Symbol']=_0x49b204[_0x8f3991(0x2b8)],this[_0x8f3991(0x21a)]=RegExp[_0x8f3991(0x1eb)][_0x8f3991(0x225)],this[_0x8f3991(0x27b)]=Date[_0x8f3991(0x1eb)][_0x8f3991(0x225)];}[_0xaf924a(0x254)](_0x1ffbdf,_0x261664,_0x1119b9,_0x220a1b){var _0x35a28c=_0xaf924a,_0x2b5b13=this,_0xb5b34f=_0x1119b9[_0x35a28c(0x23d)];function _0x3e7ce9(_0x18896a,_0x17698b,_0x102b14){var _0x587cf5=_0x35a28c;_0x17698b['type']=_0x587cf5(0x1ff),_0x17698b[_0x587cf5(0x217)]=_0x18896a['message'],_0x1c9374=_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)],_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)]=_0x17698b,_0x2b5b13['_treeNodePropertiesBeforeFullValue'](_0x17698b,_0x102b14);}if(_0x261664&&_0x261664[_0x35a28c(0x2a9)])_0x3e7ce9(_0x261664,_0x1ffbdf,_0x1119b9);else try{_0x1119b9[_0x35a28c(0x238)]++,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x2ad)][_0x35a28c(0x29c)](_0x261664);var _0x4abe4f,_0x4d7716,_0x16f780,_0x4f50fc,_0x4c3fd8=[],_0x2e94bd=[],_0x107b8f,_0x1a262d=this[_0x35a28c(0x2a6)](_0x261664),_0xec7933=_0x1a262d==='array',_0x48c47a=!0x1,_0x55a62b=_0x1a262d===_0x35a28c(0x293),_0x5dd4e0=this[_0x35a28c(0x213)](_0x1a262d),_0x482298=this[_0x35a28c(0x2c6)](_0x1a262d),_0x164aa8=_0x5dd4e0||_0x482298,_0x1739c6={},_0x2d507c=0x0,_0x18b048=!0x1,_0x1c9374,_0xeccd3f=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1119b9[_0x35a28c(0x224)]){if(_0xec7933){if(_0x4d7716=_0x261664[_0x35a28c(0x24b)],_0x4d7716>_0x1119b9[_0x35a28c(0x2ab)]){for(_0x16f780=0x0,_0x4f50fc=_0x1119b9[_0x35a28c(0x2ab)],_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));_0x1ffbdf[_0x35a28c(0x2a7)]=!0x0;}else{for(_0x16f780=0x0,_0x4f50fc=_0x4d7716,_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));}_0x1119b9['autoExpandPropertyCount']+=_0x2e94bd['length'];}if(!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&!_0x5dd4e0&&_0x1a262d!==_0x35a28c(0x203)&&_0x1a262d!==_0x35a28c(0x2ba)&&_0x1a262d!==_0x35a28c(0x2b7)){var _0x2ae62d=_0x220a1b[_0x35a28c(0x299)]||_0x1119b9[_0x35a28c(0x299)];if(this[_0x35a28c(0x26b)](_0x261664)?(_0x4abe4f=0x0,_0x261664['forEach'](function(_0x46649f){var _0x15a7b7=_0x35a28c;if(_0x2d507c++,_0x1119b9[_0x15a7b7(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x15a7b7(0x27f)]&&_0x1119b9['autoExpand']&&_0x1119b9[_0x15a7b7(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;return;}_0x2e94bd[_0x15a7b7(0x29c)](_0x2b5b13[_0x15a7b7(0x1e9)](_0x4c3fd8,_0x261664,'Set',_0x4abe4f++,_0x1119b9,function(_0x5c98b8){return function(){return _0x5c98b8;};}(_0x46649f)));})):this[_0x35a28c(0x276)](_0x261664)&&_0x261664['forEach'](function(_0x8ca25,_0x4c3572){var _0x1bfdfd=_0x35a28c;if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x1bfdfd(0x27f)]&&_0x1119b9[_0x1bfdfd(0x23d)]&&_0x1119b9['autoExpandPropertyCount']>_0x1119b9[_0x1bfdfd(0x2c2)]){_0x18b048=!0x0;return;}var _0x4873de=_0x4c3572['toString']();_0x4873de[_0x1bfdfd(0x24b)]>0x64&&(_0x4873de=_0x4873de['slice'](0x0,0x64)+_0x1bfdfd(0x234)),_0x2e94bd[_0x1bfdfd(0x29c)](_0x2b5b13[_0x1bfdfd(0x1e9)](_0x4c3fd8,_0x261664,_0x1bfdfd(0x250),_0x4873de,_0x1119b9,function(_0x1cdb70){return function(){return _0x1cdb70;};}(_0x8ca25)));}),!_0x48c47a){try{for(_0x107b8f in _0x261664)if(!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)){if(_0x2d507c++,_0x1119b9[_0x35a28c(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9[_0x35a28c(0x2c2)]){_0x18b048=!0x0;break;}_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}catch{}if(_0x1739c6[_0x35a28c(0x23c)]=!0x0,_0x55a62b&&(_0x1739c6[_0x35a28c(0x23a)]=!0x0),!_0x18b048){var _0x155fac=[][_0x35a28c(0x219)](this['_getOwnPropertyNames'](_0x261664))['concat'](this[_0x35a28c(0x1f9)](_0x261664));for(_0x4abe4f=0x0,_0x4d7716=_0x155fac[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)if(_0x107b8f=_0x155fac[_0x4abe4f],!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f['toString']()))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)&&!_0x1739c6[_0x35a28c(0x214)+_0x107b8f[_0x35a28c(0x225)]()]){if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;break;}_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}}}}if(_0x1ffbdf[_0x35a28c(0x2b1)]=_0x1a262d,_0x164aa8?(_0x1ffbdf[_0x35a28c(0x1e7)]=_0x261664[_0x35a28c(0x270)](),this[_0x35a28c(0x20e)](_0x1a262d,_0x1ffbdf,_0x1119b9,_0x220a1b)):_0x1a262d===_0x35a28c(0x1e4)?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x27b)][_0x35a28c(0x25b)](_0x261664):_0x1a262d===_0x35a28c(0x205)?_0x1ffbdf[_0x35a28c(0x1e7)]=this['_regExpToString']['call'](_0x261664):_0x1a262d===_0x35a28c(0x2bd)&&this['_Symbol']?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x222)][_0x35a28c(0x1eb)][_0x35a28c(0x225)][_0x35a28c(0x25b)](_0x261664):!_0x1119b9[_0x35a28c(0x224)]&&!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&(delete _0x1ffbdf[_0x35a28c(0x1e7)],_0x1ffbdf[_0x35a28c(0x25c)]=!0x0),_0x18b048&&(_0x1ffbdf[_0x35a28c(0x28b)]=!0x0),_0x1c9374=_0x1119b9[_0x35a28c(0x287)]['current'],_0x1119b9[_0x35a28c(0x287)][_0x35a28c(0x24a)]=_0x1ffbdf,this[_0x35a28c(0x1fa)](_0x1ffbdf,_0x1119b9),_0x2e94bd[_0x35a28c(0x24b)]){for(_0x4abe4f=0x0,_0x4d7716=_0x2e94bd[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)_0x2e94bd[_0x4abe4f](_0x4abe4f);}_0x4c3fd8[_0x35a28c(0x24b)]&&(_0x1ffbdf['props']=_0x4c3fd8);}catch(_0x5acfee){_0x3e7ce9(_0x5acfee,_0x1ffbdf,_0x1119b9);}return this[_0x35a28c(0x233)](_0x261664,_0x1ffbdf),this[_0x35a28c(0x239)](_0x1ffbdf,_0x1119b9),_0x1119b9['node'][_0x35a28c(0x24a)]=_0x1c9374,_0x1119b9[_0x35a28c(0x238)]--,_0x1119b9['autoExpand']=_0xb5b34f,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9['autoExpandPreviousObjects']['pop'](),_0x1ffbdf;}[_0xaf924a(0x1f9)](_0x26b81e){var _0x33466c=_0xaf924a;return Object[_0x33466c(0x20c)]?Object[_0x33466c(0x20c)](_0x26b81e):[];}[_0xaf924a(0x26b)](_0x3fbc47){var _0x1986bd=_0xaf924a;return!!(_0x3fbc47&&_0x49b204[_0x1986bd(0x26f)]&&this[_0x1986bd(0x2b4)](_0x3fbc47)===_0x1986bd(0x258)&&_0x3fbc47[_0x1986bd(0x262)]);}[_0xaf924a(0x211)](_0x1ab315,_0x21ebf2,_0x470340){var _0x48210a=_0xaf924a;return _0x470340[_0x48210a(0x29b)]?typeof _0x1ab315[_0x21ebf2]==_0x48210a(0x293):!0x1;}['_type'](_0x5dcb54){var _0x3d62dd=_0xaf924a,_0x2fc396='';return _0x2fc396=typeof _0x5dcb54,_0x2fc396==='object'?this['_objectToString'](_0x5dcb54)===_0x3d62dd(0x294)?_0x2fc396=_0x3d62dd(0x291):this[_0x3d62dd(0x2b4)](_0x5dcb54)===_0x3d62dd(0x29e)?_0x2fc396=_0x3d62dd(0x1e4):_0x5dcb54===null?_0x2fc396='null':_0x5dcb54[_0x3d62dd(0x274)]&&(_0x2fc396=_0x5dcb54['constructor'][_0x3d62dd(0x1f4)]||_0x2fc396):_0x2fc396===_0x3d62dd(0x1fe)&&this['_HTMLAllCollection']&&_0x5dcb54 instanceof this[_0x3d62dd(0x2c7)]&&(_0x2fc396=_0x3d62dd(0x255)),_0x2fc396;}['_objectToString'](_0x141c18){var _0x3ac2dc=_0xaf924a;return Object['prototype'][_0x3ac2dc(0x225)][_0x3ac2dc(0x25b)](_0x141c18);}[_0xaf924a(0x213)](_0x5a457d){var _0x597d85=_0xaf924a;return _0x5a457d===_0x597d85(0x2bc)||_0x5a457d===_0x597d85(0x228)||_0x5a457d===_0x597d85(0x268);}[_0xaf924a(0x2c6)](_0x5898cf){var _0x3157c0=_0xaf924a;return _0x5898cf===_0x3157c0(0x261)||_0x5898cf===_0x3157c0(0x203)||_0x5898cf==='Number';}['_addProperty'](_0x5245f8,_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048){var _0x4f3373=this;return function(_0x6f86d0){var _0x55b709=_0x40be,_0x497a8c=_0x34b2c2[_0x55b709(0x287)]['current'],_0x401bcb=_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)],_0x4e8dba=_0x34b2c2['node'][_0x55b709(0x271)];_0x34b2c2[_0x55b709(0x287)]['parent']=_0x497a8c,_0x34b2c2[_0x55b709(0x287)]['index']=typeof _0x2ef032==_0x55b709(0x268)?_0x2ef032:_0x6f86d0,_0x5245f8['push'](_0x4f3373[_0x55b709(0x24f)](_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048)),_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x271)]=_0x4e8dba,_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)]=_0x401bcb;};}[_0xaf924a(0x1f3)](_0x1d7c25,_0x5b8b24,_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3){var _0xd780f0=_0xaf924a,_0x8addf0=this;return _0x5b8b24[_0xd780f0(0x214)+_0x1e6ee4[_0xd780f0(0x225)]()]=!0x0,function(_0x239d6b){var _0x1443cd=_0xd780f0,_0x4df5e1=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x24a)],_0x540e10=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)],_0x2915bc=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)];_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)]=_0x4df5e1,_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)]=_0x239d6b,_0x1d7c25[_0x1443cd(0x29c)](_0x8addf0[_0x1443cd(0x24f)](_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3)),_0x3b78cf['node'][_0x1443cd(0x271)]=_0x2915bc,_0x3b78cf[_0x1443cd(0x287)]['index']=_0x540e10;};}[_0xaf924a(0x24f)](_0x2dc156,_0x84e3c9,_0x3d7e0f,_0x50afce,_0x126c84){var _0x8fb306=_0xaf924a,_0x57d1bb=this;_0x126c84||(_0x126c84=function(_0x277ab9,_0x4edfaa){return _0x277ab9[_0x4edfaa];});var _0x4d7cfe=_0x3d7e0f[_0x8fb306(0x225)](),_0x338741=_0x50afce[_0x8fb306(0x1f8)]||{},_0x135349=_0x50afce[_0x8fb306(0x224)],_0x3fc65a=_0x50afce[_0x8fb306(0x27f)];try{var _0x141963=this['_isMap'](_0x2dc156),_0x31060d=_0x4d7cfe;_0x141963&&_0x31060d[0x0]==='\\x27'&&(_0x31060d=_0x31060d['substr'](0x1,_0x31060d['length']-0x2));var _0x2b079a=_0x50afce[_0x8fb306(0x1f8)]=_0x338741['_p_'+_0x31060d];_0x2b079a&&(_0x50afce[_0x8fb306(0x224)]=_0x50afce['depth']+0x1),_0x50afce[_0x8fb306(0x27f)]=!!_0x2b079a;var _0x15c8b0=typeof _0x3d7e0f=='symbol',_0x24ddbc={'name':_0x15c8b0||_0x141963?_0x4d7cfe:this[_0x8fb306(0x275)](_0x4d7cfe)};if(_0x15c8b0&&(_0x24ddbc[_0x8fb306(0x2bd)]=!0x0),!(_0x84e3c9===_0x8fb306(0x291)||_0x84e3c9==='Error')){var _0x431848=this[_0x8fb306(0x27d)](_0x2dc156,_0x3d7e0f);if(_0x431848&&(_0x431848[_0x8fb306(0x1ea)]&&(_0x24ddbc[_0x8fb306(0x21c)]=!0x0),_0x431848['get']&&!_0x2b079a&&!_0x50afce[_0x8fb306(0x253)]))return _0x24ddbc[_0x8fb306(0x279)]=!0x0,this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x2b3202;try{_0x2b3202=_0x126c84(_0x2dc156,_0x3d7e0f);}catch(_0x14b48e){return _0x24ddbc={'name':_0x4d7cfe,'type':'unknown','error':_0x14b48e[_0x8fb306(0x1ef)]},this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x41dc6b=this['_type'](_0x2b3202),_0x40b8f0=this[_0x8fb306(0x213)](_0x41dc6b);if(_0x24ddbc[_0x8fb306(0x2b1)]=_0x41dc6b,_0x40b8f0)this['_processTreeNodeResult'](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x559389=_0x8fb306;_0x24ddbc['value']=_0x2b3202[_0x559389(0x270)](),!_0x2b079a&&_0x57d1bb['_capIfString'](_0x41dc6b,_0x24ddbc,_0x50afce,{});});else{var _0x57f4f8=_0x50afce[_0x8fb306(0x23d)]&&_0x50afce[_0x8fb306(0x238)]<_0x50afce['autoExpandMaxDepth']&&_0x50afce[_0x8fb306(0x2ad)]['indexOf'](_0x2b3202)<0x0&&_0x41dc6b!==_0x8fb306(0x293)&&_0x50afce[_0x8fb306(0x1e5)]<_0x50afce[_0x8fb306(0x2c2)];_0x57f4f8||_0x50afce[_0x8fb306(0x238)]<_0x135349||_0x2b079a?(this[_0x8fb306(0x254)](_0x24ddbc,_0x2b3202,_0x50afce,_0x2b079a||{}),this[_0x8fb306(0x233)](_0x2b3202,_0x24ddbc)):this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x267210=_0x8fb306;_0x41dc6b===_0x267210(0x22d)||_0x41dc6b===_0x267210(0x1fe)||(delete _0x24ddbc[_0x267210(0x1e7)],_0x24ddbc[_0x267210(0x25c)]=!0x0);});}return _0x24ddbc;}finally{_0x50afce['expressionsToEvaluate']=_0x338741,_0x50afce[_0x8fb306(0x224)]=_0x135349,_0x50afce[_0x8fb306(0x27f)]=_0x3fc65a;}}[_0xaf924a(0x20e)](_0x4b62bd,_0xc40a6,_0x76d4db,_0x1bb854){var _0x2b20d2=_0xaf924a,_0x48134b=_0x1bb854['strLength']||_0x76d4db[_0x2b20d2(0x278)];if((_0x4b62bd===_0x2b20d2(0x228)||_0x4b62bd==='String')&&_0xc40a6[_0x2b20d2(0x1e7)]){let _0x489af6=_0xc40a6['value'][_0x2b20d2(0x24b)];_0x76d4db['allStrLength']+=_0x489af6,_0x76d4db[_0x2b20d2(0x236)]>_0x76d4db[_0x2b20d2(0x24e)]?(_0xc40a6[_0x2b20d2(0x25c)]='',delete _0xc40a6['value']):_0x489af6>_0x48134b&&(_0xc40a6['capped']=_0xc40a6[_0x2b20d2(0x1e7)][_0x2b20d2(0x215)](0x0,_0x48134b),delete _0xc40a6[_0x2b20d2(0x1e7)]);}}['_isMap'](_0x137793){var _0x274dce=_0xaf924a;return!!(_0x137793&&_0x49b204['Map']&&this[_0x274dce(0x2b4)](_0x137793)===_0x274dce(0x28c)&&_0x137793[_0x274dce(0x262)]);}[_0xaf924a(0x275)](_0x3b398f){var _0x3414c6=_0xaf924a;if(_0x3b398f[_0x3414c6(0x1e3)](/^\\d+$/))return _0x3b398f;var _0x3a961e;try{_0x3a961e=JSON['stringify'](''+_0x3b398f);}catch{_0x3a961e='\\x22'+this[_0x3414c6(0x2b4)](_0x3b398f)+'\\x22';}return _0x3a961e['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x3a961e=_0x3a961e[_0x3414c6(0x215)](0x1,_0x3a961e['length']-0x2):_0x3a961e=_0x3a961e['replace'](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x3a961e;}['_processTreeNodeResult'](_0x494cf3,_0x3a7130,_0x2965bb,_0x4ed090){var _0x1fc133=_0xaf924a;this[_0x1fc133(0x1fa)](_0x494cf3,_0x3a7130),_0x4ed090&&_0x4ed090(),this[_0x1fc133(0x233)](_0x2965bb,_0x494cf3),this[_0x1fc133(0x239)](_0x494cf3,_0x3a7130);}[_0xaf924a(0x1fa)](_0x8a70e8,_0x172dc9){var _0x5bfd95=_0xaf924a;this['_setNodeId'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x1f7)](_0x8a70e8,_0x172dc9),this['_setNodeExpressionPath'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x2a3)](_0x8a70e8,_0x172dc9);}[_0xaf924a(0x220)](_0x1021a5,_0x494447){}['_setNodeQueryPath'](_0x20ad16,_0x5f3886){}[_0xaf924a(0x20f)](_0x13a7a7,_0x54f993){}['_isUndefined'](_0x310d6f){return _0x310d6f===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x43c671,_0x48f11a){var _0x321c60=_0xaf924a;this[_0x321c60(0x20f)](_0x43c671,_0x48f11a),this['_setNodeExpandableState'](_0x43c671),_0x48f11a[_0x321c60(0x241)]&&this[_0x321c60(0x2a4)](_0x43c671),this[_0x321c60(0x21e)](_0x43c671,_0x48f11a),this['_addLoadNode'](_0x43c671,_0x48f11a),this[_0x321c60(0x282)](_0x43c671);}[_0xaf924a(0x233)](_0x226191,_0x58f6f1){var _0x43a02f=_0xaf924a;try{_0x226191&&typeof _0x226191[_0x43a02f(0x24b)]==_0x43a02f(0x268)&&(_0x58f6f1['length']=_0x226191[_0x43a02f(0x24b)]);}catch{}if(_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x268)||_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x200)){if(isNaN(_0x58f6f1[_0x43a02f(0x1e7)]))_0x58f6f1['nan']=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];else switch(_0x58f6f1[_0x43a02f(0x1e7)]){case Number['POSITIVE_INFINITY']:_0x58f6f1[_0x43a02f(0x29a)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case Number[_0x43a02f(0x23e)]:_0x58f6f1[_0x43a02f(0x1ec)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case 0x0:this[_0x43a02f(0x292)](_0x58f6f1[_0x43a02f(0x1e7)])&&(_0x58f6f1[_0x43a02f(0x2b6)]=!0x0);break;}}else _0x58f6f1['type']==='function'&&typeof _0x226191[_0x43a02f(0x1f4)]==_0x43a02f(0x228)&&_0x226191[_0x43a02f(0x1f4)]&&_0x58f6f1[_0x43a02f(0x1f4)]&&_0x226191['name']!==_0x58f6f1[_0x43a02f(0x1f4)]&&(_0x58f6f1['funcName']=_0x226191[_0x43a02f(0x1f4)]);}[_0xaf924a(0x292)](_0x99e5d7){var _0x5af86c=_0xaf924a;return 0x1/_0x99e5d7===Number[_0x5af86c(0x23e)];}[_0xaf924a(0x2a4)](_0x4da140){var _0x59d583=_0xaf924a;!_0x4da140[_0x59d583(0x299)]||!_0x4da140['props'][_0x59d583(0x24b)]||_0x4da140['type']===_0x59d583(0x291)||_0x4da140[_0x59d583(0x2b1)]===_0x59d583(0x250)||_0x4da140['type']===_0x59d583(0x26f)||_0x4da140[_0x59d583(0x299)][_0x59d583(0x223)](function(_0x2bca0f,_0x6aada0){var _0x433cc9=_0x59d583,_0x220ffd=_0x2bca0f[_0x433cc9(0x1f4)][_0x433cc9(0x277)](),_0x52a25d=_0x6aada0[_0x433cc9(0x1f4)][_0x433cc9(0x277)]();return _0x220ffd<_0x52a25d?-0x1:_0x220ffd>_0x52a25d?0x1:0x0;});}[_0xaf924a(0x21e)](_0x48dce4,_0x48f4c6){var _0x2678d7=_0xaf924a;if(!(_0x48f4c6['noFunctions']||!_0x48dce4[_0x2678d7(0x299)]||!_0x48dce4[_0x2678d7(0x299)]['length'])){for(var _0x279f85=[],_0x27fbf8=[],_0x58bb24=0x0,_0x1abc8f=_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x24b)];_0x58bb24<_0x1abc8f;_0x58bb24++){var _0x3caeb2=_0x48dce4['props'][_0x58bb24];_0x3caeb2[_0x2678d7(0x2b1)]===_0x2678d7(0x293)?_0x279f85[_0x2678d7(0x29c)](_0x3caeb2):_0x27fbf8[_0x2678d7(0x29c)](_0x3caeb2);}if(!(!_0x27fbf8[_0x2678d7(0x24b)]||_0x279f85[_0x2678d7(0x24b)]<=0x1)){_0x48dce4[_0x2678d7(0x299)]=_0x27fbf8;var _0xe3d941={'functionsNode':!0x0,'props':_0x279f85};this[_0x2678d7(0x220)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x20f)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x295)](_0xe3d941),this['_setNodePermissions'](_0xe3d941,_0x48f4c6),_0xe3d941['id']+='\\x20f',_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x28a)](_0xe3d941);}}}[_0xaf924a(0x2be)](_0x48eb38,_0x20f75c){}[_0xaf924a(0x295)](_0x129122){}[_0xaf924a(0x26a)](_0x1f6bb8){var _0x2820a2=_0xaf924a;return Array[_0x2820a2(0x208)](_0x1f6bb8)||typeof _0x1f6bb8==_0x2820a2(0x1ed)&&this[_0x2820a2(0x2b4)](_0x1f6bb8)===_0x2820a2(0x294);}[_0xaf924a(0x2a3)](_0x1ea391,_0x8f50b2){}['_cleanNode'](_0x52cd26){var _0x498c91=_0xaf924a;delete _0x52cd26[_0x498c91(0x22f)],delete _0x52cd26['_hasSetOnItsPath'],delete _0x52cd26[_0x498c91(0x235)];}[_0xaf924a(0x28f)](_0x5c8a9c,_0x31124f){}[_0xaf924a(0x286)](_0x2f7a58){var _0x397561=_0xaf924a;return _0x2f7a58?_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x1fc)])?'['+_0x2f7a58+']':_0x2f7a58[_0x397561(0x1e3)](this['_keyStrRegExp'])?'.'+_0x2f7a58:_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x226)])?'['+_0x2f7a58+']':'[\\x27'+_0x2f7a58+'\\x27]':'';}}let _0x3fbb82=new _0x3ea185();function _0x195f4e(_0x20dbd1,_0x567217,_0x7b3f99,_0x256338,_0x381038,_0xb947b4){var _0x5299ea=_0xaf924a;let _0xc570be,_0x171851;try{_0x171851=_0x4a93d3(),_0xc570be=_0x47a49a[_0x567217],!_0xc570be||_0x171851-_0xc570be['ts']>0x1f4&&_0xc570be[_0x5299ea(0x272)]&&_0xc570be['time']/_0xc570be[_0x5299ea(0x272)]<0x64?(_0x47a49a[_0x567217]=_0xc570be={'count':0x0,'time':0x0,'ts':_0x171851},_0x47a49a[_0x5299ea(0x25f)]={}):_0x171851-_0x47a49a[_0x5299ea(0x25f)]['ts']>0x32&&_0x47a49a['hits']['count']&&_0x47a49a[_0x5299ea(0x25f)]['time']/_0x47a49a['hits'][_0x5299ea(0x272)]<0x64&&(_0x47a49a[_0x5299ea(0x25f)]={});let _0x4ea285=[],_0x56b786=_0xc570be['reduceLimits']||_0x47a49a['hits'][_0x5299ea(0x2a5)]?_0x5b35fa:_0xf0b388,_0x3563e3=_0x51e7d1=>{var _0x2491a0=_0x5299ea;let _0x26ab25={};return _0x26ab25[_0x2491a0(0x299)]=_0x51e7d1[_0x2491a0(0x299)],_0x26ab25['elements']=_0x51e7d1['elements'],_0x26ab25['strLength']=_0x51e7d1['strLength'],_0x26ab25[_0x2491a0(0x24e)]=_0x51e7d1[_0x2491a0(0x24e)],_0x26ab25[_0x2491a0(0x2c2)]=_0x51e7d1[_0x2491a0(0x2c2)],_0x26ab25['autoExpandMaxDepth']=_0x51e7d1[_0x2491a0(0x1fd)],_0x26ab25[_0x2491a0(0x241)]=!0x1,_0x26ab25[_0x2491a0(0x29b)]=!_0x40492c,_0x26ab25[_0x2491a0(0x224)]=0x1,_0x26ab25[_0x2491a0(0x238)]=0x0,_0x26ab25[_0x2491a0(0x263)]=_0x2491a0(0x29f),_0x26ab25['rootExpression']='root_exp',_0x26ab25['autoExpand']=!0x0,_0x26ab25[_0x2491a0(0x2ad)]=[],_0x26ab25[_0x2491a0(0x1e5)]=0x0,_0x26ab25[_0x2491a0(0x253)]=!0x0,_0x26ab25['allStrLength']=0x0,_0x26ab25[_0x2491a0(0x287)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x26ab25;};for(var _0x35907a=0x0;_0x35907a<_0x381038[_0x5299ea(0x24b)];_0x35907a++)_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82['serialize']({'timeNode':_0x20dbd1===_0x5299ea(0x201)||void 0x0},_0x381038[_0x35907a],_0x3563e3(_0x56b786),{}));if(_0x20dbd1===_0x5299ea(0x2aa)){let _0xecc6de=Error[_0x5299ea(0x1f5)];try{Error[_0x5299ea(0x1f5)]=0x1/0x0,_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82[_0x5299ea(0x254)]({'stackNode':!0x0},new Error()[_0x5299ea(0x260)],_0x3563e3(_0x56b786),{'strLength':0x1/0x0}));}finally{Error[_0x5299ea(0x1f5)]=_0xecc6de;}}return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':_0x4ea285,'id':_0x567217,'context':_0xb947b4}]};}catch(_0xeea157){return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':[{'type':_0x5299ea(0x1ff),'error':_0xeea157&&_0xeea157[_0x5299ea(0x1ef)]}],'id':_0x567217,'context':_0xb947b4}]};}finally{try{if(_0xc570be&&_0x171851){let _0x5613c6=_0x4a93d3();_0xc570be[_0x5299ea(0x272)]++,_0xc570be['time']+=_0x254ab2(_0x171851,_0x5613c6),_0xc570be['ts']=_0x5613c6,_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]++,_0x47a49a['hits']['time']+=_0x254ab2(_0x171851,_0x5613c6),_0x47a49a[_0x5299ea(0x25f)]['ts']=_0x5613c6,(_0xc570be['count']>0x32||_0xc570be[_0x5299ea(0x201)]>0x64)&&(_0xc570be[_0x5299ea(0x2a5)]=!0x0),(_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]>0x3e8||_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x201)]>0x12c)&&(_0x47a49a['hits'][_0x5299ea(0x2a5)]=!0x0);}}catch{}}}return _0x49b204[_0xaf924a(0x243)];})(globalThis,_0x2cf5cd(0x1e6),_0x2cf5cd(0x21b),_0x2cf5cd(0x256),_0x2cf5cd(0x28d),_0x2cf5cd(0x265),_0x2cf5cd(0x24c),["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.7"],'');`
      )
    );
  } catch {}
}
function oo_oo9(i, ...v) {
  try {
    oo_cm9().consoleLog(i, v);
  } catch {}
  return v;
}

// app/features/Suggestion/SuggestionContainer.tsx
var import_recoil9 = require('recoil');

// app/features/Suggestion/Suggestion.tsx
var import_react27 = require('@remix-run/react'),
  import_react28 = require('react');
var import_react_detect_click_outside3 = require('react-detect-click-outside');
var import_uuid2 = require('uuid');

// app/features/Editor/tiptap/markAction.ts
function replaceMarkContent(editor, markID, content) {
  if (!editor) return null;
  let { doc, selection } = editor == null ? void 0 : editor.state;
  doc.descendants((node, pos) => {
    node.marks &&
      node.marks.forEach((mark) => {
        if (mark.attrs.id === markID) {
          let from = pos,
            to = pos + node.nodeSize,
            trx = editor.view.state.tr
              .setSelection(editor.view.state.selection.constructor.near(editor.view.state.doc.resolve(from)))
              .setSelection(editor.view.state.selection.constructor.near(editor.view.state.doc.resolve(to))),
            markType = editor.view.state.schema.marks.suggestion;
          editor.view.dispatch(
            trx.replaceWith(
              from,
              to,
              editor.view.state.schema.text(content, [
                markType.create({
                  id: markID,
                }),
              ])
            )
          );
        }
      });
  });
}

// app/features/Suggestion/Comment.tsx
var import_react25 = require('react'),
  import_react_detect_click_outside2 = require('react-detect-click-outside'),
  import_react26 = require('@remix-run/react');
var import_jsx_runtime19 = require('react/jsx-runtime');
function Comments({ comments }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_jsx_runtime19.Fragment, {
    children:
      comments.length > 0 &&
      comments.map((comment, index) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Comment, { comment }, comment.id)),
  });
}
var Comment = ({ comment }) => {
  var _a, _b;
  let [openEditMenu, setOpenEditMenu] = (0, import_react25.useState)(!1),
    [edit, setEdit] = (0, import_react25.useState)(!1),
    [newContent, setNewContent] = (0, import_react25.useState)(comment.text),
    [checked, setChecked] = (0, import_react25.useState)(comment.type === 'support'),
    { user } = (0, import_react26.useOutletContext)(),
    ref = (0, import_react_detect_click_outside2.useDetectClickOutside)({
      onTriggered: () => setOpenEditMenu(!1),
    }),
    color = comment.type === 'support' ? 'bg-green-100' : comment.type === 'reject' ? 'bg-red-100' : null,
    time = timeAgo(comment.createdAt),
    fetcher = (0, import_react26.useFetcher)(),
    handleEdit = () => {
      setEdit(!0);
    },
    handleDelete = () => {
      confirm('do you want to delete the post')
        ? fetcher.submit(
            {
              id: comment.id,
            },
            {
              action: 'api/suggestion/comment',
              method: 'DELETE',
              encType: 'multipart/form-data',
            }
          )
        : console.log(...oo_oo10('5735b594_0', 'cancelled'));
    },
    handleSubmit = () => {
      fetcher.submit(
        {
          id: comment.id,
          newContent,
          type: checked ? 'support' : 'reject',
        },
        {
          action: 'api/suggestion/comment',
          method: 'PATCH',
          encType: 'multipart/form-data',
        }
      ),
        setEdit(!1);
    },
    audioPresent = comment.audioUrl && comment.audioUrl !== '';
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)('div', {
    className: `p-2 text-base  rounded-lg dark:bg-gray-700 ${color}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)('div', {
        className: 'flex justify-between items-center mb-2',
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)('div', {
            className: 'flex items-center',
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)('p', {
                className: 'inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white',
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('img', {
                    className: 'mr-2 w-6 h-6 rounded-full',
                    src: (_a = comment.author) == null ? void 0 : _a.avatarUrl,
                    alt: 'author image',
                  }),
                  (_b = comment.author) == null ? void 0 : _b.name,
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('p', {
                className: 'text-sm text-gray-600 dark:text-gray-400',
                children: time,
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)('div', {
            className: 'relative ml-3',
            ref,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('button', {
                className:
                  ' inline-flex items-center text-sm font-medium text-center text-gray-400  rounded-lg    dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600',
                type: 'button',
                onClick: () => setOpenEditMenu((p) => !p),
                children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('svg', {
                  className: 'w-5 h-5',
                  'aria-hidden': 'true',
                  fill: 'currentColor',
                  viewBox: '0 0 20 20',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('path', {
                    d: 'M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z',
                  }),
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('div', {
                className: `${
                  openEditMenu ? 'absolute' : 'hidden'
                } right-0 top-1.5 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`,
                children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)('ul', {
                  className: 'py-1 text-sm text-gray-700 dark:text-gray-200',
                  'aria-labelledby': 'dropdownMenuIconHorizontalButton',
                  children: [
                    user &&
                      user.username === (comment == null ? void 0 : comment.author.username) &&
                      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('li', {
                            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('div', {
                              onClick: handleEdit,
                              className:
                                'block cursor-pointer py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
                              children: 'Edit',
                            }),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('li', {
                            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('div', {
                              onClick: handleDelete,
                              className:
                                'block cursor-pointer py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
                              children: 'Remove',
                            }),
                          }),
                        ],
                      }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('li', {
                      children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('div', {
                        className:
                          'block py-2 cursor-pointer px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
                        children: 'Report',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      edit
        ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)('div', {
            className: 'flex flex-col',
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(TextArea_default, {
                value: newContent,
                onChange: (e) => setNewContent(e.target.value),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)('div', {
                className: 'flex justify-between gap-2 mt-2',
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)('div', {
                    className: 'flex-1 ',
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('label', {
                        htmlFor: 'checkbox' + comment.id,
                        className: 'mr-2',
                        children: 'support',
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('input', {
                        type: 'checkbox',
                        id: 'checkbox' + comment.id,
                        className:
                          'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
                        defaultChecked: checked,
                        onChange: (e) => setChecked(e.target.checked),
                      }),
                      audioPresent &&
                        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_AudioPlayer.default, {
                          src: comment.audioUrl,
                        }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Button, {
                    onClick: handleSubmit,
                    label: 'submit',
                    type: 'submit',
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Button, {
                    onClick: () => setEdit(!1),
                    label: 'cancel',
                    type: 'reset',
                  }),
                ],
              }),
            ],
          })
        : /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, {
            children: [
              audioPresent &&
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_AudioPlayer.default, { src: comment.audioUrl }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)('p', {
                className: 'text-gray-500 dark:text-gray-400',
                children: comment.text,
              }),
            ],
          }),
    ],
  });
};
function oo_cm10() {
  try {
    return (
      (0, eval)('globalThis._console_ninja') ||
      (0, eval)(
        `/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2cf5cd=_0x40be;(function(_0x582a6d,_0x326ed6){var _0x274fa5=_0x40be,_0x4e6359=_0x582a6d();while(!![]){try{var _0x36ca3c=parseInt(_0x274fa5(0x240))/0x1+parseInt(_0x274fa5(0x2bf))/0x2*(parseInt(_0x274fa5(0x27c))/0x3)+parseInt(_0x274fa5(0x1f0))/0x4*(parseInt(_0x274fa5(0x288))/0x5)+parseInt(_0x274fa5(0x1ee))/0x6+parseInt(_0x274fa5(0x2b9))/0x7*(parseInt(_0x274fa5(0x20b))/0x8)+parseInt(_0x274fa5(0x269))/0x9*(parseInt(_0x274fa5(0x289))/0xa)+-parseInt(_0x274fa5(0x20a))/0xb;if(_0x36ca3c===_0x326ed6)break;else _0x4e6359['push'](_0x4e6359['shift']());}catch(_0x19d0c6){_0x4e6359['push'](_0x4e6359['shift']());}}}(_0x2a98,0xda71d));var ue=Object[_0x2cf5cd(0x21d)],te=Object[_0x2cf5cd(0x2ae)],he=Object[_0x2cf5cd(0x21f)],le=Object['getOwnPropertyNames'],fe=Object['getPrototypeOf'],_e=Object['prototype'][_0x2cf5cd(0x1e8)],pe=(_0x25f11f,_0x357847,_0x2ae353,_0x3d8e2d)=>{var _0x44b478=_0x2cf5cd;if(_0x357847&&typeof _0x357847=='object'||typeof _0x357847==_0x44b478(0x293)){for(let _0x4a4651 of le(_0x357847))!_e['call'](_0x25f11f,_0x4a4651)&&_0x4a4651!==_0x2ae353&&te(_0x25f11f,_0x4a4651,{'get':()=>_0x357847[_0x4a4651],'enumerable':!(_0x3d8e2d=he(_0x357847,_0x4a4651))||_0x3d8e2d['enumerable']});}return _0x25f11f;},ne=(_0x806e83,_0x70843c,_0x15e02d)=>(_0x15e02d=_0x806e83!=null?ue(fe(_0x806e83)):{},pe(_0x70843c||!_0x806e83||!_0x806e83[_0x2cf5cd(0x25e)]?te(_0x15e02d,_0x2cf5cd(0x266),{'value':_0x806e83,'enumerable':!0x0}):_0x15e02d,_0x806e83)),Q=class{constructor(_0x59b92d,_0x2a3a9d,_0x559130,_0x18aff8){var _0x19135f=_0x2cf5cd;this[_0x19135f(0x273)]=_0x59b92d,this[_0x19135f(0x244)]=_0x2a3a9d,this[_0x19135f(0x26d)]=_0x559130,this[_0x19135f(0x2a1)]=_0x18aff8,this[_0x19135f(0x1f6)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x19135f(0x207)]=!0x1,this['_connecting']=!0x1,this[_0x19135f(0x246)]=!!this['global'][_0x19135f(0x26c)],this[_0x19135f(0x28e)]=null,this[_0x19135f(0x296)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_sendErrorMessage']=this[_0x19135f(0x246)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help':_0x19135f(0x210);}async[_0x2cf5cd(0x25d)](){var _0x423475=_0x2cf5cd;if(this['_WebSocketClass'])return this[_0x423475(0x28e)];let _0x28fd87;if(this['_inBrowser'])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x26c)];else{if(this[_0x423475(0x273)][_0x423475(0x2a2)]?.[_0x423475(0x22e)])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x2a2)]?.['_WebSocket'];else try{let _0x4e350b=await import(_0x423475(0x26e));_0x28fd87=(await import((await import(_0x423475(0x280)))[_0x423475(0x242)](_0x4e350b[_0x423475(0x252)](this[_0x423475(0x2a1)],_0x423475(0x245)))[_0x423475(0x225)]()))['default'];}catch{try{_0x28fd87=require(require(_0x423475(0x26e))[_0x423475(0x252)](this[_0x423475(0x2a1)],'ws'));}catch{throw new Error(_0x423475(0x247));}}}return this[_0x423475(0x28e)]=_0x28fd87,_0x28fd87;}[_0x2cf5cd(0x2a0)](){var _0x299e02=_0x2cf5cd;this[_0x299e02(0x232)]||this['_connected']||this['_connectAttemptCount']>=this[_0x299e02(0x2a8)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x299e02(0x232)]=!0x0,this['_connectAttemptCount']++,this[_0x299e02(0x209)]=new Promise((_0x323901,_0xe82100)=>{var _0x1f03e5=_0x299e02;this[_0x1f03e5(0x25d)]()[_0x1f03e5(0x284)](_0x289f22=>{var _0x312bc1=_0x1f03e5;let _0x1a955b=new _0x289f22(_0x312bc1(0x202)+this['host']+':'+this[_0x312bc1(0x26d)]);_0x1a955b[_0x312bc1(0x1f1)]=()=>{var _0x491c98=_0x312bc1;this['_allowedToSend']=!0x1,this[_0x491c98(0x281)](_0x1a955b),this[_0x491c98(0x2c5)](),_0xe82100(new Error(_0x491c98(0x206)));},_0x1a955b[_0x312bc1(0x2b2)]=()=>{var _0x496f4e=_0x312bc1;this[_0x496f4e(0x246)]||_0x1a955b['_socket']&&_0x1a955b[_0x496f4e(0x2b0)]['unref']&&_0x1a955b[_0x496f4e(0x2b0)]['unref'](),_0x323901(_0x1a955b);},_0x1a955b['onclose']=()=>{var _0x4a9cbf=_0x312bc1;this[_0x4a9cbf(0x248)]=!0x0,this['_disposeWebsocket'](_0x1a955b),this[_0x4a9cbf(0x2c5)]();},_0x1a955b[_0x312bc1(0x2b5)]=_0x5eb630=>{var _0x2133bb=_0x312bc1;try{_0x5eb630&&_0x5eb630['data']&&this['_inBrowser']&&JSON[_0x2133bb(0x231)](_0x5eb630[_0x2133bb(0x27a)])[_0x2133bb(0x2af)]==='reload'&&this[_0x2133bb(0x273)][_0x2133bb(0x27e)]['reload']();}catch{}};})['then'](_0x5c8281=>(this[_0x1f03e5(0x207)]=!0x0,this[_0x1f03e5(0x232)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x1f03e5(0x296)]=0x0,_0x5c8281))[_0x1f03e5(0x204)](_0x2e9680=>(this[_0x1f03e5(0x207)]=!0x1,this['_connecting']=!0x1,_0xe82100(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x2e9680&&_0x2e9680[_0x1f03e5(0x1ef)])))));}));}[_0x2cf5cd(0x281)](_0x196a35){var _0x2f6e0d=_0x2cf5cd;this[_0x2f6e0d(0x207)]=!0x1,this[_0x2f6e0d(0x232)]=!0x1;try{_0x196a35[_0x2f6e0d(0x2bb)]=null,_0x196a35[_0x2f6e0d(0x1f1)]=null,_0x196a35['onopen']=null;}catch{}try{_0x196a35[_0x2f6e0d(0x221)]<0x2&&_0x196a35[_0x2f6e0d(0x212)]();}catch{}}[_0x2cf5cd(0x2c5)](){var _0x610869=_0x2cf5cd;clearTimeout(this[_0x610869(0x22a)]),!(this[_0x610869(0x296)]>=this[_0x610869(0x2a8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x5d1aff=_0x610869;this[_0x5d1aff(0x207)]||this[_0x5d1aff(0x232)]||(this[_0x5d1aff(0x2a0)](),this[_0x5d1aff(0x209)]?.[_0x5d1aff(0x204)](()=>this[_0x5d1aff(0x2c5)]()));},0x1f4),this[_0x610869(0x22a)][_0x610869(0x2c4)]&&this['_reconnectTimeout'][_0x610869(0x2c4)]());}async['send'](_0x4da41b){var _0x25d38b=_0x2cf5cd;try{if(!this['_allowedToSend'])return;this[_0x25d38b(0x248)]&&this[_0x25d38b(0x2a0)](),(await this[_0x25d38b(0x209)])[_0x25d38b(0x1f2)](JSON[_0x25d38b(0x29d)](_0x4da41b));}catch(_0x284c46){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x284c46&&_0x284c46[_0x25d38b(0x1ef)])),this['_allowedToSend']=!0x1,this[_0x25d38b(0x2c5)]();}}};function V(_0xb97f7e,_0x19f69c,_0x301db6,_0x28b17b,_0x3028fb){var _0x4feedb=_0x2cf5cd;let _0xab03f1=_0x301db6[_0x4feedb(0x229)](',')[_0x4feedb(0x23f)](_0x2633fc=>{var _0x529807=_0x4feedb;try{_0xb97f7e[_0x529807(0x230)]||((_0x3028fb===_0x529807(0x283)||_0x3028fb===_0x529807(0x249)||_0x3028fb===_0x529807(0x2ac))&&(_0x3028fb+=_0xb97f7e['process']?.[_0x529807(0x2c1)]?.['node']?_0x529807(0x20d):_0x529807(0x237)),_0xb97f7e[_0x529807(0x230)]={'id':+new Date(),'tool':_0x3028fb});let _0xeb9db=new Q(_0xb97f7e,_0x19f69c,_0x2633fc,_0x28b17b);return _0xeb9db[_0x529807(0x1f2)][_0x529807(0x227)](_0xeb9db);}catch(_0x2230bd){return console[_0x529807(0x267)](_0x529807(0x22b),_0x2230bd&&_0x2230bd[_0x529807(0x1ef)]),()=>{};}});return _0x422510=>_0xab03f1[_0x4feedb(0x262)](_0x389f10=>_0x389f10(_0x422510));}function _0x2a98(){var _0x47734e=['disabledLog','_numberRegExp','autoExpandMaxDepth','undefined','unknown','Number','time','ws://','String','catch','RegExp','logger\\x20websocket\\x20error','_connected','isArray','_ws','54739014hZPxbX','1079648rjCDOH','getOwnPropertySymbols','\\x20server','_capIfString','_setNodeLabel','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','_blacklistedProperty','close','_isPrimitiveType','_p_','substr','_keyStrRegExp','error','hostname','concat','_regExpToString','61159','setter','create','_addFunctionsNode','getOwnPropertyDescriptor','_setNodeId','readyState','_Symbol','sort','depth','toString','_quotedRegExp','bind','string','split','_reconnectTimeout','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','nuxt','null','_WebSocket','_hasSymbolPropertyOnItsPath','_console_ninja_session','parse','_connecting','_additionalMetadata','...','_hasMapOnItsPath','allStrLength','\\x20browser','level','_treeNodePropertiesAfterFullValue','_p_name','timeStamp','_p_length','autoExpand','NEGATIVE_INFINITY','map','1525537RhiYyd','sortProps','pathToFileURL','_console_ninja','host','ws/index.js','_inBrowser','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_allowedToConnectOnSend','remix','current','length','1685344258094','test','totalStrLength','_property','Map','console','join','resolveGetters','serialize','HTMLAllCollection',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.129\\\\node_modules",'timeEnd','[object\\x20Set]','now','log','call','capped','getWebSocketClass','__es'+'Module','hits','stack','Boolean','forEach','expId','hrtime','1.0.0','default','warn','number','27PVbVzP','_isArray','_isSet','WebSocket','port','path','Set','valueOf','parent','count','global','constructor','_propertyName','_isMap','toLowerCase','strLength','getter','data','_dateToString','25989iNKKmv','_getOwnPropertyDescriptor','location','isExpressionToEvaluate','url','_disposeWebsocket','_cleanNode','next.js','then','index','_propertyAccessor','node','2365xiNUeo','2338510BlrUQW','unshift','cappedProps','[object\\x20Map]','remix','_WebSocketClass','_setNodeExpressionPath','performance','array','_isNegativeZero','function','[object\\x20Array]','_setNodeExpandableState','_connectAttemptCount','elapsed','_consoleNinjaAllowedToStart','props','positiveInfinity','noFunctions','push','stringify','[object\\x20Date]','root_exp_id','_connectToHostNow','nodeModules','process','_setNodePermissions','_sortProps','reduceLimits','_type','cappedElements','_maxConnectAttemptCount','argumentResolutionError','trace','elements','astro','autoExpandPreviousObjects','defineProperty','method','_socket','type','onopen','_processTreeNodeResult','_objectToString','onmessage','negativeZero','bigint','Symbol','7HexpBI','Buffer','onclose','boolean','symbol','_addLoadNode','358RbwaIx','getOwnPropertyNames','versions','autoExpandLimit','includes','unref','_attemptToReconnectShortly','_isPrimitiveWrapperType','_HTMLAllCollection','match','date','autoExpandPropertyCount','127.0.0.1','value','hasOwnProperty','_addProperty','set','prototype','negativeInfinity','object','5054958GGLzRP','message','9436aEdZNf','onerror','send','_addObjectProperty','name','stackTraceLimit','_allowedToSend','_setNodeQueryPath','expressionsToEvaluate','_getOwnPropertySymbols','_treeNodePropertiesBeforeFullValue'];_0x2a98=function(){return _0x47734e;};return _0x2a98();}function H(_0x45561e){var _0x534322=_0x2cf5cd;let _0x3f152c=function(_0x148806,_0x5ef6f9){return _0x5ef6f9-_0x148806;},_0x50eaf0;if(_0x45561e[_0x534322(0x290)])_0x50eaf0=function(){var _0x376037=_0x534322;return _0x45561e[_0x376037(0x290)][_0x376037(0x259)]();};else{if(_0x45561e[_0x534322(0x2a2)]&&_0x45561e['process'][_0x534322(0x264)])_0x50eaf0=function(){var _0x3938fb=_0x534322;return _0x45561e[_0x3938fb(0x2a2)][_0x3938fb(0x264)]();},_0x3f152c=function(_0x4d6428,_0x24c728){return 0x3e8*(_0x24c728[0x0]-_0x4d6428[0x0])+(_0x24c728[0x1]-_0x4d6428[0x1])/0xf4240;};else try{let {performance:_0x2c50fd}=require('perf_hooks');_0x50eaf0=function(){var _0x39ffd2=_0x534322;return _0x2c50fd[_0x39ffd2(0x259)]();};}catch{_0x50eaf0=function(){return+new Date();};}}return{'elapsed':_0x3f152c,'timeStamp':_0x50eaf0,'now':()=>Date[_0x534322(0x259)]()};}function X(_0x1f6729,_0x5c6190,_0x217af5){var _0x126b42=_0x2cf5cd;if(_0x1f6729['_consoleNinjaAllowedToStart']!==void 0x0)return _0x1f6729[_0x126b42(0x298)];let _0xe76fa6=_0x1f6729[_0x126b42(0x2a2)]?.[_0x126b42(0x2c1)]?.['node'];return _0xe76fa6&&_0x217af5===_0x126b42(0x22c)?_0x1f6729['_consoleNinjaAllowedToStart']=!0x1:_0x1f6729[_0x126b42(0x298)]=_0xe76fa6||!_0x5c6190||_0x1f6729['location']?.[_0x126b42(0x218)]&&_0x5c6190[_0x126b42(0x2c3)](_0x1f6729[_0x126b42(0x27e)][_0x126b42(0x218)]),_0x1f6729[_0x126b42(0x298)];}function _0x40be(_0x15e1bb,_0x1a4e5d){var _0x2a98f1=_0x2a98();return _0x40be=function(_0x40be20,_0x4701b9){_0x40be20=_0x40be20-0x1e3;var _0x3331c5=_0x2a98f1[_0x40be20];return _0x3331c5;},_0x40be(_0x15e1bb,_0x1a4e5d);}((_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548,_0x2b2eb2,_0x1b70b3,_0x41ce87,_0x40492c)=>{var _0xaf924a=_0x2cf5cd;if(_0x49b204[_0xaf924a(0x243)])return _0x49b204[_0xaf924a(0x243)];if(!X(_0x49b204,_0x41ce87,_0x489548))return _0x49b204['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x49b204[_0xaf924a(0x243)];let _0xf0b388={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5b35fa={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x505e5e=H(_0x49b204),_0x254ab2=_0x505e5e[_0xaf924a(0x297)],_0x4a93d3=_0x505e5e[_0xaf924a(0x23b)],_0xe1d997=_0x505e5e[_0xaf924a(0x259)],_0x47a49a={'hits':{},'ts':{}},_0x2cbc42=_0x1a66cf=>{_0x47a49a['ts'][_0x1a66cf]=_0x4a93d3();},_0x40058f=(_0x55f653,_0x438427)=>{let _0x25052b=_0x47a49a['ts'][_0x438427];if(delete _0x47a49a['ts'][_0x438427],_0x25052b){let _0x4bcb71=_0x254ab2(_0x25052b,_0x4a93d3());_0x1a6309(_0x195f4e('time',_0x55f653,_0xe1d997(),_0xe5069f,[_0x4bcb71],_0x438427));}},_0x1cf403=_0x391d70=>_0x34ff71=>{var _0x545190=_0xaf924a;try{_0x2cbc42(_0x34ff71),_0x391d70(_0x34ff71);}finally{_0x49b204[_0x545190(0x251)][_0x545190(0x201)]=_0x391d70;}},_0x162ea0=_0x434010=>_0x2d8916=>{var _0x386e10=_0xaf924a;try{let [_0x4df1d3,_0x22fa1a]=_0x2d8916[_0x386e10(0x229)](':logPointId:');_0x40058f(_0x22fa1a,_0x4df1d3),_0x434010(_0x4df1d3);}finally{_0x49b204['console'][_0x386e10(0x257)]=_0x434010;}};_0x49b204[_0xaf924a(0x243)]={'consoleLog':(_0x467987,_0x342fa0)=>{var _0x37d8e1=_0xaf924a;_0x49b204[_0x37d8e1(0x251)]['log']['name']!==_0x37d8e1(0x1fb)&&_0x1a6309(_0x195f4e(_0x37d8e1(0x25a),_0x467987,_0xe1d997(),_0xe5069f,_0x342fa0));},'consoleTrace':(_0x4f9b55,_0x2c5df8)=>{var _0x409a8a=_0xaf924a;_0x49b204[_0x409a8a(0x251)]['log'][_0x409a8a(0x1f4)]!=='disabledTrace'&&_0x1a6309(_0x195f4e('trace',_0x4f9b55,_0xe1d997(),_0xe5069f,_0x2c5df8));},'consoleTime':()=>{var _0x372b3c=_0xaf924a;_0x49b204[_0x372b3c(0x251)][_0x372b3c(0x201)]=_0x1cf403(_0x49b204[_0x372b3c(0x251)]['time']);},'consoleTimeEnd':()=>{var _0x49bb97=_0xaf924a;_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]=_0x162ea0(_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]);},'autoLog':(_0x108d5f,_0x4cf9ca)=>{var _0x16ba00=_0xaf924a;_0x1a6309(_0x195f4e(_0x16ba00(0x25a),_0x4cf9ca,_0xe1d997(),_0xe5069f,[_0x108d5f]));},'autoTrace':(_0x1e46d6,_0x2c00ce)=>{var _0x54ceaa=_0xaf924a;_0x1a6309(_0x195f4e(_0x54ceaa(0x2aa),_0x2c00ce,_0xe1d997(),_0xe5069f,[_0x1e46d6]));},'autoTime':(_0x296ec5,_0x4d05a6,_0xae7de0)=>{_0x2cbc42(_0xae7de0);},'autoTimeEnd':(_0x4787e8,_0x45534c,_0x282ccd)=>{_0x40058f(_0x45534c,_0x282ccd);}};let _0x1a6309=V(_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548),_0xe5069f=_0x49b204[_0xaf924a(0x230)];class _0x3ea185{constructor(){var _0x8f3991=_0xaf924a;this[_0x8f3991(0x216)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x49b204['undefined'],this[_0x8f3991(0x2c7)]=_0x49b204[_0x8f3991(0x255)],this['_getOwnPropertyDescriptor']=Object[_0x8f3991(0x21f)],this['_getOwnPropertyNames']=Object[_0x8f3991(0x2c0)],this['_Symbol']=_0x49b204[_0x8f3991(0x2b8)],this[_0x8f3991(0x21a)]=RegExp[_0x8f3991(0x1eb)][_0x8f3991(0x225)],this[_0x8f3991(0x27b)]=Date[_0x8f3991(0x1eb)][_0x8f3991(0x225)];}[_0xaf924a(0x254)](_0x1ffbdf,_0x261664,_0x1119b9,_0x220a1b){var _0x35a28c=_0xaf924a,_0x2b5b13=this,_0xb5b34f=_0x1119b9[_0x35a28c(0x23d)];function _0x3e7ce9(_0x18896a,_0x17698b,_0x102b14){var _0x587cf5=_0x35a28c;_0x17698b['type']=_0x587cf5(0x1ff),_0x17698b[_0x587cf5(0x217)]=_0x18896a['message'],_0x1c9374=_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)],_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)]=_0x17698b,_0x2b5b13['_treeNodePropertiesBeforeFullValue'](_0x17698b,_0x102b14);}if(_0x261664&&_0x261664[_0x35a28c(0x2a9)])_0x3e7ce9(_0x261664,_0x1ffbdf,_0x1119b9);else try{_0x1119b9[_0x35a28c(0x238)]++,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x2ad)][_0x35a28c(0x29c)](_0x261664);var _0x4abe4f,_0x4d7716,_0x16f780,_0x4f50fc,_0x4c3fd8=[],_0x2e94bd=[],_0x107b8f,_0x1a262d=this[_0x35a28c(0x2a6)](_0x261664),_0xec7933=_0x1a262d==='array',_0x48c47a=!0x1,_0x55a62b=_0x1a262d===_0x35a28c(0x293),_0x5dd4e0=this[_0x35a28c(0x213)](_0x1a262d),_0x482298=this[_0x35a28c(0x2c6)](_0x1a262d),_0x164aa8=_0x5dd4e0||_0x482298,_0x1739c6={},_0x2d507c=0x0,_0x18b048=!0x1,_0x1c9374,_0xeccd3f=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1119b9[_0x35a28c(0x224)]){if(_0xec7933){if(_0x4d7716=_0x261664[_0x35a28c(0x24b)],_0x4d7716>_0x1119b9[_0x35a28c(0x2ab)]){for(_0x16f780=0x0,_0x4f50fc=_0x1119b9[_0x35a28c(0x2ab)],_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));_0x1ffbdf[_0x35a28c(0x2a7)]=!0x0;}else{for(_0x16f780=0x0,_0x4f50fc=_0x4d7716,_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));}_0x1119b9['autoExpandPropertyCount']+=_0x2e94bd['length'];}if(!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&!_0x5dd4e0&&_0x1a262d!==_0x35a28c(0x203)&&_0x1a262d!==_0x35a28c(0x2ba)&&_0x1a262d!==_0x35a28c(0x2b7)){var _0x2ae62d=_0x220a1b[_0x35a28c(0x299)]||_0x1119b9[_0x35a28c(0x299)];if(this[_0x35a28c(0x26b)](_0x261664)?(_0x4abe4f=0x0,_0x261664['forEach'](function(_0x46649f){var _0x15a7b7=_0x35a28c;if(_0x2d507c++,_0x1119b9[_0x15a7b7(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x15a7b7(0x27f)]&&_0x1119b9['autoExpand']&&_0x1119b9[_0x15a7b7(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;return;}_0x2e94bd[_0x15a7b7(0x29c)](_0x2b5b13[_0x15a7b7(0x1e9)](_0x4c3fd8,_0x261664,'Set',_0x4abe4f++,_0x1119b9,function(_0x5c98b8){return function(){return _0x5c98b8;};}(_0x46649f)));})):this[_0x35a28c(0x276)](_0x261664)&&_0x261664['forEach'](function(_0x8ca25,_0x4c3572){var _0x1bfdfd=_0x35a28c;if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x1bfdfd(0x27f)]&&_0x1119b9[_0x1bfdfd(0x23d)]&&_0x1119b9['autoExpandPropertyCount']>_0x1119b9[_0x1bfdfd(0x2c2)]){_0x18b048=!0x0;return;}var _0x4873de=_0x4c3572['toString']();_0x4873de[_0x1bfdfd(0x24b)]>0x64&&(_0x4873de=_0x4873de['slice'](0x0,0x64)+_0x1bfdfd(0x234)),_0x2e94bd[_0x1bfdfd(0x29c)](_0x2b5b13[_0x1bfdfd(0x1e9)](_0x4c3fd8,_0x261664,_0x1bfdfd(0x250),_0x4873de,_0x1119b9,function(_0x1cdb70){return function(){return _0x1cdb70;};}(_0x8ca25)));}),!_0x48c47a){try{for(_0x107b8f in _0x261664)if(!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)){if(_0x2d507c++,_0x1119b9[_0x35a28c(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9[_0x35a28c(0x2c2)]){_0x18b048=!0x0;break;}_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}catch{}if(_0x1739c6[_0x35a28c(0x23c)]=!0x0,_0x55a62b&&(_0x1739c6[_0x35a28c(0x23a)]=!0x0),!_0x18b048){var _0x155fac=[][_0x35a28c(0x219)](this['_getOwnPropertyNames'](_0x261664))['concat'](this[_0x35a28c(0x1f9)](_0x261664));for(_0x4abe4f=0x0,_0x4d7716=_0x155fac[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)if(_0x107b8f=_0x155fac[_0x4abe4f],!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f['toString']()))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)&&!_0x1739c6[_0x35a28c(0x214)+_0x107b8f[_0x35a28c(0x225)]()]){if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;break;}_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}}}}if(_0x1ffbdf[_0x35a28c(0x2b1)]=_0x1a262d,_0x164aa8?(_0x1ffbdf[_0x35a28c(0x1e7)]=_0x261664[_0x35a28c(0x270)](),this[_0x35a28c(0x20e)](_0x1a262d,_0x1ffbdf,_0x1119b9,_0x220a1b)):_0x1a262d===_0x35a28c(0x1e4)?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x27b)][_0x35a28c(0x25b)](_0x261664):_0x1a262d===_0x35a28c(0x205)?_0x1ffbdf[_0x35a28c(0x1e7)]=this['_regExpToString']['call'](_0x261664):_0x1a262d===_0x35a28c(0x2bd)&&this['_Symbol']?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x222)][_0x35a28c(0x1eb)][_0x35a28c(0x225)][_0x35a28c(0x25b)](_0x261664):!_0x1119b9[_0x35a28c(0x224)]&&!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&(delete _0x1ffbdf[_0x35a28c(0x1e7)],_0x1ffbdf[_0x35a28c(0x25c)]=!0x0),_0x18b048&&(_0x1ffbdf[_0x35a28c(0x28b)]=!0x0),_0x1c9374=_0x1119b9[_0x35a28c(0x287)]['current'],_0x1119b9[_0x35a28c(0x287)][_0x35a28c(0x24a)]=_0x1ffbdf,this[_0x35a28c(0x1fa)](_0x1ffbdf,_0x1119b9),_0x2e94bd[_0x35a28c(0x24b)]){for(_0x4abe4f=0x0,_0x4d7716=_0x2e94bd[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)_0x2e94bd[_0x4abe4f](_0x4abe4f);}_0x4c3fd8[_0x35a28c(0x24b)]&&(_0x1ffbdf['props']=_0x4c3fd8);}catch(_0x5acfee){_0x3e7ce9(_0x5acfee,_0x1ffbdf,_0x1119b9);}return this[_0x35a28c(0x233)](_0x261664,_0x1ffbdf),this[_0x35a28c(0x239)](_0x1ffbdf,_0x1119b9),_0x1119b9['node'][_0x35a28c(0x24a)]=_0x1c9374,_0x1119b9[_0x35a28c(0x238)]--,_0x1119b9['autoExpand']=_0xb5b34f,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9['autoExpandPreviousObjects']['pop'](),_0x1ffbdf;}[_0xaf924a(0x1f9)](_0x26b81e){var _0x33466c=_0xaf924a;return Object[_0x33466c(0x20c)]?Object[_0x33466c(0x20c)](_0x26b81e):[];}[_0xaf924a(0x26b)](_0x3fbc47){var _0x1986bd=_0xaf924a;return!!(_0x3fbc47&&_0x49b204[_0x1986bd(0x26f)]&&this[_0x1986bd(0x2b4)](_0x3fbc47)===_0x1986bd(0x258)&&_0x3fbc47[_0x1986bd(0x262)]);}[_0xaf924a(0x211)](_0x1ab315,_0x21ebf2,_0x470340){var _0x48210a=_0xaf924a;return _0x470340[_0x48210a(0x29b)]?typeof _0x1ab315[_0x21ebf2]==_0x48210a(0x293):!0x1;}['_type'](_0x5dcb54){var _0x3d62dd=_0xaf924a,_0x2fc396='';return _0x2fc396=typeof _0x5dcb54,_0x2fc396==='object'?this['_objectToString'](_0x5dcb54)===_0x3d62dd(0x294)?_0x2fc396=_0x3d62dd(0x291):this[_0x3d62dd(0x2b4)](_0x5dcb54)===_0x3d62dd(0x29e)?_0x2fc396=_0x3d62dd(0x1e4):_0x5dcb54===null?_0x2fc396='null':_0x5dcb54[_0x3d62dd(0x274)]&&(_0x2fc396=_0x5dcb54['constructor'][_0x3d62dd(0x1f4)]||_0x2fc396):_0x2fc396===_0x3d62dd(0x1fe)&&this['_HTMLAllCollection']&&_0x5dcb54 instanceof this[_0x3d62dd(0x2c7)]&&(_0x2fc396=_0x3d62dd(0x255)),_0x2fc396;}['_objectToString'](_0x141c18){var _0x3ac2dc=_0xaf924a;return Object['prototype'][_0x3ac2dc(0x225)][_0x3ac2dc(0x25b)](_0x141c18);}[_0xaf924a(0x213)](_0x5a457d){var _0x597d85=_0xaf924a;return _0x5a457d===_0x597d85(0x2bc)||_0x5a457d===_0x597d85(0x228)||_0x5a457d===_0x597d85(0x268);}[_0xaf924a(0x2c6)](_0x5898cf){var _0x3157c0=_0xaf924a;return _0x5898cf===_0x3157c0(0x261)||_0x5898cf===_0x3157c0(0x203)||_0x5898cf==='Number';}['_addProperty'](_0x5245f8,_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048){var _0x4f3373=this;return function(_0x6f86d0){var _0x55b709=_0x40be,_0x497a8c=_0x34b2c2[_0x55b709(0x287)]['current'],_0x401bcb=_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)],_0x4e8dba=_0x34b2c2['node'][_0x55b709(0x271)];_0x34b2c2[_0x55b709(0x287)]['parent']=_0x497a8c,_0x34b2c2[_0x55b709(0x287)]['index']=typeof _0x2ef032==_0x55b709(0x268)?_0x2ef032:_0x6f86d0,_0x5245f8['push'](_0x4f3373[_0x55b709(0x24f)](_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048)),_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x271)]=_0x4e8dba,_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)]=_0x401bcb;};}[_0xaf924a(0x1f3)](_0x1d7c25,_0x5b8b24,_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3){var _0xd780f0=_0xaf924a,_0x8addf0=this;return _0x5b8b24[_0xd780f0(0x214)+_0x1e6ee4[_0xd780f0(0x225)]()]=!0x0,function(_0x239d6b){var _0x1443cd=_0xd780f0,_0x4df5e1=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x24a)],_0x540e10=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)],_0x2915bc=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)];_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)]=_0x4df5e1,_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)]=_0x239d6b,_0x1d7c25[_0x1443cd(0x29c)](_0x8addf0[_0x1443cd(0x24f)](_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3)),_0x3b78cf['node'][_0x1443cd(0x271)]=_0x2915bc,_0x3b78cf[_0x1443cd(0x287)]['index']=_0x540e10;};}[_0xaf924a(0x24f)](_0x2dc156,_0x84e3c9,_0x3d7e0f,_0x50afce,_0x126c84){var _0x8fb306=_0xaf924a,_0x57d1bb=this;_0x126c84||(_0x126c84=function(_0x277ab9,_0x4edfaa){return _0x277ab9[_0x4edfaa];});var _0x4d7cfe=_0x3d7e0f[_0x8fb306(0x225)](),_0x338741=_0x50afce[_0x8fb306(0x1f8)]||{},_0x135349=_0x50afce[_0x8fb306(0x224)],_0x3fc65a=_0x50afce[_0x8fb306(0x27f)];try{var _0x141963=this['_isMap'](_0x2dc156),_0x31060d=_0x4d7cfe;_0x141963&&_0x31060d[0x0]==='\\x27'&&(_0x31060d=_0x31060d['substr'](0x1,_0x31060d['length']-0x2));var _0x2b079a=_0x50afce[_0x8fb306(0x1f8)]=_0x338741['_p_'+_0x31060d];_0x2b079a&&(_0x50afce[_0x8fb306(0x224)]=_0x50afce['depth']+0x1),_0x50afce[_0x8fb306(0x27f)]=!!_0x2b079a;var _0x15c8b0=typeof _0x3d7e0f=='symbol',_0x24ddbc={'name':_0x15c8b0||_0x141963?_0x4d7cfe:this[_0x8fb306(0x275)](_0x4d7cfe)};if(_0x15c8b0&&(_0x24ddbc[_0x8fb306(0x2bd)]=!0x0),!(_0x84e3c9===_0x8fb306(0x291)||_0x84e3c9==='Error')){var _0x431848=this[_0x8fb306(0x27d)](_0x2dc156,_0x3d7e0f);if(_0x431848&&(_0x431848[_0x8fb306(0x1ea)]&&(_0x24ddbc[_0x8fb306(0x21c)]=!0x0),_0x431848['get']&&!_0x2b079a&&!_0x50afce[_0x8fb306(0x253)]))return _0x24ddbc[_0x8fb306(0x279)]=!0x0,this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x2b3202;try{_0x2b3202=_0x126c84(_0x2dc156,_0x3d7e0f);}catch(_0x14b48e){return _0x24ddbc={'name':_0x4d7cfe,'type':'unknown','error':_0x14b48e[_0x8fb306(0x1ef)]},this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x41dc6b=this['_type'](_0x2b3202),_0x40b8f0=this[_0x8fb306(0x213)](_0x41dc6b);if(_0x24ddbc[_0x8fb306(0x2b1)]=_0x41dc6b,_0x40b8f0)this['_processTreeNodeResult'](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x559389=_0x8fb306;_0x24ddbc['value']=_0x2b3202[_0x559389(0x270)](),!_0x2b079a&&_0x57d1bb['_capIfString'](_0x41dc6b,_0x24ddbc,_0x50afce,{});});else{var _0x57f4f8=_0x50afce[_0x8fb306(0x23d)]&&_0x50afce[_0x8fb306(0x238)]<_0x50afce['autoExpandMaxDepth']&&_0x50afce[_0x8fb306(0x2ad)]['indexOf'](_0x2b3202)<0x0&&_0x41dc6b!==_0x8fb306(0x293)&&_0x50afce[_0x8fb306(0x1e5)]<_0x50afce[_0x8fb306(0x2c2)];_0x57f4f8||_0x50afce[_0x8fb306(0x238)]<_0x135349||_0x2b079a?(this[_0x8fb306(0x254)](_0x24ddbc,_0x2b3202,_0x50afce,_0x2b079a||{}),this[_0x8fb306(0x233)](_0x2b3202,_0x24ddbc)):this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x267210=_0x8fb306;_0x41dc6b===_0x267210(0x22d)||_0x41dc6b===_0x267210(0x1fe)||(delete _0x24ddbc[_0x267210(0x1e7)],_0x24ddbc[_0x267210(0x25c)]=!0x0);});}return _0x24ddbc;}finally{_0x50afce['expressionsToEvaluate']=_0x338741,_0x50afce[_0x8fb306(0x224)]=_0x135349,_0x50afce[_0x8fb306(0x27f)]=_0x3fc65a;}}[_0xaf924a(0x20e)](_0x4b62bd,_0xc40a6,_0x76d4db,_0x1bb854){var _0x2b20d2=_0xaf924a,_0x48134b=_0x1bb854['strLength']||_0x76d4db[_0x2b20d2(0x278)];if((_0x4b62bd===_0x2b20d2(0x228)||_0x4b62bd==='String')&&_0xc40a6[_0x2b20d2(0x1e7)]){let _0x489af6=_0xc40a6['value'][_0x2b20d2(0x24b)];_0x76d4db['allStrLength']+=_0x489af6,_0x76d4db[_0x2b20d2(0x236)]>_0x76d4db[_0x2b20d2(0x24e)]?(_0xc40a6[_0x2b20d2(0x25c)]='',delete _0xc40a6['value']):_0x489af6>_0x48134b&&(_0xc40a6['capped']=_0xc40a6[_0x2b20d2(0x1e7)][_0x2b20d2(0x215)](0x0,_0x48134b),delete _0xc40a6[_0x2b20d2(0x1e7)]);}}['_isMap'](_0x137793){var _0x274dce=_0xaf924a;return!!(_0x137793&&_0x49b204['Map']&&this[_0x274dce(0x2b4)](_0x137793)===_0x274dce(0x28c)&&_0x137793[_0x274dce(0x262)]);}[_0xaf924a(0x275)](_0x3b398f){var _0x3414c6=_0xaf924a;if(_0x3b398f[_0x3414c6(0x1e3)](/^\\d+$/))return _0x3b398f;var _0x3a961e;try{_0x3a961e=JSON['stringify'](''+_0x3b398f);}catch{_0x3a961e='\\x22'+this[_0x3414c6(0x2b4)](_0x3b398f)+'\\x22';}return _0x3a961e['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x3a961e=_0x3a961e[_0x3414c6(0x215)](0x1,_0x3a961e['length']-0x2):_0x3a961e=_0x3a961e['replace'](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x3a961e;}['_processTreeNodeResult'](_0x494cf3,_0x3a7130,_0x2965bb,_0x4ed090){var _0x1fc133=_0xaf924a;this[_0x1fc133(0x1fa)](_0x494cf3,_0x3a7130),_0x4ed090&&_0x4ed090(),this[_0x1fc133(0x233)](_0x2965bb,_0x494cf3),this[_0x1fc133(0x239)](_0x494cf3,_0x3a7130);}[_0xaf924a(0x1fa)](_0x8a70e8,_0x172dc9){var _0x5bfd95=_0xaf924a;this['_setNodeId'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x1f7)](_0x8a70e8,_0x172dc9),this['_setNodeExpressionPath'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x2a3)](_0x8a70e8,_0x172dc9);}[_0xaf924a(0x220)](_0x1021a5,_0x494447){}['_setNodeQueryPath'](_0x20ad16,_0x5f3886){}[_0xaf924a(0x20f)](_0x13a7a7,_0x54f993){}['_isUndefined'](_0x310d6f){return _0x310d6f===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x43c671,_0x48f11a){var _0x321c60=_0xaf924a;this[_0x321c60(0x20f)](_0x43c671,_0x48f11a),this['_setNodeExpandableState'](_0x43c671),_0x48f11a[_0x321c60(0x241)]&&this[_0x321c60(0x2a4)](_0x43c671),this[_0x321c60(0x21e)](_0x43c671,_0x48f11a),this['_addLoadNode'](_0x43c671,_0x48f11a),this[_0x321c60(0x282)](_0x43c671);}[_0xaf924a(0x233)](_0x226191,_0x58f6f1){var _0x43a02f=_0xaf924a;try{_0x226191&&typeof _0x226191[_0x43a02f(0x24b)]==_0x43a02f(0x268)&&(_0x58f6f1['length']=_0x226191[_0x43a02f(0x24b)]);}catch{}if(_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x268)||_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x200)){if(isNaN(_0x58f6f1[_0x43a02f(0x1e7)]))_0x58f6f1['nan']=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];else switch(_0x58f6f1[_0x43a02f(0x1e7)]){case Number['POSITIVE_INFINITY']:_0x58f6f1[_0x43a02f(0x29a)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case Number[_0x43a02f(0x23e)]:_0x58f6f1[_0x43a02f(0x1ec)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case 0x0:this[_0x43a02f(0x292)](_0x58f6f1[_0x43a02f(0x1e7)])&&(_0x58f6f1[_0x43a02f(0x2b6)]=!0x0);break;}}else _0x58f6f1['type']==='function'&&typeof _0x226191[_0x43a02f(0x1f4)]==_0x43a02f(0x228)&&_0x226191[_0x43a02f(0x1f4)]&&_0x58f6f1[_0x43a02f(0x1f4)]&&_0x226191['name']!==_0x58f6f1[_0x43a02f(0x1f4)]&&(_0x58f6f1['funcName']=_0x226191[_0x43a02f(0x1f4)]);}[_0xaf924a(0x292)](_0x99e5d7){var _0x5af86c=_0xaf924a;return 0x1/_0x99e5d7===Number[_0x5af86c(0x23e)];}[_0xaf924a(0x2a4)](_0x4da140){var _0x59d583=_0xaf924a;!_0x4da140[_0x59d583(0x299)]||!_0x4da140['props'][_0x59d583(0x24b)]||_0x4da140['type']===_0x59d583(0x291)||_0x4da140[_0x59d583(0x2b1)]===_0x59d583(0x250)||_0x4da140['type']===_0x59d583(0x26f)||_0x4da140[_0x59d583(0x299)][_0x59d583(0x223)](function(_0x2bca0f,_0x6aada0){var _0x433cc9=_0x59d583,_0x220ffd=_0x2bca0f[_0x433cc9(0x1f4)][_0x433cc9(0x277)](),_0x52a25d=_0x6aada0[_0x433cc9(0x1f4)][_0x433cc9(0x277)]();return _0x220ffd<_0x52a25d?-0x1:_0x220ffd>_0x52a25d?0x1:0x0;});}[_0xaf924a(0x21e)](_0x48dce4,_0x48f4c6){var _0x2678d7=_0xaf924a;if(!(_0x48f4c6['noFunctions']||!_0x48dce4[_0x2678d7(0x299)]||!_0x48dce4[_0x2678d7(0x299)]['length'])){for(var _0x279f85=[],_0x27fbf8=[],_0x58bb24=0x0,_0x1abc8f=_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x24b)];_0x58bb24<_0x1abc8f;_0x58bb24++){var _0x3caeb2=_0x48dce4['props'][_0x58bb24];_0x3caeb2[_0x2678d7(0x2b1)]===_0x2678d7(0x293)?_0x279f85[_0x2678d7(0x29c)](_0x3caeb2):_0x27fbf8[_0x2678d7(0x29c)](_0x3caeb2);}if(!(!_0x27fbf8[_0x2678d7(0x24b)]||_0x279f85[_0x2678d7(0x24b)]<=0x1)){_0x48dce4[_0x2678d7(0x299)]=_0x27fbf8;var _0xe3d941={'functionsNode':!0x0,'props':_0x279f85};this[_0x2678d7(0x220)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x20f)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x295)](_0xe3d941),this['_setNodePermissions'](_0xe3d941,_0x48f4c6),_0xe3d941['id']+='\\x20f',_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x28a)](_0xe3d941);}}}[_0xaf924a(0x2be)](_0x48eb38,_0x20f75c){}[_0xaf924a(0x295)](_0x129122){}[_0xaf924a(0x26a)](_0x1f6bb8){var _0x2820a2=_0xaf924a;return Array[_0x2820a2(0x208)](_0x1f6bb8)||typeof _0x1f6bb8==_0x2820a2(0x1ed)&&this[_0x2820a2(0x2b4)](_0x1f6bb8)===_0x2820a2(0x294);}[_0xaf924a(0x2a3)](_0x1ea391,_0x8f50b2){}['_cleanNode'](_0x52cd26){var _0x498c91=_0xaf924a;delete _0x52cd26[_0x498c91(0x22f)],delete _0x52cd26['_hasSetOnItsPath'],delete _0x52cd26[_0x498c91(0x235)];}[_0xaf924a(0x28f)](_0x5c8a9c,_0x31124f){}[_0xaf924a(0x286)](_0x2f7a58){var _0x397561=_0xaf924a;return _0x2f7a58?_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x1fc)])?'['+_0x2f7a58+']':_0x2f7a58[_0x397561(0x1e3)](this['_keyStrRegExp'])?'.'+_0x2f7a58:_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x226)])?'['+_0x2f7a58+']':'[\\x27'+_0x2f7a58+'\\x27]':'';}}let _0x3fbb82=new _0x3ea185();function _0x195f4e(_0x20dbd1,_0x567217,_0x7b3f99,_0x256338,_0x381038,_0xb947b4){var _0x5299ea=_0xaf924a;let _0xc570be,_0x171851;try{_0x171851=_0x4a93d3(),_0xc570be=_0x47a49a[_0x567217],!_0xc570be||_0x171851-_0xc570be['ts']>0x1f4&&_0xc570be[_0x5299ea(0x272)]&&_0xc570be['time']/_0xc570be[_0x5299ea(0x272)]<0x64?(_0x47a49a[_0x567217]=_0xc570be={'count':0x0,'time':0x0,'ts':_0x171851},_0x47a49a[_0x5299ea(0x25f)]={}):_0x171851-_0x47a49a[_0x5299ea(0x25f)]['ts']>0x32&&_0x47a49a['hits']['count']&&_0x47a49a[_0x5299ea(0x25f)]['time']/_0x47a49a['hits'][_0x5299ea(0x272)]<0x64&&(_0x47a49a[_0x5299ea(0x25f)]={});let _0x4ea285=[],_0x56b786=_0xc570be['reduceLimits']||_0x47a49a['hits'][_0x5299ea(0x2a5)]?_0x5b35fa:_0xf0b388,_0x3563e3=_0x51e7d1=>{var _0x2491a0=_0x5299ea;let _0x26ab25={};return _0x26ab25[_0x2491a0(0x299)]=_0x51e7d1[_0x2491a0(0x299)],_0x26ab25['elements']=_0x51e7d1['elements'],_0x26ab25['strLength']=_0x51e7d1['strLength'],_0x26ab25[_0x2491a0(0x24e)]=_0x51e7d1[_0x2491a0(0x24e)],_0x26ab25[_0x2491a0(0x2c2)]=_0x51e7d1[_0x2491a0(0x2c2)],_0x26ab25['autoExpandMaxDepth']=_0x51e7d1[_0x2491a0(0x1fd)],_0x26ab25[_0x2491a0(0x241)]=!0x1,_0x26ab25[_0x2491a0(0x29b)]=!_0x40492c,_0x26ab25[_0x2491a0(0x224)]=0x1,_0x26ab25[_0x2491a0(0x238)]=0x0,_0x26ab25[_0x2491a0(0x263)]=_0x2491a0(0x29f),_0x26ab25['rootExpression']='root_exp',_0x26ab25['autoExpand']=!0x0,_0x26ab25[_0x2491a0(0x2ad)]=[],_0x26ab25[_0x2491a0(0x1e5)]=0x0,_0x26ab25[_0x2491a0(0x253)]=!0x0,_0x26ab25['allStrLength']=0x0,_0x26ab25[_0x2491a0(0x287)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x26ab25;};for(var _0x35907a=0x0;_0x35907a<_0x381038[_0x5299ea(0x24b)];_0x35907a++)_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82['serialize']({'timeNode':_0x20dbd1===_0x5299ea(0x201)||void 0x0},_0x381038[_0x35907a],_0x3563e3(_0x56b786),{}));if(_0x20dbd1===_0x5299ea(0x2aa)){let _0xecc6de=Error[_0x5299ea(0x1f5)];try{Error[_0x5299ea(0x1f5)]=0x1/0x0,_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82[_0x5299ea(0x254)]({'stackNode':!0x0},new Error()[_0x5299ea(0x260)],_0x3563e3(_0x56b786),{'strLength':0x1/0x0}));}finally{Error[_0x5299ea(0x1f5)]=_0xecc6de;}}return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':_0x4ea285,'id':_0x567217,'context':_0xb947b4}]};}catch(_0xeea157){return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':[{'type':_0x5299ea(0x1ff),'error':_0xeea157&&_0xeea157[_0x5299ea(0x1ef)]}],'id':_0x567217,'context':_0xb947b4}]};}finally{try{if(_0xc570be&&_0x171851){let _0x5613c6=_0x4a93d3();_0xc570be[_0x5299ea(0x272)]++,_0xc570be['time']+=_0x254ab2(_0x171851,_0x5613c6),_0xc570be['ts']=_0x5613c6,_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]++,_0x47a49a['hits']['time']+=_0x254ab2(_0x171851,_0x5613c6),_0x47a49a[_0x5299ea(0x25f)]['ts']=_0x5613c6,(_0xc570be['count']>0x32||_0xc570be[_0x5299ea(0x201)]>0x64)&&(_0xc570be[_0x5299ea(0x2a5)]=!0x0),(_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]>0x3e8||_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x201)]>0x12c)&&(_0x47a49a['hits'][_0x5299ea(0x2a5)]=!0x0);}}catch{}}}return _0x49b204[_0xaf924a(0x243)];})(globalThis,_0x2cf5cd(0x1e6),_0x2cf5cd(0x21b),_0x2cf5cd(0x256),_0x2cf5cd(0x28d),_0x2cf5cd(0x265),_0x2cf5cd(0x24c),["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.7"],'');`
      )
    );
  } catch {}
}
function oo_oo10(i, ...v) {
  try {
    oo_cm10().consoleLog(i, v);
  } catch {}
  return v;
}

// app/features/Suggestion/Suggestion.tsx
var import_jsx_runtime20 = require('react/jsx-runtime');
function Suggestion2({ editor, suggest, optimistic = !1 }) {
  var _a, _b, _c;
  let likeFetcher = useFetcherPromise_default(),
    deleteFetcher = (0, import_react27.useFetcher)(),
    editFetcher = (0, import_react27.useFetcher)(),
    { user } = (0, import_react27.useOutletContext)(),
    [effect, setEffect] = (0, import_react28.useState)(!1),
    [openEdit, setOpenEdit] = (0, import_react28.useState)(!1),
    [openComment, setOpenComment] = (0, import_react28.useState)(!1),
    [openEditMenu, setOpenEditMenu] = (0, import_react28.useState)(!1),
    { text } = (0, import_react27.useLoaderData)(),
    ref = (0, import_react_detect_click_outside3.useDetectClickOutside)({
      onTriggered: () => setOpenEditMenu(!1),
    });
  if (!user) return null;
  let likedByMe = user ? suggest.likedBy.some((l) => (l == null ? void 0 : l.username) === user.username) : !1,
    likeInFetcher = (_a = likeFetcher == null ? void 0 : likeFetcher.formData) == null ? void 0 : _a.get('like'),
    likeCount = likeFetcher.data
      ? (_b = likeFetcher.data) == null
        ? void 0
        : _b.likedBy.likedBy.length
      : suggest.likedBy.length;
  likeInFetcher === 'true' && ((likedByMe = !0), likeFetcher.state === 'submitting' && likeCount++),
    likeInFetcher === 'false' && ((likedByMe = !1), likeFetcher.state === 'submitting' && likeCount--);
  let handleLike = async (id) => {
      setEffect(!0);
      let res = await likeFetcher.submit(
        {
          id,
          like: likedByMe ? 'false' : 'true',
          threadId: suggest.threadId,
        },
        { method: 'POST', action: 'api/suggestion/like' }
      );
      setTimeout(() => {
        replaceMarkContent(editor, suggest.threadId, res == null ? void 0 : res.highestLiked.newValue);
      }, 100);
    },
    time = timeAgo(suggest.created_at);
  function deleteSuggestion2(id) {
    confirm('do you want to delete the post')
      ? deleteFetcher.submit(
          {
            id,
          },
          {
            action: 'api/suggestion',
            method: 'DELETE',
          }
        )
      : console.log(...oo_oo11('b6c0d871_0', 'cancelled'));
  }
  return (
    deleteFetcher.data &&
      ((_c = deleteFetcher.data) == null ? void 0 : _c.remain) === 0 &&
      (editor == null || editor.commands.unsetSuggestion()),
    suggest.user
      ? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
          'div',
          {
            className: `${deleteFetcher.formData && 'hidden'} p-3 `,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)('div', {
                className: 'relative flex justify-between mb-2',
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)('div', {
                    className: '  flex gap-3',
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('img', {
                        className: 'w-6 h-6 rounded-full',
                        src: suggest.user.avatarUrl,
                        alt: 'Extra small avatar',
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('p', {
                        className: 'text-base font-medium leading-tight text-gray-900 dark:text-gray-200',
                        children: suggest.user.name,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('p', {
                        className: 'text-sm text-gray-600 dark:text-gray-400',
                        children: time,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('button', {
                    className:
                      'inline-flex items-center text-sm font-medium text-center text-gray-400  rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600',
                    type: 'button',
                    onClick: () => setOpenEditMenu((p) => !p),
                    children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('svg', {
                      className: 'w-5 h-5',
                      'aria-hidden': 'true',
                      fill: 'currentColor',
                      viewBox: '0 0 20 20',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('path', {
                        d: 'M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z',
                      }),
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('div', {
                    ref,
                    className: `${
                      openEditMenu ? 'absolute' : 'hidden'
                    } right-0 top-1.5 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`,
                    children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)('ul', {
                      className: 'py-1 text-sm text-gray-700 dark:text-gray-200',
                      'aria-labelledby': 'dropdownMenuIconHorizontalButton',
                      children: [
                        user &&
                          user.username === suggest.user.username &&
                          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('li', {
                                children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('div', {
                                  onClick: () => setOpenEdit(!0),
                                  className:
                                    'block cursor-pointer py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
                                  children: 'Edit',
                                }),
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('li', {
                                children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('div', {
                                  onClick: () => deleteSuggestion2(suggest.id),
                                  className:
                                    'block cursor-pointer py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
                                  children: 'Remove',
                                }),
                              }),
                            ],
                          }),
                        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('li', {
                          children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('div', {
                            className:
                              'block py-2 cursor-pointer px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
                            children: 'Report',
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)('div', {
                className: ' w-full text-base leading-normal text-black mb-3',
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('span', {
                    className: 'font-bold text-sm',
                    children: 'Replace :',
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)('span', {
                    onClick: () => {
                      text.author.username === user.username &&
                        replaceMarkContent(editor, suggest.threadId, suggest.oldValue);
                    },
                    className: 'text-gray-500 dark:text-gray-100',
                    children: ['"', suggest.oldValue, '"'],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('span', {
                    className: 'font-bold text-sm',
                    children: ' with :',
                  }),
                  openEdit
                    ? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(editFetcher.Form, {
                        className: 'flex gap-2',
                        action: '/api/suggestion',
                        method: 'PATCH',
                        onSubmit: () => setOpenEdit(!1),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('input', {
                            name: 'newValue',
                            type: 'text',
                            className:
                              'block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
                            defaultValue: suggest.newValue,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('input', {
                            name: 'id',
                            type: 'text',
                            value: suggest.id,
                            hidden: !0,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Button, {
                            label: editFetcher.state === 'submitting' ? 'saving' : 'confirm',
                            type: 'submit',
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Button, {
                            label: 'cancel',
                            type: 'reset',
                            onClick: () => setOpenEdit(!1),
                          }),
                        ],
                      })
                    : /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)('span', {
                        onClick: () => {
                          text.author.username === user.username &&
                            replaceMarkContent(editor, suggest.threadId, suggest.newValue);
                        },
                        className: 'text-gray-500 dark:text-gray-100 ',
                        children: ['"', suggest.newValue, '"'],
                      }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('div', {
                className: 'mb-2',
                children:
                  (suggest == null ? void 0 : suggest.audioUrl) &&
                  suggest.audioUrl !== '' &&
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_AudioPlayer.default, {
                    src: suggest == null ? void 0 : suggest.audioUrl,
                  }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('div', {
                className: 'flex justify-between',
                children: optimistic
                  ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('div', {
                      className: 'text-sm text-light ',
                      children: 'saving',
                    })
                  : /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('div', {
                          className: 'flex gap-4',
                          children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)('button', {
                            disabled: likeFetcher.state === 'submitting',
                            onClick: () => handleLike(suggest.id),
                            className: `${
                              effect && 'animate-wiggle'
                            } flex cursor-pointer items-center justify-start space-x-1.5`,
                            onAnimationEnd: () => setEffect(!1),
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('svg', {
                                width: '14',
                                height: '14',
                                viewBox: '0 0 14 14',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('path', {
                                  style: likedByMe ? { fill: 'lightgreen' } : { fill: 'gray' },
                                  d: 'M0.800049 7.95005C0.800049 7.77276 0.834968 7.59722 0.902812 7.43343C0.970655 7.26964 1.0701 7.12081 1.19545 6.99545C1.32081 6.8701 1.46964 6.77066 1.63343 6.70281C1.79722 6.63497 1.97276 6.60005 2.15005 6.60005C2.32733 6.60005 2.50288 6.63497 2.66667 6.70281C2.83046 6.77066 2.97928 6.8701 3.10464 6.99545C3.23 7.12081 3.32944 7.26964 3.39729 7.43343C3.46513 7.59722 3.50005 7.77276 3.50005 7.95005V13.35C3.50005 13.7081 3.35782 14.0515 3.10464 14.3046C2.85147 14.5578 2.50809 14.7 2.15005 14.7C1.79201 14.7 1.44863 14.5578 1.19545 14.3046C0.942281 14.0515 0.800049 13.7081 0.800049 13.35V7.95005ZM4.40005 7.79975V12.6867C4.39989 13.0212 4.49295 13.3492 4.66877 13.6337C4.84459 13.9183 5.09623 14.1482 5.39545 14.2977L5.44045 14.3202C5.93985 14.5698 6.49045 14.6999 7.04875 14.7H11.9231C12.3394 14.7002 12.7429 14.5561 13.0648 14.2922C13.3868 14.0284 13.6074 13.6611 13.6889 13.2528L14.7689 7.85285C14.8211 7.59173 14.8147 7.32229 14.7502 7.06395C14.6857 6.8056 14.5647 6.56478 14.3959 6.35886C14.227 6.15293 14.0146 5.98703 13.774 5.87311C13.5333 5.75918 13.2703 5.70008 13.004 5.70005H9.80005V2.10005C9.80005 1.62266 9.61041 1.16482 9.27284 0.827257C8.93528 0.489691 8.47744 0.300049 8.00005 0.300049C7.76135 0.300049 7.53244 0.39487 7.36365 0.563653C7.19487 0.732435 7.10005 0.961354 7.10005 1.20005V1.80035C7.10005 2.57928 6.84741 3.3372 6.38005 3.96035L5.12005 5.63975C4.65269 6.2629 4.40005 7.02082 4.40005 7.79975V7.79975Z',
                                }),
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('div', {
                                className: '  text-sm font-medium leading-tight text-gray-500 dark:text-gray-100',
                                children: likeCount > 0 && likeCount,
                              }),
                            ],
                          }),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)('div', {
                          onClick: () => setOpenComment((prev) => !prev),
                          className: 'flex items-start justify-start space-x-1.5  rounded-t-lg ',
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('svg', {
                              width: '16',
                              height: '13',
                              viewBox: '0 0 16 13',
                              className: 'fill-gray-500 dark:fill-gray-100',
                              xmlns: 'http://www.w3.org/2000/svg',
                              children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('path', {
                                d: 'M6.13858 7.95584L5.67917 8.15319C5.65821 8.10438 5.62774 8.06025 5.58953 8.02335L5.58328 8.01731L5.58334 8.01726L3.51964 5.95356L2.66608 5.1H3.87319H8.90059C10.2267 5.1 11.4984 5.62679 12.4361 6.56447C13.3738 7.50215 13.9006 8.77392 13.9006 10.1V11.9C13.9006 12.0061 13.9427 12.1078 14.0177 12.1828C14.0928 12.2579 14.1945 12.3 14.3006 12.3C14.4067 12.3 14.5084 12.2579 14.5834 12.1828C14.6584 12.1078 14.7006 12.0061 14.7006 11.9V10.1C14.7006 8.56175 14.0895 7.08649 13.0018 5.99878C11.9141 4.91107 10.4388 4.3 8.90059 4.3H3.87319H2.66608L3.51964 3.44645L5.58328 1.3828C5.5833 1.38279 5.58332 1.38277 5.58334 1.38275C5.65829 1.30774 5.7004 1.20604 5.7004 1.1C5.7004 0.993988 5.65831 0.892311 5.58339 0.817309C5.58335 0.817274 5.58332 0.817239 5.58328 0.817203M6.13858 7.95584L4.66429 0.463703C4.83306 0.294979 5.06194 0.200195 5.30059 0.200195C5.53924 0.200195 5.76811 0.294979 5.93689 0.463703L5.58328 0.817203M6.13858 7.95584L5.67917 8.15319C5.70014 8.20199 5.71117 8.25448 5.71163 8.30759C5.7121 8.3607 5.70197 8.41337 5.68186 8.46253C5.66175 8.51169 5.63205 8.55635 5.59449 8.59391C5.55693 8.63146 5.51227 8.66116 5.46312 8.68128C5.41396 8.70139 5.36128 8.71151 5.30817 8.71105C5.25506 8.71059 5.20257 8.69955 5.15377 8.67859C5.10497 8.65763 5.06083 8.62715 5.02393 8.58895L5.02399 8.58889L5.01784 8.58275L1.4179 4.9828C1.34291 4.90779 1.30078 4.80607 1.30078 4.7C1.30078 4.59396 1.34289 4.49226 1.41784 4.41726C1.41786 4.41724 1.41788 4.41722 1.4179 4.4172L5.01779 0.81731L6.13858 7.95584ZM5.58328 0.817203C5.50828 0.742282 5.40661 0.700195 5.30059 0.700195C5.19455 0.700195 5.09285 0.742302 5.01784 0.817256L5.58328 0.817203Z',
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('button', {
                              className: 'text-sm font-medium leading-tight text-gray-500 dark:text-gray-100',
                              children: openComment ? 'close' : 'Comment',
                            }),
                          ],
                        }),
                      ],
                    }),
              }),
              openComment &&
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(CommentSection, {
                  id: suggest.id,
                  setOpenComment,
                  comments: suggest.SuggestionComment,
                  type: likedByMe ? 'support' : 'reject',
                }),
            ],
          },
          suggest.id
        )
      : null
  );
}
function CommentSection({ id, setOpenComment, comments, type }) {
  let [commentText, setCommentText] = (0, import_react28.useState)(''),
    [audio, setAudio] = (0, import_react28.useState)({ tempUrl: '', blob: null }),
    data = (0, import_react27.useLoaderData)(),
    postCommentFetcher = (0, import_react27.useFetcher)();
  function postComment() {
    var _a;
    let item = {
        id,
        commentContent: commentText,
        type,
      },
      blob = audio.blob;
    var form_data = new FormData();
    blob &&
      form_data.append(
        'file',
        blob,
        `text-${(_a = data == null ? void 0 : data.text) == null ? void 0 : _a.id}-${(0, import_uuid2.v4)()}.wav`
      );
    for (var key in item) form_data.append(key, item[key]);
    postCommentFetcher.submit(form_data, {
      method: 'POST',
      action: '/api/suggestion/comment',
      encType: 'multipart/form-data',
    }),
      setCommentText(''),
      setAudio({ blob: null, tempUrl: '' });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('div', {
    className: 'flex justify-between pt-1 gap-2 bg-gray-100  rounded mt-2',
    children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)('div', {
      className: 'flex flex-col gap-2 flex-1 ',
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TextArea_default, {
          onChange: (e) => setCommentText(e.target.value),
          placeholder: 'comment on suggestion',
          value: commentText,
          rows: 1,
        }),
        audio.tempUrl !== ''
          ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, {
              children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)('div', {
                className: 'w-full flex items-center gap-3 my-2',
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_AudioPlayer.default, { src: audio.tempUrl }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('div', {
                    onClick: () => setAudio({ tempUrl: '', blob: null }),
                    children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('svg', {
                      width: '20',
                      height: '20',
                      viewBox: '0 0 20 20',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z',
                        className: 'fill-gray-200',
                      }),
                    }),
                  }),
                ],
              }),
            })
          : null,
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)('div', {
          className: 'flex justify-between',
          children: [
            audio.tempUrl === ''
              ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_AudioRecorder.default, { setAudio })
              : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)('div', {}),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)('div', {
              className: 'flex justify-end gap-2',
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Button, {
                  label: postCommentFetcher.state === 'submitting' ? 'commenting' : 'comment',
                  type: 'submit',
                  onClick: postComment,
                  disabled: !!postCommentFetcher.formData,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Button, {
                  label: 'cancel',
                  type: 'reset',
                  onClick: () => setOpenComment(!1),
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Comments, { comments }),
      ],
    }),
  });
}
function oo_cm11() {
  try {
    return (
      (0, eval)('globalThis._console_ninja') ||
      (0, eval)(
        `/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2cf5cd=_0x40be;(function(_0x582a6d,_0x326ed6){var _0x274fa5=_0x40be,_0x4e6359=_0x582a6d();while(!![]){try{var _0x36ca3c=parseInt(_0x274fa5(0x240))/0x1+parseInt(_0x274fa5(0x2bf))/0x2*(parseInt(_0x274fa5(0x27c))/0x3)+parseInt(_0x274fa5(0x1f0))/0x4*(parseInt(_0x274fa5(0x288))/0x5)+parseInt(_0x274fa5(0x1ee))/0x6+parseInt(_0x274fa5(0x2b9))/0x7*(parseInt(_0x274fa5(0x20b))/0x8)+parseInt(_0x274fa5(0x269))/0x9*(parseInt(_0x274fa5(0x289))/0xa)+-parseInt(_0x274fa5(0x20a))/0xb;if(_0x36ca3c===_0x326ed6)break;else _0x4e6359['push'](_0x4e6359['shift']());}catch(_0x19d0c6){_0x4e6359['push'](_0x4e6359['shift']());}}}(_0x2a98,0xda71d));var ue=Object[_0x2cf5cd(0x21d)],te=Object[_0x2cf5cd(0x2ae)],he=Object[_0x2cf5cd(0x21f)],le=Object['getOwnPropertyNames'],fe=Object['getPrototypeOf'],_e=Object['prototype'][_0x2cf5cd(0x1e8)],pe=(_0x25f11f,_0x357847,_0x2ae353,_0x3d8e2d)=>{var _0x44b478=_0x2cf5cd;if(_0x357847&&typeof _0x357847=='object'||typeof _0x357847==_0x44b478(0x293)){for(let _0x4a4651 of le(_0x357847))!_e['call'](_0x25f11f,_0x4a4651)&&_0x4a4651!==_0x2ae353&&te(_0x25f11f,_0x4a4651,{'get':()=>_0x357847[_0x4a4651],'enumerable':!(_0x3d8e2d=he(_0x357847,_0x4a4651))||_0x3d8e2d['enumerable']});}return _0x25f11f;},ne=(_0x806e83,_0x70843c,_0x15e02d)=>(_0x15e02d=_0x806e83!=null?ue(fe(_0x806e83)):{},pe(_0x70843c||!_0x806e83||!_0x806e83[_0x2cf5cd(0x25e)]?te(_0x15e02d,_0x2cf5cd(0x266),{'value':_0x806e83,'enumerable':!0x0}):_0x15e02d,_0x806e83)),Q=class{constructor(_0x59b92d,_0x2a3a9d,_0x559130,_0x18aff8){var _0x19135f=_0x2cf5cd;this[_0x19135f(0x273)]=_0x59b92d,this[_0x19135f(0x244)]=_0x2a3a9d,this[_0x19135f(0x26d)]=_0x559130,this[_0x19135f(0x2a1)]=_0x18aff8,this[_0x19135f(0x1f6)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x19135f(0x207)]=!0x1,this['_connecting']=!0x1,this[_0x19135f(0x246)]=!!this['global'][_0x19135f(0x26c)],this[_0x19135f(0x28e)]=null,this[_0x19135f(0x296)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_sendErrorMessage']=this[_0x19135f(0x246)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help':_0x19135f(0x210);}async[_0x2cf5cd(0x25d)](){var _0x423475=_0x2cf5cd;if(this['_WebSocketClass'])return this[_0x423475(0x28e)];let _0x28fd87;if(this['_inBrowser'])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x26c)];else{if(this[_0x423475(0x273)][_0x423475(0x2a2)]?.[_0x423475(0x22e)])_0x28fd87=this[_0x423475(0x273)][_0x423475(0x2a2)]?.['_WebSocket'];else try{let _0x4e350b=await import(_0x423475(0x26e));_0x28fd87=(await import((await import(_0x423475(0x280)))[_0x423475(0x242)](_0x4e350b[_0x423475(0x252)](this[_0x423475(0x2a1)],_0x423475(0x245)))[_0x423475(0x225)]()))['default'];}catch{try{_0x28fd87=require(require(_0x423475(0x26e))[_0x423475(0x252)](this[_0x423475(0x2a1)],'ws'));}catch{throw new Error(_0x423475(0x247));}}}return this[_0x423475(0x28e)]=_0x28fd87,_0x28fd87;}[_0x2cf5cd(0x2a0)](){var _0x299e02=_0x2cf5cd;this[_0x299e02(0x232)]||this['_connected']||this['_connectAttemptCount']>=this[_0x299e02(0x2a8)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x299e02(0x232)]=!0x0,this['_connectAttemptCount']++,this[_0x299e02(0x209)]=new Promise((_0x323901,_0xe82100)=>{var _0x1f03e5=_0x299e02;this[_0x1f03e5(0x25d)]()[_0x1f03e5(0x284)](_0x289f22=>{var _0x312bc1=_0x1f03e5;let _0x1a955b=new _0x289f22(_0x312bc1(0x202)+this['host']+':'+this[_0x312bc1(0x26d)]);_0x1a955b[_0x312bc1(0x1f1)]=()=>{var _0x491c98=_0x312bc1;this['_allowedToSend']=!0x1,this[_0x491c98(0x281)](_0x1a955b),this[_0x491c98(0x2c5)](),_0xe82100(new Error(_0x491c98(0x206)));},_0x1a955b[_0x312bc1(0x2b2)]=()=>{var _0x496f4e=_0x312bc1;this[_0x496f4e(0x246)]||_0x1a955b['_socket']&&_0x1a955b[_0x496f4e(0x2b0)]['unref']&&_0x1a955b[_0x496f4e(0x2b0)]['unref'](),_0x323901(_0x1a955b);},_0x1a955b['onclose']=()=>{var _0x4a9cbf=_0x312bc1;this[_0x4a9cbf(0x248)]=!0x0,this['_disposeWebsocket'](_0x1a955b),this[_0x4a9cbf(0x2c5)]();},_0x1a955b[_0x312bc1(0x2b5)]=_0x5eb630=>{var _0x2133bb=_0x312bc1;try{_0x5eb630&&_0x5eb630['data']&&this['_inBrowser']&&JSON[_0x2133bb(0x231)](_0x5eb630[_0x2133bb(0x27a)])[_0x2133bb(0x2af)]==='reload'&&this[_0x2133bb(0x273)][_0x2133bb(0x27e)]['reload']();}catch{}};})['then'](_0x5c8281=>(this[_0x1f03e5(0x207)]=!0x0,this[_0x1f03e5(0x232)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x1f03e5(0x296)]=0x0,_0x5c8281))[_0x1f03e5(0x204)](_0x2e9680=>(this[_0x1f03e5(0x207)]=!0x1,this['_connecting']=!0x1,_0xe82100(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x2e9680&&_0x2e9680[_0x1f03e5(0x1ef)])))));}));}[_0x2cf5cd(0x281)](_0x196a35){var _0x2f6e0d=_0x2cf5cd;this[_0x2f6e0d(0x207)]=!0x1,this[_0x2f6e0d(0x232)]=!0x1;try{_0x196a35[_0x2f6e0d(0x2bb)]=null,_0x196a35[_0x2f6e0d(0x1f1)]=null,_0x196a35['onopen']=null;}catch{}try{_0x196a35[_0x2f6e0d(0x221)]<0x2&&_0x196a35[_0x2f6e0d(0x212)]();}catch{}}[_0x2cf5cd(0x2c5)](){var _0x610869=_0x2cf5cd;clearTimeout(this[_0x610869(0x22a)]),!(this[_0x610869(0x296)]>=this[_0x610869(0x2a8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x5d1aff=_0x610869;this[_0x5d1aff(0x207)]||this[_0x5d1aff(0x232)]||(this[_0x5d1aff(0x2a0)](),this[_0x5d1aff(0x209)]?.[_0x5d1aff(0x204)](()=>this[_0x5d1aff(0x2c5)]()));},0x1f4),this[_0x610869(0x22a)][_0x610869(0x2c4)]&&this['_reconnectTimeout'][_0x610869(0x2c4)]());}async['send'](_0x4da41b){var _0x25d38b=_0x2cf5cd;try{if(!this['_allowedToSend'])return;this[_0x25d38b(0x248)]&&this[_0x25d38b(0x2a0)](),(await this[_0x25d38b(0x209)])[_0x25d38b(0x1f2)](JSON[_0x25d38b(0x29d)](_0x4da41b));}catch(_0x284c46){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x284c46&&_0x284c46[_0x25d38b(0x1ef)])),this['_allowedToSend']=!0x1,this[_0x25d38b(0x2c5)]();}}};function V(_0xb97f7e,_0x19f69c,_0x301db6,_0x28b17b,_0x3028fb){var _0x4feedb=_0x2cf5cd;let _0xab03f1=_0x301db6[_0x4feedb(0x229)](',')[_0x4feedb(0x23f)](_0x2633fc=>{var _0x529807=_0x4feedb;try{_0xb97f7e[_0x529807(0x230)]||((_0x3028fb===_0x529807(0x283)||_0x3028fb===_0x529807(0x249)||_0x3028fb===_0x529807(0x2ac))&&(_0x3028fb+=_0xb97f7e['process']?.[_0x529807(0x2c1)]?.['node']?_0x529807(0x20d):_0x529807(0x237)),_0xb97f7e[_0x529807(0x230)]={'id':+new Date(),'tool':_0x3028fb});let _0xeb9db=new Q(_0xb97f7e,_0x19f69c,_0x2633fc,_0x28b17b);return _0xeb9db[_0x529807(0x1f2)][_0x529807(0x227)](_0xeb9db);}catch(_0x2230bd){return console[_0x529807(0x267)](_0x529807(0x22b),_0x2230bd&&_0x2230bd[_0x529807(0x1ef)]),()=>{};}});return _0x422510=>_0xab03f1[_0x4feedb(0x262)](_0x389f10=>_0x389f10(_0x422510));}function _0x2a98(){var _0x47734e=['disabledLog','_numberRegExp','autoExpandMaxDepth','undefined','unknown','Number','time','ws://','String','catch','RegExp','logger\\x20websocket\\x20error','_connected','isArray','_ws','54739014hZPxbX','1079648rjCDOH','getOwnPropertySymbols','\\x20server','_capIfString','_setNodeLabel','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','_blacklistedProperty','close','_isPrimitiveType','_p_','substr','_keyStrRegExp','error','hostname','concat','_regExpToString','61159','setter','create','_addFunctionsNode','getOwnPropertyDescriptor','_setNodeId','readyState','_Symbol','sort','depth','toString','_quotedRegExp','bind','string','split','_reconnectTimeout','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','nuxt','null','_WebSocket','_hasSymbolPropertyOnItsPath','_console_ninja_session','parse','_connecting','_additionalMetadata','...','_hasMapOnItsPath','allStrLength','\\x20browser','level','_treeNodePropertiesAfterFullValue','_p_name','timeStamp','_p_length','autoExpand','NEGATIVE_INFINITY','map','1525537RhiYyd','sortProps','pathToFileURL','_console_ninja','host','ws/index.js','_inBrowser','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_allowedToConnectOnSend','remix','current','length','1685344258094','test','totalStrLength','_property','Map','console','join','resolveGetters','serialize','HTMLAllCollection',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.129\\\\node_modules",'timeEnd','[object\\x20Set]','now','log','call','capped','getWebSocketClass','__es'+'Module','hits','stack','Boolean','forEach','expId','hrtime','1.0.0','default','warn','number','27PVbVzP','_isArray','_isSet','WebSocket','port','path','Set','valueOf','parent','count','global','constructor','_propertyName','_isMap','toLowerCase','strLength','getter','data','_dateToString','25989iNKKmv','_getOwnPropertyDescriptor','location','isExpressionToEvaluate','url','_disposeWebsocket','_cleanNode','next.js','then','index','_propertyAccessor','node','2365xiNUeo','2338510BlrUQW','unshift','cappedProps','[object\\x20Map]','remix','_WebSocketClass','_setNodeExpressionPath','performance','array','_isNegativeZero','function','[object\\x20Array]','_setNodeExpandableState','_connectAttemptCount','elapsed','_consoleNinjaAllowedToStart','props','positiveInfinity','noFunctions','push','stringify','[object\\x20Date]','root_exp_id','_connectToHostNow','nodeModules','process','_setNodePermissions','_sortProps','reduceLimits','_type','cappedElements','_maxConnectAttemptCount','argumentResolutionError','trace','elements','astro','autoExpandPreviousObjects','defineProperty','method','_socket','type','onopen','_processTreeNodeResult','_objectToString','onmessage','negativeZero','bigint','Symbol','7HexpBI','Buffer','onclose','boolean','symbol','_addLoadNode','358RbwaIx','getOwnPropertyNames','versions','autoExpandLimit','includes','unref','_attemptToReconnectShortly','_isPrimitiveWrapperType','_HTMLAllCollection','match','date','autoExpandPropertyCount','127.0.0.1','value','hasOwnProperty','_addProperty','set','prototype','negativeInfinity','object','5054958GGLzRP','message','9436aEdZNf','onerror','send','_addObjectProperty','name','stackTraceLimit','_allowedToSend','_setNodeQueryPath','expressionsToEvaluate','_getOwnPropertySymbols','_treeNodePropertiesBeforeFullValue'];_0x2a98=function(){return _0x47734e;};return _0x2a98();}function H(_0x45561e){var _0x534322=_0x2cf5cd;let _0x3f152c=function(_0x148806,_0x5ef6f9){return _0x5ef6f9-_0x148806;},_0x50eaf0;if(_0x45561e[_0x534322(0x290)])_0x50eaf0=function(){var _0x376037=_0x534322;return _0x45561e[_0x376037(0x290)][_0x376037(0x259)]();};else{if(_0x45561e[_0x534322(0x2a2)]&&_0x45561e['process'][_0x534322(0x264)])_0x50eaf0=function(){var _0x3938fb=_0x534322;return _0x45561e[_0x3938fb(0x2a2)][_0x3938fb(0x264)]();},_0x3f152c=function(_0x4d6428,_0x24c728){return 0x3e8*(_0x24c728[0x0]-_0x4d6428[0x0])+(_0x24c728[0x1]-_0x4d6428[0x1])/0xf4240;};else try{let {performance:_0x2c50fd}=require('perf_hooks');_0x50eaf0=function(){var _0x39ffd2=_0x534322;return _0x2c50fd[_0x39ffd2(0x259)]();};}catch{_0x50eaf0=function(){return+new Date();};}}return{'elapsed':_0x3f152c,'timeStamp':_0x50eaf0,'now':()=>Date[_0x534322(0x259)]()};}function X(_0x1f6729,_0x5c6190,_0x217af5){var _0x126b42=_0x2cf5cd;if(_0x1f6729['_consoleNinjaAllowedToStart']!==void 0x0)return _0x1f6729[_0x126b42(0x298)];let _0xe76fa6=_0x1f6729[_0x126b42(0x2a2)]?.[_0x126b42(0x2c1)]?.['node'];return _0xe76fa6&&_0x217af5===_0x126b42(0x22c)?_0x1f6729['_consoleNinjaAllowedToStart']=!0x1:_0x1f6729[_0x126b42(0x298)]=_0xe76fa6||!_0x5c6190||_0x1f6729['location']?.[_0x126b42(0x218)]&&_0x5c6190[_0x126b42(0x2c3)](_0x1f6729[_0x126b42(0x27e)][_0x126b42(0x218)]),_0x1f6729[_0x126b42(0x298)];}function _0x40be(_0x15e1bb,_0x1a4e5d){var _0x2a98f1=_0x2a98();return _0x40be=function(_0x40be20,_0x4701b9){_0x40be20=_0x40be20-0x1e3;var _0x3331c5=_0x2a98f1[_0x40be20];return _0x3331c5;},_0x40be(_0x15e1bb,_0x1a4e5d);}((_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548,_0x2b2eb2,_0x1b70b3,_0x41ce87,_0x40492c)=>{var _0xaf924a=_0x2cf5cd;if(_0x49b204[_0xaf924a(0x243)])return _0x49b204[_0xaf924a(0x243)];if(!X(_0x49b204,_0x41ce87,_0x489548))return _0x49b204['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x49b204[_0xaf924a(0x243)];let _0xf0b388={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5b35fa={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x505e5e=H(_0x49b204),_0x254ab2=_0x505e5e[_0xaf924a(0x297)],_0x4a93d3=_0x505e5e[_0xaf924a(0x23b)],_0xe1d997=_0x505e5e[_0xaf924a(0x259)],_0x47a49a={'hits':{},'ts':{}},_0x2cbc42=_0x1a66cf=>{_0x47a49a['ts'][_0x1a66cf]=_0x4a93d3();},_0x40058f=(_0x55f653,_0x438427)=>{let _0x25052b=_0x47a49a['ts'][_0x438427];if(delete _0x47a49a['ts'][_0x438427],_0x25052b){let _0x4bcb71=_0x254ab2(_0x25052b,_0x4a93d3());_0x1a6309(_0x195f4e('time',_0x55f653,_0xe1d997(),_0xe5069f,[_0x4bcb71],_0x438427));}},_0x1cf403=_0x391d70=>_0x34ff71=>{var _0x545190=_0xaf924a;try{_0x2cbc42(_0x34ff71),_0x391d70(_0x34ff71);}finally{_0x49b204[_0x545190(0x251)][_0x545190(0x201)]=_0x391d70;}},_0x162ea0=_0x434010=>_0x2d8916=>{var _0x386e10=_0xaf924a;try{let [_0x4df1d3,_0x22fa1a]=_0x2d8916[_0x386e10(0x229)](':logPointId:');_0x40058f(_0x22fa1a,_0x4df1d3),_0x434010(_0x4df1d3);}finally{_0x49b204['console'][_0x386e10(0x257)]=_0x434010;}};_0x49b204[_0xaf924a(0x243)]={'consoleLog':(_0x467987,_0x342fa0)=>{var _0x37d8e1=_0xaf924a;_0x49b204[_0x37d8e1(0x251)]['log']['name']!==_0x37d8e1(0x1fb)&&_0x1a6309(_0x195f4e(_0x37d8e1(0x25a),_0x467987,_0xe1d997(),_0xe5069f,_0x342fa0));},'consoleTrace':(_0x4f9b55,_0x2c5df8)=>{var _0x409a8a=_0xaf924a;_0x49b204[_0x409a8a(0x251)]['log'][_0x409a8a(0x1f4)]!=='disabledTrace'&&_0x1a6309(_0x195f4e('trace',_0x4f9b55,_0xe1d997(),_0xe5069f,_0x2c5df8));},'consoleTime':()=>{var _0x372b3c=_0xaf924a;_0x49b204[_0x372b3c(0x251)][_0x372b3c(0x201)]=_0x1cf403(_0x49b204[_0x372b3c(0x251)]['time']);},'consoleTimeEnd':()=>{var _0x49bb97=_0xaf924a;_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]=_0x162ea0(_0x49b204[_0x49bb97(0x251)][_0x49bb97(0x257)]);},'autoLog':(_0x108d5f,_0x4cf9ca)=>{var _0x16ba00=_0xaf924a;_0x1a6309(_0x195f4e(_0x16ba00(0x25a),_0x4cf9ca,_0xe1d997(),_0xe5069f,[_0x108d5f]));},'autoTrace':(_0x1e46d6,_0x2c00ce)=>{var _0x54ceaa=_0xaf924a;_0x1a6309(_0x195f4e(_0x54ceaa(0x2aa),_0x2c00ce,_0xe1d997(),_0xe5069f,[_0x1e46d6]));},'autoTime':(_0x296ec5,_0x4d05a6,_0xae7de0)=>{_0x2cbc42(_0xae7de0);},'autoTimeEnd':(_0x4787e8,_0x45534c,_0x282ccd)=>{_0x40058f(_0x45534c,_0x282ccd);}};let _0x1a6309=V(_0x49b204,_0xef4c0a,_0x1c46ce,_0x4140f9,_0x489548),_0xe5069f=_0x49b204[_0xaf924a(0x230)];class _0x3ea185{constructor(){var _0x8f3991=_0xaf924a;this[_0x8f3991(0x216)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x49b204['undefined'],this[_0x8f3991(0x2c7)]=_0x49b204[_0x8f3991(0x255)],this['_getOwnPropertyDescriptor']=Object[_0x8f3991(0x21f)],this['_getOwnPropertyNames']=Object[_0x8f3991(0x2c0)],this['_Symbol']=_0x49b204[_0x8f3991(0x2b8)],this[_0x8f3991(0x21a)]=RegExp[_0x8f3991(0x1eb)][_0x8f3991(0x225)],this[_0x8f3991(0x27b)]=Date[_0x8f3991(0x1eb)][_0x8f3991(0x225)];}[_0xaf924a(0x254)](_0x1ffbdf,_0x261664,_0x1119b9,_0x220a1b){var _0x35a28c=_0xaf924a,_0x2b5b13=this,_0xb5b34f=_0x1119b9[_0x35a28c(0x23d)];function _0x3e7ce9(_0x18896a,_0x17698b,_0x102b14){var _0x587cf5=_0x35a28c;_0x17698b['type']=_0x587cf5(0x1ff),_0x17698b[_0x587cf5(0x217)]=_0x18896a['message'],_0x1c9374=_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)],_0x102b14[_0x587cf5(0x287)][_0x587cf5(0x24a)]=_0x17698b,_0x2b5b13['_treeNodePropertiesBeforeFullValue'](_0x17698b,_0x102b14);}if(_0x261664&&_0x261664[_0x35a28c(0x2a9)])_0x3e7ce9(_0x261664,_0x1ffbdf,_0x1119b9);else try{_0x1119b9[_0x35a28c(0x238)]++,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x2ad)][_0x35a28c(0x29c)](_0x261664);var _0x4abe4f,_0x4d7716,_0x16f780,_0x4f50fc,_0x4c3fd8=[],_0x2e94bd=[],_0x107b8f,_0x1a262d=this[_0x35a28c(0x2a6)](_0x261664),_0xec7933=_0x1a262d==='array',_0x48c47a=!0x1,_0x55a62b=_0x1a262d===_0x35a28c(0x293),_0x5dd4e0=this[_0x35a28c(0x213)](_0x1a262d),_0x482298=this[_0x35a28c(0x2c6)](_0x1a262d),_0x164aa8=_0x5dd4e0||_0x482298,_0x1739c6={},_0x2d507c=0x0,_0x18b048=!0x1,_0x1c9374,_0xeccd3f=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1119b9[_0x35a28c(0x224)]){if(_0xec7933){if(_0x4d7716=_0x261664[_0x35a28c(0x24b)],_0x4d7716>_0x1119b9[_0x35a28c(0x2ab)]){for(_0x16f780=0x0,_0x4f50fc=_0x1119b9[_0x35a28c(0x2ab)],_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));_0x1ffbdf[_0x35a28c(0x2a7)]=!0x0;}else{for(_0x16f780=0x0,_0x4f50fc=_0x4d7716,_0x4abe4f=_0x16f780;_0x4abe4f<_0x4f50fc;_0x4abe4f++)_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1e9)](_0x4c3fd8,_0x261664,_0x1a262d,_0x4abe4f,_0x1119b9));}_0x1119b9['autoExpandPropertyCount']+=_0x2e94bd['length'];}if(!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&!_0x5dd4e0&&_0x1a262d!==_0x35a28c(0x203)&&_0x1a262d!==_0x35a28c(0x2ba)&&_0x1a262d!==_0x35a28c(0x2b7)){var _0x2ae62d=_0x220a1b[_0x35a28c(0x299)]||_0x1119b9[_0x35a28c(0x299)];if(this[_0x35a28c(0x26b)](_0x261664)?(_0x4abe4f=0x0,_0x261664['forEach'](function(_0x46649f){var _0x15a7b7=_0x35a28c;if(_0x2d507c++,_0x1119b9[_0x15a7b7(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x15a7b7(0x27f)]&&_0x1119b9['autoExpand']&&_0x1119b9[_0x15a7b7(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;return;}_0x2e94bd[_0x15a7b7(0x29c)](_0x2b5b13[_0x15a7b7(0x1e9)](_0x4c3fd8,_0x261664,'Set',_0x4abe4f++,_0x1119b9,function(_0x5c98b8){return function(){return _0x5c98b8;};}(_0x46649f)));})):this[_0x35a28c(0x276)](_0x261664)&&_0x261664['forEach'](function(_0x8ca25,_0x4c3572){var _0x1bfdfd=_0x35a28c;if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;return;}if(!_0x1119b9[_0x1bfdfd(0x27f)]&&_0x1119b9[_0x1bfdfd(0x23d)]&&_0x1119b9['autoExpandPropertyCount']>_0x1119b9[_0x1bfdfd(0x2c2)]){_0x18b048=!0x0;return;}var _0x4873de=_0x4c3572['toString']();_0x4873de[_0x1bfdfd(0x24b)]>0x64&&(_0x4873de=_0x4873de['slice'](0x0,0x64)+_0x1bfdfd(0x234)),_0x2e94bd[_0x1bfdfd(0x29c)](_0x2b5b13[_0x1bfdfd(0x1e9)](_0x4c3fd8,_0x261664,_0x1bfdfd(0x250),_0x4873de,_0x1119b9,function(_0x1cdb70){return function(){return _0x1cdb70;};}(_0x8ca25)));}),!_0x48c47a){try{for(_0x107b8f in _0x261664)if(!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)){if(_0x2d507c++,_0x1119b9[_0x35a28c(0x1e5)]++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9[_0x35a28c(0x2c2)]){_0x18b048=!0x0;break;}_0x2e94bd['push'](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}catch{}if(_0x1739c6[_0x35a28c(0x23c)]=!0x0,_0x55a62b&&(_0x1739c6[_0x35a28c(0x23a)]=!0x0),!_0x18b048){var _0x155fac=[][_0x35a28c(0x219)](this['_getOwnPropertyNames'](_0x261664))['concat'](this[_0x35a28c(0x1f9)](_0x261664));for(_0x4abe4f=0x0,_0x4d7716=_0x155fac[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)if(_0x107b8f=_0x155fac[_0x4abe4f],!(_0xec7933&&_0xeccd3f[_0x35a28c(0x24d)](_0x107b8f['toString']()))&&!this[_0x35a28c(0x211)](_0x261664,_0x107b8f,_0x1119b9)&&!_0x1739c6[_0x35a28c(0x214)+_0x107b8f[_0x35a28c(0x225)]()]){if(_0x2d507c++,_0x1119b9['autoExpandPropertyCount']++,_0x2d507c>_0x2ae62d){_0x18b048=!0x0;break;}if(!_0x1119b9[_0x35a28c(0x27f)]&&_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9[_0x35a28c(0x1e5)]>_0x1119b9['autoExpandLimit']){_0x18b048=!0x0;break;}_0x2e94bd[_0x35a28c(0x29c)](_0x2b5b13[_0x35a28c(0x1f3)](_0x4c3fd8,_0x1739c6,_0x261664,_0x1a262d,_0x107b8f,_0x1119b9));}}}}}if(_0x1ffbdf[_0x35a28c(0x2b1)]=_0x1a262d,_0x164aa8?(_0x1ffbdf[_0x35a28c(0x1e7)]=_0x261664[_0x35a28c(0x270)](),this[_0x35a28c(0x20e)](_0x1a262d,_0x1ffbdf,_0x1119b9,_0x220a1b)):_0x1a262d===_0x35a28c(0x1e4)?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x27b)][_0x35a28c(0x25b)](_0x261664):_0x1a262d===_0x35a28c(0x205)?_0x1ffbdf[_0x35a28c(0x1e7)]=this['_regExpToString']['call'](_0x261664):_0x1a262d===_0x35a28c(0x2bd)&&this['_Symbol']?_0x1ffbdf[_0x35a28c(0x1e7)]=this[_0x35a28c(0x222)][_0x35a28c(0x1eb)][_0x35a28c(0x225)][_0x35a28c(0x25b)](_0x261664):!_0x1119b9[_0x35a28c(0x224)]&&!(_0x1a262d===_0x35a28c(0x22d)||_0x1a262d===_0x35a28c(0x1fe))&&(delete _0x1ffbdf[_0x35a28c(0x1e7)],_0x1ffbdf[_0x35a28c(0x25c)]=!0x0),_0x18b048&&(_0x1ffbdf[_0x35a28c(0x28b)]=!0x0),_0x1c9374=_0x1119b9[_0x35a28c(0x287)]['current'],_0x1119b9[_0x35a28c(0x287)][_0x35a28c(0x24a)]=_0x1ffbdf,this[_0x35a28c(0x1fa)](_0x1ffbdf,_0x1119b9),_0x2e94bd[_0x35a28c(0x24b)]){for(_0x4abe4f=0x0,_0x4d7716=_0x2e94bd[_0x35a28c(0x24b)];_0x4abe4f<_0x4d7716;_0x4abe4f++)_0x2e94bd[_0x4abe4f](_0x4abe4f);}_0x4c3fd8[_0x35a28c(0x24b)]&&(_0x1ffbdf['props']=_0x4c3fd8);}catch(_0x5acfee){_0x3e7ce9(_0x5acfee,_0x1ffbdf,_0x1119b9);}return this[_0x35a28c(0x233)](_0x261664,_0x1ffbdf),this[_0x35a28c(0x239)](_0x1ffbdf,_0x1119b9),_0x1119b9['node'][_0x35a28c(0x24a)]=_0x1c9374,_0x1119b9[_0x35a28c(0x238)]--,_0x1119b9['autoExpand']=_0xb5b34f,_0x1119b9[_0x35a28c(0x23d)]&&_0x1119b9['autoExpandPreviousObjects']['pop'](),_0x1ffbdf;}[_0xaf924a(0x1f9)](_0x26b81e){var _0x33466c=_0xaf924a;return Object[_0x33466c(0x20c)]?Object[_0x33466c(0x20c)](_0x26b81e):[];}[_0xaf924a(0x26b)](_0x3fbc47){var _0x1986bd=_0xaf924a;return!!(_0x3fbc47&&_0x49b204[_0x1986bd(0x26f)]&&this[_0x1986bd(0x2b4)](_0x3fbc47)===_0x1986bd(0x258)&&_0x3fbc47[_0x1986bd(0x262)]);}[_0xaf924a(0x211)](_0x1ab315,_0x21ebf2,_0x470340){var _0x48210a=_0xaf924a;return _0x470340[_0x48210a(0x29b)]?typeof _0x1ab315[_0x21ebf2]==_0x48210a(0x293):!0x1;}['_type'](_0x5dcb54){var _0x3d62dd=_0xaf924a,_0x2fc396='';return _0x2fc396=typeof _0x5dcb54,_0x2fc396==='object'?this['_objectToString'](_0x5dcb54)===_0x3d62dd(0x294)?_0x2fc396=_0x3d62dd(0x291):this[_0x3d62dd(0x2b4)](_0x5dcb54)===_0x3d62dd(0x29e)?_0x2fc396=_0x3d62dd(0x1e4):_0x5dcb54===null?_0x2fc396='null':_0x5dcb54[_0x3d62dd(0x274)]&&(_0x2fc396=_0x5dcb54['constructor'][_0x3d62dd(0x1f4)]||_0x2fc396):_0x2fc396===_0x3d62dd(0x1fe)&&this['_HTMLAllCollection']&&_0x5dcb54 instanceof this[_0x3d62dd(0x2c7)]&&(_0x2fc396=_0x3d62dd(0x255)),_0x2fc396;}['_objectToString'](_0x141c18){var _0x3ac2dc=_0xaf924a;return Object['prototype'][_0x3ac2dc(0x225)][_0x3ac2dc(0x25b)](_0x141c18);}[_0xaf924a(0x213)](_0x5a457d){var _0x597d85=_0xaf924a;return _0x5a457d===_0x597d85(0x2bc)||_0x5a457d===_0x597d85(0x228)||_0x5a457d===_0x597d85(0x268);}[_0xaf924a(0x2c6)](_0x5898cf){var _0x3157c0=_0xaf924a;return _0x5898cf===_0x3157c0(0x261)||_0x5898cf===_0x3157c0(0x203)||_0x5898cf==='Number';}['_addProperty'](_0x5245f8,_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048){var _0x4f3373=this;return function(_0x6f86d0){var _0x55b709=_0x40be,_0x497a8c=_0x34b2c2[_0x55b709(0x287)]['current'],_0x401bcb=_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)],_0x4e8dba=_0x34b2c2['node'][_0x55b709(0x271)];_0x34b2c2[_0x55b709(0x287)]['parent']=_0x497a8c,_0x34b2c2[_0x55b709(0x287)]['index']=typeof _0x2ef032==_0x55b709(0x268)?_0x2ef032:_0x6f86d0,_0x5245f8['push'](_0x4f3373[_0x55b709(0x24f)](_0x43f211,_0x287d3c,_0x2ef032,_0x34b2c2,_0x285048)),_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x271)]=_0x4e8dba,_0x34b2c2[_0x55b709(0x287)][_0x55b709(0x285)]=_0x401bcb;};}[_0xaf924a(0x1f3)](_0x1d7c25,_0x5b8b24,_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3){var _0xd780f0=_0xaf924a,_0x8addf0=this;return _0x5b8b24[_0xd780f0(0x214)+_0x1e6ee4[_0xd780f0(0x225)]()]=!0x0,function(_0x239d6b){var _0x1443cd=_0xd780f0,_0x4df5e1=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x24a)],_0x540e10=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)],_0x2915bc=_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)];_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x271)]=_0x4df5e1,_0x3b78cf[_0x1443cd(0x287)][_0x1443cd(0x285)]=_0x239d6b,_0x1d7c25[_0x1443cd(0x29c)](_0x8addf0[_0x1443cd(0x24f)](_0x17051b,_0x12d353,_0x1e6ee4,_0x3b78cf,_0x2b23a3)),_0x3b78cf['node'][_0x1443cd(0x271)]=_0x2915bc,_0x3b78cf[_0x1443cd(0x287)]['index']=_0x540e10;};}[_0xaf924a(0x24f)](_0x2dc156,_0x84e3c9,_0x3d7e0f,_0x50afce,_0x126c84){var _0x8fb306=_0xaf924a,_0x57d1bb=this;_0x126c84||(_0x126c84=function(_0x277ab9,_0x4edfaa){return _0x277ab9[_0x4edfaa];});var _0x4d7cfe=_0x3d7e0f[_0x8fb306(0x225)](),_0x338741=_0x50afce[_0x8fb306(0x1f8)]||{},_0x135349=_0x50afce[_0x8fb306(0x224)],_0x3fc65a=_0x50afce[_0x8fb306(0x27f)];try{var _0x141963=this['_isMap'](_0x2dc156),_0x31060d=_0x4d7cfe;_0x141963&&_0x31060d[0x0]==='\\x27'&&(_0x31060d=_0x31060d['substr'](0x1,_0x31060d['length']-0x2));var _0x2b079a=_0x50afce[_0x8fb306(0x1f8)]=_0x338741['_p_'+_0x31060d];_0x2b079a&&(_0x50afce[_0x8fb306(0x224)]=_0x50afce['depth']+0x1),_0x50afce[_0x8fb306(0x27f)]=!!_0x2b079a;var _0x15c8b0=typeof _0x3d7e0f=='symbol',_0x24ddbc={'name':_0x15c8b0||_0x141963?_0x4d7cfe:this[_0x8fb306(0x275)](_0x4d7cfe)};if(_0x15c8b0&&(_0x24ddbc[_0x8fb306(0x2bd)]=!0x0),!(_0x84e3c9===_0x8fb306(0x291)||_0x84e3c9==='Error')){var _0x431848=this[_0x8fb306(0x27d)](_0x2dc156,_0x3d7e0f);if(_0x431848&&(_0x431848[_0x8fb306(0x1ea)]&&(_0x24ddbc[_0x8fb306(0x21c)]=!0x0),_0x431848['get']&&!_0x2b079a&&!_0x50afce[_0x8fb306(0x253)]))return _0x24ddbc[_0x8fb306(0x279)]=!0x0,this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x2b3202;try{_0x2b3202=_0x126c84(_0x2dc156,_0x3d7e0f);}catch(_0x14b48e){return _0x24ddbc={'name':_0x4d7cfe,'type':'unknown','error':_0x14b48e[_0x8fb306(0x1ef)]},this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce),_0x24ddbc;}var _0x41dc6b=this['_type'](_0x2b3202),_0x40b8f0=this[_0x8fb306(0x213)](_0x41dc6b);if(_0x24ddbc[_0x8fb306(0x2b1)]=_0x41dc6b,_0x40b8f0)this['_processTreeNodeResult'](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x559389=_0x8fb306;_0x24ddbc['value']=_0x2b3202[_0x559389(0x270)](),!_0x2b079a&&_0x57d1bb['_capIfString'](_0x41dc6b,_0x24ddbc,_0x50afce,{});});else{var _0x57f4f8=_0x50afce[_0x8fb306(0x23d)]&&_0x50afce[_0x8fb306(0x238)]<_0x50afce['autoExpandMaxDepth']&&_0x50afce[_0x8fb306(0x2ad)]['indexOf'](_0x2b3202)<0x0&&_0x41dc6b!==_0x8fb306(0x293)&&_0x50afce[_0x8fb306(0x1e5)]<_0x50afce[_0x8fb306(0x2c2)];_0x57f4f8||_0x50afce[_0x8fb306(0x238)]<_0x135349||_0x2b079a?(this[_0x8fb306(0x254)](_0x24ddbc,_0x2b3202,_0x50afce,_0x2b079a||{}),this[_0x8fb306(0x233)](_0x2b3202,_0x24ddbc)):this[_0x8fb306(0x2b3)](_0x24ddbc,_0x50afce,_0x2b3202,function(){var _0x267210=_0x8fb306;_0x41dc6b===_0x267210(0x22d)||_0x41dc6b===_0x267210(0x1fe)||(delete _0x24ddbc[_0x267210(0x1e7)],_0x24ddbc[_0x267210(0x25c)]=!0x0);});}return _0x24ddbc;}finally{_0x50afce['expressionsToEvaluate']=_0x338741,_0x50afce[_0x8fb306(0x224)]=_0x135349,_0x50afce[_0x8fb306(0x27f)]=_0x3fc65a;}}[_0xaf924a(0x20e)](_0x4b62bd,_0xc40a6,_0x76d4db,_0x1bb854){var _0x2b20d2=_0xaf924a,_0x48134b=_0x1bb854['strLength']||_0x76d4db[_0x2b20d2(0x278)];if((_0x4b62bd===_0x2b20d2(0x228)||_0x4b62bd==='String')&&_0xc40a6[_0x2b20d2(0x1e7)]){let _0x489af6=_0xc40a6['value'][_0x2b20d2(0x24b)];_0x76d4db['allStrLength']+=_0x489af6,_0x76d4db[_0x2b20d2(0x236)]>_0x76d4db[_0x2b20d2(0x24e)]?(_0xc40a6[_0x2b20d2(0x25c)]='',delete _0xc40a6['value']):_0x489af6>_0x48134b&&(_0xc40a6['capped']=_0xc40a6[_0x2b20d2(0x1e7)][_0x2b20d2(0x215)](0x0,_0x48134b),delete _0xc40a6[_0x2b20d2(0x1e7)]);}}['_isMap'](_0x137793){var _0x274dce=_0xaf924a;return!!(_0x137793&&_0x49b204['Map']&&this[_0x274dce(0x2b4)](_0x137793)===_0x274dce(0x28c)&&_0x137793[_0x274dce(0x262)]);}[_0xaf924a(0x275)](_0x3b398f){var _0x3414c6=_0xaf924a;if(_0x3b398f[_0x3414c6(0x1e3)](/^\\d+$/))return _0x3b398f;var _0x3a961e;try{_0x3a961e=JSON['stringify'](''+_0x3b398f);}catch{_0x3a961e='\\x22'+this[_0x3414c6(0x2b4)](_0x3b398f)+'\\x22';}return _0x3a961e['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x3a961e=_0x3a961e[_0x3414c6(0x215)](0x1,_0x3a961e['length']-0x2):_0x3a961e=_0x3a961e['replace'](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x3a961e;}['_processTreeNodeResult'](_0x494cf3,_0x3a7130,_0x2965bb,_0x4ed090){var _0x1fc133=_0xaf924a;this[_0x1fc133(0x1fa)](_0x494cf3,_0x3a7130),_0x4ed090&&_0x4ed090(),this[_0x1fc133(0x233)](_0x2965bb,_0x494cf3),this[_0x1fc133(0x239)](_0x494cf3,_0x3a7130);}[_0xaf924a(0x1fa)](_0x8a70e8,_0x172dc9){var _0x5bfd95=_0xaf924a;this['_setNodeId'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x1f7)](_0x8a70e8,_0x172dc9),this['_setNodeExpressionPath'](_0x8a70e8,_0x172dc9),this[_0x5bfd95(0x2a3)](_0x8a70e8,_0x172dc9);}[_0xaf924a(0x220)](_0x1021a5,_0x494447){}['_setNodeQueryPath'](_0x20ad16,_0x5f3886){}[_0xaf924a(0x20f)](_0x13a7a7,_0x54f993){}['_isUndefined'](_0x310d6f){return _0x310d6f===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x43c671,_0x48f11a){var _0x321c60=_0xaf924a;this[_0x321c60(0x20f)](_0x43c671,_0x48f11a),this['_setNodeExpandableState'](_0x43c671),_0x48f11a[_0x321c60(0x241)]&&this[_0x321c60(0x2a4)](_0x43c671),this[_0x321c60(0x21e)](_0x43c671,_0x48f11a),this['_addLoadNode'](_0x43c671,_0x48f11a),this[_0x321c60(0x282)](_0x43c671);}[_0xaf924a(0x233)](_0x226191,_0x58f6f1){var _0x43a02f=_0xaf924a;try{_0x226191&&typeof _0x226191[_0x43a02f(0x24b)]==_0x43a02f(0x268)&&(_0x58f6f1['length']=_0x226191[_0x43a02f(0x24b)]);}catch{}if(_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x268)||_0x58f6f1[_0x43a02f(0x2b1)]===_0x43a02f(0x200)){if(isNaN(_0x58f6f1[_0x43a02f(0x1e7)]))_0x58f6f1['nan']=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];else switch(_0x58f6f1[_0x43a02f(0x1e7)]){case Number['POSITIVE_INFINITY']:_0x58f6f1[_0x43a02f(0x29a)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case Number[_0x43a02f(0x23e)]:_0x58f6f1[_0x43a02f(0x1ec)]=!0x0,delete _0x58f6f1[_0x43a02f(0x1e7)];break;case 0x0:this[_0x43a02f(0x292)](_0x58f6f1[_0x43a02f(0x1e7)])&&(_0x58f6f1[_0x43a02f(0x2b6)]=!0x0);break;}}else _0x58f6f1['type']==='function'&&typeof _0x226191[_0x43a02f(0x1f4)]==_0x43a02f(0x228)&&_0x226191[_0x43a02f(0x1f4)]&&_0x58f6f1[_0x43a02f(0x1f4)]&&_0x226191['name']!==_0x58f6f1[_0x43a02f(0x1f4)]&&(_0x58f6f1['funcName']=_0x226191[_0x43a02f(0x1f4)]);}[_0xaf924a(0x292)](_0x99e5d7){var _0x5af86c=_0xaf924a;return 0x1/_0x99e5d7===Number[_0x5af86c(0x23e)];}[_0xaf924a(0x2a4)](_0x4da140){var _0x59d583=_0xaf924a;!_0x4da140[_0x59d583(0x299)]||!_0x4da140['props'][_0x59d583(0x24b)]||_0x4da140['type']===_0x59d583(0x291)||_0x4da140[_0x59d583(0x2b1)]===_0x59d583(0x250)||_0x4da140['type']===_0x59d583(0x26f)||_0x4da140[_0x59d583(0x299)][_0x59d583(0x223)](function(_0x2bca0f,_0x6aada0){var _0x433cc9=_0x59d583,_0x220ffd=_0x2bca0f[_0x433cc9(0x1f4)][_0x433cc9(0x277)](),_0x52a25d=_0x6aada0[_0x433cc9(0x1f4)][_0x433cc9(0x277)]();return _0x220ffd<_0x52a25d?-0x1:_0x220ffd>_0x52a25d?0x1:0x0;});}[_0xaf924a(0x21e)](_0x48dce4,_0x48f4c6){var _0x2678d7=_0xaf924a;if(!(_0x48f4c6['noFunctions']||!_0x48dce4[_0x2678d7(0x299)]||!_0x48dce4[_0x2678d7(0x299)]['length'])){for(var _0x279f85=[],_0x27fbf8=[],_0x58bb24=0x0,_0x1abc8f=_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x24b)];_0x58bb24<_0x1abc8f;_0x58bb24++){var _0x3caeb2=_0x48dce4['props'][_0x58bb24];_0x3caeb2[_0x2678d7(0x2b1)]===_0x2678d7(0x293)?_0x279f85[_0x2678d7(0x29c)](_0x3caeb2):_0x27fbf8[_0x2678d7(0x29c)](_0x3caeb2);}if(!(!_0x27fbf8[_0x2678d7(0x24b)]||_0x279f85[_0x2678d7(0x24b)]<=0x1)){_0x48dce4[_0x2678d7(0x299)]=_0x27fbf8;var _0xe3d941={'functionsNode':!0x0,'props':_0x279f85};this[_0x2678d7(0x220)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x20f)](_0xe3d941,_0x48f4c6),this[_0x2678d7(0x295)](_0xe3d941),this['_setNodePermissions'](_0xe3d941,_0x48f4c6),_0xe3d941['id']+='\\x20f',_0x48dce4[_0x2678d7(0x299)][_0x2678d7(0x28a)](_0xe3d941);}}}[_0xaf924a(0x2be)](_0x48eb38,_0x20f75c){}[_0xaf924a(0x295)](_0x129122){}[_0xaf924a(0x26a)](_0x1f6bb8){var _0x2820a2=_0xaf924a;return Array[_0x2820a2(0x208)](_0x1f6bb8)||typeof _0x1f6bb8==_0x2820a2(0x1ed)&&this[_0x2820a2(0x2b4)](_0x1f6bb8)===_0x2820a2(0x294);}[_0xaf924a(0x2a3)](_0x1ea391,_0x8f50b2){}['_cleanNode'](_0x52cd26){var _0x498c91=_0xaf924a;delete _0x52cd26[_0x498c91(0x22f)],delete _0x52cd26['_hasSetOnItsPath'],delete _0x52cd26[_0x498c91(0x235)];}[_0xaf924a(0x28f)](_0x5c8a9c,_0x31124f){}[_0xaf924a(0x286)](_0x2f7a58){var _0x397561=_0xaf924a;return _0x2f7a58?_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x1fc)])?'['+_0x2f7a58+']':_0x2f7a58[_0x397561(0x1e3)](this['_keyStrRegExp'])?'.'+_0x2f7a58:_0x2f7a58[_0x397561(0x1e3)](this[_0x397561(0x226)])?'['+_0x2f7a58+']':'[\\x27'+_0x2f7a58+'\\x27]':'';}}let _0x3fbb82=new _0x3ea185();function _0x195f4e(_0x20dbd1,_0x567217,_0x7b3f99,_0x256338,_0x381038,_0xb947b4){var _0x5299ea=_0xaf924a;let _0xc570be,_0x171851;try{_0x171851=_0x4a93d3(),_0xc570be=_0x47a49a[_0x567217],!_0xc570be||_0x171851-_0xc570be['ts']>0x1f4&&_0xc570be[_0x5299ea(0x272)]&&_0xc570be['time']/_0xc570be[_0x5299ea(0x272)]<0x64?(_0x47a49a[_0x567217]=_0xc570be={'count':0x0,'time':0x0,'ts':_0x171851},_0x47a49a[_0x5299ea(0x25f)]={}):_0x171851-_0x47a49a[_0x5299ea(0x25f)]['ts']>0x32&&_0x47a49a['hits']['count']&&_0x47a49a[_0x5299ea(0x25f)]['time']/_0x47a49a['hits'][_0x5299ea(0x272)]<0x64&&(_0x47a49a[_0x5299ea(0x25f)]={});let _0x4ea285=[],_0x56b786=_0xc570be['reduceLimits']||_0x47a49a['hits'][_0x5299ea(0x2a5)]?_0x5b35fa:_0xf0b388,_0x3563e3=_0x51e7d1=>{var _0x2491a0=_0x5299ea;let _0x26ab25={};return _0x26ab25[_0x2491a0(0x299)]=_0x51e7d1[_0x2491a0(0x299)],_0x26ab25['elements']=_0x51e7d1['elements'],_0x26ab25['strLength']=_0x51e7d1['strLength'],_0x26ab25[_0x2491a0(0x24e)]=_0x51e7d1[_0x2491a0(0x24e)],_0x26ab25[_0x2491a0(0x2c2)]=_0x51e7d1[_0x2491a0(0x2c2)],_0x26ab25['autoExpandMaxDepth']=_0x51e7d1[_0x2491a0(0x1fd)],_0x26ab25[_0x2491a0(0x241)]=!0x1,_0x26ab25[_0x2491a0(0x29b)]=!_0x40492c,_0x26ab25[_0x2491a0(0x224)]=0x1,_0x26ab25[_0x2491a0(0x238)]=0x0,_0x26ab25[_0x2491a0(0x263)]=_0x2491a0(0x29f),_0x26ab25['rootExpression']='root_exp',_0x26ab25['autoExpand']=!0x0,_0x26ab25[_0x2491a0(0x2ad)]=[],_0x26ab25[_0x2491a0(0x1e5)]=0x0,_0x26ab25[_0x2491a0(0x253)]=!0x0,_0x26ab25['allStrLength']=0x0,_0x26ab25[_0x2491a0(0x287)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x26ab25;};for(var _0x35907a=0x0;_0x35907a<_0x381038[_0x5299ea(0x24b)];_0x35907a++)_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82['serialize']({'timeNode':_0x20dbd1===_0x5299ea(0x201)||void 0x0},_0x381038[_0x35907a],_0x3563e3(_0x56b786),{}));if(_0x20dbd1===_0x5299ea(0x2aa)){let _0xecc6de=Error[_0x5299ea(0x1f5)];try{Error[_0x5299ea(0x1f5)]=0x1/0x0,_0x4ea285[_0x5299ea(0x29c)](_0x3fbb82[_0x5299ea(0x254)]({'stackNode':!0x0},new Error()[_0x5299ea(0x260)],_0x3563e3(_0x56b786),{'strLength':0x1/0x0}));}finally{Error[_0x5299ea(0x1f5)]=_0xecc6de;}}return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':_0x4ea285,'id':_0x567217,'context':_0xb947b4}]};}catch(_0xeea157){return{'method':_0x5299ea(0x25a),'version':_0x2b2eb2,'args':[{'ts':_0x7b3f99,'session':_0x256338,'args':[{'type':_0x5299ea(0x1ff),'error':_0xeea157&&_0xeea157[_0x5299ea(0x1ef)]}],'id':_0x567217,'context':_0xb947b4}]};}finally{try{if(_0xc570be&&_0x171851){let _0x5613c6=_0x4a93d3();_0xc570be[_0x5299ea(0x272)]++,_0xc570be['time']+=_0x254ab2(_0x171851,_0x5613c6),_0xc570be['ts']=_0x5613c6,_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]++,_0x47a49a['hits']['time']+=_0x254ab2(_0x171851,_0x5613c6),_0x47a49a[_0x5299ea(0x25f)]['ts']=_0x5613c6,(_0xc570be['count']>0x32||_0xc570be[_0x5299ea(0x201)]>0x64)&&(_0xc570be[_0x5299ea(0x2a5)]=!0x0),(_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x272)]>0x3e8||_0x47a49a[_0x5299ea(0x25f)][_0x5299ea(0x201)]>0x12c)&&(_0x47a49a['hits'][_0x5299ea(0x2a5)]=!0x0);}}catch{}}}return _0x49b204[_0xaf924a(0x243)];})(globalThis,_0x2cf5cd(0x1e6),_0x2cf5cd(0x21b),_0x2cf5cd(0x256),_0x2cf5cd(0x28d),_0x2cf5cd(0x265),_0x2cf5cd(0x24c),["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.1.7"],'');`
      )
    );
  } catch {}
}
function oo_oo11(i, ...v) {
  try {
    oo_cm11().consoleLog(i, v);
  } catch {}
  return v;
}

// app/features/Suggestion/SuggestionContainer.tsx
var import_jsx_runtime21 = require('react/jsx-runtime');
function Suggestions({ editor, suggestions }) {
  let suggestionThread = (0, import_recoil9.useRecoilValue)(selectedSuggestionThread),
    list = suggestions.filter((sug) => sug.threadId === suggestionThread.id);
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)('div', {
    className:
      'p-2 ml-2 bg-slate-50 dark:bg-gray-700 shadow-md mt-4 h-[80vh] max-h-[80vh] overflow-visible overflow-y-auto z-1',
    style: { minWidth: 350, fontFamily: 'sans-serif' },
    children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)('div', {
      className: 'flex flex-col  gap-2 ',
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)('h2', {
          className: 'text-lg lg:text-2xl font-bold text-gray-900 dark:text-white',
          children: 'Suggestion',
        }),
        list.map((suggest) =>
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            Suggestion2,
            {
              optimistic: !1,
              editor,
              suggest,
            },
            suggest.id
          )
        ),
      ],
    }),
  });
}
var SuggestionContainer_default = Suggestions;

// app/features/Suggestion/SuggestionForm.tsx
var import_react29 = require('@remix-run/react'),
  import_react30 = require('react'),
  import_recoil10 = require('recoil');
var import_uuid3 = require('uuid');
var import_jsx_runtime22 = require('react/jsx-runtime');
function SuggestionForm({ editor }) {
  var _a, _b, _c, _d, _e, _f;
  let data = (0, import_react29.useLoaderData)(),
    { user } = (0, import_react29.useOutletContext)(),
    [suggestionInput, setSuggestionInput] = (0, import_react30.useState)(''),
    [error, setError] = (0, import_react30.useState)(null),
    addSuggestion = useFetcherPromise_default(),
    setSelectedSuggestion = (0, import_recoil10.useSetRecoilState)(selectedSuggestionThread),
    setOpenSuggestion = (0, import_recoil10.useSetRecoilState)(openSuggestionState),
    [audio, setAudio] = (0, import_react30.useState)({ tempUrl: '', blob: null }),
    handleSuggestionSubmit = async () => {
      var _a2;
      if (suggestionInput === '') return setError('suggestion cannot be empty'), null;
      let { state } = editor,
        { from, to } = state.selection,
        originalText = state.doc.textBetween(from, to, ' '),
        id = null;
      editor.isActive('suggestion') ? (id = editor.getAttributes('suggestion').id) : (id = (0, import_uuid3.v4)()),
        setSelectedSuggestion({
          id,
        });
      let item = {
          oldValue: originalText,
          textId: data.text.id,
          newValue: suggestionInput,
          userId: user == null ? void 0 : user.id,
          threadId: id,
        },
        blob = audio.blob;
      var form_data = new FormData();
      blob &&
        form_data.append(
          'file',
          blob,
          `text-${(_a2 = data == null ? void 0 : data.text) == null ? void 0 : _a2.id}-${(0, import_uuid3.v4)()}.wav`
        );
      for (var key in item) form_data.append(key, item[key]);
      let awaitdata = await addSuggestion.submit(form_data, {
        action: '/api/suggestion',
        method: 'POST',
        encType: 'multipart/form-data',
      });
      (awaitdata != null && awaitdata.message) ||
        (editor.commands.setSuggestion({
          id,
          original: originalText,
        }),
        setError(null),
        setSuggestionInput(''),
        setAudio({
          blob: null,
          tempUrl: '',
        }));
    },
    handleSuggestionCancel = () => {
      setSelectedSuggestion({
        id: '',
      }),
        setOpenSuggestion(!1);
    },
    isPosting = addSuggestion.formData;
  return user
    ? isPosting
      ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)('div', {
          className: 'p-2 bg-slate-50 dark:bg-gray-700 shadow-md ',
          children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)('div', {
            className: 'flex flex-col gap-2 ',
            children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Suggestion2, {
              editor: null,
              optimistic: !0,
              suggest: {
                created_at: new Date(),
                id: '',
                likedBy: [],
                newValue: (_a = addSuggestion.formData) == null ? void 0 : _a.get('newValue'),
                oldValue: (_b = addSuggestion.formData) == null ? void 0 : _b.get('oldValue'),
                textId: parseInt((_c = addSuggestion.formData) == null ? void 0 : _c.get('textId')),
                threadId: (_d = addSuggestion.formData) == null ? void 0 : _d.get('threadId'),
                updatedAt: new Date(),
                user,
                suggestionComments: [],
                userId: '',
                text: data.text.id,
                audioUrl: '',
              },
            }),
          }),
        })
      : /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)('div', {
          className: 'p-2 ml-2 bg-slate-50 dark:bg-gray-700 shadow-md mb-2',
          children: [
            ((_e = addSuggestion.data) == null ? void 0 : _e.message) &&
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)('div', {
                className: 'font-sm text-red-500',
                children: (_f = addSuggestion.data) == null ? void 0 : _f.message,
              }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TextArea_default, {
              placeholder: 'any suggestion?',
              value: suggestionInput,
              rows: 1,
              onChange: (e) => setSuggestionInput(e.target.value),
            }),
            audio.tempUrl !== ''
              ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, {
                  children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)('div', {
                    className: 'w-full flex items-center gap-3 mt-2',
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_AudioPlayer.default, { src: audio.tempUrl }),
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)('div', {
                        onClick: () => setAudio({ tempUrl: '', blob: null }),
                        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)('svg', {
                          width: '20',
                          height: '20',
                          viewBox: '0 0 20 20',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z',
                            className: 'fill-gray-200',
                          }),
                        }),
                      }),
                    ],
                  }),
                })
              : null,
            error &&
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)('div', { className: 'text-red-400', children: error }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)('div', {
              className: 'flex justify-between',
              children: [
                audio.tempUrl === ''
                  ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_AudioRecorder.default, { setAudio })
                  : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)('div', {}),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)('div', {
                  className: 'flex justify-end mt-3 gap-2',
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Button, {
                      disabled: addSuggestion.state !== 'idle',
                      onClick: handleSuggestionSubmit,
                      type: 'submit',
                      label: 'submit',
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Button, {
                      onClick: handleSuggestionCancel,
                      type: 'reset',
                      label: 'cancel',
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
    : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(LogInMessage, {});
}

// app/routes/text.$id.tsx
var import_react_split = __toESM(require('react-split'));

// app/component/hooks/usePusherPresence.ts
var import_react31 = require('react'),
  import_pusher_js = __toESM(require('pusher-js')),
  import_react32 = require('@remix-run/react'),
  usePusherPresence = (channelName, id, cluster, fetchUpdateText, user) => {
    let [onlineMembers, setOnlineMembers] = (0, import_react31.useState)([]),
      { revalidate } = (0, import_react32.useRevalidator)();
    return (
      (0, import_react31.useEffect)(() => {
        let pusher2 = new import_pusher_js.default(id, {
            cluster,
            authEndpoint: '/auth/pusher',
          }),
          channel = pusher2.subscribe(channelName),
          handleSubscriptionSucceeded = () => {
            setOnlineMembers(Object.entries(channel.members.members));
          },
          handleMemberAdded = (member) => {
            setOnlineMembers(Object.entries(channel.members.members));
          },
          handleMemberRemoved = (member) => {
            setOnlineMembers(Object.entries(channel.members.members));
          },
          handleUpdate = (e) => {
            fetchUpdateText(), e.userId && revalidate();
          };
        return (
          channel.bind('pusher:subscription_succeeded', handleSubscriptionSucceeded),
          channel.bind('pusher:member_added', handleMemberAdded),
          channel.bind('pusher:member_removed', handleMemberRemoved),
          channel.bind('update-app', handleUpdate),
          () => {
            channel.unbind(), pusher2.unsubscribe(channelName);
          }
        );
      }, [channelName, user == null ? void 0 : user.id, revalidate]),
      { onlineMembers }
    );
  },
  usePusherPresence_default = usePusherPresence;

// app/routes/text.$id.tsx
var import_react_device_detect2 = require('react-device-detect'),
  import_remix_utils3 = require('remix-utils'),
  import_jsx_runtime23 = require('react/jsx-runtime'),
  loader9 = async ({ request, params }) => {
    let text_id = parseInt(params.id),
      text = await findTextByTextId(text_id, !1),
      suggestions = await findAllSuggestionByTextId(text_id);
    return (0, import_node9.defer)({
      text,
      suggestions,
      pusher_env: { key: process.env.key, cluster: process.env.cluster },
    });
  };
function ErrorBoundary3({ error }) {
  return (
    console.error(error),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)('div', { children: 'ohh Snap! There is an error' })
  );
}
var meta2 = ({ data }) => {
  var _a;
  let dataName = (_a = data == null ? void 0 : data.text) == null ? void 0 : _a.name;
  return [{ title: dataName || 'text' }];
};
function links2() {
  return [
    {
      rel: 'icon',
      href: '/favicon.ico',
      type: 'image/png',
    },
  ];
}
function text_id_default() {
  var _a, _b;
  let data = useLiveLoader(),
    setTextName = (0, import_recoil11.useSetRecoilState)(textInfo),
    [contentData, setContent] = (0, import_react34.useState)(''),
    setSelectionRange = (0, import_recoil11.useSetRecoilState)(selectedTextOnEditor),
    { user } = (0, import_react33.useOutletContext)(),
    [suggestionSelected, suggestionSelector] = (0, import_recoil11.useRecoilState)(selectedSuggestionThread),
    [openSuggestion, setOpenSuggestion] = (0, import_recoil11.useRecoilState)(openSuggestionState),
    postSelector = (0, import_recoil11.useSetRecoilState)(selectedPostThread);
  function suggestionSetter(id) {
    suggestionSelector({
      id,
    });
  }
  function postSetter(id) {
    postSelector({
      id,
    });
  }
  function fetchUpdateText() {
    var _a2;
    fetch(`/api/text?textId=${(_a2 = data == null ? void 0 : data.text) == null ? void 0 : _a2.id}`)
      .then((res) => res.json())
      .then((data2) => {
        setContent(data2.content);
      });
  }
  let { onlineMembers } = usePusherPresence_default(
    `presence-text_${(_a = data == null ? void 0 : data.text) == null ? void 0 : _a.id}`,
    data.pusher_env.key,
    data.pusher_env.cluster,
    fetchUpdateText,
    user
  );
  (0, import_react34.useEffect)(() => {
    fetchUpdateText();
  }, []);
  let getQuery = (0, import_react34.useCallback)(
      (newContent) => {
        let oldContent = contentData,
          dmp = new import_diff_match_patch.default();
        if (oldContent !== newContent) {
          let changes = dmp.diff_main(oldContent, newContent),
            patch = dmp.patch_make(changes);
          return dmp.patch_toText(patch);
        }
        return null;
      },
      [contentData]
    ),
    editor = (0, import_react35.useEditor)(
      {
        extensions: [
          import_extension_document.default,
          import_extension_paragraph.default,
          import_extension_text.default,
          import_extension_bold.default,
          import_extension_font_family.default,
          import_extension_text_style.default,
          SearchAndReplace.configure({
            searchResultClass: 'search',
            caseSensitive: !1,
            disableRegex: !1,
          }),
          import_extension_hard_break.default.configure({
            HTMLAttributes: {
              class: 'pageBreak',
            },
          }),
          import_extension_highlight.default.configure({
            HTMLAttributes: {
              class: 'highlight',
            },
          }),
          Suggestion(suggestionSetter).configure({
            HTMLAttributes: {
              class: 'suggestion',
            },
          }),
          postMark_default(postSetter).configure({
            HTMLAttributes: {
              class: 'post',
            },
          }),
        ],
        editable: !0,
        editorProps: events_default,
        onSelectionUpdate: ({ editor: editor2 }) => {
          let from = editor2.state.selection.from,
            to = editor2.state.selection.to;
          setSelectionRange({
            type: '',
            start: from,
            end: to,
            content: editor2 == null ? void 0 : editor2.state.doc.textBetween(from, to, ''),
          }),
            setOpenSuggestion(!1),
            editor2.isActive('suggestion') || suggestionSelector({ id: '' }),
            editor2.isActive('post') || postSelector({ id: '' });
        },
        onUpdate: async ({ editor: editor2 }) => {
          let newContent = editor2.getHTML(),
            query = getQuery(newContent);
          query && newContent.length > 100 && user && saveData(query);
        },
        onCreate: async ({ editor: editor2 }) => {
          setTextName({ name: data == null ? void 0 : data.text.name, id: data == null ? void 0 : data.text.id });
        },
      },
      []
    ),
    saveTextFetcher = (0, import_react33.useFetcher)(),
    saveData = async (patch) => {
      var _a2;
      let formData = new FormData();
      formData.append('id', (_a2 = data.text) == null ? void 0 : _a2.id),
        formData.append('patch', JSON.stringify(patch)),
        saveTextFetcher.submit(formData, {
          method: 'POST',
          action: '/api/text',
        });
    };
  if (!data.text)
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)('div', {
      className: 'text-red-700 flex gap-2 items-center justify-center capitalize',
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)('p', { children: 'text not available' }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react33.Link, {
          className: 'text-blue-600 underline',
          to: '/',
          children: 'go back',
        }),
      ],
    });
  let [textHeight, setTextHeight] = (0, import_react34.useState)(90);
  (0, import_react34.useEffect)(() => {
    isSmallScreen && setTextHeight(40);
  }, [isSmallScreen]);
  let isSaving = !!((_b = saveTextFetcher.formData) != null && _b.get('patch'));
  return editor
    ? /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)('div', {
        className: ' flex flex-col h-screen',
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Header_default, { editor }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(OnlineUserList_default, {
            onlineMembers,
            count: onlineMembers.length,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)('div', {
            className: 'flex-1  flex max-w-6xl w-full mx-auto max-h-screen overflow-hidden ',
            style: {
              paddingTop: 60,
              overflowY: 'hidden',
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_react_split.default, {
              minSize: import_react_device_detect2.isMobile ? 100 : 350,
              maxSize: 750,
              className: 'split flex-1 flex flex-col lg:flex-row ',
              direction: import_react_device_detect2.isMobile ? 'vertical' : 'horizontal',
              sizes: import_react_device_detect2.isMobile
                ? [50, 50]
                : import_react_device_detect2.isTablet
                ? [60, 40]
                : [65, 35],
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)('div', {
                  style: {
                    maxHeight: `${textHeight}vh`,
                    overflowY: 'scroll',
                    overflowX: 'hidden',
                    scrollbarWidth: 'none',
                    width: '100%',
                  },
                  id: 'textEditorContainer',
                  children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_remix_utils3.ClientOnly, {
                    fallback: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)('div', { children: 'load' }),
                    children: () =>
                      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_EditorContainer.default, {
                        editor,
                        isSaving,
                        content: contentData,
                      }),
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)('div', {
                  className:
                    'lg:h-screen flex-1 overflow-y-auto pt-3  w-full bg-white dark:bg-gray-700 lg:sticky lg:top-0 rounded-sm',
                  children: [
                    openSuggestion || (suggestionSelected == null ? void 0 : suggestionSelected.id)
                      ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(SuggestionForm, { editor })
                      : /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react33.Outlet, {
                          context: { user, editor, text: data.text },
                        }),
                    suggestionSelected != null && suggestionSelected.id
                      ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react34.Suspense, {
                          fallback: 'loading',
                          children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react33.Await, {
                            resolve: data.suggestions,
                            children: (data2) =>
                              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(SuggestionContainer_default, {
                                editor,
                                suggestions: data2,
                              }),
                          }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    : null;
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  headers: () => headers,
  loader: () => loader10,
  meta: () => meta3,
});
var import_react36 = require('@remix-run/react'),
  import_flowbite_react6 = require('flowbite-react');

// app/assets/indrajalaLogo.png
var indrajalaLogo_default = '/build/_assets/indrajalaLogo-JUD46QZL.png';

// app/component/Layout/Footer.tsx
var import_jsx_runtime24 = require('react/jsx-runtime');
function FooterContainer() {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, {
    children: [
      ' ',
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('div', {
        className: ' text-3xl capitalize font-extrabold items-center justify-center flex h-48',
        children: 'our partners',
      }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('div', {
        className: 'flex flex-col w-full items-center justify-center bg-green-700 h-[350px]',
        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('img', {
          src: indrajalaLogo_default,
          alt: 'indrajala',
          className: 'max-h-[136px] max-w-[387px]',
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('footer', {
        className: 'bg-white dark:bg-gray-900',
        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('div', {
          className: 'mx-auto w-full ',
          children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)('div', {
            className: 'px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between',
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)('span', {
                className: 'text-sm text-gray-500 dark:text-gray-300 sm:text-center',
                children: [
                  '\xA9 2023 ',
                  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('a', {
                    href: 'https://flowbite.com/',
                    children: 'Lopenling\u2122',
                  }),
                  '. All Rights Reserved.',
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)('div', {
                className: 'flex mt-4 space-x-6 sm:justify-center md:mt-0',
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)('a', {
                    href: '#',
                    className: 'text-gray-400 hover:text-gray-900 dark:hover:text-white',
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('svg', {
                        className: 'w-5 h-5',
                        fill: 'currentColor',
                        viewBox: '0 0 24 24',
                        'aria-hidden': 'true',
                        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('path', {
                          fillRule: 'evenodd',
                          d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                          clipRule: 'evenodd',
                        }),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('span', {
                        className: 'sr-only',
                        children: 'Facebook page',
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)('a', {
                    href: '#',
                    className: 'text-gray-400 hover:text-gray-900 dark:hover:text-white',
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('svg', {
                        className: 'w-5 h-5',
                        fill: 'currentColor',
                        viewBox: '0 0 24 24',
                        'aria-hidden': 'true',
                        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('path', {
                          fillRule: 'evenodd',
                          d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                          clipRule: 'evenodd',
                        }),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('span', {
                        className: 'sr-only',
                        children: 'Instagram page',
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)('a', {
                    href: '#',
                    className: 'text-gray-400 hover:text-gray-900 dark:hover:text-white',
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('svg', {
                        className: 'w-5 h-5',
                        fill: 'currentColor',
                        viewBox: '0 0 24 24',
                        'aria-hidden': 'true',
                        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('path', {
                          d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                        }),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('span', {
                        className: 'sr-only',
                        children: 'Twitter page',
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)('a', {
                    href: '#',
                    className: 'text-gray-400 hover:text-gray-900 dark:hover:text-white',
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('svg', {
                        className: 'w-5 h-5',
                        fill: 'currentColor',
                        viewBox: '0 0 24 24',
                        'aria-hidden': 'true',
                        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('path', {
                          fillRule: 'evenodd',
                          d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                          clipRule: 'evenodd',
                        }),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('span', {
                        className: 'sr-only',
                        children: 'GitHub account',
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)('a', {
                    href: '#',
                    className: 'text-gray-400 hover:text-gray-900 dark:hover:text-white',
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('svg', {
                        className: 'w-5 h-5',
                        fill: 'currentColor',
                        viewBox: '0 0 24 24',
                        'aria-hidden': 'true',
                        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('path', {
                          fillRule: 'evenodd',
                          d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z',
                          clipRule: 'evenodd',
                        }),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)('span', {
                        className: 'sr-only',
                        children: 'Dribbble account',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}

// app/routes/_index.tsx
var import_node10 = require('@remix-run/node');
var import_react37 = require('@remix-run/react');
var import_framer_motion2 = require('framer-motion');
var import_react38 = require('react');
var import_jsx_runtime25 = require('react/jsx-runtime'),
  loader10 = async ({ request }) => {
    var _a;
    let searchText = (_a = new URL(request.url).searchParams.get('search')) == null ? void 0 : _a.trim(),
      headers2 = {
        'Cache-Control': 'max-age=15, s-maxage=60480,stale-while-revalidate=60',
      };
    if (searchText) {
      let obj = await searchTextWithName(searchText),
        textList = Object.keys(obj).map((key) => ({
          name: obj[key].name,
          results: obj[key].results,
          total: obj[key].total,
          extra: obj[key].extra,
          id: obj[key].id,
        }));
      return (0, import_node10.json)(
        { textList, search: searchText },
        {
          headers: headers2,
        }
      );
    }
    return { textList: null, search: null };
  };
function headers({ loaderHeaders }) {
  return {
    'Cache-Control': loaderHeaders.get('Cache-Control'),
  };
}
function meta3({ data }) {
  return [
    {
      title:
        data != null && data.search ? `${data == null ? void 0 : data.search} - Lopenling Search` : 'Lopenling App',
    },
    {
      name: 'description',
      content: 'annotation of text and discussion on budhist text',
    },
  ];
}
function Index() {
  var _a;
  let data = (0, import_react37.useLoaderData)(),
    navigation = (0, import_react37.useNavigation)(),
    translation = uselitteraTranlation(),
    [params] = (0, import_react36.useSearchParams)(),
    [searchInput, setSearchInput] = (0, import_react38.useState)('');
  (0, import_react38.useEffect)(() => {
    let p = params.get('search');
    setSearchInput(p || '');
  }, [params]);
  let lists = data.textList,
    isLoading = ((_a = navigation.formData) == null ? void 0 : _a.get('search')) && navigation.state === 'loading';
  return lists != null && lists.message
    ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('div', {
        className: 'text-red-400',
        children: lists == null ? void 0 : lists.message,
      })
    : /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
        import_framer_motion2.motion.div,
        {
          initial: { x: '5%', opacity: 0 },
          animate: { x: '0%', opacity: 1 },
          exit: { x: '5%', opacity: 0 },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Header_default, { editor: null }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)('div', {
              className: ' max-w-2xl mx-auto ',
              style: { paddingTop: 60 },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('div', {
                  className: 'inline-flex w-full items-center justify-center  px-3 md:px-1.5 pt-24  ',
                  children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react36.Form, {
                    method: 'GET',
                    className: 'w-full max-w-2xl',
                    children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)('div', {
                      className: 'relative flex w-full space-x-3 ',
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_flowbite_react6.TextInput, {
                          name: 'search',
                          placeholder: translation.searchText,
                          value: searchInput,
                          onChange: (e) => setSearchInput(e.target.value),
                          type: 'search',
                          required: !0,
                          style: { height: '100%' },
                          className: 'flex-1 text-gray-500',
                          icon: () =>
                            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('svg', {
                              width: '16',
                              height: '16',
                              viewBox: '0 0 16 16',
                              fill: 'none',
                              xmlns: 'http://www.w3.org/2000/svg',
                              children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('path', {
                                d: 'M14.75 14.75L10.25 10.25M11.75 6.5C11.75 7.18944 11.6142 7.87213 11.3504 8.50909C11.0865 9.14605 10.6998 9.7248 10.2123 10.2123C9.7248 10.6998 9.14605 11.0865 8.50909 11.3504C7.87213 11.6142 7.18944 11.75 6.5 11.75C5.81056 11.75 5.12787 11.6142 4.49091 11.3504C3.85395 11.0865 3.2752 10.6998 2.78769 10.2123C2.30018 9.7248 1.91347 9.14605 1.64963 8.50909C1.3858 7.87213 1.25 7.18944 1.25 6.5C1.25 5.10761 1.80312 3.77226 2.78769 2.78769C3.77226 1.80312 5.10761 1.25 6.5 1.25C7.89239 1.25 9.22774 1.80312 10.2123 2.78769C11.1969 3.77226 11.75 5.10761 11.75 6.5Z',
                                stroke: '#6B7280',
                                strokeWidth: '2',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                              }),
                            }),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_flowbite_react6.Button, {
                          type: 'submit',
                          className: 'bg-green-400 text-white h-full',
                          color: '#1C64F2',
                          size: 'lg',
                          children: translation.searchText,
                        }),
                      ],
                    }),
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)('div', {
                  className: 'inline-flex  w-full flex-col items-center justify-start space-y-3.5 py-10',
                  children: [
                    isLoading && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Skeleton, { height: 125, number: 3 }),
                    lists &&
                      !isLoading &&
                      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, {
                        children: [
                          lists.length === 0 &&
                            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('div', {
                              className: 'text-gray-300 text-xl font-extrabold capitalize',
                              style: {
                                fontSize: 20,
                                fontFamily: 'Inter',
                                lineHeight: '150%',
                              },
                              children: 'No result found',
                            }),
                          lists == null
                            ? void 0
                            : lists.map((list, index) => {
                                let result = list.results[0];
                                return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                                  import_react36.Link,
                                  {
                                    to: '/text/' + list.id + '/posts',
                                    className: 'container w-full',
                                    prefetch: 'intent',
                                    children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
                                      import_flowbite_react6.Card,
                                      {
                                        className: 'dark:bg-gray-500',
                                        style: {
                                          fontFamily: 'monlam',
                                        },
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('div', {
                                            className: 'text-xl',
                                            children: list.name,
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)('div', {
                                            className: 'flex flex-wrap justify-between text-sm',
                                            children: [
                                              result && result[1],
                                              /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)('div', {
                                                className: 'text-sm text-gray-400',
                                                children: [list.total, ' matches'],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }
                                    ),
                                  },
                                  'id' + index
                                );
                              }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            !lists &&
              !isLoading &&
              /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(FeatureSection, {}),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(FooterContainer, {}),
                ],
              }),
          ],
        },
        (0, import_react37.useLocation)().pathname
      );
}
var FeatureSection = () =>
  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('section', {
    className: 'bg-gray-50 dark:bg-gray-700',
    children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)('div', {
      className: 'py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6',
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('h2', {
          className: 'mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white',
          children: 'Welcome to Lopenling',
        }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('p', {
          className: 'text-gray-500 sm:text-xl dark:text-gray-400',
          children: 'Here are a few reasons to use Lopenling',
        }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)('div', {
          className: 'mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0',
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)('div', {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('svg', {
                  width: '40',
                  height: '53',
                  viewBox: '0 0 40 53',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500',
                  children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M0.800049 7.30002C0.800049 5.60264 1.47433 3.97477 2.67457 2.77454C3.8748 1.57431 5.50266 0.900024 7.20005 0.900024H21.8752C23.5725 0.900387 25.2001 1.57491 26.4 2.77522L37.3248 13.7C38.5252 14.9 39.1997 16.5276 39.2001 18.2248V45.7C39.2001 47.3974 38.5258 49.0253 37.3255 50.2255C36.1253 51.4257 34.4974 52.1 32.8 52.1H7.20005C5.50266 52.1 3.8748 51.4257 2.67457 50.2255C1.47433 49.0253 0.800049 47.3974 0.800049 45.7V7.30002ZM7.20005 26.5C7.20005 25.6513 7.53719 24.8374 8.13731 24.2373C8.73742 23.6372 9.55136 23.3 10.4 23.3H29.6C30.4487 23.3 31.2627 23.6372 31.8628 24.2373C32.4629 24.8374 32.8 25.6513 32.8 26.5C32.8 27.3487 32.4629 28.1626 31.8628 28.7628C31.2627 29.3629 30.4487 29.7 29.6 29.7H10.4C9.55136 29.7 8.73742 29.3629 8.13731 28.7628C7.53719 28.1626 7.20005 27.3487 7.20005 26.5ZM10.4 36.1C9.55136 36.1 8.73742 36.4372 8.13731 37.0373C7.53719 37.6374 7.20005 38.4513 7.20005 39.3C7.20005 40.1487 7.53719 40.9626 8.13731 41.5628C8.73742 42.1629 9.55136 42.5 10.4 42.5H29.6C30.4487 42.5 31.2627 42.1629 31.8628 41.5628C32.4629 40.9626 32.8 40.1487 32.8 39.3C32.8 38.4513 32.4629 37.6374 31.8628 37.0373C31.2627 36.4372 30.4487 36.1 29.6 36.1H10.4Z',
                    fill: '#31C48D',
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('h3', {
                  className: 'mb-2 text-xl font-bold dark:text-white',
                  children: 'Accesibility',
                }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('p', {
                  className: 'mb-4 text-gray-500 dark:text-gray-400',
                  children:
                    'The vast majority of digital text assets are stored in secure storage. Sharing text is easier than ever.',
                }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)('a', {
                  href: '#',
                  className:
                    ' text-green-400 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400',
                  children: [
                    'Learn more about our text library',
                    ' ',
                    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('svg', {
                      className: 'ml-1 w-5 h-5',
                      fill: 'currentColor',
                      viewBox: '0 0 20 20',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('path', {
                        fillRule: 'evenodd',
                        d: 'M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z',
                        clipRule: 'evenodd',
                      }),
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)('div', {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('svg', {
                  className: 'mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500',
                  width: '58',
                  height: '49',
                  viewBox: '0 0 58 49',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('path', {
                    d: 'M38.5999 9.69998C38.5999 12.2461 37.5885 14.6879 35.7882 16.4882C33.9878 18.2886 31.546 19.3 29 19.3C26.4539 19.3 24.0121 18.2886 22.2117 16.4882C20.4114 14.6879 19.4 12.2461 19.4 9.69998C19.4 7.1539 20.4114 4.7121 22.2117 2.91175C24.0121 1.1114 26.4539 0.0999756 29 0.0999756C31.546 0.0999756 33.9878 1.1114 35.7882 2.91175C37.5885 4.7121 38.5999 7.1539 38.5999 9.69998ZM54.5999 16.1C54.5999 17.7974 53.9257 19.4252 52.7254 20.6255C51.5252 21.8257 49.8973 22.5 48.1999 22.5C46.5026 22.5 44.8747 21.8257 43.6745 20.6255C42.4742 19.4252 41.7999 17.7974 41.7999 16.1C41.7999 14.4026 42.4742 12.7747 43.6745 11.5745C44.8747 10.3743 46.5026 9.69998 48.1999 9.69998C49.8973 9.69998 51.5252 10.3743 52.7254 11.5745C53.9257 12.7747 54.5999 14.4026 54.5999 16.1ZM41.7999 38.5C41.7999 35.1052 40.4514 31.8495 38.0509 29.449C35.6505 27.0485 32.3947 25.7 29 25.7C25.6052 25.7 22.3494 27.0485 19.949 29.449C17.5485 31.8495 16.2 35.1052 16.2 38.5V48.1H41.7999V38.5ZM16.2 16.1C16.2 17.7974 15.5257 19.4252 14.3254 20.6255C13.1252 21.8257 11.4973 22.5 9.79995 22.5C8.10257 22.5 6.4747 21.8257 5.27447 20.6255C4.07424 19.4252 3.39995 17.7974 3.39995 16.1C3.39995 14.4026 4.07424 12.7747 5.27447 11.5745C6.4747 10.3743 8.10257 9.69998 9.79995 9.69998C11.4973 9.69998 13.1252 10.3743 14.3254 11.5745C15.5257 12.7747 16.2 14.4026 16.2 16.1ZM48.1999 48.1V38.5C48.2046 35.2465 47.3785 32.0457 45.7999 29.2008C47.2187 28.8377 48.7016 28.8035 50.1355 29.1007C51.5695 29.3979 52.9166 30.0187 54.0741 30.9157C55.2317 31.8127 56.1691 32.9623 56.8148 34.2767C57.4605 35.591 57.7974 37.0355 57.7999 38.5V48.1H48.1999ZM12.2 29.2008C10.6215 32.0457 9.79547 35.2465 9.79995 38.5V48.1H0.199952V38.5C0.199335 37.0345 0.534234 35.5883 1.17898 34.2723C1.82373 32.9563 2.76121 31.8054 3.91958 30.9077C5.07795 30.01 6.42645 29.3895 7.86174 29.0936C9.29704 28.7978 10.781 28.8344 12.2 29.2008Z',
                    fill: '#31C48D',
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('h3', {
                  className: 'mb-2 text-xl font-bold dark:text-white',
                  children: 'Community',
                }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('p', {
                  className: 'mb-4 text-gray-500 dark:text-gray-400',
                  children: 'We are proud to have a thriving and expansive community that actively utilizes our app .',
                }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)('a', {
                  href: 'https://lopenling.org',
                  className:
                    'inline-flex text-green-400 items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400',
                  children: [
                    'learn more about our community',
                    ' ',
                    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('svg', {
                      className: 'ml-1 w-5 h-5',
                      fill: 'currentColor',
                      viewBox: '0 0 20 20',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('path', {
                        fillRule: 'evenodd',
                        d: 'M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z',
                        clipRule: 'evenodd',
                      }),
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)('div', {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('svg', {
                  className: 'mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500',
                  fill: 'currentColor',
                  viewBox: '0 0 20 20',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('path', {
                    fillRule: 'evenodd',
                    d: 'M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
                    clipRule: 'evenodd',
                    fill: '#31C48D',
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('h3', {
                  className: 'mb-2 text-xl font-bold dark:text-white',
                  children: 'Data Driven',
                }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('p', {
                  className: 'mb-4 text-gray-500 dark:text-gray-400',
                  children:
                    'Our app offers real-time text editing, empowering users to collaborate and make instant modifications to their content.',
                }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)('a', {
                  href: '#',
                  className:
                    ' text-green-400 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400',
                  children: [
                    'How to implement best practices',
                    ' ',
                    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('svg', {
                      className: 'ml-1 w-5 h-5',
                      fill: 'currentColor',
                      viewBox: '0 0 20 20',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)('path', {
                        fillRule: 'evenodd',
                        d: 'M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z',
                        clipRule: 'evenodd',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = {
  version: '7622f172',
  entry: {
    module: '/build/entry.client-DYZKSACC.js',
    imports: ['/build/_shared/chunk-6C3IWDUJ.js', '/build/_shared/chunk-ADMCF34Z.js'],
  },
  routes: {
    root: {
      id: 'root',
      parentId: void 0,
      path: '',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/root-NYH4LW6C.js',
      imports: ['/build/_shared/chunk-QQMX6A4F.js', '/build/_shared/chunk-A5RXKRSO.js'],
      hasAction: !1,
      hasLoader: !0,
      hasCatchBoundary: !1,
      hasErrorBoundary: !0,
    },
    'routes/_index': {
      id: 'routes/_index',
      parentId: 'root',
      path: void 0,
      index: !0,
      caseSensitive: void 0,
      module: '/build/routes/_index-AIONQ5VZ.js',
      imports: ['/build/_shared/chunk-WQ4ID3ZB.js', '/build/_shared/chunk-2IAJYRSB.js'],
      hasAction: !1,
      hasLoader: !0,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    'routes/api.post': {
      id: 'routes/api.post',
      parentId: 'root',
      path: 'api/post',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/routes/api.post-Z6UIAG2H.js',
      imports: void 0,
      hasAction: !0,
      hasLoader: !1,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    'routes/api.reply': {
      id: 'routes/api.reply',
      parentId: 'root',
      path: 'api/reply',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/routes/api.reply-CVZV7AVO.js',
      imports: void 0,
      hasAction: !0,
      hasLoader: !1,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    'routes/api.reply.$id': {
      id: 'routes/api.reply.$id',
      parentId: 'routes/api.reply',
      path: ':id',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/routes/api.reply.$id-VOWKX2ON.js',
      imports: void 0,
      hasAction: !1,
      hasLoader: !0,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    'routes/api.suggestion': {
      id: 'routes/api.suggestion',
      parentId: 'root',
      path: 'api/suggestion',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/routes/api.suggestion-Z33UXDSB.js',
      imports: void 0,
      hasAction: !0,
      hasLoader: !0,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    'routes/api.suggestion.comment': {
      id: 'routes/api.suggestion.comment',
      parentId: 'routes/api.suggestion',
      path: 'comment',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/routes/api.suggestion.comment-TEMZYHCO.js',
      imports: void 0,
      hasAction: !0,
      hasLoader: !1,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    'routes/api.suggestion.like': {
      id: 'routes/api.suggestion.like',
      parentId: 'routes/api.suggestion',
      path: 'like',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/routes/api.suggestion.like-DCRDCHTV.js',
      imports: void 0,
      hasAction: !0,
      hasLoader: !1,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    'routes/api.text': {
      id: 'routes/api.text',
      parentId: 'root',
      path: 'api/text',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/routes/api.text-U3BU4EWK.js',
      imports: void 0,
      hasAction: !0,
      hasLoader: !0,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    'routes/api.user.preference.theme': {
      id: 'routes/api.user.preference.theme',
      parentId: 'root',
      path: 'api/user/preference/theme',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/routes/api.user.preference.theme-M5WZE2HH.js',
      imports: void 0,
      hasAction: !0,
      hasLoader: !1,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    'routes/api.user.search': {
      id: 'routes/api.user.search',
      parentId: 'root',
      path: 'api/user/search',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/routes/api.user.search-KW47PXJB.js',
      imports: void 0,
      hasAction: !1,
      hasLoader: !0,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    'routes/auth_.login': {
      id: 'routes/auth_.login',
      parentId: 'root',
      path: 'auth/login',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/routes/auth_.login-EQZR7YNI.js',
      imports: void 0,
      hasAction: !0,
      hasLoader: !0,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    'routes/auth_.pusher': {
      id: 'routes/auth_.pusher',
      parentId: 'root',
      path: 'auth/pusher',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/routes/auth_.pusher-6QVNZVCO.js',
      imports: void 0,
      hasAction: !0,
      hasLoader: !1,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    'routes/text.$id': {
      id: 'routes/text.$id',
      parentId: 'root',
      path: 'text/:id',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/routes/text.$id-J5BP5LPH.js',
      imports: [
        '/build/_shared/chunk-WQ4ID3ZB.js',
        '/build/_shared/chunk-PU3BN4M5.js',
        '/build/_shared/chunk-2IAJYRSB.js',
      ],
      hasAction: !1,
      hasLoader: !0,
      hasCatchBoundary: !1,
      hasErrorBoundary: !0,
    },
    'routes/text.$id.posts': {
      id: 'routes/text.$id.posts',
      parentId: 'routes/text.$id',
      path: 'posts',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/routes/text.$id.posts-A3JH5H4E.js',
      imports: ['/build/_shared/chunk-A5RXKRSO.js'],
      hasAction: !1,
      hasLoader: !0,
      hasCatchBoundary: !1,
      hasErrorBoundary: !0,
    },
    'routes/text.upload': {
      id: 'routes/text.upload',
      parentId: 'root',
      path: 'text/upload',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/routes/text.upload-HXSGIDJD.js',
      imports: ['/build/_shared/chunk-WQ4ID3ZB.js', '/build/_shared/chunk-2IAJYRSB.js'],
      hasAction: !0,
      hasLoader: !0,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
  },
  cssBundleHref: void 0,
  hmr: void 0,
  url: '/build/manifest-7622F172.js',
};

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = 'public\\build',
  future = {
    unstable_cssModules: !1,
    unstable_cssSideEffectImports: !1,
    unstable_dev: !1,
    unstable_postcss: !1,
    unstable_tailwind: !1,
    unstable_vanillaExtract: !1,
    v2_errorBoundary: !0,
    v2_meta: !0,
    v2_normalizeFormMethod: !0,
    v2_routeConvention: !0,
  },
  publicPath = '/build/',
  entry = { module: entry_server_exports },
  routes = {
    root: {
      id: 'root',
      parentId: void 0,
      path: '',
      index: void 0,
      caseSensitive: void 0,
      module: root_exports,
    },
    'routes/api.user.preference.theme': {
      id: 'routes/api.user.preference.theme',
      parentId: 'root',
      path: 'api/user/preference/theme',
      index: void 0,
      caseSensitive: void 0,
      module: api_user_preference_theme_exports,
    },
    'routes/api.suggestion.comment': {
      id: 'routes/api.suggestion.comment',
      parentId: 'routes/api.suggestion',
      path: 'comment',
      index: void 0,
      caseSensitive: void 0,
      module: api_suggestion_comment_exports,
    },
    'routes/api.suggestion.like': {
      id: 'routes/api.suggestion.like',
      parentId: 'routes/api.suggestion',
      path: 'like',
      index: void 0,
      caseSensitive: void 0,
      module: api_suggestion_like_exports,
    },
    'routes/api.user.search': {
      id: 'routes/api.user.search',
      parentId: 'root',
      path: 'api/user/search',
      index: void 0,
      caseSensitive: void 0,
      module: api_user_search_exports,
    },
    'routes/api.suggestion': {
      id: 'routes/api.suggestion',
      parentId: 'root',
      path: 'api/suggestion',
      index: void 0,
      caseSensitive: void 0,
      module: api_suggestion_exports,
    },
    'routes/text.$id.posts': {
      id: 'routes/text.$id.posts',
      parentId: 'routes/text.$id',
      path: 'posts',
      index: void 0,
      caseSensitive: void 0,
      module: text_id_posts_exports,
    },
    'routes/api.reply.$id': {
      id: 'routes/api.reply.$id',
      parentId: 'routes/api.reply',
      path: ':id',
      index: void 0,
      caseSensitive: void 0,
      module: api_reply_id_exports,
    },
    'routes/auth_.pusher': {
      id: 'routes/auth_.pusher',
      parentId: 'root',
      path: 'auth/pusher',
      index: void 0,
      caseSensitive: void 0,
      module: auth_pusher_exports,
    },
    'routes/auth_.login': {
      id: 'routes/auth_.login',
      parentId: 'root',
      path: 'auth/login',
      index: void 0,
      caseSensitive: void 0,
      module: auth_login_exports,
    },
    'routes/text.upload': {
      id: 'routes/text.upload',
      parentId: 'root',
      path: 'text/upload',
      index: void 0,
      caseSensitive: void 0,
      module: text_upload_exports,
    },
    'routes/api.reply': {
      id: 'routes/api.reply',
      parentId: 'root',
      path: 'api/reply',
      index: void 0,
      caseSensitive: void 0,
      module: api_reply_exports,
    },
    'routes/api.post': {
      id: 'routes/api.post',
      parentId: 'root',
      path: 'api/post',
      index: void 0,
      caseSensitive: void 0,
      module: api_post_exports,
    },
    'routes/api.text': {
      id: 'routes/api.text',
      parentId: 'root',
      path: 'api/text',
      index: void 0,
      caseSensitive: void 0,
      module: api_text_exports,
    },
    'routes/text.$id': {
      id: 'routes/text.$id',
      parentId: 'root',
      path: 'text/:id',
      index: void 0,
      caseSensitive: void 0,
      module: text_id_exports,
    },
    'routes/_index': {
      id: 'routes/_index',
      parentId: 'root',
      path: void 0,
      index: !0,
      caseSensitive: void 0,
      module: index_exports,
    },
  };
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    assets,
    assetsBuildDirectory,
    entry,
    future,
    publicPath,
    routes,
  });
