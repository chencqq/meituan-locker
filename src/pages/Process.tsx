import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: '骑手存餐',
      subtitle: '快速存入',
      desc: '骑手到达后联系客户，告知存放取餐柜，通过订单二维码开柜存入餐品即可离开',
      details: [
        '骑手扫描柜体二维码',
        '输入取餐人手机号码',
        '选择格口类型及数量',
        '放入餐品后关门离开'
      ],
      icon: 'fa-motorcycle',
      color: 'from-blue-400 to-blue-600',
      time: '约30秒'
    },
    {
      number: '02',
      title: '自动通知',
      subtitle: '即时提醒',
      desc: '取餐柜自动发送短信/微信提示客户，告知取餐码和格口位置',
      details: [
        '系统自动发送取餐通知',
        '微信推送取餐提醒',
        '短信发送取餐码',
        '显示格口位置信息'
      ],
      icon: 'fa-bell',
      color: 'from-yellow-400 to-orange-500',
      time: '即时'
    },
    {
      number: '03',
      title: '用户取餐',
      subtitle: '便捷取餐',
      desc: '客户凭手机尾号或微信一键取餐，全程无接触，安全便捷',
      details: [
        '微信一键取餐',
        '或输入手机尾号',
        '或输入取餐码',
        '格口自动打开取餐'
      ],
      icon: 'fa-user',
      color: 'from-green-400 to-green-600',
      time: '约10秒'
    }
  ];

  const flowData = [
    { from: '骑手', to: '取餐柜', label: '存餐', icon: 'fa-arrow-right' },
    { from: '取餐柜', to: '用户', label: '通知', icon: 'fa-arrow-right' },
    { from: '用户', to: '取餐柜', label: '取餐', icon: 'fa-arrow-right' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">使用流程</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              三步取餐，简单快捷，全程无接触
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setActiveStep(index)}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'ring-4 ring-yellow-400' : ''
                }`}
              >
                <div className={`h-2 bg-gradient-to-r ${step.color}`}></div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-bold text-gray-200">{step.number}</span>
                    <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center`}>
                      <i className={`fas ${step.icon} text-white text-2xl`}></i>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-yellow-500 font-medium mb-3">{step.subtitle}</p>
                  <p className="text-gray-600 mb-4">{step.desc}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="fas fa-clock mr-2"></i>
                    {step.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">详细步骤</h3>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${steps[activeStep].color} rounded-2xl flex items-center justify-center`}>
                      <i className={`fas ${steps[activeStep].icon} text-white text-3xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">{steps[activeStep].title}</h4>
                      <p className="text-yellow-500">{steps[activeStep].subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {steps[activeStep].details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <span className="text-yellow-600 font-bold text-sm">{idx + 1}</span>
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl mb-4">
                      <i className={`fas ${steps[activeStep].icon} text-white text-4xl`}></i>
                    </div>
                    <div className="text-4xl font-bold text-gray-800 mb-2">{steps[activeStep].time}</div>
                    <p className="text-gray-500">预计用时</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">流程总览</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-motorcycle text-white text-3xl"></i>
                </div>
                <p className="text-white font-bold">骑手</p>
                <p className="text-white/80 text-sm">存入餐品</p>
              </div>
              <div className="hidden md:block">
                <i className="fas fa-arrow-right text-white text-2xl"></i>
              </div>
              <div className="md:hidden">
                <i className="fas fa-arrow-down text-white text-2xl"></i>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <i className="fas fa-box text-yellow-500 text-3xl"></i>
                </div>
                <p className="text-white font-bold">取餐柜</p>
                <p className="text-white/80 text-sm">智能存储</p>
              </div>
              <div className="hidden md:block">
                <i className="fas fa-arrow-right text-white text-2xl"></i>
              </div>
              <div className="md:hidden">
                <i className="fas fa-arrow-down text-white text-2xl"></i>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-user text-white text-3xl"></i>
                </div>
                <p className="text-white font-bold">用户</p>
                <p className="text-white/80 text-sm">扫码取餐</p>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">取餐方式</h2>
            <p className="text-gray-600">多种取餐方式，满足不同需求</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'fa-mobile-alt', title: '微信一键取餐', desc: '打开微信扫一扫，点击取餐按钮即可开柜' },
              { icon: 'fa-keyboard', title: '输入手机尾号', desc: '在屏幕输入手机尾号后四位，验证后开柜' },
              { icon: 'fa-barcode', title: '输入取餐码', desc: '输入短信收到的取餐码，快速取走餐品' }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-yellow-50 transition-colors"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${method.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;