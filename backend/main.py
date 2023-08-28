from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from firebase_admin import credentials, auth
import firebase_admin

app = FastAPI()

# Set up CORS (for frontend connection)
origins = ["http://localhost:3000"]  # Update with your frontend URL
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Firebase Admin SDK with the downloaded service account key JSON file
cred = credentials.Certificate("secrets/serviceAccountKey.json")
firebase_admin.initialize_app(cred)

# Define your FastAPI endpoints for registration and login (as shown in the previous example)
# ...

