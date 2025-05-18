import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Store.jsx'
import Provide from './provide.jsx'
import nameStore from './nameStore.jsx'


createRoot(document.getElementById('root')).render(


<Provider store={nameStore}>
   <Provide/>
</Provider>

// {/* <Provider store={store}>
// <App />
// </Provider> */}

)
