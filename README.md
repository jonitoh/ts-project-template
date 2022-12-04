Typescript
ESLint
Prettier
Husky
Lint-Staged
Commitlint
VSCode
For test ( Jest, Testing Library, Cypress)

best practice log ???

https://dev.to/sohandutta/make-everyone-in-your-project-write-beautiful-commit-messages-using-commitlint-and-commitizen-1amn

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

### Features

Developer experience first:

-   ⚡ [Next.js](https://nextjs.org) for Static Site Generator
-   🔥 Type checking [TypeScript](https://www.typescriptlang.org)
-   💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
-   ✅ Strict Mode for TypeScript and React 18
-   📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
-   💖 Code Formatter with [Prettier](https://prettier.io)
-   🦊 Husky for Git Hooks
-   🚫 Lint-staged for running linters on Git staged files
-   🚓 Lint git commit with Commitlint
-   📓 Write standard compliant commit messages with Commitizen
-   🦺 Unit Testing with Jest and React Testing Library
-   🧪 E2E Testing with Cypress
-   👷 Run tests on pull request with GitHub Actions
-   🎁 Automatic changelog generation with Semantic Release
-   🔍 Visual testing with Percy (Optional)
-   💡 Absolute Imports using `@` prefix
-   🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
-   🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
-   🗺️ Sitemap.xml and robots.txt with next-sitemap
-   ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
-   🖱️ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
-   🌈 Include a FREE minimalist theme
-   💯 Maximize lighthouse score

Built-in feature from Next.js:

-   ☕ Minify HTML & CSS
-   💨 Live reload
-   ✅ Cache busting

### Philosophy

-   Minimal code
-   SEO-friendly
-   🚀 Production-ready

### Nextless.js SaaS Boilerplate

Build your SaaS product faster with [React SaaS Boilerplate](https://nextlessjs.com).

[![React SaaS Boilerplate Next.js](https://creativedesignsguru.com/assets/images/themes/next-js-saas-starter-kit.jpg)](https://nextlessjs.com)

### Premium Themes

| [Green Nextjs Landing Page Template](https://creativedesignsguru.com/landing-green-modern-nextjs-theme/)                                                                                                   | [Purple Saas Nextjs Theme](https://creativedesignsguru.com/landing-purple-modern-react-theme/)                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Green Nextjs Landing Page Template](https://creativedesignsguru.com/assets/images/themes/landing-green-modern-nextjs-theme-xs.png)](https://creativedesignsguru.com/landing-green-modern-nextjs-theme/) | [![Blue Landing Page Nextjs Theme](https://creativedesignsguru.com/assets/images/themes/landing-blue-modern-nextjs-theme-xs.png)](https://creativedesignsguru.com/landing-blue-modern-react-theme/) |

Find more [Nextjs Themes](https://creativedesignsguru.com/category/nextjs/).

### Requirements

-   Node.js 14+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/ixartz/Next-js-Boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── layouts                     # Layouts components
│   ├── pages                       # Next JS Pages
│   ├── pages.test                  # Next JS Pages tests (this avoid test to treated as a Next.js pages)
│   ├── styles                      # Styles folder
│   ├── templates                   # Default template
│   └── utils                       # Utility functions
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate by making a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

-   `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
-   `src/styles/global.css`: your CSS file using Tailwind CSS
-   `src/utils/AppConfig.ts`: configuration file
-   `src/templates/Main.tsx`: default theme
-   `next-sitemap.config.js`: sitemap configuration

You have access to the whole code source if you need further customization. The provided code is only example for you to start your project. The sky is the limit 🚀.

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
npm run commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```shell
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Next-js-Boilerplate)

### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fixartz%2FNext-js-Boilerplate)

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

<!-- anchor -->
<div id="top"></div>

<!-- logo -->
<br/>
<p align="center">
    <a href="https://github.com/jonitoh/readme-examples" target="_blank">
        <img width="50%" src="docs/assets/file-svgrepo-com.svg" alt="logo">
    </a>
</p>

<!-- title -->
<p>
 <h3 align="center">README-Template</h3>
</p>
<br/>

<!-- available languages -->
<p align="center">
README available in:
   <a href="docs/README.eng.md">
    <img height="20px" src="https://img.shields.io/badge/EN-flag.svg?color=555555&style=flat&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjAgMzAiIGhlaWdodD0iNjAwIj4NCjxkZWZzPg0KPGNsaXBQYXRoIGlkPSJ0Ij4NCjxwYXRoIGQ9Im0zMCwxNWgzMHYxNXp2MTVoLTMwemgtMzB2LTE1enYtMTVoMzB6Ii8+DQo8L2NsaXBQYXRoPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzAwMjQ3ZCIgZD0ibTAsMHYzMGg2MHYtMzB6Ii8+DQo8cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNiIgZD0ibTAsMGw2MCwzMG0wLTMwbC02MCwzMCIvPg0KPHBhdGggc3Ryb2tlPSIjY2YxNDJiIiBzdHJva2Utd2lkdGg9IjQiIGQ9Im0wLDBsNjAsMzBtMC0zMGwtNjAsMzAiIGNsaXAtcGF0aD0idXJsKCN0KSIvPg0KPHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjxwYXRoIHN0cm9rZT0iI2NmMTQyYiIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJtMzAsMHYzMG0tMzAtMTVoNjAiLz4NCjwvc3ZnPg0K">
  </a>  
  <a href="docs/README.fr.md">
    <img height="20px" src="https://img.shields.io/badge/FR-flag.svg?color=555555&style=flat&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4NCjxwYXRoIGZpbGw9IiNlZDI5MzkiIGQ9Im0wLDBoOTAwdjYwMGgtOTAweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMGg2MDB2NjAwaC02MDB6Ii8+DQo8cGF0aCBmaWxsPSIjMDAyMzk1IiBkPSJtMCwwaDMwMHY2MDBoLTMwMHoiLz4NCjwvc3ZnPg0K">
  </a>
</p>
<br/>

<!-- github badges -->

![GitHub contributors](https://img.shields.io/github/contributors/jonitoh/readme-examples)
![GitHub repo size](https://img.shields.io/github/repo-size/jonitoh/readme-examples)
![GitHub all releases](https://img.shields.io/github/downloads/jonitoh/readme-examples/total)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/jonitoh/readme-examples)
[![GitHub license](https://img.shields.io/github/license/jonitoh/readme-examples)](LICENSE)
[![LinkedIn link](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ninsemou-jordan-toh-a14434108/?locale=en_US)

<!-- tagline or short introduction -->
<br/>
<div>
<p align="center">
    An example of an awesome README to start any project on the right foot!
 </p>
</div>
<br/>

---

---

<!-- news / quick announcements -->

### This README is ready-to-use! 🥳

---

---

<!-- summary -->
<br />
<div align="center">

**TABLE OF CONTENT**

[**🌱&nbsp; About the project**](#philosophy) | [**👨‍💻&nbsp; Tech stack**](#tech) |
[**📖&nbsp; Usage**](#usage) |
[**🎯&nbsp; Features**](#features) |
[**⚠️&nbsp; Limitations**](#limits) |
[**🤝&nbsp; Contributions**](#contribs) |
[**📘&nbsp; License**](#license) |
[**❤️&nbsp; Acknowledgments**](#acknowledgments) |
[**👀&nbsp; What else ?**](#encore) |

</div>

# <a id="philosophy">🌱&nbsp;</a> About the project

It is undeniable that documentation is a valid part of a good project. It helps others who might be interessed but also the ones who contribute adding more clarity and structure.

There are so many great README over the internet let alone GitHub. However, I decided to create my onw custom template so that I can kickstart my project easily with my standards.

<!-- back to top -->
<p align="right">
 <a href="#top">
   <img height="20px" src="docs/assets/up-arrow-svgrepo-com.svg" />
 </a>
</p>

# <a id="tech">👨‍💻&nbsp;</a> Tech stack

For this README template creation, there is no really specific technology except [Markdown](https://en.wikipedia.org/wiki/Markdown).

<!-- back to top -->
<p align="right">
 <a href="#top">
   <img height="20px" src="docs/assets/up-arrow-svgrepo-com.svg" />
 </a>
</p>

# <a id="usage">📖&nbsp;</a> Usage

<br/>

## 🚀&nbsp; Getting started

It's pretty simple to use it. Just clone the repo and it's all yours !!!

You can use the file `README-BLANK.md` to get started. It has the minimal structure to start a project. By default, it is written in English.

## ⚙️&nbsp; Requirements

No specific requirements.

## 👀&nbsp; Examples

This README is an example of what my template can create.

<!-- back to top -->
<p align="right">
 <a href="#top">
   <img height="20px" src="docs/assets/up-arrow-svgrepo-com.svg" />
 </a>
</p>

# <a id="features">🎯&nbsp;</a> Features

-   [x] Add Emoji
-   [x] Add back to top links
-   [ ] Add relevant gifs for this README
-   [x] Multi-language Support
    -   [x] French
    -   [x] English

<!-- back to top -->
<p align="right">
 <a href="#top">
   <img height="20px" src="docs/assets/up-arrow-svgrepo-com.svg" />
 </a>
</p>

# <a id="limits">⚠️&nbsp;</a> Limitations

-   For now, the README is not too specific.

<!-- back to top -->
<p align="right">
 <a href="#top">
   <img height="20px" src="docs/assets/up-arrow-svgrepo-com.svg" />
 </a>
</p>

# <a id="contribs">🤝&nbsp;</a> Contributions

**Thanks in advance for anyone who will contribute to expanding this template!**

😱 Found a bug? Missing a specific feature?

If you have any suggestion, please proceed by forking this repo and creating a pull request or opening an issue with the tag `enhancement`.

🤩 Don't forget to give the project a star! Thanks again!

<!-- back to the top -->
<p align="right">
 <a href="#top">
   <img height="20px" src="docs/assets/up-arrow-svgrepo-com.svg" />
 </a>
</p>

# <a id="license">📘&nbsp;</a> License

This project is released under the terms of the [MIT License](LICENSE).

<!-- back to the top -->
<p align="right">
 <a href="#top">
   <img height="20px" src="docs/assets/up-arrow-svgrepo-com.svg" />
 </a>
</p>

# <a id="acknowledgments">❤️&nbsp;</a> Acknowledgments

🏆 Here are the nominees, with no particular order, in the category for **_best resources used for this project_**:

-   [How to Add Badges to a GitHub Repository](https://betterprogramming.pub/add-badges-to-a-github-repository-716d2988dc6a)
-   [Choose an Open Source License](https://choosealicense.com)
-   [Img Shields](https://shields.io) for those beautiful badges !
-   [HTML code generator](https://www.html-code-generator.com/svg/country-flags) for the flag
-   [SVG Repo](https://www.svgrepo.com/) for the icons used here aka the logo and the back to top icon.
-   [Awesome README](https://github.com/matiassingers/awesome-readme): a curated list of awesome READMEs!
-   [Best-README-Template](https://github.com/othneildrew/Best-README-Template): another README template you can check it out.
-   [Fiber](https://github.com/gofiber/fiber) for their multilingual README.

<!-- back to the top -->
<p align="right">
 <a href="#top">
   <img height="20px" src="docs/assets/up-arrow-svgrepo-com.svg" />
 </a>
</p>

# <a id="encore">👀&nbsp;</a> What else ?

Thanks again for reading this README !!!

<!-- back to the top -->
<p align="right">
 <a href="#top">
   <img height="20px" src="docs/assets/up-arrow-svgrepo-com.svg" />
 </a>
</p>
