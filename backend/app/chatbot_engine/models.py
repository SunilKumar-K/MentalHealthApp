# chatbot_engine/models.py
class Message:
    def __init__(self, text, sender):
        self.text = text
        self.sender = sender

class Response:
    def __init__(self, text):
        self.text = text
