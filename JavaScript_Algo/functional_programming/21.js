function urlSlug(title) {
    // 正規表現を使用してスペースをハイフンに置き換え、小文字に変換
    const slug = title
      .split(' ') // スペースで文字列を分割
      .filter(word => word !== '') // 空の要素を除去
      .map(word => word.toLowerCase()) // 小文字に変換
      .join('-'); // ハイフンで単語をつなげる
    return slug;
}
// この行の上にあるコードのみを変更
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
urlSlug(" Winter Is  Coming");