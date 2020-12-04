This repo describes a bug when ENV variables are not present in Next.js app while cypress unit testing.

How to reproduce:
- run `npm i`
- run `npm start`
- open http://localhost:3000 in browser, you'll see the "→ I AM NEXT_PUBLIC_VAR ←"
- run comp.spec.js test, you'll see just "→ ←" which means .env file is ignored during test
