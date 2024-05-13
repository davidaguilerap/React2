para hacer un test rapido usaremos


npm init playwright@latest
√ Do you want to use TypeScript or JavaScript? · JavaScript
√ Where to put your end-to-end tests? · tests 
√ Add a GitHub Actions workflow? (y/N) · false   -contestar N
? Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) » true    contestar Y


creara dos carpetas una de test u otra test example

operamos en la de test

para echar a andar el test abriremos una consola cmd y escribimos en la ruta del proyecto
npx playwright test

en caso de que produca fallo sobre el .js es porq hay q cambiar el archivo de configuracion a .cjs
y en el archivo de test cambiamos el require por import
