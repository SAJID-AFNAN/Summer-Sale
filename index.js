function handlclick(data) {
    const item = data.children[1].children[1].children[1].innerText;
    const itemo = item.split(' ');
    const amount = itemo[0];

    const previousPrice = document.getElementById('Total-price')
    const previousPricestring = previousPrice.innerText;

    const TotalPrice = parseFloat(amount) + parseFloat(previousPricestring);
    previousPrice.innerText = TotalPrice.toFixed(2);

    const accesoriesName = data.children[1].children[1].children[0].innerText;

    const List = document.getElementById('orderd-list');

    const li = document.createElement('li')
    li.innerText = accesoriesName;
    List.appendChild(li);

    if (TotalPrice >= 0) {
        document.getElementById('Make-btn').removeAttribute("disabled")
    }
    if (TotalPrice >= 200) {
        document.getElementById('Apply-btn').removeAttribute("disabled");
    }
    const Total = document.getElementById('Total');
    Total.innerText = TotalPrice.toFixed(2);
}

document.getElementById('Apply-btn').addEventListener('click', function () {

    const couponItem = document.getElementById('coupon-input');
    const coupon = couponItem.value;

    const Price = document.getElementById('Total-price');
    const TotalPricestring = Price.innerText;
    const TotalPrice = parseFloat(TotalPricestring);

    const Discount = document.getElementById('discount');

    if (coupon == 'SELL200') {
        const Dis = ((TotalPrice * 20) / 100)
        Discount.innerText = Dis.toFixed(2);
        console.log(Dis);
        const Total = document.getElementById('Total');
        const afterdiscountTotal = TotalPrice - Dis
        Total.innerText = afterdiscountTotal.toFixed(2);
    }
})

document.getElementById('Go-Home').addEventListener('click', function () {
    const couponItem = document.getElementById('coupon-input');
    couponItem.value = '';
    const List = document.getElementById('orderd-list');
    List.innerText = '';
    const TotalPrice = document.getElementById('Total-price');
    TotalPrice.innerText = '00.00';
    const Discount = document.getElementById('discount');
    Discount.innerText = '00.00';
    const Total = document.getElementById('Total');
    Total.innerText = '00.00';
    const MakeBtn = document.getElementById('Make-btn');
    MakeBtn.disabled = true;
    const ApplyBtn = document.getElementById('Apply-btn');
    ApplyBtn.disabled = true;

})
