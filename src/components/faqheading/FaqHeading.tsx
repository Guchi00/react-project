import React from "react";
import "./style.css";

const FaqHeading = () => {
  return (
    <>
      <div className="faqHeadingsCon">
        <span className="firstItem">Frenquently Asked Questions</span>
        <span className="secondItem">
          Frenquently asked questions and supporting answers regarding your
          services are displayed here
        </span>
        <span className="paralleLine"></span>
      </div>
      <div className="questionsCon">
        <div className="question">
          <span className="questions">Question:  Lorem ipsum dolor sit amet consectetur   adipisicing elit. Officiis
            sapiente voluptatibus illum illo veritatis nesciunt eos quaerat ad
            nobis sit architecto, magnam rem incidunt iure. Ullam in optio ipsam
            deleniti?</span>

            <span className="questions">Answers:  Lorem ipsum dolor sit amet consectetur   adipisicing elit. Officiis
            sapiente voluptatibus illum illo veritatis nesciunt eos quaerat ad
            nobis sit architecto, magnam rem incidunt iure. Ullam in optio ipsam
            deleniti?</span>
          <div className="deleEditCon">
            <span>Delete</span>
            <span>Edit</span>
          </div>
        </div>
        <div className="question">
          <span className="questions">Question:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            corrupti aperiam perspiciatis nam! Sit quae deleniti nobis,
            molestiae optio quidem. Neque iste numquam nam laudantium quo alias
            suscipit aliquid doloremque?</span>

            <span className="questions">Answers:  Lorem ipsum dolor sit amet consectetur   adipisicing elit. Officiis
            sapiente voluptatibus illum illo veritatis nesciunt eos quaerat ad
            nobis sit architecto, magnam rem incidunt iure. Ullam in optio ipsam
            deleniti?</span>

          <div className="deleEditCon">
            <span className="deleEdit">Delete</span>
            <span className="deleEdit">Edit</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqHeading;
