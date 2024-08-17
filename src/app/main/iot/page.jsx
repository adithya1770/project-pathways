"use client"
import { useState, useEffect } from 'react';
import '../web.css'

const Page = () => {
  const [repos, setRepos] = useState([]);

  const gitInfo = async () => {
    try {
      const response = await fetch("https://api.github.com/users/adithya1770/repos");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await gitInfo();
      if (data) {
        const jsRepo = data.filter(repo => repo.name === "embedded-with-pi");
        setRepos(jsRepo);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      {repos.map((repo) => (
        <div key={repo.id} className='ibm-plex-mono-medium lg:h-72 lg:w-110 grad lg:ml-10 bg-white m-4 rounded-xl shadow-md hover:border-cyan-400'>
          <p className='ibm-plex-mono-medium text-3xl lg:ml-2 lg:mt-4 ml-2 text-black font-extrabold'>{repo.name}</p>
          <p className='text-black ibm-plex-mono-medium lg:ml-2 ml-2 font-extrabold italic'>{repo.full_name}</p>
          <img src={repo.owner.avatar_url} className='lg:h-20 lg:w-20 lg:fixed absolute lg:ml-80 rounded-3xl lg:mt-24 h-12 w-12 ml-64 mt-20 border-4 border-black' alt="Owner avatar"/>
          <a href={repo.html_url} className='ml-2 text-black font-extrabold underline italic hover:text-blue-600 ibm-plex-mono-medium lg:ml-2'>Visit the Repo!</a>
          <p className='text-black lg:ml-2 ml-2 font-extrabold'>{repo.description}</p>
          <p className='text-black lg:ml-2 ml-2 font-extrabold'>{repo.updated_at}</p>
          <p className='text-black lg:ml-2 ml-2 font-extrabold'>{repo.language}</p>
          <p className='text-black lg:ml-2 ml-2 font-extrabold'>{repo.visibility}</p>
        </div>
      ))}
      <a href="/photos" className='text-3xl ibm-plex-mono-400 absolute lg:bottom-10 bottom-10 font-light ibm-plex-mono-extralight'>
      <p>
        Gallery of Projects
      </p>
      </a>
      <a href="/">
      <span class="material-symbols-outlined"><p className='text-4xl absolute lg:bottom-4 right-40 lg:right-8 lg:h-12 lg:w-12 lg:pl-1 lg:rounded-3xl lg:text-black lg:bg-white'>home</p></span>
      </a>
    </div>
  );
};

export default Page;