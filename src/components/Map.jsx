import React, { useEffect } from 'react';

const Map = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC9OvYY--JxgWPaocmc9h-idn0wYIRcSZI&callback=initMap`; // Coordenandas de la ciudad de Rosario
        script.async = true;
        document.body.appendChild(script);

        window.initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: -32.937200267043124, lng: -60.67123656148415 },
                zoom: 12,
            });
            // Data de los locales 
            const baresSinTacc = [
                {
                    name: 'Delicias Del Confitero. Sin Gluten',
                    location: { lat: -32.92154683720721, lng: -60.696351535057985 },
                    photo: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=WJPnwPndhXOzI0xv3M7zGA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=212.83075&pitch=0&thumbfov=100',
                    category: 'Tienda de Alimentos',
                    openingHours: 'Mar-Sab: 9:00 am - 13:00 pm',
                    cel: '03416113006',
                    adress: 'Junín 5333, S2007 Rosario, Santa Fe',
                },


                {
                    name: 'Gout Gluten Free Alto Rosario',
                    location: { lat: -32.93999999999999, lng: -60.675 },
                    photo: 'https://lh5.googleusercontent.com/p/AF1QipMlzqCkkkUk4YUuPUT3TEtWdnGnYmzE5-EX484w=w408-h544-k-no',
                    category: 'Cafeteria',
                    openingHours: 'Lun-Dom: 10:00 am - 21:00 pm',
                    contacto: 'https://drive.google.com/file/d/18PcYemcY08MCXtmWNc_gFn9rFiX8obBX/view',
                    cel: '03412844592',
                    adress: 'junin 501 Alto rosario shopping, S2000 Rosario, Santa Fe',
                },
                {
                    name: 'Justino Gastronomía Sin Gluten',
                    location: { lat: - 32.92878732586552, lng: - 60.65762043456076 },
                    photo: 'https://lh5.googleusercontent.com/p/AF1QipM3_PYW3oyiTQI1n1z_n-ArnOl78Kj3y6iKv2Gx=w408-h544-k-no',
                    category: 'Restaurante',
                    openingHours: 'Mar-Sab: 10:00 am - 22:30 pm',
                    cel: '03417004632',
                    adress: 'S2000LKC, Callao Bis 120, S2000 LKC, Santa Fe',
                },

                {
                    name: 'El Almacén del Celiaco',
                    location: { lat: - 32.93185805080417, lng: -60.66227674938881 },
                    photo: 'https://lh5.googleusercontent.com/p/AF1QipMR201W2AQ-djqN0wnu_gYrsmgg4QhM4qBbkGPP=w408-h408-k-no',
                    category: 'Tienda de Alimentos',
                    openingHours: 'Lun-Sab: 09:00 am - 20:00 pm',
                    contacto: 'https://tienda.almacendelceliaco.com.ar/',
                    cel: '03414353747',
                    adress: 'Salta 2949, S2002JKH Rosario, Santa Fe',
                },

                {
                    name: 'Dietética "Pimienta Negra" Rosario',
                    location: { lat: - 32.944040844330715, lng: -60.66370368463925 },
                    photo: 'https://lh5.googleusercontent.com/p/AF1QipNRj0r2r10txzvonKMjWwyleb1aFSdPNuE7BmMN=w426-h240-k-no',
                    category: 'Tienda de Alimentos',
                    openingHours: 'Lun-Sab: 09:30 am - 13:30 pm ,  16:30 am - 20:00 pm ',
                    contacto: '03412014251',
                    cel: '03412014251',
                    adress: 'Riccheri 1205, S2000 Rosario, Santa Fe',
                },


                {
                    name: 'Goût Gluten Free Rosario Italia',
                    location: { lat: - 32.936855630744326, lng: -60.64558268063274 },
                    photo: 'https://lh5.googleusercontent.com/p/AF1QipMUb4r2BMunbOJg4ljqd9NhGlVYhOvpb9CqVEZu=w408-h299-k-no',
                    category: 'Restaurante',
                    openingHours: 'Lun-Dom: 09:00 am - 20:00 pm',
                    contacto: 'http://www.goutglutenfree.com.ar/',
                    cel: '03412973206',
                    adress: 'Italia 219, S2000 Rosario, Santa Fe',
                },

                {
                    name: 'Gluten Free Market',
                    location: { lat: - 32.94563447808409, lng: -60.65034628372328 },
                    photo: 'https://lh5.googleusercontent.com/p/AF1QipOfuyKKPZYmFaa3tvgLHFT9tRJu-REXQAzLU5rd=w408-h547-k-no',
                    category: 'Tienda de Alimentos',
                    openingHours: 'Lun-Sab: 09:30 am - 13:30 pm ,  16:00 am - 20:00 pm ',
                    contacto: 'https://www.glutenfreemarket.com.ar/',
                    cel: '0341152123959',
                    adress: 'San Juan 1912, S2000 BEH, Santa Fe',
                },

                {
                    name: 'Nana Pasteleria Rosario',
                    location: { lat: - 32.943896785625085, lng: -60.64769626118385 },
                    photo: 'https://lh5.googleusercontent.com/p/AF1QipNQoj7xOCO6hzmpRVc_cS2H0N2CSe0y8BaQ1kia=w426-h240-k-no',
                    category: 'Cafeteria',
                    openingHours: 'Lun-Sab: 09:30 am - 19:00 pm',
                    contacto: 'https://www.facebook.com/nanapasteleriarosario',
                    cel: '0341156053821',
                    adress: 'España 984, S2000 Rosario, Santa Fe',
                },

                {
                    name: 'La Casa del Chipa Productos Libres de Gluten',
                    location: { lat: - 32.94236614740776, lng: -60.64279318313733 },
                    photo: 'https://lh5.googleusercontent.com/p/AF1QipPQSejIjnVHOqbl_XrB-2Qd4efi92itZlrrO9kV=w408-h545-k-no',
                    category: 'Tienda de Alimentos',
                    openingHours: 'Lun-Dom: 09:00 am - 19:00 pm , Sab: 09:00 am - 13:00 pm  ',
                    cel: '03414480405',
                    adress: 'CAPRI BUILDING, Corrientes 910, S2000CTV Rosario, Santa Fe',
                },

                {
                    name: 'All Gluten Free',
                    location: { lat: - 32.94705701958515, lng: -60.640819077291475 },
                    photo: 'https://lh5.googleusercontent.com/p/AF1QipNmNXphGvnWRKJ1mroYRD5QQwhTyVHRR1wNLI4P=w408-h306-k-no',
                    category: 'Tienda de Alimentos',
                    openingHours: 'Lun-Sab: 10:00 am - 19:00 pm , Sab: 10:00 am - 13:00 pm  ',
                    contacto: 'https://allglutenfree.com.ar/',
                    cel: '034129712315',
                    adress: 'Mitre 1173, S2000 COW, Santa Fe',
                },

                {
                    name: 'Todo Sin Tacc Rosario',
                    location: { lat: -32.95881461870116, lng: -60.6446063564641 },
                    photo: 'https://lh5.googleusercontent.com/p/AF1QipPi_56KegEks8tCUtj8i1OahEbAteJoRz3o4p4o=w420-h240-k-no',
                    category: 'Tienda de Alimentos',
                    openingHours: 'Lun-Sab: 09:30 am - 12:30 pm , 17:00 am - 19:30 pm , Sab: 10:00 am - 13:00 pm ',
                    contacto: 'https://instagram.com/todosintaccrosario?utm_medium=copy_link',
                    cel: '03416056417',
                    adress: 'Entre Ríos 2201, S2000 Rosario, Santa Fe',
                },

                {
                    name: 'Venta Directa: VANESA DURAN, PERLA NEGRA, BAGUES',
                    location: { lat: - 32.98256811726839, lng: -60.68715692025457 },
                    photo: 'https://lh5.googleusercontent.com/p/AF1QipOeatUJr2zXWbdUayxe1rDIRJwgxsY7uO0-CyQQ=w408-h544-k-no',
                    category: 'Tienda de Alimentos',
                    openingHours: 'Lun-Sab: 10:00 am - 17:00 pm',
                    contacto: 'https://www.facebook.com/Productos-Sin-Tacc-Blas-106370521738351/',
                    cel: '03413103761',
                    adress: 'Coronel Winter 3843, S2000 Rosario, Santa Fe',
                },

                {
                    name: 'Venta Directa: VANESA DURAN, PERLA NEGRA, BAGUES',
                    location: { lat: - 32.98256811726839, lng: -60.68715692025457 },
                    photo: 'https://lh5.googleusercontent.com/p/AF1QipOeatUJr2zXWbdUayxe1rDIRJwgxsY7uO0-CyQQ=w408-h544-k-no',
                    category: 'Tienda de Alimentos',
                    openingHours: 'Lun-Sab: 10:00 am - 17:00 pm',
                    contacto: 'https://www.facebook.com/Productos-Sin-Tacc-Blas-106370521738351/',
                    cel: '03413103761',
                    adress: 'Coronel Winter 3843, S2000 Rosario, Santa Fe',
                },

                {
                    name: 'Zona Celiacos',
                    location: { lat: - 32.9822509113687, lng: -60.64723362266586 },
                    photo: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=F6nNlbYYb9_HiZYmnzRaRg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=178.78053&pitch=0&thumbfov=100',
                    category: 'Tienda de Alimentos',
                    openingHours: 'Lun-Sab: 09:00 am - 13:00 pm , Sab: 09:00 am - 14:00 pm',
                    adress: 'S2001BQK, Ameghino 873, S2001BQK Rosario, Santa Fe',
                },

                {
                    name: 'Vrinda',
                    location: { lat: -32.93808540031491, lng: -60.6421275974526 },
                    category: 'Cafeteria',
                    photo: 'https://lh5.googleusercontent.com/p/AF1QipPa9d09VXQjqouJuhSLMwXSkEjqG0K3nb6A7lkW=w408-h306-k-no',
                    openingHours: 'Lun-Sab: 09:30 am - 23:00 pm ',
                    contacto: 'https://www.facebook.com/vrindaresto/',
                    cel: '03412580457',
                    adress: 'S2001BQK, Ameghino 873, S2001BQK Rosario, Santa Fe',

                },
                {
                    name: 'Chipá Porá',
                    location: { lat: -32.939867808294856, lng: -60.6697372797698 },
                    category: 'Panaderia',
                    photo: 'https://lh5.googleusercontent.com/p/AF1QipP4TeuumGlfdeubmHUPOL_LjUNZNhj3U97NbMhK=w408-h272-k-no',
                    openingHours: 'Mar-Dom: 09:00 am - 21:00 pm ',
                    contacto: 'http://www.mercadodelpatio.gob.ar/contenidos/2017/09/23/Editorial_2954.php',
                    cel: '03412976455',
                    adress: 'Cafferata 729, S2002 Rosario, Santa Fe',

                },



            ];

            const infoWindows = [];

            baresSinTacc.forEach((bar) => {
                const marker = new window.google.maps.Marker({
                    position: bar.location,
                    map: map,
                    title: bar.name,
                });
                // Marcadores y propiedades
                const contentString = `
          <div class="infowindow">
            <img src="${bar.photo}" alt="${bar.name}" width="200" height="150">
            <strong><h3>${bar.name}</h3></strong>
            <p><strong>  ${bar.category}</strong></p>     
            <p><i class="fas fa-clock colored-icon"></i> ${bar.openingHours}</p> 
            <p><i class="fas fa-map-marker-alt colored-icon"></i>  ${bar.adress}</p>
            <p><i class="fas fa-envelope fa-lg colored-icon"></i></i> <a href="${bar.contacto}" style="color: #27374D">Info de Contacto</a></p>
            <p><i class="fas fa-phone colored-icon"></i>  ${bar.cel}</p>      
          </div>
        `;

                const infowindow = new window.google.maps.InfoWindow({
                    content: contentString,
                });

                infoWindows.push(infowindow);

                marker.addListener('click', () => {
                    infoWindows.forEach((iw) => iw.close());
                    infowindow.open(map, marker);
                    const infoWindowContent = infowindow.getContent();
                    infoWindowContent.classList.add('infowindow-selected');
                });

                map.addListener('click', () => {
                    infowindow.close();
                    const infoWindowContent = infowindow.getContent();
                    infoWindowContent.classList.remove('infowindow-selected');
                });

                marker.setMap(map);
            });
        };
    }, []);

    return <div id="map" style={{ width: '750px', height: '550px' }}></div>;
};

export default Map;
