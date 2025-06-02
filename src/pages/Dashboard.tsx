import React, { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('progress');
  
  // Mock user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    targetProficiency: 'Intermediate',
    preferredLanguage: 'English',
    avatar: '/src/assets/avatar.jpg',
    progress: {
      storiesCompleted: 3,
      totalListeningTime: '2h 15m',
      streak: 5,
      wordsLearned: 42
    },
    subscription: {
      type: 'Free Trial',
      daysLeft: 7
    },
    achievements: [
      { id: 1, title: 'First Story Completed', icon: '🏆', date: '2025-05-28' },
      { id: 2, title: 'Three-Day Streak', icon: '🔥', date: '2025-05-30' },
      { id: 3, title: '25 Words Learned', icon: '📚', date: '2025-05-31' }
    ],
    unlockedStories: [
      { id: 'buying-bread', title: 'Buying Bread at the Souk', completed: true },
      { id: 'family-dinner', title: 'A Family Dinner', completed: true },
      { id: 'taxi-ride', title: 'Taking a Taxi in Casablanca', completed: true },
      { id: 'wedding-celebration', title: 'A Moroccan Wedding Celebration', completed: false }
    ]
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">My Dashboard</h1>
        
        <div className="dashboard-layout">
          {/* User Profile Card */}
          <div className="dashboard-sidebar">
            <div className="user-profile card">
              <div className="user-avatar">
                <img src={userData.avatar} alt={userData.name} />
              </div>
              <h2>{userData.name}</h2>
              <p>{userData.email}</p>
              <div className="user-details">
                <div className="user-detail">
                  <span>Target Proficiency:</span>
                  <span>{userData.targetProficiency}</span>
                </div>
                <div className="user-detail">
                  <span>Preferred Language:</span>
                  <span>{userData.preferredLanguage}</span>
                </div>
              </div>
              <div className="subscription-status">
                <h3>{userData.subscription.type}</h3>
                {userData.subscription.type === 'Free Trial' && (
                  <p>{userData.subscription.daysLeft} days left</p>
                )}
                {userData.subscription.type === 'Free Trial' && (
                  <a href="/pricing" className="btn">Upgrade to Premium</a>
                )}
              </div>
            </div>
          </div>
          
          {/* Main Dashboard Content */}
          <div className="dashboard-main">
            {/* Dashboard Tabs */}
            <div className="dashboard-tabs">
              <button 
                className={`tab-button ${activeTab === 'progress' ? 'active' : ''}`}
                onClick={() => setActiveTab('progress')}
              >
                Progress
              </button>
              <button 
                className={`tab-button ${activeTab === 'stories' ? 'active' : ''}`}
                onClick={() => setActiveTab('stories')}
              >
                My Stories
              </button>
              <button 
                className={`tab-button ${activeTab === 'achievements' ? 'active' : ''}`}
                onClick={() => setActiveTab('achievements')}
              >
                Achievements
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="dashboard-content">
              {/* Progress Tab */}
              {activeTab === 'progress' && (
                <div className="progress-tab">
                  <div className="progress-stats">
                    <div className="stat-card">
                      <div className="stat-icon">📚</div>
                      <div className="stat-value">{userData.progress.storiesCompleted}</div>
                      <div className="stat-label">Stories Completed</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon">⏱️</div>
                      <div className="stat-value">{userData.progress.totalListeningTime}</div>
                      <div className="stat-label">Listening Time</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon">🔥</div>
                      <div className="stat-value">{userData.progress.streak}</div>
                      <div className="stat-label">Day Streak</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon">🔤</div>
                      <div className="stat-value">{userData.progress.wordsLearned}</div>
                      <div className="stat-label">Words Learned</div>
                    </div>
                  </div>
                  
                  <div className="progress-chart">
                    <h3>Weekly Activity</h3>
                    <div className="chart-placeholder">
                      {/* In a real app, this would be a chart component */}
                      <p>Chart showing daily activity over the past week would appear here.</p>
                    </div>
                  </div>
                  
                  <div className="recent-activity">
                    <h3>Recent Activity</h3>
                    <ul className="activity-list">
                      <li className="activity-item">
                        <div className="activity-icon">✅</div>
                        <div className="activity-details">
                          <p>Completed "Taking a Taxi in Casablanca"</p>
                          <span>Today, 9:45 AM</span>
                        </div>
                      </li>
                      <li className="activity-item">
                        <div className="activity-icon">🏆</div>
                        <div className="activity-details">
                          <p>Earned achievement: "25 Words Learned"</p>
                          <span>Yesterday, 3:20 PM</span>
                        </div>
                      </li>
                      <li className="activity-item">
                        <div className="activity-icon">📝</div>
                        <div className="activity-details">
                          <p>Scored 3/3 on "A Family Dinner" quiz</p>
                          <span>Yesterday, 11:15 AM</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              
              {/* Stories Tab */}
              {activeTab === 'stories' && (
                <div className="stories-tab">
                  <h3>My Stories</h3>
                  <div className="stories-list">
                    {userData.unlockedStories.map(story => (
                      <div key={story.id} className="story-item">
                        <div className="story-status">
                          {story.completed ? (
                            <span className="status-completed">✓</span>
                          ) : (
                            <span className="status-incomplete">○</span>
                          )}
                        </div>
                        <div className="story-info">
                          <h4>{story.title}</h4>
                          <p>{story.completed ? 'Completed' : 'In Progress'}</p>
                        </div>
                        <a href={`/story/${story.id}`} className="btn btn-small">
                          {story.completed ? 'Review' : 'Continue'}
                        </a>
                      </div>
                    ))}
                  </div>
                  
                  <div className="locked-stories">
                    <h3>Locked Stories</h3>
                    <p>Upgrade to Premium to unlock all stories in our library.</p>
                    <a href="/pricing" className="btn">View Pricing</a>
                  </div>
                </div>
              )}
              
              {/* Achievements Tab */}
              {activeTab === 'achievements' && (
                <div className="achievements-tab">
                  <h3>My Achievements</h3>
                  <div className="achievements-grid">
                    {userData.achievements.map(achievement => (
                      <div key={achievement.id} className="achievement-card">
                        <div className="achievement-icon">{achievement.icon}</div>
                        <h4>{achievement.title}</h4>
                        <p>Earned on {achievement.date}</p>
                      </div>
                    ))}
                    
                    {/* Locked achievements */}
                    <div className="achievement-card locked">
                      <div className="achievement-icon">🔒</div>
                      <h4>Five-Day Streak</h4>
                      <p>Keep learning for 5 consecutive days</p>
                    </div>
                    <div className="achievement-card locked">
                      <div className="achievement-icon">🔒</div>
                      <h4>50 Words Learned</h4>
                      <p>Master 50 Darija vocabulary words</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
