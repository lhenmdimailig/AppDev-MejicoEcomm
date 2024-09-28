const mejicoController = {
  index: (req, res) => {
      res.render('index');
  },
  about: (req, res) => {
    res.render('about');
  },
  contact: (req, res) => {
      res.render('contact');
  },
  products: (req, res) => {
    res.render('products');
}
};

module.exports = mejicoController;