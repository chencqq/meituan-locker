import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      icon: 'fa-qrcode',
      title: '扫码取餐',
      desc: '微信一键取餐，屏幕输入验证码取餐，操作便捷无需等待',
      detail: '支持微信扫码取餐和屏幕输入验证码两种方式，用户可根据习惯自由选择，取餐过程快速便捷。',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: 'fa-temperature-high',
      title: '智能保温',
      desc: '碳纤维加热技术，温度可控，餐品保温2小时以上',
      detail: '采用碳纤维加热丝，温度范围室温至55°C，单格可控，确保餐品在最佳温度，冬天也能吃到热乎饭菜。',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: 'fa-virus-slash',
      title: '紫外线消毒',
      desc: '内置紫外线消毒功能，保障食品安全卫生',
      detail: '每次取餐后自动启动紫外线消毒程序，有效杀灭细菌病毒，让用户吃得放心、安心。',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: 'fa-clock',
      title: '24小时自助服务',
      desc: '全天候运营，随时存取，不受时间限制',
      detail: '设备24小时不间断运行，用户可随时取餐，骑手可随时存餐，满足不同时段的用餐需求。',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: 'fa-mobile-alt',
      title: '智能通知',
      desc: '微信取餐通知推送，实时掌握餐品状态',
      detail: '餐品存入后自动发送微信通知，用户第一时间收到取餐提醒，避免餐品长时间存放。',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: 'fa-shield-alt',
      title: '安全可靠',
      desc: '一餐一格，避免错拿丢餐，保障餐品安全',
      detail: '每个订单对应独立格口，取餐时无需翻找，有效避免拿错、丢失等问题，保障用户权益。',
      color: 'from-teal-400 to-teal-600'
    },
    {
      icon: 'fa-layer-group',
      title: '多平台支持',
      desc: '支持美团、饿了么、京东到家等所有外卖平台',
      detail: '设备无平台限制，任何外卖平台的订单均可使用，真正实现一站式取餐服务。',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: 'fa-cogs',
      title: '智能管理',
      desc: 'APP后台管理，远程控制照明、消毒、开关门',
      detail: '运维人员可通过APP远程管理每个格口，实现照明控制、消毒启动、远程开柜等功能，运营更高效。',
      color: 'from-gray-500 to-gray-700'
    }
  ];

  const advantages = [
    {
      title: '更安全高效的流程',
      desc: '无接触配送，智能化管理，更加安全高效',
      icon: 'fa-shield-alt'
    },
    {
      title: '更灵活的组合',
      desc: '小到只需要几平米，墙边、拐角、门侧，闲置的地方均可以变成智能化取餐点',
      icon: 'fa-th-large'
    },
    {
      title: '更强大的功能',
      desc: '智能取餐减少拿错丢餐，加热恒温保障体验，消毒功能保障安全卫生',
      icon: 'fa-rocket'
    },
    {
      title: '更专业的服务',
      desc: '客诉远程处理，专业运维团队，7x24小时高效售后服务',
      icon: 'fa-headset'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">功能特性</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              八大核心功能，打造智能取餐新体验
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <i className={`fas ${feature.icon} text-white text-2xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-3">{feature.desc}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{feature.detail}</p>
                    </div>
                  </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              核心优势
            </h2>
            <p className="text-lg text-gray-600">
              专业团队，贴心服务，让取餐更简单
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-yellow-50 transition-colors"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className={`fas ${adv.icon} text-white text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{adv.title}</h3>
                  <p className="text-gray-600">{adv.desc}</p>
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-2xl mb-6">
              <i className="fas fa-quote-left text-gray-900 text-3xl"></i>
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-3xl mx-auto">
              "无接触配送，智能化管理，更加安全高效"
            </blockquote>
            <p className="text-gray-400 text-lg">
              减少拿错、丢餐，保障体验，保障安全卫生
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;