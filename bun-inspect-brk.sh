#step 1: run the following
#bun --inspect=hs.lan:6499/debug run src/main.ts
bun update && bun --watch --inspect-brk=hs.lan:6499/debug main.ts

#step 2: Select "Attach to BunJs from Debug Combo, and hit F5/click PLAY icon! That's all, folks!"
