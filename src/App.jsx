import './styles.css'
import { useState, useEffect } from 'react'

const guardians = [
  {
    name: 'Astra',
    role: 'Sky Warden',
    description: 'Controls the winds and keeps the atmosphere in balance across the floating canopies.',
  },
  {
    name: 'Mira',
    role: 'Rootkeeper',
    description: 'Nurtures the ancient forests and stabilizes the pulse of the earth beneath Terra.',
  },
  {
    name: 'Vega',
    role: 'Tide Guardian',
    description: 'Masters the oceans and protects the living currents that carry life across the world.',
  },
]

const regions = [
  'Emerald Wilds',
  'Titan Falls',
  'Glass Dunes',
  'Moonlit Reef',
  'Obsidian Ridge',
]

const powers = [
  {
    title: 'Echo Bloom',
    text: 'Restore fractured ecosystems by awakening dormant seeds and guiding them back to their natural rhythm.',
  },
  {
    title: 'Sky Lattice',
    text: 'Raise protective barriers that shield the realm from ash storms, dark meteors, and corrupted magic.',
  },
  {
    title: 'Terra Pulse',
    text: 'Sense the heartbeat of the planet and uncover the source of every imbalance before it spreads.',
  },
]

const stats = [
  { value: '6', label: 'Biomes safeguarded' },
  { value: '24/7', label: 'Planetary watch' },
  { value: '5', label: 'Eternal guardians' },
]

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">T</div>
          <div>
            <p className="eyebrow">Terran order</p>
            <h1>Guardian of Terra</h1>
          </div>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#mission">Mission</a>
          <a href="#guardians">Guardians</a>
          <a href="#world">World</a>
          <a href="#join">Join</a>
        </nav>
      </header>

      <main>
        <section className="hero panel">
          <div className="hero-copy">
            <p className="eyebrow accent">The world is waking</p>
            <h2>Protect the living heart of a fractured planet.</h2>
            <p className="lede">
              Ancient forces are stirring beneath Terra. Only the guardians can restore balance,
              awaken the forgotten gates, and keep the sky, sea, and soil in harmony.
            </p>

            <div className="cta-row">
              <button type="button" className="primary">Begin the Quest</button>
              <button type="button" className="secondary">View the Dominion</button>
            </div>

            <div className="stats-grid" aria-label="Project overview stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="planet-core">
              <div className="planet-ring ring-one" />
              <div className="planet-ring ring-two" />
              <div className="planet-glow" />
            </div>
          </div>
        </section>

        <section id="mission" className="content-grid">
          <div className="panel narrative">
            <p className="eyebrow">The crisis</p>
            <h3>Terra's natural bonds are breaking.</h3>
            <p>
              Every biome has begun to drift away from its rhythm. The rivers run black, the
              forests whisper in panic, and the winds carry traces of a dark power once sealed away.
            </p>
            <p>
              The guardians must travel between worlds, rebuild the elemental seals, and protect the
              future of every living thing that depends on Terra's balance.
            </p>
          </div>

          <div className="panel features" aria-label="Core abilities">
            {powers.map((power) => (
              <article key={power.title} className="feature-item">
                <span className="tag">Ability</span>
                <h4>{power.title}</h4>
                <p>{power.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="guardians" className="panel section-block">
          <div className="section-heading">
            <p className="eyebrow">Chosen protectors</p>
            <h3>Meet the guardians of Terra.</h3>
          </div>

          <div className="guardian-grid">
            {guardians.map((guardian) => (
              <article key={guardian.name} className="guardian-card">
                <div className="avatar">{guardian.name[0]}</div>
                <h4>{guardian.name}</h4>
                <p className="role">{guardian.role}</p>
                <p>{guardian.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="world" className="panel section-block world-panel">
          <div className="section-heading">
            <p className="eyebrow">The realm</p>
            <h3>Across the living world.</h3>
          </div>

          <div className="region-grid" aria-label="Biome list">
            {regions.map((region) => (
              <div key={region} className="region-pill">{region}</div>
            ))}
          </div>
        </section>

        <section id="join" className="panel cta-banner">
          <div>
            <p className="eyebrow accent">Answer the call</p>
            <h3>Stand at the edge of the world and defend it.</h3>
          </div>
          <button type="button" className="primary">Join the Watch</button>
        </section>
      </main>
    </div>
  )
}
