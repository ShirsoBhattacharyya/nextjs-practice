"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, [router]);
  return (
    <h1>Loading...</h1>
  );
}

export default Home;
