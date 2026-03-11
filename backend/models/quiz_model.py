from pydantic import BaseModel
from typing import List


class QuizRequest(BaseModel):
    course: str
    difficulty: str


class SubmitRequest(BaseModel):
    course: str
    answers: List[str]
    correct_answers: List[str]