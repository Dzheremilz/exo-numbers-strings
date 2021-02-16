const msg = `Je suis le ténébreux, - le veuf, - l'inconsolé,
Le prince d'Aquitaine à la tour abolie :
Ma seule étoile est morte, - et mon luth constellé
Porte le soleil noir de la Mélancolie.

Dans la nuit du tombeau, toi qui m'as consolé,
Rends-moi le Pausilippe et la mer d'Italie,
La fleur qui plaisait tant à mon cœur désolé,
Et la treille où le pampre à la rose s'allie.

Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?
Mon front est rouge encor du baiser de la reine ;
J'ai rêvé dans la grotte où nage la sirène...

Et j'ai deux fois vainqueur traversé l'Achéron ;
Modulant tour à tour sur la lyre d'Orphée
Les soupirs de la sainte et les cris de la fée.`
const regex = /[aàeéêèiouùyœ]/g

const result = msg.toLowerCase().match(regex)
console.log(`Il y a ${result.length} voyelles dans ce texte`)

let x = 0
const vowel = ['a', 'à', 'e', 'é', 'è', 'ê', 'i', 'o', 'u', 'ù', 'y', 'œ']

for (let i = 0; i < msg.length; i++) {
  if (vowel.includes(msg[i].toLowerCase()))
    x++
}

console.log(`Il y a ${x} voyelles dans ce texte`)