const aiServices = [
  {
    id: 1,
    name: 'ChatGPT',
    description: 'OpenAI의 대표 AI 모델. 텍스트 생성, 코드 작성, 분석 등 다양한 분야에서 뛰어난 성능.',
    features: ['텍스트 생성', '코드 작성', '분석/요약', '다국어 지원'],
    strengths: '가장 대중적이고 안정적인 성능',
    weaknesses: '실시간 정보 제한',
    pricing: { free: '제한적', pro: '$20/월' },
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80',
    subscribeUrl: 'https://chat.openai.com/',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Claude',
    description: 'Anthropic의 안전하고 유능한 AI. 긴 텍스트 처리와 분석에 강점.',
    features: ['긴 텍스트 처리', '안전한 응답', '분석 전문성', '연구용 최적화'],
    strengths: '안전성과 정확성',
    weaknesses: '창의성에서 다소 부족',
    pricing: { free: '제한적', pro: '$20/월' },
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=400&q=80',
    subscribeUrl: 'https://claude.ai/',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Gemini',
    description: 'Google의 멀티모달 AI. 텍스트, 이미지, 동영상 모두 처리 가능.',
    features: ['멀티모달', '실시간 검색', 'Google 통합', '무료 사용량 많음'],
    strengths: '무료 플랜이 풍부하고 통합성 좋음',
    weaknesses: '일부 기능 제한적',
    pricing: { free: '광범위', pro: '$10/월' },
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80',
    subscribeUrl: 'https://gemini.google.com/',
    rating: 4.5
  },
  {
    id: 4,
    name: 'GitHub Copilot',
    description: '코딩 전문 AI. 실시간 코드 제안과 자동 완성 기능 제공.',
    features: ['코드 자동완성', '다언어 지원', '실시간 제안', 'IDE 통합'],
    strengths: '개발 생산성 향상',
    weaknesses: '코딩 외 용도로는 부적합',
    pricing: { free: '학생용', pro: '$10/월' },
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=400&q=80',
    subscribeUrl: 'https://github.com/features/copilot',
    rating: 4.6
  },
  {
    id: 5,
    name: 'Midjourney',
    description: '고품질 이미지 생성 AI. 예술적이고 창의적인 이미지 생성에 특화.',
    features: ['고품질 이미지', '예술적 스타일', 'Discord 통합', '커뮤니티 지원'],
    strengths: '이미지 품질이 뛰어남',
    weaknesses: '텍스트 생성 불가',
    pricing: { free: '제한적', pro: '$10/월' },
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=400&q=80',
    subscribeUrl: 'https://www.midjourney.com/',
    rating: 4.9
  },
  {
    id: 6,
    name: 'DALL-E',
    description: 'OpenAI의 이미지 생성 AI. 텍스트로부터 정확한 이미지 생성.',
    features: ['정확한 이미지 생성', '다양한 스타일', '편집 기능', 'API 지원'],
    strengths: '텍스트-이미지 변환 정확도 높음',
    weaknesses: 'Midjourney보다 느림',
    pricing: { free: '제한적', pro: '$15/월' },
    image: 'https://images.unsplash.com/photo-1686191128892-3b90e93f1b6c?auto=format&fit=crop&w=400&q=80',
    subscribeUrl: 'https://openai.com/dall-e-3/',
    rating: 4.4
  },
];

const subscriptionPanel = document.getElementById('subscription-panel');
const closeSubscription = document.getElementById('close-subscription');
const subscriptionContent = document.getElementById('subscription-content');
const subscriptionBtn = document.getElementById('subscription-btn');
const aiServicesGrid = document.getElementById('ai-services-grid');
const pricingComparison = document.getElementById('pricing-comparison');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

function formatPrice(price) {
  return price.toLocaleString('ko-KR');
}

function renderAIServices() {
  aiServicesGrid.innerHTML = '';
  aiServices.forEach((service) => {
    const card = document.createElement('article');
    card.className = 'product-card ai-service-card';
    card.innerHTML = `
      <img src="${service.image}" alt="${service.name}" />
      <div class="card-content">
        <div class="service-header">
          <h3>${service.name}</h3>
          <div class="rating">⭐ ${service.rating}</div>
        </div>
        <p>${service.description}</p>
        <div class="features">
          ${service.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
        </div>
        <div class="service-info">
          <div class="strengths">✅ ${service.strengths}</div>
          <div class="pricing">💰 ${service.pricing.pro}</div>
        </div>
        <button data-id="${service.id}" class="subscribe-btn">구독하기</button>
      </div>
    `;

    const button = card.querySelector('.subscribe-btn');
    button.addEventListener('click', () => showSubscriptionInfo(service));
    aiServicesGrid.appendChild(card);
  });
}

function showSubscriptionInfo(service) {
  subscriptionContent.innerHTML = `
    <div class="subscription-details">
      <h4>${service.name} 구독 정보</h4>
      <div class="service-rating">⭐ ${service.rating}/5.0</div>
      <div class="pricing-info">
        <p><strong>가격:</strong> ${service.pricing.pro}</p>
        <p><strong>무료 플랜:</strong> ${service.pricing.free}</p>
      </div>
      <div class="features-list">
        <h5>주요 기능:</h5>
        <ul>
          ${service.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
      <div class="pros-cons">
        <div class="pros">
          <h5>장점:</h5>
          <p>${service.strengths}</p>
        </div>
        <div class="cons">
          <h5>단점:</h5>
          <p>${service.weaknesses}</p>
        </div>
      </div>
      <a href="${service.subscribeUrl}" target="_blank" class="primary-btn full-width">지금 구독하기</a>
    </div>
  `;
  subscriptionPanel.classList.add('open');
}

function renderPricingComparison() {
  pricingComparison.innerHTML = `
    <div class="pricing-table-container">
      <table class="pricing-table">
        <thead>
          <tr>
            <th>서비스</th>
            <th>무료 플랜</th>
            <th>프리미엄</th>
            <th>주요 특징</th>
            <th>구독</th>
          </tr>
        </thead>
        <tbody>
          ${aiServices.map(service => `
            <tr>
              <td><strong>${service.name}</strong></td>
              <td>${service.pricing.free}</td>
              <td>${service.pricing.pro}</td>
              <td>${service.features.slice(0, 2).join(', ')}</td>
              <td><button onclick="window.open('${service.subscribeUrl}', '_blank')" class="mini-subscribe-btn">구독</button></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

closeSubscription.addEventListener('click', () => subscriptionPanel.classList.remove('open'));

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

renderAIServices();
renderPricingComparison();
