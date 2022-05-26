import React, {useState, useEffect} from 'react'
import "./style.css";
import axios from "axios"
// import Icon from "../../assets/Vector.png";
import SingleFaq, { FaqsType } from '../singlefaq/SingleFaq';

// const faq = [
//     {
//         questions: "can I get a good technology for my app",
//         answers: "Yes, you can and our developers are also professionals incase you need...",
//         isAnswered: false,
//         id: "1"
//     },
//     {
//         questions: "can I get a good technology for my app",
//         answers: "Yes, you can and our developers are also professionals incase you need...",
//         isAnswered: false,
//         id: "2"
//     }
// ]

const FaqHeading = () => {
    const BASE_URL = "http://localhost:9000/faqs";
    const [items, setItems] = useState<FaqsType[] | null>(null);

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtlbm9zYWdpZTg4QGdtYWlsLmNvbSIsImlhdCI6MTY1MzU0OTczNH0.CbMCTnyjAYI5WekcdVeiCTgV-dU5DMOAwn0ei_MHgmY";
        const options = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get(BASE_URL, options).then((res) => {
          console.log(res);
          setItems(res.data.slice(0,2));
        });
      }, []);

    if (items === null) return <div>loading...</div>;

  return (
    <>
      <div className="questionsCon">
      {items.map((item) => (    
        <SingleFaq
          key={item._id}
          data={item}
        />
      ))}
      </div>
    </>
  );
};
export default FaqHeading;
