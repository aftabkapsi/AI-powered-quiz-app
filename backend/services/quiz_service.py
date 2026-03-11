def calculate_score(answers, correct_answers):

    score = 0

    for i, ans in enumerate(answers):

        if ans == correct_answers[i]:
            score += 1

    return score