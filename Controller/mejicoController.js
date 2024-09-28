const mejicoController = {
  index: (req, res) => {
      res.render('index');
  },
  productListing: (req, res) => {
      res.render('productListing');
  },
  productDetails: (req, res) => {
      res.render('productDetails');
  },
  shoppingCart: (req, res) => {
      res.render('shoppingCart');
  },
  checkOut: (req, res) => {
      res.render('checkOut');
  },
  userAccount: (req, res) => {
      res.render('userAccount');
  },
  orderHistory: (req, res) => {
      res.render('orderHistory');
  },
  aboutUs: (req, res) => {
    res.render('aboutUs');
  },
  contactUs: (req, res) => {
      res.render('contactUs');
  },
  blog: (req, res) => {
    res.render('blog');
  }
};

module.exports = mejicoController;