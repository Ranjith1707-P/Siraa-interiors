'use client';

import { useState, useEffect } from 'react';
import { HelpCircle, Info, Calculator as CalcIcon, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Calculator.module.css';

export default function Calculator() {
  const [workType, setWorkType] = useState<'normal' | 'box'>('normal');
  const [width, setWidth] = useState<number>(6);
  const [height, setHeight] = useState<number>(7);
  const [rate, setRate] = useState<number>(180);

  // Quality options depending on workType
  const normalRates = [
    { name: 'Standard', rate: 180, desc: 'Commercial ply & standard laminates' },
    { name: 'Premium', rate: 200, desc: 'Waterproof ply & high-gloss laminates' },
    { name: 'Luxury Teak', rate: 250, desc: 'Teak wood shutters or veneer polish' }
  ];

  const boxRates = [
    { name: 'Standard Box', rate: 300, desc: 'Waterproof marine ply boxes, standard laminates' },
    { name: 'Luxury Box', rate: 350, desc: 'Double-laminated marine ply boxes, premium fixtures' }
  ];

  // Sync rate when workType changes
  useEffect(() => {
    if (workType === 'normal') {
      setRate(180);
    } else {
      setRate(300);
    }
  }, [workType]);

  const activeRates = workType === 'normal' ? normalRates : boxRates;
  const area = width * height;
  const estimatedCost = area * rate;

  const handleApplyEstimate = () => {
    const message = `Hi SIRAA Interiors, I estimated my woodwork cost using your calculator. 
Details:
- Cupboard Type: ${workType === 'normal' ? 'Normal Cupboard' : 'Full Box Cupboard'}
- Size: ${width}ft (Width) x ${height}ft (Height)
- Total Area: ${area} Sq. Ft.
- Material/Quality Choice: ₹${rate}/sq.ft
- Estimated Labor/Work Quote: ₹${estimatedCost.toLocaleString('en-IN')}

Please contact me to discuss the final pricing.`;

    const event = new CustomEvent('applyEstimate', {
      detail: {
        workType: 'Cupboards & Wardrobes',
        message: message
      }
    });
    
    window.dispatchEvent(event);
    
    // Smooth scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className={`${styles.calcSection} section-padding`}>
      <div className="container">
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>Instant Estimations</span>
          <h2 className={styles.title}>Woodwork Cost Calculator</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Get a transparent, quick estimate for your cupboard and wardrobe woodworking. Select your parameters and check the labor price instantly.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className={styles.grid}>
          {/* Controls */}
          <div className={styles.calcCard}>
            
            {/* Step 1: Cupboard Design Type */}
            <div className={styles.formGroup}>
              <div className={styles.label}>
                <span>1. Select Design Structure</span>
                <HelpCircle size={16} style={{ color: 'var(--text-muted)' }} />
              </div>
              <div className={styles.typeGrid}>
                <button 
                  className={`${styles.typeBtn} ${workType === 'normal' ? styles.typeBtnActive : ''}`}
                  onClick={() => setWorkType('normal')}
                >
                  <div className={styles.typeTitle}>Normal Cupboard</div>
                  <div className={styles.typeDesc}>Frontal framework + doors fitted on existing concrete shelves or wall borders.</div>
                </button>
                <button 
                  className={`${styles.typeBtn} ${workType === 'box' ? styles.typeBtnActive : ''}`}
                  onClick={() => setWorkType('box')}
                >
                  <div className={styles.typeTitle}>Full Box Cupboard</div>
                  <div className={styles.typeDesc}>A complete independent cabinet box with backing plywood, top, sides, and shelves.</div>
                </button>
              </div>
            </div>

            {/* Step 2: Dimensions */}
            <div className={styles.formGroup}>
              <div className={styles.label}>
                <span>2. Cupboard Width (Feet)</span>
                <span className={styles.labelVal}>{width} ft</span>
              </div>
              <input 
                type="range" 
                min="2" 
                max="20" 
                value={width} 
                onChange={(e) => setWidth(Number(e.target.value))} 
                className={styles.slider}
              />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.label}>
                <span>3. Cupboard Height (Feet)</span>
                <span className={styles.labelVal}>{height} ft</span>
              </div>
              <input 
                type="range" 
                min="2" 
                max="12" 
                value={height} 
                onChange={(e) => setHeight(Number(e.target.value))} 
                className={styles.slider}
              />
            </div>

            {/* Step 3: Material & Work Grade */}
            <div className={styles.formGroup}>
              <div className={styles.label}>
                <span>4. Select Material & Polish Grade</span>
                <span className={styles.labelVal}>₹{rate} / sq.ft</span>
              </div>
              <div className={styles.qualityGrid}>
                {activeRates.map((tier) => (
                  <button
                    key={tier.name}
                    className={`${styles.qualityCard} ${rate === tier.rate ? styles.qualityCardActive : ''}`}
                    onClick={() => setRate(tier.rate)}
                  >
                    <div className={styles.qualityName}>{tier.name}</div>
                    <div className={styles.qualityRate}>₹{tier.rate}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '8px', lineHeight: '1.3' }}>
                      {tier.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Sidebar */}
          <div style={{ height: '100%' }}>
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>Estimation Summary</h3>
              
              <div className={styles.sumRow}>
                <span>Structure Type:</span>
                <span className={styles.sumRowVal}>
                  {workType === 'normal' ? 'Normal Cupboard' : 'Full Box Cupboard'}
                </span>
              </div>
              <div className={styles.sumRow}>
                <span>Dimensions:</span>
                <span className={styles.sumRowVal}>{width} ft × {height} ft</span>
              </div>
              <div className={styles.sumRow}>
                <span>Calculated Area:</span>
                <span className={styles.sumRowVal}>{area} sq. ft.</span>
              </div>
              <div className={styles.sumRow}>
                <span>Rate per Sq. Ft:</span>
                <span className={styles.sumRowVal}>₹{rate}</span>
              </div>

              <div className={styles.sumTotal}>
                <span className={styles.sumTotalLbl}>Estimated Labor Cost:</span>
                <span className={styles.sumTotalVal}>₹{estimatedCost.toLocaleString('en-IN')}</span>
              </div>

              <button className="gold-btn" style={{ width: '100%', gap: '12px' }} onClick={handleApplyEstimate}>
                <ClipboardCheck size={18} />
                <span>Book This Work</span>
              </button>

              <div className={styles.noteCard}>
                <div className={styles.noteTitle}>
                  <Info size={14} />
                  <span>Labor Contract Model</span>
                </div>
                <p className={styles.noteText}>
                  Work rates are for craftsmanship & labor. Materials are typically provided by the owner, but we can customize the material sourcing/contract according to your specific budget, food/labor arrangements, and site conditions.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
