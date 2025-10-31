'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Adherer() {
  const [diagnosticStep, setDiagnosticStep] = useState(0)
  const [diagnosticAnswers, setDiagnosticAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [formData, setFormData] = useState({
    cabinetName: '',
    contactName: '',
    email: '',
    phone: '',
    numberOfLawyers: '',
    city: '',
    specialties: '',
    motivation: '',
    currentActions: '',
    expectedSupport: ''
  })

  const diagnosticQuestions = [
    {
      question: "Existe-t-il des canaux de communication internes réguliers dans votre cabinet ?",
      pillar: "Relations humaines"
    },
    {
      question: "Les managers sont-ils formés aux pratiques de management bienveillant ?",
      pillar: "Management éthique"
    },
    {
      question: "Avez-vous mis en place des dispositifs de prévention du burn-out ?",
      pillar: "Bien-être"
    },
    {
      question: "Votre cabinet a-t-il une politique formalisée en matière de diversité et d'inclusion ?",
      pillar: "Inclusion & Diversité"
    },
    {
      question: "Existe-t-il un système de reconnaissance des contributions et des réussites ?",
      pillar: "Reconnaissance"
    },
    {
      question: "Votre cabinet s'engage-t-il dans des actions d'intérêt général (pro bono, mécénat) ?",
      pillar: "Engagement sociétal"
    },
    {
      question: "Mesurez-vous régulièrement la satisfaction de vos clients ?",
      pillar: "Relations clients"
    },
    {
      question: "Les collaborateurs ont-ils accès à des formations continues ?",
      pillar: "Reconnaissance"
    },
    {
      question: "Le droit à la déconnexion est-il respecté dans votre cabinet ?",
      pillar: "Bien-être"
    },
    {
      question: "Existe-t-il des moments de convivialité et d'échanges informels ?",
      pillar: "Relations humaines"
    }
  ]

  const handleDiagnosticAnswer = (score: number) => {
    const newAnswers = [...diagnosticAnswers, score]
    setDiagnosticAnswers(newAnswers)

    if (diagnosticStep < diagnosticQuestions.length - 1) {
      setDiagnosticStep(diagnosticStep + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    const total = diagnosticAnswers.reduce((a, b) => a + b, 0)
    return Math.round((total / (diagnosticQuestions.length * 3)) * 100)
  }

  const getRecommendation = (score: number) => {
    if (score >= 75) {
      return {
        title: "Excellent ! Vous êtes prêt pour le Label",
        message: "Votre cabinet semble déjà bien avancé sur de nombreux aspects du référentiel. La démarche de labellisation vous permettra de formaliser et valoriser vos engagements.",
        color: "green"
      }
    } else if (score >= 50) {
      return {
        title: "Très bien ! Vous avez de bonnes bases",
        message: "Votre cabinet a déjà mis en place plusieurs initiatives. Le Label Confiance vous accompagnera pour structurer votre démarche et progresser sur les axes à améliorer.",
        color: "blue"
      }
    } else {
      return {
        title: "C'est le moment de démarrer !",
        message: "Votre cabinet a du potentiel de progression. Le Label Confiance vous accompagnera pas à pas pour mettre en place une démarche cohérente et progressive, adaptée à votre contexte.",
        color: "orange"
      }
    }
  }

  const resetDiagnostic = () => {
    setDiagnosticStep(0)
    setDiagnosticAnswers([])
    setShowResults(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Merci pour votre candidature ! Nous vous contacterons dans les 48 heures.')
  }

  return (
    <>
      {/* Hero */}
      <section className="gradient-bg text-white pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Adhérer au Label Confiance
            </h1>
            <p className="text-xl text-blue-100">
              Engagez votre cabinet dans une démarche d'excellence humaine
            </p>
          </div>
        </div>
      </section>

      {/* Auto-diagnostic */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-6">
                Êtes-vous prêt ?
              </h2>
              <p className="text-xl text-gray-700">
                Répondez à 10 questions pour évaluer votre niveau de départ
              </p>
            </div>

            {!showResults ? (
              <div className="card max-w-3xl mx-auto">
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Question {diagnosticStep + 1} / {diagnosticQuestions.length}</span>
                    <span className="font-semibold text-primary-600">
                      {diagnosticQuestions[diagnosticStep].pillar}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-600 to-accent-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((diagnosticStep + 1) / diagnosticQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-primary-900 mb-8">
                  {diagnosticQuestions[diagnosticStep].question}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Pas du tout", value: 0, color: "red" },
                    { label: "Un peu", value: 1, color: "orange" },
                    { label: "Plutôt oui", value: 2, color: "blue" },
                    { label: "Tout à fait", value: 3, color: "green" }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleDiagnosticAnswer(option.value)}
                      className={`p-6 rounded-lg border-2 hover:shadow-lg transition-all duration-200 ${
                        option.color === 'green' ? 'border-green-300 hover:border-green-500 hover:bg-green-50' :
                        option.color === 'blue' ? 'border-blue-300 hover:border-blue-500 hover:bg-blue-50' :
                        option.color === 'orange' ? 'border-orange-300 hover:border-orange-500 hover:bg-orange-50' :
                        'border-red-300 hover:border-red-500 hover:bg-red-50'
                      }`}
                    >
                      <div className="text-3xl mb-2">
                        {option.value === 3 ? '😊' : option.value === 2 ? '🙂' : option.value === 1 ? '😐' : '😕'}
                      </div>
                      <div className="font-semibold">{option.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto">
                <div className="card text-center">
                  <div className="text-6xl mb-6">
                    {calculateScore() >= 75 ? '🎉' : calculateScore() >= 50 ? '👍' : '💪'}
                  </div>
                  <div className="text-5xl font-bold text-gradient mb-4">
                    {calculateScore()}%
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    {getRecommendation(calculateScore()).title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    {getRecommendation(calculateScore()).message}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={resetDiagnostic} className="btn-secondary">
                      Refaire le diagnostic
                    </button>
                    <a href="#candidature" className="btn-accent">
                      Démarrer ma candidature
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Le processus d'adhésion */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Le processus d'adhésion
            </h2>
            <p className="text-xl text-gray-700">
              Une démarche claire et progressive, de 2 à 4 mois
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "Étape 1-2",
                title: "Découverte",
                duration: "1 semaine",
                icon: "📚",
                actions: ["Demande d'information", "Réception du guide complet", "Première appropriation"]
              },
              {
                step: "Étape 3",
                title: "Auto-évaluation",
                duration: "2-3 semaines",
                icon: "📊",
                actions: ["Auto-diagnostic sur les 7 piliers", "Identification de vos forces", "Réflexion sur les axes d'amélioration"]
              },
              {
                step: "Étape 4",
                title: "Candidature",
                duration: "2-3 semaines",
                icon: "✍️",
                actions: ["Rédaction de votre dossier", "Présentation de vos engagements", "Soumission via le formulaire"]
              },
              {
                step: "Étape 5",
                title: "Échange",
                duration: "1-2 semaines",
                icon: "💬",
                actions: ["Discussion avec Altius Trust", "Clarifications et approfondissements", "Validation de la cohérence"]
              },
              {
                step: "Étape 6",
                title: "Labellisation",
                duration: "Immédiat",
                icon: "🏆",
                actions: ["Obtention du Label", "Réception du kit de communication", "Ajout à l'annuaire"]
              },
              {
                step: "En continu",
                title: "Accompagnement",
                duration: "2 ans",
                icon: "🚀",
                actions: ["Mise en œuvre de votre plan d'action", "Suivi et conseils réguliers", "Préparation du renouvellement"]
              }
            ].map((phase, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl mb-4">{phase.icon}</div>
                <div className="text-sm font-semibold text-primary-600 mb-2">{phase.step}</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">{phase.title}</h3>
                <div className="inline-block px-3 py-1 bg-blue-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                  ⏱️ {phase.duration}
                </div>
                <ul className="text-left space-y-2">
                  {phase.actions.map((action, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-primary-500 mt-0.5">•</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Tarifs et modalités
            </h2>
            <p className="text-xl text-gray-700">
              Un investissement adapté à la taille de votre cabinet
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Petit cabinet",
                size: "1-5 avocats",
                price: "2 500€",
                features: [
                  "Guide complet du référentiel",
                  "Outils d'auto-évaluation",
                  "Échange de validation",
                  "Obtention du Label (2 ans)",
                  "Kit de communication",
                  "Visibilité sur le site",
                  "Accompagnement email"
                ]
              },
              {
                name: "Cabinet moyen",
                size: "6-20 avocats",
                price: "4 500€",
                popular: true,
                features: [
                  "Tout du tarif Petit cabinet",
                  "Atelier de lancement (2h)",
                  "2 points d'étape téléphoniques",
                  "Feedback détaillé sur candidature",
                  "Accès ressources exclusives",
                  "Newsletter Label Confiance",
                  "Support prioritaire"
                ]
              },
              {
                name: "Grand cabinet",
                size: "20+ avocats",
                price: "Sur devis",
                features: [
                  "Tout du tarif Cabinet moyen",
                  "Accompagnement personnalisé",
                  "Ateliers sur mesure",
                  "Suivi trimestriel dédié",
                  "Formation des équipes RH",
                  "Reporting et KPIs",
                  "Hotline dédiée"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`card ${plan.popular ? 'border-2 border-accent-500 shadow-2xl' : ''}`}>
                {plan.popular && (
                  <div className="bg-accent-500 text-white text-center py-2 -mt-6 -mx-6 mb-6 rounded-t-xl font-semibold">
                    ⭐ Le plus populaire
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">{plan.name}</h3>
                  <div className="text-gray-600 mb-4">{plan.size}</div>
                  <div className="text-4xl font-bold text-gradient">{plan.price}</div>
                  <div className="text-sm text-gray-500 mt-1">HT / 2 ans</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#candidature" className={plan.popular ? 'btn-accent w-full text-center block' : 'btn-primary w-full text-center block'}>
                  Choisir ce tarif
                </a>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
              <span>💡</span> Ce qui est inclus
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-primary-600">✓</span>
                <span>Accès à vie aux ressources</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-600">✓</span>
                <span>Label valable 2 ans</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-600">✓</span>
                <span>Renouvellement simplifié</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-600">✓</span>
                <span>Facilités de paiement possibles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de candidature */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50" id="candidature">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-6">
                Formulaire de candidature
              </h2>
              <p className="text-xl text-gray-700">
                Démarrez votre parcours vers le Label Confiance
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom du cabinet *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={formData.cabinetName}
                    onChange={(e) => setFormData({...formData, cabinetName: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom du contact *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre d'avocats *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={formData.numberOfLawyers}
                      onChange={(e) => setFormData({...formData, numberOfLawyers: e.target.value})}
                    >
                      <option value="">Sélectionnez</option>
                      <option value="1-5">1-5 avocats</option>
                      <option value="6-10">6-10 avocats</option>
                      <option value="11-20">11-20 avocats</option>
                      <option value="21-50">21-50 avocats</option>
                      <option value="50+">Plus de 50 avocats</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ville *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Domaines de spécialité
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Droit des affaires, Droit social..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={formData.specialties}
                      onChange={(e) => setFormData({...formData, specialties: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Qu'est-ce qui vous motive à obtenir le Label Confiance ? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                    placeholder="Partagez vos motivations et objectifs..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quelles actions avez-vous déjà mises en place dans votre cabinet ?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={formData.currentActions}
                    onChange={(e) => setFormData({...formData, currentActions: e.target.value})}
                    placeholder="Décrivez vos initiatives existantes..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quel type d'accompagnement souhaitez-vous ?
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={formData.expectedSupport}
                    onChange={(e) => setFormData({...formData, expectedSupport: e.target.value})}
                    placeholder="Conseils, formation, audit..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" required className="mt-1" id="rgpd" />
                  <label htmlFor="rgpd" className="text-sm text-gray-600">
                    J'accepte que mes données soient utilisées dans le cadre de ma candidature au Label Confiance,
                    conformément à la <Link href="/confidentialite" className="text-primary-600 underline">politique de confidentialité</Link>.
                  </label>
                </div>

                <button type="submit" className="btn-accent w-full text-lg py-4">
                  Soumettre ma candidature
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Nous vous répondrons dans les 48 heures
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Ressources */}
      <section className="section-padding bg-white" id="auto-questionnaires">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Ressources à télécharger
            </h2>
            <p className="text-xl text-gray-700">
              Des outils pour vous accompagner dans votre démarche
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "📕", title: "Guide complet", desc: "Référentiel détaillé (PDF)", size: "2.5 MB" },
              { icon: "📊", title: "Auto-questionnaires", desc: "Les 7 piliers (Excel)", size: "850 KB" },
              { icon: "📋", title: "Modèles de plan d'action", desc: "Templates personnalisables (Word)", size: "420 KB" },
              { icon: "✨", title: "Bonnes pratiques", desc: "Exemples concrets (PDF)", size: "1.8 MB" }
            ].map((resource, index) => (
              <div key={index} className="card text-center group cursor-pointer">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{resource.icon}</div>
                <h3 className="font-bold text-primary-900 mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{resource.desc}</p>
                <div className="text-xs text-gray-500 mb-4">{resource.size}</div>
                <button className="btn-secondary text-sm w-full">
                  Télécharger
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Des questions avant de vous lancer ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Notre équipe est là pour vous accompagner et répondre à toutes vos interrogations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl">
              Nous contacter
            </Link>
            <Link href="/le-label#faq" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300">
              Voir la FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
