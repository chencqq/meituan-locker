import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const coreValues = [
    { icon: 'fa-shield-alt', title: '无接触配送', desc: '配送过程无直接接触，减少人员聚集，保障安全' },
    { icon: 'fa-utensils', title: '餐品安全', desc: '餐品独立存放，避免错拿丢餐，保温消毒保障食品安全' },
    { icon: 'fa-building', title: '物业管理', desc: '餐品集中存放智能存取，减少管理成本，提升楼宇形象' },
    { icon: 'fa-motorcycle', title: '骑手效率', desc: '骑手无需等待，存入即送达，提高配送效率' },
    { icon: 'fa-network-wired', title: '楼宇智能化', desc: '助力物业完成楼宇智能化升级，提供智能化生活新基建' },
  ];

  const scenarios = [
    { icon: 'fa-building', title: '写字楼', desc: '5A甲级写字楼、办公园区', color: 'from-blue-400 to-blue-600' },
    { icon: 'fa-hospital', title: '医院', desc: '综合医院、专科医院', color: 'from-green-400 to-green-600' },
    { icon: 'fa-hotel', title: '酒店', desc: '星级酒店、商务酒店', color: 'from-purple-400 to-purple-600' },
    { icon: 'fa-industry', title: '产业园', desc: '科技园区、产业基地', color: 'from-orange-400 to-orange-600' },
    { icon: 'fa-building', title: '品质公寓', desc: '高端公寓、住宅社区', color: 'from-pink-400 to-pink-600' },
    { icon: 'fa-university', title: '学校', desc: '高校、职业院校', color: 'from-teal-400 to-teal-600' },
  ];

  const stats = [
    { value: '250+', label: '日均存取单量', icon: 'fa-box' },
    { value: '55°C', label: '最高保温温度', icon: 'fa-temperature-high' },
    { value: '24h', label: '全天候服务', icon: 'fa-clock' },
    { value: '100%', label: '消毒保障', icon: 'fa-virus-slash' },
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-300/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                <i className="fas fa-star mr-2"></i>
                智能餐饮终端解决方案
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                美团外卖柜
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
                安全 · 便捷 · 智能
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
                针对大型写字楼、医院、产业园等场景推出的智能餐品配送一站式解决方案，
                提高骑手交付效率，增强无接触配送安全性，减少物业管理负担。
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="relative group">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-yellow-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <i className="fas fa-handshake mr-2"></i>
                    立即合作
                  </Link>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-xl p-2 shadow-2xl">
                      <img
                        src="/images/qrcode.jpeg"
                        alt="微信二维码"
                        className="w-32 h-32 object-contain"
                      />
                      <p className="text-xs text-gray-600 text-center mt-1">扫码添加微信</p>
                    </div>
                  </div>
                </div>
                <Link
                  to="/features"
                  className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  <i className="fas fa-info-circle mr-2"></i>
                  了解更多
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-3xl transform -rotate-3"></div>
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center"
                      >
                        <i className="fas fa-box text-2xl text-gray-400"></i>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <i className="fas fa-qrcode text-2xl text-white"></i>
                    </div>
                  </div>
                  <p className="text-center text-gray-500 mt-4 text-sm">扫码取餐 · 安全便捷</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-yellow-50 transition-colors"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <i className={`fas ${stat.icon} text-white text-xl`}></i>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              核心价值
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              五大价值实现多方共赢，为用户、物业、骑手创造更大价值
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mb-4">
                  <i className={`fas ${value.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              应用场景
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              多场景全覆盖，满足不同行业需求
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${scenario.color} opacity-90`}></div>
                <div className="relative p-6 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <i className={`fas ${scenario.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{scenario.title}</h3>
                  <p className="text-white/80 text-sm">{scenario.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              客户评价
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              听听他们怎么说
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: '张经理', company: '工商银行大厦物业', content: '自从安装了美团外卖柜，外卖管理变得井井有条，业主满意度明显提升。', rating: 5 },
              { name: '李主任', company: '免税商务大厦', content: '设备运行稳定，售后服务响应及时，真正实现了零投入智能化管理。', rating: 5 },
              { name: '王主管', company: '光峰科技大厦', content: '外卖柜不仅提升了楼宇形象，还解决了外卖乱堆乱放的问题，非常实用。', rating: 5 }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{review.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name[0]}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              期待与您合作
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              美团提供全套解决方案，物业方可免费接入，共同打造智能化楼宇
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-4 bg-yellow-400 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <i className="fas fa-phone-alt mr-2"></i>
              立即咨询合作
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;