import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { authorize } from "../../middlewares/role.middleware.js";

import { create, list } from "./user.controller.js";

const router = Router();

router.post("/", create);
router.get("/", authenticate, authorize("admin"), list);

export default router;