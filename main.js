
const oneBaks = 40.5;
let wallet = '';
for (let i = 10; i <= 100; i = i + 10) {

    wallet += `${'('}${i}${'$'}${' буде:'}${oneBaks * i}${'UA'}${')'}${'-'}`

}
console.log(wallet);