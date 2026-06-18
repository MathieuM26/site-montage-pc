import { createFileRoute } from "@tanstack/react-router";
import heroPc from "@/assets/hero-pc.jpg";
import {
  Cpu,
  HardDrive,
  MemoryStick,
  Fan,
  Zap,
  CircuitBoard,
  Box,
  Monitor,
  Wrench,
  ShieldCheck,
  Truck,
  Check,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEONFORGE — Montage PC sur mesure & configurations gaming" },
      {
        name: "description",
        content:
          "Configurations PC gaming et créateurs pré-montées par des experts. Montage professionnel à 200€, garantie 2 ans, livraison en France.",
      },
      { property: "og:title", content: "NEONFORGE — Montage PC sur mesure" },
      {
        property: "og:description",
        content:
          "PC gaming pré-configurés et montage pro à 200€ tout compris.",
      },
    ],
  }),
  component: Index,
});

type Component = { icon: typeof Cpu; label: string; value: string };
type Config = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  badge?: string;
  highlight?: boolean;
  perf: { game: string; res: string; fps: string };
  components: Component[];
};

const configs: Config[] = [
  {
    id: "starter",
    name: "Forge Starter",
    tagline: "L'entrée en matière. eSport et 1080p haut framerate.",
    price: 999,
    perf: { game: "Valorant · CS2 · Fortnite", res: "1080p", fps: "240+ FPS" },
    components: [
      { icon: Cpu, label: "Processeur", value: "AMD Ryzen 5 7600" },
      { icon: CircuitBoard, label: "Carte mère", value: "MSI B650M PRO" },
      { icon: Monitor, label: "Carte graphique", value: "RTX 4060 8 Go" },
      { icon: MemoryStick, label: "Mémoire", value: "32 Go DDR5 6000 MHz" },
      { icon: HardDrive, label: "Stockage", value: "1 To NVMe Gen4" },
      { icon: Zap, label: "Alimentation", value: "650W 80+ Gold" },
      { icon: Fan, label: "Refroidissement", value: "AIO 240mm ARGB" },
      { icon: Box, label: "Boîtier", value: "Lian Li Lancool 216 verre" },
    ],
  },
  {
    id: "gamer",
    name: "Forge Apex",
    tagline: "La référence gaming. 1440p ultra sans compromis.",
    price: 1799,
    badge: "Plus populaire",
    highlight: true,
    perf: { game: "Cyberpunk · Warzone · BG3", res: "1440p", fps: "144+ FPS" },
    components: [
      { icon: Cpu, label: "Processeur", value: "AMD Ryzen 7 7800X3D" },
      { icon: CircuitBoard, label: "Carte mère", value: "ASUS TUF B650-Plus WiFi" },
      { icon: Monitor, label: "Carte graphique", value: "RTX 4070 SUPER 12 Go" },
      { icon: MemoryStick, label: "Mémoire", value: "32 Go DDR5 6000 CL30" },
      { icon: HardDrive, label: "Stockage", value: "2 To NVMe Gen4" },
      { icon: Zap, label: "Alimentation", value: "850W 80+ Gold modulaire" },
      { icon: Fan, label: "Refroidissement", value: "AIO 360mm ARGB" },
      { icon: Box, label: "Boîtier", value: "Lian Li O11 Dynamic EVO" },
    ],
  },
  {
    id: "pro",
    name: "Forge Titan",
    tagline: "Sans limite. 4K, streaming, création, IA locale.",
    price: 3299,
    perf: { game: "Tout en 4K Ultra + RTX", res: "4K", fps: "120+ FPS" },
    components: [
      { icon: Cpu, label: "Processeur", value: "Intel Core i9-14900K" },
      { icon: CircuitBoard, label: "Carte mère", value: "ASUS ROG Strix Z790-E" },
      { icon: Monitor, label: "Carte graphique", value: "RTX 4090 24 Go" },
      { icon: MemoryStick, label: "Mémoire", value: "64 Go DDR5 7200 MHz" },
      { icon: HardDrive, label: "Stockage", value: "2× 2 To NVMe Gen5" },
      { icon: Zap, label: "Alimentation", value: "1000W 80+ Platinum" },
      { icon: Fan, label: "Refroidissement", value: "AIO 420mm custom" },
      { icon: Box, label: "Boîtier", value: "Fractal North XL — bois & verre" },
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <ServiceBar />
      <Configs />
      <AssemblyOffer />
      <Process />
      <Faq />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold tracking-tight text-lg">
          <span className="size-2.5 rounded-full bg-primary shadow-neon" />
          NEON<span className="text-primary">FORGE</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#configs" className="hover:text-foreground transition">Configurations</a>
          <a href="#montage" className="hover:text-foreground transition">Montage</a>
          <a href="#process" className="hover:text-foreground transition">Processus</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href="#configs"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
        >
          Configurer <ArrowRight className="size-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 grid lg:grid-cols-2 gap-12 items-center relative">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Montage artisanal en France · garantie 2 ans
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
            Le PC qui te ressemble,{" "}
            <span className="text-gradient-neon">monté à la main.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Des configurations pré-montées pour le gaming, la création et la performance pure. Composants triés sur le volet, câble management millimétré, stress test 24h avant expédition.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#configs"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-neon hover:opacity-90 transition"
            >
              Voir les configurations <ArrowRight className="size-4" />
            </a>
            <a
              href="#montage"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold hover:bg-card transition"
            >
              Montage à 200€
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {[
              ["+1200", "PC livrés"],
              ["24h", "stress test"],
              ["2 ans", "garantie"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-2xl font-bold text-foreground">{k}</dt>
                <dd className="text-xs text-muted-foreground mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent blur-3xl" />
          <img
            src={heroPc}
            alt="PC gaming custom avec éclairage RGB cyan et vert"
            className="relative rounded-2xl border border-border/80 shadow-neon object-cover w-full aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceBar() {
  const items = [
    { icon: Wrench, label: "Montage pro à 200€" },
    { icon: ShieldCheck, label: "Garantie 2 ans" },
    { icon: Truck, label: "Livraison sécurisée 48h" },
    { icon: Zap, label: "Test 24h avant envoi" },
  ];
  return (
    <section className="border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-sm">
            <Icon className="size-5 text-primary" />
            <span className="text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Configs() {
  return (
    <section id="configs" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div>
          <p className="text-primary text-sm font-mono mb-2">// Configurations</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Trois machines. <span className="text-gradient-neon">Une obsession du détail.</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          Chaque configuration est assemblée, testée et livrée prête à jouer. Personnalisation possible sur demande.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {configs.map((c) => (
          <ConfigCard key={c.id} config={c} />
        ))}
      </div>
    </section>
  );
}

function ConfigCard({ config: c }: { config: Config }) {
  return (
    <article
      className={`relative rounded-2xl border bg-card p-6 flex flex-col ${
        c.highlight ? "border-primary/60 border-glow" : "border-border"
      }`}
    >
      {c.badge && (
        <span className="absolute -top-3 left-6 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">
          {c.badge}
        </span>
      )}
      <header>
        <h3 className="font-display text-2xl font-bold">{c.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 min-h-[2.5rem]">{c.tagline}</p>
      </header>

      <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-secondary/60 p-3 text-center">
        <PerfStat label="Résolution" value={c.perf.res} />
        <PerfStat label="FPS" value={c.perf.fps} />
        <PerfStat label="Idéal" value={c.perf.game} small />
      </div>

      <ul className="mt-6 space-y-3 flex-1">
        {c.components.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex gap-3 text-sm">
            <Icon className="size-4 text-primary mt-0.5 shrink-0" />
            <div className="flex-1">
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{label}</div>
              <div className="text-foreground">{value}</div>
            </div>
          </li>
        ))}
      </ul>

      <footer className="mt-6 pt-6 border-t border-border">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <div className="text-xs text-muted-foreground">À partir de</div>
            <div className="font-display text-3xl font-bold">
              {c.price.toLocaleString("fr-FR")} €
            </div>
          </div>
          <div className="text-xs text-muted-foreground text-right">
            ou {Math.round(c.price / 4)}€<br />×4 sans frais
          </div>
        </div>
        <a
          href="#montage"
          className={`flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${
            c.highlight
              ? "bg-primary text-primary-foreground hover:opacity-90 shadow-neon"
              : "bg-secondary text-foreground hover:bg-secondary/70"
          }`}
        >
          Commander cette config <ArrowRight className="size-4" />
        </a>
      </footer>
    </article>
  );
}

function PerfStat({ label, value, small }: { label: string; value: string; small?: boolean }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`font-display font-bold ${small ? "text-[11px] leading-tight mt-0.5" : "text-sm mt-0.5"}`}>
        {value}
      </div>
    </div>
  );
}

