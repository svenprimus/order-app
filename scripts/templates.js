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
                <h2 id="category_headline_${categoryIndex}">${donMenu[categoryIndex].category}</h2>
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
                <button class="on_desktop" onclick="increaseAmountFromDesktop(${categoryIndex}, ${itemIndex})">
                    <p id="added_desktop_${categoryIndex}_${itemIndex}">Add to basket</p>
                </button>
                <button class="on_mobile" onclick="increaseAmount(${categoryIndex}, ${itemIndex})">
                    <p id="added_mobile_${categoryIndex}_${itemIndex}">Add to basket</p>
                </button>
            </div>
        </li>
    `;
}

function getBasketFilledWrapper() {
    return /*html*/ `
        <h2>Your Basket</h2>
        <ul id="basket_list" class="basket_list"></ul>
        <div class="payment_table_wrapper">
            <table class="payment_table">
                <tr>
                    <td>Subtotal</td>
                    <td id="payment_table_subtotal"></td>
                </tr>
                <tr>
                    <td>Delivery Fee</td>
                    <td id="payment_table_delivery"></td>
                </tr>
            </table>
            <hr />
            <table class="payment_total">
                <tr>
                    <th>Total</th>
                    <th id="payment_table_total"></th>
                </tr>
            </table>
        </div>
        <button
            class="button_buy"
            aria-haspopup="dialog"
            aria-controls="confirmationDialog"
            onclick="openDialog()"
        >
            <p>Buy now</p>
        </button>
    `;
}

function getBasketEmptyWrapper() {
    return /*html*/ `
        <p>
            Nothing here yet.<br />
            Go ahead and choose something delicious!
        </p>
        <img src="./assets/icons/basket-empty-overlay.svg" alt="empty basket" />
    `;
}

function getBasketItem(categoryIndex, itemIndex) {
    return /*html*/ `
        <li class="basket_item">
            <table>
                <tr>
                    <th>
                        ${donMenu[categoryIndex].items[itemIndex].name}
                    </th>
                    <td>
                        <button id="button_trash_${categoryIndex}_${itemIndex}" 
                        class="button_change_amount button_trash_img d_none" 
                        onclick="deleteItem(${categoryIndex}, ${itemIndex})">
                        </button>
                    </td>
                </tr>
                <tr>
                    <td class="basket_item_count">
                        <button id="button_decrease_${categoryIndex}_${itemIndex}" 
                            class="button_change_amount button_trash_img" 
                            onclick="decreaseAmount(${categoryIndex}, ${itemIndex})">
                        </button>
                        <p>${donMenu[categoryIndex].items[itemIndex].amount}</p>
                        <button id="button_increase_${categoryIndex}_${itemIndex}" 
                            class="button_change_amount"
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

function getDialogContent() {
    return /*html*/`
        <div
            class="dialog_content_wrapper"
            aria-description="dialog window to confirm order"
            onclick="stopDialogPropagation(event)"
        >
            <button
                id="button_close_dialog"
                class="button_close_dialog"
                aria-controls="confirmationDialog"
                aria-label="close dialog"
                onclick="closeDialog()"
            ></button>
            <img src="./assets/img/confirmed-order.png" alt="burger car on the way" />
            <h1>Order Confirmed!</h1>
            <h2>Your food is on the way!</h2>
        </div>        
    `
}