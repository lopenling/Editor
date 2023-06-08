export type UserType = {
  id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  created_at: Date;
  updated_at: Date;
  isAdmin: boolean;
  avatarUrl: string;
  likedPost: PostType[];
  likedReply: ReplyType[];
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
  updated_at?: Date;
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
  updated_at: Date;
  userId: string;
  type?: 'support' | 'reject' | null;
}
export interface PostType {
  id: string;
  type: string;
  avatar: string;
  topic_id: number;
  postId: number;
  content: string;
  audioUrl?: string;
  created_at: Date;
  creatorUserId: string;
  textId: number;
  threadId: string;
  creatorUser: UserType;
  text: Text;
  replies: ReplyType[];
  likedBy: UserType[];
  replyCount?: number;
  isSolved: boolean;
}

export interface ReplyType {
  id: string;
  is_approved?: boolean;
  postId: string;
  parentPost: PostType;
  likedBy: UserType[];
}
export interface FilterType {
  type: 'all' | 'comment' | 'question';
  date: {
    startDate: Date | null;
    endDate: Date | null;
  };
  user: string[];
  solved: 'both' | 'solved';
}

export interface TextType {
  id: number;
  name: string;
  author?: any;
  content?: string;
  Post?: PostType[];
  Suggestion?: SuggestionType[];
  userId?: string | null;
}
