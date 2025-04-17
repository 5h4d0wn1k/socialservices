import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Clock, Target, Trophy, Calendar, ArrowUpRight } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import PageLayout from '../components/PageLayout';
import ProgressChart from '../components/dashboard/ProgressChart';
import ProjectCard from '../components/dashboard/ProjectCard';
import AchievementCard from '../components/dashboard/AchievementCard';

const Dashboard = () => {
  const { user, profile } = useAuthStore();
  const navigate = useNavigate();

  if (!user) {
    navigate('/');
    return null;
  }

  return (
    <PageLayout>
      <div className="py-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {profile?.first_name || user.email}!
            </h1>
            <p className="mt-2 text-gray-600">
              Track your volunteer journey and impact
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Clock, label: 'Hours Logged', value: '24', color: 'bg-blue-500' },
              { icon: Target, label: 'Projects Joined', value: '3', color: 'bg-green-500' },
              { icon: Trophy, label: 'Achievements', value: '5', color: 'bg-yellow-500' },
              { icon: Award, label: 'Impact Score', value: '850', color: 'bg-purple-500' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className={`${stat.color} bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Progress & Impact */}
            <div className="lg:col-span-2 space-y-8">
              {/* Volunteer Hours Chart */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Volunteer Hours</h2>
                  <select className="text-sm border rounded-lg px-3 py-2">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                  </select>
                </div>
                <ProgressChart />
              </div>

              {/* Active Projects */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Active Projects</h2>
                  <button className="text-primary-500 hover:text-primary-600 flex items-center">
                    View All
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
                <div className="space-y-4">
                  <ProjectCard
                    title="Education Support"
                    progress={75}
                    hoursLogged={12}
                    nextSession="Tomorrow, 3 PM"
                  />
                  <ProjectCard
                    title="Community Clean-up"
                    progress={30}
                    hoursLogged={6}
                    nextSession="Saturday, 10 AM"
                  />
                </div>
              </div>
            </div>

            {/* Achievements & Upcoming */}
            <div className="space-y-8">
              {/* Recent Achievements */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Achievements</h2>
                <div className="space-y-4">
                  <AchievementCard
                    title="Early Bird"
                    description="Completed 5 morning sessions"
                    icon={Award}
                    color="text-yellow-500"
                  />
                  <AchievementCard
                    title="Team Player"
                    description="Joined 3 different projects"
                    icon={Trophy}
                    color="text-purple-500"
                  />
                </div>
              </div>

              {/* Upcoming Sessions */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Sessions</h2>
                <div className="space-y-4">
                  {[
                    {
                      project: 'Education Support',
                      date: 'Mar 15',
                      time: '3:00 PM',
                      location: 'City Library'
                    },
                    {
                      project: 'Community Clean-up',
                      date: 'Mar 18',
                      time: '10:00 AM',
                      location: 'Central Park'
                    }
                  ].map((session, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary-50 rounded-lg p-2">
                        <Calendar className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{session.project}</h3>
                        <p className="text-sm text-gray-500">
                          {session.date} at {session.time}
                        </p>
                        <p className="text-sm text-gray-500">{session.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;