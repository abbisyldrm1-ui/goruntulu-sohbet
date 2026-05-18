"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./register.css";

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
    <main className="registerMain">
      <div className="registerBox">

        <h1 className="registerTitle">
          AURA LIVE
        </h1>

        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="registerInput"
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="registerInput"
        />

        <button
          onClick={kayitOl}
          className="registerButton"
        >
          Kayıt Ol
        </button>

      </div>
    </main>
  );
}