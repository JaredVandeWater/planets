import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {

    async create(body) {
        return await dbContext.Planets.create(body)
    }
    async find(query = {}) {
        return await dbContext.Planets.find(query)
    }
    async remove(id) {
        let data = await dbContext.Planets.findOneAndDelete({ _id: id })
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return "Planet Deleted"
    }

    async edit(body) {
        let data = await dbContext.Planets.findOneAndUpdate({ _id: body.id }, body, { new: true })
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }
    async findOne(id) {
        let data = await dbContext.Planets.findOne({ _id: id })
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }
}
export const planetsService = new PlanetsService();