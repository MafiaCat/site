'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Le Label Confiance nous a permis de structurer notre démarche bien-être et d'améliorer significativement la qualité de vie au cabinet.",
      author: "Marie Dubois",
      role: "Associée",
      cabinet: "Cabinet Dubois & Associés",
    },
    {
      quote: "Une démarche concrète et bienveillante qui a transformé notre culture d'entreprise. Nos collaborateurs sont plus épanouis et plus engagés.",
      author: "Pierre Martin",
      role: "Managing Partner",
      cabinet: "Martin Law Firm",
    },
    {
      quote: "Le Label Confiance est bien plus qu'un simple label : c'est un véritable accompagnement vers l'excellence humaine.",
      author: "Sophie Laurent",
      role: "Directrice RH",
      cabinet: "Laurent & Partners",
    },
  ]

  const pillars = [
    {
      icon: "👥",
      title: "Relations humaines",
      description: "Communication interne et cohésion d'équipe"
    },
    {
      icon: "🎯",
      title: "Management éthique",
      description: "Leadership bienveillant et respectueux"
    },
    {
      icon: "💚",
      title: "Bien-être",
      description: "Santé mentale et équilibre vie pro/perso"
    },
    {
      icon: "🌈",
      title: "Inclusion & Diversité",
      description: "Égalité et respect des différences"
    },
    {
      icon: "⭐",
      title: "Reconnaissance",
      description: "Évolution professionnelle et sens du travail"
    },
    {
      icon: "🌍",
      title: "Engagement sociétal",
      description: "Responsabilité et éthique professionnelle"
    },
    {
      icon: "🤝",
      title: "Relations clients",
      description: "Excellence et transparence dans les services"
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-bg text-white overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-14 h-14 text-white animate-handshake" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Le premier label qui place l'humain au cœur de la profession d'avocat
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              Valorisez vos engagements, inspirez vos clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/le-label" className="btn-secondary text-lg px-8 py-4">
                Découvrir le Label
              </Link>
              <Link href="/adherer" className="btn-accent text-lg px-8 py-4">
                Obtenir le Label
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* En Bref Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-primary-900 mb-2">Confiance</h3>
              <p className="text-gray-700">Des engagements concrets et mesurables</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold text-primary-900 mb-2">Responsabilité</h3>
              <p className="text-gray-700">Un accompagnement bienveillant et exigeant</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-primary-900 mb-2">Éthique</h3>
              <p className="text-gray-700">L'humain au centre de votre pratique</p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-8 sm:gap-16 text-left sm:text-center">
              <div>
                <div className="text-5xl font-bold text-gradient mb-2">50+</div>
                <div className="text-gray-600">Cabinets labellisés</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gradient mb-2">500+</div>
                <div className="text-gray-600">Collaborateurs impactés</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gradient mb-2">95%</div>
                <div className="text-gray-600">Taux de satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi ce label */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Pourquoi ce label ?
            </h2>
            <p className="text-xl text-gray-700">
              Face aux défis actuels de la profession, nous proposons une solution concrète et bienveillante
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Le constat</h3>
              <p className="text-gray-700">
                Stress, burn-out, turnover élevé : la profession d'avocat est sous pression et les collaborateurs en souffrent
              </p>
            </div>

            <div className="card text-center border-2 border-accent-500">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">La solution</h3>
              <p className="text-gray-700">
                Une démarche d'accompagnement progressive, bienveillante et adaptée à votre cabinet
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Les bénéfices</h3>
              <p className="text-gray-700">
                Collaborateurs épanouis, attractivité renforcée, image valorisée auprès des clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les 7 Piliers */}
      <section className="section-padding bg-white" id="piliers">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Les 7 piliers du référentiel
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Une approche holistique pour placer l'humain au cœur de votre cabinet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group card hover:border-2 hover:border-primary-500 cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-700">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/le-label#piliers" className="btn-primary text-lg">
              Découvrir le référentiel complet
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-blue-100">
              Découvrez les témoignages des cabinets labellisés
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
              <div className="text-6xl text-accent-400 mb-6">"</div>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                {testimonials[activeTestimonial].quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-2xl font-bold">
                  {testimonials[activeTestimonial].author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonials[activeTestimonial].author}</div>
                  <div className="text-blue-200">{testimonials[activeTestimonial].role}</div>
                  <div className="text-blue-300 text-sm">{testimonials[activeTestimonial].cabinet}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cabinets Labellisés Aperçu */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Les cabinets labellisés
            </h2>
            <p className="text-xl text-gray-700">
              Rejoignez les cabinets pionniers de l'excellence humaine
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg p-6 flex items-center justify-center shadow hover:shadow-lg transition-shadow">
                <div className="w-full h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-sm">
                  Cabinet {i}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/cabinets-labellises" className="btn-primary text-lg">
              Voir tous les cabinets labellisés
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à rejoindre le mouvement ?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100">
            Faites le choix d'un cabinet plus humain, plus éthique, plus attractif
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/adherer" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Adhérer au Label
            </Link>
            <Link href="/le-label#guide" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300">
              Télécharger le guide
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
