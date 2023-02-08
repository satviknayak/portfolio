import React from "react";

interface Props {
    word?: string;
    textSize?: string;
    colors?: {
      textGlowColor?: string;
      textColor?: string;
      textShadowColor?: string; 
      textGlowShadowColor?: string;   
    };
  }
  
  interface LetterProps {
    letter?: string;
    colors?: {
      textGlowColor?: string;
      textColor?: string;
      textShadowColor?: string; 
      textGlowShadowColor?: string;   
    };
    readyToShow: boolean;
  }
  const alphabet = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
  
  export const HackText: React.FC<Props> = ({
    word = 'Loading',
    colors = {},
    textSize = ''
  }) => {
    const [readyIndex, setReadyIndex] = React.useState(0);
    const [letterRenderingKey, setLetterRenderingKey] = React.useState(1);
    const readyIndexRef =  React.useRef(readyIndex);
    readyIndexRef.current = readyIndex;
  
    const textEffect = () => {
      setTimeout(wrtie, 75);
      setTimeout(inc, 1000);
    };
  
    function inc() { 
      if (readyIndexRef.current < word.length) {
        setReadyIndex(prevReadyIndex => prevReadyIndex + 1);
        setTimeout(inc, 1000);
      }
    };
  
    function wrtie() {
      if (readyIndexRef.current < word.length) {
        setLetterRenderingKey(Math.floor(Math.random() * 1000));
        setTimeout(wrtie, 75);
      }
    }

    return (
      <div className="react-hack-text" style={{ 
          ...(textSize && { fontSize: textSize }),
          ...(colors.textColor && { color: colors.textColor }),
          ...(colors.textShadowColor && { textShadow: `0 0 15px ${colors.textShadowColor}` })
        }}
        onMouseOver={textEffect}
        >
        {word && [...word].map((l,index) => { return <Letter
            colors={colors}
            key={`${l}-${index}-${readyIndex >= index || letterRenderingKey}`}
            letter={l} readyToShow={readyIndex >= index}
          />; })}
      </div>
    )
  }
  
  const Letter: React.FC<LetterProps> = ({
    letter = '', readyToShow = false, colors = {}
  }) => {
    return (
      <React.Fragment>
        {readyToShow &&<span className="glow" style={{ 
          ...(colors.textGlowColor && { color: colors.textGlowColor }),
          ...(colors.textGlowShadowColor && { textShadow: `0 0 10px ${colors.textGlowShadowColor}` })
  
        }}>{letter}</span>}
        {!readyToShow && <span>{alphabet[Math.floor(Math.random() * 36)]}</span>}
      </React.Fragment>
    )
  }