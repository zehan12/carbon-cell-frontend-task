# Carbon Cell Platform

## Hosted Link 🔗: https://carboncell-ten.vercel.app

### This project showcases the completion of tasks as part of a web development assessment. Each task focuses on implementing specific features and functionalities using React JS and relevant libraries.

### Task 1: Side Navigation Bar
#### Objective: 
- Implement a responsive side navigation bar with at least three navigation items. The navigation bar should collapse into a hamburger menu on smaller screens and highlight the active navigation item.

[![Screenshot-from-2024-04-02-02-11-51.png](https://i.postimg.cc/R0XYTvmJ/Screenshot-from-2024-04-02-02-11-51.png)](https://postimg.cc/JyHKrVGR)

[![Screenshot-from-2024-04-02-02-11-41.png](https://i.postimg.cc/D0qHLLwn/Screenshot-from-2024-04-02-02-11-41.png)](https://postimg.cc/8fzZVFv0)

[![Screenshot-from-2024-04-02-02-12-30.png](https://i.postimg.cc/VNkwwGLM/Screenshot-from-2024-04-02-02-12-30.png)](https://postimg.cc/68ggLhZ5)

[![Screenshot-from-2024-04-02-02-12-25.png](https://i.postimg.cc/8k6STrDy/Screenshot-from-2024-04-02-02-12-25.png)](https://postimg.cc/c60jmCvY)

### Task 2: Graph Population Data
#### Objective: 
- Fetch population data from the provided API and create a graph using React JS and Chart.js library. The graph should display population data for different nations with appropriate labels, legends, and axis titles.

[![Screenshot-from-2024-04-02-02-35-07.png](https://i.postimg.cc/Bvrmpby6/Screenshot-from-2024-04-02-02-35-07.png)](https://postimg.cc/Y4xNqrtK)

[![Screenshot-from-2024-04-02-02-36-25.png](https://i.postimg.cc/QC456ntb/Screenshot-from-2024-04-02-02-36-25.png)](https://postimg.cc/QK7HCmc9)

[![Screenshot-from-2024-04-02-02-37-46.png](https://i.postimg.cc/2y6LBFwB/Screenshot-from-2024-04-02-02-37-46.png)](https://postimg.cc/qhPvPKWk)


### Task 3: Display Cryptocurrency Prices
#### Objective: 
- Fetch cryptocurrency prices from the provided API and display them in visually appealing cards. Prices of Bitcoin should be displayed in multiple currencies (e.g., USD and Euro) using React JS and asynchronous data fetching techniques.

[![Screenshot-from-2024-04-02-02-40-17.png](https://i.postimg.cc/VvxsLjHw/Screenshot-from-2024-04-02-02-40-17.png)](https://postimg.cc/JHQCpBLY)

[![Screenshot-from-2024-04-02-02-38-30.png](https://i.postimg.cc/x8cqdjfv/Screenshot-from-2024-04-02-02-38-30.png)](https://postimg.cc/4HRXLghy)

[![Screenshot-from-2024-04-02-02-38-37.png](https://i.postimg.cc/xTNcDdFY/Screenshot-from-2024-04-02-02-38-37.png)](https://postimg.cc/GHrcvbCS)

### Task 4: Integrate MetaMask Wallet
#### Objective: 
- Implement a feature to connect the MetaMask wallet using Web3 JS library. Display appropriate feedback/messages for successful/unsuccessful wallet connection attempts and ensure compatibility with modern browsers and MetaMask extension.

[![Screenshot-from-2024-04-02-02-41-20.png](https://i.postimg.cc/bvVZf28y/Screenshot-from-2024-04-02-02-41-20.png)](https://postimg.cc/mcMLQktJ)

[![Screenshot-from-2024-04-02-02-41-42.png](https://i.postimg.cc/h4dfNjYn/Screenshot-from-2024-04-02-02-41-42.png)](https://postimg.cc/ThTdDRGN)

[![Screenshot-from-2024-04-02-02-43-54.png](https://i.postimg.cc/KY1ZLpSb/Screenshot-from-2024-04-02-02-43-54.png)](https://postimg.cc/HJCD12kv)

[![Screenshot-from-2024-04-02-02-44-27.png](https://i.postimg.cc/wBn9k5gm/Screenshot-from-2024-04-02-02-44-27.png)](https://postimg.cc/mcNxLHcL)



### Technology Stack
- HTML5
- CSS3
- JavaScript (ES6+)
- ReactJS

### Development
To get a local copy of the code, clone it using git:

```bash
git clone https://github.com/zehan12/carbon-cell-frontend-task.git
cd carbon-cell-frontend-task
```
Install dependencies:

```bash
npm install
```

Now, you can start a local web server by running:

```bash
npm run dev
```

And then open http://localhost:5173 to view it in the browser.

### Folder Structure
```bash
.
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── assets
│   │   ├── carbonCell.png
│   │   └── MetaMask_Fox.png
│   ├── favicon.ico
│   └── vite.svg
├── readme.md
├── src
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── CryptoCurrency
│   │   │   ├── CryptoLoding.tsx
│   │   │   ├── CyptoCard.tsx
│   │   │   └── index.tsx
│   │   ├── Greeting
│   │   │   └── index.tsx
│   │   ├── Home
│   │   │   ├── HomeCard.tsx
│   │   │   └── index.tsx
│   │   ├── index.ts
│   │   ├── Population
│   │   │   └── index.tsx
│   │   ├── Sidebar
│   │   │   ├── index.tsx
│   │   │   └── MobileMenu.tsx
│   │   └── Wallet
│   │       ├── index.tsx
│   │       └── WalletDetailCard.tsx
│   ├── constants
│   │   ├── api.ts
│   │   └── routes.ts
│   ├── index.css
│   ├── main.tsx
│   ├── routes
│   │   └── index.tsx
│   ├── services
│   │   └── api.ts
│   ├── types
│   │   └── index.d.ts
│   ├── utils
│   │   └── general.utils.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Libraries and Dependencies

|      Library      | Description                                                              |
| :---------------: | :----------------------------------------------------------------------- |
|       React       | Utilize React to build out a well-designed front-end experience.         |
|   React Router    | Use React Router for client-side routing                                 |
|      Axios        | Use for fetch data from API                                              |
|  react-hot-toast  | Utilize Toaster to show notification of error and message                |
|  Tailwind CSS     | Utilize Tailwind to style all react components                           |
|  lucide-react      | Use for showing icons                                                    |
| React Apex Chart | Use for showing charts data in charts     |

### Contributions
Any feature requests and pull requests are welcome!

### Show your support
Give a ⭐️ if this project helped you!

### License
The project is under MIT license.

### Author
@zehan12