    import type { Plate } from "../types/plates";
    import { useState } from "react";

    interface Props {
    plates: Plate[];
    }

    export function Barbell({ plates }: Props) {
      const [hasClamp, setHasClamp] = useState(true);
      const leftSide = [...plates].reverse();
      const rightSide = [...plates];
      const bar = (
        <div
        style={{
        width: "300px",
        height: "20px",
        background: "#222",
        margin: "0 10px",
        borderRadius: "8px",
        }}/>    
    );
    const clamp = (
  <div
    style={{
      width: "16px",
      height: "80px",
      background: "#555",
      borderRadius: "4px",
      margin: "0 4px",
      border: "2px solid #222",
    }}
  />
);

    return (
        <div
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
        }}
        >

 <button onClick={() => setHasClamp(prev => !prev)}
            style={{
              position: "absolute",
              top: "20px",
            }}
          >
  Toggle Clamp
</button>

      <div style={{ display: "flex", alignItems: "center",}}>
             {hasClamp && clamp}
    {leftSide.map((plate, index) => (
        <div
        key={index}
        style={{
            width: `${plate.width}px`,
            height: `${plate.diameter}px`,
            background: plate.color,
            border: "2px solid #111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

        }}
        >
    </div>
    ))}
    </div>

    {bar}

        <div style={{ display: "flex", alignItems: "center"}}>
    {rightSide.map ((plate, index)  => (  
        <div
        key={index}
        style={{
              width: `${plate.width}px`,
            height: `${plate.diameter}px`,
            background: plate.color,
            border: "2px solid #111",
      
        }} 
        />
    ))}
     {hasClamp && clamp}
    </div>
    
        </div>
        
    );
    }

