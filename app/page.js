"use client";

import { useEffect, useRef, useState } from "react";

export default function HomePage() {

  const videoRef = useRef(null);

  const [mic,setMic] = useState(true);

  const [cam,setCam] = useState(true);

  useEffect(() => {

    kameraBaslat();

  }, []);

  const kameraBaslat = async () => {

    try{

      const stream =
      await navigator.mediaDevices.getUserMedia({

        video:true,
        audio:true,

      });

      if(videoRef.current){

        videoRef.current.srcObject = stream;

      }

    }catch(err){

      console.log(err);

    }

  };

  const eslesmeAra = () => {

    alert("Eşleşme aranıyor 🔥");

  };

  const sonraki = () => {

    alert("Sonraki kullanıcı 🔥");

  };

  const mikrofonKapat = () => {

    setMic(!mic);

  };

  const kameraKapat = () => {

    setCam(!cam);

  };

  return(

    <main className="main-page">

      <div className="top-bar">

        <div className="logo-wrap">

          <div className="logo-top">

            <div className="logo-icon">
              💎
            </div>

            <div className="logo-aura">
              AURA
            </div>

          </div>

          <div className="logo-live">
            LIVE
          </div>

        </div>

        <div className="online-box">
          🟢 1284 ONLINE
        </div>

      </div>

      <div className="video-card">

        <button className="friend-add">
          👤+
        </button>

        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="my-video"
          style={{
            opacity:cam ? 1 : 0.2
          }}
        />

        <div className="waiting">

          <h1>
            EŞLEŞME
            <br/>
            BEKLENİYOR...
          </h1>

          <p>
            Sana uygun kullanıcı aranıyor.
          </p>

        </div>

        <button
          className="next-btn"
          onClick={sonraki}
        >
          🔥 SONRAKİ
        </button>

        <button
          className="center-search"
          onClick={eslesmeAra}
        >
          ✨ EŞLEŞME ARA
        </button>

        <div className="left-controls">

          <button
            className="control-btn"
            onClick={mikrofonKapat}
          >
            {mic ? "🎤" : "🔇"}
          </button>

          <button
            className="control-btn"
            onClick={kameraKapat}
          >
            {cam ? "📷" : "🚫"}
          </button>

        </div>

      </div>

      <div className="bottom-nav">

        <div className="nav-item nav-active">
          🏠
          <br/>
          Ana Sayfa
        </div>

        <div
          className="nav-item"
          onClick={() =>
          window.location.href="/"}
        >
          👑
          <br/>
          Premium
        </div>

        <div className="nav-item">
          💬
          <br/>
          Mesajlar
        </div>

        <div className="nav-item">
          👤
          <br/>
          Profil
        </div>

      </div>

    </main>

  );

}