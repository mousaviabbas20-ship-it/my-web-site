import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Camera, Search, Functions, BrainCircuit } from 'lucide-react';

// یک چیدمان ساده که جایگزین فایل Layout غایب می‌شود
const SimpleLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gray-100 font-['Vazirmatn']" dir="rtl">
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <BrainCircuit /> نهم‌یار هوشمند
        </h1>
        <div className="flex gap-4 text-sm">
          <Link to="/" className="hover:underline">داشبورد</Link>
          <Link to="/study" className="hover:underline">مطالعه</Link>
        </div>
      </div>
    </nav>
    <main className="container mx-auto p-4">{children}</main>
  </div>
);

// صفحات ساده موقت برای اینکه سایت خطا ندهد
const Dashboard = () => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-2xl font-bold mb-4">خوش آمدید!</h2>
    <p>سایت با موفقیت منتشر شد. حالا می‌توانید بخش‌های مختلف را توسعه دهید.</p>
    <div className="grid grid-cols-2 gap-4 mt-6">
      <Link to="/study" className="p-4 bg-blue-50 rounded-lg flex flex-col items-center gap-2">
        <BookOpen className="text-blue-600" /> <span>برنامه مطالعه</span>
      </Link>
      <Link to="/solver" className="p-4 bg-purple-50 rounded-lg flex flex-col items-center gap-2">
        <Camera className="text-purple-600" /> <span>حل‌اللمسایل تصویری</span>
      </Link>
    </div>
  </div>
);

const Placeholder = ({ title }: { title: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-md text-center">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="mt-2 text-gray-500">این بخش به زودی تکمیل می‌شود.</p>
  </div>
);

function App() {
  return (
    <HashRouter>
      <SimpleLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/quiz" element={<Placeholder title="آزمون" />} />
          <Route path="/study" element={<Placeholder title="مطالعه" />} />
          <Route path="/solver" element={<Placeholder title="حل سوال با عکس" />} />
          <Route path="/image-edit" element={<Placeholder title="ویرایش تصویر" />} />
          <Route path="/search" element={<Placeholder title="جستجو" />} />
          <Route path="/formulas" element={<Placeholder title="فرمول‌ها" />} />
        </Routes>
      </SimpleLayout>
    </HashRouter>
  );
}

export default App;
