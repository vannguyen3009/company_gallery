import React from 'react';

const AffiliateSharing = () => {
  return (
    <div style={{ fontFamily: 'Manrope, sans-serif' }}>
      <style>{`
        body {
            min-height: max(884px, 100dvh);
            background-color: #f6f6f8;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            font-family: 'Material Symbols Outlined';
        }
        .rounded-15 {
            border-radius: 15px;
        }
      `}</style>
      <div className="max-w-[480px] mx-auto min-h-screen flex flex-col bg-background-light dark:bg-background-dark shadow-xl overflow-hidden">
        <header className="bg-primary pt-12 pb-4 px-4 flex items-center gap-4" style={{ backgroundColor: '#1313ae' }}>
          <button className="text-white flex items-center justify-center size-10 hover:bg-white/10 rounded-full transition-colors" aria-label="Go back">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1">
            Chia sẻ liên kết
          </h2>
        </header>
        <main className="flex-1 p-4 space-y-4">
          <section className="bg-white dark:bg-background-dark/50 rounded-15 p-4 shadow-sm border border-black/5 dark:border-white/5" style={{ borderRadius: '15px', backgroundColor: '#ffffff', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
            <h3 className="text-[#0e0e1b] dark:text-white text-base font-bold leading-tight mb-4" style={{ color: '#0e0e1b', fontWeight: '700', fontSize: '1rem', lineHeight: '1.25', marginBottom: '1rem' }}>
              Liên kết giới thiệu của bạn
            </h3>
            <div className="w-full mb-4">
              <div className="relative bg-[#F6F7FB] dark:bg-white/10 rounded-15 p-4 min-h-[56px] flex items-center" style={{ backgroundColor: '#F6F7FB', borderRadius: '15px', padding: '1rem', minHeight: '56px' }}>
                <span className="text-[#0e0e1b] dark:text-white text-sm font-normal leading-normal" style={{ color: '#0e0e1b', fontSize: '0.875rem', lineHeight: '1.25rem', wordBreak: 'break-all' }}>
                  https://dev.coshare.vn/share?id=YHFKU8&amp;name=VGhhbmggRGFv
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 flex cursor-pointer items-center justify-center gap-2 rounded-15 h-11 px-4 border-2 border-primary/10 bg-white dark:bg-transparent text-primary dark:text-primary text-sm font-bold transition-all active:scale-95" style={{ borderRadius: '15px', height: '44px', padding: '0 1rem', border: '2px solid rgba(19, 19, 174, 0.1)', backgroundColor: 'white', color: '#1313ae', fontSize: '0.875rem', fontWeight: '700' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                <span className="truncate">Sao chép</span>
              </button>
              <button className="flex-1 flex cursor-pointer items-center justify-center gap-2 rounded-15 h-11 px-4 bg-primary text-white text-sm font-bold transition-all active:scale-95" style={{ borderRadius: '15px', height: '44px', padding: '0 1rem', backgroundColor: '#1313ae', color: 'white', fontSize: '0.875rem', fontWeight: '700' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                <span className="truncate">Gửi liên kết</span>
              </button>
            </div>
          </section>
          <section className="bg-white dark:bg-background-dark/50 rounded-15 p-4 shadow-sm border border-black/5 dark:border-white/5" style={{ borderRadius: '15px', backgroundColor: '#ffffff', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
            <h3 className="text-[#0e0e1b] dark:text-white text-base font-bold leading-tight mb-4" style={{ color: '#0e0e1b', fontWeight: '700', fontSize: '1rem', lineHeight: '1.25', marginBottom: '1rem' }}>
              Mã QR liên kết của bạn
            </h3>
            <div className="flex flex-col items-center justify-center aspect-square w-full max-w-[240px] mx-auto mb-6 bg-white dark:bg-white/10 rounded-15 border border-primary/10 p-6" style={{ borderRadius: '15px', border: '1px solid rgba(19, 19, 174, 0.1)', padding: '1.5rem', maxWidth: '240px', margin: '0 auto 1.5rem' }}>
              <div style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="8" y1="8" x2="8" y2="8"></line>
                  <line x1="12" y1="8" x2="12" y2="8"></line>
                  <line x1="16" y1="8" x2="16" y2="8"></line>
                  <line x1="8" y1="12" x2="8" y2="12"></line>
                  <line x1="12" y1="12" x2="16" y2="12"></line>
                  <line x1="8" y1="16" x2="12" y2="16"></line>
                  <line x1="16" y1="16" x2="16" y2="16"></line>
                </svg>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 flex cursor-pointer items-center justify-center gap-2 rounded-15 h-11 px-4 border-2 border-primary/10 bg-white dark:bg-transparent text-primary dark:text-primary text-sm font-bold transition-all active:scale-95" style={{ borderRadius: '15px', height: '44px', padding: '0 1rem', border: '2px solid rgba(19, 19, 174, 0.1)', backgroundColor: 'white', color: '#1313ae', fontSize: '0.875rem', fontWeight: '700' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span className="truncate">Tải về</span>
              </button>
              <button className="flex-1 flex cursor-pointer items-center justify-center gap-2 rounded-15 h-11 px-4 bg-primary text-white text-sm font-bold transition-all active:scale-95" style={{ borderRadius: '15px', height: '44px', padding: '0 1rem', backgroundColor: '#1313ae', color: 'white', fontSize: '0.875rem', fontWeight: '700' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                <span className="truncate">Gửi ảnh</span>
              </button>
            </div>
          </section>
        </main>
        <div className="h-8 bg-transparent"></div>
      </div>
    </div>
  );
};

export default AffiliateSharing;
