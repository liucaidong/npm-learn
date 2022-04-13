if (!/pnpm/.test(process.env.npm_execpath || '')) {
    console.log('pkg-b pre others ', process.env.npm_execpath)
}else {
    console.log('pkg-b pre pnpm ', process.env.npm_execpath)
}