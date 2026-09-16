const CONTENT = `
[@image: images/sample1.png]

# セクション1: はじめに

ここにテキストを記述します。左ペインにこのテキストが表示され、右ペインには対応する画像（images/sample1.png）が表示されます。

スクロールして次のセクションが画面に表示されると、右側の画像が自動的に切り替わります。

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

[@image: images/sample2.png]

# セクション2: 詳細説明

このセクションが表示されると、右側の画像が images/sample2.png に切り替わります。

画像はマウスホイールで拡大・縮小でき、ドラッグで表示位置を移動できます。

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

[@image: images/sample3.png]

# セクション3: まとめ

最後のセクションです。対応する画像は images/sample3.png です。

テキストファイルの任意の位置に [@image: パス] タグを挿入することで、そのテキスト位置から次のタグまでの範囲に対応する画像を指定できます。

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
`;
