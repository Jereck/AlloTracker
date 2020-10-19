const defaultState = {
  user: {},
  products: [],
  product: {}
}

export default function reducer(state = defaultState, { type, payload }: { type: string, payload: any}): any{
  switch(type) {
    case 'SET_USER_STATE':
      return {
        ...state,
        user: {
          username: payload.split('@')[0]
        }
      }
    case 'SET_ALL_PRODUCTS':
      return {
        ...state,
        products: []
      }
  }

  return state
}