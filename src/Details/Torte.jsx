import React from 'react'

export default function Torte() {
  return (
    <>
         <h1 className="detail">Chocolate Torte Cake</h1>

            <h2 className="detail">Ingredients</h2>
            <p>Our Chocolate Torte Cake is an indulgent dessert that features rich chocolate flavors and a smooth, velvety texture. Key ingredients include:</p>
            <ul>
                <li><strong>Dark Chocolate:</strong> The main flavor component, providing richness.</li>
                <li><strong>All-Purpose Flour:</strong> Adds structure to the cake.</li>
                <li><strong>Butter:</strong> For a moist and tender crumb.</li>
                <li><strong>Granulated Sugar:</strong> Sweetens the cake perfectly.</li>
                <li><strong>Eggs:</strong> Essential for binding and creating a light texture.</li>
                <li><strong>Cocoa Powder:</strong> Enhances the chocolate flavor.</li>
                <li><strong>Heavy Cream:</strong> For the ganache and a luscious finish.</li>
                <li><strong>Vanilla Extract:</strong> Enhances the overall flavor.</li>
            </ul>

            <h2 className="detail">Flavor Profile</h2>
            <p><strong>Taste:</strong> Rich and intense chocolate flavor with a perfect balance of sweetness.</p>
            <p><strong>Texture:</strong> Dense and fudgy with a smooth ganache topping, creating a luxurious mouthfeel.</p>

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
                    <td className="highlight">Starting from ₹7,500</td>
                </tr>
            </table>

            <h2 className="detail">Additional Customizations</h2>
            <ul>
                <li><strong>Personalized Message:</strong> Free of charge</li>
                <li><strong>Decorations:</strong> Custom decorations (such as chocolate shavings, fresh berries, or edible gold leaf) start at an additional ₹600</li>
                <li><strong>Extra Ganache Layer:</strong> ₹400 per layer</li>
            </ul>

            <p>If you'd like to place an order or have specific requests, feel free to reach out! We’re here to make your Chocolate Torte Cake experience rich and unforgettable.</p>
    </>
  )
}
