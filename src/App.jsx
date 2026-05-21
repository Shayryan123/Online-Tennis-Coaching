import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>Elite Tennis Coaching</div>
        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#coaching" style={styles.navLink}>Coaching</a>
          <a href="#process" style={styles.navLink}>How It Works</a>
          <a href="#contact" style={styles.navButton}>Book Analysis</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroText}>
          <p style={styles.badge}>Former UK #1 Junior • GB & Wales Representative • LTA Level 3 Coach</p>
          <h1 style={styles.heroTitle}>Train smarter. Compete better. Understand tennis at a higher level.</h1>
          <p style={styles.heroSubtitle}>
            Online tennis coaching for serious players who want elite-level tactical and technical feedback without needing to be on court every day.
          </p>
          <div style={styles.buttonRow}>
            <a href="#contact" style={styles.primaryButton}>Send Your Video</a>
            <a href="#process" style={styles.secondaryButton}>See How It Works</a>
          </div>
        </div>

        <div style={styles.heroCard}>
          <h2 style={styles.cardTitle}>Elite insight made simple.</h2>
          <p style={styles.cardText}>
            Technical detail. Tactical clarity. Match intelligence. Built from 18 years of playing experience and 5 years of coaching.
          </p>
          <div style={styles.statsGrid}>
            <div style={styles.statBox}>
              <strong style={styles.statNumber}>18+</strong>
              <span>Years playing</span>
            </div>
            <div style={styles.statBox}>
              <strong style={styles.statNumber}>5+</strong>
              <span>Years coaching</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <p style={styles.sectionLabel}>Your Coach</p>
        <h2 style={styles.sectionTitle}>Built from elite competition, not generic advice.</h2>
        <p style={styles.sectionText}>
          I am a former UK number 1 junior, former Wales and GB representative, Tennis Europe winner, LTA Level 3 accredited coach, and Masters graduate in Business Management.
        </p>
        <p style={styles.sectionText}>
          I have shared the court with full-time tour players and developed a strong eye for tactical and technical observation — helping players understand not just what to change, but why it matters in real match situations.
        </p>
      </section>

      <section id="coaching" style={styles.darkSection}>
        <p style={styles.sectionLabel}>Coaching Offers</p>
        <h2 style={styles.sectionTitle}>Choose the support that fits your game.</h2>
        <div style={styles.offerGrid}>
          <Offer title="Video Analysis" price="From £35" text="Send footage of your strokes, point play, or match clips and receive clear technical and tactical feedback." />
          <Offer title="Performance Plan" price="From £120/month" text="A structured online plan for serious players who want weekly feedback, priorities, and match improvement." />
          <Offer title="Tactical Coaching" price="Custom plans" text="Learn patterns, decision-making, court positioning, and how higher-level players actually build points." />
        </div>
      </section>

      <section id="process" style={styles.section}>
        <p style={styles.sectionLabel}>How It Works</p>
        <h2 style={styles.sectionTitle}>Simple, direct, and built around your game.</h2>
        <div style={styles.steps}>
          <Step text="Send your tennis video or match footage." />
          <Step text="Receive expert analysis on technique, tactics, and decision-making." />
          <Step text="Get clear priorities and drills to improve faster." />
          <Step text="Track progress with ongoing feedback if you choose a monthly plan." />
        </div>
      </section>

      <section id="contact" style={styles.cta}>
        <h2 style={styles.ctaTitle}>Serious about improving? Start with a video analysis.</h2>
        <p style={styles.ctaText}>Get a clear breakdown of what is holding your game back and what to focus on next.</p>
        <a href="mailto:your-email@example.com" style={styles.ctaButton}>Email Me To Book</a>
      </section>

      <footer style={styles.footer}>© 2026 Elite Tennis Coaching. All rights reserved.</footer>
    </div>
  );
}

function Offer({ title, price, text }) {
  return (
    <div style={styles.offerCard}>
      <h3 style={styles.offerTitle}>{title}</h3>
      <p style={styles.offerText}>{text}</p>
      <p style={styles.offerPrice}>{price}</p>
    </div>
  );
}

function Step({ text }) {
  return <div style={styles.step}>✓ {text}</div>;
}

