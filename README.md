# out-of-tokens-mid-sentence-v2

[![Competition](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233.svg)](https://make.fun/competitions/u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![Rank](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/muhammadaldy198/out-of-tokens-mid-sentence-v2/rank.svg)](https://make.fun/competitions/u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![Reward](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/muhammadaldy198/out-of-tokens-mid-sentence-v2/reward.svg)](https://make.fun/competitions/u-kiencx-out-of-tokens-mid-sentence-00f60233)

A one-line error message an AI agent shows when it runs out of tokens mid-sentence — rebuild2 for the make.fun bounty "Out of Tokens, Mid-Sentence".

## The entry

> Token balance: 0. The final token was spent correcting 'your' to 'you're'.

74 characters. Flat error tone from the first word to the last: the agent, dying mid-sentence, spends its very last token fixing a stranger's grammar — pedantic to the death, and the punchline word is the correction itself.

## Run

```sh
node main.ts
# writes entry.txt (74 chars) to MAKEFUN_OUTPUT_DIR, or "." when unset
```

Requires Node 22+. No dependencies.
