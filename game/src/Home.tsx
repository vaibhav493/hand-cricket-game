import React, { useState, useContext, ChangeEvent } from "react";
import { ImageContext } from "./context/imageContext";
// import "semantic-ui-css/semantic.min.css";

type ScreenType = "TOSS" | "BATTING" | "BOWLING" | "RESULTS";

const Home= () => {
  const [errorUpload, setError] = useState<boolean>(false);
  const img = useContext(ImageContext);
  const url = img?.img[0];
  const setUrl = img?.img[1];
  const screen = useContext(ImageContext);
  console.log(setUrl, "<===setUrl");

  const setScreen = screen?.screen[1];

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (e.target.files && e.target.files[0].type.includes("image")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUrl?.(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setError(true);
      setUrl?.("");
    }
  };

  // function To start the game

  const startGame = (): void => {
    setScreen?.("TOSS" as ScreenType);
  };
  // bg-green-200
  return (
    <main className="text-red-600 w-85 mx-auto my-0 font-bold border-0 w-4/5 rounded-lg mx-auto backdrop-grayscale-0 bg-white/70 text-left px-5">
      {/* <h2 className="text-center">Play along!</h2> */}
      <img className='mx-auto my-0 p-0' src="https://media2.giphy.com/media/I8C8oG3cDIfRYupbX8/200w.webp?cid=ecf05e477as8ax1ploswirhg6jv17hagpjp5gb6tl5yh3gj1&rid=200w.webp&ct=s" alt="" />
      <h3 className="text-2xl p-0">Rules:</h3>
      <img width={'7%'} src="https://media3.giphy.com/media/hAuh9jnSnwYkzf4IW3/200w.webp?cid=ecf05e47qmus687l9riq9b09quv1n5pwb3v0ldmk6aks42bj&rid=200w.webp&ct=s" alt="" />
      {/* <img className='' width={'20%'} src="https://media4.giphy.com/media/qYN4H7WoLHnQulqQbM/200w.webp?cid=ecf05e47m19gkfae1wsfcxeu4prcs5na2crlp96md07gsykm&rid=200w.webp&ct=s" alt="" /> */}
      <ul className="list-disc list-inside ml-30">
        <li>Select Heads or Tails for the Toss.</li>
        <li>Select whether You want to Bat or Bowl first.</li>
        <li>
          For every Ball select the number You want to put. The number put by
          player who is Batting gets added to score. The Bowler has to guess and
          put the same number for the Batsman to get out.
        </li>
        <li>
          The player Batting first must defend his score while the player
          Batting second must hit atleast one run more than the other to win,
          you know like Cricket.
        </li>
      </ul>
      <br />
      <p className="text-violet-600 font-bold">
        <b>Note:</b> The computer player does not know what you have selected,
        it just puts a random number.
      </p>
      <p className="avatar-upload mt-8">
        <label className="block">
          Upload Your avatar 
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="ml-5"
          />
        </label>
        {errorUpload && (
          <span className="error text-red-500">Invalid file</span>
        )}
      </p>
      {url && (
        <img
          className="avatar-img h-20 w-20 border-0 border-purple-600 rounded-full"
          src={url}
          alt="Avatar"
        />
      )}
      <br />
      <img
        onClick={startGame}
        width={'10%'}
        src={url ? "https://media4.giphy.com/media/JE2dFfAzL1Cl4Oosx5/200w.webp?cid=ecf05e471cmp198h7ss1phrrbzifmepf6udt2r7qeqakdn2h&rid=200w.webp&ct=s":"https://media2.giphy.com/media/UBAFTWMcshoiQtSPnY/200w.webp?cid=ecf05e47vcesqmg34p6e23dux4d9cd446y8vlpu2ll53vnl8&rid=200w.webp&ct=s" }
      />
    </main>
  );
};

export default Home;
