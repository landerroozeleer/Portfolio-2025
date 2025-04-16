import {RevealOnScroll} from "../RevealOnScroll.tsx";
import emailjs from 'emailjs-com';
import {useState} from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    // @ts-expect-error to be fixed
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then(() => {
            alert("Email sent successfully.")
        }).catch(() => alert("Email sent failed"));
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className={"px-4 sm:w-100 md:w-150"}>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Let's get in touch!
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" name="name" required value={formData.name}  className="w-full bg-white/5 border
                            border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500
                            focus:bg-blue-500/5" placeholder='John Doe' onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                        </div>
                        <div className="relative">
                            <input type="email" id="email" name="email" required value={formData.email} className="w-full bg-white/5 border
                            border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500
                            focus:bg-blue-500/5" placeholder='john.doe@example.com' onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                        </div>
                        <div className="relative">
                            <textarea id="message" name="message" rows={5} required value={formData.message} className="w-full bg-white/5 border
                            border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500
                            focus:bg-blue-500/5" placeholder='Your message...' onChange={(e) => setFormData({...formData, message: e.target.value})}/>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] cursor-pointer">
                            Send
                        </button>
                    </form>
                </div>
                <div className="text-center mt-8">
                    <a href="https://www.linkedin.com/in/lander-roozeleer/" target="_blank" className="text-lg font-bold mb-2 mx-auto">Or find me on <span className="text-blue-500">LinkedIn</span>.</a>
                </div>
            </RevealOnScroll>
        </section>
    )
}