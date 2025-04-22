import React from "react";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-blue-900 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Your Full Name</h1>
        <p className="mt-2 text-lg">Virtual Solutions Specialist | Web Design | Content Strategy</p>
        <p className="mt-1 text-sm">your@email.com | +234-XXXXXXXXXX</p>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">About Me</h2>
          <p>
            I’m a versatile digital service provider with experience in research analysis,
            content creation, web design, and virtual assistance. I help businesses and entrepreneurs
            grow their online presence and streamline operations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Social Media & Content Marketing:</strong> Post design, campaign planning, hashtag strategy</li>
            <li><strong>Copywriting & Newsletters:</strong> Blog posts, sales pages, newsletters, email campaigns</li>
            <li><strong>Research & Virtual Assistant Services:</strong> Reports, calendar/email management, tutoring</li>
            <li><strong>Web Design:</strong> WordPress, Google Business, landing pages, e-commerce setup</li>
            <li><strong>Data Entry & Admin:</strong> Excel sheets, file organizing, online forms</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Tools I Work With</h2>
          <p>
            Canva, WordPress, Google Suite, Excel, Notion, Trello, Mailchimp, Zoom,
            ChatGPT, Shopify, Substack
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Let’s Work Together</h2>
          <p>
            Whether you're a small business owner, school, or professional, I offer
            flexible, high-quality support designed to save you time and drive results.
          </p>
          <p className="mt-2">Contact me today to discuss your project or request a custom quote.</p>
        </section>
      </main>

      <footer className="text-center bg-blue-900 text-white py-4">
        <p>&copy; 2025 Your Full Name | All rights reserved.</p>
      </footer>
    </div>
  );
}