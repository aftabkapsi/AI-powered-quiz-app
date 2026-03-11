from fastapi import APIRouter
from models.quiz_model import QuizRequest, SubmitRequest
from utils.ai_generator import generate_questions
from services.quiz_service import calculate_score
from database import progress_db

router = APIRouter()


@router.post("/generate-quiz")
def generate_quiz(req: QuizRequest):

    questions = generate_questions(req.course, req.difficulty)

    return {
        "quiz": questions
    }


@router.post("/submit-quiz")
def submit_quiz(req: SubmitRequest):

    score = calculate_score(req.answers, req.correct_answers)

    result = {
        "course": req.course,
        "score": score,
        "total": len(req.correct_answers)
    }

    progress_db.append(result)

    return result


@router.get("/progress")
def get_progress():

    return progress_db