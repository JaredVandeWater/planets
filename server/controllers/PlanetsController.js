import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService";
import { logger } from "../utils/Logger";

export class PlanetsController extends BaseController {
    constructor() {
        super("api/planets");
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
            const planets = await planetsService.find()
            return res.send(planets);
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
            const planets = await planetsService.findOne({ _id: req.params.id })
            return res.send(planets);
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
            let data = await planetsService.edit(req.body)
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
            const planet = await planetsService.create(req.body)
            res.send(planet);

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
            let data = await planetsService.remove(req.params.id)
            return res.send(data);
        } catch (error) {
            next(error);
        }
    }
}