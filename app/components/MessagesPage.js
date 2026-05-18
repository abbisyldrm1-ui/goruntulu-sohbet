export default function MessagesPage() {
  return (
    <div className="absolute inset-0 z-[999] bg-[#050505] p-5">

      <h1 className="text-3xl font-black text-[#d4af37]">
        Mesajlar
      </h1>

      <div className="mt-8 flex flex-col gap-4">

        <div className="glass rounded-3xl p-4 border border-white/10">
          <h2 className="text-white font-bold">
            Sophia
          </h2>

          <p className="text-white/40 mt-2">
            Merhaba arkadaş oldunuz 👋
          </p>
        </div>

        <div className="glass rounded-3xl p-4 border border-white/10">
          <h2 className="text-white font-bold">
            Elena
          </h2>

          <p className="text-white/40 mt-2">
            Sohbet etmeye başlayabilirsiniz
          </p>
        </div>

      </div>
    </div>
  );
}