const aiCategories = [
  {
    id: 'text-code',
    name: '📝 텍스트/코드 생성',
    description: 'AI를 이용한 텍스트 작성, 분석, 코드 생성',
    services: [
      {
        id: 1, name: 'ChatGPT', description: 'OpenAI의 대표 AI. 텍스트 생성, 코드 작성, 분석 등 다양한 분야에서 뛰어난 성능.',
        features: ['텍스트 생성', '코드 작성', '분석/요약', '다국어 지원'], strengths: '가장 대중적이고 안정적인 성능',
        pricing: { free: '제한적', pro: '$20/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/200px-ChatGPT_logo.svg.png',
        subscribeUrl: 'https://chat.openai.com/', rating: 4.8
      },
      {
        id: 2, name: 'Claude', description: 'Anthropic의 안전한 AI. 긴 텍스트 처리와 분석에 강점.',
        features: ['긴 텍스트 처리', '안전한 응답', '분석 전문성', '연구용 최적화'], strengths: '안전성과 정확성',
        pricing: { free: '제한적', pro: '$20/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Claude_%28software%29_logo.svg/200px-Claude_%28software%29_logo.svg.png',
        subscribeUrl: 'https://claude.ai/', rating: 4.7
      },
      {
        id: 3, name: 'Gemini', description: 'Google의 멀티모달 AI. 텍스트, 이미지, 동영상 모두 처리.',
        features: ['멀티모달', '실시간 검색', 'Google 통합', '무료 많음'], strengths: '무료 플랜이 풍부하고 통합성 좋음',
        pricing: { free: '광범위', pro: '$10/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Google_Gemini_logo.svg/200px-Google_Gemini_logo.svg.png',
        subscribeUrl: 'https://gemini.google.com/', rating: 4.5
      },
      {
        id: 4, name: 'GitHub Copilot', description: '코딩 전문 AI. 실시간 코드 제안과 자동 완성.',
        features: ['코드 자동완성', '다언어 지원', '실시간 제안', 'IDE 통합'], strengths: '개발 생산성 대폭 향상',
        pricing: { free: '학생용', pro: '$10/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/200px-Visual_Studio_Code_1.35_icon.svg.png',
        subscribeUrl: 'https://github.com/features/copilot', rating: 4.6
      },
      {
        id: 5, name: 'Notion AI', description: '노트 작성과 문서 자동 생성, 회의 요약에 특화된 생산성 AI.',
        features: ['문서 작성', '요약', '아이디어 정리', '템플릿 지원'], strengths: '업무 흐름에 자연스럽게 녹아드는 통합성',
        pricing: { free: '제한적', pro: '$8/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Notion-logo.svg/200px-Notion-logo.svg.png',
        subscribeUrl: 'https://www.notion.so/product/ai', rating: 4.4
      },
      {
        id: 6, name: 'Jasper', description: '마케팅 콘텐츠와 광고 문구 생성에 강력한 텍스트 AI.',
        features: ['광고 문구', '블로그 글', 'SEO 콘텐츠', '브랜드 음성 유지'], strengths: '신속한 캠페인 콘텐츠 제작',
        pricing: { free: '체험', pro: '$29/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Jasper_logo.svg/200px-Jasper_logo.svg.png',
        subscribeUrl: 'https://www.jasper.ai/', rating: 4.3
      },
      {
        id: 9, name: 'Grammarly', description: '문법 검사와 스타일 개선을 자동으로 도와주는 AI 라이팅 도우미.',
        features: ['문법 교정', '스타일 가이드', '플러그인 통합', '단어 선택 개선'], strengths: '정확하고 자연스러운 문서 품질 향상',
        pricing: { free: '기본', pro: '$12/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Grammarly_Logo.svg/200px-Grammarly_Logo.svg.png',
        subscribeUrl: 'https://www.grammarly.com/', rating: 4.5
      }
    ]
  },
  {
    id: 'image',
    name: '🎨 이미지 생성',
    description: '텍스트 설명으로 이미지를 자동 생성',
    services: [
      {
        id: 7, name: 'Midjourney', description: '고품질 이미지 생성 AI. 예술적이고 창의적인 이미지 생성에 특화.',
        features: ['고품질 이미지', '예술적 스타일', 'Discord 통합'], strengths: '최고 수준의 이미지 품질',
        pricing: { free: '제한적', pro: '$10/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.svg/200px-Midjourney_Emblem.svg.png',
        subscribeUrl: 'https://www.midjourney.com/', rating: 4.9
      },
      {
        id: 8, name: 'DALL-E 3', description: 'OpenAI의 이미지 생성 AI. 텍스트로부터 정확한 이미지 생성.',
        features: ['정확한 이미지 생성', '편집 기능', 'API 지원'], strengths: '텍스트-이미지 변환 정확도 높음',
        pricing: { free: '크레딧', pro: '$20/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/200px-ChatGPT_logo.svg.png',
        subscribeUrl: 'https://openai.com/dall-e-3/', rating: 4.6
      },
      {
        id: 10, name: 'Stable Diffusion', description: '오픈소스 이미지 생성 모델. 커스터마이징과 로컬 실행 지원.',
        features: ['오픈소스', '로컬 실행', '모델 커스터마이즈', '빠른 생성'], strengths: '자유도가 높고 가격 부담이 적음',
        pricing: { free: '오픈소스', pro: '맞춤형 요금' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Stable_Diffusion_logo.svg/200px-Stable_Diffusion_logo.svg.png',
        subscribeUrl: 'https://stability.ai/', rating: 4.2
      },
      {
        id: 11, name: 'Runway', description: '비디오와 이미지 생성에 최적화된 크리에이티브 AI 플랫폼.',
        features: ['비디오 편집', '모션 그래픽', '이미지 생성', '브랜딩 템플릿'], strengths: '영상 제작 워크플로우에 바로 적용 가능',
        pricing: { free: '제한적', pro: '$12/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Runway_%28software%29_logo.svg/200px-Runway_%28software%29_logo.svg.png',
        subscribeUrl: 'https://runwayml.com/', rating: 4.4
      }
    ]
  }
];

// HTML 요소 가져오기
const aiServicesGrid = document.getElementById('ai-services-grid');
const pricingComparison = document.getElementById('pricing-comparison');
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
const topSubBtn = document.getElementById('subscription-btn'); // 상단 헤더 버튼

// 1. AI 서비스 카드 렌더링
function renderAIServices() {
  if (!aiServicesGrid) return;
  aiServicesGrid.innerHTML = '';
  
  aiCategories.forEach((category) => {
    const categorySection = document.createElement('div');
    categorySection.className = 'category-section';
    categorySection.innerHTML = `<h2>${category.name}</h2><p>${category.description}</p>`;
    aiServicesGrid.appendChild(categorySection);
    
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
          <button class="subscribe-btn">구독하기</button>
        </div>
      `;

      // ★ 카드 안의 '구독하기' 버튼을 누르면 팝업(모달) 띄우기 연결!
      const btn = card.querySelector('.subscribe-btn');
      btn.addEventListener('click', () => showModal(service));
      
      serviceGrid.appendChild(card);
    });
    
    aiServicesGrid.appendChild(serviceGrid);
  });
}

// 2. 가격 비교 테이블 렌더링
function renderPricingComparison() {
  if (!pricingComparison) return;
  
  pricingComparison.innerHTML = `
    <div class="pricing-comparison-wrapper">
      <!-- 카테고리 선택 탭 -->
      <div class="category-tabs">
        ${aiCategories.map((category, index) => `
          <button class="category-tab ${index === 0 ? 'active' : ''}" data-category="${category.id}">
            ${category.name}
          </button>
        `).join('')}
      </div>
      
      <!-- AI 선택 그리드 -->
      <div class="ai-selection-grid">
        ${aiCategories.map((category, index) => `
          <div class="category-services ${index === 0 ? 'active' : ''}" data-category="${category.id}">
            ${category.services.map(service => `
              <div class="ai-select-card" data-service-id="${service.id}">
                <div class="ai-select-header">
                  <img src="${service.image}" alt="${service.name}" class="ai-select-image" />
                  <div class="ai-select-info">
                    <h4>${service.name}</h4>
                    <div class="ai-rating">⭐ ${service.rating}</div>
                  </div>
                  <div class="ai-select-checkbox">
                    <input type="checkbox" id="select-${service.id}" class="ai-checkbox" />
                    <label for="select-${service.id}" class="checkbox-label"></label>
                  </div>
                </div>
                <div class="ai-select-details">
                  <div class="ai-pricing">
                    <div class="price-free">무료: ${service.pricing.free}</div>
                    <div class="price-pro">프리미엄: ${service.pricing.pro}</div>
                  </div>
                  <div class="ai-features">
                    ${service.features.slice(0, 2).map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
      
      <!-- 비교 결과 영역 -->
      <div class="comparison-results" id="comparison-results" style="display: none;">
        <h3>선택한 AI 서비스 비교</h3>
        <div class="comparison-content" id="comparison-content"></div>
      </div>
    </div>
  `;
  
  // 카테고리 탭 이벤트 리스너 추가
  setupCategoryTabs();
  // AI 선택 체크박스 이벤트 리스너 추가
  setupAICheckboxes();
}
        </tbody>
      </table>
    </div>
  // 카테고리 탭 이벤트 리스너 추가
  setupCategoryTabs();
  // AI 선택 체크박스 이벤트 리스너 추가
  setupAICheckboxes();
}

// 카테고리 탭 설정
function setupCategoryTabs() {
  const tabs = document.querySelectorAll('.category-tab');
  const categories = document.querySelectorAll('.category-services');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // 모든 탭에서 active 클래스 제거
      tabs.forEach(t => t.classList.remove('active'));
      // 모든 카테고리에서 active 클래스 제거
      categories.forEach(c => c.classList.remove('active'));
      
      // 클릭한 탭에 active 클래스 추가
      tab.classList.add('active');
      // 해당 카테고리에 active 클래스 추가
      const categoryId = tab.dataset.category;
      document.querySelector(`.category-services[data-category="${categoryId}"]`).classList.add('active');
    });
  });
}

// AI 체크박스 설정
function setupAICheckboxes() {
  const checkboxes = document.querySelectorAll('.ai-checkbox');
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const serviceId = parseInt(e.target.id.replace('select-', ''));
      const service = findServiceById(serviceId);
      
      if (e.target.checked) {
        if (selectedServices.length >= 2) {
          // 이미 2개 선택되어 있으면 첫 번째 선택 해제
          const firstService = selectedServices.shift();
          document.getElementById(`select-${firstService.id}`).checked = false;
        }
        selectedServices.push(service);
      } else {
        // 선택 해제
        const index = selectedServices.findIndex(s => s.id === serviceId);
        if (index > -1) {
          selectedServices.splice(index, 1);
        }
      }
      
      // 비교 결과 업데이트
      updateComparisonResults();
    });
  });
}

// 서비스 ID로 서비스 찾기
function findServiceById(id) {
  for (const category of aiCategories) {
    const service = category.services.find(s => s.id === id);
    if (service) return service;
  }
  return null;
}

// 비교 결과 업데이트
function updateComparisonResults() {
  const resultsContainer = document.getElementById('comparison-results');
  const contentContainer = document.getElementById('comparison-content');
  
  if (selectedServices.length === 2) {
    const service1 = selectedServices[0];
    const service2 = selectedServices[1];
    
    const priceParse = (price) => {
      if (price.includes('$')) {
        return parseFloat(price.match(/\d+/)[0]);
      }
      return 0;
    };
    
    const price1 = priceParse(service1.pricing.pro);
    const price2 = priceParse(service2.pricing.pro);
    const priceDiff = Math.abs(price1 - price2);
    const cheaper = price1 < price2 ? service1.name : service2.name;
    
    contentContainer.innerHTML = `
      <div class="comparison-grid">
        <!-- 서비스 1 -->
        <div class="comparison-service">
          <div class="service-header">
            <img src="${service1.image}" alt="${service1.name}" class="service-compare-image" />
            <div>
              <h4>${service1.name}</h4>
              <div class="rating">⭐ ${service1.rating}</div>
            </div>
          </div>
          <div class="service-pricing">
            <div class="price-item">
              <span class="price-label">무료 플랜:</span>
              <span class="price-value">${service1.pricing.free}</span>
            </div>
            <div class="price-item">
              <span class="price-label">프리미엄:</span>
              <span class="price-value price-pro">${service1.pricing.pro}</span>
            </div>
          </div>
          <div class="service-strengths">
            <h5>✅ 핵심 강점</h5>
            <p>${service1.strengths}</p>
          </div>
          <div class="service-features">
            <h5>🎯 주요 기능</h5>
            <div class="features-list">
              ${service1.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
            </div>
          </div>
          <a href="${service1.subscribeUrl}" target="_blank" class="primary-btn">구독하기</a>
        </div>
        
        <!-- 서비스 2 -->
        <div class="comparison-service">
          <div class="service-header">
            <img src="${service2.image}" alt="${service2.name}" class="service-compare-image" />
            <div>
              <h4>${service2.name}</h4>
              <div class="rating">⭐ ${service2.rating}</div>
            </div>
          </div>
          <div class="service-pricing">
            <div class="price-item">
              <span class="price-label">무료 플랜:</span>
              <span class="price-value">${service2.pricing.free}</span>
            </div>
            <div class="price-item">
              <span class="price-label">프리미엄:</span>
              <span class="price-value price-pro">${service2.pricing.pro}</span>
            </div>
          </div>
          <div class="service-strengths">
            <h5>✅ 핵심 강점</h5>
            <p>${service2.strengths}</p>
          </div>
          <div class="service-features">
            <h5>🎯 주요 기능</h5>
            <div class="features-list">
              ${service2.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
            </div>
          </div>
          <a href="${service2.subscribeUrl}" target="_blank" class="primary-btn">구독하기</a>
        </div>
      </div>
      
      <!-- 가격 비교 요약 -->
      ${price1 !== price2 ? `
        <div class="price-comparison-summary">
          <h4>💰 가격 비교</h4>
          <p class="price-difference">
            <strong>${cheaper}</strong>이(가) ${priceDiff}달러 더 저렴합니다
          </p>
        </div>
      ` : ''}
    `;
    
    resultsContainer.style.display = 'block';
  } else {
    resultsContainer.style.display = 'none';
  }
}

// 5. 모달(팝업) 띄우기 함수
function showModal(service) {
function showModal(service) {
  subscriptionContent.innerHTML = `
    <div style="padding: 1rem 0;">
      <div style="text-align: center; margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.4rem; color: var(--text); margin: 0 0 0.5rem 0;">${service.name}</h4>
        <p style="color: var(--muted); font-size: 0.9rem; margin: 0;">${service.description}</p>
      </div>
      <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 16px; margin-bottom: 1.5rem; border: 1px solid var(--border);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span style="color: var(--muted);">프리미엄 요금</span>
          <span style="font-size: 1.25rem; font-weight: bold; color: var(--primary-strong);">${service.pricing.pro}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="color: var(--muted);">무료 플랜</span>
          <span style="font-weight: 500; font-size: 0.95rem;">${service.pricing.free}</span>
        </div>
      </div>
      <div style="margin-bottom: 1.5rem;">
        <h5 style="color: #10b981; margin: 0 0 0.5rem 0; font-size: 1rem;">✅ 핵심 강점</h5>
        <p style="font-size: 0.9rem; color: var(--muted); line-height: 1.5; margin: 0;">${service.strengths}</p>
      </div>
      <a href="${service.subscribeUrl}" target="_blank" class="primary-btn" style="display: block; text-align: center; width: 100%; border-radius: 12px; padding: 1rem; text-decoration: none;">지금 바로 구독하기</a>
    </div>
  `;
  // HTML 구조의 모달에 open 클래스 추가하여 보여주기
  modalOverlay.classList.add('open');
}

// 6. 모달 닫기 이벤트 (X 버튼 & 바깥 배경 클릭)
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('open');
  });
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    // 배경(자신)을 클릭했을 때만 닫기 (내부 내용 클릭 시 안 닫힘)
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('open');
    }
  });
}

// 6. 헤더 메뉴 토글 (모바일용)
if (menuToggle && mainNav) {
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

// 9. 헤더 우측 '구독 시작하기' 버튼 누르면 비교 섹션으로 스크롤 이동
if (topSubBtn) {
  topSubBtn.addEventListener('click', () => {
    document.getElementById('comparison').scrollIntoView({ behavior: 'smooth' });
  });
}

// 10. 추천 카드 클릭 이벤트 - 해당 카테고리로 이동
document.querySelectorAll('.rec-card').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    const category = card.dataset.category;
    document.getElementById('comparison').scrollIntoView({ behavior: 'smooth' });
  });
});

// 초기 렌더링 실행
renderAIServices();
renderPricingComparison();