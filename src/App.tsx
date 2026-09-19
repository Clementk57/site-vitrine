import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Stack } from './sections/Stack'

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Aller au contenu
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
