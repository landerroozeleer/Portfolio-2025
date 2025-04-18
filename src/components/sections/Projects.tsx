import {RevealOnScroll} from "../RevealOnScroll.tsx";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md-grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Reffurence</h3>
                        <p className="text-gray-400 mb-4">An annual convention which takes place in the BeNeLux, Europe. We come together to celebrate the furry fandom, which includes art, literature and performances based around anthropomorphic animals.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "TailwindCSS", "Next.js", "Typescript"].map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3
                                rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)]">{tech}</span>))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a target="_blank" href="https://reffurence.com" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                        </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Hall of Famous</h3>
                        <p className="text-gray-400 mb-4">FamousGrey launched the “Hall Of Famous” concept, an online auction with the look and feel of a real art gallery. On this website, clients, people from the advertising world and other interested parties alike can find various iconic items from FamousGrey's past campaigns.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Typescript"].map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3
                                rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)]">{tech}</span>))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a target="_blank" href="https://pub.be/nl/famousgrey-veilt-zichzelf-voor-kom-op-tegen-kanker/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
                </div>
        </div>
            </RevealOnScroll>
        </section>
    );
};