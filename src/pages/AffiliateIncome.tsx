import React from "react";
import { ArrowLeft, Search, ChevronDown } from "lucide-react";

const AffiliateIncome: React.FC = () => {
  const incomeData = [
    {
      name: "Trương Lê Hưng2",
      date: "29/05/2025 09:58",
      status: "Đã duyệt",
      total: "62.500.000đ",
      commission: "11.250.000đ",
    },
    {
      name: "User test",
      date: "29/05/2025 09:22",
      status: "Đang đối soát",
      total: "17.000.000đ",
      commission: "1.700.000đ",
    },
    {
      name: "Trương Lê Hưng2",
      date: "27/05/2025 10:07",
      status: "Đã duyệt",
      total: "2.990.000đ",
      commission: "538.200đ",
    },
    {
      name: "User test",
      date: "23/04/2025 15:35",
      status: "Đang đối soát",
      total: "2.253.000đ",
      commission: "-225.300đ",
    },
    {
      name: "Trương Lê Hưng2",
      date: "14/04/2025 15:39",
      status: "Đang đối soát",
      total: "2.980.000.000đ",
      commission: "596.000.000đ",
    },
    {
      name: "Trương Lê Hưng2",
      date: "10/04/2025 16:34",
      status: "Đã duyệt",
      total: "244.846đ",
      commission: "48.969đ",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Đã duyệt":
        return "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400";
      case "Đang đối soát":
        return "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400";
      default:
        return "bg-gray-50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-400";
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 font-sans antialiased min-h-screen pb-safe transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-card-light/90 dark:bg-card-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 h-16 flex items-center transition-colors duration-300">
        <div className="max-w-6xl mx-auto w-full px-4 flex items-center justify-between">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <ArrowLeft className="text-gray-600 dark:text-gray-300" />
          </button>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">
            Thu nhập
          </h1>
          <div className="w-10"></div>
        </div>
      </header>
      <main className="pt-20 pb-8 px-4 max-w-lg lg:max-w-6xl mx-auto">
        <div className="mb-6">
          <div className="bg-primary text-white rounded-xl p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-lg shadow-blue-900/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-24 h-24 bg-white opacity-5 rounded-full"></div>
            <span className="text-sm lg:text-base font-medium text-blue-100 mb-1">
              Tổng tiền thu nhập
            </span>
            <span className="text-3xl lg:text-5xl font-extrabold tracking-tight">
              14.008.200đ
            </span>
          </div>
        </div>
        <div className="sticky top-16 z-40 bg-background-light dark:bg-background-dark py-4 -mx-4 px-4 mb-4 lg:mb-6 transition-colors duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center gap-3">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={20} />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-600 rounded-xl leading-5 bg-white dark:bg-card-dark text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-colors shadow-sm"
                placeholder="Tìm kiếm tài khoản..."
                type="text"
              />
            </div>
            <div className="flex space-x-3 overflow-x-auto hide-scrollbar lg:overflow-visible">
              <button className="flex-shrink-0 inline-flex items-center px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm transition-colors">
                Ngày đặt
                <ChevronDown className="text-base ml-1" size={20} />
              </button>
              <button className="flex-shrink-0 inline-flex items-center px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm transition-colors">
                Đơn trực tiếp
              </button>
              <button className="flex-shrink-0 inline-flex items-center px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm transition-colors">
                Đơn hệ thống
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {incomeData.map((item, index) => (
            <div
              key={index}
              className="bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="overflow-hidden">
                  <p className="text-[15px] font-bold text-gray-900 dark:text-white truncate">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                    {item.date}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${getStatusClass(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                <div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-0.5">
                    Tổng tiền
                  </p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">
                    {item.total}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-0.5">
                    Hoa hồng
                  </p>
                  <p
                    className={`text-sm font-bold ${
                      item.commission.startsWith("-")
                        ? "text-red-500 dark:text-red-400"
                        : "text-primary dark:text-blue-400"
                    }`}
                  >
                    {item.commission}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 mb-6 flex justify-center items-center gap-3">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Hiển thị từ 1 đến 6 trong 6 giao dịch
          </span>
          <button className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors">
            <ChevronDown
              className="text-gray-600 dark:text-gray-300"
              size={16}
            />
          </button>
        </div>
      </main>
    </div>
  );
};
export default AffiliateIncome;
