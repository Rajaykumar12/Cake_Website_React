import React from 'react'

export default function GermanChoco() {
  return (
    <>
      <h1 className="detail">German Chocolate Cake</h1>

      <h2 className="detail">Ingredients</h2>
      <p>Our German Chocolate Cake is a decadent treat featuring layers of rich chocolate cake with a creamy coconut and pecan frosting. Key ingredients include:</p>
      <ul>
          <li><strong>All-Purpose Flour:</strong> Provides structure and a light crumb.</li>
          <li><strong>Cocoa Powder:</strong> For a rich chocolate flavor.</li>
          <li><strong>Granulated Sugar:</strong> Adds sweetness and moisture.</li>
          <li><strong>Eggs:</strong> For binding and richness.</li>
          <li><strong>Buttermilk:</strong> Adds moisture and tanginess.</li>
          <li><strong>Butter:</strong> Ensures a rich and moist cake.</li>
          <li><strong>Coconut and Pecans:</strong> For the signature frosting, adding texture and flavor.</li>
      </ul>

      <h2 className="detail">Flavor Profile</h2>
      <p><strong>Taste:</strong> A delightful combination of rich chocolate and the nutty sweetness of coconut and pecans.</p>
      <p><strong>Texture:</strong> Soft, moist layers with a creamy, chunky frosting that offers a delightful contrast.</p>

      <h2 className="detail">Size Options & Pricing</h2>
      <table className="price-table">
          <tr>
              <th>Size</th>
              <th>Servings</th>
              <th>Price (INR)</th>
          </tr>
          <tr>
              <td>6-Inch Cake</td>
              <td>Serves 6-8</td>
              <td className="highlight">₹3,200</td>
          </tr>
          <tr>
              <td>8-Inch Cake</td>
              <td>Serves 10-12</td>
              <td className="highlight">₹4,500</td>
          </tr>
          <tr>
              <td>10-Inch Cake</td>
              <td>Serves 14-16</td>
              <td className="highlight">₹5,800</td>
          </tr>
          <tr>
              <td>Customized Tiered Options</td>
              <td>Based on customization</td>
              <td className="highlight">Starting from ₹7,000</td>
          </tr>
      </table>

      <h2 className="detail">Additional Customizations</h2>
      <ul>
          <li><strong>Personalized Message:</strong> Free of charge</li>
          <li><strong>Decorations:</strong> Custom decorations (such as chocolate shavings, fruit, or whipped cream) start at an additional ₹500</li>
          <li><strong>Extra Coconut-Pecan Frosting:</strong> ₹400 per layer</li>
      </ul>

      <p>If you'd like to place an order or have specific requests, feel free to reach out! We’re here to make your German Chocolate Cake experience unforgettable.</p>
    </>
  )
}
