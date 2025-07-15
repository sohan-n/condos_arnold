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
    allCards.vidaHermosa,
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