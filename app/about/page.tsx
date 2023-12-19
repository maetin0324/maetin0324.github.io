import './profile.css';

export default function About() {
  return (
    <div className="my-0 mx-auto max-w-xl text-center font-zenkaku md:grid-cols-1">
      <div className="flex justify-center">
        <img src="/maetin.jpg" alt="maetin" className="w-28 h-28 rounded-full" />
      </div>
      <div className="mx-8">
        <p className="text-4xl text-slate-700  mt-8">maetin</p>
        <p className="text-xl text-gray-500 mt-2">プロフィール</p>
      </div>
      <div className="profile-detail">
        <div>
          <h2>経歴</h2>
          <ul>
            <li>筑波大学 情報学群情報科学類 (2021/04 ~ )</li>
            <li>筑波大学HPCS研究室 システムソフトウェアチーム(2023/12 ~ )</li>
            <li>株式会社emostyle エンジニアインターン(2023/10 ~ )</li>
            <li>Sansan株式会社 就業型エンジニアインターン(2023/08 ~ 2023/09)</li>
            <li>WORD編集部 (2023/06 ~)</li>
            <li>株式会社Techouse エンジニアインターン(2022/08 ~ 2023/06)</li>
            <li>学内イベント掲示板サービス Weego 開発 (2021/12 ~ 2022/08) </li>
            <li>Haitlab 6期生 (2021/08 ~ 2021/09)</li>
            <li>私立芝高校 (2018/04 ~ 2021/03)</li>
          </ul>
        </div>
        <div>
          <h2>できること</h2>
          <ul>
            <li>
              大学に入ってからプログラミング学習をはじめ、Python,
              Rubyなどを中心にシステムプログラムなど色々なことに手を伸ばしています
            </li>
            <li>Ruby on Railsをフルスタックフレームワークとして用いた実務経験が一年ほどあります</li>
            <li>Git, GitHubのbranch操作やPR, review, mergeなどは一通りできます</li>
            <li>大学の授業でLinuxのカーネルハックをやったため多少Linuxが分かります</li>
            <li>自宅にRasberry pi 4Bを利用したWireguard VPNとnas(4TB)を構築しています</li>
            <li>
              触ったことのある言語は習熟度順に以下の通りです
              <ul>
                <li>Ruby</li>
                <li>Python</li>
                <li>JavaScript, Typescript</li>
                <li>HTML, Sass CSS, Tailwind CSS</li>
                <li>C</li>
                <li>React, Next.js</li>
                <li>C#</li>
                <li>Go</li>
                <li>Rust</li>
              </ul>
            </li>
            <li>英語はドキュメント解読程度ならできます</li>
          </ul>
        </div>
        <div>
          <h2>資格等</h2>
          <ul>
            <li>応用情報技術者試験 合格</li>
            <li>普通自動車免許（眼鏡等）</li>
            <li>普通自動二輪免許（眼鏡等）</li>
          </ul>
        </div>
        <div>
          <h2>興味があること</h2>
          <ul>
            <li>カーネルなどの低レイヤ開発、仮想化技術</li>
            <li>プロトコルスタック自作</li> 
            <li>言語処理系の自作</li>
            <li>Rustを用いた開発</li>
            <li>自宅ネットワークの構築</li>
            <li>最新のWeb技術、フレームワークを触る</li>
            <li>etc...</li>
          </ul>
          <p>興味がありやってみたいことに対して能力が全く追いつかず、困っています</p>
        </div>
        <div>
          <h2>趣味</h2>
          <ul>
            <li>プログラミングをやったりやらなかったりします</li>
            <li>バイクは走ると風を感じれたり、体を傾けると曲がれたりするので面白いです。 現在はSuzukiのGSX-S125に乗っています</li>
            <li>Yuta ImaiやMassive New KrewなどのHardstyle composerのクラブイベントに行きます</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
