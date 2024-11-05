import React from "react"

export default function Velvet(){
    return(
        <>
            <h1 className="detail">Red Velvet Cake</h1>

            <h2 className="detail">Ingredients</h2>
            <p>Our Red Velvet Cake is crafted with high-quality ingredients to achieve a rich, velvety texture and signature taste. Key ingredients include:</p>
            <ul>
                <li><strong>Cake Flour:</strong> For a delicate, fluffy texture.</li>
                <li><strong>Cocoa Powder:</strong> Adds a subtle chocolate flavor.</li>
                <li><strong>Buttermilk:</strong> Makes the cake moist and tender.</li>
                <li><strong>Red Food Coloring:</strong> Gives the cake its vibrant red color.</li>
                <li><strong>Vinegar and Baking Soda:</strong> Ensures a light, airy crumb.</li>
                <li><strong>Cream Cheese Frosting:</strong> Made with cream cheese, butter, powdered sugar, and a hint of vanilla for a creamy, slightly tangy finish.</li>
            </ul>

            <h2 className="detail">Flavor Profile</h2>
            <p><strong>Taste:</strong> The cake has a subtle cocoa flavor balanced with the slight tanginess of buttermilk, and it’s complemented by the smooth, creamy taste of our homemade cream cheese frosting.</p>
            <p><strong>Texture:</strong> Soft and velvety, with a luxurious cream cheese frosting for added richness.</p>

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
                    <td class="highlight">₹2,500</td>
                </tr>
                <tr>
                    <td>8-Inch Cake</td>
                    <td>Serves 10-12</td>
                    <td class="highlight">₹3,800</td>
                </tr>
                <tr>
                    <td>10-Inch Cake</td>
                    <td>Serves 14-16</td>
                    <td class="highlight">₹5,000</td>
                </tr>
                <tr>
                    <td>Customized Tiered Options</td>
                    <td>Based on customization</td>
                    <td class="highlight">Starting from ₹7,000</td>
                </tr>
            </table>

            <h2 className="detail">Additional Customizations</h2>
            <ul>
                <li><strong>Personalized Message:</strong> Free of charge</li>
                <li><strong>Decorations:</strong> Custom decorations (such as edible flowers, chocolate drips, or sprinkles) start at an additional ₹400</li>
                <li><strong>Extra Cream Cheese Frosting Layer:</strong> ₹400 per layer</li>
            </ul>

            <p>If you'd like to place an order or have specific requests, feel free to reach out! We’re here to make your Red Velvet Cake experience delightful.</p>
        </>
    )
}

