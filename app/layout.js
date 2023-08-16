"use client"
import { ThemeProvider } from 'next-themes';

import "./globals.css"

import React from 'react';
// import ThemeProvider from '@/providers/theme-provider';

import {Navbar,Footer} from '@/components';



export default function RootLayout({ children }) {
  return (
    <html>
      <body>
          
          <ThemeProvider attribute="class" >
          <Navbar/>
          <div className="pt-65">

          {children}
          </div>
          <Footer/>

          </ThemeProvider>
      </body>
    </html>
  );
};