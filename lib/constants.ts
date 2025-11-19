export interface Event {
    image: string,
    title: string,
    slug: string,
    location: string,
    date: string,
    time: string,
}

export const events: Event[] = [
    { 
      image: '/images/event1.png', 
      title: 'Global Tech Conference 2025', 
      slug: 'global-tech-conference-2025', 
      location: 'San Francisco, CA', 
      date: 'March 15, 2025', 
      time: '9:00 AM - 5:00 PM' 
    },
    { 
      image: '/images/event2.png', 
      title: 'Summer Vibes Music Festival', 
      slug: 'summer-vibes-music-festival', 
      location: 'Austin, TX', 
      date: 'June 21, 2025', 
      time: '2:00 PM - 11:00 PM' 
    },
    { 
      image: '/images/event3.png', 
      title: 'Modern Art Exhibition', 
      slug: 'modern-art-exhibition', 
      location: 'New York, NY', 
      date: 'April 10, 2025', 
      time: '10:00 AM - 6:00 PM' 
    },
    { 
      image: '/images/event4.png', 
      title: 'Startup Founders Meetup', 
      slug: 'startup-founders-meetup', 
      location: 'Seattle, WA', 
      date: 'May 8, 2025', 
      time: '6:30 PM - 9:00 PM' 
    },
    { 
      image: '/images/event5.png', 
      title: 'Gourmet Food Fair', 
      slug: 'gourmet-food-fair', 
      location: 'Chicago, IL', 
      date: 'July 12, 2025', 
      time: '11:00 AM - 8:00 PM' 
    },
    { 
      image: '/images/event6.png', 
      title: 'City Marathon for Charity', 
      slug: 'city-marathon-for-charity', 
      location: 'Boston, MA', 
      date: 'September 28, 2025', 
      time: '7:00 AM - 2:00 PM' 
    }
  ];
  