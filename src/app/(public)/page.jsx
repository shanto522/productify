"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % items.slice(0, 5).length);
    }, 2500);

    return () => clearInterval(interval);
  }, [items]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const features = [
    {
      title: "Smart Product Management",
      desc: "Easily add, view, and manage products using a clean and intuitive dashboard.",
    },
    {
      title: "Secure Authentication",
      desc: "Protected routes ensure only authorized users can manage data securely.",
    },
    {
      title: "Modern Tech Stack",
      desc: "Built with Next.js App Router, Express.js API, and Tailwind CSS.",
    },
  ];

  const testimonials = [
    {
      text: "This app makes product management incredibly simple.",
      name: "John Doe",
    },
    {
      text: "Clean UI, fast performance, and modern design.",
      name: "Jane Smith",
    },
    {
      text: "Perfect example of a full-stack Next.js project.",
      name: "Alex Brown",
    },
  ];

  return (
    <div className="space-y-30">
      {/* ================= HERO CAROUSEL ================= */}
      <div className="relative rounded-lg overflow-hidden">
        {/* ===== Carousel ===== */}
        {items.length > 0 && (
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${carouselIndex * 100}%)`,
            }}
          >
            {items.slice(0, 5).map((item) => (
              <div key={item.id} className="relative min-w-full opacity-100">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-150 w-full object-cover"
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/40" />
              </div>
            ))}
          </div>
        )}

        {/* ===== Centered Text Overlay ===== */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg text-lime-200">
            Manage Products <br /> The Smart Way
          </h1>
          <p className="text-lg md:text-2xl text-indigo-100 max-w-2xl drop-shadow">
            A modern full-stack application to manage your products efficiently
            and securely.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/items"
              className="text-white bg-indigo-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition"
            >
              Explore Items
            </Link>
          </div>
        </div>

        {/* ===== Glows (Optional Decoration) ===== */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      </div>
      {/* ================= PRODUCT FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-10">Product Features</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ================= FEATURED ITEMS ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-14 text-center text-gray-800">
          Featured Items
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {loading
            ? [1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-96 rounded-3xl bg-gray-200 animate-pulse"
                />
              ))
            : items.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                >
                  <img
                    src={item.image || "/images/placeholder.png"}
                    alt={item.name}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {item.description}
                    </p>
                    <Link
                      href={`/items/${item.id}`}
                      className="inline-block text-indigo-600 font-semibold hover:underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </section>
      {/* ================= ABOUT ================= */}
      <section className="px-6 text-center">
        <h2 className="text-4xl md:text-4xl font-extrabold mb-8 text-gray-800">
          About Productify
        </h2>
        <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
          Productify is a clean and scalable full-stack project demonstrating
          modern Next.js App Router concepts, API integration, authentication,
          and UI best practices.
        </p>
      </section>
      <section className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-16">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "100+ Products", desc: "Managed efficiently" },
            { title: "Secure Auth", desc: "Protected routes & cookies" },
            { title: "Fast API", desc: "Express.js backend" },
          ].map((item, i) => (
            <div key={i} className="p-10 bg-white rounded-3xl shadow-lg">
              <h3 className="text-3xl font-extrabold text-indigo-600">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className=" px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          How Productify Works
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[
            "Login to your account",
            "Browse product list",
            "View product details",
            "Add new items securely",
          ].map((step, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl shadow-lg">
              <span className="text-indigo-600 text-2xl font-bold">
                Step {i + 1}
              </span>
              <p className="mt-4 text-gray-600">{step}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ================= TESTIMONIALS ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Customer Feedback
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition"
            >
              <p className="text-gray-600 italic mb-6">“{t.text}”</p>
              <span className="font-bold text-gray-800">{t.name}</span>
            </div>
          ))}
        </div>
      </section>
      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 max-w-7xl mx-auto text-white py-32 px-6 text-center rounded-3xl  mb-10">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-2xl mb-10 text-indigo-100">
          Login and start managing your products instantly.
        </p>
        <Link
          href="/login"
          className="bg-white text-indigo-600 px-12 py-5 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
        >
          Login Now
        </Link>
      </section>
    </div>
  );
}
