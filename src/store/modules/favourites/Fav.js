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
      addProductTofav(state, payload) {
        const productData = payload;
        const productInFavIndex = state.items.findIndex(
          (ci) => ci.productId === productData.id
        );
  
        if (productInFavIndex >= 0) {
          state.items[productInFavIndex].qty++;
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
      removeProductFromFav(state, payload) {
        const prodId = payload.productId;
        const productInFavIndex = state.items.findIndex(
          (cartItem) => cartItem.productId === prodId
        );
        const prodData = state.items[productInFavIndex];
        state.items.splice(productInFavIndex, 1);
        state.qty -= prodData.qty;
        state.total -= prodData.salary * prodData.qty;
      },
    },
    actions: {
      addToFav(context, payload) {
        const prodId = payload.id;
        const products = context.rootGetters['products/products'];
        const product = products.find(prod => prod.id === prodId);
        context.commit('addProductToFav', product);
      },
      removeFromCart(context, payload) {
        context.commit('removeProductFromFav', payload);
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
  