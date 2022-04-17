import { JobPost } from '../types/common';
import { getDate } from '../utills';

export const getMockPosts = (): JobPost[] => [
  {
    id: Date.now(),
    title: 'Junior Frontend 개발자',
    description: desc,
    applicants: 0,
    created_at: getDate(),
  },
  {
    id: Date.now(),
    title: 'Junior Backend 개발자',
    description: desc,
    applicants: 0,
    created_at: getDate(),
  },
];

const desc = `웹 기술을 통해 사용자들에게 가치를 전달하는 서비스를 만들고 있습니다.


주요업무

- Web Frontend 개발
- 백오피스 UI/UX 개발
- 운영 중인 Web Application 의 유지보수 및 관리


자격요건

- Frontend 개발 경력 3년 이상
- Javascript (ES6+), HTML5 및 CSS3 (SCSS) 사용 가능한 분
- SPA (React) 개발 및 운영 경력
- Webpack 등 Module Bundler 에 대한 지식이 있는 분
- Cross Browsing Issue 해결 능력
- 논리적/단계적으로 원활한 의사소통이 가능한 분


우대사항

- 정보처리기사 자격증 소지한 분
- Frontend 기반의 테스트 진행 경험이 있는 분
- Full Javascript Web Application 설계 및 개발 경험자
- 웹 표준/접근성을 고려한 개발에 경험이 있는 분
- GIT 협업 사용 경험이 있는 분
- 코드 성능 개선 등 지속적인 성장을 추구하는 분`;
