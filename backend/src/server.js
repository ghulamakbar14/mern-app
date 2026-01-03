import "dotenv/config";

import app from "./app.js";
import connectDB from "./config/mongo.js";
import sequelize from "./config/mysql.js";

const startServer = async () => {
  try {
    connectDB();

    await sequelize.authenticate();
    console.log("MySQL connected");

    await sequelize.sync();
    console.log("Sequelize synced");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  } catch (err) {
    console.error("❌ Startup error:", err);
    process.exit(1);
  }
};

startServer();
