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
        backgroundColor: "#0f0f0f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "350px",
          backgroundColor: "#1a1a1a",
          padding: "30px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
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
          KAYIT OL
        </h1>

        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "2px solid gold",
            backgroundColor: "#ffffff",
            color: "#000000",
            fontSize: "18px",
            fontWeight: "bold",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "2px solid gold",
            backgroundColor: "#ffffff",
            color: "#000000",
            fontSize: "18px",
            fontWeight: "bold",
            outline: "none",
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
            backgroundColor: "gold",
            color: "#000000",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          KAYIT OL
        </button>
      </div>
    </main>
  );
}