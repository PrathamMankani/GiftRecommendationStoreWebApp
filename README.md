# Gift Recommendation Store 🎁

A modern, AI-powered gift recommendation e-commerce platform built with React, Node.js, Express, and MongoDB. Find the perfect gift for anyone using our intelligent quiz system!

## ✨ Features

- **Smart Gift Quiz**: Answer questions about the recipient to get personalized recommendations
- **AI-Powered Recommendations**: Rule-based algorithm suggests perfect gifts based on relationship, age, interests, and budget
- **Modern UI/UX**: Beautiful, responsive design with TailwindCSS
- **Shopping Cart**: Add items, manage quantities, and proceed to checkout
- **Product Details**: Detailed product pages with image galleries and reviews
- **Category Browsing**: Browse gifts by categories like Electronics, Fashion, Art, etc.
- **Mobile Responsive**: Works perfectly on all devices

## 🚀 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 18** - UI library
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Context API** - State management

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd GiftRecommendationStoreWebApp
```

### 2. Install Dependencies

#### Backend Dependencies
```bash
npm install
```

#### Frontend Dependencies
```bash
cd frontend
npm install
cd ..
```

### 3. Environment Setup

Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/giftstore
NODE_ENV=development
```

### 4. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# For local MongoDB
mongod

# Or use MongoDB Atlas (cloud)
# Update MONGODB_URI in .env file
```

### 5. Run the Application

#### Development Mode (Both Frontend & Backend)
```bash
npm run dev
```

#### Or run separately:

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

### 6. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🎯 How to Use

1. **Start with the Quiz**: Click "Take the Gift Quiz" on the homepage
2. **Answer Questions**: Provide details about the recipient (relationship, age, interests, budget)
3. **Get Recommendations**: View personalized gift suggestions
4. **Browse Products**: Click on any gift to see detailed information
5. **Add to Cart**: Add items to your shopping cart
6. **Checkout**: Review your cart and proceed to checkout

## 🏗️ Project Structure

```
GiftRecommendationStoreWebApp/
├── backend/
│   ├── controllers/
│   │   ├── giftController.js
│   │   └── quizController.js
│   ├── data/
│   │   └── seedData.js
│   ├── models/
│   │   └── GiftModel.js
│   └── routes/
│       ├── giftRoutes.js
│       └── quizRoutes.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── GiftCard.jsx
│   │   ├── context/
│   │   │   └── GiftContext.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Quiz.jsx
│   │   │   ├── Recommendations.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   └── Cart.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── server.js
├── package.json
└── README.md
```

## 🔧 API Endpoints

### Gift Routes
- `GET /api/gifts` - Get all gifts
- `GET /api/gifts/:id` - Get gift by ID
- `GET /api/gifts/category/:category` - Get gifts by category
- `GET /api/gifts/search?q=query` - Search gifts

### Quiz Routes
- `GET /api/quiz/options` - Get quiz options
- `POST /api/quiz/recommend` - Get gift recommendations

## 🎨 Customization

### Adding New Gift Categories
1. Update the `sampleGifts` array in `backend/data/seedData.js`
2. Add new categories to the recommendation logic in `backend/controllers/quizController.js`

### Styling
- Modify `frontend/tailwind.config.js` for theme customization
- Update `frontend/src/index.css` for global styles

### Recommendation Algorithm
- Enhance the recommendation logic in `backend/controllers/quizController.js`
- Add more sophisticated matching criteria

## 🚀 Deployment

### Backend Deployment (Heroku)
1. Create a Heroku app
2. Set environment variables
3. Deploy with Git

### Frontend Deployment (Netlify/Vercel)
1. Build the React app: `npm run build`
2. Deploy the `frontend/build` folder

### Database
- Use MongoDB Atlas for production database
- Update `MONGODB_URI` in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the console for error messages
2. Ensure MongoDB is running
3. Verify all dependencies are installed
4. Check the API endpoints are accessible

## 🎉 Features Roadmap

- [ ] User authentication and accounts
- [ ] Payment gateway integration
- [ ] Advanced AI recommendations
- [ ] Gift wrapping options
- [ ] Wishlist functionality
- [ ] Order tracking
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Product reviews and ratings
- [ ] Social sharing

---

**Happy Gift Shopping! 🎁✨**
