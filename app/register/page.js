import "./register.css";

export default function RegisterPage() {
  return (
    <main className="registerContainer">
      <div className="registerBox">
        <h1 className="title">AURA LIVE</h1>

        <input
          type="text"
          placeholder="Kullanıcı Adı"
          className="input"
        />

        <input
          type="password"
          placeholder="Şifre"
          className="input"
        />

        <button className="registerButton">
          Kayıt Ol
        </button>
      </div>
    </main>
  );
}