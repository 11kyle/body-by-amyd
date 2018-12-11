import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Pricing from './Pricing';
import Form from './Form';
import Testimonials from './Testimonials';
import Footer from './Footer';
import './Product.css';
import './Pricing.css';
import './Styles.css';

class App extends Component {
  render() {
    const quotes = [
      {
        "name": "Deana",
        "testimonial": "Amy is  amazing inside and out; she has changed her life tremendously and become exactly who she was meant to be. Amy gave me that extra kick I needed to get back into shape and healthy again after having my son. She can help anyone get where they want to be; this is her passion, it's her soul, helping others:  fitness, health and wellness is who she is!",
        "location": "Rochester, NY"
      },
      {
        "name": "Jessica",
        "testimonial": "Amy is amazing! Full of energy, and such an inspiration! She will whip you into shape and you will have fun doing it!",
        "location": "Denver, CO"
      },
      {
        "name": "Kanyon",
        "testimonial": "I've never known a trainer to care so deeply about the results their clients see. Amy goes above & beyond constantly. Her focus on her own health proves that she walks her talk, which is the most important quality in a trainer. Amy is one of the few people I trust to train me. She is incredible!",
        "location": "Jacksonville, FL"
      },
      {
        "name": "Adrienne",
        "testimonial": "5 stars all around! I reached out to Amy to tone up for an upcoming trip to the beach and she was absolutely incredible! First of all I NEVER work out & it's not my favorite thing to do. Amy met with me (digitally as I live out of town), sent me a detailed fitness plan, helped me with meals and always checked in with me for progress. She was always available, she encouraged me when I wanted to give up & listened to me when I needed a nonjudgmental listening ear! I'm so happy with my progress, I started to see results within the first week & a half. The workouts were fun & accessible (I did them in my home). I'm so satisfied with my body and I intend to move forward in my fitness journey. I'm so thankful for Amy's help & I would recommend her to everyone!!!!",
        "location": "Rochester, NY"
      },
      {
        "name": "Lauren",
        "testimonial": "I HIGHLY recommend Amy for virtual training. Her business is not flashy and pricey as others are. She trains real, working, busy adults. I am a middle school teacher. In the past, I couldn't balance running with school. With Amy, her manageable plan has not only allowed me to run, but also strengthen  twice a week. Also, Amy is personable. She is consistently available for questions and advice, but more importantly, moral support. After my half marathon, I texted her after I crossed the finish line to tell her my time and share my excitement.",
        "location": "Cincinatti, OH"
      },
      {
        "name": "Jess",
        "testimonial": "I have been working with Amy for a few years now & her energy and enthusiasm for health, fitness and running is contagious! She creates personalized plans that are easy to follow and adaptable to your lifestyle. I worked with her to get back into running & was running for 7 minutes straight in no time, a record for myself. I am still working on becoming a better runner and decided for the winter months to focus on her HIIT training program. While working on my endurance, physical fitness and diet, she has been there for me every step of the way! I can't thank her enough.",
        "location": "Rochester, NY"
      },
      {
        "name": "Ben",
        "testimonial": "Amy is the best motivator I've seen, and I am around athletic people all day every day. Rugby, gymnastics, regular workouts, whatever. She's the best. She walks her talk and helps build healthy lifestyles, all with a huge smile on her face. Couldn't ask for a better support partner to help reach your fitness goals than Amy.",
        "location": "Denver, CO"
      },
      {
        "name": "Kristy",
        "testimonial": "I started training with Amy 10 months ago. When I met her I was overweight & tired with no energy at all. I could only work out for 30 minutes at a time. Ten months later I have lost 10 inches and 15 lbs. My workouts are strong and long. I went from flabby abs to a stronger, less flabby core. I am training the entire 60 minutes as well. Amy is the BEST trainer I have ever had. She helped me achieve my goals and raise my energy level.",
        "location": "Denver, CO"
      },
      {
        "name": "Shannon",
        "testimonial": "I  met Amy shortly after she moved here from New York & we became friends from the start. I had 'plateaued' with my strength training, so I immediately hired her as my personal trainer. She worked with me, pointing out the things that I needed to do to be able to overcome this 'plateau'. I was very impressed with her knowledge and expertise in all areas of fitness, training, and dieting! She is absolutely awesome and I would definitely recommend her to anyone (male or female) looking to improve their overall life and complete happiness!",
        "location": "Denver, CO"
      },
      {
        "name": "Megan",
        "testimonial": "I've been working with Amy for almost 2 years. Not only has she made me stronger & a better runner, but I also actually LIKE my body for the first time in my life thanks to her. Even after 2 years, she still manages to push me, hold me accountable, & keep workouts interesting and different, & my health continues to improve as a result. Working with Amy has been the best decision I've made regarding my health & I highly recommend her.",
        "location": "Denver, CO"
      },
      {
        "name": "Carolynne",
        "testimonial": "I would highly recommend Amy for your personal training needs if your goal is to get results. Her rates are so reasonable for the high level caliber training she provides. I am an avid runner, ran DI XC and track in college and I feel like  Amy is elite when it comes to personalizing a plan. She now lives out of state and does convenient online training. Thank you Amy!",
        "location": "Rochester, NY"
      },
      {
        "name": "March",
        "testimonial": "Amy is the best! I've been seeing Amy since June 2018 for strength training and run coaching - and I'm hooked. I really appreciate her whole person and mind/body approach. She goes above and beyond to teach and support me in every session, and helps me be accountable to my goals in between sessions. Since June I've seen improvements and results in my pace, strength, and mental fitness. I highly recommend Body by Amy!!!!",
        "location": "Denver, CO"
      },
    ];
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Pricing />
        <Form />
        <Testimonials  quoteData={quotes}/>
        <Footer />
      </div>
    );
  }
}

export default App;
