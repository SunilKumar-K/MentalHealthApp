# api/therapy_modules.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/therapy-modules")
def get_therapy_modules():
    # Your therapy modules logic
    return {"message": "Therapy modules data"}
