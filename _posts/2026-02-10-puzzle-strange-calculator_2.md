---
title: 이상한 계산기 2
date: 2026-02-10 09:19
categories: [Puzzle]
tags: [puzzle, strategy]
description: 다시 찾아온 악마와의 내기
math: true
# image:
# path: /assets/img/2024-12-11/preview_arrows.png
---

## 문제

[이상한 계산기 1](https://shortcake.kr/posts/puzzle-strange-calculator_1/)

$$\sin$$, $$\cos$$, $$\tan$$, $$\arcsin$$, $$\arccos$$, $$\arctan$$ 버튼과 디스플레이가 있는 계산기가 있다.

디스플레이에는 처음에 $$0$$ 이 표시되어 있으며, 버튼을 누르면 그 함수가 디스플레이에 있는 수에 적용된다.

놀랍게도 이 계산기는 악마의 기술을 사용해서 계산 과정에서 오차가 발생하지 않는다.


당신은 이 계산기로 악마와 내기를 한다.

악마는 아무 양의 유리수를 말한다. 당신은 디스플레이에 표시된 수가 악마가 말한 수와 같도록 만들면 이긴다.


내기에서 항상 이길 수 있을까?

## 풀이

<details markdown="1">

항상 이길 수 있다.

우선 $$\cos(0)$$으로 $$1$$을 만들 수 있다.

현재 값이 $$\sqrt{a/b}$$ 인 경우

- $$\arctan$$, $$\cos$$ 을 누르면 $$\sqrt{b/(a+b)}$$

- $$\arctan$$, $$\sin$$ 을 누르면 $$\sqrt{a/(a+b)}$$

- $$\arctan$$, $$\cos$$, $$\arcsin$$, $$\tan$$ 을 누르면 $$\sqrt{b/a}$$

를 만들 수 있다.

유클리드 호제법에 의해 당신은 아무 $$\sqrt{a/b}$$, ($$a$$, $$b$$는 서로소인 자연수)를 만들 수 있음이 보장된다. [1편 참고](https://shortcake.kr/posts/puzzle-strange-calculator_1/)

따라서 임의의 양의 유리수 $$\sqrt{a^{2} / b^{2}} = a/b$$를 만들 수 있다.

</details>