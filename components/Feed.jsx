"use client";

import PromptCard from './PromptCard';
import { useEffect, useState } from 'react';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setAllPosts(data);
    }

    fetchPosts();
  }, []);

  const filterPosts = (searchtext) => {
    const regex = new RegExp(searchtext, "i");
    return allPosts.filter((post) => {
      return regex.test(post.creator.username) ||
        regex.test(post.tag) ||
        regex.test(post.prompt);
    });
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(setTimeout(() => {
      const searchResult = filterPosts(e.target.value);
      setSearchedResults(searchResult);
    }, 500));
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    const searchResult = filterPosts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type="text"
          placeholder='Search for a prompt, tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault(); // Prevent form submission on Enter key
            }
          }}
          required
          className='search_input peer'
        />
      </form>

      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList
          data={allPosts}
          handleTagClick={handleTagClick}
        />
      )};
      
    </section>
  );
};

export default Feed;