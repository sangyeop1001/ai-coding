const products = [
  {
    id: 1,
    name: '모던 니트 스웨터',
    description: '부드러운 촉감과 여유 있는 핏을 자랑하는 니트.',
    price: 47000,
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: '데일리 숄더백',
    description: '간편하게 들기 좋은 미니멀 디자인 백.',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: '컨템포러리 운동화',
    description: '경량 쿠셔닝으로 편안한 착화감을 제공.',
    price: 68000,
    image: 'https://images.unsplash.com/photo-1528701800489-20ed7f9a0157?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: '모던 워치',
    description: '심플한 다이얼과 세련된 스트랩.',
    price: 91000,
    image: 'https://images.unsplash.com/photo-1511730548620-29a3f6a0ad75?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: '포근한 담요',
    description: '집에서 즐기는 편안한 휴식용 담요.',
    price: 26000,
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: '럭셔리 향수',
    description: '우아한 잔향이 오래도록 지속됩니다.',
    price: 78000,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
  },
];

const cart = {};
const productGrid = document.getElementById('product-grid');
const cartButton = document.getElementById('cart-button');
const cartPanel = document.getElementById('cart-panel');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

function formatPrice(price) {
  return price.toLocaleString('ko-KR');
}

function renderProducts() {
  productGrid.innerHTML = '';
  products.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="card-content">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">${formatPrice(product.price)}원</div>
        <button data-id="${product.id}">장바구니에 추가</button>
      </div>
    `;

    const button = card.querySelector('button');
    button.addEventListener('click', () => addToCart(product.id));
    productGrid.appendChild(card);
  });
}

function addToCart(productId) {
  cart[productId] = cart[productId] ? cart[productId] + 1 : 1;
  updateCart();
  cartPanel.classList.add('open');
}

function updateCart() {
  cartItems.innerHTML = '';
  let totalCount = 0;
  let totalPrice = 0;

  Object.entries(cart).forEach(([id, quantity]) => {
    const product = products.find((item) => item.id === Number(id));
    const itemTotal = product.price * quantity;
    totalCount += quantity;
    totalPrice += itemTotal;

    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="cart-item-details">
        <h4>${product.name}</h4>
        <span>${quantity}개 • ${formatPrice(itemTotal)}원</span>
      </div>
    `;

    cartItems.appendChild(itemEl);
  });

  cartCount.textContent = totalCount;
  cartTotal.textContent = formatPrice(totalPrice);

  if (totalCount === 0) {
    cartItems.innerHTML = '<p>장바구니에 상품이 없습니다.</p>';
  }
}

cartButton.addEventListener('click', () => cartPanel.classList.toggle('open'));
closeCart.addEventListener('click', () => cartPanel.classList.remove('open'));
checkoutButton.addEventListener('click', () => {
  if (Object.keys(cart).length === 0) {
    alert('장바구니에 상품을 먼저 담아주세요.');
    return;
  }
  alert('결제가 준비되었습니다!');
});

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

renderProducts();
updateCart();
