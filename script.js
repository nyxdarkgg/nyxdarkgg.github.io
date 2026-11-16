(function () {
  "use strict";

  var LANG_KEY = "nyx-lang";
  var DEFAULT_LANG = "en";

  // To add a language later: add an entry here, add an I18N block,
  // and add <button class="lang-btn" data-set-lang="…">…</button> in the toggle.
  // autoPrefix matches navigator.language on a first visit with no saved choice.
  var LANGUAGES = {
    en: { htmlLang: "en" },
    pt: { htmlLang: "pt-BR", autoPrefix: "pt" },
    es: { htmlLang: "es", autoPrefix: "es" }
  };

  var I18N = {
    pt: {
      page_title: "Nyx ✦ @nyxdarkgg",
      meta_description: "Nyx (@nyxdarkgg) — games, tech, pop culture e rock/metal.",
      lang_aria: "Idioma",
      lang_label: "idioma",
      marquee_aria: "Faixa de boas-vindas",
      marquee: "★ bem-vindx ao cantinho da nyx ★ games • tech • pop culture • rock n metal ★ @nyxdarkgg ★ não é myspace, mas a intenção é a mesma ★",
      aka: "Amanda N., se a formalidade pedir.",
      blinkies_aria: "Selos",
      about_title: "sobre mim",
      about_1: "Oi. Eu sou a Nyx. Fora do palco, Amanda. Brasileira, faço as coisas em inglês, português e espanhol. Eu jogo, fuço o que aparece de tech e acompanho filme e série — principalmente os que ainda nem estrearam. Rock e metal no fone, cultura pop no segundo plano.",
      about_2: "O visual é goth. O resto é farmar XP e ignorar hype vazio. Se você também prefere um boss fight a uma small talk, a gente vai se entender.",
      likes_title: "o que eu curto",
      like_games_label: "Games",
      like_games: "do indie estranho ao que todo mundo já zerou duas vezes",
      like_tech_label: "Tech",
      like_tech: "gadget, software e a atualização que quebra alguma coisa",
      like_films_label: "Filmes e séries",
      like_films: "com carinho especial pelos trailers",
      like_music_label: "Rock e metal",
      like_music: "alto o bastante, obrigada",
      socials_title: "redes",
      socials_intro: "Se for me procurar, é por aqui. O resto tá carregando, tipo jogo em 2006.",
      soon_tiktok: "tiktok · em breve",
      soon_youtube: "youtube · em breve",
      soon_title: "em breve",
      counter_aria: "Contador de visitas, decorativo",
      visits: "visitas",
      updated: "última atualização: 15.11.2026",
      now_playing: "♫ now playing: uma faixa que você provavelmente já ouviu",
      footer_best: "melhor visto em 800×600, com o brilho no máximo e o volume no mínimo",
      footer_tiny: "html, css e um pouco de saudade. sem cookies — só glitter."
    },
    en: {
      page_title: "Nyx ✦ @nyxdarkgg",
      meta_description: "Nyx (@nyxdarkgg) — games, tech, pop culture, and rock/metal.",
      lang_aria: "Language",
      lang_label: "lang",
      marquee_aria: "Welcome banner",
      marquee: "★ welcome to nyx's little corner ★ games • tech • pop culture • rock n metal ★ @nyxdarkgg ★ not myspace, but that was the idea ★",
      aka: "Amanda N., if we're being formal.",
      blinkies_aria: "Badges",
      about_title: "about me",
      about_1: "Hey. I'm Nyx. Offstage, Amanda. Brazilian, posting in English, Portuguese and Spanish. I play games, poke at whatever's new in tech, and keep up with movies and shows — especially the ones that aren't out yet. Rock and metal in the headphones, pop culture in the background.",
      about_2: "The look is goth. The rest is grinding XP and skipping empty hype. If you'd also take a boss fight over small talk, we'll get along.",
      likes_title: "what I'm into",
      like_games_label: "Games",
      like_games: "from the weird indie to the one everybody already finished twice",
      like_tech_label: "Tech",
      like_tech: "gadgets, software, and the update that breaks something",
      like_films_label: "Movies and shows",
      like_films: "with a soft spot for the trailers",
      like_music_label: "Rock and metal",
      like_music: "loud enough, thanks",
      socials_title: "socials",
      socials_intro: "If you're looking for me, start here. The rest is still loading, like a game from 2006.",
      soon_tiktok: "tiktok · coming soon",
      soon_youtube: "youtube · coming soon",
      soon_title: "coming soon",
      counter_aria: "Decorative hit counter",
      visits: "visits",
      updated: "last updated: 15.11.2026",
      now_playing: "♫ now playing: a track you've probably already heard",
      footer_best: "best viewed in 800×600, brightness all the way up, volume all the way down",
      footer_tiny: "html, css, and a little nostalgia. no cookies — just glitter."
    },
    es: {
      page_title: "Nyx ✦ @nyxdarkgg",
      meta_description: "Nyx (@nyxdarkgg) — games, tech, pop culture y rock/metal.",
      lang_aria: "Idioma",
      lang_label: "idioma",
      marquee_aria: "Franja de bienvenida",
      marquee: "★ bienvenidx al rinconcito de nyx ★ games • tech • pop culture • rock n metal ★ @nyxdarkgg ★ no es myspace, pero esa era la idea ★",
      aka: "Amanda N., si vamos a ser formales.",
      blinkies_aria: "Insignias",
      about_title: "sobre mí",
      about_1: "Hola. Soy Nyx. Fuera del escenario, Amanda. Brasileña, publico en inglés, portugués y español. Juego, husmeo lo que sale de tech y sigo películas y series — sobre todo las que todavía no estrenan. Rock y metal en los auriculares, cultura pop de fondo.",
      about_2: "El look es goth. El resto es farmear XP e ignorar el hype vacío. Si también prefieres un boss fight a una plática forzada, nos vamos a llevar bien.",
      likes_title: "lo que me gusta",
      like_games_label: "Games",
      like_games: "del indie raro al que todo el mundo ya terminó dos veces",
      like_tech_label: "Tech",
      like_tech: "gadgets, software y esa actualización que rompe algo",
      like_films_label: "Películas y series",
      like_films: "con un cariño especial por los trailers",
      like_music_label: "Rock y metal",
      like_music: "lo suficientemente alto, gracias",
      socials_title: "redes",
      socials_intro: "Si me andas buscando, empieza por aquí. El resto sigue cargando, como un juego de 2006.",
      soon_tiktok: "tiktok · próximamente",
      soon_youtube: "youtube · próximamente",
      soon_title: "próximamente",
      counter_aria: "Contador de visitas, decorativo",
      visits: "visitas",
      updated: "última actualización: 15.11.2026",
      now_playing: "♫ now playing: una pista que probablemente ya escuchaste",
      footer_best: "se ve mejor en 800×600, con el brillo al máximo y el volumen al mínimo",
      footer_tiny: "html, css y un poco de nostalgia. sin cookies — solo glitter."
    }
  };

  function languageIds() {
    return Object.keys(LANGUAGES);
  }

  function detectLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved && LANGUAGES[saved] && I18N[saved]) return saved;
    } catch (err) {}
    var langs = [];
    if (navigator.languages && navigator.languages.length) {
      langs = navigator.languages;
    } else if (navigator.language) {
      langs = [navigator.language];
    }
    var i, id, prefix, nav;
    for (i = 0; i < langs.length; i += 1) {
      nav = String(langs[i]).toLowerCase();
      for (id in LANGUAGES) {
        if (!Object.prototype.hasOwnProperty.call(LANGUAGES, id)) continue;
        prefix = LANGUAGES[id].autoPrefix;
        if (prefix && nav.indexOf(prefix) === 0) return id;
      }
    }
    return DEFAULT_LANG;
  }

  function applyLang(lang) {
    if (!LANGUAGES[lang] || !I18N[lang]) lang = DEFAULT_LANG;
    var t = I18N[lang];
    document.documentElement.lang = LANGUAGES[lang].htmlLang;
    document.title = t.page_title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.meta_description);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(t, key)) {
        el.textContent = t[key];
      }
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      if (Object.prototype.hasOwnProperty.call(t, key)) {
        el.setAttribute("title", t[key]);
      }
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (Object.prototype.hasOwnProperty.call(t, key)) {
        el.setAttribute("aria-label", t[key]);
      }
    });
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-set-lang") === lang ? "true" : "false");
    });
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (err) {}
  }

  applyLang(detectLang());

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-set-lang"));
    });
  });

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var coarse = window.matchMedia("(pointer: coarse)").matches;

  var el = document.getElementById("hit-counter");
  if (el) {
    var pad = function (n) { return String(n).padStart(7, "0"); };
    try {
      var last = localStorage.getItem("nyx-hits-last");
      if (last) el.textContent = pad(last);
    } catch (err) {}
    if (window.__nyxHits) {
      window.__nyxHits.then(function (d) {
        if (typeof d.value === "number") {
          el.textContent = pad(d.value);
          try {
            sessionStorage.setItem("nyx-counted", "1");
            localStorage.setItem("nyx-hits-last", String(d.value));
          } catch (err) {}
        }
      }).catch(function () {});
    }
  }

  if (reduced || coarse) return;

  var last = 0;
  document.addEventListener("pointermove", function (event) {
    var now = Date.now();
    if (now - last < 40) return;
    last = now;
    var spark = document.createElement("span");
    spark.className = "spark";
    spark.style.left = event.clientX + "px";
    spark.style.top = event.clientY + "px";
    var palette = ["#ffffff", "#ff9ad0", "#c86bff", "#7ef0ff"];
    spark.style.background = palette[Math.floor(Math.random() * palette.length)];
    document.body.appendChild(spark);
    window.setTimeout(function () {
      spark.remove();
    }, 750);
  });
})();
