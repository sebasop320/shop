import { c as create_ssr_component, a as subscribe, e as escape, b as each, d as add_attribute } from './index2-11153cb5.js';
import { w as writable } from './index-faab5b7a.js';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const user = writable({});
const isLoggedIn = writable(false);
function getProducts() {
  return [
    { id: 1, name: "Apple", image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png", price: 2, quantity: 1 },
    { id: 2, name: "Orange", image: "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg", price: 11, quantity: 1 },
    { id: 3, name: "Grapes", image: "https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg", price: 12, quantity: 1 },
    { id: 4, name: "Frying pan", image: "https://titan.vtexassets.com/arquivos/ids/211441-800-auto?v=637526522629400000&width=800&height=auto&aspect=true", price: 20, quantity: 1 },
    { id: 5, name: "Remy from ratatouille", image: "https://cdnx.jumpseller.com/grazie/image/33490670/resize/610/610?1680057409", price: 150.25, quantity: 1 }
  ];
}
const firebaseConfig = {
  apiKey: "AIzaSyAqiICpHwoJIjC_Hkyc6JIQT3yehjSZ_WU",
  authDomain: "shop-d54b9.firebaseapp.com",
  projectId: "shop-d54b9",
  storageBucket: "shop-d54b9.appspot.com",
  messagingSenderId: "40799782322",
  appId: "1:40799782322:web:726a01d59b6799fcb2d0ab"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
getDatabase(app);
onAuthStateChanged(auth, (firebaseUser) => {
  if (firebaseUser) {
    user.set(firebaseUser);
    isLoggedIn.set(true);
  } else {
    user.set(null);
    isLoggedIn.set(false);
  }
});
const css = {
  code: ".product-list.svelte-x782an.svelte-x782an,.cart-item.svelte-x782an.svelte-x782an{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:20px}.image.svelte-x782an.svelte-x782an{height:150px;width:150px;background-size:contain;background-position:center;background-repeat:no-repeat}.logOut-button.svelte-x782an.svelte-x782an{display:flex;justify-content:center;margin-top:10px}.logOut-button.svelte-x782an button.svelte-x782an{cursor:pointer;outline:none;padding:0;margin:0}.total.svelte-x782an.svelte-x782an{text-align:right}.cart-list.svelte-x782an.svelte-x782an{border:2px solid;padding:10px}.login-button.svelte-x782an.svelte-x782an{height:55px;width:55px;position:absolute;top:10px;right:60px}.login-button.svelte-x782an button.svelte-x782an{cursor:pointer;outline:none;padding:0;margin:0}.profile-image.svelte-x782an.svelte-x782an{margin-right:10px}footer.svelte-x782an.svelte-x782an{background-color:#f2f2f2;padding:20px;text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  let $user, $$unsubscribe_user;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let cart = [];
  const products = getProducts();
  let total = 0;
  $$result.css.add(css);
  {
    {
      total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  }
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_user();
  return `<title>E-shop with Svelte</title>

<p>There are ${escape(cart.length)} items in your cart</p>

<div class="product-list svelte-x782an">${each(products, (product) => {
    return `<div><div class="image svelte-x782an" style="${"background-image: url(" + escape(product.image, true) + ")"}"></div>
    <h4>${escape(product.name)}</h4>
    <p>$${escape(product.price)}</p>
    <button>Add to cart</button>
  </div>`;
  })}</div>

<div class="cart-list svelte-x782an">${each(cart, (item) => {
    return `${item.quantity > 0 ? `<div class="cart-item svelte-x782an"><img width="50"${add_attribute("src", item.image, 0)}${add_attribute("alt", item.name, 0)}>
    <div>${escape(item.quantity)}
      <button>+</button>
      <button>-</button></div>
    <p>$${escape(item.price * item.quantity)}</p>
  </div>` : ``}`;
  })}
  <div class="total svelte-x782an"><h4>Total: $ ${escape(total)}</h4></div></div>





<div class="login-button svelte-x782an">${$isLoggedIn ? `<img${add_attribute("src", $user.photoURL, 0)}${add_attribute("alt", $user.displayName, 0)} class="profile-image svelte-x782an">
  <h3>${escape($user.displayName)}</h3>` : `<button class="svelte-x782an">Login</button>`}</div>


<div class="logOut-button svelte-x782an">${$isLoggedIn ? `<button class="svelte-x782an">LogOut</button>` : ``}</div>

<footer class="svelte-x782an"><div class="footer-content"><p>Inspired by:</p><a href="https://svelte.dev/repl/f894a09732d74059b4820324dae003c1?version=3.32.3">WebJeda</a>
    <p>Brought to life by:</p><a href="https://sebasopdev.com">Sebasopdev</a></div>
</footer>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0fb3fb93.js.map
