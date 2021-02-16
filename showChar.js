const msg = 'C\'était à Mégara, faubourg de Carthage, dans les jardins d\'Hamilcar.'

console.log(`Salammbô de Gustave Flaubert (1862)\nCette phrase contient ${msg.length} caractères`)
for (let i = 0; i < msg.length; i++) {
  console.log(`Le caractère ${msg[i]} est à l'index ${i}`)
}