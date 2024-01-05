#!/usr/bin/env python3

import os
import shutil
import subprocess
import shlex

ORIGIN_PATH = '../evm/docs/'
DESTINATION_PATH = './pages/evm-package/'
MAPPINGS = {
    'implementations': 'readyToUse',
    'RMRK/multiasset': 'core/modular/multiasset',
    'RMRK/equippable': 'core/modular/equippable',
    'RMRK/nestable': 'core/modular/nestable',
    'RMRK/emotable': 'core/modular/emotable',
    'RMRK/extension/tokenAttributes': 'core/modular/tokenAttributes',
    'RMRK/access': 'core/other/access',
    'RMRK/catalog': 'core/other/catalog',
    'RMRK/core': 'core/other/core',
    'RMRK/extension': 'core/other/extension',
    'RMRK/library': 'core/other/library',
    'RMRK/security': 'core/other/security',
    'RMRK/utils': 'core/other/utils',
}

REMOVE = [
    'core/other/extension/tokenAttributes', # This becomes duplicate since we copy it to a new folder
]

def main(origin_path, destination_path, mappings):
    # Create destination path if it doesn't exist
    if not os.path.exists(destination_path):
        os.makedirs(destination_path)
    for from_, to in mappings.items():
        # Copy the folder
        shutil.copytree(os.path.join(origin_path, from_), os.path.join(destination_path, to), dirs_exist_ok=True)
    for remove in REMOVE:
        shutil.rmtree(os.path.join(destination_path, remove))
    
    subprocess.run(shlex.split("find pages/evm-package -type f -name '*.md' -exec sed -i -e 's/#### Returns/**Returns**/g;s/#### Parameters/**Parameters**/g' {} \;"))


if __name__ == "__main__":
    main(ORIGIN_PATH, DESTINATION_PATH, MAPPINGS)




