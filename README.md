# DenZ for GenZ

This project is a **decentralized social media platform** built using **Next.js**, **Express.js**, **Node.js**, **MongoDB**, and **Blockchain (Ethereum)**. The platform allows users to share posts, interact with others through likes and comments, and earn rewards in the form of Ether coins. Influencers can connect with brands for collaborations and advertising opportunities, while brands can promote their products to relevant audiences.

## Features

### Core Features
- **User Posts**: Users can create and share content (text, images, videos).
- **Likes & Comments**: Users can like and comment on posts to engage with other users.
- **Donations**: Users can donate tips to other users in Ether (ETH) as a token of appreciation for their content.
- **Rewards System**: Users are rewarded with Ether based on the time they spend on the platform.
  
### Influencer Features
- **Brand Collaborations**: Brands can reach out to influencers with a large following for product promotion.
- **Paid Promotions**: Influencers can get paid by brands in Ether for promoting products and services.

### Brand Features
- **Advertisement**: Brands can advertise their products on the platform by collaborating with influencers.

### Blockchain Integration
- **Ethereum Smart Contracts**: Handle donations and rewards distribution using Ethereum smart contracts.
- **Wallet Integration**: Users can connect their Ethereum wallets (e.g., MetaMask) to receive and send Ether.

## Tech Stack

### Frontend
- **Next.js**: React framework for server-side rendering and building user interfaces.
- **Tailwind CSS**: For styling the frontend components and ensuring responsive design.

### Backend
- **Express.js**: Backend framework to handle API requests, user authentication, and business logic.
- **Node.js**: JavaScript runtime environment for building the backend.
- **MongoDB**: Database for storing user data, posts, comments, and other content.
- **Web3.js**: JavaScript library for interacting with the Ethereum blockchain.

**Backend Repository**: [Social Media Backend](https://github.com/DevAniket010/Social_media_backend)

### Blockchain
- **Ethereum**: For decentralized token transfers and smart contract interactions.
- **Smart Contracts**: Manage donation, reward distribution, and advertising payments using Solidity.

## Setup Instructions

### Prerequisites
To run this project, you'll need to have the following installed:
- **Node.js** (v14.x or higher)
- **MongoDB** (local instance or MongoDB Atlas)
- **MetaMask** (or any other Ethereum wallet for testing)
- **Ethereum test network** (Rinkeby, Goerli, etc.)

### Steps to Run Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/social-media-platform.git
    cd social-media-platform
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure environment variables**:
    Create a `.env` file in the root directory with the following variables:
    ```bash
    MONGODB_URI=mongodb://localhost:27017/socialmedia
    PORT=5000
    ETHEREUM_NETWORK=https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID
    ```

4. **Deploy Smart Contracts** (optional):
    If you modify the smart contracts, you need to redeploy them to the test network:
    - Compile and deploy the contracts using Truffle or Hardhat.
    - Update contract addresses in the frontend and backend.

5. **Run the backend server**:
    ```bash
    npm run server
    ```

6. **Run the Next.js frontend**:
    ```bash
    npm run dev
    ```

7. **Open the platform**:
    Go to `http://localhost:3000` in your browser to see the app in action.

## Smart Contracts

The smart contracts are written in **Solidity** and handle:
- **Donation Transfers**: Allow users to tip content creators in Ether.
- **Reward Distribution**: Automatically reward users based on platform engagement.
- **Payment Management**: Manage payments from brands to influencers.

To deploy and interact with the contracts, you can use tools like:
- **Truffle**
- **Hardhat**

## Project Glimpse 

![Landing Page](https://drive.google.com/uc?export=view&id=1GmsAxh-wCjnWqHBRrtulc5gie8zvuUhp)

![Feed](https://drive.google.com/uc?export=view&id=1GgT3dNmDnpXbWlXlRJi3dq9zdH_KiJlf)

![Trend Page](https://drive.google.com/uc?export=view&id=1GgjrGVdCnDyAoUM0OVJcGOh5nMXf3ysj)

![Post](https://drive.google.com/uc?export=view&id=1Gm4GQH4h9I94PzaVNt7Wiy8ewHHJ4iGM)

![Comments](https://drive.google.com/uc?export=view&id=1GkBfundAy_MO25vRqp0O7Zw1FWXgjjBl)

![Reward](https://drive.google.com/uc?export=view&id=1GmYLsndexNPKVTlE-Rjq83MI8OW3iJ3R)



## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

**Happy coding!**
