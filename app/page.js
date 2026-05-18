"use client";

import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Peer from "peerjs";

export default function Home() {

  const localVideo = useRef(null);
  const remoteVideo = useRef(null);

  const socketRef = useRef(null);
  const peerRef = useRef(null);

  const currentCall = useRef(null);

  const [durum, setDurum] =
    useState("Hazır");

  const [baglandi, setBaglandi] =
    useState(false);

  const [micAcik, setMicAcik] =
    useState(true);

  const [kameraAcik, setKameraAcik] =
    useState(true);

  const [mesaj, setMesaj] =
    useState("");

  const [mesajlar, setMesajlar] =
    useState([]);

  let localStream = null;

  useEffect(() => {

    baslat();

  }, []);

  // BAŞLAT
  async function baslat() {

    try {

      localStream =
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

      if (localVideo.current) {

        localVideo.current.srcObject =
          localStream;

      }

      // SOCKET
      socketRef.current = io(
        "https://socket-server-1-d5rs.onrender.com",
        {
          transports: ["websocket"],
        }
      );

      socketRef.current.on(
        "connect",
        () => {

          setBaglandi(true);

        }
      );

      socketRef.current.on(
        "disconnect",
        () => {

          setBaglandi(false);

        }
      );

      // PEER
      peerRef.current = new Peer();

      peerRef.current.on(
        "open",
        (id) => {

          socketRef.current.emit(
            "peer-id",
            id
          );

        }
      );

      // GELEN ÇAĞRI
      peerRef.current.on(
        "call",
        (call) => {

          currentCall.current = call;

          call.answer(localStream);

          call.on(
            "stream",
            (remoteStream) => {

              if (remoteVideo.current) {

                remoteVideo.current.srcObject =
                  remoteStream;

              }

              setDurum(
                "Bağlandı 💙"
              );

            }
          );

        }
      );

      // MESAJ AL
      socketRef.current.on(
        "receive-message",
        (msg) => {

          setMesajlar((prev) => [
            ...prev,
            {
              tip: "karsi",
              text: msg,
            },
          ]);

        }
      );

      // EŞLEŞME
      socketRef.current.on(
        "matched",
        (peerId) => {

          const call =
            peerRef.current.call(
              peerId,
              localStream
            );

          currentCall.current = call;

          call.on(
            "stream",
            (remoteStream) => {

              if (remoteVideo.current) {

                remoteVideo.current.srcObject =
                  remoteStream;

              }

              setDurum(
                "Bağlandı 💙"
              );

            }
          );

        }
      );

    } catch (err) {

      console.log(err);

      setDurum(
        "Hata oluştu"
      );

    }

  }

  // EŞLEŞME
  function eslesmeAra() {

    socketRef.current.emit(
      "join-room"
    );

    setDurum(
      "Birisi aranıyor..."
    );

  }

  // SONRAKİ
  function sonrakiKisi() {

    if (currentCall.current) {

      currentCall.current.close();

      currentCall.current = null;

    }

    if (remoteVideo.current) {

      remoteVideo.current.srcObject =
        null;

    }

    setMesajlar([]);

    setDurum(
      "Yeni kişi aranıyor..."
    );

    socketRef.current.emit(
      "join-room"
    );

  }

  // MİKROFON
  function mikrofonKapatAc() {

    const stream =
      localVideo.current.srcObject;

    if (!stream) return;

    stream
      .getAudioTracks()
      .forEach((track) => {

        track.enabled =
          !track.enabled;

        setMicAcik(
          track.enabled
        );

      });

  }

  // KAMERA
  function kameraKapatAc() {

    const stream =
      localVideo.current.srcObject;

    if (!stream) return;

    stream
      .getVideoTracks()
      .forEach((track) => {

        track.enabled =
          !track.enabled;

        setKameraAcik(
          track.enabled
        );

      });

  }

  // MESAJ GÖNDER
  function mesajGonder() {

    if (!mesaj.trim()) return;

    socketRef.current.emit(
      "send-message",
      mesaj
    );

    setMesajlar((prev) => [
      ...prev,
      {
        tip: "ben",
        text: mesaj,
      },
    ]);

    setMesaj("");

  }

  return (

    <div
      style={{
        background:
          "linear-gradient(to bottom, #f8fbff, #e7f2ff)",
        minHeight: "100vh",
        color: "#222",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "15px",
      }}
    >

      {/* HEADER */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >

        <h1
          style={{
            color: "#7cc4ff",
            fontSize: "34px",
            fontWeight: "bold",
          }}
        >
          AURA LIVE
        </h1>

        <div
          style={{
            background:
              baglandi
                ? "#dffff0"
                : "#ffe3e3",
            color:
              baglandi
                ? "#00aa66"
                : "#ff4444",
            padding:
              "8px 16px",
            borderRadius: "25px",
            fontSize: "13px",
            fontWeight: "bold",
          }}
        >
          {
            baglandi
              ? "ONLINE"
              : "OFFLINE"
          }
        </div>

      </div>

      {/* ANA VIDEO */}
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          height: "580px",
          borderRadius: "40px",
          overflow: "hidden",
          background: "#fff",
          position: "relative",
          border:
            "3px solid #d7ecff",
          boxShadow:
            "0 15px 40px rgba(100,180,255,0.20)",
        }}
      >

        {/* KARŞI */}
        <video
          ref={remoteVideo}
          autoPlay
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            background: "#dfefff",
          }}
        />

        {/* DURUM */}
        <div
          style={{
            position: "absolute",
            top: "18px",
            left: "18px",
            background:
              "rgba(255,255,255,0.72)",
            padding:
              "12px 20px",
            borderRadius: "22px",
            backdropFilter:
              "blur(12px)",
            fontSize: "14px",
            color: "#444",
            fontWeight: "bold",
          }}
        >
          {durum}
        </div>

        {/* ARKADAŞ EKLE */}
        <button
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            background:
              "linear-gradient(to right,#ff9acb,#ffb7d8)",
            border: "none",
            color: "white",
            padding:
              "12px 18px",
            borderRadius: "22px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ❤️ Arkadaş Ekle
        </button>

        {/* SEN */}
        <video
          ref={localVideo}
          autoPlay
          playsInline
          muted
          style={{
            position: "absolute",
            width: "120px",
            height: "175px",
            objectFit: "cover",
            borderRadius: "28px",
            right: "18px",
            bottom: "18px",
            border:
              "3px solid #bde3ff",
          }}
        />

      </div>

      {/* PREMIUM BUTONLAR */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "28px",
          flexWrap: "wrap",
          justifyContent:
            "center",
        }}
      >

        <button
          onClick={eslesmeAra}
          style={{
            background:
              "linear-gradient(to right, #9fd8ff, #79c7ff)",
            color: "white",
            border: "none",
            padding:
              "17px 36px",
            borderRadius: "35px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ✨ EŞLEŞME ARA
        </button>

        <button
          onClick={sonrakiKisi}
          style={{
            background:
              "linear-gradient(to right, #ffffff, #eef7ff)",
            color: "#68bfff",
            border:
              "2px solid #cce9ff",
            padding:
              "17px 36px",
            borderRadius: "35px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          💫 SONRAKİ
        </button>

        <button
          onClick={mikrofonKapatAc}
          style={{
            background:
              micAcik
                ? "rgba(255,255,255,0.85)"
                : "#ffd9d9",
            color: "#68bfff",
            border:
              "2px solid #d7ecff",
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            fontSize: "26px",
            cursor: "pointer",
          }}
        >
          🎤
        </button>

        <button
          onClick={kameraKapatAc}
          style={{
            background:
              kameraAcik
                ? "rgba(255,255,255,0.85)"
                : "#ececec",
            color: "#68bfff",
            border:
              "2px solid #d7ecff",
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            fontSize: "26px",
            cursor: "pointer",
          }}
        >
          📷
        </button>

      </div>

      {/* CANLI MESAJ */}
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          marginTop: "22px",
          background:
            "rgba(255,255,255,0.72)",
          backdropFilter:
            "blur(12px)",
          borderRadius: "30px",
          padding: "18px",
          border:
            "2px solid #dcefff",
        }}
      >

        {/* ÜST */}
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >

          <div
            style={{
              fontWeight: "bold",
              color: "#6abfff",
              fontSize: "16px",
            }}
          >
            💬 Canlı Sohbet
          </div>

        </div>

        {/* MESAJLAR */}
        <div
          style={{
            height: "120px",
            overflowY: "auto",
            background: "#ffffff",
            borderRadius: "20px",
            padding: "14px",
            border:
              "2px solid #e8f4ff",
            marginBottom: "12px",
          }}
        >

          {
            mesajlar.map((m, i) => (

              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent:
                    m.tip === "ben"
                      ? "flex-end"
                      : "flex-start",
                  marginBottom: "10px",
                }}
              >

                <div
                  style={{
                    background:
                      m.tip === "ben"
                        ? "#9fd8ff"
                        : "#f1f7ff",
                    color:
                      m.tip === "ben"
                        ? "white"
                        : "#444",
                    padding:
                      "10px 14px",
                    borderRadius: "18px",
                    maxWidth: "75%",
                    fontSize: "14px",
                  }}
                >
                  {m.text}
                </div>

              </div>

            ))
          }

        </div>

        {/* MESAJ GÖNDER */}
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >

          <input
            value={mesaj}
            onChange={(e) =>
              setMesaj(e.target.value)
            }
            placeholder="Mesaj yaz..."
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              padding: "15px",
              borderRadius: "18px",
              background: "#fff",
              border:
                "2px solid #dcefff",
              fontSize: "14px",
            }}
          />

          <button
            onClick={mesajGonder}
            style={{
              background:
                "linear-gradient(to right,#9fd8ff,#79c7ff)",
              color: "white",
              border: "none",
              padding:
                "15px 24px",
              borderRadius: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Gönder
          </button>

        </div>

      </div>

    </div>

  );

}