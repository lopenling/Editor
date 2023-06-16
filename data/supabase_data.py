from supabase import create_client
import os
from dotenv import load_dotenv
import uuid
load_dotenv()


url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")


supabase = create_client(url, key)


# def upload_default_user():
#     defaultUsers = [
#         {"id": '7da4392a-bd7e-4f9b-b991-a53d15a3a57a',
#          "email": "peking@example.com",
#          "avatarUrl": "https://example.com/avatar1.png",
#          "isAdmin": False,
#          "name": "peking",
#          "username": "peking",
#          },
#         {"id": '08a6a7bb-6877-4fe9-b95a-ba0b3c27c204',
#          "email": "narthang@example.com",
#          "avatarUrl": "https://example.com/avatar2.png",
#          "isAdmin": False,
#          "name": "narthang",
#          "username": "narthang",
#          },
#         {"id": 'a3e238db-65b1-45a7-825b-1fb3f2bbf2ab',
#          "email": "derge@example.com",
#          "avatarUrl": "https://example.com/avatar2.png",
#          "isAdmin": False,
#          "name": "derge",
#          "username": "derge",
#          },
#         {"id": '4d39fbf2-a229-443f-9041-f68ed6353362',
#          "email": "chone@example.com",
#          "avatarUrl": "https://example.com/avatar2.png",
#          "isAdmin": False,
#          "name": "chone",
#          "username": "chone",
#          },
#     ]
#     for item in defaultUsers:
#         response = supabase.table('User').insert(item).execute()
#         print(response)


def upload_text(name, userId):
    data = {
        "name": name,
        "userId": userId,
    }
    response = supabase.table("Text").insert(data).execute()
    return response.data[0].get('id')


def upload_page(content, imageUrl, order, textId):
    random_uuid = uuid.uuid4()
    id = str(random_uuid)
    data = {
        "id":id,
        "content": content,
        "imageUrl": imageUrl,
        "order": order,
        "textId": textId
    }
    response = supabase.table('Page').insert(data).execute()
    return id


def upload_suggestion(annotationId, value, userId, pageId,textId):
    random_uuid = uuid.uuid4()

    data = {
        "id": str(random_uuid),
        "threadId": annotationId,
        "newValue": value,
        "userId": userId,
        "pageId": pageId,
        "textId": textId
    }
    response = supabase.table('Suggestion').insert(data).execute()
    return response


def get_user_id(name):
    if name == "narthang":
        return "08a6a7bb-6877-4fe9-b95a-ba0b3c27c204"
    elif name == "chone":
        return "4d39fbf2-a229-443f-9041-f68ed6353362"
    elif name == "peking":
        return "7da4392a-bd7e-4f9b-b991-a53d15a3a57a"
    elif name == "derge":
        return "a3e238db-65b1-45a7-825b-1fb3f2bbf2ab"

