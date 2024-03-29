<div align="center">
  <h1>
    ✳️ required
  </h1>

  > Simple authentication flow application.

  <strong>🚧 Discontinued 🚧</strong>

  [![build-image]][build-url] [![license-image]][license-url]
</div>

<!-- TODO: Add project images -->
<!-- TODO: Add features and proposal -->

## 💡 You will need

- First, a cup of coffee ☕;
- [Node JS](https://nodejs.org) installed on your host;
- The [✳️ Required API](https://github.com/MattZ6/required-api) running.

## 🎉 Starting

### Clone

In order to clone the project (via HTTPS), run this command:

```bash
git clone https://github.com/MattZ6/required.git
```

> 💡 SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command: `git clone git@github.com:MattZ6/required.git`

Go to project folder:

```bash
cd required
```

### Dependencies

Install the project dependencies:

```bash
pnpm i
```

### Environment variables

> The project has some environment variables so that we can have dynamic settings based on the context in which it is running.

First, create a copy of `.env.example`:

```bash
cp .env.example .env.local
```

Then fill in the missing values in the variables.

## 🔥 Running

### Start

To run the development server:

```bash
pnpm dev
```

## 🤝 Contributing

> Contributions, issues and new features are **always welcome**! You can explore them [here](https://github.com/MattZ6/required/issues).

Feel free to submit a new issue with a respective title and description on the the **Required** repository. If you already found a solution to your problem, i would love to review your pull request! Have a look at our [contribution guidelines](.github/CONTRIBUTING.md) to find out about the coding standards.

## 📜 License

Released in 2022 © This project is under [MIT License](LICENSE.md).

## 👨‍🎤 Author

Made with ❤ by [Matheus Felipe Zanin](https://github.com/MattZ6).<br/>
[Get it touch](https://www.linkedin.com/in/mattz6)!


[build-url]: https://github.com/MattZ6/required/actions
[build-image]: https://img.shields.io/github/actions/workflow/status/mattz6/required/ci.yml?labelColor=232320&style=for-the-badge

[license-url]: LICENSE.md
[license-image]: https://img.shields.io/github/license/MattZ6/required?color=303030&labelColor=232320&style=for-the-badge
