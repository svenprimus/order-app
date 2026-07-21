function getCategoryHeaderItem(index) {
    return /*html*/ `
        <li><a href="#category_${index}">${donMenu[index].category}</a></li>
        <hr />
    `;
}

function getCategoryHeader(categoryIndex) {
    return /*html*/ `
        <div id="category_${categoryIndex}" class="category_headline_wrapper">
            <div class="category_headline">
                <img src=${pathToImages + donMenu[categoryIndex].img} alt=${donMenu[categoryIndex].alt} />
                <h2>${donMenu[categoryIndex].category}</h2>
            </div>
        </div>      
    `;
}

function getCategoryContentWrapper(categoryIndex) {
    return /*html*/ `
        <ul id="category_content_${categoryIndex}" class="category_content_wrapper">
        </ul>    
    `;
}

function getCategoryContentItem(categoryIndex, itemIndex) {
    return /*html*/ `
        <li class="food_item">
            <img src=${pathToImages + donMenu[categoryIndex].items[itemIndex].img} 
                alt=${donMenu[categoryIndex].items[itemIndex].alt} 
            />
            <div class="food_item_description">
                <h3>${donMenu[categoryIndex].items[itemIndex].name}</h3>
                <p>${donMenu[categoryIndex].items[itemIndex].blurb}</p>
            </div>
            <div class="food_item_pricing">
                <h3>${donMenu[categoryIndex].items[itemIndex].price.toFixed(2).replace('.', ',')} €</h3>
                <button onclick="increaseAmount(${categoryIndex}, ${itemIndex})">
                    <p id="added_${categoryIndex}_${itemIndex}">Add to basket</p>
                </button>
            </div>
        </li>
    `;
}

function getBasketItem(categoryIndex, itemIndex) {
    return /*html*/ `
        <li class="basket_item">
            <table>
                <tr>
                    <th>${donMenu[categoryIndex].items[itemIndex].amount + ' '}x
                        ${' ' + donMenu[categoryIndex].items[itemIndex].name}
                    </th>
                    <td>
                        <button id="button_trash_${categoryIndex}_${itemIndex}" 
                        class="button_trash_img d_none" 
                        onclick="decreaseAmount(${categoryIndex}, ${itemIndex})">
                        </button>
                    </td>
                </tr>
                <tr>
                    <td class="basket_item_count">
                        <button id="button_decrease_${categoryIndex}_${itemIndex}" 
                            class="button_pricing button_trash_img" 
                            onclick="decreaseAmount(${categoryIndex}, ${itemIndex})">
                        </button>
                        <p>${donMenu[categoryIndex].items[itemIndex].amount}</p>
                        <button id="button_increase_${categoryIndex}_${itemIndex}" 
                            class="button_pricing"
                            onclick="increaseAmount(${categoryIndex}, ${itemIndex})">
                            +
                        </button>
                    </td>
                    <th>${donMenu[categoryIndex].items[itemIndex].price.toFixed(2) + ' ' + '€'}</th>
                </tr>
            </table>
        </li>
    `;
}
