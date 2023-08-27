import firebase_admin
from firebase_admin import credentials

def initialize_firebase():
    # Initialize Firebase
    cred = credentials.Certificate("path/to/serviceAccountKey.json")
    firebase_admin.initialize_app(cred)
