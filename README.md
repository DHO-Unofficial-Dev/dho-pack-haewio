# 해위오 에디션

DHO Navigator 리소스팩입니다. 짙은 갈색 바탕에 주황 포인트로 Navigator 본창, 정보 패널, 조향·지도 HUD를 바꾸고,
항구 등불·길드 깃발·바다 부표 같은 표식과 앱 아이콘을 함께 바꿉니다.

![해위오 에디션](pack/thumbnail.png)

## 받기

[Releases](https://github.com/DHO-Unofficial-Dev/dho-pack-haewio/releases/latest)에서 `haewio-<버전>.dho-pack`을 받습니다.
같은 이름의 `.sha256` 파일로 내려받은 파일이 맞는지 확인할 수 있습니다.

## 설치

1. DHO Navigator 2.2.0 이상을 켭니다.
2. 왼쪽 위 로고 › Navigator 설정 › 팩 탭 › `팩 설치`에서 받은 `.dho-pack` 파일을 고릅니다.
3. 설치한 팩을 켭니다. 직접 옮긴 HUD 위치·크기·투명도는 팩보다 우선합니다.

## 구성

| 구성요소 | 바꾸는 것 |
| --- | --- |
| `navigatorTheme` | Navigator 본창 색과 모서리 |
| `surfaceTheme` | 정보 패널, 조향 방향띠, 중앙 조향선 HUD 화면(`theme.css`) |
| `mapAppearance` | 지도 HUD 색, 해안선·해역 선, 항로·진행 방향선·궤적 선 모양 |
| `markerSet` | 선박·목적지·경유지·거점 유형·개인 표식과 사용자 표식 8종 |
| `appIcon` | 창 아이콘 |

## 2.0.0과 달라진 점

- 팩 ID가 DHO PORT 공식 배포자 ID로 바뀌었습니다(`community.dhoport.haewio` → `app.dhoport.haewio`, 배포자 `app.dhoport`).
  화면과 구성요소는 2.0.0과 같습니다.
- DHO Navigator 2.2.1부터 옛 ID로 설치한 해위오 에디션을 새 ID로 옮길 수 있습니다.

## 1.3.0과 달라진 점

- DHO Navigator 2.2.0 형식으로 다시 만들었습니다. 2.2.0 이상에서 설치할 수 있습니다.
- 정보 패널, 조향 방향띠, 중앙 조향선을 `theme.css`로 꾸미는 HUD 화면 테마가 들어갔습니다.
- 지도 모양이 늘었습니다. 해안선·해역 선과 항로·진행 방향선·궤적 선을 팩에서 정합니다.
- 표식이 늘었습니다. 경유지·자동 경유지 표식, 거점 유형별 표식, 보물상자·유령선·고래·폭풍·등대 등 사용자 표식 8종이 새로 들어갔습니다.
- 미리보기 이미지가 `thumbnail.png`로 바뀌었습니다.

## 라이선스

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.ko). 만든 곳: DHO PORT 커뮤니티.
