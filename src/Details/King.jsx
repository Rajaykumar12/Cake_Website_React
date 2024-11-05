import React from 'react'

export default function King() {
  return (
    <>
        <h1 className="detail">King Cake</h1>

            <h2 className="detail">Ingredients</h2>
            <p>Our King Cake is a delightful treat traditionally served during Mardi Gras, featuring a sweet dough filled with delicious flavors. Key ingredients include:</p>
            <ul>
                <li><strong>All-Purpose Flour:</strong> The base for the dough.</li>
                <li><strong>Butter:</strong> Adds richness and flavor.</li>
                <li><strong>Granulated Sugar:</strong> Sweetens the cake and enhances the flavor.</li>
                <li><strong>Yeast:</strong> For leavening and creating a light, airy texture.</li>
                <li><strong>Milk:</strong> Provides moisture and richness.</li>
                <li><strong>Eggs:</strong> Essential for binding and adding richness.</li>
                <li><strong>Cinnamon:</strong> For a warm, spicy flavor.</li>
                <li><strong>Filling:</strong> Options include cream cheese, praline, or fruit preserves.</li>
                <li><strong>Icing:</strong> A sweet glaze topped with colorful sugars in purple, green, and gold.</li>
            </ul>

            <h2 className="detail">Flavor Profile</h2>
            <p><strong>Taste:</strong> A delightful blend of sweet, spiced dough with rich and creamy fillings.</p>
            <p><strong>Texture:</strong> Soft and fluffy with a slightly crispy outer crust, complemented by the smooth icing.</p>

            <h2 className="detail">Size Options & Pricing</h2>
            <table className="price-table">
                <tr>
                    <th>Size</th>
                    <th>Servings</th>
                    <th>Price (INR)</th>
                </tr>
                <tr>
                    <td>Small King Cake (1kg)</td>
                    <td>Serves 6-8</td>
                    <td className="highlight">₹2,500</td>
                </tr>
                <tr>
                    <td>Medium King Cake (1.5kg)</td>
                    <td>Serves 10-12</td>
                    <td className="highlight">₹3,800</td>
                </tr>
                <tr>
                    <td>Large King Cake (2kg)</td>
                    <td>Serves 14-16</td>
                    <td className="highlight">₹5,200</td>
                </tr>
                <tr>
                    <td>Customized King Cake</td>
                    <td>Based on customization</td>
                    <td className="highlight">Starting from ₹6,500</td>
                </tr>
            </table>

            <h2 className="detail">Additional Customizations</h2>
            <ul>
                <li><strong>Personalized Message:</strong> Free of charge</li>
                <li><strong>Decorations:</strong> Custom decorations (such as colorful icing designs or edible glitter) start at an additional ₹500</li>
                <li><strong>Extra Filling:</strong> ₹400 per filling addition</li>
            </ul>

            <p>If you'd like to place an order or have specific requests, feel free to reach out! We’re here to make your King Cake experience festive and memorable.</p>
    </>
  )
}
