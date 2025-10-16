export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-red-600 mb-4">
            Donavida.do
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Conectamos donantes voluntarios con bancos de sangre en República Dominicana
          </p>
          <div className="space-x-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              Quiero ser donante
            </button>
            <button className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition">
              Soy banco de sangre
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}