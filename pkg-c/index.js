if (!/pnpm/.test(process.env.npm_execpath || '')) {
    console.log('pkg-c pre others ', process.env.npm_execpath)
}else {
    console.log('pkg-c pre pnpm ', process.env.npm_execpath)
}