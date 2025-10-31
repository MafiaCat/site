'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Cabinet {
  id: number
  name: string
  logo?: string
  city: string
  region: string
  size: string
  specialties: string[]
  yearObtained: number
  quote?: string
  website?: string
  description?: string
}

export default function CabinetsLabellises() {
  const [selectedRegion, setSelectedRegion] = useState<string>('all')
  const [selectedSize, setSelectedSize] = useState<string>('all')
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all')
  const [selectedYear, setSelectedYear] = useState<string>('all')
  const [selectedCabinet, setSelectedCabinet] = useState<Cabinet | null>(null)

  // Données d'exemple (à remplacer par une vraie base de données)
  const cabinets: Cabinet[] = [
    {
      id: 1,
      name: "Cabinet Dubois & Associés",
      city: "Paris",
      region: "Île-de-France",
      size: "11-20",
      specialties: ["Droit des affaires", "Droit fiscal"],
      yearObtained: 2024,
      quote: "Le Label Confiance nous a permis de structurer notre démarche bien-être",
      website: "https://example.com",
      description: "Cabinet d'avocats spécialisé en droit des affaires et droit fiscal, reconnu pour son excellence et son engagement envers le bien-être de ses collaborateurs."
    },
    {
      id: 2,
      name: "Martin Law Firm",
      city: "Lyon",
      region: "Auvergne-Rhône-Alpes",
      size: "21-50",
      specialties: ["Droit social", "Droit du travail"],
      yearObtained: 2023,
      quote: "Une démarche transformante pour notre culture d'entreprise",
      website: "https://example.com",
      description: "Cabinet innovant spécialisé dans le droit social, pionnier des nouvelles pratiques managériales."
    },
    {
      id: 3,
      name: "Laurent & Partners",
      city: "Bordeaux",
      region: "Nouvelle-Aquitaine",
      size: "6-10",
      specialties: ["Droit de la famille", "Droit immobilier"],
      yearObtained: 2024,
      quote: "Un accompagnement bienveillant vers l'excellence humaine",
      website: "https://example.com"
    },
    {
      id: 4,
      name: "Cabinet Rousseau",
      city: "Lille",
      region: "Hauts-de-France",
      size: "1-5",
      specialties: ["Droit pénal", "Droit de la consommation"],
      yearObtained: 2024,
      quote: "Même pour un petit cabinet, le Label a fait toute la différence"
    },
    {
      id: 5,
      name: "Moreau Avocats",
      city: "Marseille",
      region: "Provence-Alpes-Côte d'Azur",
      size: "11-20",
      specialties: ["Droit maritime", "Droit commercial"],
      yearObtained: 2023,
      quote: "Le Label Confiance est devenu un atout majeur pour notre recrutement"
    },
    {
      id: 6,
      name: "Cabinet Bernard",
      city: "Toulouse",
      region: "Occitanie",
      size: "6-10",
      specialties: ["Droit de la propriété intellectuelle", "Droit du numérique"],
      yearObtained: 2024
    },
    {
      id: 7,
      name: "Lefebvre & Associés",
      city: "Nantes",
      region: "Pays de la Loire",
      size: "21-50",
      specialties: ["Droit public", "Droit de l'environnement"],
      yearObtained: 2023,
      quote: "Une vraie différenciation sur le marché"
    },
    {
      id: 8,
      name: "Cabinet Petit",
      city: "Strasbourg",
      region: "Grand Est",
      size: "6-10",
      specialties: ["Droit européen", "Droit international"],
      yearObtained: 2024
    }
  ]

  const regions = ['Île-de-France', 'Auvergne-Rhône-Alpes', 'Nouvelle-Aquitaine', 'Hauts-de-France', 'Provence-Alpes-Côte d\'Azur', 'Occitanie', 'Pays de la Loire', 'Grand Est']
  const sizes = ['1-5', '6-10', '11-20', '21-50', '50+']
  const specialties = ['Droit des affaires', 'Droit social', 'Droit de la famille', 'Droit pénal', 'Droit fiscal', 'Droit immobilier', 'Droit du travail', 'Droit maritime', 'Droit commercial', 'Droit de la propriété intellectuelle', 'Droit du numérique', 'Droit public', 'Droit de l\'environnement', 'Droit européen', 'Droit international']
  const years = [2023, 2024]

  const filteredCabinets = cabinets.filter(cabinet => {
    if (selectedRegion !== 'all' && cabinet.region !== selectedRegion) return false
    if (selectedSize !== 'all' && cabinet.size !== selectedSize) return false
    if (selectedSpecialty !== 'all' && !cabinet.specialties.includes(selectedSpecialty)) return false
    if (selectedYear !== 'all' && cabinet.yearObtained !== parseInt(selectedYear)) return false
    return true
  })

  return (
    <>
      {/* Hero */}
      <section className="gradient-bg text-white pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cabinets Labellisés
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Ils ont fait le choix de la confiance et de l'excellence humaine
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-8 sm:gap-16 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6">
              <div>
                <div className="text-4xl font-bold mb-1">{cabinets.length}</div>
                <div className="text-blue-200 text-sm">Cabinets labellisés</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">
                  {cabinets.reduce((sum, c) => {
                    const sizeRange = c.size.split('-')
                    return sum + parseInt(sizeRange[sizeRange.length - 1].replace('+', ''))
                  }, 0)}+
                </div>
                <div className="text-blue-200 text-sm">Avocats impactés</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">{regions.length}</div>
                <div className="text-blue-200 text-sm">Régions représentées</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40 shadow-md">
        <div className="container-custom">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Filtrer par:</span>

            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            >
              <option value="all">Toutes les régions</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>

            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            >
              <option value="all">Toutes les tailles</option>
              {sizes.map(size => (
                <option key={size} value={size}>{size} avocats</option>
              ))}
            </select>

            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            >
              <option value="all">Toutes les spécialités</option>
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            >
              <option value="all">Toutes les années</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>

            {(selectedRegion !== 'all' || selectedSize !== 'all' || selectedSpecialty !== 'all' || selectedYear !== 'all') && (
              <button
                onClick={() => {
                  setSelectedRegion('all')
                  setSelectedSize('all')
                  setSelectedSpecialty('all')
                  setSelectedYear('all')
                }}
                className="text-sm text-primary-600 hover:text-primary-700 font-semibold whitespace-nowrap"
              >
                Réinitialiser
              </button>
            )}
          </div>

          <div className="mt-4 text-sm text-gray-600">
            {filteredCabinets.length} cabinet{filteredCabinets.length > 1 ? 's' : ''} trouvé{filteredCabinets.length > 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Annuaire */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {filteredCabinets.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Aucun cabinet trouvé
              </h3>
              <p className="text-gray-600 mb-8">
                Essayez de modifier vos critères de recherche
              </p>
              <button
                onClick={() => {
                  setSelectedRegion('all')
                  setSelectedSize('all')
                  setSelectedSpecialty('all')
                  setSelectedYear('all')
                }}
                className="btn-primary"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCabinets.map(cabinet => (
                <div key={cabinet.id} className="card group cursor-pointer" onClick={() => setSelectedCabinet(cabinet)}>
                  {/* Logo placeholder */}
                  <div className="w-full h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary-600">
                      {cabinet.name.split(' ')[0].charAt(0)}{cabinet.name.split(' ')[1]?.charAt(0) || ''}
                    </div>
                  </div>

                  {/* Badge Label */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Label Confiance {cabinet.yearObtained}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {cabinet.name}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {cabinet.city}, {cabinet.region}
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {cabinet.size} avocats
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cabinet.specialties.slice(0, 2).map(specialty => (
                      <span key={specialty} className="px-2 py-1 bg-blue-100 text-primary-700 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                    {cabinet.specialties.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{cabinet.specialties.length - 2}
                      </span>
                    )}
                  </div>

                  {cabinet.quote && (
                    <div className="border-l-4 border-accent-500 pl-3 py-2 bg-orange-50 rounded">
                      <p className="text-sm text-gray-700 italic">
                        "{cabinet.quote}"
                      </p>
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="text-primary-600 font-semibold text-sm hover:text-primary-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Voir le profil
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal Profil Cabinet */}
      {selectedCabinet && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedCabinet(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Label Confiance {selectedCabinet.yearObtained}
                  </div>
                  <h2 className="text-3xl font-bold text-primary-900 mb-2">
                    {selectedCabinet.name}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedCabinet(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Logo */}
              <div className="w-full h-40 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary-600">
                  {selectedCabinet.name.split(' ')[0].charAt(0)}{selectedCabinet.name.split(' ')[1]?.charAt(0) || ''}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{selectedCabinet.city}, {selectedCabinet.region}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{selectedCabinet.size} avocats</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-primary-900 mb-3">Domaines de spécialité</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCabinet.specialties.map(specialty => (
                    <span key={specialty} className="px-3 py-1 bg-blue-100 text-primary-700 rounded-full text-sm">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {selectedCabinet.description && (
                <div className="mb-6">
                  <h3 className="font-bold text-primary-900 mb-3">À propos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedCabinet.description}
                  </p>
                </div>
              )}

              {selectedCabinet.quote && (
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6 mb-6">
                  <div className="text-4xl text-accent-500 mb-3">"</div>
                  <p className="text-lg text-gray-700 italic mb-4">
                    {selectedCabinet.quote}
                  </p>
                </div>
              )}

              {selectedCabinet.website && (
                <a
                  href={selectedCabinet.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  Visiter le site web
                  <svg className="w-5 h-5 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Témoignages vidéo */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Témoignages vidéo
            </h2>
            <p className="text-xl text-gray-700">
              Écoutez les retours d'expérience des cabinets labellisés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-primary-200 to-accent-200 aspect-video flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-primary-900 mb-1">Cabinet Example {i}</h3>
                <p className="text-sm text-gray-600">3 min • {2023 + i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Votre cabinet sur cette page ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Rejoignez les cabinets pionniers de l'excellence humaine et valorisez vos engagements
          </p>
          <Link href="/adherer" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl inline-block">
            Obtenir le Label Confiance
          </Link>
        </div>
      </section>
    </>
  )
}
