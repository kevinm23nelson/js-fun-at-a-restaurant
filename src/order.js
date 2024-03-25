function takeOrder (order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  deliveryOrders.push(order);
  return true;
  } else {
    return false;
  }
}

function refundOrder (orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i ++) {
    if (deliveryOrders[i].orderNumber === orderNumber)
      deliveryOrders.splice(i, 1);
  }
}

function listItems (deliveryOrders) {
  var order = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    order.push(deliveryOrders[i].item);
  }
  return order.join(", ");
}


function searchOrder (deliveryOrders, order){
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === order) {
      return true;
    }
  }
  return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder,
}
console.log(takeOrder);
console.log(refundOrder);
console.log(listItems);
console.log(searchOrder);
