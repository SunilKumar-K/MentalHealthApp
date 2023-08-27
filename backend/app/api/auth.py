from fastapi import APIRouter, Depends, HTTPException  # Import HTTPException
from fastapi.security import OAuth2PasswordBearer
from firebase_admin import auth

router = APIRouter()

# OAuth2 Password Bearer for token verification
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Verify Firebase ID token
async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        decoded_token = auth.verify_id_token(token)
        return decoded_token
    except auth.AuthError as exc:  # Catch the exception
        raise HTTPException(status_code=401, detail="Invalid token") from exc

@router.post("/login")
async def login(token: str = Depends(oauth2_scheme)):
    user = await get_current_user(token)
    return {"message": f"Logged in as {user['email']}"}

@router.post("/register")
async def register(token: str = Depends(oauth2_scheme)):
    user = await get_current_user(token)
    return {"message": f"Registered user {user['email']}"}
