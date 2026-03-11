import requests
import json
import re


def generate_questions(course, difficulty):

    prompt = f"""
Generate 3 multiple choice quiz questions about {course}.
Difficulty: {difficulty}

Return ONLY JSON in this format:

[
{{
"question":"",
"options":["","","",""],
"answer":""
}}
]

Do not add explanations.
"""

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llama3",
            "prompt": prompt,
            "stream": False
        }
    )

    data = response.json()

    text = data["response"]

    # Extract JSON safely
    match = re.search(r"\[.*\]", text, re.S)

    if match:
        questions = json.loads(match.group())
    else:
        questions = []

    return questions