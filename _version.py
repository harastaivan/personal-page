import os

__version__ = os.popen('git describe --tags').read()
