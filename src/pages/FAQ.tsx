import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '美团外卖柜是什么？',
      answer: '美团外卖柜是美团针对大型写字楼、办公区、医院、酒店等特殊场景推出的智能餐品配送一站式解决方案。它是一种可提高骑手交付效率、增强无接触配送安全性、减少物业管理负担的新配送交付模式。'
    },
    {
      question: '外卖柜如何保障食品安全？',
      answer: '美团外卖柜具备多重食品安全保障：1）紫外线消毒功能，每次取餐后自动消毒；2）智能保温功能，温度范围室温-55°C，确保餐品在最佳温度；3）独立格口存放，避免错拿丢餐；4）24小时监控，保障餐品安全。'
    },
    {
      question: '用户如何取餐？',
      answer: '用户可通过三种方式取餐：1）微信一键取餐：打开微信扫一扫，点击取餐按钮即可开柜；2）输入手机尾号：在屏幕输入手机尾号后四位，验证后开柜；3）输入取餐码：输入短信收到的取餐码，快速取走餐品。整个过程仅需10秒左右。'
    },
    {
      question: '外卖柜支持哪些外卖平台？',
      answer: '美团外卖柜支持所有外卖平台，包括美团外卖、饿了么、京东到家、朴朴、叮咚买菜等。任何外卖平台的订单均可使用，真正实现一站式取餐服务。'
    },
    {
      question: '物业方需要投入多少成本？',
      answer: '美团外卖柜采用零投入合作模式：1）设备免费铺设，美团负责运输、安装、调试；2）定期维修、清洁、保养由美团负责；3）7x24小时高效售后服务；4）物业方仅需提供合适场地和电源。'
    },
    {
      question: '外卖柜的耗电情况如何？',
      answer: '美团外卖柜采用节能设计：主柜功率50W，副柜功率10W，日均耗电约1-2度。设备待机功率仅为30瓦，正常运转一天耗电量在0.72度电左右，非常节能环保。'
    },
    {
      question: '外卖柜适用于哪些场景？',
      answer: '美团外卖柜适用于多种场景：写字楼、医院、酒店、产业园、商业中心、品质公寓、学校等。小到只需要几平米，墙边、拐角、门侧等闲置地方均可安装。'
    },
    {
      question: '如何申请安装外卖柜？',
      answer: '您可以通过以下方式申请：1）在网站"合作加盟"页面填写咨询表单；2）拨打客服热线：18476637396；3）添加微信咨询（首页"立即合作"按钮悬停显示二维码）。我们会在24小时内与您联系，安排专人上门勘察。'
    },
    {
      question: '外卖柜的格口数量有多少？',
      answer: '美团外卖柜采用模块化设计：主柜20格，副柜21格。可根据实际需求灵活组合：单机方案（主柜1台，19格）、标准方案（主柜+副柜，40格）、增强方案（主柜+副柜N台，超多格口）。'
    },
    {
      question: '外卖柜如何帮助物业管理？',
      answer: '美团外卖柜为物业管理带来多重好处：1）餐品集中存放，减少外卖乱堆乱放；2）智能存取，减少人员聚集；3）无接触配送，降低管理难度；4）提升楼宇智能化形象；5）减少因外卖产生的投诉和纠纷。'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">常见问题</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              关于美团外卖柜，您可能想了解的问题
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className="fas fa-chevron-down text-yellow-500"></i>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 mb-4">还有其他问题？</p>
            <a
              href="/#/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <i className="fas fa-phone-alt mr-2"></i>
              联系我们
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;