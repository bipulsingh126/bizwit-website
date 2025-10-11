import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: 'DEFINE SCOPE & SKILLSET',
            description: 'At the outset, we collaborate closely with your team to clearly define project objectives, required skillsets, experience levels, and desired outcomes. This ensures alignment from the start and allows us to build a precise resource and delivery roadmap tailored to your business goals.'
        },
        {
            id: 2,
            title: 'SELECT PROFILES',
            description: 'Based on the scope and skillset requirements, we shortlist and present the most suitable candidate profiles from our talent pool. You have full control in reviewing, evaluating, and selecting professionals who best fit your project, team culture, and expectations.'
        },
        {
            id: 3,
            title: 'TRIAL PHASE(OPTIONAL)',
            description: 'To ensure compatibility and performance, we offer an optional trial period. This allows you to assess selected resources in real-time project environments, offering risk-free evaluation before committing to full onboarding.'
        },
        {
            id: 4,
            title: 'FULL ONBOARDING',
            description: 'Once the profiles are finalized, we initiate the complete onboarding process, including documentation, compliance, system access, and knowledge transfer. We ensure a smooth transition so your selected team members are fully integrated and productive from day one.'
        },
        {
            id: 5,
            title: 'MONTHLY REVIEWS & ADJUSTMENTS',
            description: 'We maintain ongoing collaboration through monthly performance reviews and feedback loops. This allows for continuous improvement, resource optimization, and necessary adjustments to align with evolving project needs or business priorities.'
        }
    ];

    return (
        <section className="how-it-works-container">
            <div className="how-it-works-header">
                <h2 className="how-it-works-title">HOW IT WORKS</h2>
            </div>

            <div className="steps-wrapper">
                {steps.map((step, index) => (
                    <div key={step.id} className="step-item">
                        <div className="step-number-wrapper">
                            <div className="step-number">{step.id}</div>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                        <div className="step-card">
                            <div className="step-title-section">
                                <h3 className="step-title">{step.title}</h3>
                            </div>
                            <div className="step-description-section">
                                <p className="step-description">{step.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HowItWorks
