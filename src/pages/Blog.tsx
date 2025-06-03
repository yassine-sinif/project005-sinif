import React from 'react';

const Blog = () => {
  // Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Origins of Moroccan Darija',
    excerpt: 'Explore the fascinating history of Moroccan Darija and its influences from Arabic, Berber, French, and Spanish languages.',
    author: 'Fatima bnt hada',
    date: 'May 28, 2025',
    image: '/src/assets/blog1.jpg',
    category: 'Language',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Essential Darija Phrases for the Moroccan Souk',
    excerpt: 'Master these key phrases to navigate Morocco\'s bustling markets like a local and get the best deals.',
    author: 'hmad bn 3bdslam',
    date: 'May 21, 2025',
    image: '/src/assets/blog2.jpg',
    category: 'Practical Tips',
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'The Art of Moroccan Storytelling',
    excerpt: 'Discover the rich tradition of hikayat (storytelling) in Moroccan culture and its role in preserving oral history.',
    author: 'Hind',
    date: 'May 14, 2025',
    image: '/src/assets/blog3.jpg',
    category: 'Culture',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Regional Variations in Moroccan Darija',
    excerpt: 'Learn how Darija varies across different regions of Morocco, from the northern dialect to the Saharan expressions.',
    author: 'Fatima bnt hada',
    date: 'May 7, 2025',
    image: '/src/assets/blog4.jpg',
    category: 'Language',
    readTime: '7 min read'
  },
  {
    id: 5,
    title: 'Cooking with Darija: Kitchen Vocabulary',
    excerpt: 'Expand your culinary vocabulary with essential Darija terms for cooking traditional Moroccan dishes.',
    author: 'hmad bn 3bdslam',
    date: 'April 30, 2025',
    image: '/src/assets/blog5.jpg',
    category: 'Practical Tips',
    readTime: '5 min read'
  },
  {
    id: 6,
    title: 'Moroccan Proverbs and Their Meanings',
    excerpt: 'Dive into the wisdom of Moroccan proverbs and learn how they reflect cultural values and everyday philosophy.',
    author: 'Hind',
    date: 'April 23, 2025',
    image: '/src/assets/blog6.jpg',
    category: 'Culture',
    readTime: '8 min read'
  }
];


  // Categories for filtering
  const categories = ['All', 'Language', 'Culture', 'Practical Tips'];
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Cultural Journal</h1>
        <p className="section-subtitle">Insights into Moroccan language, traditions, and daily life</p>
        
        <div className="blog-filters">
          <div className="category-filters">
            {categories.map(category => (
              <button 
                key={category}
                className={`category-filter ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="search-filter">
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="blog-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <div key={post.id} className="blog-card card">
                <div 
                  className="blog-card-image" 
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="blog-author-date">
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <a href={`/blog/${post.id}`} className="btn btn-small">Read More</a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No articles found matching your criteria. Try adjusting your filters.</p>
          )}
        </div>
        
        <div className="blog-newsletter">
          <div className="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get the latest articles, language tips, and cultural insights delivered to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
