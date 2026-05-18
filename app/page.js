"use client";

import { useEffect, useRef, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export default function HomePage() {

  const videoRef = useRef(null);

  const [online] = useState(1284);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {

        if (!user) {

          window.location.href = "/login";

        } else {

          kameraBaslat();

        }

      }
    );

    return () => unsubscribe();

  }, []);

  const kameraBaslat = async () => {

    try {

      const stream =
        await navigator.mediaDevices.getUserMedia({

          video: true,

          audio: true,

        });

      if (videoRef.current) {

        videoRef.current.srcObject = stream;

      }

      setLoading(false);

    } catch (err) {

      console.log(err);

      alert("Kamera izni gerekli");

    }

  };

  return (

    <main style={styles.page}>

      <div style={styles.topBar}>

        <div>

          <div style={styles.logo}>
            💎 AURA
          </div>

          <div style={styles.live}>
            LIVE
          </div>

        </div>

        <div style={styles.onlineBox}>
          🟢 {online} ONLINE
        </div>

      </div>

      <div style={styles.cameraCard}>

        <div style={styles.topButtons}>

          <button style={styles.readyBtn}>
            Hazır
          </button>

          <button style={styles.friendBtn}>
            ❤️ Arkadaş Ekle
          </button>

        </div>

        {loading && (

          <div style={styles.waitingText}>
            KAMERA BAĞLANIYOR...
          </div>

        )}

        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={styles.mainVideo}
        />

        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={styles.myCamera}
        />

      </div>

      <div style={styles.bottomBar}>

        <button style={styles.mainBtn}>
          ✨ EŞLEŞME ARA
        </button>

        <button style={styles.nextBtn}>
          🔥 SONRAKİ
        </button>

        <button style={styles.iconBtn}>
          🎤
        </button>

        <button style={styles.iconBtn}>
          📷
        </button>

      </div>

    </main>

  );

}

const styles = {

  page: {

    minHeight: "100vh",

    background:
      "radial-gradient(circle at top, #16213e 0%, #0a0f1f 40%, #000000 100%)",

    overflow: "hidden",

    padding: "20px",

    fontFamily: "Arial",

    color: "white",

  },

  topBar: {

    display: "flex",

    justifyContent: "space-between",

    alignItems: "center",

  },

  logo: {

    fontSize: "52px",

    fontWeight: "900",

    color: "#ffd700",

    textShadow:
      "0 0 20px gold",

  },

  live: {

    fontSize: "30px",

    letterSpacing: "12px",

    color: "white",

    marginTop: "-10px",

  },

  onlineBox: {

    background: "rgba(0,255,120,0.15)",

    color: "#00ff99",

    padding: "14px 24px",

    borderRadius: "999px",

    fontWeight: "bold",

    border:
      "1px solid rgba(0,255,120,0.3)",

    backdropFilter: "blur(12px)",

  },

  cameraCard: {

    width: "720px",

    maxWidth: "95vw",

    height: "72vh",

    margin: "30px auto",

    borderRadius: "40px",

    position: "relative",

    overflow: "hidden",

    background:
      "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",

    border:
      "1px solid rgba(255,255,255,0.1)",

    backdropFilter: "blur(25px)",

    boxShadow:
      "0 0 60px rgba(0,0,0,0.6)",

  },

  mainVideo: {

    width: "100%",

    height: "100%",

    objectFit: "cover",

  },

  topButtons: {

    position: "absolute",

    top: "20px",

    left: "20px",

    right: "20px",

    display: "flex",

    justifyContent: "space-between",

    zIndex: 5,

  },

  readyBtn: {

    background:
      "rgba(255,255,255,0.15)",

    border:
      "1px solid rgba(255,255,255,0.15)",

    color: "white",

    padding: "12px 22px",

    borderRadius: "999px",

    fontWeight: "bold",

    backdropFilter: "blur(15px)",

  },

  friendBtn: {

    background:
      "linear-gradient(135deg,#ff4d8d,#ff80bf)",

    border: "none",

    color: "white",

    padding: "14px 26px",

    borderRadius: "999px",

    fontWeight: "bold",

    fontSize: "18px",

    boxShadow:
      "0 0 30px rgba(255,80,140,0.5)",

  },

  waitingText: {

    position: "absolute",

    top: "50%",

    left: "50%",

    transform:
      "translate(-50%,-50%)",

    fontSize: "34px",

    fontWeight: "900",

    letterSpacing: "4px",

    color:
      "rgba(255,255,255,0.3)",

    zIndex: 1,

  },

  myCamera: {

    position: "absolute",

    bottom: "25px",

    right: "25px",

    width: "190px",

    height: "260px",

    borderRadius: "30px",

    objectFit: "cover",

    border:
      "3px solid rgba(255,255,255,0.2)",

    boxShadow:
      "0 0 40px rgba(0,0,0,0.6)",

    zIndex: 3,

  },

  bottomBar: {

    position: "fixed",

    bottom: "30px",

    left: "50%",

    transform:
      "translateX(-50%)",

    display: "flex",

    gap: "18px",

    alignItems: "center",

  },

  mainBtn: {

    height: "78px",

    padding: "0 40px",

    borderRadius: "999px",

    border: "none",

    fontSize: "24px",

    fontWeight: "900",

    color: "black",

    background:
      "linear-gradient(180deg,#ffe36b,#ffc400,#d99000)",

    boxShadow:
      "0 0 40px rgba(255,194,0,0.45)",

  },

  nextBtn: {

    height: "78px",

    padding: "0 34px",

    borderRadius: "999px",

    border:
      "1px solid rgba(255,255,255,0.1)",

    fontSize: "22px",

    fontWeight: "bold",

    color: "white",

    background:
      "rgba(255,255,255,0.08)",

    backdropFilter: "blur(18px)",

  },

  iconBtn: {

    width: "78px",

    height: "78px",

    borderRadius: "50%",

    border:
      "1px solid rgba(255,255,255,0.1)",

    background:
      "rgba(255,255,255,0.08)",

    color: "white",

    fontSize: "30px",

    backdropFilter: "blur(18px)",

  },

};