// 1. 확장된 AI 카테고리 데이터
const aiCategories = [
  {
    id: 'text', name: '📝 텍스트 / 기획 / 코드', description: '아이디어 기획, 번역, 코딩 등을 도와주는 AI',
    services: [
      { id: 'gpt', name: 'ChatGPT', description: '가장 대중적이고 똑똑한 다목적 AI', strengths: '안정적인 성능, 방대한 지식, 우수한 한글 처리', weaknesses: '실시간 검색 기능이 가끔 불안정함', pricing: { free: 'GPT-3.5 무료', pro: '$20/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/200px-ChatGPT_logo.svg.png', features: ['텍스트', '코드', '데이터분석'], subscribeUrl: 'https://chat.openai.com/' },
      { id: 'claude', name: 'Claude 3', description: '자연스럽고 긴 글 작성에 특화된 AI', strengths: '인간처럼 자연스러운 문장력, 긴 문서 요약 탁월', weaknesses: '인터넷 검색 기능 부재', pricing: { free: '제한적 무료', pro: '$20/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Claude_%28software%29_logo.svg/200px-Claude_%28software%29_logo.svg.png', features: ['문서작성', '코드분석', '안전성'], subscribeUrl: 'https://claude.ai/' },
      { id: 'gemini', name: 'Gemini', description: '구글 생태계와 연동되는 빠른 AI', strengths: '구글 독스/드라이브 연동, 매우 빠른 응답 속도', weaknesses: '한국어 문장력이 타 서비스 대비 약간 아쉬움', pricing: { free: '광범위', pro: '$10/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Google_Gemini_logo.svg/200px-Google_Gemini_logo.svg.png', features: ['구글연동', '멀티모달', '검색'], subscribeUrl: 'https://gemini.google.com/' },
      { id: 'copilot', name: 'GitHub Copilot', description: '개발자를 위한 최강의 코딩 도우미', strengths: '에디터 내장, 압도적인 코드 자동완성 속도', weaknesses: '코딩 외의 일반적인 대화에는 부적합', pricing: { free: '학생 무료', pro: '$10/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/200px-Visual_Studio_Code_1.35_icon.svg.png', features: ['코드완성', 'IDE통합', '버그수정'], subscribeUrl: 'https://github.com/features/copilot' }
    ]
  },
  {
    id: 'presentation', name: '📊 PPT / 프레젠테이션', description: '주제만 입력하면 알아서 슬라이드를 만들어주는 AI',
    services: [
      { id: 'gamma', name: 'Gamma', description: '웹 기반의 초고속 문서/PPT 생성 AI', strengths: '텍스트만 치면 1분만에 완성, 세련된 웹 UI', weaknesses: '세밀한 디자인(위치 조정 등) 수정이 까다로움', pricing: { free: '가입시 크레딧', pro: '$20/월' }, image: 'https://www.gamma.app/favicon.ico', features: ['PPT생성', '웹공유', '디자인'], subscribeUrl: 'https://gamma.app/' },
      { id: 'beautiful', name: 'Beautiful.ai', description: '디자인 감각이 없어도 예쁘게 만들어주는 PPT AI', strengths: '자동 레이아웃 정렬로 무조건 예쁘게 나옴', weaknesses: '무료 플랜이 거의 없고, 한글 폰트 지원이 아쉬움', pricing: { free: '없음', pro: '$12/월' }, image: 'https://beautiful.ai/favicon.ico', features: ['자동레이아웃', '차트생성', '템플릿'], subscribeUrl: 'https://www.beautiful.ai/' }
    ]
  },
  {
    id: 'image', name: '🎨 이미지 / 영상 생성', description: '그림을 그려주거나 영상을 만들어주는 AI',
    services: [
      { id: 'midjourney', name: 'Midjourney', description: '압도적인 퀄리티의 그림 생성 AI', strengths: '실사, 예술작품 등 현존 최고의 이미지 퀄리티', weaknesses: '디스코드(Discord)를 통해서만 사용해야 해서 불편함', pricing: { free: '없음', pro: '$10/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.svg/200px-Midjourney_Emblem.svg.png', features: ['고퀄리티', '예술성', '다양한화풍'], subscribeUrl: 'https://www.midjourney.com/' },
      { id: 'dalle', name: 'DALL-E 3', description: '챗GPT 안에서 쉽게 그리는 AI', strengths: '대화하듯 쉽게 수정 가능, 명령어를 정확히 이해함', weaknesses: '미드저니에 비해 디테일이나 실사 느낌이 떨어짐', pricing: { free: '제한적', pro: '$20/월 (GPT Plus)' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/200px-ChatGPT_logo.svg.png', features: ['쉬운사용', '정확도', '대화형'], subscribeUrl: 'https://openai.com/dall-e-3/' },
      { id: 'runway', name: 'Runway', description: '사진을 움직이게 만드는 비디오 AI', strengths: '텍스트나 이미지만으로 퀄리티 높은 짧은 영상 제작', weaknesses: '비용이 비싸고 긴 영상 제작은 한계가 있음', pricing: { free: '무료 크레딧', pro: '$15/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Runway_%28software%29_logo.svg/200px-Runway_%28software%29_logo.svg.png', features: ['영상생성', '모션브러시', '특수효과'], subscribeUrl: 'https://runwayml.com/' }
    ]
  }
];

// DOM 요소
const aiServicesGrid = document.getElementById('ai-services-grid');
const catSelect = document.getElementById('compare-category');
const slot1 = document.getElementById('compare-slot-1');
const slot2 = document.getElementById('compare-slot-2');
const resultContainer = document.getElementById('compare-result-container');
const modalOverlay = document.getElementById('modal-overlay');

// 1. 메인 소개 카드 렌더링 (체크박스 없음)
function renderAIServices() {
  aiServicesGrid.innerHTML = '';
  aiCategories.forEach((category) => {
    const section = document.createElement('div');
    section.className = 'category-section';
    section.innerHTML = `<h2>${category.name}</h2><p>${category.description}</p>`;
    
    const grid = document.createElement('div');
    grid.className = 'service-grid';
    
    category.services.forEach((service) => {
      grid.innerHTML += `
        <article class="product-card ai-service-card">
          <div class="image-container">
            <img src="${service.image}" alt="${service.name}" class="service-image" />
          </div>
          <div class="card-content">
            <div class="service-header">
              <h3>${service.name}</h3>
            </div>
            <p>${service.description}</p>
            <div class="features">
              ${service.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
            </div>
            <div class="service-info">
              <div class="pricing">💰 ${service.pricing.pro}</div>
            </div>
            <button class="subscribe-btn" onclick="showModal('${category.id}', '${service.id}')">자세히 보기</button>
          </div>
        </article>
      `;
    });
    section.appendChild(grid);
    aiServicesGrid.appendChild(section);
  });
}

// 2. 가격 비교: 셀렉트 박스 설정
function setupCompareOptions() {
  // 카테고리 셋업
  catSelect.innerHTML = '<option value="">분야를 선택하세요</option>';
  aiCategories.forEach(cat => {
    catSelect.innerHTML += `<option value="${cat.id}">${cat.name}</option>`;
  });

  // 카테고리 변경 시 AI 슬롯 1,2 업데이트
  catSelect.addEventListener('change', (e) => {
    const catId = e.target.value;
    resultContainer.style.display = 'none'; // 결과 숨기기
    
    if(!catId) {
      slot1.innerHTML = '<option value="">AI를 선택하세요</option>';
      slot2.innerHTML = '<option value="">AI를 선택하세요</option>';
      return;
    }

    const category = aiCategories.find(c => c.id === catId);
    let options = '<option value="">AI를 선택하세요</option>';
    category.services.forEach(s => {
      options += `<option value="${s.id}">${s.name}</option>`;
    });

    slot1.innerHTML = options;
    slot2.innerHTML = options;
  });

  // AI 선택 시 비교 결과 렌더링
  slot1.addEventListener('change', renderComparison);
  slot2.addEventListener('change', renderComparison);
}

// 3. 두 AI 직접 비교 렌더링 (화면에 바로 표시)
function renderComparison() {
  const catId = catSelect.value;
  const id1 = slot1.value;
  const id2 = slot2.value;

  if(!catId || !id1 || !id2) {
    resultContainer.style.display = 'none';
    return;
  }

  if(id1 === id2) {
    alert("서로 다른 AI를 선택해주세요!");
    slot2.value = "";
    resultContainer.style.display = 'none';
    return;
  }

  const category = aiCategories.find(c => c.id === catId);
  const ai1 = category.services.find(s => s.id === id1);
  const ai2 = category.services.find(s => s.id === id2);

  // 화면에 HTML 꽂아넣기
  resultContainer.innerHTML = `
    <div class="compare-grid">
      <!-- 첫번째 AI -->
      <div class="compare-box">
        <img src="${ai1.image}" alt="${ai1.name}">
        <h3>${ai1.name}</h3>
        <div class="compare-section">
          <h4>💰 가격</h4>
          <p>무료: ${ai1.pricing.free} <br> <span class="compare-price">유료: ${ai1.pricing.pro}</span></p>
        </div>
        <div class="compare-section">
          <h4>🟢 이런 점이 좋아요 (장점)</h4>
          <p class="compare-pro">${ai1.strengths}</p>
        </div>
        <div class="compare-section">
          <h4>🔴 이건 아쉬워요 (단점)</h4>
          <p class="compare-con">${ai1.weaknesses}</p>
        </div>
        <a href="${ai1.subscribeUrl}" target="_blank" class="primary-btn" style="text-align:center; margin-top:auto;">사이트 방문하기</a>
      </div>

      <!-- 두번째 AI -->
      <div class="compare-box">
        <img src="${ai2.image}" alt="${ai2.name}">
        <h3>${ai2.name}</h3>
        <div class="compare-section">
          <h4>💰 가격</h4>
          <p>무료: ${ai2.pricing.free} <br> <span class="compare-price">유료: ${ai2.pricing.pro}</span></p>
        </div>
        <div class="compare-section">
          <h4>🟢 이런 점이 좋아요 (장점)</h4>
          <p class="compare-pro">${ai2.strengths}</p>
        </div>
        <div class="compare-section">
          <h4>🔴 이건 아쉬워요 (단점)</h4>
          <p class="compare-con">${ai2.weaknesses}</p>
        </div>
        <a href="${ai2.subscribeUrl}" target="_blank" class="primary-btn" style="text-align:center; margin-top:auto;">사이트 방문하기</a>
      </div>
    </div>
  `;
  
  resultContainer.style.display = 'block';
}

// 4. 메인 카드에서 '자세히 보기' 클릭 시 뜨는 모달
function showModal(catId, serviceId) {
  const category = aiCategories.find(c => c.id === catId);
  const service = category.services.find(s => s.id === serviceId);

  document.getElementById('subscription-content').innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <h4 style="font-size: 1.4rem; margin: 0 0 0.5rem 0;">${service.name}</h4>
      <p style="color: var(--muted); margin: 0;">${service.description}</p>
    </div>
    <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
      <p style="margin:0 0 0.5rem 0;"><strong>무료:</strong> ${service.pricing.free}</p>
      <p style="margin:0; font-size:1.1rem; color:#f87171;"><strong>유료:</strong> ${service.pricing.pro}</p>
    </div>
    <div style="margin-bottom: 1.5rem;">
      <h5 style="color: #34d399; margin: 0 0 0.5rem 0;">장점</h5>
      <p style="color: var(--muted); font-size: 0.9rem;">${service.strengths}</p>
    </div>
    <a href="${service.subscribeUrl}" target="_blank" class="primary-btn" style="display:block; text-align:center;">공식 사이트 가기</a>
  `;
  modalOverlay.classList.add('open');
}

// 모달 닫기
document.getElementById('close-modal').addEventListener('click', () => modalOverlay.classList.remove('open'));
modalOverlay.addEventListener('click', (e) => { if(e.target === modalOverlay) modalOverlay.classList.remove('open'); });

// 실행
renderAIServices();
setupCompareOptions();