import Type from '../type';

export default new Type({
  name: 'string',
  from: {
    null: () => '',
    number: (n) => String(n),
  },
  to: {
    number: (n) => Number(n),
    render: (input) => {
      return {
        type: 'render',
        as: 'markdown',
        value: {
          content: input,
        },
      };
    },
  },
});
