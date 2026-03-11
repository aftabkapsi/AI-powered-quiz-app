from sqlalchemy import Column, Integer, String
from database import Base

class Progress(Base):
    __tablename__ = "progress"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer)
    course_id = Column(Integer)
    avg_score = Column(Integer)
    difficulty_level = Column(String)