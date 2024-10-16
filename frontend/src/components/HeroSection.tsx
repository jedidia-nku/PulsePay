// src/components/HeroSection.tsx
import React from 'react';
import phone from "../../public/phone.png";
import business from "../../public/Business.png";
import Satisfied from "../../public/Satisfied.png";
import Benefit from "../../public/Benefit.png";
import logos from "../../public/logos.png";
import Security from "../../public/security.png";
import Globe from "../../public/globe.png"
import Footer from './Footer';

const HeroSection: React.FC = () => {
  return (
    <>
    <section className="bg-gray-900 text-white py-32">
      <div className="container mx-auto flex flex-col lg:flex-row items-center ">
        
        {/* Left Section */}
        <div className="lg:w-1/2 px-6 ">
          <h1 className="text-4xl font-bold">
            Business payments <span className="text-green-500">for</span> today's global <span className="text-yellow-400">economy</span>
          </h1>
          <p className="mt-12 text-lg">
          PulsePay is the Embedded Finance Platform designed for the Gig Economy Workforce and Businesses in Africa. 
            We offer two products such as Payroll Management System to companies and Embedded Financial Services to Gig Workers and Employees across Africa.
          </p>
          <div className="mt-8 flex">
            <button className="bg-green-500 hover:bg-green-600 text-gray-900 font-semibold py-2 px-4 rounded-md mr-4">
              Contact sales
            </button>
            <button className="flex items-center bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md">
              <span>Explore more</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:ml-32">

          <div className="grid grid-cols-2 bg-white w-9/12">
            {/* Image of the phone */}
            <div className=" flex justify-center">
              <img src={phone} alt="Phone showing PulsePay app"/>
            </div>

            {/* Stats 1 */}
            <div className=" flex justify-center">
              <img src={business} alt="Businesses worked with our company"/>
            </div>

            {/* Stats 2 */}
            <div className=" flex justify-center">
              <img src={Satisfied} alt="Businesses worked with our company"/>
            </div>
            {/* Stats 3 */}
            <div className=" flex justify-center">
              <img src={Benefit} alt="Businesses worked with our company"/>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section className="bg-white text-white py-16 px-8">
      {/* Trusted by companies section */}
      <div className="flex justify-center items-center gap-8 mb-12">
        {/* Add the company logos here */}
        <img src={logos} alt="Uber" className="w-2/3" />
      </div>

      {/* Why choose SawaPay title */}
      <div className="text-center text-black mb-8">
        <h2 className="text-4xl text-black font-bold">Why choose SawaPay?</h2>
        <p className="text-lg mt-2">There are tons of reasons. Here are just a few.</p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-green-400 mb-4">Faster than ever</h3>
          <p>You can even bundle your home & auto insurance in as little as 30 seconds.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-green-400 mb-4">Financial strength</h3>
          <p>We’re backed by A-rated reinsurance capital.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-green-400 mb-4">Greater savings</h3>
          <p>By selling direct, we keep costs low and pass the savings along.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-green-400 mb-4">Easy-to-file claims</h3>
          <p>File a claim instantly online — SawaPay handles claims quickly and fairly.</p>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-green-400 mb-4">Powered by community</h3>
          <p>By harnessing the power of community, we can make insurance more affordable.</p>
        </div>

        {/* Card 6 */}
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-green-400 mb-4">Available on the go</h3>
          <p>The SawaPay mobile app lets you access your account from anywhere.</p>
        </div>
      </div>
    </section>

    <section className="bg-gray-900 text-white py-20 px-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Payment possibilities for all</h2>
        <p className="text-lg text-gray-400">
          PulsePay offers a host of seamless products for individuals, ensuring smooth transactions and efficient money management.
        </p>
      </div>

      {/* Feature Cards Container */}
      <div className="flex justify-center gap-8 flex-wrap">
        {/* Card 1 */}
        <div className="bg-gray-800 text-center rounded-lg shadow-lg p-8 max-w-sm transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">Send money to loved ones</h3>
          <p className="text-gray-300 mb-4">
            Experience the convenience and security as you effortlessly and securely transfer money to your loved ones residing overseas. Begin sharing the joy with those who hold significance in your life.
          </p>
          <a href="#" className="text-green-400 underline">Learn more</a>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 text-center rounded-lg shadow-lg p-8 max-w-sm transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">Shop online</h3>
          <p className="text-gray-300 mb-4">
            Explore a world of possibilities as you have your purchases conveniently delivered from your cherished online businesses. Embark on a shopping journey and relish the joy of acquiring items from amazing small businesses, right here.
          </p>
          <a href="#" className="text-green-400 underline">Learn more</a>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 text-center rounded-lg shadow-lg p-8 max-w-sm transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">Find events and buy tickets</h3>
          <p className="text-gray-300 mb-4">
            Browse upcoming events and secure your ticket on our Afritickets platform. Never miss out on your favorite events again.
          </p>
          <a href="#" className="text-green-400 underline">Learn more</a>
        </div>
      </div>
    </section>

    <section className="bg-gray-100 text-center py-12">
      <h2 className="text-xl font-semibold mb-2">Security & Privacy</h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        We take data security & privacy seriously. Our users' data is our top priority. Your information is fully encrypted and safe. We are compliant with all mobile money standards and regulations.
      </p>
      <div className="mt-8 flex justify-center">
        <img src={Security} alt="Security Icon" className="w-16 h-16" />
      </div>
    </section>
    
    <section className="flex flex-col md:flex-row justify-between items-center bg-white text-white py-16 px-52">
      {/* Left Side: Text Content */}
      <div className="space-y-6 md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-900">Our <span className="text-yellow-400">global </span>reach</h1>
        <div className="space-y-4">
        <div className='flex gap-6'>
        <div className="w-1 h-12 mt-2 bg-gray-800"></div>
        <div>
        <h2 className="text-lg font-semibold text-green-400">30+ Currencies</h2>
        <p className="text-gray-600">We accept payments in more than thirty currencies.</p>
        </div>
      </div>

          <div className='flex gap-6'>
            <div className="w-1 h-12 mt-2 bg-gray-800"></div>
            <div>
            <h2 className="text-lg font-semibold text-green-400">20M+ API calls</h2>
            <p className="text-gray-600">API calls per day, peaking at 231 requests per second.</p>
            </div>
          </div>

            <div className='flex gap-6'>
            <div className="w-1 h-12 mt-2 bg-gray-800"></div>
            <div>
            <h2 className="text-lg font-semibold text-green-400">500k+ payments daily</h2>
            <p className="text-gray-600">Average number of payments processed daily.</p>
            </div>
          </div>

          <div className='flex gap-6'>
            <div className="w-1.5 h-12 mt-2 bg-gray-800"></div>
            <div>
            <h2 className="text-lg font-semibold text-green-400">15+ payment options</h2>
            <p className="text-gray-600">Debit & Credit cards, Mobile money, M-Pesa, Bank Transfer, Bank Account, POS, VISA QR, USSD.</p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Right Side: Globe Visualization */}
      <div className="relative w-80 h-80 md:w-96 md:h-96 mt-10 md:mt-0">
        {/* Placeholder for globe */}
        <div className="rounded-full bg-gray-800 w-full h-full">
          <img src={Globe} alt="Globe image" className="w-full h-full"/>
        </div>
      </div>
    </section>
<Footer />
    </>
  );
};

export default HeroSection;
