import "../index.css";
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import Categories from '../components/home/Categories';
import FeaturedStudents from '../components/home/FeaturedStudents';
import Testimonials from '../components/home/Testimonials';

export default function HomePage() {
  return (
    <div>
      <Hero />
      
      <section className="container py-4">
        <HowItWorks />
      </section>
      
      <section className="container py-4">
        <h3 className="fw-bold mb-3">Popular Categories</h3>
        <Categories />
      </section>
      
      <section className="container py-4">
        <h3 className="fw-bold mb-3">Featured Students</h3>
        <FeaturedStudents />
      </section>
      
      <section className="container py-4">
        <Testimonials />
      </section>
      
      <section className="container py-3">
        <div className="bg-light p-3 rounded d-flex justify-content-around">
          <span>✓ CPUT Approved</span>
          <span>✓ Secure Payments</span>
          <span>✓ Verified Students</span>
        </div>
      </section>
    </div>
  );
}