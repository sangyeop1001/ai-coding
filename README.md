# ShopNova 쇼핑몰 프로젝트

이 프로젝트는 간단한 쇼핑몰 스타일의 웹 페이지로 작성되었습니다. GitHub Pages를 사용해 배포하면 웹 브라우저에서 바로 열 수 있습니다.

## 배포 방법

1. GitHub에 새 저장소를 만듭니다.
2. 로컬 폴더(`index.html`, `styles.css`, `script.js`)를 저장소에 커밋합니다.
3. GitHub 저장소에 푸시합니다.

```bash
git init
git add .
git commit -m "Initial shopping site"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

4. GitHub 저장소의 `Settings` > `Pages`로 이동합니다.
5. `Branch`를 `main`, `Folder`를 `/ (root)`로 선택하고 저장합니다.
6. 잠시 기다리면 페이지가 활성화됩니다.

## 사이트 주소 예시

- `https://your-username.github.io/your-repo/`

## 파일 설명

- `index.html` - 메인 페이지 구조
- `styles.css` - 반응형 스타일
- `script.js` - 장바구니 기능 및 모바일 메뉴

## 수정 포인트

- `README.md`의 `your-username`과 `your-repo`를 실제 GitHub 사용자명과 저장소명으로 변경하세요.
- 배포 후 `footer`의 링크도 실제 GitHub 저장소 URL과 GitHub Pages URL로 변경하면 좋습니다.
