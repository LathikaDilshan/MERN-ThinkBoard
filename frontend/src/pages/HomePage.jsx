import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar'
import RateLimitedUi from '../components/RateLimitedUi';
import { Turtle } from 'lucide-react';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitedUi/>}
    </div>
  )
}

export default HomePage
