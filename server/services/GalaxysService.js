import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxysService {
    async create(body) {
        return await dbContext.Galaxys.create(body)
    }
    async find(query = {}) {
        return await dbContext.Galaxys.find(query)
    }
    async remove(id) {
        let data = await dbContext.Galaxys.findOneAndDelete({ _id: id })
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return "Galaxy Deleted"
    }
}

export const galaxysService = new GalaxysService();