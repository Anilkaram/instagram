import React from 'react';
// Importing icons from lucide-react for a clean, modern look
import { Home, MessageSquare, PlusSquare, Compass, Heart, User, Bookmark, MessageCircle, Send } from 'lucide-react';

/**
 * Custom CSS to hide scrollbars for elements like the story tray.
 * Tailwind's scrollbar-hide utility often requires a plugin, so this
 * ensures cross-browser compatibility for hiding scrollbars.
 */
const customScrollbarHideStyle = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
  .scrollbar-hide {
    -ms-overflow-style: none;  /* For Internet Explorer and Edge */
    scrollbar-width: none;  /* For Firefox */
  }
`;

/**
 * Header Component: Represents the top navigation bar of the Instagram clone.
 * Includes a logo, a search bar (hidden on small screens), and navigation icons.
 */
const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Instagram Logo/Text */}
        <div className="text-xl font-semibold font-inter">
          <span className="font-bold text-gray-800">Instagram</span>
        </div>

        {/* Search Bar - Hidden on small screens (md:block makes it visible on medium and larger) */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 border border-gray-300 rounded-md py-1.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          />
          {/* Search Icon inside the input field */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Navigation Icons */}
        <nav className="flex items-center space-x-5">
          <Home className="h-6 w-6 cursor-pointer text-gray-800 hover:text-gray-600" />
          <MessageSquare className="h-6 w-6 cursor-pointer text-gray-800 hover:text-gray-600" />
          <PlusSquare className="h-6 w-6 cursor-pointer text-gray-800 hover:text-gray-600" />
          <Compass className="h-6 w-6 cursor-pointer text-gray-800 hover:text-gray-600" />
          <Heart className="h-6 w-6 cursor-pointer text-gray-800 hover:text-gray-600" />
          <User className="h-6 w-6 cursor-pointer text-gray-800 hover:text-gray-600" />
        </nav>
      </div>
    </header>
  );
};

/**
 * StoryTray Component: Displays a horizontal scrollable list of user stories.
 * Uses dummy data for demonstration.
 */
const StoryTray = () => {
  // Dummy data for stories
  const stories = [
    { id: 1, user: 'your_story', avatar: 'https://placehold.co/60x60/a0c49d/ffffff?text=You' },
    { id: 2, user: 'user1', avatar: 'https://placehold.co/60x60/ffadad/ffffff?text=U1' },
    { id: 3, user: 'user2', avatar: 'https://placehold.co/60x60/ffd6a5/ffffff?text=U2' },
    { id: 4, user: 'user3', avatar: 'https://placehold.co/60x60/fdffb6/ffffff?text=U3' },
    { id: 5, user: 'user4', avatar: 'https://placehold.co/60x60/caffbf/ffffff?text=U4' },
    { id: 6, user: 'user5', avatar: 'https://placehold.co/60x60/9bf6ff/ffffff?text=U5' },
    { id: 7, user: 'user6', avatar: 'https://placehold.co/60x60/a0c49d/ffffff?text=U6' },
    { id: 8, user: 'user7', avatar: 'https://placehold.co/60x60/ffadad/ffffff?text=U7' },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm overflow-x-auto scrollbar-hide">
      <div className="flex space-x-4">
        {stories.map(story => (
          <div key={story.id} className="flex flex-col items-center flex-shrink-0">
            {/* Story avatar with a gradient border */}
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
              <img
                src={story.avatar}
                alt={story.user}
                className="w-16 h-16 rounded-full border-2 border-white object-cover"
                // Fallback for broken image links
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/60x60/cccccc/333333?text=${story.user.substring(0, 2).toUpperCase()}`; }}
              />
            </div>
            {/* Story username, truncated if too long */}
            <p className="text-xs mt-1 truncate w-16 text-center">{story.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Post Component: Displays a single Instagram post with user info, image, actions, likes, caption, and comments.
 */
const Post = ({ post }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Post Header (User Avatar and Username) */}
      <div className="flex items-center p-4">
        <img
          src={post.avatar}
          alt={post.username}
          className="w-10 h-10 rounded-full object-cover mr-3"
          // Fallback for broken image links
          onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/40x40/cccccc/333333?text=${post.username.substring(0, 2).toUpperCase()}`; }}
        />
        <p className="font-semibold text-sm">{post.username}</p>
        <span className="ml-auto text-gray-500 text-xs cursor-pointer">...</span> {/* More options icon */}
      </div>

      {/* Post Image */}
      <img
        src={post.image}
        alt="Post"
        className="w-full object-cover aspect-video" // Ensures consistent image aspect ratio
        // Fallback for broken image links
        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found`; }}
      />

      {/* Post Actions (Like, Comment, Share, Save) */}
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-4">
          <Heart className="h-6 w-6 cursor-pointer text-gray-800 hover:text-gray-600" />
          <MessageCircle className="h-6 w-6 cursor-pointer text-gray-800 hover:text-gray-600" />
          <Send className="h-6 w-6 cursor-pointer text-gray-800 hover:text-gray-600" />
        </div>
        <div>
          <Bookmark className="h-6 w-6 cursor-pointer text-gray-800 hover:text-gray-600" />
        </div>
      </div>

      {/* Likes Count */}
      <div className="px-4 pb-2">
        <p className="font-semibold text-sm">{post.likes.toLocaleString()} likes</p>
      </div>

      {/* Post Caption */}
      <div className="px-4 pb-2">
        <p className="text-sm">
          <span className="font-semibold mr-1">{post.username}</span>
          {post.caption}
        </p>
      </div>

      {/* Comments Section */}
      <div className="px-4 pb-2">
        {post.comments.map((comment, index) => (
          <p key={index} className="text-sm mb-1">
            <span className="font-semibold mr-1">{comment.user}</span>
            {comment.text}
          </p>
        ))}
        <p className="text-gray-500 text-xs mt-2">{post.time}</p>
      </div>

      {/* Add Comment Input Field */}
      <div className="border-t border-gray-200 p-4">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full text-sm focus:outline-none"
        />
      </div>
    </div>
  );
};

