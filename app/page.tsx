/*
VISION3D CREATIF — FULL PORTFOLIO STARTER

HOW TO RUN THE WEBSITE

1. Install Node.js:
https://nodejs.org

2. Create Next.js project:

npx create-next-app@latest vision3d-creatif

Choose:
- TypeScript: No
- ESLint: Yes
- Tailwind: Yes
- App Router: Yes

3. Open project:
cd vision3d-creatif

4. Replace app/page.js with this file.

5. Start website:
npm run dev

6. Open:
http://localhost:3000

HOW TO PUT WEBSITE ONLINE

1. Create GitHub account:
https://github.com

2. Upload project:

git init
git add .
git commit -m "vision3d creatif"

3. Create repository on GitHub.

4. Push project:

git remote add origin YOUR_REPOSITORY_LINK
git push -u origin main

5. Create account on:
https://vercel.com

6. Import GitHub repository.

7. Click Deploy.

Your site becomes live automatically.

FUTURE FEATURES TO ADD
- 3D viewer
- Video upload
- Admin dashboard
- Login system
- Asset store
- Stripe payment
- Download system
- Comments
- Likes
- Analytics

RECOMMENDED FOLDERS
/public/renders
/public/videos
/public/logo
/public/models

IMPORTANT
Replace Unsplash images with your own Blender renders.
*/

export default function Vision3DCreatif() {
  const projects = [
    {
      title: "Cyber City",
      category: "Environment",
      image:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Neon Vehicle",
      category: "Vehicle Design",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Dark Corridor",
      category: "Sci‑Fi Scene",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const assets = [
    "Blender Scenes",
    "3D Models",
    "Textures",
    "Animation Packs",
    "Cinematic LUTs",
    "Wallpapers 4K",
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
  <a href="#home" className="flex items-center gap-3">
    <img
      src="/logo/photo_2026-05-20_15-48-28.jpg"
      alt="Vision3D Creatif"
      className="w-10 h-10 rounded-full hover:scale-110 transition duration-300"
    />

    <h1 className="text-2xl font-bold tracking-[0.3em] uppercase">
      Vision3D Creatif
    </h1>
  </a>
</div>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-zinc-300">
            <a href="#portfolio" className="hover:text-cyan-400 transition">
              Portfolio
            </a>
            <a href="#shop" className="hover:text-cyan-400 transition">
              Shop
            </a>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
  <img
    src="/logo/logo.png"
    alt="Vision3D Logo"
    className="w-[600px] blur-sm"
  />
</div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm tracking-[0.2em] uppercase">
            Blender 3D Artist 
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-none uppercase tracking-tight">
            Vision3D
            <br />
            Creatif
          </h1>

          <p className="mt-8 text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Futuristic renders, cinematic environments, sci‑fi creations,
            immersive animations and digital experiences crafted with Blender.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-2xl transition text-lg shadow-2xl shadow-cyan-500/30">
              Explore Portfolio
            </button>

            <button className="px-8 py-4 border border-white/20 hover:border-cyan-400 hover:text-cyan-300 rounded-2xl transition text-lg backdrop-blur-lg">
              Enter Shop
            </button>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="max-w-7xl mx-auto px-6 py-32">
        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            Featured Work
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase">
            Portfolio
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 hover:border-cyan-500/40 transition"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  className="h-96 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

              <div className="absolute bottom-0 p-6">
                <p className="text-cyan-300 uppercase tracking-widest text-sm mb-2">
                  {project.category}
                </p>

                <h3 className="text-3xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMMERSIVE EXPERIENCE */}
      <section className="relative py-40 border-y border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-6">
            Interactive Universe
          </p>

          <h2 className="text-4xl md:text-7xl font-black uppercase leading-tight">
            Not Just A Portfolio
            <br />
            An Experience
          </h2>

          <p className="mt-8 text-zinc-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Visitors enter a futuristic digital world where every render,
            animation and project becomes part of an immersive cinematic
            journey.
          </p>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
              Digital Store
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase">
              Asset Shop
            </h2>
          </div>

          <p className="text-zinc-400 max-w-xl">
            Sell downloadable Blender projects, cinematic environments,
            textures, animation packs and premium 3D assets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {assets.map((asset, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 p-8 bg-zinc-950 hover:bg-zinc-900 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300 text-2xl mb-6">
                ✦
              </div>

              <h3 className="text-2xl font-bold mb-4">{asset}</h3>

              <p className="text-zinc-400 leading-relaxed">
                Premium downloadable content created for artists, creators and
                studios.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            About The Artist
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">
            Cinematic
            <br />
            Blender Creator
          </h2>

          <p className="text-zinc-300 leading-relaxed text-lg mb-6">
            Vision3D Creatif is a futuristic 3D art studio focused on cinematic
            visuals, immersive environments, science‑fiction concepts and
            high‑quality digital experiences.
          </p>

          <p className="text-zinc-500 leading-relaxed">
            Specialized in Blender, rendering, animation, visual storytelling
            and experimental digital art.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/10 blur-3xl" />

          <div className="relative rounded-[2rem] overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10 py-32 px-6 text-center"
      >
        <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-7xl font-black uppercase leading-tight mb-8">
          Let’s Build
          <br />
          Something Unreal
        </h2>

        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12">
          Available for collaborations, commissions, cinematic projects and 3D
          visual experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black rounded-2xl font-bold transition text-lg shadow-2xl shadow-cyan-500/30">
            Contact Me
          </button>

          <a
  href="https://www.instagram.com/vision_3dcreatif?igsh=MXJnZjFseTNhZ2R5aw%3D%3D&utm_source=qr"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 border border-white/10 hover:border-cyan-400 rounded-2xl transition"
>
  Instagram
</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-zinc-500 text-sm">
        © 2026 Vision3D Creatif — All Rights Reserved.
      </footer>
    </div>
  );
}
