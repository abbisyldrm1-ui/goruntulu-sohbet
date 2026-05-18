"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const kayitOl = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Kayıt başarılı");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "350px",
          background: "#1a1a1a",
          padding: "30px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h1
          style={{
            color: "gold",
            textAlign: "center",
            fontSize: "32px",
          }}
        >
          KAYIT OL
        </h1>

        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            background: "white",
            color: "black",
            fontSize: "16px",
            outline: "none",
          }}
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            background: "white",
            color: "black",
            fontSize: "16px",
            outline: "none",
          }}
        />

        <button
          onClick={kayitOl}
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            background: "gold",
            color: "black",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          KAYIT OL
        </button>
      </div>
    </main>
  );
}