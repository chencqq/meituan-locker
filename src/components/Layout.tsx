import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: '首页', icon: 'fa-home' },
    { path: '/features', label: '功能特性', icon: 'fa-cogs' },
    { path: '/process', label: '使用流程', icon: 'fa-route' },
    { path: '/specs', label: '技术参数', icon: 'fa-microchip' },
    { path: '/faq', label: '常见问题', icon: 'fa-question-circle' },
    { path: '/contact', label: '合作加盟', icon: 'fa-handshake' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <NavLink to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                <i className="fas fa-utensils text-white text-lg md:text-xl"></i>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-bold text-gray-800">美团外卖柜</h1>
                <p className="text-xs text-gray-500">安全 · 便捷 · 智能</p>
              </div>
            </NavLink>

            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-yellow-400 text-gray-900 shadow-md'
                        : 'text-gray-600 hover:bg-yellow-50 hover:text-yellow-600'
                    }`
                  }
                >
                  <i className={`fas ${item.icon} mr-2`}></i>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-yellow-50 transition-colors"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 shadow-lg"
            >
              <nav className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-lg font-medium transition-all ${
                        isActive
                          ? 'bg-yellow-400 text-gray-900'
                          : 'text-gray-600 hover:bg-yellow-50'
                      }`
                    }
                  >
                    <i className={`fas ${item.icon} mr-3 w-5`}></i>
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-16 md:pt-20">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <i className="fas fa-utensils text-gray-900"></i>
                </div>
                <span className="text-lg font-bold">美团外卖柜</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                We help people eat better, live better
              </p>
              <p className="text-gray-400 text-sm mt-2">
                安全便捷的智能餐饮终端解决方案
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">快速链接</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">联系我们</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center">
                  <i className="fas fa-phone mr-3 text-yellow-400"></i>
                  18476637396
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-yellow-400"></i>
                  774685670@qq.com
                </li>
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-3 text-yellow-400"></i>
                  北京市朝阳区望京东路6号
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 美团智能取餐柜. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;