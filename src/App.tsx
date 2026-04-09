import { useState } from 'react';
import { Network, Bot, CheckCircle2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { translations, Language } from './i18n';

function App() {
  const [lang, setLang] = useState<Language>('pl');
  const t = translations[lang];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-background font-body text-on-surface selection:bg-surface-variant">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-surface-variant/50">
        <nav className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
          <div className="text-2xl font-bold tracking-tighter text-primary">NEXOTRADE</div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-primary font-bold border-b-2 border-primary font-headline text-sm tracking-tight transition-colors" href="#">{t.nav.services}</a>
            <a className="text-on-surface-variant hover:text-primary font-headline text-sm font-medium tracking-tight transition-colors" href="#services">{t.nav.automation}</a>
            <a className="text-on-surface-variant hover:text-primary font-headline text-sm font-medium tracking-tight transition-colors" href="#">{t.nav.caseStudies}</a>
            <a className="text-on-surface-variant hover:text-primary font-headline text-sm font-medium tracking-tight transition-colors" href="#about-us">{t.nav.aboutUs}</a>
            <a className="text-on-surface-variant hover:text-primary font-headline text-sm font-medium tracking-tight transition-colors" href="#contact">{t.nav.contact}</a>
            
            {/* Lang Dropdown */}
            <div className="relative group flex items-center gap-1 cursor-pointer ml-4">
              <Globe className="w-4 h-4 text-primary" />
              <span className="font-bold text-sm text-primary uppercase">{lang}</span>
              <div className="absolute top-full right-0 mt-2 bg-white shadow-xl rounded-lg py-2 border border-outline-variant/30 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                {(['pl', 'en', 'ru'] as Language[]).map(l => (
                  <button 
                    key={l} 
                    onClick={() => setLang(l)}
                    className="block w-full text-left px-6 py-2 text-sm font-bold uppercase hover:bg-surface-container-low transition-colors"
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32">
          <div className="max-w-7xl mx-auto px-8 editorial-grid">
            <motion.div 
              className="col-span-12 lg:col-span-7 z-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-tertiary font-label text-sm font-bold tracking-widest uppercase mb-6 block">{t.hero.eyebrow}</span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary leading-[1.1] mb-8">
                {t.hero.title}
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                {t.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  {t.hero.ctaPrimary}
                </button>
                <button 
                  onClick={() => document.getElementById('global-reach')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-surface-container-highest transition-colors"
                >
                  {t.hero.ctaSecondary}
                </button>
              </div>
            </motion.div>
            <motion.div 
              className="absolute right-0 top-0 w-1/2 h-full hidden lg:block opacity-20 lg:opacity-100"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="w-full h-full bg-surface-container-low rounded-bl-[10rem] overflow-hidden">
                <img 
                  alt={t.hero.imageAlt} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_R64ZAv6ZijdKKp3P0mdSW8Dv36xAaSHOVrDNt6KBbCXPaFE4l1muLYeOXPV23Am6VTo_QrwwFIH3BbGzWTkwNaqd3ltQU2nRlVb7QNua8oGIHeMJSwUTowH7wi7gC5-0ExWUbbW2F6XM_yzAU9X7X-jF_nQH9_A1YHZBeJ9stXpZcmwkShuJtQ1mhqjTZIM7nXGyaClibaoBQtBZTmjdIBADnT108EydHpSA--gJm4fe2uwGKTry1n--GCxoGuzg5RppQ8i-PG4" 
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="data-flow-divider mx-auto w-3/4"></div>

        {/* About Us Section */}
        <section id="about-us" className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div className="flex-1" {...fadeIn}>
                <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary mb-6">{t.about.title}</h2>
                <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                  <p>{t.about.p1}</p>
                  <p>{t.about.p2}</p>
                </div>
              </motion.div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                <motion.div 
                  className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_24px_48px_rgba(25,28,30,0.06)] hover:bg-primary-fixed transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-primary font-headline text-4xl font-extrabold mb-2">99%</div>
                  <div className="text-on-surface-variant group-hover:text-primary transition-colors">{t.about.stat1}</div>
                </motion.div>
                <motion.div 
                  className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_24px_48px_rgba(25,28,30,0.06)] hover:bg-primary-fixed transition-all group mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="text-primary font-headline text-4xl font-extrabold mb-2">15+</div>
                  <div className="text-on-surface-variant group-hover:text-primary transition-colors">{t.about.stat2}</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div className="text-center mb-20" {...fadeIn}>
              <span className="text-tertiary font-label text-sm font-bold tracking-widest uppercase mb-4 block">{t.services.eyebrow}</span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-primary">{t.services.title}</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service Card 1 */}
              <motion.div 
                className="bg-surface-container-lowest p-10 rounded-xl transition-all hover:scale-[1.02] hover:bg-primary-fixed group relative overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="relative z-10">
                  <Network className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">{t.services.s1Title}</h3>
                  <p className="text-on-surface-variant mb-8 text-lg">{t.services.s1Desc}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-on-secondary-fixed-variant">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {t.services.s1Check1}
                    </li>
                    <li className="flex items-center gap-3 text-on-secondary-fixed-variant">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {t.services.s1Check2}
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Service Card 2 */}
              <motion.div 
                className="bg-surface-container-lowest p-10 rounded-xl transition-all hover:scale-[1.02] hover:bg-primary-fixed group relative overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative z-10">
                  <Bot className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">{t.services.s2Title}</h3>
                  <p className="text-on-surface-variant mb-8 text-lg">{t.services.s2Desc}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-on-secondary-fixed-variant">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {t.services.s2Check1}
                    </li>
                    <li className="flex items-center gap-3 text-on-secondary-fixed-variant">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {t.services.s2Check2}
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section id="global-reach" className="py-32 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div className="mb-16" {...fadeIn}>
              <h2 className="font-headline text-4xl font-extrabold text-primary mb-6">{t.reach.title}</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl">
                {t.reach.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { title: t.reach.regions.cz, stores: ['Alza.cz', 'Allegro', 'Kaufland'] },
                { title: t.reach.regions.sk, stores: ['Alza.sk', 'Mall.sk', 'Allegro', 'Kaufland'] },
                { title: t.reach.regions.hu, stores: ['eMag'] },
                { title: t.reach.regions.si, stores: ['Mimovrste', 'Bigbang'] },
                { title: t.reach.regions.baltic, stores: ['Pigu'] },
                { title: t.reach.regions.fi, stores: ['Pigu', 'CDON'] },
                { title: t.reach.regions.scandi, stores: ['CDON'] },
                { title: t.reach.regions.nl, stores: ['Zalando', 'BOL', 'Amazon', 'Vente-Unique'] },
                { title: t.reach.regions.be, stores: ['BOL', 'Amazon', 'Vente-Unique'] },
                { title: t.reach.regions.fr, stores: ['Leroy Merlin', 'Cdiscount', 'ManoMano', 'Amazon', 'RUE', 'Vente-Unique'] },
                { title: t.reach.regions.de, stores: ['Kaufland', 'Zalando', 'ManoMano', 'Amazon', 'XXXLUTZ', 'Vente-Unique'] },
                { title: t.reach.regions.it, stores: ['ManoMano', 'Amazon', 'Vente-Unique'] },
                { title: t.reach.regions.ro, stores: ['Altex', 'eMag', 'Skroutz'] },
                { title: t.reach.regions.gr, stores: ['Skroutz'] },
                { title: t.reach.regions.es, stores: ['Amazon'] },
              ].map((region, idx) => (
                <motion.div 
                  key={region.title}
                  className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30 hover:border-primary/30 transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <h3 className="font-bold text-primary mb-3 flex items-center gap-2 text-sm">{region.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {region.stores.map(store => (
                      <span key={store} className="px-3 py-1 bg-white text-xs font-semibold rounded-lg border border-outline-variant/60 shadow-sm">{store}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
              <motion.div 
                className="p-6 bg-primary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 15 * 0.05 }}
              >
                <h3 className="font-bold text-primary mb-3 flex items-center gap-2 text-sm">{t.reach.regions.eu}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-lg shadow-sm">ALIEXPRESS</span>
                  <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-lg shadow-sm">Temu</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-32 bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div 
              className="bg-surface-container-lowest p-12 rounded-xl shadow-[0px_24px_48px_rgba(25,28,30,0.06)]"
              {...fadeIn}
            >
              <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-extrabold text-primary mb-4">{t.contact.title}</h2>
                <p className="text-on-surface-variant">{t.contact.description}</p>
              </div>
              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const message = formData.get('message');
                  window.location.href = `mailto:nexotrade111@gmail.com?subject=${encodeURIComponent(t.contact.mailSubject + ' ' + name)}&body=${encodeURIComponent(message + '\n\n' + t.contact.mailBodyFrom + email)}`;
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-on-surface mb-2">{t.contact.name}</label>
                    <input name="name" required className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest focus:outline-none transition-all" placeholder={t.contact.namePlaceholder} type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-on-surface mb-2">{t.contact.email}</label>
                    <input name="email" required className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest focus:outline-none transition-all" placeholder={t.contact.emailPlaceholder} type="email" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-2">{t.contact.message}</label>
                  <textarea name="message" required className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest focus:outline-none transition-all resize-none" placeholder={t.contact.messagePlaceholder} rows={4}></textarea>
                </div>
                <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 active:scale-[0.99] transition-all" type="submit">
                  {t.contact.submit}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest py-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold text-primary mb-4">Algorithmic Architect</div>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-on-surface text-sm mb-2">{t.footer.company}</h4>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href="#about-us">{t.nav.aboutUs}</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href="#">{t.nav.caseStudies}</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href="#contact">{t.nav.contact}</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-outline-variant/50">
          <p className="text-on-surface-variant text-sm text-center md:text-left">© {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
