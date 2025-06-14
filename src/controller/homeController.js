const getHomepage = (req, res) => {
    res.send("hay ndđhi")
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

export default { getHomepage, getHoiDanIT }