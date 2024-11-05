import React from 'react'

export default function Citrus() {
  return (
    <>
      <h1 className="detail">Citrus Fruit Cake</h1>

      <h2 className="detail">Ingredients</h2>
      <p>Our Citrus Fruit Cake is a vibrant and refreshing dessert that features a blend of zesty citrus fruits and a light, fluffy texture. Key ingredients include:</p>
      <ul>
          <li><strong>All-Purpose Flour:</strong> The base of the cake for structure.</li>
          <li><strong>Butter:</strong> Provides moisture and a rich flavor.</li>
          <li><strong>Granulated Sugar:</strong> Sweetens the cake perfectly.</li>
          <li><strong>Eggs:</strong> Essential for binding and creating a light texture.</li>
          <li><strong>Milk:</strong> Adds moisture to the batter.</li>
          <li><strong>Citrus Zest:</strong> Fresh lemon, orange, and lime zest for vibrant flavor.</li>
          <li><strong>Dried Citrus Fruits:</strong> Such as candied orange and lemon peel for sweetness.</li>
          <li><strong>Powdered Sugar:</strong> For the light glaze or frosting.</li>
      </ul>

      <h2 className="detail">Flavor Profile</h2>
      <p><strong>Taste:</strong> A delightful combination of sweet and tangy flavors from the citrus, with a hint of vanilla.</p>
      <p><strong>Texture:</strong> Light and airy with a moist crumb, complemented by chewy dried fruits.</p>

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
              <td className="highlight">Starting from ₹7,500</td>
          </tr>
      </table>

      <h2 className="detail">Additional Customizations</h2>
      <ul>
          <li><strong>Personalized Message:</strong> Free of charge</li>
          <li><strong>Decorations:</strong> Custom decorations (such as citrus slices, edible flowers, or whipped cream) start at an additional ₹500</li>
          <li><strong>Extra Citrus Layer:</strong> ₹400 per layer</li>
      </ul>

      <p>If you'd like to place an order or have specific requests, feel free to reach out! We’re here to make your Citrus Fruit Cake experience zesty and delightful.</p>
    </>
  )
}
