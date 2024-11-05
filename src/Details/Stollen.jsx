import React from 'react'

export default function Stollen() {
  return (
    <>
      <h1 className="detail">Stollen</h1>

      <h2 className="detail">Ingredients</h2>
      <p>Our Stollen is a traditional German fruit bread that’s perfect for the holiday season, enriched with spices and fruits. Key ingredients include:</p>
      <ul>
          <li><strong>All-Purpose Flour:</strong> The base for structure and texture.</li>
          <li><strong>Butter:</strong> Adds richness and a tender crumb.</li>
          <li><strong>Granulated Sugar:</strong> Sweetens the dough.</li>
          <li><strong>Yeast:</strong> For leavening and creating a light texture.</li>
          <li><strong>Milk:</strong> Provides moisture and richness.</li>
          <li><strong>Dried Fruits:</strong> Such as raisins, currants, and candied citrus peel for sweetness and flavor.</li>
          <li><strong>Nuts:</strong> Chopped almonds for added crunch.</li>
          <li><strong>Spices:</strong> Cinnamon, nutmeg, and cardamom for warm flavors.</li>
          <li><strong>Powdered Sugar:</strong> For dusting on top before serving.</li>
      </ul>

      <h2 className="detail">Flavor Profile</h2>
      <p><strong>Taste:</strong> A delightful mix of sweet and spicy flavors, with a rich buttery taste complemented by dried fruits and nuts.</p>
      <p><strong>Texture:</strong> Dense yet moist, with a satisfying chew from the fruits and nuts.</p>

      <h2 className="detail">Size Options & Pricing</h2>
      <table className="price-table">
          <tr>
              <th>Size</th>
              <th>Servings</th>
              <th>Price (INR)</th>
          </tr>
          <tr>
              <td>Small Stollen (500g)</td>
              <td>Serves 4-6</td>
              <td className="highlight">₹1,200</td>
          </tr>
          <tr>
              <td>Medium Stollen (1kg)</td>
              <td>Serves 8-10</td>
              <td className="highlight">₹2,200</td>
          </tr>
          <tr>
              <td>Large Stollen (1.5kg)</td>
              <td>Serves 12-15</td>
              <td className="highlight">₹3,200</td>
          </tr>
          <tr>
              <td>Customized Orders</td>
              <td>Based on customization</td>
              <td className="highlight">Starting from ₹4,000</td>
          </tr>
      </table>

      <h2 className="detail">Additional Customizations</h2>
      <ul>
          <li><strong>Personalized Message:</strong> Free of charge</li>
          <li><strong>Decorations:</strong> Custom decorations (such as marzipan or fresh fruits) start at an additional ₹500</li>
          <li><strong>Extra Fruit Filling:</strong> ₹400 per addition</li>
      </ul>

      <p>If you'd like to place an order or have specific requests, feel free to reach out! We’re here to make your Stollen experience festive and delightful.</p>
    </>
  )
}
