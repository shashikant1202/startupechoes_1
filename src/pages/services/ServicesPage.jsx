import React from 'react';
import images from '../../constants/images';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl 
      shadow-[0_4px_15px_0_rgba(0,0,0,0.1),_4px_0_15px_0_rgba(0,0,0,0.1)] 
      hover:shadow-[0_8px_30px_0_rgba(0,0,0,0.12),_8px_0_30px_0_rgba(0,0,0,0.12)] 
      dark:shadow-white/10 dark:hover:shadow-white/20 
      overflow-hidden transition-all duration-300 hover:-translate-y-2 
      max-w-lg w-full animate-scale-in hover-scale flex flex-col`}>
      <div className="p-8 flex-1 text-center flex flex-col">
        <div className="w-full h-48 mb-6 overflow-hidden rounded-lg animate-fade-in delay-100">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain hover-lift"
          />
        </div>
        <h3 className="text-2xl font-bold text-red-500 mb-4 hover:text-red-600 transition-colors duration-300 animate-fade-in delay-200">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center animate-fade-in delay-300">
          {description}
        </p>
      </div>
      <div className="p-8 pt-0 text-center">
        <a
          href="https://wa.me/9135900606"
          className="inline-block bg-red-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-red-600 transition-all duration-300 hover-lift animate-fade-in delay-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "SEO Optimization",
      description: "Boost your online visibility and rankings:\n\n• Website Audit & Analysis\n• Keyword Research & Strategy\n• On-Page SEO Optimization\n• Technical SEO Implementation\n• Content Optimization\n• Backlink Building\n• Performance Tracking\n\nImprove your website's search engine rankings and drive organic traffic.",
      image: images.services.seo
    },
    {
      title: "Social Media Marketing",
      description: "Amplify your brand presence across platforms:\n\n• Strategy Development\n• Content Creation & Curation\n• Community Management\n• Paid Social Campaigns\n• Analytics & Reporting\n• Influencer Collaboration\n• Brand Building\n\nEngage your audience and grow your social media presence effectively.",
      image: images.services.socialMedia
    },
    {
      title: "Email Marketing",
      description: "Create impactful email campaigns:\n\n• Campaign Strategy\n• List Building & Segmentation\n• Template Design\n• Automation Setup\n• A/B Testing\n• Performance Analytics\n• Conversion Optimization\n\nDrive engagement and conversions through targeted email marketing.",
      image: images.services.emailMarketing
    },
    {
      title: "PPC Marketing",
      description: "Maximize your advertising ROI:\n\n• Campaign Setup & Management\n• Keyword Research\n• Ad Copy Creation\n• Landing Page Optimization\n• Bid Management\n• Performance Tracking\n• ROI Analysis\n\nDrive targeted traffic and conversions through effective paid advertising.",
      image: images.services.ppcMarketing
    },
    {
      title: "Website Designing",
      description: "Create stunning, functional websites:\n\n• Custom Design Development\n• Responsive Layouts\n• Performance Optimization\n• SEO-Friendly Structure\n• Content Integration\n• Security Implementation\n• Maintenance Support\n\nGet a professional website that represents your brand effectively.",
      image: images.services.webDesign
    },
    {
      title: "UI/UX Design",
      description: "Craft exceptional user experiences:\n\n• User Research\n• Wireframing & Prototyping\n• Interface Design\n• User Flow Optimization\n• Visual Design\n• Usability Testing\n• Design Systems\n\nCreate intuitive and engaging digital experiences for your users.",
      image: images.services.uiUx
    },
    {
      title: "FSSAI Registration",
      description: "Complete assistance in obtaining FSSAI registration for your food business. We handle all documentation and compliance requirements to ensure a smooth registration process.",
      image: images.services.fssai
    },
    {
      title: "1:1 Mentorship Program",
      description: "Get personalized guidance for your career and life decisions. Our experienced mentors provide strategic advice, help develop leadership skills, and support your personal growth journey.",
      image: images.services.mentorship
    },
    {
      title: "Cloud Kitchen Mahapack",
      description: "Complete end-to-end solution for setting up your cloud kitchen business. From kitchen setup to online presence, menu planning to delivery partnerships - we help you build a profitable food business.",
      image: images.services.cloudKitchen
    },
    {
      title: "Industrial Training Program",
      description: "Comprehensive training in key business domains:\n\n• HR (Human Resources)\n• Sales\n• Marketing\n• Graphics Design\n• Content Writing\n• Campus Ambassador Program\n• Finance Consulting\n\nGain practical experience and industry-ready skills through hands-on training.",
      image: images.services.training
    },
    {
      title: "Startup Guidance",
      description: "Expert guidance for your startup journey:\n\n• Business Model Development\n• Market Research & Analysis\n• Funding Strategy\n• Team Building\n• Product Development\n• Go-to-Market Strategy\n• Growth Planning\n\nTransform your innovative ideas into successful ventures with our comprehensive startup guidance.",
      image: images.services.startupGuidance
    },
    {
      title: "Dropshipping Business Setup",
      description: "Complete solution for starting your dropshipping business:\n\n• Product Research & Selection\n• Supplier Sourcing\n• E-commerce Store Setup\n• Marketing Strategy\n• Order Processing\n• Customer Service Setup\n• Profit Optimization\n\nStart your online business with minimal investment and maximum potential.",
      image: images.services.dropshipping
    },
    {
      title: "10X Your Proficiency with AI",
      description: "Master AI tools to supercharge your productivity:\n\n• AI Tools Selection & Setup\n• ChatGPT Mastery\n• AI for Content Creation\n• AI for Business Automation\n• AI Research & Analysis\n• AI-Powered Marketing\n• Workflow Optimization\n\nLearn to leverage AI technology to multiply your efficiency and achieve more in less time.",
      image: images.services.aiProficiency
    }
  ];

  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-900 min-h-screen page-transition">
      {/* Header Section */}
      <div className="container mx-auto px-5 py-4 text-center">
        <h1 className="text-5xl font-bold text-red-500 text-center mb-4 hover:text-red-600 transition-colors duration-300 animate-slide-in">
          Our Services
        </h1>
        <p className="text-xl text-gray-800 dark:text-gray-300 text-center max-w-3xl mx-auto mb-8 font-medium animate-fade-in delay-100">
          Elevate your business with our comprehensive digital solutions - from SEO and Digital Marketing to Website Design and UI/UX. We also offer specialized services including Cloud Kitchen Setup, FSSAI Registration, Business Mentorship, and AI productivity enhancement.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, -1).map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
          <div className="lg:col-start-2 sm:col-span-2 lg:col-span-1">
            <ServiceCard
              title={services[services.length - 1].title}
              description={services[services.length - 1].description}
              image={services[services.length - 1].image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
