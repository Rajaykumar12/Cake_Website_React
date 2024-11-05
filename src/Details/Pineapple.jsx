import React from 'react'

export default function Pineapple() {
  return (
    <>
      <h1 className='detail'>Pineapple Cake</h1>

        <h2 className='detail'>Ingredients</h2>
        <p>Our Pineapple Cake is made with fresh, tropical flavors and quality ingredients to create a light, refreshing treat. Key ingredients include:</p>
        <ul>
            <li><strong>All-Purpose Flour:</strong> For a tender, soft cake texture.</li>
            <li><strong>Butter:</strong> Adds richness and a moist texture.</li>
            <li><strong>Pineapple Chunks:</strong> Fresh, juicy pineapple pieces for a burst of tropical flavor.</li>
            <li><strong>Pineapple Syrup:</strong> Infused into the cake layers for extra flavor and moisture.</li>
            <li><strong>Whipped Cream Frosting:</strong> Light and fluffy, made with fresh cream and a hint of vanilla.</li>
        </ul>

        <h2 className='detail'>Flavor Profile</h2>
        <p><strong>Taste:</strong> Sweet and slightly tangy, with the tropical taste of pineapple balanced by the lightness of whipped cream frosting.</p>
        <p><strong>Texture:</strong> Soft and moist, with juicy pineapple bits and fluffy whipped cream frosting for a refreshing finish.</p>

        <h2 className='detail'>Size Options & Pricing</h2>
        <table class="price-table">
            <tr>
                <th>Size</th>
                <th>Servings</th>
                <th>Price (INR)</th>
            </tr>
            <tr>
                <td>6-Inch Cake</td>
                <td>Serves 6-8</td>
                <td class="highlight">₹2,200</td>
            </tr>
            <tr>
                <td>8-Inch Cake</td>
                <td>Serves 10-12</td>
                <td class="highlight">₹3,500</td>
            </tr>
            <tr>
                <td>10-Inch Cake</td>
                <td>Serves 14-16</td>
                <td class="highlight">₹4,500</td>
            </tr>
            <tr>
                <td>Customized Tiered Options</td>
                <td>Based on customization</td>
                <td class="highlight">Starting from ₹6,800</td>
            </tr>
        </table>

        <h2 className='detail'>Additional Customizations</h2>
        <ul>
            <li><strong>Personalized Message:</strong> Free of charge</li>
            <li><strong>Decorations:</strong> Custom decorations (such as edible flowers, chocolate drips, or sprinkles) start at an additional ₹300</li>
            <li><strong>Extra Whipped Cream Layer:</strong> ₹300 per layer</li>
        </ul>

        <p>If you'd like to place an order or have specific requests, feel free to reach out! We’re here to make your Pineapple Cake experience refreshing and delicious.</p>

    </>
  )
}
