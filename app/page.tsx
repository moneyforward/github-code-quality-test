export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
          <span className="text-4xl">👋</span>
        </div>

        <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Welcome to GitHub Code Quality Test Preview
        </h1>

        <p className="mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
          A Next.js application for exploring code quality patterns and best
          practices.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
          >
            Get Started
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-2 border-gray-300 bg-white px-8 py-3 font-semibold text-gray-700 shadow-md transition-all hover:border-gray-400 hover:shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-500"
          >
            View on GitHub
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-3 text-3xl">⚡</div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Fast
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Built with Next.js for optimal performance
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-3 text-3xl">🎨</div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Beautiful
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Styled with Tailwind CSS
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-3 text-3xl">🔧</div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              TypeScript
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Type-safe development experience
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
