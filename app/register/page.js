"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function RegisterPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const kayitOl = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Kayıt başarılı");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <div
        style={{
          width: "350px",
          background: "#111",
          padding: "30px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          border: "2px solid gold",
        }}
      >

        <h1
          style={{
            color: "gold",
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          AURA LIVE
        </h1>

        <p
          style={{
            color: "white",
            marginBottom: "-5px",
            fontWeight: "bold",
          }}
        >
          E-Mail
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}

          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "2px solid gold",
            background: "#222",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            boxSizing: "border-box",
          }}
        />

        <p
          style={{
            color: "white",
            marginBottom: "-5px",
            fontWeight: "bold",
          }}
        >
          Şifre
        </p>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "2px solid gold",
            background: "#222",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={kayitOl}

          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "none",
            background: "gold",
            color: "black",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Kayıt Ol
        </button>

      </div>

    </main>

  );

}