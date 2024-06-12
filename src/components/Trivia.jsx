// import { useEffect, useState } from "react";
// import useSound from "use-sound";
// import play from "../sounds/play.mp3";
// import correct from "../sounds/correct.mp3";
// import wrong from "../sounds/wrong.mp3";
 
// export default function Trivia({
//   data,
//   questionNumber,
//   setQuestionNumber,
//   setTimeOut,
// }) {
//   const [question, setQuestion] = useState(null);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [className, setClassName] = useState("answer");
//   const [letsPlay] = useSound(play);
//   const [correctAnswer] = useSound(correct);
//   const [wrongAnswer] = useSound(wrong);

//   useEffect(() => {
//     letsPlay();
//   }, [letsPlay]);

//   useEffect(() => {
//     setQuestion(data[questionNumber - 1]);
//   }, [data, questionNumber]);

//   const delay = (duration, callback) => {
//     setTimeout(() => {
//       callback();
//     }, duration);
//   };

//   const handleClick = (a) => {
//     setSelectedAnswer(a);
//     setClassName("answer active");
//     delay(3000, () => {
//       setClassName(a.correct ? "answer correct" : "answer wrong");
//     });
//     // setTimeout(() => {
//     //   setClassName(a.correct ? "answer correct" : "answer wrong");
//     // }, 3000);

//     // setTimeout(() => {
//       delay(5000, () => {
//       if (a.correct) {
//         correctAnswer();
//         delay(1000, () => {
//           setQuestionNumber((prev) => prev + 1);
//           setSelectedAnswer(null);
//         });
//         // setTimeout(() => {
//         //   setQuestionNumber((prev) => prev + 1);
//         //   setSelectedAnswer(null);
//         // }, 1000);
//       } else {
//         wrongAnswer();
//         delay(1000, () => {
//           setTimeOut(true);
//         });
//         // setTimeout(() => {
//         //   setTimeOut(true);
//         // }, 1000);
//       }
//     // }, 5000);
//       })
//   };
//   return (
//     <div className="trivia">
//       <div className="question">{question?.question}</div>
//       <div className="answers">
//         {question?.answers.map((a) => (
//           <div
//             className={selectedAnswer === a ? className : "answer"}
//             onClick={() => !selectedAnswer && handleClick(a)}
//           >
//             {a.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import useSound from "use-sound";
// import play from "../sounds/play.mp3";
// import correct from "../sounds/correct.mp3";
// import wrong from "../sounds/wrong.mp3";

// export default function Trivia({
//   data,
//   questionNumber,
//   setQuestionNumber,
//   setTimeOut,
// }) {
//   const [question, setQuestion] = useState(null);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [className, setClassName] = useState("answer");
//   const [letsPlay] = useSound(play);
//   const [correctAnswer] = useSound(correct);
//   const [wrongAnswer] = useSound(wrong);
//   const [usedFiftyFifty, setUsedFiftyFifty] = useState(false); // Track if 50-50 lifeline has been used

//   useEffect(() => {
//     letsPlay();
//   }, [letsPlay]);

//   useEffect(() => {
//     setQuestion(data[questionNumber - 1]);
//   }, [data, questionNumber]);

//   const delay = (duration, callback) => {
//     setTimeout(() => {
//       callback();
//     }, duration);
//   };

//   const applyFiftyFifty = () => {
//     const currentQuestion = data.find((q) => q.id === questionNumber);
//     const incorrectAnswers = currentQuestion.answers.filter((a) => !a.correct);
//     const randomIndexes = [];
//     while (randomIndexes.length < 2) {
//       const randomIndex = Math.floor(Math.random() * incorrectAnswers.length);
//       if (!randomIndexes.includes(randomIndex)) {
//         randomIndexes.push(randomIndex);
//       }
//     }
//     const updatedAnswers = currentQuestion.answers.map((a, index) => {
//       if (incorrectAnswers[randomIndexes[0]] === a || incorrectAnswers[randomIndexes[1]] === a) {
//         return { ...a, hidden: true };
//       }
//       return a;
//     });
//     setQuestion({ ...currentQuestion, answers: updatedAnswers });
//     setUsedFiftyFifty(true); // Mark 50-50 lifeline as used
//   };

