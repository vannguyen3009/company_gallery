import { ArrowLeft, Copy, Download, Share2 } from "lucide-react";
import { useCallback, useState } from "react";

const AffiliateSharing = () => {
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [showDownloadToast, setShowDownloadToast] = useState(false);
  const [showDownloadErrorToast, setShowDownloadErrorToast] = useState(false);
  const titlePage = "Chia sẻ liên kết";
  const titleCopyBtn = "Sao chép";
  const titleSendBtn = "Gửi liên kết";
  const referralUrl =
    "https://dev.coshare.vn/share?id=YHFKU8&name=VGhhbmggRGFv";
  const qrImageUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAD04TaCUozSX2ggHn1Onk3E2R4iwXhysTC9wIOtUv1jW6OPx9fe6dYWNsdH3fp_iVpPZf97yN69fgMtKxYI-OrxemLBIBD4U8fDdjm0MPpDyuuMZIJKaiS6wlDhsM5ct19PqNMN_f9siMdL5fg7twCeVhuY0YBsd8VGTlpYoqygJa8UeeGcic1D3SGoLXtQwLEQs5MGu9-KhTdytxZ_BNMjewyJKBXPVmA_P2_uu3r-kQL6KXCqpaGLsK6wSh3fxNm1Dnzght91uQ-";

  const showToast = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(true);
    setTimeout(() => {
      setter(false);
    }, 2000);
  };

  const copyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(referralUrl)
      .then(() => {
        showToast(setShowCopyToast);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }, [referralUrl]);

  const handleDownloadQRImage = useCallback(async () => {
    try {
      const response = await fetch(qrImageUrl);
      if (!response.ok) throw new Error("Failed to fetch image");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "QR_Link_Coshare.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showToast(setShowDownloadToast);
    } catch (error) {
      console.error("Failed to download image:", error);
      showToast(setShowDownloadErrorToast);
    }
  }, [qrImageUrl]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-app-bg">
      <div className="flex-1 flex flex-col items-center">
        <header className="bg-primary pt-12 pb-5 px-4 flex items-center w-full sticky top-0 z-50">
          <div className="max-w-[480px] mx-auto w-full flex items-center gap-4">
            <button
              aria-label="Quay lại"
              className="text-white flex items-center justify-center -ml-2 size-11 hover:bg-white/10 rounded-full transition-colors"
            >
              <ArrowLeft />
            </button>
            <h2 className="text-white header-text leading-tight tracking-tight flex-1">
              {titlePage}
            </h2>
          </div>
        </header>

        <main className="flex-1 w-full max-w-[480px] mx-auto p-4 space-y-5">
          {/* Referral Link Section */}
          <section className="bg-white rounded-15 p-4 shadow-sm border border-border-light w-full">
            <h3 className="text-text-primary card-title leading-tight mb-4 text-left">
              Liên kết của bạn
            </h3>
            <div className="w-full mb-4">
              <div className="relative bg-secondary-bg rounded-15 p-4 min-h-[56px] flex items-center border border-border-light">
                <span
                  className="text-text-primary body-link leading-normal break-all"
                  id="referral-url"
                >
                  {referralUrl}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 relative">
              <button
                onClick={copyToClipboard}
                className="flex items-center justify-center gap-2 rounded-15 h-12 px-2 border border-primary/20 bg-white text-primary button-text transition-all active:scale-95 touch-manipulation"
              >
                <Copy size={20} />
                <span className="truncate">{titleCopyBtn}</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-15 h-12 px-2 bg-primary text-white button-text transition-all active:scale-95 touch-manipulation">
                <Share2 size={20} />
                <span className="truncate">{titleSendBtn}</span>
              </button>
              <div
                className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[12px] px-3 py-1.5 rounded-full pointer-events-none z-10 whitespace-nowrap transition-opacity duration-300 ${
                  showCopyToast ? "opacity-100" : "opacity-0"
                }`}
                id="toast-copy"
              >
                Đã sao chép
              </div>
            </div>
          </section>

          {/* QR Code Section */}
          <section className="bg-white rounded-15 p-4 shadow-sm border border-border-light w-full">
            <h3 className="text-text-primary card-title leading-tight mb-4 text-left">
              Mã QR liên kết của bạn
            </h3>
            <div className="flex items-center justify-center w-full mb-6">
              <div className="aspect-square w-full max-w-[240px] bg-white rounded-15 border border-border-light p-0 flex items-center justify-center overflow-hidden">
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
                onClick={handleDownloadQRImage}
                className="flex items-center justify-center gap-2 rounded-15 h-12 px-2 border border-primary/20 bg-white text-primary button-text transition-all active:scale-95 touch-manipulation"
              >
                <Download size={20} />
                <span className="truncate">Tải về</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-15 h-12 px-2 bg-primary text-white button-text transition-all active:scale-95 touch-manipulation">
                <Share2 size={20} />
                <span className="truncate">Gửi ảnh</span>
              </button>
              <div
                className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[12px] px-3 py-1.5 rounded-full pointer-events-none z-10 whitespace-nowrap transition-opacity duration-300 ${
                  showDownloadToast ? "opacity-100" : "opacity-0"
                }`}
                id="toast-download"
              >
                Đã tải ảnh về thiết bị
              </div>
              <div
                className={`absolute -top-20 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[12px] px-3 py-1.5 rounded-full pointer-events-none z-10 whitespace-nowrap transition-opacity duration-300 ${
                  showDownloadErrorToast ? "opacity-100" : "opacity-0"
                }`}
                id="toast-download-error"
              >
                Lỗi tải ảnh
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
