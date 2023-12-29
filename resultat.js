let personnage = document.querySelector('h2');
let description = document.querySelector('h3');
let gif = document.querySelector('img');
if (Number(localStorage.getItem('Marcel')) >= Number(localStorage.getItem('Greg')) && Number(localStorage.getItem('Marcell')) >= Number(localStorage.getItem('Carol'))) {
    personnage.innerText = `Vous êtes Marcel`;
    description.innerText = 'Marcel est un rat passionné de cuisine. Il adore expérimenter de nouvelles recettes et passer du temps en cuisine. Sa créativité culinaire le distingue, et il apprécie les moments de calme pour perfectionner ses talents de chef.';
    gif.src = 'marcel.gif';
}
else if (Number(localStorage.getItem('Greg')) >= Number(localStorage.getItem('Marcell')) && Number(localStorage.getItem('Greg')) >= Number(localStorage.getItem('Carol'))) {
    personnage.innerText = `Vous êtes Greg`;
    description.innerText = 'Greg est un rat plein d\'énergie qui aime sortir et s\'amuser. Il est sociable, toujours partant pour une fête ou une aventure en plein air. Sa personnalité dynamique et joyeuse fait de lui un compagnon idéal pour des activités en groupe.';
    gif.src = 'greg.gif';
}
else {
    personnage.innerText = `Vous êtes Carol`;
    description.innerText = 'Carol est une rat calme et réfléchie. Elle apprécie les moments tranquilles, que ce soit en lisant un livre ou en méditant. Son amour pour la littérature et sa sagesse en font une compagnie apaisante, et elle apprécie la beauté des choses simples de la vie.';
    gif.src = 'carol.gif';
}