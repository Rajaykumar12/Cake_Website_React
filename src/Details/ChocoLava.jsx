import React from 'react'

export default function ChocoLava() {
  return (
    <>
      <h1 className="detail">Choco Lava Cake</h1>

      <h2 className="detail">Ingredients</h2>
      <p>Our Choco Lava Cake features a rich, molten chocolate center surrounded by a soft, decadent cake. Key ingredients include:</p>
      <ul>
          <li><strong>Dark Chocolate:</strong> The star ingredient, providing a rich and intense flavor.</li>
          <li><strong>Butter:</strong> Adds richness and moisture to the cake.</li>
          <li><strong>All-Purpose Flour:</strong> Gives structure while keeping the cake tender.</li>
          <li><strong>Eggs:</strong> For binding and adding richness.</li>
          <li><strong>Powdered Sugar:</strong> Sweetens the batter and enhances the cake's fudgy texture.</li>
      </ul>

      <h2 className="detail">Flavor Profile</h2>
      <p><strong>Taste:</strong> A perfect balance of rich chocolate flavor with a sweet, molten center that oozes when you cut into it.</p>
      <p><strong>Texture:</strong> Soft and fudgy on the outside with a gooey, molten chocolate core that creates a delightful contrast.</p>

      <h2 className="detail">Size Options & Pricing</h2>
      <table className="price-table">
          <tr>
              <th>Size</th>
              <th>Servings</th>
              <th>Price (INR)</th>
          </tr>
          <tr>
              <td>Single Serving (Ramekin)</td>
              <td>Serves 1</td>
              <td className="highlight">₹300</td>
          </tr>
          <tr>
              <td>4-Inch Cake</td>
              <td>Serves 2-4</td>
              <td className="highlight">₹800</td>
          </tr>
          <tr>
              <td>6-Inch Cake</td>
              <td>Serves 6-8</td>
              <td className="highlight">₹1,500</td>
          </tr>
          <tr>
              <td>Customized Tiered Options</td>
              <td>Based on customization</td>
              <td className="highlight">Starting from ₹2,500</td>
          </tr>
      </table>

      <h2 className="detail">Additional Customizations</h2>
      <ul>
          <li><strong>Personalized Message:</strong> Free of charge</li>
          <li><strong>Decorations:</strong> Custom decorations (such as chocolate curls, whipped cream, or fruit) start at an additional ₹300</li>
          <li><strong>Extra Molten Chocolate Sauce:</strong> ₹150 per serving</li>
      </ul>

      <p>If you'd like to place an order or have specific requests, feel free to reach out! We’re here to make your Choco Lava Cake experience indulgent and delicious.</p>
    </>
  )
}
