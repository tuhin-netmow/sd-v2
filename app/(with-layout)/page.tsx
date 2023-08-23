"use client";
import React from 'react';
import Hero from '@/components/Home/hero';
import HomeComparison from '@/components/Home/home_comparison';
import HomeTemplates from '@/components/Home/home_templates';
import HomeSports from '@/components/Home/home_sports';
import HomeFacilities from '@/components/Home/home_facilities';
import HomePricing from '@/components/Home/home_pricing';
import HomeTestimonial from '@/components/Home/home_testimonial';
import { items } from '@/data/data';

export default function Home() {

  return (
    <main>
      <Hero />
      <HomeComparison />
      <HomeTemplates items={items}/>
      <HomeSports />
      <HomeFacilities />
      <HomePricing />
      <HomeTestimonial />
    </main>
  )
}
