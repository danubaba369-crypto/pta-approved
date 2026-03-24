import styles from './TrustSignals.module.css';

export default function TrustSignals() {
  const signals = [
    {
      icon: '🏛️',
      title: "PTA Approved",
      description: "LIFETIME PTA CERTIFICATION BACKUP"
    },
    {
      icon: '✅',
      title: "50-Point Inspection",
      description: "RIGOROUSLY TESTED FOR PERFECTION"
    },
    {
      icon: '🛡️',
      title: "Software Warranty",
      description: "7-DAYS PEACE OF MIND GUARANTEE"
    },
    {
      icon: '🚚',
      title: "Free Delivery",
      description: "SECURE NATIONWIDE SHIPPING"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        {signals.map((signal, index) => (
          <div key={index} className={styles.signal}>
            <div className={styles.icon}>{signal.icon}</div>
            <div className={styles.text}>
              <h3>{signal.title}</h3>
              <p>{signal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
