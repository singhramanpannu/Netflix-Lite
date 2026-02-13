import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-12 py-10">
      {/* Top text */}
      <p className="mb-6">Questions? Call 000-800-919-1694</p>

      {/* Links grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8 text-sm">
        <a href="#" className="hover:underline">FAQ</a>
        <a href="#" className="hover:underline">Help Centre</a>
        <a href="#" className="hover:underline">Account</a>
        <a href="#" className="hover:underline">Media Centre</a>
        <a href="#" className="hover:underline">Investor Relations</a>
        <a href="#" className="hover:underline">Jobs</a>
        <a href="#" className="hover:underline">Ways to Watch</a>
        <a href="#" className="hover:underline">Terms of Use</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Cookie Preferences</a>
        <a href="#" className="hover:underline">Corporate Information</a>
        <a href="#" className="hover:underline">Contact Us</a>
        <a href="#" className="hover:underline">Speed Test</a>
        <a href="#" className="hover:underline">Legal Notices</a>
        <a href="#" className="hover:underline">Only on Netflix</a>
      </div>

      {/* Language selector */}
      <div className="mb-6">
        <select className="bg-black border border-gray-500 text-gray-400 px-2 py-1 text-sm">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
      </div>

      {/* Bottom text */}
      <p className="text-xs">Netflix India</p>
    </footer>
  );
}

export default Footer;
