"use client";

import { useEffect, useRef } from "react";

export default function HomePage() {

  const videoRef = useRef(null);

  useEffect(() => {

    kameraBaslat();

  }, []);

  const kameraBaslat = async () => {

    try {

      const stream =
        await navigator.mediaDevices.getUserMedia({

          video:true,
          audio:true,

        });

      if(videoRef.current){

        videoRef.current.srcObject = stream;

      }

    } catch(err){

      console.log(err);

    }

  };

  const eslesmeAra = () => {

    alert("Eşleşme aranıyor 🔥");

  };

  const sonraki = () => {

    alert("Sonraki kullanıcı aranıyor 🔥");

  };

  return (

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

        <div className="top-buttons">

          <button className="ready-btn">
            Hazır
          </button>

          <button className="friend-btn">
            ❤️ Arkadaş Ekle
          </button>

        </div>

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

        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="my-video"
        />

        <div className="bottom-buttons">

          <button
            className="search-btn"
            onClick={eslesmeAra}
          >
            ✨ EŞLEŞME ARA
          </button>

          <button
            className="next-btn"
            onClick={sonraki}
          >
            🔥 SONRAKİ
          </button>

          <button className="icon-btn">
            🎤
          </button>

          <button className="icon-btn">
            📷
          </button>

        </div>

      </div>

      <div className="bottom-nav">

        <div className="nav-item">
          🏠
          <br/>
          Ana Sayfa
        </div>

        <div className="nav-item">
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