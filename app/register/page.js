export default function Register() {

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to bottom,#f8fbff,#e7f2ff)",
      }}
    >

      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "30px",
          width: "320px",
          textAlign: "center",
        }}
      >

        <h1
          style={{
            color: "#7cc4ff",
            marginBottom: "20px",
          }}
        >
          AURA LIVE
        </h1>

        <input
          placeholder="Kullanıcı adı"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "15px",
            borderRadius: "15px",
            border: "2px solid #dcefff",
          }}
        />

        <input
          placeholder="Şifre"
          type="password"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "15px",
            borderRadius: "15px",
            border: "2px solid #dcefff",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "18px",
            border: "none",
            background:
              "linear-gradient(to right,#9fd8ff,#79c7ff)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Kayıt Ol
        </button>

      </div>

    </div>

  );

}