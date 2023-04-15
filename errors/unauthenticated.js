import { StatusCodes } from "http-status-codes"
import CustomAPIERROR from "./custom-api.js"
class Unauthenticatederror extends CustomAPIERROR{
    constructor(message){
        super(message)
        this.statuscode = StatusCodes.UNAUTHORIZED
    }
}

export default Unauthenticatederror