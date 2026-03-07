import RotatingImage from "./components/RotatingImage";

const PROFILE = {
  name: "Griselda Caffarel",
  title: "Sommelier Profesional",
  bio: [
    "Apasionada por el mundo del vino y la gastronomía.",
    "Experiencia en catas, maridajes y asesoramiento personalizado para eventos y restaurantes.",
    "Descubrí el vino perfecto para cada momento.",
  ],
  instagram: "https://www.instagram.com/gricaff.sommelier/",
  instagramHandle: "@gricaff.sommelier",
  email: "Gcaffarel@gmail.com",
  whatsapp: "+5491151553772",
  whatsappMessage: "Hola! Me interesa saber más sobre tus servicios de sommelier.",
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="M2 7l10 6 10-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function WineGlassDecoration() {
  return (
    <svg viewBox="0 0 40 80" fill="none" className="w-6 h-12 opacity-60" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 5 L8 28 Q8 40 20 44 Q32 40 32 28 L32 5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="20" y1="44" x2="20" y2="65" />
      <line x1="10" y1="65" x2="30" y2="65" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const whatsappUrl = `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(PROFILE.whatsappMessage)}`;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <main className="w-full max-w-md flex flex-col items-center gap-8">
        {/* Profile Image */}
        <RotatingImage />

        {/* Name & Title */}
        <div className="text-center space-y-2">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-cream">
            {PROFILE.name}
          </h1>
          <p className="text-gold/80 text-sm uppercase tracking-[0.25em] font-sans font-light">
            {PROFILE.title}
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center gap-3 text-gold/40">
          <div className="h-px w-12 bg-gold/30" />
          <WineGlassDecoration />
          <div className="h-px w-12 bg-gold/30" />
        </div>

        {/* Bio */}
        <div className="text-center space-y-3 px-2">
          {PROFILE.bio.map((line, i) => (
            <p
              key={i}
              className="text-cream/70 text-sm md:text-base leading-relaxed font-sans font-light"
            >
              {line}
            </p>
          ))}
        </div>

        {/* Contact Links */}
        <div className="w-80 space-y-5 mt-4">
          {/* Instagram - Sommelier */}
          <a
            href={PROFILE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 w-full px-6 py-5 rounded-2xl border border-gold/15 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.08] hover:shadow-[0_4px_24px_rgba(114,47,55,0.25)] hover:scale-[1.02]"
            style={{ marginBottom: '10px' }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold/10 text-gold/80 group-hover:bg-gold/20 group-hover:text-gold transition-all">
              <InstagramIcon />
            </div>
            <div className="flex-1">
              <p className="text-cream text-sm font-sans font-semibold tracking-wide">Instagram</p>
              <p className="text-cream/50 text-xs font-sans mt-0.5">{PROFILE.instagramHandle}</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cream/15 group-hover:text-gold/60 group-hover:translate-x-1 transition-all duration-300" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Instagram - Espacio Taninos */}
          <a
            href="https://www.instagram.com/taninos_espacio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 w-full px-6 py-5 rounded-2xl border border-gold/15 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.08] hover:shadow-[0_4px_24px_rgba(114,47,55,0.25)] hover:scale-[1.02]"
            style={{ marginBottom: '10px' }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold/10 text-gold/80 group-hover:bg-gold/20 group-hover:text-gold transition-all">
              <InstagramIcon />
            </div>
            <div className="flex-1">
              <p className="text-cream text-sm font-sans font-semibold tracking-wide">Espacio Taninos</p>
              <p className="text-cream/50 text-xs font-sans mt-0.5">@taninos_espacio</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cream/15 group-hover:text-gold/60 group-hover:translate-x-1 transition-all duration-300" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Email */}
          <a
            href={`mailto:${PROFILE.email}`}
            className="group flex items-center gap-5 w-full px-6 py-5 rounded-2xl border border-gold/15 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.08] hover:shadow-[0_4px_24px_rgba(114,47,55,0.25)] hover:scale-[1.02]"
            style={{ marginBottom: '10px' }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold/10 text-gold/80 group-hover:bg-gold/20 group-hover:text-gold transition-all">
              <EmailIcon />
            </div>
            <div className="flex-1">
              <p className="text-cream text-sm font-sans font-semibold tracking-wide">Email</p>
              <p className="text-cream/50 text-xs font-sans mt-0.5">{PROFILE.email}</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cream/15 group-hover:text-gold/60 group-hover:translate-x-1 transition-all duration-300" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 w-full px-6 py-5 rounded-2xl border border-gold/15 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.08] hover:shadow-[0_4px_24px_rgba(114,47,55,0.25)] hover:scale-[1.02]"
            style={{ marginBottom: '10px' }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold/10 text-gold/80 group-hover:bg-gold/20 group-hover:text-gold transition-all">
              <WhatsAppIcon />
            </div>
            <div className="flex-1">
              <p className="text-cream text-sm font-sans font-semibold tracking-wide">WhatsApp</p>
              <p className="text-cream/50 text-xs font-sans mt-0.5">Enviar mensaje directo</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cream/15 group-hover:text-gold/60 group-hover:translate-x-1 transition-all duration-300" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-center">
          <p className="text-cream/20 text-[11px] font-sans tracking-wider uppercase">
            &copy; {new Date().getFullYear()} &middot; {PROFILE.name}
          </p>
        </footer>
      </main>
    </div>
  );
}
