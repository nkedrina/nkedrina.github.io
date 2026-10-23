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
            role: 'медиахудожник, TouchDesigner-разработчик',
            cities: ['Иркутск', 'Москва'],
            handle: '@NKEDRINA',
            heroImage: '',   // URL фонового изображения Hero (пусто — генеративная текстура)
            photo: '',       // URL фотографии художника (пусто — заглушка)
            shortBio: 'Родилась в Иркутске. Сейчас живёт в Москве',
            practice: 'Работает с генеративной графикой, светом и физическими интерфейсами, объединяя технологии в единое интерактивное пространство, основанное на чувственном опыте.',
            bio: [
                'Настя Кедрина – медиахудожник и TouchDesigner-разработчик, родилась в Иркутске. Сейчас живёт и работает в Москве.',
                'Окончила бакалавриат «Прикладная информатика» ИГУ и продолжила обучение в магистратуре «Технологическое искусство» (ArtTECH) НИТУ МИСИС в Москве.',
                'Участвовала в ярмарке «СКАН» в Красноярске, выставках Галереи Краснохолмская в Москве, галереи Виктора Бронштейна и ЦСИ «Огонь» в Иркутске. Программировала свет для «Дня открытых дверей» студии LYM, а также разработала две интерактивные инсталляции в Национальном центре «Россия» в Ханты-Мансийске. Принимала участие в фестивалях «Открывая Безымянное» во Владивостоке и «Голос Кочевников» в Улан-Удэ.'
            ],
            statement: [
                'Работаю с генеративной графикой, светом, звуком и физическими интерфейсами, объединяя технологии в единое интерактивное пространство, основанное на чувственном опыте.',
                'Технический бэкграунд позволяет мне разрабатывать интерактивные системы, физические интерфейсы, программировать и работать с оборудованием.',
                'Опыт в медиаискусстве, музыке и фотографии позволяет создавать художественные высказывания, в которых форма становится частью общей идеи и способствует пониманию концепции. Мне важно создавать естественное взаимодействие, не требующее инструкций.',
                'В своей практике исследую чувства, эмоции и их восприятие. Мне интересно, как искусство может помочь в понимании и проживании собственных чувств, делая нашу жизнь более осознанной.'
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
                { years: '2025–2027', text: 'Магистратура «Технологическое искусство» (ArtTECH) — НИТУ МИСИС, Москва' },
                { years: '2021–2025', text: 'Бакалавриат «Прикладная информатика в дизайне» — ИГУ, Иркутск' }
            ],
            experience: [
                { years: '2026', text: 'Программирование светового оборудования — студия LYM, Москва' },
                { years: '2025', text: 'Разработка двух интерактивных инсталляций — Национальный центр «Россия», Ханты-Мансийск' }
            ],
            email: 'nkedrina@list.ru',
            cv: 'https://disk.yandex.ru/d/oRAAG1Z6yAfyRg',
            portfolioPdf: 'https://disk.yandex.ru/d/cNEOMvMOL2djXw',
            socials: [
                { label: 'Instagram', url: 'https://instagram.com/nkedrina' },
                { label: 'Behance', url: 'https://www.behance.net/nkedrina' }
            ],
            telegram: { label: 'Telegram', url: 'https://t.me/nkedrina' },
            heroArt: { style: 'texture', seed: 5, pal: ['#0c0c0d', '#ff5a36', '#3a1a12', '#f2f0ea'] },
            photoArt: { style: 'vortex', seed: 7, pal: ['#0c0c0d', '#ff5a36', '#8a3a22', '#f2f0ea'] }
        };

        // Разделы портфолио (5 шт.). Проект привязывается через поле cat.
        var CATS = [
            { id: 'install', name: 'Интерактивные инсталляции', short: 'Инсталляции', text: 'Работы, где зритель становится частью системы: датчики, нейроинтерфейсы, ИИ и физические интерфейсы.' },
            { id: 'light', name: 'Свет', short: 'Свет', text: 'Световые инсталляции и программирование светового оборудования.' },
            { id: 'gen', name: 'Генеративная графика', short: 'Графика', text: 'Алгоритмическая графика для мэппинга и промо-роликов.' },
            { id: 'video', name: 'Видео-арт', short: 'Видео-арт', text: 'Экранные работы, показанные на ярмарках и выставках.' },
            { id: 'av', name: 'AV-выступления', short: 'AV', text: 'Аудиореактивная графика в реальном времени для живых выступлений.' }
        ];
        // desc — событие / место, concept — соавторы и примечания, cat — id раздела
        var PROJECTS = [
            { id: 'aqualumina', title: 'aqualumina', year: 2026, medium: 'Световая инсталляция на воде', desc: 'Фестиваль «Открывая Безымянное», Владивосток, 25–27 сентября 2026.', concept: 'Совместно с Екатериной Мелехиной и Данилом Яновским. Проект создан в рамках магистратуры ArtTECH МИСИС. Фото: Виктора Гоховича.', tech: ['Свет', 'Инсталляция'], exhibitions: ['f1'], links: [], image: '', video: '', gallery: null, tile: [8, 6], featured: true, cat: 'light', art: { style: 'waves', seed: 11, pal: ['#07090c', '#ff5a36', '#f1efe9', '#7c2a18'] } },
            { id: 'untitled-video', title: 'без названия', year: 2026, medium: 'Видео-арт, 2’56’’', desc: 'Ярмарка СКАН, Красноярск, октябрь 2026; «Волшебная гора», KABINET, Самара, август 2026.', concept: '', tech: ['Видео-арт'], exhibitions: ['e1', 'e3'], links: [], image: '', video: '', gallery: null, tile: [8, 6], featured: true, cat: 'video', art: { style: 'streaks', seed: 44, pal: ['#0b0b0c', '#f1efe9', '#ff5a36', '#ffffff'] } },
            { id: 'mood-mirror', title: 'Чувство дома', year: 2025, medium: 'Цифровое производство, мэппинг-проекция, видео-арт', desc: '«Цифровые чувства. Мультисенсорный поворот», Галерея Краснохолмская, Москва, 2025.', concept: 'Проект создан в рамках магистратуры ArtTECH совместно с Иваном Николаевым и Марией Киселевой.', tech: ['Нейрообруч', 'Интерактивные инсталляции'], exhibitions: ['e6'], links: [], image: '', video: '', gallery: null, tile: [8, 6], featured: true, cat: 'install', art: { style: 'vortex', seed: 7, pal: ['#0b0b0c', '#ff5a36', '#d9d4c7', '#f1efe9'] } },
            { id: 'oil-tonne', title: 'Вперёд к 14-миллиардной тонне нефти', year: 2025, medium: 'Интерактивная инсталляция', desc: 'Национальный центр «Россия», Ханты-Мансийск, 2025.', concept: '', tech: ['Интерактивные инсталляции'], exhibitions: ['e5'], links: [], image: '', video: '', gallery: null, tile: [8, 6], featured: true, cat: 'install', art: { style: 'bars', seed: 33, pal: ['#141416', '#ff5a36', '#f1efe9', '#6b6860'] } },
            { id: 'lym-open-day', title: 'День открытых дверей студии LYM (Light Your Mind)', year: 2026, medium: 'Программирование светового оборудования', desc: 'Студия LYM (Light Your Mind), 14 мая 2026, Москва.', concept: 'Фото: @psi_agency.', tech: ['Свет', 'Программирование'], exhibitions: ['f2'], links: [], image: '', video: '', gallery: null, tile: [8, 6], featured: true, cat: 'light', art: { style: 'tunnel', seed: 22, pal: ['#0a0a0b', '#ff5a36', '#f1efe9', '#3a1a12'] } },
            { id: 'nomad-voice', title: 'Музыкальный фестиваль «Голос Кочевников»', year: 2025, medium: 'Аудиореактивная графика в реальном времени для группы «Вещества»', desc: 'Музыкальный фестиваль «Голос Кочевников», выступление группы «Вещества», Иркутск — Улан-Удэ, 2025.', concept: '', tech: ['AV', 'Аудиореактивная графика'], exhibitions: ['f3'], links: [], image: '', video: '', gallery: null, tile: [8, 6], featured: true, cat: 'av', art: { style: 'streaks', seed: 88, pal: ['#0c0c0d', '#ff5a36', '#f1efe9', '#ffffff'] } },
            { id: 'yandex-search-day', title: 'День поиска Яндекс', year: 2026, medium: 'Генеративная графика для промо-ролика', desc: 'Ролик на открытие мероприятия, Москва, 2026.', concept: 'Совместно со студией formate.', tech: ['Генеративная графика'], exhibitions: [], links: [], image: '', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'gen', art: { style: 'blobs', seed: 55, pal: ['#0f0f10', '#ff5a36', '#f1efe9', '#8a3a22'] } },
            { id: 'consent-machine', title: 'Машина согласия', year: 2026, medium: 'Интерактивная инсталляция, ИИ, веб-страница', desc: '«Мозг. Искусство сознания», Галерея Краснохолмская, Москва.', concept: 'Проект создан в рамках магистратуры ArtTECH МИСИС, 2026.', tech: ['ИИ', 'Интерактивные инсталляции'], exhibitions: ['e2'], links: [], image: '', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'install', art: { style: 'shards', seed: 66, pal: ['#101012', '#f1efe9', '#3a3a3f', '#ff5a36'] } },
            { id: 'live-energy', title: 'Живая энергия', year: 2025, medium: 'Генеративная графика', desc: '«Энергия как предчувствие», галерея В. Бронштейна, Иркутск, 2025.', concept: 'Инсталляция Григория Свердлова; мэппинг выполнен совместно со Степаном Шоболовым и Алексеем Власевским.', tech: ['Генеративная графика', 'Мэппинг'], exhibitions: ['e8'], links: [], image: '', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'gen', art: { style: 'blobs', seed: 77, pal: ['#0c0c0d', '#ff7a3a', '#ffd9b8', '#c23a1c'] } },
            { id: 'kinetic-symphony', title: 'Кинетическая симфония', year: 2024, medium: 'Интерактивная инсталляция с Kinect', desc: 'Выставка «Шевелись!», ЦСИ Огонь, Иркутск, 2024.', concept: '', tech: ['Kinect', 'Интерактивные инсталляции'], exhibitions: ['e10'], links: [], image: '', video: '', gallery: null, tile: [8, 6], featured: false, cat: 'install', art: { style: 'tunnel', seed: 99, pal: ['#0c0c0d', '#f1efe9', '#ff5a36', '#2a2a2d'] } }
        ];
        // desc — событие / место, concept — соавторы и примечания, cat — id раздела
        var EXH = [
            { id: 'e1', type: 'exh', date: '2026-12', label: '', title: 'Ярмарка СКАН', venue: '', city: 'Красноярск', country: '', url: '' },
            { id: 'e2', type: 'exh', date: '2026-11', label: '', title: 'Мозг. Искусство сознания', venue: 'Галерея Краснохолмская', city: 'Москва', country: '', url: '' },
            { id: 'e5', type: 'exh', date: '2025-12', label: '', title: 'Национальный центр «Россия»', venue: '', city: 'Ханты-Мансийск', country: '', url: '' },
            { id: 'e6', type: 'exh', date: '2025-11', label: '', title: 'Цифровые чувства. Мультисенсорный поворот', venue: 'Галерея Краснохолмская', city: 'Москва', country: '', url: '' },
            { id: 'e10', type: 'exh', date: '2024-11', label: '', title: 'Шевелись!', venue: 'ЦСИ Огонь', city: 'Иркутск', country: '', url: '' }
        ];

        /* ================== Утилиты ================== */
        var $ = function (s, r) { return (r || document).querySelector(s); };
        var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
        var plural = function (n, a, b, c) { var m = n % 10, h = n % 100; return n + ' ' + (m === 1 && h !== 11 ? a : (m >= 2 && m <= 4 && (h < 10 || h >= 20) ? b : c)); };
        var sortedEx = function () { return EXH.slice().sort(function (a, b) { return b.date.localeCompare(a.date); }); };
        var pad2 = function (n) { return n < 10 ? '0' + n : '' + n; };
        var place = function (e) { return [e.city, e.country].filter(Boolean).join(', '); };
        var TAG = function (t) { return esc(t) + ' <i class="dot" aria-hidden="true"></i> @nkedrina'; };
        var cityLine = function () { return A.cities.map(esc).join(' — '); };

        /* ================== Генеративные изображения ================== */
        function rng(s) { return function () { s |= 0; s = s + 0x6D2B79F5 | 0; var t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
        function hex(h, a) { var n = parseInt(h.slice(1), 16); return 'rgba(' + (n >> 16) + ',' + (n >> 8 & 255) + ',' + (n & 255) + ',' + (a == null ? 1 : a) + ')'; }
        function bg(c, w, h, col) { c.fillStyle = col; c.fillRect(0, 0, w, h); }
        var ART = {
            bars: function (c, w, h, R, p) {
                bg(c, w, h, p[0]);
                var s = Math.max(w, h) / 26, nx = Math.ceil(w / s) + 3, ny = Math.ceil(h / (s * .6)) + 8, ph = R() * 6;
                for (var y = 0; y < ny; y++) for (var x = 0; x < nx; x++) {
                    var v = (Math.sin(x * .37 + ph) + Math.cos(y * .31 - ph) + Math.sin((x + y) * .17 + ph * 2)) / 6 + .5;
                    var bh = s * (.4 + v * 3.2), top = y * s * .6 - s - bh, col = p[1 + Math.min(2, Math.floor(v * 3))];
                    c.fillStyle = hex(col, .96); c.fillRect(x * s - s, top, s * .82, bh + s * .5);
                    c.fillStyle = 'rgba(0,0,20,.28)'; c.fillRect(x * s - s + s * .56, top, s * .26, bh + s * .5);
                }
            },
            tunnel: function (c, w, h, R, p) {
                bg(c, w, h, p[0]); var n = 48;
                c.lineWidth = Math.max(1.2, w / 500);
                for (var i = 0; i < n; i++) {
                    var t = i / n, sz = Math.max(w, h) * 1.15 * Math.pow(1 - t, 1.8) + 6;
                    c.save(); c.translate(w / 2 + t * w * .09, h / 2 - t * h * .06); c.rotate(t * .55 + (R() - .5) * .015);
                    c.strokeStyle = hex(i % 6 === 0 ? p[1] : p[2], .18 + .7 * t); c.strokeRect(-sz / 2, -sz / 2, sz, sz); c.restore();
                }
                var g = c.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.min(w, h) * .25);
                g.addColorStop(0, hex(p[2], .35)); g.addColorStop(1, hex(p[2], 0)); c.fillStyle = g; c.fillRect(0, 0, w, h);
            },
            waves: function (c, w, h, R, p) {
                bg(c, w, h, p[0]); var ph = R() * 6, n = 72;
                for (var k = 0; k < n; k++) {
                    var t = k / n, a = h * (.06 + .16 * Math.abs(Math.sin(t * 3 + ph))), f1 = (.004 + R() * .002) * 1000 / w, f2 = .011 * 1000 / w;
                    c.beginPath();
                    for (var x = 0; x <= w; x += 6) { var y = h * (.1 + .8 * t) + Math.sin(x * f1 + t * 5 + ph) * a * .6 + Math.sin(x * f2 - t * 3) * a * .4; if (x) c.lineTo(x, y); else c.moveTo(x, y); }
                    c.strokeStyle = hex(p[1 + k % 3], .3 + .5 * Math.pow(Math.sin(t * 6 + ph), 2)); c.lineWidth = 1 + w / 900; c.stroke();
                }
            },
            vortex: function (c, w, h, R, p) {
                bg(c, w, h, p[0]); var cx = w * .5, cy = h * .5, m = Math.hypot(w, h) / 2; c.lineCap = 'round';
                for (var i = 0; i < 2800; i++) {
                    var a = R() * 6.283, r = Math.pow(R(), .6) * m, k = 1 - r / m, a2 = a + .1 + k * .35, r2 = r * .96;
                    c.beginPath(); c.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); c.lineTo(cx + Math.cos(a2) * r2, cy + Math.sin(a2) * r2);
                    c.lineWidth = 1 + R() * 3 * (1 - r / m * .5); c.strokeStyle = hex(p[1 + i % 3], .12 + .5 * R()); c.stroke();
                }
                c.globalCompositeOperation = 'lighter';
                var g = c.createRadialGradient(cx, cy, 0, cx, cy, m * .35); g.addColorStop(0, hex(p[3], .45)); g.addColorStop(1, hex(p[3], 0)); c.fillStyle = g; c.fillRect(0, 0, w, h);
                c.globalCompositeOperation = 'source-over';
            },
            streaks: function (c, w, h, R, p) {
                bg(c, w, h, p[0]);
                for (var i = 0; i < 36; i++) {
                    var y = R() * h, x0 = R() * w * .6, len = w * (.2 + R() * .5), amp = h * (.01 + R() * .05), f = (.01 + R() * .03) * 800 / w;
                    c.beginPath();
                    for (var x = 0; x <= len; x += 4) { var yy = y + Math.sin(x * f) * amp * (x / len); if (x) c.lineTo(x0 + x, yy); else c.moveTo(x0, yy); }
                    c.strokeStyle = hex(p[1 + i % 2], .25 + R() * .4); c.lineWidth = 1 + R() * 2; c.stroke();
                    var ex = x0 + len, ey = y + Math.sin(len * f) * amp, rr = (10 + R() * 30) * w / 800;
                    var g = c.createRadialGradient(ex, ey, 0, ex, ey, rr); g.addColorStop(0, hex(p[3], .9)); g.addColorStop(1, hex(p[2], 0)); c.fillStyle = g; c.fillRect(ex - rr, ey - rr, rr * 2, rr * 2);
                }
                for (var j = 0; j < 240; j++) { c.fillStyle = hex(p[1], .15 + R() * .5); c.beginPath(); c.arc(R() * w, R() * h, .6 + R() * 1.8, 0, 6.283); c.fill(); }
            },
            blobs: function (c, w, h, R, p) {
                bg(c, w, h, p[0]); c.globalCompositeOperation = 'screen';
                for (var i = 0; i < 16; i++) {
                    var x = R() * w, y = R() * h, r = Math.max(w, h) * (.15 + R() * .35), col = p[1 + i % 3];
                    var g = c.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, hex(col, .7)); g.addColorStop(1, hex(col, 0)); c.fillStyle = g; c.fillRect(0, 0, w, h);
                }
                c.globalCompositeOperation = 'source-over'; c.lineCap = 'round';
                for (var k = 0; k < 90; k++) {
                    var sx = R() * w, sy = R() * h; c.beginPath(); c.moveTo(sx, sy);
                    c.bezierCurveTo(sx + (R() - .5) * w * .4, sy + (R() - .5) * h * .4, sx + (R() - .5) * w * .4, sy + (R() - .5) * h * .4, sx + (R() - .5) * w * .3, sy + (R() - .5) * h * .3);
                    c.strokeStyle = hex(p[3], .35 + R() * .3); c.lineWidth = 1 + R() * 3; c.stroke();
                }
            },
            shards: function (c, w, h, R, p) {
                bg(c, w, h, p[0]);
                var cx = w * (.55 + (R() - .5) * .2), cy = h * .5, L = Math.min(w, h) * .6, items = [];
                for (var i = 0; i < 70; i++) items.push({ a: R() * 6.283, len: L * (.3 + R() * .7), wd: .05 + R() * .09 });
                items.sort(function (a, b) { return b.len - a.len; });
                items.forEach(function (it) {
                    var tx = cx + Math.cos(it.a) * it.len, ty = cy + Math.sin(it.a) * it.len, nx = -Math.sin(it.a) * it.len * it.wd, ny = Math.cos(it.a) * it.len * it.wd;
                    var sh = .5 + .5 * Math.cos(it.a - 2.2);
                    c.beginPath(); c.moveTo(tx, ty); c.lineTo(cx + nx, cy + ny); c.lineTo(cx - nx, cy - ny); c.closePath();
                    c.fillStyle = hex(p[2]); c.fill(); c.fillStyle = hex(p[1], sh); c.fill();
                    c.strokeStyle = hex(p[3], .5); c.lineWidth = 1; c.stroke();
                });
            },
            texture: function (c, w, h, R, p) {
                bg(c, w, h, p[0]); c.globalCompositeOperation = 'screen';
                for (var i = 0; i < 9; i++) {
                    var x = R() * w, y = R() * h, r = Math.max(w, h) * (.2 + R() * .35), col = p[1 + i % 2];
                    var g = c.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, hex(col, .3)); g.addColorStop(1, hex(col, 0)); c.fillStyle = g; c.fillRect(0, 0, w, h);
                }
                c.globalCompositeOperation = 'source-over'; c.lineCap = 'round';
                for (var k = 0; k < 5200; k++) {
                    var sx = R() * w, sy = R() * h, ang = .6 + (R() - .5) * .6, ln = 20 + R() * 70;
                    c.beginPath(); c.moveTo(sx, sy); c.lineTo(sx + Math.cos(ang) * ln, sy + Math.sin(ang) * ln);
                    c.strokeStyle = hex(R() > .5 ? '#ffffff' : p[3], .02 + R() * .045); c.lineWidth = 1 + R() * 3; c.stroke();
                }
            }
        };
        var artCache = {};
        var RAMP = [[0, 0, 0, 10], [.3, 6, 10, 58], [.55, 22, 28, 88], [.8, 31, 124, 238], [1, 177, 204, 255]];
        function grade(c, w, h) {
            var d = c.getImageData(0, 0, w, h), px = d.data;
            for (var i = 0; i < px.length; i += 4) {
                var r = px[i], g = px[i + 1], b = px[i + 2];
                var l = Math.min(1, (.3 * r + .59 * g + .11 * b) / 255 * 1.2);
                var k = 1; while (k < RAMP.length - 1 && l > RAMP[k][0]) k++;
                var a = RAMP[k - 1], z = RAMP[k], f = (l - a[0]) / (z[0] - a[0]);
                var R = a[1] + (z[1] - a[1]) * f, G = a[2] + (z[2] - a[2]) * f, B = a[3] + (z[3] - a[3]) * f;
                var warm = Math.max(0, Math.min(1, (r - b - 60) / 160)) * .5;
                if (warm > 0) {
                    var m = Math.min(1, l * 1.3);
                    R = R * (1 - warm) + (20 + 209 * m) * warm;
                    G = G * (1 - warm) + (4 + 52 * m) * warm;
                    B = B * (1 - warm) + (18 + 56 * m) * warm;
                }
                px[i] = R; px[i + 1] = G; px[i + 2] = B;
            }
            c.putImageData(d, 0, 0);
        }
        function makeArt(art, w, h, v) {
            var key = [art.style, art.seed, v || 0, w, h].join('|');
            if (artCache[key]) return artCache[key];
            var cv = document.createElement('canvas'); cv.width = w; cv.height = h;
            var cx = cv.getContext('2d');
            ART[art.style](cx, w, h, rng(art.seed + (v || 0) * 977), art.pal);
            grade(cx, w, h);
            return (artCache[key] = cv.toDataURL('image/jpeg', .86));
        }

        /* ================== Ленивая загрузка изображений ================== */
        var reg = {}, rid = 0;
        function artImg(art, w, h, v, alt) {
            var k = 'a' + (rid++); reg[k] = { art: art, w: w, h: h, v: v };
            return '<img data-art="' + k + '" alt="' + esc(alt) + '" width="' + w + '" height="' + h + '" decoding="async">';
        }
        function urlImg(src, alt) { return '<img data-src="' + esc(src) + '" alt="' + esc(alt) + '" decoding="async">'; }
        function nat(p) { return [Math.min(p.tile[0] * 150, 1200), Math.min(p.tile[1] * 150, 1200)]; }
        function projImg(p) { var s = nat(p), alt = p.title + ', ' + p.year; return p.image ? urlImg(p.image, alt) : artImg(p.art, s[0], s[1], 0, alt); }
        function loadImg(im) {
            if (im.dataset.art) { var k = reg[im.dataset.art]; setTimeout(function () { im.src = makeArt(k.art, k.w, k.h, k.v); im.classList.add('on'); }, 0); }
            else if (im.dataset.src) { im.onload = function () { im.classList.add('on'); }; im.src = im.dataset.src; }
        }
        var imgIO = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
            es.forEach(function (e) { if (e.isIntersecting) { imgIO.unobserve(e.target); loadImg(e.target); } });
        }, { rootMargin: '400px' }) : null;
        var rvIO = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
            es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); rvIO.unobserve(e.target); } });
        }, { rootMargin: '0px 0px -6% 0px' }) : null;
        function hydrate(root) {
            root.querySelectorAll('img[data-art],img[data-src]').forEach(function (im) { imgIO ? imgIO.observe(im) : loadImg(im); });
            root.querySelectorAll('.rv').forEach(function (el) { rvIO ? rvIO.observe(el) : el.classList.add('in'); });
        }

        /* ================== Компоненты ================== */
        function pcard(p, variant, style) {
            var home = variant === 'home', r = p.tile[1];
            var lowerMedium = String(p.medium || '').toLowerCase();
            var lowerTech = (p.tech || []).map(function (t) { return String(t).toLowerCase(); }).join(' · ');
            return '<article class="pcard ' + (home ? 'is-home' : 'is-arch') + ' rv" style="' + style + '">' +
                '<a class="pbtn" href="#/portfolio/' + p.id + '" data-quick="' + p.id + '" aria-label="Открыть проект: ' + esc(p.title) + ', ' + p.year + '">' +
                projImg(p) +
                '<span class="pov"><span class="pt">' + esc(p.title) + '</span><span class="py">' + esc(lowerMedium) + '</span>' +
                (home ? '' : '<span class="pd">' + esc(p.desc) + '</span><span class="pm">' + esc(lowerTech) + '</span>') +
                '</span></a>' +
                (home ? '<div class="pcap"><span class="pct">' + esc(p.title) + ' <span style="font-weight:400;opacity:.7"><i class="dot" aria-hidden="true"></i>' + p.year + '</span></span><span class="pcm">' + esc(lowerMedium) + '</span></div>' : '') +
                '</article>';
        }
        function exRow(e) {
            var year = e.label || e.date.slice(0, 4);
            var inner = '<span class="ex-year">' + esc(year) + '</span>' +
                '<span class="ex-main"><span class="ex-title">' + esc(e.title) + '</span>' + ([e.venue, place(e)].filter(Boolean).length ? '<span class="ex-venue">' + [e.venue, place(e)].filter(Boolean).map(esc).join(', ') + '</span>' : '') + '</span>' +
                '<span class="ex-arrow" aria-hidden="true">' + (e.url ? '<i class="fa-solid fa-arrow-up-right"></i>' : '') + '</span>';
            return '<li class="rv">' + (e.url ? '<a class="ex-row" href="' + esc(e.url) + '" target="_blank" rel="noopener noreferrer">' + inner + '</a>' : '<div class="ex-row">' + inner + '</div>') + '</li>';
        }
        function photoFig(cls) {
            var photoSrc = 'images/me_1.jpg';
            return '<figure class="fig ' + cls + '">' + (A.photo ? urlImg(A.photo, 'Фотография художника') : '<img data-src="' + esc(photoSrc) + '" alt="Фотография художника" decoding="async">') + '</figure>';
        }

        /* ================== Страницы ================== */
        function dlRow() {
            return '<div class="dl">' +
                '<a class="btn pri" href="' + esc(A.cv || '#/') + '" data-file="cv" download><i class="fa-solid fa-download" aria-hidden="true"></i> скачать CV</a>' +
                '<a class="btn" href="' + esc(A.portfolioPdf || '#/') + '" data-file="portfolioPdf" download><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> скачать портфолио (PDF)</a>' +
                '</div>';
        }
        function contactsBlock(solo) {
            var links = A.socials.map(function (s) { return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.label) + ' <i class="fa-solid fa-arrow-up-right" aria-hidden="true"></i></a>'; }).join('<i class="dot" aria-hidden="true"></i>');
            return '<section class="sec contacts" id="contacts" aria-labelledby="h-contacts"><div class="wrap">' +
                '<div class="sec-head"><h2 class="title' + (solo ? ' sr' : '') + '" id="h-contacts">контакты</h2><span class="label tag">' + TAG('links') + '</span></div>' +
                '<div class="cgrid">' +
                '<div class="cgroup"><h3 class="clabel">соц сети</h3><p class="cline">' + links + '</p></div>' +
                '<div class="cgroup"><h3 class="clabel">связаться со мной</h3><p class="cline"><a href="mailto:' + esc(A.email) + '">' + esc(A.email) + ' <i class="fa-solid fa-arrow-up-right" aria-hidden="true"></i></a><i class="dot" aria-hidden="true"></i><a href="' + esc(A.telegram.url) + '" target="_blank" rel="noopener noreferrer">' + esc(A.telegram.label) + ' <i class="fa-solid fa-arrow-up-right" aria-hidden="true"></i></a></p></div>' +
                '</div></div></section>';
        }

        function home() {
            var feat = PROJECTS.filter(function (p) { return p.featured; }).slice(0, 6);
            var ex = sortedEx().filter(function (e) { return e.type === 'exh'; }).slice(0, 5);
            return '' +
                '<section class="hero" id="hero" aria-label="Главный экран"><div class="hero-in">' + photoFig('hero-ph') + '<div class="hero-txt"><p class="hero-handle">' + esc(A.handle) + '</p><h1>' + esc(A.name) + '</h1><p class="hero-role">' + esc(A.role) + '<br>' + cityLine() + '</p></div></div>' +
                '<div class="hero-bot"><button class="hero-tgl" type="button" data-theme-toggle aria-label="Сменить тему"><span class="sw" aria-hidden="true"><span class="kb"><i class="fa-solid fa-moon m"></i><i class="fa-solid fa-sun s"></i></span></span><span>сменить тему</span></button><button class="hint" type="button" data-scroll="#about" aria-label="Прокрутить вниз"><i class="fa-solid fa-arrow-down" aria-hidden="true"></i></button></div></section>' +
                '<section class="sec" id="about" aria-labelledby="h-about"><div class="wrap"><div class="about"><div class="about-txt rv"><h2 class="title" id="h-about">обо мне</h2>' + dlRow() + '<p class="lead2">' + esc(A.shortBio) + '</p><p class="soft">' + esc(A.practice) + '</p><a class="more" href="#/about">подробнее <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div></div></div></section>' +
                '<section class="sec" style="padding-top:0" aria-labelledby="h-proj"><div class="wrap"><div class="sec-head"><div><h2 class="title" id="h-proj">избранные проекты</h2></div><span class="label tag">' + TAG('portfolio') + '</span></div><div class="hgrid">' + feat.map(function (p) { return pcard(p, 'home', ''); }).join('') + '</div><div class="more-row"><a class="more" href="#/portfolio">все проекты <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div></div></section>' +
                '<section class="sec" style="padding-top:0" aria-labelledby="h-ex"><div class="wrap"><div class="sec-head"><h2 class="title" id="h-h-ex">избранные выставки</h2></div><ul class="exlist">' + ex.map(exRow).join('') + '</ul><div class="more-row"><a class="more" href="exhibitions.html">все выставки <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div></div></section>' + contactsBlock(false);
        }

        function about() {
            var rows = function (arr) { return '<ul class="rows">' + arr.map(function (r) { var pr = r.text.split(' — '); return '<li><span class="y">' + esc(r.years) + '</span><span><span class="rt">' + esc(pr[0]) + '</span>' + (pr.length > 1 ? '<span class="rb">, ' + esc(pr.slice(1).join(', ')) + '</span>' : '') + '</span></li>'; }).join('') + '</ul>'; };
            return '' +
                '<header class="abtop"><div class="wrap"><div class="abtop-grid">' + photoFig('abphoto') + '<div class="abcap"><h1>' + esc(A.name) + '</h1><p class="abrole">' + esc(A.role) + '</p><p class="abcity">' + cityLine() + '</p>' + dlRow() + '</div></div></div></header>' +
                '<div class="wrap"><section class="abs" aria-labelledby="s1"><h2 class="label tag" id="s1">' + TAG('bio') + '</h2><div><p class="statement">' + esc(A.bio[0]) + '</p><div class="prose">' + A.bio.slice(1).map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') + '</div></div></section>' +
                '<section class="abs" aria-labelledby="s2"><h2 class="label tag" id="s2">' + TAG('artist statement') + '</h2><div><p class="duo">технологии <b>•</b> чувства</p><p class="statement">' + esc(A.statement[0]) + '</p><div class="prose">' + A.statement.slice(1).map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') + '</div></div></section>' +
                '<section class="abs" aria-labelledby="s3"><ol class="medlist">' + A.mediums.map(function (m, i) { return '<li><span class="n">' + pad2(i + 1) + '</span><h3>' + esc(m.name) + '</h3><p>' + esc(m.text) + '</p></li>'; }).join('') + '</ol></section>' +
                '<section class="abs" aria-labelledby="s4"><h2 class="label tag" id="s4">' + TAG('education') + '</h2><div><h3 class="sub-h">образование</h3>' + rows(A.education) + '<h3 class="sub-h">профессиональный опыт</h3>' + rows(A.experience) + '</div></section><div class="abnext"><a class="more" style="justify-self:start" href="#/portfolio">смотреть проекты <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a><a class="more" style="justify-self:start;margin-top:16px" href="#/exhibitions">выставки и фестивали <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div></div>';
        }

        var pfCat = 'all';
        function mosaic(list) {
            var rows = '', i = 0, k = 0, n = list.length;
            var W3 = [[5, 4, 3], [3, 5, 4], [4, 3, 5]], W2 = [[7, 5], [5, 7]];
            while (i < n) {
                var left = n - i, take = left <= 3 ? left : (k % 2 === 0 ? 3 : 2);
                if (take === 3 && left === 4) take = 2;
                var w = take === 3 ? W3[k % 3] : take === 2 ? W2[k % 2] : [8];
                var cells = list.slice(i, i + take).map(function (p, j) { return pcard(p, 'arch', 'grid-column:span ' + w[j]); }).join('');
                rows += '<div class="mrow' + (take === 1 ? ' one' : '') + '">' + cells + '</div>';
                i += take; k++;
            }
            return '<div class="mosaic">' + rows + '</div>';
        }
        function pfHTML() {
            var c = CATS.filter(function (x) { return x.id === pfCat; })[0];
            var list = c ? PROJECTS.filter(function (p) { return p.cat === c.id; }) : PROJECTS;
            return mosaic(list);
        }
        function pfUpdate(scroll) {
            var list = $('#pfList'); if (!list) return;
            list.innerHTML = pfHTML(); hydrate(list);
            list.classList.remove('swap'); void list.offsetWidth; list.classList.add('swap');
            document.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', c.getAttribute('data-cat') === pfCat ? 'true' : 'false'); });

            if (scroll) {
                var top = list.getBoundingClientRect().top + window.pageYOffset - 130;
                if (window.pageYOffset > top) window.scrollTo({ top: Math.max(0, top), behavior: RM ? 'auto' : 'smooth' });
            }
        }
        function portfolio() {
            var chipList = ['<button class="chip" type="button" data-cat="all" aria-pressed="' + (pfCat === 'all') + '">Все <span class="cn">(' + PROJECTS.length + ')</span></button>'].concat(
                CATS.map(function (c) {
                    var n = PROJECTS.filter(function (p) { return p.cat === c.id; }).length;
                    return '<button class="chip" type="button" data-cat="' + c.id + '" aria-pressed="' + (pfCat === c.id) + '">' + esc(c.short) + ' <span class="cn">(' + n + ')</span></button>';
                }));
            var chips = chipList.join('<i class="dot" aria-hidden="true"></i>');
            return '' +
                '<header class="pagehead"><div class="wrap">' +
                '<h1>Проекты</h1></div></header>' +
                '<nav class="pfbar" aria-label="Фильтр проектов"><div class="wrap"><div class="chips">' + chips + '</div>' +
                '</div></nav>' +
                '<section class="pfx" aria-label="Проекты по разделам"><div class="wrap" id="pfList">' + pfHTML() + '</div></section>';
        }

        function exhibitions() {
            var all = sortedEx();
            var list = all.filter(function (e) { return e.type === 'exh'; });
            var fest = all.filter(function (e) { return e.type === 'fest'; });
            return '' +
                '<header class="pagehead"><div class="wrap">' +
                '<h1>Выставки</h1></div></header>' +
                '<section class="pf" aria-label="Архив выставок"><div class="wrap">' +
                '<h2 class="sub-h">выставки</h2><ul class="exlist">' + list.map(exRow).join('') + '</ul>' +
                '<h2 class="sub-h">фестивали / мероприятия</h2><ul class="exlist">' + fest.map(exRow).join('') + '</ul>' +
                '</div></section>';
        }

        function contactsPage() {
            return '' +
                '<header class="pagehead"><div class="wrap">' +
                '<h1>Контакты</h1><p class="sub">Для сотрудничества, выставочных проектов и прессы — пишите.</p></div></header>' +
                contactsBlock(true);
        }

        var routes = { '/': home, '/about': about, '/portfolio': portfolio, '/exhibitions': exhibitions, '/contacts': contactsPage };
        var titles = { '/': 'медиахудожник', '/about': 'обо мне', '/portfolio': 'проекты', '/exhibitions': 'выставки', '/contacts': 'контакты' };

        /* ================== Модальное окно проекта ================== */
        var modal = $('#modal'), lastFocus = null;
        /* Подробное описание проекта.
           Для своего содержимого задайте в проекте поле blocks, например:
           blocks: [
             { type: 'text', title: 'о проекте', lead: 'Крупный тезис', text: 'Абзац текста' },
             { type: 'full', image: 'url', caption: 'Подпись' },
             { type: 'grid', images: ['url1', 'url2', 'url3'] },   // от 1 до 6 фото
             { type: 'grid', n: 4 }                                // n — число заглушек
           ]
           Если blocks не задан, собирается блок по умолчанию (gallery — свои фото). */
        function detailHTML(p) {
            var pool = (p.gallery || []).slice(), v = 1, t = 0;
            function ph(w, h, alt) { var u = pool.shift(); return u ? urlImg(u, alt) : artImg(p.art, w, h, v++, alt); }
            var blocks = p.blocks && p.blocks.length ? p.blocks : [
                { type: 'text', title: 'о проекте', lead: p.desc, text: p.concept },
                { type: 'full' },
                { type: 'grid', n: 2 },
                { type: 'text', title: 'идея и технологии', lead: p.medium, text: 'Технологии и подходы: ' + p.tech.join(', ') + '.' },
                { type: 'grid', n: 3 },
                { type: 'full' },
                { type: 'grid', n: 4 }
            ];
            return blocks.map(function (b) {
                if (b.type === 'text') {
                    t++;
                    return '<section class="msec rv"><h3 class="label">' + pad2(t) + ' <i class="dot" aria-hidden="true"></i> ' + esc(b.title || 'о проекте') + '</h3><div>' +
                        (b.lead ? '<p class="dlead">' + esc(b.lead) + '</p>' : '') +
                        (b.text ? '<p class="dbody">' + esc(b.text) + '</p>' : '') + '</div></section>';
                }
                if (b.type === 'full') {
                    var alt = p.title + ' — фото документации';
                    return '<section class="dfull rv"><figure class="fig dfig">' + (b.image ? urlImg(b.image, alt) : ph(1600, 700, alt)) + '</figure>' +
                        (b.caption ? '<p class="dcap">' + esc(b.caption) + '</p>' : '') + '</section>';
                }
                if (b.type === 'grid') {
                    var cnt = Math.max(1, Math.min(6, b.images ? b.images.length : (b.n || 2)));
                    var cells = '';
                    for (var k = 0; k < cnt; k++) {
                        var a2 = p.title + ' — фото документации';
                        cells += '<figure class="fig">' + (b.images && b.images[k] ? urlImg(b.images[k], a2) : ph(900, 700, a2)) + '</figure>';
                    }
                    return '<section class="dgrid dg' + cnt + ' rv">' + cells + '</section>';
                }
                return '';
            }).join('');
        }
        function projectHTML(i) {
            var p = PROJECTS[i], prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length], next = PROJECTS[(i + 1) % PROJECTS.length];
            var s = nat(p), ar = Math.min(2.4, Math.max(.8, s[0] / s[1]));
            var exs = (p.exhibitions || []).map(function (id) { return EXH.filter(function (e) { return e.id === id; })[0]; }).filter(Boolean);
            var detail = detailHTML(p);
            return '' +
                '<div class="ppage"><div class="wrap">' +
                '<div class="pp-top"><a class="back" href="#/portfolio"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Все проекты</a><span class="label">' + TAG('portfolio') + ' <i class="dot" aria-hidden="true"></i> ' + pad2(i + 1) + ' / ' + pad2(PROJECTS.length) + '</span></div>' +
                '<section class="slide"><figure class="fig mhero" style="aspect-ratio:' + s[0] + '/' + s[1] + '">' + (p.image ? urlImg(p.image, p.title) : artImg(p.art, s[0], s[1], 0, p.title + ', ' + p.year)) + '</figure>' +
                '<div class="slide-txt"><div><h2>' + esc(p.title) + '</h2><p class="slide-med">' + esc(p.medium) + '</p>' +
                '<p class="slide-desc">' + esc(p.desc) + '</p>' + (p.concept ? '<p class="slide-con">' + esc(p.concept) + '</p>' : '') +
                '<p class="slide-yr">' + p.year + ' <i class="dot" aria-hidden="true"></i> ' + esc(p.tech.join(', ')) + '</p></div>' +
                '<span class="label tag">' + TAG('portfolio') + '</span></div></section>' +
                (p.video ? '<section class="msec"><h3 class="label">Видео</h3><video class="mvideo" src="' + esc(p.video) + '" controls playsinline preload="metadata"></video></section>' : '') +
                detail +
                '<section class="msec"><h3 class="label">Выставки</h3><div>' +
                (exs.length ? '<ul class="exlist">' + exs.map(exRow).join('') + '</ul>' : '<p class="ph">Информация об участии проекта в выставках пока не добавлена.</p>') +
                '</div></section>' +
                (p.links && p.links.length ? '<section class="msec"><h3 class="label">Ссылки</h3><div class="mlinks">' + p.links.map(function (l) { return '<a class="more" href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' + esc(l.label) + ' <i class="fa-solid fa-arrow-up-right" aria-hidden="true"></i></a>'; }).join('') + '</div></section>' : '') +
                '<section class="dend rv"><p class="label">завершение</p><h3 class="dend-t">' + esc(p.title) + '</h3>' +
                '<p class="dend-m">' + p.year + ' <i class="dot" aria-hidden="true"></i> ' + esc(p.medium) + '</p>' +
                '<a class="more" href="#/portfolio">Все проекты <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></section>' +
                '<nav class="mnav mfoot pnav" aria-label="Другие проекты"><a href="#/portfolio/' + prev.id + '"><span class="label"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Предыдущий</span><span class="nm">' + esc(prev.title) + '</span></a>' +
                '<a href="#/portfolio/' + next.id + '"><span class="label">Следующий <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span><span class="nm">' + esc(next.title) + '</span></a></nav>' +
                '</div></div>';
        }
        function openModal(id) {
            var i = PROJECTS.map(function (p) { return p.id; }).indexOf(id);
            if (i < 0) { location.hash = '#/portfolio'; return; }
            if (modal.hidden) lastFocus = document.activeElement;
            modal.innerHTML = projectHTML(i); modal.hidden = false;
            document.body.classList.add('lock');
            document.title = PROJECTS[i].title + ' — ' + A.name;
            var hero = modal.querySelector('.mhero img'); if (hero) { imgIO && imgIO.unobserve(hero); loadImg(hero); }
            hydrate(modal);
            var mb = $('#mbody'); if (mb) mb.scrollTop = 0;
            var cb = modal.querySelector('[data-close]'); if (cb) cb.focus({ preventScroll: true });
        }
        function closeModal() {
            if (modal.hidden) return;
            modal.hidden = true; modal.innerHTML = '';
            document.body.classList.remove('lock');
            if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
        }

        /* ================== Быстрое окно проекта (главная) ================== */
        var quickEl = $('#quick'), quickFocus = null;
        function behanceUrl(p) {
            var l = (p.links || []).filter(function (x) { return /behance/i.test(x.url); })[0];
            if (l) return l.url;
            var s = A.socials.filter(function (x) { return /behance/i.test(x.url) || /behance/i.test(x.label); })[0];
            return s ? s.url : '';
        }
        function quickLinks(p) {
            var out = '', b = behanceUrl(p);
            if (document.body.classList.contains('home')) {
                out += '<a class="more" href="#/portfolio/' + p.id + '" data-quick-full>Открыть проект <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>';
            }
            if (b) {
                out += '<a class="more" href="' + esc(b) + '" target="_blank" rel="noopener noreferrer">Behance <i class="fa-solid fa-arrow-up-right" aria-hidden="true"></i></a>';
            }
            return out;
        }
        function quickHTML(p) {
            return '<div class="qpanel">' +
                '<button class="qclose" type="button" data-quick-close aria-label="Закрыть"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>' +
                '<figure class="fig qfig">' + projImg(p) + '</figure>' +
                '<div class="qtxt">' +
                '<p class="qyr">' + p.year + (p.tech && p.tech.length ? ' <i class="dot" aria-hidden="true"></i> ' + esc(p.tech.join(', ')) : '') + '</p>' +
                '<h2>' + esc(p.title) + '</h2>' +
                '<p class="qmed">' + esc(p.medium) + '</p>' +
                '<p class="qdesc">' + esc(p.desc) + '</p>' +
                (p.concept ? '<p class="qcon">' + esc(p.concept) + '</p>' : '') +
                '<div class="qlinks">' + quickLinks(p) + '</div>' +
                '</div></div>';
        }
        function openQuick(id, from) {
            var p = PROJECTS.filter(function (x) { return x.id === id; })[0]; if (!p) return;
            quickFocus = from || document.activeElement;
            quickEl.innerHTML = quickHTML(p); quickEl.hidden = false;
            document.body.classList.add('lock');
            hydrate(quickEl);
            var cb = quickEl.querySelector('[data-quick-close]'); if (cb) cb.focus({ preventScroll: true });
        }
        function closeQuick() {
            if (quickEl.hidden) return;
            quickEl.hidden = true; quickEl.innerHTML = '';
            document.body.classList.remove('lock');
            if (quickFocus && document.contains(quickFocus)) quickFocus.focus({ preventScroll: true });
            quickFocus = null;
        }

        /* ================== Навигация по отдельным HTML-файлам ================== */
        function normalizeInitialPath() {
            if (location.hash) return;
            var page = (location.pathname || '').split('/').pop() || 'index.html';
            var map = {
                'index.html': '/',
                'about.html': '/about',
                'portfolio.html': '/portfolio',
                'exhibitions.html': '/exhibitions',
                'contacts.html': '/contacts'
            };
            if (map[page]) {
                location.hash = '#' + map[page];
            }
        }

        /* ================== Роутер ================== */
        var main = $('#main'), hdr = $('#hdr'), current = null;
        function setHero() {
            var hero = $('#hero'); if (!hero) return;
            setTimeout(function () {
                var src = A.heroImage || makeArt(A.heroArt, 1280, 720, 0);
                hero.style.setProperty('--hero', 'url("' + src + '")');
            }, 0);
        }
        function render(page, pid) {
            if (page === '/portfolio') pfCat = 'all';
            main.innerHTML = page === '/project'
                ? projectHTML(PROJECTS.map(function (p) { return p.id; }).indexOf(pid))
                : routes[page]();
            main.classList.remove('enter'); void main.offsetWidth; main.classList.add('enter');
            document.body.classList.toggle('home', page === '/');
            document.querySelectorAll('.nav a').forEach(function (a) { a.getAttribute('data-p') === page ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'); });
            if (page === '/project') {
                document.title = PROJECTS.filter(function (p) { return p.id === pid; })[0].title + ' — ' + A.name;
            } else {
                document.title = (page === '/' ? A.name + ' — ' : titles[page] + ' — ') + (page === '/' ? 'медиахудожник' : A.name);
            }
            hydrate(main);
            if (page === '/') setHero();
            window.scrollTo(0, 0);
            hdr.classList.remove('hide'); lastY = 0; onScroll();
        }
        function setNav(key) {
            document.querySelectorAll('.nav a').forEach(function (a) { a.getAttribute('data-p') === key ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'); });
        }
        function scrollToContacts(smooth) {
            var el = $('#contacts'); if (!el) return;
            var y = el.getBoundingClientRect().top + (window.pageYOffset || 0);
            window.scrollTo({ top: y, behavior: smooth && !RM ? 'smooth' : 'auto' });
        }
        function route() {
            if (!quickEl.hidden) { quickFocus = null; closeQuick(); }
            var path = location.hash.replace(/^#/, '') || '/';
            var m = path.match(/^\/portfolio\/([\w-]+)\/?$/);
            var clean = path.replace(/\/$/, '') || '/';
            var toC = clean === '/contacts';
            var pid = m ? m[1] : null;
            if (pid && !PROJECTS.some(function (p) { return p.id === pid; })) { location.hash = '#/portfolio'; return; }
            var page = m ? '/project' : (toC ? '/' : clean);
            if (!m && !routes[page]) page = '/';
            var key = m ? '/project/' + pid : page;
            var fresh = false;
            if (key !== current) { closeModal(); current = key; render(page, pid); fresh = true; }
            setNav(toC ? '/contacts' : (m ? '/portfolio' : page));
            if (!m) {
                closeModal();
                if (current) document.title = A.name;
                if (toC) scrollToContacts(!fresh);
                else if (!fresh && page === '/') window.scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' });
            }
        }

        /* ================== Меню при прокрутке ================== */
        var lastY = 0, ticking = false;
        function onScroll() {
            var y = Math.max(0, window.pageYOffset || 0);
            hdr.classList.toggle('top', y < 24);
            if (!document.body.classList.contains('lock')) {
                var d = y - lastY;
                if (y < 24) hdr.classList.remove('hide');
                else if (d > 6 && y > 120) hdr.classList.add('hide');
                else if (d < -6) hdr.classList.remove('hide');
                if (Math.abs(d) > 6) lastY = y;
            }
            document.body.classList.toggle('hh', hdr.classList.contains('hide'));
        }
        window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(function () { onScroll(); ticking = false; }); } }, { passive: true });
        hdr.addEventListener('focusin', function () { hdr.classList.remove('hide'); });

        /* ================== Тема ================== */
        function toggleTheme() {
            var root = document.documentElement;
            var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            var apply = function () { root.setAttribute('data-theme', next); };
            try { localStorage.setItem('theme', next); } catch (e) { }
            if (document.startViewTransition && !RM) { document.startViewTransition(apply); }
            else { root.classList.add('tchg'); apply(); setTimeout(function () { root.classList.remove('tchg'); }, 700); }
        }

        /* ================== Общие обработчики ================== */
        var tt;
        function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('show'); }, 3600); }
        document.addEventListener('click', function (e) {
            if (e.target.closest('[data-theme-toggle]')) { toggleTheme(); return; }
            var qk = e.target.closest('[data-quick]');
            if (qk && document.body.classList.contains('home')) { e.preventDefault(); openQuick(qk.getAttribute('data-quick'), qk); return; }
            var qf = e.target.closest('[data-quick-full]');
            if (qf) { e.preventDefault(); var qh = qf.getAttribute('href'); quickFocus = null; closeQuick(); location.hash = qh; return; }
            if (e.target.closest('[data-quick-close]') || e.target === quickEl) { closeQuick(); return; }
            if (e.target.closest('[data-top]')) { window.scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' }); return; }
            var f = e.target.closest('[data-file]');
            if (f && !A[f.getAttribute('data-file')]) { e.preventDefault(); toast('Файл пока не загружен: добавьте ссылку в A.' + f.getAttribute('data-file')); return; }
            var ct = e.target.closest('[data-cat]');
            if (ct) { pfCat = ct.getAttribute('data-cat'); pfUpdate(true); return; }

            var s = e.target.closest('[data-scroll]');
            if (s) { var t = document.querySelector(s.getAttribute('data-scroll')); if (t) t.scrollIntoView({ behavior: RM ? 'auto' : 'smooth' }); return; }
            if (e.target.closest('[data-close]')) { location.hash = '#/portfolio'; return; }
            var a = e.target.closest('a[href^="#/"]');
            if (a && !modal.contains(a)) {
                var h = a.getAttribute('href');
                if (h === location.hash || (h === '#/' && !location.hash)) { e.preventDefault(); if (h === '#/contacts') scrollToContacts(true); else window.scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' }); }
            }
        });
        document.addEventListener('keydown', function (e) {
            if (!quickEl.hidden) {
                if (e.key === 'Escape') { closeQuick(); return; }
                if (e.key === 'Tab') {
                    var qf = quickEl.querySelectorAll('a[href],button'); if (!qf.length) return;
                    var qa = qf[0], qb = qf[qf.length - 1];
                    if (e.shiftKey && document.activeElement === qa) { e.preventDefault(); qb.focus(); }
                    else if (!e.shiftKey && document.activeElement === qb) { e.preventDefault(); qa.focus(); }
                }
                return;
            }
            if (modal.hidden) return;
            if (e.key === 'Escape') { location.hash = '#/portfolio'; return; }
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                var links = modal.querySelectorAll('.mnav a'); var l = links[e.key === 'ArrowRight' ? 1 : 0]; if (l && !/video/i.test(e.target.tagName)) location.hash = l.getAttribute('href');
                return;
            }
            if (e.key === 'Tab') {
                var f = modal.querySelectorAll('a[href],button,video[controls]'); if (!f.length) return;
                var first = f[0], last = f[f.length - 1];
                if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        });
        window.addEventListener('hashchange', route);

        /* ================== Инициализация ================== */
        var initials = A.name.split(/\s+/).map(function (w) { return w.charAt(0); }).join('').toUpperCase();
        $('#brandFull').textContent = A.name;
        $('#brandMono').textContent = initials;
        var ftNav = [['#/about', 'обо мне'], ['#/portfolio', 'проекты'], ['#/exhibitions', 'выставки']];
        $('#footer').innerHTML = '<div class="wrap"><div class="ft-top"><div class="ft-id"><p class="ft-name">' + esc(A.name) + '</p></div><div class="ft-cols"><div class="ft-col"><p class="ft-h">навигация</p>' + ftNav.map(function (n) { return '<a href="' + n[0] + '">' + n[1] + '</a>'; }).join('') + '</div><div class="ft-col"><p class="ft-h">контакты</p><a href="mailto:' + esc(A.email) + '">' + esc(A.email) + '</a><a href="' + esc(A.telegram.url) + '" target="_blank" rel="noopener noreferrer">' + esc(A.telegram.label) + '</a>' + A.socials.map(function (s) { return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.label) + '</a>'; }).join('') + '</div></div></div><div class="ft-bot"><span class="label">© ' + new Date().getFullYear() + ' <i class="dot" aria-hidden="true"></i> ' + esc(A.name) + '</span><button class="ft-up" type="button" data-top>наверх <i class="fa-solid fa-arrow-up" aria-hidden="true"></i></button></div></div>';
        if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
        var titleEl = document.querySelector('title');
        if (titleEl && window.MutationObserver) {
            new MutationObserver(function () {
                var l = document.title.toLowerCase();
                if (document.title !== l) document.title = l;
            }).observe(titleEl, { childList: true });
        }
        normalizeInitialPath();
        route();
    })();










