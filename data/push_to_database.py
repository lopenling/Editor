from lib import list_folders,get_meta_data,fetch_text,get_data
from supabase_data import upload_text,upload_page,get_user_id,upload_suggestion
class Text:


    authorId = "08a6a7bb-6877-4fe9-b95a-ba0b3c27c204"

    def __init__(self,meta):
        self.meta=meta 
    def get_author_id(self):
        return self.authorId
    def show_meta(self):
        return self.meta
    def get_title(self):
        return self.meta['source_metadata']['title']
    def get_base_names(self):
        return self.meta['bases']


def main():
    folders = list_folders()
    for folder in folders:
        process_folder(folder)


def process_folder(folder):
    meta = get_meta_data(folder)
    text = Text(meta)
    bases = text.get_base_names()
    for base in bases:
        base_file_path = bases[base]['base_file']
        text.content = fetch_text(folder, base_file_path)
        id = upload_text(text.get_title(), text.get_author_id())
        print('Uploading text')
        datas = get_data(folder, base, text.content)
        for data in datas.get('data'):
            process_data(data, id)


def process_data(data, text_id):
    content = data.get('content')
    order = data.get('order')
    page_id = upload_page(content, '', order, text_id)
    print('Uploading page')
    annotations = data.get('annotation')
    for annotation in annotations:
        process_annotation(annotation, page_id, text_id)


def process_annotation(annotation, page_id, text_id):
    versions = annotation.get('versions')
    for version in versions:
        key, value = next(iter(version.items()))
        user_id = get_user_id(key)
        res = upload_suggestion(
            annotation['id'], value, user_id, page_id, text_id)
        print('uploading suggestion')

# Define other helper functions as needed


main()
