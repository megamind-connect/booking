'use client'

import { useEffect, Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const reportId = searchParams.get('report_id')
  const leadId = searchParams.get('lead_id')

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (typeof window !== 'undefined') {
      // 1. Google Analytics conversion tracking
      if (w.gtag) {
        w.gtag('event', 'conversion', {
          'send_to': 'G-5QJC7SJK0B',
          'event_category': 'engagement',
          'event_label': 'Thank You Page View'
        });
        w.gtag('event', 'generate_lead');
      }

      // 2. Google Tag Manager custom event push
      if (w.dataLayer) {
        w.dataLayer.push({
          event: 'thankyou_page_view',
          page_path: '/thank-you'
        });
      }

      // 3. Meta Pixel conversion tracking
      if (w.fbq) {
        w.fbq('track', 'Lead');
      }
    }
  }, []);

  const query = new URLSearchParams()
  if (reportId) query.append('report_id', reportId)
  if (leadId) query.append('lead_id', leadId)
  const homeHref = query.toString() ? `/?${query.toString()}` : '/'

  return (
    <div className="flex flex-col min-h-screen font-sans text-[#0f0f11] bg-gray-50 leading-relaxed antialiased">
      {/* Header */}
      <header className="py-2.5 border-b border-gray-200 bg-white/85 backdrop-blur-md sticky top-0 z-[100]">
        <div className="w-[92%] max-w-[1180px] mx-auto flex items-center justify-between gap-5">
          <Link href={homeHref} className="text-2xl font-black tracking-tighter text-[#0f0f11] flex items-center">
            <Image 
              src="/megamindlogoBlack.webp" 
              alt="Megamind Logo" 
              width={200}
              height={80}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="w-[92%] max-w-[700px] mx-auto">
          <div className="bg-white border border-gray-200 rounded-[28px] p-6 sm:p-10 lg:py-[60px] lg:px-[50px] text-center shadow-lg">
            <h1 className="text-[clamp(32px,4vw,48px)] font-black text-[#0f0f11] mb-4">Thank You</h1>
            <p className="text-gray-500 text-lg mb-8">Your submission was successful. We will be in touch with you shortly.</p>
            <Link href={homeHref} className="inline-block border-none bg-gradient-to-br from-[#e31313] to-[#ff4b4b] text-white py-4 px-8 rounded-xl font-extrabold shadow-[0_10px_25px_rgba(227,19,19,0.25)] hover:-translate-y-[3px] hover:shadow-[0_15px_35px_rgba(227,19,19,0.4)] transition-all duration-300">
              Return to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#121214] text-white py-10 text-center border-t border-white/5 mt-auto">
        <div className="w-[92%] max-w-[1180px] mx-auto">
          <p className="text-[#a1a1aa] text-sm">&copy; {new Date().getFullYear()} Megamind Studios. All rights reserved. Strategic audits for high-growth brands.</p>
        </div>
      </footer>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-white font-sans text-gray-500">
        <div>Loading thank you details...</div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  )
}
