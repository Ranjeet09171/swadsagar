import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">Since 2026</span>
          <h1 className="hero-title">
            Welcome to <span className="highlight">FoodZone</span> 🍔
          </h1>
          <p className="hero-subtitle">
            Delicious food delivered fast at your doorstep
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              Order Now
              <span className="btn-icon">→</span>
            </button>
            <button className="btn btn-secondary">View Menu</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Dishes</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Customers</span>
            </div>
            <div className="stat">
              <span className="stat-number">30min</span>
              <span className="stat-label">Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Menu</span>
            <h2 className="section-title">Explore Our Categories</h2>
            <p className="section-subtitle">
              Discover delicious meals crafted with love and fresh ingredients
            </p>
          </div>

          <div className="card-container">
            {/* Veg Items Card */}
            <div className="card veg">
              <div className="card-icon">🥗</div>
              <div className="card-content">
                <h3>Veg Items</h3>
                <p>Fresh and healthy vegetarian meals made with organic ingredients</p>
                <div className="card-footer">
                  <span className="card-price">From ₹199</span>
                  <button className="card-btn">Explore →</button>
                </div>
              </div>
            </div>

            {/* Non-Veg Items Card */}
            <div className="card nonveg">
              <div className="card-icon">🍗</div>
              <div className="card-content">
                <h3>Non-Veg Items</h3>
                <p>Tasty and juicy non-veg dishes prepared with authentic spices</p>
                <div className="card-footer">
                  <span className="card-price">From ₹299</span>
                  <button className="card-btn">Explore →</button>
                </div>
              </div>
            </div>

            {/* Desserts Card */}
            <div className="card desserts">
              <div className="card-icon">🍰</div>
              <div className="card-content">
                <h3>Desserts</h3>
                <p>Sweet treats to complete your meal perfectly</p>
                <div className="card-footer">
                  <span className="card-price">From ₹99</span>
                  <button className="card-btn">Explore →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>30-minute delivery or it's free</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⭐</div>
              <h3>Quality Guarantee</h3>
              <p>100% fresh ingredients used</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing guaranteed</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎁</div>
              <h3>Special Offers</h3>
              <p>Weekly deals and discounts</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Order?</h2>
            <p>Get your favorite food delivered right to your doorstep</p>
            <button className="btn btn-primary btn-large">Order Now</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>FoodZone 🍔</h3>
              <p>Delivering happiness since 2025</p>
              <div className="social-links">
                <a href="#" className="social-link">📱</a>
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📸</a>
                <a href="#" className="social-link">🐦</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li>📞 +91 1234567890</li>
                <li>✉️ info@foodzone.com</li>
                <li>📍 123 Food Street, India</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Opening Hours</h4>
              <ul>
                <li>Mon-Fri: 10am - 11pm</li>
                <li>Sat-Sun: 9am - 12am</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 FoodZone | All Rights Reserved | Made with ❤️ for food lovers</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;