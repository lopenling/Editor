import { MAX_CATEGORY_NAME_LENGTH } from "~/constants";
import { isUserPresent } from "~/model/user";
class DiscourseApi {
  DiscourseUrl: string;
  apiKey: string;
  username: string;
  category: string | undefined;
  categoryName: string;
  origin: string | undefined;
  constructor(username: string = "") {
    if (!process.env.DISCOURSE_API_KEY || !process.env.DISCOURSE_SITE)
      throw new Error("asign api and url  in env");

    this.DiscourseUrl = process.env.DISCOURSE_SITE;
    this.apiKey = process.env.DISCOURSE_API_KEY;
    this.username = username;
    this.category = process.env.DISCOURSE_QA_CATEGORY_ID;
    this.categoryName = "test";
    this.origin = process.env.ORIGIN_LOCATION;
  }

  authHeader(admin = false) {
    let auth_headers = {
      "Api-Key": this.apiKey,
      "Api-Username": admin ? "tenkus47" : this.username,
    };
    return auth_headers;
  }
  async fetchCategoryData() {
    let url = `${this.DiscourseUrl}/c/${this.categoryName}/${this.category}.json`;
    const res = await fetch(url);
    return await res.json();
  }
  async fetchCategoryList(id: string | undefined) {
    const res = await fetch(
      `${this.DiscourseUrl}/categories.json?include_subcategories=true`
    );
    const categories = await res.json();
    const filterCategory = categories?.category_list.categories.find(
      (category) => category?.id === parseInt(id)
    );
    if (!filterCategory.subcategory_ids.length) return null;
    return filterCategory.subcategory_list;
  }
  async fetchposts(topicId: number) {
    if (topicId) {
      const res = await fetch(`${this.DiscourseUrl}/t/${topicId}/posts.json`);
      if (res.status !== 200) {
        return {};
      }
      const data = await res.json();
      return data;
    }
  }
  async fetchPostReplies(postId: number) {
    if (postId) {
      const res = await fetch(
        `${this.DiscourseUrl}/posts/${postId}/replies.json`
      );
      const data = await res.json();
      return data;
    }
  }
  async addCategory(categoryName: string, parent_category_id: number) {
    let authHeaders = this.authHeader(true);
    var randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
    let newCategoryData = {
      name: categoryName,
      color: randomColor(),
      text_color: randomColor(),
      parent_category_id,
    };
    let queryParams = new URLSearchParams(newCategoryData).toString();
    try {
      const response = await fetch(
        `${this.DiscourseUrl}/categories.json?` + queryParams,
        {
          method: "POST",
          headers: authHeaders,
        }
      );
      let category = await response.json();
      console.log("Created category:", category);
      return category;
    } catch (e) {
      console.error("Failed to create category:", e);
      throw e;
    }
  }
  async addTopic(
    threadId: string,
    username: string,
    category_id: number,
    topic_name: string | FormDataEntryValue,
    bodyContent: string,
    textId: number,
    audioUrl: string
  ) {
    let auth_headers = this.authHeader();
    let url = `${this.origin}/text/${textId}/posts?thread=${threadId}`;
    let bodyContentWithLink = addLinktoQuestion(bodyContent, url);
    let post_text = `
<p>${bodyContentWithLink}</p>
`;
    if (audioUrl && audioUrl !== "") {
      post_text = `<p>${bodyContentWithLink}</p><audio controls><source src="${audioUrl}" type="audio/webm"></audio>`;
    }

    let new_Topic_data = {
      title: topic_name as string,
      category: category_id,
      raw: post_text,
    };
    let queryParams = new URLSearchParams(new_Topic_data).toString();
    const response = await fetch(
      `${this.DiscourseUrl}/posts.json?${queryParams}`,
      {
        method: "POST",
        headers: auth_headers,
      }
    );
    let data = await response.json();
    if (data?.errors) {
      throw new Error(
        "Post cannot be created due to dublication!" + data.errors
      );
    }
    return data;
  }

