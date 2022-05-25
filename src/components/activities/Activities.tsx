import React from 'react'
import "./style.css";
import Activity from '../activity/Activity';

const activities = [
    {
        message: "Content has been added on the Branding Service Page",
        author: "Ugochi",
        time: "9:15",
        id: "1"
    },
    {
        message: "Content has been added on the Branding Service Page",
        author: "Ugochi",
        time: "9:15",
        id: "2"
    },
    {
        message: "Content has been added on the Branding Service Page",
        author: "Ugochi",
        time: "9:15",
        id: "3"
    },
    {
        message: "Content has been added on the Branding Service Page",
        author: "Ugochi",
        time: "9:15",
        id: "4"

    }
];


function Activities() {
  return (
      <>
    <div className="expandCon">
    {activities.map((item) => (
        <Activity
          key={item.id}
          message={item.message}
          author={item.author}
          createdAt={item.time}
        />
      ))}
    </div>
    </>
  )
}

export default Activities