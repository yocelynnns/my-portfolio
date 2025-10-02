import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-200 text-center">
      <p className="text-gray-600">© {new Date().getFullYear()} Yocelyn. All rights reserved.</p>
    </footer>
  );
}