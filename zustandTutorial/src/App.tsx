import "./App.css";
import useCartStore from "./store/CartStore";

function App() {
  const store = useCartStore();

  return (
    <>
      <div className="text-xl text-red-500 h-screen flex flex-col justify-center items-center">
        <h1 className="font-semibold text-3xl">Hello zustand</h1>
        <div className="text-black">
          Products in the store:
          {store.availableItems.map((item) => (
            <div key={item.id} className="flex flex-row gap-3 p-1">
              <p>
                {item.name} - R${item.price},00
              </p>
              <button
                className="text-sm  bg-sky-500 px-2 rounded-md text-white hover:bg-opacity-80"
                onClick={() => store.addCart(item)}
              >
                Add to cart
              </button>
              <button
                className="text-sm  bg-red-500 px-2 rounded-md text-white hover:bg-opacity-80"
                onClick={() => store.removeFromCart(item.id)}
              >
                Remove to cart
              </button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart:</h2>
          <p>itens: {store.cart.length}</p>
          <p>
            total: R${store.cart.reduce((acc, item) => acc + item.price, 0)},00{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
