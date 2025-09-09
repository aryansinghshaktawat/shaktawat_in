'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4">
            Something went wrong
          </h2>
          <p className="text-white/60 font-geist-mono mb-6">
            {error.message || 'An unexpected error occurred'}
          </p>
          <button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-200"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}