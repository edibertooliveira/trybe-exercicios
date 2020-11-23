const orderServ = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone:${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment} `;
};

console.log(customerInfo(orderServ)); // eslint-disable-line no-console

const taskProduct = (orderPizzas) => {
  let list = '';
  Object.keys(orderPizzas).forEach((value) => {
    list += `${value}, `;
  });
  return list;
};
const orderDrinks = taskProduct(orderServ.order.drinks);
const orderPizzas = taskProduct(orderServ.order.pizza);
const checkedProduct = () => {
  if (orderPizzas.length > 0 || orderDrinks.length > 0) {
    return `${orderPizzas} e ${orderDrinks}`;
  }
  if (orderPizzas.length > 0 || orderDrinks.length < 0) {
    return `${orderPizzas}`;
  }
  return `${orderDrinks}`;
};

const orderModifier = (order) => {
  order.order.delivery.deliveryPerson = 'Luiz Silva';
  order.payment.total = '50';
  return `Olá ${
    order.order.delivery.deliveryPerson
  }, o total do seu pedido de - ${checkedProduct()} é R$ ${
    order.payment.total
  }`;
};
console.log(orderModifier(orderServ)); // eslint-disable-line no-console
