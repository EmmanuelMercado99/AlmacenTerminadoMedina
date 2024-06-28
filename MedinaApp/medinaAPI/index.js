require('dotenv').config();

const cors = require('cors');

const sequelize = require("./database/sequelizeConfig")
const User = require('./database/models/userModel');
const StoreData = require('./database/models/storeDataModel')
const OutHistory = require('./database/models/outHistoryModel')
const RequirementsList = require("./database/models/requirementList")
const ModelMP = require('./database/models/modelMPModel')


const userRoutes = require("./routes/userRoutes")
const storeDataRoutes = require("./routes/storeDataRoutes")
const outHistoryRoutes = require("./routes/outHistoryRoutes")
const requirementsListRoutes = require("./routes/requirementsListRoutes")
const modelsMPRoutes = require("./routes//modelMPRoutes")
const orderXModelRoutes = require("./routes/orderXModelsRoutes")

const express = require("express")
const app = express()



const PORT = process.env.HOST_PORT


app.use(express.json());

app.use(cors())

app.use("/users", userRoutes)
app.use("/store", storeDataRoutes)
app.use("/history", outHistoryRoutes)
app.use("/requirements", requirementsListRoutes)
app.use("/models", modelsMPRoutes)
app.use("/orderxmodel", orderXModelRoutes)

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate()
        console.log("Conexión establecida correctamente");

        await sequelize.sync({ alter: true, logging: false })
        console.log("Modelos sincronizados con la base de datos");

        console.log(`Servidor iniciado en http://localhost:${PORT}`);
    }
    catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
})