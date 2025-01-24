# Promptopia

Promptopia is an open-source platform designed to facilitate the seamless sharing of AI prompts. Built with Next.js, Tailwind CSS, and MongoDB, it provides users with the ability to discover, create, and share prompts effortlessly.

## Features

- **User Authentication**: Secure login using Google accounts via NextAuth.
- **Create, Edit, and Delete Prompts**: Full control over your prompts with intuitive interfaces.
- **User Profiles**: Personalized profiles showcasing user-created prompts.
- **Responsive Design**: Optimized for various devices using Tailwind CSS.

## Getting Started

To set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Ashray11/promptopia.git
   cd promptopia
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     NEXTAUTH_URL=your_nextauth_url
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Access the application at `http://localhost:3000`.

## Deployment

The application is deployed on Vercel. You can access it at:

[Promptopia on Vercel](https://promptopia-beta-henna.vercel.app/)

### Deploying on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Folder Structure

```
promptopia/
├── app/
│   ├── api/
│   ├── components/
│   ├── models/
│   ├── public/
│   ├── styles/
│   └── utils/
├── .gitignore
├── README.md
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

- **app/**: Contains the main application code, including API routes and page components.
- **components/**: Reusable UI components.
- **models/**: Mongoose models for MongoDB collections.
- **public/**: Static assets like images and icons.
- **styles/**: Global and component-specific styles.
- **utils/**: Utility functions and helpers.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
