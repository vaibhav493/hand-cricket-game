import React, { useContext, useState } from 'react';
import { ImageContext }  from "../context/imageContext"
import bat from "../assets/cricket-bat.png"
import ball from '../assets/ball.png';
import computer from '../assets/laptop.png';
import user from '../assets/user.png';
 import "./game.css"

const Game = () => {
  const [batFirst, setBatFirst] = useContext<any>(ImageContext).batting;
  const [currentBatting, setBatting] = useState<string>(batFirst);
  const [currentRun, setRun] = useState<number|string>("");
  const [disableFactor, disableButton] = useState<boolean>(false);
  const [avatarAnime, setAnime] = useState<boolean>(false);
  const runs: number[] = [1, 2, 3, 4, 5, 6];
  const [url, setUrl] = useContext<any>(ImageContext).img;
  const [userOutCome, setUserOutcome] = useState<number>(0);
  const [computerOutCome, setComputerOutcome] = useState<number>(0);
  const [inning, setInning] = useState<string>('FIRST');
  const [userScore, setUserScore] = useState<number>(0);
  const [compScore, setCompScore] = useState<number>(0);
  const [setScreen] = useContext<any>(ImageContext).screen.slice(-1);
  const score = (run: number)=> {
    disableButton(true);
    setAnime(true);
    setTimeout(() => {
      disableButton(false);
      setAnime(false);
      processScore(run)
    }, 3000);
  }

  const processScore = (run: number): void => {
    const compOutcome :number|string = Math.floor(Math.random() * 6) + 1;
    setUserOutcome(run);
    setComputerOutcome(compOutcome);
    if (currentBatting === 'USER') {
      if (inning === 'FIRST') {
        if (compOutcome !== run) {
          setRun(run.toString());
          setUserScore(userScore + run);
        } else {
          setRun('WICKET');
          setBatting('COMPUTER');
          setInning('SECOND');
        }
      } else {
        if (compOutcome !== run) {
          if (userScore + run >= compScore + 1) {
            setRun('You win the game');
            setInning('GAME OVER');
            disableButton(true);
          } else {
            setRun(run.toString());
          }
          setUserScore(userScore + run);
        } else {
          if (userScore + run === compScore) {
            setRun('Match tied');
            setInning('GAME OVER');
            disableButton(true);
          } else {
            setRun('You lost the game!');
            setInning('GAME OVER');
            disableButton(true);
          }
        }
      }
    } else {
       if (inning === 'FIRST') {
        if (compOutcome !== run) {
          setRun(compOutcome);
          setCompScore(compScore + compOutcome);
        } else {
          setRun('WICKET');
          setBatting('USER');
          setInning('SECOND');
        }
      } else {
        if (compOutcome !== run) {
          if (compScore + compOutcome >= userScore + 1) {
            setRun('You lost the game!');
            setInning('GAME OVER');
            disableButton(true);
          } else {
            setRun(compOutcome);
          }
          setCompScore(compScore + compOutcome);
        } else {
          if (compScore + compOutcome === userScore) {
            setRun('Match tied');
            setInning('GAME OVER');
            disableButton(true);
          } else {
            setRun('You win!');
            setInning('GAME OVER');
            disableButton(true);
          }
        }
      }
    }
  }
console.log(currentRun,"currentRun")
  return (
    <main className='border-0 w-3/4 p-10 rounded-lg mx-auto backdrop-grayscale-0 bg-white/70'>
      {/* <h3>Game</h3> */}
      <div className="grid grid-cols-3 text-center gap-5">
        {/* 1 */}
        <div className='border-4 p-5 rounded-lg w1/4 '>
          <h4 className='grid grid-cols-2 justify-center text-3xl text-bold mx-auto item-center text-center m-4' >
            User
          {currentBatting === "USER" ? (
           <img src='https://media4.giphy.com/media/aCf3QB59dQJbZ3C2GC/200w.webp?cid=ecf05e47ekx0dgd51mxcjdbwjq5u2bd902khrab7dbzms8dn&rid=200w.webp&ct=s' className="indicator-image" alt="Computer batting" width={'45%'} />
            ) : (
              <img src='https://media4.giphy.com/media/dupMOL8nNK1ghDT6qQ/200w.webp?cid=ecf05e47a4w6rgh2qdenjv9drwa2hgkrq2m27q859yeytzk9&rid=200w.webp&ct=s' className="item-center mx-auto my-auto" alt="Player bowling" width={'25%'} />
              )}
              </h4>
         <h4 className='text-xl text-blue-600'>
          Runs: {userScore}
         </h4>
          {url ? (
            <img
              className={`${avatarAnime ?"animate" : ""} rounded-full h-40 w-30 mx-auto m-8`}
              src={url}
              // width={'50%'}
              alt="Player Avatar"
            />
          ) : (
            <img
              className={`avatar-img game ${avatarAnime ? "animate" : ""} border-2 rounded-full h-45 w-35 mx-auto m-8`}
              src={user}
              width={'50%'}
              alt="Player Avatar"
            />
          )}
        </div>

{/* 2 */}
        <div className="p-6">
          <p className='text-2xl h-15'>

          {` ${inning} INNINGS`}
          </p>
          <br />
          {isNaN(+currentRun) ? (
            <div>{currentRun}</div>
          ) : (
            <div className='text-xl border-2 rounded-lg p-4 w-25'>{`This ball: ${currentRun}`}</div>
          )}
          <br />
          <div className='flex justify-center gap-2'>
            <p className='text-blue-600 font-bold text-xl'>User </p>
            <p className='font-bold text-xl'> : </p>
            <p className='text-red-400 font-bold text-xl'> Computer</p>
          </div>
          <div className='flex justify-center gap-5'>
          <p className='text-blue-600 font-bold text-xl'>
            {userOutCome.toString() }
          </p>
          <p className='font-bold text-xl'>:</p>
          <p className='text-red-400 font-bold text-xl'>{ computerOutCome.toString()}</p>
          </div>
          <br />
          {inning === "GAME OVER" && (
            <div>
              <p>Good game! See you soon!</p>
              <button
                onClick={() => {
                  setUrl("");
                  setBatFirst("");
                  setScreen("HOME");
                }}
              >
                Home
              </button>
              <button
                onClick={() => {
                  setBatFirst("");
                  setScreen("TOSS");
                }}
              >
                Restart game
              </button>
            </div>
          )}
        </div>

{/* 3 */}
        <div className='border-4 p-5 rounded-lg w1/4 '>
          <h4 className='grid grid-cols-2 justify-evenly text-3xl gap-12 text-bold m-4'>
            Computer
          {currentBatting === "COMPUTER" ? (
            <img src='https://media4.giphy.com/media/aCf3QB59dQJbZ3C2GC/200w.webp?cid=ecf05e47ekx0dgd51mxcjdbwjq5u2bd902khrab7dbzms8dn&rid=200w.webp&ct=s' className="indicator-image" alt="Computer batting" width={'45%'} />
          ) : (
            <img src='https://media4.giphy.com/media/dupMOL8nNK1ghDT6qQ/200w.webp?cid=ecf05e47a4w6rgh2qdenjv9drwa2hgkrq2m27q859yeytzk9&rid=200w.webp&ct=s' className="item-center mx-auto my-auto" alt="Player bowling" width={'25%'} />
            )}
          </h4>
          <h4 className='text-xl text-red-400 mx-auto'>
          Runs: {compScore}
          </h4>
          <img
            className={`${avatarAnime ? "animate" : ""} border-2 rounded-full h-45 w-35 mx-auto m-8` }
            // style={{"animation":`${avatarAnime?"bounce 2s 4":""}`}}
            src={computer}
            width={'50%'}
            alt="Player Avatar"
          />
        </div>

      </div>

      <div className="buttons-container">
        {runs.map((r) => (
          <button
            disabled={disableFactor}
            key={r}
            className="run-button border-red-500 drop-shadow-4xl bg-cyan-400 w-18 h-8 rounded-lg"
            onClick={() => score(r)}
          >
            {r}
          </button>
        ))}
      </div>
    </main>
  );
}

export default Game;
