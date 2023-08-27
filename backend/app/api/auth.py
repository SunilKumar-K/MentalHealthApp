from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from firebase_admin import auth


router = APIRouter()

# Create a dependency for OAuth2 Password Bearer
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Function to verify the Firebase ID token
async def verify_id_token(token: str = Depends(oauth2_scheme)):
    try:
        decoded_token = auth.verify_id_token(token)
        return decoded_token
    except auth.AuthError as exc:
        # Determine specific error reason and raise corresponding exception
        error_reason = exc.code
        if error_reason == "ID_TOKEN_EXPIRED":
            raise HTTPException(status_code=401, detail="Token has expired")
        elif error_reason == "INVALID_ID_TOKEN":
            raise HTTPException(status_code=401, detail="Invalid token provided")
        else:
            raise HTTPException(status_code=401, detail="Token verification failed")

@router.post("/login")
async def login(current_user: dict = Depends(verify_id_token)):
    return {"message": f"Logged in as {current_user['email']}"}

@router.post("/register")
async def register(current_user: dict = Depends(verify_id_token)):
    return {"message": f"Registered user {current_user['email']}"}
