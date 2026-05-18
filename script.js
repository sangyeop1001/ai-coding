// 1. 대폭 확장된 최신 AI 카테고리 데이터 (총 15종)
const aiCategories = [
  {
    id: 'text', name: '📝 텍스트 / 검색 / 코드', description: '글쓰기, 정보 검색, 코딩을 돕는 초거대 언어 모델',
    services: [
      { id: 'gpt', name: 'ChatGPT', description: '가장 대중적이고 똑똑한 다목적 AI', strengths: '압도적인 범용성, 방대한 기능 지원(GPTs 등)', weaknesses: '가끔 환각(거짓말) 현상이 있음', pricing: { free: 'GPT-4o 제한적 무료', pro: '$20/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/200px-ChatGPT_logo.svg.png', features: ['텍스트생성', '코드작성', '음성대화'], subscribeUrl: 'https://chat.openai.com/' },
      { id: 'claude', name: 'Claude 3', description: '자연스럽고 긴 글 작성에 특화된 AI', strengths: '인간처럼 자연스러운 문장력, 거대한 문서(PDF) 분석 탁월', weaknesses: '인터넷 실시간 검색 기능이 부족함', pricing: { free: '제한적 무료', pro: '$20/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Claude_%28software%29_logo.svg/200px-Claude_%28software%29_logo.svg.png', features: ['자연스러운글쓰기', '문서분석', '높은안전성'], subscribeUrl: 'https://claude.ai/' },
      { id: 'gemini', name: 'Gemini', description: '구글 생태계와 완벽하게 연동되는 AI', strengths: '최강의 처리 속도, 유튜브/구글 드라이브와 즉각 연동', weaknesses: '한국어 창의성이 경쟁사 대비 약간 아쉬움', pricing: { free: '광범위', pro: '$10/월 (Google One)' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Google_Gemini_logo.svg/200px-Google_Gemini_logo.svg.png', features: ['구글연동', '초고속응답', '실시간검색'], subscribeUrl: 'https://gemini.google.com/' },
      { id: 'perplexity', name: 'Perplexity AI', description: '정확한 출처를 찾아주는 AI 검색 엔진', strengths: '검색된 정보의 출처(링크)를 정확히 명시하여 신뢰도 최상', weaknesses: '창의적인 소설 쓰기나 긴 글 작성에는 부적합', pricing: { free: '무료', pro: '$20/월' }, image: 'https://www.perplexity.ai/favicon.svg', features: ['출처제공', '심층검색', '최신정보'], subscribeUrl: 'https://www.perplexity.ai/' },
      { id: 'copilot', name: 'GitHub Copilot', description: '개발자를 위한 최강의 코딩 도우미', strengths: 'VS Code 등 에디터 내장, 압도적인 코드 자동완성', weaknesses: '코딩 외의 일반적인 대화에는 쓸 수 없음', pricing: { free: '학생 무료', pro: '$10/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/200px-Visual_Studio_Code_1.35_icon.svg.png', features: ['코드자동완성', '디버깅', '주석생성'], subscribeUrl: 'https://github.com/features/copilot' },
      { id: 'notion', name: 'Notion AI', description: '문서 작업의 끝판왕, 노션 내장 AI', strengths: '작업 중인 문서 안에서 바로 텍스트를 다듬고 요약 가능', weaknesses: '단독 챗봇 형태가 아니라서 범용 질문에는 약함', pricing: { free: '제한적', pro: '$8/월 (노션 사용자)' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Notion-logo.svg/200px-Notion-logo.svg.png', features: ['문서요약', '표만들기', '글다듬기'], subscribeUrl: 'https://www.notion.so/product/ai' }
    ]
  },
  {
    id: 'presentation', name: '📊 PPT / 기획안 생성', description: '주제만 입력하면 알아서 슬라이드와 문서를 만들어주는 AI',
    services: [
      { id: 'gamma', name: 'Gamma', description: '웹 기반의 초고속 PPT 생성 AI', strengths: '텍스트만 치면 1분만에 완성, 모바일에서도 보기 편한 UI', weaknesses: 'PPTX 변환 시 폰트나 디테일이 깨질 수 있음', pricing: { free: '가입시 크레딧', pro: '$20/월' }, image: 'https://www.gamma.app/favicon.ico', features: ['초고속생성', '예쁜디자인', '웹공유'], subscribeUrl: 'https://gamma.app/' },
      { id: 'beautiful', name: 'Beautiful.ai', description: '디자인 감각이 없어도 예쁘게 정렬해주는 AI', strengths: '사용자가 망쳐놔도 알아서 레이아웃을 예쁘게 자동 정렬', weaknesses: '무료 플랜이 빈약하고 한글 폰트 지원이 아쉬움', pricing: { free: '없음', pro: '$12/월' }, image: 'https://beautiful.ai/favicon.ico', features: ['자동레이아웃', '차트디자인', '팀협업'], subscribeUrl: 'https://www.beautiful.ai/' },
      { id: 'tome', name: 'Tome', description: '스토리텔링 중심의 프레젠테이션 제작', strengths: '하나의 이야기를 풀어가듯 자연스러운 장표 구성과 이미지 생성', weaknesses: '세밀한 위치 조정 등 디자인 자유도가 낮음', pricing: { free: '가입 크레딧', pro: '$16/월' }, image: 'https://tome.app/favicon.ico', features: ['스토리텔링', '자동이미지매칭', '모바일최적화'], subscribeUrl: 'https://tome.app/' }
    ]
  },
  {
    id: 'image', name: '🎨 이미지 / 영상 생성', description: '명령어로 실사 사진, 일러스트, 영상을 만들어내는 AI',
    services: [
      { id: 'midjourney', name: 'Midjourney', description: '압도적인 퀄리티의 이미지 생성 AI', strengths: '실사, 예술, 애니메이션 등 현존 최고의 이미지 디테일', weaknesses: '디스코드(Discord)를 통해서만 써야 해서 접근성이 낮음', pricing: { free: '없음', pro: '$10/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.svg/200px-Midjourney_Emblem.svg.png', features: ['극강의퀄리티', '다양한화풍', '세밀한조정'], subscribeUrl: 'https://www.midjourney.com/' },
      { id: 'dalle', name: 'DALL-E 3', description: '챗GPT 안에서 쉽게 그리는 AI', strengths: '대화하듯 쉽게 수정 가능, 긴 명령어의 뜻을 가장 잘 이해함', weaknesses: '미드저니에 비해 질감이나 실사 느낌이 약간 떨어짐', pricing: { free: '제한적', pro: '$20/월 (GPT Plus)' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/200px-ChatGPT_logo.svg.png', features: ['대화형수정', '쉬운사용법', '텍스트삽입'], subscribeUrl: 'https://openai.com/dall-e-3/' },
      { id: 'stablediffusion', name: 'Stable Diffusion', description: '전문가용 오픈소스 이미지 생성 AI', strengths: '내 컴퓨터에서 무료로 무제한 생성 가능, 완벽한 커스터마이징', weaknesses: '고성능 그래픽카드가 필요하며, 초기 세팅이 아주 어려움', pricing: { free: '완전 무료 (로컬)', pro: '클라우드 비용' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Stable_Diffusion_logo.svg/200px-Stable_Diffusion_logo.svg.png', features: ['오픈소스', '캐릭터유지', '포즈지정'], subscribeUrl: 'https://stability.ai/' },
      { id: 'runway', name: 'Runway (Gen-2)', description: '사진과 텍스트를 움직이게 만드는 비디오 AI', strengths: '특정 부분만 움직이게 하는 기능(모션 브러시) 등 영상 기능 탁월', weaknesses: '비용이 비싸고 한 번에 긴 영상을 만들기 힘듦', pricing: { free: '무료 크레딧', pro: '$15/월' }, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Runway_%28software%29_logo.svg/200px-Runway_%28software%29_logo.svg.png', features: ['텍스트투비디오', '모션브러시', '영상합성'], subscribeUrl: 'https://runwayml.com/' }
    ]
  },
  {
    id: 'audio', name: '🎵 음성 / 음악 생성', description: '텍스트를 노래나 성우 목소리로 바꿔주는 AI',
    services: [
      { id: 'suno', name: 'Suno AI', description: '가사와 장르만 넣으면 완벽한 노래가 나오는 AI', strengths: '보컬 품질이 소름 돋게 좋으며 한국어 가사도 자연스러움', weaknesses: '노래 길이나 중간 수정 등 세밀한 컨트롤이 어려움', pricing: { free: '매일 50크레딧', pro: '$8/월' }, image: 'https://suno.com/favicon.ico', features: ['고퀄리티보컬', '다양한장르', '빠른생성'], subscribeUrl: 'https://suno.com/' },
      { id: 'elevenlabs', name: 'ElevenLabs', description: '세계 최고 수준의 AI 성우 더빙 서비스', strengths: '로봇 같지 않은 진짜 사람 같은 감정 표현과 억양', weaknesses: '무료 버전은 글자 수 제한이 빡빡하고 상업적 이용 불가', pricing: { free: '1만자/월', pro: '$5/월' }, image: 'https://elevenlabs.io/favicon.ico', features: ['극강의자연스러움', '다국어지원', '목소리복제'], subscribeUrl: 'https://elevenlabs.io/' }
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
            <img src="${service.image}" alt="${service.name}" class="service-image" onerror="this.src='https://via.placeholder.com/150?text=AI+Logo'"/>
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
  catSelect.innerHTML = '<option value="">분야를 선택하세요</option>';
  aiCategories.forEach(cat => {
    catSelect.innerHTML += `<option value="${cat.id}">${cat.name}</option>`;
  });

  catSelect.addEventListener('change', (e) => {
    const catId = e.target.value;
    resultContainer.style.display = 'none'; 
    
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

  slot1.addEventListener('change', renderComparison);
  slot2.addEventListener('change', renderComparison);
}

// 3. 두 AI 직접 비교 렌더링
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

  resultContainer.innerHTML = `
    <div class="compare-grid">
      <div class="compare-box">
        <img src="${ai1.image}" alt="${ai1.name}" onerror="this.src='https://via.placeholder.com/150?text=AI+Logo'">
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

      <div class="compare-box">
        <img src="${ai2.image}" alt="${ai2.name}" onerror="this.src='https://via.placeholder.com/150?text=AI+Logo'">
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
      <p style="margin:0 0 0.5rem 0;"><strong>무료 지원:</strong> ${service.pricing.free}</p>
      <p style="margin:0; font-size:1.1rem; color:#f87171;"><strong>유료 플랜:</strong> ${service.pricing.pro}</p>
    </div>
    <div style="margin-bottom: 1.5rem;">
      <h5 style="color: #34d399; margin: 0 0 0.5rem 0;">🟢 가장 큰 장점</h5>
      <p style="color: var(--muted); font-size: 0.9rem;">${service.strengths}</p>
    </div>
    <div style="margin-bottom: 1.5rem;">
      <h5 style="color: #fbbf24; margin: 0 0 0.5rem 0;">🔴 아쉬운 점</h5>
      <p style="color: var(--muted); font-size: 0.9rem;">${service.weaknesses}</p>
    </div>
    <a href="${service.subscribeUrl}" target="_blank" class="primary-btn" style="display:block; text-align:center;">공식 사이트 가기</a>
  `;
  modalOverlay.classList.add('open');
}

// 모달 및 메뉴 닫기 로직
document.getElementById('close-modal').addEventListener('click', () => modalOverlay.classList.remove('open'));
modalOverlay.addEventListener('click', (e) => { if(e.target === modalOverlay) modalOverlay.classList.remove('open'); });

const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => { mainNav.classList.toggle('open'); });
  mainNav.querySelectorAll('a').forEach(link => { link.addEventListener('click', () => mainNav.classList.remove('open')); });
}

document.getElementById('subscription-btn').addEventListener('click', () => {
  document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
});

// 테마 토글 기능
function initTheme() {
  const themeSwitch = document.getElementById('theme-switch');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  // 초기 테마 설정
  setTheme(savedTheme);
  themeSwitch.checked = savedTheme === 'light';
  
  // 토글 이벤트 리스너
  themeSwitch.addEventListener('change', (e) => {
    const theme = e.target.checked ? 'light' : 'dark';
    setTheme(theme);
    localStorage.setItem('theme', theme);
  });
}

function setTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

// 실행
renderAIServices();
setupCompareOptions();
initTheme();