Live Link : determined-snails.surge.sh

# Gadget Heaven

## Project Overview

Gadget Heaven is a modern e-commerce web application built with React, designed for browsing and purchasing the latest gadgets and accessories. The application provides a seamless user experience with intuitive navigation, product filtering, shopping cart functionality, and a wishlist feature. It also includes a statistics dashboard for data visualization and a contact page for user inquiries.

## Features

### Core Functionality
- **Product Browsing**: Explore a wide range of gadgets including laptops, phones, accessories, smartphones, MacBooks, and iPhones.
- **Category Filtering**: Filter products by categories using the left sidebar navigation.
- **Product Details**: View detailed information about individual products.
- **Shopping Cart**: Add products to cart, manage quantities, and proceed to checkout.
- **Wishlist**: Save favorite products for later purchase.
- **Dashboard**: Centralized view for managing cart and wishlist items.
- **Statistics**: Visualize data with interactive charts and graphs.
- **Contact Us**: Dedicated page for user inquiries and support.
- **Error Handling**: Custom 404 error page for invalid routes.

### User Experience
- Responsive design optimized for desktop and mobile devices.
- Smooth navigation with React Router.
- Toast notifications for user feedback.
- Local storage for cart and wishlist persistence.
- Dynamic page titles for better SEO.

## Technology Stack

### Frontend Framework
- **React 19**: Latest version of React for building the user interface.
- **Vite**: Fast build tool and development server.

### Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **DaisyUI**: Component library built on top of Tailwind CSS.

### Routing and State Management
- **React Router DOM**: Client-side routing for single-page application.
- **localforage**: Enhanced local storage for client-side data persistence.

### Data Visualization
- **Recharts**: Composable charting library for React.

### Additional Libraries
- **React Icons**: Popular icon library for React.
- **React Toastify**: Toast notifications for user feedback.
- **match-sorter**: Simple, expected, and deterministic best-match sorting.
- **sort-by**: Utility for sorting arrays of objects.

### Development Tools
- **ESLint**: Linting utility for JavaScript and JSX.
- **Vite Plugin React**: Official React plugin for Vite.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/gadget-heaven.git
   cd gadget-heaven
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Usage

### Navigation
- Use the navbar to navigate between different sections of the application.
- On the home page, explore products by category using the left sidebar.
- Click on product cards to view detailed information.

### Shopping
- Add products to your cart or wishlist from the product details page.
- Access your cart and wishlist from the dashboard.
- Use the statistics page to view data visualizations.

### Development
- Run `npm run build` to build the project for production.
- Run `npm run preview` to preview the production build.
- Run `npm run lint` to check for code quality issues.

## Project Structure

```
src/
├── assets/          # Static assets like images
├── Components/      # Reusable UI components
│   ├── Banner.jsx
│   ├── Card.jsx
│   ├── Cart.jsx
│   ├── Exploregadget.jsx
│   ├── Footer.jsx
│   ├── LeftSidbar.jsx
│   ├── Modal.jsx
│   ├── Navbar.jsx
│   ├── Productdetails.jsx
│   ├── RighSideBar.jsx
│   └── ...
├── Layouts/         # Layout components
├── Pages/           # Page components
│   ├── ContactUs.jsx
│   ├── Dashboard.jsx
│   ├── ErrorPage.jsx
│   ├── Home.jsx
│   └── Statistics.jsx
├── Routes/          # Routing configuration
├── utils/           # Utility functions
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## API and Data

The application uses local JSON files for product data:
- `public/data.json`: Product categories
- `public/products_dummy.json`: Product information

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with React and modern web technologies.
- UI components powered by Tailwind CSS and DaisyUI.
- Icons provided by React Icons.
- Charts created with Recharts.
