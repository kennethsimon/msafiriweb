exports.gallery = (req, res) => {
    res.render('gallery', {header: 'Gallery',title: 'gallery', image: 'https://images.pexels.com/photos/296649/pexels-photo-296649.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'});
}