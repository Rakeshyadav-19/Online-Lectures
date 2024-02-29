# To run this rename 45_rax.py == rax.py 

"""
The if __name__ == "__main__" idiom is a common pattern used in Python scripts to determine whether the script is being run directly or being imported as a module into another script.

In Python, the __name__ variable is a built-in variable that is automatically set to the name of the current module. When a Python script is run directly, the __name__ variable is set to the string __main__ When the script is imported as a module into another script, the __name__ variable is set to the name of the module.
"""


# This idiom is useful because it allows you to reuse code from a script by importing it as a module into another script, without running the code in the original script.
import rax

rax.welcome()
