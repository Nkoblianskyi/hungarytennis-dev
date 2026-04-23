import HeroSection from '@/components/home/HeroSection'
import HistoryPreview from '@/components/home/HistoryPreview'
import TechniquePreview from '@/components/home/TechniquePreview'
import BlogPreview from '@/components/home/BlogPreview'
import QuickLinks from '@/components/home/QuickLinks'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HistoryPreview />
      <QuickLinks />
      <TechniquePreview />
      <BlogPreview />
    </>
  )
}
