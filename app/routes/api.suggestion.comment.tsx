import { ActionFunction } from '@remix-run/server-runtime';
import {
  createCommentOnSuggestion,
  deleteCommentOnSuggestion,
  updateCommentOnSuggestion,
} from '~/model/suggestionComment';
import { getUserSession } from '~/services/session.server';

import { uploadAudio } from '~/services/uploadAudio.server';
import type { ActionArgs, UploadHandler } from '@remix-run/node';
import {
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from '@remix-run/node';
export let action: ActionFunction = async ({ request }: ActionArgs) => {
  const user = await getUserSession(request);
  const uploadHandler: UploadHandler = composeUploadHandlers(uploadAudio, createMemoryUploadHandler());
  const formData = await parseMultipartFormData(request, uploadHandler);
  let Obj = Object.fromEntries(formData);
  if (request.method === 'POST') {
    let comment = Obj.commentContent as string;
    let id = Obj.id as string;
    let audioUrl = Obj.file as string;
    let type = Obj.type as 'support' | 'reject' | null;
    let createComment = await createCommentOnSuggestion(comment, id, user.id, audioUrl, type);
    return createComment;
  }
  if (request.method === 'DELETE') {
    let id = Obj.id as string;
    let deleteComment = await deleteCommentOnSuggestion(parseInt(id));
    return deleteComment;
  }
  if (request.method === 'PATCH') {
    let id = Obj.id as string;
    let newContent = Obj.newContent as string;
    let type = Obj.type as string;
    let updateComment = await updateCommentOnSuggestion(parseInt(id), newContent, type);
    return updateComment;
  }
  return null;
};
