import { ArrowLeft, Copy, Download, Share2 } from 'lucide-react';
import { useCallback, useState } from 'react';

const AffiliateSharing = () => {
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [showDownloadToast, setShowDownloadToast] = useState(false);

  const referralUrl = "https://dev.coshare.vn/share?id=YHFKU8&name=VGhhbmggRGFv";
  const qrImageUrl = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https://dev.coshare.vn/share?id=YHFKU8&name=VGhhbmggRGFv";

  const showToast = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(true);
    setTimeout(() => {
      setter(false);
    }, 2000);
  };

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(referralUrl).then(() => {
      showToast(setShowCopyToast);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }, [referralUrl]);

  const downloadQRImage = useCallback(() => {
    const link = document.createElement('a');
    link.href = qrImageUrl;
    link.download = 'QR_Link_Coshare.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(setShowDownloadToast);
  }, [qrImageUrl]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F0F2F5]">
      <div className="flex-1 flex flex-col items-center">
        <header className="bg-[#151EB3] pt-12 pb-5 px-4 flex items-center w-full sticky top-0 z-50">
          <div className="max-w-[480px] mx-auto w-full flex items-center gap-4">
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

        <main className="flex-1 w-full max-w-[480px] mx-auto p-4 space-y-5">
          {/* Referral Link Section */}
          <section className="bg-white rounded-[15px] p-4 shadow-sm border border-[#E5E7EB] w-full">
            <h3 className="text-[#111827] text-base font-semibold leading-tight mb-4 text-left">
              Liên kết giới thiệu của bạn
            </h3>
            <div className="w-full mb-4">
              <div className="relative bg-[#F6F7FB] rounded-[15px] p-4 min-h-[56px] flex items-center border border-[#E5E7EB]">
                <span className="text-[#111827] text-sm leading-normal break-all">
                  {referralUrl}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 relative">
              <button
                onClick={copyToClipboard}
                className="flex items-center justify-center gap-2 rounded-[15px] h-12 px-2 border border-[#151EB3]/20 bg-white text-[#151EB3] text-sm font-medium transition-all active:scale-95"
              >
                <Copy size={20} />
                <span className="truncate">Sao chép</span>
              </button>
              <button
                className="flex items-center justify-center gap-2 rounded-[15px] h-12 px-2 bg-[#151EB3] text-white text-sm font-medium transition-all active:scale-95"
              >
                <Share2 size={20} />
                <span className="truncate">Gửi liên kết</span>
              </button>
              <div
                className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[12px] px-3 py-1.5 rounded-full pointer-events-none z-10 whitespace-nowrap transition-opacity duration-300 ${
                  showCopyToast ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Đã sao chép
              </div>
            </div>
          </section>

          {/* QR Code Section */}
          <section className="bg-white rounded-[15px] p-4 shadow-sm border border-[#E5E7EB] w-full">
            <h3 className="text-[#111827] text-base font-semibold leading-tight mb-4 text-left">
              Mã QR liên kết của bạn
            </h3>
            <div className="flex items-center justify-center w-full mb-6">
              <div className="aspect-square w-full max-w-[240px] bg-white rounded-[15px] border border-[#E5E7EB] p-0 flex items-center justify-center overflow-hidden">
                <img
                  alt="QR Code"
                  className="w-full h-full object-cover block"
                  id="qr-image"
                  src={qrImageUrl}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 relative">
              <button
                onClick={downloadQRImage}
                className="flex items-center justify-center gap-2 rounded-[15px] h-12 px-2 border border-[#151EB3]/20 bg-white text-[#151EB3] text-sm font-medium transition-all active:scale-95"
              >
                <Download size={20} />
                <span className="truncate">Tải về</span>
              </button>
              <button
                className="flex items-center justify-center gap-2 rounded-[15px] h-12 px-2 bg-[#151EB3] text-white text-sm font-medium transition-all active:scale-95"
              >
                <Share2 size={20} />
                <span className="truncate">Gửi ảnh</span>
              </button>
              <div
                className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[12px] px-3 py-1.5 rounded-full pointer-events-none z-10 whitespace-nowrap transition-opacity duration-300 ${
                  showDownloadToast ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Đã tải ảnh về thiết bị
              </div>
            </div>
          </section>
        </main>
        <div className="h-10"></div>
      </div>
    </div>
  );
};

export default AffiliateSharing;
