import 'katex/dist/katex.min.css'

import { Quoteblock } from "@/app/_components/quoteblock"

import { Metadata } from "next"
import { InlineMath } from "react-katex"

export const metadata: Metadata = {
  title: '『なめらかな宇宙と、その敵。』解説',
}

export default function Content() {
  return (
    <main>
      <h1>『なめらかな宇宙と、その敵。』解説</h1>

      <hr />

      <p>
        <i>当記事は、2023年9月3日の第十二回科学世紀のカフェテラスにて頒布した秘封倶楽部の二次創作の同人誌『なめらかな宇宙と、その敵。』の解説です。</i>
      </p>

      <h2>すべてのまえに</h2>

      <p>
        物語のあらすじは<b>メリーが蓮子を探す話</b>以外の何物でもありません。
        また、この作品の意義は<b>二次創作って、もとい創作ってなんだろうね</b>という問題提起に他ならず、かつ解答は示していません。
      </p>

      <p>
        以降、この作品の解説ではなく、作中の表現について解説します。
        これらは、読む上では<b>絶対にわからないように</b>意図しているので、作品のコンテンツには含まれません。
        あくまで裏話・あるいはエンドコンテンツとしてお楽しみください。
      </p>

      <h2>パロディ</h2>

      <p>
        まず、パロディ元について端的に説明します。
        パロディ元は、言わずもがな『なめらかな社会とその敵』と『なめらかな世界と、その敵』です。
      </p>

      <p>
        鈴木健『なめらかな社会とその敵』は【なめらかな社会】を実現するための手法を提示する社会学書です。
        この本では、多くのものが【膜】によってリソースを独占し、【核】によって膜内を制御する、という自然の体系が解説されています。
        この体系が特に、参考として今作に登場します。
      </p>

      <p>
        また、伴名練『なめらかな世界と、その敵』は、異なる世界を移り続ける人々と、その能力を有さない者の話を描いたSF小説です。
        叙述のみの表現であるからこそ、ごく自然に、しかし矛盾する情景描写を行っているのが特徴的です。
        この矛盾する情景描写が特に、参考として今作に登場します。
      </p>

      <p>
        パロディ元とはなっていませんが、強く影響を受けた作品として、おゆうち『律する魔術師のリミト』があります。
        こちらは東方の二次創作で、とにかく漫画的叙述の穴を突いたカオスでナンセンスな展開が続きますが、最終的に全体を貫くテーマに収束する作品です。
        ぶっちゃけこの作品が凄すぎてぼくの作品は要らないんじゃないかと何度も筆を折りそうになりました。
      </p>

      <h2>全体解説</h2>

      <p>
        さて、今作の『なめらかな宇宙と、その敵。』は、「<b>蓮子とメリーが世界を平和にする方法について討論し、メリーがそれを完成の寸前まで実現するが、蓮子を想って拒絶する</b>、という内容の秘封倶楽部二次創作漫画」が真の姿となります。
        従って、以下の三つが着目点となります。
      </p>

      <ol>
        <li>蓮子とメリーの思想はいかなるか</li>
        <li>メリーはどのように思想を実現したか</li>
        <li>なぜメリーは完成を拒絶したか</li>
      </ol>

      <h3>なめらかな宇宙</h3>

      <p>
        今作に登場する「宇宙」とは、星が浮かび、銀河が浮かび、今も広がっているとかいう宇宙(Space)のことではありません。
        数学における「宇宙(Universe)」のことです。
      </p>

      <p>
        宇宙は「議論領域(Domain of Discourse)」とも言われます。
        厳密な定義はなく、議論中に登場しうるすべての実体の集合とされています。
        ZFC公理系を知っている方なら、以下によって構成される<InlineMath>V</InlineMath>が「ZFC各公理が成立する宇宙」であると言われて納得できるでしょう。
      </p>

      <Quoteblock cite="Def. von Neumann hierarchy of sets">
        <>
          <p>
            順序数<InlineMath>\alpha</InlineMath>について、以下の三つを満たすような<InlineMath>V_\alpha</InlineMath>を累積的階層と言う。
            ただし、<InlineMath>{'\\mathcal{P}(X):=2^X, X'}</InlineMath>は集合。
          </p>
          <ol>
            <li><InlineMath>V_0:=\emptyset</InlineMath></li>
            <li>順序数<InlineMath>\beta</InlineMath>について、<InlineMath>{'V_{\\beta+1}:=\\mathcal{P}(V_\\beta)'}</InlineMath></li>
            <li>極限順序数<InlineMath>\lambda</InlineMath>について、<InlineMath>{'V_\\lambda:=\\bigcup_{\\beta<\\lambda}V_\\beta'}</InlineMath></li>
          </ol>
          <p>
            さらに、<InlineMath>V:=\bigcup_\alpha V_\alpha</InlineMath>と定義される<InlineMath>V</InlineMath>をvon Neumann階層と言う。
          </p>
        </>
      </Quoteblock>

      <p>
        <b>【なめらかな宇宙】とは、すべて要素が等価な・すべて宇宙の宇宙</b>です。
        万物があって・かつ万物が区別できない状態とでも言うべきでしょう。
        勿論、自身を要素に持たない集合も、自身が壊せない石を創り壊せる万能の神も、含まれています。
        それらが等価に交換可能であるという秩序です。
      </p>

      <h3>蓮子とメリー</h3>

      <p>蓮子とメリーはそれぞれ以下のような思想を持っています。</p>

      <ul>
        <li>
          蓮子
          <ul>
            <li>人間中心主義</li>
            <li>克服派</li>
            <li>ボトムアップ</li>
            <li>人は生来【善】である</li>
            <li>人という「個」を認める</li>
            <li>個々が「絶対的な正しさ」のもとに行動する秩序こそが世界平和</li>
          </ul>
        </li>
        <li>
          メリー
          <ul>
            <li>非人間中心主義</li>
            <li>諦観派</li>
            <li>トップダウン</li>
            <li>人は生来【悪】である</li>
            <li>あらゆる「個」を認めない</li>
            <li>争いの原因たる差異を淘汰した【なめらかな宇宙】こそが世界平和</li>
          </ul>
        </li>
      </ul>

      <p>
        秘封倶楽部を主導しているのは蓮子です。
        蓮子は個と個を見極めるもの・すなわち「境界」を探すために活動しています。
        しかし、蓮子はすべての境界が見えるわけではありません。
        そのため、秘封俱楽部を駆動しているのはメリーです。
        メリーは境界が見えるために、これを忌み嫌っています。
        それでも能力を発揮しているのは、メリーにとっても蓮子が原動力となっているからです。
      </p>

      <h3>成就と拒絶</h3>

      <p>
        メリーは【なめらかな宇宙】を手に入れるために、あらゆるものの境界を消していきます。
        この能力は流石に二次設定として受け入れてほしいのですが、理屈としては「これとこれは同じもの」という認識を持っていれば少なくとも本人にとって境界がなくなるのと同様です。
      </p>

      <p>
        最終的に、「メリー」と「メリー以外のすべて」に万物宇宙を二分することに成功します。
        あとは自身が和解すれば【なめらかな宇宙】が実現します。
        しかし、理想を目前にして、この理想が正しいか否か判断できませんでした。
        これは、判断のためには理想的でない「自分」を介す必要があるためです。
      </p>

      <p>
        メリーは、同時に「本当の蓮子」を探していました。
        万物を走査し、蓮子でなければ「なめらかな宇宙」に統合していました。
        しかし、最終的に自分だけが残り、「本当の蓮子」がいないことを知ります。
        これは蓮子だと言えるような蓮子は蓮子でないのです。
      </p>

      <p>
        結局、メリーが追い求めていたのは「矛盾」だったのです。
        正しいと断じえない絶対に正しい宇宙、本当であると断じえない本当の蓮子。
        勿論、【なめらかな宇宙】はこれら矛盾をも内包します。
        しかしメリーは、不完全であるから、そんな【なめらかな宇宙】を拒絶し、むしろ【なめらかな宇宙】へ境界を引くことによって、理想を実現することにしたのです。
      </p>

      <h2>個々解説</h2>

      <p>Under construction...</p>

      <p className="ta-right">■</p>
    </main>
  )
}