import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About',
}

export default function Content() {
  return (
    <main>
      <h1>About</h1>

      <h2>Me</h2>

      <p>
        天狗(PN)。SKD、Tengu712とも。
        <br />
        東京理科大学創域理工学部情報計算科学科四年生。
      </p>

      <h2>Interests</h2>

      <ul>
        <li>言語/言語処理系</li>
        <li>CG</li>
        <li>
          弾幕STG
          <ul>
            <li>東方紅魔郷</li>
            <li>怒首領蜂大復活</li>
          </ul>
        </li>
      </ul>
      
      <h2>Activities</h2>
      
      <ul>
        <li>開発</li>
        <li>絵描き</li>
        <li>物書き</li>
      </ul>

      <h2>Links</h2>

      <ul>
        <li>Homepage: <a href="https://skdassoc.com/">天狗会議録</a></li>
        <li>X(Twitter): <a href="https://twitter.com/Tengu_s_Note">@Tengu_s_Note</a></li>
        <li>GitHub: <a href="https://github.com/Tengu712">Tengu712</a></li>
        <li>YouTube: <a href="https://www.youtube.com/@tengu7123">Tengu712</a></li>
        <li>Pixiv: <a href="https://www.pixiv.net/users/61835668">61835668</a></li>
      </ul>
    </main>
  )
}