import BaseController from "../utils/BaseController";
import { galaxysService } from "../services/GalaxysService";
import { logger } from "../utils/Logger";

export class GalaxysController extends BaseController {
    constructor() {
        super("api/galaxys");
        this.router
            .get("", this.getAll)
            .post("", this.create)
            .delete("/:id", this.remove)
    }

    /**
     * Sends found values to a client by request
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     */
    async getAll(req, res, next) {
        try {
            const galaxys = await galaxysService.find()
            return res.send(galaxys);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Creates a value from request body and returns it
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     */
    async create(req, res, next) {
        try {
            const galaxy = await galaxysService.create(req.body)
            res.send(galaxy);

        } catch (error) {
            next(error);
        }
    }


    /**
 * Creates a value from request body and returns it
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
    async remove(req, res, next) {
        try {
            let data = await galaxysService.remove(req.params.id)
            return res.send(data);
        } catch (error) {
            next(error);
        }
    }
}