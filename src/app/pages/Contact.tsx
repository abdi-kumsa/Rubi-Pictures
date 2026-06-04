import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from 'react-helmet-async';

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend for email processing
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Contact Us | Rubi Pictures</title>
        <meta name="description" content="Get in touch with Rubi Pictures for your next production project. Located in Nairobi, Kenya." />
        <meta property="og:title" content="Contact Us | Rubi Pictures" />
        <meta property="og:description" content="Get in touch with Rubi Pictures for your next production project. Located in Nairobi, Kenya." />
      </Helmet>
      <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Get In Touch</h1>
            <p className="text-lg text-[#1a1a1a] mb-12 leading-relaxed">
              Have a project in mind or want to learn more about our services?
              We'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-black" />
                </div>
                <div>
                  <p className="text-sm text-black/50 mb-1">Email</p>
                  <a
                    href="mailto:hello@rubipictures.com"
                    className="font-medium text-black hover:text-black/70 transition-colors"
                  >
                    hello@rubipictures.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-black" />
                </div>
                <div>
                  <p className="text-sm text-black/50 mb-1">Phone</p>
                  <a
                    href="tel:+254725512732"
                    className="font-medium text-black hover:text-black/70 transition-colors"
                  >
                    +254725512732
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-black" />
                </div>
                <div>
                  <p className="text-sm text-black/50 mb-1">Location</p>
                  <p className="font-medium text-black">
                    Nairobi, Kenya
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 transition-shadow"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 transition-shadow"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 transition-shadow resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3.5 bg-gradient-to-r from-[#8B0000] to-[#FF6B35] text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
