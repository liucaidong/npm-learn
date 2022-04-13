if (!/pnpm/.test(process.env.npm_execpath || '')) {
    console.log('pkg-a pre others ', process.env.npm_execpath)
}else {
    console.log('pkg-a pre pnpm ', process.env.npm_execpath)
}