function AssemblyOffer() {
  const features = [
    "Assemblage par un technicien certifié",
    "Câble management soigné, photos avant envoi",
    "Application de pâte thermique premium",
    "Installation Windows 11 + drivers à jour",
    "Mise à jour BIOS + activation profil XMP/EXPO",
    "Stress test 24h (CPU, GPU, RAM, stockage)",
    "Emballage sécurisé double caisse",
    "Garantie main d'œuvre 2 ans",
  ];
  return (
    <section id="montage" className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-card p-10 md:p-14 grid md:grid-cols-2 gap-12 items-center">
        <div className="absolute -top-32 -right-32 size-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

        <div className="relative">
          <p className="font-mono text-sm text-primary mb-3">// Offre montage</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Vos composants, <br />
            <span className="text-gradient-neon">notre savoir-faire.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Vous avez déjà choisi vos pièces ? On les assemble pour vous, dans les règles de l'art. Forfait unique, transparent, sans surprise.
          </p>
          <div className="mt-8 flex items-baseline gap-3">
            <span className="font-display text-6xl font-bold text-gradient-neon">200€</span>
            <span className="text-muted-foreground">/ montage complet</span>
          </div>
          <a
            href="mailto:hello@neonforge.fr"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-neon hover:opacity-90 transition"
          >
            Réserver mon montage <ArrowRight className="size-4" />
          </a>
        </div>

        <ul className="relative grid gap-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 rounded-xl bg-background/40 border border-border/60 px-4 py-3 text-sm">
              <Check className="size-4 text-primary mt-0.5 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Choix de la config", desc: "Pré-montée ou sur mesure, on vous conseille." },
    { n: "02", title: "Validation & paiement", desc: "Devis clair, paiement sécurisé, 4× possible." },
    { n: "03", title: "Montage & tests", desc: "Assemblage soigné + 24h de stress test." },
    { n: "04", title: "Livraison", desc: "Emballage premium, suivi colis, branchement guidé." },
  ];
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-primary text-sm font-mono mb-2">// Processus</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
        De la commande à la première partie.
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-primary text-sm mb-4">{s.n}</div>
            <div className="font-display text-xl font-bold">{s.title}</div>
            <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    {
      q: "Puis-je personnaliser une configuration ?",
      a: "Oui. Chaque config peut être ajustée (boîtier, RGB, capacité de stockage, RAM, etc.). Contactez-nous et on vous renvoie un devis sous 24h.",
    },
    {
      q: "Quel est le délai de livraison ?",
      a: "Entre 5 et 10 jours ouvrés selon la complexité de la config. Le stress test 24h est compris dans ce délai.",
    },
    {
      q: "Que comprend la garantie 2 ans ?",
      a: "Main d'œuvre, diagnostic gratuit et coordination avec les fabricants pour les composants. Retour atelier pris en charge.",
    },
    {
      q: "Et si je veux apporter mes propres pièces ?",
      a: "C'est l'offre montage à 200€. On assemble, on teste, on installe Windows et les drivers. Vous repartez avec une machine prête.",
    },
  ];
  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">Questions fréquentes.</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((i) => (
          <div key={i.q} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold">{i.q}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{i.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 mt-12">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-wrap gap-6 items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-primary shadow-neon" />
          <span className="font-display font-bold text-foreground">NEONFORGE</span>
          <span>· Montage PC artisanal · France</span>
        </div>
        <div className="flex gap-6">
          <a href="mailto:hello@neonforge.fr" className="hover:text-foreground transition">hello@neonforge.fr</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
