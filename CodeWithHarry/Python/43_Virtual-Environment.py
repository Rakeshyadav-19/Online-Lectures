'''
open file
open folder where you want to create this 
open the folder in terminal
perform the follwing steps
'''

# it intalls those modeules version their and keep the global version and version installed tehir seperate
# Create a virtual environment
'''python -m venv <folder-name>'''

# Activate the virtual environment (Linux/macOS)
'''source <folder-name>/bin/activate'''

# Activate the virtual environment (Windows)
# '''myenv\Scripts\activate.bat'''


# Once the virtual environment is activated, any packages that you install using pip will be installed in the virtual environment, rather than in the global Python environment. This allows you to have a separate set of packages for each project, without affecting the packages installed in the global environment.

# Deactivate the virtual environment
'''deactivate'''



'''If you want to share your project and give in the installed modules with version '''

# it can be useful to create a requirements.txt file that lists the packages and their versions that your project depends on. This file can be used to easily install all the required packages in a new environment.
# To create a requirements.txt file, you can use the pip freeze command, which outputs a list of installed packages and their versions.

# Output the list of installed packages and their versions to a file
'''pip freeze > requirements.txt'''

# To install the packages listed in the requirements.txt file, you can use the pip install command with the -r flag:
# Install the packages listed in the requirements.txt file
'''pip install -r requirements.txt'''


import pandas as pd
print(pd.__version__)