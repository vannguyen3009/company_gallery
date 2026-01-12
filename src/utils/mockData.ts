// Mock data for AffiliateSummary component

export interface Customer {
  id: number;
  name: string;
  joinedDate: string;
  totalSpent: number;
}

export interface IncomeData {
  direct: number;
  system: number;
}

export interface AffiliateData {
  monthlyIncome: IncomeData;
  yearlyIncome: IncomeData;
  customers: Customer[];
}

export const mockAffiliateData: AffiliateData = {
  monthlyIncome: {
    direct: 5500000, // 5.500.000đ
    system: 8000000, // 8.000.000đ
  },
  yearlyIncome: {
    direct: 45500000, // 45.500.000đ
    system: 68000000, // 68.000.000đ
  },
  customers: [
    { id: 1, name: 'Ngọc Trâm', joinedDate: '2024-01-15', totalSpent: 2500000 },
    { id: 2, name: 'Hồng Nhung', joinedDate: '2024-02-20', totalSpent: 1800000 },
    { id: 3, name: 'Văn Thanh', joinedDate: '2024-03-10', totalSpent: 3200000 },
    { id: 4, name: 'Minh Hưng', joinedDate: '2024-04-05', totalSpent: 4100000 },
    { id: 5, name: 'Cẩm Thanh', joinedDate: '2024-05-12', totalSpent: 2900000 },
    { id: 6, name: 'Quang Minh', joinedDate: '2024-06-18', totalSpent: 3500000 },
    { id: 7, name: 'Lan Anh', joinedDate: '2024-07-22', totalSpent: 2700000 },
    { id: 8, name: 'Tuấn Kiệt', joinedDate: '2024-08-30', totalSpent: 4000000 },
    { id: 9, name: 'Mai Linh', joinedDate: '2024-09-14', totalSpent: 3100000 },
    { id: 10, name: 'Hoàng Long', joinedDate: '2024-10-08', totalSpent: 3800000 },
  ],
};