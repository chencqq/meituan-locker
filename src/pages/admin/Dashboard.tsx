import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../supabase/client';

interface Inquiry {
  id: string;
  type: 'business' | 'user';
  name: string;
  phone: string;
  email: string | null;
  company: string | null;
  address: string | null;
  message: string | null;
  status: 'pending' | 'processing' | 'completed' | 'rejected';
  created_at: string;
}

interface Feedback {
  id: string;
  user_name: string | null;
  phone: string | null;
  email: string | null;
  content: string;
  rating: number | null;
  status: 'pending' | 'processing' | 'completed' | 'rejected';
  created_at: string;
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inquiries' | 'feedbacks'>('inquiries');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const { data: inquiriesData } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });
    
    const { data: feedbacksData } = await supabase
      .from('feedbacks')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (inquiriesData) setInquiries(inquiriesData);
    if (feedbacksData) setFeedbacks(feedbacksData);
    setLoading(false);
  };

  const updateStatus = async (table: 'inquiries' | 'feedbacks', id: string, status: string) => {
    await supabase.from(table).update({ status }).eq('id', id);
    fetchData();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'processing': return 'bg-blue-100 text-blue-700';
      case 'completed': return 'bg-green-100 text-green-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return '待处理';
      case 'processing': return '处理中';
      case 'completed': return '已完成';
      case 'rejected': return '已拒绝';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <aside className="w-64 bg-gray-900 text-white min-h-screen">
          <div className="p-6">
            <h1 className="text-xl font-bold">管理后台</h1>
            <p className="text-gray-400 text-sm mt-1">美团外卖柜</p>
          </div>
          <nav className="px-4">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`w-full flex items-center px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeTab === 'inquiries' ? 'bg-yellow-500 text-gray-900' : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <i className="fas fa-handshake mr-3"></i>
              合作咨询
              <span className="ml-auto bg-gray-700 text-white text-xs px-2 py-1 rounded-full">
                {inquiries.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('feedbacks')}
              className={`w-full flex items-center px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeTab === 'feedbacks' ? 'bg-yellow-500 text-gray-900' : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <i className="fas fa-comment-dots mr-3"></i>
              用户反馈
              <span className="ml-auto bg-gray-700 text-white text-xs px-2 py-1 rounded-full">
                {feedbacks.length}
              </span>
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {activeTab === 'inquiries' ? '合作咨询列表' : '用户反馈列表'}
            </h2>
            <p className="text-gray-500 mt-1">
              {activeTab === 'inquiries' 
                ? `共 ${inquiries.length} 条咨询记录` 
                : `共 ${feedbacks.length} 条反馈记录`}
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <i className="fas fa-spinner fa-spin text-3xl text-yellow-500"></i>
              <p className="text-gray-500 mt-4">加载中...</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {activeTab === 'inquiries' ? (
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">类型</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">联系人</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">电话</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">公司</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">状态</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">时间</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {inquiries.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            item.type === 'business' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                          }`}>
                            {item.type === 'business' ? '商户合作' : '用户咨询'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800">{item.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.phone}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.company || '-'}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-xs ${getStatusColor(item.status)}`}>
                            {getStatusText(item.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(item.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={item.status}
                            onChange={(e) => updateStatus('inquiries', item.id, e.target.value)}
                            className="text-sm border border-gray-200 rounded-lg px-2 py-1 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none"
                          >
                            <option value="pending">待处理</option>
                            <option value="processing">处理中</option>
                            <option value="completed">已完成</option>
                            <option value="rejected">已拒绝</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">用户</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">联系方式</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">评分</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">内容</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">状态</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">时间</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {feedbacks.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-800">{item.user_name || '匿名用户'}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.phone || item.email || '-'}</td>
                        <td className="px-6 py-4">
                          {item.rating ? (
                            <div className="flex text-yellow-400">
                              {[...Array(item.rating)].map((_, i) => (
                                <i key={i} className="fas fa-star text-xs"></i>
                              ))}
                            </div>
                          ) : '-'}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{item.content}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-xs ${getStatusColor(item.status)}`}>
                            {getStatusText(item.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(item.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={item.status}
                            onChange={(e) => updateStatus('feedbacks', item.id, e.target.value)}
                            className="text-sm border border-gray-200 rounded-lg px-2 py-1 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none"
                          >
                            <option value="pending">待处理</option>
                            <option value="processing">处理中</option>
                            <option value="completed">已完成</option>
                            <option value="rejected">已拒绝</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;