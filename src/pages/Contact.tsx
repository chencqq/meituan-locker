import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../components/Toast';
import { supabase } from '../supabase/client';

const Contact: React.FC = () => {
  const { showToast, ToastComponent } = useToast();
  const [formData, setFormData] = useState({
    type: 'business',
    name: '',
    phone: '',
    email: '',
    company: '',
    address: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([{
          type: formData.type,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company: formData.company,
          address: formData.address,
          message: formData.message
        }]);

      if (error) throw error;

      showToast('提交成功！我们会尽快与您联系', 'success');
      setFormData({
        type: 'business',
        name: '',
        phone: '',
        email: '',
        company: '',
        address: '',
        message: ''
      });
    } catch (error) {
      showToast('提交失败，请稍后重试', 'error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const cooperationModes = [
    {
      title: '美团提供',
      items: [
        '机器安装、调试',
        '定期维修、清洁、保养',
        '7x24小时高效售后服务',
        '专业销售、服务商及时响应',
        '专业技术团队支持'
      ],
      icon: 'fa-hand-holding-heart',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      title: '物业方提供',
      items: [
        '提供合适场地',
        '提供用电或其他配合',
        '强管控，外卖骑手不上楼',
        '场地基础保障'
      ],
      icon: 'fa-building',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  const benefits = [
    { title: '完善物业管理', desc: '餐品集中存放，智能存取，减少管理成本', icon: 'fa-tasks' },
    { title: '提升楼宇形象', desc: '智能化设备，提升物业整体形象', icon: 'fa-star' },
    { title: '提高业主满意度', desc: '无接触取餐，安全便捷，提升用户体验', icon: 'fa-smile' },
    { title: '零投入合作', desc: '设备免费铺设，美团负责运营维护', icon: 'fa-gift' }
  ];

  const cases = [
    { name: '工商银行大厦', type: '写字楼', image: 'cabinet_scene1.jpg' },
    { name: '免税商务大厦', type: '写字楼', image: 'cabinet_scene2.jpg' },
    { name: '南方医科大学深圳医院', type: '医院', image: 'cabinet_scene3.jpg' },
    { name: '光峰科技大厦', type: '写字楼', image: 'cabinet_scene4.jpg' },
    { name: '科技创新中心', type: '写字楼', image: 'cabinet_scene5.png' },
    { name: '上海合生国际中心', type: '写字楼', image: 'cabinet_scene6.jpg' },
    { name: '普联大厦', type: '写字楼', image: 'cabinet_scene7.jpg' },
    { name: '香格里拉酒店', type: '酒店', image: 'cabinet_scene8.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {ToastComponent}
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">合作加盟</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              美团提供全套解决方案，物业方可免费接入
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">合作模式</h2>
            <p className="text-gray-600">双方共赢，共同打造智能化楼宇</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {cooperationModes.map((mode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${mode.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <i className={`fas ${mode.icon} text-2xl`}></i>
                    </div>
                    <h3 className="text-2xl font-bold">{mode.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {mode.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <i className="fas fa-check-circle text-green-500"></i>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">物业方收益</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3">
                    <i className={`fas ${benefit.icon} text-yellow-500 text-xl`}></i>
                  </div>
                  <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                  <p className="text-white/80 text-xs">{benefit.desc}</p>
                </div>
              ))}
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">合作咨询</h2>
            <p className="text-gray-600">请填写以下信息，我们会尽快与您联系</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">咨询类型</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'business' })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.type === 'business'
                        ? 'border-yellow-400 bg-yellow-50 text-yellow-700'
                        : 'border-gray-200 text-gray-600 hover:border-yellow-200'
                    }`}
                  >
                    <i className="fas fa-building mr-2"></i>
                    B端商户合作
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'user' })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.type === 'user'
                        ? 'border-yellow-400 bg-yellow-50 text-yellow-700'
                        : 'border-gray-200 text-gray-600 hover:border-yellow-200'
                    }`}
                  >
                    <i className="fas fa-user mr-2"></i>
                    C端用户反馈
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    联系人 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    联系电话 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all"
                    placeholder="请输入您的电话"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">电子邮箱</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all"
                  placeholder="请输入您的邮箱"
                />
              </div>

              {formData.type === 'business' && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">公司/物业名称</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all"
                      placeholder="请输入公司或物业名称"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">场地地址</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all"
                      placeholder="请输入场地地址"
                    />
                  </div>
                </>
              )}

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">留言内容</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all resize-none"
                  placeholder="请输入您的需求或问题"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                提交咨询
              </button>
            </form>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">成功案例</h2>
            <p className="text-gray-600">已服务众多知名客户</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cases.map((caseItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden cursor-pointer">
                  <img
                    src={`/images/cases/${caseItem.image}`}
                    alt={caseItem.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 text-sm mb-1">{caseItem.name}</h3>
                  <p className="text-xs text-gray-500">{caseItem.type}</p>
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
            <h2 className="text-3xl font-bold text-white mb-8">联系方式</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone-alt text-gray-900 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">客服热线</h3>
                <p className="text-gray-300">18476637396</p>
                <p className="text-gray-400 text-sm mt-1">7x24小时服务</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope text-gray-900 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">电子邮箱</h3>
                <p className="text-gray-300">774685670@qq.com</p>
                <p className="text-gray-400 text-sm mt-1">工作日24小时内回复</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-qrcode text-gray-900 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">扫码联系</h3>
                <div className="w-24 h-24 mx-auto bg-white rounded-lg p-1">
                  <img
                    src="/images/qrcode.jpeg"
                    alt="扫码联系"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-gray-400 text-sm mt-2">微信扫码添加</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;