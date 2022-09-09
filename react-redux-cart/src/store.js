import { createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer";

const store = createStore(cartReducer);

export default store;


<Provider store={store}>
        <div>App Component</div>
        // child components of App/ other logic
</Provider>