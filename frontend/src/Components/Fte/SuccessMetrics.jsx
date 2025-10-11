import React from 'react'
import './SuccessMetrics.css'
import graph from '../../assets/chart.png'

const SuccessMetrics = () => {
    return (
        <section className="success-metrics-container">
            <div className="metrics-header">
                <h2 className="metrics-title">SUCCESS METRICS</h2>
            </div>

            <div className="metrics-grid">
                {/* First Card - With Graph */}
                <div className="metric-card metric-card-large">
                    <h3 className="metric-heading1">Faster project delivery</h3>
                    <div className="metric-value-wrapper">
                        <span className="metric-icon">↑</span>
                        <span className="metric-value1">60%</span>
                    </div>
                    <div className="metric-graph">
                        <img src={graph} alt="Growth chart" className="graph-image" />
                    </div>
                </div>

                {/* Second Card - Medium */}
                <div className="metric-card metric-card-medium">
                    <h3 className="metric-heading2">FTEs deployed across 7 countries</h3>
                    <div className="metric-value-wrapper">
                        <span className="metric-value2">60+</span>
                    </div>
                </div>

                {/* Third Card - Small */}
                <div className="metric-card metric-card-small">
                    <h3 className="metric-heading3">Output improvement in long-term support</h3>
                    <div className="metric-value-wrapper">
                        <span className="metric-value3">2x</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessMetrics
