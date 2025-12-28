import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Wissal.dz is a dynamic online platform committed to transforming education through accessible digital solutions. Based in Algeria, we specialize in offering high-quality courses and educational books tailored to various learning needs. Beyond content delivery, we serve as a meeting point for teachers, providing them with a space to collaborate, exchange ideas, and grow professionally.</p>
              <p>Our platform connects students and educators in a shared journey toward academic success. With a user-friendly interface and curated resources, Wissal.dz aims to make learning more effective and engaging. We believe in the power of knowledge to create lasting impact. Our team is passionate about innovation in education and dedicated to continuous improvement. At Wissal.dz, we’re shaping the future of learning in the digital age.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission is to make quality education more accessible and inclusive across Algeria.
                We strive to support learners with trusted resources and empower educators through collaboration and community.
                By combining technology with educational expertise, we aim to enhance the learning experience for all.
                Wissal.dz is committed to building a brighter future through knowledge and connection.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
