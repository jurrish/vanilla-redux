//takes a reducer and returns a store
createStore = (reducer) => {
  let subscribers = []
  //get initial state from reducer
  let state = reducer(undefined, { type: null } )

//the created store has these 3 methods.
  return {
    getState: () => {
      return state
    },
    dispatch: (action) => {
      state = reducer(state, action)
      subscribers.forEAch( cb => cb() )
      return action
    },
    subscribe: ( cb ) => {
      //these listeners/subscribers are invoked by dispatch once it's done doing it's job.
      subscribers.push( cb )
    },
  }
}
