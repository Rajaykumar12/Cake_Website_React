import React from "react"

export default function ClassicChoco(){
    return(
        <>
            <h1 className="detail">Classic Chocolate Cake</h1>

            <h2 className="detail">Ingredients</h2>
            <p>Our Classic Chocolate Cake is crafted with premium ingredients to deliver a rich, indulgent chocolate experience. Key ingredients include:</p>
            <ul>
                <li><strong>All-Purpose Flour:</strong> Provides a sturdy yet tender structure.</li>
                <li><strong>High-Quality Cocoa Powder:</strong> For a deep, intense chocolate flavor.</li>
                <li><strong>Butter and Oil Blend:</strong> Ensures a moist, rich texture.</li>
                <li><strong>Chocolate Ganache:</strong> Made with dark chocolate and cream for a smooth, luxurious finish.</li>
                <li><strong>Milk:</strong> Adds moisture and balances the chocolate flavor.</li>
            </ul>

            <h2 className="detail">Flavor Profile</h2>
            <p><strong>Taste:</strong> A deep, rich chocolate flavor with a hint of sweetness, complemented by the smoothness of a dark chocolate ganache.</p>
            <p><strong>Texture:</strong> Soft, moist, and fudgy with a smooth ganache for an indulgent, melt-in-your-mouth experience.</p>

            <h2 className="detail">Size Options & Pricing</h2>
            <table class="price-table">
                <tr>
                    <th>Size</th>
                    <th>Servings</th>
                    <th>Price (INR)</th>
                </tr>
                <tr>
                    <td>6-Inch Cake</td>
                    <td>Serves 6-8</td>
                    <td class="highlight">₹2,700</td>
                </tr>
                <tr>
                    <td>8-Inch Cake</td>
                    <td>Serves 10-12</td>
                    <td class="highlight">₹4,000</td>
                </tr>
                <tr>
                    <td>10-Inch Cake</td>
                    <td>Serves 14-16</td>
                    <td class="highlight">₹5,200</td>
                </tr>
                <tr>
                    <td>Customized Tiered Options</td>
                    <td>Based on customization</td>
                    <td class="highlight">Starting from ₹7,500</td>
                </tr>
            </table>

            <h2 className="detail">Additional Customizations</h2>
            <ul>
                <li><strong>Personalized Message:</strong> Free of charge</li>
                <li><strong>Decorations:</strong> Custom decorations (such as edible gold dust, chocolate shavings, or sprinkles) start at an additional ₹500</li>
                <li><strong>Extra Chocolate Ganache Layer:</strong> ₹500 per layer</li>
            </ul>

            <p>If you'd like to place an order or have specific requests, feel free to reach out! We’re here to make your Classic Chocolate Cake experience unforgettable.</p>
        </>
    )
}

