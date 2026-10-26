(function () {
        'use strict';

        /* ==========================================================
           ЕДИНЫЙ ИСТОЧНИК ДАННЫХ
           Редактируйте здесь: имя, фото, проекты, выставки, контакты.
           Изображение проекта: укажите image: 'url' (иначе рисуется
           генеративная заглушка по параметрам art).
           tile: [колонки, ряды] — размер в сетке портфолио (12 колонок).
           featured: true — показывать на главной (до 6 проектов).
           ========================================================== */
        var A = {
            name: 'настя кедрина',
            role: 'медиахудожник с Байкала, TouchDesigner-разработчик',
            cities: ['Иркутск', 'Москва'],
            aboutMeta: '22 года, Иркутск – Москва',
            handle: '@NKEDRINA',
            heroImage: 'images/back-video-light.gif',   // URL фонового изображения Hero (пусто — генеративная текстура)
            photo: 'images/me_1.jpg',       // URL фотографии художника (пусто — заглушка)
            shortBio: '',
            practice: 'Работаю с генеративной графикой, светом и физическими интерфейсами, объединяя технологии в единое интерактивное пространство, основанное на чувственном опыте',
            bio: [
                'Родилась в Иркутске, где локальная культура и природа Байкала повлияли на формирование её художественного языка. С детства интересуется фотографией и информатикой. Интерес к современному искусству и технологиям перерос в художественную практику в сфере медиаискусства: в 2024 году представила на выставке свою первую интерактивную инсталляцию и начала проводить мастер-классы по TouchDesigner в ЦСИ «Огонь» в Иркутске.',
                'Окончила бакалавриат «Прикладная информатика в дизайне» ИГУ и продолжила обучение в магистратуре «Технологическое искусство» (ArtTECH) НИТУ МИСИС в Москве, где сейчас живёт и работает.',
                'В своей практике исследует чувства и эмоции, сочетая цифровые и аналоговые техники, природные и технические образы. Работает с генеративной графикой, светом и физическими интерфейсами, объединяя технологии в единое интерактивное пространство. В своих произведениях уделяет особое внимание созданию чувственного опыта и интерактивной составляющей.',
                'Параллельно с медиаискусством занимается музыкой: самостоятельно изучила музыкальную теорию, играет на фортепиано и пишет партитуры. На данный момент написала три произведения для фортепиано.',
                'Участвовала в ярмарке «СКАН» в Красноярске, выставках Галереи Краснохолмская в Москве, галереи Виктора Бронштейна и ЦСИ «Огонь» в Иркутске. Программировала свет для Дня открытых дверей студии LYM, а также участвовала в разработке двух интерактивных инсталляций для Национального центра «Россия» в Ханты-Мансийске. Принимала участие в фестивалях «Открывая безымянное» во Владивостоке и «Голос кочевников» в Улан-Удэ.'
            ],
            statement: [
                'Наша жизнь состоит из чувств и эмоций. Современный мир наполнен технологиями, а цифровой опыт давно стал частью нашего чувственного восприятия.',
                'Исследую, что стоит за нашим чувственным опытом: как устроены чувства, как мы их воспринимаем и как реагируем на них. В процессе работы обращаюсь к научным исследованиям, отражая сложные идеи в художественных образах.',
                'Работаю с генеративной графикой, интерактивными инсталляциями, светом, фотографией, музыкой и стрит-артом. Не ограничиваю свою практику одним медиумом — сочетание цифровых и аналоговых техник помогает взглянуть на тему чувств с разных сторон и создать чувственный опыт взаимодействия человека с цифровым или городским пространством. Мне интересно визуализировать образы, которые нам трудно описать и невозможно увидеть, но которые наполнены эмоциями и ощущениями: «чувство дома», «время» или «мечты».',
                'Важную роль в моей практике играют природа и городская среда. Иркутские и байкальские пейзажи научили меня находить красоту в привычных вещах: на Байкале я получила опыт в фотографии и видеосъемке, а в Иркутске полюбила стрит-арт за честный диалог с городом и людьми.',
                'Для меня искусство — это способ оставаться любопытной к миру и к себе, честно и открыто задавать вопросы, на которые не всегда найдутся однозначные ответы.',
                'Верю, что в мире, где цифровая среда часто заменяет живое общение, внимание к собственным чувствам способно помочь нам жить лучше и осознаннее. Пусть в мире будет чуть больше места для наших чувств...'
            ],
            mediums: [
                { name: 'Генеративная графика', text: 'Визуальные системы в реальном времени: графика для мэппинга, промо-роликов и аудиореактивных выступлений.' },
                { name: 'Свет', text: 'Световые инсталляции и программирование светового оборудования для событий и выставок.' },
                { name: 'Звук', text: 'Звук как часть интерактивной среды: аудиореактивные системы и работа с музыкантами.' },
                { name: 'Физические интерфейсы', text: 'Датчики, Kinect, нейрообруч — естественное взаимодействие, не требующее инструкций.' },
                { name: 'Интерактивные инсталляции', text: 'Пространства, где зритель становится частью системы и проживает собственные чувства.' },
                { name: 'AV-выступления', text: 'Живые выступления, где визуальный ряд и звук создаются и меняются вместе.' }
            ],
            education: [
                { years: '2025–2027', text: 'магистратура «Технологическое искусство» (ArtTECH), НИТУ МИСИС, Москва' },
                { years: '2021–2025', text: 'бакалавриат «Прикладная информатика в дизайне», ИГУ, Иркутск' }
            ],
            experience: [
                { years: '2026', text: 'программирование рисующего лазера — студия LYM, Москва' },
                { years: '2026', text: 'программирование сценических лебедок — студия LYM, Москва' },
                { years: '2026', text: 'программирование кинетической стены — студия LYM, Москва' }
            ],
            workshops: [
                { years: '2026', text: 'программирование рисующего лазера, студия LYM, Москва' },
                { years: '2026', text: 'программирование сценических лебедок, студия LYM, Москва' },
                { years: '2026', text: 'программирование кинетической стены, студия LYM, Москва' }
            ],
            email: 'nkedrina@list.ru',
            cv: 'data/CV.pdf',
            portfolioPdf: 'data/portfolio-nkedrina.pdf',
            socials: [
                { label: 'instagram', url: 'https://instagram.com/nkedrina' },
                { label: 'behance', url: 'https://www.behance.net/nkedrina' }
            ],
            telegram: { label: 'telegram', url: 'https://t.me/nkedrina' },
            heroArt: { style: 'texture', seed: 5, pal: ['#0c0c0d', '#ff5a36', '#3a1a12', '#f2f0ea'] },
            photoArt: { style: 'vortex', seed: 7, pal: ['#0c0c0d', '#ff5a36', '#8a3a22', '#f2f0ea'] }
        };

        // Разделы портфолио (6 шт.). Проект привязывается через поле cat.
        var CATS = [
            { id: 'install', name: 'интерактивные инсталляции', short: 'Инсталляции', text: 'Работы, где зритель становится частью системы: датчики, нейроинтерфейсы, ИИ и физические интерфейсы.' },
            { id: 'gen', name: 'генеративная графика / видео-арт', short: 'Графика', text: 'Алгоритмическая графика и видео-арт для мэппинга, роликов и медиаинсталляций.' },
            { id: 'light', name: 'свет / программирование', short: 'Свет', text: 'Световые инсталляции и программирование светового оборудования.' },
            { id: 'music', name: 'музыка', short: 'Музыка', text: 'Музыкальные работы и аудиореактивная графика.' },
            { id: 'photo', name: 'фотография', short: 'Фотография', text: 'Городские и природные наблюдения, фотоистории и визуальные исследования среды.' },
            { id: 'street', name: 'стрит-арт', short: 'Стрит-арт', text: 'Работы в городской среде и уличных форматах.' }
        ];

        var PROJECT_SECTION_ORDER = {
            install: ['consent-machine', 'oil-tonne', 'energetic-heart', 'ei-time', 'mood-mirror', 'time', 'prediction', 'baikal-install', 'kinetic-symphony', 'five-moons', 'telosophy'],
            gen: ['untitled-video', 'sense-of-home', 'subtraction', 'voice-of-nomads', 'time-ar', 'dreams', 'living-energy'],
            light: ['aqualumina', 'lym-open-day'],
            music: ['piano-works', 'audio-reactive-graphics', 'piano-works-2'],
            photo: ['baikal-photo', 'saint-petersburg', 'dont-stop', 'path'],
            street: ['sense-of-home-street', 'exit']
        };

        // desc — событие / место, concept — соавторы и примечания, cat — id раздела
        var PROJECTS = [
            { id: 'exit', title: 'Выход', year: 2026, medium: 'Филейное вязание', desc: 'Владивосток, 2026.', concept: '', tech: ['Стрит-арт'], exhibitions: [], links: [], image: 'projects/32_exit/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'street', art: { style: 'texture', seed: 35, pal: ['#0a0a0d', '#ff5a36', '#f1efe9', '#6a4d46'] } },
            { id: 'sense-of-home-street', title: 'Чувство дома (стрит-арт)', year: 2026, medium: 'Филейное вязание', desc: 'Владивосток, 2026.', concept: '', tech: ['Стрит-арт'], exhibitions: [], links: [], image: 'projects/31_sense_of_home_street/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'street', art: { style: 'texture', seed: 34, pal: ['#0a0a0d', '#ff5a36', '#f1efe9', '#6a4d46'] } },
            { id: 'aqualumina', title: 'aqualumina', year: 2026, medium: 'Световая инсталляция на воде', desc: 'Фестиваль «Открывая Безымянное», Владивосток, 25–27 сентября 2026.', concept: 'Проект создан в рамках магистратуры ArtTECH МИСИС.', tech: ['Свет', 'Инсталляция'], exhibitions: ['f1'], links: [], image: 'projects/30_aqualumina/cover.png', video: '', gallery: null, tile: [8, 6], featured: true, cat: 'light', art: { style: 'waves', seed: 11, pal: ['#07090c', '#ff5a36', '#f1efe9', '#7c2a18'] } },
            { id: 'untitled-video', title: 'Без названия', year: 2026, medium: 'Видео-арт, 2’56’’', desc: 'Ярмарка СКАН, Красноярск, октябрь 2026; «Волшебная гора», KABINET, Самара, август 2026.', concept: '', tech: ['Видео-арт'], exhibitions: ['e1', 'e3'], links: [], image: 'projects/29_untitled/cover.png', video: '', gallery: null, tile: [8, 6], featured: true, cat: 'gen', art: { style: 'streaks', seed: 44, pal: ['#0b0b0c', '#f1efe9', '#ff5a36', '#ffffff'] } },
            { id: 'sense-of-home', title: 'Чувство дома (мэппинг)', year: 2026, medium: 'Цифровое производство, мэппинг-проекция, видео-арт', desc: 'В рамках магистратуры ArtTECH МИСИС, 2026.', concept: 'Проект представляет собой мэппинг-проекцию на макет дома, созданный по реальной фотографии утраченного деревянного дома в Иркутске.', tech: ['Видео-арт', 'Мэппинг'], exhibitions: [], links: [], image: 'projects/28_sense_of_home_mapping/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'gen', art: { style: 'waves', seed: 18, pal: ['#0b0c0d', '#ff5a36', '#f1efe9', '#9e4d3b'] } },
            { id: 'consent-machine', title: 'Машина согласия', year: 2026, medium: 'Интерактивная инсталляция, ИИ, веб-страница', desc: '«Мозг. Искусство сознания», Галерея Краснохолмская, Москва.', concept: 'Проект создан в рамках магистратуры ArtTECH МИСИС, 2026.', tech: ['ИИ', 'Интерактивные инсталляции'], exhibitions: ['e2'], links: [], image: 'projects/27_consent_machine/cover.png', video: '', gallery: null, tile: [8, 6], featured: true, cat: 'install', art: { style: 'shards', seed: 66, pal: ['#101012', '#f1efe9', '#3a3a3f', '#ff5a36'] } },
            { id: 'lym-open-day', title: 'День открытых дверей студии LYM', year: 2026, medium: 'Программирование светового оборудования', desc: 'Студия LYM (Light Your Mind), 14 мая 2026, Москва.', concept: 'Фото: @psi_agency.', tech: ['Свет', 'Программирование'], exhibitions: ['f2'], links: [], image: 'projects/26_lym_open_day/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'light', art: { style: 'tunnel', seed: 22, pal: ['#0a0a0b', '#ff5a36', '#f1efe9', '#3a1a12'] } },
            { id: 'oil-tonne', title: 'Вперёд к 14-миллиардной тонне нефти', year: 2025, medium: 'Интерактивная инсталляция', desc: 'Национальный центр «Россия», Ханты-Мансийск, 2025.', concept: '', tech: ['Интерактивные инсталляции'], exhibitions: ['e5'], links: [], image: 'projects/24_tonnes_of_oil/cover.png', video: '', gallery: null, tile: [8, 6], featured: true, cat: 'install', art: { style: 'bars', seed: 33, pal: ['#141416', '#ff5a36', '#f1efe9', '#6b6860'] } },
            { id: 'energetic-heart', title: 'Энергетическое сердце России', year: 2025, medium: 'Интерактивная инсталляция', desc: 'Национальный центр «Россия», Ханты-Мансийск, 2025.', concept: '', tech: ['Интерактивные инсталляции'], exhibitions: ['e5'], links: [], image: 'projects/22_energetic_heart/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'install', art: { style: 'vortex', seed: 14, pal: ['#090b0d', '#ff5a36', '#f1efe9', '#6b6860'] } },
            { id: 'ei-time', title: 'EI-Time / Время эмоционального интеллекта', year: 2026, medium: 'Интерактивный дата-арт', desc: '«Завтра и послезавтра», Галерея Краснохолмская, Москва, 2026.', concept: 'Работа создана в рамках магистратуры ArtTECH МИСИС.', tech: ['Дата-арт', 'Интерактивные инсталляции'], exhibitions: ['e4'], links: [], image: 'projects/21_ei_time/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'install', art: { style: 'texture', seed: 3, pal: ['#0a0b0f', '#ff5a36', '#f1efe9', '#4d2e22'] } },
            { id: 'subtraction', title: '[вы]читание', year: 2026, medium: 'Видео-арт', desc: '«Завтра и послезавтра», Галерея Краснохолмская, Москва, 2026.', concept: 'Проект-исследование субтрактивного текста и найденной поэзии.', tech: ['Видео-арт'], exhibitions: ['e4'], links: [], image: 'projects/20_subtraction/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'gen', art: { style: 'bars', seed: 38, pal: ['#09090a', '#ff5a36', '#f1efe9', '#4f4036'] } },
            { id: 'mood-mirror', title: 'Mood Mirror', year: 2025, medium: 'Интерактивная инсталляция с нейрообручем', desc: '«Цифровые чувства. Мультисенсорный поворот», Галерея Краснохолмская, Москва, 2025.', concept: 'Проект создан в рамках магистратуры ArtTECH совместно с Иваном Николаевым и Марией Киселевой.', tech: ['Нейрообруч', 'Интерактивные инсталляции'], exhibitions: ['e6'], links: [], image: 'projects/18_mood_mirror/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'install', art: { style: 'vortex', seed: 7, pal: ['#0b0b0c', '#ff5a36', '#d9d4c7', '#f1efe9'] } },
            { id: 'voice-of-nomads', title: 'Голос кочевников', year: 2025, medium: 'Аудиореактивная графика в реальном времени', desc: 'Музыкальный фестиваль «Голос кочевников», выступление группы «Вещества», Иркутск — Улан-Удэ, 2025.', concept: '', tech: ['AV', 'Аудиореактивная графика'], exhibitions: ['f3'], links: [], image: 'projects/17_voice_of_nomads/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'gen', art: { style: 'streaks', seed: 88, pal: ['#0c0c0d', '#ff5a36', '#f1efe9', '#ffffff'] } },
            { id: 'living-energy', title: 'Живая энергия', year: 2025, medium: 'Генеративная графика для мэппинга', desc: '«Энергия как предчувствие», галерея В. Бронштейна, Иркутск, 2025.', concept: 'Инсталляция Григория Свердлова; мэппинг выполнен совместно со Степаном Шоболовым и Алексеем Власевским.', tech: ['Генеративная графика', 'Мэппинг'], exhibitions: ['e8'], links: [], image: 'projects/13_living_energy/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'gen', art: { style: 'blobs', seed: 77, pal: ['#0c0c0d', '#ff7a3a', '#ffd9b8', '#c23a1c'] } },
            { id: 'time-ar', title: 'Время (AR)', year: 2025, medium: 'Видео-арт в дополненной реальности', desc: '«Выставка №37», ЦСИ Огонь, Иркутск, 2025.', concept: '', tech: ['Видео-арт', 'AR'], exhibitions: ['e7'], links: [], image: 'projects/12_time_ar/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'gen', art: { style: 'texture', seed: 29, pal: ['#0c0c0d', '#ff5a36', '#f1efe9', '#6a4d46'] } },
            { id: 'dreams', title: 'Мечты', year: 2024, medium: 'Генеративная графика, зеркало, печать', desc: 'Фестиваль «Детство», арт-пространство Сияние, Иркутск, 2024.', concept: '', tech: ['Генеративная графика', 'Зеркало'], exhibitions: ['e9'], links: [], image: 'projects/11_dreams/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'gen', art: { style: 'vortex', seed: 41, pal: ['#0a0a0d', '#ff5a36', '#f1efe9', '#682d28'] } },
            { id: 'kinetic-symphony', title: 'Кинетическая симфония', year: 2024, medium: 'Интерактивная инсталляция с Kinect', desc: 'Выставка «Шевелись!», ЦСИ Огонь, Иркутск, 2024.', concept: '', tech: ['Kinect', 'Интерактивные инсталляции'], exhibitions: ['e10'], links: [], image: 'projects/10_kinetic_symphony/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'install', art: { style: 'tunnel', seed: 99, pal: ['#0c0c0d', '#f1efe9', '#ff5a36', '#2a2a2d'] } },
            { id: 'five-moons', title: 'Пять лун', year: 2025, medium: 'Интерактивная инсталляция с Kinect', desc: 'Парк-отель Алтан совместно с арт-резиденцией Устье, 2025.', concept: 'Оформление юрты совместно со Степаном Шоболовым.', tech: ['Kinect', 'Интерактивные инсталляции'], exhibitions: [], links: [], image: 'projects/8_five_moons/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'install', art: { style: 'texture', seed: 73, pal: ['#0d0d0f', '#ff5a36', '#f1efe9', '#7c2a18'] } },
            { id: 'telosophy', title: 'Телософия', year: 2024, medium: 'Серия перформансов с генеративной графикой', desc: 'Выставка «Шевелись!», ЦСИ Огонь, Иркутск, 2024.', concept: 'ТЕЛесное высказывание Лизы Изидоры.', tech: ['Генеративная графика', 'Перформанс'], exhibitions: ['e10'], links: [], image: 'projects/9_telosophy/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'install', art: { style: 'vortex', seed: 15, pal: ['#101012', '#ff5a36', '#f1efe9', '#774431'] } },
            { id: 'baikal-install', title: 'Ночь музеев 2025', year: 2025, medium: 'Интерактивная инсталляция с Kinect', desc: 'В рамках Ночи музеев, ЦСИ Огонь, май 2025.', concept: '', tech: ['Kinect', 'Интерактивные инсталляции'], exhibitions: [], links: [], image: 'projects/14_baikal/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'install', art: { style: 'waves', seed: 12, pal: ['#0a0d10', '#ff5a36', '#f1efe9', '#7c2a18'] } },
            { id: 'prediction', title: 'Предсказание', year: 2025, medium: 'Интерактивная инсталляция с Kinect и датчиком расстояния', desc: 'Арт-пространство Сияние, Иркутск, май 2025.', concept: '', tech: ['Kinect', 'Интерактивные инсталляции'], exhibitions: [], links: [], image: 'projects/15_prediction/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'install', art: { style: 'tunnel', seed: 47, pal: ['#0d0d0f', '#ff5a36', '#f1efe9', '#3a1a12'] } },
            { id: 'time', title: 'Время', year: 2025, medium: 'Интерактивная инсталляция с Kinect и физическим интерфейсом', desc: 'В рамках дипломной работы бакалавриата ИГУ, 2025.', concept: '', tech: ['Kinect', 'Интерактивные инсталляции'], exhibitions: [], links: [], image: 'projects/16_time/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'install', art: { style: 'bars', seed: 25, pal: ['#0a0a0d', '#ff5a36', '#f1efe9', '#7d3323'] } },
            { id: 'piano-works', title: 'Произведения для фортепиано', year: 2024, medium: 'Исполнение на фортепиано с генеративной графикой', desc: '15 декабря 2024.', concept: '', tech: ['Музыка', 'Генеративная графика'], exhibitions: [], links: [], image: 'projects/5_piano_concert/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'music', art: { style: 'shards', seed: 61, pal: ['#0a0b0f', '#ff5a36', '#f1efe9', '#8a3a22'] } },
            { id: 'audio-reactive-graphics', title: 'Аудиореактивная графика', year: 2025, medium: 'Аудиореактивная графика в реальном времени', desc: '', concept: '', tech: ['Музыка', 'AV'], exhibitions: [], links: [], image: 'projects/6_audio_reactive_graphics/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'music', art: { style: 'streaks', seed: 39, pal: ['#0d0d0f', '#ff5a36', '#f1efe9', '#ffffff'] } },
            { id: 'piano-works-2', title: 'Произведения для фортепиано', year: 2025, medium: 'Партитуры', desc: '2024–2025.', concept: '', tech: ['Музыка'], exhibitions: [], links: [], image: 'projects/7_piano_works/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'music', art: { style: 'bars', seed: 76, pal: ['#0b0b0c', '#ff5a36', '#f1efe9', '#7b4b39'] } },
            { id: 'baikal-photo', title: 'Байкал', year: 2025, medium: 'Серия фотографий', desc: 'Снимки с 2019 по 2025.', concept: '', tech: ['Фотография'], exhibitions: [], links: [], image: 'projects/4_baikal/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'photo', art: { style: 'texture', seed: 20, pal: ['#0b0b0c', '#ff5a36', '#f1efe9', '#8a3a22'] } },
            { id: 'saint-petersburg', title: 'Санкт-Петербург', year: 2026, medium: 'Серия фотографий', desc: 'Снимки с 2019 по 2026.', concept: '', tech: ['Фотография'], exhibitions: [], links: [], image: 'projects/3_saint_petersburg/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'photo', art: { style: 'waves', seed: 31, pal: ['#0b0d10', '#ff5a36', '#f1efe9', '#4d2e22'] } },
            { id: 'dont-stop', title: 'Не останавливайся', year: 2024, medium: 'Серия фотографий — велопрогулка по городу', desc: 'Иркутск, 2024.', concept: '', tech: ['Фотография'], exhibitions: [], links: [], image: 'projects/2_dont_stop/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'photo', art: { style: 'streaks', seed: 82, pal: ['#0d0d0f', '#ff5a36', '#f1efe9', '#7d3323'] } },
            { id: 'path', title: 'Путь', year: 2024, medium: 'Серия фотографий — атмосфера железнодорожной станции в 6 утра', desc: 'Иркутск, 2024.', concept: '', tech: ['Фотография'], exhibitions: [], links: [], image: 'projects/1_path/cover.png', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'photo', art: { style: 'blobs', seed: 91, pal: ['#0a0b0f', '#ff5a36', '#f1efe9', '#4d2e22'] } }
        ];

        var EXH = [
            { id: 'e1', type: 'exh', date: '2026-12', label: '', title: 'Ярмарка СКАН', venue: '', city: 'Красноярск', country: '', url: '', featured: true },
            { id: 'e2', type: 'exh', date: '2026-11', label: '', title: 'Мозг. Искусство сознания', venue: 'Галерея Краснохолмская', city: 'Москва', country: '', url: '', featured: true },
            { id: 'e3', type: 'exh', date: '2026-10', label: '', title: 'Волшебная гора', venue: 'KABINET', city: 'Самара', country: '', url: '', featured: false },
            { id: 'e4', type: 'exh', date: '2026-09', label: '', title: 'Завтра и послезавтра', venue: 'Галерея Краснохолмская', city: 'Москва', country: '', url: '', featured: false },
            { id: 'e5', type: 'exh', date: '2025-12', label: '', title: 'Национальный центр «Россия»', venue: '', city: 'Ханты-Мансийск', country: '', url: '', featured: true },
            { id: 'e6', type: 'exh', date: '2025-11', label: '', title: 'Цифровые чувства. Мультисенсорный поворот', venue: 'Галерея Краснохолмская', city: 'Москва', country: '', url: '', featured: true },
            { id: 'e7', type: 'exh', date: '2025-10', label: '', title: 'Выставка №37', venue: 'ЦСИ Огонь', city: 'Иркутск', country: '', url: '', featured: false },
            { id: 'e8', type: 'exh', date: '2025-09', label: '', title: 'Энергия как предчувствие', venue: 'Галерея Виктора Бронштейна', city: 'Иркутск', country: '', url: '', featured: false },
            { id: 'e9', type: 'exh', date: '2024-12', label: '', title: 'Детство', venue: 'Арт-пространство Сияние', city: 'Иркутск', country: '', url: '', featured: false },
            { id: 'e10', type: 'exh', date: '2024-11', label: '', title: 'Шевелись!', venue: 'ЦСИ Огонь', city: 'Иркутск', country: '', url: '', featured: true },
            { id: 'f1', type: 'fest', date: '2026-12', label: '', title: 'Открывая Безымянное', venue: 'Озеро Безымянное', city: 'Владивосток', country: '', url: '', featured: false },
            { id: 'f2', type: 'fest', date: '2026-11', label: '', title: 'День открытых дверей студии LYM', venue: 'Студия LYM', city: 'Москва', country: '', url: '', featured: false },
            { id: 'f3', type: 'fest', date: '2025-12', label: '', title: 'Голос кочевников', venue: 'Село Ацагат', city: 'Бурятия', country: '', url: '', featured: false }
        ];

        window.PORTFOLIO_DATA = { A: A, CATS: CATS, PROJECTS: PROJECTS, EXH: EXH };

        // Разделы портфолио (5 шт.). Проект привязывается через поле cat.
        // replaced by canonical data above to match projects_page.txt
    })();












