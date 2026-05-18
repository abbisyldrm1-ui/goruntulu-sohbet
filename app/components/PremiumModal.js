export default function PremiumModal({
  open,
  setOpen,
}) {
  if (!open) return null;

  return (
    <div className="absolute inset-0 z-[9999] bg-black/70 flex items-center justify-center">

      <div className="glass rounded-3xl p-6 w-[90%] max-w-[360px]">

        <h2 className="text-3xl font-black text-[#d4af37]">
          AURA PREMIUM
        </h2>

        <button
          onClick={() => setOpen(false)}
          className="gold-btn mt-6 px-5 py-3 rounded-2xl"
        >
          Kapat
        </button>

      </div>
    </div>
  );
}