//   const handleClick = (a) => {
//     setSelectedAnswer(a);
//     setClassName("answer active");
//     delay(3000, () => {
//       setClassName(a.correct ? "answer correct" : "answer wrong");
//     });

//     delay(5000, () => {
//       if (a.correct) {
//         correctAnswer();
//         delay(1000, () => {
//           setQuestionNumber((prev) => prev + 1);
//           setSelectedAnswer(null);
//         });
//       } else {
//         wrongAnswer();
//         delay(1000, () => {
//           setTimeOut(true);
//         });
//       }
//     });
//   };

//   return (
//     <div className="trivia">
//       <div className="question">{question?.question}</div>
//       <div className="answers">
//         {question?.answers.map((a, index) => (
//           <div
//             key={index}
//             className={selectedAnswer === a ? className : "answer"}
//             onClick={() => !selectedAnswer && handleClick(a)}
//             style={{ visibility: usedFiftyFifty && a.hidden ? "hidden" : "visible" }}
//           >
//             {a.text}
//           </div>
//         ))}
//       </div>
//       {!usedFiftyFifty && ( // Show lifeline button only if not used already
//         <button onClick={applyFiftyFifty}>
//           50-50
//         </button>
//       )}
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import useSound from "use-sound";
// import play from "../sounds/play.mp3";
// import correct from "../sounds/correct.mp3";
// import wrong from "../sounds/wrong.mp3";

// export default function Trivia({
//   data,
//   questionNumber,
//   setQuestionNumber,
//   setTimeOut,
// }) {
//   const [question, setQuestion] = useState(null);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [className, setClassName] = useState("answer");
//   const [letsPlay] = useSound(play);
//   const [correctAnswer] = useSound(correct);
//   const [wrongAnswer] = useSound(wrong);
//   const [usedFiftyFifty, setUsedFiftyFifty] = useState(false); // Track if 50-50 lifeline has been used
//   const [usedAudiencePoll, setUsedAudiencePoll] = useState(false); // Track if Audience Poll lifeline has been used

//   useEffect(() => {
//     letsPlay();
//   }, [letsPlay]);

//   useEffect(() => {
//     setQuestion(data[questionNumber - 1]);
//   }, [data, questionNumber]);

//   const delay = (duration, callback) => {
//     setTimeout(() => {
//       callback();
//     }, duration);
//   };

//   const applyFiftyFifty = () => {
//     const currentQuestion = data.find((q) => q.id === questionNumber);
//     const incorrectAnswers = currentQuestion.answers.filter((a) => !a.correct);
//     const randomIndexes = [];
//     while (randomIndexes.length < 2) {
//       const randomIndex = Math.floor(Math.random() * incorrectAnswers.length);
//       if (!randomIndexes.includes(randomIndex)) {
//         randomIndexes.push(randomIndex);
//       }
//     }
//     const updatedAnswers = currentQuestion.answers.map((a, index) => {
//       if (incorrectAnswers[randomIndexes[0]] === a || incorrectAnswers[randomIndexes[1]] === a) {
//         return { ...a, hidden: true };
//       }
//       return a;
//     });
//     setQuestion({ ...currentQuestion, answers: updatedAnswers });
//     setUsedFiftyFifty(true); // Mark 50-50 lifeline as used
//   };

//   const applyAudiencePoll = () => {
//     const currentQuestion = data.find((q) => q.id === questionNumber);
//     const totalVotes = Math.random() * 100; // Total audience votes

