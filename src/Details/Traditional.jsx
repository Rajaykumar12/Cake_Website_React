import React from 'react'

export default function Traditional() {
  return (
    <>
      <h1 className="detail">Traditional Fruit Cake</h1>

      <h2 className="detail">Ingredients</h2>
      <p>Our Traditional Fruit Cake is a festive delight packed with a mix of dried and candied fruits, nuts, and warm spices. Key ingredients include:</p>
      <ul>
          <li><strong>All-Purpose Flour:</strong> Provides structure to the cake.</li>
          <li><strong>Butter:</strong> Adds richness and moisture.</li>
          <li><strong>Granulated Sugar:</strong> Sweetens the cake and caramelizes for flavor.</li>
          <li><strong>Eggs:</strong> For binding and creating a tender crumb.</li>
          <li><strong>Dried Fruits:</strong> Such as raisins, currants, and sultanas for sweetness and texture.</li>
          <li><strong>Candied Citrus Peel:</strong> For a zesty flavor.</li>
          <li><strong>Nuts:</strong> Chopped walnuts or almonds for added crunch.</li>
          <li><strong>Spices:</strong> Cinnamon, nutmeg, and allspice for warmth and depth.</li>
      </ul>

      <h2 className="detail">Flavor Profile</h2>
      <p><strong>Taste:</strong> A delightful combination of sweet and tangy dried fruits, complemented by the warm spices and buttery richness.</p>
      <p><strong>Texture:</strong> Dense and moist, with a delightful chew from the fruits and a crunch from the nuts.</p>

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
              <td className="highlight">₹3,500</td>
          </tr>
          <tr>
              <td>8-Inch Cake</td>
              <td>Serves 10-12</td>
              <td className="highlight">₹5,000</td>
          </tr>
          <tr>
              <td>10-Inch Cake</td>
              <td>Serves 14-16</td>
              <td className="highlight">₹6,500</td>
          </tr>
          <tr>
              <td>Customized Tiered Options</td>
              <td>Based on customization</td>
              <td className="highlight">Starting from ₹8,500</td>
          </tr>
      </table>

      <h2 className="detail">Additional Customizations</h2>
      <ul>
          <li><strong>Personalized Message:</strong> Free of charge</li>
          <li><strong>Decorations:</strong> Custom decorations (such as marzipan fruits or royal icing) start at an additional ₹600</li>
          <li><strong>Extra Fruit Layer:</strong> ₹500 per layer</li>
      </ul>

      <p>If you'd like to place an order or have specific requests, feel free to reach out! We’re here to make your Traditional Fruit Cake experience festive and enjoyable.</p>

    </>
  )
}
