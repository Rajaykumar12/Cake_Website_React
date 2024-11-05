import React from 'react'

export default function BlackForest() {
  return (
    <>
      <h1 className="detail">Black Forest Cake</h1>

      <h2 className="detail">Ingredients</h2>
      <p>Our Black Forest Cake is a deliciously rich chocolate cake layered with whipped cream and cherries, inspired by the traditional German dessert. Key ingredients include:</p>
      <ul>
          <li><strong>All-Purpose Flour:</strong> Provides a light and airy texture.</li>
          <li><strong>Cocoa Powder:</strong> For a deep chocolate flavor.</li>
          <li><strong>Granulated Sugar:</strong> Sweetens the cake perfectly.</li>
          <li><strong>Eggs:</strong> Adds moisture and richness.</li>
          <li><strong>Heavy Cream:</strong> Whipped to create the fluffy frosting.</li>
          <li><strong>Cherries:</strong> Fresh or preserved, for the classic filling and topping.</li>
          <li><strong>Kirsch (Cherry Brandy):</strong> Traditional ingredient for flavoring.</li>
      </ul>

      <h2 className="detail">Flavor Profile</h2>
      <p><strong>Taste:</strong> A delightful combination of rich chocolate, sweet cream, and tart cherries, creating a perfect balance.</p>
      <p><strong>Texture:</strong> Soft and moist layers of chocolate cake interspersed with fluffy whipped cream and juicy cherries.</p>

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
              <td className="highlight">₹4,800</td>
          </tr>
          <tr>
              <td>10-Inch Cake</td>
              <td>Serves 14-16</td>
              <td className="highlight">₹6,200</td>
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
          <li><strong>Decorations:</strong> Custom decorations (such as chocolate shavings, fresh fruits, or chocolate ganache) start at an additional ₹500</li>
          <li><strong>Extra Whipped Cream Layer:</strong> ₹400 per layer</li>
      </ul>

      <p>If you'd like to place an order or have specific requests, feel free to reach out! We’re here to make your Black Forest Cake experience delightful and memorable.</p>
    </>
  )
}
