const axios = require('axios')

const memeFun = async (req, res) => {
    try {
        let id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let userName = req.query.username
        let password = req.query.password

        if ( !id || !text0 || !text1 || !userName || !password ) 
            return res.status(401).send ({status: false, error: `required query params missing`})

        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${userName}&password=${password}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ status: true, data: data })
    } catch (err) {
        res.status(500).send({ status: false, error: err.message })
    }
}


module.exports = { memeFun }