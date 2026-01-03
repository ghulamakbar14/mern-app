import { Router } from "express";
import { createOrder, getOrderById, getAllOrders, getOrdersByUserId } from "./order.controller.js";

const router = Router();

router.post("/", createOrder);
router.get("/:id", getOrderById);
router.get("/", getAllOrders);
router.get("/user/:userId", getOrdersByUserId);
export default router;