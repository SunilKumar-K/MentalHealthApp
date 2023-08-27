from fastapi import FastAPI
from .api import auth
from .api import chatbot
from .api import therapy_modules
from .api import interactive_exercises
from .api import mood_tracker
from .api import progress_tracking

app = FastAPI()

app.include_router(chatbot.router, prefix="/chatbot", tags=["Chatbot"])
app.include_router(therapy_modules.router, prefix="/therapy-modules", tags=["Therapy Modules"])
app.include_router(interactive_exercises.router, prefix="/interactive-exercises", tags=["Interactive Exercises"])
app.include_router(mood_tracker.router, prefix="/mood-tracker", tags=["Mood Tracker"])
app.include_router(progress_tracking.router, prefix="/progress-tracking", tags=["Progress Tracking"])
app.include_router(auth.router)

