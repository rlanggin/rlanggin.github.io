// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "cirriculum vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "my publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "As a Graduate Assistant in the Department of Astronomy at UNLV, I had the opportunity to instruct the astronomy lab during the summer of 2024. You can find the presentations available for use here.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-tutorials",
          title: "tutorials",
          description: "Learn Python for Physics and Astronomy through hands-on coding tutorials.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tutorials/";
          },
        },{id: "post-lvas-august-2025-monthly-meeting",
      
        title: "LVAS August 2025 Monthly Meeting",
      
      description: "I was honored to be invited back to the Las Vegas Astronomical Society’s Monthly Meeting at the Dale Etheridge Planetarium to present on the Astrophysical Implications of Next-Generation Gravitational-Wave Observations.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/lvasmeeting/";
        
      },
    },{id: "post-dark-skies-in-the-spring-mountains-star-party",
      
        title: "Dark Skies in the Spring Mountains – Star Party",
      
      description: "I was invited back for the second year as a guest speaker at the Dark Skies Stargazing Event hosted by the Las Vegas Astronomical Society at Mount Charleston. This year, I shared insights into Gravitatioinal-Waves and my current research.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/GWExplorer/";
        
      },
    },{id: "post-dark-skies-in-the-spring-mountains-star-party",
      
        title: "Dark Skies in the Spring Mountains – Star Party",
      
      description: "I was invited back for the second year as a guest speaker at the Dark Skies Stargazing Event hosted by the Las Vegas Astronomical Society at Mount Charleston. This year, I shared insights into Gravitatioinal-Waves and my current research.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/MtC/";
        
      },
    },{id: "post-back-to-school-out-of-this-world-event",
      
        title: "Back-to-School “Out of This World” Event",
      
      description: "I participated in MGM Group’s “Out of This World” Back-to-School event, sharing Gravitational-Wave science and hands-on demonstrations with local students and families.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/B2S/";
        
      },
    },{id: "post-save-the-night-star-party-save-red-rock-canyon",
      
        title: "Save The Night Star Party – Save Red Rock Canyon",
      
      description: "I was an invited speaker at a community stargazing event in Red Rock Canyon, where I shared the science of Gravitational-Wavess and the importance of protecting dark skies. Check out a recording of my presentation and the event recap here!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/SRR/";
        
      },
    },{id: "post-spring-2025-research-presentations-amp-conference-highlights",
      
        title: "Spring 2025 | Research Presentations &amp; Conference Highlights",
      
      description: "Spring 2025 took me from Las Vegas to Reno to Anaheim, presenting research at the NCfA Multi-Messenger Symposium, the Nevada NASA Space Grant &amp; EPSCoR Statewide Meeting, and the APS Global Physics Summit.  Here&#39;s a recap of the science, community, and conversations.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Spring-Recap/";
        
      },
    },{id: "post-are-gravitational-waveforms-ready-for-next-generation-gravitational-wave-detectors-a-comic-book",
      
        title: "Are Gravitational Waveforms Ready For Next-Generation Gravitational-Wave Detectors? A Comic Book",
      
      description: "Read my short comic book on gravitational waveform accuracy for current and next-generation GW detectors here!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/gw_comic/";
        
      },
    },{id: "post-lvas-september-2024-monthly-meeting",
      
        title: "LVAS September 2024 Monthly Meeting",
      
      description: "This September, I was estactic to be welcomed back as the guest speaker for the Las Vegas Astronomical Society’s monthly meeting. Check out the event here!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/lvasmeeting/";
        
      },
    },{id: "post-stargazing-event-at-mt-charleston",
      
        title: "Stargazing Event at Mt. Charleston",
      
      description: "This summer, I was honored to be the guest speaker for the Las Vegas Astronomical Society’s stargazing event at the Spring Mountain Visitor Gateway at Mount Charleston. Check out the event here!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/mtcharleston/";
        
      },
    },{id: "news-ever-wondered-what-it-s-like-to-stargaze-at-mt-charleston",
          title: 'Ever wondered what it’s like to stargaze at Mt. Charleston?',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-one-of-six-mini-grant-awardees-mentioned-on-pg-7-aps-foep-newsletter-march-2025",
          title: 'One of six Mini-Grant Awardees mentioned on pg. 7: APS FOEP Newsletter (March...',
          description: "",
          section: "News",},{id: "news-catch-me-as-an-invited-speaker-at-the-dark-sky-event-7-26-stargazing-with-lvas",
          title: 'Catch me as an invited speaker at the Dark Sky Event - 7/26...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%63%68%65%6C.%6C%61%6E%67%67%69%6E@%75%6E%6C%76.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rachel-langgin", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-5116-6217", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
