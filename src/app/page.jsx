// src/app/page.jsx
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Melektron Singularitet</h1>
      <p className="text-xl">Sajt je u pripremi...</p>
      <div className="mt-8">
        <a href="/donacije" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg transition">
          Idi na donacije
        </a>
      </div>
    </div>
  );
}