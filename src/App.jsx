import React from "react";

function App() {
  return (
    <div style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>
            Train smarter. Compete at a higher level.
          </h1>
          <p style={styles.heroSubtitle}>
            Online coaching from a former UK #1 junior and GB representative.
            Built for players who want real improvement.
          </p>
          <a href="#contact" style={styles.primaryButton}>
            Start with a Video Analysis
          </a>
        </div>

        <img src="/src/playing.png" style={styles.heroImage} />
      </section>

      {/* ABOUT */}
      <section style={styles.lightSection}>
        <div style={styles.aboutGrid}>
          <img src="/src/profile pic.png" style={styles.aboutImage} />

          <div>
            <h2 style={styles.sectionTitle}>Meet Your Coach</h2>
            <p style={styles.sectionText}>
              Former UK number 1 junior, GB and Wales representative, and Tennis Europe winner.
              With 18 years of playing experience and 5 years coaching, I help players understand
              the game at a deeper level.
            </p>
            <p style={styles.sectionText}>
              Having trained and competed alongside full-time players, I focus on what actually
              separates levels — not just technique, but decision-making, patterns, and match intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* COACHING IN ACTION */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Coaching in Action</h2>
        <p style={styles.sectionTextCenter}>
          Working with players in real environments — building technical and tactical understanding.
        </p>

        <img src="/src/coaching group.png" style={styles.groupImage} />
      </section>

      {/* SERVICES */}
      <section style={styles.lightSection}>
        <h2 style={styles.sectionTitle}>Coaching Options</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Video Analysis</h3>
            <p>Send your footage and receive detailed breakdowns.</p>
            <strong>From £35</strong>
          </div>

          <div style={styles.card}>
            <h3>Monthly Coaching</h3>
            <p>Ongoing feedback, structure, and improvement plan.</p>
            <strong>From £120/month</strong>
          </div>

          <div style={styles.card}>
            <h3>Tactical Coaching</h3>
            <p>Learn how high-level players actually build points.</p>
            <strong>Custom</strong>
          </div>
        </div>
      </section>

      {/* SECOND ACTION IMAGE */}
      <section style={styles.section}>
        <img src="/src/2 playing.png" style={styles.heroImage} />
      </section>

      {/* CTA */}
      <section id="contact" style={styles.cta}>
        <h2>Ready to improve your game?</h2>
        <p>Send a video and get clear, actionable feedback.</p>
        <a href="mailto:your-email@example.com" style={styles.ctaButton}>
          Contact Me
        </a>
      </section>

    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    background: "#020617",
    color: "white"
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "80px 7%",
    alignItems: "center",
    gap: 40
  },
  heroText: {},
  heroTitle: {
    fontSize: "48px",
    marginBottom: 20
  },
  heroSubtitle: {
    color: "#cbd5e1",
    marginBottom: 20
  },
  heroImage: {
    width: "100%",
    borderRadius: 20
  },
  primaryButton: {
    background: "#a3e635",
    padding: "12px 20px",
    color: "#020617",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: 999
  },
  section: {
    padding: "80px 7%",
    textAlign: "center"
  },
  lightSection: {
    padding: "80px 7%",
    background: "#f8fafc",
    color: "#020617"
  },
  sectionTitle: {
    fontSize: "36px",
    marginBottom: 20
  },
  sectionText: {
    lineHeight: 1.7,
    marginBottom: 10
  },
  sectionTextCenter: {
    marginBottom: 20,
    color: "#cbd5e1"
  },
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 40,
    alignItems: "center"
  },
  aboutImage: {
    width: "100%",
    borderRadius: 20
  },
  groupImage: {
    width: "100%",
    borderRadius: 20,
    marginTop: 20
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20
  },
  card: {
    background: "#0f172a",
    padding: 20,
    borderRadius: 16
  },
  cta: {
    padding: 80,
    background: "#a3e635",
    color: "#020617",
    textAlign: "center"
  },
  ctaButton: {
    background: "#020617",
    color: "white",
    padding: "12px 20px",
    borderRadius: 999,
    textDecoration: "none"
  }
};

export default App;
