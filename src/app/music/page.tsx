"use client";
import { useEffect, useState } from "react";
export default function Music() {
  const [state, setState] = useState<number>(0);
  useEffect(() => {
    console.log("holy");
  }, []);
  return (
    <div>
      <div>number :{state}</div>
      <div
        onClick={() => {
          setState((state) => ++state);
        }}
      >
        btn
      </div>
      <div>Hoang</div>
      <iframe
        src="https://open.spotify.com/embed/track/31VNCmwspR7nVJ6kruUuJt"
        width="300"
        height="80"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}
