export type UserType = {
  id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  isAdmin: boolean;
  avatarUrl: string;
  likedPost: PostType[];
  likedReply: Reply[];
  likedSuggestion: SuggestionType[];
  posts: PostType[];
  suggestions: SuggestionType[];
  texts: Text[];
  preference?: UserPreferenceType;
  preferenceId?: number;
  suggestionComments: SuggestionCommentType[];
} | null;
export interface UserPreferenceType {
  id: number;
  theme: string;
  language: string;
  user: UserType;
}
export interface SuggestionType {
  id: string;
  text: Text;
  textId: number;
  oldValue: string;
  newValue: string;
  user: UserType;
  userId: string;
  threadId: string;
  likedBy: UserType[];
  created_at: Date;
  updatedAt?: Date;
  suggestionComments: SuggestionCommentType[];
  audioUrl?: string;
}
export interface SuggestionCommentType {
  id: number;
  text: string;
  audioUrl?: string;
  suggestion: SuggestionType;
  suggestionId: string;
  author: UserType;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  type?: string;
}
export interface PostType {
  id: string;
  type: string;
  avatar: string;
  topicId: number;
  postId: number;
  content: string;
  audioUrl?: string;
  createdAt: Date;
  creatorUserId: string;
  textId: number;
  threadId: string;
  creatorUser: UserType;
  text: Text;
  replies: Reply[];
  likedBy: UserType[];
}

export interface Reply {
  id: string;
  isApproved?: boolean;
  postId: string;
  parentPost: PostType;
  likedBy: UserType[];
}
