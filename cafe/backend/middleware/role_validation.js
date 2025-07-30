export const manager = async(req,res, next)=>{
    const userRole = req.user.role
    if(userRole == 'user'){
        next()
    }else{
        res.json({
            success: false,
            auth: false,
            message: 'You are not user'
        })
    }
}
export const admin = async(req,res, next)=>{
    const userRole = req.user.role
    if(userRole == 'admin'){
        next()
    }else{
        res.json({
            success: false,
            auth: false,
            message: 'You are not admin'
        })
    }
}
export const kasir = async(req,res, next)=>{
    const userRole = req.user.role
    if(userRole == 'kasir'){
        next()
    }else{
        res.json({
            success: false,
            auth: false,
            message: 'You are not admin'
        })
    }
}