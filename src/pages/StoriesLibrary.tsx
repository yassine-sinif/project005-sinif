import React, { useState, useEffect } from 'react';

interface Story {
  id: string;
  title: string;
  level: string;
  duration: string;
  topic: string;
  image: string;
  description: string;
}

const StoriesLibrary = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [filteredStories, setFilteredStories] = useState<Story[]>([]);
  const [filters, setFilters] = useState({
    level: '',
    topic: '',
    search: '',
  });

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchStories = () => {
      const dummyStories: Story[] = [
        {
          id: 'buying-bread',
          title: 'Buying Bread at the Souk',
          level: 'Beginner',
          duration: '3 min',
          topic: 'Market',
          image: '/src/assets/story1.jpg',
          description: 'Follow Ahmed as he navigates the bustling souk to buy fresh bread. Learn essential phrases for shopping and haggling in Moroccan Darija.'
        },
        {
          id: 'family-dinner',
          title: 'A Family Dinner',
          level: 'Beginner',
          duration: '4 min',
          topic: 'Family',
          image: '/src/assets/story2.jpg',
          description: 'Join Fatima as she prepares a traditional Moroccan dinner for her family. Learn vocabulary related to food, cooking, and family interactions.'
        },
        {
          id: 'taxi-ride',
          title: 'Taking a Taxi in Casablanca',
          level: 'Beginner',
          duration: '3 min',
          topic: 'Travel',
          image: '/src/assets/story3.jpg',
          description: 'Experience the adventure of hailing and navigating a taxi ride in Casablanca. Learn transportation vocabulary and directional phrases.'
        },
        {
          id: 'wedding-celebration',
          title: 'A Moroccan Wedding Celebration',
          level: 'Intermediate',
          duration: '5 min',
          topic: 'Culture',
          image: '/src/assets/story4.jpg',
          description: 'Discover the rich traditions of a Moroccan wedding through Karim\'s experience as a guest. Learn cultural expressions and celebration vocabulary.'
        },
        {
          id: 'mountain-trip',
          title: 'A Trip to the Atlas Mountains',
          level: 'Intermediate',
          duration: '6 min',
          topic: 'Travel',
          image: '/src/assets/story5.jpg',
          description: 'Follow Omar\'s journey through the majestic Atlas Mountains. Learn nature vocabulary and expressions for describing landscapes and adventures.'
        },
        {
          id: 'business-meeting',
          title: 'A Business Meeting in Rabat',
          level: 'Advanced',
          duration: '7 min',
          topic: 'Business',
          image: '/src/assets/story6.jpg',
          description: 'Join Nadia as she navigates a professional business meeting in Rabat. Learn formal Darija expressions and business terminology.'
        },
      ];
      
      setStories(dummyStories);
      setFilteredStories(dummyStories);
    };
    
    fetchStories();
  }, []);

  useEffect(() => {
    // Apply filters
    let result = [...stories];
    
    if (filters.level) {
      result = result.filter(story => story.level === filters.level);
    }
    
    if (filters.topic) {
      result = result.filter(story => story.topic === filters.topic);
    }
    
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(story => 
        story.title.toLowerCase().includes(searchLower) || 
        story.description.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredStories(result);
  }, [filters, stories]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      search: e.target.value
    }));
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Stories Library</h1>
        
        <div className="filters">
          <div className="search-filter">
            <input 
              type="text" 
              placeholder="Search stories..." 
              value={filters.search}
              onChange={handleSearchChange}
            />
          </div>
          
          <div className="select-filters">
            <select 
              name="level" 
              value={filters.level}
              onChange={handleFilterChange}
            >
              <option value="">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            
            <select 
              name="topic" 
              value={filters.topic}
              onChange={handleFilterChange}
            >
              <option value="">All Topics</option>
              <option value="Market">Market</option>
              <option value="Family">Family</option>
              <option value="Travel">Travel</option>
              <option value="Culture">Culture</option>
              <option value="Business">Business</option>
            </select>
          </div>
        </div>
        
        <div className="stories-grid">
          {filteredStories.length > 0 ? (
            filteredStories.map(story => (
              <div key={story.id} className="card story-card">
                <div 
                  className="story-card-image" 
                  style={{ backgroundImage: `url(${story.image})` }}
                ></div>
                <div className="story-card-content">
                  <h3 className="story-card-title">{story.title}</h3>
                  <div className="story-card-meta">
                    <span>{story.level}</span>
                    <span>{story.duration}</span>
                    <span>{story.topic}</span>
                  </div>
                  <p className="story-card-description">{story.description}</p>
                  <a href={`/story/${story.id}`} className="btn">Start Lesson</a>
                </div>
              </div>
            ))
          ) : (
            <p>No stories found matching your filters. Try adjusting your search criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoriesLibrary;
