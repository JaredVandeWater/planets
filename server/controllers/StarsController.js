import BaseController from "../utils/BaseController";
import { starsService } from "../services/StarsService";
import { logger } from "../utils/Logger";

export class StarsController extends BaseController {
    constructor() {
        super("api/stars");
        this.router
            .get("", this.getAll)
            .post("", this.create)
            .delete("/:id", this.remove)
            .get("/:id", this.getById)
            .put("/:id", this.edit)
    }

    /**
     * Sends found values to a client by request
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     */
    async getAll(req, res, next) {
        try {
            const stars = await starsService.find()
            return res.send(stars);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Sends found values to a client by request
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     */
    async getById(req, res, next) {
        try {
            const stars = await starsService.findOne({ _id: req.params.id })
            return res.send(stars);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Sends found values to a client by request
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     */
    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await starsService.edit(req.body)
            return res.send(data)
        } catch (error) {
            next(error)
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
            const star = await starsService.create(req.body)
            res.send(star);

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
            let data = await starsService.remove(req.params.id)
            return res.send(data);
        } catch (error) {
            next(error);
        }
    }
}