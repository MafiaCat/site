'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cabinet: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.')
    setFormData({
      firstName: '',
      lastName: '',
      cabinet: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const faqs = [
    {
      q: "Quel est le délai de réponse ?",
      a: "Nous nous engageons à vous répondre dans les 48 heures ouvrées."
    },
    {
      q: "Puis-je avoir un rendez-vous téléphonique ?",
      a: "Oui, indiquez-le dans votre message et nous vous proposerons des créneaux."
    },
    {
      q: "Y a-t-il des frais de dossier ?",
      a: "Non, la demande d'information et l'échange initial sont totalement gratuits."
    },
    {
      q: "Proposez-vous des webinaires de présentation ?",
      a: "Oui, nous organisons régulièrement des webinaires gratuits. Contactez-nous pour connaître les prochaines dates."
    },
    {
      q: "Puis-je obtenir le Label si mon cabinet est récent ?",
      a: "Oui, il n'y a pas de condition d'ancienneté. L'important est votre engagement sincère."
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="gradient-bg text-white pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-blue-100">
              Une question ? Parlons-en. Nous sommes là pour vous accompagner.
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire & Informations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulaire */}
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cabinet
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={formData.cabinet}
                    onChange={(e) => setFormData({...formData, cabinet: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Objet de la demande *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="">Sélectionnez un objet</option>
                    <option value="information">Demande d'information sur le Label</option>
                    <option value="candidature">Candidature au Label</option>
                    <option value="referentiel">Question sur le référentiel</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="presse">Presse</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" required className="mt-1" id="consent" />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    J'accepte que mes données soient utilisées pour traiter ma demande, conformément à la{' '}
                    <Link href="/confidentialite" className="text-primary-600 underline">
                      politique de confidentialité
                    </Link>.
                  </label>
                </div>

                <button type="submit" className="btn-accent w-full text-lg py-4">
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Informations de contact */}
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Nos coordonnées
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 mb-1">Email</h3>
                    <a href="mailto:contact@labelconfiance.fr" className="text-primary-600 hover:underline">
                      contact@labelconfiance.fr
                    </a>
                    <p className="text-sm text-gray-600 mt-2">
                      Réponse sous 48h ouvrées
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 mb-1">Téléphone</h3>
                    <a href="tel:+33123456789" className="text-primary-600 hover:underline">
                      +33 1 23 45 67 89
                    </a>
                    <p className="text-sm text-gray-600 mt-2">
                      Du lundi au vendredi, 9h-18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-success-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 mb-1">Adresse</h3>
                    <p className="text-gray-700">
                      Altius Trust<br />
                      123 Avenue des Champs-Élysées<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h3 className="font-bold text-primary-900 mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vous êtes... */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Vous êtes...
            </h2>
            <p className="text-xl text-gray-700">
              Des réponses adaptées à votre profil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="text-6xl mb-6">⚖️</div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Cabinet d'avocats
              </h3>
              <p className="text-gray-700 mb-6">
                Vous souhaitez obtenir le Label Confiance pour votre cabinet ?
              </p>
              <Link href="/adherer" className="btn-accent w-full text-center block">
                Obtenir le Label
              </Link>
            </div>

            <div className="card text-center">
              <div className="text-6xl mb-6">📰</div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Journaliste / Média
              </h3>
              <p className="text-gray-700 mb-6">
                Vous souhaitez en savoir plus sur notre démarche ?
              </p>
              <Link href="/presse" className="btn-primary w-full text-center block">
                Espace presse
              </Link>
            </div>

            <div className="card text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Partenaire potentiel
              </h3>
              <p className="text-gray-700 mb-6">
                Vous envisagez un partenariat avec nous ?
              </p>
              <button className="btn-secondary w-full" onClick={() => {
                const form = document.querySelector('form')
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' })
                  const subjectSelect = document.querySelector('select') as HTMLSelectElement
                  if (subjectSelect) {
                    subjectSelect.value = 'partenariat'
                  }
                }
              }}>
                Discutons-en
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-700">
              Les 5 questions les plus posées
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-primary-900 mb-2 flex items-start gap-2">
                  <span className="text-accent-500">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-gray-700 ml-6">
                  <span className="text-primary-600 font-semibold">R:</span> {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/le-label#faq" className="btn-primary">
              Voir toutes les questions
            </Link>
          </div>
        </div>
      </section>

      {/* Map (placeholder) */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Où nous trouver
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <svg className="w-20 h-20 text-primary-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600">
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
