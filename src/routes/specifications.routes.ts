import { Router} from "express"
import { request } from "express";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) =>{
  const { name, description } = request.body;
  const createCategoryService = new CreateSpecificationService(
    specificationsRepository
  );
  
  CreateSpecificationService.execute({name, description})
  return response.status(201). send();
  });

export { specificationsRoutes }; 