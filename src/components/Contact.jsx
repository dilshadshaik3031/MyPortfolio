// src/components/Contact.jsx
import Container from './ui/Container'
import SectionTitle from './ui/SectionTitle'
import Button from './ui/Button'
import emailjs from 'emailjs-com'
import { useState } from 'react'

/*
  EmailJS config
  Service ID: service_xaj2iyz
  Template ID: template_48g3a1v
  Public Key: inserted below
*/
const EMAILJS_SERVICE_ID = 'service_xaj2iyz'
const EMAILJS_TEMPLATE_ID = 'template_48g3a1v'
const EMAILJS_PUBLIC_KEY = 'eE6Z-n8P__XotyThZ' // <- your public key

export default function Contact() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const sendMessage = (e) => {
    e.preventDefault()
    setStatus('')
    setSending(true)

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      e.target,
      EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('Message sent successfully — I will reply soon. ✔')
      setSending(false)
      e.target.reset()
    })
    .catch((err) => {
      console.error('EmailJS error', err)
      setStatus('Sorry — something went wrong. Please try again later.')
      setSending(false)
    })
  }

  return (
    <Container id="contact" className="py-20">
      <SectionTitle label="Contact" sub="Get in touch" />

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 mt-8">

        {/* LEFT SIDE CONTACT INFO */}
        <div className="space-y-6">
          <p className="text-white/80 text-lg leading-relaxed">
            Interested in working together or want to ask a question? Drop a message and I’ll get back to you.
          </p>

          <div className="p-6 rounded-2xl card-dark border border-white/8 space-y-5">
            <div>
              <h4 className="font-semibold text-white">Email</h4>
              <a 
                href="mailto:dilshad@example.com" 
                className="text-white/70 hover:text-amber-400"
              >
                dilshadshaik3031@gmail.com
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-white">Phone</h4>
              <a 
                href="tel:+1234567890" 
                className="text-white/70 hover:text-amber-400"
              >
                +1 (334) 557 4269
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-white">LinkedIn</h4>
              <a 
                href="https://www.linkedin.com/in/dilshad-shaik-43bb4419a" 
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-amber-400"
              >
               https://www.linkedin.com/in/dilshad-shaik-43bb4419a
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-white">GitHub</h4>
              <a 
                href="https://github.com/dilshadshaik3031" 
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-amber-400"
              >
             https://github.com/dilshadshaik3031
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CONTACT FORM */}
        <form onSubmit={sendMessage} className="space-y-4">
          <label className="block">
            <span className="text-white/80">Name</span>
            <input 
              name="name" 
              required
              className="mt-2 block w-full rounded-md p-3 bg-transparent border border-white/10 text-white" 
              placeholder="Your name" 
            />
          </label>

          <label className="block">
            <span className="text-white/80">Email</span>
            <input 
              name="email" 
              type="email" 
              required
              className="mt-2 block w-full rounded-md p-3 bg-transparent border border-white/10 text-white" 
              placeholder="you@example.com" 
            />
          </label>

          <label className="block">
            <span className="text-white/80">Message</span>
            <textarea 
              name="message" 
              required
              className="mt-2 block w-full rounded-md p-3 bg-transparent border border-white/10 text-white h-32" 
              placeholder="How can I help?" 
            />
          </label>

          <div>
            <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-black" disabled={sending}>
              {sending ? 'Sending...' : 'Send message'}
            </Button>
          </div>

          {status && (
            <p className="text-white/70 mt-3">{status}</p>
          )}
        </form>
      </div>
    </Container>
  )
}
