import React from "react";

import heroImage from "./playing.png";
import coachImage from "./profile pic.png";
import groupImage from "./coaching group.png";
import actionImage from "./2 playing.png";

function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brand}>Shay Ryan Tennis</div>
        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#coaching" style={styles.navLink}>Coaching</a>
          <a href="#proof" style={styles.navLink}>Proof</a>
          <a href="#contact" style={styles.navButton}>Start Analysis</a>
        </nav>
      </header>

      <main>
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <p style={styles.eyebrow}>Former UK #1 Junior • GB & Wales Representative • LTA Level 3 Coach</p>
            <h1 style={styles.heroTitle}>Online tennis coaching for players who want to think, train and compete better.</h1>
            <p style={styles.heroText}>
              Get elite-level technical and tactical feedback from a coach with 18 years playing experience, 5 years coaching experience, and a proven eye for what separates levels.
            </p>
            <div style={styles.heroButtons}>
              <a href="#contact" style={styles.primaryButton}>Book Video Analysis</a>
              <a href="#coaching" style={styles.secondaryButton}>View Coaching Options</a>
            </div>
          </div>

          <div style={styles.heroImageWrap}>
            <img src={heroImage} alt="Shay Ryan hitting a tennis shot" style={styles.heroImage} />
            <div style={styles.floatingCard}>
              <strong>Performance insight</strong>
              <span>Technique • Tactics • Match intelligence</span>
            </div>
          </div>
        </section>

        <section style={styles.statsStrip}>
          <Stat number="18+" label="Years playing" />
          <Stat number="5+" label="Years coaching" />
          <Stat number="UK #1" label="Former junior ranking" />
          <Stat number="GB" label="Representative experience" />
        </section>

        <section id="about" style={styles.aboutSection}>
          <div style={styles.aboutImagePanel}>
            <img src={coachImage} alt="Shay Ryan tennis coach" style={styles.aboutImage} />
          </div>
          <div style={styles.aboutText}>
            <p style={styles.sectionLabelDark}>Meet your coach</p>
            <h2 style={styles.darkTitle}>Not generic tennis tips. Real performance understanding.</h2>
            <p style={styles.darkText}>
              I’m a former UK number 1 junior, former Wales and GB representative, Tennis Europe winner, LTA Level 3 accredited coach, and Masters graduate in Business Management.
            </p>
            <p style={styles.darkText}>
              My coaching focuses on helping players understand the game more clearly: what to change technically, how to make better decisions tactically, and how to build points with purpose.
            </p>
          </div>
        </section>

        <section id="coaching" style={styles.darkSection}>
          <div style={styles.sectionIntro}>
            <p style={styles.sectionLabel}>Coaching options</p>
            <h2 style={styles.sectionTitle}>Choose the level of support your game needs.</h2>
            <p style={styles.sectionSubtext}>Start simple with a video analysis, then build into a structured plan if you want ongoing development.</p>
          </div>

          <div style={styles.cardsGrid}>
            <OfferCard
              title="Video Analysis"
              price="£35"
              text="A focused breakdown of your technique, movement and match play designed to give you immediate clarity on what to improve next. Statistics, match patterns and key trends will also be analysed to help identify the most important next steps for your development."
              includes={[
                "Technical analysis of strokes and movement",
                "Tactical observations from real points",
                "Clear priorities to focus on",
                "Simple drill ideas to apply straight away",
                "Match statistics and patterns analysed for next-step development",
              ]}
              bestFor="Players who want expert feedback without committing to ongoing coaching."
              outcome="You leave knowing what is helping your game, what is limiting it, and what to work on next."
            />
            <OfferCard
              title="Monthly Performance Plan"
              price="£80/month"
              text="Ongoing online coaching support for players who want structured improvement over time rather than isolated feedback sessions. Coaching is tailored around the player’s goals, match statistics and long-term development priorities."
              includes={[
                "Weekly video analysis",
                "Personalised training priorities",
                "Ongoing technical and tactical feedback",
                "Direct messaging support",
                "Progress tracking over time",
                "Personalised training programmes",
                "Drill ideas based on statistics and player goals",
              ]}
              bestFor="Competitive juniors, tournament players and ambitious adults looking for consistent guidance."
              outcome="Build stronger habits, improve decision-making and develop your game with a clear long-term structure."
              featured
            />
            <OfferCard
              title="Tactical Match Review"
              price="£25"
              text="A deeper look into point construction, decision-making and match patterns to help you understand how higher-level players win points. Full matches, shorter clips and training sessions are all suitable for analysis."
              includes={[
                "Match and point pattern analysis",
                "Tactical decision-making review",
                "Positioning and court awareness feedback",
                "Strategic adjustments for competition",
              ]}
              bestFor="Players who feel technically capable but struggle to apply their level consistently in matches."
              outcome="Develop a smarter understanding of how to build points, expose weaknesses and compete more effectively under pressure."
            />
          </div>
        </section>

        <section id="proof" style={styles.proofSection}>
          <div style={styles.proofText}>
            <p style={styles.sectionLabelDark}>Coaching in action</p>
            <h2 style={styles.darkTitle}>Learn from someone who has lived high-level tennis.</h2>
            <p style={styles.darkText}>
              Online coaching works best when the feedback is specific. I use video, tactical observation, and clear priorities to help players see the game differently.
            </p>
            <div style={styles.checkList}>
              <p>✓ Technical feedback you can actually apply</p>
              <p>✓ Tactical clarity for match situations</p>
              <p>✓ Honest priorities, not random drills</p>
            </div>
          </div>
          <img src={groupImage} alt="Shay Ryan coaching a group of tennis players" style={styles.proofImage} />
        </section>

        <section style={styles.videoSection}>
          <div style={styles.sectionIntro}>
            <p style={styles.sectionLabel}>Video coaching</p>
            <h2 style={styles.sectionTitle}>Send your clips. Get clear answers.</h2>
            <p style={styles.sectionSubtext}>
              Add a coaching breakdown video here later from YouTube, Vimeo, or Instagram. For now, this section explains the process clearly.
            </p>
          </div>
          <div style={styles.processGrid}>
            <ProcessCard step="01" title="Send your video" text="Upload clips of strokes, rallies, points, or match play." />
            <ProcessCard step="02" title="Receive analysis" text="Get technical and tactical feedback in simple, direct language." />
            <ProcessCard step="03" title="Train with purpose" text="Use clear priorities and drills to improve faster." />
          </div>
        </section>

        <section style={styles.imageBreakSection}>
          <img src={actionImage} alt="Shay Ryan competing on court" style={styles.wideImage} />
          <div style={styles.imageBreakText}>
            <p style={styles.sectionLabel}>The difference</p>
            <h2 style={styles.sectionTitle}>Better tennis starts with better understanding.</h2>
            <p style={styles.sectionSubtext}>Technique matters, but the best players also know when, where and why to use it.</p>
          </div>
        </section>

        <section style={styles.testimonialSection}>
          <p style={styles.sectionLabelDark}>Player feedback</p>
          <h2 style={styles.darkTitle}>Trusted by players looking for clearer insight into their game.</h2>
          <p style={styles.testimonialIntro}>
            Real feedback from players who used online video analysis and tactical match review to better understand their technique, decision-making and patterns of play.
          </p>
          <div style={styles.testimonialGridThree}>
            <Testimonial
              text="I sent Shay around 20 minutes of footage combining points from squad sessions and a match I had played using the Tactical Match Review option. The feedback was detailed but explained in a simple way that completely opened my eyes to my game from a tactical perspective. The level of detail was fantastic and I would recommend it to anyone wanting genuine insight into their play. Shay also offered an additional online call if I was unsure how to apply the feedback going forward, which was a great touch."
              name="Josh Lown"
              role="Competitive Club Player"
            />
            <Testimonial
              text="I heard about Shay’s online coaching and decided to try it as a competitive University BUCS player. The feedback and analysis were explained in a way that allowed me to clearly see evidence of the mistakes and unsuccessful patterns I had been using in matches, which was something I hadn’t really been exposed to before. It gave me a completely new area to focus on through detailed analysis of how my technique was affecting outcomes, and how certain decisions were influencing points. I chose the email option and the feedback was visually excellent. Really beneficial overall and I’ll definitely be using the video analysis service again."
              name="Harry"
              role="Regional Performance Player"
            />
            <Testimonial
              text="I play a lot of doubles in summer and winter leagues for both club and county, so I wanted to gain some insight into my game. The feedback was genuinely eye-opening. Having not worked with a coach for a number of years, the analysis highlighted bad habits in my positioning and volleying that I simply wasn’t aware of. Shay was great on the video call and it felt like a really friendly discussion around the clips and our views on the points being played. If I was still playing full-time, I would have loved to have this sort of support on a permanent basis as an alternative to constantly needing to be on court."
              name="Max Jones"
              role="Competitive Doubles Player"
            />
          </div>
        </section>

        <section id="contact" style={styles.cta}>
          <p style={styles.ctaLabel}>Start with one video</p>
          <h2 style={styles.ctaTitle}>Ready to see what is holding your game back?</h2>
          <p style={styles.ctaText}>Send a clip and get clear, actionable feedback on your technique, tactics and next steps.</p>
          <a href="mailto:your-email@example.com" style={styles.ctaButton}>Email Me To Book</a>
        </section>
      </main>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div style={styles.statBox}>
      <strong>{number}</strong>
      <span>{label}</span>
    </div>
  );
}

