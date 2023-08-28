function handlclick(data) {
    const item = data.children[1].children[1].children[1].innerText;
    const itemo = item.split(' ');
    const amount = itemo[0];

    const previousPrice = document.getElementById('Total-price')
    const previousPricestring = previousPrice.innerText;

    const TotalPrice = parseFloat(amount) + parseFloat(previousPricestring);
    previousPrice.innerText = TotalPrice;

    const accesoriesName = data.children[1].children[1].children[0].innerText;

    const List = document.getElementById('orderd-list');

    const li = document.createElement('li')
    li.innerText = accesoriesName;
    List.appendChild(li);

    if (TotalPrice >= 200) {
        document.getElementById('Make-btn').removeAttribute("disabled")
    }

    // const couponItem = document.getElementById('coupon-input');
    // const coupon = couponItem.value;
    // if (coupon == 'SELL200') {
    //     document.getElementById('Apply-btn').removeAttribute('disabled')
    // }
    // coupon = '';

}