//     // Simulate distribution of votes among answer options
//     const updatedAnswers = currentQuestion.answers.map((a) => {
//       if (a.correct) {
//         // Give more votes to the correct answer
//         return { ...a, percentage: totalVotes * 0.7 };
//       } else {
//         // Distribute remaining votes among incorrect answers
//         const votes = Math.random() * (totalVotes * 0.3); // Simulate 30% of total votes for incorrect options
//         return { ...a, percentage: votes };
//       }
//     });

//     setQuestion({ ...currentQuestion, answers: updatedAnswers });
//     setUsedAudiencePoll(true); // Mark Audience Poll lifeline as used
//   };

//   const handleClick = (a) => {
//     setSelectedAnswer(a);
//     setClassName("answer active");
//     delay(3000, () => {
//       setClassName(a.correct ? "answer correct" : "answer wrong");
//     });

//     delay(5000, () => {
//       if (a.correct) {
//         correctAnswer();
//         delay(1000, () => {
//           setQuestionNumber((prev) => prev + 1);
//           setSelectedAnswer(null);
//         });
//       } else {
//         wrongAnswer();
//         delay(1000, () => {
//           setTimeOut(true);
//         });
//       }
//     });
//   };

//   return (
//     <div className="trivia">
//       <div className="question">{question?.question}</div>
//       <div className="answers">
//         {question?.answers.map((a, index) => (
//           <div
//             key={index}
//             className={selectedAnswer === a ? className : "answer"}
//             onClick={() => !selectedAnswer && handleClick(a)}
//             style={{ visibility: usedFiftyFifty && a.hidden ? "hidden" : "visible" }}
//           >
//             {a.text} {usedAudiencePoll && a.percentage !== undefined ? `(${Math.round(a.percentage)}%)` : ""}
//           </div>
//         ))}
//       </div>
//       {!usedFiftyFifty && (
//         <button onClick={applyFiftyFifty}>
//           50-50
//         </button>
//       )}
//       {!usedAudiencePoll && (
//         <button onClick={applyAudiencePoll}>
//           Audience Poll
//         </button>
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

export default function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);
  const [usedAudiencePoll, setUsedAudiencePoll] = useState(false);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const applyFiftyFifty = () => {
    const currentQuestion = data.find((q) => q.id === questionNumber);
    const incorrectAnswers = currentQuestion.answers.filter((a) => !a.correct);
    const randomIndexes = [];
    while (randomIndexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * incorrectAnswers.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const updatedAnswers = currentQuestion.answers.map((a, index) => {
      if (incorrectAnswers[randomIndexes[0]] === a || incorrectAnswers[randomIndexes[1]] === a) {
        return { ...a, hidden: true };
      }
      return a;
    });
    setQuestion({ ...currentQuestion, answers: updatedAnswers });
    setUsedFiftyFifty(true);
  };

  const applyAudiencePoll = () => {
    const currentQuestion = data.find((q) => q.id === questionNumber);
    const totalVotes = Math.random() * 100;

    const updatedAnswers = currentQuestion.answers.map((a) => {
      if (a.correct) {
        return { ...a, percentage: totalVotes * 0.7 };
      } else {
        const votes = Math.random() * (totalVotes * 0.3);
        return { ...a, percentage: votes };
      }
    });

    setQuestion({ ...currentQuestion, answers: updatedAnswers });
    setUsedAudiencePoll(true);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });

    delay(5000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setTimeOut(true);
        });
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a, index) => (
          <div
            key={index}
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
            style={{ visibility: usedFiftyFifty && a.hidden ? "hidden" : "visible" }}
          >
            {a.text} {usedAudiencePoll && a.percentage !== undefined ? `(${Math.round(a.percentage)}%)` : ""}
          </div>
        ))}
      </div>
      {!usedFiftyFifty && (
        <button className="lifeline-btn" onClick={applyFiftyFifty}>
          50-50
        </button>
      )}
      {!usedAudiencePoll && (
        <button className="lifeline-btn" onClick={applyAudiencePoll}>
          Audience Poll
        </button>
      )}
    </div>
  );
}
