const geolocation = (locationCity, locationRegion, locationCountry) => {
  const city = document.querySelector(locationCity);
  const region = document.querySelector(locationRegion);
  const country = document.querySelector(locationCountry);

  // определение местоположения
  ymaps.ready(function () {
    const geolocation = ymaps.geolocation;

    function locations(item, geoloc) {
      if (geoloc) {
        item.innerHTML += ` <b>${geoloc}</b>`;
      } else {
        if (item != country) {
          item.textContent += ` не определен`;
        } else {
          item.textContent += ` не определенa`;
        }
      }
    }

    locations(city, geolocation.city);
    locations(region, geolocation.region);
    locations(country, geolocation.country);

  });




};

// Подключение геолокации
// Необходимо подключить <script src="https://api-maps.yandex.ru/2.0/?load=package.full&lang=ru-RU" type="text/javascript"></script>
// geolocation('.locations__city', '.locations__region', '.locations__country');

export default geolocation;