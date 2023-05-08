let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
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
  
/*   function customerInfo(order) {
    // Adicione abaixo as informações necessárias.
    let address = 'address'
    let entregador = order.order.delivery.deliveryPerson;
    let cliente = order.name;
    let telefone = order.phoneNumber;
    let rua = order[address].street;
    let numero = order[address].number;
    let apartamento = order[address].apartment;
    console.log(`Olá, ${entregador}, entrega para: ${cliente}, Telefone: ${telefone}, R. ${rua}, Numero: ${numero}, AP: ${apartamento}`);
  }
  
  customerInfo(order); */
  
  function orderModifier(order) {
    let novoCliente = order.name = 'Luiz Silva'
    let novoTotal = order.payment.total = '50'
    let pizzas = Object.keys(order.order.pizza)
    let refrigerante = order.order.drinks.coke.type
    console.log(`Olá, ${novoCliente}, o valor total de seu pedido ${pizzas} e ${refrigerante} é R$ ${novoTotal},00,`);
    // Adicione abaixo as informações necessárias.
  }
  
  orderModifier(order);