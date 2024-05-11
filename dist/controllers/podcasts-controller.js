"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilterEpisodes = exports.getListEpisodes = void 0;
const listEpisodes_service_1 = require("../services/listEpisodes-service");
const filterEpisode_service_1 = require("../services/filterEpisode-service");
const status_code_1 = require("../utils/status-code");
// A responsabilidade do controller é controlar as req e res, chamando os serviços necessários para cada um
const getListEpisodes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield (0, listEpisodes_service_1.listEpisodeService)();
    res.writeHead(status_code_1.StatusCode.OK, { "Content-Type": "application/json" });
    res.end(JSON.stringify(content));
});
exports.getListEpisodes = getListEpisodes;
const getFilterEpisodes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield (0, filterEpisode_service_1.serviceFilterEpisodes)(req.url);
    res.writeHead(status_code_1.StatusCode.OK, { "Content-Type": "apllcation/json" });
    res.end(JSON.stringify(content));
});
exports.getFilterEpisodes = getFilterEpisodes;
