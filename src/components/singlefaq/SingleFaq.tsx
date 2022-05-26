import React from 'react'
import "./style.css"

export interface FaqsType {
    _id: string
    questions: string,
    answers: string,
    isAnswered: boolean,
}

function SingleFaq({data}: {data:FaqsType}) {
    const {questions, answers} = data;
  return (
    <div className="question">
        <span className="questions">
            {questions}
        </span>
        <span>{answers}</span>
        
    </div>
  )
}

export default SingleFaq