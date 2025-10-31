'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function LeLabel() {
  const [activePillar, setActivePillar] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const pillars = [
    {
      icon: "👥",
      title: "Relations humaines et communication interne",
      description: "Construire un environnement de travail où la communication est fluide, transparente et bienveillante.",
      enjeux: [
        "Favoriser un climat de confiance et de respect mutuel",
        "Améliorer la cohésion d'équipe",
        "Prévenir les conflits et les tensions",
        "Créer un sentiment d'appartenance"
      ],
      criteres: [
        "Mise en place de canaux de communication internes efficaces",
        "Organisation régulière de réunions d'équipe",
        "Espaces d'échanges informels favorisés",
        "Processus de résolution des conflits défini"
      ],
      bonnesPratiques: [
        "Petit-déjeuners d'équipe mensuels",
        "Plateformes collaboratives (Slack, Teams)",
        "Moments de convivialité réguliers",
        "Formation à la communication non-violente"
      ],
      actions: [
        "Mettre en place une newsletter interne hebdomadaire",
        "Organiser un team building trimestriel",
        "Créer des groupes de travail transversaux",
        "Instaurer des points individuels réguliers"
      ]
    },
    {
      icon: "🎯",
      title: "Management éthique et respectueux",
      description: "Promouvoir un leadership bienveillant qui valorise l'autonomie et la responsabilisation.",
      enjeux: [
        "Développer un management par la confiance",
        "Réduire les situations de micro-management",
        "Prévenir les pratiques managériales toxiques",
        "Favoriser l'empowerment des équipes"
      ],
      criteres: [
        "Formation des managers aux pratiques bienveillantes",
        "Système d'évaluation 360° en place",
        "Charte managériale définie et partagée",
        "Processus d'écoute et de feedback réguliers"
      ],
      bonnesPratiques: [
        "Management par objectifs plutôt que par contrôle",
        "Délégation progressive et accompagnée",
        "Reconnaissance régulière des contributions",
        "Droit à l'erreur valorisé"
      ],
      actions: [
        "Former tous les managers au leadership bienveillant",
        "Mettre en place des entretiens de feedback trimestriels",
        "Créer une charte des pratiques managériales",
        "Instaurer un système de mentorat interne"
      ]
    },
    {
      icon: "💚",
      title: "Bien-être et santé mentale",
      description: "Garantir l'équilibre vie professionnelle/vie personnelle et prévenir les risques psychosociaux.",
      enjeux: [
        "Prévenir le burn-out et l'épuisement professionnel",
        "Améliorer la qualité de vie au travail",
        "Réduire l'absentéisme et le turnover",
        "Créer un environnement de travail sain"
      ],
      criteres: [
        "Politique de gestion du temps et des charges de travail",
        "Dispositifs de soutien psychologique accessibles",
        "Sensibilisation aux RPS (Risques Psycho-Sociaux)",
        "Mesures concrètes pour l'équilibre vie pro/perso"
      ],
      bonnesPratiques: [
        "Droit à la déconnexion respecté",
        "Télétravail flexible proposé",
        "Accès à un psychologue du travail",
        "Activités bien-être (yoga, méditation, sport)"
      ],
      actions: [
        "Instaurer une charte du droit à la déconnexion",
        "Mettre en place une cellule d'écoute psychologique",
        "Organiser des ateliers de gestion du stress",
        "Proposer des horaires flexibles"
      ]
    },
    {
      icon: "🌈",
      title: "Inclusion, diversité et égalité",
      description: "Garantir un environnement inclusif où chacun peut s'épanouir quelle que soit son identité.",
      enjeux: [
        "Lutter contre toutes formes de discrimination",
        "Favoriser la diversité des profils",
        "Garantir l'égalité des chances et des traitements",
        "Créer un environnement safe et inclusif"
      ],
      criteres: [
        "Politique diversité et inclusion formalisée",
        "Processus de recrutement non-discriminant",
        "Égalité salariale femmes-hommes garantie",
        "Formation aux biais inconscients"
      ],
      bonnesPratiques: [
        "Recrutement à CV anonyme",
        "Parité dans les instances dirigeantes",
        "Référent harcèlement désigné",
        "Célébration de la diversité des cultures"
      ],
      actions: [
        "Réaliser un audit de l'égalité professionnelle",
        "Former tous les collaborateurs aux stéréotypes",
        "Mettre en place un baromètre diversité annuel",
        "Créer un réseau de référents égalité"
      ]
    },
    {
      icon: "⭐",
      title: "Reconnaissance, évolution et sens",
      description: "Valoriser les contributions, accompagner les parcours et donner du sens au travail.",
      enjeux: [
        "Retenir les talents et limiter le turnover",
        "Développer les compétences en continu",
        "Donner de la perspective et du sens",
        "Reconnaître la valeur de chaque contribution"
      ],
      criteres: [
        "Système de reconnaissance formalisé",
        "Plan de formation ambitieux et personnalisé",
        "Parcours d'évolution clairement définis",
        "Entretiens de carrière réguliers"
      ],
      bonnesPratiques: [
        "Budget formation généreux (>1% masse salariale)",
        "Mobilité interne encouragée",
        "Système de primes au mérite transparent",
        "Célébration des réussites collectives"
      ],
      actions: [
        "Créer un parcours d'intégration structuré",
        "Instaurer des entretiens de carrière annuels",
        "Mettre en place un programme de formation continue",
        "Développer un système de reconnaissance pair-à-pair"
      ]
    },
    {
      icon: "🌍",
      title: "Engagement sociétal et éthique professionnelle",
      description: "Affirmer vos valeurs et votre responsabilité vis-à-vis de la société.",
      enjeux: [
        "Incarner des valeurs fortes et cohérentes",
        "Contribuer positivement à la société",
        "Renforcer l'attractivité du cabinet",
        "Donner du sens à l'activité professionnelle"
      ],
      criteres: [
        "Politique RSE/ESG définie et suivie",
        "Actions pro bono ou d'intérêt général",
        "Démarche environnementale engagée",
        "Charte éthique formalisée"
      ],
      bonnesPratiques: [
        "Programme pro bono structuré",
        "Partenariats avec des associations",
        "Politique de réduction de l'empreinte carbone",
        "Mécénat de compétences encouragé"
      ],
      actions: [
        "Formaliser une politique RSE ambitieuse",
        "Allouer X heures/an par avocat au pro bono",
        "Réaliser un bilan carbone du cabinet",
        "Créer un comité éthique et RSE"
      ]
    },
    {
      icon: "🤝",
      title: "Relations avec clients et partenaires",
      description: "Cultiver l'excellence relationnelle et la transparence dans tous vos échanges.",
      enjeux: [
        "Renforcer la satisfaction et la fidélité clients",
        "Se différencier par la qualité de service",
        "Construire des partenariats durables",
        "Incarner les valeurs du Label auprès de l'externe"
      ],
      criteres: [
        "Charte de relation client formalisée",
        "Processus de mesure de satisfaction",
        "Transparence tarifaire et communication claire",
        "Démarche d'amélioration continue"
      ],
      bonnesPratiques: [
        "Enquêtes de satisfaction régulières",
        "Processus de traitement des réclamations",
        "Communication proactive et transparente",
        "Événements clients pour renforcer les liens"
      ],
      actions: [
        "Mettre en place un questionnaire de satisfaction annuel",
        "Former les équipes à l'excellence relationnelle",
        "Créer une charte de relation client",
        "Organiser des événements clients trimestriels"
      ]
    }
  ]

  const steps = [
    {
      number: "1",
      title: "S'approprier",
      description: "Recevez le guide complet du Label Confiance",
      duration: "1 semaine",
      icon: "📚"
    },
    {
      number: "2",
      title: "S'évaluer",
      description: "Auto-positionnement sur les 7 piliers",
      duration: "2-3 semaines",
      icon: "📊"
    },
    {
      number: "3",
      title: "S'engager",
      description: "Rédaction de votre candidature et plan d'action",
      duration: "2-3 semaines",
      icon: "✍️"
    },
    {
      number: "4",
      title: "Agir",
      description: "Mise en œuvre et accompagnement continu",
      duration: "En continu",
      icon: "🚀"
    }
  ]

  const faqItems = [
    {
      category: "Sur la démarche",
      questions: [
        {
          q: "Quelle est la différence entre le Label Confiance et une certification classique ?",
          a: "Le Label Confiance n'est pas une certification normative. C'est une démarche d'accompagnement progressive et bienveillante qui s'adapte à votre contexte. Nous valorisons la sincérité de l'engagement et la progression plutôt que la conformité stricte."
        },
        {
          q: "Combien de temps faut-il pour obtenir le Label ?",
          a: "La durée moyenne est de 2 à 4 mois, selon votre rythme et votre niveau de départ. L'important est de prendre le temps nécessaire pour une démarche authentique et durable."
        },
        {
          q: "Y a-t-il un audit sur site ?",
          a: "Nous privilégions l'échange et le dialogue plutôt que l'audit. Un entretien approfondi avec Altius Trust permet de valider la cohérence entre vos engagements écrits et votre réalité."
        }
      ]
    },
    {
      category: "Sur les critères",
      questions: [
        {
          q: "Faut-il remplir tous les critères pour obtenir le Label ?",
          a: "Non, le référentiel est indicatif et adaptable. Nous attendons une démarche sincère sur l'ensemble des 7 piliers, mais vous pouvez être plus avancé sur certains que sur d'autres. L'important est la trajectoire et la cohérence d'ensemble."
        },
        {
          q: "Comment définissez-vous les '4 valeurs cardinales' ?",
          a: "Sincérité (engagement authentique), Équilibre (approche mesurée sans excès), Authenticité (fidélité à vos valeurs), Progression (amélioration continue). Ces valeurs guident notre évaluation."
        }
      ]
    },
    {
      category: "Sur le coût",
      questions: [
        {
          q: "Quel est le coût du Label ?",
          a: "Le tarif varie selon la taille de votre cabinet (nombre d'avocats). Contactez-nous pour recevoir une proposition personnalisée. Nous proposons également des facilités de paiement."
        },
        {
          q: "Que comprend l'adhésion ?",
          a: "L'accès au guide complet, l'accompagnement à l'auto-évaluation, l'échange avec Altius Trust, l'obtention du Label, le droit d'usage du logo, la visibilité sur notre site, et un accompagnement continu."
        }
      ]
    },
    {
      category: "Sur le renouvellement",
      questions: [
        {
          q: "Quelle est la durée de validité du Label ?",
          a: "Le Label est valable 2 ans. Avant l'échéance, nous échangeons sur vos progrès réalisés pour envisager le renouvellement."
        },
        {
          q: "Que se passe-t-il si notre situation se dégrade ?",
          a: "Nous sommes là pour vous accompagner dans la durée. En cas de difficulté, nous privilégions le dialogue pour comprendre et trouver des solutions. Le retrait du Label n'intervient qu'en dernier recours."
        }
      ]
    },
    {
      category: "Sur la visibilité",
      questions: [
        {
          q: "Comment puis-je valoriser mon Label ?",
          a: "Vous pouvez utiliser le logo sur tous vos supports (site web, signatures email, plaquettes), apparaître dans l'annuaire des cabinets labellisés, et communiquer librement sur votre engagement."
        },
        {
          q: "Le Label m'aide-t-il à recruter ?",
          a: "Oui ! De nombreux cabinets labellisés témoignent d'un impact positif sur leur attractivité auprès des jeunes talents qui sont de plus en plus sensibles à ces enjeux."
        }
      ]
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="gradient-bg text-white pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprendre le Label Confiance
            </h1>
            <p className="text-xl text-blue-100">
              Une démarche innovante pour placer l'humain au cœur de votre cabinet
            </p>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que le Label */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary-900 mb-8">
              Qu'est-ce que le Label Confiance ?
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Le Label Confiance est le premier label dédié au bien-être et à l'éthique dans les cabinets d'avocats.
                Créé par Altius Trust, il accompagne les cabinets dans une démarche progressive, bienveillante et authentique
                pour placer l'humain au cœur de leur organisation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                  <span>✅</span> Ce que le Label EST
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Une démarche d'accompagnement bienveillante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Un engagement authentique et progressif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Un référentiel adaptatif et contextualisé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Un outil de valorisation et d'attractivité</span>
                  </li>
                </ul>
              </div>

              <div className="card border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                  <span>❌</span> Ce que le Label N'EST PAS
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Une certification normative rigide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Un audit punitif ou stigmatisant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Une check-list administrative</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Un simple label de façade ("washing")</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">
                Les 4 valeurs cardinales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { emoji: "💎", title: "Sincérité", desc: "Engagement authentique et transparent" },
                  { emoji: "⚖️", title: "Équilibre", desc: "Approche mesurée sans excès ni dogmatisme" },
                  { emoji: "✨", title: "Authenticité", desc: "Fidélité à vos valeurs et votre culture" },
                  { emoji: "📈", title: "Progression", desc: "Amélioration continue et durable" }
                ].map((valeur, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl mb-3">{valeur.emoji}</div>
                    <div className="font-bold text-primary-900 mb-2">{valeur.title}</div>
                    <div className="text-sm text-gray-600">{valeur.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les 7 Piliers Détaillés */}
      <section className="section-padding bg-gray-50" id="piliers">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Les 7 piliers du référentiel
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Cliquez sur chaque pilier pour découvrir les détails
            </p>
          </div>

          <div className="space-y-4 max-w-5xl mx-auto">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setActivePillar(activePillar === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{pillar.icon}</span>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-primary-900">{pillar.title}</h3>
                      <p className="text-gray-600 mt-1">{pillar.description}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      activePillar === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activePillar === index && (
                  <div className="px-8 pb-8 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span>🎯</span> Enjeux
                        </h4>
                        <ul className="space-y-2">
                          {pillar.enjeux.map((item, i) => (
                            <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                              <span className="text-primary-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span>📋</span> Critères indicatifs
                        </h4>
                        <ul className="space-y-2">
                          {pillar.criteres.map((item, i) => (
                            <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                              <span className="text-accent-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span>✨</span> Bonnes pratiques
                        </h4>
                        <ul className="space-y-2">
                          {pillar.bonnesPratiques.map((item, i) => (
                            <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                              <span className="text-success-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                          <span>🚀</span> Pistes d'action
                        </h4>
                        <ul className="space-y-2">
                          {pillar.actions.map((item, i) => (
                            <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* La démarche d'obtention */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              La démarche d'obtention
            </h2>
            <p className="text-xl text-gray-700">
              Un parcours en 4 étapes, simple et progressif
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-500"></div>

              {steps.map((step, index) => (
                <div key={index} className={`mb-12 flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:px-8">
                    <div className="card">
                      <div className="flex items-start gap-4">
                        <div className="text-5xl">{step.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 text-white flex items-center justify-center font-bold">
                              {step.number}
                            </div>
                            <h3 className="text-2xl font-bold text-primary-900">{step.title}</h3>
                          </div>
                          <p className="text-gray-700 mb-3">{step.description}</p>
                          <div className="inline-block px-3 py-1 bg-blue-100 text-primary-700 rounded-full text-sm font-semibold">
                            ⏱️ {step.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-16 h-16 rounded-full bg-white border-4 border-primary-500 shadow-lg flex items-center justify-center z-10">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500"></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Notre accompagnement</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span className="text-gray-700">Accès au guide complet et aux outils d'auto-évaluation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span className="text-gray-700">Échanges réguliers pour répondre à vos questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span className="text-gray-700">Feedback constructif sur votre candidature</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span className="text-gray-700">Suivi dans la durée après l'obtention du Label</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/adherer" className="btn-accent text-lg">
              Démarrer ma candidature
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50" id="faq">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-700">
              Trouvez les réponses à vos questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqItems.map((category, catIndex) => (
              <div key={catIndex} className="mb-10">
                <h3 className="text-2xl font-bold text-primary-900 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.questions.map((item, qIndex) => {
                    const globalIndex = catIndex * 100 + qIndex
                    return (
                      <div key={qIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === globalIndex ? null : globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-primary-900 pr-4">{item.q}</span>
                          <svg
                            className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${
                              openFaq === globalIndex ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openFaq === globalIndex && (
                          <div className="px-6 pb-4 text-gray-700">
                            {item.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 mb-6">Vous avez d'autres questions ?</p>
            <Link href="/contact" className="btn-primary">
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>

      {/* Guide téléchargement */}
      <section className="section-padding gradient-bg text-white" id="guide">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Téléchargez le guide complet
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Recevez immédiatement le référentiel détaillé et les outils d'auto-évaluation
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Votre email professionnel"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
              required
            />
            <button type="submit" className="bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-all duration-300 shadow-xl hover:shadow-2xl whitespace-nowrap">
              Télécharger
            </button>
          </form>
          <p className="text-sm text-blue-200 mt-4">
            Aucune obligation. Vos données restent confidentielles.
          </p>
        </div>
      </section>
    </>
  )
}