  async createPost(TopicId: number, postString: string) {
    let auth_headers = this.authHeader();

    try {
      let newPostData = {
        topic_id: TopicId,
        raw: postString,
      };
      let params = new URLSearchParams(newPostData).toString();

      const response = await fetch(
        `${this.DiscourseUrl}/posts.json?` + params,
        {
          method: "post",
          headers: auth_headers,
        }
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async deletePost(postId: number) {
    let auth_headers = this.authHeader();

    try {
      const response = await fetch(
        `${this.DiscourseUrl}/posts/${postId}.json`,
        {
          method: "delete",
          headers: auth_headers,
        }
      );
      return response.status;
    } catch (e) {
      console.log(e);
    }
  }

  async deleteTopic(id: number) {
    let auth_headers = this.authHeader();
    try {
      const response = await fetch(`${this.DiscourseUrl}/t/${id}.json`, {
        method: "DELETE",
        headers: auth_headers,
      });
      return response.status;
    } catch (e) {
      throw new Error("cannot delete topic on discourse" + e);
    }
  }
  async uploadFile(formData: any) {
    let auth_headers = this.authHeader();

    let res = await fetch(`${this.DiscourseUrl}/uploads.json`, {
      method: "POST",
      headers: auth_headers,
      body: formData,
    });
    let data = await res.json();
    if (data?.errors) throw new Error(data.errors);
    return data;
  }
  async logout(id: string) {
    let auth_headers = this.authHeader(true);
    try {
      let url = `${this.DiscourseUrl}/admin/users/${id}/log_out`;
      const response = await fetch(url, {
        method: "post",
        headers: auth_headers,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

export async function createThread(
  userName: string,
  textTitle: string,
  blockquoteArea: string,
  postContent: string,
  parentCategoryId: string,
  textId: number,
  audioUrl: string | null,
  threadId: string
) {
  if (!textTitle || !blockquoteArea || !postContent)
    throw new Error("failed to access Topic Id");
  const api: DiscourseApi = new DiscourseApi(userName);
  const categories = await api.fetchCategoryList(parentCategoryId);
  if (textTitle.length > 40) {
    textTitle =
      textTitle.substring(0, MAX_CATEGORY_NAME_LENGTH) + `_text_${textId}`;
  }
  const category = categories.find((c: any) => c.name === textTitle.trim());
  let categoryId: number;
  if (category) {
    categoryId = category.id;
  } else {
    const newCategory = await api.addCategory(
      textTitle,
      parseInt(parentCategoryId)
    );
    categoryId = newCategory.category.id;
  }
  let topic = await api.addTopic(
    threadId,
    userName,
    categoryId,
    blockquoteArea,
    postContent as string,
    textId,
    audioUrl
  );
  return topic;
}

function addLinktoQuestion(question: string, url: string) {
  return `<a href="${url}" target='_blank'>${question}</a>`;
}
export async function deleteDiscourseTopic(userName: string, topicId: number) {
  const apiObj: DiscourseApi = new DiscourseApi(userName);
  const res = apiObj.deleteTopic(topicId);
  return res;
}

export async function getposts(topicId: number) {
  const apiObj: DiscourseApi = new DiscourseApi();
  const res = apiObj.fetchposts(topicId);
  return res;
}
export async function getpostreplies(topicId: number) {
  const apiObj: DiscourseApi = new DiscourseApi();
  const res = apiObj.fetchPostReplies(topicId);
  return res;
}
export async function uploadFile(username: string, formData: any) {
  const apiObj: DiscourseApi = new DiscourseApi(username);
  const res = apiObj.uploadFile(formData);
  return res;
}
export async function createPost(
  topicId: number,
  postString: string,
  username: string
) {
  const apiObj: DiscourseApi = new DiscourseApi(username);
  const res = apiObj.createPost(topicId, postString);
  return res;
}
export async function deletePost(postId: number, username: string) {
  const apiObj: DiscourseApi = new DiscourseApi(username);

  const res = apiObj.deletePost(postId);
  return res;
}

export async function logout(id: string) {
  const apiObj: DiscourseApi = new DiscourseApi();
  const res = await apiObj.logout(id);
  return res;
}
export async function fetchCategoryData() {
  const apiObj: DiscourseApi = new DiscourseApi();
  return await apiObj.fetchCategoryData();
}

export default DiscourseApi;
