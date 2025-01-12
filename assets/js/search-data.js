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
        },{id: "nav-publications",
          title: "publications",
          description: "my publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "cirriculum vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "As a Graduate Assistant in the Department of Astronomy at UNLV, I had the opportunity to instruct the astronomy lab during the summer of 2024. You can find the presentations available for use here.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-gravitational-wave-comic",
      
        title: "Gravitational Wave Comic",
      
      description: "Read my short comic book on gravitational waveform accuracy for current and next-generation GW detectors here!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/gw_comic/";
        
      },
    },{id: "post-lvas-september-monthly-meeting",
      
        title: "LVAS September Monthly Meeting",
      
      description: "This September, I was estactic to be welcomed back as the guest speaker for the Las Vegas Astronomical Society’s monthly meeting. Check out the event here!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/lvasmeeting/";
        
      },
    },{id: "post-stargazing-event-at-mt-chareston",
      
        title: "Stargazing Event at Mt. Chareston",
      
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
            },},{
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
