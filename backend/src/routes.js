import AuthRoutes from "./modules/auth/auth.routes.js";
import UserRoutes from "./modules/user/user.routes.js";
import OrderRoutes from "./modules/orders/order.routes.js";

export default (app) => {
    app.use("/api/orders", OrderRoutes);
    app.use("/api/users", UserRoutes);
    app.use("/api/auth", AuthRoutes);
};