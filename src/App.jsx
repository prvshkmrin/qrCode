import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import "./App.css";

export default function App() {
  const [data, setData] = useState("https://example.com");
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL(data, {
      errorCorrectionLevel: "H",
      margin: 2,
      width: 600, // bigger QR for fullscreen
    }).then(setSrc);
  }, [data]);

  return (
    <div className="fullscreen">
      <div className="qr-container">
        <h1 className="title">QR Code Generator</h1>
        <input
          className="input"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter URL or text"
        />
        <img className="qr" src={src} alt="qr" />
        <a className="btn" href={src} download="qr.png">
          Download PNG
        </a>
      </div>
    </div>
  );
}
