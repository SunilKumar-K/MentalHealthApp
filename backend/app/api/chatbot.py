# api/chatbot.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/chatbot")
def get_chatbot_response():
    # Your chatbot logic
    return {"response": "Hello from the chatbot"}
