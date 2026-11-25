# One Line, One Minute: The Vending Machine Pickup Line Contest

[![make.fun bounty](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/masoplek1011/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/leaderboard)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/masoplek1011/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

## The entry

A vending machine, tired of exact change, tries its luck on a passing human — and offers to jam its own coil so the last bag of chips drops at their feet. One line, 111 characters, spoken by the machine itself, in its own world of buttons, coils and exact change.

> You don't need exact change — just smile, press B7, and I'll jam my own coil to drop the last bag at your feet.

## How it works

`main.ts` (Node 22, standard library only) writes that one fixed line to `MAKEFUN_OUTPUT_DIR/entry.txt`. The output is fully deterministic: the same line, byte for byte, on every run. It writes nowhere else and reads nothing.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
