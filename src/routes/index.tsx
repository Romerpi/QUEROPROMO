import { createFileRoute } from "@tanstack/react-router";
import { Tag, Percent, ShoppingBag, Sparkles, Zap, Rocket, Check, Star, BadgeCheck, ShoppingCart, ShieldCheck } from "lucide-react";
import logo from "../assets/logo-achadinhos.jpg";

export const Route = createFileRoute("/")({ component: Index });

const GROUP_URL = "https://chat.whatsapp.com/Bp1lHQKNsc5BalzAM0FWuo";

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <section className="hero-gradient relative min-h-[280px] flex flex-col items-center justify-center px-4 py-10 overflow-hidden">
        <div className="absolute top-6 left-6 text-primary-foreground/50 sparkle"><Tag className="w-6 h-6" /></div>
        <div className="absolute top-10 right-10 text-primary-foreground/50 sparkle" style={{ animationDelay: "0.5s" }}><Percent className="w-5 h-5" /></div>
        <div className="absolute bottom-12 left-12 text-primary-foreground/50 sparkle" style={{ animationDelay: "1s" }}><ShoppingBag className="w-5 h-5" /></div>
        <div className="absolute bottom-8 right-8 text-primary-foreground/50 sparkle" style={{ animationDelay: "0.7s" }}><Sparkles className="w-5 h-5" /></div>
        <div className="relative mb-4">
          <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-2xl">
            <img src={logo} alt="QUEROPROMO" className="w-full h-full object-cover" width={1024} height={1024} />
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-1.5 text-center tracking-tight">QUEROPROMO</h1>
        <p className="text-primary-foreground/90 text-center text-sm md:text-base max-w-sm font-medium">🛒 Os melhores achadinhos e ofertas atualizados diariamente!</p>
      </section>

      <div className="px-4">
        <div className="bg-card rounded-3xl card-shadow p-6 md:p-8 max-w-lg mx-auto -mt-8 relative z-10">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-primary flex items-center justify-center gap-2 mb-3">
              <span className="text-2xl">🛒</span>Entre agora no grupo Achadinhos QUEROPROMO!
            </h2>
            <div className="flex items-center justify-center gap-2 text-warning font-semibold mb-5">
              <Zap className="w-4 h-4 fill-warning" />
              <span>Restam <strong>5</strong> vagas hoje</span>
            </div>
            <a href={GROUP_URL} className="inline-flex items-center justify-center gap-2 whitespace-nowrap w-full text-base md:text-lg font-bold py-5 md:py-7 pulse-glow bg-gradient-to-r from-destructive to-destructive/90 hover:from-destructive/90 hover:to-destructive text-destructive-foreground rounded-xl shadow-lg transition-all">
              <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2" />QUERO ENTRAR NO GRUPO!
            </a>
            <div className="space-y-2 my-4">
              {[
                { name: "Priscila", delay: 0 },
                { name: "Carlos", delay: 100 },
              ].map((u) => (
                <div key={u.name} className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 card-shadow" style={{ animationDelay: `${u.delay}ms` }}>
                  <div className="bg-success/20 p-1.5 rounded-md shrink-0"><Check className="w-4 h-4 text-success" /></div>
                  <p className="text-card-foreground text-sm"><span className="font-semibold">{u.name}</span><span className="text-muted-foreground"> entrou no grupo agora</span></p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">Vagas limitadas • Ofertas exclusivas todos os dias</p>
          </div>
        </div>

        <div className="bg-card rounded-xl card-shadow p-5 max-w-lg mx-auto mt-6 border border-border">
          <div className="flex justify-center mb-3">
            <div className="bg-warning/20 p-2 rounded-full"><Star className="w-5 h-5 text-warning fill-warning" /></div>
          </div>
          <blockquote className="text-center text-card-foreground/80 italic mb-3">"Economizei mais de 50% em várias compras seguindo as promoções do grupo! 🛒"</blockquote>
          <p className="text-center text-muted-foreground font-medium text-sm">- Maria Souza</p>
        </div>
      </div>

      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { Icon: BadgeCheck, bg: "bg-success/15", color: "text-success", title: "Ofertas Verificadas", desc: "Apenas descontos reais e produtos de qualidade." },
            { Icon: ShoppingCart, bg: "bg-primary/15", color: "text-primary", title: "Diversas Lojas", desc: "Amazon, Shopee, Mercado Livre e muito mais com até 80% OFF." },
            { Icon: Sparkles, bg: "bg-warning/15", color: "text-warning", title: "Exclusivo WhatsApp", desc: "Promoções que só o grupo VIP recebe primeiro." },
            { Icon: ShieldCheck, bg: "bg-accent/15", color: "text-accent", title: "Compras Seguras", desc: "Curadoria para você comprar com tranquilidade." },
          ].map(({ Icon, bg, color, title, desc }) => (
            <div key={title} className="bg-card rounded-2xl card-shadow p-5 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className={`${bg} p-3.5 rounded-2xl shrink-0`}><Icon className={`w-6 h-6 ${color}`} /></div>
                <div>
                  <h3 className="font-bold text-card-foreground mb-1.5">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto bg-card rounded-3xl card-shadow p-6 border border-border">
          <h2 className="text-xl font-bold text-primary flex items-center justify-center gap-2 mb-6">
            <ShoppingCart className="w-5 h-5" />Ofertas em Destaque
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { pct: "80% OFF", cat: "Eletrônicos" },
              { pct: "70% OFF", cat: "Moda" },
              { pct: "65% OFF", cat: "Casa" },
              { pct: "75% OFF", cat: "Beleza" },
            ].map((o) => (
              <div key={o.cat} className="bg-card rounded-2xl p-5 min-w-[140px] flex flex-col items-center justify-center text-center relative overflow-hidden border border-border">
                <span className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">PROMO</span>
                <div className="mt-6">
                  <span className="text-2xl font-extrabold text-primary">{o.pct}</span>
                  <p className="text-muted-foreground text-sm mt-1.5 font-medium">{o.cat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center py-6 px-4">
        <p className="text-muted-foreground text-base md:text-lg">
          JÁ SOMOS <span className="text-primary font-bold text-xl md:text-2xl">68.957</span> MEMBROS{" "}
          <span className="inline-flex items-center gap-1 whitespace-nowrap">(crescendo agora <Sparkles className="w-4 h-4 text-warning" />)</span>
        </p>
      </div>

      <section className="py-8 px-4 pb-12">
        <div className="max-w-lg mx-auto text-center">
          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6">
            <p className="text-2xl font-bold text-primary mb-4">🔥 ÚLTIMAS VAGAS</p>
            <a href={GROUP_URL} className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-8 w-full text-base md:text-lg font-bold py-4 md:py-6 pulse-glow">
              ENTRAR AGORA
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