function OfferCard({ title, price, text, includes, bestFor, outcome, featured }) {
  return (
    <div style={featured ? { ...styles.offerCard, ...styles.featuredCard } : styles.offerCard}>
      {featured && <p style={styles.popularTag}>Most popular</p>}
      <h3>{title}</h3>
      <p style={styles.offerIntro}>{text}</p>

      <div style={styles.offerDetailBlock}>
        <span style={styles.offerLabel}>What’s included</span>
        <ul style={styles.offerList}>
          {includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={styles.offerDetailBlock}>
        <span style={styles.offerLabel}>Best for</span>
        <p style={styles.offerSmallText}>{bestFor}</p>
      </div>

      <div style={styles.offerDetailBlock}>
        <span style={styles.offerLabel}>Outcome</span>
        <p style={styles.offerSmallText}>{outcome}</p>
      </div>

      <strong style={styles.offerPrice}>{price}</strong>
    </div>
  );
}

function ProcessCard({ step, title, text }) {
  return (
    <div style={styles.processCard}>
      <span>{step}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Testimonial({ text, name, role }) {
  return (
    <div style={styles.testimonialCard}>
      <p style={styles.quoteMark}>“</p>
      <p style={styles.testimonialText}>{text}</p>
      <div style={styles.testimonialPerson}>
        <strong>{name}</strong>
        <span>{role}</span>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#020617",
    color: "#ffffff",
    fontFamily: "Inter, Arial, Helvetica, sans-serif",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 7%",
    background: "rgba(2, 6, 23, 0.92)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  brand: {
    fontSize: 22,
    fontWeight: 900,
    letterSpacing: "-0.03em",
  },
  nav: {
    display: "flex",
    gap: 24,
    alignItems: "center",
    flexWrap: "wrap",
  },
  navLink: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
  },
  navButton: {
    background: "#b7ff38",
    color: "#020617",
    textDecoration: "none",
    padding: "11px 18px",
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 900,
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    gap: 60,
    alignItems: "center",
    padding: "95px 7% 80px",
    background: "radial-gradient(circle at 85% 15%, rgba(183,255,56,0.22), transparent 32%), linear-gradient(135deg, #020617 0%, #0f172a 100%)",
  },
  heroContent: {
    maxWidth: 760,
  },
  eyebrow: {
    display: "inline-block",
    color: "#d9ff99",
    background: "rgba(183,255,56,0.09)",
    border: "1px solid rgba(183,255,56,0.25)",
    padding: "10px 14px",
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 800,
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: "clamp(42px, 6vw, 76px)",
    lineHeight: 0.96,
    letterSpacing: "-0.065em",
    margin: 0,
  },
  heroText: {
    color: "#d1d5db",
    fontSize: 19,
    lineHeight: 1.75,
    maxWidth: 650,
    marginTop: 26,
  },
  heroButtons: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    marginTop: 34,
  },
  primaryButton: {
    background: "#b7ff38",
    color: "#020617",
    padding: "15px 22px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 900,
  },
  secondaryButton: {
    color: "#ffffff",
    padding: "15px 22px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 800,
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.06)",
  },
  heroImageWrap: {
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "min(640px, 72vh)",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: 34,
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 32px 90px rgba(0,0,0,0.48)",
  },
  floatingCard: {
    position: "absolute",
    left: 24,
    bottom: 24,
    display: "flex",
    flexDirection: "column",
    gap: 5,
    padding: "18px 20px",
    borderRadius: 22,
    background: "rgba(2,6,23,0.78)",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.14)",
  },
  statsStrip: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 1,
    background: "rgba(255,255,255,0.1)",
  },
  statBox: {
    background: "#0b1222",
    padding: "34px 7%",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    textAlign: "center",
  },
  statBoxStrong: {},
  aboutSection: {
    display: "grid",
    gridTemplateColumns: "0.85fr 1.15fr",
    gap: 60,
    alignItems: "center",
    padding: "95px 7%",
    background: "#f8fafc",
    color: "#020617",
  },
  aboutImagePanel: {
    background: "#e2e8f0",
    borderRadius: 34,
    padding: 14,
  },
  aboutImage: {
    width: "100%",
    height: 560,
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: 24,
    display: "block",
  },
  aboutText: {
    maxWidth: 720,
  },
  sectionLabelDark: {
    color: "#3f6212",
    textTransform: "uppercase",
    letterSpacing: "0.22em",
    fontWeight: 900,
    fontSize: 13,
  },
  darkTitle: {
    color: "#020617",
    fontSize: "clamp(34px, 4.5vw, 58px)",
    lineHeight: 1.04,
    letterSpacing: "-0.05em",
    margin: "14px 0 22px",
  },
  darkText: {
    color: "#334155",
    fontSize: 18,
    lineHeight: 1.8,
  },
  darkSection: {
    padding: "95px 7%",
    background: "#020617",
  },
  sectionIntro: {
    maxWidth: 850,
    margin: "0 auto 46px",
    textAlign: "center",
  },
  sectionLabel: {
    color: "#b7ff38",
    textTransform: "uppercase",
    letterSpacing: "0.22em",
    fontWeight: 900,
    fontSize: 13,
  },
  sectionTitle: {
    fontSize: "clamp(34px, 4.5vw, 58px)",
    lineHeight: 1.04,
    letterSpacing: "-0.05em",
    margin: "14px 0 18px",
  },
  sectionSubtext: {
    color: "#cbd5e1",
    fontSize: 18,
    lineHeight: 1.7,
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 22,
  },
  offerCard: {
    position: "relative",
    padding: 30,
    minHeight: 560,
    borderRadius: 28,
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  offerIntro: {
    color: "#cbd5e1",
    lineHeight: 1.7,
    margin: 0,
  },
  offerDetailBlock: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: 16,
  },
  offerLabel: {
    display: "block",
    color: "#b7ff38",
    fontSize: 12,
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    marginBottom: 10,
  },
  offerList: {
    margin: 0,
    paddingLeft: 20,
    color: "#e2e8f0",
    lineHeight: 1.75,
  },
  offerSmallText: {
    margin: 0,
    color: "#d1d5db",
    lineHeight: 1.65,
  },
  offerPrice: {
    marginTop: "auto",
    color: "#ffffff",
    fontSize: 20,
  },
  featuredCard: {
    background: "linear-gradient(180deg, rgba(183,255,56,0.2), #111827)",
    border: "1px solid rgba(183,255,56,0.35)",
  },
  popularTag: {
    alignSelf: "flex-start",
    background: "#b7ff38",
    color: "#020617",
    padding: "7px 11px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 900,
    margin: "0 0 16px",
  },
  proofSection: {
    display: "grid",
    gridTemplateColumns: "0.9fr 1.1fr",
    gap: 52,
    alignItems: "center",
    padding: "95px 7%",
    background: "#f8fafc",
    color: "#020617",
  },
  proofText: {
    maxWidth: 650,
  },
  proofImage: {
    width: "100%",
    height: 560,
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: 34,
    boxShadow: "0 24px 70px rgba(15,23,42,0.18)",
  },
  checkList: {
    marginTop: 28,
    color: "#0f172a",
    fontWeight: 800,
    lineHeight: 1.8,
  },
  videoSection: {
    padding: "95px 7%",
    background: "#020617",
  },
  processGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 22,
  },
  processCard: {
    padding: 28,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 26,
  },
  imageBreakSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 46,
    alignItems: "center",
    padding: "95px 7%",
    background: "#0b1222",
  },
  wideImage: {
    width: "100%",
    height: 540,
    objectFit: "cover",
    borderRadius: 34,
    boxShadow: "0 24px 70px rgba(0,0,0,0.38)",
  },
  imageBreakText: {
    maxWidth: 620,
  },
  testimonialSection: {
    padding: "95px 7%",
    background: "#f8fafc",
    color: "#020617",
  },
  testimonialGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 22,
    marginTop: 34,
  },
  testimonialIntro: {
    maxWidth: 850,
    color: "#475569",
    fontSize: 18,
    lineHeight: 1.75,
    marginTop: -6,
    marginBottom: 34,
  },
  testimonialGridThree: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 22,
    alignItems: "stretch",
  },
  testimonialCard: {
    position: "relative",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: 26,
    padding: 30,
    color: "#334155",
    fontSize: 16,
    lineHeight: 1.7,
    boxShadow: "0 20px 55px rgba(15,23,42,0.06)",
    display: "flex",
    flexDirection: "column",
    minHeight: 500,
  },
  quoteMark: {
    color: "#65a30d",
    fontSize: 54,
    lineHeight: 0.8,
    margin: "0 0 10px",
    fontWeight: 900,
  },
  testimonialText: {
    margin: 0,
    flex: 1,
  },
  testimonialPerson: {
    borderTop: "1px solid #e2e8f0",
    marginTop: 24,
    paddingTop: 18,
    display: "flex",
    flexDirection: "column",
    gap: 4,
    color: "#020617",
  },
  cta: {
    padding: "95px 7%",
    background: "#b7ff38",
    color: "#020617",
    textAlign: "center",
  },
  ctaLabel: {
    textTransform: "uppercase",
    letterSpacing: "0.22em",
    fontWeight: 900,
    fontSize: 13,
  },
  ctaTitle: {
    maxWidth: 950,
    margin: "16px auto",
    fontSize: "clamp(38px, 5vw, 68px)",
    lineHeight: 1.02,
    letterSpacing: "-0.055em",
  },
  ctaText: {
    maxWidth: 680,
    margin: "0 auto",
    fontSize: 19,
    lineHeight: 1.7,
    fontWeight: 700,
  },
  ctaButton: {
    display: "inline-block",
    marginTop: 30,
    background: "#020617",
    color: "#ffffff",
    padding: "15px 24px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 900,
  },
};

export default App;


