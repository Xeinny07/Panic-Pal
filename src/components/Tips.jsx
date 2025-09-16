// src/pages/Tips.jsx
export default function Tips() {
  const tips = [
    "Take slow, deep breaths to calm your body.",
    "Ground yourself with 5-4-3-2-1 technique.",
    "Remind yourself: panic attacks are not dangerous.",
    "Splash cool water on your face or hold something cold.",
    "Talk kindly to yourself — you are safe."
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-butter text-deepLilac px-4">
      <h2 className="text-4xl font-bold mb-6">Quick Tips 💡</h2>
      <div className="grid gap-4 w-full max-w-lg">
        {tips.map((tip, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-yellow-300 text-deepLilac px-6 py-4 text-center shadow-md"
          >
            {tip}
          </div>
        ))}
      </div>
    </div>
  );
}