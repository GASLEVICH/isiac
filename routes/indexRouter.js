const Router = require('express')
const router = new Router()
const contractsRouter = require('./contractsRouter.js')
const depRouter = require('./depRouter')
const executorRouter = require('./executorRouter')
const postRouter = require('./postRouter')
const ptsRouter = require('./ptsRouter')
const pts_categoryRouter = require('./pts_categoryRouter')
const pts_typeRouter = require('./pts_typeRouter')
const repairRouter = require('./repairRouter')
const tiket_ptsRouter = require('./tiket_ptsRouter')
const tiket_resultRouter = require('./tiket_resultRouter')
const userRouter = require('./userRouter')
const oaRouter = require('./oaRouter')
const spoRouter = require('./spoRouter')
const oa_spoRouter = require('./oa_spoRouter')
const causeRouter = require('./causeRouter')
const conclusionRouter = require('./conclusionRouter')
const utilRouter = require('./utilRouter')
const result_remarkRouter = require('./result_remarkRouter')
const authorRouter = require('./authorRouter')
const contractorRouter = require('./contractorRouter')
const ownerRouter = require('./ownerRouter')
const predRouter = require('./predRouter')
const tiket_categoryRouter = require('./tiket_categoryRouter')
const tiket_characterRouter = require('./tiket_characterRouter')
const tiket_pts_stateRouter = require('./tiket_pts_stateRouter')
const tiket_typeRouter = require('./tiket_typeRouter')





router.use('/user', userRouter)
router.use('/tiket_result', tiket_resultRouter)
router.use('/tiket_pts', tiket_ptsRouter)
router.use('/repair', repairRouter)
router.use('/pts', ptsRouter)
router.use('/ptsCat', pts_categoryRouter)
router.use('/ptsType', pts_typeRouter)
router.use('/post', postRouter)
router.use('/dep', depRouter)
router.use('/contracts', contractsRouter)
router.use('/executor', executorRouter)
router.use('/oa', oaRouter)
router.use('/spo', spoRouter)
router.use('/oa_spo', oa_spoRouter)
router.use('/cause', causeRouter)
router.use('/conclusion', conclusionRouter)
router.use('/util', utilRouter)
router.use('/result_remark', result_remarkRouter)
router.use('/author', authorRouter)
router.use('/contractor', contractorRouter)
router.use('/owner', ownerRouter)
router.use('/pred', predRouter)
router.use('/tiket_category', tiket_categoryRouter)
router.use('/tiket_character', tiket_characterRouter)
router.use('/tiket_pts_state', tiket_pts_stateRouter)
router.use('/tiket_type', tiket_typeRouter)

module.exports = router