const styles = {
  page: {
    margin: 0,
    minHeight: "100vh",
    background: "#020617",
    color: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 7%",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    position: "sticky",
    top: 0,
    background: "rgba(2, 6, 23, 0.92)",
    backdropFilter: "blur(10px)",
    zIndex: 10,
  },
  logo: { fontSize: 22, fontWeight: 800 },
  nav: { display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" },
  navLink: { color: "#cbd5e1", textDecoration: "none", fontSize: 14 },
  navButton: {
    background: "#a3e635",
    color: "#020617",
    padding: "12px 18px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 800,
    fontSize: 14,
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 48,
    padding: "100px 7%",
    background: "radial-gradient(circle at top right, rgba(163,230,53,0.22), transparent 35%), radial-gradient(circle at bottom left, rgba(34,197,94,0.16), transparent 40%)",
  },
  heroText: { maxWidth: 780 },
  badge: {
    display: "inline-block",
    color: "#bef264",
    border: "1px solid rgba(190,242,100,0.35)",
    background: "rgba(190,242,100,0.08)",
    borderRadius: 999,
    padding: "10px 16px",
    fontWeight: 700,
    fontSize: 14,
  },
  heroTitle: {
    fontSize: "clamp(44px, 6vw, 78px)",
    lineHeight: 1,
    letterSpacing: "-0.05em",
    margin: "28px 0 24px",
  },
  heroSubtitle: { fontSize: 20, lineHeight: 1.7, color: "#cbd5e1", maxWidth: 640 },
  buttonRow: { display: "flex", gap: 16, marginTop: 34, flexWrap: "wrap" },
  primaryButton: {
    background: "#a3e635",
    color: "#020617",
    padding: "16px 24px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 900,
  },
  secondaryButton: {
    color: "white",
    padding: "16px 24px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 800,
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.06)",
  },
  heroCard: {
    alignSelf: "center",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "linear-gradient(145deg, rgba(163,230,53,0.18), rgba(15,23,42,0.95))",
    borderRadius: 32,
    padding: 36,
    boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
  },
  cardTitle: { fontSize: 36, lineHeight: 1.1, margin: 0 },
  cardText: { color: "#cbd5e1", lineHeight: 1.7, fontSize: 17 },
  statsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 32 },
  statBox: { background: "rgba(255,255,255,0.08)", padding: 22, borderRadius: 22, color: "#cbd5e1" },
  statNumber: { display: "block", color: "#bef264", fontSize: 32, marginBottom: 6 },
  section: { padding: "90px 7%", maxWidth: 1200, margin: "0 auto" },
  darkSection: { padding: "90px 7%", background: "rgba(255,255,255,0.035)" },
  sectionLabel: { color: "#bef264", textTransform: "uppercase", letterSpacing: "0.22em", fontWeight: 800 },
  sectionTitle: { fontSize: "clamp(34px, 4vw, 56px)", lineHeight: 1.1, maxWidth: 820, margin: "12px 0 28px" },
  sectionText: { fontSize: 19, lineHeight: 1.8, color: "#cbd5e1", maxWidth: 850 },
  offerGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 44 },
  offerCard: { background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 28, padding: 30 },
  offerTitle: { fontSize: 26, margin: "0 0 16px" },
  offerText: { color: "#cbd5e1", lineHeight: 1.7, minHeight: 120 },
  offerPrice: { color: "#bef264", fontSize: 22, fontWeight: 900 },
  steps: { display: "grid", gap: 16, marginTop: 36, maxWidth: 850 },
  step: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 18, padding: 22, color: "#e2e8f0", fontSize: 18 },
  cta: { background: "#a3e635", color: "#020617", textAlign: "center", padding: "90px 7%" },
  ctaTitle: { fontSize: "clamp(36px, 5vw, 64px)", maxWidth: 950, margin: "0 auto 20px", lineHeight: 1.05 },
  ctaText: { fontSize: 20, fontWeight: 600 },
  ctaButton: { display: "inline-block", marginTop: 28, background: "#020617", color: "white", padding: "16px 26px", borderRadius: 999, textDecoration: "none", fontWeight: 900 },
  footer: { textAlign: "center", padding: 34, color: "#94a3b8" },
};

export default App;
