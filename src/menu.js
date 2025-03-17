export function loadMenu() {
    const content = document.querySelector('#content');

    const title = document.createElement('h1');
    title.textContent = 'Menu';

    const drink1 = document.createElement('div');
    drink1.classList.add('drink1');
    const drink1Title = document.createElement('h2');
    drink1Title.textContent = 'Uji Ceremonial Matcha (宇治抹茶 – Uji Matcha) – ¥780';
    const drink1Desc = document.createElement('p');
    drink1Desc.textContent = 'A pure, traditional matcha experience. Sourced from the finest tea fields in Uji, Kyoto, this hand-whisked ceremonial-grade matcha is smooth, umami-rich, and naturally sweet with a delicate finish. Served in a handcrafted ceramic bowl for a truly immersive tea moment.';
    drink1.appendChild(drink1Title);
    drink1.appendChild(drink1Desc);

    const drink2 = document.createElement('div');
    drink2.classList.add('drink2');
    const drink2Title = document.createElement('h2');
    drink2Title.textContent = 'Matcha Honey Latte (抹茶ハニ―ラテ – Matcha Hachimitsu Latte) – ¥850';
    const drink2Desc = document.createElement('p');
    drink2Desc.textContent = 'A velvety matcha latte infused with raw Japanese honey for a hint of natural sweetness. The balance of earthy matcha and floral honey creates a comforting yet refined flavor profile, topped with delicate matcha foam.';
    drink2.appendChild(drink2Title);
    drink2.appendChild(drink2Desc);

    const drink3 = document.createElement('div');
    drink3.classList.add('drink3');
    const drink3Title = document.createElement('h2');
    drink3Title.textContent = 'Yuzu Matcha Fizz (柚子抹茶フィズ – Yuzu Matcha Fizz) – ¥900';
    const drink3Desc = document.createElement('p');
    drink3Desc.textContent = 'A refreshing twist on matcha, this sparkling drink combines the bright citrus notes of fresh yuzu with the deep green tea richness of matcha. Lightly sweetened with organic cane sugar and finished with a sprig of mint, it’s the perfect uplifting sip.';
    drink3.appendChild(drink3Title);
    drink3.appendChild(drink3Desc);

    const drink4 = document.createElement('div');
    drink4.classList.add('drink4');
    const drink4Title = document.createElement('h2');
    drink4Title.textContent = 'Dark Chocolate Matcha Affogato (抹茶アフォガート – Matcha Affogato) – ¥950';
    const drink4Desc = document.createElement('p');
    drink4Desc.textContent = 'An indulgent fusion of East and West—bold ceremonial matcha poured over a scoop of silky Hokkaido milk gelato, topped with dark chocolate shavings. The warm matcha melts into the ice cream, creating a luxurious harmony of bitter, sweet, and creamy textures.';
    drink4.appendChild(drink4Title);
    drink4.appendChild(drink4Desc);

    const drink5 = document.createElement('div');
    drink5.classList.add('drink5');
    const drink5Title = document.createElement('h2');
    drink5Title.textContent = 'Sakura Matcha Latte (桜抹茶ラテ – Sakura Matcha Latte) – ¥880';
    const drink5Desc = document.createElement('p');
    drink5Desc.textContent = 'A seasonal delight blending premium matcha with delicate sakura (cherry blossom) syrup for a floral, slightly sweet taste. This pastel green-and-pink latte is a visual and sensory treat, finished with a dusting of sakura petals.';
    drink5.appendChild(drink5Title);
    drink5.appendChild(drink5Desc);

    content.appendChild(title);
    content.appendChild(drink1);
    content.appendChild(drink2);
    content.appendChild(drink3);
    content.appendChild(drink4);
    content.appendChild(drink5);
}