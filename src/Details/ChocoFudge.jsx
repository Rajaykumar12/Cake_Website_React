import React from 'react'

export default function ChocoFudge() {
  return (
    <>
      <h1 className="detail">Chocolate Fudge Cake</h1>

      <h2 className="detail">Ingredients</h2>
      <p>Our Chocolate Fudge Cake is made with rich, decadent ingredients that give it a deep, intense chocolate flavor. Key ingredients include:</p>
      <ul>
          <li><strong>All-Purpose Flour:</strong> Ensures a tender and moist cake crumb.</li>
          <li><strong>Dark Cocoa Powder:</strong> For a bold, intense chocolate flavor.</li>
          <li><strong>Butter and Oil Blend:</strong> Provides richness and keeps the cake moist.</li>
          <li><strong>Chocolate Fudge Frosting:</strong> Made with high-quality dark chocolate and cream for a smooth, velvety texture.</li>
          <li><strong>Brown Sugar:</strong> Adds depth and enhances the chocolatey richness.</li>
      </ul>

      <h2 className="detail">Flavor Profile</h2>
      <p><strong>Taste:</strong> A rich, deep chocolate flavor with a perfect balance of sweetness, complemented by smooth, luxurious chocolate fudge frosting.</p>
      <p><strong>Texture:</strong> Dense, fudgy, and incredibly moist, with a creamy fudge frosting that melts in your mouth.</p>

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
              <td className="highlight">₹3,000</td>
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
              <td className="highlight">Starting from ₹8,000</td>
          </tr>
      </table>

      <h2 className="detail">Additional Customizations</h2>
      <ul>
          <li><strong>Personalized Message:</strong> Free of charge</li>
          <li><strong>Decorations:</strong> Custom decorations (such as chocolate curls, edible gold dust, or chocolate ganache drizzle) start at an additional ₹600</li>
          <li><strong>Extra Fudge Frosting Layer:</strong> ₹600 per layer</li>
      </ul>

      <p>If you'd like to place an order or have specific requests, feel free to reach out! We’re here to make your Chocolate Fudge Cake experience extraordinary.</p>
          </>
  )
}
