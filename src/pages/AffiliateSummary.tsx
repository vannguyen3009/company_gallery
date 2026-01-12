import { ArrowLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { mockAffiliateData } from '../utils/mockData';

const AffiliateSummary: React.FC = () => {
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('vi-VN') + 'đ';
  };

  const { monthlyIncome, yearlyIncome, customers } = mockAffiliateData;

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      <header className="bg-primary text-white pt-14 pb-8 w-full shrink-0">
        <div className="max-w-[600px] mx-auto px-4">
          <div className="flex items-center gap-4">
            <a href="#" className="inline-flex items-center justify-center w-10 h-10 -ml-2 hover:bg-white/10 rounded-full transition-colors">
              <ArrowLeft size={24} />
            </a>
            <h1 className="text-xl font-bold">Tổng quan thu nhập</h1>
          </div>
        </div>
      </header>
      <main className="flex-grow pt-5">
        <div className="max-w-[600px] mx-auto px-4">
          <div className="space-y-4 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-[15px] p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-[#727A88] font-bold text-base">Tổng thu nhập tháng</h2>
                  <a href="/my-affiliate-incomes" className="text-gray-400 dark:text-gray-500 text-sm font-medium flex items-center hover:text-primary transition-colors py-1">
                    Xem tất cả <ChevronRight size={18} className="ml-0.5" />
                  </a>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(monthlyIncome.direct)}</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">Trực tiếp</span>
                  </div>
                  <hr className="border-gray-100 dark:border-gray-700" />
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(monthlyIncome.system)}</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">Hệ thống</span>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-[15px] p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-[#727A88] font-bold text-base">Tổng thu nhập năm</h2>
                  <a href="/my-affiliate-incomes" className="text-gray-400 dark:text-gray-500 text-sm font-medium flex items-center hover:text-primary transition-colors py-1">
                    Xem tất cả <ChevronRight size={18} className="ml-0.5" />
                  </a>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(yearlyIncome.direct)}</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">Trực tiếp</span>
                  </div>
                  <hr className="border-gray-100 dark:border-gray-700" />
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(yearlyIncome.system)}</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">Hệ thống</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-[15px] p-5 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[#727A88] font-bold text-base">Khách hàng</h2>
                <a href="/my-customers" className="text-gray-400 dark:text-gray-500 text-sm font-medium flex items-center hover:text-primary transition-colors py-1">
                  Xem tất cả <ChevronRight size={18} className="ml-0.5" />
                </a>
              </div>
              <div className="space-y-4">
                {customers.map((customer) => (
                  <div key={customer.id} className="flex items-center gap-4 p-1 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors group">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-[10px] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="font-bold">{customer.id}</span>
                    </div>
                    <p className="text-gray-900 dark:text-white font-semibold flex-1 text-base">{customer.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="pb-6 pt-4 w-full flex justify-center bg-background-light dark:bg-background-dark mt-auto">
        <div className="w-32 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      </footer>
    </div>
  );
};

export default AffiliateSummary;