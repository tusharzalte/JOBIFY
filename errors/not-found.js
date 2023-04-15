import { StatusCodes } from "http-status-codes"
import CustomAPIERROR from "./custom-api.js"

class NotFoundError extends CustomAPIERROR{
    constructor(message){
        super(message)
        this.statuscode = StatusCodes.NOT_FOUND
    }
}
export default NotFoundError