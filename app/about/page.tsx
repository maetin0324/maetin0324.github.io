export default function About() {
  return (
    <div className="my-0 mx-auto max-w-4xl px-4 md:px-6 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-12 animate-slide-up">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
          <img
            src="/maetin.jpg"
            alt="maetin"
            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white dark:border-slate-800 shadow-card"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mt-8">
          maetin
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mt-2">プロフィール</p>
      </div>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {/* 経歴 */}
        <div className="card-base p-6 md:p-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-primary-500 pb-3 mb-6">
            経歴
          </h2>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>筑波大学 情報学群情報科学類 (2021/04 ~ )</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>筑波大学HPCS研究室 システムソフトウェアチーム (2023/12 ~ )</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>セキュリティキャンプ 全国大会2024 S01 WebAssemblyゼミ (2024/08)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>株式会社emostyle エンジニアインターン (2023/10 ~ )</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Sansan株式会社 就業型エンジニアインターン (2023/08 ~ 2023/09)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>WORD編集部 (2023/06 ~)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>株式会社Techouse エンジニアインターン (2022/08 ~ 2023/06)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>私立芝高校 (2018/04 ~ 2021/03)</span>
            </li>
          </ul>
        </div>

        {/* できること */}
        <div className="card-base p-6 md:p-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-accent-500 pb-3 mb-6">
            できること
          </h2>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                大学に入ってからプログラミング学習をはじめ、Rust, Ruby,
                Wasmなどを中心に色々遊んでいます
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                Ruby on Railsをフルスタックフレームワークとして用いた実務経験が二年ほどあります
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                WebAssemblyランタイムを自作したことがあり、Wasmの仕様や挙動はある程度知識があります
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Linuxカーネルソースは程々に読みます</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>自宅にRaspberry Pi 4Bを利用したWireguard VPNとNAS(4TB)を構築しています</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <span className="block mb-2">触ったことのある言語は習熟度順に以下の通りです</span>
                <div className="flex flex-wrap gap-2 ml-5">
                  {[
                    'Ruby',
                    'Rust',
                    'Python',
                    'JavaScript / TypeScript',
                    'HTML / CSS',
                    'C',
                    'React / Next.js',
                    'C#',
                    'Go',
                  ].map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-sm rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>英語はドキュメント解読程度ならできます</span>
            </li>
          </ul>
        </div>

        {/* 資格等 */}
        <div className="card-base p-6 md:p-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-primary-500 pb-3 mb-6">
            資格等
          </h2>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>応用情報技術者試験 合格</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>普通自動車免許（眼鏡等）</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>普通自動二輪免許（眼鏡等）</span>
            </li>
          </ul>
        </div>

        {/* 興味があること */}
        <div className="card-base p-6 md:p-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-accent-500 pb-3 mb-6">
            興味があること
          </h2>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Rustを用いた開発</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>非同期処理・ランタイム</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>カーネルなどの低レイヤ開発、仮想化技術</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>プロトコルスタック・言語処理系など様々を自作</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>自宅ネットワークの構築</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>etc...</span>
            </li>
          </ul>
          <p className="mt-4 text-slate-600 dark:text-slate-400 italic ml-5">
            興味がありやってみたいことに対して能力が全く追いつかず、困っています
          </p>
        </div>

        {/* 趣味 */}
        <div className="card-base p-6 md:p-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-primary-500 pb-3 mb-6">
            趣味
          </h2>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>プログラミングをやったりやらなかったりします</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                バイクは走ると風を感じれたり、体を傾けると曲がれたりするので面白いです。
                現在はSuzukiのGSX-S125に乗っています
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                Yuta ImaiやMassive New KrewなどのHardstyle composerのクラブイベントに行きます
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>しぐれういが好きです</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
