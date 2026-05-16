import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Product from './components/Product'
import HowItWorks from './components/HowItWorks'
import Values from './components/Values'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Product />
        <HowItWorks />
        <Values />
        <Gallery />
        <Team />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
