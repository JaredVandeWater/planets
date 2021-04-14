import StarSchema from "../models/Star";
import GalaxySchema from "../models/Galaxy";
import PlanetSchema from "../models/Planet";
import mongoose from "mongoose";

class DbContext {
  Stars = mongoose.model("Star", StarSchema);
  Galaxys = mongoose.model("Galaxy", GalaxySchema);
  Planets = mongoose.model("Planet", PlanetSchema);
}

export const dbContext = new DbContext();
