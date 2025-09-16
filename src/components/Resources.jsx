export default function Resources() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-10 space-y-10">
      <h2 className="text-3xl font-bold text-center text-deepLilac">
        Helpful Resources 💜
      </h2>

      {/* Intro Box */}
      <div className="bg-yellow-100 text-yellow-900 p-6 rounded-xl shadow text-center">
        <p className="text-lg font-medium">
          If you’re feeling overwhelmed, you don’t have to go through it alone.  
          Here are some trusted hotlines and services you can reach out to 💛
        </p>
      </div>

      {/* Resource List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-xl p-6 shadow border border-lilac">
          <h3 className="text-xl font-semibold text-deepLilac mb-2">
            Safe Place Nigeria
          </h3>
          <p>📞 0800 800 2000 (Toll-free, 24/7) – Crisis counseling & referrals</p>
        </div>

        <div className="rounded-xl p-6 shadow border border-deepLilac">
          <h3 className="text-xl font-semibold text-deepLilac mb-2">
            MANI Crisis Line
          </h3>
          <p>📞 0809 111 6264 or 0811 168 0666 (Free, 24/7 peer-led support)</p>
        </div>

        <div className="rounded-xl p-6 shadow border border-purple-400">
          <h3 className="text-xl font-semibold text-deepLilac mb-2">
            SURPIN (LUTH)
          </h3>
          <p>📞 0800 078 7746 (Toll-free)</p>
          <p>📞 0905 440 0009, 0908 021 7555, 0814 224 1007 (Hausa support)</p>
        </div>

        <div className="rounded-xl p-6 shadow border border-purple-500">
          <h3 className="text-xl font-semibold text-deepLilac mb-2">
            Lagos Lifeline
          </h3>
          <p>📞 0700 060 6463 (0700 000 MIND) – Lagos State mental health emergency</p>
        </div>

        <div className="rounded-xl p-6 shadow border border-pink-500">
          <h3 className="text-xl font-semibold text-deepLilac mb-2">
            National Emergency
          </h3>
          <p>📞 112 – General emergency (includes mental health crises)</p>
        </div>
      </div>
    </section>
  );
}