import React from 'react';
import { motion } from 'framer-motion';

const Specs: React.FC = () => {
  const hardwareSpecs = [
    { label: '颜色', value: '美团黄', icon: 'fa-palette' },
    { label: '主柜格口数', value: '20格', icon: 'fa-th' },
    { label: '副柜格口数', value: '21格', icon: 'fa-th-large' },
    { label: '输入电压', value: '220V', icon: 'fa-bolt' },
    { label: '主柜功率', value: '50W', icon: 'fa-plug' },
    { label: '副柜功率', value: '10W', icon: 'fa-plug' },
    { label: '温度范围', value: '室温-55°C', icon: 'fa-thermometer-half' },
    { label: '主控系统', value: '安卓', icon: 'fa-android' },
    { label: '温度控制', value: '单格可控', icon: 'fa-sliders-h' },
    { label: '加热方式', value: '碳纤维加热丝', icon: 'fa-fire' },
    { label: '消毒方式', value: '紫外线消毒', icon: 'fa-sun' },
    { label: '日均耗电', value: '1-2度', icon: 'fa-battery-full' }
  ];

  const dimensions = [
    { label: '单柜宽度', value: '103cm', icon: 'fa-arrows-alt-h' },
    { label: '单柜高度', value: '197cm', icon: 'fa-arrows-alt-v' },
    { label: '单柜深度', value: '43cm', icon: 'fa-expand' },
    { label: '小格口尺寸', value: '24×32×16cm', icon: 'fa-cube' },
    { label: '大格口尺寸', value: '24×32×23cm', icon: 'fa-cubes' },
    { label: '占地面积', value: '约0.4m²', icon: 'fa-vector-square' }
  ];

  const certifications = [
    { name: 'CCC认证', desc: '国家强制性产品认证', icon: 'fa-certificate' },
    { name: '食品安全认证', desc: '食品接触材料安全认证', icon: 'fa-shield-alt' },
    { name: '电器安全认证', desc: '电器产品安全认证', icon: 'fa-bolt' }
  ];

  const configurations = [
    {
      title: '单机方案',
      desc: '适合小型办公区',
      specs: '主柜1台',
      capacity: '19格口',
      daily: '约100单/天',
      icon: 'fa-cube'
    },
    {
      title: '标准方案',
      desc: '适合中型写字楼',
      specs: '主柜1台 + 副柜1台',
      capacity: '40格口',
      daily: '约200单/天',
      icon: 'fa-cubes'
    },
    {
      title: '增强方案',
      desc: '适合大型园区',
      specs: '主柜1台 + 副柜N台',
      capacity: '超多格口',
      daily: '500单/天+',
      icon: 'fa-layer-group'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">技术参数</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              专业规格，品质保障
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">硬件规格</h2>
            <p className="text-gray-600">专为外卖场景优化设计</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {hardwareSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                  <i className={`fas ${spec.icon} text-yellow-600`}></i>
                </div>
                <p className="text-sm text-gray-500 mb-1">{spec.label}</p>
                <p className="text-lg font-bold text-gray-800">{spec.value}</p>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">柜体尺寸</h2>
            <p className="text-gray-600">模块化设计，灵活组合</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-4">
                {dimensions.map((dim, index) => (
                  <div key={index} className="bg-white rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <i className={`fas ${dim.icon} text-yellow-500`}></i>
                      <span className="text-sm text-gray-500">{dim.label}</span>
                    </div>
                    <p className="text-xl font-bold text-gray-800">{dim.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">柜体示意图</h3>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="aspect-square bg-white/30 rounded-lg flex items-center justify-center">
                      <i className="fas fa-box text-white/60"></i>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-white/50 rounded mr-2"></div>
                    <span>小格口</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-white/70 rounded mr-2"></div>
                    <span>大格口</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-white/80 text-sm">
                不同大小格口组合，提升利用率，兼容绝大部分外卖场景
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">配置方案</h2>
            <p className="text-gray-600">按需匹配，灵活部署</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {configurations.map((config, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-6 text-white">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <i className={`fas ${config.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold">{config.title}</h3>
                  <p className="text-white/80 text-sm">{config.desc}</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500">设备配置</span>
                    <span className="font-medium text-gray-800">{config.specs}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500">格口数量</span>
                    <span className="font-medium text-gray-800">{config.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-500">日均处理</span>
                    <span className="font-medium text-yellow-600">{config.daily}</span>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">安全认证</h2>
            <p className="text-gray-600">多重认证，品质保障</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-yellow-50 transition-colors"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${cert.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-500">{cert.desc}</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">安装要求</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { icon: 'fa-map-marker-alt', title: '场地要求', desc: '建议室内，室外需搭建雨棚' },
                { icon: 'fa-plug', title: '电源要求', desc: '220V 10A电源接口1个' },
                { icon: 'fa-ruler-combined', title: '空间要求', desc: '最小空间 206×40×197cm' }
              ].map((req, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className={`fas ${req.icon} text-gray-900 text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{req.title}</h3>
                  <p className="text-gray-300 text-sm">{req.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Specs;