import React from 'react'

export default function Vanilla(){
    return(
      <>
      <h1 className='detail'>Vanilla Cake</h1>

        <h2 className='detail'>Ingredients</h2>
        <p>Our Vanilla Cake is crafted with high-quality ingredients to achieve a classic, fluffy texture and rich vanilla flavor. Key ingredients include:</p>
        <ul>
            <li><strong>All-Purpose Flour:</strong> For a light, tender cake crumb.</li>
            <li><strong>Butter:</strong> Adds richness and a smooth texture.</li>
            <li><strong>Pure Vanilla Extract:</strong> Delivers an authentic, warm vanilla flavor.</li>
            <li><strong>Milk:</strong> Ensures a moist and fluffy consistency.</li>
            <li><strong>Eggs:</strong> Provide structure and richness to the cake.</li>
            <li><strong>Buttercream Frosting:</strong> Made with butter, powdered sugar, and a touch of vanilla for a creamy finish.</li>
        </ul>

        <h2 className='detail'>Flavor Profile</h2>
        <p><strong>Taste:</strong> A classic vanilla flavor with a hint of buttery richness, complemented by the smooth, creamy taste of our homemade buttercream frosting.</p>
        <p><strong>Texture:</strong> Soft, moist, and fluffy with a smooth, rich buttercream frosting that melts in your mouth.</p>

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
                <td class="highlight">₹2,000</td>
            </tr>
            <tr>
                <td>8-Inch Cake</td>
                <td>Serves 10-12</td>
                <td class="highlight">₹3,200</td>
            </tr>
            <tr>
                <td>10-Inch Cake</td>
                <td>Serves 14-16</td>
                <td class="highlight">₹4,200</td>
            </tr>
            <tr>
                <td>Customized Tiered Options</td>
                <td>Based on customization</td>
                <td class="highlight">Starting from ₹6,500</td>
            </tr>
        </table>

        <h2 className='detail'>Additional Customizations</h2>
        <ul>
            <li><strong>Personalized Message:</strong> Free of charge</li>
            <li><strong>Decorations:</strong> Custom decorations (such as edible flowers, chocolate drips, or sprinkles) start at an additional ₹300</li>
            <li><strong>Extra Buttercream Frosting Layer:</strong> ₹300 per layer</li>
        </ul>

        <p>If you'd like to place an order or have specific requests, feel free to reach out! We’re here to make your Vanilla Cake experience delightful.</p>
      </>
    )
}
