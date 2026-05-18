export default function BottomNav({ active, setActive }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-[999] px-4 pb-5">

      <div className="glass border border-white/10 rounded-[32px] h-[78px] flex items-center justify-around">

        <button
          onClick={() => setActive("messages")}
          className={active === "messages" ? "text-[#d4af37]" : "text-white/50"}
        >
          💬
        </button>

        <button
          onClick={() => setActive("friends")}
          className={active === "friends" ? "text-[#d4af37]" : "text-white/50"}
        >
          👥
        </button>

        <button
          onClick={() => setActive("profile")}
          className={active === "profile" ? "text-[#d4af37]" : "text-white/50"}
        >
          👤
        </button>

        <button
          onClick={() => setActive("settings")}
          className={active === "settings" ? "text-[#d4af37]" : "text-white/50"}
        >
          ⚙️
        </button>

      </div>
    </div>
  );
}