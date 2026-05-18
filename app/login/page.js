"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const girisYap = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Giriş başarılı");

      window.location.href = "/";

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <main style={styles.page}>

      <div style={styles.wrap}>

        <div style={styles.diamond}>
          💎
        </div>

        <h1 style={styles.aura}>
          AURA
        </h1>

        <h2 style={styles.live}>
          LIVE
        </h2>

        <div style={styles.line}>
          ◇
        </div>

        <p style={styles.premium}>
          PREMİUM GÖRÜNTÜLÜ SOHBET
        </p>

        <input
          style={styles.input}
          type="email"
          placeholder="👤 E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="🔒 Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          style={styles.button}
          onClick={girisYap}
        >
          Giriş Yap
        </button>

        <p style={styles.login}>
          Hesabın yok mu?

          <span
            style={styles.gold}
            onClick={() => (window.location.href = "/register")}
          >
            {" "}Kayıt Ol
          </span>
        </p>

      </div>

    </main>

  );

}

const styles = {

  page: {

    minHeight: "100vh",

    background:
      "radial-gradient(circle at top, #14213d 0%, #050814 45%, #000000 100%)",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    fontFamily: "Arial, sans-serif",

    color: "white",

  },

  wrap: {

    width: "720px",

    maxWidth: "92vw",

    textAlign: "center",

  },

  diamond: {

    fontSize: "90px",

    marginBottom: "5px",

    filter: "drop-shadow(0 0 25px gold)",

  },

  aura: {

    fontSize: "120px",

    lineHeight: "0.85",

    fontWeight: "900",

    color: "#ffd700",

    letterSpacing: "8px",

    textShadow:
      "0 0 10px #ffd700, 0 0 35px #ff9900, 0 4px 0 #8a5a00",

  },

  live: {

    fontSize: "70px",

    fontWeight: "900",

    color: "#ffd700",

    letterSpacing: "14px",

    textShadow:
      "0 0 10px #ffd700, 0 0 30px #ff9900, 0 3px 0 #8a5a00",

  },

  line: {

    color: "#ffd700",

    fontSize: "28px",

    margin: "8px 0",

    textShadow: "0 0 20px gold",

  },

  premium: {

    fontSize: "28px",

    letterSpacing: "6px",

    marginBottom: "28px",

    color: "#f8fafc",

  },

  input: {

    width: "620px",

    maxWidth: "92vw",

    height: "64px",

    display: "block",

    margin: "14px auto",

    borderRadius: "14px",

    border: "1px solid rgba(255,215,0,0.7)",

    background: "rgba(255,255,255,0.06)",

    color: "white",

    fontSize: "22px",

    padding: "0 24px",

    outline: "none",

  },

  button: {

    width: "620px",

    maxWidth: "92vw",

    height: "74px",

    marginTop: "16px",

    borderRadius: "14px",

    border: "none",

    background:
      "linear-gradient(180deg, #ffe36b, #ffc400, #d99000)",

    color: "black",

    fontSize: "30px",

    fontWeight: "900",

    cursor: "pointer",

    boxShadow:
      "0 0 30px rgba(255,194,0,0.55)",

  },

  login: {

    marginTop: "28px",

    fontSize: "22px",

    color: "#e5e7eb",

  },

  gold: {

    color: "#ffd700",

    fontWeight: "bold",

    cursor: "pointer",

  },

};