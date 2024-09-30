const initDb = require("./initModel");

initDb
  .initModel()
  .then(() => {
    const express = require("express");
    const path = require("path");

    const app = express();

    app.use(
      "/static",
      express.static(path.resolve(__dirname, "frontend", "static"))
    );

    app.get("/*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
    });

    const userRoutes = require("./routes/user.routes");

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use("/api/user", userRoutes);
    app.listen(process.env.PORT || 9000, () =>
      console.log("Server running...")
    );
  })
  .catch((e) => console.log(e));
