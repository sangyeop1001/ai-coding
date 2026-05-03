const aiCategories = [
  {
    id: 'text-code',
    name: '📝 텍스트/코드 생성',
    description: 'AI를 이용한 텍스트 작성, 분석, 코드 생성',
    services: [
      {
        id: 1,
        name: 'ChatGPT',
        description: 'OpenAI의 대표 AI. 텍스트 생성, 코드 작성, 분석 등 다양한 분야에서 뛰어난 성능.',
        features: ['텍스트 생성', '코드 작성', '분석/요약', '다국어 지원'],
        strengths: '가장 대중적이고 안정적인 성능',
        weaknesses: '실시간 정보 제한',
        pricing: { free: '제한적', pro: '$20/월' },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/200px-ChatGPT_logo.svg.png',
        subscribeUrl: 'https://chat.openai.com/',
        rating: 4.8
      },
      {
        id: 2,
        name: 'Claude',
        description: 'Anthropic의 안전한 AI. 긴 텍스트 처리와 분석에 강점.',
        features: ['긴 텍스트 처리', '안전한 응답', '분석 전문성', '연구용 최적화'],
        strengths: '안전성과 정확성',
        weaknesses: '일부 기능 제한',
        pricing: { free: '제한적', pro: '$20/월' },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Claude_%28software%29_logo.svg/200px-Claude_%28software%29_logo.svg.png',
        subscribeUrl: 'https://claude.ai/',
        rating: 4.7
      },
      {
        id: 3,
        name: 'Gemini',
        description: 'Google의 멀티모달 AI. 텍스트, 이미지, 동영상 모두 처리.',
        features: ['멀티모달', '실시간 검색', 'Google 통합', '무료 많음'],
        strengths: '무료 플랜이 풍부하고 통합성 좋음',
        weaknesses: '일부 기능 제한',
        pricing: { free: '광범위', pro: '$10/월' },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Google_Gemini_logo.svg/200px-Google_Gemini_logo.svg.png',
        subscribeUrl: 'https://gemini.google.com/',
        rating: 4.5
      },
      {
        id: 4,
        name: 'GitHub Copilot',
        description: '코딩 전문 AI. 실시간 코드 제안과 자동 완성.',
        features: ['코드 자동완성', '다언어 지원', '실시간 제안', 'IDE 통합'],
        strengths: '개발 생산성 대폭 향상',
        weaknesses: '코딩 외 용도 부적합',
        pricing: { free: '학생용', pro: '$10/월' },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/200px-Visual_Studio_Code_1.35_icon.svg.png',
        subscribeUrl: 'https://github.com/features/copilot',
        rating: 4.6
      },
      {
        id: 5,
        name: 'Tabnine',
        description: 'AI 코드 자동 완성 플러그인. 개발 속도 향상.',
        features: ['AI 자동완성', 'IDE 통합', '프라이빗 모드', 'Team 기능'],
        strengths: '빠른 코드 제안, 오프라인 사용 가능',
        weaknesses: 'GitHub Copilot보다 약간 기능 제한',
        pricing: { free: '무료', pro: '$12/월' },
        image: 'https://www.tabnine.com/favicon.svg',
        subscribeUrl: 'https://www.tabnine.com/',
        rating: 4.3
      },
      {
        id: 6,
        name: 'Perplexity AI',
        description: '검색 기반 AI 챗봇. 실시간 정보 제공.',
        features: ['실시간 검색', '웹 인용', '분석 리포트', '다국어'],
        strengths: '최신 정보 제공, 출처 명시',
        weaknesses: '깊이 있는 분석은 제한',
        pricing: { free: '무료', pro: '$20/월' },
        image: 'https://www.perplexity.ai/favicon.svg',
        subscribeUrl: 'https://www.perplexity.ai/',
        rating: 4.6
      }
    ]
  },
  {
    id: 'image',
    name: '🎨 이미지 생성',
    description: '텍스트 설명으로 이미지를 자동 생성',
    services: [
      {
        id: 7,
        name: 'Midjourney',
        description: '고품질 이미지 생성 AI. 예술적이고 창의적인 이미지 생성에 특화.',
        features: ['고품질 이미지', '예술적 스타일', 'Discord 통합', '커뮤니티'],
        strengths: '최고 수준의 이미지 품질, 예술성 탁월',
        weaknesses: 'Discord 필수, 가파른 학습곡선',
        pricing: { free: '제한적', pro: '$10/월' },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.svg/200px-Midjourney_Emblem.svg.png',
        subscribeUrl: 'https://www.midjourney.com/',
        rating: 4.9
      },
      {
        id: 8,
        name: 'DALL-E 3',
        description: 'OpenAI의 이미지 생성 AI. 텍스트로부터 정확한 이미지 생성.',
        features: ['정확한 이미지 생성', '다양한 스타일', '편집 기능', 'API 지원'],
        strengths: '텍스트-이미지 변환 정확도 높음',
        weaknesses: '이용료가 비교적 높음',
        pricing: { free: '크레딧', pro: '$20/월' },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/200px-ChatGPT_logo.svg.png',
        subscribeUrl: 'https://openai.com/dall-e-3/',
        rating: 4.6
      },
      {
        id: 9,
        name: 'Stable Diffusion',
        description: '오픈소스 이미지 생성 AI. 빠르고 저비용.',
        features: ['빠른 생성', '커스터마이징', '로컬 실행 가능', '커뮤니티'],
        strengths: '무료 오픈소스, 빠른 생성',
        weaknesses: 'Midjourney보다 품질 낮음',
        pricing: { free: '무료', pro: '호스팅 $8/월' },
        image: 'https://cdn-uploads.huggingface.co/production/uploads/60f1abe7544c2adfd699860c/qVl5K5K5K5K5.svg',
        subscribeUrl: 'https://stability.ai/',
        rating: 4.2
      },
      {
        id: 10,
        name: 'Adobe Firefly',
        description: 'Adobe의 생성형 AI. Creative Suite와 통합.',
        features: ['Photoshop 통합', '다양한 스타일', '상용 라이선스', '편집 기능'],
        strengths: 'Adobe와의 완벽한 통합',
        weaknesses: 'Adobe 구독 필수',
        pricing: { free: '제한적', pro: 'Creative Cloud' },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Firefly_logo.svg/200px-Adobe_Firefly_logo.svg.png',
        subscribeUrl: 'https://www.adobe.com/products/firefly.html',
        rating: 4.4
      },
      {
        id: 11,
        name: 'Leonardo.AI',
        description: '게임/아트 전문 이미지 생성. 고속 생성.',
        features: ['빠른 생성', '게임 에셋', '스타일 전환', '커뮤니티'],
        strengths: '매우 빠른 생성, 무료 크레딧',
        weaknesses: '일관성이 다소 낮음',
        pricing: { free: '월 크레딧', pro: '$10/월' },
        image: 'https://leonardo.ai/favicon.ico',
        subscribeUrl: 'https://leonardo.ai/',
        rating: 4.1
      }
    ]
  },
  {
    id: 'video',
    name: '🎬 동영상 생성',
    description: 'AI를 이용한 동영상 자동 생성 및 편집',
    services: [
      {
        id: 12,
        name: 'Synthesia',
        description: 'AI 화자로 비디오 생성. 텍스트를 영상으로 변환.',
        features: ['AI 화자', '다국어', '템플릿', 'API 지원'],
        strengths: '빠른 영상 제작, 다양한 언어',
        weaknesses: 'AI 음성 자연스러움 제한',
        pricing: { free: '제한적', pro: '$30/월' },
        image: 'https://www.synthesia.io/favicon.ico',
        subscribeUrl: 'https://www.synthesia.io/',
        rating: 4.5
      },
      {
        id: 13,
        name: 'Runway',
        description: '생성형 AI 비디오 편집. 텍스트로부터 영상 생성.',
        features: ['영상 생성', '배경 제거', '모션 추적', '편집 도구'],
        strengths: '창의적인 영상 효과, 최신 기술',
        weaknesses: '가파른 학습곡선',
        pricing: { free: '월 크레딧', pro: '$15/월' },
        image: 'https://www.runway.com/favicon.ico',
        subscribeUrl: 'https://www.runway.com/',
        rating: 4.6
      },
      {
        id: 14,
        name: 'HeyGen',
        description: 'AI 아바타 비디오 생성. 영업, 고객 지원용.',
        features: ['AI 아바타', '음성 합성', '자동 자막', '웹캠 통합'],
        strengths: '리얼한 아바타, 사용 간편',
        weaknesses: '제한된 커스터마이징',
        pricing: { free: '제한적', pro: '$25/월' },
        image: 'https://www.heygen.com/favicon.ico',
        subscribeUrl: 'https://www.heygen.com/',
        rating: 4.4
      }
    ]
  },
  {
    id: 'voice',
    name: '🔊 음성/음악 생성',
    description: '텍스트를 음성으로, 음악 자동 생성',
    services: [
      {
        id: 15,
        name: 'ElevenLabs',
        description: '자연스러운 AI 음성 생성. 29개 언어 지원.',
        features: ['자연스러운 음성', '다국어', '감정 표현', 'API 지원'],
        strengths: '가장 자연스러운 음성, 감정 표현 가능',
        weaknesses: '높은 가격',
        pricing: { free: '월 크레딧', pro: '$23/월' },
        image: 'https://www.elevenlabs.io/favicon.ico',
        subscribeUrl: 'https://www.elevenlabs.io/',
        rating: 4.8
      },
      {
        id: 16,
        name: 'Google NotebookLM',
        description: '텍스트를 팟캐스트로 변환. AI 진행자.',
        features: ['팟캐스트 생성', '자동 요약', 'Q&A 모드', 'PDF 지원'],
        strengths: '무료, 높은 품질, 혁신적',
        weaknesses: '비교적 신규 서비스',
        pricing: { free: '무료', pro: 'Google One' },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Google_Gemini_logo.svg/200px-Google_Gemini_logo.svg.png',
        subscribeUrl: 'https://notebooklm.google.com/',
        rating: 4.5
      },
      {
        id: 17,
        name: 'Soundraw',
        description: 'AI 음악 생성. 로열티 프리 음악.',
        features: ['음악 생성', '로열티 프리', '커스터마이징', '다운로드'],
        strengths: '저렴한 가격, 상용 라이선스',
        weaknesses: '음악 깊이 제한',
        pricing: { free: '제한적', pro: '$12.99/월' },
        image: 'https://www.soundraw.io/favicon.ico',
        subscribeUrl: 'https://www.soundraw.io/',
        rating: 4.2
      }
    ]
  },
  {
    id: 'presentation',
    name: '📊 프레젠테이션/디자인',
    description: 'AI로 자동 생성되는 프레젠테이션과 디자인',
    services: [
      {
        id: 18,
        name: 'Beautiful.ai',
        description: 'AI 디자인 어시스턴트. 전문적인 슬라이드 자동 생성.',
        features: ['자동 레이아웃', '디자인 제안', '협업 기능', '템플릿'],
        strengths: '전문적인 디자인, 빠른 생성',
        weaknesses: '맞춤형 커스터마이징 제한',
        pricing: { free: '제한적', pro: '$15/월' },
        image: 'https://beautiful.ai/favicon.ico',
        subscribeUrl: 'https://www.beautiful.ai/',
        rating: 4.5
      },
      {
        id: 19,
        name: 'Gamma',
        description: '차세대 프레젠테이션 도구. AI로 슬라이드 자동 생성.',
        features: ['AI 생성', '반응형 디자인', '웹 공유', '협업'],
        strengths: '혁신적 인터페이스, 빠른 제작',
        weaknesses: '기존 도구와 다른 형식',
        pricing: { free: '무료', pro: '$20/월' },
        image: 'https://www.gamma.app/favicon.ico',
        subscribeUrl: 'https://www.gamma.app/',
        rating: 4.6
      },
      {
        id: 20,
        name: 'Canva',
        description: 'AI 디자인 기능 포함. 쉬운 그래픽 디자인.',
        features: ['AI 생성', '템플릿 풍부', '협업', '배경제거'],
        strengths: '사용 매우 간편, 가격 저렴',
        weaknesses: '전문성 다소 떨어짐',
        pricing: { free: '무료', pro: '$14.99/월' },
        image: 'https://www.canva.com/favicon.ico',
        subscribeUrl: 'https://www.canva.com/',
        rating: 4.4
      }
    ]
  },
  {
    id: 'video-edit',
    name: '✂️ 영상 편집/자막',
    description: 'AI를 이용한 자동 편집, 자막, 자르기',
    services: [
      {
        id: 21,
        name: 'Descript',
        description: '텍스트 기반 영상 편집. 자막 자동 생성.',
        features: ['음성-텍스트 변환', '자동 편집', '자막 생성', '협업'],
        strengths: '혁신적 편집 방식, 자막 정확도 높음',
        weaknesses: '학습곡선 가파름',
        pricing: { free: '월 1시간', pro: '$24/월' },
        image: 'https://www.descript.com/favicon.ico',
        subscribeUrl: 'https://www.descript.com/',
        rating: 4.7
      },
      {
        id: 22,
        name: 'Opus Clip',
        description: '긴 영상에서 짧은 클립 자동 생성. SNS 최적화.',
        features: ['자동 자르기', '자막', 'B-roll 추가', 'SNS 형식'],
        strengths: '콘텐츠 크리에이터 최적화, 무료',
        weaknesses: '기능 제한',
        pricing: { free: '무료', pro: '$10/월' },
        image: 'https://www.opusclip.com/favicon.ico',
        subscribeUrl: 'https://www.opusclip.com/',
        rating: 4.3
      },
      {
        id: 23,
        name: 'CapCut',
        description: '모바일 우선 영상 편집. 자동 자막, AI 효과.',
        features: ['자동 자막', 'AI 효과', '템플릿', '클라우드'],
        strengths: '무료, 강력한 기능, 모바일 최적화',
        weaknesses: '데스크톱 버전 기능 제한',
        pricing: { free: '무료', pro: '없음' },
        image: 'https://www.capcut.com/favicon.ico',
        subscribeUrl: 'https://www.capcut.com/',
        rating: 4.5
      }
    ]
  }
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
  
  aiCategories.forEach((category) => {
    // 카테고리 헤더
    const categorySection = document.createElement('div');
    categorySection.className = 'category-section';
    categorySection.innerHTML = `
      <h2>${category.name}</h2>
      <p>${category.description}</p>
    `;
    aiServicesGrid.appendChild(categorySection);
    
    // 서비스 카드 그리드
    const serviceGrid = document.createElement('div');
    serviceGrid.className = 'service-grid';
    
    category.services.forEach((service) => {
      const card = document.createElement('article');
      card.className = 'product-card ai-service-card';
      card.innerHTML = `
        <div class="image-container">
          <img src="${service.image}" alt="${service.name}" class="service-image" />
        </div>
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
      serviceGrid.appendChild(card);
    });
    
    aiServicesGrid.appendChild(serviceGrid);
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
  // 모든 서비스를 배열로 변환
  const allServices = aiCategories.flatMap(cat => cat.services);
  
  pricingComparison.innerHTML = `
    <div class="pricing-table-container">
      <table class="pricing-table">
        <thead>
          <tr>
            <th>서비스</th>
            <th>무료 플랜</th>
            <th>프리미엄</th>
            <th>주요 특징</th>
            <th>평점</th>
            <th>구독</th>
          </tr>
        </thead>
        <tbody>
          ${allServices.map(service => `
            <tr>
              <td><strong>${service.name}</strong></td>
              <td>${service.pricing.free}</td>
              <td>${service.pricing.pro}</td>
              <td class="features-cell">${service.features.slice(0, 2).join(', ')}</td>
              <td class="rating-cell">⭐ ${service.rating}</td>
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
