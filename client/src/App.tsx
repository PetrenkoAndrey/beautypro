import { AboutSection } from './components/AboutSection'
import { BookingSection } from './components/BookingSection'
import { Footer } from './components/Footer'
import { GallerySection } from './components/GallerySection'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ReviewsSection } from './components/ReviewsSection'
import { ServicesSection } from './components/ServicesSection'

function App() {
  return (
    <div className="min-h-svh">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <GallerySection />
        <AboutSection />
        <ReviewsSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
