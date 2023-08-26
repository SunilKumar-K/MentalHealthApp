from fastapi import FastAPI
from .api import chatbot, therapy_modules, interactive_exercises, mood_tracker, progress_tracking

app = FastAPI()

app.include_router(chatbot.router, prefix="/chatbot", tags=["Chatbot"])
app.include_router(therapy_modules.router, prefix="/therapy-modules", tags=["Therapy Modules"])
app.include_router(interactive_exercises.router, prefix="/interactive-exercises", tags=["Interactive Exercises"])
app.include_router(mood_tracker.router, prefix="/mood-tracker", tags=["Mood Tracker"])
app.include_router(progress_tracking.router, prefix="/progress-tracking", tags=["Progress Tracking"])
