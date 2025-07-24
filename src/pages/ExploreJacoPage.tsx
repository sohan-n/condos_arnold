import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import TabContentSection from '../components/TabContentSection';
import TabTransitionWrapper from '../components/TabTransitionWrapper';
import JacoHero from '../components/JacoHero';
import JacoTabBar from '../components/JacoTabBar';
import {
  BeachIcon,
  SurfingIcon,
  RestaurantIcon,
  NightlifeIcon,
  ActivitiesIcon,
  ShoppingIcon,
  TransportationIcon,
  TourGuideIcon
} from '../components/icons';

// ============================================================================
// ALL CARDS DEFINITIONS - Add new cards here and reference them below
// ============================================================================

const allCards = {
  // Beach Cards
  jacoBeach: {
    title: "Jaco Beach",
    subtitle: "Just a short walk away!",
    description: "<strong>From TripAdvisor:</strong> Its dark pebbled beach is fringed with palm trees, with warm rolling waves that attract surfers from all over Costa Rica. Take a surf lesson or even ride a horse along the coast. Nearby, you'll find plenty of shops and restaurants, and after sundown, Jaco's beach bars come alive with music and dancing.",
    warnings: [],
    locationLabel: "Jaco Beach, Jaco",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/16/f1/08/jaco-beach-costa-rica.jpg?w=800&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/c4/0b/0a/photo3jpg.jpg?w=2000&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/c4/0b/09/photo2jpg.jpg?w=2000&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/c4/0b/06/photo0jpg.jpg?w=2000&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/1f/8c/92/jaco-beach.jpg?w=2000&h=-1&s=1"
    ],
    links: [
      { name: "TripAdvisor  ", url: "https://www.tripadvisor.com/Attraction_Review-g309271-d309613-Reviews-Jaco_Beach-Jaco_Jaco_District_Garabito_Municipality_Province_of_Puntarenas.html" }
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/jnUhHpFkSiNCjRvw8",
      appleMapsUrl: "https://maps.apple.com/place?place-id=I558859276ACA5E39&address=Playa+Jac%C3%B3%2C+Jaco%2C+Costa+Rica&coordinate=9.6117303%2C-84.6287799&name=Jaco+Beach&_provider=9902",
      embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4921.488662044709!2d-84.63197989999999!3d9.614463599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c73eedbdf3b5%3A0xaf65eb06e8e78e92!2sJaco%20Beach!5e0!3m2!1sen!2sus!4v1752593542951!5m2!1sen!2sus"
    }
  },

  playaHermosa: {
    title: "Playa Hermosa",
    subtitle: "Famous surf beach with powerful waves - pro surfing",
    description: "Playa Hermosa is one of Costa Rica's most famous surf beaches, known for its powerful waves and consistent surf conditions. The beach hosts surf competitions, making it a great spot to watch professional surfers in action. Watch from Vida Hermosa Bar and Restaurant, on the restaruant page!",
    warnings: ["With riptides, currents and gigantic waves, Playa Hermosa is no swimmer's beach, so be extra careful when you step into its waters"],
    locationLabel: "Playa Hermosa, Jaco",
    images: [
      "https://images.entercostarica.com/uploads/pages/61/w2560_page_61_hermosa_jaco_2349c9e992.webp",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/bf/84/2d/soul-surf-surfing-school.jpg?w=2000&h=800&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/43/0e/69/photo4jpg.jpg?w=2200&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/bf/84/2d/soul-surf-surfing-school.jpg?w=2400&h=-1&s=1"
    ],
    highlights: ["Surf competitions on weekends", "Professional surf spot", "Spectacular wave watching"],
    links: [
      { name: "TripAdvisor", url: "https://www.tripadvisor.com/Tourism-g703684-Playa_Hermosa_Jaco_District_Garabito_Municipality_Province_of_Puntarenas-Vacations.html" }
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/DEp6uT7e7Bvi7JfcA",
      embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7868.791479116163!2d-84.59511259921507!3d9.561113199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c0a70f0948e3%3A0xe4b5f820bd358128!2sHermosa%20Beach!5e0!3m2!1sen!2sus!4v1752611829471!5m2!1sen!2sus"
    }
  },

  vidaHermosa: {
    title: "Vida Hermosa Bar and Restaurant",
    subtitle: "Beachfront dining with surf competition views",
    description: "Located right on Playa Hermosa, Vida Hermosa offers the perfect spot to watch surf competitions while enjoying delicious food and drinks. Make reservations to secure a prime viewing spot for the Friday and Saturday afternoon surf competitions at 4pm.",
    locationLabel: "Playa Hermosa, Jaco",
    images: [
      "https://static.wixstatic.com/media/6f5f5b_ff6e62b254df45388f0f30bbe8b4b671~mv2.png/v1/crop/x_2,y_0,w_966,h_1819/fill/w_274,h_516,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo_vertical%20(1).png",
      "https://static.wixstatic.com/media/6f5f5b_c43a4577827b4b8ea047fe78de2867fa~mv2.jpg/v1/fill/w_2048,h_964,al_c,q_90,enc_avif,quality_auto/6f5f5b_c43a4577827b4b8ea047fe78de2867fa~mv2.jpg"
    ],
    phone: "+506-2643-6215",
    highlights: ["Beachfront location", "Surf competition viewing", "Reservations recommended"],
    links: [
      { name: "Website", url: "https://www.vidahermosabeach.com/" },
      { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g703684-d2535766-Reviews-Vida_Hermosa_Bar_Restaurante-Playa_Hermosa_Jaco_District_Garabito_Municipality_Pr.html" }
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/XDhWR259SRc92xpZA",
      appleMapsUrl: "https://maps.apple.com/place?place-id=IE51C7E9BFFC4D7E0&address=Carretera+Pac%C3%ADfica+Fern%C3%A1ndez+Oreamuno%2C+Garabito%2C+Costa+Rica&coordinate=9.575514%2C-84.604651&name=Vida+Hermosa+Bar+%26+Restaurante&_provider=9902",
      embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8801.715423341117!2d-84.60914529999998!3d9.581915000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1bf5f356a787b%3A0x60c5a9f48b737dc3!2sVida%20Hermosa%20Bar%20and%20Restaurant!5e0!3m2!1sen!2sus!4v1752593245939!5m2!1sen!2sus"
    }
  },

  playaBlanca: {
    title: "Playa Blanca",
    subtitle: "White sandy beach known for its warm turquoise waters, remote locale & lush tropical backdrop. Adjacent to Playa Mantas",
    description: "Playa Blanca is a white sand beach located in the province of Puntarenas, Costa Rica. It is known for its clear waters and white sand, making it a popular destination for tourists and locals alike. The beach is located about 20 kilometers from Jaco, and is easily accessible by car or public transportation.",
    locationLabel: "Puntarenas Province, Costa Rica",
    images: [
      "https://www.twoweeksincostarica.com/wp-content/uploads/2015/03/Playa-Mantas-Costa-Rica.jpg"
    ],
    links: [
      { name: "twoweeksincostarica.com", url: "https://www.twoweeksincostarica.com/playa-blanca-near-jaco/" }
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/XrTXuDawHoCd2KmQ9",
      embedUrl:"https://www.google.com/maps/embed?pb=!1m16!1m10!1m3!1d31461.974995370652!2d-84.668332!3d9.702632!2m1!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c8eb40f52e55%3A0xb4f1dbf7635b6b33!2sPlaya%20Blanca!5e0!3m2!1sen!2sus!4v1752594229898!5m2!1sen!2sus"
    }
  },

  playaMantas: {
    title: "Playa Mantas",
    subtitle: "Calm Water and a Local Vibe. Adjacent to Playa Blanca",
    description: "Playa Mantas is a wide cove, flanked by a rocky outcropping on one end and a vegetated point on the other. The sand is a pretty gray color. In dry season when there is little rain (December to end of April), the water is a gorgeous turquoise shade. The waves are gentle and perfect for swimming, even with young kids. We have been visiting with our kids since they were babies, and it's really the perfect beach for families.",
    locationLabel: "Puntarenas Province, Costa Rica",
    images: [
      'https://www.twoweeksincostarica.com/wp-content/uploads/2021/11/North-end-Playa-Mantas.jpg',
      'https://www.twoweeksincostarica.com/wp-content/uploads/2021/11/rocks-tide-pools-playa-mantas.jpg'
    ],
    highlights: ["Good option for families"],
    links: [
      { name: "twoweeksincostarica.com  ", url: "https://www.twoweeksincostarica.com/playa-mantas/" }
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/bbZETar9Af1KxAoPA",
      embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4620.475340588678!2d-84.66460561109832!3d9.707015210080492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c8ec8e631ce5%3A0xc5ed2412130cbaf9!2sPlaya%20Mantas!5e0!3m2!1sen!2sus!4v1752594945742!5m2!1sen!2sus"
    }
  },

  playaHerradura: {
    title: "Playa Herradura",
    subtitle: "Near the Los Suenos Resort. There are tons of great food options and activities at this beach. ",
    description: '<strong>A review from TripAdvisor:</strong> "After 10 days in Jaco,Costa Rica I discovered one of the most beautiful beach views in the world at Playa Herradura. Playa Herradura is a popular spot for sport fishing and watching the beautiful sunsets. You can get there by bus for $.50(250 Colones) from Jaco. I enjoyed food and drinks at the popular Restaurant La Puesta del Sol.  Finally I just relaxed and embraced one of the best views in Costa Rica. I could do this everyday. Happy Travels!!!!"',
    locationLabel: "Puntarenas Province, Costa Rica",
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/cc/3c/32/photo3jpg.jpg?w=2000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/b3/8b/84/photo3jpg.jpg?w=2000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3a/54/43/photo0jpg.jpg?w=1400&h=-1&s=1'
    ],
    links: [
      { name: "costarica.com", url: "https://costarica.org/beaches/central-pacific/herradura/" },
      { name: "TripAdvisor", url: "https://www.tripadvisor.com/Attraction_Review-g1049082-d7393514-Reviews-Herradura_Beach-Herradura_Jaco_District_Garabito_Municipality_Province_of_Puntar.html" }
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/RF9zgk7MDQZ9ThAo6",
      embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13236.907211250713!2d-84.6693857316849!3d9.653924981413661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c7ca3e333ba5%3A0x3bad0def53af1756!2sPuntarenas%20Province%2C%20Playa%20Herradura%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1752595772909!5m2!1sen!2sus"
    }
  },

  jacoBar: {
    title: "Jaco Bar",
    subtitle: "Authentic cocktails & Night Pub experience",
    description: "Every day drink specials, craft beer, good food and live music.",
    locationLabel: "Segunda Planta, Frente Al Supermercado, MasXMenos, Provincia de Puntarenas, Jacó, 61101, Costa Rica",
    images: [
      'https://static.wixstatic.com/media/7e01b0_7e726074211444e49395d32a3ea9adc7~mv2.png/v1/fill/w_400,h_178,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20white.png',
      'https://static.wixstatic.com/media/7e01b0_05462aee6c75487d8ac842f3bdcbba3c~mv2.jpg/v1/fill/w_1600,h_726,al_c,q_85,enc_avif,quality_auto/7e01b0_05462aee6c75487d8ac842f3bdcbba3c~mv2.jpg',
      'https://static.wixstatic.com/media/7e01b0_eddd52f748964818a70dd6f1ff67db1a~mv2.jpg',
      'https://static.wixstatic.com/media/7e01b0_a4cb9c86730144b2a80fa4879c8084d9~mv2.png/v1/fill/w_786,h_444,q_90,enc_avif,quality_auto/7e01b0_a4cb9c86730144b2a80fa4879c8084d9~mv2.png',
      'https://static.wixstatic.com/media/7e01b0_1031e62182144450a1558860649e9c64~mv2.jpg/v1/fill/w_786,h_444,q_90,enc_avif,quality_auto/7e01b0_1031e62182144450a1558860649e9c64~mv2.jpg'

    ],
    phone: "+506-2643-4080",
    links: [
      { name: "Website", url: "https://www.jacobar.com/" },
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/d48Qf6aiFHeMsUxh8",
      embedUrl:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3933.7951913455654!2d-84.6267672!3d9.612896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c70a02725a47%3A0xe04ff40b012cf8aa!2zSmFjw7MgQmFy!5e0!3m2!1sen!2sus!4v1752603395850!5m2!1sen!2sus"
    }
  },

  orangePub: {
    title: "Orange Pub",
    subtitle: "Attractive bar in the heart of Jaco",
    description: "Since our opening in 2012, we have quickly been recognized as the most attractive bar in the heart of Jaco, Costa Rica. From our unique premium products to our ever-changing list of local liquors, we have everything you need for a great night. We are dedicated to ensuring that the time you spend with us is an unparalleled experience. Our professional team behind the bar has carefully crafted a list of renowned drinks that will leave your mouth exploding with flavor.",
    locationLabel: "J98C+6C6, Pastor Diaz Ave, Puntarenas Province, Jaco, Costa Rica",
    images: [
      'https://static.wixstatic.com/media/12fc26_70463706ca0d4112919a07597195ba92~mv2.jpeg/v1/fill/w_160,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled.jpeg',
      'https://static.wixstatic.com/media/12fc26_d6f710cb933c4bbbaa68e855d6776123~mv2.jpeg/v1/fill/w_3570,h_2092,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/12fc26_d6f710cb933c4bbbaa68e855d6776123~mv2.jpeg',
      'https://static.wixstatic.com/media/12fc26_493e475e240a431fb61b505fbc3f4c54~mv2.jpeg/v1/fill/w_3570,h_1150,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/12fc26_493e475e240a431fb61b505fbc3f4c54~mv2.jpeg',
      'https://static.wixstatic.com/media/12fc26_f5b027c7705743c4a44608cab616fb46~mv2.jpeg'
    ],
    phone: "+506-8880-5999",
    links: [
      { name: "Website", url: "https://www.orangepubcr.com/" },
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/WdYrvomnUTDp4qS58",
      embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7867.528101301066!2d-84.629273!3d9.6155736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c715636e7391%3A0xb500ac381d85efa1!2sOrange%20Pub!5e0!3m2!1sen!2sus!4v1752603791432!5m2!1sen!2sus"
    }
  },

  xtcJaco: {
    title: "XTC Jaco",
    subtitle: "Disco bar. Open Wednesday - Sunday",
    description: "<strong>From TripAdvisor:</strong> The original and only VIP bottle service club in Costa Rica. Located in Jaco. XTC prides itself on luxury services sporting huge newly renovated VIPs and a large dance floor XTC is the #1 premium nightclub in all of Costa Rica! Large clean bathrooms and one of the largest selections of liquor in the country! Profesional security, English speaking staff and the best liquor all for the best prices. Come by tonight and see what awaits for you at XTC.",
    locationLabel: "Av. Pastor Diaz 2do Piso, Provincia de Puntarenas, Jacó, 61101, Costa Rica",
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/9c/b1/3b/logo.jpg?w=1400&h=800&s=1',
      'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/470221529_18253566778286920_6574841438125730381_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SaxBf6EwYl4Q7kNvwE_slbu&_nc_oc=Admc0BIseTuIPraLsTZhCkzqkaIWR9AYuyj8z5Ev99mhNeQQ2ocEJ8XFO8Ku72oDbWE&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=yhpRWjyihGCZO04FVYtwaA&oh=00_AfQN4jfrarwq4574NRXKD4wYyRtBNDqk2XRUmN5GyWODyQ&oe=687C7A5B',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/9c/b1/21/interior.jpg?w=1400&h=800&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/9c/b0/fa/interior.jpg?w=1200&h=700&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/9c/b1/4e/interior.jpg?w=1400&h=800&s=1'
    ],
    phone: "+506-2215-3632",
    links: [
      { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d19881060-Reviews-XTC_Jaco-Jaco_Jaco_District_Garabito_Municipality_Province_of_Puntarenas.html" },
      { name: "Facebook", url: "https://www.facebook.com/xtcjaco" },
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/UJQwbGzEH1mY9yvY9",
      embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.7657396689037!2d-84.63133172378033!3d9.615428390471227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c7bb496a8da7%3A0x1a2ac27ab267ae07!2sXTC%20DISCO%20BAR!5e0!3m2!1sen!2sus!4v1752604567840!5m2!1sen!2sus"
    }
  },

  republikCostaRica: {
    title: "Republik Costa Rica",
    subtitle: "Bistro/bar, disco club, and vacation rentals",
    description: "Unleash your Costa Rican adventures at Jaco's ultimate hotspot for dining and nightlife! Republik Disco Club offers you the best of Jaco nightlife all in one place: poolside vibes, an immersive club room, and elevated dining!",
    locationLabel: "Cocal Street, Jaco Beach in Puntarenas - Costa Rica",
    images: [
      'https://republikcostarica.com/wp-content/uploads/2022/02/Republik-Logo-Web.png',
      'https://republikcostarica.com/wp-content/uploads/2023/10/Republik-Lounge-Nightclub-Jaco-Costa-Rica-09.jpeg',
      'https://republikcostarica.com/wp-content/uploads/2023/10/Republik-Lounge-Nightclub-Jaco-Costa-Rica-1-3.jpeg',
      'https://republikcostarica.com/wp-content/uploads/2025/05/Republik-Club-Jaco-Beach-Costa-Rica-3.webp',
      'https://republikcostarica.com/wp-content/uploads/2025/05/Republik-Pool-Club-Jaco-Beach-Costa-Rica.webp',
      'https://republikcostarica.com/wp-content/uploads/2024/07/Ribeye-Republik-1.webp'
    ],
    phone: "+506-8965-4343",
    hours: "Thursday, Friday & Saturday: 9PM to 2:30AM",
    highlights: ["Pool Club", "The Cave (VIP area)", "Steakhouse Bar", "8 VIP tables for bottle service"],
    links: [
      { name: "Website", url: "https://republikcostarica.com/nightclub/" },
      { name: "TripAdvisor", url: "https://www.tripadvisor.com/Attraction_Review-g309271-d16697582-Reviews-Republik_Lounge-Jaco_Jaco_District_Garabito_Municipality_Province_of_Puntarenas.html"}
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/VC61GuizVGSBkrAf9",
      embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.7883942983813!2d-84.6281834!3d9.6134805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c70aaa158e43%3A0xdd2d593c55264147!2sRepublik%20Steak%20House%20and%20Bistro!5e0!3m2!1sen!2sus!4v1752604835321!5m2!1sen!2sus"
    }
  },

  vladAlvarado: {
    isFavorite: true,
    title: "Vlad Alvarado",
    subtitle: "Our Tour Guide. He will beat almost any price.",
    description: "Vlad is your go-to local tour guide who can create any custom tour experience you desire. From adventure tours to cultural experiences, beach excursions to rainforest hikes - he'll design the perfect itinerary for your group. <strong>Best of all: he tends to beat most competitor's price!</strong> Contact him on WhatsApp to discuss your dream adventure.",
    locationLabel: "Jaco, Costa Rica",
    images: [
      'vlad_aura_image.png'
    ],
    phone: "+506-8305-8080",
    highlights: ["Custom tours", "Best prices", "Local expertise", "Flexible scheduling"],
    links: [
      { name: "WhatsApp", url: "https://wa.me/50683058080" }
    ]
  },

  beachHomeCostaRica: {
    title: "BEACHHOME Adventure/Activities",
    subtitle: "Experience adventures. Book securely online with real-time availability",
    description: "Zipline, ATV, Buggy (side-by-side), Horseback riding, Extreme Canyoning, etc. Combos and bundles available!",
    locationLabel: "Jaco, Costa Rica",
    images: [
      'https://img.rezdy.com/PRODUCT_IMAGE/139355/Copia_de_DSC_0001_copia_tb.jpg',
      'https://img.rezdy.com/PRODUCT_IMAGE/139355/Horseback_Adventures_tb.jpg',
      'https://img.rezdy.com/PRODUCT_IMAGE/139355/ZipLine_tb.JPG',
      'https://img.rezdy.com/PRODUCT_IMAGE/139355/DJI_0905_tb.JPG'
    ],
    phone: [
      { number: "+1-801-938-3494", label: "US Phone" },
      { number: "+506-2643-2222", label: "Costa Rica" }
    ],
    links: [
      { name: "Website", url: "https://beachhomecostarica.com/adventure-tours-activities/" }
    ]
  },

  tortugaIsland: {
    title: "Tortuga Island Catamaran Tour",
    subtitle: "White sand beaches, snorkeling, and tropical paradise - 10.5 hour adventure",
    description: "Experience the beautiful waters of the Pacific Ocean and the tropical paradise of Isla Tortuga! Departing from Los Suenos Marina in Herradura (10 minutes from Jacó), this 45-minute catamaran ride takes you to a secluded 300-acre island with pristine white sand beaches. <strong>Perfect for families and adventure seekers alike!</strong>",
    locationLabel: "Los Suenos Marina, Herradura (10 min from Jaco)",
    images: [
      'https://www.twoweeksincostarica.com/wp-content/uploads/2023/05/tortuga-island-catamaran-beach-snorkel-tour-jaco.jpg',
      'https://www.twoweeksincostarica.com/wp-content/uploads/2023/05/white-sand-beach-costa-rica.jpg',
      'https://www.twoweeksincostarica.com/wp-content/uploads/2023/05/costa-cat-boat-tortuga-island.jpg',
      'https://www.twoweeksincostarica.com/wp-content/uploads/2023/05/beach-chairs-tortuga-island.jpg',
      'https://www.twoweeksincostarica.com/wp-content/uploads/2023/05/snorkeling-tortuga-island-costa-cat.jpg',
      "https://www.twoweeksincostarica.com/wp-content/uploads/2023/05/alcatraz-island-costa-rica.jpg"

    ],
    highlights: [
      "Snorkeling with coral reefs and tropical fish", 
      "Banana boat rides",
      "Unlimited drinks (rum punch, margaritas, soft drinks)",
      "Fresh Costa Rican breakfast and lunch included"
    ],
    warnings: ["Plan to visit during weekdays to avoid crowds - weekends are much busier"],
    links: [
      { name: "twoweeksincostarica.com", url: "https://www.twoweeksincostarica.com/tortuga-island-catamaran/" }
    ]
  },

  airportTransfer: {
    isFavorite: true,
    title: "Airport Transfer Service",
    subtitle: "Comfortable and safe private transportation from San José Airport to Jaco",
    description: "Start your Costa Rican adventure with a stress-free arrival! We offer private airport transfer service from Juan Santamaría International Airport (SJO) to Jaco. <strong>Perfect for families and groups looking for reliable, comfortable transportation.</strong> Our professional drivers will meet you at the airport and ensure a smooth journey to your destination.",
    locationLabel: "San José International Airport (SJO) to Jaco",
    images: [
      'https://cdn.filestackcontent.com/Y7hXhnlTGKYBGWgeWVpD/convert?cache=true&compress=true&quality=90&w=1868&fit=max'
    ],
    highlights: [
      "Private transfer service (no shared rides)",
      "Up to 4 people included in base price",
      "Professional, English-speaking drivers",
      "Air-conditioned vehicles",
      "Meet and greet at airport",
      "Flexible scheduling for arrivals and departures"
    ],
    links: [
      { name: "Book Online", url: "https://costaricaadventuretoursandtransportation.com/san-jose-city-transfer/" }
    ]
  },

  surferFactory: {
    title: "Surfer Factory",
    subtitle: "Source for Surfing Equipment and Surf Lessons in Costa Rica",
    description: "Join the surf school in Jaco for the ultimate surf vacation experience! They offer surf lessons for all levels, from beginners to advanced riders. Located right on the beach in Jaco with fantastic waves to learn or advance your skills. <strong>Experience the Pura Vida lifestyle with our chill and friendly crew!</strong>",
    locationLabel: "Avenida Pastor días 300m sur más por menos Jaco Puntarenas CR 61101, Av. Pastor Díaz, Provincia de Puntarenas, Jacó",
    images: [
      'https://lh3.googleusercontent.com/p/AF1QipPZAqUeV0wfJazF16t0zxAPVNKUHMZnh7_LVqAz=w408-h272-k-no',
      'https://static.wixstatic.com/media/08a2ca_b974969d3ad84c13be7462f5ba377bc4~mv2_d_4665_2641_s_4_2.jpg/v1/fill/w_1960,h_736,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/08a2ca_b974969d3ad84c13be7462f5ba377bc4~mv2_d_4665_2641_s_4_2.jpg',
      'https://static.wixstatic.com/media/08a2ca_806fb89e1e8c456280bc5d700a009450~mv2_d_2999_2249_s_2.jpg/v1/fill/w_1196,h_908,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Slide2.jpg'
    ],
    phone: [
      { number: "+506-2643-1444", label: "Shop" },
      { number: "+506-6068-7636", label: "24hrs" },
      { number: "+506-6340-1150", label: "Mobile" }
    ],
    highlights: [
      "Surf lessons for all levels (beginner to advanced)",
      "Surfboard sales and rentals",
      "SUP (Stand Up Paddle) tours"
    ],
    links: [
      { name: "Website", url: "https://www.surferfactory.com/" },
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/Fm2ZrsV23AMk2Hp96",
      embedUrl:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d251764.8150604362!2d-84.624591!3d9.610312000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c740d8ae81bb%3A0x2da6fbc3167de03f!2sSurfer%20Factory%20Surf%20School%20%2F%20Camp!5e0!3m2!1sen!2scr!4v1752608775080!5m2!1sen!2scr"
    }
  },

  soulSurf: {
    title: "Soul Surf Surfing School",
    subtitle: "Professional surf lessons at Playa Hermosa",
    description: "Located at the famous Playa Hermosa, Soul Surf offers professional surf lessons for all skill levels. Their experienced instructors provide personalized instruction in one of Costa Rica's premier surf destinations. <strong>Perfect for learning to surf or improving your skills on world-class waves!</strong>",
    locationLabel: "Playa Hermosa, Jaco",
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/9d/cf/96/soul-surf-surfing-school.jpg?w=1400&h=1400&s=1',
      'https://media-cdn.tripadvisor.com/media/photo-o/07/9c/7f/36/soul-surf-surfing-school.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/8f/09/44/first-surf-lesson.jpg?w=2200&h=-1&s=1'
    ],
    highlights: [
      "Professional surf instruction",
      "All skill levels welcome",
      "Experienced instructors"
    ],
    links: [
      { name: "TripAdvisor", url: "https://www.tripadvisor.com/Attraction_Review-g703684-d4609504-Reviews-Soul_Surf_Surfing_School-Playa_Hermosa_Jaco_District_Garabito_Municipality_Provin.html" }
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/DEp6uT7e7Bvi7JfcA",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7868.791479116163!2d-84.59511259921507!3d9.561113199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c0a70f0948e3%3A0xe4b5f820bd358128!2sHermosa%20Beach!5e0!3m2!1sen!2sus!4v1752611829471!5m2!1sen!2sus"
    }
  },
  KoKoGastroBar: {
    title: "KoKo GastroBar",
    subtitle: "GastroBar in Jaco",
    description: "Bar, Seafood, Contemporary, Central American, Costa Rican",
    locationLabel: "C. Dankers, Provincia de Puntarenas, Jacó, Costa Rica",
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/9d/70/bd/caption.jpg?w=1100&h=600&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/27/f6/9b/caption.jpg?w=1100&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/e2/6d/5d/menu-koko-gastro.jpg?w=1100&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/76/fd/73/photo1jpg.jpg?w=1400&h=-1&s=1'
    ],
    highlights: [
      "Vegetarian friendly, Vegan options",
      "Accepts Credit Cards",
      "Breakfast, Lunch, Dinner, Drinks"
    ],
    links: [
      { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d17424702-Reviews-KoKo_Gastro_Bar-Jaco_Jaco_District_Garabito_Municipality_Province_of_Puntarenas.html" }
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/7JcX6m43f69g3sCU6",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d711.9230546050125!2d-84.63001099273762!3d9.613630437579722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c7a91ff751d1%3A0x12b3444055ace8fd!2sKoKo%20Gastro%20Bar!5e0!3m2!1sen!2sus!4v1753294400538!5m2!1sen!2sus"
    }
  },

  elManglar: {
    isFavorite: true,
    title: "El Manglar Restaurante y Bar",
    subtitle: "Open-air seafood & cocktail bar on Jacó Beach",
    description: "An inviting open-air eatery located just one block north of Hotel Crocs on Jacó Beach. El Manglar offers a laid-back, tropical atmosphere with wooden accents and lush greenery, perfect for romantic dinners, friendly gatherings, or enjoying live music nights. Their menu focuses on fresh, locally sourced ingredients—from ceviche and seafood specials to burgers, ribs, pasta, and handcrafted cocktails. Service is friendly and bilingual, capturing that classic Pura Vida vibe.",
    locationLabel: "50 mts north of Hotel Crocs, Jacó Beach, Puntarenas, Costa Rica",
    images: [
      'https://resizer.otstatic.com/v3/photos/79003659-2?width=752&height=752&webp=true',
      'https://resizer.otstatic.com/v3/photos/79264552-1?width=752&height=752&webp=true',
      'https://resizer.otstatic.com/v3/photos/79264550-1?width=752&height=752&webp=true',
      'https://resizer.otstatic.com/v3/photos/79265837-1?width=752&height=752&webp=true',
      'https://resizer.otstatic.com/v3/photos/79264547-1?width=752&height=752&webp=true',
      'https://resizer.otstatic.com/v3/photos/79265836-1?width=752&height=752&webp=true'
    ],
    phone: "+506-4704-9318",
    highlights: [
      "“We Cook Your Catch” experience",
      "Signature Chili-Piña shots & sangria"
    ],
    links: [
      { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d23349601-El_Manglar_Restaurante_Bar-Jaco.html" },
      { name: "OpenTable", url: "https://www.opentable.com/r/el-manglar-restaurant-and-bar-jaco" }
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/krv1NtBkR9dK7Pi26",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.664429188077!2d-84.6434684237803!3d9.624134490462916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c750afcc1c4d%3A0xf97796c7ccbc7b9b!2sManglar%20Bar%20and%20Restaurant!5e0!3m2!1sen!2sus!4v1753313623231!5m2!1sen!2sus"
    }
  },

  elChicano: {
    title: "El Chicano Mexican Food",
    subtitle: "Authentic Mexican tacos & casual eatery in downtown Jacó",
    description: "Air-conditioned restaurant on Avenida Pastor Díaz, near El Jardín shopping center. Serving tacos al pastor, burritos, fajitas, enchiladas, nachos, and house-made salsa in a lively, colorful décor with TVs and bilingual staff.",
    locationLabel: "J97F+288, C. Central, Provincia de Puntarenas, Jacó, Costa Rica",
    images: [
      'https://itin-dev.wanderlogstatic.com/freeImage/VxtLLSWSEo1LnIsCFFojlwgnlyvYRThX',
      'https://itin-dev.wanderlogstatic.com/freeImage/X6ENziXl37gZmMKvX8LSk8B6vCmGFMVM',

    ],
    phone: "+506-8608-4649",
    highlights: [
      "Tacos al pastor with slow-rotisserie pork & pineapple",
      "Daily specials & house-made salsa",
      "Air-conditioned comfort with happy hour (3-6 PM) & sports on TV"
    ],
    links: [
      { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d19654615-El_Chicano_Mexican_Food-Jaco.html" },
      { name: "Wanderlog", url: "https://wanderlog.com/place/details/859854/el-chicano-mexican-food" }
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/JuqzEzG1Q3hXmxcc8",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.798578432093!2d-84.62671686310583!3d9.612604720366727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c7d6af1311b3%3A0xdcb61e65e1a573ee!2sRestaurante%20El%20Chicano!5e0!3m2!1sen!2sus!4v1753314162225!5m2!1sen!2sus"
    }
  },

  amancios: {
    title: "Amancio's Pizza - Pasta & Drinks",
    subtitle: "Italian restaurant specializing in wood-oven pizza & pasta in central Jacó",
    description: "Italian-owned eatery in Centro Comercial El Jardín on Main Street, offering wood-oven pizzas, homemade pasta (Cacio e Pepe, Penne Vodka), antipasti and a curated wine list, served with friendly, bilingual service.",
    locationLabel: "Puntarenas Province, Jaco, Costa Rica",
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/85/f9/05/caption.jpg?w=1400&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/b9/4e/c2/cute-pizza-place.jpg?w=1100&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/d0/44/96/caption.jpg?w=1100&h=-1&s=1'
    ],
    phone: [
      { number: "+506-2643-2373"}
    ],
    highlights: [
      "Wood-oven pizza & homemade pasta",
      "Gluten-free & vegan options",
      "Friendly Italian-style service"
    ],
    links: [
      { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d6371640-Amancio_s_Pizza_Pasta_Drinks-Jaco_Jaco_District_Garabito_Municipality_Province_of.html" },
      { name: "Facebook", url: "https://www.facebook.com/amancios" }
    ],
    mapLocation: {
      googleMapsUrl: "https://maps.app.goo.gl/MamgkqTg6muga8pJ9"
    }
  },

  infierno: {
    title: "INFIERNO - Wood Fired Pizzeria & Grill",
    subtitle: "Wood-fired Neapolitan pizza, pasta & grill in Centro Comercial Il Galeone",
    description: "Italian-style restaurant featuring 90-sec wood-fired Neapolitan pizzas, grilled meats, paninis and pasta, plus fresh salads and Italian wines. Located in Centro Comercial Il Galeone on Pastor Díaz Ave.",
    locationLabel: "Centro Comercial Il Galeone, Av. Pastor Díaz, Provincia de Puntarenas, Jacó, 61101, Costa Rica",
    images: [
      'https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/327270422_626193652604605_6174034836301370407_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1gDXaVZnS4QQ7kNvwG7gLxh&_nc_oc=AdnRNDkdam666UYOtthFJnCX4V46G5qmpc45OZvrpxRHECZJgZ-URT4jTgWU6WAf_05f6jUJKq8XJy2K3H4hw170&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=scuXAHCmxaEfbPSql-hLKA&oh=00_AfQ5b1KhvD3Xsq3g-xpgaFQ1I2ZmD9SaPXmCwcR64raxqQ&oe=688757B9',
      'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/518348204_1454416469352397_8459054621126739401_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=AIkl0GncQSkQ7kNvwEwpK9v&_nc_oc=AdnkAl0f7HJv_YEfhSM9kCy-p4NSDPd4UbMhUbzXRcb0Fy9JPkMxMMLY2lKjWNjqytIKmYPJ3azPRPMUAXpX4Dc-&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=xeQvN8w2MU4g-5vvLCMH3w&oh=00_AfQtmQiqDPxsNyl1Q3k-2mzCcphGsQckkDpP9slcPdLvvA&oe=68874987',
      'https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/520258375_1462373671890010_7585239073117844928_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YOEE54X0AHoQ7kNvwHBR7Vu&_nc_oc=AdmV0iVyDWp0cmNwvvs4ne4ViK-0YzTc47QDbv_maJBqyltTYL0V1JEQsz03SuCyfDuWss8jRws_4UAU7tNTdcf3&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=Q5xuslleAd7Ft79n222D6g&oh=00_AfRg2EyW58CjpYjEe7dk9aGUnk4WA8Y_MUeTI4Fe50Zwww&oe=688744C0',
      'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/517799509_1456021509191893_6345157244053129148_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iKUBB6Bz1FcQ7kNvwGTYyWR&_nc_oc=AdluNdyLpxsYWTReCUzXZl0s1Fxfwg7TGrSK6H1dw2c_JlmNX2O4n9CIBiijHiwh2ZuPoVG2FVLxdLNzElAPU7i4&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=nCKUnQ98TfFxICQCPAzS1Q&oh=00_AfTS1c-VkHL5VaeWlMVXNobL5523pVTj6TgpA4KM5kj3ow&oe=68873480',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/35/36/a9/pizza-napolitana.jpg?w=2000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/e6/d6/44/photo2jpg.jpg?w=2000&h=-1&s=1'
    ],
    phone: [
      { number: "+506-8726-7575" }
    ],
    highlights: [
      "Neapolitan-style wood-fired pizzas",
      "Salads served in bread bowls",
      "Italian wines, paninis & grilled dishes"
    ],
    links: [
      { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d12213482-Infierno_Wood_Fired_Pizzeria_Grill-Jaco.html" },
      { name: "Facebook", url: "https://www.facebook.com/infierno.jaco/" }
    ],
         mapLocation: {
       googleMapsUrl: "https://maps.app.goo.gl/6AyWtYTTogzHSfGy8",
       embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.86073619014118!2d-84.62835912491046!3d9.614909151254697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c7156068ccd3%3A0x803ac141ba65e5d6!2sINFERNO%20-%20Wood%20Fired%20Pizzeria%20%26%20Grill!5e0!3m2!1sen!2sus!4v1753315795246!5m2!1sen!2sus"
     }
   },


 //WORKING NOTES&&&&&&&&&


   pizzaPata: {
     title: "Pizza Pata Jacó",
     subtitle: "Popular local pizzeria with delivery in downtown Jacó",
     description: "Casual pizzeria located in Plaza Coral in front of Mega Super. Offers a variety of hand-tossed pizzas, chicken wings, natural juices, and cold drinks. Free delivery around Jacó and Herradura.",
     locationLabel: "J97C+RRR, Puntarenas Province, Jaco, Costa Rica",
     images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/0b/62/ea/caption.jpg?w=1100&h=-1&s=1',
      'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/306982374_502999451637896_7076311600983690752_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Y1zYwDkMkjQQ7kNvwGkM0l-&_nc_oc=AdkSgKw5SynXiKo9-763Zp1AmaA8f3XqvlMdjrAwF0bzJ8EH26DXfMdjJDgCd6a3mNTVU5OcaJTrX9eGuAphyFdK&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=DpdR4M6wu_uxB5Z-AJFjjA&oh=00_AfRluUaErNh8fYOJznsboUhWuexshCVnHtMrwMY_W3vPCw&oe=688741FC',
      'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/472789589_1001664088438094_9006920680021125537_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zuGoCycK6GgQ7kNvwGJr9WM&_nc_oc=AdlpUzYf_PHli3--JH2k2daToe_LL03MxnaRlZ7V3veaB-qN-oM3zcIQbCg1rxigIZ5fxAwgLUrzzCKSofFyvOSs&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=vRHl1a1r9Sda2a2ZDPwWRQ&oh=00_AfSbJ0XFC7b2uThAdw8PGpOVa11tRnsyknPkKfa0li_XeA&oe=68874FEA'
    ],
     phone: [
       { number: "+506-2643-6543" }
     ],
     highlights: [
       "Free delivery around Jacó and Herradura",
       "Chicken wings & hand-tossed pizzas",
       "Natural juice options"
     ],
     links: [
       { name: "Website", url: "https://www.pizzapatajaco.com/" },
       { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d3598612-Pizza_Pata-Jaco.html" },
       { name: "Facebook", url: "https://www.facebook.com/p/Pizza-Pata-Jaco-100057835351677/" }
      ],
      mapLocation: {
        googleMapsUrl: "https://maps.app.goo.gl/z5v8jrFVdDgVjwTX7",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62942.5958066939!2d-84.66228893546736!3d9.602825259082426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c73fe1d9aaeb%3A0x7c9ecfc63212a081!2sPizza%20Pata%20Jac%C3%B3!5e0!3m2!1sen!2sus!4v1753317046661!5m2!1sen!2sus"
      }
   },

   ridiculousBurgers: {
     title: "Ridiculous Burgers",
     subtitle: "Gourmet burgers, crazy shakes & delivery on Main Street",
     description: "Popular burger joint on Av. Pastor Díaz offering over 48 gourmet burgers, salads, shakes, and fun food challenges. Dine-in, pick-up, and delivery available in English and Spanish.",
     locationLabel: "&, Av Pastor Diaz (Jaco Main Street) between, C. Hicaco, Provincia de Puntarenas, Jacó, 61101, Costa Rica",
     images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/99/82/f5/torta-de-carne-angus.jpg?w=600&h=400&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/64/bc/73/caption.jpg?w=1100&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/dd/10/f5/ridiculous-burgers.jpg?w=1100&h=-1&s=1'
     ],
     phone: [
       { number: "+506-2643-1010" }
     ],
     highlights: [
       "Over 48 gourmet burger options",
       "Crazy shakes & salad menu",
       "Food challenges & weekly specials"
     ],
     links: [
       { name: "Website", url: "https://www.ridiculousburgerscr.com/" },
       { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d12899136-Ridiculous_Burgers-Jaco_Jaco_District_Garabito_Municipality_Province_of_Puntaren.html" }
     ],
     mapLocation: {
       googleMapsUrl: "https://maps.app.goo.gl/9Hix4A4Qx7bBJMuZA",
       embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31470.16962287411!2d-84.64921196566368!3d9.614958690176726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c740631dd9e1%3A0x38300ba33814702e!2sRidiculous%20Burgers!5e0!3m2!1sen!2sus!4v1753318054807!5m2!1sen!2sus"
     }
   },

   diabloBurger: {
     title: "Diablo Burger",
     subtitle: "Premium Angus burgers at Jaco Walk Shopping Center",
     description: "Burger restaurant offering premium Angus beef grilled patties, paninis, salads and shakes. Located in Jaco Walk Shopping Center, with dine-in, pick-up and delivery options.",
     locationLabel: "J96F+PW6 Jaco Walk Shopping Center, Puntarenas Province, Jaco, 61101, Costa Rica",
     images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b0/1b/da/diablo-burger-logo.jpg?w=1000&h=600&s=1",
       "https://tb-static.uber.com/prod/image-proc/processed_images/9260acb3380f27f29d81277e9ca39fbe/fb86662148be855d931b37d6c1e5fcbe.jpeg",
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b0/1b/e1/burger.jpg?w=1400&h=800&s=1",
       'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b0/1b/d4/burger.jpg?w=800&h=-1&s=1'
       
     ],
     phone: [
       { number: "+506-8823-7000" }
     ],
     highlights: [
       "Premium Angus beef burgers",
       "Paninis, salads and shakes",
       "Delivery via Uber Eats"
     ],
     links: [
       { name: "Uber Eats", url: "https://www.ubereats.com/cr-en/store/diablo-burger-wood-fired-grill/ktD1ZKyJQteWEsaD69-njA" },
       { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d23035888-Diablo_Burger-Jaco.html" }
     ],
     mapLocation: {
       googleMapsUrl: "https://maps.app.goo.gl/Z6n2G7pzmN7yxgcq5",
       embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.8082018046975!2d-84.62779972497387!3d9.611777090474716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c7dbe296015b%3A0x302bcbed56a50e1d!2sDiablo%20Burger!5e0!3m2!1sen!2sus!4v1753318332267!5m2!1sen!2sus"
     }
   },

   tsunamiSushi: {
     title: "Tsunami Sushi",
     subtitle: "Casual sushi & Japanese cuisine at Jaco Walk",
     description: "Since 2002, this hip spot in Jaco Walk Plaza serves fresh Pacific-caught sushi, sashimi, rolls, ramen, bowls, salads, paninis, and seafood dishes in a casual, beachside atmosphere.",
     locationLabel: "J96F+JV5, Jaco Walk Plaza, Provincia de Puntarenas, Jacó, 61101, Costa Rica",
     images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/73/c4/55/tsunami-sushi-el-sabor.jpg?w=800&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/5c/39/19/we-make-the-best-combo.jpg?w=900&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/2b/b0/be/ingredientes-siempre.jpg?w=1100&h=600&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/2b/b0/a5/calidad-y-frescura.jpg?w=1400&h=800&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/2b/b0/90/las-mejores-combinaciones.jpg?w=1400&h=800&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/04/54/61/el-mejor-sushi-con-la.jpg?w=1100&h=600&s=1"
     ],
     phone: [
       { number: "+506-2643-1635" }
     ],
     highlights: [
       "Half-price sushi Wednesdays & Fridays",
       "Gluten-free soy sauce available",
       "Fresh Pacific fish, 4.5★ average rating"
     ],
     links: [
       { name: "OpenTable", url: "https://www.opentable.com/r/tsunami-sushi-jaco-jaco-beach-jaco-puntarenas?ref=18708" },
       { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d1634918-Tsunami_Sushi_Jaco_Walk-Jaco.html" }
     ],
     mapLocation: {
       googleMapsUrl: "https://maps.app.goo.gl/wZvcmnGDdtXkfXaDA",
       embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.8112155171184!2d-84.62784192497386!3d9.611517890474948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c740e4230371%3A0x27497640f69057c2!2sSushi%20Tsunami%20%E2%80%A2%20Garabito!5e0!3m2!1sen!2sus!4v1753318395717!5m2!1sen!2sus"
     }
   },

   sushiAtHome: {
     title: "Sushi at Home",
     subtitle: "Casual sushi, bowls & rolls with delivery in downtown Jacó",
     description: "Located just south of Mas x Menos in Plaza Castillo, 2nd floor next to Mango Surf Shop. Serves sushi rolls, bowls, ramen, salads and fresh seafood in a relaxed, casual setting with free Wi-Fi.",
     locationLabel: "Segunda planta, 25 m sur del Mas X Menos, Plaza Castillo, Av. Pastor Díaz, Provincia de Puntarenas, Jacó, 61101, Costa Rica",
     images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/bf/36/a8/nice-view-from-the-terrace.jpg?w=1000&h=600&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ea/a5/67/sushi-specialist.jpg?w=1100&h=600&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/13/d0/c9/combinacion-de-sushi.jpg?w=1400&h=800&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ea/a5/88/daily-promos.jpg?w=1000&h=600&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ea/a5/70/variety-of-fusion-food.jpg?w=800&h=-1&s=1'

     ],
     phone: [
       { number: "+506-2643-1212" }
     ],
     highlights: [
       "Half-price rolls Wed & Fri",
       "Vegan/vegetarian bowls available",
       "Fresh fish & friendly service"
     ],
     links: [
       { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d10799383-Sushi_At_Home-Jaco.html" },
       { name: "Facebook", url: "https://www.facebook.com/SushiAtHomeJaco/" }
     ],
     mapLocation: {
       googleMapsUrl: "https://maps.app.goo.gl/3HKdDHA1aqXi4tbn7",
       embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.799090415984!2d-84.6289218249739!3d9.612560690473929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c713c43f5c21%3A0xe5085d2a98f3ee2a!2sSushi%20At%20Home!5e0!3m2!1sen!2sus!4v1753318818647!5m2!1sen!2sus"
     }
   },

   greenRoom: {
     title: "Green Room Café & Bar",
     subtitle: "Urban oasis for artisan brunch, cocktails & live music",
     description: "Casual-elegant spot on C. Cocal in central Jacó offering artisan brunch, global fusion dishes, craft beers, specialty cocktails and wine. Known for live music nightly and a relaxed, green-filled atmosphere.",
     locationLabel: "Frente Oficinas Del ICE, Calle Casino Cocal, Provincia de Puntarenas, Jacó, 61101, Costa Rica",
     images: [
       "https://greenroomjaco.com/wp-content/uploads/2024/05/Green-Room-Brunch-Menu-Item.jpg",
       'https://greenroomjaco.com/wp-content/uploads/2024/05/Catering-Jaco-Private-Events.jpg',
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/40/32/7b/organic-greens.jpg?w=1100&h=600&s=1",
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/40/20/fb/live-music-every-night.jpg?w=1400&h=800&s=1"
     ],
     phone: [
       { number: "+506-2643-4425" }
     ],
     highlights: [
       "Artisan brunch & global fusion dinner",
       "Craft beers, cocktails & wine selection",
       "Live music every night"
     ],
     links: [
       { name: "Website", url: "https://greenroomjaco.com/" },
       { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d3835245-Green_Room-Jaco.html" }
     ],
     mapLocation: {
       googleMapsUrl: "https://maps.app.goo.gl/hALiPHHSHgWsFMTA9",
       embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.7859278345354!2d-84.63042002497389!3d9.613692590472867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c73fe5f36425%3A0x7e11edcf56faa0f2!2sGreen%20Room%20Cafe%20Bar!5e0!3m2!1sen!2sus!4v1753319063953!5m2!1sen!2sus"
     }
   },

   brittCafe: {
     title: "Britt Café & Bakery",
     subtitle: "Artisan coffee, pastries & light bites at Jaco Walk",
     description: "Charming café in Jaco Walk offering freshly baked pastries, artisan breads, sandwiches, and premium Café Britt coffee in an airy, AC-cooled space with indoor and outdoor seating.",
     locationLabel: "Jaco Walk Provincia de Puntarenas Garabito, 61101, Costa Rica",
     images: [
       "https://www.brittcafebakery.com/assets/img/carrusel/home-carrusel-1.jpg",
       "https://www.brittcafebakery.com/assets/img/home/home-bg-freshbakeddaily.jpg",
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/12/36/9e/our-teracce.jpg?w=1600&h=900&s=1",
       'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/46/f1/enjoy-our-pizza.jpg?w=1600&h=900&s=1'
     ],
     phone: [
       { number: "+506-4102-1363" }
     ],
     highlights: [
       "Freshly baked French-style pastries",
       "Premium artisan coffee",
       "Indoor and outdoor seating with AC"
     ],
     warnings: [
       "Can get busy mid-morning on weekends"
     ],
     links: [
       { name: "Website", url: "http://www.brittcafebakery.com" },
       { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d13495234-Britt_Cafe_Bakery_Jaco-Jaco.html" }
     ],
     mapLocation: {
       googleMapsUrl: "https://maps.app.goo.gl/GJf6bqftpqQ4tSf99",
       embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.8077099759325!2d-84.62814572497385!3d9.611819390474665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c798795a59bf%3A0xfd2367a8d9730e5c!2sBritt%20Caf%C3%A9%20and%20Bakery%20%E2%80%A2%20Garabito!5e0!3m2!1sen!2sus!4v1753319213826!5m2!1sen!2sus"
     }
   },

   maleconBar: {
     title: "Malecón Bar Restaurante Jacó",
     subtitle: "Beachfront bar & grill with ocean views",
     description: "Beachfront bar and grill on Calle Las Olas, offering grilled seafood, quesadillas, patacones, smoothies, cocktails served in frozen pineapples, and a relaxed oceanfront vibe with friendly, bilingual service.",
     locationLabel: "J979+VJW, Calle Las Olas, Provincia de Puntarenas, Jacó, Costa Rica",
     images: [
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/1b/96/1c/entrance.jpg?w=1400&h=800&s=1",
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/a3/a0/48/seafood.jpg?w=1400&h=800&s=1",
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/97/f4/72/photo0jpg.jpg?w=1400&h=800&s=1"
     ],
     phone: [
       { number: "+506-2643-3916" }
     ],
     highlights: [
       "Oceanfront seating with sunset views",
       "Quesadillas, seafood spaghetti & smoothies",
       "Cocktails served in frozen pineapples"
     ],
     links: [
       { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d6484715-Malecon_Bar_y_Restaurante-Jaco.html" }
     ],
     mapLocation: {
       googleMapsUrl: "https://maps.app.goo.gl/pVaGPSfyFm7U4gTUA",
       embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.7737953636483!2d-84.63350852497382!3d9.614735790471892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c71c90cb143d%3A0xfea4565408aabb08!2sBar%20y%20Restaurante%20Malec%C3%B3n!5e0!3m2!1sen!2sus!4v1753319248633!5m2!1sen!2sus"
     }
   },

   lemonZest: {
     title: "Lemon Zest Restaurant",
     subtitle: "Fine-dining fusion cuisine in central Jacó",
     description: "Family-owned since 2007, this chef-driven restaurant by Richard and Nellie Lemon offers international fusion — from sushi to duck in blackberry sauce and Caribbean-style jerk pork. Features an extensive wine list and refined yet relaxed ambiance.",
     locationLabel: "Garabito, El Jardin Plaza-above Amancio's Pizza; Av. Diaz, 50m S. Mas x Menos; Jaco, Puntarenas Province, Costa Rica",
     images: [
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/19/ca/0d/caption.jpg?w=1400&h=-1&s=1",
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/21/fc/a2/caption.jpg?w=1000&h=600&s=1",
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/86/82/eb/duck.jpg?w=1400&h=-1&s=1"
     ],
     phone: [
       { number: "+506-2643-2591" }
     ],
     highlights: [
       "Chef-driven international fusion dishes",
       "Extensive wine list",
       "Air-conditioned + outdoor patio seating"
     ],
     warnings: [
       "Reservations strongly recommended - very popular"
     ],
     links: [
       { name: "Website", url: "http://www.lemonzestjaco.com/" },
       { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d1022065-Lemon_Zest_Restaurant-Jaco.html" }
     ],
     mapLocation: {
       googleMapsUrl: "https://maps.app.goo.gl/ffsoW9f3upjh6H1i8",
       embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7867.593045595746!2d-84.6264769!3d9.612781499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c73db445da79%3A0xf97fccd49eb620a2!2sLemon%20Zest!5e0!3m2!1sen!2sus!4v1753319391871!5m2!1sen!2sus"
     }
   },

   jerahAuthenticThai: {
    isfavorite: true,
     title: "Jerah Authentic Thai Cuisine",
     subtitle: "Authentic Thai dishes in a cozy treehouse-style setting",
     description: "Since 2002, this beloved spot on Calle Anita serves fresh, flavorful Thai cuisine—soup, curry, stir-fry, noodles—with chef Christian's international touch and a relaxed 'treehouse' vibe.",
     locationLabel: "J998+6P3 Entre Bar Isaga y Jacó Club Blù, C. Anita, Provincia de Puntarenas, Jacó, 61101, Costa Rica",
     images: [
       "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/294598794_494167262629429_8967100247288967602_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mawAkYDsS6cQ7kNvwFYDxZ0&_nc_oc=AdkzGHbqwVSwERvSJrPcF-_2J2g9ansRvoMw7OlirJIHBInekBvG518-VjCIB35KxTrBV7WLEY2oBZ_jm4gQw9Sy&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=piKkfyEHLvWgHS-WRpzDrQ&oh=00_AfR64rOgd2o5Yhn3aV0OnLfHlKS1WiFntYXR-eqBHiMUiw&oe=68875489",
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/4f/f1/48/nice-and-airy-up-here.jpg?w=1100&h=-1&s=1",
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/fd/a0/11/caption.jpg?w=1400&h=800&s=1"
     ],
     phone: [
       { number: "+506-8359-2067" }
     ],
     highlights: [
       "Fresh-caught Thai soups, curries, noodles",
       "Vegetarian/vegan menu options",
       "Strong TripAdvisor rating (~4.7)"
     ],
     warnings: [
       "Cash-only; no credit cards accepted"
     ],
     links: [
       { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d12429756-Jerah_Authentic_Thai_Cuisine-Jaco.html" },
       { name: "Facebook", url: "https://www.facebook.com/JerahThaiJaco/" }
     ],
     mapLocation: {
       googleMapsUrl: "https://maps.app.goo.gl/hmb4wcxQccvSUVdi7",
       embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.7360754286215!2d-84.63578922497382!3d9.617978390468798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c71689449e39%3A0xb3ce66ddfdd171d!2sJerah%20Restaurant!5e0!3m2!1sen!2sus!4v1753319455152!5m2!1sen!2sus"
     }
   },

   mundaka: {
     title: "Mundaka - Breakfast & Smoothies",
     subtitle: "Healthy breakfast, smoothie bowls & wraps in downtown Jacó",
     description: "Vibrant cafe on Avenida Pastor Díaz serving smoothie bowls, crepes, waffles, wraps, salads, and Costa Rican breakfast like gallo pinto. Casual, surf-inspired setting with free Wi-Fi.",
     locationLabel: "Pastor Diaz Ave centro, Puntarenas Province, Jaco, 61101, Costa Rica",
     images: [
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/e9/82/8e/caption.jpg?w=1100&h=600&s=1",
       "https://media-cdn.tripadvisor.com/media/photo-o/2f/ff/38/37/caption.jpg",
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/50/55/04/caption.jpg?w=1400&h=-1&s=1",
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/a6/bc/71/caption.jpg?w=1400&h=-1&s=1"
     ],
     phone: [
       { number: "+506-2643-1281" }
     ],
     highlights: [
       "Fresh smoothie bowls & crepes",
       "Costa Rican breakfast options",
       "Surf-inspired cafe with free Wi-Fi"
     ],
     links: [
       { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d24562308-Mundaka_Restaurant_Jaco-Jaco.html" },
       { name: "Facebook", url: "https://www.facebook.com/Mundaka-Good-food-and-smoothies-100063653072767/" }
     ],
     mapLocation: {
       googleMapsUrl: "https://maps.app.goo.gl/nSPv1z8zw56tqjfr6",
       embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.764524058982!2d-84.62893859999997!3d9.615532899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c779cd2374b7%3A0xb8be412922b057f1!2sRestaurante%20Mundaka!5e0!3m2!1sen!2sus!4v1753319621320!5m2!1sen!2sus"
     }
   },

   jerahGermanBakery: {
    isfavorite: true,
     title: "Jerah German Bakery",
     subtitle: "Authentic German breads & pastries beneath Jerah Thai",
     description: "Located underneath Jerah Authentic Thai on Calle Anita, this bakery offers freshly baked German-style breads, baguettes, and pastries each morning.",
     locationLabel: "C. Anita, Provincia de Puntarenas, Jacó, 61101, Costa Rica",
     phone: [
       { number: "+506-8359-2067" }
     ],
     highlights: [
       "Freshly baked German breads and baguettes",
       "Variety of authentic pastries"
     ],
     links: [
       { name: "Google Maps", url: "https://www.google.com/maps/place/Jerah+Bakery+%2F+Panader%C3%ADa/@9.6179552,-84.6331247,17z/data=!4m15!1m8!3m7!1s0x8fa1c7003fdcf503:0x86cf56bda700a2dc!2sJerah+Bakery+%2F+Panader%C3%ADa!8m2!3d9.6180035!4d-84.6331992!10e5!16s%2Fg%2F11w21dhf0g!3m5!1s0x8fa1c7003fdcf503:0x86cf56bda700a2dc!8m2!3d9.6180035!4d-84.6331992!16s%2Fg%2F11w21dhf0g?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D" }
     ],
     mapLocation: {
       googleMapsUrl: "https://maps.app.goo.gl/PJhtoohXvQXYU4mt8",
       embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3933.736345239274!2d-84.6331247!3d9.617955199999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c7003fdcf503%3A0x86cf56bda700a2dc!2sJerah%20Bakery%20%2F%20Panader%C3%ADa!5e0!3m2!1sen!2sus!4v1753319937673!5m2!1sen!2sus"
     }
   },
   jacoWalk: {
     title: "Jaco Walk Shopping Center",
     subtitle: "Open-air mall with shopping, dining & entertainment",
     description: "A vibrant, open-air mixed-use center in the heart of Jacó Beach featuring shops, restaurants, cafés, bars, fitness studios, services and an ecological walkway.",
     locationLabel: "Puntarenas Province, Jaco, 61101, Costa Rica",
     images: [
      'https://www.jacowalk.com/sites/all/files/styles/slideshow/public/images/slideshow/Dise%C3%B1o%20sin%20t%C3%ADtulo.png?itok=qZunNv_R',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/fb/7b/5d/caption.jpg?w=1400&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/a5/dc/72/photo5jpg.jpg?w=1400&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/78/fe/cf/from-the-walk-one-block.jpg?w=2000&h=-1&s=1'
    ],
     phone: [
       { number: "+506-4001-3272" }
     ],
     highlights: [
       "Wide variety of boutiques, artisan shops & services",
       "Diverse restaurants, cafés & live music events",
       "Dog-friendly with green corridors & free Wi-Fi"
     ],
     links: [
       { name: "Website", url: "http://www.jacowalk.com/" },
       { name: "TripAdvisor", url: "https://www.tripadvisor.com/Attraction_Review-g309271-d13942031-Jaco_Walk_Open_Air_Shopping_Center-Jaco.html" }
     ],
     mapLocation: {
       googleMapsUrl: "https://maps.app.goo.gl/6qFVkuWpczNthcfK6",
       embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.8103865216895!2d-84.6277425237804!3d9.611589190474914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c740f6df79ef%3A0x7278529da8b4ad12!2sJac%C3%B3%20Walk%20Shopping%20Center!5e0!3m2!1sen!2sus!4v1753320293370!5m2!1sen!2sus"
     }
   },

   seasalt: {
    isFavorite: true,
     title: "SeaSalt Beachfront Bar & Restaurant",
     subtitle: "Beachfront fusion dining",
     description: "Open 7 AM to 10 PM daily, SeaSalt offers Mediterranean-Caribbean fusion cuisine—fish tacos, ceviche, patacones, sandwiches, salads—served right by the sand with vibrant sea-breeze ambiance.",
     locationLabel: "Calle Bribrí, Jacó Beach, Puntarenas, Costa Rica 61101",
      images: [
       '/jaco_card_images/sea_salt_a_3.png',
       '/jaco_card_images/sea_salt_a_4.png',
       '/jaco_card_images/sea_salt_a_5.png',
       '/jaco_card_images/sea_salt_a_6.png',
       '/jaco_card_images/sea_salt_a_7.png'
      ],
     phone: [
       { number: "+506-7089-0385" }
     ],
     highlights: [
       "Mediterranean-Caribbean fusion dishes",
       "Happy hour drinks with ocean view",
       "Beachfront seating at Hotel Jacó"
     ],
     links: [
       { name: "Website", url: "https://www.seasaltjacobeachcr.com/" },
       { name: "TripAdvisor", url: "https://www.tripadvisor.com/Restaurant_Review-g309271-d26839294-Sea_Salt_Beachfront_Bar_and_Restaurant-Jaco.html" }
     ],
     mapLocation: {
       googleMapsUrl: "https://maps.app.goo.gl/xb8Y4ProqmNEKnDQ7",
       embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.752230027837!2d-84.63550972378036!3d9.616589790470119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c7816bc252d3%3A0x85a2ef2085f96efa!2sSeaSalt!5e0!3m2!1sen!2sus!4v1753322742628!5m2!1sen!2sus"
     }
   }





};

// ============================================================================
// TAB CONFIGURATION - Easy to manage which cards appear in which tabs
// ============================================================================

const tabConfig = {
  beaches: [
    allCards.jacoBeach,
    allCards.playaBlanca,
    allCards.playaMantas,
    allCards.playaHermosa,
    allCards.playaHerradura,
  ],
  surfing: [
    allCards.surferFactory,
    allCards.soulSurf,
    allCards.playaHermosa,
  ],
  restaurants: [
    allCards.elManglar,
    allCards.seasalt,
    allCards.vidaHermosa,
    allCards.KoKoGastroBar,
    allCards.elChicano,
    allCards.amancios,
    allCards.infierno,
    allCards.pizzaPata,
    allCards.ridiculousBurgers,
    allCards.diabloBurger,
    allCards.tsunamiSushi,
    allCards.sushiAtHome,
    allCards.greenRoom,
    allCards.brittCafe,
    allCards.maleconBar,
    allCards.lemonZest,
    allCards.jerahAuthenticThai,
    allCards.mundaka,
    allCards.jerahGermanBakery,
    allCards.jacoBar,
  ],
  nightlife: [
    allCards.jacoBar,
    allCards.orangePub,
    allCards.xtcJaco,
    allCards.republikCostaRica,
  ],
  activities: [
    allCards.beachHomeCostaRica,
    allCards.tortugaIsland,
    allCards.soulSurf,
    allCards.surferFactory,
    
  ],
  shopping: [
    allCards.jacoWalk,
  ],
  transportation: [
    allCards.airportTransfer,
  ],
  tourGuide: [
    allCards.vladAlvarado,
  ],
};

// ============================================================================
// TAB LABELS AND TITLES
// ============================================================================

const tabLabels = [
  'Beaches',
  'Surfing',
  'Restaurants',
  'Nightlife',
  'Activities',
  'Shopping',
  'Transportation',
  'Tour Guide',
];

const tabTitles = [
  {
    title: 'Beaches',
    icon: <BeachIcon width={64} height={64} color="black" />
  },
  {
    title: 'Surfing',
    icon: <SurfingIcon width={64} height={64} color="black" />
  },
  {
    title: 'Restaurants',
    icon: <RestaurantIcon width={64} height={64} color="black" />
  },
  {
    title: 'Nightlife',
    icon: <NightlifeIcon width={64} height={64} color="black" />
  },
  {
    title: 'Activities',
    icon: <ActivitiesIcon width={64} height={64} color="black" />
  },
  {
    title: 'Shopping',
    icon: <ShoppingIcon width={64} height={64} color="black" />
  },
  {
    title: 'Transportation',
    icon: <TransportationIcon width={64} height={64} color="black" />
  },
  {
    title: 'Tour Guide',
    icon: <TourGuideIcon width={64} height={64} color="black" />
  },
];

// ============================================================================
// COMPONENT INTERFACES
// ============================================================================

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`jaco-tabpanel-${index}`}
      aria-labelledby={`jaco-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 0 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const JacoPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [previousTab, setPreviousTab] = useState(0);

  // Handle URL hash for tab selection
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the # symbol
    if (hash) {
      const tabMapping: { [key: string]: number } = {
        'beaches': 0,
        'surfing': 1,
        'restaurants': 2,
        'nightlife': 3,
        'activities': 4,
        'shopping': 5,
        'transportation': 6,
        'tour-guide': 7,
      };
      const tabIndex = tabMapping[hash];
      if (tabIndex !== undefined && tabIndex >= 0 && tabIndex < tabLabels.length) {
        setTabValue(tabIndex);
      }
    }
  }, []);

  const handleTabChange = (newValue: number) => {
    setPreviousTab(tabValue);
    setTabValue(newValue);
  };

  const handleSwipableTabChange = (newTab: number) => {
    setPreviousTab(tabValue);
    setTabValue(newTab);
  };

  return (
    <Box sx={{ bgcolor: 'linear-gradient(to bottom, #fff 0%, #f6faff 60%, #eaf2fb 100%)', minHeight: '100vh' }}>
      {/* Hero Section with Google Earth video background */}
      <JacoHero>
        <JacoTabBar
          tabValue={tabValue}
          onTabChange={handleTabChange}
          tabLabels={tabLabels}
        />
      </JacoHero>

      {/* Tabbed Content Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 } }}>
        {/* Beaches Tab */}
        <TabPanel value={tabValue} index={0}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Beaches"
              icon={<BeachIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              jacoStyle={true}
              smartFit={true}
              cards={tabConfig.beaches}
            />
          </TabTransitionWrapper>
        </TabPanel>

        {/* Surfing Tab */}
        <TabPanel value={tabValue} index={1}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Surfing"
              icon={<SurfingIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              jacoStyle={true}
              cards={tabConfig.surfing}
            />
          </TabTransitionWrapper>
        </TabPanel>

        {/* Restaurants Tab */}
        <TabPanel value={tabValue} index={2}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Restaurants"
              icon={<RestaurantIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              jacoStyle={true}
              cards={tabConfig.restaurants}
            />
          </TabTransitionWrapper>
        </TabPanel>

        {/* Nightlife Tab */}
        <TabPanel value={tabValue} index={3}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Nightlife"
              icon={<NightlifeIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              jacoStyle={true}
              cards={tabConfig.nightlife}
            />
          </TabTransitionWrapper>
        </TabPanel>

        {/* Activities Tab */}
        <TabPanel value={tabValue} index={4}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Activities"
              icon={<ActivitiesIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              jacoStyle={true}
              cards={tabConfig.activities}
            />
          </TabTransitionWrapper>
        </TabPanel>

        {/* Shopping Tab */}
        <TabPanel value={tabValue} index={5}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Shopping"
              icon={<ShoppingIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              jacoStyle={true}
              cards={tabConfig.shopping}
            />
          </TabTransitionWrapper>
        </TabPanel>

        {/* Transportation Tab */}
        <TabPanel value={tabValue} index={6}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Transportation"
              icon={<TransportationIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              jacoStyle={true}
              cards={tabConfig.transportation}
            />
          </TabTransitionWrapper>
        </TabPanel>

        {/* Tour Guide Tab */}
        <TabPanel value={tabValue} index={7}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Tour Guide"
              icon={<TourGuideIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              jacoStyle={true}
              cards={tabConfig.tourGuide}
            />
          </TabTransitionWrapper>
        </TabPanel>
      </Container>

      {/* Footer */}
      <Box sx={{ py: 4, textAlign: 'center', fontWeight: 500, fontSize: 13, letterSpacing: 0.5, mt: 6, color: '#637988' }}>
        © 2025 Jacó Bay Condos. All rights reserved.
      </Box>
    </Box>
  );
};

export default JacoPage; 