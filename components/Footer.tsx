import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Colonne 1: Le Label */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gradient-white">Le Label</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/le-label" className="text-gray-300 hover:text-white transition-colors">
                  Qu'est-ce que le Label ?
                </Link>
              </li>
              <li>
                <Link href="/le-label#piliers" className="text-gray-300 hover:text-white transition-colors">
                  Les 7 piliers
                </Link>
              </li>
              <li>
                <Link href="/adherer" className="text-gray-300 hover:text-white transition-colors">
                  Adhérer
                </Link>
              </li>
              <li>
                <Link href="/cabinets-labellises" className="text-gray-300 hover:text-white transition-colors">
                  Cabinets labellisés
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 2: Ressources */}
          <div>
            <h3 className="text-xl font-bold mb-6">Ressources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/le-label#guide" className="text-gray-300 hover:text-white transition-colors">
                  Guide complet (PDF)
                </Link>
              </li>
              <li>
                <Link href="/adherer#auto-questionnaires" className="text-gray-300 hover:text-white transition-colors">
                  Auto-questionnaires
                </Link>
              </li>
              <li>
                <Link href="/le-label#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Altius Trust */}
          <div>
            <h3 className="text-xl font-bold mb-6">Altius Trust</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-gray-300 hover:text-white transition-colors">
                  Notre mission
                </Link>
              </li>
              <li>
                <Link href="/valeurs" className="text-gray-300 hover:text-white transition-colors">
                  Nos valeurs
                </Link>
              </li>
              <li>
                <Link href="/presse" className="text-gray-300 hover:text-white transition-colors">
                  Espace presse
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Légal & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Légal</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link href="/mentions-legales" className="text-gray-300 hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-gray-300 hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgu" className="text-gray-300 hover:text-white transition-colors">
                  CGU
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors">
                  Gestion des cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-primary-700">
          <div className="max-w-md">
            <h3 className="text-lg font-bold mb-4">Restez informé</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Recevez nos actualités et nos conseils pour un cabinet plus humain
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <button type="submit" className="btn-accent whitespace-nowrap">
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} Label Confiance - Tous droits réservés
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
