import React from 'react'
import './WhyFte.css'

const WhyFte = () => {
    const features = [
        '100% Dedicated resources',
        'Cost-optimized engagement',
        'Onboarding in <5 days',
        'Scalable & contract-based',
        'Skill & domain resources'
    ];

    const benefits = [
        'Lower TCO compared to traditional models',
        'Aligned with your timezone & workflow',
        'Swap resources based on evolving needs',
        'Start fast, stay ahead',
        'Monthly or long-term engagement models'
    ];

    return (
        <section className="why-fte-container">
            <div className="why-fte-header">
                <button className="why-fte-title">WHY FTE WITH BIZWIT?</button>
            </div>

            <div className="why-fte-cards">
                <div className="fte-card">
                    <h3 className="card-heading">Feature</h3>
                    <ul className="card-list">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="fte-card">
                    <h3 className="card-heading">Benefit</h3>
                    <ul className="card-list">
                        {benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WhyFte
