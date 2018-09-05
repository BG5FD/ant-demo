export default {
  namespace: 'productsModel',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      console.log(id);
      return state.filter(item => item.id !== id);
    },
  },
};
