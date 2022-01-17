$(document).ready(function () {
  function score_indicate() {
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];
    let sum = 0;
    for(let i=0; i < subject_points.length; i++){
      sum += subject_points[i]
    }

    $("#sum_indicate").text(sum);
    let average = sum / (subject_points.length);
    $("#average_indicate").text(average);
  };

  function get_achievement() {
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)

    if (averageIndicate >= 80) {
      return "A";
    }
    else if(averageIndicate >= 60) {
      return "B";
    }
    else if(averageIndicate >= 40) {
      return "C";
    }
    else{
      return "D";
    }
    function get_add(){}
    return get_add
  };
  // 各教科の点数を取得し、取得した点数から「合格、不合格」の判断を下すロジックを作ります。
  function get_pass_or_failure() {

    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];
    let number = subject_points.length;
    let judge = "合格";
    for (let i = 0; i <number; i++){
      if (subject_points[i] < 60) {
        judge = "不合格";
        break;
      }
    }
    return judge;
  };


  // 最終的なジャッジのロジックを作ります。
  function judgement() {
    // 変数「achievement」に「get_achievement()の戻り値」を代入します。
    let achievement = get_achievement();
    // 変数「pass_or_failure」に「get_pass_or_failure()の戻り値」を代入します。
    let pass_or_failure = get_pass_or_failure();
    // 「最終ジャッジ」(id="alert-indicate)ボタンを押したら「あなたの成績は${achievement}です。${pass_or_failure}です。」が出力される処理です。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です。</label>`);
  };
  // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]のいずれかの点数が変更された際に「function score_indicate()」を発火させる処理です。
  $('#national_language, #english, #mathematics, #science, #society').change(function () {
    score_indicate();
  });
  // 「ランク」(id="evaluation")ボタンを押したら「get_achievement()」が出力される処理です。
  $('#btn-evaluation').click(function () {
    $("#evaluation").text(get_achievement());
  });
  // 「判定」(id="btn-judge")ボタンを押したら「function et_pass_or_failure()」が出力される処理です。
  $('#btn-judge').click(function () {
    $("#judge").text(get_pass_or_failure());
  });
  // 「最終ジャッジ」(id="btn-declaration")ボタンが押された際、「function judgement()」の処理を実行させる。
  // ２回目以降に「最終ジャッジ」ボタンを押した際は、それまでに表示していたジャッジのHTML要素を削除して、新たなジャッジのHTML要素を追加する。
  // ヒント：removeメソッドについて調べてみましょう。
  $('#btn-declaration').click(function () {
    $('#alert-indicate').remove();
    $("#evaluation").text(get_achievement());
    $("#judge").text(get_pass_or_failure());
    judgement();
  });
});