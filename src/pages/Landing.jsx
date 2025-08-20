import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, Users, Dumbbell, DollarSign , UserStar} from 'lucide-react';
import {Link} from 'react-router-dom';
const BrothersGym = () => {
  const trainers = [
    { name: 'Alex "The Anvil" Stone', specialty: 'Strength & Powerlifting', bio: 'Alex has been training for over 15 years, specializing in maximizing raw strength and power.', image: 'https://placehold.co/400x400/1a1a1a/cccccc?text=Trainer+1' ,icon :<UserStar size={260} strokeWidth={1.5} /> },
    { name: 'Sarah "Iron" Lee', specialty: 'Bodybuilding & Nutrition', bio: 'Sarah is a certified bodybuilder with a passion for helping clients sculpt their physique through precise training and diet.', image: 'https://placehold.co/400x400/1a1a1a/cccccc?text=Trainer+2' ,icon : <UserStar size={260}/> },
    { name: 'Marcus "Titan" Reed', specialty: 'CrossFit & Conditioning', bio: 'Marcus brings a high-energy approach to every session, pushing members to their limits to achieve peak physical condition.', image: 'https://placehold.co/400x400/1a1a1a/cccccc?text=Trainer+3' ,icon : <UserStar size={260}/> },
  ];

  const pricingPlans = [
    { name: 'Single Session', price: '$25', features: ['Access to all gym facilities', 'No long-term commitment'] },
    { name: 'Monthly Membership', price: '$60', features: ['Unlimited access', 'Free group classes', 'Locker room access'] },
    { name: 'Premium Plan', price: '$120', features: ['All monthly benefits', '1 personal training session/month', 'Custom meal plan'] },
  ];
  const sampleGyn = "src/assets/sample_gym.jpg"

  return (
    <div className="bg-black text-gray-200 font-sans leading-relaxed">
      {/* Navbar */}
      <nav className="fixed w-full z-50  bg-opacity-80 backdrop-filter backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-3xl font-bold text-red-600 font-display">Brothers</a>
          <div className="hidden md:flex space-x-8 text-sm uppercase">
            <a href="#hero" className="hover:text-red-600 transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-red-600 transition-colors duration-300">About</a>
            <a href="#trainers" className="hover:text-red-600 transition-colors duration-300">Trainers</a>
            <a href="#pricing" className="hover:text-red-600 transition-colors duration-300">Pricing</a>
            <a href="#contact" className="hover:text-red-600 transition-colors duration-300">Contact</a>
            <Link to="/dashboard" className="hover:text-red-600 transition-colors duration-300">Dashboard</Link>
            <a href="#join" className="py-1 px-4 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300">Join Now</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center bg-[url('src/assets/landing_1.jpg')]">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 p-6 md:p-12">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase text-red-600 drop-shadow-lg">Brothers</h1>
          <h2 className="text-xl md:text-3xl mt-4 font-semibold tracking-wider text-gray-300">Forge Your Strength. Build Your Legacy.</h2>
          <p className="mt-6 md:mt-8 max-w-2xl mx-auto text-base md:text-lg">
            A hardcore training facility dedicated to bodybuilding and powerlifting. We provide the tools, the atmosphere, and the expertise to help you achieve your most ambitious fitness goals.
          </p>
          <a href="#join" className="mt-8 inline-block px-12 py-4 border-red-700 border-2 text-white font-bold uppercase tracking-wide rounded-full shadow-lg transform-colors duration-100 hover:bg-red-700 ">Join The Brotherhood</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-4 uppercase">About Brothers</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src={sampleGyn} alt="Gym Interior" className="rounded-lg shadow-xl" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-400 mb-6">
                Brothers is not just a gym; it's a sanctuary for those committed to the iron. Founded by bodybuilders for bodybuilders, we've stripped away the fluff and focused on what truly matters: heavy weights, proper form, and an environment that fuels progress.
              </p>
              <p className="text-lg text-gray-400">
                Our facility is equipped with state-of-the-art power racks, dumbbells up to 200lbs, and specialized machines designed to target every muscle group. We believe in the grind, the sweat, and the unwavering dedication it takes to transform your body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12 uppercase">Our Trainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                {/* <img src={trainer.image} alt={trainer.name} className="w-full h-80 object-cover" /> */}
                <div className="w-full h-80 flex items-center justify-center" >{trainer.icon}</div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-red-600">{trainer.name}</h3>
                  <p className="text-sm font-semibold text-gray-400 mt-2">{trainer.specialty}</p>
                  <p className="text-gray-500 mt-4 text-sm">{trainer.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="pricing" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12 uppercase">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="relative bg-gray-900 rounded-lg p-8 shadow-xl border-t-4 border-red-600 transition-transform duration-300 hover:scale-105">
                <h3 className="text-3xl font-bold text-center text-red-600">{plan.name}</h3>
                <div className="text-center my-6">
                  <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-gray-400">/mo</span>
                </div>
                <ul className="text-center text-gray-400 space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#join" className="block w-full text-center py-3 bg-red-600 text-white font-bold uppercase rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">Select Plan</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Membership Section */}
      <section id="join" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 uppercase">Join the Brotherhood</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
            Ready to start your journey? Fill out the form below to become a member of Brothers Gym and take the first step towards a stronger you.
          </p>
          <div className="bg-gray-900 p-8 md:p-12 rounded-lg shadow-xl max-w-xl mx-auto border-t-4 border-red-600">
            <form className="space-y-6 text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600" />
              </div>
              <div>
                <label htmlFor="plan" className="block text-sm font-medium text-gray-300 mb-2">Membership Plan</label>
                <select id="plan" name="plan" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600">
                  <option value="">Select a plan</option>
                  <option value="monthly">Monthly Membership</option>
                  <option value="premium">Premium Plan</option>
                  <option value="session">Single Session</option>
                </select>
              </div>
              <button type="submit" className="w-full py-3 bg-red-600 text-white font-bold uppercase rounded-lg shadow-lg hover:bg-red-700 transition">
                Complete Membership
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12 uppercase">Contact Us</h2>
          <div className="flex flex-col md:flex-row md:space-x-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Get in Touch</h3>
              <p className="text-gray-400 mb-4">
                Have questions? We're here to help. Reach out to us via phone, email, or connect with us on social media.
              </p>
              <div className="space-y-4">
                <p className="flex items-center text-gray-300"><Mail size={20} className="mr-3 text-red-600" /> info@brothersgym.com</p>
                <p className="flex items-center text-gray-300"><Phone size={20} className="mr-3 text-red-600" /> (123) 456-7890</p>
              </div>
              <div className="flex mt-6 space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300"><Instagram size={32} /></a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300"><Facebook size={32} /></a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300"><Twitter size={32} /></a>
              </div>
            </div>
            <div className="md:w-1/2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9631629158434!3d-37.81720974201633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2c3e1e2d7e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1628109673809!5m2!1sen!2sau" 
                className="w-full h-80 rounded-lg shadow-xl"
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-6 text-center text-gray-500 text-sm">
        <p>&copy; 2025 Brothers Gym. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default BrothersGym;