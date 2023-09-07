<br />

<p align="center">

<h1 align="center">Leandro Correia's Portfolio ✨</h1>

<p align="center">

This project took me one week to develop while learning for the first time Reactjs and Tailwind. Here's the URL:

<a href="https://leandrocorreia.dev">leandrocorreia.dev</a>
</p>

<br />

[![Site preview](/public/portfolio-image.png)](https://leandrocorreia.dev)
<br />
 

## Tech Stack 🛠️

Dependencies defined in package.json:

| [Reactjs](https://reactjs.org/)

| [Tailwind](https://tailwindcss.com/) + [Flowbite](https://flowbite.com/) + [Headlessui](https://headlessui.com/)

| [GitHub API](https://docs.github.com/rest/repos/repos)

| [Emailjs](https://www.emailjs.com)

## Structure ⚓

- Navigation bar
- Home
- Social media
- About
	- Image
	- Simple text about me
	- Table with Technical and Soft Skills
	- Button to download my resume
- Projects
	- Recent projects (using GitHub API)
	- Detailed projects 
- Contact (using Emailjs)
- Footer
- Copyrights - open source

## Sharing 💗

The project is currently open source. Feel free to make your own version. All you need to do is to fork this repository.
Don't forget to leave a star ⭐ if you like it.

## Inspiration 💡

This project was inspired by a variety of developers' portfolio websites.
Thanks a lot to [Hashir Shoaeb](https://hashirshoaeb.com/) and contributors who helped on the [home](https://github.com/hashirshoaeb/home) project.

## Prerequisites 🍪

You will need [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC and to configure [React + Tailwind](https://tailwindcss.com/docs/guides/create-react-app). You should also own a GitHub account.

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:

2. Clone the forked repo from your account using:

```bash

git clone https://github.com/<your-username>/leco.git

```

3. Open in editor and edit the [src/info/config.js](./src/info/config.js) file.

4. Add your resume as <resume.pdf> in place of [src/info/resume.pdf](./src/info/)

5. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).

6. Change the URL in the [package.json](./package.json) file:

```json

"homepage": "https://<your-website-name>/"

```

Or for deployment at custom domain, refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

7. After editing the file, run the following bash commands:

```bash

npm install

npm start

```

8. To deploy the website, run:

```bash

npm run build

npm run deploy

```

9. Congrats!! Your website is up and running. To see it live, visit:

```https

"https://<your-website-name>/

```

10. If you want to change some of the info, thumbnail image, profile pic and resume, you can do the following:

- Navigate to the "public" folder.

- There you will see "social-image.png", "resume.pdf", "leandrocorreia.png" and, inside the "src/" directory, you have "config.json".

- Make your own version and rename your thumbnail as "social-image.png", your profile picture as "profile-pic.png", your resume as "resume.pdf" and change the "config.json" as you please.


## Contributing 🙋

This project is in development. Feel free to fork, use and maintain your own version. I'm also open to recieving help and suggestions. 

## License ⚖️

Distributed under the `GPL-3.0` License. See [LICENSE](LICENSE.md) for more information.
