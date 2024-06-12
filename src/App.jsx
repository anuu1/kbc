

import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("Rs 0");

  const data = [
    {
      id: 1,
      question: "What is the extension of a C++ source file?",
      answers: [
        {
          text: ".cp",
          correct: false,
        },
        {
          text: ".cpp",
          correct: true,
        },
        {
          text: ".cxx",
          correct: false,
        },
        {
          text: ".c",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which of the following is a reserved keyword in Java?",
      answers: [
        {
          text: "implement",
          correct: false,
        },
        {
          text: "function",
          correct: false,
        },
        {
          text: "method",
          correct: false,
        },
        {
          text: "native",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who was the first prime minister of India?",
      answers: [
        {
          text: "NarendraModi",
          correct: false,
        },
        {
          text: "IndiraGandhi",
          correct: false,
        },
        {
          text: "Jawaharlal Nehru",
          correct: true,
        },
        {
          text: "Dr RajendraPrashad",
          correct: false,
        },
      ],
    },
    {
     id: 5,
      question: "What is the extension of a Java source file",
      answers: [
        {
          text: ".class",
          correct: false,
        },
        {
          text: ".js",
          correct: false,
        },
        {
          text: ".java",
          correct: true,
        },
        {
          text: ".jav",
          correct: false,
        },
      ],
    },
    {
      id: 6,
       question: "Who is known as the King of Bollywood?",
       answers: [
         {
           text: "Akshay Kumar",
           correct: false,
         },
         {
           text: "Amir Khan",
           correct: false,
         },
         {
           text: "Shah Rukh Khan",
           correct: true,
         },
         {
           text: "Salman Khan",
           correct: false,
         },
       ],
     },
     {
      id: 7,
       question: "Who directed the Bollywood movie 3 Idiots?",


       answers: [
         {
           text: "Anurag Kashyap",
           correct: false,
         },
         {
           text: "Karan Johar",
           correct: false,
         },
         {
           text: "Rajkumar Hirani",
           correct: true,
         },
         {
           text: "Sanjay Leela Bhansali",
           correct: false,
         },
       ],
     },
     
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "Rs 1000" },
        { id: 2, amount: "Rs 2000" },
        { id: 3, amount: "Rs 3000" },
        { id: 4, amount: "Rs 4000" },
        { id: 5, amount: "Rs 5000" },
        { id: 6, amount: "Rs 6000" },
        { id: 7, amount: "Rs 7000" },
        { id: 8, amount: "Rs 8000" },
        { id: 9, amount: "Rs 9000" },
        { id: 10, amount: "Rs 10000" },
        { id: 11, amount: "Rs 11000" },
        { id: 12, amount: "Rs 12000" },
        { id: 13, amount: "Rs 13000" },
        { id: 14, amount: "Rs 14000" },
        { id: 15, amount: "Rs 15000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;


// import "./App.css";
// import { useEffect, useMemo, useState } from "react";
// import Start from "./components/Start";
// import Timer from "./components/Timer";
// import Trivia from "./components/Trivia";

// function App() {
//   const [username, setUsername] = useState(null);
//   const [timeOut, setTimeOut] = useState(false);
//   const [questionNumber, setQuestionNumber] = useState(1);
//   const [earned, setEarned] = useState("₹ 0");
//   const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);
//   const [usedAudiencePoll, setUsedAudiencePoll] = useState(false);
//   const [usedPhoneAFriend, setUsedPhoneAFriend] = useState(false);
//   const [pollResults, setPollResults] = useState([]);
//   const [friendAnswer, setFriendAnswer] = useState(null);

//   const data = [
//     {
//       id: 1,
//       question: "What is the extension of a C++ source file?",
//       answers: [
//         { text: ".cp", correct: false },
//         { text: ".cpp", correct: true },
//         { text: ".cxx", correct: false },
//         { text: ".c", correct: false },
//       ],
//     },
//     {
//       id: 2,
//       question: "When did the website `Facebook` launch?",
//       answers: [
//         { text: "2004", correct: true },
//         { text: "2005", correct: false },
//         { text: "2006", correct: false },
//         { text: "2007", correct: false },
//       ],
//     },
//     {
//       id: 3,
//       question: "Which of the following is a reserved keyword in Java?",
//       answers: [
//         { text: "implement", correct: false },
//         { text: "function", correct: false },
//         { text: "method", correct: false },
//         { text: "native", correct: true },
//       ],
//     },
//     {
//       id: 4,
//       question: "Who was the first prime minister of India?",
//       answers: [
//         { text: "NarendraModi", correct: false },
//         { text: "IndiraGandhi", correct: false },
//         { text: "Jawaharlal Nehru", correct: true },
//         { text: "Dr RajendraPrashad", correct: false },
//       ],
//     },
//     {
//       id: 5,
//       question: "What is the extension of a Java source file",
//       answers: [
//         { text: ".class", correct: false },
//         { text: ".js", correct: false },
//         { text: ".java", correct: true },
//         { text: ".jav", correct: false },
//       ],
//     },
//     {
//       id: 6,
//        question: "Who is known as the King of Bollywood?",
//        answers: [
//          { text: "Akshay Kumar", correct: false },
//          { text: "Amir Khan", correct: false },
//          { text: "Shah Rukh Khan", correct: true },
//          { text: "Salman Khan", correct: false },
//        ],
//      },
//      {
//       id: 7,
//        question: "Who directed the Bollywood movie 3 Idiots?",
//        answers: [
//          { text: "Anurag Kashyap", correct: false },
//          { text: "Karan Johar", correct: false },
//          { text: "Rajkumar Hirani", correct: true },
//          { text: "Sanjay Leela Bhansali", correct: false },
//        ],
//      },
//   ];

//   const moneyPyramid = useMemo(
//     () =>
//       [
//         { id: 1, amount: "₹ 100" },
//         { id: 2, amount: "₹ 200" },
//         { id: 3, amount: "₹ 300" },
//         { id: 4, amount: "₹ 500" },
//         { id: 5, amount: "₹ 1,000" },
//         { id: 6, amount: "₹ 2,000" },
//         { id: 7, amount: "₹ 4,000" },
//         { id: 8, amount: "₹ 8,000" },
//         { id: 9, amount: "₹ 16,000" },
//         { id: 10, amount: "₹ 32,000" },
//         { id: 11, amount: "₹ 64,000" },
//         { id: 12, amount: "₹ 125,000" },
//         { id: 13, amount: "₹ 250,000" },
//         { id: 14, amount: "₹ 500,000" },
//         { id: 15, amount: "₹ 1,000,000" },
//       ].reverse(),
//     []
//   );

//   useEffect(() => {
//     questionNumber > 1 &&
//       setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
//   }, [questionNumber, moneyPyramid]);

//   const handleFiftyFifty = () => {
//     setUsedFiftyFifty(true);
//   };

//   const handleAudiencePoll = () => {
//     setUsedAudiencePoll(true);
//     const currentQuestion = data.find((q) => q.id === questionNumber);
//     const pollResults = currentQuestion.answers.map(answer => ({
//       text: answer.text,
//       percentage: answer.correct ? Math.floor(Math.random() * 40) + 60 : Math.floor(Math.random() * 60)
//     }));
//     setPollResults(pollResults);
//   };

//   const handlePhoneAFriend = () => {
//     setUsedPhoneAFriend(true);
//     const currentQuestion = data.find((q) => q.id === questionNumber);
//     const correctAnswer = currentQuestion.answers.find(answer => answer.correct);
//     setFriendAnswer(correctAnswer.text);
//   };

//   return (
//     <div className="app">
//       {!username ? (
//         <Start setUsername={setUsername} />
//       ) : (
//         <>
//           <div className="main">
//             {timeOut ? (
//               <h1 className="endText">You earned: {earned}</h1>
//             ) : (
//               <>
//                 <div className="top">
//                   <div className="timer">
//                     <Timer setTimeOut={setTimeOut} questionNumber={questionNumber} />
//                   </div>
//                 </div>
//                 <div className="bottom">
//                   <Trivia
//                     data={data}
//                     questionNumber={questionNumber}
//                     setQuestionNumber={setQuestionNumber}
//                     setTimeOut={setTimeOut}
//                     usedFiftyFifty={usedFiftyFifty}
//                   />
//                   <div className="lifelines">
//                     <button onClick={handleFiftyFifty} disabled={usedFiftyFifty}>50:50</button>
//                     <button onClick={handleAudiencePoll} disabled={usedAudiencePoll}>Audience Poll</button>
//                     <button onClick={handlePhoneAFriend} disabled={usedPhoneAFriend}>Phone a Friend</button>
//                   </div>
//                   {usedAudiencePoll && <div className="pollResults">
//                     {pollResults.map(result => (
//                       <div key={result.text}>
//                         {result.text}: {result.percentage}%
//                       </div>
//                     ))}
//                   </div>}
//                   {usedPhoneAFriend && <div className="friendAnswer">
//                     Your friend suggests: {friendAnswer}
//                   </div>}
//                 </div>
//               </>
//             )}
//           </div>
//           <div className="pyramid">
//             <ul className="moneyList">
//               {moneyPyramid.map((m) => (
//                 <li
//                   key={m.id}
//                   className={
//                     questionNumber === m.id
//                       ? "moneyListItem active"
//                       : "moneyListItem"
//                   }
//                 >
//                   <span className="moneyListItemNumber">{m.id}</span>
//                   <span className="moneyListItemAmount">{m.amount}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
