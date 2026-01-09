import { ArrowLeft, Copy, Share2, Download } from "lucide-react";

const AffiliateSharing = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-sans">
      <div className="min-h-screen flex flex-col max-w-[480px] mx-auto">
        <header className="bg-primary pt-12 pb-5 px-5 flex items-center w-full sticky top-0 z-50">
          <div className="w-full flex items-center gap-4">
            <button
              aria-label="Quay lại"
              className="text-white flex items-center justify-center -ml-2 size-11 hover:bg-white/10 rounded-full transition-colors"
            >
              <ArrowLeft />
            </button>
            <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1">
              Chia sẻ liên kết
            </h2>
          </div>
        </header>
        <main className="flex-1 w-full p-5 space-y-5">
          <section className="bg-white dark:bg-background-dark/50 rounded-15 p-5 shadow-sm border border-black/5 dark:border-white/5 w-full">
            <h3 className="text-[#0e0e1b] dark:text-white text-base font-bold leading-tight mb-4">
              Liên kết giới thiệu của bạn
            </h3>
            <div className="w-full mb-4">
              <div className="relative bg-surface-grey dark:bg-white/5 rounded-15 p-4 min-h-[56px] flex items-center border border-black/5">
                <span className="text-[#0e0e1b] dark:text-gray-200 text-sm font-medium leading-normal break-all">
                  https://dev.coshare.vn/share?id=YHFKU8&amp;name=VGhhbmggRGFv
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-15 h-12 px-2 border-2 border-primary/10 bg-white dark:bg-transparent text-primary text-sm font-bold transition-all active:scale-95 touch-manipulation">
                <Copy size={20} />
                <span className="truncate">Sao chép</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-15 h-12 px-2 bg-primary text-white text-sm font-bold transition-all active:scale-95 touch-manipulation">
                <Share2 size={20} />
                <span className="truncate">Gửi liên kết</span>
              </button>
            </div>
          </section>
          <section className="bg-white dark:bg-background-dark/50 rounded-15 p-5 shadow-sm border border-black/5 dark:border-white/5 w-full">
            <h3 className="text-[#0e0e1b] dark:text-white text-base font-bold leading-tight mb-4 text-center sm:text-left">
              Mã QR liên kết của bạn
            </h3>
            <div className="flex items-center justify-center w-full mb-6">
              <div className="aspect-square w-full max-w-[240px] bg-white dark:bg-white/5 rounded-15 border border-primary/10 p-5 flex items-center justify-center overflow-hidden">
                <img
                  alt="QR Code"
                  className="w-full h-full object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOwlhLKzwj8AmOfB6WZpq0iDM3L2cltKBOV0Yknak_h6JOP2BHjmcQO9NDi4Pw4R2UJVsBNILYx_w4OEyoxNl_3pmhhIe_T3qctrU7IMsr_qTmFfQZGwSGh1cE0VOwoae0nGPc6D9uZTqk1MojO0JslBtkT7aiP4DwLfvV5I_1A4mnCHw_jDG_j5czZ_LoMjHIR9BsgsEQVvVbNTO4_DF_rFnx-AvAp3Eiy2CbLUs-HdDCgpjA4xTbX39ggTTpiZRAjGcppHRc3lMo"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-15 h-12 px-2 border-2 border-primary/10 bg-white dark:bg-transparent text-primary text-sm font-bold transition-all active:scale-95 touch-manipulation">
                <Download size={20} />
                <span className="truncate">Tải về</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-15 h-12 px-2 bg-primary text-white text-sm font-bold transition-all active:scale-95 touch-manipulation">
                <Share2 size={20} />
                <span className="truncate">Gửi ảnh</span>
              </button>
            </div>
          </section>
        </main>
        <div className="h-10 bg-transparent"></div>
      </div>
    </div>
  );
};

export default AffiliateSharing;
