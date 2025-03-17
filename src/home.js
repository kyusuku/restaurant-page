export function loadHome() {
    const content = document.querySelector('#content');

    const title = document.createElement('h1');
    title.classList.add('home-title');
    title.textContent = 'Matcha & Co.';

    const description = document.createElement('div');
    description.classList.add('home-description');
    const descPara = document.createElement('p');
    descPara.textContent = 'Nestled in the heart of the city, Matcha & Co. is a haven for matcha enthusiasts and newcomers alike. We specialize in authentic, high-quality Japanese matcha, sourced directly from the lush tea fields of Uji and carefully whisked to perfection. Our menu features a curated selection of matcha beverages, from velvety lattes to refreshing cold brews, alongside artisanal Japanese-inspired pastries. Designed with a serene, minimalist aesthetic, our space invites you to slow down, savor every sip, and experience the art of matcha in its purest form. Whether you’re here for a mindful moment alone or sharing a cup with friends, Matcha & Co. offers a modern take on the traditional tea ceremony—where every cup tells a story.'
    const descTitle = document.createElement('h2');
    descTitle.classList.add('descTitle');
    descTitle.textContent = "- Suku Hirosaki";
    description.appendChild(descPara);
    description.appendChild(descTitle);

    const hours = document.createElement('div');
    hours.classList.add('home-hours');
    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = 'Hours';
    const hoursSun = document.createElement('p');
    hoursSun.textContent = 'Sunday: 8am - 8pm';
    const hoursMon = document.createElement('p');
    hoursMon.textContent = 'Monday: 6am - 6pm';
    const hoursTue = document.createElement('p');
    hoursTue.textContent = 'Tuesday: 6am - 6pm';
    const hoursWed = document.createElement('p');
    hoursWed.textContent = 'Wednesday: 6am - 6pm';
    const hoursThu = document.createElement('p');
    hoursThu.textContent = 'Thursday: 6am - 10pm';
    const hoursFri = document.createElement('p');
    hoursFri.textContent = 'Friday: 6am - 10pm';
    const hoursSat = document.createElement('p');
    hoursSat.textContent = 'Saturday: 8am - 10pm';
    hours.appendChild(hoursTitle);
    hours.appendChild(hoursSun);
    hours.appendChild(hoursMon);
    hours.appendChild(hoursTue);
    hours.appendChild(hoursWed);
    hours.appendChild(hoursThu);
    hours.appendChild(hoursFri);
    hours.appendChild(hoursSat);

    const location = document.createElement('div');
    location.classList.add('home-location');
    const locationTitle = document.createElement('h2');
    locationTitle.textContent = 'Location';
    const locationDesc = document.createElement('p');
    locationDesc.textContent = '3-12-5 Jingumae, Shibuya City, Tokyo 150-0001, Japan';
    location.appendChild(locationTitle);
    location.appendChild(locationDesc);

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(hours);
    content.appendChild(location);
}