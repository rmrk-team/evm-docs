#!/usr/bin/env python3

import os
import json

def split_camel_case(camel_case_string):
    if camel_case_string.startswith('RMRK'):
        camel_case_string = camel_case_string[4:]
    elif camel_case_string.startswith('IRMRK'):
        camel_case_string = camel_case_string[5:]
    elif camel_case_string.startswith('IERC'):
        return camel_case_string

    words = [camel_case_string[0].upper()]
    
    for char in camel_case_string[1:]:
        if char.isupper():
            words.append(char)
        else:
            words[-1] += char
    
    joined = ' '.join(words)
    # Special cases
    joined = joined.replace('E R C', 'ERC').replace('Erc', 'ERC').replace('U R I', 'URI')
    return joined


def process_folder(folder_path):
    for root, dirs, files in os.walk(folder_path):
        meta_data = {}
        for file_name in files:
            # Skip non-markdown files
            if not file_name.endswith('.md'):
                continue
            raw_name = file_name[:-3]

            # Store mapping in dictionary
            meta_data[raw_name] = split_camel_case(raw_name)
        for dir in dirs:
            meta_data[dir] = split_camel_case(dir)
    
        # Write the dictionary to _meta.json
        meta_file_path = os.path.join(root, '_meta.json')
        with open(meta_file_path, 'w') as meta_file:
            json.dump(meta_data, meta_file, indent=2, sort_keys=True)
        
        print(f"Created _meta.json in {root}")

def main(start_folder):
    for root, dirs, files in os.walk(start_folder):
        process_folder(root)

if __name__ == "__main__":
    main('./pages/evm-package')
