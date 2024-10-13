// DSAListPage.js
import React from 'react';
import DSAList from './dsa-project/dsa-tracker/src/components/DSAList';

export default function DSAListPage() {
  return (
    <div style={{ backgroundColor: "honeydew" }} className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
      <h2 className="text-5xl text-emerald-500 font-bold text-center">
        DSA Progress Tracker
      </h2>
      <div style={{ backgroundColor: "honeydew" }} className="p-10 bg-emerald-200 flex flex-col justify-center items-center
        gap-5 lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
        <div className="w-80 rounded">
          <DSAList />
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <p>
            I Developed a DSA (Data Structures and Algorithms) Progress Tracker using React to monitor learning and practice. The app enables users to log completed topics, set goals, and visualize progress with interactive charts. It features a clean interface, responsive design, and efficient state management for seamless user experience across devices.
          </p>
        </div>
      </div>
    </div>
  );
}
