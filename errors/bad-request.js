import { StatusCodes } from "http-status-codes"
import CustomAPIERROR from "./custom-api.js"
class BadRequestError extends CustomAPIERROR{
    constructor(message){
        super(message)
        this.statuscode = StatusCodes.BAD_REQUEST
    }
}

export default BadRequestError