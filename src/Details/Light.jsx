import React from 'react'

export default function Light() {
  return (
    <>
      <h1 className="detail">Light Fruit Cake</h1>

      <h2 className="detail">Ingredients</h2>
      <p>Our Light Fruit Cake is a delightful option that's less dense than traditional fruit cakes, yet full of flavor. Key ingredients include:</p>
      <ul>
          <li><strong>All-Purpose Flour:</strong> Provides a light and fluffy texture.</li>
          <li><strong>Butter:</strong> For richness and moisture.</li>
          <li><strong>Granulated Sugar:</strong> Sweetens the cake without overwhelming the flavor.</li>
          <li><strong>Eggs:</strong> Adds structure and richness.</li>
          <li><strong>Dried Fruits:</strong> A mix of sultanas, raisins, and cherries for natural sweetness.</li>
          <li><strong>Candied Citrus Peel:</strong> For a fresh, zesty flavor.</li>
          <li><strong>Almonds:</strong> Chopped, for added texture and flavor.</li>
          <li><strong>Spices:</strong> A hint of nutmeg and cinnamon to warm the flavor profile.</li>
      </ul>

      <h2 className="detail">Flavor Profile</h2>
      <p><strong>Taste:</strong> A delicate balance of sweetness from the fruits, complemented by subtle citrus and nutty notes.</p>
      <p><strong>Texture:</strong> Light and airy, with a moist crumb and a pleasant chew from the fruits and nuts.</p>

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
              <td className="highlight">₹4,200</td>
          </tr>
          <tr>
              <td>10-Inch Cake</td>
              <td>Serves 14-16</td>
              <td className="highlight">₹5,500</td>
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
          <li><strong>Decorations:</strong> Custom decorations (such as fresh fruit, whipped cream, or edible flowers) start at an additional ₹400</li>
          <li><strong>Extra Fruit Layer:</strong> ₹300 per layer</li>
      </ul>

      <p>If you'd like to place an order or have specific requests, feel free to reach out! We’re here to make your Light Fruit Cake experience light, refreshing, and enjoyable.</p>
    </>
  )
}
