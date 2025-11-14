import Container from './ui/Container'
import Button from './ui/Button'
import Pill from './ui/Pill'
import { motion } from 'framer-motion'
import avatar from '/assets/profile.jpeg'
import AvatarHex from './ui/AvatarHex'

export default function Hero() {
  return (
    <Container id="home" className="relative py-12">
      <div className="mx-auto max-w-6xl rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl" style={{ borderRadius: '28px' }}>
        <div className="relative bg-black/55 backdrop-blur-sm p-10 lg:p-16">

          <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10">

            {/* LEFT SIDE CONTENT */}
            <div className="lg:col-span-2">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
              >
                Hi, I’m <span className="text-amber-400">Dilshad</span> 👋
              </motion.h1>

              <p className="mt-4 text-white/80 text-lg max-w-xl">
                Software Developer — Java • Web • Cloud • ML. I build secure, scalable and intelligent applications.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact" className="bg-amber-500 hover:bg-amber-600 text-black">
                  Contact Me
                </Button>

                <Button variant="ghost" href="/dil-resume.pdf" download>
                  Download Resume
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE – AVATAR + STATS */}
            <div className="flex justify-center lg:justify-end items-start">
              <div className="w-full max-w-[320px] space-y-6">

                {/* PHOTO HERE — 300px HEX SHAPE */}
                <div className="mx-auto" style={{ width: 300, height: 300 }}>
                  <AvatarHex src={avatar} size={300} alt="Dilshad" />
                </div>

                {/* QUICK STATS CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white shadow"
                >
                  <h3 className="font-semibold text-white">Quick Stats</h3>
                  <ul className="mt-3 text-sm text-white/80 space-y-2">
                    <li>• 3 production-grade full-stack projects</li>
                    <li>• ML + Security domain exposure</li>
                    <li>• Cloud deployments on AWS</li>
                    <li>• Enterprise experience (KeyBank)</li>
                  </ul>
                </motion.div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </Container>
  )
}
