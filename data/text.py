import io
import json
import yaml

file_name = 'O0A4F0B4F'
base_name = 7367


def get_meta_data(file_name):
    file_path = f'./{file_name}/{file_name}.opf/meta.yml'
    try:
        with io.open(file_path, 'r', encoding='utf-8') as meta_file:
            yaml_data = yaml.safe_load(meta_file)
            return yaml_data
    except Exception as e:
        print(f"An error occurred: {e}")
        return None


def fetchText(file_name, base_name):
    file_path = f'./{file_name}/base/{base_name}.txt'
    try:
        with io.open(file_path, 'r', encoding='utf-8') as textFile:
            file_contents = textFile.read()
            return file_contents

    except IOError as e:
        print(f"Error reading the txt file: {e}")
        return None
    except Exception as e:
        print(f"An error occurred: {e}")
        return None


def fetch_annotation(base_name):
    yaml_file_path = f'./{file_name}/layers/{base_name}/Durchen.yml'
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


def create_json_file(data, file_path):
    formatted_json = json.dumps(
        data, indent=4, sort_keys=True, ensure_ascii=False)
    with io.open(file_path, 'w', encoding='utf-8') as file:
        file.write(formatted_json)


def create_txt_file(data, file_path):
    with io.open(file_path, "w", encoding='utf-8') as file:
        file.write(data)


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


def generate_paginated_text():
    yaml_file_path = f'./{file_name}/layers/{base_name}/pagination.yml'
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

            text = fetchText(file_name, base_name)
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


text = generate_paginated_text()
annotation = extract_annotations_array(fetch_annotation(base_name))
datas = generate_merged_array(text, annotation)
meta = get_meta_data(file_name)
output = {}
for data in datas:
    data['content'] = applyAnnotation(data['content'], data['annotation'])

output['data'] = datas
output['meta'] = meta['source_metadata']
output['base'] = meta['bases']
d = create_json_file(output, './data.json')
