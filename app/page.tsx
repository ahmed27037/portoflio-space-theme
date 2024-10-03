import Hero from '@/components/main/Hero'
import SoftProjects from '@/components/main/SoftProjects'
import HardwareProjects from '@/components/main/HardProjects'
import Skills from '@/components/main/Skills'

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 items-center justify-center w-full">
        <Hero/> 
        <Skills/>
        <HardwareProjects/>
        <SoftProjects/>
      </div>
    </main>
  )
}
