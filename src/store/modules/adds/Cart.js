export default {
    namespaced: true,
    state() {
      return {
        items: [],
        total: 0,
        qty: 0
      };
    },
    mutations: {
      addProductToCart(state, payload) {
        const productData = payload;
        const productInCartIndex = state.items.findIndex(
          (ci) => ci.productId === productData.id
        );
  
        if (productInCartIndex >= 0) {
          state.items[productInCartIndex].qty++;
        } else {
          const newItem = {
            productId: productData.id,
            name: productData.name,
            image: productData.image,
            salary: productData.salary,
            qty: 1,
          };
          state.items.push(newItem);
        }
        state.qty++;
        state.total += productData.salary;
      },
      removeProductFromCart(state, payload) {
        const prodId = payload.productId;
        const productInCartIndex = state.items.findIndex(
          (cartItem) => cartItem.productId === prodId
        );
        const prodData = state.items[productInCartIndex];
        state.items.splice(productInCartIndex, 1);
        state.qty -= prodData.qty;
        state.total -= prodData.salary * prodData.qty;
      },
    },
    actions: {
      addToCart(context, payload) {
        const prodId = payload.id;
        const products = context.rootGetters['products/products'];
        const product = products.find(prod => prod.id === prodId);
        context.commit('addProductToCart', product);
      },
      removeFromCart(context, payload) {
        context.commit('removeProductFromCart', payload);
      }
    },
    getters: {
      products(state) {
        return state.items;
      },
      totalSum(state) {
        return state.total;
      },
      quantity(state) {
        return state.qty;
      }
    }
  };
  