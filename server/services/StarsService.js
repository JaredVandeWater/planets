import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {

    async create(body) {
        return await dbContext.Stars.create(body)
    }
    async find(query = {}) {
        return await dbContext.Stars.find(query)
    }
    async remove(id) {
        let data = await dbContext.Stars.findOneAndDelete({ _id: id })
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return "Star Deleted"
    }

    async edit(body) {
        let data = await dbContext.Stars.findOneAndUpdate({ _id: body.id }, body, { new: true })
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }
    async findOne(id) {
        let data = await dbContext.Stars.findOne({ _id: id })
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }
}
export const starsService = new StarsService();