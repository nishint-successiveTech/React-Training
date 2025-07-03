
"use client";
import Sidebar from '@/components/Assignment4/MUI';
import React from 'react';

const metadata = {
  title: 'My App',
  description: 'Responsive MUI sidebar with App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
