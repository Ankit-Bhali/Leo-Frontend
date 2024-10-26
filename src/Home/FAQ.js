import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Why are digital marketing skills relevant today?",
            answer: "Digital marketing skills are essential today as businesses increasingly rely on online platforms to reach and engage their target audiences. These skills drive brand visibility, customer acquisition, and revenue growth in a digital-first world."
        },
        {
            question: "How advanced is the Digital Marketing Course?",
            answer: "Advanced digital marketing courses cover in-depth strategies like SEO, data analytics, AI-driven marketing, and automation tools. They equip learners with expertise in cutting-edge trends to effectively optimize campaigns and drive business results."
        },
        {
            question: "What projects will I work on during the course?",
            answer: "During a digital marketing course, you’ll work on projects like creating SEO-optimized websites, running social media ad campaigns, and analyzing real-time data to improve marketing strategies. These hands-on tasks help you apply skills directly to real-world scenarios."
        },
        {
            question: "Can I work full-time while enrolled in this course?",
            answer: "Yes, many digital marketing courses offer flexible schedules, including part-time, online, or self-paced options, allowing you to work full-time while enrolled. This flexibility makes it easier to balance your job and studies."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <div className="general-question-wrapper">
                <h2 className="general-question">General Question</h2>
            </div>
            <h1 data-aos="fade-left">Frequently Asked Questions</h1>
            <div className="faq-list" data-aos="fade-up">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <h3>{faq.question}</h3>
                            <span>{activeIndex === index ? '-' : '+'}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {/* <button className="view-all-button">View All Questions</button> */}
        </div>
    );
};

export default FAQ;