/**
 * Feed Component: Renders a list of individual Post components.
 * Uses dummy data for posts.
 */
const Feed = () => {
  // Dummy data for posts
  const posts = [
    {
      id: 1,
      username: 'traveler_explorer',
      avatar: 'https://placehold.co/60x60/8d99ae/ffffff?text=TE',
      image: 'https://placehold.co/600x400/2b2d42/ffffff?text=Beautiful+Landscape',
      caption: 'Exploring the breathtaking mountains! What an incredible view. #mountains #nature #travel',
      likes: 1234,
      comments: [
        { user: 'adventure_seeker', text: 'Amazing shot!' },
        { user: 'nature_lover', text: 'Wish I was there!' },
      ],
      time: '2 hours ago'
    },
    {
      id: 2,
      username: 'foodie_delights',
      avatar: 'https://placehold.co/60x60/edf2f4/000000?text=FD',
      image: 'https://placehold.co/600x400/8d99ae/ffffff?text=Delicious+Food',
      caption: 'Homemade pasta night! So delicious and comforting. 🍝 #pasta #homemade #foodlover',
      likes: 876,
      comments: [
        { user: 'chef_master', text: 'Looks divine!' },
        { user: 'hungry_palate', text: 'Recipe please!' },
      ],
      time: '5 hours ago'
    },
    {
      id: 3,
      username: 'urban_photography',
      avatar: 'https://placehold.co/60x60/d90429/ffffff?text=UP',
      image: 'https://placehold.co/600x400/ef233c/ffffff?text=City+Lights',
      caption: 'City lights at dusk. The energy is palpable. #citylife #photography #nightphotography',
      likes: 2100,
      comments: [
        { user: 'shutterbug', text: 'Stunning capture!' },
        { user: 'city_dweller', text: 'My favorite view!' },
      ],
      time: '1 day ago'
    },
  ];

  return (
    <div className="space-y-6">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

/**
 * Suggestions Component: Displays user profile and suggested users to follow.
 * Uses dummy data for suggestions.
 */
const Suggestions = () => {
  // Dummy data for suggestions
  const suggestions = [
    { id: 1, user: 'suggested_user1', avatar: 'https://placehold.co/40x40/d4a373/ffffff?text=SU1', mutual: 'Followed by user_a + 2 more' },
    { id: 2, user: 'suggested_user2', avatar: 'https://placehold.co/40x40/e9edc9/000000?text=SU2', mutual: 'Followed by user_b' },
    { id: 3, user: 'suggested_user3', avatar: 'https://placehold.co/40x40/faedcd/000000?text=SU3', mutual: 'New to Instagram' },
    { id: 4, user: 'suggested_user4', avatar: 'https://placehold.co/40x40/d6ccc2/000000?text=SU4', mutual: 'Followed by user_c' },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      {/* Current User Profile */}
      <div className="flex items-center mb-4">
        <img
          src="https://placehold.co/60x60/a0c49d/ffffff?text=You" // Placeholder for current user's avatar
          alt="Current User"
          className="w-12 h-12 rounded-full object-cover mr-3"
        />
        <div>
          <p className="font-semibold text-sm">your_username</p>
          <p className="text-gray-500 text-xs">Your Name</p>
        </div>
        <button className="ml-auto text-blue-500 text-xs font-semibold hover:text-blue-700">Switch</button>
      </div>

      {/* Suggestions Header */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-gray-500 text-sm font-semibold">Suggestions for you</p>
        <button className="text-xs font-semibold text-gray-800 hover:text-gray-600">See All</button>
      </div>

      {/* List of Suggested Users */}
      <div className="space-y-4">
        {suggestions.map(s => (
          <div key={s.id} className="flex items-center">
            <img
              src={s.avatar}
              alt={s.user}
              className="w-10 h-10 rounded-full object-cover mr-3"
              // Fallback for broken image links
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/40x40/cccccc/333333?text=${s.user.substring(0, 2).toUpperCase()}`; }}
            />
            <div>
              <p className="font-semibold text-sm">{s.user}</p>
              <p className="text-gray-500 text-xs">{s.mutual}</p>
            </div>
            <button className="ml-auto text-blue-500 text-xs font-semibold hover:text-blue-700">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * App Component: The main component that orchestrates the entire Instagram clone layout.
 * It combines the Header, StoryTray, Feed, and Suggestions components.
 */
const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-inter">
      {/* Injecting custom styles directly into the DOM for scrollbar hiding */}
      <style>{customScrollbarHideStyle}</style>
      <Header />
      {/* Main content area, responsive layout with a max-width and centered */}
      <main className="max-w-4xl mx-auto pt-8 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:space-x-8">
        {/* Left section for stories and feed (takes 2/3 width on large screens) */}
        <section className="lg:w-2/3">
          <StoryTray />
          <Feed />
        </section>
        {/* Right section for suggestions (hidden on small screens, takes 1/3 width on large screens) */}
        <section className="lg:w-1/3 hidden lg:block">
          <Suggestions />
        </section>
      </main>
    </div>
  );
};

export default App;