import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';

const AffiliateReferrals: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const referrals = [
    { name: 'Nguyễn Văn A', level: 'Affiliate 2', commission: '1.200.000đ' },
    { name: 'Trần Thị B', level: 'Affiliate 2', commission: '850.000đ' },
    { name: 'Lê Hoàng Nam', level: 'Affiliate 2', commission: '2.100.000đ' },
    { name: 'Hoàng Mỹ Duyên', level: 'Affiliate 2', commission: '1.350.000đ' },
    { name: 'Phạm Minh Đức', level: 'Affiliate 3', commission: '2.500.000đ' },
    { name: 'Đặng Thu Thảo', level: 'Affiliate 2', commission: '0đ' },
    { name: 'Vũ Anh Tuấn', level: 'Affiliate 3', commission: '1.800.000đ' },
    { name: 'Bùi Thị Tuyết', level: 'Affiliate 2', commission: '0đ' },
    { name: 'Ngô Gia Bảo', level: 'Affiliate 3', commission: '3.000.000đ' },
    { name: 'Trịnh Kim Chi', level: 'Affiliate 2', commission: '500.000đ' },
  ];

  const filteredReferrals = referrals.filter(
    (referral) =>
      referral.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeFilter === 'Tất cả' || referral.level === activeFilter)
  );

  return (
    <div className="relative mx-auto flex w-full min-h-screen flex-col overflow-x-hidden bg-background-light shadow-2xl transition-all duration-300 dark:bg-background-dark md:max-w-3xl lg:max-w-7xl">
      <div className="sticky top-0 z-50 flex items-center gap-2 bg-primary px-4 py-4 shadow-md">
        <div className="flex size-10 shrink-0 cursor-pointer items-center justify-center text-white">
          <ArrowLeft size={24} />
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-tight text-white">Mạng lưới</h2>
      </div>
      <div className="flex flex-wrap gap-3 p-4">
        <div className="flex min-w-[140px] flex-1 flex-col items-center gap-1 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-center text-xl font-bold leading-tight tracking-tight text-primary">5.500.000đ</p>
          <p className="text-center text-xs font-medium leading-normal tracking-wider text-soft-gray">
            Tổng hoa hồng Affiliate 2
          </p>
        </div>
        <div className="flex min-w-[140px] flex-1 flex-col items-center gap-1 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-center text-xl font-bold leading-tight tracking-tight text-soft-gray">0đ</p>
          <p className="text-center text-xs font-medium leading-normal tracking-wider text-soft-gray">
            Tổng hoa hồng Affiliate 3
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 pb-4 lg:flex-row lg:items-center">
        <div className="w-full lg:flex-1">
          <label className="flex h-11 w-full flex-col">
            <div className="flex h-full w-full flex-1 items-stretch overflow-hidden rounded-lg shadow-sm">
              <div className="flex items-center justify-center border-none bg-white pl-4 text-soft-gray dark:bg-gray-800">
                <Search size={20} />
              </div>
              <input
                className="form-input h-full min-w-0 flex-1 resize-none overflow-hidden border-none bg-white px-3 text-sm font-normal text-[#111118] placeholder:text-soft-gray focus:outline-0 focus:ring-0 dark:bg-gray-800 dark:text-white"
                placeholder="Tìm kiếm đối tác..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </label>
        </div>
        <div className="flex shrink-0 gap-2 overflow-x-auto">
          {['Tất cả', 'Affiliate 2', 'Affiliate 3'].map((filter) => (
            <div
              key={filter}
              className={`flex h-9 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full px-5 shadow-sm ${
                activeFilter === filter
                  ? 'bg-primary'
                  : 'border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              <p
                className={`text-sm font-semibold ${
                  activeFilter === filter
                    ? 'text-white'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {filter}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 px-4 pb-8 lg:grid-cols-2">
        {filteredReferrals.map((referral, index) => (
          <div
            key={index}
            className="flex h-[90px] items-center justify-between gap-4 rounded-xl border border-gray-50 bg-white px-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue/30 text-lg font-bold text-primary">
                {referral.name.charAt(0)}
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-base font-bold leading-tight text-gray-900 dark:text-white">{referral.name}</p>
                <span className="mt-1 inline-flex w-fit rounded bg-accent-blue/20 px-2 py-0.5 text-[10px] font-bold tracking-tighter text-primary">
                  {referral.level}
                </span>
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-end">
              <p
                className={`text-base font-bold leading-tight ${
                  referral.commission === '0đ' ? 'text-soft-gray' : 'text-primary'
                }`}
              >
                {referral.commission}
              </p>
              <p className="text-[10px] font-medium text-soft-gray">Hoa hồng</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiliateReferrals;
