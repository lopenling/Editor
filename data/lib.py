import io
import json
import yaml
import os
file_path='./opfs/'

def get_meta_data(file_name):
    file_paths = f'{file_path}/{file_name}/{file_name}.opf/meta.yml'
    try:
        with io.open(file_paths, 'r', encoding='utf-8') as meta_file:
            yaml_data = yaml.safe_load(meta_file)
            return yaml_data
    except Exception as e:
        print(f"An error occurred: {e}")
        return None


def fetch_text(file_name, base_name):
    file_paths = f'{file_path}{file_name}/base/{base_name}'
    try:
        with io.open(file_paths, 'r', encoding='utf-8') as textFile:
            file_contents = textFile.read()
            return file_contents

    except IOError as e:
        print(f"Error reading the txt file: {e}")
        return None
    except Exception as e:
        print(f"An error occurred: {e}")
        return None


def fetch_annotation(file_name,base_name):
    yaml_file_path = f'{file_path}/{file_name}/layers/{base_name}/Durchen.yml'
    try:
        with io.open(yaml_file_path, 'r', encoding='utf-8') as yaml_file:
            yaml_data = yaml.safe_load(yaml_file)
            return yaml_data
    except IOError as e:
        print(f"Error reading the YAML file: {e}")
        return None
    except yaml.YAMLError as e:
        print(f"Error parsing the YAML file: {e}")
        return None
    except Exception as e:
        print(f"An error occurred: {e}")
        return None


def extract_annotations_array(json_data):
    span_array = []
    for key, item in json_data['annotations'].items():
        span = {
            'id': key,
            'start': item['span']['start'],
            'end': item['span']['end'],
            'versions': []
        }
        for key, d in item['options'].items():
            diff_entry = {
                key: d['note']
            }
            span['versions'].append(diff_entry)

        span_array.append(span)

    return span_array



def applyAnnotation(text, annotation):
    annotated_text = text
    last_index = 0
    for annotation in annotation:
        start = annotation['start']
        end = annotation['end']
        annotation_id = annotation['id']

        annotated_text += text[last_index:start] + \
            f"<suggestion id='{annotation_id}'>" + \
            text[start:end] + "</suggestion>"
        last_index = end

    annotated_text += text[last_index:]

    # create_txt_file(annotated_text, f'./annotated_text_{last_index}.txt')
    return annotated_text


def cut_text_by_pagination(text, pagination_data):
    cutted_data = []

    for pagination in pagination_data:
        start = pagination['start']
        end = pagination['end']
        content = text[start:end]

        # Update the content of the object
        pagination['content'] = content
        cutted_data.append(pagination)

    return cutted_data


def generate_merged_array(pages, annotations):

    for page in pages:
        start = page['start']
        end = page['end']
        result = []

        for annotation in annotations:
            a_start = annotation['start']
            a_end = annotation['end']
            if a_start > start and a_end < end:
                annotation['start'] = a_start-start
                annotation['end'] = a_end-start
                result.append(annotation)

        page['annotation'] = result

    return pages


def generate_paginated_text(file_name, base_name,text):
    yaml_file_path = f'{file_path}{file_name}/layers/{base_name}/pagination.yml'
    try:
        with io.open(yaml_file_path, 'r', encoding='utf-8') as yaml_file:
            yaml_data = yaml.safe_load(yaml_file)
            pagination_data = []
            for order, (key, item) in enumerate(yaml_data['annotations'].items(), start=1):
                paginatedText = {}
                paginatedText['id'] = key
                paginatedText['start'] = item['span']['start']
                paginatedText['end'] = item['span']['end']
                paginatedText['content'] = ''
                paginatedText['order'] = order
                pagination_data.append(paginatedText)
            paginated_text = cut_text_by_pagination(text, pagination_data)
            return paginated_text

    except IOError as e:
        print(f"Error reading the YAML file: {e}")
        return None
    except yaml.YAMLError as e:
        print(f"Error parsing the YAML file: {e}")
        return None
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

def get_data(file_name, base_name,content):
 
    text = generate_paginated_text(file_name, base_name,content)
    annotation = extract_annotations_array(fetch_annotation(file_name,base_name))    
    datas = generate_merged_array(text, annotation)
    output = {}
    for data in datas:
      data['content'] = applyAnnotation(data['content'], data['annotation'])
      output['data'] = datas
    return output

def list_folders():
    directory_path = './opfs'
    folders = [folder for folder in os.listdir(directory_path) if os.path.isdir(os.path.join(directory_path, folder))]
    return folders
