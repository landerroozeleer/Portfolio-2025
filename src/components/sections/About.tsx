import {RevealOnScroll} from "../RevealOnScroll.tsx";

export const About = () => {

    const frontendSkills = ["React", "Typescript", "TailwindCSS", "Next.js"];
    const creativeSkills = ["Figma", "Illustrator", "Photoshop", "After Effects"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">What really drives me is the mix of creativity and logic that front-end development offers, especially when it comes to building user-friendly, responsive experiences. I'm a big believer in teamwork, and I thrive in environments where collaboration, communication, and a good sense of humor are part of the process.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3
                                rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)]">{tech}</span>))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Creative</h3>
                            <div className="flex flex-wrap gap-2">
                                {creativeSkills.map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3
                                rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)]">{tech}</span>))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Bachelor's in Digital Communication and Multimedia </strong>- Erasmus Brussels (2015 - 2020)
                            </li>
                            <li>
                                <strong>Minor in Virtual Reality</strong> - Fontys University of Applied Sciences (2017 - 2018)
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Front-end Developer at Bizzmine (Sep 2023 - April 2025)</h4>
                                <p>Enhancing Saas QHSE-technology to better align with customer needs.</p>
                                <br/>
                                <h4 className="font-semibold">Web Developer Consultant at Appeel.io (April 2022 - April 2023)</h4>
                                <p>Consultant as Lead developer on a SaaS platform.</p>
                                <br />
                                <h4 className="font-semibold">Web Designer & Front-end Developer at Green Island (Sep 2020 - April 2022)</h4>
                                <p>Worked on the enhancement of their SaaS platform and redesigning.</p>
                                <br />
                                <h4 className="font-semibold">Front-end Developer at 3D Aim Trainer (Nov 2019 - July 2020)</h4>
                                <p>Migrated a legacy WordPress website to a modern React-based architecture.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}